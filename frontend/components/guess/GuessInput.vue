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
    success: false,
    error: 4007,
    error_desc: "Mismatch peer mentor. Checking result goes wrong.",
    quota_remaining: 2,
  }),
  methods: {
    submit() {
      if (!this.commit_code) return;

      if (this.success) {
        this.$router.push({ name: "congrat" });
      } else {
        if (this.error === 4007) {
          this.$swal({
            title: "Wrong :(",
            text: this.error_desc,
            footer: `You have ${this.quota_remaining} chance left.`,
            icon: "error",
            confirmButtonColor: "#4f8ae3",
            width: 450,
          });
        } else {
          this.$swal({
            title: "Sorry...",
            text: this.error_desc,
            icon: "error",
            confirmButtonColor: "#4f8ae3",
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