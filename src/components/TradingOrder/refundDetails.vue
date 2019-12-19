<template>
    <div class="background_gray fullscreen">
        <header-componst title="退款详情" router_link="refundList" class="fixed"></header-componst>
        <div class="head_state new_fixed">
            <p class="padding_left">用户已发起退款申请,请尽快处理</p>
        </div>  

        <!-- 主体 -->
        <div class="background_white remove margin_top_100">   
            <div class="title_left padding_left margin_top padding_bottom  border_bottom">
                退货商品
            </div>
            <div class="row justify_content_space_around margin_left margin_top margin_right margin_bottom">
                <div class="img_div">产品图片</div>
                <div>
                    <div class="title_left margin_left fontSize14">
                        【官方正品】杯具熊儿童保温杯11款可选 316不锈钢 3D浮雕/升级款
                    </div>
                    <div class="row justify_content_space_between margin_top color_gray fontSize14">
                        <div class="title_left margin_left">已选  黑色/中号</div>
                        <div>X 1</div>
                    </div>
                    <div class="margin_top margin_left title_left color_gray">
                        积分
                        <span class="color_back fontSize18">109+</span>
                        <span class="fontSize18 color_red">¥65.01</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="background_white remove margin_top fontSize16 color_gray_1">   
            <div class="border_bottom margin_left margin_right row justify_content_space_between color_gray" >    
                <p>退款编号</p>
                <p>026541265231564231222</p>   
            </div>
            <div class="border_bottom margin_left margin_right row justify_content_space_between color_gray" >    
                <p>退款类型</p>
                <p>退款退货</p>   
            </div>
            <div class="border_bottom margin_left margin_right row justify_content_space_between color_gray" >    
                <p>申请金额</p>
                <p>
                    (含快递费¥10.00)
                    <span>积分109+</span> 
                    <span class="color_red">¥75.01</span>   
                </p>   
            </div>
            <div class="border_bottom margin_left margin_right row justify_content_space_between color_gray" >    
                <p>退款原因</p>
                <p>多拍不想要了</p>   
            </div> 
            <div class="border_bottom margin_left margin_right row justify_content_space_between color_gray" >    
                <p>申请时间</p>
                <p>2018-01-23 12:36:00</p>   
            </div> 
            <div class="border_bottom margin_left margin_right  color_gray" >    
                <p class="title_left">退款说明</p>
                <p class="title_left">2018-01-23 12:36:00</p>   
            </div> 
            <div class="border_bottom margin_left margin_right margin_bottom60  color_gray" >    
                <p class="title_left">照片凭证</p>
                <div class="title_left img_div_mini_div">
                    <div class="img_div_mini">商家照片</div>
                    <div class="img_div_mini">商家照片</div>
                    <div class="img_div_mini">商家照片</div>
                </div>   
            </div> 
        </div>



    </div>
</template>

<script>
import headerComponst from "../../plugin-modules/headerComponst"
export default {
    components:{
        headerComponst
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
.fixed{
    position: fixed;
    top:0;
    width: 100%
}
.new_fixed{
    position: fixed;
    top:46px;
}
.background_gray{
    background: #eee
}.background_white{
    background: #fff
}
.remove{
    overflow: hidden;
}
.fullscreen{
    width: 100%;
    height: 100%;
}
.margin_top{
    margin-top: 10px
}
.margin_top_100{
    margin-top: 100px;
}
.margin_left{
    margin-left: 10px
}
.margin_bottom{
    margin-bottom: 10px
}
.margin_bottom60{
    margin-bottom: 60px;
}
.margin_right{
    margin-right: 10px
}
.padding_left{
    padding-left: 10px;
}
.padding_bottom{
    padding-bottom: 10px;
}

.border_bottom{
    border-bottom: 1px #eee solid 
}

.title_left{
    text-align: left
}

.head_state{
    width: 100%;
    height: 50px;
    background: rgb(252, 127, 127);
    text-align: left;
    overflow: hidden;
}
.head_state>p{
    color:rgb(151, 9, 9)
}
/** flex */
.row{
    display: flex;
}
.justify_content_space_around{
    justify-content: space-around
}
.justify_content_space_between{
    justify-content: space-between
}
/**字体 */
.fontSize14{
    font-size: 14px
}
.color_back{
    color: #000
} 
.color_gray_1{
    color: rgb(44, 44, 44)
}
.color_red{
    color:rgb(235, 79, 79)
}
.fontSize18{
    font-size: 18px
}
.color_gray{
    color:rgb(97, 96, 96)
}
/**图片位置 */
.img_div{
    width:200px;
    height:100px;
    background: rgb(151, 190, 185);
    display: flex;
    justify-content: center;
    align-items: center
}
.img_div_mini_div{
    display: flex;
}
.img_div_mini{
    width: 100px;
    height: 80px;
    background:rgb(141, 151, 148);
    margin-left: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center
}
</style>