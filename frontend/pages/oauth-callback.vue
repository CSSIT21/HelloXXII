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
        }else this.$router.push('/login');
      });
  },
  methods:{
    route(usertype){
      if ([1].includes(usertype)) this.auth.main = '/pair-peer-mentor';
      if ([2,3].includes(usertype)) this.auth.main = '/pair-peer-mentor';
      this.$router.push(this.auth.main);
    }
  }
};
</script>

<style>
</style>
