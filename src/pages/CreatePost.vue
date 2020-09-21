<template>
  <div class="container-fluid background">
    <div class="row justify-content-center my-2">
      <div class="col-2 bg-warning text-center p-1">
      <h1>{{user.name}}</h1>
      <img :src="user.picture" alt="" class="profile">
      </div>
      <div class="col-8 bg-primary content-shadow p-2">
        <div class="text-pop">
          <form @submit.prevent="createPost" class="form">
            <div class="form-group p-1">
              <label class="mr-1" for="title">title</label>
              <input
              v-model="newPost.title"
              type="text"
              name="title"
              id="title"
              class="form-control"
              placeholder="title..."
              />
              </div>
              <div class="form-group p-1">
              <label class="mr-1" for="img">Image</label>
              <input
              v-model="newPost.imgUrl"
              type="Url"
              name="img"
              id="img"
              class="form-control"
              placeholder="URL..."
              />
              </div>
              <div class="form-group p-1">
              <label class="mr-1" for="body">Body</label>
              <input
              v-model="newPost.body"
              type="text"
              name="body"
              id="body"
              class="form-control"
              placeholder="Body..."
              />
          </div>
          <button type="submit" class="btn btn-outline-warning col-12">New Post</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewPost",
  data(){
    return{
      newPost:{}
    }
  },
  methods: {
    createPost(){
      if(this.$auth.isAuthenticated){
        this.newPost.creatorEmail = user.email
        this.$store.dispatch("createPost", this.newPost)
      } else {window.alert("You must log in first")}
    }
  },
  computed:{
    user(){
      return this.$auth.userInfo
    }
  }

}
</script>

<style>

</style>