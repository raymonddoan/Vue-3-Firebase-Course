const app = Vue.createApp({
  data() {
    return {
      title: "Power of Vue",
      author: "Ray Doan",
      age: 30,
      isShown: true,
      // buttonText: "Hide Books",
    };
  },
  methods: {
    changeTitle(title) {
      // this.title = 'Words of Wisdom'
      this.title = title;
    },
    toggleBooks() {
      this.isShown = !this.isShown;
      // this.buttonText = this.isShown ? "Hide Books" : "Show Books";
    },
  },
  computed: {
    // buttonText() {
    //   return this.isShown ? "Hide Books" : "Show Books"
    // } 
  },
});

app.mount("#app");
