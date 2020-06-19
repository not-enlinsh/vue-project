<template>
     <div class="wrapper-home">
         <div class="box">
             <h2>企业管理中心</h2>
             <input placeholder="请输入用户名" v-model='username' type="text">
             <input placeholder="请输入密码" v-model='password' type="password">
             <span @click='click'>确认登录</span>
         </div>
     </div>
</template>
<script>
import api  from '../api'
export default {
    created(){
        

      
    },
    data(){
        return{
            username:'',
            password:''    
    }},
    methods:{
        click(){
            
        (async self=>{
              
        let re =  await api.login({username:self.username,password:self.password});
          console.log(re.data.code)
            switch (re.data.code){
            case 1:
               
                 self.$router.replace({name:'Home'});
                 break
            case 0:
                alert('账号或密码错误')
                break
            }
       
        })(this);
       
       
        }
    }
    
}
</script>

<style>
#app{
    width: 100%;
    height: 100%; 

}
html,body{
    width: 100%;
    height: 100%;
 
}
.wrapper-home{
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    background-repeat: no-repeat;

    display: flex;
    justify-content: center;
    align-items: center;
    background-image:url('../assets/item2/bec09d8fcb7a1664b465289afa4173e3.png') ;
}
.wrapper-home .box{
    width:500px;
height:460px;
background:rgba(255,255,255,1);
border-radius:10px;
display: flex;
flex-direction: column;
text-align: center;
align-items: center;


}
.wrapper-home .box h2{
width:204px;
height:29px;
font-size:30px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(51,51,51,1);
line-height:27px;
margin-top: 47px;
margin-bottom:69px ;
}
.wrapper-home .box input{
 width:400px;
height:54px;
border:1px solid rgba(204,204,204,1);
margin-bottom: 40px;
font-size:20px ;
text-indent: 20px;
}
.wrapper-home .box span{
    display: block;
    width:400px;
    cursor: pointer;
height:53px;
background:rgba(59,112,244,1);
border-radius:4px;
    color:#fefefe;
    font-size:24px;
    line-height:53px

}
</style>