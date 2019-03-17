/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/css/print.css","40a3e029b40a7b00072abdeabf02fe0d"],["/css/print.min.css","ef8a0716b11a176c5fcedc23dfac6a3d"],["/css/style.css","81ee3aa78306ccc03ff9579b23adc7dd"],["/css/style.min.css","ee777e0d4ae560c1884d3fd802703730"],["/fonts/europe-bold-italic.woff","d12459ab5037b005fb5eca650e44bbfe"],["/fonts/europe-bold.woff","770f3d08c068121d94ac3ac7fe804644"],["/fonts/europe-italic.woff","435deb4e2151408c8aa66a33a503ee62"],["/fonts/europe-regular.woff","1a7b6e7ee59a9d5559a6427f66ced284"],["/img/Image 11.png","b2a8f2dd6163f1e7ad41b45c2377f659"],["/img/Image 75.png","57c09500a711fd826d6febe6a6c53d42"],["/img/about-2-mobile.png","5235bddf1c0bb1f8e7ef656c3a175af1"],["/img/about-2.png","f12fcd0c1dcc47bd6a7e1acbd4bfcddc"],["/img/arrow.svg","a6ac50795a1c205341680eb489f783e9"],["/img/banana-slide/banana-1.png","29185e075ecd6554fc39846f88009749"],["/img/banana-slide/banana-2.png","0f76d8d1d11fed4ee0a37b8d666cd748"],["/img/banana-slide/banana-3.png","c8185c907075a1005021b30fadd187b4"],["/img/banana-slide/banana-4.png","47a433c3fef2370d092d90f9733b8600"],["/img/banana-slide/banana-bar.png","abc1908431571562ad453489021096e9"],["/img/banana-slide/desktop/banana-1.png","e8f0651530c0ddd950a4745f690feaa0"],["/img/banana-slide/desktop/banana-2.png","172cdfc8b1204be0ab65fc8912679b56"],["/img/banana-slide/desktop/banana-3.png","a918eaa91f3de28a7d4e5514583cf103"],["/img/banana-slide/desktop/banana-4.png","08fc2c84cecd797f6a8db898d0f72fb8"],["/img/banana-slide/desktop/banana-bar.png","02c354ba203b66fc97516a9a19d90718"],["/img/bar-footer-1.png","711cc0805b6de586006ff0669801df5c"],["/img/bar-footer-2.png","2979e7674d38bf3946191cb3598c8c63"],["/img/bar-footer-3.png","590caa2c8b5fc95325a97e4717e9edac"],["/img/bg.svg","f87ef7f9554ecd89aa63a7bc692854e0"],["/img/buy-decor-1.png","e4055119e94f2f23cd2d043b75487979"],["/img/caramel-slide/Image_27.png","cb04151b35618d7d5455b2fbc9402751"],["/img/caramel-slide/Image_28.png","2adaf63a3d55719753bf1ea097797e51"],["/img/caramel-slide/Image_29.png","ca23c8f9e17fab16d80c6472fdcc30f9"],["/img/caramel-slide/Image_30.png","1dd33921d07b0677385b902fa62c1be1"],["/img/caramel-slide/Image_31.png","65dcca5f21e2f7712ba17f3e2058058a"],["/img/caramel-slide/caramel-bar.png","fa8e57445ad2c4ea0e03945157d09c76"],["/img/caramel-slide/desktop/Image_27.png","5cbd9542dbc9ba520ec290d56e094d8e"],["/img/caramel-slide/desktop/Image_28.png","2a157d33d4387770a368bc419f52b0c0"],["/img/caramel-slide/desktop/Image_29.png","e50388d50346e3104089d2ae3994dff4"],["/img/caramel-slide/desktop/Image_30.png","91fa743e18b3aae8911ad7970368f9f4"],["/img/caramel-slide/desktop/Image_31.png","9ddcf5d4b9ed0bf4d7cc52fc2fe1572d"],["/img/caramel-slide/desktop/caramel-bar.png","38f8c8c29c526cd9b7a37b4ec46c7879"],["/img/champ-logo-transparent.svg","622320078ecac7ec38895f1db5d978de"],["/img/champ-logo.svg","434d5b83496ad13aa3ae7cc78a646547"],["/img/cherry-1.png","3cd4b7dc4047d720870fd326f458102d"],["/img/cherry-slide/Image_10.png","ac46a03f407360f19be5fcbad6d54206"],["/img/cherry-slide/Image_4.png","603af5e5411e8c62cc4e59ed8c432629"],["/img/cherry-slide/cherry-1.png","01ee75d37851056ae3c3ca9b6bcddced"],["/img/cherry-slide/cherry-2.png","1a85b2425dccbe85f55d726094271db9"],["/img/cherry-slide/cherry-bar.png","d1e56f164655f9d32dce687cb11e163c"],["/img/cherry-slide/choco-7.png","a0e3ca92d04773e81ddf1380592187bb"],["/img/cherry-slide/desktop/Image_10.png","154ccce137ce2c30d8a20dbe3516ca76"],["/img/cherry-slide/desktop/Image_4.png","10a83e9594fad6df36de8eed2742b58c"],["/img/cherry-slide/desktop/cherry-1.png","0e250664b2f17b488e56d91df695c003"],["/img/cherry-slide/desktop/cherry-2.png","515f0d02c12c5879d0e0f618a93a5d6d"],["/img/cherry-slide/desktop/cherry-bar.png","9756df50c2706d61156ac868661dcd25"],["/img/cherry-slide/desktop/choco-7.png","7f386fb9bd75f668f05cbda89a0ae7f6"],["/img/choco-7.png","623c6a9fe25d192448d9e53fdbdeb890"],["/img/chocolate-slide/choco-1.png","9c81f656068ba9c323d8673d461eedfd"],["/img/chocolate-slide/choco-4.png","67d997bc453b31b656098177ea06027e"],["/img/chocolate-slide/choco-5.png","15529d2b40f6584f713c5c79bd884f25"],["/img/chocolate-slide/chocolate-cocktail.png","db27771e5be42b03e7fe06b51cd3afd9"],["/img/chocolate-slide/desktop/choco-1.png","7e9e96832d41b6cab8cf05dab99addd0"],["/img/chocolate-slide/desktop/choco-2.png","311d0b7a2628a09962839014069bdc76"],["/img/chocolate-slide/desktop/choco-3.png","03a5003c892fec2aa7d7e9fd87698c42"],["/img/chocolate-slide/desktop/choco-4.png","3c471533e32de13b5f5381eefaea8e82"],["/img/chocolate-slide/desktop/choco-5.png","24cb356ba27ceafd64a2071bf0c2a88e"],["/img/chocolate-slide/desktop/chocolate-cocktail.png","2a86856003dc33b58665c65501dbc160"],["/img/chocolate-slide/desktop/shaker.png","9a7f343d723b6b3fddb71d9462380e8c"],["/img/chocolate-slide/shaker-big.png","4c544d38abee56cf049913b5f03a59b5"],["/img/coctails.png","2718ae21d1709b126f4336b204a32d86"],["/img/controls-desktop.svg","6467717cb4a5edeaf8e7407baad5440f"],["/img/controls.svg","8119986057221ffc8204c688212835fe"],["/img/favicon/android-chrome-144x144.png","a3ca4ee6c6bd36d3fd8c8a8e71384f0a"],["/img/favicon/android-chrome-192x192.png","271c9a625262f06f451bf5a67dccb774"],["/img/favicon/android-chrome-256x256.png","6db9757d716be1e39d678d9a86e39e65"],["/img/favicon/android-chrome-36x36.png","3b8bb2532f1cd5eb11a6c4e5a0969cb8"],["/img/favicon/android-chrome-384x384.png","1ebd935541a2b182bdaa65ba675a6575"],["/img/favicon/android-chrome-48x48.png","efff55bccd5c7fe74938172622158458"],["/img/favicon/android-chrome-512x512.png","af38a9cf8508b4c5cf55da1353a406a6"],["/img/favicon/android-chrome-72x72.png","9c1a9c90ef828b008f808bd991ef5517"],["/img/favicon/android-chrome-96x96.png","a472bbb2796bc1153efb90dd8408ca0e"],["/img/favicon/apple-touch-icon-114x114-precomposed.png","68849ecd2723ac9045bf0aa1b456b9c1"],["/img/favicon/apple-touch-icon-114x114.png","dfc61764ccf8a94d72699fec43d9dae8"],["/img/favicon/apple-touch-icon-120x120-precomposed.png","8db8881b1ac2948b0b802b9b6f999b2b"],["/img/favicon/apple-touch-icon-120x120.png","90edb5063dd1c611f1cbb767d1db070b"],["/img/favicon/apple-touch-icon-144x144-precomposed.png","9eb741abc6c4318cbf62b0438f3d034b"],["/img/favicon/apple-touch-icon-144x144.png","3ed1b45836a7ec036cf4b805628f0ab1"],["/img/favicon/apple-touch-icon-152x152-precomposed.png","77ad0b8c65ef0e708abf3054545bee67"],["/img/favicon/apple-touch-icon-152x152.png","605a8a54974a6f41efd730543e0249a5"],["/img/favicon/apple-touch-icon-180x180-precomposed.png","298aa9b8f901afa93b21a65a3de8cbe3"],["/img/favicon/apple-touch-icon-180x180.png","7c57f632e8f77f9fe1c43de3ec8a0fd6"],["/img/favicon/apple-touch-icon-57x57-precomposed.png","6040e60427e9cce2ed593cb8d73a3b08"],["/img/favicon/apple-touch-icon-57x57.png","07dabab6b3f47e781615929f7ec34eeb"],["/img/favicon/apple-touch-icon-60x60-precomposed.png","9fada8216ceaa2c57e5517d7c9178593"],["/img/favicon/apple-touch-icon-60x60.png","5151e1bdd53bc5da616a66d70768b049"],["/img/favicon/apple-touch-icon-72x72-precomposed.png","fbebceb42f4e59a4d919259c950f22e2"],["/img/favicon/apple-touch-icon-72x72.png","fcbdac3b694e1dd235b69b323ad8312c"],["/img/favicon/apple-touch-icon-76x76-precomposed.png","2464b6c51289dd860fb82a20a77ae91f"],["/img/favicon/apple-touch-icon-76x76.png","d0c2543023b8a98d94d5e7252adaf7fa"],["/img/favicon/apple-touch-icon-precomposed.png","298aa9b8f901afa93b21a65a3de8cbe3"],["/img/favicon/apple-touch-icon.png","7c57f632e8f77f9fe1c43de3ec8a0fd6"],["/img/favicon/favicon-16x16.png","b86e3e8b7320c685b1726a82fa257981"],["/img/favicon/favicon-32x32.png","4d17bae503e383e2343ff21c8badea2f"],["/img/favicon/mstile-150x150.png","ab2487c5ec47ede89b34a3863c858f2e"],["/img/favicon/safari-pinned-tab.svg","79844c8c8d370f30d3894bab26cbafef"],["/img/feature-1.svg","95cee78ddb687328c767b119f0753e3b"],["/img/feature-2.svg","5b39b5e35849d7e9dc94cc04596786ba"],["/img/feature-3.svg","ad8f8b31d188f8e9ed3b3ad935115fcc"],["/img/features-decor/Image_10.png","154ccce137ce2c30d8a20dbe3516ca76"],["/img/features-decor/Image_29.png","3945a04b9e5667826af03ce07176699d"],["/img/features-decor/Image_4.png","e796de0ef5fcf1d08ba6141caebdbc0d"],["/img/features-decor/choco-1.png","f7105b8eadd447bb8581b3d308839671"],["/img/footer-desktop.svg","3cf9f1f5598f410eb66479e8e3899f51"],["/img/footer-logo-desktop.svg","462b527dbd4e0c013d8519c8b82629a1"],["/img/hashtag.svg","0070bf45e31ccd6c50b165b3d0bffcc8"],["/img/header-desktop.svg","025732551f0d88c504bfa2a65a8cba51"],["/img/header-mask.svg","e4d17184cfd64d8fda8f01993e6c9779"],["/img/header.svg","0c553b30aadaac8a818965b36c76390b"],["/img/logo-dark-text.svg","5ae808b8146cb627b2fe0aea682e3d00"],["/img/logo-dark.svg","cf71ca15e52e6833cf26e1b97b89e8bd"],["/img/nut-2.png","88be9d65fe7d94344f6f5154da697394"],["/img/nut-3.png","021cba85cad3e08a5dd170f17569c189"],["/img/nut-5.png","1389f2bfb310fee0922c432b095c839e"],["/img/nut-slide/desktop/nut-1.png","526e47856950dc4508eb3a134b248e95"],["/img/nut-slide/desktop/nut-10.png","a0fb78f9c25e7293c9e483b00610421c"],["/img/nut-slide/desktop/nut-2.png","31447f3bfbe76066eca7878bfc4a9e29"],["/img/nut-slide/desktop/nut-3.png","37d6c1db437cb8f5a934615a62a39883"],["/img/nut-slide/desktop/nut-4.png","33d030cbe4b9380d326872b1ee8a34eb"],["/img/nut-slide/desktop/nut-5.png","930326cf9c9c070a2942f773479bb21b"],["/img/nut-slide/desktop/nut-9.png","9d43eb5ffd8e9898cff7dedcb3d0da21"],["/img/nut-slide/desktop/nut-bar.png","517507904960209017673ddf26cd070b"],["/img/nut-slide/nut-1.png","33b6437569cd618d86063dca47dd8892"],["/img/nut-slide/nut-10.png","1b3733482014489ecfb9ef591b6d26da"],["/img/nut-slide/nut-2.png","1a28f8e589f43b34c57aee69a9602b2c"],["/img/nut-slide/nut-3.png","9fe0ea44a3a7b621a8725b0cdf904322"],["/img/nut-slide/nut-4.png","57a86e4236e77ac7c4c41529dbd60df5"],["/img/nut-slide/nut-5.png","97f183f4afa4f3893ab0b7073e1716ef"],["/img/nut-slide/nut-9.png","5e5636571ed92eb85dbca55e50216988"],["/img/nut-slide/nut-bar.png","8968db3c657ed151f5ad6ce6308da29c"],["/img/protein-bars-mobile.png","ba2cdc018cc3fcb772eb9e0367920811"],["/img/protein-bars.png","3c7209f4cae939002dc55e8dc1b14f13"],["/img/protein-cocktail-vanila.png","23b58af163a91a98cf8a696dca1d4f8e"],["/img/protein-coctail-chocolate.png","ebe893404984b54f0f87833a09d0398f"],["/img/shaker.png","b2a8f2dd6163f1e7ad41b45c2377f659"],["/img/sharing/sharing-fb.png","8d8039f32d2d526578228f011a7ea627"],["/img/sharing/sharing-vk.png","21761fa5aff2594cba1b182752a3399c"],["/img/strawberry-2.png","4f6cdc8570359b86ea640b29abc3f270"],["/img/strawberry-slide/desktop/strawberry-2.png","38e015404025f93b0c05b00c7228d563"],["/img/strawberry-slide/desktop/strawberry-3.png","34293957c5b2dc290e6837d4e7b81d30"],["/img/strawberry-slide/desktop/strawberry-4.png","85bcd92c2cb3e5db5c3706cb567421fd"],["/img/strawberry-slide/desktop/strawberry-bar.png","cef4731e3fac3db7a384c0e14ec07c50"],["/img/strawberry-slide/desktop/strawberry_[H]_[2].png","fd8399014b2d94d877b291c958855c97"],["/img/strawberry-slide/strawberry-2.png","bf21ac7507d8f1d8b50ec31137e59a9b"],["/img/strawberry-slide/strawberry-3.png","d79b97d10f0e950b9d36be4cf8c99ea2"],["/img/strawberry-slide/strawberry-4.png","b7df4930383e315c33619aa196d3c402"],["/img/strawberry-slide/strawberry-bar.png","0b73835cd6f6922fde38f92589c2676a"],["/img/strawberry-slide/strawberry_[H]_[2].png","eda0976d6282abf72b1a62c4cf87b4d7"],["/img/vanilla-slide/Group_64.png","91a70ffa73ae193eaa7b93144989f380"],["/img/vanilla-slide/desktop/Group_64.png","d1da0e4ed2c40051718e0a4eb512c741"],["/img/vanilla-slide/desktop/shaker.png","66cb38212840cd20f00ba98706896837"],["/img/vanilla-slide/desktop/vanilla-2.png","509715748ac423418ad179c57c9f8f0c"],["/img/vanilla-slide/desktop/vanilla-3.png","379cff758f4f49c3597890623fa12898"],["/img/vanilla-slide/desktop/vanilla-cocktail.png","0178bb45485aed97731eefe6c4a1bf9f"],["/img/vanilla-slide/shaker.png","4c544d38abee56cf049913b5f03a59b5"],["/img/vanilla-slide/vanilla-2.png","5cf803729f88207e158c3d6a28c67bca"],["/img/vanilla-slide/vanilla-3.png","49fb9751ddb5eb608714d2177eb88e38"],["/img/vanilla-slide/vanilla-cocktail.png","1fb2639921b87205af77601e65ea4ff2"],["/index.html","7e33149e5cdc7d31db1524cff31bc93f"],["/js/bundle.js","4dad90e99b78c5c1d041024e1b7630ad"],["/js/bundle.min.js","f39080626365b5bfbe394f21c8d504e3"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







