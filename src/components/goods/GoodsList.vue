<template>
    <div class="goods-list">
        <div class="goods-item">
            <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4252675326,3997100876&fm=15&gp=0.jpg" alt="">
            <h1 class="title">小米（Mi）小米Note 16G双网通版</h1>
            <div class="info1">
                <p class="price">
                    <span class="now">￥899</span>
                    <span class="old">￥999</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1869822492,1781428656&fm=26&gp=0.jpg" alt="">
            <h1 class="title">小米（Mi）小米Note 16G双网通版</h1>
            <div class="info1">
                <p class="price">
                    <span class="now">￥899</span>
                    <span class="old">￥999</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=814002718,425543577&fm=15&gp=0.jpg" alt="">
            <h1 class="title">小米（Mi）小米Note 16G双网通版</h1>
            <div class="info1">
                <p class="price">
                    <span class="now">￥899</span>
                    <span class="old">￥999</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.goods-list{
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;
}
.goods-item{
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
}
.goods-item img {
    width: 100%;
}
.title{
    font-size: 14px;
}
.info1{
    background-color: #eee;
}
.info1 p{
    margin: 0;
    padding: 5px;
}
.now{
    color: red;
    font-weight: bold;
    font-size: 16px;
}
.old{
    text-decoration: line-through;
    font-size: 12px;
    margin-left: 10px;
}
.sell{
    display: flex;
    justify-content: space-between;
    font-size: 13px;
}
</style>
