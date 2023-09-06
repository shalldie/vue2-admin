<template>
    <div class="monaco-editor" ref="main" style="width: 100%; height: 300px"></div>
</template>

<script>
import * as monaco from 'monaco-editor';

export default {
    model: {
        prop: 'code',
        event: 'change'
    },
    props: {
        code: {
            type: String,
            default: ''
        },
        language: {
            type: String,
            default: 'json'
        }
    },
    mounted() {
        this.init();
    },
    beforeDestroy() {
        this.editor && this.editor.dispose();
    },
    methods: {
        init() {
            // 参考：https://github.com/FE-Mars/monaco-editor-vue/blob/master/src/index.js
            // 使用 - 创建 monacoEditor 对象

            const editor = monaco.editor.create(this.$refs.main, {
                // 'vs' (default), 'vs-dark', 'hc-black', 'hc-light'
                theme: 'vs', // 主题
                value: this.code, // 默认显示的值
                language: this.language,
                folding: true, // 是否折叠
                foldingHighlight: true, // 折叠等高线
                foldingStrategy: 'indentation', // 折叠方式  auto | indentation
                showFoldingControls: 'always', // 是否一直显示折叠 always | mouseover
                disableLayerHinting: true, // 等宽优化
                emptySelectionClipboard: false, // 空选择剪切板
                selectionClipboard: false, // 选择剪切板
                automaticLayout: true, // 自动布局
                codeLens: false, // 代码镜头
                scrollBeyondLastLine: false, // 滚动完最后一行后再滚动一屏幕
                colorDecorators: true, // 颜色装饰器
                accessibilitySupport: 'off', // 辅助功能支持  "auto" | "off" | "on"
                lineNumbers: 'on', // 行号 取值： "on" | "off" | "relative" | "interval" | function
                lineNumbersMinChars: 5, // 行号最小字符   number
                enableSplitViewResizing: false,
                readOnly: false //是否只读  取值 true | false
            });
            editor.onDidChangeModelContent(() => {
                this.$emit('change', editor.getValue());
            });
            this.editor = editor;
        }
    }
};
</script>

<style lang="scss" scoped>
.monaco-editor {
    border: 1px solid #ddd;
    padding: 10px 0;
}
</style>
