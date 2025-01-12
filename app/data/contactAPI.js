export const ContactsAPI = {
  contacts: [
    {
      picture:
        "https://media.vogue.co.uk/photos/636d2aad41d61cb9a3386992/2:3/w_1920,c_limit/GettyImages-1243944955.jpg",
      name: "Anne Hathaway",
      number: "123-4567",
      email: "anne@anne.com",
    },
    {
      picture:
        "https://hollywoodreporter.com/wp-content/uploads/2024/12/35fea_producer-MAIN-003_GA_210518_295-1-SPLASH-2024.jpg?w=2000&h=1126&crop=1&resize=1000%2C563",
      name: "Ryan Reynolds",
      number: "234-5678",
      email: "ryanlovesblake@ryan.com",
    },
    {
      picture:
        "https://resizing.flixster.com/ninRvoG8jGaRZF-2adtzCmfucns=/218x280/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/313474_v9_bb.jpg",
      name: "Elle Fanning",
      number: "345-6789",
      email: "elle@elle.com",
    },
  ],
  all: function () {
    return this.contacts;
  },
  get: function (id) {
    const isContact = (c) => c.number === id;
    return this.contacts.find(isContact);
  },
  addContact: function ({ picture, name, number, email }) {
    this.contacts.push({ picture, name, number, email });
  },
};
