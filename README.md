# Nemo's Raft - Floating Restaurant Website

A beautiful, Nordic-minimalist one-page landing site for Nemo's Raft, a floating waffle restaurant & bar in Jyväskylä harbor, Finland.

## Features

- **Responsive Design**: Mobile-first approach with breakpoints for desktop (≥1200px), tablet (768-1199px), and mobile (<768px)
- **Bilingual Support**: English/Finnish language toggle with localStorage preference saving
- **Smooth Animations**: Fade-in effects, parallax scrolling, and micro-interactions
- **Interactive Components**: Accordion menus, image gallery with swipe support, sticky navigation
- **Accessibility**: Keyboard navigation, screen reader friendly, proper focus states
- **Performance Optimized**: Lazy loading, optimized animations, reduced motion support

## File Structure

```
├── index.html              # Main HTML structure
├── styles/
│   ├── main.css           # Core styles and base components
│   ├── components.css     # Section-specific component styles
│   └── responsive.css     # Media queries and responsive design
├── scripts/
│   ├── main.js           # Core JavaScript functionality
│   └── language.js       # Bilingual language switching
└── README.md             # This file
```

## Sections

1. **Header/Navigation** - Sticky header with smooth scroll transitions
2. **Hero** - Split layout with video background and waffle showcase
3. **Two Ways to Enjoy Waffles** - Sweet vs savory with hover effects
4. **Drinks by the Lake** - Parallax background section
5. **Menu** - Interactive accordion with categorized items
6. **Special Waffles** - Asymmetrical grid of must-try items
7. **Ambience** - Horizontal swipe gallery
8. **Visit Nemo's Raft** - Location, hours, and contact info
9. **Groups & Events** - Pre-orders and private bookings
10. **Practical Info** - FAQ accordion
11. **Social Feed** - Instagram-style grid
12. **Footer** - Contact, links, and legal information

## Customization

### Updating Content

#### Hours and Contact Information
Edit the following in `index.html`:
- Opening hours: Search for "12:00 – 18:00" and update
- Phone number: Update `+358503525936` in multiple locations
- Email: Update `info@nemosraft.fi` in mailto links

#### Menu Items
Menu items are in the `.menu-accordion` section. Each item follows this structure:
```html
<div class="menu-item">
    <div class="item-info">
        <h4 data-en="English Name" data-fi="Finnish Name">English Name</h4>
        <p data-en="English description" data-fi="Finnish description">English description</p>
    </div>
    <span class="price">€7</span>
</div>
```

#### Social Media Links
Update Instagram and Facebook URLs:
- Search for `@nemosraft` and `https://instagram.com/nemosraft`
- Replace with your actual social media handles

### Assets to Replace

The following placeholder images should be replaced with actual photos:

#### Hero Section
- `nemos-hero-1080.mp4` - 7-10 second loop video of the raft/harbor
- `nemos-hero-poster.jpg` - Video poster frame
- Waffle hero image (currently using Pexels placeholder)

#### Replacing Hero Image with Video
To replace a static image (like your `/Composite-sliding-patio-door.png` or the current placeholder) with a video:

1. **Prepare Your Video Asset**:
   - Use a web-friendly format like `.mp4` or `.webm`.
   - Create a `public/videos/` directory in your project root.
   - Save your video file there (e.g., `public/videos/patio-video.mp4`).

2. **Update index.html**:
   Find the `<img>` tag with the class `waffle-image` (around line 85) and replace it with a `<video>` element.

   *Note: Although there is a React folder (`src/`), the current website content is managed directly in `index.html`.*

   ```html
   <video
       autoplay
       muted
       loop
       playsinline
       class="waffle-image"
       poster="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600">
       <source src="/videos/patio-video.mp4" type="video/mp4">
       Your browser does not support the video tag.
   </video>
   ```

3. **Verify Styles**:
   Ensure the `.waffle-image` class in `styles/components.css` still uses `object-fit: cover` to ensure the video fills its container without distortion.

#### Gallery Images
Replace the Pexels URLs in the ambience gallery with actual photos of:
- Terrace seating
- Sunset views  
- Lakeside dining
- Bar area
- Cozy atmosphere

#### Menu Photos
Update the special waffles section with high-quality photos of:
- Bilberry Cream waffle
- Savory Dill Veggie waffle  
- Chocolate Hazelnut Indulgence waffle

### Color Scheme

The design uses these CSS custom properties:
- Primary (Lake Blue): `#003366`
- Accent (Gold): `#D4A017`
- Background: `#FFFFFF` and `#F8F8F8`
- Text: `#1A1A1A`

### Typography

- Headings: Playfair Display (serif)
- Body: Open Sans (sans-serif)
- Loaded via Google Fonts

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- iOS Safari and Android Chrome for mobile
- Graceful degradation for older browsers
- Reduced motion support for accessibility

## Performance Notes

- Images are lazy-loaded where appropriate
- CSS and JavaScript are split into logical files
- Animations respect `prefers-reduced-motion`
- Video includes fallback poster image

## Development

To make changes:

1. Update HTML content in `index.html`
2. Modify styles in the appropriate CSS file
3. Add new functionality in `scripts/main.js`
4. Update translations in `scripts/language.js`

The site is designed to work as static files - simply upload all files to your web server.

## License

© 2024 Nemo's Raft. All rights reserved.
