<template>
  <h1>{{ title }}</h1>
  <br />
  <input type="text" ref="name" />
  <button @click="handleClick">click me</button>
  <br />
  <p>Welcome ...</p>
  <button @click.alt="toggleModal">
    open modal (please hold alt while clicking)
  </button>
  <p>Welcome to the beast of the jungle</p>
  <button @click="toggleModalTwo">
    Show yourself
  </button>

  <div v-if="showModal">
    <Modal :theme="theme" @close="toggleModal">
      <template v-slot:links>
        <a href="#">Sign up now</a>
        <a href="#">More info</a>
      </template>
      <h1>{{ header }}</h1>
      <p>{{ text }}</p>
    </Modal>
  </div>
  
  <teleport to=".modals" v-if="showModalTwo">
    <Modal :theme="theme" @close="toggleModalTwo">
      <h1>🦁 Rawr! You are in the ".modals" section 🦁</h1>
      <p>Welcome to the jungle</p>
    </Modal>
  </teleport>
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
      header: "This is a nice giveaway!",
      text: "You are the lucky winner!",
      theme: "",
      showModal: false,
      showModalTwo: false,
    };
  },
  methods: {
    handleClick() {
      const name = this.$refs["name"] as any;
      name.classList.add("active");
      name.focus();
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
    },
  },
});
</script>

<style>
#app, .modal {
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
