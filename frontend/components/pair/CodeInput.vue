<template>
  <div class="center">
    <div class="box">
      <IconsKey />
      <input v-model="pairing_code" type="text" @keypress.enter="submit" />
    </div>
    <BaseSubmit @submitHandle="submit" />
  </div>
</template>

<script>
export default {
  data: () => ({
    correct_code: "axxmk",
    error_reason: "Incorrect paring code.",
    pairing_code: "",
  }),
  methods: {
    submit() {
      if (this.correct_code === this.pairing_code)
        this.$router.push({ name: "guess-peer-mentor" });
      else {
      }
    },
  },
};
</script>

<style>
.center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>