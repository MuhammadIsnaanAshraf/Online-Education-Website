$(document).ready(function(){
    $('.fas').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle')
        console.log('you clicked');
    });
    $(window).on('scroll load', function () {
        $('.fas').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
    });
    
});