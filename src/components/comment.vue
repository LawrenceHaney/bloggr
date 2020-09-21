<template>
  <div class="col-8 pop my-2 content-shadow bg-primary">
    <router-link :to="{name: 'BlogDetails', params: {id: comData.blog}}">
    <div class="row">
      <div class="col-3 bg-warning p-1 text-center">
        <h6>{{comData.creator.name}}</h6>
        <img :src="comData.creator.picture" alt="" class="profile">
      </div>
      <div class="col-9 p-1 text-pop d-flex justify-content-end">
        <p v-if="this.isedit">{{comData.body}}</p>
        <form v-else @submit.prevent="editcom">
          <input
              v-model="comData.body"
              type="text"
              name="body"
              id="body"
              class="form-control"
              :placeholder="comData.body"
              />
              <button type="submit" class="btn btn-outline-primary">Submit</button>
        </form>
        <span class="bg-dark rounded-pill">
        <i v-if="profile.id == comData.creator.id" class="text-right fa fa-trash" aria-hidden="true" @click="deleteCom"></i>
        <i v-if="profile.id == comData.creator.id" class="text-right fa fa-pen-square" aria-hidden="true" @click="toggle"></i>
        </span>
      </div>
    </div>
    </router-link>
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
      this.$store.dispatch("editCom", this.comData)
      this.toggle()
      
      }
  }
}
</script>

<style scoped>
.profile{
  border-radius: 50%;
}
</style>