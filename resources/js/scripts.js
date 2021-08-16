$(document).ready(
    function () {
        //sticky
        $('.about-section').waypoint(
            function (direction) {
                if (direction == 'down') {
                    $('nav').addClass('sticky');
                }
                else {
                    $('nav').removeClass('sticky');
                }
            }, {
            offset: '500px'
        }
        );

        //scroll
        $('a').click(
            function (event) {
                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top - 80
                }, 700);
                event.preventDefault();
            }
        );

        //mobile navigation
        $('.mobile-nav-icon').click(
            function () {
                $('.main-nav').slideToggle(200);

                if ($('.mobile-nav-icon').hasClass('fa-bars')) {
                    $('.mobile-nav-icon').addClass('fa-times');
                    $('.mobile-nav-icon').removeClass('fa-bars');
                }
                else {
                    $('.mobile-nav-icon').addClass('fa-bars');
                    $('.mobile-nav-icon').removeClass('fa-times');
                }
            }
        )

        //show navigation
        $(window).resize(function() {
            if($(window).width() >= 767) {
                $('.main-nav').show();
            }
            else {
                $('.main-nav').css('display', 'none');
                $('.mobile-nav-icon').addClass('fa-bars');
                $('.mobile-nav-icon').removeClass('fa-times');
                $('.main-nav').hide();
           }
        });
    }
)