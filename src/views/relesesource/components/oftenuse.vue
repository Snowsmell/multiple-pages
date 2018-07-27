<template>
  <div class="oftenuse">
    <h3>
      <i class="el-icon-news"></i> 常发货源 <i></i>
      <el-tooltip class="item" effect="dark" placement="bottom-start">
        <div slot="content" style="width:150px">
          您可以把您经常使用的发货信息储存在这里，方便您下次再次使用。
        </div>
        <i class="el-icon-info"></i>
      </el-tooltip>
    </h3>      
    
    <div class="container containbox" v-if="address.length>0">
      <el-button class="prev-button" type="text" @click="prev"><i class="el-icon-arrow-left"></i></el-button>
      <el-button class="next-button" type="text" @click="next"><i class="el-icon-arrow-right"></i></el-button>
      <div class="box">        
        <ul ref="ul">
          <li v-for="(item, index) in address" :key="index">
            <el-button @click="fill" class="fill-button" size="mini">使用</el-button>
            <el-button @click="deleteAddress(index)" class="close-button" type="text"><i class="el-icon-close"></i></el-button>            
            <h3>钢材/螺纹钢{{index}}</h3>
            <div>收货人: <span>{{item.label}}</span> </div>
            <div>地址: <span>上海市浦东区</span> <img src="@/assets/establish_arrow_icon.png"> <span>上海市虹口区</span></div>
          </li>
        </ul>        
      </div>
    </div>

  </div>
</template>
<script>
import { getTemplet } from '@/api/goodsOwner'
export default{
  name: 'oftenuse',
  data() {
    return {
      offsetCount: 0,
      ulWidth: '',
      address: [
        {
          label: '张三'
        },
        {
          label: '李四'
        },
        {
          label: '王五'
        },
        {
          label: '赵六'
        },
        {
          label: '钱七'
        },
        {
          label: '王八'
        }                                        
      ]
    }
  },
  methods: {
    initCarousel() {
      if (this.address.length > 3) {
        this.ulWidth = 'width:' + (316 * this.address.length + 20 * (this.address.length - 1)) + 'px;'
        this.$refs['ul'].style.cssText = this.ulWidth
      }
    },
    next() {
      if (this.offsetCount === -1 * (this.address.length - 1)) {
        return
      }
      this.offsetCount--
      let distance = 326 * this.offsetCount
      this.$refs['ul'].style.cssText = this.ulWidth + 'margin-left:' + distance + 'px'
    },
    prev() {
      if (this.offsetCount === 0) {
        return
      }
      this.offsetCount++
      let distance = 326 * this.offsetCount
      this.$refs['ul'].style.cssText = this.ulWidth + 'margin-left:' + distance + 'px'
    },
    fill() {
      console.log('填充')
    },
    deleteAddress(index) {
      this.address.splice(index, 1)
      this.initCarousel()
    }
  },
  mounted() {
    this.initCarousel()
    // getTemplet().then(res => {
    //   console.log(res)
    // })
  }
}  
</script>
