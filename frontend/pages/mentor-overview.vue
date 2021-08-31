<template>
  <div class="middle-page">
    <div class="center-content wrap">
      <!-- {{ senpai }} -->
      <div class="center">
        <h1>Your Paring Code</h1>
        <div class="box">
          <p>{{ senpai.pairing_code }}</p>
        </div>
      </div>
      <div class="center">
        <h1>Your Commit Code</h1>
        <div class="box">
          <p>{{ senpai.commit_code }}</p>
        </div>
      </div>

      <div class="center">
        <h1>Your Hints</h1>
        <OverviewHints />
        <OverviewHintsOverlay />
      </div>
    </div>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';

export default {
  layout: "background_corner",
  middleware: ['auth','senpai'],
  components: {
    OverviewHintsOverlay: () =>
      import("~/components/base/HintsSheetOverlay.vue"),
  },
  data: () => ({
    code: "Food is the most powerful",
    data: {}
  }),
  computed: {...mapFields(['senpai','auth'])},
};
</script>

<style scoped>
@import "~/assets/css/wrap-center-content.css";

.center-content {
  margin-top: 24px;
}

.center-content > div {
  margin: 24px 0;
}

.box {
  width: 100%;
  height: 100%;
  min-width: 320px;
  max-width: 380px;
  padding: 0 20px;
}

.box p {
  width: 100%;
  text-align: center;
  padding: 10px 0;

  overflow-wrap: break-word;
  word-wrap: break-word;

  font-weight: 500;
  color: rgb(139, 139, 139);
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .box {
    min-width: 370px;
    max-width: 400px;
  }

  .center-content {
    margin-top: 40px;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .box {
    min-width: 420px;
    max-width: 460px;
  }

  .center-content {
    margin-top: 70px;
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .box {
    min-width: 370px;
    max-width: 400px;
  }

  .center-content {
    margin-top: 50px;
  }
}
</style>
