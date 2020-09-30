import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        status: "",
        token: localStorage.getItem("token") || "",
        user: {},
    },
    mutations: {
        auth_request(state) {
            state.status = "loading";
        },
        auth_success(state, token) {
            state.status = "success";
            state.token = token;
            // state.user = user;
        },
        auth_error(state) {
            state.status = "error"
        },
    },
    actions: {
        signin({ commit }, user) {
            return new Promise((resolve, reject) => {
                commit("auth_request");
                axios({ url: "/api/auth/signin", data: user, method: "POST" })
                    .then((response) => {
                        const token = `${response.data.token_type} ${response.data.access_token}`;
                        // const user = response.data.user;
                        localStorage.setItem("token", token);
                        commit("auth_success");
                        resolve(response);
                    })
                    .catch((error) => {
                        commit("auth_error");
                        localStorage.removeItem("token");
                        reject(error);
                    });
            });
        }
    },
    getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
    },
});