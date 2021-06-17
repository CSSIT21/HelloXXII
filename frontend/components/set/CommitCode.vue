<template>
  <div class="center">
    <span>Create Your Code :</span>
    <div class="box">
      <img src="~/assets/icons/lock.svg" />
      <input v-model="code" type="text" />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    code: "",
  }),
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