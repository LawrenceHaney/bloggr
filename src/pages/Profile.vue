<template>
<div class="fluid-contaier">
  <div class="about text-center card">
    <h1>Welcome {{ profile.name }}</h1>
    <img class="rounded" :src="profile.picture" alt="" />
    <p>{{ profile.email }}</p>
  </div>
  <div class="row">
    <blog v-for="blog in userblogs" :key="blog.id" :blogData="blog" />
  </div>
</div>
</template>

<script>
import Blog from "../components/post.vue"
export default {
  name: "Profile",
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    userblogs(){
      return this.$store.state.userblogs
    }
  },
  data(){
    return{
      newBlog:{}
    }
  },
  mounted(){
      this.$store.dispatch("getUserBlogs")
  },
  components:{
    Blog
  }
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
