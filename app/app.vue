<script setup lang="ts">
import { ref } from "vue";
import CRTOverlay from "./components/CRTOverlay.vue";
import NavMenu from "./components/NavMenu.vue";

const MODES = {
  HOME: "home",
  ABOUT: "about",
  EXPERIENCE: "experience",
  RESUME: "resume",
} as const;

type Mode = (typeof MODES)[keyof typeof MODES];

const selectedMode = ref<Mode>(MODES.HOME);

const selectMode = (mode: Mode) => {
  selectedMode.value = mode;
};
</script>
<template>
  <CRTOverlay>
    <template #left>
      <NavMenu v-if="selectedMode === MODES.HOME" @select-mode="selectMode" />
      <div v-if="selectedMode === MODES.ABOUT" @select-mode="selectMode">
        MEOW
      </div>
    </template>

    <template #right>
      <div style="display: flex; align-items: center">
        <img
          height="500"
          src="/img/dithering-effect.png"
          alt="Berkeley Hotel Picture"
        />
      </div>
    </template>
  </CRTOverlay>
</template>
