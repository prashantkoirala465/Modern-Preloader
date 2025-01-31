class Preloader {
    constructor() {
        this.progress = 0;
        this.targetProgress = 0;
        this.timeline = gsap.timeline();
        this.splitText = null;
        
        gsap.registerEffect({
            name: "textReveal",
            effect: (targets, config) => {
                return gsap.to(targets, {
                    duration: config.duration || 1.2,
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    rotateX: 0,
                    stagger: {
                        amount: config.stagger || 0.3,
                        from: config.from || "random"
                    },
                    ease: "expo.out"
                });
            },
            defaults: { duration: 1.2, stagger: 0.3, from: "random" }
        });

        this.init();
    }

    init() {
        this.animate();
    }

    drawProgress() {
        const progressText = document.querySelector('.progress-text');
        if (progressText) {
            progressText.textContent = `${Math.round(this.progress)}`;
            progressText.style.opacity = Math.min(1, this.progress / 30);
        }
    }

    update() {
        const diff = this.targetProgress - this.progress;
        if (Math.abs(diff) > 0.1) {
            this.progress += diff * 0.1;
        } else {
            this.progress = this.targetProgress;
        }

        if (this.progress >= 100) {
            const colorWipe = document.createElement('div');
            colorWipe.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100vh;
                background: linear-gradient(45deg, #4f46e5, #818cf8);
                transform: scaleX(0);
                transform-origin: left;
                z-index: 1001;
            `;
            document.body.appendChild(colorWipe);

            this.timeline
                .to(colorWipe, {
                    scaleX: 1,
                    duration: 1,
                    ease: 'power4.inOut'
                })
                .to('#preloader', {
                    opacity: 0,
                    duration: 0.5,
                    ease: 'power2.inOut'
                }, '-=0.5')
                .to(colorWipe, {
                    scaleX: 0,
                    transformOrigin: 'right',
                    duration: 1,
                    ease: 'power4.inOut'
                })
                .to('.content', {
                    opacity: 1,
                    visibility: 'visible',
                    duration: 0.8,
                    ease: 'power3.out'
                }, '-=0.3')
                .to('.content h1', {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'expo.out'
                })
                .to('.content p', {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out'
                }, '-=0.6')
                .call(() => {
                    document.getElementById('preloader').style.display = 'none';
                    colorWipe.remove();
                });
        }
    }

    draw(time) {
        this.drawProgress();
    }

    animate() {
        const time = performance.now() * 0.001;
        this.update();
        this.draw(time);

        if (this.progress < 100) {
            requestAnimationFrame(() => this.animate());
        }
    }

    setProgress(value) {
        this.targetProgress = Math.min(100, Math.max(0, value));
    }
}

// Initialize the preloader
const preloader = new Preloader();

// Simulate loading progress
let progress = 0;
const interval = setInterval(() => {
    progress += Math.random() * 8;
    preloader.setProgress(progress);
    
    if (progress >= 100) {
        clearInterval(interval);
    }
}, 200);