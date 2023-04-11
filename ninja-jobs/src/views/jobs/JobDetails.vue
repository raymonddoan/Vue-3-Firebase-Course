<template lang="">
  <h1>Job Details Page</h1>
  <p>The job id is a {{ id }}</p>
</template>
<script lang="ts">
export default {
  data() {
    return {
      id: this.$route.params.id
    }
  }
};
</script>
<style lang=""></style>
