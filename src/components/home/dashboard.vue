<!--
    内容:首页
    时间:2019-11-29
    作者:龚箭
-->
<template>
    <div class="view_div">
        <div class="view_div backColr">   
            <div class="white padding_top title_1">   
                深圳XX供应商公司
            </div>
            <div class="white margin_top title_2">
                今日订单金额(元)
            </div>
            <div class="white margin_top title_4">
                ¥ 200.56
            </div>
            <div class="heard_flex white margin_top">
                <div>
                    <div class="title_2">昨日订单金额(元)</div>
                    <div class="title_3 margin_top_10">¥999.99</div>
                </div>
                <div>
                    <div class="title_2">本月订单金额(元)</div>
                    <div class="title_3 margin_top_10">¥999.99</div>
                </div>
            </div>
            <!-- 详情提示 -->
            <div class='backClor'>
                <div class="row padding_top_30 padding_left_20">
                    <div class="icon_div">
                        <div></div>
                    </div>   
                    <div class="icon_title">店铺及商品提示</div>      
                </div>
                <div class="row justify_content_space_around margin_top">
                    <div>   
                        <div class="title_4">50</div>
                        <div class="margin_top_5 gray">低库存(件)</div>
                    </div>
                    <div>
                        <div class="title_4">80</div>
                        <div class="margin_top_5 gray">出售中(件)</div>
                    </div>
                    <div>
                        <div class="title_4">100</div>
                        <div class="margin_top_5 gray">已下架(件)</div>
                    </div>
                </div>
                <!-- 分割线 -->
                <div class="division"></div>
                <!-- 交易提示 -->
                <div class="row padding_left_20">
                    <div class="icon_div">
                        <div></div>
                    </div>   
                    <div class="icon_title">交易提示</div>      
                </div>
                <div class="row justify_content_space_around margin_top">
                    <div @click="tradingOrderBtn(1)">
                        <div class="title_4">0</div>
                        <div class="margin_top_5 gray">待付款</div>
                    </div>
                    <div @click="tradingOrderBtn(1)">
                        <div class="title_4">0</div>
                        <div class="margin_top_5 gray">代发货</div>
                    </div>
                    <div @click="tradingOrderBtn(1)">
                        <div class="title_4">0</div>
                        <div class="margin_top_5 gray">待收货</div>
                    </div>
                    <div @click="tradingOrderBtn(1)">
                        <div class="title_4">0</div>
                        <div class="margin_top_5 gray">待评价</div>
                    </div>
                </div>
                <div class="row justify_content_space_around margin_top padding_botton_10">
                    <div @click="tradingOrderBtn(2)">
                        <div class="title_4">0</div>
                        <div class="margin_top_5 gray">退款中</div>
                    </div>
                    <div @click="tradingOrderBtn(2)">
                        <div class="title_4">0</div>
                        <div class="margin_top_5 gray">已完成</div>
                    </div>
                    <div @click="tradingOrderBtn(2)">
                        <div class="title_4">0</div>
                        <div class="margin_top_5 gray">已退货</div>
                    </div>
                    <div @click="tradingOrderBtn(2)">
                        <div class="title_4">0</div>
                        <div class="margin_top_5 gray">已取消</div>
                    </div>
                </div>
                <!-- 分割线 -->
                <div class="division"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components:{},
    props:{},
    data(){
        return {
        }
    },
    watch:{},
    computed:{},
    created(){},
    mounted(){},
    methods:{
        /**交易订单跳转 */
        tradingOrderBtn(index){
            if(index == 1){
                this.$router.push({
                    name:"tradingOrder_index"
                })
            }else{
                this.$router.push({
                    name:"refundList"
                })
            }
            
        },
        
    },
    
}
</script>
<style scoped>
    .backColr{
        background: #ffd744;
    }
    .white{
        color: #fff
    }
    .gray{
        color:#ccc
    }
    .heard_flex{
        display: flex;
        justify-content:space-around;
    }
    .padding_top{
        padding-top: 20px;
    }
    .padding_top_30{
        padding-top: 30px;
    }
    .padding_left_20{
        padding-left:20px;
    }
    .padding_botton_10{
        padding-bottom: 32px;
    }
    .margin_top{
        margin-top: 20px;
    }
    .title_1{
        font-size: 18px;
    }
    .title_2{
        font-size: 21px;
    }
    .title_3{
        font-size: 24px;
    }
    .title_4{
        font-size: 27px; 
    }
    .margin_top_10{
        margin-top: 10px;
    }
    .margin_top_5{
        margin-top: 5px;
    }

    /* 详情提示 */
    .backClor{
        background: #fff;
        width: 100%;
        height: auto;
        border-top-left-radius:40px;
        border-top-right-radius:40px;
        margin-top: 10px;
    }
    .row{
        display: flex;
    }
    .justify_content_space_around{
        justify-content:space-around
    }
    .icon_div{
        width: 20px;
        height: 20px;
    }
    .icon_div>div{
        width: 3px;
        height: 20px;
        background:#ffd744
    }
    .icon_title{
        height: 20px;
        display: flex;
        align-items: center
    }
    /* 分割线 */
    .division{
        width: 100%;
        height: 6px;
        background: #ccc;
        margin-top: 20px;
        margin-bottom: 20px;
    }
</style>