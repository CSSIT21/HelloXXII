<template>
  <button @click="logout" class="account-btn">
    <IconsLogout />
    <span>{{ firstname }}</span>
  </button>
</template>

<script>
export default {
  data: () => ({
    firstname: "Monthara",
  }),
  methods: {
    logout() {
      this.$swal({
        text: "Want to sign out?",
        icon: "question",
        confirmButtonText: "Confirm",
        showCancelButton: true,
        confirmButtonColor: "#4f8ae3",
        cancelButtonColor: "#d1d1cf",
        width: 400,
      }).then((result) => {
        if (result.isConfirmed) {
          console.log("Sign out success!");
        }
      });
    },
  },
};
</script>

<style scoped>
.account-btn {
  position: absolute;
  bottom: 2.5%;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  align-items: center;
  padding: 5px 12px;

  background: none;
  border: none;
  border-radius: 10px;

  cursor: pointer;
  transition: all 0.05s;
}

.account-btn span {
  padding-left: 10px;
  font-size: 14px;
  color: #afacaf;
}

.account-btn:active {
  transform: scale(0.8) translateX(-50%);
}

@media only screen and (max-width: 767px) {
  .account-btn span {
    font-size: 12px;
  }
}
</style>