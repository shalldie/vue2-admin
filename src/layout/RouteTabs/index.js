/**
 * 限制，以 path 作为key，每个页面保持 path 唯一
 *
 * 1. 在 router/index.js 中定义 meta: {title:string; name:string}
 * 2. 页面组件需要定义 name，跟上面 meta.name 保持一致
 */

export { default as RouteTabs } from './RouteTabs.vue';
export * from './rt.svc';
