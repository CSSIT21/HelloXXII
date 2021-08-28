<template>
  <div class="from-top">
    <div class="center-content">
      <SetCommitCode />
      <SetHints />
      <SetSubmit />
    </div>
  </div>
</template>

<script>
export default {
  layout: "background_bottom",
};
</script>

<style scoped>
@import "~/assets/css/wrap-center-content.css";

.from-top {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 88vh;
  min-height: 716px;
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
}
</style>