module.exports={
  //首页
  home: async(ctx,next)=>{
    await ctx.render('index',{
      pagename:'home'
    })
  },
  // 登录
  login:async(ctx,next)=>{
    await ctx.render('login',{
      pagename:'login'
    })
  },
  // 组织
  organization:async(ctx,next)=>{
    await ctx.render('system/organization',{
      pagename:'organization'
    })
  },
  // License
  license:async(ctx,next)=>{
    await ctx.render('system/license',{
      pagename:'License'
    })
  },
  // 用户
  userlists:async(ctx,next)=>{
    await ctx.render('system/userlists',{
      pagename:'userlists'
    })
  },
  // 用户组
  usergroup:async(ctx,next)=>{
    await ctx.render('system/usergroup',{
      pagename:'usergroup'
    })
  },
  // 用户角色
  userrole:async(ctx,next)=>{
    await ctx.render('system/userrole',{
      pagename:'userrole'
    })
  }
}
