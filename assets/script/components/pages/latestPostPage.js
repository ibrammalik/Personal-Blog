//fungsi untuk merender post terakhir berdasarkan semua post yang disimpan di local storage
const renderLatestPost = () => {
  renderAboutMe();
  localStorage.setItem("openedPage", "latestPost");
  const content = JSON.parse(localStorage.getItem("post"))
    .sort((a, b) => {
      return b.timestamp - a.timestamp;
    })
    .map((post) => {
      const mappedContent = `
      <article class="float-eff" onclick="{openPost(this)}" id=${post.id}>
        <h2>${post.judul}</h2>
        <h5>${new Date(post.timestamp).toDateString()} , ${post.author}</h5>
        <img style="object-fit: cover; width: 100%; height:300px;" src="${post.heroImage}"></img>
        <p classname=".txof-ellipsis">${post.content.substring(0, 200)}<span><br><b style="color: grey;">Baca Selengkapnya.....</b></span></p>
        <p>${[...post.tags].map((tag) => `<span class="tag">#${tag}</span>`).join(``)}</p>
      </article><br>
      `;
      return mappedContent;
    })
    .slice(0, 3)
    .join(``);
  const header = `<header><h2>Latest Post</h2></header><br>`;
  render("#content", header + content);
};
