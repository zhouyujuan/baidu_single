/*

  在使用单利的时候，注意在单利的内部 this指代是的单利对象
  去当前对象$(this);
  要想活动funciton的对象，可以通过点击事件 arguments获取去。currentTarge

  使用的是单例的好处

  在开发中一个页面一般会引入多个Js文件，甚至这多个文件多人写的，
  大家都可能在全局定义init这个方法，都可能在全局声明name这是属性。这样的话就造成的命名的冲突，发生一些意想不到的问题。
  所以我们需要引入命名空间：把变量和方法都放到一个单例对象下面，避免冲突。
*/



/* 百度首页头部按钮的点击方法
   更多按钮，换肤按钮

   搜索按钮

   导航按钮：推荐，导航，购物

   返回顶部按钮

*/

var baiduFirshShow = {

    morediv: '.more div', //更多按钮的修改的div
    changeImg: '.changeImage', //换肤的div
    nochange: '.nochange', //不使用换肤的按钮
    upchange: '.upchange', //收起按钮得div
    recommendBtn: '.changeTabDiv .changetabContent .TabHeader .tabUl .firstTab .recomAlin', //推荐按钮
    rec_rist_Recommend: '.changeTabDiv .changetabContent .TabHeader .tabUl .firstTab .Recommend', //推荐div
    rec_second_div: '.changeTabDiv .changetabContent .TabHeader .tabUl .secondTab .navigationDiv', //导航div
    rec_second_navL: '.changeTabDiv .changetabContent .TabHeader .tabUl .secondTab .navigationLin', //导航navlin
    rec_third_recAlin: '.changeTabDiv .changetabContent .TabHeader .tabUl .thirdTab .shoppingLin', //购物
    rec_third_div: '.changeTabDiv .changetabContent .TabHeader .tabUl .thirdTab .shoppingDiv', //购物div
    nav_title_show: 'showLinTitle', //导航条显示的class
    backId: '#backToTop',

    init: function() {
        this.render();
        this.bind();
    },
    render: function() {
        var that = this;
        that.moreBtn = $(".more"); //更多按钮
        that.changeBtn = $(".change>a"); //换肤按钮
        that.recommendList = $(that.recommendBtn); //推荐按钮
        that.recommSecondList = $(that.rec_second_navL); //导航按钮
        that.recommShoppList = $(that.rec_third_recAlin); //购物按钮
        that.windowScroll = $(window); //window.注意这里的window没有引号
        that.backBtn = $(that.backId); //返回按钮
    },
    bind: function() {
        var that = this;
        // 更多按钮hover
        that.moreBtn.mouseenter(function() {
            that.moreMouseEnter();
        }).mouseleave(function() {
            that.moreMouseLeave();
        });
        // 换肤按钮点击
        that.changeBtn.click(function() {
            that.changeSkin();
        });
        //推荐按钮的点击
        that.recommendList.click(function() {
            that.recommendClick();
        });
        //导航按钮的点击
        that.recommSecondList.click(function() {
            that.navigationClick();
        });
        //购物按钮
        that.recommShoppList.click(function() {
            that.shoppingClick();
        });
        //视图滚动
        that.windowScroll.scroll(function() {
            that.windowScr();
        });
        //返回按钮的点击
        that.backBtn.click(function() {
            that.backBtnClick();
        });

    },

    moreMouseEnter: function() {
        $(this.morediv).css("display", "block");
    },
    moreMouseLeave: function() {
        $(this.morediv).css("display", "none");
    },

    changeSkin: function() {
        $(this.changeImg).show();
        //收起按钮显示
        $(this.nochange).parent(this.upchange).show();
    },
    recommendClick: function() {
        $(this.recommendBtn).addClass(this.nav_title_show);
        $(this.recommendBtn).siblings(".Recommend").show();
        $(this.rec_second_navL).removeClass(this.nav_title_show);
        $(this.rec_third_recAlin).removeClass(this.nav_title_show);
        $(this.rec_second_div).hide();
        $(this.rec_third_div).hide();

    },
    navigationClick: function() {
        $(this.rec_second_navL).siblings(".navigationDiv").show();
        $(this.rec_second_navL).addClass(this.nav_title_show);
        $(this.recommendBtn).removeClass(this.nav_title_show);
        $(this.rec_third_recAlin).removeClass(this.nav_title_show);
        $(this.rec_rist_Recommend).hide();
        $(this.rec_third_div).hide();
    },

    shoppingClick: function() {
        $(this.rec_third_recAlin).siblings(".shoppingDiv").show();
        $(this.rec_third_recAlin).addClass(this.nav_title_show);
        $(this.rec_second_navL).removeClass(this.nav_title_show);
        $(this.recommendBtn).removeClass(this.nav_title_show);
        $(this.rec_second_div).hide();
        $(this.rec_rist_Recommend).hide();
    },

    windowScr: function() {

        var height = $(document).scrollTop();
        if (height == 0) {
            $(this.backId).hide();
        } else {
            $(this.backId).show();
        }
    },
    backBtnClick: function() {
        $('body,html').animate({ scrollTop: 0 }, 800);
    }
}


