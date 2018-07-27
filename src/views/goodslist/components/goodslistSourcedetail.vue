<template>
  <div>
    <detail-status/>
    <div class="content">
      <detail-time/>
      <good-info/>
      <detail-grablist/>
    </div>
    
  </div>
</template>
<script>
import { detailStatus, detailTime, detailGrablist } from '../components'
import GoodInfo from '@/components/Good-Info' 
export default {
  name: 'goodslistSourcedetail',
  components: {
    detailStatus,
    detailTime,
    GoodInfo,
    detailGrablist
  },
  data() {
    return {}
  }
}
</script>
