$(document).ready(function ( ) {
    //加载完成后自动加载全部老师
    $("#xxButton").removeClass("my-button-actived");
    $("#wsButton").removeClass("my-button-actived");
    $("#allButton").addClass("my-button-actived");
    $("#xxButton").attr("disabled", false);
    $("#wsButton").attr("disabled", false);
    $("#allButton").attr("disabled", true);
    $("#xinxi").removeClass("show");
    $("#weisheng").removeClass("show");
    $("#all-tea").addClass("show");
});
$("#allButton").click(function () {
    if (!$("#allButton").hasClass("my-button-actived")) {
        $("#xxButton").removeClass("my-button-actived");
        $("#wsButton").removeClass("my-button-actived");
        $("#allButton").addClass("my-button-actived");
        $("#xxButton").attr("disabled", false);
        $("#wsButton").attr("disabled", false);
        $("#allButton").attr("disabled", true);
        $("#xinxi").removeClass("show");
        $("#weisheng").removeClass("show");
        $("#all-tea").addClass("show");
    }

});
$("#xxButton").click(function () {
    if (!$("#xxButton").hasClass("my-button-actived")) {
        $("#allButton").removeClass("my-button-actived");
        $("#wsButton").removeClass("my-button-actived");
        $("#xxButton").addClass("my-button-actived");
        $("#allButton").attr("disabled",false);
        $("#wsButton").attr("disabled",false);
        $("#xxButton").attr("disabled",true);
        $("#all-tea").removeClass("show");
        $("#weisheng").removeClass("show");
        $("#xinxi").addClass("show");
    }
});
$("#wsButton").click(function () {
    if (!$("#wsButton").hasClass("my-button-actived")) {
        $("#allButton").removeClass("my-button-actived");
        $("#xxButton").removeClass("my-button-actived");
        $("#wsButton").addClass("my-button-actived");
        $("#allButton").attr("disabled",false);
        $("#xxButton").attr("disabled",false);
        $("#wsButton").attr("disabled",true);
        $("#all-tea").removeClass("show");
        $("#xinxi").removeClass("show");
        $("#weisheng").addClass("show");
    }
});

