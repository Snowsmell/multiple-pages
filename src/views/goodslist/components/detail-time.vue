<template>
  <div class="goodslist-main-time">
    <div class="relesetime">
      发布时间：2018.06.18 09:10
    </div>
    <count-down/>    
  </div>  
</template>
<script>
import CountDown from '@/components/Count-Down' 
export default {  
  name: 'detailtime',
  components: {
    CountDown
  },
  data() {
    return {}
  }
}
</script>

