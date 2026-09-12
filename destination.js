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
    { name: 'Philippines Destination', link: '../philippines.html', key: 'philippines' }
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
          
          <div style="margin-top: 0.6rem; line-height: 1.5; font-size: 0.88rem;">
            <strong style="color: var(--accent-gold); display: block; margin-bottom: 0.1rem;">Copenhagen Office</strong>
            <p style="margin-bottom: 0.2rem; color: rgba(255,255,255,0.85);">Borgmestervangen 31, 2200 Copenhagen</p>
            <p style="margin-bottom: 0.6rem; color: rgba(255,255,255,0.85);">Email: <a href="mailto:info@pandoratravel.dk" style="color: var(--accent-cyan); text-decoration: none;">info@pandoratravel.dk</a></p>
            
            <strong style="color: var(--accent-gold); display: block; margin-bottom: 0.1rem;">Philippines / Manila Office</strong>
            <p style="margin-bottom: 0.6rem; color: rgba(255,255,255,0.85);">Email: <a href="mailto:info@pandoratravel.dk" style="color: var(--accent-cyan); text-decoration: none;">info@pandoratravel.dk</a></p>
            
            <strong style="color: var(--accent-gold); display: block; margin-bottom: 0.1rem;">Indochina / China Office</strong>
            <p style="margin-bottom: 0.2rem; color: rgba(255,255,255,0.85);">Email: <a href="mailto:info@pandoratravel.dk" style="color: var(--accent-cyan); text-decoration: none;">info@pandoratravel.dk</a></p>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; justify-content: center;">
          <h4 style="margin-bottom: 0.4rem;">Terms & Conditions</h4>
          <p style="margin-bottom: 0.3rem;"><a href="#" onclick="alert('Terms & Conditions: All bookings, DMC partnerships, and itinerary reservations governed under Danish commercial travel regulations.'); return false;" style="color: rgba(255,255,255,0.85); text-decoration: none;">Terms of Service</a></p>
          <p style="margin-bottom: 1.2rem;"><a href="#" onclick="alert('Privacy Policy: Pandora Travel respects your data privacy under EU GDPR guidelines.'); return false;" style="color: rgba(255,255,255,0.85); text-decoration: none;">Privacy Policy</a></p>

          <h4 style="margin-bottom: 0.4rem;">FAQ</h4>
          <p style="margin-bottom: 0.3rem;"><a href="#" onclick="alert('FAQ: Pandora Travel acts as a B2B commercial representative and destination concierge for Nordic outbound tour operators.'); return false;" style="color: rgba(255,255,255,0.85); text-decoration: none;">General FAQ</a></p>
          <p style="margin-bottom: 0;"><a href="#" onclick="alert('B2B Trade FAQ: For tour operator inquiries and DMC representation, contact info@pandoratravel.dk'); return false;" style="color: rgba(255,255,255,0.85); text-decoration: none;">B2B Trade FAQ</a></p>
        </div>

        <div style="display: flex; flex-direction: column; justify-content: center;">
          <h4>Social Media</h4>
          <p style="margin-bottom: 0.8rem; font-size: 0.88rem; color: rgba(255,255,255,0.85);">Follow Pandora Travel online:</p>
          <div class="footer-social-icons" style="display: flex; gap: 0.8rem; align-items: center;">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn" style="display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: rgba(16, 76, 113, 0.45); border: 1.5px solid var(--accent-cyan); border-radius: 50%; color: var(--accent-cyan); transition: all 0.3s ease; text-decoration: none;" onmouseover="this.style.background='var(--accent-cyan)'; this.style.color='#0A192F';" onmouseout="this.style.background='rgba(16, 76, 113, 0.45)'; this.style.color='var(--accent-cyan)';">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.48 1.48 0 1 0 0 2.95 1.48 1.48 0 0 0 0-2.95Z"/></svg>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook" aria-label="Facebook" style="display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: rgba(16, 76, 113, 0.45); border: 1.5px solid var(--accent-cyan); border-radius: 50%; color: var(--accent-cyan); transition: all 0.3s ease; text-decoration: none;" onmouseover="this.style.background='var(--accent-cyan)'; this.style.color='#0A192F';" onmouseout="this.style.background='rgba(16, 76, 113, 0.45)'; this.style.color='var(--accent-cyan)';">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/></svg>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram" aria-label="Instagram" style="display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: rgba(16, 76, 113, 0.45); border: 1.5px solid var(--accent-cyan); border-radius: 50%; color: var(--accent-cyan); transition: all 0.3s ease; text-decoration: none;" onmouseover="this.style.background='var(--accent-cyan)'; this.style.color='#0A192F';" onmouseout="this.style.background='rgba(16, 76, 113, 0.45)'; this.style.color='var(--accent-cyan)';">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
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

          <!-- THE NORDICS -->
          <div class="footer-dir-col">
            <h5><a href="../nordic.html">The Nordics ▾</a></h5>
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
