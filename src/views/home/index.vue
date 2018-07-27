<template>
  <div class="home-container">
    <el-row>
      <el-col :span="8">
        <person-info/>
      </el-col>
      <el-col :span="16">
        <agent-reminder/>
      </el-col>
    </el-row>
    <el-row 
      type="flex" :gutter="20" justify="space-between" class="home-cards">
      <el-col v-for="(item, index) in cardsInfo" :key="index">
        <card :info="item">
          <div class="home-cards-txtone">{{item.txtone}}</div>
          <div class="home-cards-txttwo">{{item.txttwo}}</div>
        </card>
      </el-col>          
    </el-row>
    <latest-order/>
  </div>
</template>
<script>
import './index.scss'
import { PersonInfo, AgentReminder, Card, LatestOrder } from './components'
export default {
  components: {
    PersonInfo,
    AgentReminder,
    Card,
    LatestOrder
  },
  data() {
    return {}
  },
  computed: {
    cardsInfo() {
      let date = new Date()
      let year = date.getFullYear() 
      let month = date.getMonth() + 1
      month = month > 10 ? month : '0' + month
      let monthweek = (date.getDate() + 6 - date.getDay()) / 7
      monthweek = Math.ceil(monthweek)
      switch (monthweek) {
        case 1 :
          monthweek = '一'
          break
        case 2 :
          monthweek = '二'
          break
        case 3 :
          monthweek = '三'
          break
        case 4 :
          monthweek = '四'
          break
        case 5 :
          monthweek = '五'
          break                                                 
      }
      return [
        {
          label: '总计',
          txtone: '',
          txttwo: ''
        },
        {
          label: '本月',
          txtone: month,
          txttwo: year    
        },
        {
          label: '本周',
          txtone: '第' + monthweek + '周',
          txttwo: (year + '.' + month)          
        }
      ]
    }
  },
  mounted() {}
}
</script>
