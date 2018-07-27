<template>
  <div class="transportfollow">
    <div class="transportfollow-head">
      <div class="container">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item 
            :to="{ path: '/transportfollow' }">运单跟踪</el-breadcrumb-item>   
          <el-breadcrumb-item 
            v-if="this.$route.name === 'transportdetail'"
            :to="{ path: '/transportfollow/transportdetail' }">运单明细</el-breadcrumb-item>                         
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
