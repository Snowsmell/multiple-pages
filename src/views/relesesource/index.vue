<template>
  <div class="relesesource">
    <div class="relesesource-head">
      <div class="container">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>发布货源</el-breadcrumb-item>
        </el-breadcrumb>      
        <often-use/>
      </div>       
    </div>
    <div class="relesesource-main">
      <div class="relesesource-main-head">
        <h2><i class="el-icon-tickets"></i>货源信息</h2>
        <p><em>*</em> 为必填项</p>
      </div>

      <el-form 
        label-position="top" 
        label-width="80px" 
        :model="form"
        :rules="rules">
        <el-row type="flex" justify="space-between">
          <el-col :span="9">
            <el-form-item label="货物类型" prop="" >
            <el-cascader
              style="width:100%"
              placeholder="请输入货物类型"
              v-model="goodsCode"
              :options="options"
              filterable
            ></el-cascader>                            
            </el-form-item>          
          </el-col>
          <el-col :span="9">
            <el-form-item label="货物重量" prop="goods_weight">
              <el-input v-model="form.goods_weight" placeholder="请输入货物重量（吨）"></el-input>
            </el-form-item>            
          </el-col>       
        </el-row>

        <el-form-item label="出发地" >
          <el-col :span="9">
            <el-select v-model="form.start_addr_code" placeholder="请选择地区" style="width:100%">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>            
          </el-col>
          <el-col :span="14" :offset="1">
            <el-input placeholder="请输入详细地址" v-model="form.start_address" ></el-input>
            <span class="select-address" @click="selectSetoff">请选择</span>
          </el-col>
        </el-form-item>            

        <el-form-item label="目的地" >
          <el-col :span="9">
            <el-select v-model="form.end_add" placeholder="请选择地区" style="width:100%">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>            
          </el-col>
          <el-col :span="14" :offset="1">
            <el-input placeholder="请输入详细地址" v-model="form.end_address"></el-input>
            <span class="select-address" @click="selectTarget">请选择</span>
          </el-col>
        </el-form-item>   

        <el-row type="flex" justify="space-between">
          <el-col :span="9">
            <el-form-item label="货主姓名" >
              <el-input v-model="form.name" placeholder="某某某"></el-input>
            </el-form-item>          
          </el-col>
          <el-col :span="9">
            <el-form-item label="货主电话" prop="">
              <el-input v-model="form.weight"></el-input>
            </el-form-item>            
          </el-col>       
        </el-row>

        <el-row type="flex" justify="space-between">
          <el-col :span="9">
            <el-form-item label="收货人姓名" >
              <el-input v-model="form.name" placeholder="某某某"></el-input>
            </el-form-item>          
          </el-col>
          <el-col :span="9">
            <el-form-item label="收货人电话" prop="">
              <el-input v-model="form.weight"></el-input>
            </el-form-item>            
          </el-col>       
        </el-row>

        <el-row type="flex" justify="space-between">
          <el-col :span="9">
            <el-form-item label="车型车长" >
              <el-select v-model="form.start_add" placeholder="选择车型车长" style="width:100%">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>   
            </el-form-item>          
          </el-col>
          <el-col :span="9">
            <el-form-item label="装车时间" prop="">
              <el-date-picker
                style="width:100%"
                v-model="form.date"
                type="datetime"
                placeholder="选择日期时间">
              </el-date-picker>              
            </el-form-item>            
          </el-col>       
        </el-row>

        <el-form-item label="装卸方式" prop="">
          <el-col :span="9">
            <el-select v-model="form.start_add" placeholder="选择车型车长" style="width:100%">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>              
          </el-col>             
        </el-form-item>  

        <h2 style="font-size:16px;font-weight:400;border-bottom:1px solid #ddd">
          竞价信息
        </h2>

        <el-row type="flex" justify="space-between">
          <el-col :span="9">
            <el-form-item label="报价类型" >
              <el-select v-model="form.charging_mode" placeholder="选择报价类型" style="width:100%">
                <el-option label="一口价" value="1"></el-option>
                <el-option label="竞价" value="2"></el-option>
              </el-select>  
            </el-form-item>          
          </el-col>
          <el-col :span="9">
            <el-form-item label="运费" prop="">
              <el-input v-model="form.price" placeholder="请输入运费"></el-input>
            </el-form-item>            
          </el-col>       
        </el-row>

        <el-row type="flex" justify="space-between">
          <el-col :span="9">
            <el-form-item label="竞价时长" >
              <el-select v-model="form.bidding_duration" placeholder="选择时长" style="width:100%">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>  
            </el-form-item>          
          </el-col>
          <el-col :span="9">
            <el-form-item label="优先方式" prop="">
              <el-select v-model="form.bidding_rule" placeholder="选择优先方式" style="width:100%">
                <el-option label="系统自动匹配" value="1"></el-option>
                <el-option label="货主选择" value="2"></el-option>
              </el-select>  
            </el-form-item>            
          </el-col>       
        </el-row>

        <el-form-item label="特殊说明" >
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>

        <div class="relesesource-main-bottom">
          <el-checkbox label="存为常发货源" name="type" v-model="form.templet_flag"></el-checkbox>
          <el-button class="relese-button" type="primary" @click="submitForm('form')">立即发布</el-button>
        </div>

      </el-form>      
    </div>

    <el-dialog 
      class="oftenuse-address"
      title="常用联系地址" 
      :visible.sync="dialogShow" 
      modal-append-to-body>
      <el-radio-group v-model="oftenuseAdd">
        <p v-for="(item, index) in offtenused" :key="index" >
          <el-radio :label="index">
            {{item.add}}
          </el-radio>
        </p>
      </el-radio-group>
      <div slot="footer" class="dialog-footer">        
        <el-button type="primary" @click="confirmAddress">确认</el-button>
        <el-button @click="cancelAddress">取 消</el-button>
      </div>      
    </el-dialog>

  </div>
