<template>
  <div class="from-top">
    <div class="center-content">
      <img src="~/assets/images/congrat-logo.svg" />
      <h2>CONGRAT!</h2>
      <h3>"{{ kohi.senpai_name }}"</h3>
      <span>is your peer mentor</span>
    </div>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
export default {
  layout: "background_bottom",
  middleware: ["auth", "kohi"],
  computed: { ...mapFields(["auth", "kohi"]) },
  data: () => ({
    mentor_name: "",
  }),
};
</script>

<style scoped>
.from-top {
  height: 64vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.center-content h2 {
  margin: 12px 0 4px 0;
  font-size: 45px;

  font-weight: 400;
  color: #ff6584;
}

.center-content h3 {
  font-size: 32px;

  font-weight: 400;
  color: #254d86;
}

.center-content span {
  margin-top: 10px;
  font-weight: 500;
  font-size: 15px;
  color: #254d86;
}

.center-content img {
  text-align: center;
  width: 220px;
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .center-content h2 {
    font-size: 50px;
  }

  .center-content h3 {
    font-size: 37.5px;
  }

  .center-content span {
    font-size: 16px;
  }

  .center-content img {
    width: 260px;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .center-content h2 {
    font-size: 64px;
  }

  .center-content h3 {
    font-size: 42px;
  }

  .center-content span {
    font-size: 18px;
  }

  .center-content img {
    width: 340px;
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .from-top {
    height: 78vh;
  }

  .center-content h2 {
    font-size: 50px;
  }

  .center-content h3 {
    font-size: 37.5px;
  }

  .center-content span {
    font-size: 17px;
  }

  .center-content img {
    width: 260px;
  }
}
</style>
