<script lang="ts" setup>
import TheHeader from "./components/TheHeader.vue";
import TheImageCol from "./components/TheImageCol.vue";
import TheSettings from "./components/TheSettings.vue";
</script>

<template>
  <v-app>
    <v-main>
      <v-row
        class="flex-column"
        justify="center"
        align="center"
        style="height: 100vh"
      >
        <TheHeader />
        <v-row no-gutters justify="center" style="width: 100vh">
          <TheImageCol ref="imageCol" />
          <TheSettings />
        </v-row>
      </v-row>
    </v-main>
  </v-app>
</template>

<style>
@font-face {
  font-family: "Impact";
  src: local("Impact"), url(./assets/fonts/Impact/impact.ttf) format("truetype");
}

html,
body {
  min-height: 100vh;
  background-color: #121212;
}
</style>
