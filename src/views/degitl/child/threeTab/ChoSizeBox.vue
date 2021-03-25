<template>
  <div class="chooseSize">
    <popue position="bottom" :closeable="true" iconPosition="top-right" ref="choose">
      <div class="list-wispper">
        <div class="list-wispper-title">
          <div class="list-wispper-title-img">
            <img
              :src="goodMes.color[chooseColorImg].imgLink"
              alt=""
              class="list-wispper-title-img-body"
            />
          </div>
          <div class="list-wispper-title-Mes">
            <span class="list-wispper-title-price">
              <span class="list-wispper-title-price-RMB">￥</span>
              <span class="list-wispper-title-price-num">{{
                goodPriceNum
              }}</span>
            </span>
            <div class="list-wispper-title-stock">库存{{ stockNow }}件</div>
            <div class="list-wispper-title-select-word">
              <div class="list-wispper-title-select-left">
                {{ selectedTitle }}
              </div>
              <div :class="{selectActive:isSelectActive}">
                {{ selectedItem }}
              </div>
            </div>
          </div>
        </div>
        <!-- 所有选项 -->
        <div class="list-wispper-item">
          <!-- //颜色选项 -->
          <div class="list-wispper-item-color">
            <div class="list-wispper-item-title">颜色</div>
            <!-- 选项容器 -->
            <div class="list-wispper-item-container">
              <div
                class="list-wispper-item-option"
                v-for="(item, index) in goodMes.color"
                :key="index"
                @click="colorClick(index)"
                :class="{ activeOption: index === chooseColor }"
              >
                {{ item.color }}
              </div>
            </div>
          </div>
          <!-- //尺码选项 -->
          <div class="list-wispper-item-size">
            <div class="list-wispper-item-title">尺码</div>
            <!-- 选项容器 -->
            <div class="list-wispper-item-container">
              <div
                v-for="(item, index) in goodMes.size"
                :key="index"
                class="list-wispper-item-option"
                @click="sizeClick(index)"
                :class="{ activeOption: index === chooseSize }"
              >
                {{ item.title }}
              </div>
            </div>
          </div>
          <!-- //数量选项  -->
          <div class="list-wispper-item-number">
            <div class="list-wispper-item-title">数量</div>
            <!-- 步进器 -->
            <div class="list-wispper-item-step">
              <van-stepper v-model="purchaseNum" />
            </div>
          </div>
        </div>
        <!-- 购物车 购买按钮 -->
        <div class="component-buy-and-cart-btn">
          <div class="component-buy-and-cart-left"><span>加入购物车</span></div>
          <div class="component-buy-and-cart-right"><span>立即购买</span></div>
        </div>
      </div>
    </popue>
  </div>
</template>

