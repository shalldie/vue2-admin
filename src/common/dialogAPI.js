import Vue from 'vue';

export const dialogAPI = {
    /**
     * 打开一个对话框
     *
     * @param {*} VueComponent vue对话框组件，需要用 data:visible 控制显示与否
     * @param {*} [data={}] 传递给组件的 data
     * @param {*} [events={}] 要监听的事件
     * @return {*}
     */
    open(VueComponent, data = {}, events = {}) {
        const VueComponentConstructor = Vue.extend(VueComponent);

        const vm = new VueComponentConstructor({
            data: {
                ...data
            },
            propsData: {}
        });

        vm.$mount(); // 触发生成
        document.body.appendChild(vm.$el); // 将 vue 对象中存在于内存的dom，挂载到页面
        vm.visible = true; // 初始化之后就默认显示

        Object.keys(events).forEach(eventKey => {
            vm.$on(eventKey, events[eventKey]);
        });

        vm.$watch('visible', newVisible => {
            if (newVisible) {
                return;
            }
            setTimeout(() => {
                vm.$destroy();
                document.body.removeChild(vm.$el);
            }, 500);
        });

        return vm;
    }
};
