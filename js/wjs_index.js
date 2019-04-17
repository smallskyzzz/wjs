$(function () {
    // 获取所有的item
    var items = $('.carousel-inner .item')
    /*监听屏幕的大小改变*/
    $(window).on("resize",function() {
        var width = $(window).width()
        // 判断屏幕的宽度
        if (width >= 768) {
            // 此时为非移动端
            // 为每一个item添加子元素
            $(items).each(function () {
                var item = $(this)
                // 通过这样可以获取到自定义属性的值
                var imgSrc = item.data('largeImage')
                // 添加非移动端的子元素
                item.html($('<a href="javascript:;" class="pcImg"></a>').css("backgroundImage", "url('" + imgSrc + "')"))
            })
        } else {
            $(items).each(function () {
                var item = $(this)
                var imgSrc = item.data('smallImage')
                item.html('<a href="javascript:;" class="mobileImg"><img src="' + imgSrc + '" alt="..."></a>')
            })
        }
    }).trigger("resize")
    // 此处的trigger是设置当前页面加载的时候自动触发resize事件

    // 添加移动端的滑动操作
    var startX,endX
    var carousel_inner=$(".carousel-inner")[0];
    // 获取当前的轮播图
    var carousel = $('.carousel')
    carousel_inner.addEventListener('touchstart', function (e) {
        startX = e.targetTouches[0].clientX
    })
    carousel_inner.addEventListener("touchend",function(e){
        endX= e.changedTouches[0].clientX;
        if(endX-startX > 0){
            /*上一张*/
            carousel.carousel('prev');
        }
        else if(endX-startX < 0){
            /*下一张*/
            carousel.carousel('next');
        }
    })
})


