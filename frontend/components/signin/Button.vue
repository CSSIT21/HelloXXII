<template>
  <button class="signIn-btn click-action" @click="signIn">
    <img src="~/assets/icons/microsoft.svg" />
    <span>Sign in with Microsoft</span>
  </button>
</template>

<script>
export default {
  methods: {
    signIn() {
      //this.$router.push({ name: "pair-peer-mentor" });
      this.$store.dispatch("login");
    },
  },
};
</script>

<style scoped>
.signIn-btn {
  width: 280px;
  height: 44px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fdf0f0;
  border-radius: 17px;

  border: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  cursor: pointer;
  transition: all 0.1s;
}

.signIn-btn span {
  margin-left: 3%;
  font-size: 14px;
  color: #5e5e5e;
  letter-spacing: 1px;
}

.signIn-btn:hover {
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.17);
  background-color: #ffeaea;
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .signIn-btn {
    width: 300px;
    height: 47.5px;
    border-radius: 19px;
  }

  .signIn-btn span {
    font-size: 15px;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .signIn-btn {
    width: 380px;
    height: 51px;
    border-radius: 21px;
  }

  .signIn-btn span {
    font-size: 17px;
  }

  button img {
    width: 28px;
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .signIn-btn {
    width: 390px;
  }

  button img {
    width: 30px;
  }
}
</style>