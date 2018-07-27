<template>
  <div v-loading="loading">

    <div class="search">
      <span>时间选择</span>
      <el-date-picker
        style="width:270px"
        v-model="timeRange"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>      

      <span style="margin-left:15px">搜索</span>   
      <el-input placeholder="输入订单号查询" style="width:160px"></el-input>
    
      <el-button type="primary">查询</el-button>
      <el-button>重置</el-button>
    </div>

    <ul class="goodsmanage-main-list">
      <li 
      v-for="(item, index) in orderList" 
      :key="index" 
      v-if="orderList.length>0"
      @click="toDetail">
        <order-item :detail="item"/>
      </li>
    </ul>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="9"
      layout="total, prev, pager, next, jumper"
      :total="pageCount">
    </el-pagination>    
    <relese-button/>
  </div>
</template>
<script>
import { getGoodsList } from '@/api/goodsOwner'
import OrderItem from '@/components/Order-Item'
import ReleseButton from '@/components/Relese-Button'
export default {
  name: 'goodsmanageList',
  components: {
    OrderItem,
    ReleseButton
  },
  data() {
    return {
      loading: true,
      timeRange: '',
      pageCount: 0,
      currentPage: 1,
      orderList: []
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    toDetail() {
      this.$router.push({
        path: '/goodsmanage/goodsdetail'
      })
    }    
  },  
  mounted() {
    getGoodsList(10).then(res => {
      this.orderList = res.data.results
      this.pageCount = res.data.count
      this.loading = false
    })
  }
}
</script>
