<template>
  <div>
    <p>Reaction Time: {{ score }} ms</p>
    <p>Rank: {{ rank }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["score"],
  data() {
    return {
      rank: "",
    };
  },
  mounted() {
    if (this.score < 250) {
      this.rank = "Finger Bangerz";
    } else if (this.score < 400) {
      this.rank = "Speedy Gonzalez";
    } else {
      this.rank = "Turtle wins the race";
    }
  },
});
</script>

<style scoped></style>
