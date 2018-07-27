<template>
  <div class="goodslist-main-status">
    <div class="company">上海德邦流科技</div>
    <div class="price">一口价：<span class="money">{{2000 | formatCurrency}}元</span></div>
    <div class="nowstatus">
      <grab-button/>
    </div>
  </div>
</template>
<script>
import GrabButton from '@/components/Grab-Button'
export default {
  name: 'detailstatus',
  components: {
    GrabButton
  },
  data() {
    return {}
  }
}
</script>
