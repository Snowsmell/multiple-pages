<template>
  <div class="myorder-main myorder-main-quit">
    <h2>
      请填写退单原因，并上传凭证，我们将在三个工作日入内对您提交的信息进行审核，并通知货主。货主同意后方可退单
    </h2>
    
    <div class="myorder-main-quit-content">
      <p>退款金额</p>
      <p class="money">
        {{amountprice | formatCurrency}}元
      </p>
      <p style="margin-top:50px;">退款原因</p>

      <el-input
        type="textarea"
        :rows="5"
        placeholder="请输入内容"
        v-model="textarea">
      </el-input>

      <div class="myorder-main-quit-uploadPic">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture">
          <p>上传凭证</p>
          <el-button size="small" type="text">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>        
      </div>
      <el-button type="primary">提交申请</el-button>      
    </div>
  </div>
</template>
<script>
export default {
  name: 'myorderQuit',
  data() {
    return {
      textarea: '',
      amountprice: 1200,
      fileList: []      
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    }    
  }
}
</script>

