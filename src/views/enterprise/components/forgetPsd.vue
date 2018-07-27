<template>
    <div class="enterprise-main">
      <div class="forgetPsd-main">
        <el-row type="flex">
          <el-col :span="2">手机号:</el-col>
          <el-col :span="6" :offset="1">
            <el-input></el-input>
          </el-col>
        </el-row>    
        <el-row type="flex">
          <el-col :span="2">验证码:</el-col>
          <el-col :span="4" :offset="1">
            <el-input placeholder="请输入验证码"></el-input>
          </el-col>
          <a href="javascript:;" style="font-size:12px;height:16px;margin:15px 0 0 20px">获取验证码</a>
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
  name: 'forgetPsd',
  data() {
    return {}
  }
}
</script>
