/*
 * @Date: 2022-06-22 15:31:17
 * @LastEditors: GUI XUE TING
 * @LastEditTime: 2022-12-21 10:13:44
 * @FilePath: \examination-database-management-system\src\components\online-bread\index.tsx
 * @Description:
 */
import * as React from 'react';
import { NavLink, RouteComponentProps, withRouter, Link } from 'react-router-dom';
import { Menu, Button, Breadcrumb } from 'antd';
import './index.scss';
import { CreateRoutes } from '../../routers/creat-routes';

const OnlineBread = withRouter(props => {
  const { location } = props;
  const breadcrumbName: any = CreateRoutes.map(routerItem => {
    return [routerItem.path, routerItem.breadcrumb];
  });
  const breadcrumbNameMap = Object.fromEntries(new Map(breadcrumbName));
  const pathSnippets = location.pathname.split('/').filter(i => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    console.log(url);

    return (
      <Breadcrumb.Item key={url}>
        {index === pathSnippets.length - 1 ? (
          breadcrumbNameMap[url]
        ) : (
          <Link
            to={{
              pathname: url,
              state: location.state ?? undefined
            }}
          >
            <span>{breadcrumbNameMap[url]}</span>
          </Link>
        )}
      </Breadcrumb.Item>
    );
  });
  return (
    <div className='bread'>
      <Breadcrumb>{extraBreadcrumbItems}</Breadcrumb>
      <div className='big-title'>新增二级协议</div>
    </div>
  );
});
export default OnlineBread;
