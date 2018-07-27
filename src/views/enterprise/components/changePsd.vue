<template>
    <div class="enterprise-main">
      <div class="changePsd-head">
        <h2>账号：138938483981</h2>
      </div>

      <div class="changePsd-main">
        <el-row type="flex">
          <el-col :span="2">原始密码:</el-col>
          <el-col :span="6" :offset="1">
            <el-input type="password"></el-input>
          </el-col>
          <router-link style="font-size:12px;height:16px;margin:25px 0 0 10px"  :to="{path: '/enterprise/forgetPsd'}">忘记密码</router-link>
        </el-row>    
        <el-row type="flex">
          <el-col :span="2">新密码:</el-col>
          <el-col :span="6" :offset="1">
            <el-input type="password"></el-input>
          </el-col>
        </el-row>  
        <el-row type="flex">
          <el-col :span="2">确认密码:</el-col>
          <el-col :span="6" :offset="1">
            <el-input type="password"></el-input>
          </el-col>
        </el-row>     
        <el-row type="flex">
          <el-col :span="2"></el-col>
          <el-col :span="6" :offset="1">
            <el-button type="primary" size="medium">保存</el-button>
          </el-col>
        </el-row>                  
      </div>

    </div>
</template>
<script>
export default {
  name: 'changePsd',
  data() {
    return {}
  }
}
</script>