/*
换肤下拉界面的命名空间

切换图片分类的导航
图片hover时的查看，
图片点击时更换背景

*/

var baiduChangeSkinDiv = {

    nochange: '.nochange', //不换肤
    upbtn: '.change', //收起按钮
    upchange: '.upchange', //nochange的父集
    showSmallImg: '.showImage .skinback img', //展示图片的缩略图
    apleNum: '.upchange .aplVal', //透明滑块的数值
    scrollnum: ".upchange input[type='range']", //滑块
    classifyLi: '.classify li', //分类的li
    classifya: '.classify li a', //图片的分类
    selectClassify: '.classify li .showTitle', //选择的换肤模块的class
    playClassify: '.classify li .playClass', //游戏的分类
    hotClassify: '.classify li .hotClass', //热门分类
    katongClassify: '.classify li .kaTongClass', //卡通的分类
    girlClssify: '.classify li .girlClass', //女神的分类
    starClassify: '.classify li .starClass', //明星的分类
    fengClassify: '.classify li .fengClass', //风景的分类
    jianClassify: '.classify li .jianClass', //简约分类
    xinClassify: '.classify li .xinClass', //小清新分类
    img_first_banner:'.classify .first .hotClass>div',//图片第一个分类
   

    init: function() {
        this.render();
        this.bind();
        this.showImage(this);
        this.normalImage(this);
    },
    render: function() {
        var that = this;
        that.nochangeBtn = $(that.nochange); //不使用换行
        that.scrollInput = $(that.scrollnum); //滑块
        that.upbtn = $(that.upbtn); //收起按钮
        that.classfiyBanner = $(that.classifya); //换肤模块的分类

    },
    bind: function() {
        var that = this;
        //不使用护肤按钮的点击
        that.nochangeBtn.click(function() {
            that.nochangeBtnClick();
        });
        //透明滑块的点击事件
        that.scrollInput.bind('input', function() {
            that.scrollInputclick();
        });
        //收起按钮的点击
        that.upbtn.on('click', '.up', function() {
            that.upbutton();
        });
        // 换肤模块的分类hover状态
        that.classfiyBanner.hover(function(e) {
            that.hoverClassify(e);
        });

        that.classfiyBanner.click(function(e) {
            that.hoverClassifyClick(e);
        });
    },
    nochangeBtnClick: function() {
        $(this.nochange).parent(this.upchange).hide();
        $(this.showSmallImg).attr("src", "");
        $(".s-skin-container").css("background", "url()");
    },

    scrollInputclick: function() {
        var num = $(this.scrollnum).val();
        $(this.apleNum).html(num + "%");
        var t = num / 100;
        console.log("t", t);
        // $(".changetabContent .TabHeader .tabUl li .recommendLeft ul li div").css("background", "rgba(255,255,255,0.3)");
    },
    upbutton: function() {
        $('.change .up').parent(".changeImage").hide();
    },
    //注意这里的e
    hoverClassify: function(e) {
        $(this.selectClassify).removeClass("showTitle");
        $(e.currentTarget).addClass("showTitle");

    },
    hoverClassifyClick: function(e) {
        var that = e.currentTarget;
        var tempt = that.innerText;
        console.log(tempt);
        $(this.classifyLi).each(function() {
            // 获取子元素中第一个div
            $($(this).children("div").get(0)).hide();
        })
        if (tempt == "游戏") {
            $(this.playClassify).show();
        } else if (tempt == "热门") {
            $(this.hotClassify).show();

        } else if (tempt == "卡通") {
            $(this.katongClassify).show();

        } else if (tempt == "女神降临") {
            $(this.girlClssify).show();

        } else if (tempt == "明星") {
            $(this.starClassify).show();

        } else if (tempt == "风景") {
            $(this.fengClassify).show();

        } else if (tempt == "简约") {
            $(this.jianClassify).show();

        } else if (tempt == "小清新") {
            $(this.xinClassify).show();

        }

    },

    showImage:function(e){

         var that = e.currentTarget;
        $(this.img_first_banner).each(function(index) {
            var t = index + 1;
            var tem = ".classify .first .hotClass .hoverClass" + t;
            var ul = 'images/' + t + ".jpg";
            $(tem).mouseenter(function() {
                $(this).css("opacity", "1");
                $(".showImage .skinback img").attr("src", ul);

            }).mouseleave(function() {
                $(this).css("opacity", "0");
            })

            $(tem).click(function() {
                $(".s-skin-container").css({ "background": "url(" + ul + ") no-repeat", "backgroundSize": "100%" });
            })

        })
    },

    normalImage:function(){
        var array = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twel'];
         $(".classify .second .playClass img").each(function(index) {
            var num = index + 1;
            var t = array[index];

            var tem = ".classify .second .playClass ." + t;
            var ul = 'images/2-' + num + ".jpg";
            $(tem).mouseenter(function() {

                $(".showImage .skinback img").attr("src", ul);

            }).mouseleave(function() {

            })
            $(tem).click(function() {
                $(".s-skin-container").css({ "background": "url(" + ul + ") no-repeat", "backgroundSize": "100%" })
            })

        })

        $(".classify .three .kaTongClass img").each(function(index) {
            var num = index + 1;
            console.log('1', num);
            var t = array[index];

            var tem = ".classify .three .kaTongClass ." + t;
            var ul = 'images/' + num + ".jpg";
            $(tem).mouseenter(function() {

                $(".showImage .skinback img").attr("src", ul);

            }).mouseleave(function() {

            })
            $(tem).click(function() {
                $(".s-skin-container").css({ "background": "url(" + ul + ") no-repeat", "backgroundSize": "100%" });
            })

        })

        $(".classify .four .girlClass img").each(function(index) {
            var num = index + 1;
            var t = array[index];

            var tem = ".classify .four .girlClass ." + t;
            var ul = 'images/2-' + num + ".jpg";
            $(tem).mouseenter(function() {

                $(".showImage .skinback img").attr("src", ul);

            }).mouseleave(function() {

            })
            $(tem).click(function() {
                $(".s-skin-container").css({ "background": "url(" + ul + ") no-repeat", "backgroundSize": "100%" });
            })

        })

        $(".classify .five .starClass img").each(function(index) {
            var num = index + 1;
            console.log('1', num);
            var t = array[index];

            var tem = ".classify .five .starClass ." + t;
            var ul = 'images/' + num + ".jpg";
            $(tem).mouseenter(function() {

                $(".showImage .skinback img").attr("src", ul);

            }).mouseleave(function() {

            })
            $(tem).click(function() {
                $(".s-skin-container").css({ "background": "url(" + ul + ") no-repeat", "backgroundSize": "100%" });
            })

        })
        $(".classify .six .fengClass img").each(function(index) {
            var num = index + 1;
            console.log('1', num);
            var t = array[index];

            var tem = ".classify .six .fengClass ." + t;
            var ul = 'images/2-' + num + ".jpg";
            $(tem).mouseenter(function() {

                $(".showImage .skinback img").attr("src", ul);

            }).mouseleave(function() {

            })
            $(tem).click(function() {
                $(".s-skin-container").css({ "background": "url(" + ul + ") no-repeat", "backgroundSize": "100%" });
            })

        })

        $(".classify .seven .jianClass img").each(function(index) {
            var num = index + 1;
            console.log('1', num);
            var t = array[index];

            var tem = ".classify .seven .jianClass ." + t;
            var ul = 'images/' + num + ".jpg";
            $(tem).mouseenter(function() {

                $(".showImage .skinback img").attr("src", ul);

            }).mouseleave(function() {

            })
            $(tem).click(function() {
                $(".s-skin-container").css({ "background": "url(" + ul + ") no-repeat", "backgroundSize": "100%" });
            })

        })

        $(".classify .eight .xinClass img").each(function(index) {
            var num = index + 1;
            console.log('1', num);
            var t = array[index];

            var tem = ".classify .eight .xinClass ." + t;
            var ul = 'images/2-' + num + ".jpg";
            $(tem).mouseenter(function() {

                $(".showImage .skinback img").attr("src", ul);

            }).mouseleave(function() {

            })
            $(tem).click(function() {
                $(".s-skin-container").css({ "background": "url(" + ul + ") no-repeat", "backgroundSize": "100%" });
            })

        })
    }


}




