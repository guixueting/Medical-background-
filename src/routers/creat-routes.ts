/*
 * @Author: GUI XUE TING
 * @LastEditors: GUI XUE TING
 */

import { LazyExoticComponent } from 'react';

import { Test } from './models'

const CreateRoutes: (
  | {
    path: string;
    exact: boolean;
    component: LazyExoticComponent<(props: any) => JSX.Element>;
    auth: boolean;
    breadcrumb?: string;
  }
  | {
    path: string;
    exact: boolean;
    component: any;
    auth: boolean;
    breadcrumb?: string;
  }
)[] = [
    ...Test
  ];

export { CreateRoutes };
