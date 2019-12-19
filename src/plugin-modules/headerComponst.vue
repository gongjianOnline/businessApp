<!--
    内容:顶部导航栏组件
    时间:2019-11-29
    作者:龚箭
-->
<template>
    <div class="">
        <van-nav-bar
            :title="title"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft()"
        />
    </div>
</template>

<script>
import { NavBar } from 'vant';
export default {
    components:{
        [NavBar.name]:NavBar
    },
    props:{
        title:{
            type:String,
            default:"标题"
        },
        router_link:{
            type:String,
            default:"dashboard"
        },
    },
    data(){
        return {
        }
    },
    watch:{},
    computed:{},
    created(){},
    mounted(){},
    methods:{
        onClickLeft(){
            this.$router.push({
                name:this.router_link
            })
        }
    },
    
}
</script>
<style scoped>
.van-nav-bar{
    background: #ffd744;
}
.van-icon,.van-nav-bar__text{
    color: #000
}
  
</style>