<script>
import { Stepper } from "vant";
import Popue from 'components/common/popue/Popue.vue';
export default {
  name: "ChooseSize",
  components: {
    Popue,
    [Stepper.name]: Stepper,
  },
  data() {
    return {
      chooseColorImg: 0, //展示图片标
      chooseColor: -1, //选择的颜色
      chooseSize: -1, //选择的尺码
      stock: 0, //库存
      goodPriceNum: 0, //商品价格
      selectedTitle: "请选择:",
      selectedItem: "颜色 尺码",
      purchaseNum: 0, //双向绑定步进器值
    };
  },
  props: {
    goodMes: {
      type: Object,
      default: {},
    },
    goodPrice: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    // console.log(this.goodMes.color[0].imgLink);
    this.goodPriceNum = Number(this.goodPrice).toFixed(2);
    // console.log(this.goodPriceNum);
    if (this.chooseColor === -1) {
      this.chooseColorImg = 0;
    } else {
      this.chooseColorImg = chooseColor;
    }
  },
  methods: {
    showSizeList() {
      this.show = true;
    },
    colorClick(index) {
      if(this.chooseColor===index) {
        this.chooseColor=-1;
        this.chooseColorImg=0;
      }else{
        this.chooseColor = index;
        this.chooseColorImg=index;
      }
      this.chooseChange();
    },
    sizeClick(index) {
      if(this.chooseSize===index) {
        this.chooseSize=-1;
      }else {
        this.chooseSize = index;
      }
      this.chooseChange();
    },
    chooseChange() {
      if(this.chooseColor===-1&&this.chooseSize===-1){
        this.selectedTitle="请选择:";
        this.selectedItem="颜色 尺码";
      }else if(this.chooseColor!=-1&&this.chooseSize===-1){
        this.selectedTitle="请选择:";
        this.selectedItem="尺码";
      }else if(this.chooseColor===-1&&this.chooseSize!=-1){
        this.selectedTitle="请选择:";
        this.selectedItem="颜色";
      }else {
        this.selectedTitle="已选择:";
        this.selectedItem= this.goodMes.color[this.chooseColor].color+" "+this.goodMes.size[this.chooseSize].title;
      }
      this.$emit("choChang",{
        selectedTitle: this.selectedTitle,
        selectedItem: this.selectedItem,
        isSelectActive: this.isSelectActive
      })
    },
    showBox() {
      this.$refs.choose.showPopue()
    }
  },
  computed: {
    stockNow() {
      let allNum = 0;
      if (this.chooseColor === -1 && this.chooseSize === -1) {
        for (let i = 0; i < this.goodMes.color.length; i++) {
          allNum += this.goodMes.color[i].stock;
        }
        return allNum;
      } else if (this.chooseColor === -1 && this.chooseSize != -1) {
        for (let i = 0;i < this.goodMes.size[this.chooseSize].stock.length;i++) {
          allNum += this.goodMes.size[this.chooseSize].stock[i];
        }
        return allNum;
      } else if(this.chooseColor != -1 && this.chooseSize === -1){
        // for (let i = 0;i < this.goodMes.color[];i++) {
        //   allNum += this.goodMes.size[this.chooseSize].stock[i];
        // }
        return this.goodMes.color[this.chooseColor].stock;
        // return allNum;
      }else{
        return this.goodMes.size[this.chooseSize].stock[this.chooseColor];
      }
    },
    isSelectActive(){
      if(this.chooseColor!=-1&&this.chooseSize!=-1){
        return true;
      }else {
        return false;
      }
    }
  },
};
</script>

<style>

  /* 条 */

/**容器 */

/*选择尺寸页价格信息及图片*/
.list-wispper-title {
  display: flex;
  align-items: flex-end;
  margin-bottom: 1rem;
}
/* 图片本身 */
.list-wispper-title-img-body {
  height: 7.5rem;
  margin-top: 0.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
  border-radius: 0.2rem;
}
/*价格 */
.list-wispper-title-price {
  display: flex;
  align-items: flex-start;
}
.list-wispper-title-price-RMB {
  margin-top: 0.2rem;
  font-size: 0.5rem;
}
.list-wispper-title-price-num {
  font-size: 1.8rem;
}
/*库存 */
.list-wispper-title-stock {
  font-size: 0.75rem;
  color: rgb(94, 94, 94);
  /* line-height: 1rem; */
  margin: 0.3rem 0;
}
/*颜色 尺码 */
.list-wispper-title-select-word {
  display: flex;
  font-size: 0.75rem;
  line-height: 1rem;
  margin-bottom: 0.5rem;
  color: rgb(94, 94, 94);
}
.list-wispper-title-select-left {
  margin-right: 0.3rem;
}
/* .selectActive {
  color: #ff5777;
} */
/*选择框*/
.list-wispper-item {
  padding: 0 0.5rem;
}
/* 选项*/
.list-wispper-item-container {
  display: flex;
}
.list-wispper-item-option {
  font-size: 0.6rem;
  color: rgb(94, 94, 94);
  border: 1px solid rgb(94, 94, 94);
  border-radius: 0.2rem;
  padding: 0.4rem 1rem;
  margin-right: 0.8rem;
  margin-bottom: 1rem;
}

.activeOption {
  border: 1px solid #ff5777;
  color: #ff5777;
}

/*标题 */
.list-wispper-item-title {
  color: rgb(94, 94, 94);
  font-size: 0.8rem;
  margin: 0.35rem 0;
}
/* 步进器 */
/** 购买和购物车按钮*/
.component-buy-and-cart-btn{
  display: flex;
  height: 3rem;
  margin-top: 1.5rem;
  font-size: 0.8rem;
  /* align-items: center; */
  line-height: 3rem;
  text-align: center;
}
.component-buy-and-cart-left {
  flex: 1;
  color: #ff5777;
  background-color: #ffe6e8;
}
.component-buy-and-cart-right {
  flex: 1;
  color: #ffe6e8;
  background: linear-gradient(90deg,#ff5777,#ff5777);
}
</style>
