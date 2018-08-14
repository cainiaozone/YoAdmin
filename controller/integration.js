module.exports = {
  // 已创建模板列表
  modelLists: async (ctx, next) => {
    await ctx.render('integration/model-lists', {
      title: ''
    })
  }
  // 新增模板
  // 编辑模板
}