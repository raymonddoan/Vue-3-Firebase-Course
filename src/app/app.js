const app = Vue.createApp({
  data() {
    return {
      title: "Power of Vue",
      author: "Ray Doan",
      age: 30,
      isShown: true,
      buttonText: "Hide Books",
      posX: 0,
      posY: 0,
      books: [
        { title: "Power of Vue", author: "Evan You" },
        { title: "Extremity", author: "Raymond Doan" },
        { title: "Design of Designs", author: "Trevor Scott" },
      ],
    };
  },
  methods: {
    changeTitle(title) {
      // this.title = 'Words of Wisdom'
      this.title = title;
    },
    toggleBooks() {
      this.isShown = !this.isShown;
      this.buttonText = this.isShown ? "Hide Books" : "Show Books";
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      return data ? console.log(data) : null;
    },
    handleMousemove(e) {
      this.posX = e.offsetX;
      this.posY = e.offsetY;
    },
  },
  computed: {
    // buttonText() {
    //   return this.isShown ? "Hide Books" : "Show Books"
    // }
  },
});

app.mount("#app");
