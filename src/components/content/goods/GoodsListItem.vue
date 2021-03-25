<template>
  <div class="goodsItem" v-if="showGoodMes">
    <!-- {{goodMes}} -->
    <!-- <a :href="goodMes.goodlink"> -->
    <div @click="togoodDegitl(goodMes)">
      <!-- <img
        :src="goodMes.imgpath"
        alt=""
        class="goodsItemImg"
        @load="imgLoadFin"
      /> -->
      <!-- 图片懒加载 -->
       <img
        v-lazy="goodMes.imgpath"
        alt=""
        class="goodsItemImg"
        @load="imgLoadFin"
      />
      <div>
        <div class="goodIntroduce">{{ goodMes.gooddetails }}</div>
        <div class="goodmode">
          <p class="goodPrice">{{ goodMes.goodprice }}</p>
          <!-- <div > -->
          <img
            src="~assets/img/common/collect.svg"
            alt=""
            class="goodCollectionImg"
          />
          <p class="goodCollection">{{ goodMes.goodsaled }}</p>
        </div>
      </div>
    </div>
    <!-- </a> -->
  </div>
</template>

<script>
export default {
  name: "goodListItem",
  props: {
    goodMes: {
      type: Object,
      default() {
        return {};
      },
    },
    goodIndex: {
      type: Number,
      default() {
        return 0;
      },
    },
    goodColumn: {
      type: Number,
      default() {
        return 0;
      },
    },
  },
  computed: {
    showGoodMes() {
      // if((this.goodColumn)%this.goodIndex===this.){
      //   return true
      // }else{
      //   return false
      // }
      return this.goodIndex % 2 === this.goodColumn;
    },
  },
  methods: {
    imgLoadFin() {
      this.$bus.$emit("itemImgLoadFin");
      // console.log(this.$bus)
    },
    togoodDegitl(goodMes) {
      // console.log(this.path);
      // console.log("yijing dian le ");
      // this.$router.push('/degtil');
      // this.$router.push('/degitl')
      // this.$router.push('/degitl/'+ "iid=100235")
      this.$router.push({ path: '/degitl/', query: { iid: "100233" } });//query传值
    },
  },
};
</script>

<style scoped>
.goodsItem {
  width: 100%;
  background-color: #fff;
  border-radius: 0.3rem;
  margin-top: 0.45rem;
}
.goodsItemImg {
  width: 100%;
  border-radius: 0.3rem 0.3rem 0 0;
}
.goodIntroduce {
  width: 94%;
  height: 2rem;
  /* max-height: 0.73rem; */
  margin: 0 auto;
  font-size: 0.6rem;
  line-height: 1rem;
  color: #333;
  /* padding: 0.1rem 0.4rem; */
  margin: 0.25rem 0.25rem 0.4rem 0.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  /* word-break: break-all;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden; */
}
/* .goodIntroduce span { */
/* word-wrap: break-word; */
/* overflow: hidden; */
/* } */
.goodmode {
  width: 90%;
  margin: 0 auto;
  /* clear: both; */
  overflow: auto;
  margin-bottom: 0.4rem;
  /* font-family: "Helvetica Neue","Hiragino Sans GB W3","Hiragino Sans GB","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif; */
}
.goodPrice {
  font-size: 1rem;
  font-weight: 550;
  color: black;
  float: left;
  /* font-family: "Helvetica Neue","Hiragino Sans GB W3","Hiragino Sans GB","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif; */
}
.goodCollection {
  font-size: 0.7rem;
  float: right;
  /* clear: both; */
}
.goodCollectionImg {
  margin-left: 0.2rem;
  width: 0.8rem;
  float: right;
  user-select: none;
}
</style>