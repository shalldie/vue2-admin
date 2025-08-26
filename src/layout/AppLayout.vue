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
                <keep-alive :include="cachedRoutes">
                    <router-view :key="$route.path" />
                </keep-alive>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import NavbarVue from './Navbar.vue';
import SidebarVue from './Sidebar.vue';
import WaterMark from '@/components/WaterMark.vue';
import { rt } from './RouteTabs';

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
        cachedRoutes() {
            // return this.$store.state.tagsView.cachedViews;
            return rt.state.pages.map(n => n.name);
        }
    },
    mounted() {
        this.$store.dispatch('app/fetchUserInfo');
        // console.log(this.cachedViews);
        window.ele = this;
        // window.tag = tag;
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
