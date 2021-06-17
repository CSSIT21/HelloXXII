<template>
  <div :class="{ 'bottom-sheet': true, active: show }" @click="show = false">
    <div v-for="(hint, index) in hints" :key="index">
      <span>{{ index + 1 }}.</span> {{ hint }}
    </div>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";

export default {
  props: {
    hints: Array,
  },
  computed: {
    ...mapFields(["hint.show"]),
  },
};
</script>

<style scoped>
@import "~/assets/css/bottom_sheet.css";
</style>