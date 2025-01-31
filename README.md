# Modern Preloader Animation

A sophisticated and visually appealing preloader animation built with GSAP (GreenSock Animation Platform) and modern web technologies. This project demonstrates a smooth, professional loading experience with dynamic progress counting and elegant transitions.

## Features

- 🎯 Smooth progress counter animation
- 🎨 Modern gradient color schemes
- ⚡ GSAP-powered transitions and animations
- 📱 Fully responsive design
- 🎭 Custom text reveal effects
- 🌊 Elegant color wipe transitions
- 🎪 Clean and minimal UI

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- GSAP 3.12.2 (Animation Library)
- TailwindCSS (Utility-first CSS framework)
- Space Grotesk Font Family

## Installation

1. Clone the repository:
```bash
git clone https://github.com/prashantkoirala465/Modern-Preloader
cd Modern-Preloader
```

2. Open `index.html` in your preferred web browser.

## Usage

1. Include the required dependencies in your HTML file:

```html
<link rel="stylesheet" href="styles.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/SplitText.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/CustomEase.min.js"></script>
```

2. Add the preloader HTML structure:

```html
<div id="preloader" class="font-grotesk">
    <div class="preloader-content">
        <div class="progress-text">0</div>
        <div class="loading-text">Loading</div>
    </div>
</div>
```

3. Initialize the preloader:

```javascript
const preloader = new Preloader();
```

## Customization

### Colors

Modify the gradient colors in `styles.css`:

```css
.progress-text {
    background: linear-gradient(to right, #ffffff, #818cf8);
}

.colorWipe {
    background: linear-gradient(45deg, #4f46e5, #818cf8);
}
```

### Animation Timing

Adjust the animation timings in `preloader.js`:

```javascript
gsap.to(element, {
    duration: 1, // Change duration
    ease: 'power4.inOut' // Modify easing function
});
```

### Progress Speed

Modify the progress simulation in `preloader.js`:

```javascript
setInterval(() => {
    progress += Math.random() * 8; // Adjust increment value
}, 200); // Modify interval timing
```

## Features Breakdown

### 1. Progress Counter
- Smooth number counting animation
- Dynamic opacity based on progress
- Tabular number formatting for consistent width

### 2. Transition Effects
- Color wipe transition between loading and content
- Smooth fade-in animations for content
- Staggered text reveal effects

### 3. Responsive Design
- Fluid typography using clamp()
- Mobile-friendly layout
- Optimized for various screen sizes

## Performance Optimization

- Uses `will-change` for optimized animations
- Implements `requestAnimationFrame` for smooth progress updates
- Efficient GSAP timeline management
- Minimal DOM operations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- GSAP by GreenSock for powerful animations
- TailwindCSS for utility classes
- Space Grotesk font family by Florian Karsten
