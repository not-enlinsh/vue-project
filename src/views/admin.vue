<template>
  <div class='position-admin'>
        <div class="searchList">
      <div class="downBox">
          <span> 按名称</span>
          <span></span>
      </div>
      <div>
          <input type="text" class="search" placeholder="请输入用户名">
          <div class='icon'><i></i></div>
      </div>

  </div>
      <div class="wrapper-project">
        <div @click='updata'>新增用户</div>
        <table>
          <thead>
            <tr>
              <th v-for="item in header" :key="item.name">{{ item.name }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in tableData" :key="item.id">
             

              <td v-for="(disk,index) in item" :key="index">{{disk}}</td>
              <td ><span class='costume'>管理员</span></td>
               <td class='user' ><div ><span @click='updata(index)' >编辑</span><span >删除</span></div></td>
            </tr>
          </tbody>
        </table>
      
      </div>
       <!-- <pagination 
          :total="total"
       />  -->
       <div class="float " v-show='show'> <div class="flexd"><span v-click='show'>x</span><crud :ifevent ='ifevent' :info='info' :label='header' @updatad='updatad' /></div></div>
  </div>
</template>

<script>
// import pagination from '../components/pagination'
import crud from '../components/crud'
import api from '../api';
export default {
 async created (){
 
   let res = await api.cAtmin()
   console.log(res)
    this.tableData = res.data.data.data;
        
    
  },
      data() {

    return {
      show:false,
      header: [
        {name:"ID",type:'id'},
        {name:"用户名称",type:'user_name'},
        {name:'用户密码',type:'user_pass'},
        {name:"所属项目",type:'last_login_ip'},
       
        {name:"所属公司",type:'last_login_ip'},
        {name:"角色",type:'last_login_ip'},        
        {name:'账号设置',type:'last_login_ip'}
      ],
        tableData:'',
       total:99,
      ifevent:'',
        info:''
    }
   
  },
   methods:{
     updata(item,blean){
      
       this.info='';
         api.uAtmin({}) ?this.show=false :  alert('网络或表单内容错误')
     
       this.show = true ;
     item||item==0 ? this.info = this.tableData[item] : ''
     this.ifevent = blean || false

     },
     updatad(params){
      
      api.uAtmin(params) ?this.show=false :  alert('网络或表单内容错误')
     

   },
    createData(params){
      api.createAtmin(params)
    }
   },
   components:{
    //  pagination,
    crud
   }
  

}
</script>

<style scoped>
.position-admin{
    padding: 40px 82px 0 20px
}
.searchList{
    display: flex;
    margin-bottom:20px ;
}
.downBox{
    width:218px;
height:60px;
background:rgba(255,255,255,1);
border-radius:4px;
position: relative;
margin-right: 24px;

}
.downBox span:nth-of-type(1){
    width:90px;
    line-height: 60px;

font-size:18px;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(61,61,61,1);
margin-left:43px ;
}
.downBox span:nth-of-type(2){
    display: block;
    position: absolute;
  border: 7px solid transparent;
  width: 0;
  top:25px ;
  left:150px;
    border-top-color: #999;
}

.searchList>div:last-child{
    display: flex;

}
.searchList .search{

    width:440px;
height:60px;
background:rgba(255,255,255,1);
border:1px solid rgba(58,119,251,1);
border-radius:4px;
text-align: center;
font-size:18px; 
font-weight: bold;

} 
.searchList .icon{
    display: block;
    width: 60px;
    height: 60px;
    line-height:60px;
    background:rgba(58,119,251,1);
border-radius:0px 4px 4px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.searchList .icon i{
    display: block;
     width: 20px;
    height: 20px;
    background-size:100% ;
    background-image: url('../assets/item2/图层 798.png');
}
.wrapper-project {
  width: 1718px;
  height: 720px;
  background: rgba(255, 255, 255, 1);
  padding: 38px 12px 174px 20px;
  box-sizing: border-box;
  display: flex;

}
table{
  width: calc(100% - 32px);

  text-align: center;
  border-collapse: collapse;
  color: rgba(102, 102, 102, 1);
}
tr {
  height: 37px;
  line-height: 37px;
}
tbody,
thead {
  background: #fff;
}

td,
th {
  border: 3px solid #f2f2f2;
  color: rgba(102, 102, 102, 1);
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
}
tbody tr td span.costume{
  display: inline-block;
  width:90px;
height:30px;
color:white;
background:rgba(61,100,231,1);
border-radius:15px;
line-height: 30px;
}
 td span{
        display: inline-block;
        width:60px;
height:30px;
background:rgba(58,119,251,1);
border-radius:4px;
    line-height: 30px;
    color:#fff;

 
 
    }
    td.user{
width:200px;
text-align: center;

  }
.user div{
  margin-left:calc(50% - 70px) ;
  display: flex;
  justify-content: space-between;
  width: 140px;

}

</style>