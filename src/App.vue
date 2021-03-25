<template>
  <div id="app">
    <maintabbar></maintabbar>
    <!-- keep-alive导致页面组件不会被销毁 exclude除外-->
    <keep-alive exclude="Degitl">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

import Maintabbar from './components/common/tabbar/Maintabbar.vue'


export default {
  components: { Maintabbar },
  name: "App"
}
</script>

<style>
  @import "assets/css/base.css"
</style>
