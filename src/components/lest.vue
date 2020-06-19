<template>
    <div >
       
        <table>
            <thead>
                <tr>
                    <th v-for="item in tableHead" :key='item+"head"'>{{item}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in tableData" :key='index'>
                    <td>{{ index }}</td>
                    <td><span>详情</span></td>
                    <td v-for='disk in item' :key="disk">{{disk}}</td>    
                </tr>

            </tbody>
        </table>


    </div>
</template>

<script>
export default {
props:['table-head','table-data']
}
</script>

<style>

    table{
        width: 100%;
       
        text-align: center;
          border-collapse:collapse;
     color:rgba(102,102,102,1);
    }
    tr{
        height: 37px;
        line-height: 37px;
       
    }
    tbody,thead{
          background: #fff;
    }
    
    td,th{
        border: 3px solid #f2f2f2;
         color:rgba(102,102,102,1);
         font-size:16px;
font-family:Microsoft YaHei;
font-weight:400;
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
   
</style>