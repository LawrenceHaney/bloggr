<template>
    <div class="col-8 p-1 bg-primary my-3 content-shadow pop">
        <router-link :to="{name: 'BlogDetails', params: {id: blogData.id}}">
      <div class="row d-flex">
        <div class="col-3 p-2 text-center bg-warning">
          <h6>{{blogData.creator.name}}</h6>
          <img :src="blogData.creator.picture" alt="" class="profile">
        </div>
        <div class=" col-8 p-2 text-pop">
        <p>{{blogData.title}}</p>
        <img :src="blogData.imgUrl" alt="" class="card-img">
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