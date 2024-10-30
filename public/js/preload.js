// Track preloaded pages
const preloadedPages = new Array();

// Get all links on the page
const links = document.querySelectorAll("a");

// Add hover event listener to each link
links.forEach((link) => {
  link.addEventListener("mouseover", (event) => {
    event.preventDefault();

    // Preload the url
    preload(link.href);
  });
});

async function preload(url) {
  // Only preload if the page hasn't been preloaded yet
  if (!preloadedPages.includes(url)) {
    // Fetch the page
    await fetch(url, { method: "GET", mode: "no-cors" });

    // Push to tracking array
    preloadedPages.push(url);
    console.log(`Preloaded: ${url}`);
  }
}
