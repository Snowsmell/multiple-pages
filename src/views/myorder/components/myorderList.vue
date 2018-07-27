<template>
  <div>
    <div class="myorder-head">
      <div class="container">
        <el-row type="flex" ref="navs">
          <el-col :span="3" v-for="(item, index) in nav" :key="index" >
            <div :class="{on:currentNav === index}" @click="changeBottom(index)">{{item.label}} <span>{{item.count}}</span> </div>
          </el-col>          
        </el-row>        
      </div>
    </div>

    <div class="myorder-main">
      <div class="myorder-main-search">    
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

      <div class="myorder-main-list">
        <ul>
          <li v-for="(item, index) in mybillList" :key="index"
          @click.stop="toDetail(index)">
            <source-item :info="{id: index}">
              <span slot="billstatus" style="float:right">待分配</span>
            </source-item>
          </li>
        </ul>  

        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="9"
          layout="prev, pager, next, jumper"
          :total="pageCount">
        </el-pagination>               
      </div>
    </div>

  </div>
</template>
<script>
import SourceItem from '@/components/Source-Item'
export default {
  name: 'myorderlist',
  components: {
    SourceItem
  },
  data() {
    return {
      timeRange: '',
      pageCount: 0,
      currentPage: 1,
      currentNav: 0,
      nav: [
        {
          count: 12,
          label: '待分配'
        },
        {
          count: 12,
          label: '已分配'
        },
        {
          count: 12,
          label: '抢单记录'
        },
        {
          count: 12,
          label: '退单记录'
        }                        
      ],
      mybillList: [1, 2, 3, 4, 5]
    }
  },
  methods: {
    changeBottom(index) {
      this.currentNav = index
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    toDetail(id) {
      this.$router.push({
        path: '/myorder/myorderDetail'
      })
    }    
  }  
}
</script>
