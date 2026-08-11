<script setup lang="ts">
import { ref } from "vue";
import CRTOverlay from "./components/CRTOverlay.vue";
import NavMenu from "./components/NavMenu.vue";
import AboutSection from "./components/AboutSection.vue";
import ExperienceSection from "./components/ExperienceSection.vue";
import AboutExperienceContainer from "./components/AboutExperienceContainer.vue";

const MODES = {
  HOME: "home",
  ABOUT: "about",
  EXPERIENCE: "experience",
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
      <AboutExperienceContainer
        v-if="selectedMode === MODES.ABOUT || selectedMode === MODES.EXPERIENCE"
        @select-mode="selectMode"
      >
        <AboutSection v-if="selectedMode === MODES.ABOUT" />
        <ExperienceSection v-if="selectedMode === MODES.EXPERIENCE" />
      </AboutExperienceContainer>
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
