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
    success: true,
    error: 4007,
    error_desc: "Mismatch peer mentor. Checking result goes wrong.",
    quota_remaining: 2,
  }),
  methods: {
    submit() {
      if (!this.commit_code) return;

      if (this.success) {
        this.$swal({
          title: "Paired",
          text: "Now you are paired with your peer mentor",
          icon: "success",
          showConfirmButton: false,
          width: 450,
          timer: 2200,
        }).then(() => this.$router.push({ name: "congrat" }));
      } else {
        if (this.error === 4007) {
          this.$swal({
            title: "Wrong :(",
            text: this.error_desc,
            footer: `You have ${this.quota_remaining} chance left.`,
            icon: "error",
            confirmButtonColor: "#f27474",
            width: 450,
          });
        } else {
          this.$swal({
            title: "Sorry...",
            text: this.error_desc,
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

<style scoped>
.center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>