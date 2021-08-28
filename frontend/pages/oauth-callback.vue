<template>
  <div></div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';
export default {
  data() {
    return {

    };
  },
  computed: {
    ...mapFields(["auth","auth.profile", "auth.isLoggedIn"]),
  },
  created() {
    this.$axios
      .get("/account/profile", { withCredentials: true })
      .then(({ data }) => {
        if (data.success) {
          this.profile = data.profile;
          this.isLoggedIn = true;
          this.route(data.profile.usertype);
          return;
        }else{
          this.$router.push('/login');
          return;
        }
      });
  },
  methods:{
    route(usertype){
      if (1 ==usertype) {
        this.$router.push('/mentor-setting');
        return;
      }if (2 == usertype) {
        this.$router.push('/mentor-setting');
        return;
      }if (3 == usertype){
        this.$router.push('/pair-peer-mentor');
        return;
      }else{
        this.$router.push('/login');
        return;
      }
    }
  }
};
</script>

<style>
</style>
