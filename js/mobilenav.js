onResize = function() {
    var viewportWidth = $(window).width();
    if (viewportWidth < 650) {
        $("nav").attr('id', 'menu');
        $("nav").addClass('panel');
    }else {
        $("#menu").removeAttr('id');
    }
}
$(document).ready(onResize);
$(window).resize(onResize);