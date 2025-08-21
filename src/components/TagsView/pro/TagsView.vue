<template>
    <div class="tags-view">
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
import { tag } from './tags.svc';

export default {
    computed: {
        tag() {
            return tag;
        }
    },
    watch: {
        $route: {
            async handler() {
                await sleep(0);
                const isReplace = this.$router.getNavigationType?.() === 'replace';

                const { name, title } = this.$route.meta || {};

                if (isReplace) {
                    tag.replacePage(
                        {
                            name,
                            title,
                            path: this.$route.path
                        },
                        tag.state.index
                    );
                } else {
                    tag.addPage({
                        name,
                        title,
                        path: this.$route.path
                    });
                }
            },
            immediate: true
        }
    },
    methods: {
        closePage(index) {
            tag.removePage(index);
            this.onNavigate(tag.state.index);
        },
        onNavigate(index) {
            // if (tag.state.index === index) {
            //     return;
            // }
            const target = tag.state.pages[index];
            if (target.path === this.$route.path) {
                return;
            }
            tag.state.index = index;
            this.$router.push(tag.state.pages[index].path);
        }
    }
};
</script>

<style lang="less">
.tags-view {
    display: flex;
    gap: 10px;

    .el-tag {
        cursor: pointer;
    }
}
</style>
