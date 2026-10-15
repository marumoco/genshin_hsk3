const CACHE_NAME = 'hsk3-reader-v4';
const AUDIO_CACHE_NAME = 'hsk3-audio-cache-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './data.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+SC:wght@400;500;700&display=swap'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE).catch(err => {
        console.warn('Some external assets could not be pre-cached:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          // アプリキャッシュのみ古いバージョンを削除。音声キャッシュ(AUDIO_CACHE_NAME)は永続保持
          if (key !== CACHE_NAME && key !== AUDIO_CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const url = event.request.url;

  // 1. Google TTS 音声の自動キャッシュ（Cache-First: 一度聞いた音声は端末内に保存し、オフラインでも即座に再生）
  if (url.includes('translate.google.com/translate_tts') || url.includes('dictvoice')) {
    event.respondWith(
      caches.open(AUDIO_CACHE_NAME).then((audioCache) => {
        return audioCache.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          return fetch(event.request).then((networkResponse) => {
            // クロスオリジン音声(opaque)または正常レスポンスをキャッシュに保存
            if (networkResponse && (networkResponse.status === 200 || networkResponse.type === 'opaque')) {
              audioCache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          });
        });
      })
    );
    return;
  }

  // 2. 通常のアセット（HTML, JS, 画像など）のキャッシュ処理
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      }).catch(() => {
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
