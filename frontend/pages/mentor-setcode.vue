<template>
  <div class="from-top">
    <div class="center-content">
      <SetParingCode />
      <SetCommitCode  style="margin-top: 1.5rem;" />
      <BaseSubmit @submitHandle="submit" :loading="loading"/>
    </div>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';
export default {
  middleware: ['auth','senpai'],
  layout: "background_bottom",
  computed: {...mapFields(['senpai','auth'])},
  data: () => ({
    loading: false
  }),
  methods: {
    async submit() {
      if(['',null].includes(this.senpai.pairing_code) || ['',null].includes(this.senpai.commit_code) ) {
        this.$swal({
          title: "Sorry...",
          text: 'Please enter pairingCode or commitCode!',
          icon: "error",
          confirmButtonColor: "#facea8",
          width: 450,
        });
        return;
      }

      this.loading = true;
      const response = await this.$store.dispatch('setCommitCode', { commit_code: this.senpai.commit_code, pairing_code: this.senpai.pairing_code });
      this.loading = false;
      if(response.success){
        this.$swal({
          title: "Completed!",
          text: "Now waiting for your junior :)",
          icon: "success",
          showConfirmButton: false,
          width: 450,
          timer: 2000,
        }).then(() => {
          this.auth.main ="/mentor-sethint";
          this.$router.push(this.auth.main);
        });
      } else {
        this.$swal({
          title: "Sorry...",
          text: response.error_desc,
          icon: "warning",
          confirmButtonColor: "#facea8",
          width: 450,
        }).then(() => {
          if([4003].includes(response.error)){
            this.auth.main ="/mentor-sethint";
            this.$router.push(this.auth.main);
          }
        });
      }
    },
  }
};
</script>

<style scoped>
@import "~/assets/css/wrap-center-content.css";

.from-top {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 88vh;
  min-height: 716px;
}

.center-content {
  max-width: 360px;
  width: 100%;
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .center-content {
    max-width: 500px;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .center-content {
    max-width: 640px;
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .center-content {
    max-width: 500px;
  }
}
</style>
