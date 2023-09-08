<template>
    <div class="drag-view">
        <h2>this is drag view</h2>
        <div class="container">
            <DragX class="left-panel">
                <div>this is left-panel</div>
            </DragX>
            <div class="right-panel"></div>
        </div>
    </div>
</template>

<script>
import { DragX } from '@/components/Drag';

export default {
    components: {
        DragX
    }
};
</script>

<style lang="less" scoped>
.drag-view {
    .container {
        display: flex;
        .left-panel {
            background: #2ad;
            border-right: 1px solid #ddd;
        }

        .right-panel {
            flex: 1;
            background: #f00;
            min-height: 300px;
        }
    }
}
</style>
