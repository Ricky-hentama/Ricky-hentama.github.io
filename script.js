$(window).on("load", function () {
    $(".navbar").addClass("element-show-nav");


    $(".satu").addClass("element-show");

    setTimeout(function () {
        $(".dua").addClass("element-show");
    }, 500);
    setTimeout(function () {
        $(".tiga").addClass("element-show");
    }, 1000);
    setTimeout(function () {
        $(".tombol-utama").addClass("element-show");
    }, 1500);
    // $(".satu, .dua, .tiga, .tiga, .tombol-utama ").addClass("element-show");
});