$(document).ready(function() {

    baiduFirshShow.init();
    baiduChangeSkinDiv.init();



    // // hover 图片 换肤
    // var array = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twel'];
    // showImage();

    // function showImage() {


    //     $(".classify .first .hotClass>div").each(function(index) {
    //         var t = index + 1;
    //         var tem = ".classify .first .hotClass .hoverClass" + t;
    //         var ul = 'images/' + t + ".jpg";
    //         $(tem).mouseenter(function() {

    //             $(this).css("opacity", "1");
    //             $(".showImage .skinback img").attr("src", ul);

    //         }).mouseleave(function() {
    //             $(this).css("opacity", "0");
    //         })

    //         $(tem).click(function() {
    //             $(".s-skin-container").css({ "background": "url(" + ul + ") no-repeat", "backgroundSize": "100%" });
    //         })

    //     })

    // }


    // normalImage();

    // function normalImage() {

    //     $(".classify .second .playClass img").each(function(index) {
    //         var num = index + 1;
    //         console.log('1', num);
    //         var t = array[index];

    //         var tem = ".classify .second .playClass ." + t;
    //         var ul = 'images/2-' + num + ".jpg";
    //         $(tem).mouseenter(function() {

    //             $(".showImage .skinback img").attr("src", ul);

    //         }).mouseleave(function() {

    //         })
    //         $(tem).click(function() {
    //             $(".s-skin-container").css({ "background": "url(" + ul + ") no-repeat", "backgroundSize": "100%" })
    //         })

    //     })

    //     $(".classify .three .kaTongClass img").each(function(index) {
    //         var num = index + 1;
    //         console.log('1', num);
    //         var t = array[index];

    //         var tem = ".classify .three .kaTongClass ." + t;
    //         var ul = 'images/' + num + ".jpg";
    //         $(tem).mouseenter(function() {

    //             $(".showImage .skinback img").attr("src", ul);

    //         }).mouseleave(function() {

    //         })
    //         $(tem).click(function() {
    //             $(".s-skin-container").css({ "background": "url(" + ul + ") no-repeat", "backgroundSize": "100%" });
    //         })

    //     })

    //     $(".classify .four .girlClass img").each(function(index) {
    //         var num = index + 1;
    //         var t = array[index];

    //         var tem = ".classify .four .girlClass ." + t;
    //         var ul = 'images/2-' + num + ".jpg";
    //         $(tem).mouseenter(function() {

    //             $(".showImage .skinback img").attr("src", ul);

    //         }).mouseleave(function() {

    //         })
    //         $(tem).click(function() {
    //             $(".s-skin-container").css({ "background": "url(" + ul + ") no-repeat", "backgroundSize": "100%" });
    //         })

    //     })

    //     $(".classify .five .starClass img").each(function(index) {
    //         var num = index + 1;
    //         console.log('1', num);
    //         var t = array[index];

    //         var tem = ".classify .five .starClass ." + t;
    //         var ul = 'images/' + num + ".jpg";
    //         $(tem).mouseenter(function() {

    //             $(".showImage .skinback img").attr("src", ul);

    //         }).mouseleave(function() {

    //         })
    //         $(tem).click(function() {
    //             $(".s-skin-container").css({ "background": "url(" + ul + ") no-repeat", "backgroundSize": "100%" });
    //         })

    //     })
    //     $(".classify .six .fengClass img").each(function(index) {
    //         var num = index + 1;
    //         console.log('1', num);
    //         var t = array[index];

    //         var tem = ".classify .six .fengClass ." + t;
    //         var ul = 'images/2-' + num + ".jpg";
    //         $(tem).mouseenter(function() {

    //             $(".showImage .skinback img").attr("src", ul);

    //         }).mouseleave(function() {

    //         })
    //         $(tem).click(function() {
    //             $(".s-skin-container").css({ "background": "url(" + ul + ") no-repeat", "backgroundSize": "100%" });
    //         })

    //     })

    //     $(".classify .seven .jianClass img").each(function(index) {
    //         var num = index + 1;
    //         console.log('1', num);
    //         var t = array[index];

    //         var tem = ".classify .seven .jianClass ." + t;
    //         var ul = 'images/' + num + ".jpg";
    //         $(tem).mouseenter(function() {

    //             $(".showImage .skinback img").attr("src", ul);

    //         }).mouseleave(function() {

    //         })
    //         $(tem).click(function() {
    //             $(".s-skin-container").css({ "background": "url(" + ul + ") no-repeat", "backgroundSize": "100%" });
    //         })

    //     })

    //     $(".classify .eight .xinClass img").each(function(index) {
    //         var num = index + 1;
    //         console.log('1', num);
    //         var t = array[index];

    //         var tem = ".classify .eight .xinClass ." + t;
    //         var ul = 'images/2-' + num + ".jpg";
    //         $(tem).mouseenter(function() {

    //             $(".showImage .skinback img").attr("src", ul);

    //         }).mouseleave(function() {

    //         })
    //         $(tem).click(function() {
    //             $(".s-skin-container").css({ "background": "url(" + ul + ") no-repeat", "backgroundSize": "100%" });
    //         })

    //     })
    // }

    // //不使用换肤

    // $(".nochange").click(function() {
    //     $(this).parent(".upchange").hide();
    //     $(".showImage .skinback img").attr("src", "");
    //     $("body").css("background", "url()");
    // })

    // //透明度滑块的移动

    // $(".upchange input[type='range']").bind("input", function() {
    //     var num = $(this).val();
    //     console.log(num);
    //     $(".upchange .aplVal").html(num + "%");
    //     var t = num / 100;
    //     console.log("t", t);
    //     $(".changetabContent .TabHeader .tabUl li .Recommend").css("background", "rgba('255','255','255','" + t + "')");
    // })

    // //收起按钮的点击
    // $(".change").on("click", ".up", function() {

    //     $(this).parent(".changeImage").hide();

    // })

    // //推荐按钮的点击

    // $(".changeTabDiv .changetabContent .TabHeader .tabUl .firstTab .recomAlin").click(function() {

    //     $(this).addClass("showLinTitle");

    //     $(this).siblings(".Recommend").show();
    //     $(".changeTabDiv .changetabContent .TabHeader .tabUl .secondTab .navigationLin").removeClass("showLinTitle");
    //     $(".changeTabDiv .changetabContent .TabHeader .tabUl .thirdTab .shoppingLin").removeClass("showLinTitle");
    //     $(".changeTabDiv .changetabContent .TabHeader .tabUl .secondTab .navigationDiv").hide();
    //     $(".changeTabDiv .changetabContent .TabHeader .tabUl .thirdTab .shoppingDiv").hide();

    // })

    // //导航按钮的点击

    // $(".changeTabDiv .changetabContent .TabHeader .tabUl .secondTab .navigationLin").click(function() {

    //     $(this).siblings(".navigationDiv").show();
    //     $(this).addClass("showLinTitle");
    //     $(".changeTabDiv .changetabContent .TabHeader .tabUl .firstTab .recomAlin").removeClass("showLinTitle");
    //     $(".changeTabDiv .changetabContent .TabHeader .tabUl .thirdTab .shoppingLin").removeClass("showLinTitle");
    //     $(".changeTabDiv .changetabContent .TabHeader .tabUl .firstTab .Recommend").hide();
    //     $(".changeTabDiv .changetabContent .TabHeader .tabUl .thirdTab .shoppingDiv").hide();

    // })

    // //购物按钮的点击

    // $(".changeTabDiv .changetabContent .TabHeader .tabUl .thirdTab .shoppingLin").click(function() {

    //     $(this).siblings(".shoppingDiv").show();
    //     $(this).addClass("showLinTitle");
    //     $(".changeTabDiv .changetabContent .TabHeader .tabUl .secondTab .navigationLin").removeClass("showLinTitle");
    //     $(".changeTabDiv .changetabContent .TabHeader .tabUl .firstTab .recomAlin").removeClass("showLinTitle");
    //     $(".changeTabDiv .changetabContent .TabHeader .tabUl .secondTab .navigationDiv").hide();
    //     $(".changeTabDiv .changetabContent .TabHeader .tabUl .firstTab .Recommend").hide();

    // });


    // // 返回到顶部
    // $(window).scroll(function() {

    //     var height = $(document).scrollTop();
    //     if (height == 0) {
    //         $("#backToTop").hide();
    //     } else {
    //         $("#backToTop").show();
    //     }

    // });

    // $("#backToTop").click(function() {

    //     $('body,html').animate({ scrollTop: 0 }, 800);

    // });



})




