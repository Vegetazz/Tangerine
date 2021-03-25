<template>
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'tabbar',
  props: {

  },
  computed: {
  }
}
</script>

<style>
.navbar {
  display: flex;
  line-height: 44px;
  height: 44px;
  text-align: center;
  /* background-color: #fd79a8; */
}
.left,.right {
  width: 60px;
}
.center {
  flex: 1;
}
</style>