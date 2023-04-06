<template>
  <h1>Reaction Timer</h1>
  <button @click="start" :disabled="isPlaying">Play</button>
  <Block v-if="isPlaying" :delay="delay" @end="endGame"/>
  <p v-if="showResults">Reaction Time: {{ score }} ms</p>
  <Results />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Block from "./components/Block.vue";
import Results from "./components/Results.vue";

export default defineComponent({
  name: "App",
  components: { Block, Results },
  data() {
    return {
      isPlaying: false,
      delay: null as any,
      score: null as any,
      showResults: false,
    };
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      this.showResults = false
    },
    endGame(reactionTime: number) {
      this.score = reactionTime
      this.isPlaying = false
      this.showResults = true
    }
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
</style>
