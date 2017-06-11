import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    redirect: '/message'
  }, {
    path: '/message',
    name: 'message',
    component: (resolve) => require(['pages/list/message'], resolve)
  }, {
    path: '/message/create',
    name: 'create',
    component: (resolve) => require(['pages/create/create'], resolve)
  }, {
    path: '/message/create/select-range',
    name: 'select-range',
    component: (resolve) => require(['pages/create/select-range'], resolve)
  }, {
    path: '/message/create/select-type',
    name: 'select-type',
    component: (resolve) => require(['pages/create/select-type'], resolve)
  }, {
    path: '/message/create/select-type/add-type/:type',
    name: 'add-type',
    component: (resolve) => require(['pages/create/add-type'], resolve)
  }, {
    path: '/message/create/preview',
    name: 'preview',
    component: (resolve) => require(['pages/create/preview'], resolve)
  }, {
    path: '/message/check/details',
    name: 'details',
    component: (resolve) => require(['pages/check/details'], resolve)
  }, {
    path: '/message/affirm/affirm',
    name: 'affirm',
    component: (resolve) => require(['pages/affirm/affirm'], resolve)
  }, {
    path: '/message/affirm/unconfirmed-list',
    name: 'unconfirmed-list',
    component: (resolve) => require(['pages/affirm/unconfirmed-list'], resolve)
  }]
});

/*
*  /message  消息列表
*  /message/create  添加消息
*  /message/create/select-range  选择参与者
*  /message/create/select-type  选择消息类型
*  /message/create/select-type/add-type   添加消息类型
*/
