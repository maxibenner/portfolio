// // Track preloaded pages
// const preloadedPages = new Array();

// // Get all links on the page
// const links = document.querySelectorAll("a");

// // Add hover event listener to each link
// links.forEach((link) => {
//   // Desktop
//   link.addEventListener("mouseover", (event) => {
//     event.preventDefault();
//     preload(link.href);
//   });
//   // Mobile
//   link.addEventListener("touchstart", (event) => {
//     event.preventDefault();
//     preload(link.href);
//   });
// });

// async function preload(url) {
//   // Only preload if the page hasn't been preloaded yet
//   if (!preloadedPages.includes(url)) {
//     // Push to tracking array
//     preloadedPages.push(url);

//     // Fetch the page
//     const res = await fetch(url, { method: "GET", mode: "no-cors" });
//     const data = await res.text();

//     // Extract the body from the response
//     const bodyNew = data.match(/<body[^>]*>([\s\S]*?)<\/body>/i)[1];

//     // Replace current body with the new one
//     document.body.innerHTML = bodyNew;

//     console.log(`Preloaded: ${url}`);
//   }
// }
