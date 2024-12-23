const header = document.getElementById("sticky-header");
const btnScrollToTop = document.getElementById("btn-scroll-to-top");
window.onscroll = function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > 500) {
        header.style.top = "-1px";
        header.style.boxShadow = '0 0 8px 1px #0003;'
        btnScrollToTop.style.opacity = '1'
        btnScrollToTop.style.visibility = 'visible'
        btnScrollToTop.style.transform = 'translateY(-20px)'
    } else {
        header.style.top = "-150px";
        btnScrollToTop.style.opacity = '0'
        btnScrollToTop.style.visibility = 'hidden'
        btnScrollToTop.style.transform = 'translateY(20px)'
    }
};

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}