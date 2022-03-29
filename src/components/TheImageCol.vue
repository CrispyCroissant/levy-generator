<script lang="ts" setup>
import useFontStore from "@/stores/fontStore";
import { storeToRefs } from "pinia";

const { topImageText, bottomImageText, topFontSize, bottomFontSize } =
  storeToRefs(useFontStore());
</script>

<template>
  <v-col id="image" class="d-flex flex-column justify-center">
    <v-img
      alt="A smug Levy Rozman"
      src="@/assets/happy.webp"
      max-height="300px"
      aspect-ratio="1"
    >
      <v-row justify="center" align="end" class="full-height">
        <p class="meme-text" :style="{ 'font-size': topFontSize + 'px' }">
          {{ topImageText }}
        </p>
      </v-row>
    </v-img>
    <v-img
      alt="A completely destroyed Levy Rozman"
      src="@/assets/rip.webp"
      max-height="300px"
      aspect-ratio="1"
    >
      <v-row justify="center" align="end" class="full-height">
        <p class="meme-text" :style="{ 'font-size': bottomFontSize + 'px' }">
          {{ bottomImageText }}
        </p>
      </v-row>
    </v-img>
  </v-col>
</template>

<style scoped>
.meme-text {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  color: white;
  font-size: 40px;
  text-shadow: 0px 3px 7px #000, 0px 3px 7px #000;
}
.full-height {
  height: 100%;
}
</style>
