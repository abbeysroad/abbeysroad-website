/* ==========================================================================
   PANDORA TRAVEL — DEDICATED DESTINATION PAGES INTERACTIVE LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. DYNAMICALLY ENSURE MOBILE NAVIGATION OVERLAY DRAWER EXISTS
  let mobileNavOverlay = document.getElementById('mobile-nav-overlay');
  if (!mobileNavOverlay) {
    mobileNavOverlay = document.createElement('div');
    mobileNavOverlay.id = 'mobile-nav-overlay';
    mobileNavOverlay.className = 'mobile-nav-overlay';
    mobileNavOverlay.innerHTML = `
      <button class="mobile-nav-close-btn" id="mobile-nav-close-btn" aria-label="Close menu">&times;</button>
      <nav class="mobile-nav-content">
        <ul class="mobile-nav-links">
          <li class="mobile-section-header-title">SITEMAP</li>
          <li><a href="../index.html" class="mobile-nav-link">Home</a></li>
          <li><a href="../philippines.html" class="mobile-nav-link active">Philippines Destination</a></li>
          <li><a href="../oman.html" class="mobile-nav-link">Oman Destination</a></li>
          <li><a href="../indochina.html" class="mobile-nav-link">Indochina Destination</a></li>
          <li><a href="../nordic.html" class="mobile-nav-link">The Nordic Destination</a></li>
          
          <li class="mobile-section-header-title">DISCOVER</li>
          <li><a href="../philippines.html#chapter-palawan" class="mobile-nav-link sub-link">Islands</a></li>
          <li><a href="../philippines.html#chapter-coron" class="mobile-nav-link sub-link">Adventure</a></li>
          <li><a href="../philippines.html#chapter-banaue" class="mobile-nav-link sub-link">Mountains</a></li>
          <li><a href="../philippines.html#chapter-manila" class="mobile-nav-link sub-link">Culture</a></li>
          
          <li class="mobile-section-header-title">EXPLORE</li>
          <li><a href="../philippines.html#itinerary-viewport" class="mobile-nav-link">The Ultimate 12-Day Escape</a></li>
          <li><a href="../philippines.html#itinerary-viewport" class="mobile-nav-link">21-Day Premium Family Journey</a></li>
          <li><a href="../philippines.html#concierge-section" class="mobile-nav-link">Concierge</a></li>
          <li><a href="../philippines.html#about-section" class="mobile-nav-link">About Us</a></li>
          <li><a href="../philippines.html#team-section" class="mobile-nav-link">Our Team</a></li>
        </ul>
        <a href="../index.html#contact-section" class="mobile-nav-cta-btn">
          LET'S CONNECT
        </a>
      </nav>
    `;
    document.body.appendChild(mobileNavOverlay);
  }

  // 2. MOBILE BURGER MENU CLICK TOGGLE
  const burgerBtn = document.getElementById('burger-btn');
  const closeBtn = document.getElementById('mobile-nav-close-btn');

  function openMobileMenu() {
    if (burgerBtn) burgerBtn.classList.add('burger-active');
    if (mobileNavOverlay) mobileNavOverlay.classList.add('mobile-active');
  }

  function closeMobileMenu() {
    if (burgerBtn) burgerBtn.classList.remove('burger-active');
    if (mobileNavOverlay) mobileNavOverlay.classList.remove('mobile-active');
  }

  if (burgerBtn) {
    burgerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (mobileNavOverlay && mobileNavOverlay.classList.contains('mobile-active')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeMobileMenu);
  }

  document.querySelectorAll('.mobile-nav-link, .mobile-nav-cta-btn').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // 3. POPULATE ITINERARIES DROPDOWN MENU MATCHING OFFICIAL ITINERARIES
  const itinerariesMenu = document.getElementById('itineraries-menu');
  if (itinerariesMenu) {
    itinerariesMenu.innerHTML = '';
    const officialItineraries = [
      { name: 'The Ultimate 12-Day Philippines Escape', link: '../philippines.html#itinerary-viewport' },
      { name: 'Philippines: 21-Day Premium Family Journey', link: '../philippines.html#itinerary-viewport' }
    ];

    officialItineraries.forEach(it => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = it.link;
      a.textContent = it.name;
      li.appendChild(a);
      itinerariesMenu.appendChild(li);
    });
  }

  // 4. DESKTOP HOVER & TOUCH DROPDOWN BEHAVIOR
  const dropdownItems = document.querySelectorAll('.dropdown-item');
  dropdownItems.forEach(item => {
    const trigger = item.querySelector('.dropdown-trigger');
    const menu = item.querySelector('.dropdown-menu');

    if (!trigger || !menu) return;

    // Desktop hover enter/leave
    item.addEventListener('mouseenter', () => {
      if (window.innerWidth > 1024) {
        document.querySelectorAll('.dropdown-menu').forEach(m => {
          if (m !== menu) m.classList.remove('show');
        });
        menu.classList.add('show');
      }
    });

    item.addEventListener('mouseleave', () => {
      if (window.innerWidth > 1024) {
        menu.classList.remove('show');
      }
    });

    // Touch / Click fallback for mobile/tablet
    trigger.addEventListener('click', (e) => {
      if (window.innerWidth <= 1024) {
        e.preventDefault();
        e.stopPropagation();
        const isOpen = menu.classList.contains('show');
        document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('show'));
        if (!isOpen) menu.classList.add('show');
      }
    });
  });

  // Close open dropdowns when clicking anywhere outside on desktop
  document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('show'));
  });
});
