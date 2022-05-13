const SERVICE_URL = "https://jsonplaceholder.typicode.com/users";
const userCardTemplate = document.querySelector("[data-user-template]");
const userCardsContainer = document.querySelector(
  "[data-user-cards-container]"
);
const searchInput = document.querySelector("[data-search]");

let users = [];

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

fetch(SERVICE_URL)
  .then((response) => response.json())
  .then((data) => {
    users = data.map((user) => {
      const card = userCardTemplate.content.cloneNode(true).children[0];
      const header = card.querySelector("[data-header]");
      const body = card.querySelector("[data-body]");
      header.textContent = user.name;
      body.textContent = user.email;
      userCardsContainer.appendChild(card);
      return { name: user.name, email: user.email, element: card };
    });
  });
