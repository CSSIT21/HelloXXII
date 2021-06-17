<template>
  <div>
    <div class="center-content">
      <h1>Guess Peer Mentor</h1>
      <GuessInput />
      <GuessTeam />
    </div>
    <BaseAccount />
    <GuessHints />
    <GuessHintsOverlay />
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";

export default {
  components: {
    GuessHintsOverlay: () => import("~/components/base/HintsSheetOverlay.vue"),
  },
  computed: {
    ...mapFields(["hint.show"]),
  },
};
</script>

