self.addEventListener("install", event => {
  console.log("Service worker installed");
  event.waitUntil(
    caches.open("static").then(cache => {
      cache.addAll([
        "/",
        "index.html",
        "./components/Nav/Navigation.js",
        "./components/About/About.js",
        "./components/Carousel/Carousel.js",
        "./components/Tabs/Tabs.js"
      ]);
    })
  );
});

self.addEventListener("activate", () => {
  console.log("Service worker activated");
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.req).then(res => {
      if (res) {
        return res;
      } else {
        return fetch(event.req);
      }
    })
  );
});
