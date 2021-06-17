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
  width: 271.25px;
  height: 47.5px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fdf0f0;
  border-radius: 18.75px;
  border: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  color: #717171;
  cursor: pointer;
  transition: all 0.1s;
}

.signIn-btn span {
  margin-left: 3%;
  font-size: 15px;
  letter-spacing: 1px;
}

.signIn-btn:hover {
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.17);
  background-color: #ffeaea;
}

@media only screen and (max-width: 767px) {
  .signIn-btn {
    width: 220px;
    height: 38px;
    border-radius: 15px;
  }

  .signIn-btn span {
    font-size: 12px;
  }
}
</style>