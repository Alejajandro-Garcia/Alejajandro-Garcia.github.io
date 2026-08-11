<script setup lang="ts">
import { ref } from "vue";
import CRTOverlay from "./components/CRTOverlay.vue";
import NavMenu from "./components/NavMenu.vue";
import AboutSection from "./components/AboutSection.vue";

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
      <AboutSection
        v-if="selectedMode === MODES.ABOUT"
        @select-mode="selectMode"
      />
    </template>

    <template #right>
      <div class="hero">
        <img
          class="hero__img"
          src="/img/dithering-effect.png"
          alt="Berkeley Hotel Picture"
        />
      </div>
    </template>
  </CRTOverlay>
</template>

<style scoped>
.hero {
  display: flex;
  align-items: center;
}
.hero__img {
  height: var(--media-h);
  width: auto;
}
</style>
