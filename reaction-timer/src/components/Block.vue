<template>
  <div class="block">
    click me
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['delay']
})
</script>

<style scoped>
.block {
  width: 400px;
  border-radius: 20px;
  background: #0faf87;
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>