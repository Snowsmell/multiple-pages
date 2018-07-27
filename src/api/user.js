import request from '@/utils/request'
import { apiURL } from './config'
const SERVER = apiURL('user-service')

/**
 * 获取省市详情
 */
export function getProvinceAndCity() {
  return request({
    url: `${SERVER}/province/detail/`,
    method: 'get'
  })
}

