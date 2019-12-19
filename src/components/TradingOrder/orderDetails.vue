<!--
    时间:2019-12-17
    内容:订单详情
-->
<template>
    <div class="background fullscreen">
        <div>   
            <header-componst title="订单详情" router_link="tradingOrder_index" class="fixed"></header-componst> 
        </div>
        <div class="backgroundWhite margin_top_46">
            <!-- 标题 -->
            <div class="backColorYellow Modulsize">
                <div>{{Listdata.state}}</div>
            </div>

            <div class="row headr_height align_items_center" 
                @click="detailsFun()"
                v-if="stateData.logistics">
                <div class="icon_width">
                    <van-icon name="logistics" size="24"/>
                </div>
                <div>
                    <div class="margin_top margin_left margin_right text_left title_size_12 header_color">
                        <div>您已在太原金域阅山店完成取件，感谢使用菜鸟驿站，期待再次为你服务。</div>
                    </div>
                    <div class="margin_top margin_left margin_bottom title_size_12 color_gray">
                        2018-03-18 14:05:39
                    </div>
                </div>
                <div class="icon_width margin_right">
                    <van-icon name="arrow" size="24"/>
                </div>
            </div>

            <div class="row align_items_center justify_content padding_left padding_right border_bottom color_gray"
                v-if="stateData.Oddnum">
                <p>快递单号</p>
                <p>9865421456859</p>
            </div>
            <div class="row align_items_center justify_content padding_left padding_right border_bottom color_gray"
                v-if="stateData.company">
                <p>快递公司</p>
                <p>顺风快递</p>
            </div>

            <div class="row">
                <div class="icon_width">
                    <van-icon name="location-o" size="24"/>
                </div>
                <div>
                    <div class="row margin_top justify_content margin_left margin_right">
                        <div>收货人:</div>
                        <div>15031614657</div>
                    </div>
                    <div class="margin_top margin_bottom textSize margin_left">
                        收货地址:收货地址收货地址收货地址收货地址收货地址收货地址收货地址收货地址
                    </div>
                </div>
            </div>
        </div>

        <!-- 详情模块 -->
        <div class="backgroundWhite margin_top">
            <div class="text_left padding_left title_height border_bottom">商品信息</div>
            <div class="row margin_bottom">
                <div class="img_div">
                    <div class="img_div_child">产品信息</div>
                </div>
                <div>
                    <div class="title_size">【官方正品】杯具熊儿童保温杯11款可选 316不锈钢 3D浮雕/升级款</div>
                    <div class="title_size row justify_content margin_left margin_right margin_top">
                        <div>已选 黑色/中号</div>
                        <div>x1</div>
                    </div>
                    <div class="margin_top fonstleft margin_left row justify_content margin_right">
                        <div>
                            积分
                            <span class="fonstLarge">109+</span>
                            <span class="fonstLarge fonstred">¥65.00</span>
                        </div>
                        <div v-if="stateData.refundbtn">   
                            <van-button plain type="info" size="mini">退 款</van-button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border_top row justify_content padding_left padding_right title_height_40">   
                <div>积分支付</div>
                <div>积分109</div>
            </div>
            <div class="border_top row justify_content padding_left padding_right title_height_40">   
                <div>实付金额</div>
                <div>¥59.01</div>
            </div>
            <div class="border_top padding_left padding_right title_height_40 text_right">   
                <div>
                    共 <span>1</span> 件
                    合计:109+ <span>¥59.01</span>
                </div>
            </div>
        </div>

        <div class="backgroundWhite margin_top margin_bottom_60">
            <div class="row justify_content padding_left padding_right border_bottom"> 
                <p>订单编号</p>
                <p>15032154684567854154213</p>
            </div>
            <div class="row justify_content padding_left padding_right border_bottom">
                <p>发货方式</p>
                <p>快递(免邮)</p>
            </div>
            <div class="row justify_content padding_left padding_right border_bottom">
                <p>下单时间</p>
                <p>2018-01-23 12.26:00</p>
            </div>
            <div class="row justify_content padding_left padding_right border_bottom"
                v-if="stateData.paymentdate">
                <p>支付时间</p>
                <p>2018-01-23 12.26:00</p>
            </div>
            <div class="row justify_content padding_left padding_right border_bottom"
                v-if="stateData.deliverdata">
                <p>发货时间</p>
                <p>2018-01-23 12.26:00</p>
            </div>
            <div class="padding_top padding_bottom padding_right text_right"
                v-if="stateData.deliverbtn">
                <van-button type="primary" size="small" color="#ffd744">发 货</van-button>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderComponst from "../../plugin-modules/headerComponst"
