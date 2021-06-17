<template>
  <div>{{ profile }}</div>
</template>

<script>
export default {
  data() {
    return {
      profile: {
        message: "error",
      },
    };
  },
  created() {
    this.$axios
      .get("/account/profile", { withCredentials: true })
      .then(({ data }) => {
        if (data.success) this.profile = data.profile;
      });
  },
};
</script>

<style>
</style>