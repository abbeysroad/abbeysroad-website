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

  // 2. Populate Itineraries Dropdown Menu matching exact official itineraries (Image 3)
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
