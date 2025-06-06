const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navbg = document.querySelector('.nav-bg');
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    navbg.classList.toggle('active');
});
// Handle preloader fade-out only
document.addEventListener('DOMContentLoaded', function() {
    // Fade out preloader after 2 seconds
    setTimeout(function() {
        const preloader = document.querySelector('.preloader');
        preloader.style.animation = 'fadeOut 1s ease-out forwards';
        
        // Remove preloader after animation completes
        setTimeout(function() {
            preloader.style.display = 'none';
            // Remove this line since we don't need to fade in the content
            // document.body.classList.add('content-visible');
        }, 1000);
    }, 2000);
});

var typed = new Typed('#element', {
    strings: ['Sarthak Aggarwal', 'Software Engineer', 'CS Student', 'Full Stack Developer'],
    typeSpeed: 80,
    backSpeed: 40,
    smartBackspace: true, // Default value
    loop: true,
    backDelay: 900,
    loopCount: Infinity,
  });
        
                const canvas = document.getElementById("dynamicCanvas");
                const ctx = canvas.getContext("2d");
                  function resizeCanvas() {
            // Set canvas width and height to match the window size
            canvas.width = window.innerWidth; // Full width of the viewport
            canvas.height = window.innerHeight; // Full height of the viewport
        
          }
        
          // Function to draw content on the canvas (optional)
          function drawCanvasContent() {
            context.clearRect(0, 0, canvas.width, canvas.height); // Clear previous content
            context.fillStyle = "blue";
            context.fillRect(10, 10, 100, 100); // Example: draw a rectangle
          }
        
          // Initial canvas size setup
          resizeCanvas();
        
          // Adjust canvas size when the window resizes
          window.addEventListener('resize', resizeCanvas);
                let dots = [];
                const dotSpacing = 22;
                const dotRadius = 0.7;
                const maxLightRadius = 900;
                const isMobile = window.matchMedia('(max-width: 760px)').matches;
        
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
        
                function generateDots() {
                    dots = [];
                    for (let y = 0; y < canvas.height; y += dotSpacing) {
                        for (let x = 0; x < canvas.width; x += dotSpacing) {
                            dots.push({ x, y });
                        }
                    }
                }
        
                generateDots();
        
                let mouse = { x: -maxLightRadius, y: -maxLightRadius };
                let smoothMouse = { x: -maxLightRadius, y: -maxLightRadius };
        
                document.addEventListener("mousemove", (e) => {
                    mouse.x = e.clientX;
                    mouse.y = e.clientY;
                });
                
                if (isMobile) {
                    mouse.x = (window.innerWidth / 4);
                    mouse.y = (window.innerHeight / 2);
                }
        
                function smoothTransition() {
                    const isMobile = window.matchMedia('(max-width: 768px)').matches;
                    if (isMobile) {
                        smoothMouse.x += (mouse.x - smoothMouse.x) * 0.05;
                        smoothMouse.y += (mouse.y - smoothMouse.y) * 0.05;
                    } else {
                        smoothMouse.x += (mouse.x - smoothMouse.x) * 0.09;
                        smoothMouse.y += (mouse.y - smoothMouse.y) * 0.09;
                    }
                }
        
                function drawBackground() {
        
                    const angle = 20 * Math.PI / 180; // Convert 25 degrees to radians
                    const x2 = Math.cos(angle) * 0; // Starting point X (0)
                    const y2 = Math.sin(angle) * 0; // Starting point Y (0)
                    const x1 = Math.cos(angle) * canvas.width; // Ending point X
                    const y1 = Math.sin(angle) * canvas.width; // Ending point Y
                    const gradient = ctx.createLinearGradient(x2, y1, x1, y2);
                    gradient.addColorStop(0.18, "rgba(0,0,0)");
                    gradient.addColorStop(1, "rgba(23,0,83,1)");
                    ctx.fillStyle = gradient;
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                }
        
                function drawDots() {
                    dots.forEach(dot => {
                        const distance = Math.hypot(dot.x - smoothMouse.x, dot.y - smoothMouse.y);
                        let alpha = Math.max(0, 1 - distance / maxLightRadius);
                        alpha = Math.pow(alpha, 2);
                        ctx.fillStyle = `rgba(0, 255, 0, ${alpha})`;
                        ctx.beginPath();
                        ctx.arc(dot.x, dot.y, dotRadius, 0, Math.PI * 2);
                        ctx.fill();
                    });
                }
        
                function drawLightEffect() {
                    const gradient = ctx.createRadialGradient(smoothMouse.x, smoothMouse.y, 0, smoothMouse.x, smoothMouse.y, maxLightRadius);
                    gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
                    gradient.addColorStop(1, "rgba(0, 0, 0, 1)");
                    ctx.fillStyle = gradient;
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                }
        
                function draw() {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    drawBackground();
                    smoothTransition();
                    drawDots();
                    drawLightEffect();
                    requestAnimationFrame(draw);
                }
        
                draw();
        
                window.addEventListener("resize", () => {
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                    generateDots();
                });
canvas.addEventListener('wheel', function(e) {
  window.scrollBy(0, e.deltaY);
}, { passive: false });