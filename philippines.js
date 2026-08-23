document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // EMBEDDED ITINERARIES DATA (Philippines + Scandinavian Options)
  // ==========================================================================
  const itineraries = [
  {
    "id": "philippines",
    "countries": ["Philippines"],
    "meta": {
      "title": "12-Day Ultimate Philippines Archipelago Discovery | Pandora Travel",
      "description": "Embark on an extraordinary 12-day journey across the Philippines with Pandora Travel. Discover Manila, El Nido, Coron, Boracay, Siargao, Cebu, Bohol, and Banaue."
    },
    "hero": {
      "subtitle": "7,641 Islands • Pristine Lagoons & Culture:",
      "title": "The Ultimate 12-Day Philippines Escape",
      "description": "Discover emerald lagoons, white sand beaches, volcanic peaks, ancient rice terraces, and warm local hospitality with Pandora Travel.",
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
      "title": "Secure Your Pandora Travel Philippines Escape",
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
      "company_name": "Pandora Travel",
      "tagline": "Handcrafted Philippines & Global Escapes",
      "address": "BGC High Street, Taguig • Metro Manila, Philippines",
      "phone": "+63 917 888 2622",
      "email": "info@pandoratravel.dk",
      "web": "www.pandoratravel.dk",
      "contact_image": "images/philippines/el_nido_boat.jpeg"
    }
  },
  {
    "id": "philippines_family",
    "countries": ["Philippines"],
    "meta": {
      "title": "21-Day Premium Family Journey | Pandora Travel",
      "description": "Embark on an extraordinary 21-day premium family journey through the Philippines. Discover Manila, Banaue, Sagada, Vigan, Donsol, Bohol, Moalboal, and Cebu City."
    },
    "hero": {
      "subtitle": "21 Days · Mountains, Wildlife & Island Paradises:",
      "title": "Philippines: 21-Day Premium Family Journey",
      "description": "Premium slow travel designed for Danish families. Uncover ancient rice terraces, heritage streets, whale sharks, turtles, and luxury beach resorts.",
      "background_image": "images/philippines/siargao_banca.jpeg",
      "cta_book": "Secure Your Premium Family Journey",
      "cta_view": "View Itinerary Details"
    },
    "essentials": [
      { "icon": "⏱️", "title": "Duration", "value": "21 Epic Days" },
      { "icon": "🗺️", "title": "Route", "value": "Manila ➔ Banaue ➔ Vigan ➔ Donsol ➔ Bohol ➔ Cebu" },
      { "icon": "⛵", "title": "Travel Style", "value": "Private Transfers, Flights & 5★ Resorts" },
      { "icon": "⚡", "title": "Pace", "value": "Experience Mornings, Relax Afternoons" }
    ],
    "map_deck": {
      "title": "THE 21-DAY JOURNEY MAP",
      "description": "Track your family's path across Luzon, Bicol, and the Visayas.",
      "background_image": "images/philippines/siargao_banca.jpeg",
      "route_path": "M 450 250 L 460 140 L 420 120 L 390 130 L 590 380 L 620 520 L 580 570 L 620 520",
      "pins": [
        { "id": "pin-f-manila", "day": 1, "cx": 450, "cy": 250, "label": "Manila", "label_x": 450, "label_y": 220 },
        { "id": "pin-f-banaue", "day": 3, "cx": 460, "cy": 140, "label": "Banaue", "label_x": 460, "label_y": 110 },
        { "id": "pin-f-sagada", "day": 6, "cx": 420, "cy": 120, "label": "Sagada", "label_x": 420, "label_y": 90 },
        { "id": "pin-f-vigan", "day": 8, "cx": 390, "cy": 130, "label": "Vigan", "label_x": 390, "label_y": 160 },
        { "id": "pin-f-donsol", "day": 11, "cx": 590, "cy": 380, "label": "Donsol", "label_x": 590, "label_y": 350 },
        { "id": "pin-f-bohol", "day": 15, "cx": 620, "cy": 520, "label": "Bohol & Cebu", "label_x": 620, "label_y": 550 }
      ]
    },
    "timeline": [
      {
        "day": "1",
        "title": "Arrival in Manila",
        "tagline": "🌆 Private Welcome & Luxury Hotel Rest",
        "vibe_title": "The Vibe",
        "vibe_text": "Touch down in the Philippine capital. Enjoy a private airport meet-and-greet before checking into your five-star hotel to rest and relax.",
        "highlights": [
          { "icon": "🚗", "title": "Premium Transfer", "description": "Meet your private coordinator and transfer to your hotel in a luxury vehicle." },
          { "icon": "🏊", "title": "Leisurely Afternoon", "description": "Spend your day enjoying hotel pool facilities, spa treatments, or room service." }
        ],
        "stay": "🏨 Stay: The Peninsula Manila (5★)",
        "media": {
          "type": "carousel",
          "id": "carousel-fam-day1",
          "slides": [
            { "src": "images/philippines/peninsula_manila_lobby.jpg", "alt": "Manila BGC", "title": "The Peninsula Manila", "caption": "Five-star comfort and world-class luxury to start your trip." }
          ]
        }
      },
      {
        "day": "2",
        "title": "Colonial Heritage of Manila",
        "tagline": "🏰 Half-Day Private Spanish Quarter Tour",
        "vibe_title": "The Vibe",
        "vibe_text": "Step back in time to the 16th century, exploring old walled fortresses, cobblestone streets, and traditional kalesa horse carriages.",
        "highlights": [
          { "icon": "⛪", "title": "Historic Walled City", "description": "Tour Intramuros, Fort Santiago, and the stunning San Agustin Church." },
          { "icon": "🐎", "title": "Kalesa Experience", "description": "Ride a traditional horse-drawn carriage through historic Spanish colonial squares." }
        ],
        "stay": "🏨 Stay: The Peninsula Manila (5★)",
        "media": {
          "type": "carousel",
          "id": "carousel-fam-day2",
          "slides": [
            { "src": "images/philippines/intramuros_residents.jpg", "alt": "Intramuros", "title": "Spanish Walled City", "caption": "Intramuros represents centuries of history in the heart of Manila." }
          ]
        }
      },
      {
        "day": "3",
        "title": "Manila to Banaue Mountain Drive",
        "tagline": "⛰️ Journey Into the Cordillera Highlands",
        "vibe_title": "The Vibe",
        "vibe_text": "Travel directly into the mountain ranges of Northern Luzon, passing scenic viewpoints, local villages, and green foothills.",
        "highlights": [
          { "icon": "🚙", "title": "Private Trans-Mountain Drive", "description": "A long, premium transfer where the highway landscapes become part of the experience." },
          { "icon": "🌾", "title": "Scenic Stopovers", "description": "Pause at mountain view ridges and enjoy a local countryside lunch along the route." }
        ],
        "stay": "🏨 Stay: Banaue Premium Boutique Lodge",
        "media": {
          "type": "carousel",
          "id": "carousel-fam-day3",
          "slides": [
            { "src": "images/philippines/cordillera_range.jpg", "alt": "Banaue Mountains", "title": "The Cordillera Range", "caption": "Breathtaking landscapes as you climb towards the clouds." }
          ]
        }
      },
      {
        "day": "4",
        "title": "UNESCO Batad Rice Terraces",
        "tagline": "🌾 Ifugao Culture & Ancient Stone Terraces",
        "vibe_title": "The Vibe",
        "vibe_text": "Embark on an immersive cultural excursion to Batad, marveling at the giant amphitheater of stone-walled terraces built over 2,000 years ago.",
        "highlights": [
          { "icon": "🚶", "title": "Batad Terraces Trek", "description": "Hike through the terraces with your private guide and visit local villages." },
          { "icon": "🏡", "title": "Ifugao Traditions", "description": "Learn about traditional stilt houses, rice cultivation, and native traditions." }
        ],
        "stay": "🏨 Stay: Banaue Premium Boutique Lodge",
        "media": {
          "type": "carousel",
          "id": "carousel-fam-day4",
          "slides": [
            { "src": "images/philippines/banaue_hikers.jpg", "alt": "Batad Terraces", "title": "Batad Amphitheater", "caption": "UNESCO World Heritage Cordillera rice terraces." }
          ]
        }
      },
      {
        "day": "5",
        "title": "Banaue Relaxation Day",
        "tagline": "☕ Spectacular Views & Leisurely Walks",
        "vibe_title": "The Vibe",
        "vibe_text": "Enjoy a free day without organized tours. Read a book, admire the terrace views, or take a short leisurely walk with the family.",
        "highlights": [
          { "icon": "💆", "title": "Slow Living", "description": "Relax at the lodge, breathe the fresh mountain air, and savor local coffee." },
          { "icon": "🚶", "title": "Optional Village Stroll", "description": "Explore the local marketplace and nearby viewpoints at your own pace." }
        ],
        "stay": "🏨 Stay: Banaue Premium Boutique Lodge",
        "media": {
          "type": "carousel",
          "id": "carousel-fam-day5",
          "slides": [
            { "src": "images/philippines/highland_peace.jpg", "alt": "Banaue Valley", "title": "Highland Peace", "caption": "Slow down and enjoy panoramic vistas from your lodge balcony." }
          ]
        }
      },
      {
        "day": "6",
        "title": "Banaue to Sagada Highlands",
        "tagline": "🚙 Trans-Cordillera Scenic Highway",
        "vibe_title": "The Vibe",
        "vibe_text": "A short, scenic mountain transfer from Banaue to Sagada, passing pine forests and limestone gorges. Afternoon completely free.",
        "highlights": [
          { "icon": "🏞️", "title": "Scenic Transfer", "description": "Observe how the terrain shifts into Benguet pine forests and limestone cliffs." },
          { "icon": "🛏️", "title": "Leisurely Check-in", "description": "Settle into your premium boutique inn and enjoy the cool mountain air." }
        ],
        "stay": "🏨 Stay: Sagada Premium Boutique Inn",
        "media": {
          "type": "carousel",
          "id": "carousel-fam-day6",
          "slides": [
            { "src": "images/philippines/sagada_pine.jpg", "alt": "Sagada Hills", "title": "Sagada Pine Forests", "caption": "Cooler climates and dense pine valleys in Northern Luzon." }
          ]
        }
      },
      {
        "day": "7",
        "title": "Sagada Caves & Hanging Coffins",
        "tagline": "🏔️ Limestone Caves & Hanging Coffins",
        "vibe_title": "The Vibe",
        "vibe_text": "Explore Sagada's mystical Echo Valley hanging coffins or venture inside the massive Sumaguing Cave formations.",
        "highlights": [
          { "icon": "⚰️", "title": "Echo Valley & Hanging Coffins", "description": "Witness the ancient burial site on limestone cliff walls with local guidance." },
          { "icon": "🔦", "title": "Sumaguing Cave Exploration", "description": "Optionally tour the dramatic subterranean chambers and flowstones." }
        ],
        "stay": "🏨 Stay: Sagada Premium Boutique Inn",
        "media": {
          "type": "carousel",
          "id": "carousel-fam-day7",
          "slides": [
            { "src": "images/philippines/sagada_hanging_coffins.jpg", "alt": "Hanging Coffins", "title": "Echo Valley Coffins", "caption": "A centuries-old indigenous Kankanaey burial tradition." }
          ]
        }
      },
      {
        "day": "8",
        "title": "Sagada to Vigan Heritage City",
        "tagline": "🚙 Descent to the Ilocos Coastline",
        "vibe_title": "The Vibe",
        "vibe_text": "Descend from the mountains down to the coast. Check into Vigan's Hotel Luna and spend the afternoon resting by the pool.",
        "highlights": [
          { "icon": "🛣️", "title": "Coastal Drive", "description": "Travel from Cordillera heights down to the historic Ilocos Sur coastline." },
          { "icon": "🏨", "title": "Luna Museum Hotel", "description": "Check in to a premium boutique hotel displaying authentic Spanish heritage." }
        ],
        "stay": "🏨 Stay: Hotel Luna Vigan (4★+ Boutique)",
        "media": {
          "type": "carousel",
          "id": "carousel-fam-day8",
          "slides": [
            { "src": "images/philippines/hotel_luna_vigan.jpg", "alt": "Vigan Hotel", "title": "Historic Hotel Luna", "caption": "A beautifully restored colonial mansion displaying rare artwork." }
          ]
        }
      },
      {
        "day": "9",
        "title": "Historic Vigan Heritage Tour",
        "tagline": "🏛️ Calle Crisologo Cobblestones & Weaving",
        "vibe_title": "The Vibe",
        "vibe_text": "Explore a UNESCO-listed Spanish trading town, riding a kalesa under tiled roofs and learning about local crafts.",
        "highlights": [
          { "icon": "🚲", "title": "Calle Crisologo Kalesa Tour", "description": "Stroll cobblestone streets lined with Spanish colonial heritage homes." },
          { "icon": "🧶", "title": "Inabel Handweaving", "description": "Visit a weaving shop to see traditional Ilocano cotton handweaving." }
        ],
        "stay": "🏨 Stay: Hotel Luna Vigan (4★+ Boutique)",
        "media": {
          "type": "carousel",
          "id": "carousel-fam-day9",
          "slides": [
            { "src": "images/philippines/calle_crisologo_vigan.jpg", "alt": "Calle Crisologo", "title": "Calle Crisologo Vigan", "caption": "Cobblestone streets and colonial houses preserved since the Spanish era." }
          ]
        }
      },
      {
        "day": "10",
        "title": "Vigan Free Day",
        "tagline": "⛪ Leisurely Walks & Traditional Treats",
        "vibe_title": "The Vibe",
        "vibe_text": "Enjoy a completely free day to do as much or as little as you wish. Perfect for strolls and tasting street food.",
        "highlights": [
          { "icon": "🍿", "title": "Vigan Empanada Tasting", "description": "Try the crispy local empanadas at the Plaza Salcedo food stands." },
          { "icon": "🛍️", "title": "Souvenir Exploration", "description": "Explore the local shops for handmade pottery, textiles, and snacks." }
        ],
        "stay": "🏨 Stay: Hotel Luna Vigan (4★+ Boutique)",
        "media": {
          "type": "carousel",
          "id": "carousel-fam-day10",
          "slides": [
            { "src": "images/philippines/filipino_meal.jpg", "alt": "Vigan Plaza", "title": "Local Gastronomy", "caption": "A wonderful assortment of traditional Ilocano and Filipino dishes." }
          ]
        }
      },
      {
        "day": "11",
        "title": "Vigan to Donsol Beachfront",
        "tagline": "✈️ Flight & Transfer to the Bicol Region",
        "vibe_title": "The Vibe",
        "vibe_text": "Fly to Legazpi in the Bicol region. Check into your beachfront resort and relax by the water.",
        "highlights": [
          { "icon": "✈️", "title": "Transit to Bicol", "description": "Private airport transfer followed by domestic flight connects to Legazpi." },
          { "icon": "🏖️", "title": "Beachfront Check-in", "description": "Arrive at your boutique resort on the Donsol coastline." }
        ],
        "stay": "🏨 Stay: Donsol Premium Beachfront Resort",
        "media": {
          "type": "carousel",
          "id": "carousel-fam-day11",
          "slides": [
            { "src": "images/philippines/mayon_volcano.jpeg", "alt": "Bicol Horizon", "title": "Mount Mayon Silhouette", "caption": "The perfect volcanic cone of Mount Mayon visible in Bicol." }
          ]
        }
      },
      {
        "day": "12",
        "title": "Whale Shark Snorkeling in Donsol",
        "tagline": "🐋 Swim with the Gentle Giants of Bicol",
        "vibe_title": "The Vibe",
        "vibe_text": "Wake up early for a private boat excursion to responsibly snorkel alongside the massive whale sharks that congregate in Donsol.",
        "highlights": [
          { "icon": "🐋", "title": "Gentle Giants Encounter", "description": "Snorkel next to massive, plankton-eating whale sharks under professional supervision." },
          { "icon": "⛵", "title": "Private Outrigger Boat", "description": "Cruise the coastal waters on your family's private outrigger banca." }
        ],
        "stay": "🏨 Stay: Donsol Premium Beachfront Resort",
        "media": {
          "type": "carousel",
          "id": "carousel-fam-day12",
          "slides": [
            { "src": "images/philippines/donsol_whale_shark.jpg", "alt": "Whale Shark", "title": "Donsol Whale Shark", "caption": "Swim next to the world's largest fish in their natural habitat." }
          ]
        }
      },
      {
        "day": "13",
        "title": "Donsol Resort Day",
        "tagline": "🌴 Pristine Beach & Spa Relaxation",
        "vibe_title": "The Vibe",
        "vibe_text": "No excursions planned. A full day to read under coconut trees, swim in the resort pool, or indulge in a spa massage.",
        "highlights": [
          { "icon": "💆", "title": "Beachfront Wellness", "description": "Unwind with an authentic hilot massage at the resort's beachfront spa." },
          { "icon": "🥥", "title": "Family Beach Lounge", "description": "Build sandcastles, swim in warm tropical waters, and relax together." }
        ],
        "stay": "🏨 Stay: Donsol Premium Beachfront Resort",
        "media": {
          "type": "carousel",
          "id": "carousel-fam-day13",
          "slides": [
            { "src": "images/philippines/donsol_beachfront_resort.jpg", "alt": "Beachfront", "title": "Beachfront Resort", "caption": "Pristine sandy shores and warm tropical seas." }
          ]
        }
      },
      {
        "day": "14",
        "title": "Mangroves & Reefs Day",
        "tagline": "🛶 Firefly River Cruise or Reef Snorkeling",
        "vibe_title": "The Vibe",
        "vibe_text": "Choose to relax at the resort, snorkel on nearby shallow reefs, or take a twilight kayak cruise to see glowing fireflies in the mangroves.",
        "highlights": [
          { "icon": "✨", "title": "Firefly River Cruise", "description": "Witness thousands of fireflies illuminating the Bicol river mangroves at night." },
          { "icon": "🐠", "title": "Reef Explorer Snorkel", "description": "Explore nearby coral beds teeming with colorful tropical fish." }
        ],
        "stay": "🏨 Stay: Donsol Premium Beachfront Resort",
        "media": {
          "type": "carousel",
          "id": "carousel-fam-day14",
          "slides": [
            { "src": "images/philippines/el_nido_boat.jpeg", "alt": "Outrigger Cruise", "title": "Mangrove Canopy", "caption": "Paddling through tranquil riverways under dense green mangrove vaults." }
          ]
        }
      },
      {
        "day": "15",
        "title": "Donsol to Bohol Island",
        "tagline": "✈️ Luxury Resort Check-in at Alona Beach",
        "vibe_title": "The Vibe",
        "vibe_text": "Fly to Bohol. Settle into the five-star Amorita Resort and enjoy its cliffside infinity pools overlooking Alona Beach.",
        "highlights": [
          { "icon": "🌴", "title": "Amorita Resort Check-in", "description": "Arrive at one of Bohol's premier luxury beachfront properties." },
          { "icon": "🏊", "title": "Cliffside Pools", "description": "Spend the afternoon lounging in infinity pools overlooking the Visayan Sea." }
        ],
        "stay": "🏨 Stay: Amorita Resort Bohol (5★)",
        "media": {
          "type": "carousel",
          "id": "carousel-fam-day15",
          "slides": [
            { "src": "images/philippines/amorita_resort_bohol.jpg", "alt": "Amorita Beach", "title": "Amorita Resort View", "caption": "Pristine sands and cliffside panoramas in Bohol." }
          ]
        }
      },
      {
        "day": "16",
        "title": "Chocolate Hills & Tarsiers",
        "tagline": "🐒 Dome-shaped Hills & Tiny Primates",
        "vibe_title": "The Vibe",
        "vibe_text": "Embark on a half-day private countryside tour to witness the symmetrical Chocolate Hills and spot tiny tarsiers in their forest sanctuary.",
        "highlights": [
          { "icon": "⛰️", "title": "Chocolate Hills Tour", "description": "See the iconic geological formations spreading across a vast tropical plain." },
          { "icon": "👁️", "title": "Tarsier Sanctuary", "description": "Spot the world's smallest primates clinging to branches in the forest reserve." }
        ],
        "stay": "🏨 Stay: Amorita Resort Bohol (5★)",
        "media": {
          "type": "carousel",
          "id": "carousel-fam-day16",
          "slides": [
            { "src": "images/philippines/bohol_hills.jpeg", "alt": "Chocolate Hills", "title": "Chocolate Hills", "caption": "Spectacular symmetrical geological mounds in the center of Bohol." }
          ]
        }
      },
      {
        "day": "17",
        "title": "Bohol Resort Leisure",
        "tagline": "🛶 Beach Kayaking & Reef Swimming",
        "vibe_title": "The Vibe",
        "vibe_text": "No tours scheduled. Explore the clear waters of Alona Beach, go sea kayaking, or relax at the cliffside spa.",
        "highlights": [
          { "icon": "🚣", "title": "Sea Kayaking & SUP", "description": "Paddle along Alona Beach's calm coves with resort-provided equipment." },
          { "icon": "🏊", "title": "Poolside Sunset", "description": "Enjoy family poolside cocktails and fruit juices as the sun sets over Bohol." }
        ],
        "stay": "🏨 Stay: Amorita Resort Bohol (5★)",
        "media": {
          "type": "carousel",
          "id": "carousel-fam-day17",
          "slides": [
            { "src": "images/philippines/alona_beach_bohol.jpg", "alt": "Bohol Cove", "title": "Alona Beach Coastline", "caption": "Turquoise waters perfect for swimming and ocean sports." }
          ]
        }
      },
      {
        "day": "18",
        "title": "Moalboal Marine Adventure",
        "tagline": "🤿 Sardine Run & Sea Turtles Reef",
        "vibe_title": "The Vibe",
        "vibe_text": "Take a private boat transfer to Moalboal. Snorkel or dive within a swirling vortex of millions of sardines and spot green sea turtles.",
        "highlights": [
          { "icon": "🐟", "title": "Sardine Run Swim", "description": "Snorkel directly inside the swirling mass of sardines situated just off the reef." },
          { "icon": "🐢", "title": "Sea Turtle Spotting", "description": "Observe giant reef sea turtles feeding on sea grasses in Moalboal's shallow waters." }
        ],
        "stay": "🏨 Stay: Moalboal Premium Beachfront Resort",
        "media": {
          "type": "carousel",
          "id": "carousel-fam-day18",
          "slides": [
            { "src": "images/philippines/moalboal_sardine_run.jpg", "alt": "Sardine Run", "title": "Moalboal Sardine Run", "caption": "An extraordinary marine phenomenon right on Moalboal's reef." },
            { "src": "images/philippines/moalboal_turtle.jpg", "alt": "Sea Turtle", "title": "Reef Sea Turtles", "caption": "Observe graceful sea turtles grazing on shallow coral gardens." }
          ]
        }
      },
      {
        "day": "19",
        "title": "Moalboal to Cebu City",
        "tagline": "🏙️ Check-in at Shangri-La Mactan Resort",
        "vibe_title": "The Vibe",
        "vibe_text": "Transfer to Cebu City. Check into the iconic Shangri-La Mactan resort beach cove to spend the day at leisure.",
        "highlights": [
          { "icon": "🚙", "title": "Private City Transfer", "description": "A comfortable private transfer from Moalboal back to Metro Cebu." },
          { "icon": "🍹", "title": "Resort Cove Check-in", "description": "Arrive at Mactan's premier luxury resort with private sandy beach coves." }
        ],
        "stay": "🏨 Stay: Shangri-La Mactan, Cebu (5★)",
        "media": {
          "type": "carousel",
          "id": "carousel-fam-day19",
          "slides": [
            { "src": "images/philippines/shangrila_mactan.jpg", "alt": "Mactan Cove", "title": "Shangri-La Mactan Resort", "caption": "Relax in tropical seaside luxury before your flight home." }
          ]
        }
      },
      {
        "day": "20",
        "title": "Cebu City Shopping & Culture",
        "tagline": "🛍️ Magellan's Cross & Farewell Dinner",
        "vibe_title": "The Vibe",
        "vibe_text": "A light final day. Tour Magellan's Cross, then enjoy boutique shopping at Ayala Center, followed by a farewell dinner.",
        "highlights": [
          { "icon": "⛪", "title": "Heritage Stroll", "description": "Visit Basilica del Santo Niño and the historical Magellan's Cross." },
          { "icon": "🛍️", "title": "Boutique Shopping", "description": "Browse local handicrafts, dried mangoes, and souvenirs at SM City Cebu." }
        ],
        "stay": "🏨 Stay: Shangri-La Mactan, Cebu (5★)",
        "media": {
          "type": "carousel",
          "id": "carousel-fam-day20",
          "slides": [
            { "src": "images/philippines/cebu_landscape.jpg", "alt": "Cebu Heritage", "title": "Cebu City Landscape", "caption": "Explore Cebu City's surrounding green mountains and coastal heritage sites." }
          ]
        }
      },
      {
        "day": "21",
        "title": "Cebu to Denmark",
        "tagline": "✈️ Private Transfer & International Flight Home",
        "vibe_title": "The Vibe",
        "vibe_text": "Savor your final breakfast, enjoy late check-out, and transfer to Mactan-Cebu Airport for your flight back to Copenhagen.",
        "highlights": [
          { "icon": "🚗", "title": "Airport Transfer", "description": "Board your private shuttle timed perfectly with your international departure." },
          { "icon": "🛫", "title": "Flight to Copenhagen", "description": "Arrive back in Denmark with a lifetime of spectacular family memories." }
        ],
        "stay": "🏨 Transit: Return Flight",
        "media": {
          "type": "carousel",
          "id": "carousel-fam-day21",
          "slides": [
            { "src": "images/philippines/bgc.png", "alt": "Departure", "title": "Mactan Airport Terminal", "caption": "Modern wooden arches at Cebu's award-winning international terminal." }
          ]
        }
      }
    ],
    "booking": {
      "title": "Secure Your Premium Family Journey",
      "description": "Book your 21-day family vacation through the Philippines with Pandora Travel.",
      "bullets": ["All Private Transfers & Flights Included", "5★ & Best Available Stays", "24/7 Guest Care Support Line"]
    },
    "pricing": {
      "base_price": 6830,
      "currency": "$",
      "dates": [
        { "id": "fam-nov10", "label": "Nov 15 – Dec 06", "season": "Prime Dry Season", "price_modifier": 0 },
        { "id": "fam-dec18", "label": "Dec 18 – Jan 08", "season": "Holiday Peak Season", "price_modifier": 650 },
        { "id": "fam-jan20", "label": "Jan 20 – Feb 10", "season": "Dry Sun Season", "price_modifier": 150 }
      ],
      "inside": [
        { "id": "fam-resort-villa", "name": "Banaue Suite & Amorita Cliff Pool Villa", "description": "Standard rooming with premium suites/villas included", "price_per_person": 0 },
        { "id": "fam-luxury-two-bedroom", "name": "Amorita Two-Bedroom Pool Villa & Shangri-La Ocean Suite", "description": "Maximum comfort, larger villa setups, and airport fast-tracks", "price_per_person": 1950 }
      ],
      "supplements": [
        { "id": "fam-supp-scuba", "name": "Family Scuba & Snorkeling Coral Explorer Pass", "description": "Includes boat gear hire & marine sanctuary passes", "price": 280 }
      ]
    },
    "contact": {
      "company_name": "Pandora Travel",
      "tagline": "Journeys That Connect",
      "address": "Borgmestervangen 31, 2200 Copenhagen",
      "phone": "+45 2622 0288",
      "email": "info@pandoratravel.dk",
      "web": "www.pandoratravel.dk",
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

        const chapter = card.closest('.film-chapter');
        if (chapter) {
          const bgPhoto = chapter.querySelector('.bg-photo');
          if (bgPhoto) {
            bgPhoto.classList.remove('pan-active');
          }
        }

        // Clear any existing timer for this card
        if (autoCollapseTimers.has(card)) {
          clearTimeout(autoCollapseTimers.get(card));
        }

        // Set 3-second auto-collapse timer
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

  // ==========================================================================
  // MOBILE CARD FOLD / UNFOLD CLICK TOGGLE HANDLER
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

    const closeBtn = document.getElementById('mobile-nav-close-btn');
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
        
        if (menu) menu.classList.toggle('show');
      });
    });

    // Close any open dropdown menu when clicking anywhere else
    document.addEventListener('click', () => {
      document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('show'));
    });
  }

  // ==========================================================================
  // RENDER & MENU FUNCTIONS FOR ITINERARIES
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
  initDropdownMenus();
  initItinerariesMenu();
  renderItinerary(itineraries[0].id);
  bindBookingTriggers();

});
