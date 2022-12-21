/*
 * @Author: your name
 * @Date: 2020-02-25 14:46:14
 * @LastEditTime: 2022-12-20 21:47:15
 * @LastEditors: GUI XUE TING
 * @Description: In User Settings Edit
 * @FilePath: /examination-database-management/src/utils/index.ts
 */
import * as React from 'react';
import { createHashHistory, createBrowserHistory } from 'history';
import { message, Modal } from 'antd';
const { useEffect, useState, useCallback } = React;
import { MenuBar } from '../utils/memu-bar';
import CryptoJS from 'crypto-js';

/** 侧边啦宽度 */
let MenuBarWidth = '200px';
/** 头部高度 */
let headerHeight = '80px';
// 获取列表的每页条数限制
let LIMIT = 20;

let History = createBrowserHistory({
  basename: '', // The base URL of the app (see below)
  // forceRefresh: false, // Set true to force full page refreshes
  // A function to use to confirm navigation with the user (see below)
  getUserConfirmation: (message, callback) => callback(window.confirm(message))
});

/** 实时获取浏览器尺寸 */

const GetWinSize = () => {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  });

  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    });
  }, []);

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return size;
};

/** 缓存当前MenuBar索引 */
const SaveActionIndex = (promise: any, defaultSelectedKeys?, defaultOpenKeys?): any => {
  /** 缓存当前defaultSelectedKeys索引 */
  if (defaultSelectedKeys) {
    sessionStorage.setItem('defaultSelectedKeys', JSON.stringify(defaultSelectedKeys));
  }
  /** 缓存当前defaultOpenKeys索引 */
  if (defaultOpenKeys) {
    sessionStorage.setItem('defaultOpenKeys', JSON.stringify(defaultOpenKeys));
  }
  /** 缓存当前页当前账号的权限 */
  sessionStorage.setItem('promise', JSON.stringify(promise || []));
};

/** 计算成本价 */
const CreateStandardPrice = (str1, str2?) => {
  let reg =
    /[\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]/;
  /** 如果是中文的逗号 */
  if (reg.test(str1) || reg.test(str2)) {
    console.log('是中文符号');
    message.error({
      content: '请使用英文字符下的逗号进行分割'
    });
    return str1;
  }

  // console.log('str2', str1, str2)
  let arr1 = str1 ? str1.split(',') : ['0', '0', '0', '0', '0', '0'];
  let arr2 = str2 ? str2.split(',') : ['0', '0', '0', '0', '0', '0'];
  let all = [];
  if (arr1.length < 6) {
    for (let i = 0; i < 6; i++) {
      if (!arr1[i]) {
        arr1.push(arr1[i - 1]);
      }
    }
  }

  if (arr2.length && arr2.length < 6) {
    for (let i = 0; i < 6; i++) {
      if (!arr2[i]) {
        arr2.push(arr2[i - 1]);
      }
    }
  }

  for (let i = 0; i < 6; i++) {
    all[i] = `${Math.floor((parseFloat(arr1[i]) + parseFloat(arr2[i])) * 100) / 100}`;
  }
  // console.log('计算成本价------------', arr1, arr2, all.join(','))
  return all.join(',');
};

type confrim = {
  api: string; //接口名
  params: any; // 接口所需参数
  successAciton: any; //操作成功后的回调函数,
  title: string;
  content: string;
  cancelText?: string; //取消按钮文字
  okText?: string; //确认按钮文字
};


//值复制
function clone(obj) {
  //判断是对象，就进行循环复制
  if (typeof obj === 'object' && obj != null) {
    // 区分是数组还是对象，创建空的数组或对象
    var o = Object.prototype.toString.call(obj).slice(8, -1) === 'Array' ? [] : {};
    for (var k in obj) {
      // 如果属性对应的值为对象，则递归复制
      if (typeof obj[k] === 'object' && obj[k] != null) {
        o[k] = clone(obj[k]);
      } else {
        o[k] = obj[k];
      }
    }
  } else {
    //不为对象，直接把值返回
    return obj;
  }
  return o;
}

/**
 * @description 加密和解密
 * @Fnction enc(values,key?) //加密
 * @Fnction dec(values,key?) //解密
 */
const EncryptAndDec = {
  //加密
  enc: (values: any, key?) => {
    let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(values), key || 'Roy').toString();
    return ciphertext;
  },

  //解密
  dec: (values: any, key?) => {
    /** 如果是对象 */
    if (!values.includes('password')) {
      //如果是加密过的
      let bytes = CryptoJS.AES.decrypt(values, key || 'Roy');
      let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      return decryptedData;
    } else {
      return JSON.parse(values);
    }
  }
};

export {
  History,
  LIMIT,
  GetWinSize,
  MenuBarWidth,
  headerHeight,
  SaveActionIndex,
  CreateStandardPrice,
  clone,
  EncryptAndDec
};
