var testimonialData = [
    {
        avatar: "https://img.freepik.com/free-photo/woman-with-long-hair-yellow-hoodie-with-word-music-it_1340-39068.jpg",
        name: "Utkarsh Dwivedi",
        review: "Mind-blowing discovery! changed my routine. Essential for everyone. A wise advice to all interested. Can't imagine without it!"
    },
    // ... (other testimonial data entries)
    {
        avatar: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
        name: "Pankhuri",
        review: "Life-altering find! Indispensable now. Enthusiastically suggest to all. A game-changer for everyone!"
    }
];

var slideHolder = document.querySelector("#slideHolder");
for (let i of testimonialData) {
    slideHolder.innerHTML += `<div class="swiper-slide">
        <div class="ImgHolder"><img src="${i.avatar}"></div>
        <div class="ContentHolder"><h3>${i.name}</h3><p>${i.review}</p></div>
    </div>`;
}

const swiper = new Swiper('#carouselContainer', {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2.3,
    loop: true,
    spaceBetween: 30,
    effect: "coverflow",
    coverflowEffect: {
        rotate: 0,
        depth: 800,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    autoplay: { delay: 5000 }
});

window.onresize = queryResizer;
queryResizer();

function queryResizer() {
    if (window.innerWidth < 501) {
        swiper.params.slidesPerView = 1;
    } else if (window.innerWidth < 724) {
        swiper.params.slidesPerView = 2;
    } else {
        swiper.params.slidesPerView = 2.3;
    }
    swiper.update();
}
