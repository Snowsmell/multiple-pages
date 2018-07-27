<template>
  <div>
    <div :class="[more?'open':'','goodslist-main-search']">
      <el-row>
      <el-col :span="7">
        <el-col :span="5">出发地</el-col> 
        <el-col :span="18"><el-input placeholder="选择出发地"></el-input></el-col>          
      </el-col>
      <el-col :span="7" :offset="1" >
        <el-col :span="5">目的地</el-col> 
        <el-col :span="18"><el-input placeholder="选择目的地"></el-input></el-col>  
      </el-col>      
      <el-col :span="7" :offset="1" class="switch">
        <el-col :span="6">时间选择</el-col> 
        <el-col :span="18">
          <el-date-picker
            style="width:100%"
            v-model="value6"
            type="daterange"
            range-separator="~"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>          
        </el-col>  
      </el-col>       
      <el-col :span="7" class="switch">
        <el-col :span="5">车长</el-col> 
        <el-col :span="18">
          <el-select
            style="width:100%"
            v-model="value10"
            multiple
            filterable            
            placeholder="请选择车长">
            <el-option
              v-for="item in options5"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>          
        </el-col>  
      </el-col>    
      <el-col :span="8" :offset="1" class="switch">
        <el-col :span="4">车型</el-col> 
        <el-col :span="20">
          <el-select
            style="width:100%"
            v-model="value10"
            multiple
            filterable            
            placeholder="请选择车型">
            <el-option
              v-for="item in options6"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>          
        </el-col>  
      </el-col>                    
      </el-row>
      <div class="goodslist-main-search-operate">
      <span @click="switchSearch">{{more?'更多':'收起'}}</span>
      <el-button type="primary">查询</el-button>
      <el-button>重置</el-button>
      </div>
    </div>
    <div class="goodslist-main-sourcelist" v-loading="loading">
      <ul>
        <li v-for="(item, index) in sourcelist" :key="index"
        @click.stop="toDetail(index)">
          <source-item :info="item">
            <count-down slot="lasttime" />
            <grab-button slot="button" @ss="disappear(index)" />
          </source-item>
        </li>
      </ul>

      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="9"
        layout="total, prev, pager, next, jumper"
        :total="pageCount">
      </el-pagination>       
    </div>
  </div>
</template>
<script>
import { goodslistSearch } from '../components'
import SourceItem from '@/components/Source-Item'
import GrabButton from '@/components/Grab-Button'
import CountDown from '@/components/Count-Down'
import { getGoodsList } from '@/api/vehicleOwner'
export default {
  name: 'goodslistSourcelist',
  components: {
    SourceItem,
    GrabButton,
    CountDown
  },
  data() {
    return {
      loading: true,
      more: true,
      value6: '',
      value10: '',
      options5: [
        {
          label: 7,
          value: 7
        },
        {
          label: 8,
          value: 8
        },
        {
          label: 10,
          value: 10
        },
        {
          label: 17,
          value: 17
        }                          
      ],
      options6: [
        {
          label: '平板',
          value: 7
        },
        {
          label: '高栏',
          value: 8
        },
        {
          label: '自卸',
          value: 10
        }                        
      ],
      sourcelist: [],
      timeRange: '',
      pageCount: 0,
      currentPage: 1               
    }
  },
  methods: {
    switchSearch() {
      this.more = !this.more
    },
    toDetail(id) {
      this.$router.push({
        path: '/goodslist/goodslistSourcedetail',
        query: {
          id
        }
      })
    },
    disappear(index) {
      console.log(index)
      console.log('time to disappear')
      this.sourcelist.splice(index, 1)
      if (this.sourcelist.length === 0) {
        this.loading = true
        this.getlist()
      }
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    getlist() {
      getGoodsList().then(res => {
        this.sourcelist = res.data.results
        this.loading = false
      })
    }     
  },
  mounted() {
    this.getlist()
  }  
}
</script>
