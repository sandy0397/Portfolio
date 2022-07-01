let nav = document.querySelector(".navbar")
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header scrolled");
    }else{
        nav.classList.remove("header scrolled");
    }
}


$('.js-scroll-trigger').click(function(){
    $('.navbar-collapse').collapse('hide');
});
