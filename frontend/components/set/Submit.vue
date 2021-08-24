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
.btn {
  width: 62px;
  height: 62px;
  margin-top: 25px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 50%;
  background: #ff6584;
  box-shadow: 1px 2px 3px 0 rgb(175, 175, 175);

  cursor: pointer;
  transition: all 0.05s;
}

.btn span {
  position: relative;
  left: 3px;

  font-weight: 600;
  font-size: 60px;
  color: #ffffff;
}

@media only screen and (max-width: 768px) {
  .btn {
    width: 60px;
    height: 60px;
  }
}
</style>