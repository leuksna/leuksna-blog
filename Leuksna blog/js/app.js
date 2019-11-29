$(document).ready(function () {
    /**------------------------------------
     *---------Mobile navigation --------------------------------**/
    $(".burger-icon").click(function () {
        if ($("#top-nav").hasClass("mobile-hide")) {
            $("#top-nav").removeClass("mobile-hide");
            $("#top-nav").addClass("mobile-show");
        } else {
            $("#top-nav").addClass("mobile-hide");
            $("#top-nav").removeClass("mobile-show");
        }

    });


});