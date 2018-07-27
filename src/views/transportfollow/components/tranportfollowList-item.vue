<template>
  <div class="transportfollowbill">
    <div class="transportfollowbill-head">
      <div class="company">运单号：Y201902018820001</div>
      <div class="relesetime">2018年11月9日 13点 <slot name="billstatus"></slot></div>
      
    </div>
    <div class="transportfollowbill-context">
      <h3>钢材/螺纹钢</h3>
      <el-row >
        <el-col :span="12">
          <div class="transportfollowbill-context-label">司机</div>
          <div>某某某</div>
        </el-col>
        <el-col :span="12">
          <div class="transportfollowbill-context-label">联系方式</div>
          <div>1238749182</div>
        </el-col>                          
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="transportfollowbill-context-label">车辆信息</div>
          <div>沪A8887/载重30吨</div>
        </el-col>      
        <el-col :span="12">
          <div class="transportfollowbill-context-label">实运重量</div>
          <div>32吨</div>
        </el-col>         
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="transportfollowbill-context-label">收货人</div>
          <div>某某某</div>
        </el-col>          
      </el-row>
      <hr>
      <div class="transportfollowbill-foot">
        <div class="transportfollowbill-foot-label">出发</div>
        <div>上海市浦东新区999号xxxx</div> 
        <div class="transportfollowbill-foot-label">到达</div>
        <div>上海市虹口区甘河路8号xxxxxx</div>           
      </div>     
    </div>    
  </div>
</template>

<script>

export default {
  name: 'transportfollowbillItem',
  props: {
    info: {
      type: Object      
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss">
  .transportfollowbill{
  box-shadow: 0 0 15px 3px #eee;
  transition: all .5s;
  transform: translateY(0);
  cursor: pointer;  
  &-head{
    background-color: #F6F7F9;
    padding: 8px 15px;
    color:#333;    
    line-height: 20px;
    .avatar{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      float: left;
      margin-right: 10px;
    }
    .company{
      font-size: 14px;  
      img{
        vertical-align: bottom
      }    
    }
    .relesetime{
      font-size: 12px;
      color:#999;
    }
  }
  &-context{
    padding: 15px;
    font-size: 14px;
    .el-row{
      font-size: 12px
    }
    h3{
      font-size: 16px;
      margin: 10px 0 0;
    }
    &-label{
      font-size: 12px;
      color:#999;
      margin:15px 0 5px
    }
  }
  &-foot{
    div{
      margin-bottom: 10px;
    }    
    &-label{
      font-size: 12px;
      color:#999;
      margin-bottom: 0 !important
    }

  }
  &:hover{
    transform: translateY(-8px);
    box-shadow: 0 0 15px 6px #ddd;
  }
  }
</style>
