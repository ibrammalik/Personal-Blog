const user = [
  {
    id: 1,
    username: "maulanami",
    password: "12345",
    name: "Maulana Malik Ibrahim",
    role: "admin",
  },
  {
    id: 2,
    username: "dicoding",
    password: "dicodingjoss",
    name: "dicoding.com",
    role: "admin",
  },
];

if (localStorage.getItem("user") == null || localStorage.getItem("user") === "[]") {
  localStorage.setItem("user", JSON.stringify(user));
}
