<template>
  <div class="team">
    <div class="color-circle" :style="`background-color: ${color_code}`"></div>
    <h6>{{ color_name }} color</h6>
  </div>
</template>

<script>
export default {
  data: () => ({
    color_name: "Lemon chiffon",
    color_code: "#fffacd",
  }),
};
</script>

<style scoped>
.team {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
}

.team .color-circle {
  width: 80px;
  height: 80px;
  margin: 15px 0;

  border-radius: 50%;
  border: 3.5px solid white;
  box-shadow: 0px 1px 5px rgb(212, 212, 212);
}

.team h6 {
  text-transform: capitalize;
  font-weight: 600;
  font-size: 12.5px;
  color: #fcb9b4;
}

@media only screen and (max-width: 768px) {
  .team .color-circle {
    width: 65px;
    height: 65px;
    border-width: 3px;
  }

  .team h6 {
    font-size: 11.5px;
  }
}
</style>