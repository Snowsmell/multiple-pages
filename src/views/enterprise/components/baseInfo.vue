<template>
  <div class="baseInfo">
    <div class="baseInfo-head">
      <img src="@/assets/qrcode.jpg" class="avatar">
      <div class="status">
        尚未实名认证
        <el-button type="primary" @click="toVerified()"> 立即实名认证</el-button>
        <div>
          <router-link :to="{path: '/enterprise/changePsd'}">修改密码</router-link>
        </div>
      </div>
      <div class="username">用户名</div>
      <div class="level">vip等级预留位置 好评率98%</div>
    </div>

    <div class="baseInfo-main">
      <h3>基本信息 <a href="javascript:;" @click="toEdit">修改</a></h3>

      <div :class="classtype">
        <el-row>
          <el-col :span="7">
            <p class="label">企业名称</p>
            <div class="show">上海某某某某某物流公司</div>
            <div class="edit">
              <el-input></el-input>
            </div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="7">
            <p class="label">所在省市</p>
            <div class="show">上海</div>
            <div class="edit">
              <el-input></el-input>
            </div>            
          </el-col>
          <el-col :span="7" :offset="2">
            <p class="label">企业地址</p>
            <div class="show">上海上海市xxxxxxxxxxxxxxxxxxxx</div>
            <div class="edit">
              <el-input></el-input>
            </div>            
          </el-col>          
        </el-row>

        <el-row>
          <el-col :span="7">
            <p class="label">营业执照注册号</p>
            <div class="show">175684651354365132465651654</div>
            <div class="edit">
              <el-input></el-input>
            </div>            
          </el-col>
          <el-col :span="7" :offset="2">
            <p class="label">营业期限</p>
            <div class="show">上海上海市xxxxxxxxxxxxxxxxxxxx</div>
            <div class="edit">
              <el-date-picker
                style="width:100%"
                v-model="value6"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>              
              </div>            
          </el-col>     
          <el-col :span="5" :offset="2">
            <p class="label">营业范围</p>
            <div class="show">建材</div>
            <div class="edit">
              <el-input></el-input>
            </div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="7">
            <p class="label">身份证名称</p>
            <div class="show">某某某</div>
            <div class="edit">
              <el-input></el-input>
            </div>            
          </el-col>
          <el-col :span="7" :offset="2">
            <p class="label">家庭住址</p>
            <div class="show">上海上海市xxxxxxxxxxxxxxxxxxxx</div>
            <div class="edit">
              <el-input></el-input>
            </div>            
          </el-col>          
        </el-row>

        <el-row>
          <el-col :span="7">
            <p class="label">身份证有效期</p>
            <div class="show">2010 ~ 2020</div>
            <div class="edit">
              <el-date-picker
                style="width:100%"
                v-model="value6"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>              
              </div>            
          </el-col>            
        </el-row>

        <p>附件:</p>
        <div class="imgbox">
          <img src="@/assets/logo.png" style="width:120px;height:90px" alt="">
          <img src="@/assets/logo.png" style="width:120px;height:90px" alt="">
          <img src="@/assets/logo.png" style="width:120px;height:90px" alt="">
        </div>

        <h3>基本描述</h3>
        <div class="show textarea">
            这里是企业描述文字这里是企业描述文字这里是企业描述文字,这里是企业描述文字这里是企业描述文字这里是企业描述文字这里是企业描述文字这里是企业描述文字          
        </div>
        <div class="edit textarea">
          <el-input
            type="textarea"
            rows="5"
            placeholder="请输入内容"
            v-model="textarea">
          </el-input>          
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: 'baseInfo',
  computed: {
    classtype() {
      return this.isShow ? 'isshow' : 'isedit'
    }
  },
  data() {
    return {
      isShow: true,
      value6: '',
      textarea: ''
    }
  },
  methods: {
    toVerified() {
      this.$router.push({
        path: '/enterprise/verified'
      })
    },
    toEdit() {
      this.isShow = !this.isShow
    }
  }
}
</script>
