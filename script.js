$(window).on("load", function () {
    $(".navbar").addClass("element-show-nav");

    setTimeout(function () {
        $(".satu").addClass("element-show");
    }, 1000);
    setTimeout(function () {
        $(".dua").addClass("element-show");
    }, 1500);
    setTimeout(function () {
        $(".tiga").addClass("element-show");
    }, 2000);
    setTimeout(function () {
        $(".tombol-utama").addClass("element-show");
    }, 2500);
    // $(".satu, .dua, .tiga, .tiga, .tombol-utama ").addClass("element-show");
});