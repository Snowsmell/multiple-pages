<template>
  <div class="myorder">
    <div class="myorder-head">
      <div class="container">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item 
            :to="{ path: '/myorder' }">我的订单</el-breadcrumb-item>
          <el-breadcrumb-item 
            :to="{ path: '/myorder/myorderDetail' }" 
            v-if="this.$route.name === 'myorderDetail' || this.$route.name === 'myorderQuit'">订单详情</el-breadcrumb-item>
          <el-breadcrumb-item 
            :to="{ path: '/myorder/myorderQuit' }" 
            v-if="this.$route.name === 'myorderQuit'">退单申请</el-breadcrumb-item>                  
        </el-breadcrumb>  
      </div> 
    </div>
    <router-view/>
  </div>
</template>
<script>
import './index.scss'
export default {
  data() {
    return {}
  }
}
</script>
