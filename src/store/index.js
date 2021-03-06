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
    userblogs: [],
    activecontent: [],
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    getBlogs(state, blog){
      state.blogs = blog.data
    },
    setActiveBlog(state, blog){
      state.activeBlog = blog
    },
    addPost(state, post){
      state.blogs.push(post)
    },
    setUserBlogs(state, blogs){
      state.userblogs = blogs
    },
    setActiveContent(state, coms){
      state.activecontent = coms
    },
    removeBlog(state, id){
      state.blogs = state.blogs.filter(b => b.id != id)
    },
    deleteCom(state, id){
      state.activecontent = state.activecontent.filter(c => c.id != id)
    },
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
          let res = await api.get("blogs")
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
    },
    async createPost({commit}, post){
      try {
        let res = await api.post("blogs", post)
        commit("addPost", res.data)
        commit("setActiveBlog", res.data)
        router.push({name: "BlogDetails", params:{ id: res.data.id}})

      } catch (error) {
        console.error(error)
      }
    },
    async getUserBlogs({commit}){
      try {let res = await api.get("profile/blogs")
        commit("setUserBlogs", res.data)
        
      } catch (error) {
        console.error(error)
        
      }
    },
    async getActiveCom({commit}, id){
      try {
        let res = await api.get('blogs/'+id +'/comments')
        commit("setActiveContent", res.data);
      } catch (error) {
        
      }
    },
    async getUserCom({commit}){
      try {
        let res = await api.get('profile/comments/')
        commit("setActiveContent", res.data)
      } catch (error) {
        
      }
    },
    async createCom({commit}, com){
      try {
        let res = await api.post("comments", com)
        res.data.creator = this.state.profile
        commit("setActiveContent", [...this.state.activecontent, res.data])
        console.log(res)
      } catch (error) {
        console.error(error)
      }
    },
    async deletePost ({commit}, id) {
      try {
        await api.delete('blogs/' + id)
        commit("removeBlog", id)
        commit("setActiveBlog", {})
        router.push({ name: "Home" })
      } catch (error) {
        console.error(error)
      }
    },
    async deleteCom({commit}, id) {
      try {
        await api.delete('comments/' + id)
        commit('deleteCom', id)
      } catch (error) {
        console.error(error)
        
      }
    }, async editBlog({commit}, payload){
      try {
        let res = await api.put("blogs/"+payload.id, payload)
        commit("setActiveBlog", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async editCom({commit}, payload){
      try {
        let res = await api.put('comments/' + payload.id, payload)
        console.log("HI got:", res)
        commit("setActiveContent", this.state.activecontent)
      } catch (error) {
        
      }
    }
  },
});
