<template>
  <div class="shopCard-body">
    <div class="mainCard">
      <div class="mainCard-head">
        <img :src="shopMes.shophead" alt="">
      </div>
      <div class="mianCard-Mes">
        <div class="mianCard-Mes-name">
            {{shopMes.shopname}}
        </div>
        <div class="mianCard-Mes-starNum">
          <div class="mianCard-Mes-starNum-star">
            <div v-for="item in 3" :key="item" class="mianCard-Mes-starNum-starbody">
              <img src="~assets/img/degitl/星星.svg" alt="">
            </div>
          </div>
          <div>| 在架商品{{shopMes.shopnum}}</div>
        </div>
        <div class="mianCard-Mes-label">
          <div v-for="item in shopMes.label" :key="item" class="mianCard-Mes-label-item">
            {{item}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"shopCard",
  components: {
    
  },
  props: {
    shopMes:{
      type: Object,
      default: {}
    }
  }
}
</script>

<style>
.shopCard-body {
  /* height: 5.5rem; */
  padding: 1rem 0.8rem;
}
.mainCard {
  display: flex;
}
.mainCard-head img{
  width: 4rem;
  height: 4rem;
  margin-right: 0.6rem;
  display: block;
}
.mianCard-Mes-name {
  font-size: 0.9rem;
  line-height: 1.5rem;
}
.mianCard-Mes-starNum {
  display: flex;
  font-size: 0.6rem;
  color: #8f8f8f;
  /* line-height: 1.5rem; */
}
/* 星星盒子 */
.mianCard-Mes-starNum-star{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* 星星本体 */
.mianCard-Mes-starNum-starbody img{
  width: 0.8rem;
  margin-right: 0.2rem;
}
/* 标签 */
.mianCard-Mes-label {
  font-size: 0.5rem;
  color: #f55888;
  line-height: 1rem;
  display: flex;
  margin-top: 0.3rem;
}
.mianCard-Mes-label-item {
  border: 1px solid #c0c0c0;
  border-radius: 0.5rem;
  padding: 0 0.3rem;
  margin-right: 0.3rem;
}
</style>