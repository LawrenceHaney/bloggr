<template>
  <div class="home container-fluid">
    <div class="row bg-dark">
      <blog v-for="blog in blogs" :key="blog.id" :blogData="blog" />
    </div>
  </div>
</template>

<script>
import Blog from "../components/post"

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
