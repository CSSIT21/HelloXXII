<template>
  <div class="center">
    <button class="btn click-action" @click="show = true">
      <img src="~/assets/icons/bulb.svg" />
    </button>
    <BaseHintsSheet :hints="hints" />
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";

export default {
  data: () => ({
    hints: [
      "คิดถึงติดมันส์ แจ่วแจ๋ว ;(",
      "นัดแซ่บก็ดีเหมือนกันนะ",
      "ไอเลิฟสปาเก็ตตี้ @สเตชั่น45",
      "tickled pink ห้ามพลาด",
      "ปิดท้ายด้วยหม่าล่าเที่ยงคืน",
    ],
  }),
  computed: {
    ...mapFields(["hint.show"]),
  },
};
</script>

<style scoped>
.btn {
  width: 62px;
  height: 62px;
  margin-top: 15px;

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

@media only screen and (max-width: 768px) {
  .btn {
    width: 60px;
    height: 60px;
  }
}
</style>