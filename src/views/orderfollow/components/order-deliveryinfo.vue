<template>
  <div class="orderfollow-main-deliveryinfo">
    <h2> 运输信息 <span>(2)</span></h2>
    <dl>
      <dt>
        <el-col :span="7">上海信誉承运公司/张某某/1394757</el-col>
        <el-col :span="4" :offset="2">抢单：20.00吨</el-col>
      </dt>
      <dd>
        <el-col :span="5">
          <img src="@/assets/logo.png" style="width:42px;height:42px;float:left">
          <p class="name">李某某（司机）</p>
          <p>136481948401</p>
        </el-col>
        <el-col :span="4">车牌：沪A8887</el-col>
        <el-col :span="4">载重：10.00吨</el-col>
        <el-col :span="6">运单号：Y2280380128308402</el-col>
        <el-col :span="3" class="status">已送达</el-col>
        <el-col :span="2" class="operate">
          <router-link :to="{path:'/orderfollow/orderdetail/orderfollowDetail'}">查看</router-link>
        </el-col>
      </dd>
      <dd>
        <el-col :span="5">
          <img src="@/assets/logo.png" style="width:42px;height:42px;float:left">
          <p class="name">李某某（司机）</p>
          <p>136481948401</p>
        </el-col>
        <el-col :span="4">车牌：沪A8887</el-col>
        <el-col :span="4">载重：10.00吨</el-col>
        <el-col :span="6">运单号：Y2280380128308402</el-col>
        <el-col :span="3" class="status">已送达</el-col>
        <el-col :span="2" class="operate">
          <router-link :to="{path:'/'}">查看</router-link>
        </el-col>
      </dd>      
    </dl>
  </div>
</template>
<script>
export default {
  name: 'orderdeliveryinfo',
  data() {
    return {}
  }  
}
</script>
