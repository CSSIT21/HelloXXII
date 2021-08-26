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
  top: -4%;
  right: 0%;

  background-image: url("~assets/background/phone/right.svg");
  background-repeat: no-repeat;
}

.bg-left {
  width: 100%;
  height: 100%;

  position: fixed;
  z-index: -100;
  left: 0%;
  top: 66%;

  background-image: url("~assets/background/phone/left.svg");
  background-repeat: no-repeat;
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .bg-right {
    top: -16%;
  }

  .bg-left {
    top: 56%;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .bg-left {
    top: 55%;
    left: -2%;
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .bg-right {
    background-image: url("~assets/background/web/right.svg");
    left: 20%;
  }

  .bg-left {
    background-image: url("~assets/background/web/left.svg");
    top: 43%;
  }
}
</style>