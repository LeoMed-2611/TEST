$(function(){
    $(".header-ul li" ).hover(function(){
        $(this).css(
            "backgroundColor","black"
        ),
        $(this).find("a").css(
            "color","white"
        ),
        $(this).find(".iconfont").css(
            "color","white"
        )
    }
    ,function(){
        $(this).css(
            "backgroundColor","white"
        ),
        $(this).find("a").add(".iconfont").css(
            "color","black"
        )
    }
    )
     //导航栏移入列表显示
 $(".header-ul li").eq("0").add(".earth-list").hover(function(){
    $(".earth-list").css(
        "display","block"
    )
},function(){
   $(".earth-list").css(
       "display","none"
   ) 
})
$(".header-ul li").eq("2").add(".theme-list").hover(function(){
   $(".theme-list").css(
       "display","block"
   )
},function(){
  $(".theme-list").css(
      "display","none"
  ) 
})
$(".header-ul li").eq("3").add(".customization").hover(function(){
   $(".customization").css(
       "display","block"
   )
},function(){
  $(".customization").css(
      "display","none"
  ) 
})
//给导航列表添加移入移除
$(function(){
   $('.earth-list ul li , .theme-list ul li , .customization ul li' ).hover(function(){
   $(this).has("a").css({
       "backgroundColor":"black",
       "color":"red",
   }).stop().animate({
           "padding":"15px 0 10px 0 ",
           "margin":"5px 0 "
       },500).find("a").css(
           "color","white"
       )
   }
   ,function(){
       $(this).has("a").css({
           "backgroundColor":"white",
               "color":"black",
       }).stop().animate({
           "padding":"10px 0"
        },600 ).find("a").css(
           "color","black"
       )
   }
   )
}) 
//input样式
$("#oinput").on("focus",function(){
   $("#oinput").css("borderColor" ,"blue")
}).on("blur",function(){
   $("#oinput").css({"borderColor" : "gainsboro"},
   {"boxShadow":"none"})
})
//交互
// $("#log-btn").on("click",function(){
//     console.log("登录点击")
//     ajax({
//         type:'post',
//         url:'login.php',
//         data:{
//             username:$("#usern-inp").value,
//             password:$("#passw-inp").value,
//         },
//         success:function(msg){
//             var obj = JSON.parse(msg);
//             if(obj.code){
//                 $(".prompt").css("color","red")
//             }else{
//                 $(".prompt").css("color","green")
//             }
//             $(".prompt").css("display","block");
//             $(".prompt").html(`${obj.msg}`)
//         },
//         error: function(msg){
//             console.log(msg);
//         }
//       })
//     })
//结束
}) 
