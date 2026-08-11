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
      <a href="/files/Alejandro_Garcia_CV.pdf" download>[resume]</a>
      <div style="display: flex; align-items: center">
        <a
          href="https://www.linkedin.com/in/alejandro-garcia-1022441a1/"
          target="_blank"
        >
          <img src="/img/linked-in.png"
        /></a>
        <a href="https://github.com/Alejajandro-Garcia" target="_blank">
          <img style="height: 26px" src="/img/github.png"
        /></a>
        <a href="mailto:josealegar19@gmail.com">
          <img src="/img/email.png"
        /></a>
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
