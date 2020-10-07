
console.log("index.js加载成功")
document.onselectstart = function(){return false;};
define(["jquery"],function($){
function body(){
    console.log("body调用成功")
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
        }) 
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
        //轮播图启动
        var i = 1 ;
        var imglength = $(".bimg").length;
        var running = false;
        timer();
        subscript();
        tab();

    function move(){
        running = true;
        movetrue();
    }
   
    function movetrue(){
        if(i > imglength- 1 ) {
            i = 1 ;
            $(".showimg").css("left", '0px')
        }
        else if(i < 1) {
            i = imglength - 1;
            $(".showimg").css(`-${i+1}*100%`)
        }
        $(".showimg").animate({
            "left":(-i * 100) + "%"
        })
        $(".pointbox li").eq(i-1).addClass("active").siblings().removeClass();
        i++;
        console.log(1+running)
        running = false;
    }
        //下标按钮点击
        function subscript (){
            $(".pointbox li").on("click",(function(){
                i = $(this).index()+1;
                move();
            })
           )
        }
//点击切换
function tab (){

    $("#rbtn").click(throttle(function(){
            move();
            console.log(running);
            console.log(i);
            },500))
    $("#lbtn").click(throttle(function(){
                  i -= 2 ;
                move();
             },500))

}
//鼠标移入移出
$(".banner").hover(function(){
    clearInterval(otimer);
}, 
function(){
  timer();
})
//节流函数
function throttle(func,wait){
    let prevDate = 0 ;
    let curDate = Date.now();
    return function(){
        const context = this;
        const args = arguments;
        curDate = Date.now();
        if(curDate - prevDate >= wait){
            func.apply(context,args);
            prevDate = curDate;
        }
    }
}
//定时器
        function timer (){
            otimer = setInterval(function(){
                move();
            }, 3000);
         }
//移入移除效果 

$("content .content div").mouseenter(function(){
var width = $(this).width()*1.1;   
var height = $(this).height()*1.1;
    $(this).find("p").css("display" , "block"),
    $(this).find("img").stop().animate({
            "width" : width,
            "height" :height,
            "left":("-" + ((0.1 * $(this).width()))/2 ),
            "top":("-" + ((0.1 * $(this).height()))/2 )
        },600)
})

$("content .content div").mouseleave(function(){
    var width = $(this).width()*1;   
    var height = $(this).height()*1;
        $(this).find("p").css("display" , "none"),
        $(this).find("img").stop().animate({
                "width" : width,
                "height" :height,
                "left":"0PX",
                "top":"0PX"
            },600);
    })
$("content .content div a").mouseenter(function(){
    $(this).css({
        "backgroundColor":"gray",
        "border":"none"
    })
})
$("content .content div a").mouseleave(function(){
    $(this).css({
        "backgroundColor":"rgba(0,0,0,0)",
        "border":"1px solid white"
    })
})

$(".fix-out").add(".fix-in").mouseenter(function(){
    $(".fix-in").stop().animate({"right":"0px"},500)
})
$(".fix-in").mouseleave(function(){
    $(".fix-in").stop().animate({"right":"-200px"},500)
})




         //body截止线
    }
    return{
        body:body
    }
})
//