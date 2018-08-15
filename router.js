const router = require('koa-router')();
// 引入 controller
const systemController = require('./controller/system')
const statisticsController = require('./controller/statistics')
const integrationController = require('./controller/integration')

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
    .get('/sys/groupdesc', systemController.groupdesc)
    .get('/sys/userrole', systemController.userrole)
    .get('/sys/roledesc', systemController.roledesc)
    .get('/sys/logs', systemController.logs)

    .get('/dashboard/panel', statisticsController.panel)

    .get('/model/types', integrationController.modelTypes)
    .get('/model/lists', integrationController.modelLists)
    .get('/model/add', integrationController.modelAdd)
    .get('/model/edit', integrationController.modelEdit)


  app.use(router.routes())
    .use(router.allowedMethods())
}