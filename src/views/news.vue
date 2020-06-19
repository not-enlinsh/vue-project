<template>
  <div class="form-money">
    <search />
    <div class="table">
  <div class="white"> 
    <h2>工作日报</h2>  
<list :table-head="tableHead" :table-data='tableData' /></div> 
    </div>
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
import search from "../components/search";
import List from "../components/lest";
export default {
  data(){
    return {
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
                   ['范德','萨发生的','萨发生的','萨发生的','萨发生的','萨发生的']]}

  },
  components: {
    search,
    List
  }
};
</script>

<style>
.form-money {
  width: calc(100% - 100px);
  background: #f4f4f4;

  padding-left: 16px;
  box-sizing: border-box;
}
.form-money > div {
  background: #f4f4f4;
}
.table{
  margin:40px 0 70px 0;
  width:1718px;
  height:700px;



}
.white{
  position: relative;
  background: white;
  padding:80px 16px 34px 25px;
  width: 1718px;
 
     
}
.white h2{
  position: absolute;
top: 26px;
    left: 44px;

background:rgba(255,255,255,1);
}

</style>