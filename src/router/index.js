import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home'
//首页功能
import Dashboard from "@/components/home/dashboard"
import TradingOrder_index from"@/components/TradingOrder/index"
import OrderDetails from "@/components/TradingOrder/orderDetails"
import ViewLogistics from"@/components/TradingOrder/viewLogistics"
import RefundList from"@/components/TradingOrder/refundList"
import RefundDetails from"@/components/TradingOrder/refundDetails"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children:[
        {
          path:"/",
          name:"dashboard",
          component:Dashboard,
          meta:{title:'首页',parent_rot:"home"}
        },
        {
          path:"/TradingOrder_index",
          name:'tradingOrder_index',
          component:TradingOrder_index,
          meta:{title:'交易订单',parent_rot:"home"}
        },
        {
          path:"/orderDetails",
          name:'orderDetails',
          component:OrderDetails,
          meta:{title:'订单详情',parent_rot:"home"}
        },
        {
          path:"/viewLogistics",
          name:'viewLogistics',
          component:ViewLogistics,
          meta:{title:'快递信息',parent_rot:"home"}
        },
        {
          path:"/refundList",
          name:'refundList',
          component:RefundList,
          meta:{title:'退款申请',parent_rot:"home"}
        },
        {
          path:"/refundDetails",
          name:'refundDetails',
          component:RefundDetails,
          meta:{title:'退款详情',parent_rot:"home"}
        },
      ]
    }
  ]
})
