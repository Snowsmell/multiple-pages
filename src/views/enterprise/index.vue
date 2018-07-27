<template>
  <div class="enterprise">
    <div class="enterprise-head">
      <div class="container">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item 
            :to="{ path: '/enterprise/baseInfo' }">企业设置</el-breadcrumb-item>
          <el-breadcrumb-item 
            :to="{ path: '/enterprise/changePsd' }" 
            v-if="this.$route.name === 'changePsd' || this.$route.name === 'forgetPsd'">密码修改</el-breadcrumb-item>
          <el-breadcrumb-item 
            :to="{ path: '/enterprise/forgetPsd' }" 
            v-if="this.$route.name === 'forgetPsd'">忘记密码</el-breadcrumb-item>          
          <el-breadcrumb-item           
            :to="{ path: '/enterprise/verified' }" 
            v-if="this.$route.name === 'verified'">实名认证</el-breadcrumb-item>            
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
