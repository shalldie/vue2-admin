import { reactive } from 'vue';

class PageItem {
    path = '';
    name = '';
    title = '';
}

class TagState {
    index = 0;
    /**
     *
     * @type {PageItem[]}
     * @memberof TagState
     */
    pages = [];
}

class TagService {
    state = reactive({
        ...new TagState()
    });

    /**
     * 添加记录
     *
     * @param {PageItem} page
     * @memberof TagService
     */
    addPage(page) {
        if (!page.name) {
            return;
        }
        if (this.state.pages.some(n => n.path === page.path)) {
            return;
        }
        this.state.pages.push(page);
        this.state.index = this.state.pages.length - 1;
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

    replacePage(page, index) {
        this.state.pages[index] = page;
    }

    clear() {
        this.state.pages = [];
        this.state.index = 0;
    }
}

export const tag = new TagService();
