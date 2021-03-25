<template>
  <div class="digPrice">
    <div class="mainDigPrice">
      <span class="digRMB">￥</span>
      <div class="digPriceNum">
        <span>{{ goodPrice }}</span>
      </div>
    </div>
    <div class="digIntroduce">
      <div class="goodIntroduce">
        <span>{{ introduce }}</span>
      </div>
      <div class="selterHelp">
        <span><img src="~assets/img/degitl/帮我选.png" alt="" /></span>
        <span>帮我选</span>
      </div>
    </div>
    <div class="goodPostage">
      <div class="postage">{{ postage }}</div>
      <div class="postPlace">{{ place }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DigPrice",
  data() {
    return {
      goodPrice: 0,
      postage: "",
      introduce: "",
      place: "",
    };
  },
  created() {},
  mounted() {
    this.goodPrice = Number(this.goodBesMes.price).toFixed(2);
    this.introduce = this.goodBesMes.introduce;
    if (this.goodBesMes.postage === -1) {
      this.postage = "免邮费";
    } else {
      this.postage = this.goodDigPostage;
    }
    // console.log(this.goodBesMes);
    this.place = this.goodBesMes.place;
  },
  props: {
    goodBesMes: {
      type: Object,
      default: {},
    },
  },
  methods: {},
};
</script>

<style scoped>
.digPrice {
  width: 100%;
  background-color: #fff;
  /* padding: 3.5% 3.5% 0 3.5%; */
}
.mainDigPrice {
  width: 90%;
  display: flex;
  font-weight: 500;
  margin: 0 3.5% 0 3.5%;
  padding-top: 0.7rem;
}
.digRMB {
  font-size: 0.72rem;
  /* padding-top: 0.2rem; */
  line-height: 1.5rem;
}
.digPriceNum {
  font-size: 2.3rem;
}
.digIntroduce {
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.goodIntroduce {
  width: 75%;
  margin: 0 4%;
  flex-grow: 1;
}
.goodIntroduce span {
  font-size: 15px;
  line-height: 22px;
}
.selterHelp {
  /* flex: 1; */
  width: 20%;
  height: 1.5rem;
  padding-left: 0.6rem;
  border-radius: 0.7rem 0 0 0.7rem;
  color: rgb(158, 158, 158);
  font-size: 0.6rem;
  display: flex;
  background-color: rgb(245, 245, 245);
  align-items: center;
}
.selterHelp img {
  width: 0.8rem;
  display: block;
  margin-right: 0.2rem;
}
.goodPostage {
  height: 2.5rem;
  margin: 0 4%;
  font-size: 0.6rem;
  color: rgb(158, 158, 158);
  display: flex;
  line-height: 2.5rem;
}
.postage {
  flex: 1;
}
.postPlace{
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
</style>