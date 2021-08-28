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
    // hints: [
    //   "คิดถึงติดมันส์ แจ่วแจ๋ว ;(",
    //   "นัดแซ่บก็ดีเหมือนกันนะ",
    //   "ไอเลิฟสปาเก็ตตี้ @สเตชั่น45",
    //   "tickled pink ห้ามพลาด",
    //   "ปิดท้ายด้วยหม่าล่าเที่ยงคืน",
    // ],
  }),
  computed: {
    ...mapFields(["hint.show","senpai.hints"]), // use this hints instread
  },
};
</script>

<style scoped>
@import "~/assets/css/button.css";
</style>
