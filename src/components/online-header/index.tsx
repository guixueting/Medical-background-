/*
 * @Author: GUI XUE TING
 * @LastEditors: GUI XUE TING
 */
import * as React from 'react';
import { NavLink, Link, RouteComponentProps, Redirect, withRouter } from 'react-router-dom';
import './index.scss';
import { Menu, Dropdown, Select, Button, Badge } from 'antd';
const { Option } = Select;
import { ApartmentOutlined, ApiOutlined, ApiTwoTone, CloudSyncOutlined, DownOutlined, HomeOutlined, MailOutlined } from '@ant-design/icons';
const { useEffect, useState } = React;
interface Header {

  /** 显示修改免密 */
  onClick: Function;

}

const Index = props => {
  const { onClick, collapsed, onToggleCollapsed, } = props;

  /** 点击修改密码 */
  const clickMenu = e => {
    if (e.key === '1') {
      onClick();
    }
    // console.log('点击修改密码---------', e)
  };
  // console.log('11111111111111Header', data)
  const menu = (
    <Menu onClick={clickMenu}>
      <Menu.Item key="1">
        <p>修改密码</p>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to="/">退出</NavLink>
      </Menu.Item>
    </Menu>
  );

  //切换侧边栏
  const toggleCollapsed = () => {
    let bol = collapsed;
    onToggleCollapsed(!bol);
  };

  const test = [
    {
      name: '首页',
      icon: <HomeOutlined />
    },
    {
      name: '主数据',
      icon: <CloudSyncOutlined />
    },
    {
      name: '辖区管理',
      icon: <ApartmentOutlined />
    },
    {
      name: '销训通',
      icon: <ApiOutlined />
    }
  ]

  return (
    <div className="header__component  w100 df  aic">
      {
        test.map((item, index) => {
          return <div key={index} className='df aic headr-item'>
            <div className='icon'>{item.icon}</div>
            <div className='name'>{item.name}</div>
          </div>
        })
      }
    </div >
  );
};
export default withRouter(Index);
