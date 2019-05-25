// 编写jQuery返回顶部插件
jQuery.fn.goToTop = function() {
    var top = document.getElementById('goToTop');
    top.style.display = 'block';
    // 判断如果窗口滚动距离小于0，隐藏按钮
    if ($(window).scrollTop() < 2) {
        $('#goToTop').hide();
    }
    // 窗口滚动时，判断当前窗口滚动距离
    $(window).scroll(function() {

        if ($(this).scrollTop() > 1) {
            $('#goToTop').fadeIn();
        } else {
            $('#goToTop').fadeOut();
        }
    });

    // 给这个按钮绑定一个click事件
    this.bind('click', function() {
        $('html ,body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
};