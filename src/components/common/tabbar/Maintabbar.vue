<template>
  <tabbar class="mainTabbar">
    <tabbatitem path="/home" activitycolor="#fd79a8">
      <img src="~assets/img/tabbar/主页.svg" alt=""  slot="tabbar-item-img">
      <img src="~assets/img/tabbar/主页 (2).svg" alt=""  slot="tabber-item-imgactivity">
      <div slot="tabbar-item-text">首页</div>
    </tabbatitem>
    <tabbatitem path="/category" activitycolor="#fd79a8">
      <img src="~assets/img/tabbar/类目 品类 分类 类别.2.svg" alt=""  slot="tabbar-item-img">
      <img src="~assets/img/tabbar/类目 品类 分类 类别.2 (1).svg" alt=""  slot="tabber-item-imgactivity">
      <div slot="tabbar-item-text">分类</div>
    </tabbatitem>
    <tabbatitem path="/cart" activitycolor="#fd79a8">
      <img src="~assets/img/tabbar/购物车.svg" alt=""  slot="tabbar-item-img">
      <img src="~assets/img/tabbar/购物车 (1).svg" alt=""  slot="tabber-item-imgactivity">
      <div slot="tabbar-item-text">购物车</div>
    </tabbatitem>
    <tabbatitem path="/profile" activitycolor="#fd79a8">
      <img src="~assets/img/tabbar/我 的.svg" alt=""  slot="tabbar-item-img">
      <img src="~assets/img/tabbar/我 的 (1).svg" alt=""  slot="tabber-item-imgactivity">
      <div slot="tabbar-item-text">我的</div>
    </tabbatitem>
  </tabbar>
</template>

<script>
import Tabbar from 'components/common/tabbar/Tabbar.vue'
import Tabbatitem from 'components/common/tabbar/Tabbatitem.vue'
export default {
  name: "Maintabbar",
  components: {
    Tabbar,
    Tabbatitem,
  }
}
</script>

<style>

</style>