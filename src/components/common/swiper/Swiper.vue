<template>
  <div class="outsized">
    <!-- {{swiperlink}} -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :height="getheight" :stop-propagation='false'>
      <van-swipe-item v-for="(item,index) in swiperlink" :key="index">
        <div class="swiperimage">
          <a :href="item.link">
            <img :src="item.image" alt="" class="screen-swiper-img" @load="imgIsLoad">
          </a>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template> 
<script>
import { Toast } from "vant";
import { Swipe, SwipeItem } from 'vant';
// import bannerdata from "../assets/swiperlink.json";
export default {
  components: {
    [Swipe.name]:Swipe,
    [SwipeItem.name]:SwipeItem
  },
  methods: {
    onChange(index) {
      Toast("当前 Swipe 索引：" + index);
    },
    setSwiperHeight() {
      // let img_height = document.getElementsByClassName("screen-swiper-img");
      // let img_scr_writh = img_height[0].offsetHeight;
      // console.log(img_scr_writh);
      // this.swiper_img_height=img_scr_writh;
      // return img_scr_writh;
    }
  },
  data() {
    return {
      swiper_img_height: 500,
      isLoad: false
    };
  },
  methods: {

    imgIsLoad() {//是否加载便于判断高度
      if(!this.isLoad){
        // console.log("jiazaiwanl ");
        this.$bus.$emit("swiperImgIsLoad");
        this.isLoad=true//让这个函数只调用一次
      }
    }
  },
  props: {
    swiperlink: {
      type: Array,
      default(){
        return [{image:"https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg"}]
      },
      required: true
    },
    // heights: {
    //   type: String,
    //   default: "196",
    //   required: false
    // }
  },
  computed: {
    // return
    getheight() {
      let screen_writh = document.body.clientWidth;

      return (screen_writh/750)*390
    }
  },
  created () {
    // console.log(this.heights);
    // console.log(this.swiperlink);
  },
  mounted() {
    
    // console.log(this.heights);
    // console.log(this.swiperlink);
  }
};
// let swiper = document.getElementsByClassName("my-swipe")
// let
</script>
<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #fff;
}
.swiperimage img{
  width: 100%;
}
</style>