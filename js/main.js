//窗体滚动事件的开始===================================================
$(window).scroll(function(){
    headerInit();
});

function headerInit(){
    if($(this).scrollTop()>0){
        $("body").addClass("beginScroll");
    }else{
        $("body").removeClass("beginScroll");
    }

}

//窗体滚动事件的结束==================================================

//首页事件的开始==============================================



    var imgArr = [
        "img/bg-image-1.jpg",
        "img/bg-image-1_.jpg",
        "img/bg-image-2.jpg",
        "img/bg-image-2_.jpg"
    ];

    $("#index").backstretch(imgArr, {
        fade: 750,
        duration: 4000,
        preload: 1, //Use the lazy-loading functionality
        start: 2 //Optional - now starts with "dome.jpg"
    });

//首页事件的结束================================

//关于特效的开始================================
if($("[data-animated-effect]").length>0){
    $("[data-animated-effect]").each(function(){
        var $this = $(this);
        var animatedEffect = $this.attr("data-animated-effect");
        setTimeout(function(){
            $this.removeClass("section-no-visible").addClass("section-visible").addClass("animated "+animatedEffect);
        },400);

    });
}

$("header .nav a").click(function(){
    var target = $(this.hash);
    $("html").animate({
        scrollTop:target.offset().top
    },1000);
});

$('body').scrollspy({ target: '.navbar' });

// 关于特效的结束=========================================================

// 图集特效的开始=========================================================
$(".isotope-container").isotope({ filter: '*' });
$("#protofile .nav a").click(function(){
    $(this).parent().addClass("active").siblings().removeClass("active");
    var fitlerName =  $(this).data("filter");
    $(".isotope-container").isotope({ filter: fitlerName });
    return false;
});
// 图集特效的结束=========================================================
