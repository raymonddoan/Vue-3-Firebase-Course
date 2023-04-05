<template>
  <h1>{{ title }}</h1>
  <br />
  <input type="text" ref="name" />
  <button @click="handleClick">click me</button>
  <Modal />
</template>

<script lang="ts">
import "@total-typescript/ts-reset";
import { defineComponent } from "vue";
import Modal from "./components/Modal.vue";

export default defineComponent({
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "My First Vue App :)",
    };
  },
  methods: {
    handleClick() {
      const name = this.$refs["name"] as any;
      name.classList.add("active");
      name.focus();
    },
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #2c3e50;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
