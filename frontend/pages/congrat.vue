<template>
  <div class="center-content">
    <img src="~/assets/images/congrat-logo.svg" />
    <h2>CONGRAT!</h2>
    <h3>"{{ mentor_name }}"</h3>
    <span>is your peer mentor</span>
  </div>
</template>

<script>
export default {
  data: () => ({
    mentor_name: "Monthara",
  }),
};
</script>

<style scoped>
.center-content {
  height: 60vh;
}

.center-content h2 {
  margin: 12px 0 4px 0;
  font-size: 50px;
  font-weight: 400;
  color: #ff6584;
}

.center-content h3 {
  font-size: 37.5px;
  font-weight: 400;
  color: #254d86;
}

.center-content span {
  margin-top: 10px;
  font-weight: 500;
  font-size: 16px;
  color: #254d86;
}
</style>