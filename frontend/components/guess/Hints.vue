<template>
  <div class="hint-btn">
    <h6>Your Hint</h6>
    <button class="click-action" @click="showHints">
      <IconsKey color="#ffffff" />
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({
    hints: "Love buffet, Want to eat chocolate, Work from bed",
    quota_used: 3,
  }),
  methods: {
    showHints() {
      this.$swal({
        title: `Your ${this.quota_used} Hint`,
        text: this.hints,
        icon: "question",
        confirmButtonColor: "#4f8ae3",
        width: 450,
      });
    },
  },
};
</script>

<style scoped>
.hint-btn {
  position: absolute;
  right: 12%;
  bottom: 15%;
  text-align: center;
}

.hint-btn h6 {
  font-size: 12.5px;
  font-weight: 500;
  color: #867e88;
}

.hint-btn button {
  width: 62px;
  height: 62px;
  margin: 5px;

  border: none;
  border-radius: 50%;
  background: #ff6584;

  cursor: pointer;
  transition: all 0.05s;
}

@media only screen and (max-width: 767px) {
  .hint-btn h6 {
    font-size: 10px;
  }

  .hint-btn button {
    width: 54px;
    height: 54px;
  }
}
</style>