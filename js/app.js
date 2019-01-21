//模态框
$("#btnOpen").click(function () {
    $("#myModal").modal('toggle');
});
//滚动侦听
//$("body").scrollspy({"target":"#mynavbar"});
//平滑滚动
// $(".navbar a").click(function(){
//     var target = $(this.hash);
//     $("html").animate({
//         scrollTop:target.offset().top
//     },1000);
// });
//选项面板
$(".nav a").click(function(e){
    e.preventDefault();
    $(this).tab('show');
});