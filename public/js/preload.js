/**
 * Gets all links on a page, adds mouseover listeners and triggers a page preload on hover
 */

const links = document.querySelectorAll("a");
links.forEach((link) => {
  link.addEventListener("mouseover", (event) => {
    event.preventDefault();
    preloadPage(link.href);
  });
});

function preloadPage(url) {
  fetch(url, { method: "GET", mode: "no-cors" })
    .then((response) => {
      console.log(`Preloaded: ${url}`);
    })
    .catch((error) => {
      console.error(`Failed to preload: ${url}`, error);
    });
}
