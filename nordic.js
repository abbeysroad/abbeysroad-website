document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // EMBEDDED NORDIC ITINERARIES DATA (2 DISTINCT PORTFOLIOS)
  // ==========================================================================
  const itineraries = [
    {
      "id": "scandinavia_escape",
      "countries": ["Sweden", "Norway", "Denmark"],
      "meta": {
        "title": "Nordic Summer Escape | Pandora Travel",
        "description": "Embark on an extraordinary 9-day summer journey through Sweden, Norway, and Denmark. Discover Stockholm, Oslo, Copenhagen, the Flåm Railway, and majestic fjords on a premium, curated Scandinavian vacation."
      },
      "hero": {
        "title": "The Ultimate 9-Day Nordic Escape",
        "description": "Discover the magic of Sweden, Norway, and Denmark on a premium, curated journey through Scandinavia’s most iconic landscapes and vibrant historic capitals.",
        "background_image": "images/nordic/tour_hero_fjord.png",
        "cta_book": "Secure Your Nordic Escape",
        "cta_view": "View Itinerary Details"
      },
      "essentials": [
        { "icon": "⏱️", "title": "Duration", "value": "9 Epic Days" },
        { "icon": "🗺️", "title": "Route", "value": "Stockholm ➔ Oslo ➔ Copenhagen" },
        { "icon": "🚌", "title": "Travel Style", "value": "Scenic Coach, Rail & Cruise" },
        { "icon": "⚡", "title": "Pace", "value": "Active & Comprehensive" }
      ],
      "pricing": {
        "currency": "$",
        "base_price": 2495
      },
      "booking": {
        "title": "Secure Your Nordic Summer Escape",
        "description": "Book your summer adventure today. Our premium package includes scenic transportation, rail passes, overnight Baltic cruise, hotel stays, and professional tour leadership.",
        "bullets": [
          "All Premium Hotels Included",
          "Flåm Mountain Railway Return Ticket",
          "Overnight Baltic Cruise (Oslo ➔ Copenhagen)",
          "Daily Buffet Breakfasts & Highlight Dinners"
        ]
      },
      "timeline": [
        {
          "day": "1",
          "title": "The Journey Begins",
          "tagline": "✈️ Departure: Bound for Scandinavia",
          "vibe_text": "Leave the ordinary behind. Board your flight and prepare to wake up in the capital of Nordic chic.",
          "highlights": [
            { "icon": "✈️", "title": "Flight Departure", "description": "Depart your flight bound for Stockholm Arlanda Airport. Smooth boarding and flight preparations." }
          ],
          "stay": "🏨 Transit: Overnight Flight",
          "media": {
            "type": "carousel",
            "id": "carousel-esc-day1",
            "slides": [
              { "src": "images/nordic/tour_hero_fjord.png", "alt": "Scandinavia Horizon", "title": "Bound for Scandinavia", "caption": "Prepare to land in Northern Europe." }
            ]
          }
        },
        {
          "day": "2",
          "title": "Royalty, Canals & Historic Cobblestone",
          "tagline": "🇸🇪 Stockholm to Karlstad: The Swedish Transition",
          "vibe_text": "Explore a city built across 14 islands before winding down by the scenic shores of Lake Vänern.",
          "highlights": [
            { "icon": "🏰", "title": "Stockholm City Tour", "description": "Wander the medieval alleyways of Gamla Stan (Old Town), view the Royal Palace, and catch views from Fjällgatan Hill." },
            { "icon": "🚌", "title": "Scenic Countryside Drive", "description": "Relax on a panoramic 2.5-hour coach ride (225 km) deep into the Swedish countryside to Karlstad." },
            { "icon": "🍽️", "title": "Welcome Dinner", "description": "Regroup for an authentic dinner at a local Karlstad restaurant." }
          ],
          "stay": "🏨 Stay: Good Morning Karlstad (or similar)",
          "media": {
            "type": "carousel",
            "id": "carousel-esc-day2",
            "slides": [
              { "src": "images/nordic/day2_stockholm.jpg", "alt": "Stockholm Gamla Stan", "title": "Stockholm Gamla Stan", "caption": "Medieval alleyways and historic townhouses." },
              { "src": "images/nordic/day2_karlstad.jpg", "alt": "Lakeside in Karlstad", "title": "Lake Vänern Shores", "caption": "Peaceful nature and lakeside transition." }
            ]
          }
        },
        {
          "day": "3",
          "title": "Sculpture Parks & Majestic Fjords",
          "tagline": "🇳🇴 Crossing Borders: Karlstad to Oslo & Ål",
          "vibe_text": "Transition from Sweden to Norway. Experience masterfully crafted art parks before heading into the gateway of the majestic Norwegian fjords.",
          "highlights": [
            { "icon": "🌳", "title": "Oslo City Tour", "description": "Walk among the 200+ giant granite statues of Vigeland Sculpture Park, and stroll Karl Johans gate." },
            { "icon": "📸", "title": "Holmenkollen Panoramic View", "description": "Capture a panoramic snapshot at the world-famous Holmenkollen ski jump area." },
            { "icon": "🏔️", "title": "Into the Highlands", "description": "Board your long-distance coach for a scenic 3-hour journey (195 km) to the mountain village of Ål." }
          ],
          "stay": "🏨 Stay: Thon Hotel Hallingdal (or similar)",
          "media": {
            "type": "carousel",
            "id": "carousel-esc-day3",
            "slides": [
              { "src": "images/nordic/day3_oslo_vigeland.png", "alt": "Vigeland Sculpture Park", "title": "Vigeland Park", "caption": "Monolithic granite sculptures under a crisp sky." },
              { "src": "images/nordic/day3_road_al.jpg", "alt": "Scenic road to Ål", "title": "Highland Road", "caption": "Winding into the misty mountain highlands." }
            ]
          }
        },
        {
          "day": "4",
          "title": "The Crown Jewel of Rail Journeys",
          "tagline": "🚂 The Flåm Railway Experience",
          "vibe_text": "Prepare for one of the absolute highlights of your trip—a jaw-dropping train ride through steep ravines, cascading waterfalls, and deep fjords.",
          "highlights": [
            { "icon": "🚂", "title": "The Legendary Flåm Railway", "description": "Board the legendary Flåm-Myrdal loop. Peer out panoramic windows as you ascend over 800 meters along sheer valley walls." },
            { "icon": "🍽️", "title": "Fjord-Side Lunch", "description": "Savor local specialties at a charming local restaurant in the heart of the valley." },
            { "icon": "🏔️", "title": "Highland Return", "description": "Return to the serene comfort of Ål for another incredible 3-course hotel dinner." }
          ],
          "stay": "🏨 Stay: Thon Hotel Hallingdal (or similar)",
          "media": {
            "type": "carousel",
            "id": "carousel-esc-day4",
            "slides": [
              { "src": "images/nordic/day4_flam_railway.jpg", "alt": "Flåm railway train", "title": "Flåm Railway", "caption": "The vintage train hugging a cliffside path." },
              { "src": "images/nordic/day4_flam_fjord.jpg", "alt": "Flåm fjord view", "title": "Flåm Valley Fjord", "caption": "Verdant green peaks meeting crystal waters." }
            ]
          }
        },
        {
          "day": "5",
          "title": "Setting Sail on the Baltic Sea",
          "tagline": "🚢 Oslo to Copenhagen: The Overnight Luxury Cruise",
          "vibe_text": "Say goodbye to Norway's mountains with a grand farewell tour of Oslo, then step aboard a premium cruise liner to sleep your way across the sea to Denmark.",
          "highlights": [
            { "icon": "🏛️", "title": "Oslo Farewell & Palace", "description": "See the Parliament building and enjoy a photo stop outside the elegant Royal Palace." },
            { "icon": "🚢", "title": "Go Nordic Cruiseline Cabin", "description": "Check into your private, comfortable overnight ocean cruise cabin." },
            { "icon": "🦐", "title": "The Grand Buffet", "description": "Celebrate the evening with a massive, premium dinner buffet on board as you cruise down the historic Oslofjord." }
          ],
          "stay": "🏨 Stay: Overnight Cruise Inside Cabin (Go Nordic Cruiseline)",
          "media": {
            "type": "carousel",
            "id": "carousel-esc-day5",
            "slides": [
              { "src": "images/nordic/oslofjord_sunset.png", "alt": "Oslofjord Sunset", "title": "Oslofjord Departure", "caption": "Cruising down the historic fjord at sunset." }
            ]
          }
        },
        {
          "day": "6",
          "title": "Welcome to the Capital of 'Hygge'",
          "tagline": "🇩🇰 Copenhagen: Leisure & Latitude",
          "vibe_text": "Wake up in Denmark! Disembark directly into the heart of Copenhagen for a day of absolute freedom to explore at your own pace.",
          "highlights": [
            { "icon": "🚢", "title": "Copenhagen Terminal Arrival", "description": "Cruise into the Copenhagen Terminal and check into your downtown boutique hotel." },
            { "icon": "🚲", "title": "Free at Leisure", "description": "Rent a bike, grab a coffee, stroll down the famous Strøget shopping street, or sit along the canals of Nyhavn." }
          ],
          "stay": "🏨 Stay: Good Morning City Copenhagen Star (or similar)",
          "media": {
            "type": "carousel",
            "id": "carousel-esc-day6",
            "slides": [
              { "src": "images/nordic/copenhagen_nyhavn.png", "alt": "Nyhavn Canal", "title": "Nyhavn Canal", "caption": "Vibrant townhouses and historic wooden ships." },
              { "src": "images/nordic/day6_copenhagen_tivoli.jpg", "alt": "Tivoli Gardens", "title": "Tivoli Gardens", "caption": "The magical gardens illuminated at night." }
            ]
          }
        },
        {
          "day": "7",
          "title": "Of Castles, Queens & Open Sandwiches",
          "tagline": "👑 Copenhagen & The Shakespearean Castle",
          "vibe_text": "Dive deep into Danish history, indulge in world-class local cuisine, and explore the legendary seaside fortress that inspired Hamlet.",
          "highlights": [
            { "icon": "🧜‍♀️", "title": "Copenhagen City Highlights", "description": "Visit the mystical Little Mermaid statue, Gefion Fountain, Amalienborg Palace, and the Marble Church." },
            { "icon": "🍽️", "title": "The Smørrebrød Experience", "description": "Sit down for an authentic Danish lunch to try world-famous, beautifully arranged open-faced sandwiches." },
            { "icon": "🏰", "title": "Elsinore Castle (Kronborg)", "description": "Travel north to Elsinore to stand in the real-life coastal fortress made immortal by William Shakespeare's Hamlet." }
          ],
          "stay": "🏨 Stay: Good Morning City Copenhagen Star (or similar)",
          "media": {
            "type": "carousel",
            "id": "carousel-esc-day7",
            "slides": [
              { "src": "images/nordic/day7_smorrebrod.jpg", "alt": "Danish Smørrebrød", "title": "Danish Smørrebrød", "caption": "Topped with fresh seafood, dill, and microgreens." },
              { "src": "images/nordic/day7_kronborg_castle.jpg", "alt": "Kronborg Castle", "title": "Kronborg Castle", "caption": "The real-life coastal fortress of Hamlet." },
              { "src": "images/nordic/day7_little_mermaid.jpg", "alt": "Little Mermaid Statue", "title": "The Little Mermaid", "caption": "Sitting gracefully in Copenhagen harbor.", "style": "object-position: center top;" }
            ]
          }
        },
        {
          "day": "8-9",
          "title": "Farewell Scandinavia",
          "tagline": "🛫 Copenhagen Departure to Destination",
          "vibe_text": "Savor your final morning of fresh Danish pastries and coffee before heading to the airport for your smooth journey home.",
          "highlights": [
            { "icon": "☕", "title": "Leisurely Breakfast & Souvenirs", "description": "Enjoy breakfast at your hotel followed by last-minute souvenir hunting and boutique exploring at leisure." },
            { "icon": "🚌", "title": "Hassle-Free Airport Transfer", "description": "Comfortable group airport transfer pickup timed perfectly with your departure flight." },
            { "icon": "🌍", "title": "Return Arrival (Day 9)", "description": "Arrive back at your destination airport with a lifetime of spectacular Nordic memories." }
          ],
          "stay": "🏨 Transit: Return Flight",
          "media": {
            "type": "carousel",
            "id": "carousel-esc-day8",
            "slides": [
              { "src": "images/nordic/day8_copenhagen_departure.png", "alt": "Copenhagen Airport", "title": "Scandinavia Departure", "caption": "Smooth airport transfers and journey home." }
            ]
          }
        }
      ]
    },
    {
      "id": "classic_scandinavia",
      "countries": ["Denmark", "Norway", "Finland", "Sweden"],
      "meta": {
        "title": "Classic Scandinavia w/ Fjords | Pandora Travel",
        "description": "Embark on an extraordinary 8-day summer journey through Denmark, Norway, Finland, and Sweden. Discover Copenhagen, Oslo, Flåm, Bergen, Helsinki, and Stockholm on a premium, curated Scandinavian vacation."
      },
      "hero": {
        "title": "Classic Scandinavia with Fjords",
        "description": "Discover the magic of Northern Europe on a premium, curated journey through spectacular Norwegian fjords and vibrant Nordic capitals.",
        "background_image": "images/nordic/tour_hero_fjord.png",
        "cta_book": "Secure Your Classic Scandinavia Tour",
        "cta_view": "View Itinerary Details"
      },
      "essentials": [
        { "icon": "⏱️", "title": "Duration", "value": "8 Epic Days" },
        { "icon": "🗺️", "title": "Route", "value": "Copenhagen ➔ Bergen ➔ Helsinki ➔ Stockholm" },
        { "icon": "🚢", "title": "Travel Style", "value": "Coach, Rail, Cruise & Flight" },
        { "icon": "⚡", "title": "Pace", "value": "Active & Comprehensive" }
      ],
      "pricing": {
        "currency": "$",
        "base_price": 2295
      },
      "booking": {
        "title": "Secure Your Classic Scandinavia Tour",
        "description": "Book your summer adventure today. Our premium package includes scenic transportation, rail passes, flight over Sweden, overnight cruises, hotel stays, and professional tour leadership.",
        "bullets": [
          "All Premium Hotels Included",
          "Flight from Bergen to Helsinki Included",
          "Flåm Mountain Railway Journey Pass",
          "Overnight Cruises (Copenhagen ➔ Oslo, Helsinki ➔ Stockholm)"
        ]
      },
      "timeline": [
        {
          "day": "1",
          "title": "Welcome to Denmark",
          "tagline": "✈️ Arrival: Bound for Copenhagen",
          "vibe_text": "Arrive in Denmark's charming capital. Check into your hotel and enjoy a relaxing evening at leisure.",
          "highlights": [
            { "icon": "✈️", "title": "Arrival & Transfer", "description": "Arrive at Copenhagen Airport by flight, pick up, and transfer to your hotel." },
            { "icon": "🚲", "title": "Leisure Time", "description": "Enjoy a free afternoon to relax and explore the surrounding neighborhood." }
          ],
          "stay": "🏨 Stay: Scandic Sluseholmen (or similar)",
          "media": {
            "type": "carousel",
            "id": "carousel-cls-day1",
            "slides": [
              { "src": "images/nordic/copenhagen_nyhavn.png", "alt": "Copenhagen Nyhavn", "title": "Nyhavn", "caption": "Explore Copenhagen's iconic harbor front." }
            ]
          }
        },
        {
          "day": "2",
          "title": "Castles & Canals",
          "tagline": "🏰 Copenhagen to Oslo: The Seaway Transit",
          "vibe_text": "Spend the morning touring royal castles and Nyhavn, then board a premium overnight ship to Norway.",
          "highlights": [
            { "icon": "🏰", "title": "Nyhavn & Palace Tour", "description": "Explore the vibrant harbor, the royal residence at Amalienborg, and historic city architectures." },
            { "icon": "🚢", "title": "Baltic Cruise Boarding", "description": "Step aboard your premium cruise liner to sail north across the sea." },
            { "icon": "🦐", "title": "Sea Buffet feast", "description": "Indulge in a premium Scandinavian buffet dinner as you cruise the calm sea waters." }
          ],
          "stay": "🏨 Stay: Cruise Inside Cabin (Go Nordic Cruiseline)",
          "media": {
            "type": "carousel",
            "id": "carousel-cls-day2",
            "slides": [
              { "src": "images/nordic/copenhagen_nyhavn.png", "alt": "Copenhagen", "title": "Nyhavn Townhouses", "caption": "A vibrant maritime hub in the Danish capital." },
              { "src": "images/nordic/baltic_sunset.png", "alt": "Baltic Sunset Cruise", "title": "Overnight Cruise", "caption": "Watch the sun set over the calm Baltic Sea." }
            ]
          }
        },
        {
          "day": "3",
          "title": "Crossing Fjordlands",
          "tagline": "🏔️ Oslo to Gol: The Mountain Passage",
          "vibe_text": "Disembark in Oslo and journey through spectacular green valleys to the mountain hub of Gol.",
          "highlights": [
            { "icon": "🌳", "title": "Vigeland Art Walk", "description": "Stroll among hundreds of masterfully carved statues in Vigeland Sculpture Park." },
            { "icon": "🚌", "title": "Hallingdal Valley Passage", "description": "Drive past rivers and green valley fields into the mountain highlands." },
            { "icon": "🥩", "title": "Fjordlands Feast", "description": "Savor a premium regional dinner at your hotel." }
          ],
          "stay": "🏨 Stay: Pers Hotel Gol (or similar)",
          "media": {
            "type": "carousel",
            "id": "carousel-cls-day3",
            "slides": [
              { "src": "images/nordic/day3_oslo_vigeland.png", "alt": "Oslo Vigeland Park", "title": "Oslo Vigeland Art Walk", "caption": "Stroll among hundreds of masterfully carved statues." },
              { "src": "images/nordic/road_to_al.png", "alt": "Road to Gol", "title": "Hallingdal Valley Passage", "caption": "Journey past rivers and green valley fields." }
            ]
          }
        },
        {
          "day": "4",
          "title": "Legendary Rails",
          "tagline": "🚂 The Flåm Railway Journey",
          "vibe_text": "Experience the jaw-dropping rail loop through cascading waterfalls and deep valleys, then cruise the Aurlandsfjord.",
          "highlights": [
            { "icon": "🚂", "title": "Flåm Railway Loop", "description": "Ascend over 800 meters along deep gorges, passing roaring waterfalls." },
            { "icon": "🚢", "title": "Aurlandsfjord Cruise", "description": "Board a passenger boat to cruise the sheer waters of the Aurlandsfjord and Nærøyfjord." },
            { "icon": "🏔️", "title": "Highland Return", "description": "Return to your hotel comfort in Gol for dinner and relax." }
          ],
          "stay": "🏨 Stay: Pers Hotel Gol (or similar)",
          "media": {
            "type": "carousel",
            "id": "carousel-cls-day4",
            "slides": [
              { "src": "images/nordic/day4_flam_railway.jpg", "alt": "Flåm Railway Train", "title": "Flåm Mountain Train", "caption": "Ascending over 800 meters along deep gorges." },
              { "src": "images/nordic/day4_flam_fjord.jpg", "alt": "Fjord Cruise", "title": "Aurlandsfjord Cruise", "caption": "Sail past sheer cliffs and misty mountain ranges." }
            ]
          }
        },
        {
          "day": "5",
          "title": "Funiculars & Wharfs",
          "tagline": "🐟 Gol to Bergen: Capital of West Norway",
          "vibe_text": "Arrive at the spectacular Hanseatic trading wharf in Bergen. Catch panoramic views from the funicular.",
          "highlights": [
            { "icon": "🏠", "title": "Bryggen Wharf Tour", "description": "Walk among the historic medieval Hanseatic wooden buildings listing along the harbor." },
            { "icon": "🚠", "title": "Fløibanen Funicular Lift", "description": "Ride the funicular to Mount Fløyen for scenic vistas over Bergen city." },
            { "icon": "🐟", "title": "Fish Market Tasting", "description": "Sample fresh local salmon, crab, and ocean catches at the waterfront market." }
          ],
          "stay": "🏨 Stay: Scandic Bergen City (or similar)",
          "media": {
            "type": "carousel",
            "id": "carousel-cls-day5",
            "slides": [
              { "src": "images/nordic/day4_bergen_bryggen.jpg", "alt": "Bergen Bryggen Wharf", "title": "Hanseatic Bryggen", "caption": "Medieval wooden houses listing along the harbor." },
              { "src": "images/nordic/bergen_fish_market.png", "alt": "Bergen Fish Market", "title": "Seafood Market Tasting", "caption": "Sample fresh local salmon, crab, and ocean catches." }
            ]
          }
        },
        {
          "day": "6",
          "title": "Cross to Finland",
          "tagline": "✈️ Bergen to Helsinki: Baltic Crossing",
          "vibe_text": "Fly over Sweden directly to Finland's coastal capital. Discover unique architecture at your own pace.",
          "highlights": [
            { "icon": "✈️", "title": "Flight to Finland", "description": "Fly over Sweden's fields and lakes to land at Helsinki Airport." },
            { "icon": "⛪", "title": "Free at Leisure", "description": "Check in and explore Helsinki's design district, parks, or seaside harbors." }
          ],
          "stay": "🏨 Stay: Holiday Inn Helsinki West Ruoholahti (or similar)",
          "media": {
            "type": "carousel",
            "id": "carousel-cls-day6",
            "slides": [
              { "src": "images/nordic/day5_helsinki_city.jpg", "alt": "Helsinki City Harbor", "title": "Helsinki Market Square", "caption": "Vibrant Baltic harbor views." },
              { "src": "images/nordic/helsinki_seaside.png", "alt": "Helsinki Coastline", "title": "Finland Seaside Park", "caption": "Walk along the calm coastal path of the Baltic Sea." }
            ]
          }
        },
        {
          "day": "7",
          "title": "Rocks, Cathedrals & Cruises",
          "tagline": "🚢 Helsinki to Stockholm: The Silja Line Cruise",
          "vibe_text": "Tour the famous Rock Church, then board a massive luxury cruise ship to sleep your way back to Sweden.",
          "highlights": [
            { "icon": "⛪", "title": "Temppeliaukio Rock Church", "description": "Marvel at the giant dome ceiling inside a church carved directly into solid granite bedrock." },
            { "icon": "🏰", "title": "Uspenski Cathedral", "description": "Visit the majestic red brick Eastern Orthodox cathedral overlooking the harbor." },
            { "icon": "🚢", "title": "Silja Line Cruise Boarding", "description": "Board a huge overnight cruise ship to sail back to Stockholm through beautiful archipelagos." }
          ],
          "stay": "🏨 Stay: Silja Line Cruise Cabin",
          "media": {
            "type": "carousel",
            "id": "carousel-cls-day7",
            "slides": [
              { "src": "images/nordic/day6_helsinki_rock_church.jpg", "alt": "Rock Church", "title": "Temppeliaukio Rock Church", "caption": "Carved directly into ancient solid granite bedrock." },
              { "src": "images/nordic/uspenski_cathedral.png", "alt": "Uspenski Cathedral", "title": "Uspenski Cathedral", "caption": "The majestic red brick Orthodox church overlooking the city." },
              { "src": "images/nordic/silja_line_cruise.png", "alt": "Silja Cruise Ship", "title": "Silja Line Cruise", "caption": "Cruise overnight to Sweden through spectacular archipelago islets." }
            ]
          }
        },
        {
          "day": "8",
          "title": "Sweden Farewell",
          "tagline": "🛫 Stockholm Departure to Destination",
          "vibe_text": "Cruise into Stockholm, tour the city hall, then transfer to the airport for your flight home.",
          "highlights": [
            { "icon": "🏛️", "title": "Stockholm City Hall Tour", "description": "Tour the grand brick architecture where the Nobel prize banquet is hosted." },
            { "icon": "🚌", "title": "Airport Transfer", "description": "Board your shuttle timed perfectly with your departure flight from Stockholm Arlanda." }
          ],
          "stay": "🏨 Transit: Return Flight",
          "media": {
            "type": "carousel",
            "id": "carousel-cls-day8",
            "slides": [
              { "src": "images/nordic/stockholm_city_hall.png", "alt": "Stockholm City Hall", "title": "Stockholm City Hall", "caption": "Grand brick architecture reflecting on Lake Mälaren." }
            ]
          }
        }
      ]
    }
  ];

  let activeItineraryId = itineraries[0].id;

  // ==========================================================================
  // MOBILE PANORAMIC WALKTHROUGH BACKGROUND IMAGE SCROLL PANNING
  // ==========================================================================
  const autoCollapseTimers = new Map();

  function initMobileCardFold() {
    const cards = document.querySelectorAll('.dest-info-card');
    cards.forEach(card => {
      const headerToggle = card.querySelector('.dest-card-header-toggle');
      if (headerToggle) {
        headerToggle.addEventListener('click', (e) => {
          if (window.innerWidth <= 768) {
            e.stopPropagation();
            if (autoCollapseTimers.has(card)) {
              clearTimeout(autoCollapseTimers.get(card));
              autoCollapseTimers.delete(card);
            }
            card.classList.toggle('expanded');

            const chapter = card.closest('.film-chapter');
            if (chapter) {
              const bgPhoto = chapter.querySelector('.bg-photo');
              if (bgPhoto) {
                if (card.classList.contains('expanded')) {
                  bgPhoto.classList.remove('pan-active');
                } else {
                  bgPhoto.classList.add('pan-active');
                }
              }
            }
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
    const closeBtn = document.getElementById('mobile-nav-close-btn');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-nav-cta-btn');

    if (!burgerBtn || !overlay) return;

    function toggleMenu() {
      burgerBtn.classList.toggle('burger-active');
      overlay.classList.toggle('mobile-active');
    }

    function closeMenu() {
      burgerBtn.classList.remove('burger-active');
      overlay.classList.remove('mobile-active');
      const mItineraryToggle = document.getElementById('mobile-itineraries-toggle-btn');
      const mItineraryMenu = document.getElementById('mobile-itineraries-menu');
      if (mItineraryMenu) mItineraryMenu.classList.remove('show');
      if (mItineraryToggle) mItineraryToggle.classList.remove('expanded');
    }

    burgerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

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

    // Mobile itineraries dropdown toggle
    const mItineraryToggle = document.getElementById('mobile-itineraries-toggle-btn');
    const mItineraryMenu = document.getElementById('mobile-itineraries-menu');
    if (mItineraryToggle && mItineraryMenu) {
      mItineraryToggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        mItineraryMenu.classList.toggle('show');
        mItineraryToggle.classList.toggle('expanded');
      });
    }
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
        
        // Close all other dropdown menus
        document.querySelectorAll('.dropdown-menu').forEach(m => {
          if (m !== menu) m.classList.remove('show');
        });
        
        if (menu) {
          menu.classList.toggle('show');
        }
      });
    });

    // Close dropdowns if clicking elsewhere
    document.addEventListener('click', () => {
      document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('show'));
    });
  }

  // ==========================================================================
  // RENDER & MENU FUNCTIONS FOR NORDIC ITINERARIES
  // ==========================================================================
  function initItinerariesMenu() {
    const itinerariesMenu = document.getElementById('itineraries-menu');
    const mobileMenu = document.getElementById('mobile-itineraries-menu');

    if (itinerariesMenu) {
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
          
          const viewport = document.getElementById('itinerary-viewport');
          if (viewport) {
            viewport.scrollIntoView({ behavior: 'smooth' });
          }
        });
        
        li.appendChild(a);
        itinerariesMenu.appendChild(li);
      });
    }

    if (mobileMenu) {
      mobileMenu.innerHTML = '';
      itineraries.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.className = 'mobile-menu-itinerary-link';
        a.textContent = item.hero.title;
        a.dataset.id = item.id;
        
        a.addEventListener('click', (e) => {
          e.preventDefault();
          renderItinerary(item.id);
          
          // Close mobile menu overlay after selection
          const overlay = document.getElementById('mobile-nav-overlay');
          const burgerBtn = document.getElementById('burger-btn');
          if (overlay) overlay.classList.remove('mobile-active');
          if (burgerBtn) burgerBtn.classList.remove('burger-active');

          const viewport = document.getElementById('itinerary-viewport');
          if (viewport) {
            viewport.scrollIntoView({ behavior: 'smooth' });
          }
        });
        
        li.appendChild(a);
        mobileMenu.appendChild(li);
      });
    }
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
                
                ${day.stay ? `<div class="day-stay">${day.stay}</div>` : ''}

                <!-- CAROUSEL -->
                ${day.media && day.media.slides && day.media.slides.length > 0 ? `
                <div class="day-carousel" id="${day.media.id}">
                  <div class="carousel-track">
                    ${day.media.slides.map((s, idx) => `
                      <div class="carousel-slide ${idx === 0 ? 'active' : ''}">
                        <img src="${s.src}" alt="${s.alt}" style="${s.style || ''}" onerror="this.onerror=null; this.src='images/nordic/tour_hero_fjord.png';">
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
                ` : ''}
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
      if (day.media && day.media.slides && day.media.slides.length > 1) {
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

  // Modal open & close binds
  function bindBookingTriggers() {
    const triggers = document.querySelectorAll('.open-booking-trigger');
    const modal = document.getElementById('meeting-modal');
    triggers.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (modal) modal.classList.add('show');
      });
    });

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

  // ==========================================================================
  // THREE.JS WEBGL CANVAS BACKGROUND PARTICLES
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
  // GSAP SCROLLTRIGGER CHAPTER ANIMATIONS & MAP BEACON TRACKER
  // ==========================================================================
  function initGSAPScrollTrigger() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const mapIndicator = document.getElementById('philippines-map-indicator');
    if (mapIndicator) {
      gsap.set(mapIndicator, { opacity: 0, scale: 0.8, pointerEvents: 'none' });
      const destChapters = document.querySelectorAll('.film-chapter:not(.chapter-intro)');
      if (destChapters.length > 0) {
        ScrollTrigger.create({
          trigger: destChapters[0],
          endTrigger: destChapters[destChapters.length - 1],
          start: 'top 80%',
          end: 'bottom 95%',
          onEnter: () => gsap.to(mapIndicator, { opacity: 1, scale: 1, pointerEvents: 'auto', duration: 0.3 }),
          onLeave: () => gsap.to(mapIndicator, { opacity: 0, scale: 0.8, pointerEvents: 'none', duration: 0.3 }),
          onEnterBack: () => gsap.to(mapIndicator, { opacity: 1, scale: 1, pointerEvents: 'auto', duration: 0.3 }),
          onLeaveBack: () => gsap.to(mapIndicator, { opacity: 0, scale: 0.8, pointerEvents: 'none', duration: 0.3 })
        });
      }
    }

    const chapters = document.querySelectorAll('.film-chapter');
    const regionLabel = document.getElementById('map-region-name');

    chapters.forEach((chapter) => {
      const regionName = chapter.getAttribute('data-region-name') || 'SCANDINAVIA • NORDIC ESCAPE';
      const regionCode = chapter.getAttribute('data-region') || 'scandinavia';
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

      if (code === 'sweden') {
        document.getElementById('region-sweden')?.classList.add('active-region');
      } else if (code === 'norway') {
        document.getElementById('region-norway')?.classList.add('active-region');
      } else if (code === 'denmark') {
        document.getElementById('region-denmark')?.classList.add('active-region');
      } else if (code === 'finland') {
        document.getElementById('region-finland')?.classList.add('active-region');
      }
    }

    function autoExpandAndTimedCollapseOnMobile(card) {
      if (!card) return;
      if (window.innerWidth <= 768) {
        card.classList.add('expanded');

        const chapter = card.closest('.film-chapter');
        if (chapter) {
          const bgPhoto = chapter.querySelector('.bg-photo');
          if (bgPhoto) {
            bgPhoto.classList.remove('pan-active');
          }
        }

        if (autoCollapseTimers.has(card)) {
          clearTimeout(autoCollapseTimers.get(card));
        }

        const timer = setTimeout(() => {
          card.classList.remove('expanded');
          autoCollapseTimers.delete(card);
          if (chapter) {
            const bgPhoto = chapter.querySelector('.bg-photo');
            if (bgPhoto) {
              bgPhoto.classList.add('pan-active');
            }
          }
        }, 3000);

        autoCollapseTimers.set(card, timer);
      }
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

  // Mobile Hero Overlay Scroll Pin Logic (NATIVE GPU CSS STICKY)
  function initMobileHeroScrollPin() {
    const heroSection = document.querySelector('.film-chapter.chapter-intro, .hero-film-container, .dest-hero-section, #chapter-intro');
    if (!heroSection) return;

    const heroContent = heroSection.querySelector('.chapter-content-container, .dest-hero-content');
    if (!heroContent) return;

    const updatePin = () => {
      if (window.innerWidth <= 1024) {
        heroContent.style.transform = 'none';
      }
    };

    window.addEventListener('resize', updatePin, { passive: true });
    updatePin();
  }

  // Initialize features
  initThreeWebGL();
  initGSAPScrollTrigger();
  initMobileCardFold();
  initMobileBurgerMenu();
  initDropdownMenus();
  initItinerariesMenu();
  renderItinerary(itineraries[0].id);
  bindBookingTriggers();
  initMobileBackToTop();
  initMobileHeroScrollPin();

});
