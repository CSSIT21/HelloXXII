<template>
  <div class="center">
    <div class="box">
      <img src="~/assets/icons/search.svg" />
      <input v-model="commit_code" type="text" @keypress.enter="submit" />
    </div>
    <BaseSubmit @submitHandle="submit" />
  </div>
</template>

<script>
export default {
  data: () => ({
    commit_code: "",
    // success: true,
    // error: 4007,
    // error_desc: "Mismatch peer mentor. Checking result goes wrong.",
    // quota_remaining: 2,
  }),
  methods: {
    async submit() {
      if (!this.commit_code.trim()) return;
      const response = await this.$store.dispatch('commit',{commit_code: this.commit_code});
      if (response.success) {
        this.$swal({
          title: "Great Job!",
          text: "You've found your peer mentor.",
          icon: "success",
          showConfirmButton: false,
          width: 450,
          timer: 2000,
        }).then(() => this.$router.push({ name: "congrat" }));
      } else {
        if (this.error === 4007) {
          this.$swal({
            title: "Wrong :(",
            text: response.error_desc,
            footer: `You have ${response.quota_remaining} chance left.`,
            icon: "error",
            confirmButtonColor: "#f27474",
            width: 450,
          });
        } else {
          this.$swal({
            title: "Sorry...",
            text: response.error_desc,
            icon: "warning",
            confirmButtonColor: "#facea8",
            focusConfirm: false,
            width: 450,
          });
        }
      }
    },
  },
};
</script>

<style>
</style>
