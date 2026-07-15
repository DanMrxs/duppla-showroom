# duppla showroom — Instagram Integration Guide

## Goal
Auto-sync the duppla showroom website with your Instagram feed (@dupplashowroom) so new posts appear on the site without manual updates.

## Option 1: Instagram Basic Display API (Free, Recommended)

This is the official free API from Instagram. It requires a one-time Facebook Developer setup.

### Step 1: Create a Facebook App
1. Go to [developers.facebook.com](https://developers.facebook.com)
2. Create an app (type: "Consumer")
3. Add "Instagram Basic Display" product to the app
4. Add an Instagram Test User (or your real account if it's a business/creator account)

### Step 2: Get Access Token
1. In the Facebook app dashboard, go to Instagram Basic Display → Basic Settings
2. Copy the **App ID** and **App Secret**
3. Generate a short-lived User Access Token
4. Exchange it for a long-lived token (60 days valid)

### Step 3: Cloudflare Worker (Free)
Create a free Cloudflare Worker to fetch your Instagram posts and cache them. This keeps your API token secret (server-side) and avoids CORS issues.

```javascript
// Worker: instagram-feed
// Route: https://duppla-showroom.pages.dev/api/instagram

export default {
  async fetch(request, env) {
    const cacheKey = 'instagram-feed';
    const cache = caches.default;

    let response = await cache.match(request);
    if (response) return response;

    const INSTAGRAM_TOKEN = env.INSTAGRAM_TOKEN;
    const USER_ID = 'YOUR_INSTAGRAM_USER_ID';

    const url = `https://graph.instagram.com/${USER_ID}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${INSTAGRAM_TOKEN}`;

    const igResponse = await fetch(url);
    const data = await igResponse.json();

    response = new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'max-age=3600',
        'Access-Control-Allow-Origin': '*',
      },
    });

    await cache.put(request, response.clone());
    return response;
  },
};
```

Add `INSTAGRAM_TOKEN` as a Worker secret via the Cloudflare dashboard.

### Step 4: Update the Website
In `src/components/InstagramFeed.tsx`, replace the static image array with a fetch from your Worker:

```typescript
const [posts, setPosts] = useState([]);

useEffect(() => {
  fetch('/api/instagram')
    .then(r => r.json())
    .then(data => setPosts(data.data?.slice(0, 6) || []));
}, []);
```

---

## Option 2: Manual Embed (Zero Setup, Zero Code)

If you don't want API setup, you can manually embed individual Instagram posts using Instagram's official embed feature:

1. Go to any Instagram post on the web
2. Click the three dots → **Embed**
3. Copy the embed code
4. Paste it into your site's HTML

**Pros:** Zero API keys, zero maintenance.  
**Cons:** Manual work for each post, not automatic.

---

## Option 3: Third-Party Free Widgets

Services like **Behold.so** or **SnapWidget** offer free tiers for embedding Instagram feeds with minimal setup. These work by proxying the Instagram API for you.

- **Behold.so Free Plan:** 1 feed, up to 50 images, updates every 6 hours
- **SnapWidget Free Plan:** 1 widget, basic customization

---

## Recommendation for duppla showroom

Start with **Option 1** (Instagram Basic Display API + Cloudflare Worker) if you plan to post frequently. It costs nothing and gives you full control over the design and caching.

If you post rarely, **Option 2** (manual embed) is perfectly fine for a high-end showroom brand where curation is the point.

## Cost Summary

| Service | Cost |
|---------|------|
| Cloudflare Pages | **Free** |
| Cloudflare Workers | **Free** (100k requests/day) |
| Instagram Basic Display API | **Free** |
| GitHub Public Repo | **Free** |
| **Total** | **$0** |
