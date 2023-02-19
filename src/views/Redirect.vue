<template>
    <div>loading...</div>
</template>
<script>
// 跳转的中介页面
export default {
    mounted() {
        // const targetPath = this.$route.query.redirect;
        // console.log('targetPath', targetPath);
        // setTimeout(() => {
        //     console.log('ready to replace');
        //     this.$router.replace({ path: targetPath });
        //     console.log('mounted');
        // }, 0);
    },
    watch: {
        ['$route']: {
            immediate: true,
            handler() {
                const targetPath = this.$route.query.redirect;
                console.log('targetPath', targetPath);
                setTimeout(() => {
                    console.log('ready to replace');
                    this.$router.replace({ path: targetPath });
                    console.log('mounted');
                }, 0);
            }
        }
    }
};
</script>
