import request from '@/utils/request'
import { apiURL } from './config'
const SERVER = apiURL('order-service')

/**
 * 车主获取货源列表
 * @param {[Object]} data
 */
export function getGoodsList(data) {
  return request({
    url: `${SERVER}/order/bidding/list/`,
    method: 'get',
    params: data
  })
}

