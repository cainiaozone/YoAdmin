module.exports = {
  // 仪表板
  panel: async (ctx, next) => {
    await ctx.render('statistics/panel', {
      title: '仪表板',
      pagename: 'page-panel',
      pageclass: 'dashboard page-panel'
    })
  }
}