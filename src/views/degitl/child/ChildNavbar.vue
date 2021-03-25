<template>
  <navbar class="degitlNavbar">
      <div slot="left" class="backLastPage" @click="digBackLast">
        <img src="~assets/img/degitl/返回.svg" alt="">
      </div>
      <div slot="center" class="digNavTitle">
        <div v-for="(item, index) in titles" :key = item :class="{active:index===currentNum}" @click="currectItem(index) ">
          {{item}}
        </div>
      </div>
    </navbar>
</template>

<script>
import navbar from "components/common/navbar/Navbar.vue"
export default {
  components: {
    navbar
  },
  data() {
    return {
      titles: ["商品","评论","参数","推荐"],
      currentNum: 0,
    }
  },
  methods: {
    currectItem(index) {
      this.currentNum = index,
      this.$emit("curChange",index)
    },
    digBackLast() {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
.degitlNavbar {
  height: 2.5rem;
  border-bottom: 2px solid #f6f6f6;
  background-color: #fff;
}

.backLastPage img{
  height: 1.5rem;
  margin-top: 0.5rem;
}
.digNavTitle {
  display: flex;
  justify-content: space-around;
}
.active {
  color: #ff8198;
}
</style>