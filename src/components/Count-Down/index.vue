<template>
  <div class="lasttime">
    剩余: <span class="hour">{{hour}}</span>:<span>{{min}}</span>:<span>{{sec}}</span>
  </div>  
</template>
<script>
export default {
  name: 'CountDown',
  props: {
    limit: {
      default() {
        return 86400
      }
    }
  },
  computed: {
    hour() {    
      let h = Math.floor(this.timeLimit / 3600)
      return h < 10 ? '0' + h : h 
    },
    min() {
      let m = Math.floor(this.timeLimit / 60) % 60
      return m < 10 ? '0' + m : m 
    },
    sec() {
      let s = this.timeLimit % 60
      return s < 10 ? '0' + s : s 
    }
  },
  data() {
    return {
      timeLimit: this.limit
    }
  },
  mounted() {
    setInterval(() => {
      this.timeLimit--
    }, 1000)
  }
}
</script>

<style lang="scss">
  .lasttime{
    line-height: 32px;
    color:#999;
    span{
      padding: 2px ;
      border-radius: 5px;
      margin: 0 3px;
      background: #F58B23;
      color:#fff
    }
  }
</style>

