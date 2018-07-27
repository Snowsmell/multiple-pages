<template>
  <div>
    <orderfollow-status/>
    <div style="padding:20px 30px">
      <order-follow-title/>
      <good-info/>
      <el-row type="flex">
        <el-col :span="16">
          <locus/>
        </el-col>
        <el-col :span="8">
          <order-follow-record/>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { OrderfollowStatus, OrderFollowTitle, OrderDeliveryInfo, OrderFollowRecord } from '../components'
import GoodInfo from '@/components/Good-Info'
import Locus from '@/components/Locus'
export default {
  name: 'orderfollowDetail',
  components: {
    OrderfollowStatus,
    OrderFollowTitle,
    OrderDeliveryInfo,
    GoodInfo,
    Locus,
    OrderFollowRecord
  },
  data() {
    return {}
  }
}
</script>
