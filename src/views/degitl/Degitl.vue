<template>
  <div class="degitl">
    <child-navbar @curChange="tabChange($event)" ref="childNav"/>
    <!-- <div>{{$router.params.iid}}</div> -->
    <!-- <div>{{$store.state.cartList[0]}}</div> -->
    <scroll
      :probeType="3"
      :pullUpLoad="false"
      :isObserve="true"
      class="content"
      ref="scroll"
      @scroll="scrollPos"
    >
      <dig-swiper
        :swiperImgLink="goodMesDig.data.swiper"
        class="digSwiper"
      ></dig-swiper>
      <dig-price :goodBesMes="goodMesDig.data.goodBesMes"></dig-price>
      <main-deg-tab
        :goodTabMes="goodTabMes"
        :chooseMes="chooseMes"
        @showDiscount="showDiscount()"
        @showPromice="showPromice()"
        @showChooseSize="showChooseSize()"
      >
      </main-deg-tab>
      <!-- 评价 -->
      <evaluate
        :evaluateMes="goodMesDig.data.evaluate"
        class="evaluate"
        ref="evaluate"
      ></evaluate>
      <!-- 店铺 -->
      <shop-card :shopMes="goodMesDig.data.shop" class="shopCard"></shop-card>
      <!-- 商品详情 -->
      <dig-picture
        :digAlbum="goodMesDig.data.goodimgs"
        @imgIsLoad="refreTall()"
        class="digPicture"
        ref="digPic"
      ></dig-picture>
      <!-- 参数 -->
      <lable-list
        :albumMes="goodMesDig.data.advantage"
        class="lableList"
        ref="lableList"
      ></lable-list>
      <!-- 推荐 -->
      <recommend
        :recGoods="goodMesDig.data.recommend"
        class="recommend"
        ref="recommend"
      ></recommend>
      <div class="textbox">已经到底了 = =</div>
    </scroll>

    <bottom-bar class="bottomBar" @inputCart="putCart()"></bottom-bar>

    <!-- 弹出框 -->
    <discount-box
      ref="discountBox"
      :discountMes="goodMesDig.data.discount"
    ></discount-box>
    <promice-box
      ref="promiceBox"
      :promiceMes="goodMesDig.data.promice"
    ></promice-box>
    <cho-size-box
      ref="choSizeBox"
      :goodMes="goodMesDig.data.size"
      :goodPrice="goodMesDig.data.goodBesMes.price"
      @choChang="choChange($event)"
    >
    </cho-size-box>
  </div>
</template>
<script>
import ChildNavbar from "./child/ChildNavbar.vue";

import goodMesDig from "network/goodDegitl";

import DigSwiper from "./child/digSwiper.vue";
import DigPrice from "./child/DigPrice.vue";

import DiscountBox from "./child/threeTab/DiscountBox";
import PromiceBox from "./child/threeTab/PromiceBox.vue";
import ChoSizeBox from "./child/threeTab/ChoSizeBox.vue";

import Scroll from "../../components/common/scroll/Scroll.vue";
import MainDegTab from "./child/threeTab/MainDegTab.vue";
import Evaluate from "./child/Evaluate.vue";
import ShopCard from "./child/ShopCard.vue";
import DigPicture from "./child/DigPicture.vue";
import LableList from "./LableList.vue";
import Recommend from "./child/Recommend.vue";
import BottomBar from "./child/BottomBar.vue";

