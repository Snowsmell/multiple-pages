<template>
  <div class="good-info">
      <h2>货源信息</h2>
      <h2>钢材/螺纹钢</h2>
      <el-row>
        <el-col :span="8"><span class="label">发货地址:</span>上海市浦东新区999号xxxxxxxxx</el-col>
        <el-col :span="8"><span class="label">收货地址:</span>上海市虹口区甘河路xxxxxx</el-col>
      </el-row>
      <el-row>
        <el-col :span="8"><span class="label">收货人:</span>某某某/133847194719</el-col>
        <el-col :span="8"><span class="label">货物重量:</span>200.00吨</el-col>
      </el-row>
      <el-row>
        <el-col :span="8"><span class="label">找车要求:</span>17米/板车</el-col>
        <el-col :span="8"><span class="label">装卸方式:</span>1装1卸</el-col>
        <el-col :span="8"><span class="label">装车时间:</span>2018年11月9日 13点</el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <span class="label">特殊说明:</span>备注信息备注信息备注信息备注信息备注信息备注信息
        </el-col>
      </el-row>
  </div>
</template>
<script>
export default {
  name: 'goodinfo',
  data() {
    return {}
  }
}
</script>
<style lang="scss">
.good-info{
  font-size: 14px;
  h2{
    font-size: 16px;
    &:first-of-type{
      font-weight: 400
    }
  }
  .el-row{
    margin: 25px 0;
    .label{
      color: #999
    }
  }
}

</style>

