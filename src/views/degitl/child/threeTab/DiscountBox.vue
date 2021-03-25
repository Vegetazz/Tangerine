<template>
  <div class="discount">
    <popue position="bottom" :closeable="true" iconPosition="top-right" ref="Discount">
      <div class="discountDig">
        <div class="disTitle">
          <span>店铺优惠卷</span>
        </div>
        <div class="discount-list">
          <div v-for="item in discountMes" :key="item.countNum" class="discountItem"> 
            <div class="discount-item-left">
              <div class="dis-count-item-mes">
                <span class="dis-count-item-RMB">￥</span>
                <span class="discount-item-num">{{ item.countNum }}</span>
                <span class="discount-item-con">{{ item.condition }}</span>
              </div>
              <div class="discount-item-timelimit">{{ item.useTime }}</div>
            </div>
            <div class="discount-item-toget" @click = "getDiscountClick">立即领取</div>
          </div>
        </div>
      </div>
    </popue>
  </div>
</template>

<script>
// import { Popup } from "vant";
import Popue from 'components/common/popue/Popue.vue';
import { Dialog } from 'vant';//中央弹出框
export default {
  name: "DiscountBox",
  components: {
    Popue,
    // [Popup.name]: Popup,
    [Dialog.Component.name]: Dialog.Component,
  },
  data() {
    return {
    };
  },
  props: {
    discountMes: {
      type: Array,
      default: [],
    },
  },
  methods: {
    showBox() {
      // this.showDiscount=true
      this.$refs.Discount.showPopue()
    },
    getDiscountClick() {
      Dialog.alert({
        message: '领取成功',
      }).then(() => {
        // on close
      });
      // console.log("chengf ");
    }
  },
};
</script>

<style>
.discountDig {
  margin-top: 0.8rem;
  margin-bottom: 3rem;
}
.disTitle {
  text-align: center;
  font-size: 1rem;
  color: #8f8f8f;
  margin-bottom: 1.2rem;
  margin-top: 1.5rem;
}
.discount-list {
  margin-bottom: 2rem;
}
.discountItem{
  width: 92%;
  height: 4.7rem;
  margin-left: 4%;
  margin-bottom: 0.8rem;
  padding-left: 0.7rem;
  padding-top: 0.5rem;
  background-image: url('~assets/img/degitl/优惠卷.png');
  background-size:100% 100%;
  background-repeat:no-repeat;
  display: flex;
  flex-direction: column;
  position: relative;
}
.discount-item-left {
  flex-grow: 1;
}

.dis-count-item-mes {
  display: flex;
  align-items: flex-end;
}
.dis-count-item-RMB {
  font-size: 1.1rem;
  font-weight: 350;
  position: relative;
  bottom: 1rem;
}
.discount-item-num {
  font-size: 2.2rem;
  margin: 0 0.4rem 0 0;
}
.discount-item-con {
  font-size: 0.7rem;
  color: #8f8f8f;
  margin-bottom: 0.2rem;
  /* text-align: right; */

}
.discount-item-timelimit {
  font-size: 0.8rem;
  color: #8f8f8f;
  line-height: 1.2rem;
}
.discount-item-toget {
  width: 5.9rem;
  height: 4.7rem;
  /* float: right; */
  position: absolute;
  right: 0;
  top: 0;
  text-align: center;
  line-height: 4.7rem;
  font-size: 14px;
  color: #ff5777;
}


.getDiscountFin {
  width: 100%;
  height: 3rem;
  background-color: #ff5777;
  color: #fff;
  text-align: center;
  line-height: 3rem;
  margin-top: 2rem;
}
</style>