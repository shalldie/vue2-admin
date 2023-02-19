import { http } from '@/common/http';
import Cookies from 'js-cookie';

const SIDEBAR_OPEN = 'sidebar_open';
const state = {
    // 侧边栏
    sidebar: {
        open: Cookies.get(SIDEBAR_OPEN) ? !!+Cookies.get(SIDEBAR_OPEN) : true
    },
    // 用户信息
    user: {
        name: ''
    }
};

const mutations = {
    SET_USERIFNO: (state, userInfo) => {
        state.user = userInfo;
    },
    TOGGLE_SIDEBAR: state => {
        state.sidebar.open = !state.sidebar.open;

        Cookies.set(SIDEBAR_OPEN, state.sidebar.open ? 1 : 0);
    }
};

const actions = {
    async fetchUserInfo({ commit }) {
        const userInfo = await http.post('user/info');
        commit('SET_USERIFNO', userInfo);
    },
    toggleSideBar({ commit }) {
        commit('TOGGLE_SIDEBAR');
    },
    closeSideBar({ commit }, { withoutAnimation }) {
        commit('CLOSE_SIDEBAR', withoutAnimation);
    },
    toggleDevice({ commit }, device) {
        commit('TOGGLE_DEVICE', device);
    },
    setSize({ commit }, size) {
        commit('SET_SIZE', size);
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};
