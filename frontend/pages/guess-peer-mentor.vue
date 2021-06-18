<template>
  <div>
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
</style>