</template>
<script>
import './index.scss'
import OftenUse from './components/oftenuse'
import { getGoodsType } from '@/api/goodsOwner'
export default{
  components: {
    OftenUse
  },
  data() {
    return {
      goodsCode: [],
      form: {
        goods_type_code: '',
        goods_subtype_code: '',
        goods_weight: null,
        vehicle_types: '',
        vehicle_min_length: '',
        vehicle_max_length: '',
        load_type: '',
        charging_mode: '',
        price: '',
        price_max: '',
        bidding_duration: '',
        load_time: '',
        bidding_rule: '',
        bidding_priority: '',
        start_addr_code: '',
        end_addr_code: '',
        templet_flag: '',
        start_address: '',
        end_address: ''
      },
      rules: {
        goods_weight: [
          { required: true, message: '不能为空', trigger: 'blur' }
        ],
        goodsCode: [
          { type: 'array', required: true, message: '请选择货物类型', trigger: 'blur' }
        ]
      },
      options: [],
      dialogShow: false,
      offtenused: [
        {
          add: '某某/189834795782/上海市浦东新区996号xxxxxxxxxxx'
        },
        {
          add: '某某/189834795782/上海市浦东新区997号xxxxxxxxxxx'
        },
        {
          add: '某某/189834795782/上海市浦东新区998号xxxxxxxxxxx'
        },
        {
          add: '某某/189834795782/上海市浦东新区999号xxxxxxxxxxx'
        }                        
      ],
      oftenuseAdd: ''  
    }
  },
  methods: {
    submitForm() {
      console.log('relese')
    },
    selectSetoff() {
      console.log(1)
      this.dialogShow = true
    },
    selectTarget() {
      console.log(2)
    },
    confirmAddress() {
      if (this.oftenuseAdd) {
        this.form.start_address = this.offtenused[this.oftenuseAdd].add
      }
      this.oftenuseAdd = ''
      this.dialogShow = false
    },
    cancelAddress() {
      console.log('quxiao')
    }
  },
  watch: {
    goodsCode(newVal) {
      this.form.goods_type_code = newVal[0]
      this.form.goods_subtype_code = newVal[1]
    }
  },
  mounted() {
    getGoodsType().then(res => {
      let arr = JSON.stringify(res.data)
      arr = arr.replace(/name/g, 'label').replace(/code/g, 'value').replace(/subsets/g, 'children')
      this.options = JSON.parse(arr)
    })
  }
}
</script>
