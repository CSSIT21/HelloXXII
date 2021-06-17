<template>
  <div
    :class="{ 'hint-overlay': true, active: show }"
    @click="show = false"
  ></div>
</template>

<script>
import { mapFields } from "vuex-map-fields";

export default {
  computed: {
    ...mapFields(["hint.show"]),
  },
};
</script>

<style>
.hint-overlay {
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 90;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0);
  pointer-events: none;
  transition: all 0.3s ease-in-out;
}

.hint-overlay.active {
  pointer-events: all;
  background: rgba(0, 0, 0, 0.5);
  /*
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  */
}
</style>