const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    effect: 'creative', // Kích hoạt hiệu ứng sáng tạo
    creativeEffect: {
        prev: {
            // Hiệu ứng cho slide trước
            translate: ['-50%', 0, -500], // Dịch chuyển trục X, Y, Z
            opacity: 0.5, // Mờ đi
        },
        next: {
            // Hiệu ứng cho slide tiếp theo
            translate: ['50%', 0, -500],
            opacity: 0.5,
        },
    },
});
const swiperProduct = new Swiper('.swiper-product', {
    loop: false,
    navigation: {
        nextEl: '.swiper-product-button-next',
        prevEl: '.swiper-product-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 2,
    breakpoints: {
        767: {
            slidesPerView: 3,
        },
        980: {
            slidesPerView: 4,
        },
    },

});
const swiperTestimonial = new Swiper('.swiper-testimonial', {
    loop: false,
    pagination: {
        el: '.swiper-pagination-testimonial',
        clickable: true,
    },
    slidesPerView: 1,
});