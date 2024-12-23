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
const tableProduct = document.querySelector('.table-product')
const listProudctView = tableProduct.querySelectorAll('.grid-item');
const viewMode = document.querySelector('.view-mode')
var viewModePoduct = 'grid'
viewMode.addEventListener('click', (e) => {
    let mode = e.target.dataset.view;
    console.log(mode)
    if (mode == 'grid') {
        viewMode.querySelector('.change-grid').classList.add('change-view--active')
        viewMode.querySelector('.change-list').classList.remove('change-view--active')

        viewGrid();
        return
    }
    viewMode.querySelector('.change-grid').classList.remove('change-view--active')
    viewMode.querySelector('.change-list').classList.add('change-view--active')
    viewList();
});

function viewList() {
    listProudctView.forEach(element => {
        element.classList.remove('col-lg-4', 'col-md-6', 'col-sm-6', 'col-xs-6');
        element.classList.add('list-view', 'col-12');
    });
}

function viewGrid() {
    listProudctView.forEach(element => {
        element.classList.add('col-lg-4', 'col-md-6', 'col-sm-6', 'col-xs-6');
        element.classList.remove('list-view', 'col-12');
    });

}