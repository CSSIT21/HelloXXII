<template>
  <div>
    <button class="btn click-action" @click="openHints">
      <img src="~/assets/icons/bulb.svg" />
    </button>
  </div>
</template>

<script>
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
  methods: {
    openHints() {},
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

  cursor: pointer;
  transition: all 0.05s;
}

@media only screen and (max-width: 767px) {
  .btn {
    width: 60px;
    height: 60px;
  }
}
</style>