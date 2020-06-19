<template>
   <div class="message">
        <div class="m-top">
          <div>
            <img src="../assets/item2/组 40 .png" alt />
            <div>
              <p>36</p>
              <span>筹建项目</span>
            </div>
          </div>
          <div>
            <img src="../assets/item2/组 40(1).png" alt />
            <div>
              <p>36</p>
              <span>筹建项目</span>
            </div>
          </div>
          <div>
            <img src="../assets/item2/组 40(2).png" alt />
            <div>
              <p>36</p>
              <span>筹建项目</span>
            </div>
          </div>
          <div>
            <img src="../assets/item2/组 40(3).png" alt />
            <div>
              <p>36</p>
              <span>筹建项目</span>
            </div>
          </div>
        </div>
        <div class="m-center">
          <div id="charts"></div>
          <div class="news">
            <h3>工作日报</h3>
            <ul>
              <li  
                v-for="(item,index) in newsList"
                :key='index'
              >
                  <span>{{ item.info }}</span>
                  <span>{{ item.date }}</span>
              </li>

            </ul>
          </div>
        </div>
        <div class="m-bottom">
          <div class="video">
            <h3>项目视频监测</h3>
            <div class="box">
            <img src="../assets/item2/组 40(4).png" alt="">
            <img src="../assets/item2/组 40(4).png" alt="">
            <img src="../assets/item2/组 40(4).png" alt="">
            <img src="../assets/item2/组 40(4).png" alt=""></div>
          </div>
          <div id="map"></div>
        </div>
      </div>
</template>

<script>
export default {
    
 mounted(){

  let el = this.$echarts.init(document.getElementById('charts') )
  
    let option = {
    title:{
      text:"项目统计",
      left :20,
      textStyle:{
        fontSize:18,
        fontWeight:'bold'

      }
    },
    grid:{
      left:120

    },
    legend:{
        icon: 'rect',
        itemWidth: 20,
        itemHeight: 10,
      
      data:['筹建项目','开工项目','在建项目','验收项目'],
      right:80,
      top:20
    },
    xAxis: {
      type: 'category',
       data:['3-18','3-19','3-20','3-21','3-22','3-23','3-24','3-25',]
    },
    yAxis: {
        type: 'value'
    },
    series: [{
          symbol: "none",
        name:'筹建项目',
        data: [900, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
    },
    {     
         symbol: "none",
        name:'开工项目',
        data: [880, 432, 401, 934, 290, 1336, 120],
        type: 'line',
        smooth: true
    },
    {
        symbol: "none",
        name:'在建项目',
        data: [900, 932, 901, 934, 600, 1330, 1320],
        type: 'line',
        smooth: true
    },
    {
        symbol: "none",
        name:'验收项目',
        data: [899, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
    }]
    
  }
   el.setOption(option)
     // 我是另一个数据图的分割线
      let em = this.$echarts.init(document.getElementById('map') )
    let optiona = {
    xAxis: {
      
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLabel: {
          color:'#297AFF',
          show: true,//不显示坐标轴上的文字
    }
    },
    yAxis: {
      show:false,
        type: 'value'
    },
    
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true,
       
    symbol: "none",
  

         itemStyle : {  
                                normal : {  
                                    lineStyle:{ 
                                       
                                        color:' #297AFF '  
                                    }  
                                }  
                            },
        areaStyle:{
            normal:{
                    
                   //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                   color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                         offset: 0,
                                    color: '#FFFFFF'
                                }, {
                                    offset: 1,
                                    color: '#297AFF'
                                }]),
                                                           
                        },
           
                               
                        
   }}]
    }

   

      em.setOption(optiona)
    
   
   },
    data(){
        return {
            newsList:[

          {
            info:'dsffdsadfsfsdafsdafdsdfsfdsadsfa',
            date:'2020-4-26',
            path:'system'
          },
          {
            info:'dsffdsadfsfsdafsdafdsdfsfdsadsfa',
            date:'2020-4-26'
          },
          {
            info:'dsffdsadfsfsdafsdafdsdfsfdsadsfa',
            date:'2020-4-26'
          },
          {
            info:'dsffdsadfsfsdafsdafdsdfsfdsadsfa',
            date:'2020-4-26'
          },
          {
            info:'dsffdsadfsfsdafsdafdsdfsfdsadsfa',
            date:'2020-4-26'
          },
          {
            info:'dsffdsadfsfsdafsdafdsdfsfdsadsfa',
            date:'2020-4-26'
          }


      ]

        }

    }
}
</script>

<style>

</style>