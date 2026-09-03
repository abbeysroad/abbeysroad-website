document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // LENIS SMOOTH MOMENTUM SCROLL
  // ==========================================================================
  let lenis;
  if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  // ==========================================================================
  // THREE.JS WEBGL PARTICLE BACKGROUND
  // ==========================================================================
  function initThreeWebGL() {
    const canvas = document.getElementById('hero-webgl-canvas');
    if (!canvas || typeof THREE === 'undefined') return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 100;

    const particlesCount = 300;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    const colorGold = new THREE.Color(getComputedStyle(document.documentElement).getPropertyValue('--accent-gold').trim() || '#cfaa5c');
    const colorCyan = new THREE.Color('#C3F8FE');
    const colorWhite = new THREE.Color('#FFFFFF');

    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 300;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 300;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 200;

      const rand = Math.random();
      const chosenColor = rand > 0.6 ? colorGold : (rand > 0.3 ? colorCyan : colorWhite);
      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 2.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });

    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    let mouseX = 0;
    let mouseY = 0;
    window.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 12;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 12;
    });

    function animateThree() {
      requestAnimationFrame(animateThree);

      particleSystem.rotation.y += 0.0006;
      particleSystem.rotation.x += 0.0003;

      camera.position.x += (mouseX - camera.position.x) * 0.04;
      camera.position.y += (-mouseY - camera.position.y) * 0.04;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    }
    animateThree();

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  // ==========================================================================
  // CLICKABLE MOBILE BURGER MENU OVERLAY HANDLER
  // ==========================================================================
  function initMobileBurgerMenu() {
    const burgerBtn = document.getElementById('burger-btn');
    const overlay = document.getElementById('mobile-nav-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-nav-cta-btn');

    if (!burgerBtn || !overlay) return;

    function toggleMenu() {
      burgerBtn.classList.toggle('burger-active');
      overlay.classList.toggle('mobile-active');
    }

    function closeMenu() {
      burgerBtn.classList.remove('burger-active');
      overlay.classList.remove('mobile-active');
    }

    burgerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    const closeBtn = document.getElementById('mobile-nav-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeMenu();
      });
    }

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });
  }

  // ==========================================================================
  // MULTI-DROPDOWN MENU CLICK TOGGLE CONTROLLER
  // ==========================================================================
  function initDropdownMenus() {
    const triggers = document.querySelectorAll('.dropdown-trigger');
    triggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const menu = trigger.nextElementSibling;
        
        document.querySelectorAll('.dropdown-menu').forEach(m => {
          if (m !== menu) m.classList.remove('show');
        });
        
        if (menu) menu.classList.toggle('show');
      });
    });

    document.addEventListener('click', () => {
      document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('show'));
    });
  }

  // ==========================================================================
  // B2B FORM SUBMISSION SIMULATION
  // ==========================================================================
  function initB2BForm() {
    const form = document.getElementById('b2b-contact-form');
    const successMsg = document.getElementById('form-success-msg');
    
    if (!form || !successMsg) return;
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Simulate submission success
      successMsg.style.display = 'block';
      form.reset();
      
      // Hide success message after 6 seconds
      setTimeout(() => {
        successMsg.style.display = 'none';
      }, 6000);
    });
  }

  // ==========================================================================
  // HERO MULTI-DESTINATION SLIDESHOW
  // ==========================================================================
  function initHeroSlideshow() {
    const slides = document.querySelectorAll('#hero-slideshow-container .hero-slide');
    if (slides.length <= 1) return;
    
    let activeIdx = 0;
    setInterval(() => {
      slides[activeIdx].classList.remove('active');
      activeIdx = (activeIdx + 1) % slides.length;
      slides[activeIdx].classList.add('active');
    }, 5000);
  }

  // Header Scroll Listener
  window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile Floating Scroll-to-Top Button (#FFD85F with White Arrow)
  function initMobileBackToTop() {
    if (document.getElementById('mobile-back-to-top')) return;
    const backToTopBtn = document.createElement('button');
    backToTopBtn.id = 'mobile-back-to-top';
    backToTopBtn.setAttribute('aria-label', 'Scroll to top');
    backToTopBtn.innerHTML = `
      <svg viewBox="0 0 24 24">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    `;
    document.body.appendChild(backToTopBtn);

    const toggleBtnVisibility = () => {
      if (window.scrollY > 250) {
        backToTopBtn.classList.add('show-btn');
      } else {
        backToTopBtn.classList.remove('show-btn');
      }
    };

    window.addEventListener('scroll', toggleBtnVisibility, { passive: true });
    toggleBtnVisibility();

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Initialize features
  initThreeWebGL();
  initMobileBurgerMenu();
  initDropdownMenus();
  initB2BForm();
  initHeroSlideshow();
  initMobileBackToTop();

});
