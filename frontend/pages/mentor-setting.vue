<template>
  <div class="center-content">
    <SetCommitCode />
    <SetHints />
    <SetSubmit />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.center-content {
  height: 90vh;
}

@media only screen and (max-width: 768px) {
  .center-content {
    height: 82vh;
  }
}
</style>