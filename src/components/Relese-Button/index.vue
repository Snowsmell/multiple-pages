<template>
  <router-link :to="{path: '/relesesource'}">
    <div class="fast-relese-button" v-if="routerName">
      <i class="el-icon-goods"></i>立即发布货源
    </div>  
  </router-link>
</template>
<script>
export default {
  computed: {
    routerName() {
      let name = this.$route.name
      return (name === 'home' || name === 'goodsmanageList' || name === 'orderfollowList')  
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
.fast-relese-button{
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 5px;
  cursor: pointer;
  color:#fff;
  box-sizing: border-box;
  font-size: 16px;
  padding: 15px;
  width: 46px;
  line-height: 20px;
  background-image: linear-gradient(top,#4999FF,#7767FF );
}
</style>
