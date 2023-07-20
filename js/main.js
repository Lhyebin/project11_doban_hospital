$(function () {
    // 메인비쥬얼 : 이미지 다음페이지
    $('.visual_wrap').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade: true,
    });

    // 메인비쥬얼 : 화살표
    $('.main_visual .main_arrows .left').on('click', function () {
        $('.visual_wrap').slick('slickPrev')
    })
    $('.main_visual .main_arrows .right').on('click', function () {
        $('.visual_wrap').slick('slickNext')
    })









    // 메인product : 이미지 다음페이지
    $('.product_box').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade: true,
    });

    // 메인product : 화살표
    $('.main_product .product_arrows .left').on('click', function () {
        $('.product_box').slick('slickPrev')
    })
    $('.main_product .product_arrows .right').on('click', function () {
        $('.product_box').slick('slickNext')
    })
});