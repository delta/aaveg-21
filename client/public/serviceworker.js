const cacheName = 'version-1'
const contentToCache = [
  // '/favicon.ico',
  // '/static/js/main.chunk.js',
  // '/static/js/bundle.js',
  // '/static/js/vendors~main.chunk.js',
  // '/index.html',
  // '/manifest.json',
]

const self = this

// Install SW
self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const cache = await caches.open(cacheName)
    await cache.addAll(contentToCache)
  })())
})

self.addEventListener('fetch', (e) => {
  if (!navigator.onLine) {
    e.respondWith((async () => {
      const r = await caches.match(e.request)
      if (r) { return r }
      const response = await fetch(e.request)
      const cache = await caches.open(cacheName)
      cache.put(e.request, response.clone())
      return response
    })())
  }
})

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keyList = await caches.keys()
    await Promise.all(keyList.map(async (key) => {
      if (key === cacheName) { return }
      await caches.delete(key)
    }))
  })())
})
