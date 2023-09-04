// http://huangshuwei.gitee.io/vue-easytable/#/zh/doc/table/cell-edit

import Vue from 'vue';
// 引入样式
import 'vue-easytable/libs/theme-default/index.css';
// 引入组件库
import VueEasytable, { VeLocale } from 'vue-easytable';

// 引入中文语言包
import zhCN from 'vue-easytable/libs/locale/lang/zh-CN';

VeLocale.use(zhCN);

Vue.use(VueEasytable);
