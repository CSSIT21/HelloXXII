<template>
  <div class="center">
    <span>Create Your Paring Code :</span>
    <div class="box set">
      <img src="~/assets/icons/lock.svg" />
      <input v-model="pairing_code" type="text" />
    </div>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';
export default {
  data: () => ({

  }),
  computed: {...mapFields(['senpai.pairing_code'])}
};
</script>

<style scoped>
.center span {
  font-weight: 500;
  color: #254d86;
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .center span {
    font-size: 24px;
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .center span {
    font-size: 16px;
  }
}
</style>
