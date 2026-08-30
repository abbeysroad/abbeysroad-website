/* ==========================================================================
   PANDORA TRAVEL — DEDICATED DESTINATION PAGES INTERACTIVE LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Dropdown Triggers (Click & Hover)
  const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');
  dropdownTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const menu = trigger.nextElementSibling;
      
      // Close all other open menus
      document.querySelectorAll('.dropdown-menu').forEach(m => {
        if (m !== menu) m.classList.remove('show');
      });

      if (menu) {
        menu.classList.toggle('show');
      }
    });
  });

  // Close open dropdowns when clicking anywhere outside
  document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('show'));
  });

  // 2. Populate Itineraries Dropdown Menu if present
  const itinerariesMenu = document.getElementById('itineraries-menu');
  if (itinerariesMenu && itinerariesMenu.children.length === 0) {
    const featuredList = [
      { name: '14-Day Ultimate Philippines Island & Heritage Odyssey', link: '../philippines.html#itinerary-viewport' },
      { name: '12-Day Palawan Coral & Secret Lagoon Sanctuary Escape', link: '../philippines.html#itinerary-viewport' },
      { name: '12-Day Central Visayas Marine & Heritage Odyssey', link: '../philippines.html#itinerary-viewport' },
      { name: '10-Day Siargao Barefoot Luxury & Lagoon Escape', link: '../philippines.html#itinerary-viewport' },
      { name: '12-Day Northern Luzon & Cordillera Mountain Trail', link: '../philippines.html#itinerary-viewport' },
      { name: '10-Day Mayon Volcano & Donsol Eco-Adventure', link: '../philippines.html#itinerary-viewport' }
    ];

    featuredList.forEach(it => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = it.link;
      a.textContent = it.name;
      li.appendChild(a);
      itinerariesMenu.appendChild(li);
    });
  }

  // 3. Mobile Burger Menu Drawer Toggle
  const burgerBtn = document.getElementById('burger-btn');
  const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
  const mobileNavCloseBtn = document.getElementById('mobile-nav-close-btn');

  if (burgerBtn && mobileNavOverlay) {
    burgerBtn.addEventListener('click', () => {
      mobileNavOverlay.classList.add('active');
    });
  }

  if (mobileNavCloseBtn && mobileNavOverlay) {
    mobileNavCloseBtn.addEventListener('click', () => {
      mobileNavOverlay.classList.remove('active');
    });
  }
});
