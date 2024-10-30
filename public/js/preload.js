// Track preloaded pages
const preloadedPages = new Array();

// Get all links on the page
const links = document.querySelectorAll("a");

// Add hover event listener to each link
links.forEach((link) => {
  // Desktop
  link.addEventListener("mouseover", (event) => {
    preload(link.href);
  });
  // Mobile
  link.addEventListener("touchstart", (event) => {
    preload(link.href);
  });
});

async function preload(url) {
  // Only preload if the page hasn't been preloaded yet
  if (!preloadedPages.includes(url)) {
    // Remove last segment and host to get collection slug
    const collectionSlug = url.split("/").slice(-2, -1)[0];

    // Push to tracking array
    preloadedPages.push(url);

    // Fetch the page
    const res = await fetch(url /*, { method: "GET", mode: "no-cors" }*/);
    const doc = await res.text();

    // Get all img tags in the fetched page
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(doc, "text/html");
    const images = htmlDoc.querySelectorAll("img");

    // Preload images
    images.forEach((img) => {
      const imgElement = new Image();

      // Inject collection slug after public and before the image path
      const imgSrcNew = img.src.replace(
        "/public/",
        `/public/${collectionSlug}/`
      );
      imgElement.src = imgSrcNew;
    });

    console.log(`Preloaded: ${url}`);
  }
}
