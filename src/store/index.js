import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "../services/AxiosService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    blogs: [],
    activeBlog:  {},
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    getBlogs(state, blog){
      state.blogs = blog.data
      console.log(state.blogs)
    },
    setActiveBlog(state, blog){
      state.activeBlog = blog
    }
  },
  actions: {
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getBlogs({commit}){
      try {
          let res = await api.get("/blogs")
          commit("getBlogs", res)
      } catch (error) {
        console.error(error)
      }
    },
    async getBlogById({commit}, id){
      try {
        let request = "/blogs/" + id
        let res = await api.get(request)
        commit("setActiveBlog", res.data)
      } catch (error) {
        
      }
    }
  },
});
