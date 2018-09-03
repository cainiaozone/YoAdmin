#  数据管理系统

## 介绍
YoAdmin 是使用 Node和koa2 搭建的管理系统的前端界面。

## 安装部署

```
1. 安装 `Node.js[必须]`，[下载路径](http://nodejs.cn/download/)
2. ` node install ` 安装项目依赖包
3. `$ node run dev` 启动项目
4. 访问 `http://localhost:8080`
5. 完成!
```

## 目录结构
```
YoAdmin
|
|—— config                                        配置文件
|—— controller                                    路由配置
|—— public                                        静态文件
|     |—— assets                                  第三方插件引用
|     |—— base                                    基础 UI（js、css、image） 文件
|     |—— home                                    系统首页 UI 文件
|     |—— integration                             系统集成 UI 文件
|     |—— json                                    模拟的静态json 数据文件
|     |—— login                                   登录页面 UI 文件
|     |—— system                                  系统管理 UI 文件
|     
|—— views                                         HTML 静态文件
|     |—— common                                  公共组件文件
|     |—— integration                             系统集成
|     |     |—— model-add.html                    新增模板 html
|     |     |—— model-edit.html                   编辑模板
|     |     |—— model-types.html                  模板分类
|     |     |—— modelmenu.html                    模板左侧公共菜单
|     |
|     |—— statistics                              仪表板
|     |     |—— panel.html                        仪表板
|     |     |—— panelmenu.html                    仪表板公共菜单
|     |
|     |—— system                                  系统管理
|     |     |—— logs                              日志页面 子组件
|     |     |—— users                             用户、用户组、用户角色详情页
|     |     |—— changepwd.html                    修改密码页
|     |     |—— license.html                      License
|     |     |—— logs.html                         日志
|     |     |—— organization.html                 组织
|     |     |—— sysmenu.html                      系统左侧功能菜单
|     |     |—— usergroup.html                    用户组
|     |     |—— userlists.html                    用户
|     |     |—— userrole.html                     用户角色
|     |
|     |—— index.html                              首页
|     |—— login.html                              登录页
```
