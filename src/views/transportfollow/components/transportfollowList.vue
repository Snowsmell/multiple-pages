<template>
  <div>
    <div class="transportfollow-head">
      <div class="container">
        <el-row type="flex" ref="navs">
          <el-col :span="3" v-for="(item, index) in nav" :key="index" >
            <div :class="{on:currentNav === index}" @click="changeBottom(index)">{{item.label}} <span>{{item.count}}</span> </div>
          </el-col>          
        </el-row>        
      </div>
    </div>

    <div class="transportfollow-main">
      <div class="transportfollow-main-search">    
        <span>时间选择</span>
        <el-date-picker
          style="width:270px"
          v-model="timeRange"
          type="daterange"
          range-separator="~"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>      
        
        <span style="margin:0 15px">搜索</span>   
        <el-input placeholder="输入订单号查询" style="width:200px"></el-input>            
        
        <el-button>清空</el-button>
        <el-button type="primary">查询</el-button>
      </div>

      <div class="transportfollow-main-list">
        <ul>
          <li v-for="(item, index) in mybillList" :key="index"
          @click.stop="toDetail(index)">          
            <transportfollow-list-item :info="{id: index}">
              <span slot="billstatus" style="float:right">待分配</span>
            </transportfollow-list-item>
          </li>
        </ul>         
      </div>

    </div>
  </div>
</template>
<script>
import { transportfollowListItem } from '../components'

export default {
  name: 'transportfollowList',
  components: {
    transportfollowListItem
  },
  data() {
    return {
      currentNav: 0,
      nav: [
        {
          count: 48,
          label: '全部'
        },
        {
          count: 12,
          label: '取货中'
        },
        {
          count: 12,
          label: '送货中'
        },
        {
          count: 12,
          label: '已送达'
        },
        {
          count: 12,
          label: '已收货'
        }                                  
      ],
      mybillList: [1, 2, 3, 4, 5]
    }
  },
  methods: {
    changeBottom(index) {
      this.currentNav = index
    },
    timeRange() {
      console.log(11)
    },
    toDetail() {
      this.$router.push({
        path: '/transportfollow/transportdetail'
      })
    }
  }
}
</script>
