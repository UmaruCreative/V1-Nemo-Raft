# Guide: Replacing an Image with a Video

This guide provides step-by-step instructions on how to replace a static image (specifically `/Composite-sliding-patio-door.png`) with a video on your homepage.

## Step 1: Prepare Your Video Asset
1.  **Format:** Use a web-friendly format like `.mp4` (H.264).
2.  **Size:** Keep the file size small (ideally under 5-10MB) for faster loading.
3.  **Location:**
    *   Place the video in the project root or in a `public/` directory if you have created one.
    *   Example: Save it as `patio-door-video.mp4`.

## Step 2: Update the HTML (`index.html`)
Locate the `<img>` tag for the patio door and replace it with a `<video>` element.

### Before:
```html
<!-- Assuming it looked like this -->
<img src="/Composite-sliding-patio-door.png" alt="Composite sliding patio door" class="waffle-image">
```

### After:
```html
<video
    autoplay
    muted
    loop
    playsinline
    class="waffle-image"
    poster="/Composite-sliding-patio-door.png">
    <source src="patio-door-video.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
```

**Key Attributes:**
*   `autoplay`: Starts the video immediately.
*   `muted`: **Required** by most browsers to allow autoplay.
*   `loop`: Keeps the video playing in a continuous loop.
*   `playsinline`: Ensures the video plays "inside" the page on mobile devices rather than popping out to a full-screen player.
*   `poster`: Displays your original image while the video is downloading.

## Step 3: Update the CSS (`styles/components.css`)
Ensure the video behaves correctly within its container. If you used the `.waffle-image` class (or similar), check its definition.

```css
/* Ensure the video fills the container like the image did */
.waffle-image {
    width: 100%;
    height: 100%;
    object-fit: cover; /* This makes the video scale and crop correctly */
}
```

## Step 4: Verification (Vite Specifics)
Since this project uses **Vite**, remember:
*   If you put the video in the **root**, reference it as `src="patio-door-video.mp4"`.
*   If you put the video in a **`public/`** folder (e.g., `public/videos/`), reference it as `src="/videos/patio-door-video.mp4"`.

## Troubleshooting
*   **Video not autoplaying:** Ensure the `muted` attribute is present.
*   **Layout looks broken:** Verify that the parent container has a defined width and height, and that the video has `object-fit: cover`.
