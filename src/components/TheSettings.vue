<script lang="ts" setup>
import useFontStore from "@/stores/fontStore";
import { storeToRefs } from "pinia";
import html2canvas from "html2canvas";
import fileSaver from "file-saver";

const { topImageText, bottomImageText, topFontSize, bottomFontSize } =
  storeToRefs(useFontStore());

function saveAsJPG() {
  const elem = document.getElementById("image") as HTMLElement;
  const options = {
    windowHeight: 1080,
    windowWidth: 1920,
    height: 595,
    width: 480,
    y: 105,
    logging: false,
    scale: 1,
  };

  html2canvas(elem, options).then((canvas) => {
    const imageURL: string = canvas.toDataURL("image/jpg");
    fileSaver.saveAs(imageURL, "image");
  });
}
</script>

<template>
  <v-col class="d-flex flex-column justify-center ml-10">
    <v-form>
      <v-text-field
        clearable
        density="comfortable"
        label="Top image text"
        v-model="topImageText"
      ></v-text-field>
      <div class="mt-n5">
        <p class="text-caption">Font size</p>
        <v-slider
          v-model="topFontSize"
          label="Font size"
          thumb-label
          step="1"
          color="primary"
        ></v-slider>
      </div>
      <v-text-field
        clearable
        density="comfortable"
        label="Bottom image text"
        v-model="bottomImageText"
      ></v-text-field>
      <div class="mt-n5">
        <p class="text-caption">Font size</p>
        <v-slider
          v-model="bottomFontSize"
          label="Font size"
          thumb-label
          step="1"
          color="primary"
        ></v-slider>
      </div>
      <v-row class="mt-3" justify="center">
        <v-btn color="success" @click="saveAsJPG">Save</v-btn>
      </v-row>
    </v-form>
  </v-col>
</template>