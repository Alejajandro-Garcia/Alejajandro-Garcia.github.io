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
        <a href="/files/Alejandro_Garcia_CV.pdf" download>[resume]</a>
      </div>
      <div class="panel__body">
        <slot />
      </div>
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
  max-width: 30vw;
  height: var(--media-h);
  overflow-y: auto;
}
.panel__nav {
  display: flex;
  justify-content: space-evenly;
  padding: 10px 0;
}
.panel__body {
  border-style: ridge;
  padding: 10px 16px;
  font-size: 0.6em;
  line-height: 1.3em;
  text-shadow: none;
  min-height: 20dvh;
}
</style>
