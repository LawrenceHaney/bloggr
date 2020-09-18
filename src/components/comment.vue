<template>
  <div class="col-12">
    <div class="row card">
      <div class="col-3 bg-dark">
        <h1>user here</h1>
      </div>
      <div class="col-9 bg-light">
        <i v-if="profile.id == comData.creator.id" class="fa fa-trash" aria-hidden="true" @click="deleteCom"></i>
        <p>{{comData.body}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment",
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

    }
  }

}
</script>

<style>

</style>