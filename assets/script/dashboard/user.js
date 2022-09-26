const renderDashboardUser = () => {
  const header = `<button onclick={renderAddUser()}>Tambah Pengguna</button>`;
  const content = JSON.parse(localStorage.getItem("user"))
    .map((user) => {
      const mappedContent = `
            <article id="${user.id}">
                <h3>${user.username}</h3>
                <p>ID:${user.id}</p>
                <button onclick={deleteUser(this)}>Hapus</button>
                <button onclick={openDetailUser(this)}>Lihat</button>
                <button>Edit</button>
            </article>
        `;
      return mappedContent;
    })
    .join(``);

  render("#content", header + content);
};

const renderAddUser = () => {
  const content = `
  <form onsubmit="{return false}">
  <label>username</label>
  <input></input>
  <label>password</label>
  <input></input>
  <label>name</label>
  <input></input>
  <label>role</label>
  <input></input>
  <button onclick={addUser(this.parentElement)} type="submit">Tambah User</button>
  </form>
  `;
  render("#content", content);
};

const addUser = (elements) => {
  let value = [];
  for (el of elements) {
    if (el.tagName == "INPUT") {
      value.push(el.value);
    }
  }
  const id = Math.floor(Math.random() * 1000000000);
  const username = value[0];
  const password = value[1];
  const name = value[2];
  const role = value[3];

  const allUser = JSON.parse(localStorage.getItem("user"));
  allUser.push({
    id,
    username,
    password,
    name,
    role,
  });

  localStorage.setItem("user", JSON.stringify(allUser));
  renderDashboardUser();
  toast.show("Pengguna baru berhasil ditambahkan.");
};

const deleteUser = (element) => {
  const selectedUserId = element.parentElement.id;
  const allUser = JSON.parse(localStorage.getItem("user"));
  let name;
  for (let i = 0; i < allUser.length; i++) {
    if (selectedUserId == allUser[i].id) {
      allUser.splice(i, 1);
    }
  }
  toast.show(`Pengguna dengan ID:${selectedUserId} berhasil dihapus`);
  localStorage.setItem("user", JSON.stringify(allUser));
  renderDashboardUser();
};

const openDetailUser = (element) => {
  const selectedUserId = element.parentElement.id;
  const user = JSON.parse(localStorage.getItem("user")).find((user) => {
    return user.id == selectedUserId;
  });
  const content = `
    <section>
      <p>id:${user.id}</p>
      <p>username:${user.username}</p>
      <p>password:${user.password}</p>
      <p>name:${user.name}</p>
      <p>role:${user.role}</p>
    </section>
  `;

  render("#content", content);
};
