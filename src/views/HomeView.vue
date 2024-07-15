<template>
    <div class="home">
        <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
        <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
        <el-button @click="openDialog">Open Dialog</el-button>
        <div>
            <IconUser style="width: 80px; height: 80px; color: #2ad" />
        </div>
        <br />
        <LikeButton :count="233" v-model="liked" />
        <br />
        <LikeHeart v-model="liked" />
        <br />
        <Markdown>
            <h4>工具使用说明</h4>
            <ul>
                <li>用途：配之后，所附近的考拉附近的萨房间都开了房间里盛开的积分多少</li>
                <li>
                    <div>配置说明：</div>
                    <ul>
                        <li>应用名称：疯狂的萨减肥撒加分</li>
                        <li>是否开启：附近的快速反击的萨</li>
                        <li>分支ID：附近考虑的萨减肥了肯定是减肥</li>
                    </ul>
                </li>
                <li>PS：附近看到啦附近的路上就发了多少减肥看了电视剧啊发；了萨过年了萨发</li>
            </ul>
        </Markdown>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import HelloDialog from '@/components/HelloDialog.vue';
import { dialogAPI } from '@/common/dialogAPI';
import IconUser from '@/components/icons/IconUser.vue';
import Markdown from '@/components/Markdown.vue';
import { LikeHeart } from '@/components/LikeHeart';

import { LikeButton } from '@/components/LikeButton';

export default {
    name: 'HomeView',
    data() {
        return {
            liked: false
        };
    },
    components: {
        IconUser,
        Markdown,
        LikeHeart,
        LikeButton
        // HelloWorld
    },
    async mounted() {
        // const result = await http.get('/lalalax');
        // console.log(result);
    },
    methods: {
        openDialog() {
            dialogAPI.open(
                HelloDialog,
                { content: '初始化的数据' },
                {
                    update: newContent => {
                        this.$message(newContent);
                    }
                }
            );
        }
    }
};
</script>
