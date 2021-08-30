<template>
  <div class="middle-page">
    <div class="center-content wrap">
      <h1>Enter Your Code</h1>
      <PairCodeInput />
    </div>
  </div>
</template>

<script>
export default {
  layout: "background_corner",
  middleware: ['auth','kohi'],
  created(){
    this.$store.dispatch('fetchKohi');
  }
};
</script>

<style scoped>
@import "~/assets/css/wrap-center-content.css";
</style>
