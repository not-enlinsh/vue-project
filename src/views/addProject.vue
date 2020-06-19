<template>
  <div class='wapper-add'>
      <crud  :label='label' />

  </div>
</template>

<script>
import crud from '../components/crud.vue'
export default {
   data(){ 
       return{
           label:['项目名称','所属公司','经办人','项目投资','开工时间','开工时间','所属工地','施工人数','添加项目']
       }},
  components:{
    crud

  }
}
</script>

<style>
.wapper-add{
  width:1718px;
height:720px;
background:rgba(255,255,255,1);
box-sizing:border-box;
padding: 88px 0  0 79px;
  
}
</style>