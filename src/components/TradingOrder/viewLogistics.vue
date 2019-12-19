<!--
    时间:2019-12-18
    内容:查看物流
-->
<template>
    <div class="background_gray fullScreen">
        <header-componst title="快递信息" router_link="orderDetails"></header-componst>
        <!-- 步骤条 -->
        <div class="margin_top background_white">
            <div class="row 
                        justify_content_space_around 
                        border_buttom 
                        text_size12 
                        text_color_gray" >
                <p>快递公司:顺风快递</p>
                <p>快递单号:124589653254123</p>
            </div>
            <div class="row justify_content_center">
                <van-steps direction="vertical" :active="0">
                    <van-step>
                        <h3 class="text_left">到达集散中心</h3>
                        <p class="text_left">今天 12:40</p>
                    </van-step>
                    <van-step>
                        <h3 class="text_left">包裹已发出</h3>
                        <p class="text_left">今天 10:00</p>
                    </van-step>
                    <van-step>
                        <h3 class="text_left">快递员正在揽收</h3>
                        <p class="text_left">昨天 09:30</p>
                    </van-step>
                    <van-step>
                        <h3 class="text_left">商家发货,通知快递员揽收</h3>
                        <p class="text_left">昨天 09:30</p>
                    </van-step>
                </van-steps>
            </div>   
            
        </div>
    </div>
</template>

<script>
import headerComponst from "../../plugin-modules/headerComponst"
import { Step, Steps } from "vant"
export default {
    components:{
        headerComponst,
        [Step.name]:Step,
        [Steps.name]:Steps
    },
    props:{},
    data(){
        return {
        }
    },
    watch:{},
    computed:{},
    created(){},
    mounted(){},
    methods:{},
}
</script>
<style scoped>
.background_gray{
    background: #eee
}
.background_white{
    background: #fff
}
.fullScreen{
    width: 100%;
    height: 100%;
}
.text_left{
    text-align: left
}
.text_size12{
    font-size: 14px;
}
.text_color_gray{
    color: rgb(139, 139, 139)
}
.row{
    display: flex;
}
.border_buttom{
    border-bottom: 1px solid #eee
}
.justify_content_space_around{
    justify-content: space-around
}
.justify_content_center{
    justify-content: center
}
.margin_top{
    margin-top: 10px;
}
</style>