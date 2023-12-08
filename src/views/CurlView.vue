<template>
    <div class="curl-page">
        <el-row :gutter="20">
            <el-col :span="12">
                <el-input type="textarea" :rows="20" v-model="content"></el-input>
            </el-col>
            <el-col :span="12">
                <Editor language="json" :code="output" :key="output" style="height: 500px" />
            </el-col>
        </el-row>
    </div>
</template>

<script>
import curl2Json from '@bany/curl-to-json';
import { Editor } from '@/components/Editor';

export default {
    components: {
        Editor
    },
    data() {
        return {
            content: ''
        };
    },
    computed: {
        output() {
            try {
                const obj = curl2Json(this.content);
                return JSON.stringify(obj, null, '    ');
            } catch {
                return '{}';
            }
        }
    }
};
</script>

<style lang="less" scoped></style>
