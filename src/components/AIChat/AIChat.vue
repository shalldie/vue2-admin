<template>
    <div class="ai-chat">
        <div
            v-show="!visible"
            class="float-bar"
            @mousedown="onFloatbarDrag"
            @mouseup="onFloatbarMouseUp"
            :style="{ transform: `translate(${offset.x}px,${offset.y}px)` }"
        ></div>
        <ChatBox v-show="visible" @close="visible = false" />
    </div>
</template>

<script>
import ChatBox from './ChatBox.vue';
import { DragMove } from './drag';

export default {
    components: {
        ChatBox
    },
    data() {
        return {
            visible: true,
            // floatbar 偏移量
            offset: {
                x: 0,
                y: 0
            }
        };
    },
    created() {
        this.dm = new DragMove(offset => {
            // this.offset = offset;
            this.offset = {
                x: 0,
                y: offset.y
            };
        });
    },
    beforeDestroy() {
        /** @type {DragMove} */
        const dm = this.dm;
        dm.dispose();
    },
    methods: {
        onFloatbarDrag(ex) {
            // 拖动
            /** @type {DragMove} */
            const dm = this.dm;
            dm.start(ex, this.offset);

            // 计时
            this._downTime = Date.now();
        },
        onFloatbarMouseUp() {
            // 鼠标按下、抬起时间 > 0.2s，视为拖动
            const diff = Date.now() - (this._downTime || 0);
            if (diff > 0.2 * 1000) {
                return;
            }
            // 否则是点击
            this.visible = true;
        }
    }
};
</script>

<style lang="less" scoped>
.ai-chat {
    position: relative;

    .float-bar {
        position: fixed;
        right: 20px;
        top: 80%;
        background: url(./assets/robot.png) no-repeat;
        background-size: contain;
        width: 40px;
        height: 40px;
        cursor: move;
    }
}
</style>
