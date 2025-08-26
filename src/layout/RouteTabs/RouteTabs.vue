<template>
    <div class="route-tabs">
        <el-tag
            v-for="(page, index) in tag.state.pages"
            :key="index"
            :effect="tag.state.index === index ? 'dark' : 'plain'"
            disable-transitions
            :closable="tag.state.pages.length > 1"
            @close="closePage(index)"
            @click.prevent="onNavigate(index)"
        >
            {{ page.title }}
        </el-tag>
    </div>
</template>

<script>
import { sleep } from '@/common/utils';
import { RouteItem, rt } from './rt.svc';

export default {
    computed: {
        tag() {
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
        closePage(index) {
            rt.removePage(index);
            this.onNavigate(rt.state.index);
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

<style lang="less">
.route-tabs {
    display: flex;
    gap: 10px;

    .el-tag {
        cursor: pointer;
    }
}
</style>
