<template>
    <el-dialog :visible.sync="visible">
        <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4 }"
            placeholder="请输入内容"
            v-model="content"
        ></el-input>

        <span slot="footer">
            <el-button type="primary" @click="submit">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
export default {
    data() {
        return {
            visible: false,
            content: ''
        };
    },
    methods: {
        submit() {
            this.$emit('update', this.content);
            this.visible = false;
        }
    }
};
</script>

<style></style>
