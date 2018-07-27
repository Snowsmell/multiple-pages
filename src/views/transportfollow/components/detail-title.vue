<template>
  <div class="transportfollow-main-detail-title">
    <h3>运单号：D20190201882000 </h3>
    <el-row type="flex">
      <el-col :span="5">
        <span class="label">司机信息：</span> 
        某某某/133847194719
      </el-col>      
      <el-col :span="5" :offset="1">
        <span class="label">车辆信息：</span> 
        沪A8888/载重30吨
      </el-col>
      <el-col :span="4" :offset="9">
        <span class="label">实际运输</span> 
        <span>{{20 | formatCurrency}}吨</span>
      </el-col>
    </el-row>       
  </div>
</template>
<script>
export default {
  name: 'detailtitle',
  data() {
    return {}
  }
}
</script>

