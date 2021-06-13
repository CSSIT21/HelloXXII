<template>
  <div class="center">
    <div class="box">
      <IconsSearch />
      <input v-model="commit_code" type="text" @keypress.enter="submit" />
    </div>
    <BaseSubmit @submitHandle="submit" />
  </div>
</template>

<script>
export default {
  data: () => ({
    commit_code: "",
  }),
  methods: {
    submit() {},
  },
};
</script>

<style scoped>
.center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>