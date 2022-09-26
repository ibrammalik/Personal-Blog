const deletePost = (element) => {
  const selectedPostId = element.parentElement.id;
  const allPost = JSON.parse(localStorage.getItem("post"));
  for (let i = 0; i < allPost.length; i++) {
    if (selectedPostId == allPost[i].id) {
      allPost.splice(i, 1);
    }
  }
  console.log(allPost);
  localStorage.setItem("post", JSON.stringify(allPost));
  renderDashboardPost();
  toast.show("Artikel berhasil dihapus!");
};

const uploadPost = () => {
  const id = Math.floor(Math.random() * 1000000);
  const judul = document.getElementById("judul").value;
  const timestamp = Date.now();
  const author = JSON.parse(localStorage.getItem("user")).find((user) => {
    return user.id == localStorage.getItem("whoLogin");
  }).name;
  const heroImage = document.getElementById("urlBanner").value;
  const tags = document.getElementById("tag").value.split(",");
  const content = document.getElementById("isiArtikel").value;
  const allPost = JSON.parse(localStorage.getItem("post"));
  allPost.push({
    id,
    judul,
    timestamp,
    author,
    heroImage,
    tags,
    content,
  });
  localStorage.setItem("post", JSON.stringify(allPost));
  renderDashboardPost();
  toast.show("Horee...Artikel berhasil di upload....");
};

const addPost = () => {
  content = `
  <form onsubmit={return false} id="formAddPost">
  <label>judul</label>
  <input id="judul"></input>
  <label>URL Banner</label>
  <input id="urlBanner"></input>
  <label>Isi artikel</label>
  <input id="isiArtikel"></input>
  <label>Tag</label>
  <input id="tag"></input>
  <button type="button" onclick={uploadPost(this)}>Post</button>
  </form>
  `;
  render("#content", content);
};

const renderDashboardPost = () => {
  localStorage.setItem("openedPage", "dashboardPost");
  const content = JSON.parse(localStorage.getItem("post"))
    .map((post) => {
      const mappedContent = `
                <article class="float-eff" id="${post.id}">
                    <h3>${post.judul}</h3>
                    <h5>${new Date(post.timestamp).toDateString()} , ${post.author}</h5>
                    <button onclick={deletePost(this)}>Hapus</button>
                    <button onclick={openPost(this.parentElement)}>Lihat</button>
                    <button>Edit</button>
                </article>
            `;
      return mappedContent;
    })
    .join(``);
  const realContent = `
    <button onclick={addPost()}>Tambah Post</button>
    <section>
    ${content}
    </section>
    `;
  render("#content", realContent);
};
