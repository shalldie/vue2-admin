import { defineConfig } from 'vite';
import vue2 from '@vitejs/plugin-vue2';
import { fileURLToPath } from 'url';
import { vitePluginMock } from './mock/plugin';
import monacoEditorPlugin from 'vite-plugin-monaco-editor';

// https://vite.dev/config/
export default defineConfig({
    base: '/',

    plugins: [
        //
        vue2(),
        vitePluginMock(),
        monacoEditorPlugin['default']({
            // languageWorkers: ['json']
            languageWorkers: ['editorWorkerService', 'typescript', 'json', 'css', 'html']
        })
    ],

    resolve: {
        alias: [{ find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) }]
    },

    css: {
        preprocessorOptions: {
            scss: {
                additionalData: [
                    //

                    `@import "./src/styles/variables.scss";`,
                    `@import "./src/styles/mixin.scss";`
                ].join('\n')
            }
        }
    }
});
