//fungsi untuk membuka post ketika post card di klik
const openPost = (element) => {
  const allPost = JSON.parse(localStorage.getItem("post"));
  let selectedPost;
  for (post of allPost) {
    if (post.id == element.getAttribute("id")) {
      selectedPost = `
              <h3 style="cursor: pointer;" id="back-button" onclick={back()}>< Back</h3>
              <article >
              <h1>${post.judul}</h1>
              <h5>${new Date(post.timestamp).toDateString()} , ${post.author}</h5>
              <img style="object-fit: cover; width: 100%; height:200px;" src="${post.heroImage}" alt="hero image"></img><br><br>
              <div style="line-height: 1.8; text-align:justify;">${post.content}</div>
              </article><br>
              `;
    }
  }
  render("#content", selectedPost);
  scrollToTop(sticky);
};

const back = () => {
  const getOpenedPage = () => {
    return localStorage.getItem("openedPage");
  };
  if (getOpenedPage() == "latestPost") {
    renderLatestPost();
  } else if (getOpenedPage() == "allPost") {
    allPostPage();
  } else if (getOpenedPage() == "dashboardPost") {
    renderDashboardPost();
  }
};
