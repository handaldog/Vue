import Vue from "vue";
import Vuex from "vuex";
import http from "@/util/http-common.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    shopList: [],
    newsList: [],
    blogList: [],
  },
  getters: {},
  mutations: {
    SEARCH_NAVER_SHOP(state, payload) {
      state.shopList = payload;
    },
  },
  actions: {
    searchNaverShop({ commit }, payload) {
      // (vuex통째로, 컴포넌트에서 보낸 데이터)
      // 첫번째 인자는 vuex가 통으로
      http.get("/naver/shop/" + payload).then(({ data }) => {
        console.log("백엔드에서 받은 데이터 : ", data);
        commit("SEARCH_NAVER_SHOP", data.items); // mutation님 (state 관리자). 이데이터 좀 저장해주세요.
      });
    },
  },
  modules: {},
});
