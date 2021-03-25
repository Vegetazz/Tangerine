<template>
  <div class="evaluate">
    <div class="evaluate-title">
      <span class="evaluate-title-saleandeva">卖家评价{{evaluateMes.number}}|销售{{evaluateMes.salesvolume}}</span>
      <span class="evaluate-title-go">
        <img src="~assets/img/degitl/到达.svg" alt="">
      </span>
    </div>
    <div class="evaluate-content">
      <div class="evaluate-content-item" v-for="item in evaluateMes.user" :key="item.username">
        <div class="evaluate-content-item-userMes">
          <img :src="item.userhead" alt="">
          <div>{{item.username}}</div>
        </div>
        <div class="evaluate-content-item-text">{{item.text}}</div>
        <div class="evaluate-content-item-time">{{item.time}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "evaluate",
  components: {

  },
  data() {
    return {

    }
  },
  props: {
    evaluateMes: {
      type: Object,
      default: {}
    }
  },
  mounted() {
    // console.log(this.evaluateMes);
  }
}
</script>

<style>
.evaluate-title {
  height: 2.5rem;
  font-size: 0.6rem;
  color: #8f8f8f;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.evaluate-title-go img{
  height: 1.2rem;
  display: block;
}


.evaluate-content-item {
  /* margin-top: 1rem; */
  /* padding: 1rem 0; */
  padding-top: 0.4rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #8f8f8f;
}
.evaluate-content-item:last-child {
  border: 0;
}
.evaluate-content-item-userMes {
  font-size: 0.8rem;
  display: flex;
  align-items: flex-end;
  margin-bottom: 0.4rem;
}
.evaluate-content-item-userMes img {
  width: 2rem;
  display: block;
  border-radius: 50%;
  margin-right: 0.7rem;
}
.evaluate-content-item-text {
  font-size: 0.8rem;
  color: #585858;
  line-height: 2rem;
}
.evaluate-content-item-time {
  font-size: 0.5rem;
  color: #8f8f8f;
}
</style>