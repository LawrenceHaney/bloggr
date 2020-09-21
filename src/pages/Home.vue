<template>
  <div class="home container-fluid background">
    <div class="row justify-content-center">
      <blog v-for="blog in blogs" :key="blog.id" :blogData="blog" />
    </div>
  </div>
</template>

<script>
import Blog from "../components/post.vue"

export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getBlogs")
  },
  data(){
    return {
      newBlog: {}
    }
  },
  computed: {
    blogs(){
      return this.$store.state.blogs
    }
  },
  components:{
    Blog
  }
};
</script>

<style scoped>
</style>