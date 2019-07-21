<template>
    <div class="newsinfo-tontainer">
        <!-- 大标题 -->
        <h3 class="title">{{newsinfo.title}}</h3>
        <!-- 子标题 -->
        <p class="subtitle">
            <span>发表时间:{{newsinfo.add_time | dataFormat }}</span>
            <span>点击:{{newsinfo.click}}次</span>
        </p>

        <hr>
        <!-- 内容区域 -->
        <div class="content" v-html="newsinfo.content"></div>

        <!-- 评论子组件区域 -->
        <commentBox :id="this.id"></commentBox>
    </div>
</template>

<script>
//导入 评论子组件
import comment from '../subcomponents/comment.vue'

import {Toast} from 'mint-ui';

export default {
    data(){
        return {
            id: this.$route.params.id, //将URl地址中传递过来的Id值,挂载到data上,方便以后调用
            newsinfo:{} //新闻对象
        }
    },
    created(){
        this.getNewsInfo()
    },
    methods:{
        getNewsInfo(){
            this.$http.get('api/getnew/'+this.id).then( result =>{
                if(result.body.status === 0) {
                    this.newsinfo = result.body.message[0];
                }else {
                    Toast('获取新闻失败')
                }
            })
        }
    },
    components:{ //用来注册子组件
        'commentBox': comment
    }
}
</script>

<style scoped>
    .newsinfo-tontainer {
        padding:0 4px;
    }
    .title{
        font-size: 16px;
        text-align: center;
        margin: 15px 0;
        color:red;
    }
    .subtitle{
        font-size: 13px;
        color: skyblue;
        display: flex;
        justify-content:space-between;
    }
</style>
