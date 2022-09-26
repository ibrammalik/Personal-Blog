// Get the navbar
const navbar = document.getElementById("navbar");

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// fungsi untuk toggle navbar
const toggleMenu = () => {
  const navbarMenu = document.querySelectorAll(".navbar a");
  for (menu of navbarMenu) {
    if (menu.style.display == "") {
      menu.style.display = "block";
    } else if (menu.style.display == "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  }
};

// ketika pengguna melakukan scroll, jalankan fungsi sticky navbar
window.onscroll = function () {
  myFunction();
};

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    document.querySelector(".row").style.paddingTop = "70px";
  } else {
    navbar.classList.remove("sticky");
    document.querySelector(".row").style.paddingTop = "0px";
  }
}

//fungsi untuk scroll ke atas berdasarkan argumen yang diberikan
const scrollToTop = (howFar) => {
  document.body.scrollTop = howFar; // For Safari
  document.documentElement.scrollTop = howFar; // For Chrome, Firefox, IE and Opera
};

//fungsi untuk merender berdasarkan argumen yaitu element selector dan content yang berbentuk string
function render(elementSelector, contentString) {
  document.querySelector(elementSelector).innerHTML = contentString;
}

//fungsi untuk merender latest post di home page dalam 10 detik setelah website dibuka
setTimeout(() => {
  renderLatestPost();
}, 10000);
