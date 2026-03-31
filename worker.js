import { getAssetFromKV, mapRequestToAsset } from '@cloudflare/kv-asset-handler';

/**
 * The DEBUG flag will do two things:
 * 1. Bypasses caching at the edge so that you can see changes immediately.
 * 2. If there is an error, it will show the stack trace.
 */
const DEBUG = false;

addEventListener('fetch', event => {
  try {
    event.respondWith(handleEvent(event));
  } catch (e) {
    if (DEBUG) {
      return event.respondWith(
        new Response(e.message || e.toString(), {
          status: 500,
        }),
      );
    }
    event.respondWith(new Response('Internal Error', { status: 500 }));
  }
});

async function handleEvent(event) {
  const url = new URL(event.request.url);
  let options = {};

  try {
    if (DEBUG) {
      // customize caching
      options.cacheControl = {
        bypassCache: true,
      };
    }
    // This will serve static assets from the KV namespace you bind to the worker
    return await getAssetFromKV(event, options);
  } catch (e) {
    // If the asset is not found, fall back to serving the index.html for SPA routing
    return await getAssetFromKV(event, { mapRequestToAsset: (req) => new Request(`${url.origin}/index.html`, req) });
  }
}