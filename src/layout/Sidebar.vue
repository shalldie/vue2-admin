<template>
    <el-menu
        class="sidebar"
        router
        :default-active="$route.path"
        background-color="#304156"
        text-color="#bfcbd9"
        active-text-color="#409EFF"
        :collapse="collapse"
        :collapse-transition="false"
    >
        <el-menu-item index="/">
            <i class="el-icon-monitor"></i>
            <span slot="title">Dashboard</span>
        </el-menu-item>
        <el-submenu index="2xxxx">
            <template slot="title">
                <i class="el-icon-menu"></i>
                <span>导航二</span>
            </template>
            <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="/about">about</el-menu-item>
                <el-menu-item index="/editor">editor</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-submenu index="3">
            <template slot="title">
                <i class="el-icon-setting"></i>
                <span>导航三</span>
            </template>
            <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="3-1">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
                <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
                <template slot="title">选项4</template>
                <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu>
        </el-submenu>
    </el-menu>
</template>

<script>
export default {
    computed: {
        collapse() {
            return !this.$store.state.app.sidebar.open;
        }
    }
};
</script>

<style lang="scss" scoped>
.sidebar {
    ::v-deep {
        /* 二级菜单 */
        .el-submenu {
            .el-menu-item-group__title {
                background-color: #1f2d3d !important;
            }

            .el-menu-item,
            .el-submenu .el-submenu__title {
                background-color: #1f2d3d !important;

                &:hover {
                    background-color: #001528 !important;
                }
            }
        }
    }
}
</style>
