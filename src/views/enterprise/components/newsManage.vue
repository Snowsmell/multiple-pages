<template>
  <div class="newsManage">
    <div class="newsManage-head">
      <span>级别</span>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>      
    </div>
    <div class="newsManage-main">
      <table border="0" cellspacing="0">
        <thead>
          <th width="10%">消息类型</th>
          <th width="60%">消息内容</th>
          <th width="15%">重要级别</th>
          <th width="15%">发布时间</th>
        </thead>
        <tbody v-if="newslist.length>0">
          <tr v-for="(item, index) in newslist" :key="index">
            <td>{{item.type}}</td>
            <td>{{item.news}}</td>
            <td 
            :class="[item.level > 10?item.level > 30? 'high':'middle':'normal' ]">
            {{item.level > 10?item.level > 30? '重要':'略重':'一般'}}</td>
            <td>{{item.time}}</td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td colspan="4" style="border:1px solid #f1f3f5;padding:20px 0;font-size:16px">暂无消息</td>
          </tr>
        </tbody>        
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'newsManage',
  data() {
    return {
      value: '',
      options: [
        {
          label: '所有',
          value: 1
        },
        {
          label: '系统通知',
          value: 0
        }        
      ],
      newslist: [
        {
          type: '系统消息',
          news: '今晚19:00系统维护，届时回关闭服务器，给你带来不便请谅解',
          level: 50,
          time: '2018/06/23 09:10'          
        },
        {
          type: '通知',
          news: '某某某已抢订单号为Y201902018820001货物为钢材/螺纹钢，从上海市浦东新区999号到上海市虹口区甘河路的订单。',
          level: 10,
          time: '2018/06/23 09:10'          
        },
        {
          type: '通知',
          news: '某某某已抢订单号为Y201902018820001货物为钢材/螺纹钢，从上海市浦东新区999号到上海市虹口区甘河路的订单。',
          level: 10,
          time: '2018/06/23 09:10'          
        },
        {
          type: '其他通知',
          news: '这里是通知信息文字这里是通知信息文字这里是通知信息文字这里是通知信息文字这里是通知信息文字',
          level: 30,
          time: '2018/06/23 09:10'          
        }                        
      ]
    }
  }
}
</script>
