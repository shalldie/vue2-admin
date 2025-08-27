<template>
    <div class="route-tabs">
        <el-tabs
            :value="curPage?.path"
            :closable="rt.state.pages.length > 1"
            @tab-remove="onTabRemove"
            @tab-click="onTabClick"
        >
            <el-tab-pane
                v-for="page in rt.state.pages"
                :key="page.path"
                :label="page.title"
                :name="page.path"
            ></el-tab-pane>

            <!-- <el-tab-pane label="配置管理" name="second"></el-tab-pane>
            <el-tab-pane label="角色管理" name="third"></el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane> -->
        </el-tabs>
        <!-- <el-tag
            v-for="(page, index) in rt.state.pages"
            :key="index"
            :effect="rt.state.index === index ? 'dark' : 'plain'"
            disable-transitions
            :closable="rt.state.pages.length > 1"
            @close="closePage(index)"
            @click.prevent="onNavigate(index)"
        >
            {{ page.title }}
        </el-tag> -->
    </div>
</template>

<script>
import { sleep } from '@/common/utils';
import { RouteItem, rt } from './rt.svc';

export default {
    data() {
        return {};
    },
    computed: {
        curPage() {
            return rt.state.pages[rt.state.index];
        },
        rt() {
            return rt;
        }
    },
    watch: {
        $route: {
            async handler() {
                await sleep(0);

                const isReplace = this.$router.isReplace?.();

                const { name, title } = this.$route.meta || {};
                const routeItem = new RouteItem({
                    name,
                    title,
                    path: this.$route.path,
                    fullPath: this.$route.fullPath
                });

                if (isReplace) {
                    rt.replacePage(routeItem, rt.state.index);
                } else {
                    rt.addPage(routeItem);
                }
            },
            immediate: true
        }
    },
    methods: {
        onTabRemove(path) {
            const index = rt.state.pages.findIndex(n => n.path === path);
            rt.removePage(index);
            this.onNavigate(rt.state.index);
        },
        onTabClick(tab) {
            this.onNavigate(tab.index);
        },
        onNavigate(index) {
            const target = rt.state.pages[index];
            if (target.path === this.$route.path) {
                return;
            }
            rt.state.index = index;
            this.$router.push(rt.state.pages[index].fullPath);
        }
    }
};
</script>

<style lang="less" scoped>
.route-tabs {
    display: flex;
    gap: 10px;

    .el-tabs {
        margin-left: 20px;
        ::v-deep {
            .el-tabs__header {
                margin: 0;
            }
        }
    }

    .el-tag {
        cursor: pointer;
    }
}
</style>
