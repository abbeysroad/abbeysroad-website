document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // EMBEDDED ITINERARIES DATA (Philippines + Scandinavian Options)
  // ==========================================================================
  const itineraries = [
  {
    "id": "philippines",
    "countries": ["Philippines"],
    "meta": {
      "title": "12-Day Ultimate Philippines Archipelago Discovery | Abbey's Road",
      "description": "Embark on an extraordinary 12-day journey across the Philippines with Abbey's Road. Discover Manila, El Nido, Coron, Boracay, Siargao, Cebu, Bohol, and Banaue."
    },
    "hero": {
      "subtitle": "7,641 Islands • Pristine Lagoons & Culture:",
      "title": "The Ultimate 12-Day Philippines Escape",
      "description": "Discover emerald lagoons, white sand beaches, volcanic peaks, ancient rice terraces, and warm local hospitality with Abbey's Road.",
      "background_image": "images/philippines/el_nido_boat.jpeg",
      "cta_book": "Secure Your Philippines Adventure",
      "cta_view": "View Itinerary Details"
    },
    "essentials": [
      { "icon": "⏱️", "title": "Duration", "value": "12 Epic Days" },
      { "icon": "🗺️", "title": "Route", "value": "Manila ➔ El Nido ➔ Coron ➔ Boracay ➔ Cebu" },
      { "icon": "⛵", "title": "Travel Style", "value": "Banca Boat, Flights & Eco-Resorts" },
      { "icon": "⚡", "title": "Pace", "value": "Curated & Immersive" }
    ],
    "map_deck": {
      "title": "THE ARCHIPELAGO MAP DECK",
      "description": "Visualize your journey across Manila, Palawan, Visayas, and Mindanao.",
      "background_image": "images/philippines/el_nido_boat.jpeg",
      "route_path": "M 885 458 L 610 475 L 463 399 L 350 350 L 220 290 L 463 399 C 463 560, 547 700, 547 873",
      "pins": [
        { "id": "pin-manila", "day": 1, "cx": 450, "cy": 250, "label": "Manila", "label_x": 450, "label_y": 220 },
        { "id": "pin-elnido", "day": 3, "cx": 250, "cy": 450, "label": "El Nido", "label_x": 250, "label_y": 480 },
        { "id": "pin-coron", "day": 5, "cx": 320, "cy": 380, "label": "Coron", "label_x": 320, "label_y": 350 },
        { "id": "pin-boracay", "day": 7, "cx": 520, "cy": 420, "label": "Boracay", "label_x": 520, "label_y": 390 },
        { "id": "pin-cebu", "day": 9, "cx": 620, "cy": 520, "label": "Cebu & Bohol", "label_x": 620, "label_y": 550 }
      ]
    },
    "timeline": [
      {
        "day": "1",
        "title": "Welcome to Manila: Colonial Heritage & Skyline",
        "tagline": "🌆 Intramuros Cobblestones & BGC High Street",
        "vibe_title": "The Vibe",
        "vibe_text": "Touch down in Manila and step into a city where 16th-century Spanish stone fortresses meet futuristic skyscrapers.",
        "highlights": [
          { "icon": "🏰", "title": "Intramuros Tour", "description": "Ride a traditional kalesa through San Agustin Church and Fort Santiago." },
          { "icon": "🍷", "title": "BGC Sunset Drinks", "description": "Welcome cocktail party at a rooftop lounge overlooking the Manila skyline." }
        ],
        "stay": "🏨 Stay: The Manila Hotel / Shangri-La Fort",
        "media": {
          "type": "carousel",
          "id": "carousel-ph-day1",
          "slides": [
            { "type": "single", "src": "images/philippines/intramuros.png", "alt": "Manila Intramuros Heritage", "title": "Intramuros Colonial Quarter", "caption": "Cobblestone streets and historic Spanish architecture." },
            { "type": "single", "src": "images/philippines/bgc.png", "alt": "BGC High Street Manila", "title": "BGC High Street", "caption": "Contemporary dining, shopping, and urban nightlife." }
          ]
        }
      },
      {
        "day": "2-4",
        "title": "El Nido, Palawan: Karst Limestone & Hidden Lagoons",
        "tagline": "🛶 Emerald Waters & Private Banca Charters",
        "vibe_title": "The Vibe",
        "vibe_text": "Fly to El Nido and board private outrigger banca boats to explore mirror lagoons surrounded by 250-million-year-old limestone monoliths.",
        "highlights": [
          { "icon": "🛶", "title": "Big & Secret Lagoon Kayaking", "description": "Paddle through narrow limestone openings into crystal clear turquoise waters." },
          { "icon": "🏖️", "title": "Nacpan Beach Sunset", "description": "Relax on a 4-kilometer stretch of golden sand lined with coconut palms." }
        ],
        "stay": "🏨 Stay: El Nido Resorts Miniloc / Pangulasian Island",
        "media": {
          "type": "carousel",
          "id": "carousel-ph-day2",
          "slides": [
            { "type": "single", "src": "images/philippines/el_nido_boat.jpeg", "alt": "El Nido Limestone Cliffs", "title": "Limestone Cliff Lagoons", "caption": "Towering karst formations meeting emerald sea." },
            { "type": "single", "src": "images/philippines/el_nido_kayak.jpeg", "alt": "El Nido Kayaking", "title": "Secret Lagoon Kayaking", "caption": "Paddled exploration through serene waters." }
          ]
        }
      },
      {
        "day": "5-7",
        "title": "Coron: Thermocline Lakes & Shipwreck Diving",
        "tagline": "🤿 Kayangan Lake & Coral Reefs",
        "vibe_title": "The Vibe",
        "vibe_text": "Cruise to Coron Island and immerse yourself in Kayangan Lake — renowned as the cleanest lake in Asia.",
        "highlights": [
          { "icon": "🏊", "title": "Kayangan & Barracuda Lakes", "description": "Swim in freshwater layers nestled inside limestone cliffs." },
          { "icon": "⚓", "title": "WWII Shipwreck Snorkeling", "description": "Explore sunken Japanese supply ships turned into thriving coral reefs." }
        ],
        "stay": "🏨 Stay: Two Seasons Coron Island Resort",
        "media": {
          "type": "carousel",
          "id": "carousel-ph-day5",
          "slides": [
            { "type": "single", "src": "images/philippines/coron_boats.jpeg", "alt": "Coron Kayangan Lake", "title": "Coron Island Bay", "caption": "Crystal-clear waters and dramatic aerial cliff views." }
          ]
        }
      },
      {
        "day": "8-10",
        "title": "Boracay: Powder White Beach & Paraw Sailing",
        "tagline": "⛵ Sunset Cruises & Island Vibes",
        "vibe_title": "The Vibe",
        "vibe_text": "Sink your feet into world-famous White Beach sand and sail towards golden sunsets on blue-sailed Paraw boats.",
        "highlights": [
          { "icon": "⛵", "title": "Paraw Sunset Sail", "description": "Drift along White Beach coast as the sky lights up in crimson and gold." },
          { "icon": "🍹", "title": "Beachfront Dining", "description": "Enjoy fresh seafood grilled under coconut palms." }
        ],
        "stay": "🏨 Stay: Discovery Shores Boracay / Shangri-La Boracay",
        "media": {
          "type": "carousel",
          "id": "carousel-ph-day8",
          "slides": [
            { "type": "single", "src": "images/philippines/boracay_beach.jpeg", "alt": "Boracay White Beach", "title": "White Beach Promenade", "caption": "Iconic powder sand and Paraw sailboats." }
          ]
        }
      },
      {
        "day": "11-12",
        "title": "Cebu & Bohol: Sardine Run & Chocolate Hills",
        "tagline": "🌊 Freediving & Countryside Exploration",
        "vibe_title": "The Vibe",
        "vibe_text": "Conclude your archipelago escape swimming alongside millions of sardines in Moalboal and witnessing the Chocolate Hills of Bohol.",
        "highlights": [
          { "icon": "🐟", "title": "Moalboal Sardine Run", "description": "Witness millions of shimmering sardines forming mesmerizing bait balls." },
          { "icon": "🍫", "title": "Bohol Chocolate Hills", "description": "Overlook 1,200 conical hills stretching across green countryside." }
        ],
        "stay": "🏨 Stay: Amorita Resort Bohol / Crimson Mactan",
        "media": {
          "type": "carousel",
          "id": "carousel-ph-day11",
          "slides": [
            { "type": "single", "src": "images/philippines/cebu_freediver.jpeg", "alt": "Cebu Sardine Run", "title": "Moalboal Sardine Shoals", "caption": "Incredible marine biodiversity and freediving." },
            { "type": "single", "src": "images/philippines/bohol_hills.jpeg", "alt": "Bohol Countryside", "title": "Famous Chocolate Hills and winding countryside roads." }
          ]
        }
      }
    ],
    "booking": {
      "title": "Secure Your Abbey's Road Philippines Escape",
      "description": "Book your handcrafted island hopping adventure. Package includes private outrigger banca charters, domestic intra-island flights, boutique eco-resorts, highlight meals, and 24/7 guest support.",
      "bullets": [
        "All Luxury Resorts & Private Banca Charters Included",
        "Intra-Island Domestic Air Transfers Included",
        "24/7 On-Ground Support & Local Expert Guides",
        "100% Flexible Customization & Dates"
      ]
    },
    "pricing": {
      "base_price": 2890,
      "currency": "$",
      "dates": [
        { "id": "ph-nov10", "label": "Nov 10 – Nov 22", "season": "Dry Season Peak", "price_modifier": 0 },
        { "id": "ph-dec05", "label": "Dec 05 – Dec 17", "season": "Holiday Season", "price_modifier": 350 },
        { "id": "ph-jan15", "label": "Jan 15 – Jan 27", "season": "Prime Sun Season", "price_modifier": 100 }
      ],
      "cabin_options": [
        { "id": "resort-standard", "name": "Boutique Beachfront Resort Room", "description": "Spacious luxury room steps from the ocean", "price_per_person": 0 },
        { "id": "resort-water-villa", "name": "Overwater Lagoon Villa", "description": "Private villa over emerald water with balcony", "price_per_person": 680 }
      ],
      "supplements": [
        { "id": "ph-supp-single", "name": "Private Solo Traveler Supplement", "description": "Single room & private boat charter", "price": 550 },
        { "id": "ph-supp-scuba", "name": "Scuba Diving & Wreck Explorer Pass", "description": "Includes 6 guided dives in Coron & Moalboal", "price": 320 }
      ]
    },
    "contact": {
      "company_name": "Abbey's Road Destinations",
      "tagline": "Handcrafted Philippines & Global Escapes",
      "address": "BGC High Street, Taguig • Metro Manila, Philippines",
      "phone": "+63 917 888 2622",
      "email": "abbey@abbeysroad.dk",
      "web": "www.abbeysroad.com",
      "contact_image": "images/philippines/el_nido_boat.jpeg"
    }
  },
  {
    "id": "scandinavia",
    "countries": ["Sweden", "Norway", "Denmark"],
    "meta": {
      "title": "9-Day Nordic Summer Escape | Abbey's Road",
      "description": "Embark on an extraordinary 9-day summer journey through Sweden, Norway, and Denmark with Abbey's Road."
    },
    "hero": {
      "subtitle": "Fjords, Castles & Capitals:",
      "title": "The Ultimate 9-Day Nordic Escape",
      "description": "Discover Sweden, Norway, and Denmark on a curated journey through Scandinavia’s most iconic landscapes.",
      "background_image": "images/oslofjord_sunset.png",
      "cta_book": "Secure Your Nordic Summer Escape",
      "cta_view": "View Itinerary Details"
    },
    "essentials": [
      { "icon": "⏱️", "title": "Duration", "value": "9 Epic Days" },
      { "icon": "🗺️", "title": "Route", "value": "Stockholm ➔ Oslo ➔ Copenhagen" },
      { "icon": "🚌", "title": "Travel Style", "value": "Coach, Rail & Cruise" },
      { "icon": "⚡", "title": "Pace", "value": "Active & Comprehensive" }
    ],
    "map_deck": {
      "title": "THE MAP DECK",
      "description": "Visualize your journey across Scandinavia.",
      "background_image": "images/scandinavia_map.png",
      "route_path": "M 885 458 L 610 475 L 463 399 L 350 350 L 220 290 L 463 399 C 463 560, 547 700, 547 873",
      "pins": [
        { "id": "pin-stockholm", "day": 2, "cx": 885, "cy": 458, "label": "Stockholm", "label_x": 885, "label_y": 430 },
        { "id": "pin-oslo", "day": 3, "cx": 463, "cy": 399, "label": "Oslo", "label_x": 463, "label_y": 370 },
        { "id": "pin-copenhagen", "day": 6, "cx": 547, "cy": 873, "label": "Copenhagen", "label_x": 547, "label_y": 905 }
      ]
    },
    "timeline": [
      {
        "day": "1",
        "title": "Bound for Scandinavia",
        "tagline": "✈️ Departure & Arrival in Stockholm",
        "vibe_title": "The Vibe",
        "vibe_text": "Arrive in Stockholm, the Venice of the North.",
        "highlights": [{ "icon": "✈️", "title": "Arrival", "description": "Check in to your hotel." }],
        "stay": "🏨 Stay: Scandic Grand Central",
        "media": {
          "type": "carousel",
          "id": "carousel-nordic-day1",
          "slides": [{ "type": "single", "src": "images/day2_stockholm.jpg", "alt": "Stockholm", "title": "Stockholm", "caption": "Old town Gamla Stan." }]
        }
      }
    ],
    "booking": {
      "title": "Secure Your Nordic Escape",
      "description": "Book your Scandinavia tour with Abbey's Road.",
      "bullets": ["Hotels & Rail Included", "24/7 Guest Support"]
    },
    "pricing": {
      "base_price": 2450,
      "currency": "€",
      "dates": [{ "id": "jul10", "label": "Jul 10 – Jul 18", "season": "Peak", "price_modifier": 0 }],
      "inside": [{ "id": "inside", "name": "Standard Room", "description": "Comfortable room", "price_per_person": 0 }],
      "supplements": []
    },
    "contact": {
      "company_name": "Abbey's Road Destinations",
      "tagline": "Destinations That Connect",
      "address": "Borgmestervangen 31, 2200 Copenhagen",
      "phone": "+45 2622 0288",
      "email": "abbey@abbeysroad.dk",
      "web": "www.abbeysroad.com",
      "contact_image": "images/contact_footer.jpg"
    }
  }
  ];

  let activeItineraryId = itineraries[0].id;
  const autoCollapseTimers = new Map();

  // ==========================================================================
  // LENIS + GSAP SCROLLTRIGGER SYNC FOR ULTRA-SMOOTH MOMENTUM SCROLL
  // ==========================================================================
  let lenis;
  if (typeof Lenis !== 'undefined' && typeof gsap !== 'undefined') {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5
    });

    if (typeof ScrollTrigger !== 'undefined') {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    }
  }

  // ==========================================================================
  // THREE.JS WEBGL PARTICLE & ATMOSPHERIC ENVIRONMENT
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

    const colorGold = new THREE.Color('#FFD85F');
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
  // GSAP SCROLLTRIGGER CHAPTER ANIMATIONS & ACCURATE BEACON TRACKER
  // ==========================================================================
  function initGSAPScrollTrigger() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const chapters = document.querySelectorAll('.film-chapter');
    const regionLabel = document.getElementById('map-region-name');

    chapters.forEach((chapter) => {
      const regionName = chapter.getAttribute('data-region-name') || 'PHILIPPINES';
      const regionCode = chapter.getAttribute('data-region') || 'PHILIPPINES';
      const beaconX = chapter.getAttribute('data-beacon-x');
      const beaconY = chapter.getAttribute('data-beacon-y');
      const bgPhoto = chapter.querySelector('.zoom-travel-photo');
      const infoCard = chapter.querySelector('.dest-info-card');

      ScrollTrigger.create({
        trigger: chapter,
        start: 'top 55%',
        end: 'bottom 45%',
        onEnter: () => {
          updateMapTracker(regionCode, regionName, beaconX, beaconY);
          autoExpandAndTimedCollapseOnMobile(infoCard);
        },
        onEnterBack: () => {
          updateMapTracker(regionCode, regionName, beaconX, beaconY);
          autoExpandAndTimedCollapseOnMobile(infoCard);
        }
      });

      if (bgPhoto) {
        gsap.fromTo(bgPhoto, 
          { scale: 1.0, yPercent: 0 },
          {
            scale: 1.28,
            yPercent: 6,
            ease: 'none',
            scrollTrigger: {
              trigger: chapter,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1
            }
          }
        );
      }
    });

    function updateMapTracker(code, name, bx, by) {
      if (regionLabel) regionLabel.innerText = name;
      document.querySelectorAll('.island-path').forEach(p => p.classList.remove('active-region'));

      const beacon = document.getElementById('map-beacon-dot');
      if (bx && by && beacon) {
        beacon.setAttribute('cx', bx);
        beacon.setAttribute('cy', by);
      }

      if (code === 'LUZON') {
        document.getElementById('region-luzon')?.classList.add('active-region');
      } else if (code === 'VISAYAS') {
        document.getElementById('region-visayas')?.classList.add('active-region');
      } else if (code === 'PALAWAN') {
        document.getElementById('region-palawan')?.classList.add('active-region');
      } else if (code === 'MINDANAO') {
        document.getElementById('region-mindanao')?.classList.add('active-region');
      }
    }

    function autoExpandAndTimedCollapseOnMobile(card) {
      if (!card) return;
      if (window.innerWidth <= 768) {
        // Expand active card on mobile
        card.classList.add('expanded');

        // Clear any existing timer for this card
        if (autoCollapseTimers.has(card)) {
          clearTimeout(autoCollapseTimers.get(card));
        }

        // Set 3-second auto-collapse timer
        const timer = setTimeout(() => {
          card.classList.remove('expanded');
          autoCollapseTimers.delete(card);
        }, 3000);

        autoCollapseTimers.set(card, timer);
      }
    }
  }

  // ==========================================================================
  // MOBILE OLIVE GREEN CARD FOLD / UNFOLD CLICK TOGGLE HANDLER
  // ==========================================================================
  function initMobileCardFold() {
    const cards = document.querySelectorAll('.dest-info-card');
    cards.forEach(card => {
      const headerToggle = card.querySelector('.dest-card-header-toggle');
      if (headerToggle) {
        headerToggle.addEventListener('click', (e) => {
          if (window.innerWidth <= 768) {
            e.stopPropagation();
            
            // Cancel auto-collapse timer if manually clicked
            if (autoCollapseTimers.has(card)) {
              clearTimeout(autoCollapseTimers.get(card));
              autoCollapseTimers.delete(card);
            }

            card.classList.toggle('expanded');
          }
        });
      }
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

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });
  }

  // ==========================================================================
  // RENDER & MENU FUNCTIONS FOR ITINERARIES
  // ==========================================================================
  function initItinerariesMenu() {
    const itinerariesMenu = document.getElementById('itineraries-menu');
    if (!itinerariesMenu) return;

    itinerariesMenu.innerHTML = '';
    itineraries.forEach(item => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#';
      a.textContent = item.hero.title;
      a.dataset.id = item.id;
      a.addEventListener('click', (e) => {
        e.preventDefault();
        renderItinerary(item.id);
        itinerariesMenu.classList.remove('show');
      });
      li.appendChild(a);
      itinerariesMenu.appendChild(li);
    });
  }

  function renderItinerary(id) {
    const item = itineraries.find(i => i.id === id);
    if (!item) return;

    activeItineraryId = id;
    const viewport = document.getElementById('itinerary-viewport');
    if (!viewport) return;

    viewport.innerHTML = `
      <section class="itinerary-details-section">
        <div class="section-header">
          <span class="gold-badge">${item.countries.join(' • ')}</span>
          <h2>${item.hero.title}</h2>
          <p class="section-tagline">${item.hero.description}</p>
        </div>

        <div class="essentials-grid">
          ${item.essentials.map(e => `
            <div class="essential-card">
              <span class="essential-icon">${e.icon}</span>
              <h4>${e.title}</h4>
              <p>${e.value}</p>
            </div>
          `).join('')}
        </div>

        <!-- TIMELINE CARDS -->
        <div class="timeline-container">
          <h3 class="timeline-heading">THE DAILY TIMELINE</h3>
          <div class="timeline-cards">
            ${item.timeline.map(day => `
              <div class="day-card">
                <div class="day-badge">DAY ${day.day}</div>
                <h3 class="day-title">${day.title}</h3>
                <p class="day-tagline">${day.tagline}</p>
                <p class="day-vibe">${day.vibe_text}</p>
                
                <div class="highlights-list">
                  ${day.highlights.map(h => `
                    <div class="highlight-item">
                      <span class="hl-icon">${h.icon}</span>
                      <div>
                        <strong>${h.title}:</strong> ${h.description}
                      </div>
                    </div>
                  `).join('')}
                </div>
                
                <div class="day-stay">${day.stay}</div>

                <!-- CAROUSEL -->
                <div class="day-carousel" id="${day.media.id}">
                  <div class="carousel-track">
                    ${day.media.slides.map((s, idx) => `
                      <div class="carousel-slide ${idx === 0 ? 'active' : ''}">
                        <img src="${s.src}" alt="${s.alt}">
                        <div class="carousel-caption">
                          <h4>${s.title}</h4>
                          <p>${s.caption}</p>
                        </div>
                      </div>
                    `).join('')}
                  </div>
                  ${day.media.slides.length > 1 ? `
                    <button class="carousel-btn prev">&lt;</button>
                    <button class="carousel-btn next">&gt;</button>
                  ` : ''}
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- PRICING & BOOKING BOX -->
        <div class="booking-section" id="booking-box">
          <div class="booking-card">
            <h3>${item.booking.title}</h3>
            <p>${item.booking.description}</p>
            <ul class="booking-bullets">
              ${item.booking.bullets.map(b => `<li>✓ ${b}</li>`).join('')}
            </ul>
            <div class="pricing-summary">
              <span class="price-label">Starting From</span>
              <span class="price-val">${item.pricing.currency}${item.pricing.base_price} <small>/ person</small></span>
            </div>
            <button class="btn-primary-cyan open-booking-trigger" data-dest="${item.hero.title}">BOOK THIS ESCAPE</button>
          </div>
        </div>

      </section>
    `;

    item.timeline.forEach(day => {
      if (day.media && day.media.slides.length > 1) {
        initCarousel(day.media.id);
      }
    });

    bindBookingTriggers();
  }

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

    if (nextBtn) nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));
    if (prevBtn) prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));

    let autoPlay = setInterval(() => showSlide(currentIndex + 1), 6000);
    container.addEventListener('mouseenter', () => clearInterval(autoPlay));
    container.addEventListener('mouseleave', () => {
      autoPlay = setInterval(() => showSlide(currentIndex + 1), 6000);
    });
  }

  function bindBookingTriggers() {
    const triggers = document.querySelectorAll('.open-booking-trigger');
    const modal = document.getElementById('meeting-modal');
    triggers.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (modal) modal.classList.add('show');
      });
    });

    // Close button and Backdrop click listener
    const closeModalBtn = document.getElementById('close-modal');
    if (closeModalBtn && modal) {
      closeModalBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.remove('show');
      });
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('show');
        }
      });
    }
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

  // Initialize features
  initThreeWebGL();
  initGSAPScrollTrigger();
  initMobileCardFold();
  initMobileBurgerMenu();
  initItinerariesMenu();
  renderItinerary(itineraries[0].id);
  bindBookingTriggers();

});
