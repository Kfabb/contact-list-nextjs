export const ContactsAPI = {
  contacts: [
    {
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Anne_Hathaway-68211_%28cropped_2%29.jpg/440px-Anne_Hathaway-68211_%28cropped_2%29.jpg",
      firstName: "Anne",
      lastName: "Hathaway",
      number: "123-4567",
      email: "anne@anne.com",
    },
    {
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Deadpool_2_Japan_Premiere_Red_Carpet_Ryan_Reynolds_%28cropped%29.jpg/440px-Deadpool_2_Japan_Premiere_Red_Carpet_Ryan_Reynolds_%28cropped%29.jpg",
      firstName: "Ryan",
      lastName: "Reynolds",
      number: "234-5678",
      email: "ryanlovesblake@ryan.com",
    },
    {
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Elle_Fanning-1733_%28cropped%29.jpg/440px-Elle_Fanning-1733_%28cropped%29.jpg",
      firstName: "Elle",
      lastName: "Fanning",
      number: "345-6789",
      email: "elle@elle.com",
    },
  ],
  all: function () {
    return this.contacts;
  },
  get: function (id) {
    const isContact = (c) => c.lastName === id;
    return this.contacts.find(isContact);
  },
  addContact: function ({ picture, firstName, lastName, number, email }) {
    this.contacts.push({ picture, firstName, lastName, number, email });
  },
};
