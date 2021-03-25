<template>
  <div class="futureView">
    <div v-for="item in futureViewItem" :key="item.img" class="futureViewItem">
      <div  class="fut_row">
        <a :href="item.href">
          <div class="fut_img">
            <img :src="item.img" alt="" />
          </div>
          <div class="fut_title"><span>{{ item.title }}</span></div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import data from "network/futurelink.json";//直接从json文件获取连接
// import axios from 'axios'
export default {
  data() {
    return {
      futureViewItem: data,
    };
  },
  methods: {
    
  },
  created() {

  },
  computed: {
    // rowimgnum() {
    //   return this.futureViewItem.length/3
    // }
  }
};
</script>

<style>
.futureView {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-bottom: 0.5rem;
  border-bottom: 0.5rem solid #F6F6F6;
}
.futureViewItem {
  width: 20%;
  margin: 0 auto;
  margin-top: 0.5rem;
}
.fut_row a{
  text-align: center;
}
.fut_img img {
  width: 3.125rem;
}
.fut_title span{
  font-size: 0.875rem;
  font-weight: 540;
  color: black;
}
</style>

      
      