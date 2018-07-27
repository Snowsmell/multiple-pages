<template>
  <div class="home-latestorder" v-loading="loading">
    <h2>最近订单 <a href="javascript:;" @click="toAll">查看全部</a></h2>
    <el-row      
      type="flex" 
      :gutter="10" 
      justify="space-between"
      v-if="order.length>0">
      <template v-for="(item, index) in order.slice(0, 3)">
        <el-col :key="index" @click="toDetail">
          <order-item :detail="item" />
        </el-col>           
      </template>
    </el-row>
    <div v-else style="text-align:center;line-height:100px">
      您尚未创建任何订单，快去发布货源吧
    </div>
  </div>
</template>
<script>
import { getGoodsList } from '@/api/goodsOwner'
import OrderItem from '@/components/Order-Item'
export default {
  components: {
    OrderItem
  },
  data() {
    return {
      loading: true,
      order: ''
    }
  },
  methods: {
    toDetail() {
      this.$router.push({
        path: '/orderfollow/orderdetail'
      })
    },
    toAll() {
      this.$router.push({
        path: '/orderfollow'
      })
    }
  },
  mounted() {
    getGoodsList().then(res => {
      this.order = res.data.results
      this.loading = false
    })      
  }
}
</script>
