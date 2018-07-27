<template>
  <div class="myorder-main">
    <detail-status/>
    <div class="myorder-main-content">
      <detail-title>
        <el-button type="text" slot="quit" class="quit" @click="quitbill">申请退单</el-button>
      </detail-title>
      <detail-delivery-info/>
      <good-info/>      
      <detail-record/>
    </div>
  </div>
</template>
<script>
import { detailStatus, detailTitle, detailDeliveryInfo, detailRecord } from '../components'
import goodInfo from '@/components/Good-Info'
export default {
  name: 'myorderdetail',
  components: {
    detailStatus,
    detailTitle,
    detailDeliveryInfo,
    goodInfo,
    detailRecord
  },
  data() {
    return {}
  },
  methods: {
    quitbill() {
      this.$router.push({
        path: '/myorder/myorderQuit'
      })
    }
  }
}
</script>