// $(document).ready(function() {

//     //更多
//     $(".more").mouseenter(function() {
//         $(".more div").css("display", "block");
//     }).mouseleave(function() {
//         $(".more div").css("display", "none");
//     })

//     //点击换肤
//     $(".change>a").click(function() {
//         $(".changeImage").show();
//         //收起按钮
//         $(".nochange").parent(".upchange").show();

//     })

//     // hover几个换肤的模块改变背景颜色

//     $(".classify li a").hover(function() {
//         $(".classify li .showTitle").removeClass("showTitle");
//         $(this).addClass("showTitle");

//     })

//     var tem = ".classify .first .hotClass .hoverClass1";
//     var ul = 'images/1.jpg';

//     // 点击切换换肤的几个模块
//     $(".classify li a").click(function() {
//         var that = $(this);
//         var tempt = that.text();
//         console.log(tempt);
//         $(".classify li").each(function() {
//             // 获取子元素中第一个div
//             $($(this).children("div").get(0)).hide();
//         })
//         if (tempt == "游戏") {
//             $('.classify li .playClass').show();


//         } else if (tempt == "热门") {
//             $('.classify li .hotClass').show();

//         } else if (tempt == "卡通") {
//             $('.classify li .kaTongClass').show();

//         } else if (tempt == "女神降临") {
//             $('.classify li .girlClass').show();

