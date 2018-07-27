<template>
  <div class="grablist">
    <h3>抢单列表 ({{datalist.length}})</h3>
    <el-table
      ref="multipleTable"
      :data="datalist"
      style="width: 100%"
      v-if="datalist.length>0"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="75">
      </el-table-column>
      <el-table-column
        prop="name"
        label="抢单人"> 
        <template slot-scope="scope">
          {{scope.row.name}}
        </template>               
      </el-table-column>
      <el-table-column
        prop="percent"
        label="好评率">
      </el-table-column>
      <el-table-column
        prop="weight"
        label="吨数">
        <template slot-scope="scope">
          {{scope.row.weight | formatCurrency}}
        </template>          
      </el-table-column>
      <el-table-column
        prop="price"
        label="总价格">
        <template slot-scope="scope">
          {{scope.row.price | formatCurrency}}
        </template>           
      </el-table-column>            
      <el-table-column
        prop="avgprice"
        label="均价">
        <template slot="label">
          均价 <i class="el-icon-sort"></i>
        </template>
        <template slot-scope="scope">
          {{scope.row.avgprice | formatCurrency}}
        </template>          
      </el-table-column>
    </el-table>  

    <div style="text-align:center" v-else>
      <img src="@/assets/no_order.png" alt="">
      <p>没有人抢单，换个姿势重新发布吧～</p>
    </div>


    <el-row class="grablist-foot">
      <el-col :span="12">
        已选择 <span class="primary">{{selectlist.length}}</span> 人 &nbsp;&nbsp;
        总计{{amountWeight | formatCurrency}}吨， 已分配 <span class="primary">{{assignWeight | formatCurrency}}</span>  吨，剩余 <span class="primary">{{(amountWeight - assignWeight) | formatCurrency}}</span> 吨
      </el-col>
      <el-col :span="12" style="text-align:right">
        合计: <span class="money">{{amountPrice | formatCurrency}} </span>  元
        <el-button type="primary">确定分配</el-button>
        <el-button >删除货源</el-button>
      </el-col>
    </el-row>

  </div>
</template>
<script>
export default {
  name: 'grablist',
  data() {
    return {
      datalist: [],
      datalist2: [
        {
          name: '臧三',
          percent: '98%',
          weight: 65.7,
          price: 600,
          avgprice: 10
        },
        {
          name: '利四',
          percent: '98%',
          weight: 20,
          price: 700,
          avgprice: 35
        },
        {
          name: '王武',
          percent: '98%',
          weight: 80,
          price: 400,
          avgprice: 5
        },    
        {
          name: '赵六',
          percent: '98%',
          weight: 60,
          price: 600,
          avgprice: 10
        }, 
        {
          name: '天启',
          percent: '98%',
          weight: 60,
          price: 900,
          avgprice: 15
        }                            
      ],
      selectlist: [],
      amountWeight: 200
    }
  },
  computed: {
    assignWeight() {
      let num = 0
      this.selectlist.forEach(v => {
        num += v.weight
      })
      if (num > this.amountWeight) {
        return this.amountWeight
      }
      return num
    },
    amountPrice() {
      let price = 0
      this.selectlist.forEach(v => {
        price += v.price
      })   
      return price   
    }
  },
  methods: {
    handleSelectionChange(change) {
      this.selectlist = change
    }
  }
}
</script>
