<template>
    <el-container class="app-layout">
        <WaterMark />
        <el-aside :class="{ open: sidebaropen }">
            <SidebarVue />
        </el-aside>
        <el-container>
            <el-header>
                <NavbarVue />
            </el-header>
            <el-main>
                <!-- https://panjiachen.github.io/vue-element-admin-site/guide/essentials/tags-view.html -->
                <keep-alive :include="cachedViews">
                    <router-view :key="key" />
                </keep-alive>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import NavbarVue from './Navbar.vue';
import SidebarVue from './Sidebar.vue';
import WaterMark from '@/components/WaterMark.vue';

export default {
    components: {
        SidebarVue,
        NavbarVue,
        WaterMark
    },
    computed: {
        sidebaropen() {
            return this.$store.state.app.sidebar.open;
        },
        cachedViews() {
            return this.$store.state.tagsView.cachedViews;
        },
        key() {
            return this.$route.path;
        }
    },
    mounted() {
        this.$store.dispatch('app/fetchUserInfo');
    }
};
</script>

<style lang="scss" scoped>
.app-layout {
    min-height: 100vh;

    .el-aside {
        background-color: #304156;
        width: 63px !important;
        transition: $TRANSITION;
        overflow: hidden;

        &.open {
            width: 180px !important;
        }
    }

    .el-header {
        padding: 0;
        height: 50px !important;
        @include shadow;
    }
}
</style>
