<template>
  <div class="source" @ss="disappear">
    <div class="source-head">
      <img src="@/assets/anch_transport_finish.png" class="avatar">
      <div class="company">上海华信外贸公司  <img src="@/assets/vipl4.png"> <img src="@/assets/company_reg.png"></div>
      <div class="relesetime">发布时间：3小时前 <slot name="billstatus"></slot></div>
      
    </div>
    <div class="source-context">
      <h3>钢材/螺纹钢 {{info.code}}</h3>
      <el-row type="flex" justify="space-between" :gutter="5">
        <el-col :span="6">
          <div class="source-context-label">重量</div>
          <div>200.00吨</div>
        </el-col>
        <el-col :span="6">
          <div class="source-context-label">车辆要求</div>
          <div>板车/17米</div>
        </el-col>        
        <el-col :span="11" :offset="1">
          <div class="source-context-label">装车时间</div>
          <div>2018年11月19日 13点</div>
        </el-col>         
      </el-row>
      <hr>
      <div class="source-foot">
        <div class="source-foot-label">出发</div>
        <div>上海市浦东新区999号xxxx</div> 
        <div class="source-foot-label">到达</div>
        <div>上海市虹口区甘河路8号xxxxxx</div>           
      </div>     
      <hr>   
    </div>    
    <div class="source-operate">
      <div>运费</div>
      <div class="money">￥{{3000 | formatCurrency}}</div>
      <slot name="lasttime"></slot>
      <slot name="button"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SourceItem',
  props: {
    info: {
      type: Object,
      default() {
        return {}
      }    
    }
  },
  data() {
    return {
    }
  },
  methods: {
    disappear() {
      console.log('disappear')
    }
  }
}
</script>

<style lang="scss">
.source{
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
    padding: 15px 15px 0;
    font-size: 14px;
    .el-row{
      font-size: 12px
    }
    h3{
      font-size: 16px;
    }
    &-label{
      font-size: 12px;
      color:#999;
      margin-bottom: 5px
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
  &-operate{
    padding: 15px;
    overflow: hidden;
    .money{
      font-size: 16px;
      margin: 15px 0;
    }
    .lasttime{
      float: left;
    }
    .el-button{
      float: right;
    }
  }
  &:hover{
    transform: translateY(-8px);
    box-shadow: 0 0 15px 6px #ddd;
  }
}
</style>
