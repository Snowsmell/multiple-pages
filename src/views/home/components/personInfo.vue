<template>
  <div class="home-user">
    <div>
      <img src="@/assets/logo.png" alt=""  class="home-user-avatar">
      <div class="home-user-info">
        <h2 class="home-user-info-name">用户名</h2>
        <div>好评率98%</div>
        <div>尚未实名认证 <span>立即实名认证</span></div>           
      </div>   
    </div>
    <el-button type="primary" @click="releseSource">立即发布货源</el-button>
  </div> 
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    releseSource() {
      this.$router.push({
        name: 'relesesource'
      })
    }
  }
}
</script>
