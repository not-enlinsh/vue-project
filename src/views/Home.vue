<template>
  <div class="wrapper">
    <header class="head">
      <h2>工程项目管理系统</h2>
      <div>
        <div>
          <img :src="user.img" alt />
          <span>{{user.name}}</span>
        </div>
        <div>
          <img :src="img" alt />
          <span>退出系统</span>
        </div>
      </div>
    </header>
    <main class="main">
      <div class="nav">
        <ul>
          <router-link :to='{name : item.path}' tag="li" v-for="(item,index) in navList" :key="index">
            <img :src="item.img" alt />
            <span>{{item.name}}</span>
          </router-link>
        
        </ul>
      </div>
          <router-view></router-view>
    </main>
  </div>
</template>

<script>
   
export default {


  data() {
    return {
      img: require("../assets/item2/退出.png"),
      user: {
        img: require("../assets/item2/组 40(5).png"),
        name: "fdssdf"
      },
      navList: [
        {
          name: "系统首页",
          img: require("../assets/item2/图层 9 拷贝.png"),
          path:'system' 
        },
        {
          name: "项目进度",
          img: require("../assets/item2/图层 9 拷贝.png"),
          path:"Item"   
        },
        {
          name: "系统监控",
          img: require("../assets/item2/图层 9 拷贝.png"),
          path:"Commit"   
        },
        {
          name: "工作日报",
          img: require("../assets/item2/图层 9 拷贝.png"),
          path:"News"
        },
        {
          name: "财务报表",
          img: require("../assets/item2/图层 9 拷贝.png"),
          path:"Table"
        },
        {
          name: "项目列表",
          img: require("../assets/item2/图层 9 拷贝.png"),
          path:"Project"
        },
         {
          name: "权限管理",
          img: require("../assets/item2/图层 9 拷贝.png"),
          path:"Admin"
        }
      ],
      
    };
  }
};
</script>


<style >
.wrapper {
  width: 1920px;
  height: 1080px;
  min-width: 1920px;
  min-height:1080px;
  background: #f4f4f4;
  flex: 0 0 auto;
}
.head {
  width: 1920px;
  height: 100px;
  background: linear-gradient(
    90deg,
    rgba(57, 122, 255, 1) 0%,
    rgba(61, 100, 231, 1) 100%
  );
  padding: 0 50px 0 81px;
  box-sizing: border-box;
}
.head h2 {
  float: left;
  line-height: 100px;
  height: 36px;
  font-size: 36px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
}

.head > div {
  float: right;
  display: flex;
  justify-items: center;
  align-items: center;
  height: 100%;
}

.head > div > div {
  vertical-align: middle;
  display: flex;
  align-items: center;
  justify-content: center;
}
.head > div > div:nth-child(1) {
  margin-right: 30px;
}
.head > div > div:nth-child(1) > img {
  width: 60px;
  height: 60px;
  margin-right: 11px;
}
.head > div > div:nth-child(1) > span {
  font-size: 24px;
  line-height: 70px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.head > div > div:nth-child(2) > img {
  width: 21px;
  height: 21px;
  margin-right: 11px;
}
.head > div > div:nth-child(2) > span {
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}

.wrapper .main {
  height: 980px;
  display: flex;
}
.wrapper .main .nav {
  height: 100%;
  width: 100px;

  background: rgba(255, 255, 255, 1);
  opacity: 0.9;
}
.wrapper .main .nav ul li {
  width: 100px;
  height: 70px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.wrapper .main .nav ul li:active {
  background: rgba(61, 100, 231, 1);
  color:#fff
}
.wrapper .main .nav ul li img {
  width: 25px;
  height: 25px;
  margin-bottom: 10px;
}
.wrapper .main .message {
  width: calc(100% - 100px);
}
.wrapper .main .message .m-top {
  height: 200px;
  display: flex;
  padding: 0 30px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;
}
.wrapper .main .message .m-top > div {
  width: 380px;
  height: 160px;
  padding: 0 86px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.wrapper .main .message .m-top > div > div {
  width: 69px;
}
.wrapper .main .message .m-top > div p {
  font-size: 36px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(106, 175, 255, 1);
  line-height: 72px;
}
.wrapper .main .message .m-center {
  height: 400px;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;

}

.wrapper .main .message .m-center #charts{
  width:1030px;
  height:400px;
  background:rgba(254,254,254,1);

}
.wrapper .main .message .m-center #charts + div{
  width:660px;
  height:400px;
  background:rgba(255,255,255,1);
  padding: 0 40px;
  box-sizing: border-box;

}
.wrapper .main .message .m-center #charts + div h3{

height:54px;
font-size:18px;
line-height: 54px;

font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(61,61,61,1);
}
.wrapper .main .message .m-center #charts + div ul li{
    display: flex;
    width: 100%;
  justify-content: space-between;
  padding: 15px 0;
  color: #666666;
}
.wrapper .main .message .m-bottom{
 
height:318px;
 padding: 0 30px;
  display: flex;
   justify-content: space-between;
 box-sizing: border-box;

margin-top: 20px;

}
.wrapper .main .message .m-bottom .video{
  width:1030px;
height:318px;
flex: 0 0 auto;
background:rgba(255,255,255,1);

}
.wrapper .main .message .m-bottom h3{
text-indent:20px;
height:54px;
font-size:18px;
line-height: 54px;

font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(61,61,61,1);
}
.wrapper .main .message .m-bottom .box{
  display: flex;
  padding: 0 40px;
  justify-content: space-between
}
.wrapper .main .message .m-bottom img{
  display: inline-block;

}
#map{
   width:658px;
height:318px;
background:rgba(255,255,255,1);
}
.active {
  background: #3D64E7 !important;
  color: white
}
</style>
