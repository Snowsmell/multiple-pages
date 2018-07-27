<template>
  <div class="myorder-main-detail-deliveryinfo">
    <el-row>
      <el-col :span="5">
        运输信息
      </el-col>
      <el-col :span="13" :offset="6" class="info">
        <span class="label">已分配：</span> <span class="primary">{{ assigned | formatCurrency}}</span>吨
        <span class="label">剩余：</span> <span class="primary">{{ allamount-assigned | formatCurrency}}</span>吨
        <span class="label">总计运输：</span> {{allamount | formatCurrency}}吨
        <el-button type="primary" size="small" @click="addDriver">分配司机</el-button>
      </el-col>
    </el-row>
    <el-table
      :data="dataList.length>0?dataList : mockList"
      border
      stripe    
      style="width: 100%">
      <el-table-column
        label="货物名称"
        align="center"
        prop="goodsname"
        width="120">
      </el-table-column>
      <el-table-column
        label="运单号"
        align="center"
        prop="transportid"
        width="150">
      </el-table-column>
      <el-table-column
        label="车辆信息"
        align="center"
        prop="vehicleinfo"
        width="150">
      </el-table-column>
      <el-table-column
        label="货物重量"
        align="center"
        prop="weight"
        width="90">
      </el-table-column>    
      <el-table-column
        label="司机名"
        align="center"
        prop="drivername"
        width="90">
      </el-table-column>    
      <el-table-column
        label="联系方式"
        align="center"
        prop="driverphone"
        width="120">
      </el-table-column>        
      <el-table-column
        label="运单状态"
        align="center"
        prop="status"
        width="80">
      </el-table-column>       
      <el-table-column
        label="操作"
        align="center"        
        fixed="right">
        <template slot-scope="scope">
          <el-button type="text" :disabled="!scope.row.drivername" >查看</el-button>
          <el-button type="text" :disabled="!scope.row.drivername">编辑</el-button>
          <el-button type="text" :disabled="!scope.row.drivername">删除</el-button>

        </template>
      </el-table-column>
    </el-table>

    <el-dialog :visible.sync="dealing" width="60%">
      <el-table :data="driverslist">
        <el-table-column
          type="selection"
          width="55"
          align="center">
        </el-table-column>
        <el-table-column prop="drivername" label="司机名" width="100" align="center"></el-table-column>
        <el-table-column prop="driverphone" label="联系方式" width="160" align="center"></el-table-column>
        <el-table-column prop="servicecount" label="服务次数" width="140" align="center"></el-table-column>
        <el-table-column label="状态"  width="70" align="center">
          <template slot-scope="scope">
            <span :class="[scope.row.status>0?'free':'busy']">{{scope.row.status>0?'空闲':'忙碌'}}</span>
          </template>
        </el-table-column>
        <el-table-column label="分配车辆" width="200" align="center">
          <template slot-scope="scope">
            <el-select v-model="scope.row.vehicle" placeholder="请选择车辆">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column label="分配重量" align="center" >
          <template slot-scope="scope">
            <el-input style="width:200px" v-model="scope.row.weight" placeholder="填写吨数(吨)"></el-input>
          </template>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <span class="label">已分配:</span><span class="primary">{{20 | formatCurrency}}吨</span>
        <span class="label">剩余: </span><span class="primary">{{110 | formatCurrency}}吨</span>
        <span class="label">总计运输:</span> {{130 | formatCurrency}}吨
        <el-button type="primary" @click="dealing = false">确定分配</el-button>
      </div>      
    </el-dialog>

  </div>
</template>
<script>
export default {
  name: 'deliveryinfo',
  data() {
    return {
      // dataList: [
      //   {
      //     goodsname: '钢材/螺纹钢',
      //     vehicleinfo: '沪A8887/载重20吨',
      //     transportid: 'T17927927183082',
      //     weight: '20.00吨',
      //     drivername: '李某某',
      //     driverphone: '13947578274',
      //     status: '取货中'                   
      //   }      
      // ],
      assigned: 0,
      allamount: 130,
      dealing: false,
      dataList: [],
      mockList: [
        {
          goodsname: '钢材/螺纹钢'
        }
      ],
      driverslist: [
        {
          drivername: '某某某',
          driverphone: 133736281731,
          servicecount: 33,
          status: 0,
          vehicle: '',
          weight: ''
        },
        {
          drivername: '某某某',
          driverphone: 133736281731,
          servicecount: 33,
          status: 1,
          vehicle: '',
          weight: ''
        }        
      ]
    }
  },
  methods: {
    addDriver() {
      this.dealing = true
    }
  }
}
</script>

