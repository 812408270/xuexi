<template>
  <div>
    <div id="slider" class="mui-slider">
      <!-- 头部滑动区域 -->
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a
            class="mui-control-item mui-active"
            v-for ="item in cates" :key="item.id"
            @click="getPhotoListByCateId(item.id)"
          >{{item.title}}</a>
        </div>
      </div>
      <!-- 图片列表区域 -->
      <ul class ="pahot-list">
        <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/'+item.id" tag="li">
          <img v-lazy="item.img_url">
          <div class="info">
            <h1 class="info-title"> {{ item.title }} </h1>
            <div class="info-body"> {{ item.zhaiyao }} </div>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
// 1.导入mui的js文件
import mui from "../../lib/mui-master/dist/js/mui.js";
// 2.初始化滑动控件
export default {
  data() {
    return {
      cates:[],//所有分类的列表数组
      list:[]//图片列表是数组
    }
  },
  created() {
    this.getAllCategory();
    //默认进入页面,就主动请求,所有图片列表的数据
    this.getPhotoListByCateId(0);
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 
    });
  },
  methods:{
    getAllCategory() {
      //获取所有的图片分类
      this.$http.get('api/getimgcategory').then(result => {
        if(result.body.status ===0) {
          //手动拼接数一个最完整的分类列表
          result.body.message.unshift({ title: "全部",id: 0 })
          this.cates = result.body.message;
        }
      })
    },
    getPhotoListByCateId(cateId) {
      //根据分类Id,获取图片列表
      this.$http.get('api/getimages/'+cateId).then(result=>{
        if(result.body.status ===0) {
          this.list = result.body.message;
        }
      })
    }
  }
};
</script>

<style  scope>
* {
  touch-action: pan-y;
}
.pahot-list {
  margin: 0;
  padding: 10px;
  padding-bottom: 0;
}
.pahot-list li{
  list-style: none;
  background-color: #ccc;
  text-align: center;
  margin-bottom: 10px;
  box-shadow: 0 0 9px #999;
  position: relative;
}
.pahot-list li img {
  width: 100%;
  vertical-align: middle;
}
.pahot-list li img[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin:auto;
}

.info,
.info-title,
.info-body{
  color: white;
}
.info {
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, .4);
  max-height: 84px;
}
.info-title {
  font-size: 14px;
}
.info-body {
  font-size: 13px;
}
</style>