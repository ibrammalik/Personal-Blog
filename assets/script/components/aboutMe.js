const renderAboutMe = () => {
  content = `
  <h2>About Me</h2>
  <img class="fakeimg float-eff" style="object-fit:cover;border-radius: 50%;max-width: 200px;"
      src="./assets/images/foto.jpg"></img>
  <p style="text-align: justify;">Hallo Semuanya, Saya Maulana Malik Ibrahim. Disini saya akan membagikan
      tutorial, tips, dan trick tentang
      coding dan developing
  </p>
  <h3>Social Media</h3>
  <div class="fakeimg float-eff" style="height:60px;">Email</div><br>
  <div class="fakeimg float-eff" style="height:60px;">Github</div><br>
  <div class="fakeimg float-eff" style="height:60px;">Instagram</div><br>
  <div class="fakeimg float-eff" style="height:60px;">LinkedIn</div>
  `;
  render(".side", content);
};