//         } else if (tempt == "明星") {
//             $('.classify li .starClass').show();

//         } else if (tempt == "风景") {
//             $('.classify li .fengClass').show();

//         } else if (tempt == "简约") {
//             $('.classify li .jianClass').show();

//         } else if (tempt == "小清新") {
//             $('.classify li .xinClass').show();

//         }
//     })

//     // hover 图片 换肤
//     var array = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twel'];
//     showImage();

//     function showImage() {


//         $(".classify .first .hotClass>div").each(function(index) {
//             var t = index + 1;
//             var tem = ".classify .first .hotClass .hoverClass" + t;
//             var ul = 'images/' + t + ".jpg";
//             $(tem).mouseenter(function() {

//                 $(this).css("opacity", "1");
//                 $(".showImage .skinback img").attr("src", ul);

//             }).mouseleave(function() {
//                 $(this).css("opacity", "0");
//             })

//             $(tem).click(function() {
//                 $(".s-skin-container").css({ "background": "url(" + ul + ") no-repeat", "backgroundSize": "100%" });
//             })

//         })

//     }


//     normalImage();

//     function normalImage() {

//         $(".classify .second .playClass img").each(function(index) {
//             var num = index + 1;
//             console.log('1', num);
//             var t = array[index];

//             var tem = ".classify .second .playClass ." + t;
//             var ul = 'images/2-' + num + ".jpg";
//             $(tem).mouseenter(function() {

