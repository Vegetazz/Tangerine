<template>
  <div class="bottomBar-body">
    <div class="bottomBar-service">
      <img src="~assets/img/degitl/店铺.svg" alt="" class="bottomBar-icon">
      <div>店铺</div>
    </div>
    <div class="bottomBar-service">
      <img src="~assets/img/degitl/客服.svg" alt="" class="bottomBar-icon">
      <div>客服</div>
    </div>
    <div class="bottomBar-service">
      <img src="~assets/img/degitl/收藏.svg" alt="" class="bottomBar-icon">
      <div>收藏</div>
    </div>
    <div class="shoppingCart" @click="inputCart()">加入购物车</div>
    <div class="buyNow">立即购买</div>
  </div>
</template>

<script>
export default {
  methods: {
    inputCart() {
      // console.log("cart");
      this.$emit("inputCart");
    }
  }
}
</script>

<style scoped>
.bottomBar-body {
  width: 100%;
  height: 3rem;
  display: flex;
  border-top: 2px solid #f6f6f6;
  /* background-color: black; */
}
.bottomBar-service{
  width: 3.5rem;
  text-align: center;
  font-size: 0.7rem;
  border-right: 2px solid #f6f6f6;
  padding-top: 0.3rem;
  flex-grow: 0;
}
.bottomBar-icon {
  width: 1.2rem;
}
.bottomBar-service:nth-child(2) {
  color: #f55888;
}

.shoppingCart {
  color: #f55888;
  background-color: #ffe6e8;
  flex-grow: 1;
  font-size: 0.8rem;
  text-align: center;
  line-height: 3rem;
}
.buyNow {
  color: #fff;
  background: linear-gradient(90deg,#ff5777,#ff468f);
  flex-grow: 1;
  font-size: 0.8rem;
  text-align: center;
  line-height: 3rem;
}
</style>