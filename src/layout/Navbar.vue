<template>
    <nav class="navbar">
        <el-tooltip effect="dark" :content="sidebar.open ? '收起菜单' : '展开菜单'">
            <i
                @click="toggleSidebar"
                class="hover-item"
                :class="sidebar.open ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
            ></i>
        </el-tooltip>
        <TagsView />

        <div class="right-bar">
            <!-- 全屏 -->
            <el-tooltip effect="dark" content="展开/收起 全屏">
                <Screenfull class="hover-item" />
            </el-tooltip>
            <!-- 用户 -->
            <el-dropdown class="hover-item user-dropdown">
                <span class="hover-item" style="padding: 0">
                    <span>{{ user.name || 'loading...' }}</span>
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown" class="user-dropdown-menu">
                    <el-dropdown-item>
                        <router-link to="/user-center">个人中心</router-link>
                    </el-dropdown-item>
                    <el-dropdown-item disabled>开发中</el-dropdown-item>
                    <el-dropdown-item divided>
                        <a href="/logout">退出登录</a>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </nav>
</template>

<script>
import Screenfull from '@/components/Screenfull/index.vue';
import TagsView from '@/components/TagsView/index.vue';

export default {
    components: {
        Screenfull,
        TagsView
    },
    computed: {
        sidebar() {
            return this.$store.state.app.sidebar;
        },
        user() {
            return this.$store.state.app.user;
        }
    },
    methods: {
        toggleSidebar() {
            this.$store.commit('app/TOGGLE_SIDEBAR');
        }
    }
};
</script>

<style lang="scss" scoped>
.navbar {
    height: 50px;
    padding-right: 16px;
    @include flex;

    .tags-view {
        align-self: flex-end;
    }

    .hover-item {
        padding: 0 15px;
        height: 100%;
        cursor: pointer;
        transition: $TRANSITION;
        @include flex;

        &:hover {
            background: #ddd;
        }
    }

    .right-bar {
        margin-left: auto;
        height: 100%;
        @include flex;
    }
}

.user-dropdown-menu {
    ::v-deep {
        a {
            text-decoration: none;
        }

        .el-dropdown-menu__item {
            transition: $TRANSITION;

            a {
                color: $COLOR;
            }
            &:hover a {
                color: $HOVER_BLUE;
            }
        }
    }
}
</style>
