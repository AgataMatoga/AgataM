$(document).ready(function () {
    $(document).on("scroll", onScroll);

    $('nav.main a').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top - 90}, 500);
    return false;

        $("nav.main a").click(function () {
            $("nav.main a").removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top-100}, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('nav.main a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top-100 <= scrollPos && refElement.position().top-100 + refElement.height() > scrollPos) {
           $('nav.main a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}