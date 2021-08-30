<template>
  <div class="center">
    <div class="box">
      <img src="~/assets/icons/search.svg" />
      <input v-model="commit_code" type="text" @keypress.enter="submit" />
    </div>
    <BaseSubmit @submitHandle="submit" :loading="loading" />
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';
export default {
  data: () => ({
    commit_code: "",
    loading: false
    // success: true,
    // error: 4007,
    // error_desc: "Mismatch peer mentor. Checking result goes wrong.",
    // quota_remaining: 2,
  }),
  computed: {...mapFields(['auth'])},
  methods: {
    async submit() {
      if (!this.commit_code.trim()) return;
      this.loading = true;
      const response = await this.$store.dispatch('commit',{commit_code: this.commit_code.trim()});
      this.loading = false;
      if (response.success) {
        this.$swal({
          title: "Great Job!",
          text: "You've found your peer mentor.",
          icon: "success",
          showConfirmButton: false,
          width: 450,
          timer: 2000,
        }).then(() => {
          this.auth.main = "/congrat";
          this.$router.push(this.auth.main);
        });
      } else {
        if (response.error === 4007) {
          this.$swal({
            title: "Wrong :(",
            text: response.error_desc,
            footer: `You have ${response.quota_remaining} chance left.`,
            icon: "error",
            confirmButtonColor: "#f27474",
            width: 450,
          });
        } else {
          this.$swal({
            title: "Sorry...",
            text: response.error_desc,
            icon: "warning",
            confirmButtonColor: "#facea8",
            focusConfirm: false,
            width: 450,
          }).then(() => {
            if([4002,4004].includes(response.error)){
              this.auth.main = "/guess-peer-mentor";
              this.$router.push(this.auth.main);
            }
          });
        }
      }
    },
  },
};
</script>

<style>
</style>
