<template>
  <div>
      <search />
      <div class='size'>
       <swiper :options="swiperOption">
      <swiper-slide><span>a1</span></swiper-slide>
      <swiper-slide><span>a2</span></swiper-slide>
      <swiper-slide><span>a3</span></swiper-slide>
      <swiper-slide><span>a4</span></swiper-slide>
      <swiper-slide><span>a$</span></swiper-slide>
      <swiper-slide><span>a$</span></swiper-slide>
    </swiper>
    <!--以下看需要添加-->
    <div class="swiper-scrollbar"></div> 
    <div class="swiper-button-next"></div> 
    <div class="swiper-button-prev"></div> 
    <div class="swiper-pagination"></div> 
  </div>
  </div>
</template>

<script>
import search from '../components/search'
export default {
data(){
  return{
     swiperOption: {//swiper3
      autoplay: 500,
      speed: 1000,
      }
  }
},
components:{
    search

}
}
</script>

<style>
.size{
  width: 500px;
  height: 500px;
}

</style>