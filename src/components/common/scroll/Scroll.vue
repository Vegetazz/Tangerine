<template>
  <div class="wispper" ref="wispper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: {
        return: 0,
      },
    },
    pullUpLoad: {
      type: Boolean,
      default: true,
    },
    isObserve: {
      type:Boolean,
      default: false
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wispper, {
      // probeType: true,
      // eventPassthrough: "horizontal",
      // scrollX: true,
      click: true,
      observeImage: this.isObserve,//可以动态计算加载图片高度,可以直接解决滑动不流畅问题
      // observeImage
      probeType: this.probeType, //是否监听滚动条高度
      pullUpLoad: this.pullUpLoad, //上拉加载
      // stopPropagation: true
    });
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", (position) => {
        // console.log(position);
        this.$emit("scroll", position);
      });
    }
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        // console.log(this.pullUpLoad);
        this.$emit("loadData");
      });
    }

    // this.scroll.refresh()
  },
  methods: {
    backTop(x, y, time = 500) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      // console.log("finish");
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      // console.log("123");
      this.scroll && this.scroll.refresh();
    },
  },
};
</script>

<style scoped>
.wispper {
  overflow: hidden;
}
</style>