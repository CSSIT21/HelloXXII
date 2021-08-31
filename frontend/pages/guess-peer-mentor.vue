<template>
  <div class="middle-page">
    <div class="center-content wrap">
      <h1>Guess Peer Mentor</h1>
      <GuessInput />
      <GuessTeam />
      <BaseOpenchat @submitHandle="submit" :link="kohi.openchat"/>
      <!-- <BaseOpenchat @submitHandle="submit"/> -->
    </div>
    <GuessHints />
    <GuessHintsOverlay />
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';
export default {
  layout: "background_corner",
  middleware: ['auth','kohi'],
  components: {
    GuessHintsOverlay: () => import("~/components/base/HintsSheetOverlay.vue"),
  },
  computed: {...mapFields(['kohi','auth'])},
  methods: {
    submit(){}
  }
};
</script>

<style scoped>
@import "~/assets/css/wrap-center-content.css";

.middle-page{
  margin-top: -70px;
}
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

