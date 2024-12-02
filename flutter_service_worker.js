'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "6ba6799567e7e2182aa875c809c6d9e9",
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
".git/index": "f7400f79f5f09295eef981c67678419c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fe75fab577cd79b06a07dc42a26e7580",
".git/logs/refs/heads/main": "b48bd2fdab1737decc181437b7a0bc76",
".git/logs/refs/remotes/origin/main": "2e1b76ef5ccddec264ad693c6c29d98b",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/0c/c9cd273c23f8657e15ad03bfaf24f3ec8b73b2": "df5979a6113e355071daf6b177bd30ca",
".git/objects/0d/d68f360843dd0e01085e0a0bcddcf373b557f8": "e140a4b707e03c183f98e00cefdfc064",
".git/objects/1c/ca4aa784a3c35597f345307e9eb8abea55cafc": "e36c4a391ccf4afd19d72d8c9f33ee81",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/23/38ff13d4ac2be72ec1321502f34434913ca4ad": "7ff29ca4cb8a20a8bad141345eb957ed",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3a/fad7ff20e0bfdd2153f0d02ef5acc1d2139d69": "94f6476257c15da2ecbe3cfd20907e92",
".git/objects/45/c99e6b54638e08fdbbb19be57f2b2ee7b06772": "b1423ea495718375a8183703987e10be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/59/00cdb901de8ec21b580869c01c70d32e764dae": "498630bca95d427f12739acd32c22b3c",
".git/objects/6a/b83bbf039689c24512f380f5f0246411bd1e1b": "6fdf8afc9b4067d1bd833c44d827a8ee",
".git/objects/6e/53134b8eb120357d13204d2a2e890b01f6d4d7": "cbfd146a0f6f13a1cfc790de58598ed2",
".git/objects/76/a7887cdc073ae0e282445e3560be7fe18379bb": "474be25712cbab70ffff0eb37b070834",
".git/objects/78/8ca11ef4ab679b1430642392dfd38e457283ec": "08f58eabc55c551ca0898ad53ebd151a",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/2054c9a63409d25dd76eb892b2f1c653bffb18": "42ebe608955beed8abeb63886fe899a1",
".git/objects/8d/20757d01ba5d9a2a773dfbcb6c5bd36c3f15a6": "fb4bb218d42fae88e8ace7af41dc81f4",
".git/objects/8f/a738b572aca5df44f5375b9dc64f9fab81cdbf": "7e85776b0aeb4047070dcfae5000277a",
".git/objects/93/a868e6aa4701fee50937eae267431e4855ec52": "2f48837b0a4977a9e2e3e0aa919be64d",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/97/18e23ca1dba42764018fab2974659112277291": "ab8d700e249368e0a64b1ba3115da168",
".git/objects/99/bd1bea9ea40aa43344225f598d50e695b500c7": "7437f139f464689ca5fc997724b6d024",
".git/objects/9d/9dd936131f5c46769753073278e1cf44a35ada": "3f12e26e5bdeae3200d787b08524e81e",
".git/objects/9f/4bdb45d61761afdd4875c70a6adafae6f7bcfe": "70dd4325ad4481d92cf78b73e51b9fa2",
".git/objects/a3/8f6bf0e0f6b67037c4f0d286648cfb01c5b62a": "035ed0779bc015f229ad159e4d7491a0",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/a8/cb84e08cfa33fa014effdc131e16f7df21864c": "f2d99b9fdd698137cd8e25a87089ba82",
".git/objects/a9/c7ae9d1ec96678d2c66e093090e4e35b3454fa": "5bf90195264f7828ba043ab3a6c677d7",
".git/objects/ac/fea6a83d2b68281f57779b4dc41a7d503a2fed": "fca4cd93a83f5c98a95a257d4e8e5b27",
".git/objects/b0/0c915a301c8891835721cd7292ff3a21a14462": "15f4d89157582971fb53d610919b9d10",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bb/d7c4e1934a0e833427a70010c8436e7092bfba": "4b4fbec6a6b1f6628779933aaa2f27ac",
".git/objects/bf/4e48a9d58cddceab152e24ea7f2c750e4e711d": "c6464b5b6e39ee436c8a1661cea100df",
".git/objects/c1/d63939ae4944e3ed351860613cf9414f3d56b4": "656b097b19f499486dd52545c588c7ce",
".git/objects/cc/a63c8f08cfefc1dd61134cc38c0da5ead226a2": "307d767bd730d1c587302d446eeb8c96",
".git/objects/d3/1ea8180fa49cf7867b7d1366ef693616edc38a": "96754fcd2fb21f8bccacfe5eac2af5a7",
".git/objects/d3/2cca838ab320b6809cd5146e39747e0d7d6345": "f1eba3705c25dc359a38454b010e0c93",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/df/b1ef46d627f8dfc7c1f988ce06bacaa368bc12": "6548d95f81a9146140a4e16fedaa723a",
".git/objects/e1/1db3b262d569aeafa4b07ebc28ae1fa023bcbe": "0623b206c0960c84b402ef537dd4d4c6",
".git/objects/e7/aa4f8cb790d1063dfca81e48fb93a0aa64b333": "1ba962341985e1f2f22d5e11a38be5e8",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/0ecede3c412d96ab7d24b1defac9b5b827f2d6": "4409af5145a4bbd550c7926529934468",
".git/objects/f2/3650e74b3b0a36b54a6984d442d7c4121177bb": "b88b725b016a3f11e4534c6ac1384294",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/f0c6bd0029a5a0f7b19b32b5f7b11713eff642": "388b3bbb48988446e241c927db2cd922",
".git/refs/heads/main": "d185e590e44b9e86641a56b28c85e5ca",
".git/refs/remotes/origin/main": "d185e590e44b9e86641a56b28c85e5ca",
"assets/AssetManifest.bin": "952ee70d2a706b853e707ca97ffe8c95",
"assets/AssetManifest.json": "07d6c9488631f208419f689765713be5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a9a88c02a61e31e990156b2ae5ff8e25",
"assets/images/home_illustrator.png": "baa1fd9b9ccdcddfe48ca57ac47cbaf3",
"assets/images/man.png": "92d84b7a19bafae07e63bea314fc5ed6",
"assets/images/pust_logo.png": "313a2fc3e14cf19920e6e4386b41168a",
"assets/images/user_page_bg.jpg": "93f12e536c6abab1cab872b3fd22b477",
"assets/NOTICES": "e04035572b816797f1db36ab25789f18",
"assets/packages/awesome_notifications/test/assets/images/test_image.png": "c27a71ab4008c83eba9b554775aa12ca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/day_night_time_picker/assets/moon.png": "71137650ab728a466a50fa4fa78fb2b9",
"assets/packages/day_night_time_picker/assets/sun.png": "5fd1657bcb73ce5faafde4183b3dab22",
"assets/packages/sn_progress_dialog/images/cancel.png": "be94b63af32e39fabad56e2cab611b4b",
"assets/packages/sn_progress_dialog/images/completed.png": "4f4ec717f6bb773c80db76261bb367c3",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1ac64c2798142ce4f51c77046bc7f080",
"/": "1ac64c2798142ce4f51c77046bc7f080",
"main.dart.js": "514e63aa643db0c18b79360248436ba0",
"manifest.json": "d3f84ad87e3c3a31cf38f617a5c6f7ce",
"README.md": "51150e71812ad2ee5f5efd653c446e45",
"version.json": "2019de5247c3533780eeb5d5667f15ed"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
