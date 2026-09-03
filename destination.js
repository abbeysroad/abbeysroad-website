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
});
