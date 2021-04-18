const cacheName = 'version-1'
const contentToCache = [
  '../src/assets/images/404.jpeg',
  '../src/assets/images/Aaveg Glpyh-Black.png',
  '../src/assets/images/aaveg.png',
  '../src/assets/images/aaveggray.png',
  '../src/assets/images/aavegwhite.png',
  '../src/assets/images/bgimg.png',
  '../src/assets/images/bgimg2.png',
  '../src/assets/images/cloud.svg',
  '../src/assets/images/loginPage.png',
  '../src/assets/images/moon.png',
  '../src/assets/images/questionPage.png',
  '../src/assets/images/stacked-peaks-haikei.png',
  '../src/assets/images/white.png'
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
  e.respondWith((async () => {
    const r = await caches.match(e.request)
    if (r) { return r }
    const response = await fetch(e.request)
    const cache = await caches.open(cacheName)
    cache.put(e.request, response.clone())
    return response
  })())
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
