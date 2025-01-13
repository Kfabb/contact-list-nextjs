export const ContactsAPI = {
  contacts: [
    {
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_OQbq7v9Qs8PZ7xtHStpuRJgOwJ5kavFPeR9ercMkbPQgrpE_0OrRC-37sw49ZFjtU20&usqp=CAU",
      name: "Kathryn Fabbroni",
      number: "14122166666",
      email: "kathrynfabbroni@gmail.com",
    },
    {
      picture:
        "https://hollywoodreporter.com/wp-content/uploads/2024/12/35fea_producer-MAIN-003_GA_210518_295-1-SPLASH-2024.jpg?w=2000&h=1126&crop=1&resize=1000%2C563",
      name: "Ryan Reynolds",
      number: "23456789011",
      email: "ryanlovesblake@ryan.com",
    },
    {
      picture:
        "https://resizing.flixster.com/ninRvoG8jGaRZF-2adtzCmfucns=/218x280/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/313474_v9_bb.jpg",
      name: "Elle Fanning",
      number: "34567890122",
      email: "elle@elle.com",
    },
  ],
  all: function () {
    return this.contacts;
  },
  get: function (id) {
    const isContact = (c) => c.number === c.key;
    return this.contacts.find(isContact);
  },
  addContact: function ({ picture, name, number, email }) {
    this.contacts.push({ picture, name, number, email });
  },
};
