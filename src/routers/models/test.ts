/*
 * @Date: 2022-03-17 16:48:39
 * @LastEditors: GUI XUE TING
 * @LastEditTime: 2022-12-21 09:30:27
 * @FilePath: \examination-database-management-system\src\routes\model\examinationPaperManagement.ts
 * @Description:路由-试卷管理
 */

import * as React from 'react';
const { lazy } = React;

//试卷管理
const Test = lazy(
  () => import(/* webpackChunkName:"Test" */ '@/pages/test')
);


const Index = [
  {
    breadcrumb: '测试1111',
    path: '/index/test',
    exact: true,
    component: Test,
    auth: true
  },
  {
    breadcrumb: '测试222',
    path: '/index/test1',
    exact: true,
    component: Test,
    auth: true
  },
  {
    breadcrumb: '测试222233',
    path: '/index/test2',
    exact: true,
    component: Test,
    auth: true
  },
  {
    breadcrumb: '测试333',
    path: '/index/test3',
    exact: true,
    component: Test,
    auth: true
  },
  {
    breadcrumb: '测试444',
    path: '/index/test4',
    exact: true,
    component: Test,
    auth: true
  },
];

export default Index;
