document.addEventListener('DOMContentLoaded', () => {

  // --- HEADER SCROLL ACTION ---
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // --- ANIMATE ON SCROLL (FADE IN DAYS) ---
  const dayCards = document.querySelectorAll('.day-card-container');
  const scrollOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const dayObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, scrollOptions);

  dayCards.forEach(card => dayObserver.observe(card));

  // --- CAROUSEL SLIDERS ---
  function initCarousel(carouselId) {
    const container = document.getElementById(carouselId);
    if (!container) return;

    const slides = container.querySelectorAll('.carousel-slide');
    const nextBtn = container.querySelector('.carousel-btn.next');
    const prevBtn = container.querySelector('.carousel-btn.prev');
    let currentIndex = 0;

    function showSlide(index) {
      slides.forEach(s => s.classList.remove('active'));
      if (index >= slides.length) currentIndex = 0;
      else if (index < 0) currentIndex = slides.length - 1;
      else currentIndex = index;
      slides[currentIndex].classList.add('active');
    }

    nextBtn.addEventListener('click', () => {
      showSlide(currentIndex + 1);
    });

    prevBtn.addEventListener('click', () => {
      showSlide(currentIndex - 1);
    });

    // Auto play every 6s
    let autoPlayInterval = setInterval(() => {
      showSlide(currentIndex + 1);
    }, 6000);

    // Stop auto play on user click
    container.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
    container.addEventListener('mouseleave', () => {
      autoPlayInterval = setInterval(() => {
        showSlide(currentIndex + 1);
      }, 6000);
    });
  }

  initCarousel('carousel-day4');

  // --- SVG MAP PATH INTERACTION ---
  const path = document.getElementById('route-path-active');
  const pins = document.querySelectorAll('.map-pin');
  const routeSteps = document.querySelectorAll('.route-step');
  
  // Total length of the SVG path
  let pathLength = 0;
  if (path) {
    pathLength = path.getTotalLength();
    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;
  }

  // Draw percentage of route
  function updateRouteDraw(percent) {
    if (!path) return;
    const offset = pathLength - (pathLength * percent);
    path.style.strokeDashoffset = offset;
  }

  function setActiveState(dayNum) {
    // Reset all
    pins.forEach(pin => pin.classList.remove('active'));
    routeSteps.forEach(step => step.classList.remove('active'));

    if (dayNum <= 2) {
      document.getElementById('pin-stockholm').classList.add('active');
      document.getElementById('pin-karlstad').classList.add('active');
      document.getElementById('step-day1-2').classList.add('active');
      updateRouteDraw(0.25);
    } else if (dayNum <= 4) {
      document.getElementById('pin-oslo').classList.add('active');
      document.getElementById('pin-al').classList.add('active');
      document.getElementById('pin-flam').classList.add('active');
      document.getElementById('step-day3-4').classList.add('active');
      updateRouteDraw(0.60);
    } else {
      document.getElementById('pin-copenhagen').classList.add('active');
      document.getElementById('step-day5-7').classList.add('active');
      updateRouteDraw(1.0);
    }
  }

  // SVG Pin Clicks
  pins.forEach(pin => {
    pin.addEventListener('click', () => {
      const targetDay = pin.getAttribute('data-day');
      setActiveState(parseInt(targetDay));
      const targetEl = document.getElementById(`day-${targetDay}`);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });

  // Route Step Deck Clicks
  routeSteps.forEach(step => {
    step.addEventListener('click', () => {
      const targetId = step.getAttribute('data-target');
      const dayNum = parseInt(targetId.replace('day-', ''));
      setActiveState(dayNum);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });

  // Scrollspy to update active map route
  window.addEventListener('scroll', () => {
    let currentDay = 1;
    dayCards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.4) {
        currentDay = parseInt(card.id.replace('day-', ''));
      }
    });
    setActiveState(currentDay);
  });

  // Initial state
  setActiveState(1);

  // --- LIVE QUOTE CALCULATOR ---
  const basePricePerPerson = 2495; // Base price for package
  const form = document.getElementById('booking-calculator');
  const travelersInput = document.getElementById('travelers');
  const cabinSelect = document.getElementById('cabin-style');
  const singleSelect = document.getElementById('single-supplement');
  const priceDisplay = document.getElementById('price-total');

  function calculateQuote() {
    const numTravelers = parseInt(travelersInput.value) || 1;
    
    // Date peak multiplier
    const dateSelect = document.getElementById('travel-date').value;
    let dateMultiplier = 1.0;
    if (dateSelect === 'jul10') dateMultiplier = 1.15; // July peak season +15%
    if (dateSelect === 'aug05') dateMultiplier = 1.05; // August +5%

    // Cabin addon
    const selectedCabin = cabinSelect.options[cabinSelect.selectedIndex];
    const cabinAddon = parseFloat(selectedCabin.getAttribute('data-addon')) || 0;

    // Single Supplement addon
    let singleAddon = 0;
    if (singleSelect.value === 'yes') {
      singleAddon = 550;
    }

    const calculatedBase = basePricePerPerson * dateMultiplier;
    const pricePerPerson = calculatedBase + cabinAddon + singleAddon;
    const totalPrice = Math.round(pricePerPerson * numTravelers);

    // Format currency
    priceDisplay.textContent = `$${totalPrice.toLocaleString()}`;
  }

  // Bind change/input events
  travelersInput.addEventListener('input', calculateQuote);
  cabinSelect.addEventListener('change', calculateQuote);
  singleSelect.addEventListener('change', calculateQuote);
  document.getElementById('travel-date').addEventListener('change', calculateQuote);

  // Initial Calculation
  calculateQuote();

  // Handle Form Submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert(`Thank you for booking! We have reserved your Nordic Summer Escape. A representative from NordisTravel will contact you shortly.`);
  });
});
