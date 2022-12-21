/*
 * @Date: 2022-03-23 21:55:24
 * @LastEditors: GUI XUE TING
 * @LastEditTime: 2022-12-21 09:49:05
 * @FilePath: \examination-database-management-system\src\routes\index.tsx
 * @Description:
 */
import * as React from 'react';
import { Route, Switch, RouteProps, Redirect } from 'react-router-dom';
import { OnlineLoading } from '@/components/index';
import { CreateRoutes } from './creat-routes';
const { Suspense, lazy } = React;

const NotFound = lazy(() => import(/* webpackChunkName:"NotFound" */ '@/pages/not-found'));

//layout
const Layout = lazy(() => import(/* webpackChunkName:"layout" */ '@/pages/layout'));
//登录
//登录
const Error = lazy(() => import(/* webpackChunkName:"Error" */ '@/pages/error'));
//首页
const Login = lazy(() => import(/* webpackChunkName:"Home" */ '@/pages/home'));

interface YDProps extends RouteProps {
  auth?: boolean;
}

const routes: YDProps[] = [
  {
    path: '/',
    exact: true,
    auth: false,
    component: Login
  },
  {
    path: '/error',
    exact: true,
    auth: false,
    component: Error
  },
  {
    path: '/index',
    exact: false,
    component: Layout,
    auth: true
  }
];

const generateRoutes = (newRoutes: YDProps[] | any, NotFound?) => (token?: string) => {
  return (
    <Suspense fallback={<OnlineLoading />}>
      <Switch>
        {newRoutes.map((route, index) => {
          // console.log("🍊", index);
          const { path, exact, component } = route;
          const LazyCom = component;
          return (
            <Route
              key={index}
              path={path}
              exact={exact}
              render={props =>
                !route.auth ? (
                  <LazyCom {...props} />
                ) : token ? (
                  <LazyCom {...props} />
                ) : (
                  <Redirect
                    to={{
                      pathname: '/',
                      state: { from: props.location }
                    }}
                  />
                )
              }
            />
          );
        })}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
};
// 对状态属性进行监听
const Routes = generateRoutes(routes, Error);
const IndexRutes = generateRoutes(CreateRoutes, NotFound);
export { IndexRutes };
export default Routes;
