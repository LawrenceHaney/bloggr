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
        <i v-if="profile.id == blog.creator.id" class="fa fa-trash" aria-hidden="true" @click="deletePost"></i>
        <div class="h1">{{blog.title}}</div>
        <div class="card">
          <p>{{blog.body}}</p>
        </div>
      </div>
    </div>
    <div class="row">
      <form @submit.prevent="createCom" class="form">
            <div class="form-group p-1">
              </div>
              <div class="form-group p-1">
              <label class="mr-1" for="body">Body</label>
              <input
              v-model="newCom.body"
              type="text"
              name="body"
              id="body"
              class="form-control"
              placeholder="Body..."
              />
          </div>
          <button type="submit" class="btn btn-outline-primary">New Post</button>
          </form>
    </div>
    <div v-if="coms.length > 0" class="row">
      <com v-for="com in coms" :key="com.id" :comData="com"/>
    </div>
  </div>
</template>

<script>
import Com from "../components/comment.vue"
export default {
  name: "BlogDetails",
  data(){
    return{
      newCom:{}
    }
  },
  computed:{
    blog(){
      return this.$store.state.activeBlog
    },
    coms(){
      return this.$store.state.activecontent
    },
    profile (){
      return this.$store.state.profile
    }
  },
    mounted() {
    this.$store.dispatch("getBlogById", this.$route.params.id)
    this.$store.dispatch("getActiveCom", this.$route.params.id)
  },
  methods:{
    createCom(){
      this.newCom.blog= this.$route.params.id
      this.$store.dispatch("createCom", this.newCom)
    },
    deletePost(){
      this.$store.dispatch("deletePost", this.$route.params.id)
    }
  },
  components:{
    Com
  }

}
</script>

<style scoped>
img{
  border-radius: 50%;
  max-width: 100%;
}
</style>