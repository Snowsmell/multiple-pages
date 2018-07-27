<template>
  <div>
    <div class="enterprise-head">
      <div class="container">
        <el-row type="flex" ref="navs">
          <el-col :span="3" v-for="(item, index) in nav" :key="index" >
            <router-link :to="item.link" :class="{on:currentNav === index}" @click.native="changeBottom(index)">{{item.label}}</router-link>
          </el-col>          
        </el-row>
      </div>
    </div>
    <div class="enterprise-main">
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentNav: 0,
      nav: [
        {
          link: '/enterprise/baseInfo',
          label: '基本信息'
        },
        {
          link: '/enterprise/assessManage',
          label: '评价管理'
        },
        {
          link: '/enterprise/newsManage',
          label: '消息管理'
        },
        {
          link: '/enterprise/customerService',
          label: '客服支持'
        }                        
      ]
    }
  },
  methods: {
    changeBottom(index) {
      this.currentNav = index
    }
  }
}
</script>


