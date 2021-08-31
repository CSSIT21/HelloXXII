<template>
  <div class="center">
    <button class="btn click-action" @click="show = true">
      <img src="~/assets/icons/info.svg" />
    </button>
    <BaseHintsSheet :hints="hints">
    <b v-if="kohis.length > 0">Your peer mentor(s):</b>
    <div class="root" v-for="kohi in kohis" :key="kohi.id">
        <div class="circle" :style="{'background-size': 'cover',background: `url('https://helloxxii-api.cscms.me/account/photo/${kohi.id}')`,border: `5px solid ${kohi.color_code}`}"></div>
        <div style="display: flex; flex-direction: column; justify-content: center;">
            <h4 class="text" style="color: rgba(0, 0, 0, 0.87);">{{kohi.name}}</h4>
            <h4 class="text" style="color: rgba(0, 0, 0, 0.54);">{{kohi.color_name}}</h4>
        </div>
    </div>
    <!-- <div class="root">
        <div class="circle"></div>
        <div style="display: flex; flex-direction: column; justify-content: center;">
            <h4 class="text" style="color: rgba(0, 0, 0, 0.87);">Bhumjate Sudprasert</h4>
            <h4 class="text" style="color: rgba(0, 0, 0, 0.54);">Android Green</h4>
        </div>
    </div> -->
    <b style="margin-top: 5px;" v-if="hints.length > 0">Your hints</b>
    </BaseHintsSheet>
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
    ...mapFields(["hint.show","senpai.hints","senpai.kohis"]), // use this hints instread
  },
};
</script>

<style scoped>
@import "~/assets/css/button.css";
.root {
            border-radius: 12px;
            box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
            display: flex;
            align-items: center;
            padding: 8px;
            margin-top: 5px;
            margin-bottom: 5px;
            box-sizing: border-box;
        }

        .circle {
            width: 56px;
            height: 56px;
            border-radius: 32px;
            margin: 8px;
        }

        .text {
            font-size: 14px;
            margin: 0;
        }
</style>
