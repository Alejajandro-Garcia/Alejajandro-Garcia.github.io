<script setup lang="ts">
import experience from "../experience.json";
</script>

<template>
  <div style="display: flex; flex-direction: row">
    <div
      v-for="project in experience"
      :key="project.project_name"
      style="padding: 6px 4px; width: 48%; border-style: dashed"
    >
      <div style="height: 100px; width: 250px">
        <img
          style="width: 100%; height: 100%; object-fit: contain"
          :src="project.image_src"
          :alt="project.alt_image"
        />
      </div>
      <h3>{{ project.project_name }}</h3>
      <p class="dates">{{ project.start_date }} - {{ project.end_date }}</p>
      <p>{{ project.summary }}</p>
      <div class="technologies">
        <h4
          v-for="skill in project.technologies"
          :key="skill"
          style="font-weight: 400; margin: 0"
        >
          {{ skill }}
        </h4>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
</style>
