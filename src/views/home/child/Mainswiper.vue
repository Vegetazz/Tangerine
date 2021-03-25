<template>
  <div>
    <swiper :swiperlink="banner" ref="mainSwiperBody"></swiper>
  </div>
</template>

<script>
import Swiper from "components/common/swiper/Swiper.vue";
import { getHomeMultiData } from "network/home.js";
export default {
  components: {
    Swiper,
  },
  data() {
    return {
      banner: [],
    };
  },
  methods: {
    // setSwiperHeighter() {
    //   this.$refs.mainSwiperBody.setSwiperHeight();
    // }
  },
  created() {
    getHomeMultiData().then((res) => {
      // console.log(res);
      this.banner = res.data.data.banner.list;
      // console.log(res.data.data.banner.list);
      // console.log(this.banner);
    });
  },
  computed: {
    getbanner() {
      return this.banner;
    },
  },
   mounted() {
    //  this.setSwiperHeighter();
    //  this.$refs.mainSwiperBody.setSwiperHeight();
    // console.log(this.heights);
    // console.log(this.swiperlink);
  }
};
</script>

<style>
</style>