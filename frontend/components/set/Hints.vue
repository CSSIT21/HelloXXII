<template>
  <div class="center" style="margin-top: 20px">
    <span>Create 5 Hints :</span>
    <div class="box set" v-for="slot in 5" :key="slot">
      <span>{{ slot }}</span>
      <input v-model="hints[slot - 1]" type="text" />
    </div>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';

export default {
  data: () => ({

  }),
  computed: {...mapFields(['senpai.hints'])}
};
</script>

<style scoped>
.center span {
  font-weight: 500;
  color: #254d86;
}

.box span {
  padding-right: 5px;
  font-size: 17px;
  color: #fda8b9;
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
