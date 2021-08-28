<template>
  <div class="wrapper">
    <div class="hint-btn">
      <span>Your Hint</span>
      <button class="click-action" @click="show = true">
        <img src="~/assets/icons/bulb.svg" />
      </button>
    </div>
    <BaseHintsSheet :hints="hints" />
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
export default {
  data: () => ({
    hints: [
      "Love buffet",
      "Want to eat chocolate! Do you hear me? gimme some chocolateee :(",
      " Work from bed",
      "Love Food",
      "Watch movie everyday",
    ],
  }),
  computed: {
    ...mapFields(["hint.show"]),
  },
};
</script>

<style scoped>
.hint-btn {
  position: fixed;
  right: 8%;
  bottom: 8%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.hint-btn span {
  font-size: 14px;
  font-weight: 500;
  color: #867e88;
}
.hint-btn button {
  width: 64px;
  height: 64px;
  margin: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 50%;
  background: #ff6584;
  box-shadow: 1px 2px 3px 0 rgb(175, 175, 175);

  cursor: pointer;
  transition: all 0.05s;
}

@media (max-width: 1199.98px) {
  .hint-btn button {
    width: 80px;
    height: 80px;
  }

  .hint-btn span {
    font-size: 15px;
  }
}

@media (max-width: 991.98px) {
  .hint-btn button {
    width: 64px;
    height: 64px;
  }

  .hint-btn span {
    font-size: 13px;
  }
}

@media (max-width: 767.98px) {
  .wrapper {
    width: 100px;
    height: 100px;
    position: relative;
  }

  .hint-btn {
    position: absolute;
    top: 30%;
    left: 130%;

    width: 100px;
    height: 100px;
  }

  .hint-btn span {
    font-size: 12px;
  }

  .hint-btn button {
    width: 60px;
    height: 60px;
  }
}
</style>