<template>
  <div class="hint-btn">
    <h6>Your Hint</h6>
    <button><IconsKey color="#ffffff" /></button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.hint-btn {
  position: absolute;
  right: 15%;
  bottom: 15%;
  text-align: center;
}

.hint-btn h6 {
  font-size: 12.5px;
  font-weight: 500;
  color: #867e88;
}

.hint-btn button {
  width: 66px;
  height: 66px;
  margin: 5px;

  border: none;
  border-radius: 50%;
  background: #ff6584;
}
</style>