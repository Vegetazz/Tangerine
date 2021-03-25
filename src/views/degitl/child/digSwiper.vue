<template>
  <div>
    <van-swipe class="digSwiper" :stop-propagation='false'>
      <van-swipe-item class="digSwiperItem" v-for="(item, index) in swiperImgLink" :key='index' :height = "screenWidth" >
        <div >
          <img :src="item.src" alt="">
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>

import { Swipe, SwipeItem } from 'vant';
export default {
  components: {
    [Swipe.name]:Swipe,
    [SwipeItem.name]:SwipeItem,
    screenWidth: 0,
  },
  props: {
    swiperImgLink: {
      type:Array,
      default: []
    }
  },
  created() {
    // console.log(this.swiperImgLink[0].src);
    this.screenWidth =  document.body.offsetWidth
    // console.log(this.screenWidth);
  }
}
</script>

<style>
.digSwiper {
  width: 100%;
  background-color: #fff;
}
.digSwiperItem {
  width: 100%;
  /* text-align: center; */
}
.digSwiper img{
  /* width: 100%;  */
  height: 375px;
  /* height: 100%; */
  display: block;
  margin: 0 auto;
}

</style>