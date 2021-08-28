<template>
  <div class="center">
    <span>Create Your Code :</span>
    <div class="box">
      <img src="~/assets/icons/lock.svg" />
      <input v-model="commit_code" type="text" />
    </div>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';
export default {
  data: () => ({

  }),
  computed: {...mapFields(['senpai.commit_code'])}
};
</script>

<style>
.center {
  margin: 20px 0;
}

.center span {
  font-weight: 500;
  color: #254d86;
}
</style>
