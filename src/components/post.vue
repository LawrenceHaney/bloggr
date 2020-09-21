<template>
    <div class="col-8 p-1 bg-primary my-3 content-shadow pop">
        <router-link :to="{name: 'BlogDetails', params: {id: blogData.id}}">
      <div class="row d-flex">
        <div class="col-3 p-2 text-center bg-warning d-flex flex-column justify-content-center text-pop">
          <h6>{{blogData.creator.name}}</h6>
          <img :src="blogData.creator.picture" alt="" class="profile align-self-center">
        </div>
        <div class=" col-8 p-2 text-pop d-flex flex-column justify-content-center">
        <h1 class="align-self-center card-title">{{blogData.title}}</h1>
        <img v-if="blogData.imgUrl" :src="blogData.imgUrl" alt="" class="card-img">
        </div>
      </div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: "blog",
  props:{
    blogData:
    {type: Object, required: true}
  },
  computed:{
  },
  methods:{

  }

}
</script>

<style scoped>
.pop:hover {
  transform: scale(1.05);
}
</style>