<template>
  <div class="recommend-body">
    <div class="recommend-content">
      <div class="recommend-content-item" v-for="(item, index) in recGoods" :key="index">
        <a :href="item.goodlink">
          <img :src="item.goodimglink" alt="" class="recommend-content-item-img">
          <div class="recommend-content-item-mes">
            <div class="recommend-content-item-interduck">{{item.goodtitle}}</div>
            <div class="recommend-content-item-price">{{item.goodprice}}</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommend",
  props: {
    recGoods: {
      type: Array,
      default: () => []//默认必须以函数返回
    }
  },
  mounted() {
    // console.log(this.recGoods);
  }
}
</script>

<style>
.recommend-content {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.recommend-content-item {
  width: 30%;
  margin-bottom: 1rem;
}
.recommend-content-item-img {
  width: 100%;
}
.recommend-content-item-interduck {
  font-size: 0.8rem;
  color: black;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis; 
  margin-bottom: 0.5rem;
}
.recommend-content-item-price {
  font-size: 0.6rem;
}
</style>