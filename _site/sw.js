const version = '20220105190539';
const cacheName = `static::${version}`;

const buildContentBlob = () => {
  return ["/ted.workshop.github.io/general/2016/08/29/example-post-three/","/ted.workshop.github.io/history/external%20sources/2016/08/28/example-post-two/","/ted.workshop.github.io/general/external%20sources/2016/08/27/example-post-one/","/ted.workshop.github.io/apply/","/ted.workshop.github.io/categories/","/ted.workshop.github.io/coc/","/ted.workshop.github.io/elements/","/ted.workshop.github.io/blog/","/ted.workshop.github.io/","/ted.workshop.github.io/instructors/","/ted.workshop.github.io/manifest.json","/ted.workshop.github.io/offline/","/ted.workshop.github.io/assets/search.json","/ted.workshop.github.io/search/","/ted.workshop.github.io/assets/styles.css","/ted.workshop.github.io/syllabus/","/ted.workshop.github.io/thanks/","/ted.workshop.github.io/redirects.json","/ted.workshop.github.io/sitemap.xml","/ted.workshop.github.io/robots.txt","/ted.workshop.github.io/blog/page2/","/ted.workshop.github.io/feed.xml","/ted.workshop.github.io/assets/styles.css.map","", "/ted.workshop.github.io/assets/default-offline-image.png", "/ted.workshop.github.io/assets/scripts/fetch.js"
  ]
}

const updateStaticCache = () => {
  return caches.open(cacheName).then(cache => {
    return cache.addAll(buildContentBlob());
  });
};

const clearOldCache = () => {
  return caches.keys().then(keys => {
    // Remove caches whose name is no longer valid.
    return Promise.all(
      keys
        .filter(key => {
          return key !== cacheName;
        })
        .map(key => {
          console.log(`Service Worker: removing cache ${key}`);
          return caches.delete(key);
        })
    );
  });
};

self.addEventListener("install", event => {
  event.waitUntil(
    updateStaticCache().then(() => {
      console.log(`Service Worker: cache updated to version: ${cacheName}`);
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(clearOldCache());
});

self.addEventListener("fetch", event => {
  let request = event.request;
  let url = new URL(request.url);

  // Only deal with requests from the same domain.
  if (url.origin !== location.origin) {
    return;
  }

  // Always fetch non-GET requests from the network.
  if (request.method !== "GET") {
    event.respondWith(fetch(request));
    return;
  }

  // Default url returned if page isn't cached
  let offlineAsset = "/offline/";

  if (request.url.match(/\.(jpe?g|png|gif|svg)$/)) {
    // If url requested is an image and isn't cached, return default offline image
    offlineAsset = "/ted.workshop.github.io/assets/default-offline-image.png";
  }

  // For all urls request image from network, then fallback to cache, then fallback to offline page
  event.respondWith(
    fetch(request).catch(async () => {
      return (await caches.match(request)) || caches.match(offlineAsset);
    })
  );
  return;
});
