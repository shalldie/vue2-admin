<template>
    <div class="home">
        <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
        <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
        <el-button @click="openDialog">Open Dialog</el-button>
        <div>
            <IconUser style="width: 80px; height: 80px; color: #2ad" />
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import HelloDialog from '@/components/HelloDialog.vue';
import { dialogAPI } from '@/common/dialogAPI';
import IconUser from '@/components/icons/IconUser.vue';

export default {
    name: 'HomeView',
    components: {
        IconUser
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
