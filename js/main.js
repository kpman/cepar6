function resizePages() {
    var h = $(window).height();
    var height = h < 1440 ? 1440 : h;
    $('section').css('height',height);
    $('.dowhat').css('height',height*2);
    $('.sponsor').css('height',height*1.6);
    $('.staff').removeAttr('style');
}
resizePages();
var sk = skrollr.init({forceHeight:false});

$(function(){
    $(window).resize(function(e) {
        resizePages();
        sk.refresh();
    });
});
