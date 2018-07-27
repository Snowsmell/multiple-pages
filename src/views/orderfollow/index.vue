<template>
  <div class="orderfollow">
    <div class="orderfollow-head">
      <div class="container">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/orderfollow' }">订单跟踪</el-breadcrumb-item>
          <el-breadcrumb-item  
            v-if="routeName === 'orderdetail' || routeName === 'orderfollowDetail'" 
            :to="{path: '/orderfollow/orderdetail'}">订单详情</el-breadcrumb-item>
          <el-breadcrumb-item  
            v-if="routeName === 'orderfollowDetail' " >运单跟踪</el-breadcrumb-item>
          <el-breadcrumb-item  
            v-if="routeName === 'refundRequest'" >退款申请</el-breadcrumb-item>
        </el-breadcrumb>  

        <el-row type="flex" v-if="routeName === 'orderfollowList' ">
          <el-col :span="3">
            <p><span>全部 <em>(25)</em></span></p>
          </el-col>
          <el-col :span="3" >
            <p><span>送货中 <em>(2)</em></span></p>
          </el-col>
          <el-col :span="3" >
            <p><span>已送达 <em>(6)</em></span></p>
          </el-col>             
          <el-col :span="3" >
            <p><span>已收货 <em>(6)</em></span></p>
          </el-col>    
          <el-col :span="3" >
            <p><span>已完成 <em>(6)</em></span></p>
          </el-col>    
          <el-col :span="3" >
            <p><span>待评价 <em>(5)</em></span></p>
          </el-col>      
          <el-col :span="3" >
            <p><span>退款 <em>(12)</em></span></p>
          </el-col>                                                         
        </el-row>        
      </div>       
    </div>
    <div class="orderfollow-main">
      <router-view/>
    </div>    
  </div>
</template>
<script>
import './index.scss'
export default {
  computed: {
    routeName() {
      return this.$route.name 
    }
  },
  data() {
    return {}
  },
  methods: {
    selectStatus() {
      return {
        40: '送货中',
        50: '已送达',
        60: '已收货',
        70: '已完成'        
      }
    }
  }
}
</script>
