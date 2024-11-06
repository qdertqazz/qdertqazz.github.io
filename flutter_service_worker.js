'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "ee21d7c572936a19dbf5555e0221b6c6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "460170bbc52faad7d4b93f6b6464edcf",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5f16c3bf8dfcc7ffc52c6d102f6ba30e",
".git/logs/refs/heads/main": "4796b4abaae1a5729902e76ede2a6c47",
".git/logs/refs/remotes/origin/main": "dd7733b6614159f328c6b14f09d1fdf0",
".git/objects/03/c9d2a8482aa50f878dd36867a3bc1ac90e9be2": "d8d0eec1679990b8c1f35a64cf7053d7",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/12/c540938f5ecf9ba9ea8299fbf9e01f006a612a": "98a4c5328fb90b8a097a67507bb20b6b",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2b/f4f8aafeb44596aefd4872a7f432530933fd7b": "683332eb04166bfeb158eeb8b060aa4d",
".git/objects/2c/d7358ff9cfb9c25e836972a60599fdcc571377": "3ea9adc1d1304cbda2bb26fbc97b9aea",
".git/objects/30/31e5adca1c02cfa83b160f6804e5e3aed6a619": "668548ea94800b27bbc086f0da9f9c17",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/36/2e92fb6ebc63d2954dcb0071be6d9db97a9819": "6766aaf9a3b76cc5efb5d973b0bcacd3",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/6148a919d30530f06a17b9364a6fd33cd0efac": "031fa5d26a134538aa2ca20a18dcccbe",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/5f/93ee4c724d1a1d1a72ffbebc29c35810fe1b1c": "1530529fbd6d177246425825e70de547",
".git/objects/60/598f1c63b6dcd7832fd63095f080cf477f4cf5": "6177fe034567d2fbe22b73d620eacb89",
".git/objects/69/72bd4bd2dc50e63a1d37217a75505c26f10580": "eec3a82bed2d61bd8c2390a47f49e3e7",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/77/77ab707351fce5ffcedc3933b86e56e3e08e7d": "d2ed49d690e2539d5fad081c07271558",
".git/objects/79/d0951963d3dc86687b4828f68cd0503e0ae53e": "2b067048b62940ba3bd7f867d0eee29b",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/04d915d2b9155db59cc4223c39b9a1a7c8eca9": "38908a9b2aafee6d46f4ccbb07336446",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/1258f212602e619a7051495141bdb0a7290b40": "b7d3646326c1863065bd0939fa0d1ee9",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/a0/047c45d7b406ca3420b68a82eee46c5914a31d": "2349698bd026d4a7df836725f268f2b7",
".git/objects/a4/bb192210746e9a740d1222692c968ed27fc9bb": "41960f452d66c5fc71a718dbfb15a8bc",
".git/objects/a5/38a05dec97270138abf0713b08c053a84743dc": "66c52401a6bcec9c6583bedbd395aca7",
".git/objects/ac/fb699563b6085d4463d470c1f8352220e676bc": "65b40b01ea4c9849068160e284a32961",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b5/73980709087b038489ab6bef352287e3a555a5": "b82b65e2cf8b458c0f3e7a586bbb564f",
".git/objects/b7/32682779a17e858490b94a7cb5f343228bb33d": "096f2e9bf0359c8fec152ad515e20b8a",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c3/03071a481ad1bdc0341ae57ab78e47efceb870": "875ba4a20f935efe3fb372f00a32e829",
".git/objects/c3/e7d8989b59ab77b7182e32e25e98899ed6ae79": "2193b91f8e85a11fbe819b877ea54cf1",
".git/objects/c8/4deaa9140d5cb07caed5d05de3b34fef510541": "b06cd02228aae9878119c966795abfbe",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e9/abb869660b863429dabc27c59d8d8427ce76f1": "8626b634c066f679774effa237cc5fce",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f8/7b6d32b5613d52500050a67c6d797d2fa08928": "d95d53d2aac14e6ab8c92f8b722fc4db",
".git/objects/fc/6238d2f340430460d0780348fe0e3fe6d9834d": "0e132cc8c4c8f3ee2009343f1a8b06d7",
".git/refs/heads/main": "fdd1a210043a205332a0b160784a1b2a",
".git/refs/remotes/origin/main": "fdd1a210043a205332a0b160784a1b2a",
"assets/AssetManifest.bin": "4fbff19aeefec76e98c22f7ea344c77b",
"assets/AssetManifest.bin.json": "1ea09decc84e199eb93b655efe2bc913",
"assets/AssetManifest.json": "0ca77bfc415d55a90de6be3e3083646f",
"assets/assets/animations/clouds.json": "3cf6d0a355b8b0d281c10a7525af97b1",
"assets/assets/animations/cloudy.json": "edcbcfc02d626a3ae8f2425dab383007",
"assets/assets/animations/fog.json": "814447eb5d5fea904cd7d22c16a7ab5a",
"assets/assets/animations/loading.json": "7175764c74489dd25af14ae05af4f873",
"assets/assets/animations/location.json": "c1685a9dcc38c0c4b59a8e44c125ce4d",
"assets/assets/animations/rain.json": "d3531ddbaeea16b4162e67328a6ec0e3",
"assets/assets/animations/rainy.json": "fe338e32ffc10c1758dbacc188cddce8",
"assets/assets/animations/rainy2.json": "7b66f238fcdd7b1a288203774872c60a",
"assets/assets/animations/sunny.json": "038f4da1f4836a44aca542377aeb388d",
"assets/assets/animations/thunder.json": "e2b0f3bb09ed18b7676b6551bfb0f61d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "8c2c86de260ebd8c1e6d91504a1b666a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "bce3e49a1eac4664d74ff8bc830917dd",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "7cd2db691248035c1dd76eb2a29f06bc",
"icons/Icon-192.png": "2bcbf16e712346b7e2d5b197ba324bf7",
"icons/Icon-512.png": "7cce234658c4ede5048e636fcb12aca9",
"icons/Icon-maskable-192.png": "2bcbf16e712346b7e2d5b197ba324bf7",
"icons/Icon-maskable-512.png": "7cce234658c4ede5048e636fcb12aca9",
"index.html": "9f0018fe196fb83dd9a7222ab73072ec",
"/": "9f0018fe196fb83dd9a7222ab73072ec",
"main.dart.js": "160347eb9caaa81de6f426744ca75cbc",
"manifest.json": "e8c95478b1e82db2548133efa5031fd5",
"version.json": "23e9d24d5b36279cbfede1d4ebb467c0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
