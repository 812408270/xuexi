<template>
    <div class="photoinfo-container">
        <h1>{{ photoinfo.title }}</h1>
        <p class="subtitle">
            <span>发表时间:{{ photoinfo.add_time | dataFormat }}</span>
            <span>点击:{{ photoinfo.click }}次</span>
        </p>

        <hr>


        <!-- 缩略图区域 -->
        <div class="thumbs">
             <vue-preview :slides="list" @close="getImgs"></vue-preview>
        </div>
        <!-- 图片内容区域 -->
        <div class="content" v-html="photoinfo.content"></div>
        <!-- 评论子组件区域 -->
        <cmt-box :id="id"></cmt-box>
    </div>
</template>

<script>
// 导入评论子组件
import comment from '../subcomponents/comment.vue'

export default {
    data() {
        return{
            id:this.$route.params.id,//从路由中获取到的图片Id
            photoinfo:{}, //图片详情
            list:[]
        }
    },
    created(){
        this.getPhotoInfo()
        this.getImgs()
    },
    methods:{
        getPhotoInfo() {
            //获取图片的详情
            this.$http.get("api/getimageInfo/"+this.id).then(result=>{
                if(result.body.status === 0) {
                    this.photoinfo =result.body.message[0]
                }
            })
        },
        getImgs() {
        this.$http.get("api/getthumimages/" + this.id).then(res => {
            if (res.body.status === 0) {
            this.list = res.body.message;
                res.body.message.forEach(item => {
                item.w = 600;
                item.h = 400;
                item.msrc = item.src;
                    });
                console.log(res.body);
                }
            });
        }
    },
    components:{ //注册评论子组件 
        'cmt-box':comment
    }
}
</script>

<style>

.photoinfo-container {
    padding: 3px;
}
.photoinfo-container h1 {
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
}
.subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
}
.content {
    font-size: 13px;
    line-height: 30px;
}
.thumbs {
    overflow: hidden;
    margin-bottom: 10px;
}
.thumbs img {
    float: left;
    width: 100px;
    height: 100px;
    margin-right: 5px;
    margin-bottom: 5px;
    border-radius: 10px;
}
</style>
