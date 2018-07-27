<template>
  <div class="header-nav">
    <el-row type="flex" justify="space-around " >
      <el-col v-for="(item, index) in nav" :key="index" >
        <router-link :to="item.link">{{item.label}}</router-link>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      roleType: 'roleCode'
    }),
    nav() {
      if (this.roleType === 8) {
        return this.cargonav
      } else {
        return this.vehiclenav
      }
    }
  },
  data() {
    return {
      cargonav: [
        {
          link: '/home',
          label: '首页'        
        },
        {
          link: '/goodsmanage',
          label: '货源管理'
        },
        {
          link: '/orderfollow',
          label: '订单跟踪'
        },
        {
          link: '/financial',
          label: '金融服务'
        },
        {
          link: '/useraccount',
          label: '账户管理'
        },      
        {
          link: '/enterprise/baseInfo',
          label: '企业设置'
        }                          
      ],
      vehiclenav: [
        {
          link: '/home',
          label: '首页'        
        },
        {
          link: '/goodslist',
          label: '货源列表'
        },
        {
          link: '/myorder',
          label: '我的订单'
        },
        {
          link: '/transportfollow',
          label: '运单跟踪'
        },
        {
          link: '/financial',
          label: '金融服务'
        },
        {
          link: '/useraccount',
          label: '账户管理'
        },      
        {
          link: '/enterprise/baseInfo',
          label: '企业设置'
        }         
      ]
    }
  }
}
</script>

