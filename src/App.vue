<template>
  <div class="content">
    <!-- 顶部header区域 -->
    <mt-header fixed title="黑马程序员-Vue项目"></mt-header>


    <!-- 中间的路由router-view区域 -->
	<transition>
		<router-view></router-view>
	</transition>

    <!-- 底部tabbar区域 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-llb" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-llb" to="/member">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-llb" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-llb" to="/search">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
  	
</template>
    
<script>

</script>


<style scoped>
.mint-header {
	z-index: 99;
}
.content {
	padding-top: 40px;
	overflow: hidden;
	padding-bottom: 50px;
}
.v-enter{
	opacity: 0;
	transform: translateX(100%);
}
.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}
.v-enter-active,
.v-leave-active{
	transition: all .5s ease;
}
.mui-bar-tab .mui-tab-item-llb.mui-active {
color: #007aff;
}
.mui-bar-tab .mui-tab-item-llb {
display: table-cell;
overflow: hidden;
width: 1%;
height: 50px;
text-align: center;
vertical-align: middle;
white-space: nowrap;
text-overflow: ellipsis;
color: #929292;
}
.mui-bar-tab .mui-tab-item-llb .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-llb .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
</style>
