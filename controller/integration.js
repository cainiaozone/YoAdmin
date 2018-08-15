module.exports = {
  // 模板分类
  modelTypes: async (ctx, next) => {
    await ctx.render('integration/model-types', {
      title: '模板分类',
      pagename: 'model-types',
      pageclass: 'model model-types'
    })
  },
  // 已创建模板列表
  modelLists: async (ctx, next) => {
    await ctx.render('integration/model-lists', {
      title: '已创建模板',
      pagename: 'model-lists',
      pageclass: 'model model-lists'
    })
  },
  // 新增模板
  modelAdd: async (ctx, next) => {
    await ctx.render('integration/model-add', {
      title: '新建模板',
      pagename: 'model-add',
      pageclass: 'model model-add'
    })
  },
  // 编辑模板
  modelEdit: async (ctx, next) => {
    await ctx.render('integration/model-edit', {
      title: '编辑模板',
      pagename: 'model-edit',
      pageclass: 'model model-edit'
    })
  },

}