<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="item"
      :class="{ active: index === currentindex }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabcontrol",
  data() {
    return {
      currentindex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentindex = index;
      this.$emit("tabClick", index);
    },
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.tab-control {
  display: flex;
  text-align: center;
  background-color: #fff;
}
.tab-control div {
  flex: 1;
  height: 2.5rem;
  line-height: 2.5rem;
  font-size: 1rem;
}
.tab-control span {
  padding: 0.3rem;
}
.active {
  color: #fd79a8;
}
.active span {
  border-bottom: 0.2rem solid #fd79a8;
}
</style>