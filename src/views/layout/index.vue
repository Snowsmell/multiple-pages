<template>
  <el-container direction="vertical">
    <app-header/> 
    <app-main/>
    <app-footer/>
  </el-container>
</template>

<script>
import { AppHeader, AppFooter, AppMain } from './components'
export default {
  components: {
    AppHeader,
    AppFooter,
    AppMain
  },
  data() {
    return {}
  } 
}
</script>
