<template>
  <div>
    <p>Reaction Time: {{ score }} ms</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['score']
})
</script>

<style scoped>

</style>