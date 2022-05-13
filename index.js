// const SERVICE_URL = "https://jsonplaceholder.typicode.com/users";
const userCardTemplate = document.querySelector("[data-user-template]");
const userCardsContainer = document.querySelector(
  "[data-user-cards-container]"
);
const searchInput = document.querySelector("[data-search]");
console.log(searchInput);

let users = [
  {
    "name": "Leanne Graham",
    "email": "Sincere@april.biz",
    "element": {}
  },
  {
    "name": "Ervin Howell",
    "email": "Shanna@melissa.tv",
    "element": {}
  },
  {
    "name": "Clementine Bauch",
    "email": "Nathan@yesenia.net",
    "element": {}
  },
  {
    "name": "Patricia Lebsack",
    "email": "Julianne.OConner@kory.org",
    "element": {}
  },
  {
    "name": "Chelsey Dietrich",
    "email": "Lucio_Hettinger@annie.ca",
    "element": {}
  },
  {
    "name": "Mrs. Dennis Schulist",
    "email": "Karley_Dach@jasper.info",
    "element": {}
  },
  {
    "name": "Kurtis Weissnat",
    "email": "Telly.Hoeger@billy.biz",
    "element": {}
  },
  {
    "name": "Nicholas Runolfsdottir V",
    "email": "Sherwood@rosamond.me",
    "element": {}
  },
  {
    "name": "Glenna Reichert",
    "email": "Chaim_McDermott@dana.io",
    "element": {}
  },
  {
    "name": "Clementina DuBuque",
    "email": "Rey.Padberg@karina.biz",
    "element": {}
  }
]

searchInput.addEventListener("input", (event) => {
  const value = event.target.value.toLowerCase();
  console.log(value);
  console.log(users);
  users.forEach((user) => {
    const isVisible =
      user.name.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value);
    user.element.classList.toggle("hide", !isVisible);
  });
});

// fetch(SERVICE_URL)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);

//   });



(function () {
  users = users.map((user) => {
      const card = userCardTemplate.content.cloneNode(true).children[0];
      const header = card.querySelector("[data-header]");
      const body = card.querySelector("[data-body]");
      header.textContent = user.name;
      body.textContent = user.email;
      userCardsContainer.appendChild(card);
      return { name: user.name, email: user.email, element: card };
    });
})();