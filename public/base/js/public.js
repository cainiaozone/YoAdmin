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

  var system = $('.wrapper').hasClass('system');
  var dashboard = $('.wrapper').hasClass('dashboard');
  var model = $('.wrapper').hasClass('model');
  if (system) {
    // 系统管理
    $('.navbar-section .curr-service').text('系统管理')
  } else if (dashboard) {
    // 仪表板
    $('.navbar-section .curr-service').text('仪表板')
  } else if (model) {
    // 系统集成
    $('.navbar-section .curr-service').text('系统集成')
  }

})