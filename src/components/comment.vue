<template>
  <div class="col-12">
    <div class="row card">
      <div class="col-3 bg-dark">
        <h1>user here</h1>
      </div>
      <div class="col-9 bg-light">
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
  }

}
</script>

<style>

</style>