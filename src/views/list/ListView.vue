<template>
    <div class="page-list">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="id" label="详情" width="180">
                <template slot-scope="scope">
                    <router-link :to="`/list/detail/${scope.$index}`">详情</router-link>
                </template>
            </el-table-column>
            <el-table-column prop="date" label="日期" width="180"> </el-table-column>
            <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    title: '列表页',
    name: 'list-view',
    data() {
        return {
            tableData: [
                {
                    id: Math.random(),
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    id: Math.random(),
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                },
                {
                    id: Math.random(),
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                },
                {
                    id: Math.random(),
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped></style>
