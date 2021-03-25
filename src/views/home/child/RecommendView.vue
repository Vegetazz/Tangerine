<template>
  <div class="recommend">
    <!-- <button style="width:100px;height:100px;background-color:pink" @click="putRecommendLink"></button> -->
    <div v-for="item in recommendLink" :key="item.image" class="recommendItem">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  components: {
 
  },
  methods: {
    putRecommendLink() {
      console.log(this.recommendLink);
    }
  },
  data() {
    return {
    };
  },
  props: {
    // swiperlink: {
    //   type: Array,
    //   default(){
    //     return [{image:"https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg"}]
    //   },
    //   required: true
    // },
    recommendLink: {
      type: Array,
    }
  },
  computed: {
    
  },
  created () {
    // this.putRecommendLink()

  },
  mounted() {

  }
}
</script>

<style>
.recommend {
  display: flex;
  /* width: 100%; */
  justify-content: space-evenly;
  /* margin-bottom: 1rem; */
  padding: 0.5rem 0;
  border-bottom: 0.5rem solid #F6F6F6;
  background-color: #fff;
}
/* .recommendItem {
  margin-bottom: 0.6rem;
  flex-wrap: nowrap;
} */
.recommendItem img{
  /* width: 4.8rem; */
  width: 78.6px;
  /* width: 15vw; */
}
.recommendItem div {
  text-align: center;
  font-weight: 540;
  color: black;
}
</style>