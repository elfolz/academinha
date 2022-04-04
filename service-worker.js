importScripts("/academinha/precache-manifest.aca5d4eb0615cc966ffaa3be66b8103a.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.setCacheNameDetails({ prefix: 'academinha' })
self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

self.addEventListener('install', function (event) {
	self.skipWaiting()
})
