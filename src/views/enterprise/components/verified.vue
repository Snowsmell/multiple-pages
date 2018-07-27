<template>

    <div class="enterprise-main verified">
      <div :class="[success?'hide':'','form']">
        <section>
          <h2>营业执照</h2>
          <el-row type="flex">
            <el-col :span="9">
              <div style="width:300px;height:200px;background:#F8F8F8">
                请上传营业执照照片
              </div>
              <br>
              <el-button type="primary" size="medium">
                上传营业执照
              </el-button>
            </el-col>
            <el-col :span="6">
              <div class="label">名称</div>
              <el-input placeholder="待上传名称"></el-input>

              <div class="label">经营范围</div>
              <el-input placeholder="待上传经营范围"></el-input>
              <div class="label">营业期限</div>
              <el-date-picker
              style="width:100%"
                v-model="value6"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>                           
            </el-col>
            <el-col :span="6" :offset="2">
              <div class="label">统一社会信用代码（18位）</div>
              <el-input placeholder="待上传信用代码"></el-input>
              <div class="label">住所</div>
              <el-input placeholder="待上传住所信息"></el-input>              
            </el-col>            
          </el-row>
        </section>

        <section>
          <h2>法人身份证件</h2>
          <el-row type="flex">
            <el-col :span="9">
              <div class="imgbox">
                <div></div>                
                <div></div>
              </div>
              <br>
              <el-button type="primary" size="medium">
                上传身份证正反面
              </el-button>              
            </el-col>
            <el-col :span="6">
              <div class="label">证件类型</div>
              <el-select style="width:100%"  v-model="value1" placeholder="待选择证件类型">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>              

              <div class="label">证件号码</div>
              <el-input placeholder="待上传证件号"></el-input>                         
            </el-col>
            <el-col :span="6" :offset="2">
              <div class="label">姓名</div>
              <el-input placeholder="待上传姓名"></el-input>
              <div class="label">营业有效期</div>
              <el-date-picker
                style="width:100%"
                v-model="value6"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>               
            </el-col>   
          </el-row>
        </section>

        <el-row type="flex" justify="end" >
          <el-button type="primary" @click="submitInfo" style="width:120px">
            提交
          </el-button>
        </el-row>
      </div>

      <div :class="[success?'':'hide','hint']">
        <img src="@/assets/anch_arrive_finish_15.png">
        <h2>提交成功，我们将在一个工作日里完成审核</h2>
        <p>2018.07.23  16:24</p>
      </div>
    </div>

</template>
<script>
export default {
  name: 'verified',
  data() {
    return {
      success: false,
      value1: '',
      value6: '',
      options: [
        {
          label: '身份证',
          value: 1
        },
        {
          label: '护照',
          value: 2
        }        
      ]
    }
  },
  methods: {
    submitInfo() {
      this.success = true
    }
  }
}
</script>

