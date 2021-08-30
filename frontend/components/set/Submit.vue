<template>
  <button class="btn click-action" @click="submit" :disabled="loading">
    <span>></span>
  </button>
</template>

<script>
import { mapFields } from 'vuex-map-fields';

export default {
  data: () => ({
    error_desc: "The code contains unallowed collation charactor.",
  }),
  data: ({
    loading: false
  }),
  computed: {...mapFields(['senpai', 'senpai.hints'])},
  methods: {
    async submit() {
      await this.$store.dispatch('setHints',{hints: this.hints});
      this.loading = true;
      const response = await this.$store.dispatch('setCommitCode', { commit_code: this.senpai.commit_code, pairing_code: 'asdasdasd' });
      this.loading = false;
      if(response.success){
        this.$swal({
          title: "Completed!",
          text: "Now waiting for your junior :)",
          icon: "success",
          showConfirmButton: false,
          width: 450,
          timer: 2000,
        }).then(() => {this.$router.push("/mentor-overview")});
      } else {
        this.$swal({
          title: "Sorry...",
          text: response.error_desc,
          icon: "warning",
          confirmButtonColor: "#facea8",
          width: 450,
        });
      }
    },
  },
};
</script>

<style scoped>
@import "~/assets/css/button.css";

.btn {
  margin: 32px 0 8px 0;
}

.btn span {
  position: relative;
  left: 3px;

  font-weight: 600;
  font-size: 60px;
  color: #ffffff;
}

@media only screen and (max-width: 768px) {
  .btn {
    width: 60px;
    height: 60px;
  }
}
</style>
