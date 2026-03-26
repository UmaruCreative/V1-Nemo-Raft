# Guide: Replacing the Patio Door Image with a Video

To replace the static image `/Composite-sliding-patio-door.png` on your homepage with a video, follow these steps:

## Step 1: Prepare Your Video Asset
1.  **Format:** Use a web-friendly format like `.mp4` (H.264) or `.webm`.
2.  **Organization:**
    *   Create a `public/` directory in your project root.
    *   Create a `videos/` folder inside `public/`.
    *   Save your video file there (e.g., `public/videos/patio-door-video.mp4`).

## Step 2: Update the HTML (`index.html`)
Locate the `<img>` tag referencing the patio door image (around line 85).

### Replace this:
```html
<div class="waffle-card">
    <img src="/Composite-sliding-patio-door.png" alt="Composite sliding patio door" class="waffle-image">
</div>
```

### With this:
```html
<div class="waffle-card">
    <video
        autoplay
        muted
        loop
        playsinline
        class="waffle-image"
        poster="/Composite-sliding-patio-door.png">
        <source src="/videos/patio-door-video.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
</div>
```

**Note:** The `poster` attribute displays the original image while the video is loading.

## Step 3: Verify the CSS (`styles/components.css`)
Ensure the `.waffle-image` class (around line 61) is configured correctly:

```css
.waffle-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

## Step 4: Local Preview
Run the development server to verify:
```bash
npm run dev
```
Check the changes at the provided local URL (e.g., `http://localhost:5173`).
