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
    error_desc: "Incorrect paring code.",
    pairing_code: "",
  }),
  methods: {
    submit() {
      if (!this.pairing_code) return;

      if (this.correct_code === this.pairing_code)
        this.$router.push({ name: "guess-peer-mentor" });
      else {
        this.$swal({
          title: "Sorry...",
          text: this.error_desc,
          icon: "error",
          confirmButtonColor: "#4f8ae3",
          width: 450,
        });
      }
    },
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