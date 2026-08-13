<script setup lang="ts">
import experience from "../experience.json";
</script>

<template>
  <div class="experience-container">
    <div
      v-for="project in experience"
      :key="project.project_name"
      class="project"
    >
      <div class="img-container">
        <img
          class="project-img"
          :src="project.image_src"
          :alt="project.alt_image"
        />
      </div>
      <h3>{{ project.project_name }}</h3>
      <p class="dates">{{ project.start_date }} - {{ project.end_date }}</p>
      <p>{{ project.summary }}</p>
      <ul class="technologies">
        <li
          style="line-height: 0.6em"
          v-for="skill in project.technologies"
          :key="skill"
        >
          {{ skill }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.experience-container {
  display: flex;
  flex-direction: row;
}
.project {
  padding: 6px 4px;
  width: 48%;
  border-style: dashed;
}

.img-container {
  height: 200px;
  width: 100%;
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.dates {
  margin-bottom: 8px;
}
h3 {
  margin-bottom: 4px;
}
p {
  margin: 0;
}
.technologies {
  list-style: none;
  margin-top: 10px;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
@media screen and (min-width: 1025px) and (max-width: 1500px) {
  .img-container {
    height: 100px;
    width: 100%;
  }
}
</style>
