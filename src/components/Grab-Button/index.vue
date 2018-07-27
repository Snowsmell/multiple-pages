<template>
  <div class="grab-button">
    <el-button
    type="primary"
    size="small"
    @click.stop="grabbill()">
      立即抢单
    </el-button>

    <el-dialog 
      class="grabform"
      width="440px"
      top="30vh"
      center
      :visible.sync="dialogFormVisible"
      :append-to-body="true">
      <div slot="title" class="grabform-title">
      </div>
      <div class="grabform-main">
        <h4>您可获得运费</h4>
        <p class="money">{{2000 | formatCurrency}}元</p>
        <template v-if="type === 1">
          <p class="weight"><span>货物重量:</span>{{40 | formatCurrency}}吨</p>
          <el-row>
            <el-col :span="10">
              <el-input placeholder="请输入竞价金额"></el-input>
            </el-col>
            <el-col :span="10" :offset="4">
              <el-input placeholder="请输入竞价金额"></el-input>
            </el-col>
          </el-row>          
        </template>
        <template v-else>
          <p class="weight"><span>平均每吨:</span>{{40 | formatCurrency}}元 <span style="margin-left:15px">货物重量:</span>{{40 | formatCurrency}}吨</p>
          <el-row>
            <el-col :span="10" :offset="7">
              <el-input placeholder="请输入抢货吨数"></el-input>
            </el-col>
          </el-row>            
        </template>
      </div>
      <div slot="footer" class="grabform-footer">
        <el-button type="primary" @click="postGrab()">确 定</el-button>
        <el-button @click="dialogFormVisible = false">考虑一下</el-button>
      </div>
    </el-dialog>


  </div>
</template>
<script>
export default {
  name: 'grabbutton',
  data() {
    return {
      dialogFormVisible: false,
      type: 1
    }
  },
  methods: {
    grabbill() {
      this.dialogFormVisible = true
      console.log('立即抢单')
    },
    postGrab() {
      this.dialogFormVisible = false
      this.$emit('ss')
    }
  }
}
</script>
<style lang="scss">
.grabform{
  .el-dialog__header{
    padding: 0;
  }
  .el-dialog__body{
    padding: 0 25px
  }
  .el-dialog__footer{
    margin-top: 20px;
    background-color: #F6F7F9;
    padding: 20px 0;
  }
  &-title{
    height: 85px;
    background: url('../../assets/index_bg.png') no-repeat left center;
  }
  &-main{
    text-align:center;
    h4{
      font-size: 18px;
      color:#333;
      margin: 10px 0;
    }
    p.money{
      font-size: 20px
    }
    p.weight{
      font-size: 14px;
      color:#333;
      span{
        color:#999;
        font-size: 12px;
        margin-right: 5px
      }
    }
  }
  &-footer{
    .el-button{
      width: 110px;
      height: 36px;
      line-height: 12px;
    }
  }
}
</style>
