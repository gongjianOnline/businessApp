<template>
    <div class="view_div">
        <div class="Mainview">
            <router-view></router-view>
        </div>
        <div class="lower_div">
            <van-tabbar v-model="active" v-if="mune_state">
                <van-tabbar-item name="home"
                                 icon="wap-home">标签</van-tabbar-item>
                <van-tabbar-item name="home1"
                                 icon="balance-list">订单</van-tabbar-item>
                <van-tabbar-item name="home2"
                                 icon="bookmark">库存</van-tabbar-item>
                <van-tabbar-item name="home3"
                                 icon="shop">店铺</van-tabbar-item>
            </van-tabbar>
        </div>

        <div class="New_lower_div" v-if="!mune_state">   
            <div class="widht_full row" >   
                <div class="refuse">拒绝退货</div>
                <div class="Agree">同意退货</div>
            </div>
        </div>

    </div>
</template>

<script>
import { 
    Tabbar, 
    TabbarItem ,
    Icon 
} from 'vant';

export default {
    components: {
        [Tabbar.name]:Tabbar,
        [TabbarItem.name]:TabbarItem ,
        [Icon.name]:Icon
    },
    props: {},
    data() {
        return {
            active:"home",
            mune_state:true
        };
    },
    watch: {
        $route(to,from){
            console.log(to.name)
            if(to.name == 'refundDetails'){
                this.mune_state = false
            }else{
                this.mune_state = true
            }
        }
    },
    computed: {},
    created() {
        if(this.$route.name == "refundDetails"){
            this.mune_state = false
        }else{
            this.mune_state = true
        }
    },
    mounted() {},
    methods: {}
};
</script>
<style scoped>
.view_div{
    width: 100%;
    height: 100%;
}
.van-tabbar-item--active {
    color: #ffd744;
    background: #eee;
    border-top: 6px #ffd744 solid;
}
.lower_div{
    position:absolute;
    bottom:0px;
    left: 0px;
    width: 100%;
}
.New_lower_div{
    position:fixed;
    bottom:0px;
    left: 0px;
    width: 100%;
}
.Mainview{
    width: 100%;
    height: 100%;
}

/**操作底部菜单 */
.widht_full{
    width: 100%;
    height: 50px;
}
.widht_full>div{
    width:50%;
    line-height: 50px;
}
.row{
    display: flex
}
.refuse{
    background: rgb(119, 118, 118);
    color: #fff
}
.Agree{
    background: rgb(248, 170, 2);
    color: #fff
}

</style>