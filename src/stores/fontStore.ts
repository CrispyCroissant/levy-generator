import { defineStore } from "pinia";

const useFontStore = defineStore("fontStore", {
  state: () => {
    return {
      topImageText: "" as string,
      bottomImageText: "" as string,
      topFontSize: 40 as number,
      bottomFontSize: 40 as number,
    };
  },
});

export default useFontStore;