export default {
  name: "Degitl",
  components: {
    ChildNavbar,
    DigSwiper,
    DigPrice,
    DiscountBox,
    PromiceBox,
    Scroll,
    MainDegTab,
    ChoSizeBox,
    Evaluate,
    ShopCard,
    DigPicture,
    LableList,
    Recommend,
    BottomBar,
  },
  data() {
    return {
      goodMesDig: goodMesDig,
      iid: null,
      themeTopYer: [0],
      getThemeTopY: null,
      tabSec: 0,
      goodTabMes: {
        discountMes: goodMesDig.data.discount,
        promiceMes: goodMesDig.data.promice,
      },
      chooseMes: {
        selectedTitle: "请选择:",
        selectedItem: "颜色 尺寸",
        isSelectActive: false,
      },
    };
  },
  created() {
    // this.getThemeTopY = debouce(() => {
    //   this.themeTopYer = [];
    //   this.themeTopYer.push(0);
    //   this.themeTopYer.push(this.$refs.lableList.$el.offsetTop-40);
    //   this.themeTopYer.push(this.$refs.evaluate.$el.offsetTop-40);
    //   this.themeTopYer.push(this.$refs.recommend.$el.offsetTop-40);
    //   console.log(this.themeTopYer);
      // console.log(this.themeTopYer);
      // this.themeTopYs();
    // },5);
  },
  mounted() {
    // console.log("fresh");
    // console.log(this.$router.params.iid);
    // console.log(this.$route.query.iid);
    // console.log(this.$store.cartList);
    this.iid=this.$route.query.iid;
  },
  methods: {
    showDiscount() {
      this.$refs.discountBox.showBox();
    },
    showPromice() {
      this.$refs.promiceBox.showBox();
    },
    showChooseSize() {
      this.$refs.choSizeBox.showBox();
    },
    choChange(tabData) {
      this.chooseMes.selectedTitle = tabData.selectedTitle;
      this.chooseMes.selectedItem = tabData.selectedItem;
      this.chooseMes.isSelectActive = tabData.isSelectActive;
    },
    refreTall() {
      // 防抖函数显示未定义...所以不输出..让他抖
      this.themeTopYer = [];
      this.themeTopYer.push(0);
      this.themeTopYer.push(this.$refs.evaluate.$el.offsetTop-40);
      this.themeTopYer.push(this.$refs.lableList.$el.offsetTop-40);
      
      this.themeTopYer.push(this.$refs.recommend.$el.offsetTop-40);
    },
    tabChange(index) {
      this.tabSec=index;
      this.$refs.scroll.backTop(0, -this.themeTopYer[index], 200)
    },
    scrollPos(position) {
      // console.log(position);
      const positionY = -position.y;
      if(positionY>=this.themeTopYer[1]&&(positionY<this.themeTopYer[2])){
        this.$refs.childNav.currentNum=1;
      }else if((positionY>=this.themeTopYer[2])&&(positionY<this.themeTopYer[3])){
        this.$refs.childNav.currentNum=2;
      }else if(positionY>=this.themeTopYer[3]) {
        this.$refs.childNav.currentNum=3;
      }else if(positionY<this.themeTopYer[1]){ 
        this.$refs.childNav.currentNum=0;
      }
    },
    putCart() {
      // console.log("tianj");
      const product = {};
      product.img = goodMesDig.data.size.color[0].imgLink;
      product.intd = goodMesDig.data.goodBesMes.introduce;
      product.price = goodMesDig.data.goodBesMes.price;
      product.iid = this.iid;
      // this.$store.commit("addCart", product);
      this.$store.dispatch("addCart", product);
    }
  }
  
};
</script>

<style scoped>
.degitl {
  position: relative;
  z-index: 9;
  background-color: #f0f0f0;
}
/* 滚动组件 */
.content {
  height: calc(100vh - 3.5rem - 2rem);
}
.digSwiper {
  /* border-bottom: 1px solid black; */
  border-bottom: 1px solid #f6f6f6;
}
.textbox {
  width: 100%;
  height: 2rem;
  margin-top: 1rem;
  /* background-color: #eaeaea; */
  text-align: center;
}
.evaluate {
  margin-top: 0.7rem;
  padding: 0 0.8rem;
  /* height: 5rem; */
  background-color: #fff;
}
.shopCard {
  margin-top: 0.7rem;
  background-color: #fff;
}
.digPicture {
  background-color: #fff;
}
.lableList {
  background-color: #fff;
}
.recommend {
  background-color: #fff;
}
.bottomBar {
  position: fixed;
  bottom: 0;
  background-color: #fff;
  z-index: 9;
}
</style>