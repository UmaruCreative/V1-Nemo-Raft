# Guide: Replacing the Patio Door Image with a Video

This guide provides step-by-step instructions on how to replace the static image `/Composite-sliding-patio-door.png` with a video on your homepage.

## Step 1: Prepare Your Video Asset
1.  **Format:** Use a web-friendly format like `.mp4` (H.264) or `.webm`.
2.  **Size:** Keep the file size small (ideally under 5-10MB) for faster loading.
3.  **Location:**
    *   Create a `public/` directory in your project root if it doesn't exist.
    *   Create a `videos/` folder inside `public/`.
    *   Save your video file there (e.g., `public/videos/patio-door-video.mp4`).

## Step 2: Update the HTML (`index.html`)
Locate the `<img>` tag you wish to replace. Based on your request, search for the one referencing `/Composite-sliding-patio-door.png`.

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

**Key Video Attributes:**
*   `autoplay` & `muted`: Required by most browsers to allow the video to play automatically.
*   `loop`: Ensures the video repeats continuously.
*   `playsinline`: Essential for mobile devices to play the video within the page layout.
*   `poster`: Shows the original image while the video is loading or if the video fails to load.

## Step 3: Verify the CSS (`styles/components.css`)
Ensure the class used for the element (e.g., `.waffle-image`) is configured to handle the video correctly. It should look like this:

```css
.waffle-image {
    width: 100%;
    height: 100%;
    object-fit: cover; /* This ensures the video fills the container correctly without distortion */
}
```

## Step 4: Local Preview
Run the development server to see your changes:
```bash
npm run dev
```

## Troubleshooting
*   **Video doesn't play:** Most browsers block autoplay if the `muted` attribute is missing.
*   **Video is missing:** Double-check that the file path in the `<source>` tag matches the file's location in the `public/videos/` directory.
