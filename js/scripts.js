
    (function ($) {
    "use strict"; // Start of use strict


        // ENVIAR DATOS POST API HUB SPOT

        const enviar = document.querySelector('form');

          function name() {
            return document.querySelector('input[name="name"]').value
            }

        function email() {
            return document.querySelector('input[name="email"]').value
            }

          function phone() {
            return document.querySelector('input[name="phone"]').value
            }


        enviar.onsubmit = function(e)
        {
                e.preventDefault();

            const url = 'https://forms.hubspot.com/uploads/form/v2/{idcliente}/{idformulario}';

            const data =  new URLSearchParams({
                firstname: name(),
                mobilephone : phone(),
                email : email(),  
                creador_lead :"HubSpot Integration"
                })

                console.log(data)

            fetch(url, {
                method: 'POST', // or 'PUT'
                body: data, // data can be `string` or {object}!
                headers:{
                  'content-type': 'application/x-www-form-urlencoded; charset=UTF-8' 
                }
              }).then(function(response) {
                    console.log(response)
                         
                });

              
        }
        



    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict
