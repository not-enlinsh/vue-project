<template>
<div>
  <div class="wrapper-project">
    <table>
      <thead>
        <tr>
          <th v-for="item in header" :key="item">{{ item }}</th>
        </tr>
      </thead>
      <thead>
         <tr v-for="(item,index) in tableData" :key='index'>
                    <td>{{ index }}</td>
                  
                    <td v-for='disk in item' :key="disk">{{disk}}</td>
                      <td class='user'><div><span>删除</span><span>编辑</span></div></td>   
                </tr>
      </thead>
    </table>
   
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
export default {
  data() {
    return {
      header: [
        "序号",
        "项目名称",
        "所属公司",
        "开工时间",
        "预计完成时间",
        "经办人",
        "项目投资",
        "施工人数",
        "操作"
      ],
        tableData:[['范德','萨发生的','萨发生的','萨发生的','萨发生的','萨发生的','fdssfsdf'],
                ['范德','萨发生的','萨发生的','萨发生的','萨发生的','萨发生的','dsfffds'],
                ['范德','萨发生的','萨发生的','萨发生的','萨发生的','萨发生的','dsfffds'],
                ['范德','萨发生的','萨发生的','萨发生的','萨发生的','萨发生的','dsfffds'],
                ['范德','萨发生的','萨发生的','萨发生的','萨发生的','萨发生的','dsfffds'],
                ['范德','萨发生的','萨发生的','萨发生的','萨发生的','萨发生的','dsfffds'],
                ['范德','萨发生的','萨发生的','萨发生的','萨发生的','萨发生的','dsfffds'],
                ['范德','萨发生的','萨发生的','萨发生的','萨发生的','萨发生的','dsfffds'],
                ['范德','萨发生的','萨发生的','萨发生的','萨发生的','萨发生的','dsfffds'],
                ['范德','萨发生的','萨发生的','萨发生的','萨发生的','萨发生的','dsfffds'],
                ['范德','萨发生的','萨发生的','萨发生的','萨发生的','萨发生的','dsfffds'],
                ['范德','萨发生的','萨发生的','萨发生的','萨发生的','萨发生的','dsfffds'],
                 ['范德','萨发生的','萨发生的','萨发生的','萨发生的','萨发生的','dsfffds'],
                  ['范德','萨发生的','萨发生的','萨发生的','萨发生的','萨发生的','dsfffds'],
                   ['范德','萨发生的','萨发生的','萨发生的','萨发生的','萨发生的','dsfffds']]
    }
  }
};
</script>

<style >
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
 td span{
        display: inline-block;
        width:60px;
height:30px;
background:rgba(58,119,251,1);
border-radius:4px;
    line-height: 30px;
    color:#fff;
   
 
    }
 td span:nth-child(1){
    margin-right: 26px;
 }
    td div{
      display: inline-block;
      width:146px
    }
  td.grid{
width:200px;
text-align: center;

  }
   
</style>