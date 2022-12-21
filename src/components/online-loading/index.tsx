import "./loading.scss";
import * as React from "react";
import { Spin, Alert } from 'antd';
const Loading = () => {
  return (
    <div className=" df aic jcc pt50 components-loading">
      <Spin tip="Loading..." wrapperClassName=""></Spin>
    </div>
  );
};
export default Loading;
