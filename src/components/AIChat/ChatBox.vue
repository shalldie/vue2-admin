<template>
    <div class="chat-box" :class="{ empty: !dialogs.length }">
        <!-- 左侧菜单 -->
        <div class="chat-menu">
            <i @click="$emit('close')" class="el-icon-close close-btn"></i>
            <div class="bottom">
                <img class="logo" src="./assets/robot.png" width="40px" height="40px" />
            </div>
        </div>
        <!-- 主体 -->
        <div class="chat-body">
            <div class="chat-list">
                <div v-for="(line, index) in dialogs" :key="index" class="chat-item">{{ line }}</div>
                <!-- <div class="chat-item">睡了吗？</div>
                <div class="chat-item">吃饭了吗？</div>
                <div class="chat-item">睡了吗？</div>
                <div class="chat-item">吃饭了吗？</div>
                <div class="chat-item">睡了吗？</div>
                <div class="chat-item">吃饭了吗？</div>
                <div class="chat-item">睡了吗？</div>
                <div class="chat-item">吃饭了吗？</div>
                <div class="chat-item">睡了吗？</div>
                <div class="chat-item">吃饭了吗？</div>
                <div class="chat-item">睡了吗？</div>
                <div class="chat-item">吃饭了吗？</div> -->
            </div>
            <!-- 输入区域 -->
            <div class="chat-input-container">
                <textarea
                    v-model.trim="input"
                    @keypress.enter.prevent="search"
                    placeholder="请输入你的问题......"
                    class="chat-input"
                ></textarea>
                <div @click="search" class="btn-send">-></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            input: '',
            dialogs: []
        };
    },
    methods: {
        search() {
            if (!this.input) {
                return;
            }
            this.dialogs.push(this.input);
            this.input = '';
        }
    }
};
</script>

<style lang="less" scoped>
.chat-box {
    --color-primary: #6324e0;
    --transition-primary: 0.3s;
    position: fixed;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    // min-width: 368px;
    max-width: 420px;
    width: 320px;
    min-height: 160px;
    width: 28vw;
    height: 75vh;
    display: flex;
    background-color: rgb(255, 255, 255);
    border-radius: 12px;
    // transition:
    //     right 0.6s,
    //     top 0.6s,
    //     width 0.6s,
    //     height 0.6s;
    transition: 0.6s;
    box-shadow:
        rgba(0, 0, 0, 0.08) 0px 6px 16px 0px,
        rgba(0, 0, 0, 0.12) 0px 3px 6px -4px,
        rgba(0, 0, 0, 0.05) 0px 9px 28px 8px;

    &.empty {
        width: 50vw;
        max-width: none;
        height: 160px;
        top: 50%;
        right: 50%;
        transform: translate3d(50%, -50%, 0);
    }

    // box-shadow:
    //     #ddd 0px 6px 16px 0px,
    //     #ddd 0px 3px 6px -4px,
    //     #ddd 0px 9px 28px 8px;

    // 菜单
    .chat-menu {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 46px;
        // padding-top: 20px;
        background-color: rgb(242, 242, 242);
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
        gap: 16px;
        overflow-y: auto;

        // 关闭
        .close-btn {
            color: #000;
            width: 100%;
            height: 46px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 22px;
            // background: #f00;
            cursor: pointer;
            transition: var(--transition-primary);

            // &::before {
            //     transition: var(--transition-primary);
            // }

            // &:hover::before {
            //     transform: rotate(180deg) scale(1.2);
            // }

            &:hover {
                font-weight: 700;
                transform: rotate(180deg) scale(1.2);
            }
        }

        .bottom {
            margin-top: auto;

            .logo {
                transition: var(--transition-primary);

                &:hover {
                    transform: scale(1.2);
                }
            }
        }
    }

    // 主体
    .chat-body {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        padding: 20px;
        gap: 12px;

        .chat-list {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 16px;
            overflow-y: auto;

            .chat-item {
                background: linear-gradient(90deg, rgba(144, 166, 255, 0.3) 0%, rgba(199, 175, 255, 0.3) 100%);
                border-top-left-radius: 20px;
                border-bottom-right-radius: 12px;
                border-bottom-left-radius: 20px;
                font-size: 14px;
                line-height: 22px;
                padding: 5px 16px;
                color: #000;
                word-break: break-all; /* 强制所有字符（包括英文）断行 */
            }
        }

        // 输入区域
        .chat-input-container {
            display: flex;
            align-items: flex-end;
            width: 100%;
            // margin: 0 auto;
            align-self: center;
            margin-top: auto;
            border: 2px solid rgb(217, 217, 217);
            border-radius: 30px;
            transition: var(--transition-primary);

            &:hover,
            &:focus-within {
                border-color: var(--color-primary);
            }

            .chat-input {
                // display: block;
                box-sizing: border-box;
                flex: 1;
                // width: 90%;
                outline: none;
                border: none;
                resize: none;
                background: none;
                // max-height: 150px;
                // padding: 8px 48px 12px 16px;
                font-size: 14px;
                // min-height: 32px;
                // line-height: 32px;
                height: 80px;
                padding: 10px 16px;
            }

            .btn-send {
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                width: 32px;
                height: 32px;
                background: var(--color-primary);
                border-radius: 100%;
                margin: 0 10px 8px;
                color: #fff;
                transition: var(--transition-primary);

                &:hover {
                    transform: scale(1.2);
                }
            }
        }
    }
}
</style>
