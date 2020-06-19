<template>
    <div class='project' >
    <router-link to='/home/project/projectHome' >项目列表</router-link>
    <router-link to='/home/project/addProject'  >添加项目</router-link>
        <router-view ></router-view></div>
</template>

<script>
export default {
  
    
    methods:{
       }


    

}
</script>

<style>
.project{
    padding:44px 82px 0  20px

}
.project  a{
  display: inline-block;
  font-size:24px;
  height: 40px;
  line-height: 40px;
font-family:Microsoft YaHei;
font-weight:bold;
background-color: transparent!important;
color:black;
    margin: 0 88px 52px 23px

}
.project a.active{
    border-bottom:8px solid rgba(61,100,231,1);
    color:rgba(61, 100, 231, 1)
}
</style>