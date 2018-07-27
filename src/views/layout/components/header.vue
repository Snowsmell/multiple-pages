<template>
  <el-header>
    <div class="app-wrap">
      <div href="#" class="header-logo">
        华瑞物联
      </div>
      <navbar/>
      <div class="header-right">
        <el-row type="flex" justify="space-between">                              
          <el-col :span="4">
            <el-badge is-dot>
              <i class="el-icon-message"></i>              
            </el-badge>
          </el-col>
          <el-col :span="14">
            {{name}}
          </el-col>
          <el-col :span="2">
            <i class="el-icon-download" @click="logOut"></i>
          </el-col>
        </el-row>
      </div>      
    </div>
  </el-header>
</template>
<script>
import navbar from './navbar'
import { mapGetters } from 'vuex'
import { removeUser } from '@/utils/auth'
export default {
  components: {
    navbar
  },
  computed: {
    ...mapGetters({
      name: 'userName'
    })
  },
  data() {
    return {}
  },
  methods: {
    logOut() {
      removeUser()
      location.href = 'http://0.0.0.0:3008'
    }
  }
}
</script>
