const renderDashboardProfile = () => {
  const user = JSON.parse(localStorage.getItem("user")).find((user) => {
    return user.id == localStorage.getItem("whoLogin");
  });
  const content = `
  <section>
  <article>
  <p>nama : ${user.name}</p>
  <p>username : ${user.username}</p>
  <p>password : ${user.password}</p>
  <p>role : ${user.role}</p>
  <p>id : ${user.id}</p>
  </article>
  </section>
  `;
  render("#content", content);
};
