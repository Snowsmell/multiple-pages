<template>
  <div class="goodsmanage">
    <div class="goodsmanage-head">
      <div class="container">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/goodsmanage' }">货源管理</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/goodsmanage/goodsdetail'}" v-if="!routeName" >订单详情</el-breadcrumb-item>
        </el-breadcrumb>  

        <el-row type="flex" v-if="routeName">
          <el-col :span="3">
            <p><span>全部 <em>(25)</em></span></p>
          </el-col>
          <el-col :span="3" >
            <p><span>抢单中 <em>(2)</em></span></p>
          </el-col>
          <el-col :span="3" >
            <p><span>待确认 <em>(6)</em></span></p>
          </el-col>             
          <el-col :span="3" >
            <p><span>已流标 <em>(6)</em></span></p>
          </el-col>    
          <el-col :span="3" >
            <p><span>已撤销 <em>(6)</em></span></p>
          </el-col>    
          <el-col :span="3" >
            <p><span>分配完成 <em>(5)</em></span></p>
          </el-col>      
          <el-col :span="3" >
            <p><span>审核中 <em>(12)</em></span></p>
          </el-col>  
          <el-col :span="3" >
            <p><span>未通过 <em>(6)</em></span></p>
          </el-col>                                                         
        </el-row>
      </div>       
    </div>

    <div class="goodsmanage-main">
      <router-view/>
    </div>
  </div>
</template>
<script>
import './index.scss'
export default {
  computed: {
    routeName() {
      return this.$route.name === 'goodsmanageList'
    }
  },
  data() {
    return {}
  }
}
</script>
