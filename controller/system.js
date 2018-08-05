module.exports = {
  //首页
  home: async (ctx, next) => {
    await ctx.render('index', {
      title: '首页',
      pagename: 'home',
      pageclass: 'home'
    })
  },
  // 登录
  login: async (ctx, next) => {
    await ctx.render('login', {
      title: '登录',
      pagename: 'login',
      pageclass: 'login'
    })
  },
  // 组织
  organization: async (ctx, next) => {
    await ctx.render('system/organization', {
      title: '组织',
      pagename: 'organization',
      pageclass: 'organization'
    })
  },
  // License
  license: async (ctx, next) => {
    await ctx.render('system/license', {
      title: 'License',
      pagename: 'License',
      pageclass: 'License'
    })
  },
  // 用户
  userlists: async (ctx, next) => {
    await ctx.render('system/userlists', {
      title: '用户',
      pagename: 'userlists',
      pageclass: 'userlists'
    })
  },
  // 用户详情
  userdesc: async (ctx, next) => {
    await ctx.render('system/users/userdesc', {
      title: '用户详情',
      pagename: 'userlists',
      pageclass: 'userdesc'
    })
  },
  // 用户组
  usergroup: async (ctx, next) => {
    await ctx.render('system/usergroup', {
      title: '用户组',
      pagename: 'usergroup',
      pageclass: 'usergroup'
    })
  },
  // 用户组详情页
  groupdesc: async (ctx, next) => {
    await ctx.render('system/users/groupdesc', {
      title: '用户组详情',
      pagename: 'usergroup',
      pageclass: 'groupdesc'
    })
  },
  // 用户角色
  userrole: async (ctx, next) => {
    await ctx.render('system/userrole', {
      title: '用户角色',
      pagename: 'userrole',
      pageclass: 'userrole'
    })
  },
  // 用户角色详情页
  roledesc: async (ctx, next) => {
    await ctx.render('system/users/roledesc', {
      title: '用户角色详情',
      pagename: 'userrole',
      pageclass: 'roledesc'
    })
  },
  // 日志
  logs: async (ctx, next) => {
    await ctx.render('system/logs', {
      title: '日志',
      pagename: 'logs',
      pageclass: 'logs'
    })
  }
}