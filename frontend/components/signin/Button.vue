<template>
  <button class="signIn-btn click-action" @click="signIn">
    <IconsMicrosoft />
    <span>Sign in with Microsoft</span>
  </button>
</template>

<script>
export default {
  methods: {
    signIn() {
      console.log("sign in");
      this.$router.push({ name: "pair-peer-mentor" });
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
  font-size: 15px;

  cursor: pointer;
  transition: all 0.1s;
}

.signIn-btn span {
  margin-left: 3%;
  letter-spacing: 1px;
}

.signIn-btn:hover {
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.17);
  background-color: #ffeaea;
}
</style>