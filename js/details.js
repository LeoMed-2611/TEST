console.log("details.js加载成功")
define(["jquery","jquery-cookie"],function($){
    function body(){
    console.log("body调用成功");
    $(function(){
detMsg();
detNum();
$(".left-imgbox" ).mouseenter(function(){
   $( ".mask , .bigimg").show()
}).mouseleave(function(){
    $( ".mask , .bigimg").hide()
}).mousemove(function(ev){
    var  l =  ev.pageX - $(this).offset().left - 50;
    var  t =  ev.pageY - $(this).offset().left - 110;
    l = Math.max(0, l);
    l = Math.min(500, l);
    t = Math.max(0, t);
    t = Math.min(300, t);
    $(".mask").css({
        left : l,
        top : t
    })
    $(".bigimg img").css({
        left: -2 * l,
        top: -2 * t
     })
})
//一下为导航栏效果
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
//购物车效果

          //给按钮添加点击
$(".right-box").on("click" , ".add" , function(){
    console.log("添加购物车被点击");
    var first = !($.cookie("goods"));
    if(first){
        $.cookie("goods",JSON.stringify([{id:id,num:1}]),{
        expires:7
    });}else{
        var cookieArr = JSON.parse($.cookie("goods"));
        var same = false ; 
        for(var i = 0 ; i < cookieArr.length;i++){
            if(cookieArr[i].id == id){
                same = true;
                break;
              }
        }
        same ? cookieArr[i].num++ : cookieArr.push({id:id, num: 1});
        $.cookie("goods", JSON.stringify(cookieArr), {
            expires: 7
          })
    }
detMsg();
detNum();
})
//添加增减按钮
$(".shopcart ul").on("click", "#num-btn", function(){
    var id = $(this).closest("li").attr("id");
    var cookieArr = JSON.parse($.cookie("goods"));
    for(var i = 0; i < cookieArr.length; i++){
      if(cookieArr[i].id == id){
        break;
      }
    }
    if(this.innerHTML == "+"){
      cookieArr[i].num++;
    }else{
      cookieArr[i].num == 1 ? alert("数量为1，不能减少") : cookieArr[i].num--;
    }
    $.cookie("goods", JSON.stringify(cookieArr), {
      expires: 7
    })

    //修改页面上的数量
    $(this).siblings(".show-num").html(`${cookieArr[i].num}`);
    detNum();
    detMsg();
  })

//添加删除按钮
$(".shopcart ul").on("click", "#del", function(){
    var id = $(this).closest("li").remove().attr("id");
    //删除页面上的节点  从cookie中删除数据
    var cookieArr = JSON.parse($.cookie("goods"));
    for(var i = 0; i < cookieArr.length; i++){
      if(cookieArr[i].id == id){
        cookieArr.splice(i, 1);
        break;
      }
    }
    if(cookieArr.length){
      $.cookie("goods", JSON.stringify(cookieArr), {
        expires: 7
      })
    }else{
      $.cookie("goods", null);
    }
    //更新数据数量
    detNum();
  })
  //全选
  $('#btn-all').click(function(){
    //alert(this.checked);
    if($(this).is(':checked')){
            $('input[name="checkbox"]').each(function(){
                    //此处如果用attr，会出现第三次失效的情况
                        $(this).prop("checked",true);
                    });
    }else{
            $('input[name="checkbox"]').each(function(){
                        $(this).removeAttr("checked",false);
                    });
                    //$(this).removeAttr("checked");
    }

});
    //处理购物车内数量
    function detNum(){
        var cookieStr = $.cookie("goods");
        var sum = 0;
        if(cookieStr){
          var cookieArr = JSON.parse(cookieStr);
          for(var i = 0; i < cookieArr.length; i++){
            sum += cookieArr[i].num;
          }
          var sum1 = `共${sum}件`;
        }
        $(".account #number").html(sum1);
      }
      //购物车信息
              //加载购物车内的内容
      function detMsg(){
        var cookieStr = $.cookie("goods");
        if(!cookieStr){
          return;
        }
        console.log("msg启动")
        //下载所有的商品数据
        $.ajax({
          url: "../data/goods.json",
          success: function(arr){
            var cookieArr = JSON.parse(cookieStr);
            //精益求精  写算法
            var newArr = [];
            for(var i = 0; i < arr.length; i++){
              for(var j = 0; j < cookieArr.length; j++){
                if(cookieArr[j].id == arr[i].id){
                  arr[i].num = cookieArr[j].num;
                  newArr.push(arr[i]);
                  break;
                }
              }
            }
            //通过newArr。处理数据，将数据添加页面上
            var strS = ``;
            var total0 = 0;
            for(var i = 0; i < newArr.length; i++){
              strS += `
               <li id="${newArr[i].id}">
              <input type="checkbox" name = "checkbox" >
              <img src="${newArr[i].img}" alt="">
              <a href="">[茶轴MY(有线)68${newArr[i].name}]</a>
              <div>
                  <span id = "num-btn" >-</span>
                  <span class = "show-num" >${newArr[i].num}</span>
                  <span id = "num-btn" >+</span>
              </div>
              <span>￥${newArr[i].price}</span>
              <a id = "del" >
              <img  src="../images/goods/timg.jpg" alt="">
              </a>
          </li>
          `
          //总价合计
        if($("li").find("input").attr("checked")){
          alert("成功")
           total0 += parseInt(newArr[i].price *newArr[i].num)
               }
            }
            $(".shopcart ul").html(strS);
            $(".total").html(`￥合计${total0}`)
          },
          error: function(msg){
            console.log(msg);
          }
        })

      }
//获取url中的参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if(r != null) return unescape(r[2]);
    return null; //返回参数值
}
//接收URL中的参数goodsId
var id = getUrlParam('goodsId');
$.ajax({
    type: 'get',
    url: '../data/goods.json',
    dataType: 'json',
    success: function(arr){
            //根据id获取详情数据
for(var i = 0 ; i < arr.length ; i++){
            if(id == arr[i].id) {
                var str00 =  `
                65%产品-${arr[i].name}
                `

                var str0 = `
            <div class="mask"></div>
            <img src="${arr[i].imgD}" alt="">
            `

            var str1 =  `
            <img src="${arr[i].imgD}" alt=""> 
            `

            var str2 = `
            <p>
                    <a href="">❤收藏</a>
                    <a href="">♑分享</a>
                    </p>
                    <p>
                    varmilo阿米洛 <br> 68键${arr[i].name}有线机械键盘  <br>MY68CN2W/LL7Mo2Sv-8
                    </p>

                    <div>选择轴体：</div>
                    <ul>
                    <li class="select-axis"><img src="../images/details/ia_100000041.png" alt=""></li>
                    <li class="select-axis"><img src="../images/details/ia_100000042.png" alt=""></li>
                    <li class="select-axis"><img src="../images/details/ia_100000044.png" alt=""></li>
                    <li class="select-axis"><img src="../images/details/ia_100000045.png" alt=""></li>
                    </ul>
                    <div>选择功能:</div>
                    <ul>
                    <li  class="select-func">MY(有线)</li>
                    <li  class="select-func">MYD(双线)</li>
                    </ul>
                    <p><span>￥</span>${arr[i].price}</p>
                    <div class="add-good">
                    <span>数量：</span>
                    <p>1</p>
                    <p>
                        <span>+</span>
                        <br>
                        <span>-</span>
                    </p>
                    <span>库存1</span>
                    </div>
                    <div class="btn-box">
                    <span class = "add">加入购物车</span>
                    <span >立即购买</span>
                    </div>
            `
        }
}
            $('.left-imgbox').html(str0);
            $('.bigimg').html(str1);
            $('.right-box').html(str2);
            $('.tie').html(str00)
    },
    error: function(error){
        console.log(error)
    }
})

        //选中效果
    $(".right-box").on("click", ".select-axis",function(){
           $(this).css("border" , "red 1px solid").siblings().css("border" , "#888 1px solid")
        })
    $(".right-box").on("click", ".select-func",function(){
           $(this).css("border" , "red 1px solid").siblings().css("border" , "#888 1px solid")
        })



    //结束
    }
    )
    }
    return{
    body:body
    }
})
