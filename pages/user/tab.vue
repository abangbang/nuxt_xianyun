<template>
    <div class="container">
        <div class="ctrl">
            <span 
            v-for="(item,index) in ['tab1','tab2','tab3']"
            :key="index"
            @click="handleClick(index)" 
            :class="{ active:current == index }"
            >{{item}}</span>
        </div>
        <div class="content" v-if="current === 0">
            tab1 的 内容
        </div>
        <div class="content" v-if="current === 1">
            tab2 的 内容
        </div>
        <div class="content" v-if="current === 2">
            tab3 的 内容
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            current:0 //当前索引
        }
    },
    methods:{
        handleClick(num){
            this.current = num;
        }
    }
}
</script>

<style scoped lang='less'>
.container{
    padding: 50px;
    .ctrl span{
        display: inline-block;
        bottom: 1px solid #ddd;
        padding: 5px 10px;
        cursor: pointer;
    }
    .active{
        color: red;

    }
    .content{
        padding: 20px;
    }
}
</style>
