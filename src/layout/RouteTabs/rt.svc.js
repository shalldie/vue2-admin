import { reactive } from 'vue';

export class RouteItem {
    /**
     * Creates an instance of RouteItem.
     * @param {Partial<RouteItem>} [options={}]
     * @memberof RouteItem
     */
    constructor(options = {}) {
        Object.assign(this, options);
    }
    /** url - path */
    path = '';
    /** url - 完整的url */
    fullPath = '';
    /** 唯一标识 */
    name = '';
    /** 标题 */
    title = '';
}

class RTState {
    index = 0;
    /**
     *
     * @type {RouteItem[]}
     * @memberof TagState
     */
    pages = [];
}

class RTService {
    state = reactive({
        ...new RTState()
    });

    /**
     * 添加记录
     *
     * @param {RouteItem} page
     * @memberof TagService
     */
    addPage(page) {
        if (!page.name) {
            return;
        }

        const targetRoute = this.state.pages.find(n => n.path === page.path);

        // 不存在就新加
        if (!targetRoute) {
            this.state.pages.push(page);
            this.state.index = this.state.pages.length - 1;
            return;
        }

        // 存在就更新
        Object.assign(targetRoute, page);
    }

    /**
     * 删除记录
     *
     * @param {*} index
     * @memberof TagService
     */
    removePage(index) {
        this.state.pages.splice(index, 1);
        if (this.state.index >= index) {
            this.state.index = this.state.pages.length - 1;
        }
    }

    /**
     * 替换 page
     *
     * @param {RouteItem} page
     * @param {number} index
     * @memberof RTService
     */
    replacePage(page, index) {
        this.state.pages[index] = page;
    }

    clear() {
        this.state.pages = [];
        this.state.index = 0;
    }
}

/**
 * Route Tabs
 */
export const rt = new RTService();
