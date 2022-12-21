/*
 * @Author: GUI XUE TING
 * @LastEditors: GUI XUE TING
 */
import * as React from "react";
import { Result, Button } from 'antd';
import { NavLink, BrowserRouter, Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className='h100 w100 df aic jcc'>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <NavLink to={{ pathname: '/' }}>
            <Button type="primary">返回登录页</Button>
          </NavLink>

        }
      />
    </div>
  );
};
export default NotFound;
