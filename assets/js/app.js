$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    dots: true,
    arrows: false,
    infinity: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                sliderToShow: 3,
                slidesToScroll: 1,
                infinity: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                sliderToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                sliderToShow: 3,
                slidesToScroll: 1,
            }
        }

    ]
});