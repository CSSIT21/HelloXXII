<template>
  <div class="center">
    <div class="box">
      <img src="~/assets/icons/key.svg" />
      <input v-model="pairing_code" type="text" @keypress.enter="submit" />
    </div>
    <BaseSubmit @submitHandle="submit" :loading="loading"/>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';

export default {
  data: () => ({
    loading: false
  }),
  computed: {...mapFields(['hint.pairing_code','kohi'])},
  methods: {
    async submit() {
      if (!this.pairing_code.trim()) return;
      this.loading = true;
      const response = await this.$store.dispatch('pair',{pairing_code: this.pairing_code.trim()});
      this.loading = false;
      if (response.success) {
        this.$swal({
          title: "Paired!",
          text: "Now you are paired with your peer mentor",
          icon: "success",
          showConfirmButton: false,
          width: 450,
          timer: 2000,
        }).then(() => this.$router.push("/guess-peer-mentor"));
      } else {
        this.$swal({
          title: "Sorry...",
          text: response.error_desc,
          icon: "warning",
          confirmButtonColor: "#facea8",
          width: 450,
        }).then(() => {
          if([4002,4004].includes(response.error)){
            this.$router.push("/guess-peer-mentor")
          }
        });
      }
    },
  },
};
</script>

<style>
</style>
