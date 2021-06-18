<template>
  <div :class="{ 'bottom-sheet': true, active: show }" @click="show = false">
    <div v-for="(hint, index) in hints" :key="index">
      <span>{{ index + 1 }}.</span>
      <span>{{ hint }}</span>
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
.bottom-sheet {
  position: fixed;
  z-index: 100;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(0%);

  width: 600px;
  padding: 20px;
  padding-left: 40px;

  border-radius: 20px 20px 0px 0px;
  background-color: #fafafa;
  box-shadow: 0px 0px 8px rgba(83, 83, 83, 0.4);

  word-wrap: break-word;
  transition: all 0.3s ease-in-out;
  opacity: 0;
}

.bottom-sheet.active {
  transform: translateX(-50%) translateY(-100%);
  opacity: 1;
}

.bottom-sheet > div {
  padding: 3px 0;
  font-size: 15px;
}

.bottom-sheet span:first-child {
  font-weight: 500;
  color: #f07a9d;
}

.bottom-sheet span:last-child {
  color: #616161;
}

@media only screen and (max-width: 600px) {
  .bottom-sheet {
    width: 380px;
  }
}
</style>