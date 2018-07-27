<template>
  <div class="orderfollow-main-steps">
    <el-steps :active="1" align-center>
      <el-step>        
        <div slot="icon">
          <img src="@/assets/branch_transport_continue.png" alt="">
        </div>
        <div slot="title" class="orderfollow-main-steps-title">送货中</div>
        <div slot="description" class="orderfollow-main-steps-description">
          2018/08/12 09:10
        </div>
      </el-step>
      <el-step>
        <div slot="icon">
          <img src="@/assets/anch_arrive_none.png" alt="">
        </div>
        <div slot="title" class="orderfollow-main-steps-title">已送达</div>
        <div slot="description" class="orderfollow-main-steps-description">
          2018/08/12 09:10
        </div>        
      </el-step>
      <el-step>
        <div slot="icon">
          <img src="@/assets/anch_goods_none.png" alt="">
        </div>
        <div slot="title" class="orderfollow-main-steps-title">已收货</div>
        <div slot="description" class="orderfollow-main-steps-description">
          2018/08/12 09:10
        </div>        
      </el-step>
      <el-step>
        <div slot="icon">
          <img src="@/assets/anch_finish_none.png" alt="">
        </div>
        <div slot="title" class="orderfollow-main-steps-title">已完成</div>
        <div slot="description" class="orderfollow-main-steps-description">
          2018/08/12 09:10
        </div>        
      </el-step>
    </el-steps>
  </div>
</template>
<script>
export default {
  name: 'ordersteps',
  data() {
    return {}
  }
}
</script>
