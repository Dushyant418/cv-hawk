const menuicon = document.querySelector(".menuicon");
const menulist = document.querySelector(".menulist");
const navlink = document.querySelectorAll(".nav-links")
navlink.forEach(a => a.addEventListener("click", () => {
    menulist.classList.toggle("show");
    document.body.classList.remove("overflow-hidden");
    menuicon.classList.toggle("show");
}))
menuicon.addEventListener("click", () => {
    menulist.classList.toggle("show");
    document.body.classList.toggle("overflow-hidden");
    menuicon.classList.toggle("show");
});

$('.slider_container').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 734,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


$('.sldr-2').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: true,
    prevArrow: '.left-btn',
    nextArrow: '.right-btn',
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
});


let accordionitem = document.querySelectorAll(".accordionItem");

accordionitem.forEach(function (e) {
    e.addEventListener("click", function () {
        const isitactive = e.classList.contains("active");
        accordionitem.forEach(function (e) {
            e.classList.remove("active");
        })
        if (!isitactive) {
            e.classList.toggle("active");
        }
    })
});