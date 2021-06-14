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

      if (this.correct_code === this.pairing_code) {
        this.$swal({
          title: "Paired",
          text: "Now you are paired with your peer mentor",
          icon: "success",
          showConfirmButton: false,
          width: 450,
          timer: 2200,
        }).then(() => this.$router.push({ name: "guess-peer-mentor" }));
      } else {
        this.$swal({
          title: "Sorry...",
          text: this.error_desc,
          icon: "warning",
          confirmButtonColor: "#facea8",
          width: 450,
          onOpen: () => {},
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