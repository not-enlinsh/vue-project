<template>
  <div class="searchList">
    <div class="downBox">
      <span>xxxx项目</span>
      <span></span>
    </div>
    <div>
      <input type="text" class="search" placeholder="2017-01-10" />
      <div class="icon">
        <i></i>
      </div>
  
    </div>
  </div>
</template>

<script>
export default {
   
};
</script>

<style>
.searchList {
  display: flex;
  margin-top: 40px;
}
.downBox {
  width: 218px;
  height: 60px;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  position: relative;
  margin-right: 24px;
}
.downBox span:nth-of-type(1) {
  width: 90px;
  line-height: 60px;

  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(61, 61, 61, 1);
  margin-left: 43px;
}
.downBox span:nth-of-type(2) {
  display: block;
  position: absolute;
  border: 7px solid transparent;
  width: 0;
  top: 25px;
  left: 150px;
  border-top-color: #999;
}

.searchList > div:last-child {
  display: flex;
}
.searchList .search {
  width: 440px;
  height: 60px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(58, 119, 251, 1);
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
}
.searchList .icon {
  display: block;
  width: 60px;
  height: 60px;
  line-height: 60px;
  background: rgba(58, 119, 251, 1);
  border-radius: 0px 4px 4px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.searchList .icon i {
  display: block;
  width: 20px;
  height: 20px;
  background-size: 100%;
  background-image: url("../assets/item2/图层 798.png");
}

</style>