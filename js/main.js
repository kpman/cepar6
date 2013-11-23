function resizePages() {
    var h = $(window).height();
    var w = $(window).width();
    var height = h < 1440 ? 1440 : h;
    var mainPadding = "+=" + (w-1440)/2;
    $('section').css('height',height);
    $('.dowhat').css('height',height*2);
    $('.sponsor').css('height',height*1.6);
    $('.staff').removeAttr('style');
    $(".main-wrap").css("width",height);
    $(".main-wrap").css("padding-left",mainPadding);

}
resizePages();
var sk = skrollr.init({forceHeight:false});

$(function(){
    $(window).resize(function(e) {
        resizePages();
        sk.refresh();
    });
});
