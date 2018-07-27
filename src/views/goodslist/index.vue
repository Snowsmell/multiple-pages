<template>
  <div class="goodslist">
    <div class="goodslist-head">
      <div class="container">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/goodslist'}">货源列表</el-breadcrumb-item>
          <el-breadcrumb-item 
          :to="{ path: '/goodslist/goodslistSourcedetail', query }"
          v-if="this.$route.name === 'goodslistSourcedetail'">货源明细</el-breadcrumb-item>
          

        </el-breadcrumb>         
      </div>
    </div>   
    <div class="goodslist-main">
      <router-view/>
    </div> 
  </div>
</template>
<script>
import './index.scss'
export default {
  watch: {
    $route(to, from) {
      console.log(to.query)
      this.query = to.query
    }
  },
  data() {
    return {
      query: {}
    }
  }
}
</script>
