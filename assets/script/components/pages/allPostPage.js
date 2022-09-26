//fungsi untuk mengurutkan all post dan merender kembali all post container ketika value dari select berubah
const sortByOnChangeHandler = (element) => {
  if (element.value == "oldest") {
    render("#all-post-container", getAllContent("oldest"));
  } else if (element.value == "latest") {
    render("#all-post-container", getAllContent("latest"));
  }
};

//fungsi untuk get content dari local storage
const getAllContent = (sort) => {
  const content = JSON.parse(localStorage.getItem("post"))
    .sort((a, b) => {
      if (sort == "oldest") {
        return a.timestamp - b.timestamp;
      } else if (sort == "latest") {
        return b.timestamp - a.timestamp;
      }
    })
    .map((post) => {
      const mappedContent = `
      <article class="float-eff" onclick="{openPost(this)}" id=${post.id} style="flex-grow:1;margin:5px;">
        <h2>${post.judul}</h2>
        <h5>${new Date(post.timestamp).toDateString()} , ${post.author}</h5>
        <img style="object-fit: cover; width: 100%; height:150px;" src="${post.heroImage}"></img>
      </article><br>
      `;
      return mappedContent;
    })
    .join(``);
  return content;
};

//fungsi untuk merender semua post
const allPostPage = () => {
  renderAboutMe();
  localStorage.setItem("openedPage", "allPost");
  const content = `
  <header style="display: flex; justify-content:space-between; align-items: center;">
    <h2>All Post</h2>
    <select style="margin-right:5px;" id="sort-by" onchange={sortByOnChangeHandler(this)}>
      <option >oldest</option>
      <option >latest</option>
    </select>
  </header>
  <br>
  <section id="all-post-container">
    ${getAllContent("oldest")}
  </section>
  `;
  render("#content", content);
};
