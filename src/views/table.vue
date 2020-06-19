<template>
  <div class='form-money'>
    <form class="input">
      <div >
        <label for='text'>制作日期 </label>
        <input type="text" placeholder="开始 到 结束"  id='text'/>
      </div>
      <div>
        <label for='date' >制作日期 </label>
        <input type="text"  placeholder="开始 到 结束" id='date'/>
      </div>
      <div>
        <label for='all' >类型</label>
       <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
      </div>
      <el-button type="primary">查询</el-button>
    </form>
  
  <div class="white">
    <h2>财务报表</h2>
    <list :table-head="tableHead" :table-data='tableData' /></div> 
     <div class="block">
 
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="100"
      layout="prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
  </div>  
    
    </div>
</template>

<script>
import List from '../components/lest'
export default {
  data() {
    return {
    options: [{
          value: '选项1',
          label: 'xxx项目'
        }, {
          value: '选项2',
          label: 'xxx项目'
        }, {
          value: '选项3',
          label: 'xxx项目'
        }, {
          value: '选项4',
          label: 'xxx项目'},
          {value: '选项5',
          label: 'xxx项目'
        }],
         value: '',
           tableHead:['序号','操作 ','日报时间','项目进度','项目类型','所属工地','所属公司','日报内容'],
            tableData:[['范德','萨发生的','萨发生的','萨发生的','萨发生的','萨发生的'],
                ['范德','萨发生的','萨发生的','萨发生的','萨发生的','萨发生的'],
                ['范德','萨发生的','萨发生的','萨发生的','萨发生的','萨发生的'],
                ['范德','萨发生的','萨发生的','萨发生的','萨发生的','萨发生的'],
                ['范德','萨发生的','萨发生的','萨发生的','萨发生的','萨发生的'],
                ['范德','萨发生的','萨发生的','萨发生的','萨发生的','萨发生的'],
                ['范德','萨发生的','萨发生的','萨发生的','萨发生的','萨发生的'],
                ['范德','萨发生的','萨发生的','萨发生的','萨发生的','萨发生的'],
                ['范德','萨发生的','萨发生的','萨发生的','萨发生的','萨发生的'],
                ['范德','萨发生的','萨发生的','萨发生的','萨发生的','萨发生的'],
                ['范德','萨发生的','萨发生的','萨发生的','萨发生的','萨发生的'],
                ['范德','萨发生的','萨发生的','萨发生的','萨发生的','萨发生的'],
                 ['范德','萨发生的','萨发生的','萨发生的','萨发生的','萨发生的'],
                  ['范德','萨发生的','萨发生的','萨发生的','萨发生的','萨发生的'],
                   ['范德','萨发生的','萨发生的','萨发生的','萨发生的','萨发生的']]
 
    }
    

  },
  components:{
    List

    }
};
</script>

<style >
  .form-money{
    
  width: calc(100% - 100px);
  padding-left: 20px;
}
.input{
  width:1720px;
height:60px;
padding-left:30px ;
margin-top: 40px;
box-sizing: border-box;
background:rgba(255,255,255,1);
display: flex;
align-items: center;
}
.input>div{
  margin-right:60px ;
}
.input>div label{
  margin-right: 22px;

}
.input>div input,.input>.input>div  .el-select{
  width:168px;
height:40px;
background:rgba(230,230,230,1);
border-radius:4px;
border:none;
text-align: center;

}


.form-money .white{
  position: relative;
  background: white;
  margin-top:40px ;
  padding:80px 16px 34px 25px;
  width: 1718px;
 
     
}
.white h2{
  position: absolute;
top: 26px;
    left: 44px;

background:rgba(255,255,255,1);
}
.block{
  margin-top: 30px !important;

}

</style>