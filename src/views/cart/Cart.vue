<template>
  <div class="cart">
    {{ getLength }}
    {{ getCartGoods }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Cart",
  data() {
    return {};
  },
  components: {},

  computed: {
    // getLength() {
    //   return this.$store.getters.getCartLength;
    // },
    ...mapGetters({
      //mapGetters辅助函数  相当于state的计算属性 //两种方式 可以起别名可以不起
      getLength: "getCartLength",
      getCartGoods: "getCartGoods",
    }),
  },

  mounted() {},

  methods: {},
};
</script>
<style scoped>
</style>