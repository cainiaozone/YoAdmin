const router = require('koa-router')();
// 引入 controller
const systemController = require('./controller/system')

module.exports = (app) => {
  /**
   * 模板文件
   */
  router.get('/', systemController.organization)
    .get('/login', systemController.login)
    .get('/sys/organization', systemController.organization)
    .get('/sys/license', systemController.license)
    .get('/sys/userlists', systemController.userlists)
    .get('/sys/userdesc', systemController.userdesc)
    .get('/sys/usergroup', systemController.usergroup)
    .get('/sys/userrole', systemController.userrole)
    .get('/sys/logs', systemController.logs)

  app.use(router.routes())
    .use(router.allowedMethods())
}