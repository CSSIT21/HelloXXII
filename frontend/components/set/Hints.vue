<template>
  <div class="center">
    <span>Create 5 Hints :</span>
    <div class="box" v-for="slot in 5" :key="slot">
      <span>{{ slot }}</span>
      <input v-model="hints[slot - 1]" type="text" />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    hints: ["", "", "", "", ""],
  }),
};
</script>

<style scoped>
.box span {
  padding-right: 5px;
  font-size: 17px;
  color: #fda8b9;
}
</style>