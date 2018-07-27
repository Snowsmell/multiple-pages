<template>
  <div>
    <order-steps/>
    <div style="padding:20px 30px">
      <order-title/>
      <order-delivery-info/>
      <good-info/>
      <order-record/>
    </div>
  </div>
</template>
<script>
import { OrderSteps, OrderTitle, OrderDeliveryInfo, OrderRecord } from '../components'
import GoodInfo from '@/components/Good-Info'
export default {
  name: 'orderdetail',
  components: {
    OrderSteps,
    OrderTitle,
    OrderDeliveryInfo,
    GoodInfo,
    OrderRecord
  },
  data() {
    return {}
  }
}
</script>
