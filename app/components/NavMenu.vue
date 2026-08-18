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
      <a class="resume" href="/files/Alejandro_Garcia_CV.pdf" download
        >[resume]</a
      >
      <div style="display: flex; align-items: center">
        <a
          class="img-link"
          href="https://www.linkedin.com/in/alejandro-garcia-1022441a1/"
          target="_blank"
        >
          <img src="/img/linked-in.png"
        /></a>
        <a
          class="img-link"
          href="https://github.com/Alejajandro-Garcia"
          target="_blank"
        >
          <img style="height: 26px" src="/img/github.png"
        /></a>
        <a class="img-link" href="mailto:josealegar19@gmail.com">
          <img src="/img/email.png"
        /></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
.resume:hover {
  background-color: wheat;
  color: black;
}
img {
  margin: 0 0 0 8px;
  animation: dropShadow 1.6s infinite;
}
img:hover {
  background-color: wheat;
}
.img-link:hover {
  background-color: transparent;
}
</style>
