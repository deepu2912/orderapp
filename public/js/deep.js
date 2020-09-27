(function ($) {
    "use strict"; $('[data-toggle="tooltip"]').tooltip();
    $('.offer-slider').slick({
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 2,
        arrows: false,
        responsive: [{
            breakpoint: 768, settings: {
                arrows: false, centerMode: true, centerPadding: '40px', slidesToShow: 2
            }
        },
        {
            breakpoint: 480, settings:
                { arrows: false, centerMode: true, centerPadding: '40px', slidesToShow: 2 }
        }]
    });
    $('.cat-slider').slick({
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 4,
        arrows: false,
        responsive: [{ breakpoint: 768, settings: { arrows: false, centerMode: true, centerPadding: '40px', slidesToShow: 4 } }, { breakpoint: 480, settings: { arrows: false, centerMode: true, centerPadding: '40px', slidesToShow: 4 } }]
    });
    $('.trending-slider').slick({
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 1,
        arrows: false,
        responsive: [{
            breakpoint: 768, settings:
                { arrows: false, centerMode: true, centerPadding: '40px', slidesToShow: 2 }
        },
        {
            breakpoint: 480, settings: {
                arrows: false,
                centerMode: true, centerPadding: '40px',
                slidesToShow: 1
            }
        }]
    });
    $('.osahan-slider').slick({
        centerMode: false,
        slidesToShow: 1,
        arrows: false,
        dots: true
    });
    $('.osahan-slider-map').slick({
        centerMode: true,
        centerPadding: '30px', slidesToShow: 2,
        arrows: false,
        responsive: [{
            breakpoint: 768, settings:
                { arrows: false, centerMode: true, centerPadding: '40px', slidesToShow: 3 }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px', slidesToShow: 3
            }
        }]
    });
    var $main_nav = $('#main-nav');
    var $toggle = $('.toggle');
    var defaultOptions = {
        disableAt: false,
        customToggle: $toggle,
        levelSpacing: 40,
        navTitle: 'Askbootstrap',
        levelTitles: true,
        levelTitleAsBack: true,
        pushContent: '#container',
        insertClose: 2
    };
    var Nav = $main_nav.hcOffcanvasNav(defaultOptions);
    $("body").on("contextmenu", function (e) { return false; });

    $(document).keydown(function (e) {
        // if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) { return false; }
        // if (e.which === 123) { return false; }
        // if (e.metaKey) { return false; }
        // if (e.ctrlKey && e.shiftKey && e.keyCode == 73) { return false; }
        // if (e.ctrlKey && e.shiftKey && e.keyCode == 74) { return false; }
        // if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) { return false; }
        // if (e.keyCode == 224 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) { return false; }
        // if (e.ctrlKey && e.keyCode == 85) { return false; }
        // if (event.keyCode == 123) { return false; }
    });
})(jQuery);