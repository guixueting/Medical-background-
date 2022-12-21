import * as React from 'react';
import { NavLink, RouteComponentProps, withRouter, Link, useParams } from 'react-router-dom';
// import { withRouter } from 'react-router'
import Icon, { CaretLeftOutlined, DiffOutlined, SnippetsOutlined } from '@ant-design/icons';
import { Menu, Button } from 'antd';
import { MenuBarWidth, SaveActionIndex } from '../../utils/index';
import './index.scss';
const { SubMenu } = Menu;
const { useState, useEffect } = React;
import { useSelector, useDispatch } from 'react-redux';
interface Aside {
  /** 侧边栏数据 */
  data: any;
  /**  当前的menu-acitve*/
  defaultSelectedKeys: string[];
  /** 当前展开的index */
  defaultOpenKeys?: string[];
  /** 侧边栏转态 */
  collapsed: boolean;
  /** 切换侧边栏 */
  onToggleCollapsed: Function;
}

const MenuBar: React.FC<Aside> = props => {
  const { data, defaultSelectedKeys, collapsed, defaultOpenKeys, onToggleCollapsed } = props;
  const [state, setState] = useState({
    //无子级
    defaultSelectedKeys: defaultSelectedKeys,
    //有子级
    defaultOpenKeys: defaultOpenKeys
  });

  useEffect(() => {
    switchMenuBarActive();
    console.log('menubar-------------------------------', props);
  }, [defaultSelectedKeys, defaultOpenKeys]);

  /** 缓存当前menuBar */
  const switchMenuBarActive = () => {
    setState({ ...state, defaultSelectedKeys, defaultOpenKeys });
  };

  /** 存储所选页权限 */
  const MenuHandler = (promise, pathName, parentKey, childKey?) => {
    if (childKey !== undefined) {
      SaveActionIndex(
        promise,
        ['sub' + parentKey.toString() + childKey.toString()],
        ['sub' + parentKey.toString()]
      );
      setState({
        ...state,
        defaultSelectedKeys: ['sub' + parentKey.toString() + childKey.toString()]
      });
    } else {
      SaveActionIndex(promise, [`${parentKey.toString()}`], ['']);
      setState({
        ...state,
        defaultSelectedKeys: [`${parentKey.toString()}`],
        defaultOpenKeys: ['']
      });
    }

  };
  //切换侧边栏
  const toggleCollapsed = () => {
    let bol = collapsed;
    onToggleCollapsed(!bol);
  };

  return (
    <div className="aside__component h100 psr" style={{ width: collapsed ? 80 : MenuBarWidth }}>
      <div className='logo'>
        <img src={require('../../assects/images/logo.png')}></img>
        <div>正也医药有限公司</div>
      </div>
      <div className="oya">
        <Menu
          selectedKeys={state.defaultSelectedKeys}
          openKeys={state.defaultOpenKeys}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          onOpenChange={(menu: any) => setState({ ...state, defaultOpenKeys: [menu[1]] })}
        >
          {data &&
            data.length &&
            data.map((item: any, index) =>
              item.path && !item.children ? (
                item.hidden !== true && (
                  <Menu.Item
                    onClick={() => MenuHandler(item.selectedPromise, item.path, index)}
                    // onClick={() => SaveActionIndex(item.selectedPromise, index)}
                    key={index.toString()}
                  >
                    <NavLink
                      key={index.toString()}
                      to={{
                        pathname: item.path,
                        state: {
                          name: item.name,
                          menuIndex: index,
                          selectedPromise: item.selectedPromise
                        }
                      }}
                    >
                      {item.icon && <SnippetsOutlined />}
                      <span>{item.title}</span>
                    </NavLink>
                  </Menu.Item>
                )
              ) : (
                <SubMenu
                  key={'sub' + index.toString()}
                  title={
                    <span>
                      {item.icon && <DiffOutlined />}
                      <span>{item.title}</span>
                    </span>
                  }
                >
                  {item.children &&
                    item.children.length > 0 &&
                    item.children.map((child, cindex) => (
                      <Menu.Item
                        onClick={
                          // () => SaveActionIndex(child.selectedPromise, index + cindex)
                          () => MenuHandler(child.selectedPromise, child.path, index, cindex)
                        }
                        key={'sub' + index.toString() + cindex.toString()}
                      >
                        <NavLink
                          to={{
                            pathname: child.path,
                            state: {
                              name: child.name,
                              menuIndex: index + cindex,
                              selectedPromise: child.selectedPromise
                            }
                          }}
                        >
                          {child.title}
                        </NavLink>
                      </Menu.Item>
                    ))}
                </SubMenu>
              )
            )}
        </Menu>
      </div>

      {/* 按钮 */}
      <div className="menu__controler psa df jcc aic">
        <div className={`icon__outer psa df jcc aic `} onClick={toggleCollapsed}>
          <CaretLeftOutlined className={`${collapsed && 'icon__outer__Collapsed'} fcff fz16`} />
        </div>
      </div>
    </div>
  );
};
export default MenuBar;
