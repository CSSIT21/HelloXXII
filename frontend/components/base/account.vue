<template>
  <button @click="logout" class="account-btn">
    <img src="~/assets/icons/logout.svg" />
    <span>{{ profile.name }}</span>
  </button>
</template>

<script>
import { mapFields } from 'vuex-map-fields';

export default {
  data: () => ({

  }),
  computed:{
    ...mapFields(['auth.profile'])
  },
  methods: {
    logout() {
      this.$swal({
        text: "Want to sign out?",
        icon: "question",
        confirmButtonText: "Confirm",
        showCancelButton: true,
        confirmButtonColor: "#4f8ae3",
        cancelButtonColor: "#d1d1cf",
        width: 400,
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.dispatch('logout');
        }
      });
    },
  },
};
</script>

<style scoped>
.account-btn {
  position: fixed;
  bottom: 3%;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  align-items: center;
  padding: 5px 12px;

  background: none;
  border: none;
  border-radius: 10px;

  cursor: pointer;
  transition: all 0.05s;
}

.account-btn span {
  padding-left: 10px;
  font-size: 13px;
  color: #929292;
}

.account-btn:active {
  transform: scale(0.8) translateX(-50%);
}

@media (min-width: 768px) {
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .account-btn span {
    font-size: 16px;
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .account-btn span {
    font-size: 14px;
  }
}
</style>