//                 $(".showImage .skinback img").attr("src", ul);

//             }).mouseleave(function() {

//             })
//             $(tem).click(function() {
//                 $(".s-skin-container").css({ "background": "url(" + ul + ") no-repeat", "backgroundSize": "100%" })
//             })

//         })

//         $(".classify .three .kaTongClass img").each(function(index) {
//             var num = index + 1;
//             console.log('1', num);
//             var t = array[index];

//             var tem = ".classify .three .kaTongClass ." + t;
//             var ul = 'images/' + num + ".jpg";
//             $(tem).mouseenter(function() {

//                 $(".showImage .skinback img").attr("src", ul);

//             }).mouseleave(function() {

//             })
//             $(tem).click(function() {
//                 $(".s-skin-container").css({ "background": "url(" + ul + ") no-repeat", "backgroundSize": "100%" });
//             })

//         })

//         $(".classify .four .girlClass img").each(function(index) {
//             var num = index + 1;
//             var t = array[index];

//             var tem = ".classify .four .girlClass ." + t;
//             var ul = 'images/2-' + num + ".jpg";
//             $(tem).mouseenter(function() {

//                 $(".showImage .skinback img").attr("src", ul);

//             }).mouseleave(function() {

//             })
//             $(tem).click(function() {
//                 $(".s-skin-container").css({ "background": "url(" + ul + ") no-repeat", "backgroundSize": "100%" });
//             })

