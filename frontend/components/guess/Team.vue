<template>
  <div class="team">
    <img
      :src="`https://storage.googleapis.com/helloxxii/icon/${role}.svg`"
      alt="Your team logo"
    />
    <h6>{{ role }} team</h6>
  </div>
</template>

<script>
export default {
  data: () => ({
    role: "chicken",
  }),
};
</script>

<style scoped>
.team {
  text-align: center;
  margin-top: 30px;
}

.team img {
  width: 80px;
  height: 80px;
}

.team h6 {
  text-transform: capitalize;
  font-weight: 600;
  font-size: 12.5px;
  color: #fcb9b4;
}

@media only screen and (max-width: 767px) {
  .team img {
    width: 60px;
    height: 60px;
  }

  .team h6 {
    font-size: 10px;
  }
}
</style>