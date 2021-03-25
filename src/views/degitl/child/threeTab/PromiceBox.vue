<template>
  <div class="promiceBox">
    <!-- 弹出框 -->
    <popue position="bottom" :closeable="true" iconPosition="top-right" ref="promice">
      <div class="promice-mes-show">
        <div class="promice-mes-show-title">服务说明</div>
        <div class="promice-mes-show-content">
          <div v-for="(item, index) in promiceMes" :key="index" class="promice-mes-show-tile">
            <div class="promice-mes-show-item">
              <span class="promice-mes-show-item-title">{{item.title}}</span>
              <span class="promice-mes-show-item-value">{{item.value}}</span>
            </div>
          </div>
        </div>
      </div>
    </popue>
  </div>
</template>
<script>
import Popue from 'components/common/popue/Popue.vue';
export default {
  name: "PromiceBox",
  components: {
    Popue
  },
  data() {
    return {
      proIsShow: false,
    };
  },
  props: {
    promiceMes: {
      type: Array,
      default: [],
    },
  },
  methods: {
    showBox() {
      this.$refs.promice.showPopue()
    },
  },
};
</script>

<style>
    /* 框 */
.promice-mes-show {
  /* height: 300px; */
  padding: 1rem;
}
.promice-mes-show-title {
  font-size: 1rem;
  color: #8f8f8f;
  text-align: center;
  margin: 0.8rem 0;
}
.promice-mes-show-tile {
  padding: 0.6rem 1rem 0.6rem 0;
  border-bottom: 1px solid rgb(212, 212, 212);
}
.promice-mes-show-item-title{
  width: 100%;
  font-size: 0.8rem;
  display: block;
  line-height: 1.5rem;
}
.promice-mes-show-item-value {
  width: 100%;
  font-size: 12px;
  color: #8f8f8f;
  line-height: 1.2rem;
  display: block;
}
.promice-mes-show-tile:last-child {
  border: 0px;
}
</style>