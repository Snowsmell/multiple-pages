<template>
  <div class="home-cards-item">    
    <h2>{{info.label}}</h2>
    <div class="home-cards-date">
      <slot></slot>
    </div>
    <el-row>
      <el-col :span="7">
        <div class="home-cards-item-label"><i class="el-icon-tickets"></i>订单</div>
        <div>0单</div>
      </el-col>
      <el-col :span="7">
        <div class="home-cards-item-label"><i class="el-icon-goods"></i>发货</div>
        <div>0吨</div>
      </el-col>
      <el-col :span="7">
        <div class="home-cards-item-label"><i class="el-icon-rank"></i>运费</div>
        <div>0元</div>
      </el-col>            
    </el-row>
  </div>
</template>
<script>
export default {
  props: {
    info: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  }
}

</script>
