# Guide: Replacing the Patio Door Image with a Video

This guide provides step-by-step instructions on how to replace the static image `/Composite-sliding-patio-door.png` with a video on your homepage.

## Step 1: Prepare Your Video Asset
1.  **Format:** Use a web-friendly format like `.mp4` (H.264).
2.  **Size:** Keep the file size small (ideally under 5-10MB) for faster loading.
3.  **Location:**
    *   Since this project uses Vite, it is best to create a `public/` directory if you haven't already.
    *   Create a folder named `videos` inside `public`.
    *   Save your video file there (e.g., `public/videos/patio-door-video.mp4`).

## Step 2: Update the HTML (`index.html`)
Locate the `<img>` tag you wish to replace. In this project, the primary hero image is typically found within a container like `.waffle-card` or similar (around line 85).

### Replace this:
```html
<img src="/Composite-sliding-patio-door.png" alt="Composite sliding patio door" class="waffle-image">
```

### With this:
```html
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
```

**Why these attributes?**
*   `autoplay` & `muted`: Modern browsers require the video to be muted for autoplay to work.
*   `loop`: Keeps the video playing continuously.
*   `playsinline`: Ensures the video plays within the page on mobile devices rather than opening a full-screen player.
*   `poster`: Displays the original image as a placeholder while the video is loading.

## Step 3: Verify the CSS (`styles/components.css`)
To ensure the video scales correctly and fills its container just like the image did, verify the `.waffle-image` class (or whichever class you are using) in `styles/components.css`:

```css
.waffle-image {
    width: 100%;
    height: 100%;
    object-fit: cover; /* This is crucial for maintaining aspect ratio and filling the container */
}
```

## Step 4: Local Preview
Run the following command to see your changes:
```bash
npm run dev
```

## Troubleshooting
*   **Video doesn't play:** Check if `muted` is missing.
*   **Video is missing:** Ensure the path in `src` matches your file location in the `public` folder.
