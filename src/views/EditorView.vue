<template>
    <div class="editor-view">
        <Editor language="json" v-model="code" />
        <br />
        <button @click="showCode">show code</button>
    </div>
</template>

<script>
import { Editor } from '@/components/Editor';

export default {
    components: {
        Editor
    },
    data() {
        return {
            code: `{
    "name": "tom",
    "age": 12
}`
        };
    },
    methods: {
        showCode() {
            console.log(this.code);
        }
    }
};
</script>

<style></style>
