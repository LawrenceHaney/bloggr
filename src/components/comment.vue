<template>
  <div class="col-8 pop my-2 content-shadow bg-primary">
    <div class="row">
      <div class="col-3 bg-warning p-2 text-center">
        <h6>{{comData.creator.name}}</h6>
        <img :src="comData.creator.picture" alt="" class="profile">
      </div>
      <div class="col-9 p-1 text-pop">
        <div class="row">
        <span v-if="this.$route.name == 'BlogDetails'" class="col-12">
        <div v-if="profile.id == comData.creator.id" class="bg-dark rounded-pill d-flex justify-content-around controls">
          <div>
        <i class="text-right fa fa-trash" aria-hidden="true" @click="deleteCom"></i>
          </div>
          <div>
        <i class="text-right fa fa-pen-square" aria-hidden="true" @click="toggle"></i>
          </div>
        </div>
        </span>
        <span class="text-center col-12">
        <div v-if="this.isedit">
          <router-link :to="{name: 'BlogDetails', params: {id: comData.blog}}">
          <p class="text-pop">{{comData.body}}</p>
          </router-link>
        </div>
        <span v-else>
        <form  @submit.prevent="editcom" class="form">
          <div class="form-group">
          <input
              v-model="comData.body"
              type="text"
              name="body"
              id="body"
              class="form-control"
              :placeholder="comData.body"
              />
              <button type="submit" class="btn btn-outline-warning">Submit</button>
          </div>
        </form>
        </span>
        </span>
        
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment",
  data(){
    return{
      newCom:{},
      isedit: true
    }
  },
  props: {
    comData:
    {type: Object, required: true}
  },
  computed:{
    profile(){
      return this.$store.state.profile
    },

  },
  methods:{
    deleteCom(){
      this.$store.dispatch("deleteCom", this.comData.id)

    },
    toggle(){
      this.isedit = !this.isedit
    },
    editcom(){
      console.log("H")
      this.$store.dispatch("editCom", this.comData)
      this.toggle()
      
      }
  }
}
</script>

<style scoped>
.controls{
  height: 30px;
  width: 60px;
}
</style>