<template>
  <div>
    <div class="bg-top"></div>
    <Nuxt />
    <img src="~/assets/images/picture-login.svg" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bg-top {
  width: 100%;
  height: 100%;

  position: fixed;
  z-index: -100;
  right: 0%;
  top: 0%;

  background-image: url("~assets/background/phone/top.svg");
  background-repeat: no-repeat;
}

img {
  display: block;
  position: absolute;
  bottom: 1%;
  left: 50%;
  transform: translateX(-45%);
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .bg-top {
    top: -30%;
  }

  img {
    width: 350px;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .bg-top {
    top: -25%;
  }

  img {
    width: 500px;
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .bg-top {
    top: 0%;
    background-image: url("~assets/background/web/top.svg");
  }

  img {
    display: none;
  }
}
</style>