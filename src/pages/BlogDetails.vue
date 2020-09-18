<template>
  <div class="container-fluid">
    <div class="row my-4">
      <div class="col-4 bg-dark">
        <div class="card bg-dark text-light">
          <img :src="blog.creator.picture" alt="">
          <p>{{blog.creator.name}}</p>
        </div>
      </div>
      <div class="col-8 bg-light">
        <div class="h1">{{blog.title}}</div>
        <div class="card">
          <p>{{blog.body}}</p>
        </div>
      </div>
    </div>
    <div class="row">
      <h1>commits here</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogDetails",
  mounted() {
    this.$store.dispatch("getBlogById", this.$route.params.id)
  },
  computed:{
    blog(){
      return this.$store.state.activeBlog
    }
  }

}
</script>

<style scoped>
img{
  border-radius: 50%;
  max-width: 100%;
}
</style>