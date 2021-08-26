<template>
  <div class="middle-page">
    <div class="center-content wrap">
      <h1>Guess Peer Mentor</h1>
      <GuessInput />
      <GuessTeam />
    </div>
    <GuessHints />
    <GuessHintsOverlay />
  </div>
</template>

<script>
export default {
  layout: "background_corner",
  components: {
    GuessHintsOverlay: () => import("~/components/base/HintsSheetOverlay.vue"),
  },
};
</script>

<style scoped>
@import "~/assets/css/wrap-center-content.css";

.center-content {
  margin-top: 144px;
}

@media (min-width: 768px) {
  .center-content {
    margin-top: 72px;
  }
}

@media (min-width: 992px) {
  .center-content {
    margin-top: 96px;
  }
}

@media (min-width: 1200px) {
}
</style>

