console.log("主模块加载成功");

require.config({
    paths:{
        jquery: "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        details:"details"
    }
    ,
    shim:{
      "jquery-cookie": ["jquery"]
    }
})
require(["details"],function(details){
    details.body();
})