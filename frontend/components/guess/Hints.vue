<template>
  <div>
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
  right: 12%;
  bottom: 15%;
  text-align: center;
}

.hint-btn span {
  font-size: 12.5px;
  font-weight: 500;
  color: #867e88;
}

.hint-btn button {
  width: 62px;
  height: 62px;
  margin: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 50%;
  background: #ff6584;

  cursor: pointer;
  transition: all 0.05s;
}

@media only screen and (max-width: 768px) {
  .hint-btn {
    bottom: 10%;
    right: 10%;
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