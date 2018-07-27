<template>
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
</template>
<script>
export default {
  data() {
    return {
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
      ]      
    }
  },
  methods: {
    switchSearch() {
      this.more = !this.more
    }
  }
}
</script>
