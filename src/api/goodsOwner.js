import request from '@/utils/request'
import { apiURL } from './config'
const SERVER = apiURL('order-service')

/**
 * 货主货源列表
 * @param {[int]} status
 */

export function getGoodsList(status = 0) {
  return request({
    url: `${SERVER}/order/bidding/list/`,
    method: 'get',
    params: {
      status
    }      
  })
}

/**
 * 货主发布货源
 * @param {[Object]} data
 */
export function releseGood(data) {
  return request({
    url: `${SERVER}/order/bidding/`,
    method: 'post',
    data
  })
}

/**
 * 货主获取货物类型
 */
export function getGoodsType() {
  return request({
    url: `${SERVER}/goods-type/list/`,
    methods: 'get'
  })
}


/**
 * 货主发货常用模板
 */
export function getTemplet() {
  return request({
    url: `${SERVER}/order/templet/`,
    method: 'get'
  })
}

/**
 * 货主订单跟踪列表
 * @param {[int]} status
 */
export function getOrderFollowList(status = 0) {
  return request({
    url: `${SERVER}/order/`,
    method: 'get',
    params: {
      status
    }
  })
}
