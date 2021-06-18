<template>
  <div class="center-content">
    <div class="center">
      <h1>Your Code</h1>
      <div class="box">
        <p>{{ code }}</p>
      </div>
    </div>

    <div class="center">
      <h1>Your Hints</h1>
      <OverviewHints />
      <OverviewHintsOverlay />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    OverviewHintsOverlay: () =>
      import("~/components/base/HintsSheetOverlay.vue"),
  },
  data: () => ({
    code: "Food is the most powerful",
  }),
};
</script>

<style scoped>
.center-content > div {
  margin: 20px 0;
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

@media only screen and (max-width: 768px) {
  .box {
    min-width: 270px;
    max-width: 330px;
  }
}
</style>