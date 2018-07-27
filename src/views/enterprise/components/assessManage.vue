<template>
  <div class="assessManage">
    <div class="assessManage-head">
      <span>评级方</span>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>      
    </div>
    <div class="assessManage-main">
      <table border="0" cellspacing="0">
        <thead>
          <th width="25%">评论</th>
          <th width="15%">评价人</th>
          <th width="20%">订单信息</th>
          <th width="25%">地址信息</th>
          <th width="15%">评价时间</th>          
        </thead>
        <tbody v-if="assesslist.length>0">
          <tr v-for="(item, index) in assesslist" :key="index">
            <td>{{item.assess}}</td>
            <td>{{item.person}}</td>
            <td>{{item.order}}</td>
            <td>{{item.address}}</td>
            <td>{{item.time}}</td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td colspan="4" style="border:1px solid #f1f3f5;padding:20px 0;font-size:16px">暂无评价</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'assessManage',
  data() {
    return {
      value: '',
      options: [
        {
          label: '所有',
          value: 1
        },
        {
          label: '我对货主的评价',
          value: 0
        }        
      ],
      assesslist: [
        {
          assess: '评论方未及时做出评论，默认好评！',
          person: '司机: 某某某',
          order: 'D2831820380218301',
          address: '上海浦东新区-上海黄浦区',
          time: '2018/06/23 09:10'
        },
        {
          assess: '评论方未及时做出评论，默认好评！',
          person: '司机: 某某某',
          order: 'D2831820380218301',
          address: '上海浦东新区-上海黄浦区',
          time: '2018/06/23 09:10'
        },
        {
          assess: '评论方未及时做出评论，默认好评！',
          person: '司机: 某某某',
          order: 'D2831820380218301',
          address: '上海浦东新区-上海黄浦区',
          time: '2018/06/23 09:10'
        }                
      ]
    }
  }
}
</script>
