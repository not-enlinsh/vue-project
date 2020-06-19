<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<style>

  *{
    padding:0;
    margin: 0;
      list-style: none;
    text-decoration: none;
  }
  #app{
   
    display: flex;
    justify-content: center;
    
  }
  html,body{
    height: 100%;
  }
  .block{
    margin-top: 50px;
    display: flex;
    justify-content: center;
    
     
  }
  .el-pager li, .btn-prev,.btn-next{
    background: transparent !important;
    margin-left: 10px !important;
    width:34px !important;
    height:34px !important;

border:1px solid rgba(230,230,230,1);
  }
   .block .active{
   background: transparent !important;
  }
  .float{
  height:100%;
  width: 100%;
  position:fixed;
  left: 0;
  top:0;
    background: rgba(0, 0, 0, 0.5);
   
  }
 
 .flexd{
   position: fixed;
   padding:100px;

   display: flex;
   justify-content: center;
   align-content: center;
   left: 50%;
    transform: translate(-50%, -50%);
  background: white;
   top:50%
 } 
 .float .flexd span{
   position: absolute;
   top:0;
   right: 0;
       top: 4px;
    right: 15px;
  cursor: pointer;
   font-size:30px;

 }
@import{
  
}
</style>