//         })

//         $(".classify .five .starClass img").each(function(index) {
//             var num = index + 1;
//             console.log('1', num);
//             var t = array[index];

//             var tem = ".classify .five .starClass ." + t;
//             var ul = 'images/' + num + ".jpg";
//             $(tem).mouseenter(function() {

//                 $(".showImage .skinback img").attr("src", ul);

//             }).mouseleave(function() {

//             })
//             $(tem).click(function() {
//                 $(".s-skin-container").css({ "background": "url(" + ul + ") no-repeat", "backgroundSize": "100%" });
//             })

//         })
//         $(".classify .six .fengClass img").each(function(index) {
//             var num = index + 1;
//             console.log('1', num);
//             var t = array[index];

//             var tem = ".classify .six .fengClass ." + t;
//             var ul = 'images/2-' + num + ".jpg";
//             $(tem).mouseenter(function() {

//                 $(".showImage .skinback img").attr("src", ul);

//             }).mouseleave(function() {

//             })
//             $(tem).click(function() {
//                 $(".s-skin-container").css({ "background": "url(" + ul + ") no-repeat", "backgroundSize": "100%" });
//             })

//         })

//         $(".classify .seven .jianClass img").each(function(index) {
//             var num = index + 1;
//             console.log('1', num);
//             var t = array[index];

//             var tem = ".classify .seven .jianClass ." + t;
//             var ul = 'images/' + num + ".jpg";
//             $(tem).mouseenter(function() {

//                 $(".showImage .skinback img").attr("src", ul);

//             }).mouseleave(function() {

//             })
//             $(tem).click(function() {
//                 $(".s-skin-container").css({ "background": "url(" + ul + ") no-repeat", "backgroundSize": "100%" });
//             })

