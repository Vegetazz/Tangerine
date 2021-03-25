<template>
  <div>
    <!-- 优惠卷 -->
    <div class="discounter">
      <div class="discountBar">
        <div class="discountBarName">
          <span>优惠</span>
        </div>
        <div class="disBarList">
          <div v-for="(item, index) in goodTabMes.discountMes" :key = "item.condition" class="disBarItem">
            <span v-if="index<discountNum">{{item.condition+item.countNum}}</span>
          </div>
        </div>
        <div @click = "showDisDit" class="showDisMes">
          <span>领券</span>
          <span  class="showDisMes-img"><img src="~assets/img/degitl/到达.svg" alt=""></span>
        </div>
      </div>
    </div>

    
    <!-- 承诺 -->
    <div class="promicer">
      <div class="promice-wispper" @click="showPromice">
        <div class="promice-item-content">
          <div v-for="(item, index) in goodTabMes.promiceMes" :key="index" class="promice-item-content-item">
            <div v-if="index < 3" class="promice-item">
              <span><img src="~assets/img/degitl/对.svg" alt="" class="promice-item-img"></span>
              <span class="promice-item-title">{{item.title}}</span>
            </div>
          </div>
        </div>
        
        <div class="promice-show">
          <span>
            <img src="~assets/img/degitl/到达.svg" alt="" class="promice-show-img">
          </span>
        </div>
      </div>
    </div>
    


    <!-- 选择尺寸 -->
    <div class="chooseSizer">
      <div class="chooseSize-button" @click="showChooseSize">
        <div class="chooseSize-button-tab">
          <div class="chooseSize-button-tab-left">{{chooseMes.selectedTitle}}</div>
          <div :class="{selectActive:chooseMes.isSelectActive}">{{chooseMes.selectedItem}}</div>
        </div>
        <div class="chooseSize-button-tab-img">
          <img src="~assets/img/degitl/到达.svg" alt="">
        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "MainDegTab",
  data() {
    return{
      discountNum:0
    }
  },
  props: {
    goodTabMes: {
      type: Object,
      default: {}
    },
    chooseMes: {
      type:Object,
      default: {
        selectedTitle:"请选择:",
        selectedItem: "颜色 尺寸",
        isSelectActive: false
      }
    }
  },
  methods: {
    showDisDit() {
      this.$emit("showDiscount")
    },
    showPromice() {
      this.$emit("showPromice")
    },
    showChooseSize() {
      this.$emit("showChooseSize")
    }
  },
  mounted() {
    if (this.goodTabMes.discountMes.length > 2) {
      this.discountNum = 2;
    } else {
      this.discountNum = this.goodTabMes.discountMes.length;
    }
  },
}
</script>

<style>
/* 优惠卷 */
.discounter {
  margin-top: 0.7rem;
  height: 2.5rem;
  background-color: #fff;
}
.discountBar {
  display: flex;
  line-height: 2.5rem;
  /* margin: 0.7rem 0.8rem 0 0.8rem; */
  padding: 0 0.8rem;
  justify-content: space-between;
  align-items: center;
}
.discountBarName {
  width: 20%;
  /* margin-left: 3.5%; */
  color: #8f8f8f;
  /* height: 100%; */
  font-size: 0.8rem;
  flex-grow: 0;
}
.disBarList {
  /* height: 100%; */
  font-size: 0.7rem;
  display: flex;
  flex-grow: 1;
  color: #ff5777;
} 
.disBarItem {
  margin-left: 0.5rem;
}
.showDisMes {
  /* height: 100%; */
  /* width: 20%; */
  /* margin-right: 3.5%; */
  color: #8f8f8f;
  font-size: 0.6rem;
  flex-grow: 0;
  display: flex;
  /* justify-content: flex-end; */
  /* align-items: center; */
}
.showDisMes-img img {
  height: 1.2rem;
  display: block;
  margin-top: 0.6rem;
}
.showDisMes-img {
  height: 2.5rem;
  /* padding-top: 0.5rem; */
}

/* 承诺 */
.promicer {
  margin-top: 0.7rem;
  padding: 0 0.8rem;
  height: 2.5rem;
  background-color: #fff;
}
.promice-item-img {
  width: 1.3rem;
  display: block;
}
.promice-item-title {
  font-size: 11px;
}
.promice-wispper {
  display: flex;
  justify-content: space-between;
}
.promice-item-content {
  display: flex;
  justify-content: space-between;
  line-height: 2.5rem;
  flex-grow: 1;
}
.promice-item {
  display: flex;
  align-items: center;
  /* margin-right: 1.5rem; */
}
.promice-show-img {
  height: 1.2rem;
  display: block;
  margin-top: 0.6rem;
  /* position: relative; */
  /* bottom: 10.4px; */
}


/* 选择尺寸 */
.chooseSizer {
  height: 2.5rem;
  margin-top: 0.7rem;
  background-color: #fff;
  /* border-bottom: 1px solid black; */
}
.chooseSize-button {
  width: 100%;
  height: 100%;
  padding: 0 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
/**选择条 */
.chooseSize-button-tab {
  display: flex;
  line-height: 2.5rem;
  font-size: 0.8rem;
}
.chooseSize-button-tab-left {
  margin-right: 0.5rem;
}
.chooseSize-button-tab-img img {
  display: block;
  height: 1.2rem;
}
.selectActive {
  color: #ff5777;
}
</style>