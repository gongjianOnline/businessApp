<!--
    内容:交易订单
    时间:2019--11-29
    作者:龚箭
-->
<template>
    <div class="backColor">
        <!-- 顶部导航 -->
        <headerComponst title="交易订单"
                        class="fixed "
                        routerlink="Dashboard">
        </headerComponst>

        <!-- 主视图部分 -->
        <div class="" style="padding-top:1px">   
            <!-- 筛选器 -->
            <div class="row positions tabs_height">
                <van-col span="10" 
                         class="row border center " 
                         @click="sizerBtn('Price',0)">
                    按价格
                    <div>
                        <van-icon :name="PriceState.screen" 
                                  size="22px"/>
                    </div>
                </van-col>
                <van-col span="10" 
                         class="row center"
                         @click="sizerBtn('money',1)">
                    按金额
                    <div>
                        <van-icon :name="moneyState.screen" 
                                  size="22px"/>
                    </div>
                </van-col>
                <van-col span="4">
                    <van-icon name="bars"
                              @click="showPopup"
                              size="22px"/>
                </van-col>
            </div>

            <!-- 订单 -->
            <div class="margin_auto margin_bottom_60">
                <div    class="margin_top white" 
                        v-for="(item,index) in data_list" 
                        :key="index"
                        @click="detailsFun(item)">
                    <div class="row justify-content_space-between height">   
                        <div class="margin_left">订单号:{{item.oddNum}}</div>
                        <div class="margin_right state_itle">{{item.state}}</div>
                    </div>
                    <div class="row justify-content_space-around margin_top margin_left">
                        <div class="img_div">
                            <div>商品图片</div>
                        </div>
                        <div class="margin_left margin_right">
                            <div>
                                <div class="title_1 margin_top_5 text_left">
                                    {{item.title}}
                                </div>
                                <div class="row  
                                            title_1
                                            justify-content_space-between
                                            margin_top_5">
                                    <div>已选 {{item.Model}}</div>
                                    <div>x {{item.QuantityNum}} </div>
                                </div>
                                <div class="margin_top_5 text_left">
                                    积分
                                    <span class="title_3">{{item.integral}} +</span>
                                    <span class="title_3 add_title"> ¥{{item.UnitPrice}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="margin_top border_top Totalheight">
                            <span class="margin_right title_2">共{{item.total}}件 合计:积分{{item.totalscore}}+ <span class="add_title">¥{{item.totalprice}}</span></span>    
                    </div>
                </div>
            </div>

        </div>
        
        <!-- 模态框 -->
        <van-popup v-model="show"  position="right" :style="{ height: '100%',width:'80%' }">
            <div class="">   
                <div class="title_left margin_left">订单状态</div>
                <div class="margin_top_5 margin_left">
                   <van-checkbox-group v-model="stateData" class="row">
                        <van-col span="8" >
                            <van-checkbox name="全部">全部</van-checkbox>
                        </van-col>
                        <van-col span="8" >
                            <van-checkbox name="代付款">代付款</van-checkbox>
                        </van-col>
                        <van-col span="8" >
                            <van-checkbox name="代发货">代发货</van-checkbox>
                        </van-col>
                   </van-checkbox-group>
                </div>
                <div class="margin_top_5 margin_left">
                   <van-checkbox-group v-model="stateData" class="row">
                       <van-col span="8" >
                           <van-checkbox name="待收货">待收货</van-checkbox>
                       </van-col>
                       <van-col span="8" >
                           <van-checkbox name="代评价">代评价</van-checkbox>
                       </van-col>
                       <van-col span="8" >
                            <van-checkbox name="已完成">已完成</van-checkbox>
                       </van-col>    
                   </van-checkbox-group>
                </div>
                <div class="margin_top_5 margin_left">
                   <van-checkbox-group v-model="stateData" class="row">
                        <van-col span="8" >
                           <van-checkbox name="退款中">退款中</van-checkbox>
                        </van-col>
                       <van-col span="8" >
                           <van-checkbox name="已退款">已退款</van-checkbox>
                       </van-col>
                       <van-col span="8" >
                           <van-checkbox name="已关闭">已关闭</van-checkbox>
                       </van-col>
                   </van-checkbox-group>
                </div>
            </div>

            <div class="title_left margin_left margin_top">订单时间</div>
            <div class="row">
                <van-field  v-model="startDate" 
                            placeholder="输入开始时间" 
                            class="input_width"
                            @click="DatePopup('1')"/>
                <span style="line-height: 45px;">~</span>
                <van-field  v-model="endDate" 
                            placeholder="输入结束时间" 
                            class="input_width"
                            @click="DatePopup('0')"/>
            </div>

            <div class="title_left margin_left margin_top">订单编号</div>
            <div>
                <van-field  v-model="orderNum" 
                            placeholder="请输入订单编号"/>
            </div>

            <div class="margin_top">
                <van-button round class="button backColorYellow text_color">提  交</van-button>
            </div>

        </van-popup>

        <!--选择时间模态框 -->
         <van-popup v-model="showDatePopup"  position="bottom" :style="{ height: '30%',width:'100%'}">
            <van-datetime-picker
                v-model="currentDate"
                type="date"
                @confirm="completeDateFun"
                @cancel="cancelDateFun"
            />
         </van-popup>
    </div>
</template>

<script>
import HeaderComponst from "../../plugin-modules/headerComponst"
import { 
    Icon,
    Row, 
    Col,
    Popup,
    Checkbox,
    CheckboxGroup,
    Field,
    DatetimePicker ,
    Button 
} from 'vant';
export default {
    components:{
        HeaderComponst,
        [Icon.name]:Icon,
        [Row.name]:Row,
        [Col.name]:Col,
        [Popup.name]:Popup,
        [Checkbox.name]:Checkbox,
        [CheckboxGroup.name]:CheckboxGroup,
        [Field.name]:Field,
        [DatetimePicker.name]:DatetimePicker,
        [Button.name]:Button
    },
    props:{},
    data(){
        return {
            /**价格状态 */
            PriceState:{
                screen:"ascending",
                counter:0
            },
            moneyState:{
                screen:"ascending",
                counter:0
            },
            /**模态框 */
            show:false,
            /**订单状态按钮组 */
            stateData:[],
            /**日期表单 */
            startDate:"",
            endDate:"",
            orderNum:"",
            /**选择日期配置参数*/
            showDatePopup:false,
            DatePopupIndex:null,
            currentDate:new Date(),
            
            /**模拟数据 */
            data_list:[
                {
                    oddNum:'2019112115490928',
                    state:'待付款',
                    title:"【官方正品】杯具熊儿童保温杯11款可选 316不锈钢 3D浮雕/升级款",
                    Model:"黑色/中号",
                    QuantityNum:'1',
                    integral:"109",
                    UnitPrice:"65.00",
                    total:"1",
                    totalscore:"109",
                    totalprice:'59.01'
                },
                {
                    oddNum:'2019112115490928',
                    state:'待发货',
                    title:"【官方正品】杯具熊儿童保温杯11款可选 316不锈钢 3D浮雕/升级款",
                    Model:"黑色/中号",
                    QuantityNum:'1',
                    integral:"109",
                    UnitPrice:"65.00",
                    total:"1",
                    totalscore:"109",
                    totalprice:'59.01'
                },
                {
                    oddNum:'2019112115490928',
                    state:'待收货',
                    title:"【官方正品】杯具熊儿童保温杯11款可选 316不锈钢 3D浮雕/升级款",
                    Model:"黑色/中号",
                    QuantityNum:'1',
                    integral:"109",
                    UnitPrice:"65.00",
                    total:"1",
                    totalscore:"109",
                    totalprice:'59.01'
                },
                {
                    oddNum:'2019112115490928',
                    state:'待评价',
                    title:"【官方正品】杯具熊儿童保温杯11款可选 316不锈钢 3D浮雕/升级款",
                    Model:"黑色/中号",
                    QuantityNum:'1',
                    integral:"109",
                    UnitPrice:"65.00",
                    total:"1",
                    totalscore:"109",
                    totalprice:'59.01'
                },
                {
                    oddNum:'2019112115490928',
                    state:'已完成',
                    title:"【官方正品】杯具熊儿童保温杯11款可选 316不锈钢 3D浮雕/升级款",
                    Model:"黑色/中号",
                    QuantityNum:'1',
                    integral:"109",
                    UnitPrice:"65.00",
                    total:"1",
                    totalscore:"109",
                    totalprice:'59.01'
                },
                {
                    oddNum:'2019112115490928',
                    state:'退款中',
                    title:"【官方正品】杯具熊儿童保温杯11款可选 316不锈钢 3D浮雕/升级款",
                    Model:"黑色/中号",
                    QuantityNum:'1',
                    integral:"109",
                    UnitPrice:"65.00",
                    total:"1",
                    totalscore:"109",
                    totalprice:'59.01'
                },
                {
                    oddNum:'2019112115490928',
                    state:'已退款',
                    title:"【官方正品】杯具熊儿童保温杯11款可选 316不锈钢 3D浮雕/升级款",
                    Model:"黑色/中号",
                    QuantityNum:'1',
                    integral:"109",
                    UnitPrice:"65.00",
                    total:"1",
                    totalscore:"109",
                    totalprice:'59.01'
                },
                {
                    oddNum:'2019112115490928',
                    state:'已关闭',
                    title:"【官方正品】杯具熊儿童保温杯11款可选 316不锈钢 3D浮雕/升级款",
                    Model:"黑色/中号",
                    QuantityNum:'1',
                    integral:"109",
                    UnitPrice:"65.00",
                    total:"1",
                    totalscore:"109",
                    totalprice:'59.01'
                }
            ]


        }
    },
    watch:{},
    computed:{},
    created(){},
    mounted(){},
    methods:{
        sizerBtn(sign,index){
            var dom = document.getElementsByClassName("center");
            for(let i=0;i<dom.length;i++){
                dom[i].classList.remove("border");
            }
            dom[index].classList.add("border");
            if(sign =="Price"){
                this.moneyState.counter = 0;
                this.PriceState.counter += 1;
                if(this.PriceState.counter != 1 && this.PriceState.counter%2 == 0){
                   this.PriceState.screen = "descending"
                }
                if(this.PriceState.counter != 1 && this.PriceState.counter%2 != 0){
                    this.PriceState.screen = "ascending"
                }
            }else{
                this.PriceState.counter = 0;
                this.moneyState.counter += 1;
                if(this.moneyState.counter != 1 && this.moneyState.counter%2 == 0){
                   this.moneyState.screen = "descending"
                }
                if(this.moneyState.counter != 1 && this.moneyState.counter%2 != 0){
                    this.moneyState.screen = "ascending"
                }
            }
        },
        /**模态框 */
        showPopup(){
            this.show = true
        },
        /**时间模态框 */
        DatePopup(value){
            this.DatePopupIndex = value
            this.showDatePopup = true;
        },
        /**模态框选择状态 */
        completeDateFun(value){ //完成
            let init_data = this.getNowFormatDate();
            if(this.DatePopupIndex == "1"){
                this.startDate = init_data
            }else{
                this.endDate = init_data
            }
            this.showDatePopup = false;
        },
        cancelDateFun(){ //取消
            this.showDatePopup = false;
        },
        /*时间格式封装*/
        getNowFormatDate() {
            var date = this.currentDate
            var seperator1 = "-";
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            var currentdate = year + seperator1 + month + seperator1 + strDate;
            return currentdate;
        },
        //详情跳转
        detailsFun(row){
            console.log(row)
            this.$session.set("detailsData",JSON.stringify(row));
            this.$router.push({
                name:"orderDetails"
            })
        }



    },
    
}
</script>
<style scoped>
/* 固定顶部 */
.positions{
    position: fixed;
    top:44px;
    width: 100%;
    background: #fff;

    z-index: 5;
}
.fixed{
    position: fixed;
    top:0;
    width: 100%
}
.tabs_height{
    height: 40px;
    align-items: center;
}
.backColor{
    background: #eee
}
.backColorYellow{
    background: #ffd744
}
.white{
    background: #fff
}
.margin_top{
    margin-top: 10px;
}
.margin_top_5{
    margin-top: 5px;
}
.margin_bottom{
    margin-bottom: 10px;
}
.margin_bottom_60{
    margin-bottom: 60px;
}
.margin_left{
    margin-left: 10px;
}
.margin_right{
    margin-right: 10px;
}
.row{
    display: flex;
}
.justify-content_space-around{
    justify-content:space-around
}
.justify-content_space-between{
    justify-content:space-between
}
.center{
    justify-content: center
}
.icon_height{
    height: 60px;
}
.border{
    border-bottom: 2px #ffd744 solid;
}
.text_color{
    color: #fff
}


/* 订单列表 */
.margin_auto{
    margin-top: 95px;
}
.height{
    width: 100%;
    height: 30px;
    align-items: center;
    border-bottom: 2px #eee solid
}
.img_div{
    width: 120px;
    height: 90px;
    background: #e2f5ff;
    line-height: 90px;
    color:#ccc
}
.border_top{
    border-top: 2px #eee solid
}
.Totalheight{
    height: 40px;
    line-height: 40px;
    text-align: right;
}

/**字体 */
.title_1{
    font-size: 13px;
}
.title_2{
    font-size: 18px;
}
.title_3{
    font-size: 22px;
}
.title_4{
    font-size: 24px;
}
.title_5{
    font-size: 27px;
}
.text_left{
    text-align: left
}
.state_itle{
    color: #f7d167
}
.add_title{
    color: #ff5c2a
}

/**模态框Div */
.title_left{
    text-align: left
}
.margin_top_5 >>> .van-checkbox__icon--checked .van-icon{
    background-color: #f7d167;
    border-color: #f7d167;
}
.input_width{
    width: 40%
}
.button{
    width: 40%
}

</style>