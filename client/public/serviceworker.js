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
  '../src/assets/images/white.png',
  'https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;700;900&display=swap',
  'https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;700;900&display=swap']

const self = this

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('images').then(function (cache) {
      return cache.addAll(contentToCache)
    })
  )
})

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request)
    })
  )
})
