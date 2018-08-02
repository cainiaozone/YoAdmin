module.exports = {
  //首页
  home: async (ctx, next) => {
    await ctx.render('index', {
      title: '首页',
      pagename: 'home'
    })
  },
  // 登录
  login: async (ctx, next) => {
    await ctx.render('login', {
      title: '登录',
      pagename: 'login'
    })
  },
  // 组织
  organization: async (ctx, next) => {
    await ctx.render('system/organization', {
      title: '组织',
      pagename: 'organization'
    })
  },
  // License
  license: async (ctx, next) => {
    await ctx.render('system/license', {
      title: 'License',
      pagename: 'License'
    })
  },
  // 用户
  userlists: async (ctx, next) => {
    await ctx.render('system/userlists', {
      title: '用户',
      pagename: 'userlists'
    })
  },
  // 用户组
  usergroup: async (ctx, next) => {
    await ctx.render('system/usergroup', {
      title: '用户组',
      pagename: 'usergroup'
    })
  },
  // 用户角色
  userrole: async (ctx, next) => {
    await ctx.render('system/userrole', {
      title: '用户角色',
      pagename: 'userrole'
    })
  },
  // 日志
  logs: async (ctx, next) => {
    await ctx.render('system/logs', {
      title: '日志',
      pagename: 'logs'
    })
  }
}