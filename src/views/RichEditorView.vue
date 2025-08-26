<template>
    <div class="page-rich-editor">
        <TinyEditor v-model="html" />
    </div>
</template>

<script>
import { TinyEditor } from '@/components/TinyEditor';

export default {
    name: 'rich-editor',
    components: {
        // RichEditor,
        // TinymceEditor,
        TinyEditor
    },
    data() {
        return {
            html: ''
        };
    },
    mounted() {
        // 模拟 ajax 请求，异步渲染编辑器
        setTimeout(() => {
            // this.html = '<p>模拟 Ajax 异步设置内容 HTML</p>';
            this.html = `
<p>
    <img src="https://raw.githubusercontent.com/shalldie/chuncai/master/GIF.gif">
</p>
`.trim();
        }, 1500);
    }
};
</script>

<style lang="less" scoped></style>
