/**
 * ABBEY'S ROAD - INTERACTIVE 3D PDF E-BOOK READER ENGINE
 * PDF.js Canvas + Text Layer Rendering, Desktop 3D Page Flip,
 * Mobile Vertical/Horizontal Flip Modes with Gesture Overlays,
 * Native Mobile Editorial Text Cards & Captioned Photo Showcase Pages.
 */

(function () {
  'use strict';

  // Pre-extracted Destination Content for Native Mobile Editorial Cards & Photo Captions
  const MOBILE_EDITORIAL_CARDS = [
    {
      page: 1,
      badge: "A 21-DAY IMMERSION",
      title: "Beyond the Ordinary: Discover the Philippines",
      subtitle: "A cinematic passage through living mountain cultures, storied streets, wild encounters and restorative island days.",
      sections: [
        { heading: "PHILOSOPHY", body: "Travel deeper. Return changed. An archipelago best understood not by ticking off islands, but by noticing how landscape, language and hospitality change from one crossing to the next." }
      ],
      photoCaption: { title: "📍 THE PHILIPPINE ARCHIPELAGO", desc: "Emerald karst islands, crystal lagoons, and tropical passages across Luzon, Visayas, and Mindanao." }
    },
    {
      page: 2,
      badge: "START HERE",
      title: "The Philippines, at a Glance",
      subtitle: "An archipelago best understood by noticing how landscape, language and hospitality change from one crossing to the next.",
      facts: [
        { label: "ARCHIPELAGO", val: "More than 7,600 islands across Luzon, Visayas and Mindanao." },
        { label: "LANGUAGE", val: "Filipino and English are official; many regional languages spoken." },
        { label: "CURRENCY", val: "Philippine peso (PHP). Cards in cities; cash in remote areas." },
        { label: "CLIMATE", val: "Tropical & maritime. Dry season Dec-May." }
      ],
      sections: [
        { heading: "THE FEELING", body: "Warm welcomes, long road journeys, salt on your skin, and a pace that invites conversation. Build in pauses: the unscheduled hours are part of the destination." }
      ],
      photoCaption: { title: "📍 ARCHIPELAGO PANORAMA", desc: "Over 7,600 tropical islands encircled by vibrant coral reefs and turquoise ocean." }
    },
    {
      page: 3,
      badge: "TRAVEL WELL",
      title: "Before the First Crossing",
      subtitle: "Key preparation notes and essential advice for smooth island journeys.",
      facts: [
        { label: "ENTRY", val: "30-day visa waiver for many visitors. Passport valid 6+ months." },
        { label: "GETTING AROUND", val: "Private vehicles, domestic flights, ferries and traditional bancas." },
        { label: "BUDGET", val: "Privately coordinated journey tailored by season & luxury category." },
        { label: "CONNECTIVITY", val: "eSIM or local SIM useful; download offline documents." }
      ],
      sections: [
        { heading: "ESSENTIAL CHECK", body: "Travel insurance, prescribed medication, light layers, sturdy walking shoes, dry bag, and modest church clothing." }
      ],
      photoCaption: { title: "📍 COASTAL PASSAGES", desc: "Traditional outrigger banca boats gliding through clear coastal waters." }
    },
    {
      page: 4,
      badge: "ITINERARY ARC",
      title: "Twenty-One Days, Held Loosely",
      subtitle: "The route moves from city energy into mountain stillness, along a heritage coast, and toward open water.",
      facts: [
        { label: "MANILA", val: "2 Nights • Arrival + Living History" },
        { label: "BANAUE", val: "3 Nights • Terraces + Time" },
        { label: "SAGADA", val: "2 Nights • Ritual Landscape" },
        { label: "VIGAN", val: "3 Nights • Heritage + Free Day" },
        { label: "DONSOL", val: "4 Nights • Wildlife + Sea Air" },
        { label: "BOHOL", val: "3 Nights • Geology + Resort Ease" },
        { label: "MOALBOAL", val: "1 Night • Marine Immersion" },
        { label: "CEBU", val: "2 Nights • Soft Landing + Farewell" }
      ],
      sections: [
        { heading: "DESIGN PRINCIPLE", body: "No sightseeing for sightseeing's sake. Every active day is answered by space to swim, read, linger over lunch or simply watch the weather move." }
      ],
      photoCaption: { title: "📍 THE JOURNEY ROUTE", desc: "A cinematic passage connecting high mountain terraces, heritage towns, and marine havens." }
    },
    {
      page: 5,
      badge: "MANILA • 2 NIGHTS",
      title: "The Threshold: Begin in Motion",
      subtitle: "The city arrives as jeepney chrome, tropical shade, polished hotel calm and the old stone walls of Intramuros.",
      sections: [
        { heading: "LOOK CLOSER", body: "Fort Santiago and San Agustin Church frame stories of empire, faith and resistance; a kalesa slows the city to hoofbeats." },
        { heading: "THE PAUSE", body: "Return to The Peninsula early. Pool, spa and a quiet dinner let the body arrive before the route begins." },
        { heading: "TASTE", body: "Let lunch introduce sour, smoky and savoury Filipino notes - then follow curiosity, not a checklist." }
      ],
      photoCaption: { title: "📍 MANILA INTRAMUROS", desc: "Historic Spanish colonial stone walls, cobblestone plazas, and Fort Santiago." }
    },
    {
      page: 6,
      badge: "BANAUE • 3 NIGHTS",
      title: "A Living Landscape: Where Mountains Remember",
      subtitle: "At Batad, the path bends with the contours. Water, forest, stone and cultivation form a system that is cultural knowledge as much as scenery.",
      sections: [
        { heading: "UNESCO CONTEXT", body: "Batad is one of five inscribed terrace clusters in the Rice Terraces of the Philippine Cordilleras, a living Ifugao cultural landscape." },
        { heading: "EXPERIENCE", body: "Walk with a local guide, notice traditional houses and irrigation, and listen before photographing." },
        { heading: "ROOM TO BREATHE", body: "The third day is deliberately open: breakfast with mountain views, reading, family time, perhaps a short village walk." }
      ],
      photoCaption: { title: "📍 BATAD RICE TERRACES", desc: "Ancient UNESCO World Heritage amphitheater rice terraces carved into green mountain ridges." }
    },
    {
      page: 7,
      badge: "SAGADA • 2 NIGHTS",
      title: "High Country: Listen to the Silence",
      subtitle: "Morning gathers slowly in Sagada. Pine air, clouded ridges and Kankanaey stories give this highland stop an atmosphere entirely its own.",
      sections: [
        { heading: "CHOOSE YOUR PACE", body: "Follow Echo Valley toward the hanging coffins with cultural interpretation, or choose an active cave and mountain walk." },
        { heading: "TRAVEL WITH CARE", body: "Burial traditions are not spectacle. Follow local rules, keep voices low, and ask before photographing people or sacred places." },
        { heading: "AFTERWARDS", body: "Return early. Tea, cool air and an unhurried evening are part of why Sagada stays with you." }
      ],
      photoCaption: { title: "📍 SAGADA HIGHLANDS", desc: "Mist-shrouded pine ridges and sacred ancestral hanging coffins of Echo Valley." }
    },
    {
      page: 8,
      badge: "VIGAN • 3 NIGHTS",
      title: "Streets of Memory: History at Walking Pace",
      subtitle: "Calle Crisologo is most evocative at the edges of the day, when stone streets, timber houses and capiz-shell windows begin to hold the light.",
      sections: [
        { heading: "WHY IT MATTERS", body: "UNESCO describes Vigan as Asia’s best-preserved example of a planned Spanish colonial town, shaped by Philippine, Chinese and European influences." },
        { heading: "MEET THE CRAFT", body: "Go beyond façades: seek inabel weaving, ancestral-house details and an Ilocano lunch." },
        { heading: "YOUR DAY", body: "One full day remains unscripted. Do as much or as little as you wish." }
      ],
      photoCaption: { title: "📍 VIGAN CALLE CRISOLOGO", desc: "Lantern-lit cobblestone streets and Spanish-Chinese colonial heritage architecture." }
    },
    {
      page: 9,
      badge: "DONSOL • 4 NIGHTS",
      title: "Wild Encounter: Follow the Butanding",
      subtitle: "Before sunrise, the boat slips into open water. The encounter is never guaranteed - and that uncertainty is precisely what keeps it wild.",
      sections: [
        { heading: "ETHICAL ENCOUNTER", body: "Donsol’s whale-shark interactions take place without artificial feeding and are led by trained interaction officers." },
        { heading: "IN THE WATER", body: "Follow the briefing, keep respectful distance and let the animal set the rhythm." },
        { heading: "FOUR-NIGHT EXHALE", body: "Balance one early marine morning with beach time, pool time, and an optional mangrove firefly cruise." }
      ],
      photoCaption: { title: "📍 DONSOL WHALE SHARKS", desc: "Ethical swimming with gentle wild whale sharks (butanding) in open coastal waters." }
    },
    {
      page: 10,
      badge: "BOHOL • 3 NIGHTS",
      title: "Geology & Grace: An Island Raised from the Sea",
      subtitle: "The Chocolate Hills appear almost imagined: smooth cones across the green interior, formed from limestone linked to ancient coral reef deposits.",
      sections: [
        { heading: "UNESCO GEOPARK", body: "Bohol became the Philippines’ first UNESCO Global Geopark in 2023, recognising an island story shaped by more than 150 million years of geology." },
        { heading: "GENTLE HALF-DAY", body: "Pair the hills with responsible tarsier conservation, countryside roads and a local lunch." },
        { heading: "RESORT RHYTHM", body: "Back at Amorita, the afternoon belongs to shade, saltwater and family time." }
      ],
      photoCaption: { title: "📍 BOHOL CHOCOLATE HILLS", desc: "Conical limestone hills and protected Philippine tarsier sanctuary rainforests." }
    },
    {
      page: 11,
      badge: "MOALBOAL • 1 NIGHT",
      title: "Beneath the Surface: Enter the Silver Current",
      subtitle: "A dense ribbon of sardines turns as one body. From below, the water flickers; from above, the shoal seems to redraw the sea.",
      sections: [
        { heading: "ONE MARINE DAY", body: "Certified divers can take a private reef dive; non-divers and children can snorkel the sardine run and look for turtles." },
        { heading: "GOOD PRACTICE", body: "Choose trained local operators, never touch wildlife or coral, and use fins with care in shallow water." },
        { heading: "THE POINT", body: "This is not a race for sightings. It is a chance to feel briefly inside a living system." }
      ],
      photoCaption: { title: "📍 MOALBOAL SARDINE RUN", desc: "Swirling silver sardine run underwater spectacle and sea turtle reef habitats." }
    },
    {
      page: 12,
      badge: "CEBU • 2 NIGHTS",
      title: "The Soft Landing: End with Ease",
      subtitle: "The final chapter is comfortable by design: a private transfer, a restorative hotel, perhaps a little history, then time to choose what the last day needs.",
      sections: [
        { heading: "OPTIONAL CULTURE", body: "The Basilica Minore del Santo Niño and Magellan’s Cross connect Cebu to the early history of Christianity in Asia." },
        { heading: "CITY OR RESORT", body: "Choose Shangri-La Mactan for a final resort mood, or Radisson Blu for city access and shopping." },
        { heading: "FAREWELL", body: "A relaxed Filipino dinner, late check-out where possible, and an unhurried airport transfer." }
      ],
      photoCaption: { title: "📍 CEBU RESORT & HERITAGE", desc: "Relaxed beachfront luxury at Shangri-La Mactan and Cebu historic basilicas." }
    },
    {
      page: 13,
      badge: "CULINARY TRAIL",
      title: "The Thread Between Places: Come to the Table",
      subtitle: "Travel becomes personal over shared dishes: the explanation of a recipe, the second helping, the story that would never fit inside a tour commentary.",
      sections: [
        { heading: "EAT REGIONALLY", body: "Taste Ilocano cooking in Vigan, highland produce in the Cordillera, seafood in Bicol and Visayan flavours in Bohol and Cebu." },
        { heading: "ASK, THEN LISTEN", body: "A few words of Filipino - salamat for thank you - are welcomed. English is widely spoken, but warmth travels further than fluency." },
        { heading: "LEAVE SPACE", body: "Not every meal needs to be 'the best.' A simple bowl, eaten where daily life is happening, may become the one you remember." }
      ],
      photoCaption: { title: "📍 FILIPINO CULINARY FEAST", desc: "Traditional regional dishes served on fresh banana leaves showcasing rich local flavors." }
    },
    {
      page: 14,
      badge: "OFFICIAL NOTES",
      title: "Travel Notes: Useful, Current, Considered",
      subtitle: "Checked against official sources. Entry, weather and operating conditions can change; Abbey’s Road reconfirms all details.",
      facts: [
        { label: "ENTRY & VISAS", val: "Philippine Bureau of Immigration (immigration.gov.ph)" },
        { label: "WEATHER", val: "DOST-PAGASA Climate Services (pagasa.dost.gov.ph)" },
        { label: "HERITAGE", val: "UNESCO World Heritage Centre (whc.unesco.org)" },
        { label: "GEOPARK", val: "UNESCO Global Geoparks Bohol Island" }
      ],
      sections: [
        { heading: "BEFORE YOU GO", body: "Verify passport and entry eligibility, purchase comprehensive insurance, review weather outlooks and accept that wildlife and sea conditions remain beautifully beyond anyone's control." }
      ],
      photoCaption: { title: "📍 PHILIPPINE HORIZONS", desc: "Tranquil coastal horizon and departure planning resources." }
    },
    {
      page: 15,
      badge: "TRAVEL CONCIERGE",
      title: "Your Philippines, Designed Around You",
      subtitle: "Tell us how you like to move, what your family is curious about, and where you want more stillness.",
      sections: [
        { heading: "BESPOKE JOURNEYS", body: "We will shape the route, stays and private logistics into one seamless journey." },
        { heading: "CONTACT CONCIERGE", body: "Email: abbey@abbeysroad.dk • Phone: +45 2622 0288 • Web: abbeysroad.vercel.app" }
      ],
      photoCaption: { title: "📍 ABBEY'S ROAD CONCIERGE", desc: "Private luxury travel planning tailored around your pace and curiosity." }
    }
  ];

  // Main Reader State
  const EBookState = {
    pdfDoc: null,
    pdfUrl: 'beyond-the-ordinary-discover-the-philippines_compressed.pdf',
    bookTitle: "Beyond the Ordinary: Discover the Philippines",
    totalPages: 0,
    currentPage: 1,
    pageAspect: 0.707,
    pageWidth: 0,
    pageHeight: 0,
    flipBookInstance: null,
    mobileObserver: null,
    
    isMobile: window.innerWidth <= 768,
    mobileFlipMode: 'vertical', // 'vertical' (Upward) or 'horizontal' (Sideways)
    isFullscreen: false,
    headerHideTimer: null,
    
    bookmarks: [],
    storageKey: 'abbey_ebook_bookmarks_philippines',
    fullscreenIntroKey: 'abbey_ebook_fullscreen_intro_seen'
  };

  if (window.pdfjsLib) {
    window.pdfjsLib.GlobalWorkerOptions.workerSrc =
      'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
  }

  /* ==========================================================================
     1. INITIALIZE & DOM BUILDER
     ========================================================================== */
  function initEBookReader() {
    loadBookmarksFromStorage();
    createModalDOM();
    bindTriggerEvents();
    bindModalEvents();

    window.addEventListener('resize', debounce(() => {
      const wasMobile = EBookState.isMobile;
      EBookState.isMobile = window.innerWidth <= 768;
      if (EBookState.pdfDoc && document.getElementById('ebook-modal-overlay')?.classList.contains('active')) {
        if (wasMobile !== EBookState.isMobile) {
          renderAllPages();
        } else {
          recalculateAndRender();
        }
      }
    }, 150));
  }

  function debounce(fn, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  function loadBookmarksFromStorage() {
    try {
      const stored = localStorage.getItem(EBookState.storageKey);
      if (stored) EBookState.bookmarks = JSON.parse(stored);
    } catch (e) {
      console.warn("Could not load bookmarks:", e);
    }
  }

  function saveBookmarksToStorage() {
    try {
      localStorage.setItem(EBookState.storageKey, JSON.stringify(EBookState.bookmarks));
    } catch (e) {
      console.warn("Could not save bookmarks:", e);
    }
  }

  function createModalDOM() {
    if (document.getElementById('ebook-modal-overlay')) return;

    const modalHTML = `
      <div id="ebook-modal-overlay" class="ebook-modal-overlay" aria-hidden="true">
        <div id="ebook-modal-container" class="ebook-modal-container">
          
          <!-- TOP CONTROL HEADER BAR -->
          <header id="ebook-top-bar" class="ebook-top-bar">
            <div class="ebook-header-title-box">
              <svg class="ebook-header-logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
              <span class="ebook-header-title">${EBookState.bookTitle}</span>
            </div>

            <div class="ebook-header-controls">
              <button id="ebook-flip-mode-btn" class="ebook-btn-icon-text ebook-flip-mode-btn" title="Choose page flip movement">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M7 16V4M7 4L3 8M7 4L11 8M17 8V20M17 20L21 16M17 20L13 16"/>
                </svg>
                <span id="ebook-flip-mode-label">Flip: Upward</span>
              </button>

              <div id="ebook-page-counter" class="ebook-page-counter">Page 1 of --</div>
            </div>

            <div class="ebook-header-right-actions">
              <button id="ebook-bookmark-page-btn" class="ebook-action-btn" title="Bookmark current page">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
              </button>

              <button id="ebook-bookmarks-list-btn" class="ebook-action-btn" title="Saved Bookmarks">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="8" y1="6" x2="21" y2="6"></line>
                  <line x1="8" y1="12" x2="21" y2="12"></line>
                  <line x1="8" y1="18" x2="21" y2="18"></line>
                  <line x1="3" y1="6" x2="3.01" y2="6"></line>
                  <line x1="3" y1="12" x2="3.01" y2="12"></line>
                  <line x1="3" y1="18" x2="3.01" y2="18"></line>
                </svg>
              </button>

              <button id="ebook-fullscreen-btn" class="ebook-action-btn" title="Toggle Full Screen">
                <svg id="ebook-fullscreen-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                </svg>
              </button>

              <button id="ebook-close-btn" class="ebook-action-btn ebook-close-btn" title="Close eBook Reader">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </header>

          <!-- MAIN EBOOK STAGE / VIEWPORT -->
          <main id="ebook-viewport" class="ebook-viewport">
            <button id="ebook-nav-prev" class="ebook-nav-arrow ebook-nav-prev" aria-label="Previous Page" title="Previous Page">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <div id="ebook-flip-container" class="stpageflip-stage"></div>

            <button id="ebook-nav-next" class="ebook-nav-arrow ebook-nav-next" aria-label="Next Page" title="Next Page">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </main>

          <!-- BOOKMARKS SIDE DRAWER -->
          <aside id="ebook-bookmarks-drawer" class="ebook-bookmarks-drawer">
            <div class="ebook-drawer-header">
              <span class="ebook-drawer-title">Saved Bookmarks</span>
              <button id="ebook-drawer-close-btn" class="ebook-drawer-close">&times;</button>
            </div>
            <div id="ebook-bookmarks-list" class="ebook-bookmarks-list"></div>
          </aside>

          <!-- ANIMATED GESTURE MOVEMENT SELECTION OVERLAY -->
          <div id="ebook-gesture-modal" class="ebook-gesture-modal-overlay">
            <div class="ebook-gesture-modal-card">
              <h3 class="ebook-gesture-title">Choose Page Flip Movement</h3>
              <p class="ebook-gesture-subtitle">Select how you'd like to flip through pages on mobile or tablet</p>
              
              <div class="ebook-gesture-options-grid">
                <div id="gesture-opt-vertical" class="ebook-gesture-option-card selected" data-mode="vertical">
                  <div class="gesture-anim-box">
                    <div class="anim-arrow-up"></div>
                    <div class="anim-finger-up"></div>
                  </div>
                  <div class="gesture-opt-label">Upward Scroll / Flip</div>
                  <div class="gesture-opt-sub">Swipe up to flip pages</div>
                </div>

                <div id="gesture-opt-horizontal" class="ebook-gesture-option-card" data-mode="horizontal">
                  <div class="gesture-anim-box">
                    <div class="anim-arrow-side"></div>
                    <div class="anim-finger-side"></div>
                  </div>
                  <div class="gesture-opt-label">Sideways Page Turn</div>
                  <div class="gesture-opt-sub">Swipe left/right like a book</div>
                </div>
              </div>

              <button id="ebook-gesture-confirm-btn" class="ebook-gesture-confirm-btn">Apply Flip Setting</button>
            </div>
          </div>

          <!-- FIRST-TIME FULLSCREEN INSTRUCTION OVERLAY -->
          <div id="ebook-tutorial-overlay" class="ebook-fullscreen-tutorial-overlay">
            <div class="ebook-tutorial-card">
              <div class="ebook-tutorial-top-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 19V5M5 12l7-7 7 7"/>
                </svg>
              </div>
              <h3 class="ebook-tutorial-title">Top Controls Auto-Hidden</h3>
              <p class="ebook-tutorial-desc">
                In Full Screen mode, the header auto-hides for an immersive reading experience.<br><br>
                <strong>Tap or hover at the top edge of the screen</strong> to reveal navigation, bookmarking, and closing controls.
              </p>
              <button id="ebook-tutorial-close-btn" class="ebook-tutorial-btn">Got It, Start Reading</button>
            </div>
          </div>

        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
  }

  function bindTriggerEvents() {
    let lastHandled = 0;
    function handleTrigger(e) {
      const now = Date.now();
      if (now - lastHandled < 300) return;
      const trigger = e.target.closest('#open-ebook-btn, .ebook-trigger-btn');
      if (trigger) {
        lastHandled = now;
        e.preventDefault();
        e.stopPropagation();
        openEBookModal();
      }
    }

    document.addEventListener('click', handleTrigger);
    document.addEventListener('touchend', handleTrigger, { passive: false });
  }

  function bindModalEvents() {
    const closeBtn = document.getElementById('ebook-close-btn');
    const fullscreenBtn = document.getElementById('ebook-fullscreen-btn');
    const bookmarkPageBtn = document.getElementById('ebook-bookmark-page-btn');
    const bookmarksListBtn = document.getElementById('ebook-bookmarks-list-btn');
    const flipModeBtn = document.getElementById('ebook-flip-mode-btn');

    const drawerCloseBtn = document.getElementById('ebook-drawer-close-btn');
    const gestureModal = document.getElementById('ebook-gesture-modal');
    const gestureConfirmBtn = document.getElementById('ebook-gesture-confirm-btn');
    const tutorialCloseBtn = document.getElementById('ebook-tutorial-close-btn');
    const navPrevBtn = document.getElementById('ebook-nav-prev');
    const navNextBtn = document.getElementById('ebook-nav-next');
    const modalContainer = document.getElementById('ebook-modal-container');
    const topBar = document.getElementById('ebook-top-bar');

    if (closeBtn) {
      closeBtn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        closeEBookModal();
      });
      closeBtn.addEventListener('touchend', function (e) {
        e.preventDefault();
        e.stopPropagation();
        closeEBookModal();
      });
    }

    if (fullscreenBtn) {
      fullscreenBtn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        toggleFullscreen();
      });
    }

    if (bookmarkPageBtn) {
      bookmarkPageBtn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        bookmarkCurrentPage();
      });
    }

    if (bookmarksListBtn) {
      bookmarksListBtn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        toggleBookmarksDrawer();
      });
    }

    if (flipModeBtn) {
      flipModeBtn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        openGestureModal();
      });
    }

    if (navPrevBtn) {
      navPrevBtn.addEventListener('click', function (e) {
        e.preventDefault();
        if (EBookState.flipBookInstance && EBookState.flipBookInstance.flipPrev) {
          EBookState.flipBookInstance.flipPrev();
        } else if (EBookState.currentPage > 1) {
          jumpToPage(EBookState.currentPage - (EBookState.isMobile ? 1 : 2));
        }
      });
    }

    if (navNextBtn) {
      navNextBtn.addEventListener('click', function (e) {
        e.preventDefault();
        if (EBookState.flipBookInstance && EBookState.flipBookInstance.flipNext) {
          EBookState.flipBookInstance.flipNext();
        } else if (EBookState.currentPage < EBookState.totalPages) {
          jumpToPage(EBookState.currentPage + (EBookState.isMobile ? 1 : 2));
        }
      });
    }

    if (drawerCloseBtn) {
      drawerCloseBtn.addEventListener('click', function () {
        document.getElementById('ebook-bookmarks-drawer').classList.remove('open');
      });
    }

    document.querySelectorAll('.ebook-gesture-option-card').forEach(card => {
      card.addEventListener('click', function () {
        document.querySelectorAll('.ebook-gesture-option-card').forEach(c => c.classList.remove('selected'));
        this.classList.add('selected');
      });
    });

    if (gestureConfirmBtn) {
      gestureConfirmBtn.addEventListener('click', function () {
        const selectedCard = document.querySelector('.ebook-gesture-option-card.selected');
        if (selectedCard) {
          const mode = selectedCard.getAttribute('data-mode');
          setFlipMode(mode);
        }
        gestureModal.classList.remove('active');
      });
    }

    if (tutorialCloseBtn) {
      tutorialCloseBtn.addEventListener('click', function () {
        document.getElementById('ebook-tutorial-overlay').classList.remove('active');
        localStorage.setItem(EBookState.fullscreenIntroKey, 'true');
      });
    }

    function handleFullscreenTopHover(clientY) {
      if (modalContainer.classList.contains('is-fullscreen') && clientY <= 48) {
        revealTopBar();
      }
    }

    if (modalContainer) {
      modalContainer.addEventListener('mousemove', function (e) {
        handleFullscreenTopHover(e.clientY);
      });

      modalContainer.addEventListener('touchstart', function (e) {
        if (e.touches && e.touches[0]) {
          handleFullscreenTopHover(e.touches[0].clientY);
        }
      }, { passive: true });
    }

    if (topBar) {
      topBar.addEventListener('mouseenter', revealTopBar);
      topBar.addEventListener('touchstart', revealTopBar, { passive: true });
    }

    document.addEventListener('selectionchange', handleTextSelection);
  }

  function revealTopBar() {
    const topBar = document.getElementById('ebook-top-bar');
    if (!topBar) return;
    topBar.classList.add('header-visible');
    clearTimeout(EBookState.headerHideTimer);
    EBookState.headerHideTimer = setTimeout(() => {
      if (!topBar.matches(':hover')) {
        topBar.classList.remove('header-visible');
      }
    }, 4000);
  }


  /* ==========================================================================
     2. OPEN & CLOSE MODAL POPUP
     ========================================================================== */
  function openEBookModal() {
    const modalOverlay = document.getElementById('ebook-modal-overlay');
    if (!modalOverlay) return;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    if (window.lenis && typeof window.lenis.stop === 'function') {
      window.lenis.stop();
    }

    EBookState.isMobile = window.innerWidth <= 768;
    updateFlipModeLabel();

    if (!EBookState.pdfDoc) {
      loadPDFDocument();
    } else {
      recalculateAndRender();
    }
  }

  function closeEBookModal() {
    const modalOverlay = document.getElementById('ebook-modal-overlay');
    if (!modalOverlay) return;

    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';

    if (window.lenis && typeof window.lenis.start === 'function') {
      window.lenis.start();
    }

    if (document.fullscreenElement) {
      document.exitFullscreen().catch(err => console.log(err));
    }

    const container = document.getElementById('ebook-modal-container');
    if (container) {
      container.classList.remove('is-fullscreen');
    }
    updateFullscreenIcon(false);

    const popover = document.getElementById('ebook-text-popover');
    if (popover) popover.remove();

    const drawer = document.getElementById('ebook-bookmarks-drawer');
    if (drawer) drawer.classList.remove('open');

    const gestureModal = document.getElementById('ebook-gesture-modal');
    if (gestureModal) gestureModal.classList.remove('active');

    const tutorialOverlay = document.getElementById('ebook-tutorial-overlay');
    if (tutorialOverlay) tutorialOverlay.classList.remove('active');
  }

  function loadPDFDocument() {
    const container = document.getElementById('ebook-flip-container');
    container.innerHTML = `
      <div style="color: #FFD85F; font-family: 'Marcellus', serif; text-align: center; padding: 40px;">
        <div style="font-size: 1.3rem; margin-bottom: 12px;">Loading Philippines Travel Guide...</div>
        <div style="font-size: 0.85rem; color: #C3F8FE;">Preparing realistic 3D flipbook pages...</div>
      </div>
    `;

    if (!window.pdfjsLib) {
      console.error("PDF.js library not loaded.");
      container.innerHTML = `<div style="color:#F87171; padding:20px;">PDF Renderer Error. PDF.js CDN unavailable.</div>`;
      return;
    }

    window.pdfjsLib.getDocument(EBookState.pdfUrl).promise.then(pdf => {
      EBookState.pdfDoc = pdf;
      renderAllPages();
    }).catch(err => {
      console.error("Error loading PDF:", err);
      container.innerHTML = `<div style="color:#F87171; padding:20px;">Failed to load PDF file: ${err.message}</div>`;
    });
  }


  /* ==========================================================================
     3. RENDER ALL PAGES (DESKTOP SPREADS VS MOBILE TEXT & PHOTO CARDS)
     ========================================================================== */
  function computePageDimensions() {
    const viewport = document.getElementById('ebook-viewport');
    if (!viewport) return;

    const box = viewport.getBoundingClientRect();
    const isFS = EBookState.isFullscreen;
    
    const paddingY = isFS ? 12 : 20;
    const paddingX = EBookState.isMobile ? 10 : 110;

    let availableH = box.height - paddingY;
    let availableW = box.width - paddingX;

    if (!EBookState.isMobile) {
      let maxPageW = availableW / 2;
      let maxPageH = availableH;

      if (maxPageW / maxPageH > EBookState.pageAspect) {
        EBookState.pageHeight = Math.floor(maxPageH);
        EBookState.pageWidth = Math.floor(maxPageH * EBookState.pageAspect);
      } else {
        EBookState.pageWidth = Math.floor(maxPageW);
        EBookState.pageHeight = Math.floor(maxPageW / EBookState.pageAspect);
      }
    } else {
      let maxPageW = availableW;
      let maxPageH = availableH;

      if (maxPageW / maxPageH > EBookState.pageAspect) {
        EBookState.pageHeight = Math.floor(maxPageH);
        EBookState.pageWidth = Math.floor(maxPageH * EBookState.pageAspect);
      } else {
        EBookState.pageWidth = Math.floor(maxPageW);
        EBookState.pageHeight = Math.floor(maxPageW / EBookState.pageAspect);
      }
    }
  }

  async function renderAllPages() {
    const container = document.getElementById('ebook-flip-container');
    container.innerHTML = '';

    const firstPage = await EBookState.pdfDoc.getPage(1);
    const vp = firstPage.getViewport({ scale: 1.0 });
    EBookState.pageAspect = vp.width / vp.height;

    computePageDimensions();

    const rawPdfPages = EBookState.pdfDoc.numPages;

    if (EBookState.isMobile) {
      EBookState.totalPages = rawPdfPages * 2; // 1 Text Card + 1 Photo Card per PDF page
    } else {
      EBookState.totalPages = rawPdfPages;
    }

    updatePageCounter();

    const renderPromises = [];

    for (let cardIdx = 1; cardIdx <= EBookState.totalPages; cardIdx++) {
      if (EBookState.isMobile) {
        const pdfPageNum = Math.ceil(cardIdx / 2);
        const isTextPage = (cardIdx % 2 === 1);
        const cardData = MOBILE_EDITORIAL_CARDS[pdfPageNum - 1] || MOBILE_EDITORIAL_CARDS[0];

        const pageCard = document.createElement('div');
        pageCard.className = 'ebook-page-card';
        pageCard.dataset.pageNumber = cardIdx;
        pageCard.dataset.pdfPageNumber = pdfPageNum;
        pageCard.dataset.cardType = isTextPage ? 'text' : 'photo';
        pageCard.style.width = `${EBookState.pageWidth}px`;
        pageCard.style.height = `${EBookState.pageHeight}px`;

        if (isTextPage) {
          // Render Native HTML Editorial Text Card
          pageCard.innerHTML = renderNativeTextCardHTML(cardData, cardIdx);
        } else {
          // Render Captioned Full Photo Card
          const photoWrapper = document.createElement('div');
          photoWrapper.className = 'ebook-photo-card-wrapper';

          const canvas = document.createElement('canvas');
          photoWrapper.appendChild(canvas);

          const captionBar = document.createElement('div');
          captionBar.className = 'ebook-photo-caption-bar';
          captionBar.innerHTML = `
            <div class="ebook-photo-caption-title">${cardData.photoCaption.title}</div>
            <div class="ebook-photo-caption-desc">${cardData.photoCaption.desc}</div>
          `;
          photoWrapper.appendChild(captionBar);
          pageCard.appendChild(photoWrapper);

          renderPromises.push(renderPhotoCanvas(pdfPageNum, canvas));
        }

        container.appendChild(pageCard);

      } else {
        // Desktop Full PDF Page
        const pageCard = document.createElement('div');
        pageCard.className = 'ebook-page-card';
        pageCard.dataset.pageNumber = cardIdx;
        pageCard.style.width = `${EBookState.pageWidth}px`;
        pageCard.style.height = `${EBookState.pageHeight}px`;

        const canvas = document.createElement('canvas');
        const textLayerDiv = document.createElement('div');
        textLayerDiv.className = 'ebook-text-layer';

        pageCard.appendChild(canvas);
        pageCard.appendChild(textLayerDiv);
        container.appendChild(pageCard);

        renderPromises.push(renderDesktopPage(cardIdx, canvas, textLayerDiv));
      }
    }

    await Promise.all(renderPromises);
    renderFlipbook();
  }

  function renderNativeTextCardHTML(card, cardIdx) {
    let html = `<div class="ebook-mobile-text-card">`;
    html += `<div class="ebook-card-badge">${card.badge} • PAGE ${card.page}</div>`;
    html += `<h2 class="ebook-card-title">${card.title}</h2>`;
    if (card.subtitle) html += `<div class="ebook-card-subtitle">${card.subtitle}</div>`;

    if (card.facts && card.facts.length > 0) {
      html += `<div class="ebook-card-fact-grid">`;
      card.facts.forEach(f => {
        html += `<div class="ebook-card-fact-item"><div class="ebook-card-fact-label">${f.label}</div><div class="ebook-card-fact-val">${f.val}</div></div>`;
      });
      html += `</div>`;
    }

    if (card.sections && card.sections.length > 0) {
      card.sections.forEach(s => {
        html += `<div class="ebook-card-section-block">`;
        if (s.heading) html += `<div class="ebook-card-section-heading">${s.heading}</div>`;
        html += `<p class="ebook-card-body-text">${s.body}</p>`;
        html += `</div>`;
      });
    }

    html += `</div>`;
    return html;
  }

  async function renderPhotoCanvas(pdfPageNum, canvas) {
    const page = await EBookState.pdfDoc.getPage(pdfPageNum);
    const unscaledVp = page.getViewport({ scale: 1.0 });
    const dpr = window.devicePixelRatio || 1.5;
    
    const scale = (EBookState.pageHeight / unscaledVp.height) * dpr;
    const viewport = page.getViewport({ scale: scale });

    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const ctx = canvas.getContext('2d');
    await page.render({ canvasContext: ctx, viewport: viewport }).promise;
  }

  async function renderDesktopPage(pageNum, canvas, textLayerDiv) {
    const page = await EBookState.pdfDoc.getPage(pageNum);
    const unscaledVp = page.getViewport({ scale: 1.0 });
    const dpr = window.devicePixelRatio || 1.5;
    const scale = (EBookState.pageHeight / unscaledVp.height) * dpr;
    const viewport = page.getViewport({ scale: scale });

    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const ctx = canvas.getContext('2d');
    await page.render({ canvasContext: ctx, viewport: viewport }).promise;

    try {
      const textContent = await page.getTextContent();
      window.pdfjsLib.renderTextLayer({
        textContentSource: textContent,
        container: textLayerDiv,
        viewport: page.getViewport({ scale: EBookState.pageHeight / unscaledVp.height }),
        textDivs: []
      });
    } catch (e) {
      console.warn(`Text layer render warning for page ${pageNum}:`, e);
    }
  }

  function recalculateAndRender() {
    computePageDimensions();
    const pages = document.querySelectorAll('.ebook-page-card');
    pages.forEach(p => {
      p.style.width = `${EBookState.pageWidth}px`;
      p.style.height = `${EBookState.pageHeight}px`;
    });
    renderFlipbook();
  }


  /* ==========================================================================
     4. STPAGEFLIP 3D FLIPBOOK & MOBILE STAGE
     ========================================================================== */
  function renderFlipbook() {
    const container = document.getElementById('ebook-flip-container');
    EBookState.isMobile = window.innerWidth <= 768;

    if (EBookState.flipBookInstance) {
      try { EBookState.flipBookInstance.destroy(); } catch (e) {}
      EBookState.flipBookInstance = null;
    }

    if (EBookState.mobileObserver) {
      EBookState.mobileObserver.disconnect();
      EBookState.mobileObserver = null;
    }

    if (EBookState.isMobile) {
      setupMobileStage();
    } else {
      setupDesktopSpreadStage();
    }

    updateNavArrowVisibility();
  }

  function setupDesktopSpreadStage() {
    const container = document.getElementById('ebook-flip-container');
    container.className = 'stpageflip-stage';
    container.style.display = 'block';

    const pages = container.querySelectorAll('.ebook-page-card');
    pages.forEach(p => {
      p.style.position = '';
      p.style.transform = '';
      p.style.opacity = '1';
      p.style.zIndex = '';
      p.style.display = 'block';
      p.style.top = '';
      p.style.left = '';
      p.style.margin = '';
      p.style.width = `${EBookState.pageWidth}px`;
      p.style.height = `${EBookState.pageHeight}px`;
    });

    if (window.StPageFlip && window.StPageFlip.PageFlip) {
      const pageFlip = new window.StPageFlip.PageFlip(container, {
        width: Math.round(EBookState.pageWidth),
        height: Math.round(EBookState.pageHeight),
        size: 'fixed',
        minWidth: 200,
        maxWidth: 1400,
        minHeight: 300,
        maxHeight: 1600,
        drawShadow: true,
        maxShadowOpacity: 0.8,
        showCover: true,
        usePortrait: false,
        flippingTime: 750,
        startPage: EBookState.currentPage - 1
      });

      pageFlip.loadFromHTML(pages);
      EBookState.flipBookInstance = pageFlip;

      pageFlip.on('flip', (e) => {
        EBookState.currentPage = e.data + 1;
        updatePageCounter();
        updateNavArrowVisibility();
      });
    } else {
      setupCSSDoublePageFallback();
    }
  }

  function setupCSSDoublePageFallback() {
    const container = document.getElementById('ebook-flip-container');
    container.style.display = 'flex';
    container.style.gap = '4px';

    const pages = Array.from(container.querySelectorAll('.ebook-page-card'));
    pages.forEach((p, idx) => {
      if (idx === EBookState.currentPage - 1 || idx === EBookState.currentPage) {
        p.style.display = 'block';
        p.style.opacity = '1';
      } else {
        p.style.display = 'none';
      }
    });
  }

  function setupMobileStage() {
    const container = document.getElementById('ebook-flip-container');
    const pages = Array.from(container.querySelectorAll('.ebook-page-card'));

    pages.forEach(p => {
      p.style.position = '';
      p.style.transform = 'none';
      p.style.opacity = '1';
      p.style.visibility = 'visible';
      p.style.zIndex = '';
      p.style.display = 'block';
      p.style.top = '';
      p.style.left = '';
      p.style.margin = '0 auto';
      p.style.width = `${EBookState.pageWidth}px`;
      p.style.height = `${EBookState.pageHeight}px`;
    });

    if (EBookState.mobileFlipMode === 'vertical') {
      container.className = 'ebook-mobile-vertical-stage';
      container.scrollTop = 0;

      EBookState.mobileObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            EBookState.currentPage = parseInt(entry.target.dataset.pageNumber, 10);
            updatePageCounter();
          }
        });
      }, { root: container, threshold: 0.6 });

      pages.forEach(p => EBookState.mobileObserver.observe(p));

      if (EBookState.currentPage > 1 && pages[EBookState.currentPage - 1]) {
        setTimeout(() => {
          pages[EBookState.currentPage - 1].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 50);
      }

    } else {
      container.className = 'ebook-mobile-horizontal-stage';
      
      pages.forEach((p, idx) => {
        p.style.position = 'absolute';
        p.style.width = `${EBookState.pageWidth}px`;
        p.style.height = `${EBookState.pageHeight}px`;
        if (idx === EBookState.currentPage - 1) {
          p.style.transform = 'translateX(0) scale(1)';
          p.style.opacity = '1';
          p.style.zIndex = '10';
        } else if (idx < EBookState.currentPage - 1) {
          p.style.transform = 'translateX(-100%) scale(0.9)';
          p.style.opacity = '0';
          p.style.zIndex = '1';
        } else {
          p.style.transform = 'translateX(100%) scale(0.9)';
          p.style.opacity = '0';
          p.style.zIndex = '1';
        }
      });

      setupTouchSwipe(container);
    }
  }

  function setupTouchSwipe(element) {
    let startX = 0;
    let startY = 0;

    element.ontouchstart = function (e) {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    element.ontouchend = function (e) {
      const diffX = e.changedTouches[0].clientX - startX;
      const diffY = e.changedTouches[0].clientY - startY;

      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
        if (diffX < 0 && EBookState.currentPage < EBookState.totalPages) {
          EBookState.currentPage++;
          setupMobileStage();
          updatePageCounter();
        } else if (diffX > 0 && EBookState.currentPage > 1) {
          EBookState.currentPage--;
          setupMobileStage();
          updatePageCounter();
        }
      }
    };
  }

  function updateNavArrowVisibility() {
    const prevBtn = document.getElementById('ebook-nav-prev');
    const nextBtn = document.getElementById('ebook-nav-next');
    if (!prevBtn || !nextBtn) return;

    if (EBookState.isMobile) {
      prevBtn.style.display = 'none';
      nextBtn.style.display = 'none';
      return;
    }

    prevBtn.style.display = EBookState.currentPage <= 1 ? 'none' : 'flex';
    nextBtn.style.display = EBookState.currentPage >= EBookState.totalPages ? 'none' : 'flex';
  }


  /* ==========================================================================
     5. MODE SWITCHER & GESTURE SELECTION OVERLAY
     ========================================================================== */
  function openGestureModal() {
    const modal = document.getElementById('ebook-gesture-modal');
    modal.classList.add('active');

    document.querySelectorAll('.ebook-gesture-option-card').forEach(card => {
      if (card.getAttribute('data-mode') === EBookState.mobileFlipMode) {
        card.classList.add('selected');
      } else {
        card.classList.remove('selected');
      }
    });
  }

  function setFlipMode(mode) {
    EBookState.mobileFlipMode = mode;
    updateFlipModeLabel();
    renderFlipbook();
  }

  function updateFlipModeLabel() {
    const label = document.getElementById('ebook-flip-mode-label');
    if (label) {
      label.textContent = EBookState.mobileFlipMode === 'vertical' ? 'Flip: Upward' : 'Flip: Sideways';
    }
  }


  /* ==========================================================================
     6. FAST, LIQUID-SMOOTH FULLSCREEN TRANSITIONS
     ========================================================================== */
  function toggleFullscreen() {
    const container = document.getElementById('ebook-modal-container');
    const isFS = container.classList.contains('is-fullscreen');

    if (!isFS) {
      container.classList.add('is-fullscreen');
      EBookState.isFullscreen = true;
      updateFullscreenIcon(true);

      if (container.requestFullscreen) {
        container.requestFullscreen().catch(err => console.log("Fullscreen request:", err));
      }

      const seenIntro = localStorage.getItem(EBookState.fullscreenIntroKey);
      if (!seenIntro) {
        document.getElementById('ebook-tutorial-overlay').classList.add('active');
      }

      const topBar = document.getElementById('ebook-top-bar');
      topBar.classList.remove('header-visible');

      recalculateAndRender();
      requestAnimationFrame(() => recalculateAndRender());

    } else {
      container.classList.remove('is-fullscreen');
      EBookState.isFullscreen = false;
      updateFullscreenIcon(false);

      if (document.fullscreenElement) {
        document.exitFullscreen().catch(err => console.log(err));
      }

      recalculateAndRender();
      requestAnimationFrame(() => recalculateAndRender());
    }
  }

  function updateFullscreenIcon(isFS) {
    const btn = document.getElementById('ebook-fullscreen-btn');
    if (!btn) return;

    if (isFS) {
      btn.title = "Exit Full Screen";
      btn.innerHTML = `
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 14h6v6M20 10h-6V4M14 10l7-7M3 21l7-7"></path>
        </svg>
      `;
    } else {
      btn.title = "Toggle Full Screen";
      btn.innerHTML = `
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
        </svg>
      `;
    }
  }


  /* ==========================================================================
     7. TEXT SELECTION & BOOKMARKING SYSTEM
     ========================================================================== */
  function handleTextSelection() {
    const selection = window.getSelection();
    const selectedText = selection ? selection.toString().trim() : '';

    const existing = document.getElementById('ebook-text-popover');
    if (existing) existing.remove();

    if (selectedText.length > 3) {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();

      const popover = document.createElement('div');
      popover.id = 'ebook-text-popover';
      popover.className = 'ebook-text-selection-popover';
      popover.style.top = `${rect.top}px`;
      popover.style.left = `${rect.left + (rect.width / 2)}px`;
      popover.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
        </svg>
        <span>Bookmark Selected Text</span>
      `;

      popover.addEventListener('mousedown', function (e) {
        e.preventDefault();
        e.stopPropagation();
        addBookmark({
          type: 'text',
          page: EBookState.currentPage,
          snippet: `"${selectedText.substring(0, 110)}${selectedText.length > 110 ? '...' : ''}"`,
          date: new Date().toLocaleDateString()
        });
        popover.remove();
        selection.removeAllRanges();
      });

      document.body.appendChild(popover);
    }
  }

  function bookmarkCurrentPage() {
    addBookmark({
      type: 'page',
      page: EBookState.currentPage,
      snippet: EBookState.isMobile ? `Page ${EBookState.currentPage}` : `Page ${EBookState.currentPage} - Full Page`,
      date: new Date().toLocaleDateString()
    });
  }

  function addBookmark(item) {
    const exists = EBookState.bookmarks.some(b => b.type === item.type && b.page === item.page && b.snippet === item.snippet);
    if (!exists) {
      EBookState.bookmarks.unshift(item);
      saveBookmarksToStorage();
      renderBookmarksList();
      showToast(`Bookmarked Page ${item.page}`);
    } else {
      showToast(`Already Bookmarked`);
    }
  }

  function toggleBookmarksDrawer() {
    const drawer = document.getElementById('ebook-bookmarks-drawer');
    drawer.classList.toggle('open');
    if (drawer.classList.contains('open')) {
      renderBookmarksList();
    }
  }

  function renderBookmarksList() {
    const listContainer = document.getElementById('ebook-bookmarks-list');
    if (!listContainer) return;

    if (EBookState.bookmarks.length === 0) {
      listContainer.innerHTML = `<div class="ebook-no-bookmarks">No bookmarks saved yet.<br>Click the bookmark icon or highlight text on any page!</div>`;
      return;
    }

    listContainer.innerHTML = EBookState.bookmarks.map((bm, index) => `
      <div class="ebook-bookmark-card" data-page="${bm.page}">
        <button class="ebook-bm-delete" data-index="${index}" title="Remove bookmark">&times;</button>
        <div class="ebook-bm-page">PAGE ${bm.page} • ${bm.type.toUpperCase()}</div>
        <div class="ebook-bm-snippet">${bm.snippet}</div>
      </div>
    `).join('');

    listContainer.querySelectorAll('.ebook-bookmark-card').forEach(card => {
      card.addEventListener('click', function (e) {
        if (e.target.classList.contains('ebook-bm-delete')) return;
        const targetPage = parseInt(this.dataset.page, 10);
        jumpToPage(targetPage);
        document.getElementById('ebook-bookmarks-drawer').classList.remove('open');
      });
    });

    listContainer.querySelectorAll('.ebook-bm-delete').forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        const index = parseInt(this.dataset.index, 10);
        EBookState.bookmarks.splice(index, 1);
        saveBookmarksToStorage();
        renderBookmarksList();
      });
    });
  }

  function jumpToPage(pageNum) {
    EBookState.currentPage = Math.max(1, Math.min(pageNum, EBookState.totalPages));
    if (EBookState.flipBookInstance && EBookState.flipBookInstance.flip) {
      EBookState.flipBookInstance.flip(EBookState.currentPage - 1);
    } else {
      renderFlipbook();
    }
    updatePageCounter();
  }

  function updatePageCounter() {
    const counter = document.getElementById('ebook-page-counter');
    if (counter) {
      if (EBookState.isMobile) {
        const isTextPage = (EBookState.currentPage % 2 === 1);
        const pdfNum = Math.ceil(EBookState.currentPage / 2);
        counter.textContent = `Page ${EBookState.currentPage} of ${EBookState.totalPages} (P.${pdfNum} ${isTextPage ? 'Text' : 'Photo'})`;
      } else {
        counter.textContent = `Page ${EBookState.currentPage} of ${EBookState.totalPages || '--'}`;
      }
    }
  }

  function showToast(message) {
    const toast = document.createElement('div');
    toast.style.cssText = `
      position: fixed;
      bottom: 40px;
      left: 50%;
      transform: translateX(-50%);
      background: #FFD85F;
      color: #202B22;
      font-weight: 700;
      padding: 10px 24px;
      border-radius: 30px;
      z-index: 99999;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
      font-size: 0.85rem;
      animation: fadeInOut 2.5s forwards;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEBookReader);
  } else {
    initEBookReader();
  }

})();
