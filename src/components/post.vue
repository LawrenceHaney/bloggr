<template>
    <div class="col-4 p-1">
      <div class="card">
        <p>test title</p>
        <p class="text-center">{{blogData.id}}</p>
      </div>
    </div>
</template>

<script>
export default {
  name: "blog",
  props:{
    type: Object, required: true
  }

}
</script>

<style>

</style>