<template lang="">
  <h1>Job Details Page</h1>
  <p>The job id is a {{ id }}</p>
</template>

<script lang="ts">
export default {
  props: ['id'],
  // data() {
  //   return {
  //     id: this.$route.params.id
  //   }
  // }
};
</script>
