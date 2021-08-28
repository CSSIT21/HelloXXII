<template>
  <button class="btn click-action" @click="submit">
    <span>></span>
  </button>
</template>

<script>
export default {
  data: () => ({
    success: true,
    error_desc: "The code contains unallowed collation charactor.",
  }),
  methods: {
    submit() {
      if (this.success) {
        this.$swal({
          title: "Completed!",
          text: "Now waiting for your junior :)",
          icon: "success",
          showConfirmButton: false,
          width: 450,
          timer: 2000,
        }).then(() => this.$router.push({ name: "mentor-overview" }));
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

<style scoped>
@import "~/assets/css/button.css";

.btn {
  margin: 32px 0 8px 0;
}

.btn span {
  position: relative;
  left: 3px;

  font-weight: 600;
  font-size: 60px;
  color: #ffffff;
}
</style>