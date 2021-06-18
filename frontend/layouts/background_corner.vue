<template>
  <div>
    <div class="bg-right"></div>
    <Nuxt />
    <BaseAccount />
    <div class="bg-left"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bg-right {
  width: 100%;
  height: 100%;

  position: fixed;
  z-index: -100;
  top: 0%;
  right: 0%;

  background-image: url("~assets/background/web/right.svg");
  background-repeat: no-repeat;
}

.bg-left {
  width: 100%;
  height: 100%;

  position: fixed;
  z-index: -100;
  left: 0%;

  background-repeat: no-repeat;
}

@media only screen and (max-width: 600px) {
  .bg-right {
    background-image: url("~assets/background/phone/right.svg");
  }

  .bg-left {
    background-image: url("~assets/background/phone/left.svg");
  }
}

@media only screen and (min-width: 601px) and (max-width: 768px) {
  .bg-left {
    top: 63%;
    background-image: url("~assets/background/web/left.svg");
  }
}
</style>