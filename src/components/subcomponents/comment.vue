<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要BB的内容(最多吐槽120字)" maxlength="120" v-model="msg"></textarea>
         
         <mt-button type="primary" size="large" @click='postComment'>发表评论</mt-button>

            
            <div class="cmt-list">
                <div class="cmt-item" v-for="(item ,i) in comments" :key="item.add_time">
                    <div class="met-title">
                        第{{ i+1 }}楼&nbsp;&nbsp;用户 : {{ item.user_name }}&nbsp;&nbsp;发表时间:{{ item.add_time | dataFormat }}
                        <div class="met-body">
                            {{ item.content ==="undefined"?'此用户很懒,啥都没说':item.content}} 
                        </div>
                    </div>
                </div>
            </div>            

         <mt-button type="danger" size="large" plain @click='getMore'>加载更多</mt-button>
    </div>
</template>

<script>
import {Toast} from 'mint-ui';

export default {
    data() {
        return{
            pageIndex:1, //默认展示第一页数据
            comments:[],//所有的评论数据
            msg: ""
        };
    },
    created(){
        this.getComments();
    },
    methods:{
        getComments() { //获取评论
            this.$http.get('api/getcomments/'+ this.id +'?pageindex='+this.pageIndex)
            .then(resule=>{
                if(resule.body.status ===0) {
                    // this.comments = resule.body.message
                    //没安定获取新评论数据的时候,不要覆盖老数据,而是拼接起来
                    this.comments = this.comments.concat(resule.body.message)
                }else {
                    Toast('获取评论数据失败')
                }
            })
        },
        getMore(){ //加载更多
            this.pageIndex++;
            this.getComments()
        },
        postComment() {//发表评论
        // 校验是否为空内容
            if (this.msg.trim().length === 0) {
                return Toast("评论内容不能为空！");
            }
            // 发表评论
            // 参数1： 请求的URL地址
            // 参数2： 提交给服务器的数据对象 { content: this.msg }
            // 参数3： 定义提交时候，表单中数据的格式  { emulateJSON:true }
            this.$http.post('api/postcomment/'+ this.$route.params.id,{
                content:this.msg.trim()
            })
            .then(function(result) {
                if (result.body.status === 0) {
                    var cmt = {
                        user_name: "匿名用户",
                        add_time: Date.now(),
                        content: this.msg.trim()
                    };
                        this.comments.unshift(cmt);
                        this.msg = "";
                }
            })
        }
    },
    props:['id']
}
</script>


<style scoped>

    .cmt-container h3{
        font-size: 18px;
    }
    textarea {
        font-size: 14px;
        height: 85px;
        margin: 0;
    }
    .cmt-list {
        margin: 5px 0;
    }
    .met-title {
        background-color: #ccc;
        font-size: 13px;
        line-height: 30px;
    }
    .met-body {
        line-height: 35px;
        text-indent: 2em;
        background-color: #fff;
    }
</style>
