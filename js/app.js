$(document).foundation();

$('.menuItem').click(function(evt) {
    $('.menu-icon').click();
});

$("#about-nav").click(function() {
    $('html, body').animate({
        scrollTop: $(".about").offset().top
    }, 1000);
});

$("#skills-nav").click(function() {
    $('html, body').animate({
        scrollTop: $(".skillset").offset().top
    }, 1000);
});

$("#work-nav").click(function() {
    $('html, body').animate({
        scrollTop: $(".work").offset().top
    }, 1000);
});

$("#logo-nav").click(function() {
    $('html, body').animate({
        scrollTop: $("#top").offset().top
    }, 1000);
});

$("#resume-nav").click(function() {
    $('html, body').animate({
        scrollTop: $("#resume").offset().top
    }, 1000);
});

$("#contact-nav").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
});
