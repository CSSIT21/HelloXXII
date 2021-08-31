<template>
  <div>
    <Nuxt />
    <BaseAccount />
    <div class="bg-bottom"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bg-bottom {
  width: 100%;
  height: 100%;

  position: fixed;
  z-index: -100;
  right: 0%;
  top: 64%;

  background-image: url("~assets/background/phone/bottom.svg");
  background-repeat: no-repeat;
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .bg-bottom {
    top: 64%;
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .bg-bottom {
    top: 70%;
    opacity: 0.9;
    background-image: url("~assets/background/web/bottom.svg");
  }
}
</style>