$(function() {
  // 切换服务版块
  $('header .navbar-section').click(function() {
    $(this).toggleClass('active')
    $(this).children('.glyphicon').toggleClass('glyphicon-menu-down').toggleClass('glyphicon-menu-up')
    $('.service-lists').slideToggle();
  })

  // 切换左侧导航
  var page = $('.wrapper').attr('page')
  $('.nav-sidebar li').removeClass('active')
  $('.nav-sidebar .' + page).addClass('active')

})