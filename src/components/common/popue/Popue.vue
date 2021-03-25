<template>
  <div>
    <van-popup v-model="show" :position="position" :closeable="closeable" :close-icon-position="iconPosition">
      <slot></slot>
    </van-popup>
  </div>
</template>

<script>
import { Popup } from 'vant';
export default {
  name: "Popue",
  components: {
    [Popup.name]:Popup
  },
  data() {
    return{
      show: false
    }
  },
  props: {
    showit: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: "bottom"
    },
    closeable: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: "top-right"
    }
  },
  mounted() {
    // this.show=this.showit
    // console.log(this.showit);
    // console.log(this.show);
  },
  methods: {
    showPopue() {
      this.show=true;
    }
  }
}
</script>

<style>

</style>