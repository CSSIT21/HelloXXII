<template>
  <div class="center-content">
    <img src="~/assets/images/helloXXII-logo.svg" width="350" />
    <SigninButton />
  </div>
</template>

<script>
export default {
  layout: "background_signIn",
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  img {
    width: 220px;
  }
}
</style>