console.log("主模块加载成功");

require.config({
    paths:{
        jquery: "jquery-1.11.3",
        goods:"goods"
    }
})
require(["goods"],function(goods){
    goods.body();
})