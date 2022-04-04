importScripts("/academinha/precache-manifest.769f2484187661575065c7c62cb74a5b.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.setCacheNameDetails({ prefix: 'academinha' })
self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

self.addEventListener('install', function (event) {
	self.skipWaiting()
})
