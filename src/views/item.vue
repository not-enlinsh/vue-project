<template>
  <div class="padding">
    <search />
    <div class="echarts">
      <div id="item-line"></div>
      <div class="pie">
        <div class="pie-a">
          <h2>xx项目</h2>
          <div class="flex">
          <div class="pie-content">
            <div>
              <p>20%</p>
              <p>完成率</p>
            </div>
          </div>
          <div class="message-a">
            <p>
              检查总项:<span class='blur'>160</span>项
            </p>
            <p>
              合格数
              <span class='blur'>155</span>项
            </p>
            <p>
              已整改
              <span class='blur'>1</span>项
            </p>
            <p>
              未整改
              <span class='blur'>1</span>项
            </p>
          </div></div>
        </div>
        <div id="money">
                                      
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import search from "../components/search";
export default {
  mounted() {
    (function(self) {
      let charts = self.$echarts.init(document.getElementById("item-line"));
      let option = {
        title: {
          text: "进30天要情走势",
          left: 30,
          top: 50,
          textStyle: {
            fontSize: 24
          }
        },
        grid: {
          left: 130,
          top: 170
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value",
          axisLabel: {
            show: true,
            interval: "auto",
            formatter: "{value} %"
          }
        },
        series: [
          {
            data: [20, 32, 10, 34, 90, 30, 20],
            type: "line",
            smooth: true,
            symbol: "none",
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#6AAFFF"
                }
              }
            }
          }
        ]
      };
      charts.setOption(option);
    })(this);
    (function(self) {
      let charts = self.$echarts.init(document.getElementById("money"));
      let option = {
        title: {
          text: "一周项目资金情况",
          left: 30,
          top: 50,
          textStyle: {
            fontSize: 24
          }
        },
        grid: {
          top:100
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value",
          splitLine:{
              linteStyle:{
                  type:'deshed'
              }
          }
          
        },
        series: [
          {
            data: [200, 302, 100, 304, 690, 300, 200],
            type: "line",
            smooth: true,
            symbol: "none",
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#3A77FB"
                }
              }
            }
          }
        ]
      };
      charts.setOption(option);
    })(this);
  },
  components: {
    search
  }
};
</script>

<style>
.padding {
  padding-left: 30px;
}
#item-line {
  width: 1030px;
  height: 769px;
  background: rgba(254, 254, 254, 1);
}
.padding .echarts {
  margin-top: 40px;
  display: flex;
}
.padding .echarts #item-line {
  margin-right: 20px;
}
.padding .echarts .pie .pie-a {
  width: 658px;
  height: 400px;
  overflow: hidden;
  background: rgba(255, 255, 255, 1);
}
.padding .echarts .pie .pie-a .pie-content {
  width: 194px;
  height: 192px;
  color: #fff;
  border: 10px solid #3B70F4;
  opacity: 0.9;
  border-radius: 50%;

  border-top-color: transparent;
  transform: rotate(-50deg);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 80px;
}

.padding .echarts .pie .pie-a .flex{
    display: flex;
    margin-top: 62px;
    margin-left: 104px ;
}
.padding .echarts .pie .pie-a .pie-content::before {
  content: "";
  display: block;
  position: absolute;
  border: 10px solid transparent;
  width: 174px;
  height: 172px;
  border-radius: 50%;
  border-top-color: #ffae5c;
}
.padding .echarts .pie .pie-a .pie-content div {
  transform: rotate(50deg);
  text-align: center;
}

.padding .echarts .pie .pie-a .pie-content div p:nth-child(1) {
  width: 100%;

  font-size: 40px;
  font-family: PangMenZhengDao;
  font-weight: 400;
  color: rgba(54, 229, 255, 1);

  text-align: center;
}
.padding .echarts .pie .pie-a .pie-content div p:nth-child(2) {
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: black;
  line-height: 53px;
  opacity: 0.5;
}
.padding .echarts .pie .pie-a  .message-a {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.padding .echarts .pie .pie-a  .message-a p {
 font-size:24px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(51,51,51,1);
margin-bottom: 28px;
}
.padding .echarts .pie .pie-a  .message-a p:nth-of-type(3),
.padding .echarts .pie .pie-a  .message-a p:nth-of-type(4) {
  position: relative;
}
.padding .echarts .pie .pie-a  .message-a p:nth-of-type(3)::before,
.padding .echarts .pie .pie-a  .message-a p:nth-of-type(4)::before {
  content: "";
  display: block;
  position: absolute;
  width: 14px;
  height: 14px;
  border: 3px solid rgba(54, 229, 255, 1);
  border-radius: 50%;
  left: -30px;
  top: 7px;
}
.padding .echarts .pie .pie-a  .message-a p:nth-of-type(4)::before{
    border-color: #FFAE5C !important;
}
.padding .echarts .pie .pie-a h2{

    margin: 40px 0 0 40px;
}
.padding .echarts .pie .pie-a  .message-a .blur{
    font-size:24px;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(58,119,251,1);

}
#money{
    width: 658px;
    height:400px
}
</style>