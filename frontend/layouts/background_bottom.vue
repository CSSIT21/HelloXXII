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
  top: 72%;

  background-image: url("~assets/background/web/bottom.svg");
  background-repeat: no-repeat;
}

@media only screen and (max-width: 600px) {
  .bg-bottom {
    top: 68%;
    background-image: url("~assets/background/phone/bottom.svg");
  }
}

@media only screen and (max-width: 768px) {
  .bg-bottom {
    top: 75%;
    background-image: url("~assets/background/phone/bottom.svg");
  }
}
</style>