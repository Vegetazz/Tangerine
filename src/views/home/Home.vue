<template>
  <div id="home">
    <navbar class="navbarbgc">
      <!-- <div slot="left"></div> -->
      <div slot="center">主页</div>
      <!-- <div slot="right"></div> -->
    </navbar>
    <!-- <button @click="testclick"></button> -->
    <div class="tab-control-top">
      <tab-contorl
        :titles="['流行', '新款', '精选']"
        ref="tabContorlfeck"
        @tabClick="tabClick"
        v-show="isTabFixed"
      ></tab-contorl>
    </div>
    <!-- <div style="width:100%;height:44px"></div> -->
    <scroll
      class="content"
      ref="scroll"
      @scroll="controlBack"
      :probeType="3"
      :pullUpLoad="true"
      :isObserve="false"
      @loadData="updataGoodData"
      
    >
      <!-- 轮播图 -->
      <mainswiper class="mainswiper" ref="mainSwiper"></mainswiper>
      <!--四个主题 -->
      <recommend-view :recommendLink="recommendLink"></recommend-view>
      <!--十五个专卖 -->
      <future-view></future-view>
      <!-- <van-sticky :offset-top="44"> -->
      <tab-contorl
        :titles="['流行', '新款', '精选']"
        class="tab-control"
        @tabClick="tabClick"
        ref="tabContorl"
        v-show="!isTabFixed"
      ></tab-contorl>
      <!-- </van-sticky> -->
      <goods-list :goods="giveGoodMes" class="goodsList" />
      <!-- 不知道为啥会多最后两个商品无法完全显示,多加一个空盒子顶出来 -->
      <div style="width: 100%; height: 2.5rem"></div>
    </scroll>
    <backtop @click.native="backTop" v-show="showBackTop"></backtop>
  </div>
</template>

<script>
import Navbar from "../../components/common/navbar/Navbar.vue";
import Mainswiper from "./child/Mainswiper.vue";
import { getHomeMultiData, getHomeGoods } from "network/home.js";
import RecommendView from "./child/RecommendView.vue";
import FutureView from "./child/FutureView.vue";
import TabContorl from "../../components/content/tabControl/TabContorl.vue";
import GoodsList from "../../components/content/goods/GoodsList.vue";

import homePageGoodsMes from "network/homePageGood";
import Scroll from "../../components/common/scroll/Scroll.vue";
import { Sticky } from "vant";
import { debounce } from "common/utils/utils.js";
import Backtop from "../../components/content/backTop/Backtop.vue";
// import BScroll from "better-scroll"

export default {
  name: "Home",
  components: {
    Navbar,
    Mainswiper,
    RecommendView,
    FutureView,
    TabContorl,
    GoodsList,
    Scroll,
    Backtop,
    [Sticky.name]: Sticky,
  },
  data() {
    return {
      recommendLink: [],
      goodData: homePageGoodsMes,
      freshNumber: 10,
      currentType: "pops",
      scroll: null,
      showBackTop: false,
      // swiperOffset: 0,
      tabconOffset: 0,
      isTabFixed: false,
      goods: {
        pops: { page: 0, list: [] ,leaveTop: 0},
        newd: { page: 0, list: [] ,leaveTop: 0},
        selld: { page: 0, list: [] ,leaveTop: 0},
      },
    };
  },
  created() {
    this.getHomeMultiData(), this.getHomeGoodsData("pops");
    this.getHomeGoodsData("newd");
    this.getHomeGoodsData("selld");
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 5);//重新计算高度图片加载延时
    this.$bus.$on("itemImgLoadFin", () => {
      //接受图片加载的事件总线
      // console.log("123");
      refresh();
      // this.$refs.scroll.refresh()
    });
    this.$bus.$on("swiperImgIsLoad",()=> {
      this.tabconOffset = this.$refs.tabContorl.$el.offsetTop
      
      // console.log(this.tabconOffset);
    })
  },
  // mounted() {
  //   this.scroll = new BScroll(document.querySelector(".wispper"),{
  //       disableMouse: true,
  //       disableTouch: true
  //   })
  // },
  methods: {
    /**
     * 事件监听
     */
    tabClick(index) {
      switch (index) {
        case 0:
          {
            this.currentType = "pops";
          }
          break;
        case 1:
          {
            this.currentType = "newd";
          }
          break;
        case 2:
          {
            this.currentType = "selld";
          }
          break;
      }
      this.$refs.tabContorlfeck.currentindex=index
      this.$refs.tabContorl.currentindex=index
      setTimeout(() => {
        this.$refs.scroll.refresh()
      }, 100);
    },
    backTop() {
      // this.scroll

      this.$refs.scroll.backTop(0, 0, 400);
    },
    controlBack(position) {
      // console.log(position);
      if (-position.y > 1000) {
        this.showBackTop = true;
      } else {
        this.showBackTop = false;
      }
      this.isTabFixed = -(position).y > (this.tabconOffset-44)
      // console.log(this.isTabFixed);
    },
    updataGoodData() {
      this.getHomeGoodsData(this.currentType);
      // this.getHomeGoodsData("pops");
      // this.getHomeGoodsData("newd");
      // this.getHomeGoodsData("selld");
      this.$refs.scroll.finishPullUp();
    },
    testclick() {
      console.log("is click");
      this.$router.push('/degtil');
    },
    // swiperLoader() {
    //   console.log("123");
    //   console.log(this.$refs.mainSwiper.$el.offSetTop);
    // },
    /**
     * 网络请求
     */
    getHomeMultiData() {
      getHomeMultiData().then((res) => {
        this.recommendLink = res.data.data.recommend.list;
      });
    },
    getHomeGoodsData(type) {
      //从json文件取商品基本信息
      // const page = this.goods[type].page + 1;
      let nowGoodsnumber = this.goods[type].page * this.freshNumber;
      // console.log(nowGoodsnumber);
      for (let n = 0; n < this.freshNumber; n++) {
        // this.goods[type].list.push(...res)//axios
        // console.log(this.goodData[type][nowGoodsnumber + n]);
        if((this.goodData[type][nowGoodsnumber + n])!=null)
          this.goods[type].list.push(this.goodData[type][nowGoodsnumber + n]);
      }
      this.goods[type].page++;
      // console.log(this.goods[type].list[2]);
    },
    /**
     * 服务器延时
     */
  },
  computed: {
    giveGoodMes() {
      return this.goods[this.currentType].list;
    },
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
  /* width: 100vw; */
  /* padding-top: 44px; */
  position: relative;
  top: 0;
  left: 0;
  touch-action: none;
}
.navbarbgc {
  background-color: var(--color-high-text);
  color: aliceblue;
  font-size: 18px;
  font-weight: 800;
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9; */
}
/* .content {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
} */
.tab-control-top {
  position: relative;
  /* bottom: 44px; */
  /* top: 44px; */
  /* z-index: 7; */
}
.content {
  height: calc(100% - 93px);
  overflow: hidden;
  /* margin-top: 44px; */
}
</style>