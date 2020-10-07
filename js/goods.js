console.log("goods.js加载成功")

define(["jquery"],function($){
    function body(){
    console.log("body调用成功");
    $(function(){
 
        $("main .main .left-box .li-head").click(function(){
            $(this).find("img").replaceWith($('<img src="../images/goods/ia_100000000511.png" alt="">')),
            $(this).next().find("P").animate({"height":"0px"},500);    
        })
        //再次点击
        $("main .main .left-box .li-head").click(function(){
            $(this).find("img").replaceWith($('<img src="../images/goods/ia_100000006.png" alt="">')),
            $(this).next().find("P").animate({"height":"42px"},500);
        })
    //导航栏鼠标移入效果
        $(" nav p").mouseenter(function(){
            $(this).addClass("p-acive")
        })

        $(" nav p").mouseleave(function(){
            $(this).removeClass("p-acive")
        })
        //商品栏移入移出
    $(".keyboard").mouseenter(function(){
        $(this).stop().animate({"top":"-10px"},400).css("box-shadow","5px 5px 5px 5px #999")
    })
    $(".keyboard").mouseleave(function(){
        $(this).stop().animate({"top":"0px"},400).css("box-shadow","none");
    })

//
    
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


    //结束
  
        })
    }
    return{
    body:body
    }
})