<template>
  <div class="transportfollow-main">
    <detail-status/>
    <div style="padding:15px 30px">
      <detail-title/>
      <good-info/>

      <el-row type="flex">
        <el-col :span="16">
          <locus/>
        </el-col>
        <el-col :span="8">
          <detail-record/>
        </el-col>
      </el-row>

    </div>
  </div>
</template>
<script>
import { detailStatus, detailTitle, detailRecord } from '../components'
import GoodInfo from '@/components/Good-Info'
import Locus from '@/components/Locus'
export default {
  name: 'transportDetail',
  components: {
    detailStatus,
    detailTitle,
    GoodInfo,
    Locus,
    detailRecord
  },
  data() {
    return {}
  }
}
</script>
