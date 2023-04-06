<template>
  <div class="block" v-if="showBlock" @click="stopTimer">click me</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["delay"],
  data() {
    return {
      showBlock: false,
      timer: null as any,
      reactionTime: 0,
    };
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },
    stopTimer() {
      clearInterval(this.timer);
      console.log(this.reactionTime);
    },
  },
  mounted() {
    // console.log("component mounted");
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer()
      // console.log(this.delay);
    }, this.delay);
  },
  updated() {
    // console.log("component updated");
  },
  unmounted() {
    // console.log("unmounted");
  },
});
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
