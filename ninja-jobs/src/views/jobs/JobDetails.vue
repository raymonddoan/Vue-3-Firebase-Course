<template lang="">
  <div v-if="job.id">
    <h1>Job Details Page</h1>
    <p>The job title is a {{ job.title }}</p>
    <p>The job id is a {{ job.id }}</p>
  </div>
  <div v-else>Loading JSON data...</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export interface Job {
  title: string;
  id: number;
  details: string;
}

export default defineComponent({
  props: ["id"],
  data() {
    return {
      // id: this.$route.params.id
      job: {} as Job,
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch((err) => console.log(err.message));
  },
});
</script>
