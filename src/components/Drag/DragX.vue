<template>
    <div class="drag-x" :style="{ width: width + 'px' }">
        <slot />
        <div class="ctl-bar" @mousedown="drag"></div>
    </div>
</template>

<script>
import { DragResize } from './DragResize';

export default {
    props: {
        defaultWidth: {
            type: Number,
            default: 100
        },
        minWidth: {
            type: Number,
            default: 100
        },
        maxWidth: {
            type: Number,
            default: 1000
        }
    },
    data() {
        return {
            width: 100
        };
    },
    created() {
        this.width = this.defaultWidth;
        this.dragResize = new DragResize(resize => {
            let targetWidth = resize.width;
            targetWidth = Math.max(targetWidth, this.minWidth);
            targetWidth = Math.min(targetWidth, this.maxWidth);
            this.width = targetWidth;
        });
    },
    beforeDestroy() {
        this.dragResize.dispose();
    },
    methods: {
        drag(ev) {
            this.dragResize.start({ width: this.width, height: 0 }, ev);
        }
    }
};
</script>

<style lang="less" scoped>
.drag-x {
    position: relative;

    .ctl-bar {
        cursor: col-resize;
        position: absolute;
        top: 0;
        right: -1px;
        width: 3px;
        height: 100%;
    }
}
</style>
