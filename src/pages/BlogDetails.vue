<template>
  <div class="container-fluid background">
    <div class="row justify-content-center">
      <div class="col-11 bg-primary content-shadow my-3">
      <div class="row">

      <div class="col-4 bg-warning">
        <div class="text-center p-2">
          <h6>{{blog.creator.name}}</h6>
          <img :src="blog.creator.picture" alt="" class="profile m-1">
        </div>
      </div>
      <div v-if="isedit == false" class="col-8 text-pop p-2">
        <div class="row justify-content-end">
        <div class=" bg-dark rounded-pill col-1 text-light m-1" v-if="profile.id == blog.creator.id">
          <h4 class="text-center">
            <i  class="m-1 fa fa-trash" aria-hidden="true" @click="deletePost"></i>
            <i class="m-1 fa fa-pen-square" aria-hidden="true" @click="toggle"></i>
          </h4>
        </div>
        </div>
        <img :src="blog.imgUrl" alt="" class="content-shadow">
        <h1>{{blog.title}}</h1>
        <div class="text-center align-self-center flex-grow">
          <p>{{blog.body}}</p>
        </div>
      </div>
      <div v-else class="col-8 text-pop">
        <div class="row justify-content-end">
        <div class="col-1 bg-dark rounded-pill text-light m-1" v-if="profile.id == blog.creator.id">
          <h4 class="text-center">
            <i  class="m-1 fa fa-trash" aria-hidden="true" @click="deletePost"></i>
            <i class="m-1 fa fa-pen-square" aria-hidden="true" @click="toggle"></i>
          </h4>
        </div>
        </div>
        <form @submit.prevent="editblog">
        <input type="text" name="title" class="form-control" :placeholder="blog.title" v-model="blogData.title"></input>
        <div class="card">
          <textarea type="text" name="body" class="form-control" :placeholder="blog.body" v-model="blogData.body"></textarea>
          <button type="submit" class="btn btn-outline-primary">Submit Edit</button>
        </div>
        </form>
      </div>
      </div>
      </div>
    </div>
    <div v-if="coms.length > 0" class="row justify-content-around">
      <com v-for="com in coms" :key="com.id" :comData="com"/>
    </div>
    <div v-if="this.$auth.isAuthenticated" class="row justify-content-center ">
      <div class="col-6 bg-primary text-pop content-shadow p-5 m-2">
      <form @submit.prevent="createCom" class="form">
              <div class="form-group p-1">
              <label class="mr-1" for="body">Leave a comment</label>
              <input
              v-model="newCom.body"
              type="text"
              name="body"
              id="body"
              class="form-control"
              placeholder="here..."
              />
          </div>
          <button type="submit" class="btn btn-outline-warning">Submit</button>
          </form>
      </div>
    </div>
  </div>
</template>

<script>
import Com from "../components/comment.vue"
export default {
  name: "BlogDetails",
  data(){
    return{
      newCom:{},
      blogData: {},
      isedit: false
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
    },
  },
    mounted() {
    this.$store.dispatch("getBlogById", this.$route.params.id)
    this.$store.dispatch("getActiveCom", this.$route.params.id)
    this.$store.dispatch("getProfile")
  },
  methods:{
    createCom(){
      this.newCom.blog= this.$route.params.id
      this.$store.dispatch("createCom", this.newCom)
    },
    deletePost(){
      if(window.confirm("Delete for always?")){
        this.$store.dispatch("deletePost", this.$route.params.id)
      }else{
        return
      }
    },
    toggle(){
      this.isedit = !this.isedit
    },
    editblog(){
      this.blogData.id = this.$route.params.id
      this.$store.dispatch("editBlog", this.blogData)
      this.toggle()
      this.$store.dispatch("getBlogById", this.$route.params.id
      )
    }
  },
  components:{
    Com
  }

}
</script>

<style scoped>

</style>