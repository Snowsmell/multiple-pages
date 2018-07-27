<template>
  <div class="myorder-main-detail-title">
    <h3><slot name="quit"></slot>订单号：D20190201882000 </h3>
    <el-row type="flex">
      <el-col :span="5">
        <span class="label">创建时间：</span> 
        2018/06/18 12:3
      </el-col>      
      <el-col :span="5" :offset="1">
        <span class="label">货主：</span> 
        某某某/133847194719
      </el-col>
      <el-col :span="4" :offset="9">
        <span class="label">运费：</span> 
        <span class="money">{{2000 | formatCurrency}}元</span>
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

