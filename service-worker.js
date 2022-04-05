importScripts("/academinha/precache-manifest.f06b457757b1095a5dac17c9eda807ac.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.setCacheNameDetails({ prefix: 'academinha' })
self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

self.addEventListener('install', function (event) {
	self.skipWaiting()
})
