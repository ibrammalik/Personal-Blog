const login = () => {
  const userDB = JSON.parse(localStorage.getItem("user"));
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  for (let i = 0; i < userDB.length; i++) {
    if (userDB[i].username == username) {
      if (userDB[i].password == password) {
        localStorage.setItem("whoLogin", userDB[i].id);
        renderDashboard();
      } else {
        toast.show("Password Salah!");
      }
      return;
    }
  }
  toast.show("Username Tidak Ditemukan!");
};

const logOut = () => {
  localStorage.removeItem("whoLogin");
  renderDashboard();
};

const renderDashboard = () => {
  const whoLogin = localStorage.getItem("whoLogin");
  if (whoLogin == null) {
    const sideContent = `
    <h2><b>LOGIN</b></h2>
    <img class="fakeimg float-eff" style="object-fit:cover;border-radius: 50%;width: 200px;height:200px;"></img><br>
    <form style="display: flex; flex-direction: column; gap: 5px;">
      <label>username</label>
      <input type="text" id="username"/>
      <label>password</label>
      <input type="password" id="password"/>
      <button type="button" onclick="{login()}"><b>LOGIN</b></button>
    </form>
    `;
    render("#content", "Silahkan terlebih dahulu");
    render(".side", sideContent);
  } else if (whoLogin) {
    const allUser = JSON.parse(localStorage.getItem("user"));
    for (let i = 0; i < allUser.length; i++) {
      if (allUser[i].id == whoLogin) {
        const mainContent = `
          <h2 class="greeting">Selamat Datang, ${allUser[i].name}</h2>
        `;
        const sideContent = `
        <h2>${allUser[i].name}</h2>
        <img class="menu float-eff profile"></img><br>
        <div class="menu float-eff" onclick={renderDashboardPost()}>Manage Post</div><br>
        <div class="menu float-eff" onclick={renderDashboardUser()}>Manage User</div><br>
        <div class="menu float-eff" onclick={renderDashboardProfile()}>My Profile</div><br>
        <div class="menu float-eff" onclick={logOut()}>Log Out</div>
        `;
        render("#content", mainContent);
        render(".side", sideContent);
      }
    }
  }
  scrollToTop(sticky);
};
