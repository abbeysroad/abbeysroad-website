/* ==========================================================================
   PANDORA TRAVEL — DEDICATED DESTINATION PAGES INTERACTIVE LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // 1. DYNAMICALLY DETECT CURRENT DESTINATION CONTEXT
  const path = window.location.pathname.toLowerCase();
  const breadcrumbsText = (document.querySelector('.dest-breadcrumbs')?.textContent || '').toLowerCase();
  const titleText = (document.title || '').toLowerCase();
  
  let currentDest = 'philippines'; // default fallback
  if (path.includes('/oman/') || breadcrumbsText.includes('oman') || titleText.includes('oman')) {
    currentDest = 'oman';
  } else if (path.includes('/indochina/') || breadcrumbsText.includes('indochina') || titleText.includes('indochina')) {
    currentDest = 'indochina';
  } else if (path.includes('/nordic/') || breadcrumbsText.includes('nordic') || titleText.includes('nordic')) {
    currentDest = 'nordic';
  } else if (path.includes('/philippines/') || breadcrumbsText.includes('philippines') || titleText.includes('philippines')) {
    currentDest = 'philippines';
  }

  // 2. DEFINE ITINERARIES MAP FOR ALL DESTINATIONS
  const itineraryMap = {
    oman: [
      { name: 'Oman – Luxury, Desert & Mountains', link: '../oman.html#itinerary-viewport' },
      { name: 'Oman: Nature & Adventure', link: '../oman.html#itinerary-viewport' },
      { name: 'Oman: 10-Day Family & Wildlife Journey', link: '../oman.html#itinerary-viewport' },
      { name: 'Oman & Dubai: 12-Day Arabian Wonders', link: '../oman.html#itinerary-viewport' }
    ],
    indochina: [
      { name: '20-Day Luxury Indochina & Thailand Escape', link: '../indochina.html#itinerary-viewport' }
    ],
    philippines: [
      { name: 'The Ultimate 12-Day Philippines Escape', link: '../philippines.html#itinerary-viewport' },
      { name: 'Philippines: 21-Day Premium Family Journey', link: '../philippines.html#itinerary-viewport' }
    ],
    nordic: [
      { name: 'Nordic Aurora & Fjords Expedition', link: '../nordic.html#itinerary-viewport' }
    ]
  };

  // 3. DEFINE DISCOVER SUB-PAGE MAP FOR ALL DESTINATIONS
  const discoverMap = {
    oman: [
      { name: 'Muscat', link: 'muscat.html' },
      { name: 'Jebel Akhdar', link: 'jebel-akhdar.html' },
      { name: 'Wahiba Sands', link: 'wahiba-sands.html' },
      { name: 'Nizwa', link: 'nizwa.html' },
      { name: 'Wadi Shab', link: 'wadi-shab.html' },
      { name: 'Musandam', link: 'musandam.html' },
      { name: 'Salalah', link: 'salalah.html' }
    ],
    indochina: [
      { name: 'Hanoi', link: 'hanoi.html' },
      { name: 'Ninh Binh & Ha Long', link: 'ninh-binh.html' },
      { name: 'Hoi An', link: 'hoi-an.html' },
      { name: 'Saigon', link: 'saigon.html' },
      { name: 'Siem Reap', link: 'siem-reap.html' },
      { name: 'Bangkok & Islands', link: 'bangkok.html' },
      { name: 'Luang Prabang', link: 'luang-prabang.html' }
    ],
    philippines: [
      { name: 'Manila', link: 'manila.html' },
      { name: 'El Nido', link: 'el-nido.html' },
      { name: 'Coron', link: 'coron.html' },
      { name: 'Boracay', link: 'boracay.html' },
      { name: 'Siargao', link: 'siargao.html' },
      { name: 'Cebu & Moalboal', link: 'cebu.html' },
      { name: 'Bohol', link: 'bohol.html' },
      { name: 'Banaue', link: 'banaue.html' },
      { name: 'Mayon Volcano', link: 'mayon.html' }
    ],
    nordic: [
      { name: 'Nordic Capitals', link: '../nordic.html#chapter-capitals' },
      { name: 'Fjords & Glaciers', link: '../nordic.html#chapter-fjords' }
    ]
  };

  const activeItineraries = itineraryMap[currentDest] || itineraryMap.philippines;
  const activeDiscover = discoverMap[currentDest] || discoverMap.philippines;

  // 4. DYNAMICALLY BUILD MOBILE NAVIGATION OVERLAY DRAWER
  let mobileNavOverlay = document.getElementById('mobile-nav-overlay');
  if (!mobileNavOverlay) {
    mobileNavOverlay = document.createElement('div');
    mobileNavOverlay.id = 'mobile-nav-overlay';
    mobileNavOverlay.className = 'mobile-nav-overlay';
    document.body.appendChild(mobileNavOverlay);
  }

  const sitemapItems = [
    { name: 'Home', link: '../index.html' },
    { name: 'Philippines Destination', link: '../philippines.html', key: 'philippines' },
    { name: 'Oman Destination', link: '../oman.html', key: 'oman' },
    { name: 'Indochina Destination', link: '../indochina.html', key: 'indochina' },
    { name: 'The Nordic Destination', link: '../nordic.html', key: 'nordic' }
  ];

  mobileNavOverlay.innerHTML = `
    <button class="mobile-nav-close-btn" id="mobile-nav-close-btn" aria-label="Close menu">&times;</button>
    <nav class="mobile-nav-content">
      <ul class="mobile-nav-links">
        <li class="mobile-section-header-title">SITEMAP</li>
        ${sitemapItems.map(item => `<li><a href="${item.link}" class="mobile-nav-link ${item.key === currentDest ? 'active' : ''}">${item.name}</a></li>`).join('')}
        
        <li class="mobile-section-header-title">DISCOVER</li>
        ${activeDiscover.map(d => `<li><a href="${d.link}" class="mobile-nav-link sub-link">${d.name}</a></li>`).join('')}
        
        <li class="mobile-section-header-title">ITINERARIES</li>
        ${activeItineraries.map(it => `<li><a href="${it.link}" class="mobile-nav-link sub-link">${it.name}</a></li>`).join('')}
        
        <li><a href="../${currentDest}.html#concierge-section" class="mobile-nav-link" style="margin-top: 0.6rem;">Concierge</a></li>
        <li><a href="../${currentDest}.html#about-section" class="mobile-nav-link">About Us</a></li>
        <li><a href="../${currentDest}.html#team-section" class="mobile-nav-link">Our Team</a></li>
      </ul>
      <a href="../index.html#contact-section" class="mobile-nav-cta-btn">
        LET'S CONNECT
      </a>
    </nav>
  `;

  // 5. MOBILE BURGER MENU CLICK TOGGLE
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

  // 6. POPULATE DESKTOP ITINERARIES DROPDOWN MENU
  const itinerariesMenu = document.getElementById('itineraries-menu');
  if (itinerariesMenu) {
    itinerariesMenu.innerHTML = '';
    activeItineraries.forEach(it => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = it.link;
      a.textContent = it.name;
      li.appendChild(a);
      itinerariesMenu.appendChild(li);
    });
  }

  // 7. DESKTOP HOVER & TOUCH DROPDOWN BEHAVIOR
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

  // 8. DYNAMICALLY INJECT GLOBAL FOOTER WITH DESTINATIONS DIRECTORY ON ALL SUB-PAGES
  if (!document.getElementById('global-footer')) {
    const footerElem = document.createElement('footer');
    footerElem.id = 'global-footer';
    footerElem.innerHTML = `
    <div class="footer-content" id="footer-content-dynamic">
      <div class="footer-grid">
        <div>
          <h4 class="gold-text">PANDORA TRAVEL</h4>
          <p class="footer-subtext">Destination Commercial Partner</p>
          <p>Connecting World-class Destinations with the Nordic Travel Market.</p>
        </div>
        <div>
          <h4>Copenhagen Office</h4>
          <p>Borgmestervangen 31, 2200 Copenhagen</p>
          <p>Email: info@pandoratravel.dk</p>
        </div>
        <div>
          <h4>Strategic Alliances</h4>
          <p>Baron Travel DMC • Philippines</p>
          <p>Oman Safari DMC • Oman</p>
        </div>
      </div>

      <!-- DESTINATIONS & HIGHLIGHTED PLACES DIRECTORY -->
      <div class="footer-destinations-directory">
        <div class="footer-directory-title">EXPLORE OUR DESTINATIONS & HIGHLIGHTED PLACES</div>
        <div class="footer-directory-grid">
          
          <!-- PHILIPPINES -->
          <div class="footer-dir-col">
            <h5><a href="../philippines.html">The Philippines ▾</a></h5>
            <ul>
              <li><a href="../philippines/manila.html">Manila & Intramuros</a></li>
              <li><a href="../philippines/banaue.html">Banaue & Rice Terraces</a></li>
              <li><a href="../philippines/bohol.html">Bohol & Chocolate Hills</a></li>
              <li><a href="../philippines/cebu.html">Cebu & Visayas</a></li>
              <li><a href="../philippines/boracay.html">Boracay White Beach</a></li>
              <li><a href="../philippines/el-nido.html">El Nido & Bacuit Bay</a></li>
              <li><a href="../philippines/coron.html">Coron & Kayangan Lake</a></li>
              <li><a href="../philippines/siargao.html">Siargao Island</a></li>
              <li><a href="../philippines/mayon.html">Mount Mayon & Bicol</a></li>
            </ul>
          </div>

          <!-- OMAN -->
          <div class="footer-dir-col">
            <h5><a href="../oman.html">Sultanate of Oman ▾</a></h5>
            <ul>
              <li><a href="../oman/muscat.html">Muscat & Grand Mosque</a></li>
              <li><a href="../oman/nizwa.html">Nizwa & Historic Forts</a></li>
              <li><a href="../oman/jebel-akhdar.html">Jebel Akhdar Mountains</a></li>
              <li><a href="../oman/wahiba-sands.html">Wahiba Sands Desert</a></li>
              <li><a href="../oman/wadi-shab.html">Wadi Shab & Gorges</a></li>
              <li><a href="../oman/salalah.html">Salalah & Dhofar Coast</a></li>
              <li><a href="../oman/musandam.html">Musandam Fjords</a></li>
            </ul>
          </div>

          <!-- INDOCHINA -->
          <div class="footer-dir-col">
            <h5><a href="../indochina.html">Indochina ▾</a></h5>
            <ul>
              <li><a href="../indochina/hanoi.html">Hanoi & Old Quarter</a></li>
              <li><a href="../indochina/ninh-binh.html">Ninh Binh & Ha Long Bay</a></li>
              <li><a href="../indochina/hoi-an.html">Hoi An Ancient Town</a></li>
              <li><a href="../indochina/saigon.html">Saigon / Ho Chi Minh City</a></li>
              <li><a href="../indochina/siem-reap.html">Siem Reap & Angkor Wat</a></li>
              <li><a href="../indochina/luang-prabang.html">Luang Prabang</a></li>
              <li><a href="../indochina/bangkok.html">Bangkok & Thai Retreats</a></li>
            </ul>
          </div>

          <!-- THE NORDIC -->
          <div class="footer-dir-col">
            <h5><a href="../nordic.html">The Nordic ▾</a></h5>
            <ul>
              <li><a href="../nordic/copenhagen.html">Copenhagen & Nyhavn</a></li>
              <li><a href="../nordic/stockholm.html">Stockholm & Vasa Museum</a></li>
              <li><a href="../nordic/oslo.html">Oslo & Vigeland Park</a></li>
              <li><a href="../nordic/bergen.html">Bergen & Bryggen</a></li>
              <li><a href="../nordic/fjords.html">Norwegian Fjords & Flåm</a></li>
              <li><a href="../nordic/helsinki.html">Helsinki & Baltic Coast</a></li>
            </ul>
          </div>

        </div>
      </div>

    </div>
    <div class="footer-bottom">
      <p>&copy; 2026 Pandora Travel — Destination Market Development. All rights reserved.</p>
      <p>Crafted with ❤️ for B2B Nordic Travel Trade</p>
    </div>
    `;
    document.body.appendChild(footerElem);
  }

  // 9. MOBILE FLOATING SCROLL-TO-TOP BUTTON (#FFD85F WITH WHITE ARROW)
  if (!document.getElementById('mobile-back-to-top')) {
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

  // 10. MOBILE HERO OVERLAY SCROLL PIN LOGIC (FULL HERO IMAGE BOTTOM REACH)
  function initMobileHeroScrollPin() {
    const heroSection = document.querySelector('.film-chapter.chapter-intro, .hero-film-container, .dest-hero-section, #chapter-intro');
    if (!heroSection) return;

    const heroContent = heroSection.querySelector('.chapter-content-container, .dest-hero-content');
    if (!heroContent) return;

    let ticking = false;

    const updatePin = () => {
      if (window.innerWidth > 1024) {
        heroContent.style.transform = '';
        ticking = false;
        return;
      }

      const scrollY = window.scrollY || window.pageYOffset;
      const heroRect = heroSection.getBoundingClientRect();
      const heroTop = heroRect.top + scrollY;
      const heroHeight = heroSection.offsetHeight;

      const contentRect = heroContent.getBoundingClientRect();
      const contentHeight = heroContent.offsetHeight;

      if (!heroContent.dataset.initialTopOffset) {
        const currentMatrix = new DOMMatrix(getComputedStyle(heroContent).transform);
        const currentTy = currentMatrix.m42 || 0;
        heroContent.dataset.initialTopOffset = (contentRect.top + scrollY - heroTop - currentTy);
      }
      const initialTopOffset = parseFloat(heroContent.dataset.initialTopOffset);

      // Max scroll translation before bottom of overlay elements touch exact bottom edge of hero image
      const maxTranslate = Math.max(0, heroHeight - (initialTopOffset + contentHeight));

      const translateY = Math.min(Math.max(0, scrollY), maxTranslate);

      heroContent.style.transform = `translate3d(0, ${translateY.toFixed(1)}px, 0)`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updatePin);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', () => {
      if (heroContent) delete heroContent.dataset.initialTopOffset;
      updatePin();
    }, { passive: true });
    updatePin();
  }

  initMobileHeroScrollPin();
});
