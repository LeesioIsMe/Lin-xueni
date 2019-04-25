$(function () {
    $(".nav-list li").each(function (i, li) {
        $(li).click(function () {
            $(this).addClass("on").siblings().removeClass("on");
        })
    })
})