<template>
<div class="container-fluid background">
  <div class="row justify-content-center">
    <div class="bg-warning content-shadow col-2 text-center ">

    <h1>Welcome {{ profile.name }}</h1>
    <img class="profile" :src="profile.picture" alt="" />
    <p>{{ profile.email }}</p>
    </div>
  <div class="col-10">
  <div class="row justify-content-around">
    <blog v-for="blog in userblogs" :key="blog.id" :blogData="blog" />
    <com v-for="com in coms" :key="com.id" :comData="com"/>
  </div>
  </div>
  </div>
</div>
</template>

<script>
import Blog from "../components/post.vue"
import Com from "../components/comment.vue"
export default {
  name: "Profile",
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    userblogs(){
      return this.$store.state.userblogs
    },
    coms(){
      return this.$store.state.activecontent
    }
  },
  data(){
    return{
      newBlog:{}
    }
  },
  mounted(){
      this.$store.dispatch("getUserBlogs")
      this.$store.dispatch("getProfile")
      this.$store.dispatch("getUserCom", this.$auth.userInfo.id)
  },
  components:{
    Blog,
    Com
  }
};
</script>

<style scoped>
</style>
