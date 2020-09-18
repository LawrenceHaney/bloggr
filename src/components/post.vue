<template>
    <div class="col-4 p-1">
      <div class="row d-flex">
        <div class="col-3 card">
          <h6>{{blogData.creator.name}}</h6>
          <img :src="blogData.creator.picture" alt="">
        </div>
        <div class="card col-8">
        <p>{{blogData.title}}</p>
        <img :src="blogData.imgUrl" alt="" class="card-img">
        <p class="text-center">{{blogData.body}}</p>
        </div>
      
      </div>
    </div>
</template>

<script>
export default {
  name: "blog",
  props:{
    blogData:
    {type: Object, required: true}
  }

}
</script>

<style scoped>
img{
  border-radius: 50%;
}

</style>