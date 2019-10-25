/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 示例模块的路由
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-10-16 15:58:10
 */
import { Routes } from '@angular/router';
import { FcantdComponent } from './fcantd/fcantd.component';
import { Fcg2Component } from './fcchart/fcg2/fcg2.component';
import { FciconComponent } from './fcicon/fcicon.component';
import { FciframeComponent } from './fciframe/fciframe.component';
import { FcspreadComponent } from './fcspread/fcspread.component';
import { FctableComponent } from './fctable/fctable.component';


export const Routers: Routes = [
  {
    path: '',
    loadChildren: () => import('./fctemplate/fctemplate.module').then(res => res.FctemplateModule)
  },
  {
    path: '',
    loadChildren: () => import('./fcthreejs/fcthreejs.module').then(res => res.FcthreejsModule)
  },
  {
    path: 'fctable', // 表格
    component: FctableComponent
  },
  {
    path: 'fciframe', // iframe
    component: FciframeComponent
  },
  {
    path: 'fcg2', // 图表
    component: Fcg2Component
  },
  {
    path: 'fcantd', // AntDesign
    component: FcantdComponent
  },
  {
    path: 'fcicon', // 
    component: FciconComponent
  },
  {
    path: 'fcspread', // 
    component: FcspreadComponent
  },
];
