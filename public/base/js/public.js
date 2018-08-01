$(function () {
  // 切换服务
  $('header .navbar-section').click(function () {
    $(this).toggleClass('active')
    $(this).children('.glyphicon').toggleClass('glyphicon-menu-down').toggleClass('glyphicon-menu-up')
    $('.service-lists').slideToggle();
  })

  // 切换左侧导航
  $('.sidebar-status').click(function () {
    $('.nav-sidebar').toggleClass('menu-min')
  })
})
