<template>
  <div class="fluid-container">
    <div class="row">
      <div class="col-3">
      <h1>profile data here</h1>
      </div>
      <div class="col-9">
        <div class="card bg-seconday">
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
              <label class="mr-1" for="img">Img</label>
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
          <button type="submit" class="btn btn-outline-primary">New Post</button>
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
      this.$store.dispatch("createPost", this.newPost)
      
    }
  }

}
</script>

<style>

</style>