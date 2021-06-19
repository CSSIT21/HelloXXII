<template>
  <div>
    <div class="bg-top"></div>
    <Nuxt />
    <div class="bg-bottom"></div>
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

  background-image: url("~assets/background/web/top.svg");
  background-repeat: no-repeat;
}

.bg-bottom {
  width: 100%;
  height: 100%;

  position: fixed;
  z-index: -100;
  right: 0%;
  top: 85%;

  background-image: url("~assets/background/web/bottom.svg");
  background-repeat: no-repeat;
}

img {
  display: none;
}

@media only screen and (max-width: 600px) {
  .bg-top {
    background-image: url("~assets/background/phone/top.svg");
  }

  img {
    display: block;
    position: absolute;
    bottom: 4%;
    left: 50%;
    transform: translateX(-45%);
  }

  .bg-bottom {
    width: 0%;
    height: 0%;
    background-image: none;
  }
}

@media only screen and (min-width: 601px) and (max-width: 768px) {
  .bg-bottom {
    top: 86%;
  }
}
</style>