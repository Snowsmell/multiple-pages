<template>
  <div class="order">
    <div class="order-head">
      <div class="order-number">{{titlelabel}} {{detail.number}}</div>
      <div>
        {{detail.created_time | formatTimeSec}}
        <span :class="['order-status',statusClass[detail.status.code]]">{{detail.status.message}}</span>
      </div>
    </div>
    <div class="order-context">
      <h3>{{detail.goods_type_name}}/{{detail.goods_subtype_name}}</h3>
      <el-row type="flex" justify="space-between" :gutter="5">
        <el-col :span="6">
          <div class="order-context-label">收货人</div>
          <div>某某某</div>
        </el-col>
        <el-col :span="6">
          <div class="order-context-label">重量</div>
          <div>200吨</div>
        </el-col>
        <el-col :span="12">
          <div class="order-context-label">装车时间</div>
          <div>{{detail.updated_time | formatTimeHour}}</div>
        </el-col>         
      </el-row>
      <hr>
      <div class="order-foot">
        <div class="order-foot-label">出发</div>
        <div>{{detail.start_address}}</div> 
        <div class="order-foot-label">到达</div>
        <div>{{detail.end_address}}</div>           
      </div>        
    </div>
  </div>
</template>
<script>
export default{
  props: {
    detail: {
      required: true,
      type: Object
    }
  },
  computed: {
    titlelabel() {
      return this.$route.name === 'goodsmanageList' ? '货源编号：' : '订单编号' 
    }
  },
  data() {
    return {
      statusClass: {
        10: 'review',
        20: 'grabing',
        30: 'assignok',
        40: 'waitconfirm'
      }
    }
  }
}
</script>
<style lang="scss">
.order{
  box-shadow: 0 0 15px 3px #eee;
  transition: all .5s;
  transform: translateY(0);
  cursor: pointer;  
  &-head{
    background-color: #F6F7F9;
    padding: 15px;
    font-size: 12px;
    color:#999;
    font-weight: 400;
    vertical-align: bottom;
    line-height: 24px;
  }
  &-number{
    font-size: 14px;
    color:#333;
    
  }
  &-status{
    float: right;
    padding: 2px 12px;
    border-radius: 15px;
    margin-top: -5px;
    &.review{
      background:#e0f2e8;
      color: #24D65A 
    } 
    &.grabing{
      background:#f5eadf;
      color: #F88504 
    } 
    &.assignok{
      background:#f4e7f9;
      color: #F062FF 
    }   
    &.waitconfirm{
      background:#e4e9f9;
      color: #5C85FF; 
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
  &:hover{
    transform: translateY(-8px);
    box-shadow: 0 0 15px 6px #ddd;
  }
}
</style>

