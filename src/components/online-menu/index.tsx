import * as React from "react";
import { NavLink, RouteComponentProps, BrowserRouter, Link } from "react-router-dom";
import './index.scss'
import { useSelector, useDispatch } from 'react-redux';
const { useEffect, useState } = React
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;

const Index = (props: {
  dataAry: any,
  onClick?: any,
  width?: number,
  title?: string,
  keyName?: string,
  nameKey?: string,
  valueKey?: string,
  childrenKeyName?: string,
  defaultSelectedKeys?: any
}) => {

  const { dataAry, onClick, width, title, keyName, nameKey, valueKey, childrenKeyName, defaultSelectedKeys } = {
    width: 250,
    ...props
  }

  const [state, setState] = useState({
    dataAry: [],
    defaultSelectedKeys: []
  })

  useEffect(() => {
    if (dataAry.length === 0) { return }
    mapRowKey(dataAry)
    setState({ dataAry: dataAry, defaultSelectedKeys: defaultSelectedKeys })
  }, [dataAry, defaultSelectedKeys])

  const createItem = (data: any) => {
    let hasChild = data.haveChild !== 'notHave'
    if (hasChild === true) {
      return <SubMenu key={data.key} title={data.title}>
        {
          data.children.map((item) => (
            createItem(item)
          )
          )
        }
      </SubMenu>
    } else {
      return < Menu.Item key={data.key} > {data.title}</ Menu.Item >
    }
  }

  const mapRowKey = (dataList) => {
    dataList && dataList.map(item => {
      let key = ''
      let childrenKey = 'children'
      let nameKeyStr = 'title'
      let valueKeyStr = 'value'

      if (item.key) {
        key = item.key
      }
      if (keyName) {
        key = item[keyName]
      }
      item.key = key
      if (childrenKeyName && childrenKeyName !== childrenKey) {
        childrenKey = childrenKeyName
      }

      if (nameKey && nameKey !== nameKeyStr) {
        item.title = item[nameKey]
      }
      if (valueKey && valueKey !== valueKeyStr) {
        item.value = item[valueKey]
      }
      if (item[childrenKey] && item[childrenKey].length) {
        item.children = item[childrenKey]
        mapRowKey(item[childrenKey])
      }
    })
  }

  return (
    <div>
      {title && <div className='top_title' style={{ width: width }}>{title}</div>}
      {
        state.dataAry.length > 0 &&
        <Menu
          onClick={e => onClick(e)}
          style={{ width: width }}
          defaultSelectedKeys={state.defaultSelectedKeys}
          mode="inline"
        >
          {
            dataAry.map((item) =>
              createItem(item)
            )
          }
        </Menu>}
    </div>
  )
}
export default Index;