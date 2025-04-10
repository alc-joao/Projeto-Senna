const navbarButton = document.getElementById('nav-button');
const navbarList = document.getElementById('nav-list');
const navLinks = document.getElementsByClassName('nav-link');

const animateLinks = () => {
  navLinks.forEach((link) => {
    console.log('ok')
    link.style.animation
    ? (link.style.animation = "")
    : (link.style.animation = `navLinkFade 0.5s ease forwards 0.3s`);
  });
};

console.log(navbarButton)

document.getElementById('nav-button').addEventListener('click', function () {
  console.log('ok')
  // navbarList.classList.toggle('active');
  navbarList.classList.toggle('active');
  navbarButton.classList.toggle('active');
  animateLinks;
})