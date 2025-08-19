<template>
    <div class="rich-editor" style="border: 1px solid #ccc">
        <Toolbar style="border-bottom: 1px solid #ccc" :editor="editor" :defaultConfig="toolbarConfig" :mode="mode" />
        <Editor
            style="height: 500px; overflow-y: hidden"
            v-model="html"
            :defaultConfig="editorConfig"
            :mode="mode"
            @onCreated="onCreated"
        />
    </div>
</template>

<script>
import '@wangeditor/editor/dist/css/style.css';
import { Editor, Toolbar } from '@wangeditor/editor-for-vue';

export default {
    components: { Editor, Toolbar },
    model: {
        prop: 'value',
        event: 'change'
    },
    props: {
        value: {
            type: String,
            defualt: ''
        }
    },
    data() {
        return {
            editor: null,
            // html: '<p>hello</p>',
            toolbarConfig: {},
            editorConfig: { placeholder: '请输入内容...' },
            mode: 'default' // or 'simple'
        };
    },
    computed: {
        html: {
            get() {
                return this.value;
            },
            set(val) {
                this.$emit('change', val);
            }
        }
    },
    methods: {
        onCreated(editor) {
            this.editor = Object.seal(editor); // 一定要用 Object.seal() ，否则会报错
        }
    },
    mounted() {},
    beforeDestroy() {
        this.editor?.destroy();
    }
};
</script>

<style></style>
