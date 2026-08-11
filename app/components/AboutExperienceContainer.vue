<script setup lang="ts">
import { MODES } from "../modes";
</script>

<template>
  <div class="panel">
    <div class="panel__inner">
      <div class="panel__nav">
        <button @click="$emit('selectMode', MODES.HOME)">[home]</button>
        <button @click="$emit('selectMode', MODES.ABOUT)">[about]</button>
        <button @click="$emit('selectMode', MODES.EXPERIENCE)">
          [experience]
        </button>
        <button @click="$emit('selectMode', MODES.RESUME)">[resume]</button>
      </div>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  padding: 0 16px;
}
.panel__inner {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  max-width: 20vw;
  height: var(--media-h);
  overflow-y: auto;
}
.panel__nav {
  display: flex;
  justify-content: space-evenly;
  padding: 10px 0;
}
</style>