import { 
    Icon,
    Button,
} from 'vant';
export default {
    components: {
        HeaderComponst,
        [Icon.name]:Icon,
        [Button.name]:Button
    },
    props: {},
    data() {
        return {
            //传参数据
            Listdata:null,
            // 状态判断
            stateData:{
                logistics:true, //物流信息
                Oddnum:true, //快递单号
                company:true, //快递公司
                refundbtn:true, //退款按钮
                paymentdate:true,//支付时间
                deliverdata:true, //发货时间
                deliverbtn:true, //发货按钮
            }


        };
    },
    watch: {},
    computed: {},
    created() {
        this.Listdata = JSON.parse(this.$session.get("detailsData"));

        switch (this.Listdata.state) {
            case "待付款":
                this.stateData.logistics = false; 
                this.stateData.Oddnum = false;
                this.stateData.company = false;
                this.stateData.refundbtn = false;
                this.stateData.paymentdate = false;
                this.stateData.deliverdata = false;
                this.stateData.deliverbtn = false;
                break;
            case "待发货":
                this.stateData.logistics = false; 
                this.stateData.Oddnum = false;
                this.stateData.company = false;
                this.stateData.paymentdate = false;
                this.stateData.deliverdata = false;
                break;
            case "待收货":
                this.stateData.Oddnum = false;
                this.stateData.company = false;
                this.stateData.deliverbtn = false;
                break;
            case "待评价":
                this.stateData.Oddnum = false;
                this.stateData.company = false;
                this.stateData.deliverbtn = false;
                break;
            default:
                this.stateData.logistics = false; 
                this.stateData.deliverbtn = false;
                break;
        }
        
    },
    mounted() {},
    methods: {
        //跳转详情
        detailsFun(){
            this.$router.push({
                name:'viewLogistics'
            })
        }
    }
};
</script>
<style scoped>
.fixed{
    position: fixed;
    top:0;
    width: 100%
}
.background{
    background: #eee
}
.backgroundWhite{
    background: #fff;
}
.backColorYellow{
    background: #ffd744
}
.color_gray{
    color:rgb(160, 157, 157);
    font-size: 14px;
}
.fullscreen{
    width: 100%;
    height: 100%;
}
.Modulsize{
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff
}
.margin_top{
    margin-top: 10px
}
.margin_top_46{
    margin-top: 45px
}
.margin_left{
    margin-left: 5px;
}
.margin_right{
    margin-right: 5px;
}
.margin_bottom{
    margin-bottom: 10px;
}
.margin_bottom_40{
    margin-bottom: 40px;
}
.margin_bottom_60{
    margin-bottom: 60px;
}
.padding_left{
    padding-left: 5px
}
.padding_right{
    padding-right: 5px
}
.padding_top{
    padding-top: 5px
}
.padding_bottom{
    padding-bottom: 5px
}
.border_bottom{
    border-bottom: 1px solid #ccc
}

.border_top{
    border-top: 1px solid #ccc
}
.row{
    display: flex;
}
.justify_content{
    justify-content:space-between
}
.align_items_center{
    align-items:center 
}
.text_left{
    text-align: left
}
.title_height{
    height: 30px;
    line-height: 30px;
}
.title_height_40{
    height: 40px;
    line-height: 40px;
}
.icon_width{
    width: 40px;
    text-align: center;
    margin-top: 10px;
}
.textSize{
    font-size: 15px;
    text-align: left;
    color: #696969
}
/**图片样式 */
.img_div{
    width: 200px;
    height: 100px;
    margin: 5px;
}
.img_div_child{
    background: rgb(178, 214, 209);
    width:100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center
}
.title_size{
    font-size: 14px;
    text-align: left
}
.title_size_12{
    font-size: 12px;
    text-align: left
}
.fonstleft{
    text-align: left
}
.fonstLarge{
    font-size: 18px;
}
.fonstred{
    color: #ff5c2a
}
.text_right{
    text-align: right;
}
/**头部 */
.headr_height{
    height: 70px;
    border-bottom: 1px#eee solid;
}
.header_color{
    color:#ffd744
}
/**图标BUG */
.icon_width >>> .van-icon{
    position: static;
}






</style>