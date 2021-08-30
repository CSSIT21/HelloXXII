<template>
  <button class="box click-action" @click="$emit('submitHandle')" :disabled="loading">Submit</button>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.box {
  justify-content: center;

  width: 140px;
  height: 36px;

  padding: 0;

  font-size: 14.5px;
  font-weight: 600;
  border-radius: 16px;
  color: #254d86;

  cursor: pointer;
  transition: all 0.05s;
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .box {
    width: 168px;
    height: 40px;
    border-radius: 18px;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .box {
    width: 210px;
    height: 48px;
    font-size: 20px;
    border-radius: 21px;
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .box {
    width: 183px;
    height: 41px;
    font-size: 16px;
    border-radius: 19px;
  }
}
</style>