//         })

//         $(".classify .eight .xinClass img").each(function(index) {
//             var num = index + 1;
//             console.log('1', num);
//             var t = array[index];

//             var tem = ".classify .eight .xinClass ." + t;
//             var ul = 'images/2-' + num + ".jpg";
//             $(tem).mouseenter(function() {

//                 $(".showImage .skinback img").attr("src", ul);

//             }).mouseleave(function() {

//             })
//             $(tem).click(function() {
//                 $(".s-skin-container").css({ "background": "url(" + ul + ") no-repeat", "backgroundSize": "100%" });
//             })

//         })
//     }

//     //不使用换肤

//     $(".nochange").click(function() {
//         $(this).parent(".upchange").hide();
//         $(".showImage .skinback img").attr("src", "");
//         $("body").css("background", "url()");
//     })

//     //透明度滑块的移动

//     $(".upchange input[type='range']").bind("input", function() {
//         var num = $(this).val();
//         console.log(num);
//         $(".upchange .aplVal").html(num + "%");
//         var t = num/100;
//         console.log("t",t);
//         $(".changetabContent .TabHeader .tabUl li .Recommend").css("background","rgba('255','255','255','"+t+"')");
//     })

//     //收起按钮的点击
//     $(".change").on("click", ".up", function() {

//         $(this).parent(".changeImage").hide();

//     })

//     //推荐按钮的点击

//     $(".changeTabDiv .changetabContent .TabHeader .tabUl .firstTab .recomAlin").click(function() {

//         $(this).addClass("showLinTitle");

//         $(this).siblings(".Recommend").show();
//         $(".changeTabDiv .changetabContent .TabHeader .tabUl .secondTab .navigationLin").removeClass("showLinTitle");
//         $(".changeTabDiv .changetabContent .TabHeader .tabUl .thirdTab .shoppingLin").removeClass("showLinTitle");
//         $(".changeTabDiv .changetabContent .TabHeader .tabUl .secondTab .navigationDiv").hide();
//         $(".changeTabDiv .changetabContent .TabHeader .tabUl .thirdTab .shoppingDiv").hide();

//     })

//     //导航按钮的点击

//     $(".changeTabDiv .changetabContent .TabHeader .tabUl .secondTab .navigationLin").click(function() {

//         $(this).siblings(".navigationDiv").show();
//         $(this).addClass("showLinTitle");
//         $(".changeTabDiv .changetabContent .TabHeader .tabUl .firstTab .recomAlin").removeClass("showLinTitle");
//         $(".changeTabDiv .changetabContent .TabHeader .tabUl .thirdTab .shoppingLin").removeClass("showLinTitle");
//         $(".changeTabDiv .changetabContent .TabHeader .tabUl .firstTab .Recommend").hide();
//         $(".changeTabDiv .changetabContent .TabHeader .tabUl .thirdTab .shoppingDiv").hide();

//     })

//     //购物按钮的点击

//     $(".changeTabDiv .changetabContent .TabHeader .tabUl .thirdTab .shoppingLin").click(function() {

//         $(this).siblings(".shoppingDiv").show();
//         $(this).addClass("showLinTitle");
//         $(".changeTabDiv .changetabContent .TabHeader .tabUl .secondTab .navigationLin").removeClass("showLinTitle");
//         $(".changeTabDiv .changetabContent .TabHeader .tabUl .firstTab .recomAlin").removeClass("showLinTitle");
//         $(".changeTabDiv .changetabContent .TabHeader .tabUl .secondTab .navigationDiv").hide();
//         $(".changeTabDiv .changetabContent .TabHeader .tabUl .firstTab .Recommend").hide();

//     });


//     // 返回到顶部
//     $(window).scroll(function(){

//       var height = $(document).scrollTop();
//         if(height == 0){
//            $("#backToTop").hide(); 
//         }else{
//             $("#backToTop").show(); 
//         }

//     });

//     $("#backToTop").click(function(){

//         $('body,html').animate({ scrollTop: 0 }, 800);

//     });



// })
