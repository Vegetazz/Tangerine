<template>
  <div class="goodslist">
    <div class="goodListLeft">
      <goods-list-item v-for="(item,index) in goods" :key="item.imgpath" :goodMes="item" :goodIndex='index' :goodColumn=0></goods-list-item>
    </div>
    <div class="goodListRight">
      <goods-list-item v-for="(item,index) in goods" :key="item.imgpath" :goodMes="item" :goodIndex='index' :goodColumn=1></goods-list-item>
    </div>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
  components: { GoodsListItem },
  name:"goodList",
  props: {
    goods:{
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {

  },
  methods: {
    // isLeftGood(index) {
    //   if(index%2===0){
    //     console.log("left"+index);
    //     return true
    //   }else{
    //     console.log('right'+index);
    //     return false
    //   }
        
    // }
  }
}
</script>

<style scoped>
.goodslist {
  width: 100%;
  overflow: hidden;
  background-color: #F0F0F0;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.goodListLeft,
.goodListRight{
  width: 47%;
  /* background-color: green; */
}

</style>