const app = Vue.createApp({
  data() {
    return {
      title: "Power of Vue",
      author: "Ray Doan",
      age: 30,
      isShown: true,
      buttonText: "Hide Quotes",
      posX: 0,
      posY: 0,
      quotes: [],
    };
  },
  created() {
    this.getRandomQuotes().then((res) => {
      let response = res.slice(0, 5);
      response.forEach((element) => {
        if (!element.anime.includes(" ")) {
          element.isFav = true;
        } else {
          element.isFav = false;
        }
      });
      this.quotes = response;
    });
  },
  methods: {
    changeTitle(title) {
      // this.title = 'Words of Wisdom'
      this.title = title;
    },
    toggleBooks() {
      this.isShown = !this.isShown;
      this.buttonText = this.isShown ? "Hide Quotes" : "Show Quotes";
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      return data ? console.log(data) : null;
    },
    handleMousemove(e) {
      this.posX = e.offsetX;
      this.posY = e.offsetY;
    },
    toggleBook(e, data) {
      e.preventDefault();
      data.isFav = !data.isFav;
    },
    async getRandomQuotes() {
      let quotes = fetch("https://animechan.vercel.app/api/quotes").then(
        (response) => response.json()
      );
      return quotes;
    },
  },
  mounted() {},
  computed: {
    // buttonText() {
    //   return this.isShown ? "Hide Quotes" : "Show Quotes"
    // }
  },
});

app.mount("#app");
