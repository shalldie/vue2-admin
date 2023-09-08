<template>
    <div class="drag-view">
        <h2>this is drag view</h2>
        <div class="container">
            <DragX class="left-panel" :defaultWidth="200">
                <el-tree class="filter-tree" :data="treeData" default-expand-all ref="tree"> </el-tree>
            </DragX>
            <div class="right-panel">
                <el-tabs type="card">
                    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
                    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
                    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
                    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
</template>

<script>
import { DragX } from '@/components/Drag';

export default {
    components: {
        DragX
    },
    data() {
        return {
            treeData: [
                {
                    id: 1,
                    label: '一级 1',
                    children: [
                        {
                            id: 4,
                            label: '二级 1-1',
                            children: [
                                {
                                    id: 9,
                                    label: '三级 1-1-1'
                                },
                                {
                                    id: 10,
                                    label: '三级 1-1-2'
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 2,
                    label: '一级 2',
                    children: [
                        {
                            id: 5,
                            label: '二级 2-1'
                        },
                        {
                            id: 6,
                            label: '二级 2-2'
                        }
                    ]
                },
                {
                    id: 3,
                    label: '一级 3',
                    children: [
                        {
                            id: 7,
                            label: '二级 3-1'
                        },
                        {
                            id: 8,
                            label: '二级 3-2'
                        }
                    ]
                }
            ]
        };
    }
};
</script>

<style lang="less" scoped>
.drag-view {
    .container {
        display: flex;
        border: 1px solid #ddd;
        .left-panel {
            border-right: 1px dashed #ddd;
        }

        .right-panel {
            flex: 1;
            min-height: 300px;
            padding-left: 10px;
        }
    }
}
</style>
