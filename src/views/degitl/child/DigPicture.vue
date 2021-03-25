<template>
  <div class="digPicture-body">
    <div v-for="item in digAlbum" :key="item">
      <img :src="item" alt="" class="digPicture-body-img" @load="digPicFin()">
    </div>
  </div>
</template>

<script>
export default {
  props:{
    digAlbum: {
      type: Array,
      default: [],
    }
  },
  methods: {
    digPicFin() {
      // console.log("001");
      this.$emit("imgIsLoad");
    }
  }
}
</script>

<style>
.digPicture-body-img {
  display: block;
  width: 100%;
  margin-bottom: 0.5rem;
}
</style>