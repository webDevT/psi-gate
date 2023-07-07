$(function(){

$('.menu-btn').click(function(){
    $(this).toggleClass('active');
    $('.menu').toggleClass('active');
})

$('.faq-header').click(function(){
    $(this).toggleClass('active');
    $(this).parent().find('.faq-content').slideToggle();
})




// $('.tab').click(function(){
//     $('.tab').removeClass('active');
//     $(this).addClass('active');
    
// })

});