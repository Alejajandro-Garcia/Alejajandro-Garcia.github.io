<script setup lang="ts">
import { MODES } from "../modes";
</script>

<template>
  <div class="grid-container">
    <div class="container">
      <p style="margin: 5px 0; font-size: 1.6rem">[alejandro garcia]</p>
      <button @click="$emit('selectMode', MODES.ABOUT)">[about]</button>
      <button @click="$emit('selectMode', MODES.EXPERIENCE)">
        [experience]
      </button>
      <button @click="$emit('selectMode', MODES.RESUME)">[resume]</button>
      <div style="display: flex; align-items: center">
        <img src="/img/linked-in.png" />
        <img style="height: 26px" src="/img/github.png" />
        <img src="/img/email.png" />
      </div>
    </div>
  </div>
</template>

<style>
.grid-container {
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0 40px;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 15px;
}
img {
  margin: 0 0 0 8px;
}
</style>
