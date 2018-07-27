<template>
  <div class="goodsmanage-main-detail" v-loading="loading">
    <div class="goodsmanage-main-detail-head">
      <img src="@/assets/logo.png" style="width:70px;float:left "> 
      <p>货源审核中</p>
      <p>我们会尽快帮您审核内容，请耐心等待</p>      
    </div>
    
    <div class="goodsmanage-main-detail-main">
      <h3>货源编号：D20190201882000 <span>竞价: <i class="money"> 2000.00元</i></span></h3>
      <el-row>
        <el-col :span="5">创建时间：2018/06/18 12:3</el-col>      
        <el-col :span="5" :offset="1">某某某/133847194719</el-col>
      </el-row>
      <hr>
      <good-info/>
      <grab-list/>

      <el-row class="republic" v-if="false">
        <el-col style="text-align:right">
          <el-button type="primary">重新发布</el-button>
          <el-button >删除货源</el-button>
        </el-col>
      </el-row>

    </div>
  </div>
</template>
<script>
import grabList from './grablist'
import GoodInfo from '@/components/Good-Info'
export default {
  name: 'goodsdetail',
  components: {
    grabList,
    GoodInfo
  },
  data() {
    return {
      loading: false
    }
  }
}
</script>
