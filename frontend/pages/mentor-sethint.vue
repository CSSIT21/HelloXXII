<template>
  <div class="from-top">
    <div class="center-content">
      <SetHints />
      <SetSubmit />
    </div>
  </div>
</template>

<script>
export default {
  middleware: ["auth", "senpai"],
  layout: "background_bottom",
};
</script>

<style scoped>
@import "~/assets/css/wrap-center-content.css";

.from-top {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 72vh;
  min-height: 420px;
}

.center-content {
  max-width: 360px;
  width: 100%;
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .center-content {
    max-width: 500px;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .center-content {
    max-width: 640px;
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .center-content {
    max-width: 500px;
  }

  .from-top {
    height: 80vh;
    min-height: 450px;
  }
}
</style>
