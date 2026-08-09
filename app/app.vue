<script setup>
import CRTOverlay from "./components/CRTOverlay.vue";
</script>
<template>
  <CRTOverlay>
    <div
      style="display: grid; grid-template-columns: 1fr 1fr; min-height: 100dvh"
    >
      <div
        style="
          display: flex;
          align-items: center;
          justify-content: end;
          padding: 0 40px;
        "
      >
        <div style="display: flex; flex-direction: column; align-items: end">
          <p style="margin: 5px 0; font-size: 1.6em">[alejandro garcia]</p>
          <p style="margin: 5px 0">[about]</p>
          <p style="margin: 5px 0">[experience]</p>
          <p style="margin: 5px 0">[resume]</p>
          <div style="display: flex; align-items: center">
            <img style="margin: 0 8px" src="/img/linked-in.png" />
            <img
              style="margin: 0 8px; height: 26px; width: 28px"
              src="/img/github.png"
            />
            <img
              style="margin: 0 8px; height: 28px; width: 28px"
              src="/img/email.png"
            />
          </div>
        </div>
      </div>
      <div style="display: flex; align-items: center">
        <img
          height="500"
          src="/img/dithering-effect.png"
          alt="Berkeley Hotel Picture"
        />
      </div></div
  ></CRTOverlay>
</template>
