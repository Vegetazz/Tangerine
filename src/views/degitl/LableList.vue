<template>
  <div class="lableList-body">
    <div class="lableList-content">
      <div v-for="item in (albumMes.number-1)" :key="item" class="lableList-item">
        <div class="lableList-item-key"><span>{{albumMes.key[item]}}</span></div>
        <div class="lableList-item-value">{{albumMes.value[item]}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    albumMes: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style>
.lableList-body {
  padding: 1.2rem 1rem ;
}
.lableList-item {
  display: flex;
  border-bottom: 1px solid #eeeeee;
  line-height: 2rem;
}
.lableList-item-key {
  font-size: 0.9rem;
  color: #585858;
  width: 6.5rem;
  height: 2rem;
}
.lableList-item-value {
  font-size: 0.9rem;
  color: #f55888;
}
</style>