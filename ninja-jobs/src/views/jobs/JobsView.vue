<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id">
    <h2>{{ job.title }}</h2>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      jobs: [
        {
          title: "Software Developer",
          id: 1,
          details: "Developing the software",
        },
        {
          title: "Software Designer",
          id: 2,
          details: "Designing the software",
        },
        { title: "Engineering Manager", id: 3, details: "Managing the team" },
      ],
    };
  },
};
</script>
