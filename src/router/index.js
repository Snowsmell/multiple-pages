import Vue from 'vue'
import Router from 'vue-router'

const layout = () => import(/* webpackChunkName: "layout" */'@/views/layout')

const home = () => import(/* webpackChunkName: "home" */'@/views/home')
const relesesource = () => import(/* webpackChunkName: "relesesource" */'@/views/relesesource')

const goodsmanage = () => import(/* webpackChunkName: "goodsmanage" */'@/views/goodsmanage')
const goodsmanageList = () => import(/* webpackChunkName: "goodsmanageList" */'@/views/goodsmanage/components/goodsmanageList')
const goodsdetail = () => import(/* webpackChunkName: "goodsdetail" */'@/views/goodsmanage/components/goodsdetail')

const orderfollow = () => import(/* webpackChunkName: "orderfollow" */'@/views/orderfollow')
const orderfollowList = () => import(/* webpackChunkName: "orderfollowlist" */'@/views/orderfollow/components/orderfollowList')
const orderfollowDetail = () => import(/* webpackChunkName: "orderfollowDetail" */'@/views/orderfollow/components/orderfollowDetail')
const orderdetail = () => import(/* webpackChunkName: "orderdetail" */'@/views/orderfollow/components/orderdetail')

const refundRequest = () => import(/* webpackChunkName: "refundRequest" */'@/views/orderfollow/components/refundRequest')


const goodslist = () => import(/* webpackChunkName: "goodslist" */'@/views/goodslist')
const goodslistSourcelist = () => import(/* webpackChunkName: "goodslistSourcelist" */'@/views/goodslist/components/goodslistSourcelist')
const goodslistSourcedetail = () => import(/* webpackChunkName: "goodslistSourcedetail" */'@/views/goodslist/components/goodslistSourcedetail')

const myorder = () => import(/* webpackChunkName: "myorder" */'@/views/myorder')
const myorderList = () => import(/* webpackChunkName: "myorder" */'@/views/myorder/components/myorderList')
const myorderDetail = () => import(/* webpackChunkName: "myorder" */'@/views/myorder/components/myorderDetail')
const myorderQuit = () => import(/* webpackChunkName: "myorder" */'@/views/myorder/components/myorderQuit')

const transportfollow = () => import(/* webpackChunkName: "transportfollow" */'@/views/transportfollow')
const transportfollowList = () => import(/* webpackChunkName: "transportfollow" */'@/views/transportfollow/components/transportfollowList')
const transportfollowDetail = () => import(/* webpackChunkName: "transportfollow" */'@/views/transportfollow/components/transportfollowDetail')

const financial = () => import(/* webpackChunkName: "financial" */'@/views/financial')
const useraccount = () => import(/* webpackChunkName: "useraccount" */'@/views/useraccount')

const enterprise = () => import(/* webpackChunkName: "enterprise" */'@/views/enterprise')
const verified = () => import(/* webpackChunkName: "enterprise" */'@/views/enterprise/components/verified')
const changePsd = () => import(/* webpackChunkName: "enterprise" */'@/views/enterprise/components/changePsd')
const forgetPsd = () => import(/* webpackChunkName: "enterprise" */'@/views/enterprise/components/forgetPsd')
const enterpriseSet = () => import(/* webpackChunkName: "enterprise" */'@/views/enterprise/components/enterpriseSet')
const assessManage = () => import(/* webpackChunkName: "enterprise" */'@/views/enterprise/components/assessManage')
const baseInfo = () => import(/* webpackChunkName: "enterprise" */'@/views/enterprise/components/baseInfo')
const customerService = () => import(/* webpackChunkName: "enterprise" */'@/views/enterprise/components/customerService')
const newsManage = () => import(/* webpackChunkName: "enterprise" */'@/views/enterprise/components/newsManage')




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: 'home'
    },
    {
      path: '/',
      name: 'layout',
      redirect: 'home',
      component: layout,
      children: [
        {
          path: 'home',
          name: 'home',
          component: home          
        },
        {
          path: 'relesesource',
          name: 'relesesource',
          component: relesesource              
        },
        {
          path: 'goodsmanage',
          component: goodsmanage,
          children: [
            {
              path: '/',
              name: 'goodsmanageList',
              component: goodsmanageList
            },
            {
              path: 'goodsdetail',
              name: 'goodsdetail',
              component: goodsdetail 
            }
          ]
        },
        {
          path: 'orderfollow',
          component: orderfollow,
          children: [
            {
              path: '/',
              name: 'orderfollowList',
              component: orderfollowList             
            },
            {
              path: 'orderdetail',
              name: 'orderdetail',
              component: orderdetail
            },
            {
              path: 'orderdetail/orderfollowDetail',
              name: 'orderfollowDetail',
              component: orderfollowDetail
            },            
            {
              path: 'refundRequest',
              name: 'refundRequest',
              component: refundRequest              
            }
          ]
        },
        {
          path: 'financial',
          name: 'financial',
          component: financial
        },
        {
          path: 'useraccount',
          name: 'useraccount',
          component: useraccount
        },
        {
          path: 'enterprise',
          component: enterprise,
          children: [
            {
              path: '/',
              name: 'enterpriseSet',
              component: enterpriseSet,
              children: [
                {
                  path: 'baseInfo',
                  name: 'baseInfo',
                  component: baseInfo
                },
                {
                  path: 'assessManage',
                  name: 'assessManage',
                  component: assessManage
                },
                {
                  path: 'newsManage',
                  name: 'newsManage',
                  component: newsManage
                },
                {
                  path: 'customerService',
                  name: 'customerService',
                  component: customerService
                }                                                
              ]
            },
            {
              path: 'changePsd',
              name: 'changePsd',
              component: changePsd
            },
            {
              path: 'forgetPsd',
              name: 'forgetPsd',
              component: forgetPsd
            },
            {
              path: 'verified',
              name: 'verified',
              component: verified
            }           
          ]
        },      
        {
          path: 'goodslist',
          component: goodslist,
          children: [
            {
              path: '/',
              name: 'goodslistSourcelist',
              component: goodslistSourcelist
            },
            {
              path: 'goodslistSourcedetail',
              name: 'goodslistSourcedetail',
              component: goodslistSourcedetail
            }
          ]
        }, 
        {
          path: 'myorder',
          component: myorder,
          children: [
            {
              path: '/',
              name: 'myorderList',
              component: myorderList
            },
            {
              path: 'myorderDetail',
              name: 'myorderDetail',
              component: myorderDetail
            },
            {
              path: 'myorderQuit',
              name: 'myorderQuit',
              component: myorderQuit
            }
          ]
        }, 
        {
          path: 'transportfollow',
          component: transportfollow,
          children: [
            {
              path: '/',
              name: 'transportfollowList',
              component: transportfollowList
            },
            {
              path: 'transportdetail',
              name: 'transportdetail',
              component: transportfollowDetail
            }
          ]
        }                                                       
      ]
    }
  ]
})
