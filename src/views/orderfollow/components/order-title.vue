<template>
  <div class="orderfollow-main-title">
    <p>订单号：D201902018820001</p>
    <dl>
      <dt>创建时间:</dt>
      <dd>2018/06/18 12:3</dd>
    </dl>
    <dl>
      <dt>货主：</dt>
      <dd>某某某/133847194719</dd>
    </dl>
    <dl>
      <dt>订单重量：</dt>
      <dd>200.00吨</dd>
    </dl>
    <dl>
      <dt>实际运输：</dt>
      <dd>130.00吨</dd>
    </dl>    
    <div class="orderfollow-main-title-operate">
      <div v-if="status<3">
        <router-link :to="{ path: '/orderfollow/refundRequest' }"> 申请退款</router-link>  
        <el-button type="primary" size="medium">确定支付</el-button>        
      </div>
      <p v-else>
        已支付
      </p>
      <p>总价: <span class="money">{{amountprice | formatCurrency}}元</span></p>
    </div>        
  </div>
</template>
<script>
export default {
  name: 'ordertitle',
  data() {
    return {
      status: 2,
      amountprice: 2000
    }
  }
}  
</script>
