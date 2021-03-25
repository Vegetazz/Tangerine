<template>
  <div class="tab-bar-item" @click="itemclick()">
    <div v-if="!isactivity">
      <slot name="tabbar-item-img"></slot>
    </div>
    <div v-else>
      <slot name="tabber-item-imgactivity"></slot>
    </div>
    <div :class="{ activitttext: isactivity }" :style="activitystyle">
      <slot name="tabbar-item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "tabbatitem",
  props: {
    path: String,
    activitycolor: {
      type: String,
      default: "red",
      require: false,
    },
  },
  data() {
    return {
      // isactivity: false,
    };
  },
  computed: {
    isactivity() {
      // console.log('this.$route.path:'+this.$route.path);
      // console.log(this.path);
      // return this.$route.path.indexOf(this.path) !== -1
      return this.$route.path == this.path;
    },
    activitystyle() {
      return this.isactivity ? { color: this.activitycolor } : {};
    },
  },
  methods: {
    itemclick() {
      if(this.path!=this.$route.path){
        this.$router.replace(this.path);
      }
    },
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  /* height: 49px; */
  height: 3rem;
  font-size: 0.875rem;
}
.tab-bar-item img {
  height: 25px;
  width: 25px;
  margin-top: 3px;
  margin-bottom: 2px;
  vertical-align: middle;
}
.activitttext {
  color: #e89abe;
}
</style>