<template>
  <div class="center">
    <div class="box">
      <img src="~/assets/icons/key.svg" />
      <input v-model="pairing_code" type="text" @keypress.enter="submit" />
    </div>
    <BaseSubmit @submitHandle="submit" />
  </div>
</template>

<script>
export default {
  data: () => ({
    pairing_code: "",
    success: true,
    error_desc: "Incorrect paring code.",
  }),
  methods: {
    submit() {
      if (!this.pairing_code) return;

      if (this.success) {
        this.$swal({
          title: "Paired!",
          text: "Now you are paired with your peer mentor",
          icon: "success",
          showConfirmButton: false,
          width: 450,
          timer: 2000,
        }).then(() => this.$router.push({ name: "guess-peer-mentor" }));
      } else {
        this.$swal({
          title: "Sorry...",
          text: this.error_desc,
          icon: "warning",
          confirmButtonColor: "#facea8",
          width: 450,
        });
      }
    },
  },
};
</script>

<style>
</style>