$(document).ready(function () {
    $(".regBorder2").mouseover(function () {
        $(".regBorder2").css("background-color", "white");
        $(".colorWt2").css("color", "#0286CA");
    });
    $(".regBorder2").mouseout(function () {
        $(".regBorder2").css("background-color", "#0286CA");
        $(".colorWt2").css("color", "white");
    });
});
