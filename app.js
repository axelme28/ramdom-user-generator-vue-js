const app = Vue.createApp({
  data() {
    return {
      firstName: "Axel",
      lastName: "Mendez",
      email: "axel@axel.com",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/15.jpg",
    };
  },
  methods: {
    async getRandomUser() {
      const response = await fetch("https://randomuser.me/api/");
      const {
        results: [data],
      } = await response.json();
      const {
        name: { first, last },
        email,
        gender,
        picture: { large },
      } = data;
      this.firstName = first;
      this.lastName = last;
      this.email = email;
      this.gender = gender;
      this.picture = large;
    },
  },
});

app.mount("#app");
