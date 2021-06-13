<template>
  <div class="box click-action" @click="$emit('submitHandle')">Submit</div>
</template>

<script>
export default {};
</script>

<style scoped>
.box {
  justify-content: center;

  width: 183px;
  height: 40px;
  padding: 0;

  font-weight: 600;
  color: #254d86;

  cursor: pointer;
  transition: all 0.05s;
}

@media only screen and (max-width: 767px) {
  .box {
    width: 130px;
    height: 33px;
    border-radius: 15px;
  }
}
</style>