<template>
  <div class="center-content middle-page">
    <img src="~/assets/images/helloXXII-logo.svg" width="220" />
    <SigninButton />
  </div>
</template>

<script>
export default {
  layout: "background_signIn",
};
</script>

<style scoped>
img {
  margin-top: 25px;
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  img {
    width: 300px;
    margin-top: -15px;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  img {
    width: 390px;
    margin-top: 0;
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  img {
    width: 400px;
    margin-top: 90px;
  }
}
</style>