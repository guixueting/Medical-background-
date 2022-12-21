/*
 * @Author: GUI XUE TING
 * @LastEditors: GUI XUE TING
 */
import OnlineBread from "@/components/online-bread"
import OnlineHeader from "@/components/online-header"
import OnlineMenuBar from "@/components/online-menubar"
import React, { useState } from "react"
import './index.scss'
import { MenuBar } from '../../utils/memu-bar';
import Test from "../test"
import { Route, Switch } from "react-router"



const Layout = () => {
  const [state, setState] = useState({
    pageName: '',
    error: false,
    RedirectPath: '',
    //无子级
    defaultSelectedKeys: ['0'],
    //有子级
    defaultOpenKeys: [''],
    show: false,
    collapsed: false,
    //第一次登陆后拿到的数据
    accountSource: null,
    isHome: false
  });
  //切换侧边栏
  const toggleCollapsed = (collapsed: boolean) => {
    console.log('切换侧边栏--------------', collapsed);
    setState({ ...state, collapsed });
  };
  return <div className="layout">
    <div className="df jcsb  bgf5 main__content">
      {/* 侧边栏 */}
      <OnlineMenuBar
        collapsed={state.collapsed}
        data={MenuBar.find}
        defaultSelectedKeys={state.defaultSelectedKeys}
        defaultOpenKeys={state.defaultOpenKeys}
        onToggleCollapsed={toggleCollapsed}
      ></OnlineMenuBar>
      {/* content */}
      <div className="df fdc w100">
        <OnlineHeader></OnlineHeader>
        <div className="layout__container h100 fl1">
          <OnlineBread></OnlineBread>
          <div
            className="layout__content"
          >
            <Route path={'/index/test'} component={Test}></Route>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default Layout