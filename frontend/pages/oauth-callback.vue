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
    async route(usertype){
      if ([1].includes(usertype)){
        const data = await this.$store.dispatch('fetchKohi');
        if(null === data.paired){
          this.auth.main = '/pair-peer-mentor';
        }else{
          if(data.found){
            this.auth.main = '/congrat';
          }else this.auth.main = '/guess-peer-mentor';
        }
      }
      if ([2,3].includes(usertype)){
        const data = await this.$store.dispatch('fetchSenpai');
        if(null === data.commit_code)
          this.auth.main = '/mentor-setcode';
        else
          this.auth.main = '/mentor-overview';
      }
      this.$router.push(this.auth.main);
    }
  }
};
</script>

<style>
</style>
