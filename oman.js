document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // EMBEDDED OMAN ITINERARIES DATA (5 DISTINCT PORTFOLIOS)
  // ==========================================================================
  const itineraries = [
  {
    "id": "oman_luxury",
    "countries": ["Oman"],
    "meta": {
      "title": "Oman – Luxury, Desert & Mountains | Pandora Travel",
      "description": "Customized 9-day luxury itinerary through Muscat, Jabal Akhdar, Wahiba Sands, and Nizwa."
    },
    "hero": {
      "subtitle": "Canyons, Sands & Arabian Sea:",
      "title": "Oman – Luxury, Desert & Mountains",
      "description": "Experience private 4x4 transfers, canyon infinity pool resorts, and luxury dune camps across Oman.",
      "background_image": "images/oman/Landscape_mountains_meeting_turq…_202608141639.jpeg",
      "cta_book": "Inquire About This Trip",
      "cta_view": "View Full Itinerary"
    },
    "essentials": [
      { "icon": "⏱️", "title": "Duration", "value": "9 Days / 8 Nights" },
      { "icon": "🗺️", "title": "Route", "value": "Muscat ➔ Jabal Akhdar ➔ Wahiba ➔ Nizwa" },
      { "icon": "🚘", "title": "Travel Style", "value": "Private 4x4 & 5-Star Resorts" },
      { "icon": "⚡", "title": "Pace", "value": "Relaxed Luxury" }
    ],
    "timeline": [
      {
        "day": "1-2",
        "title": "Muscat Arrival & Historic Culture",
        "tagline": "🕌 Sultan Qaboos Mosque & Muttrah Souq Alleys",
        "vibe_title": "The Vibe",
        "vibe_text": "Arrive in Muscat via private VIP chauffeur. Settle into the minimalist waterfront oasis of The Chedi Muscat. Explore the Grand Mosque, Muttrah Souq, and sail on a private sunset dhow cruise.",
        "highlights": [
          { "icon": "🕌", "title": "Sultan Qaboos Grand Mosque", "description": "Marvel at the giant Swarovski chandelier and hand-woven Persian carpet." },
          { "icon": "⛵", "title": "Sunset Dhow Cruise", "description": "Sailing on a traditional wooden boat past Muscat's dramatic cliffs." }
        ],
        "stay": "🏨 Stay: The Chedi Muscat / Mandarin Oriental, Muscat (5★)",
        "media": {
          "type": "carousel",
          "id": "carousel-lux-day1",
          "slides": [
            { "type": "single", "src": "images/oman/Pool_and_reflecting_water_gardens_202608141639.jpeg", "alt": "The Chedi Muscat", "title": "The Chedi Muscat Pools", "caption": "Quiet reflecting pools and symmetric resort architecture." },
            { 
              "type": "single", 
              "src": "images/oman/oman_mandarin_oriental_muscat.jpg", 
              "alt": "Mandarin Oriental, Muscat", 
              "title": "Mandarin Oriental, Muscat", 
              "caption": "New ultra-luxury hotel option in Muscat."
            },
            { "type": "single", "src": "images/oman/Sultan_Qaboos_Grand_Mosque_exterior_202608141630.jpeg", "alt": "Grand Mosque", "title": "Grand Mosque Exterior", "caption": "The white marble facade and minarets at morning light." },
            { "type": "single", "src": "images/oman/Frankincense_burning_in_Muttrah_…_202608141639.jpeg", "alt": "Muttrah Souq", "title": "Muttrah Souq Alleys", "caption": "Scents of frankincense and spices filling the narrow corridors." }
          ]
        }
      },
      {
        "day": "3-4",
        "title": "Jabal Akhdar Ascent via Nizwa",
        "tagline": "⛰️ Fortresses, Mountain Walks & Spas",
        "vibe_title": "The Vibe",
        "vibe_text": "Travel privately by 4WD to Nizwa Fort and Souq before climbing 2,000m to the Hajar Mountains. Hike along canyon trails, walk through rose terraces, and enjoy cliff-edge spas.",
        "highlights": [
          { "icon": "🏰", "title": "Nizwa Fort & Souq", "description": "Walk the circular tower and browse silver jewelry and daggers." },
          { "icon": "🥾", "title": "Three Villages Walk", "description": "Gentle cliff walk visiting ancient stone dwellings and rose plantations." }
        ],
        "stay": "🏨 Stay: Alila Jabal Akhdar / Anantara Al Jabal Al Akhdar Resort (5★)",
        "media": {
          "type": "carousel",
          "id": "carousel-lux-day3",
          "slides": [
            { 
              "type": "single", 
              "src": "images/oman/Resort_perched_on_cliff_edge_202608161516.jpeg", 
              "alt": "Anantara Al Jabal Al Akhdar", 
              "title": "Anantara Al Jabal Al Akhdar Resort", 
              "caption": "Luxury resort perched on the edge of the canyon."
            },
            { "type": "single", "src": "images/oman/Nizwa_Fort_tower_and_palms_202608141630.jpeg", "alt": "Nizwa Fort", "title": "Nizwa Fort Tower", "caption": "The majestic circular clay fort of Nizwa." },
            { "type": "single", "src": "images/oman/Cliffside_infinity_pool_at_resort_202608141630.jpeg", "alt": "Alila Pool", "title": "Alila Jabal Akhdar Pool", "caption": "Cliffside infinity pool looking out over deep mountain canyons." }
          ]
        }
      },
      {
        "day": "5",
        "title": "Wadi Bani Khalid & Sharqiyah Desert",
        "tagline": "🐫 Emerald Oasis Pools & Golden Sand Glamping",
        "vibe_title": "The Vibe",
        "vibe_text": "Swim in the clear emerald pools of Wadi Bani Khalid. Settle into a high-end desert glamping dome in Wahiba Sands. Enjoy sunset dune driving, a camel safari, and stargazing by the campfire.",
        "highlights": [
          { "icon": "🌴", "title": "Wadi Bani Khalid", "description": "Deep canyon swimming surrounded by green date palms." },
          { "icon": "✨", "title": "Bedouin Stargazing", "description": "Exquisite desert night sky with traditional music and fresh Omani food." }
        ],
        "stay": "⛺ Stay: Desert Nights Camp - Luxury En-suite Dome (5★)",
        "media": {
          "type": "carousel",
          "id": "carousel-lux-day5",
          "slides": [
            { "type": "single", "src": "images/oman/Desert_camp_amid_sand_dunes_202608141630.jpeg", "alt": "Desert Camp", "title": "Desert Nights Glamping Tents", "caption": "Premium canvas domes nestled between tall dunes." },
            { "type": "single", "src": "images/oman/Red_sand_dunes_in_desert_202608141639.jpeg", "alt": "Sand Dunes", "title": "Wahiba Sands Desert", "caption": "Windswept copper-colored dunes at sunset." },
            { "type": "single", "src": "images/oman/Campfire_in_Oman_desert_at_202608141639.jpeg", "alt": "Campfire", "title": "Campfire Stargazing", "caption": "Relaxing under the stars in the silent sands." }
          ]
        }
      },
      {
        "day": "6-7",
        "title": "Maritime Sur, Turtles & St. Regis Beach",
        "tagline": "🐢 Turtle Nesting Watch & St. Regis Al Mouj",
        "vibe_title": "The Vibe",
        "vibe_text": "Travel to Sur maritime town and join an evening turtle-watching tour at Ras Al Jinz. Return via Bimmah Sinkhole to check in at St. Regis Al Mouj. Enjoy private Daymaniyat Islands snorkeling cruises.",
        "highlights": [
          { "icon": "🐢", "title": "Ras Al Jinz Turtle Walk", "description": "See endangered green turtles nesting under protected ranger supervision." },
          { "icon": "🐠", "title": "Daymaniyat Islands Cruise", "description": "Snorkel with marine turtles and reef sharks in crystal waters." }
        ],
        "stay": "🏨 Stay: St. Regis Al Mouj Muscat Resort (5★ Luxury)",
        "media": {
          "type": "carousel",
          "id": "carousel-lux-day6",
          "slides": [
            { 
              "type": "single", 
              "src": "images/oman/St._Regis_Al_Mouj_Muscat_202608161516.jpeg", 
              "alt": "St. Regis Al Mouj Muscat", 
              "title": "St. Regis Al Mouj Muscat Resort", 
              "caption": "Coastal luxury resort nestled on a private white sand beach."
            },
            { "type": "single", "src": "images/oman/Green_turtle_returning_to_ocean_202608141639.jpeg", "alt": "Green Turtle", "title": "Ras Al Jinz Green Turtles", "caption": "Watching turtles return to the sea at early dawn." },
            { "type": "single", "src": "images/oman/Green_sea_turtle_swimming_underw…_202608141639.jpeg", "alt": "Swimming Sea Turtle", "title": "Snorkeling Daymaniyat Islands", "caption": "Clear lagoons with rich coral reef ecosystems." }
          ]
        }
      },
      {
        "day": "8-9",
        "title": "Muscat Leisure & Departure",
        "tagline": "✈️ Luxury Spa, Beach & Departure Chauffeur",
        "vibe_title": "The Vibe",
        "vibe_text": "Spend your final day enjoying the golf course, beach club, and spa. Settle your bags for a private airport chauffeur transfer.",
        "highlights": [
          { "icon": "💆", "title": "St. Regis Guerlain Spa", "description": "Optional facial or massage package." }
        ],
        "stay": "✈️ Departure",
        "media": {
          "type": "carousel",
          "id": "carousel-lux-day8",
          "slides": [
            { "type": "single", "src": "images/oman/Landscape_mountains_meeting_turq…_202608141639.jpeg", "alt": "Takeoff View", "title": "Departure Flight Home", "caption": "Beautiful view of mountains and turquoise Gulf coastline." }
          ]
        }
      }
    ],
    "booking": {
      "title": "Book Your Luxury Oman Escape",
      "description": "Experience premium Omani hospitality. This 8-night package includes luxury resort stays, private 4x4 transfers, expert local guides, and 24/7 guest support.",
      "bullets": [
        "All Luxury Resorts & Mountain Suites Included",
        "Private 4x4 Chauffeur & Guide Included",
        "Custom Spa Treatments & Highlight Meals Included",
        "100% Flexible Dates & Customization"
      ]
    },
    "pricing": {
      "base_price": 3890,
      "currency": "$",
      "dates": [
        { "id": "om-lux-nov", "label": "Nov 15 – Nov 23", "season": "Prime Season", "price_modifier": 0 },
        { "id": "om-lux-dec", "label": "Dec 20 – Dec 28", "season": "Peak Holidays", "price_modifier": 620 }
      ],
      "focus_options": [
        { "id": "lux-chedi-standard", "name": "Chedi Serai Room & Alila Suite", "description": "High-end mountain & beach getaway", "price_per_person": 0 },
        { "id": "lux-mo-suite", "name": "Mandarin Oriental Sea View & Alila Villa", "description": "Ultra-luxury suites and private villa pools", "price_per_person": 1250 }
      ],
      "supplements": [
        { "id": "om-lux-supp-single", "name": "Private Solo Chauffeur Supplement", "description": "Single occupancy rooms & private 4x4", "price": 950 }
      ]
    },
    "contact": {
      "company_name": "Pandora Travel",
      "tagline": "Handcrafted Oman & Global Escapes",
      "address": "Shatti Al Qurum • Muscat, Sultanate of Oman",
      "phone": "+45 2622 0288",
      "email": "info@pandoratravel.dk",
      "web": "www.pandoratravel.dk",
      "contact_image": "images/oman/Landscape_mountains_meeting_turq…_202608141639.jpeg"
    }
  },
  {
    "id": "oman_nature",
    "countries": ["Oman"],
    "meta": {
      "title": "Oman – Nature & Adventure | Pandora Travel",
      "description": "Embark on an active 9-night adventure in Oman. Hike the Grand Canyon, snorkel Daymaniyat, and canyon at Wadi Hawer."
    },
    "hero": {
      "subtitle": "9 Nights / 10 Days · Nature & Adventure:",
      "title": "Oman: Nature & Adventure",
      "description": "A premium active holiday. Walk the Jebel Shams Grand Canyon, cross wadis, and snorkel with sea turtles in marine sanctuaries.",
      "background_image": "images/oman/Red_sand_dunes_in_desert_202608141639.jpeg",
      "cta_book": "Secure Your Safari Adventure",
      "cta_view": "View Itinerary Details"
    },
    "essentials": [
      { "icon": "⏱️", "title": "Duration", "value": "9 Nights / 10 Days" },
      { "icon": "🗺️", "title": "Route", "value": "Muscat ➔ Jabal Shams ➔ Jabal Akhdar ➔ Desert ➔ Wadis ➔ Coast" },
      { "icon": "🧗", "title": "Travel Style", "value": "4x4 Off-Road Safari, Canyon Treks & Active Lodges" },
      { "icon": "⚡", "title": "Pace", "value": "Active & Immersive" }
    ],
    "timeline": [
      {
        "day": "1-2",
        "title": "Muscat Arrival & Daymaniyat Snorkeling",
        "tagline": "🐠 Snorkel with Marine Life & Coastal Views",
        "vibe_title": "The Vibe",
        "vibe_text": "Land in Muscat and check into W Muscat. Next morning, board a private boat to the Daymaniyat Islands for snorkeling with sea turtles and colorful coral reefs.",
        "highlights": [
          { "icon": "⛵", "title": "Daymaniyat Marine Sanctuary", "description": "Swim through clear turquoise waters beside green sea turtles." },
          { "icon": "🌊", "title": "Coastal speedboats", "description": "Search for spinner dolphins along Muscat's coastline." }
        ],
        "stay": "🏨 Stay: W Muscat / Kempinski Hotel Muscat (5★)",
        "media": {
          "type": "carousel",
          "id": "carousel-nat-day1",
          "slides": [
            { 
              "type": "single", 
              "src": "images/oman/WET_pool_deck_at_W_202608161516.jpeg", 
              "alt": "W Muscat Hotel", 
              "title": "W Muscat Hotel Pool", 
              "caption": "Dynamic pool deck and lifestyle accommodations."
            },
            { "type": "single", "src": "images/oman/Green_sea_turtle_swimming_underw…_202608141639.jpeg", "alt": "Sea Turtle Swimming", "title": "Daymaniyat Coral Reefs", "caption": "Snorkeling with endangered sea turtles." },
            { "type": "single", "src": "images/oman/Dolphins_swimming_near_wooden_boat_202608141639.jpeg", "alt": "Dolphins", "title": "Spinner Dolphin Pods", "caption": "Dolphin pods swimming alongside the local dhow charters." }
          ]
        }
      },
      {
        "day": "3",
        "title": "Wadi Bani Awf & Jebel Shams Canyons",
        "tagline": "🧗 Offroad Mountain Crossings & Balcony Walks",
        "vibe_title": "The Vibe",
        "vibe_text": "Drive by 4x4 through Nakhal and cross the off-road passes of Wadi Bani Awf. See deep ravines and ancient stone villages. Arrive at Jebel Shams to hike the Balcony Walk.",
        "highlights": [
          { "icon": "🚙", "title": "Wadi Bani Awf Off-Roading", "description": "Drive winding cliff passes with massive canyon vertical drop-offs." },
          { "icon": "🥾", "title": "Balcony Walk Hike", "description": "Cliff-edge trail looking down 1,000m into Wadi Nakhr (Grand Canyon)." }
        ],
        "stay": "⛺ Stay: Jebel Shams Resort / Canyon View Lodge (4★)",
        "media": {
          "type": "carousel",
          "id": "carousel-nat-day3",
          "slides": [
            { 
              "type": "single", 
              "src": "images/oman/Vehicle_navigating_rocky_canyon_…_202608161516.jpeg", 
              "alt": "Wadi Bani Awf Off-road Crossing", 
              "title": "Wadi Bani Awf Mountain Pass", 
              "caption": "Spectacular off-road crossing through dry rock cliffs."
            },
            { 
              "type": "single", 
              "src": "images/oman/Mountain_lodge_overlooking_canyo…_202608161516.jpeg", 
              "alt": "Jebel Shams Canyon Lodge", 
              "title": "Canyon View Lodge", 
              "caption": "Rustic stone mountain lodge on the canyon rim."
            },
            { "type": "single", "src": "images/oman/Balcony_Walk_along_Wadi_Ghul_202608141639.jpeg", "alt": "Balcony Walk Path", "title": "Jebel Shams Balcony Walk", "caption": "Hiking routes following thin ridges with vertical mountain drops." }
          ]
        }
      },
      {
        "day": "4-5",
        "title": "Jabal Akhdar Canyons & Nizwa Market",
        "tagline": "⛰️ Via Ferrata Climbing & Ancient Villages",
        "vibe_title": "The Vibe",
        "vibe_text": "Travel via Al Hamra and Nizwa Fort to Jabal Akhdar. Try active via ferrata climbing routes, hike canyon paths, and browse silver souks.",
        "highlights": [
          { "icon": "🧗", "title": "Canyon Via Ferrata", "description": "Climb iron ladders built into cliff face routes (activity based on fitness)." },
          { "icon": "🏰", "title": "Nizwa Trading Souk", "description": "Meet local pottery craftsmen and spice merchants." }
        ],
        "stay": "🏨 Stay: Alila Jabal Akhdar Resort (5★)",
        "media": {
          "type": "carousel",
          "id": "carousel-nat-day4",
          "slides": [
            { "type": "single", "src": "images/oman/Cliffside_infinity_pool_at_resort_202608141630.jpeg", "alt": "Alila Jabal Akhdar Pool", "title": "Alila Resort Heights", "caption": "Cliffside resort looking over deep gorges." },
            { "type": "single", "src": "images/oman/Ruins_and_palm_plantation_in_202608141639.jpeg", "alt": "Terrace Plantation", "title": "Jabal Akhdar Rose Terraces", "caption": "A Falaj water system irrigating local mountain crops." },
            { "type": "single", "src": "images/oman/Mud-brick_village_on_mountain_cl…_202608141639.jpeg", "alt": "Mountain village", "title": "Misfat Al Abriyeen", "caption": "Quiet paths on mountain rock terraces." }
          ]
        }
      },
      {
        "day": "6",
        "title": "Sharqiyah Sands Dune Bashing",
        "tagline": "🚙 Sandboarding, Sunset Dune Walks & Campfires",
        "vibe_title": "The Vibe",
        "vibe_text": "Enter the copper sands of Wahiba Sands. Deflate tires to bash dunes, hike up high ridges, try sandboarding, and dine under the stars.",
        "highlights": [
          { "icon": "🏂", "title": "Sandboarding Dunes", "description": "Glide down sand dunes in the golden desert." },
          { "icon": "⛺", "title": "Desert night campfire", "description": "Sleep in an en-suite Bedouin tent and stargaze." }
        ],
        "stay": "⛺ Stay: Desert Nights Camp / Magic Camps Wahiba (4★)",
        "media": {
          "type": "carousel",
          "id": "carousel-nat-day6",
          "slides": [
            { "type": "single", "src": "images/oman/Red_sand_dunes_in_desert_202608141639.jpeg", "alt": "Red Desert Dunes", "title": "Wahiba Dunes Crossing", "caption": "Rippled dunes lit by afternoon shadows." },
            { "type": "single", "src": "images/oman/Desert_camp_amid_sand_dunes_202608141630.jpeg", "alt": "Desert dome", "title": "Wahiba Glamping", "caption": "Sleek domes nestled inside dunes." },
            { "type": "single", "src": "images/oman/Campfire_in_Oman_desert_at_202608141639.jpeg", "alt": "Campfire", "title": "Dunes Campfire", "caption": "Traditional coffee and stargazing by the fire." }
          ]
        }
      },
      {
        "day": "7-8",
        "title": "Wadi Hawer Canyoning & Turtle Coast",
        "tagline": "🥾 Wadi Canyons & Ras Al Jinz Protected Beach",
        "vibe_title": "The Vibe",
        "vibe_text": "Leave the desert for canyoning at Wadi Hawer: swim, hike, and slide through freshwater canyons. Travel to Sur and watch green sea turtles nest at night in Ras Al Jinz.",
        "highlights": [
          { "icon": "🧗", "title": "Wadi Hawer Canyoning", "description": "Active swim-trek combination through mountain gorges." },
          { "icon": "🐢", "title": "Ras Al Jinz Protected Reserve", "description": "Watch nesting green turtles at night with an official guide." }
        ],
        "stay": "🏨 Stay: Ras Al Jinz Turtle Reserve Lodge (3★)",
        "media": {
          "type": "carousel",
          "id": "carousel-nat-day7",
          "slides": [
            { 
              "type": "single", 
              "src": "images/oman/Travelers_wading_through_freshwa…_202608161516.jpeg", 
              "alt": "Wadi Hawer Gorge Canyoning", 
              "title": "Wadi Hawer Canyons", 
              "caption": "Deep freshwater pools and slot canyon cliffs."
            },
            { 
              "type": "single", 
              "src": "images/oman/Ras_Al_Jinz_Eco_Lodge_202608161516.jpeg", 
              "alt": "Ras Al Jinz Reserve Lodge", 
              "title": "Ras Al Jinz Eco-Lodge", 
              "caption": "Sustainable scientific reserve center at the beach."
            },
            { "type": "single", "src": "images/oman/Green_turtle_returning_to_ocean_202608141639.jpeg", "alt": "Green Turtle", "title": "Ras Al Jinz Shore", "caption": "Protected beaches where sea turtles lay eggs." }
          ]
        }
      },
      {
        "day": "9-10",
        "title": "Coastal road to Muscat & Departure",
        "tagline": "🌊 Wadi Tiwi, Bimmah Sinkhole & Takeoff",
        "vibe_title": "The Vibe",
        "vibe_text": "Drive back via Wadi Tiwi and swim in the blue-green water of Bimmah Sinkhole. Settle your bags for your private airport transfer.",
        "highlights": [
          { "icon": "🕳️", "title": "Bimmah Sinkhole", "description": "Swim inside a naturally collapsed limestone sinkhole." }
        ],
        "stay": "✈️ Departure",
        "media": {
          "type": "carousel",
          "id": "carousel-nat-day9",
          "slides": [
            { 
              "type": "single", 
              "src": "images/oman/Limestone_sinkhole_in_Oman_202608161516.jpeg", 
              "alt": "Bimmah Sinkhole", 
              "title": "Bimmah Sinkhole Basin", 
              "caption": "Oman's famous natural collapsed sinkhole pool."
            },
            { "type": "single", "src": "images/oman/Waves_spraying_near_coastal_cliffs_202608141639.jpeg", "alt": "Coastal waves", "title": "Oman Coastal Drive", "caption": "Ocean sprays crashing near Bimmah Sinkhole." },
            { "type": "single", "src": "images/oman/Landscape_mountains_meeting_turq…_202608141639.jpeg", "alt": "Takeoff View", "title": "Gulf Departure Flight", "caption": "Scenic views of coastal mountains from above." }
          ]
        }
      }
    ],
    "booking": {
      "title": "Book Your Oman Safari Escape",
      "description": "Experience premium Omani desert safaris. This 10-day package includes hotels & desert glamping, private 4x4 safari vehicles, expert guides, and 24/7 client care.",
      "bullets": [
        "All Adventure Lodges & Luxury Camps Included",
        "Private 4x4 Off-Road Safari Vehicle & Guide Included",
        "Wadi Trekking & Turtle Reserve Entry Included",
        "100% Flexible Dates & Adjustments"
      ]
    },
    "pricing": {
      "base_price": 2950,
      "currency": "$",
      "dates": [
        { "id": "om-saf-nov", "label": "Nov 20 – Nov 30", "season": "Prime Season", "price_modifier": 0 },
        { "id": "om-saf-jan", "label": "Jan 10 – Jan 20", "season": "Mild Season", "price_modifier": 100 }
      ],
      "focus_options": [
        { "id": "safari-standard", "name": "4-Star Hotels & Safari Tents", "description": "Comfortable room & high-end safari tent", "price_per_person": 0 },
        { "id": "safari-premium-glamp", "name": "5-Star Resorts & Premium Glamping Dome", "description": "Includes Alila mountain suite and magic dome tent", "price_per_person": 980 }
      ],
      "supplements": [
        { "id": "om-saf-supp-single", "name": "Private Solo Supplement", "description": "Single occupancy rooms & private 4x4", "price": 620 }
      ]
    },
    "contact": {
      "company_name": "Pandora Travel",
      "tagline": "Handcrafted Oman & Global Escapes",
      "address": "Shatti Al Qurum • Muscat, Sultanate of Oman",
      "phone": "+45 2622 0288",
      "email": "info@pandoratravel.dk",
      "web": "www.pandoratravel.dk",
      "contact_image": "images/oman/River_flowing_through_canyon_202608141630.jpeg"
    }
  },
  {
    "id": "oman_wellness",
    "countries": ["Oman"],
    "meta": {
      "title": "Wellness & Oman at a slower rhythm | Pandora Travel",
      "description": "Restore your senses with an 8-night slow-paced wellness journey in Oman. Stay at Mandarin Oriental and Alila."
    },
    "hero": {
      "subtitle": "8 Nights / 9 Days · Wellness & Mindfulness:",
      "title": "Wellness & Oman at a slower rhythm",
      "description": "A restorative journey focusing on silence, mindfulness, and spa therapies. Fewer hotel transitions and unstructured days.",
      "background_image": "images/oman/Pool_and_reflecting_water_gardens_202608141639.jpeg",
      "cta_book": "Secure Your Wellness Journey",
      "cta_view": "View Itinerary Details"
    },
    "essentials": [
      { "icon": "⏱️", "title": "Duration", "value": "8 Nights / 9 Days" },
      { "icon": "🧘", "title": "Route", "value": "Muscat ➔ Jabal Akhdar ➔ Desert ➔ Muscat Coast" },
      { "icon": "💆", "title": "Travel Style", "value": "Wellness-oriented Transfers, Spa & Luxury Stays" },
      { "icon": "⚡", "title": "Pace", "value": "Slow & Restorative" }
    ],
    "timeline": [
      {
        "day": "1-3",
        "title": "Muscat Shoreline Sanctuary",
        "tagline": "🧘 Late Starts, Spa Treatments & Sea Cruises",
        "vibe_title": "The Vibe",
        "vibe_text": "Arrive privately in Muscat and settle in with no schedule. Day 2 features a late-start cultural walk and an organic lunch. Day 3 is entirely free for spa therapies and sunset cruises.",
        "highlights": [
          { "icon": "💆", "title": "Somatic Spa therapies", "description": "Holistic body massage and oil wellness treatments." },
          { "icon": "⛵", "title": "Private Sunset Yacht", "description": "Unwind facing the silent, golden Gulf coast." }
        ],
        "stay": "🏨 Stay: Mandarin Oriental, Muscat / The Chedi Muscat (5★)",
        "media": {
          "type": "carousel",
          "id": "carousel-well-day1",
          "slides": [
            { 
              "type": "single", 
              "src": "images/oman/oman_mandarin_oriental_muscat.jpg", 
              "alt": "Mandarin Oriental, Muscat", 
              "title": "Mandarin Oriental, Muscat", 
              "caption": "Restorative oceanfront oasis in Muscat."
            },
            { "type": "single", "src": "images/oman/Pool_and_reflecting_water_gardens_202608141639.jpeg", "alt": "The Chedi", "title": "The Chedi Water Gardens", "caption": "Relaxing reflective waterways and palms." },
            { "type": "single", "src": "images/oman/Sultan_Qaboos_Grand_Mosque_exterior_202608141630.jpeg", "alt": "Grand Mosque", "title": "Grand Mosque Courtyards", "caption": "Quiet marble pathways for peaceful walks." }
          ]
        }
      },
      {
        "day": "4-5",
        "title": "Jabal Akhdar Altitude Spa & Yoga",
        "tagline": "⛰️ Falaj Streams, Meditation & Altitude Spas",
        "vibe_title": "The Vibe",
        "vibe_text": "Transfer through Birkat Al Mouz to check in early at Alila. Day 5 features one single guided activity—a soft village walk. Spend afternoons doing yoga, meditation, and spa treatments.",
        "highlights": [
          { "icon": "🧘", "title": "Altitude Yoga & Meditation", "description": "Sunrise meditation classes facing deep limestone gorges." },
          { "icon": "🥾", "title": "Easy Village Encounter", "description": "Walk paths connecting traditional mountain communities." }
        ],
        "stay": "🏨 Stay: Alila Jabal Akhdar Resort / Anantara (5★ Wellness)",
        "media": {
          "type": "carousel",
          "id": "carousel-well-day4",
          "slides": [
            { 
              "type": "single", 
              "src": "images/oman/Resort_perched_on_cliff_edge_202608161516.jpeg", 
              "alt": "Anantara Al Jabal Al Akhdar", 
              "title": "Anantara Mountain Spa", 
              "caption": "Cliff-edge resort facilities."
            },
            { "type": "single", "src": "images/oman/Cliffside_infinity_pool_at_resort_202608141630.jpeg", "alt": "Alila Jabal Akhdar", "title": "Alila Cliffside Pools", "caption": "Warm, peaceful waters in high mountain air." },
            { "type": "single", "src": "images/oman/Ruins_and_palm_plantation_in_202608141639.jpeg", "alt": "Birkat Al Mouz", "title": "Birkat Al Mouz Oasis", "caption": "Date palms irrigated by Falaj spring water systems." }
          ]
        }
      },
      {
        "day": "6",
        "title": "Sharqiyah sands Silence & Desert Stars",
        "tagline": "⛺ Desert Dunes, Silence & Stargazing Nights",
        "vibe_title": "The Vibe",
        "vibe_text": "Journey deep into the dunes. Settle into camp. Day is structured around quiet landscapes: sunset walks, stargazing, and private dunes campfire dining.",
        "highlights": [
          { "icon": "✨", "title": "Silent Dunes Stargazing", "description": "Experience deep silence and clear night skies in the desert." }
        ],
        "stay": "⛺ Stay: Desert Nights Camp - Premium Glamping (5★)",
        "media": {
          "type": "carousel",
          "id": "carousel-well-day6",
          "slides": [
            { "type": "single", "src": "images/oman/Red_sand_dunes_in_desert_202608141639.jpeg", "alt": "Sand Dunes", "title": "Wahiba Dunes Silence", "caption": "Vast sand ridges reflecting twilight shadows." },
            { "type": "single", "src": "images/oman/Desert_camp_amid_sand_dunes_202608141630.jpeg", "alt": "Desert Camp", "title": "Desert Nights Glamping Domes", "caption": "Refined glamping dome layouts." },
            { "type": "single", "src": "images/oman/Campfire_in_Oman_desert_at_202608141639.jpeg", "alt": "Campfire", "title": "Desert Campfire", "caption": "Stargazing beside warm campfire embers." }
          ]
        }
      },
      {
        "day": "7-8",
        "title": "Wadi Pools & St. Regis Beach Rest",
        "tagline": "🌴 Oasis swim, Beach Spa & Farewell Dinner",
        "vibe_title": "The Vibe",
        "vibe_text": "Return via Wadi Bani Khalid for swimming. Spend your final days at St. Regis Al Mouj. Enjoy beach lounge, spa, and optional private yacht charters.",
        "highlights": [
          { "icon": "🏊", "title": "Wadi Bani Khalid Oasis", "description": "Restorative swimming in clean, palm-fringed wadi waters." }
        ],
        "stay": "🏨 Stay: St. Regis Al Mouj Muscat Resort (5★ Luxury)",
        "media": {
          "type": "carousel",
          "id": "carousel-well-day7",
          "slides": [
            { 
              "type": "single", 
              "src": "images/oman/St._Regis_Al_Mouj_Muscat_202608161516.jpeg", 
              "alt": "St. Regis Al Mouj", 
              "title": "St. Regis Al Mouj Muscat Resort", 
              "caption": "Elegant oceanfront property with high-end spa spaces."
            },
            { "type": "single", "src": "images/oman/Travelers_wading_in_natural_pools_202608141639.jpeg", "alt": "Wadi swimming", "title": "Wadi Bani Khalid Oasis", "caption": "Clear green pools inside rocky valleys." }
          ]
        }
      },
      {
        "day": "9",
        "title": "Muscat Departure",
        "tagline": "✈️ Private Chauffeur Flight Home",
        "vibe_title": "The Vibe",
        "vibe_text": "Relax before your private VIP airport chauffeur transfer for your flight back to the Nordic countries.",
        "highlights": [
          { "icon": "🚙", "title": "Private Chauffeur Transfer", "description": "Direct luxury transfer to departures." }
        ],
        "stay": "✈️ Departure",
        "media": {
          "type": "carousel",
          "id": "carousel-well-day9",
          "slides": [
            { "type": "single", "src": "images/oman/Dhow_boat_sailing_Muscat_coast_202608141630.jpeg", "alt": "Departing Oman", "title": "Sultanate Farewell", "caption": "Flight takeoff overlooking Muscat gulf coastline." }
          ]
        }
      }
    ],
    "booking": {
      "title": "Book Your Wellness Oman Escape",
      "description": "Indulge in high-end restorative travel. This 8-night package includes premium wellness resorts, spa treatments, private driver transfers, and 24/7 client care.",
      "bullets": [
        "Mandarin Oriental & Alila Stays Included",
        "Private Somatic Spa & Massage Therapies Included",
        "Daily Yoga & Meditation Classes Included",
        "100% Flexible Stays & Booking Customization"
      ]
    },
    "pricing": {
      "base_price": 3850,
      "currency": "$",
      "dates": [
        { "id": "om-well-nov", "label": "Nov 18 – Nov 26", "season": "Prime Season", "price_modifier": 0 },
        { "id": "om-well-feb", "label": "Feb 12 – Feb 20", "season": "Spring Mild Season", "price_modifier": 120 }
      ],
      "focus_options": [
        { "id": "wellness-standard", "name": "Alila Mountain Suite & Chedi Deluxe", "description": "High-end resort spa stays", "price_per_person": 0 },
        { "id": "wellness-deluxe-villa", "name": "Alila Cliff Villa & Mandarin Oriental Beach Villa", "description": "Private villa pool layouts and VIP airport fast-tracks", "price_per_person": 1490 }
      ],
      "supplements": [
        { "id": "om-well-supp-single", "name": "Private Solo Supplement", "description": "Single occupancy rooms & private transfers", "price": 820 }
      ]
    },
    "contact": {
      "company_name": "Pandora Travel",
      "tagline": "Handcrafted Oman & Global Escapes",
      "address": "Shatti Al Qurum • Muscat, Sultanate of Oman",
      "phone": "+45 2622 0288",
      "email": "info@pandoratravel.dk",
      "web": "www.pandoratravel.dk",
      "contact_image": "images/oman/Pool_and_reflecting_water_gardens_202608141639.jpeg"
    }
  },
  {
    "id": "oman_family",
    "countries": ["Oman"],
    "meta": {
      "title": "Oman – Private Family Discovery | Pandora Travel",
      "description": "Embark on a private 9-night family adventure in Oman. Features snorkeling, camel rides, sandboarding, and green sea turtles."
    },
    "hero": {
      "subtitle": "9 Nights / 10 Days · Private Family Journey:",
      "title": "Oman: Private Family Discovery",
      "description": "Active family adventure with comfortable 4-5★ beach resorts, camel rides, sandboarding, and interactive fort scavenger hunts.",
      "background_image": "images/oman/Camels_grazing_by_river_waterfalls_202608141639.jpeg",
      "cta_book": "Secure Your Family Adventure",
      "cta_view": "View Itinerary Details"
    },
    "essentials": [
      { "icon": "⏱️", "title": "Duration", "value": "9 Nights / 10 Days" },
      { "icon": "🗺️", "title": "Route", "value": "Muscat ➔ Mountains ➔ Desert ➔ Turtles ➔ Beach ➔ Muscat" },
      { "icon": "🚙", "title": "Travel Style", "value": "Private Chauffeur & Child-Friendly Activity Packages" },
      { "icon": "⚡", "title": "Pace", "value": "Active & Family-friendly" }
    ],
    "timeline": [
      {
        "day": "1-3",
        "title": "Muscat Family Base & Turtle Islands",
        "tagline": "🐠 Dolphin Cruises & Snorkeling Daymaniyat",
        "vibe_title": "The Vibe",
        "vibe_text": "Land in Muscat and check into Kempinski Muscat. Settle the kids, explore Mutrah Souq with our 'Young Explorers' treasure hunt pack, and take a boat to Daymaniyat to snorkel with marine turtles.",
        "highlights": [
          { "icon": "🐚", "title": "Daymaniyat snorkeling", "description": "Spot wild sea turtles, clownfish, and marine corals." },
          { "icon": "🐬", "title": "Dolphin Watching Cruise", "description": "Spot schools of spinner dolphins jumping in the Gulf." }
        ],
        "stay": "🏨 Stay: Kempinski Hotel Muscat / St. Regis Al Mouj (5★ Family Resort)",
        "media": {
          "type": "carousel",
          "id": "carousel-fam-day1",
          "slides": [
            { 
              "type": "single", 
              "src": "images/oman/Kempinski_Hotel_Muscat_beachfron…_202608161516.jpeg", 
              "alt": "Kempinski Hotel Muscat", 
              "title": "Kempinski Hotel Muscat", 
              "caption": "Grand beachfront resort with child-friendly swimming facilities."
            },
            { "type": "single", "src": "images/oman/Green_sea_turtle_swimming_underw…_202608141639.jpeg", "alt": "Turtle Snorkeling", "title": "Snorkeling with Sea Turtles", "caption": "Kid-friendly snorkeling in protected shallow waters." },
            { "type": "single", "src": "images/oman/Dolphins_swimming_near_wooden_boat_202608141639.jpeg", "alt": "Dolphins", "title": "Dolphin Spotting Cruises", "caption": "Spotting wild dolphins from the boat deck." }
          ]
        }
      },
      {
        "day": "4-5",
        "title": "Interactive Nizwa Fort & Mountain Retreat",
        "tagline": "🏰 Fort Scavenger Hunts & Mountain Pools",
        "vibe_title": "The Vibe",
        "vibe_text": "Travel via Nizwa. Solve clues in our Fort challenge, explore clay villages, and proceed to Jabal Akhdar for easy family village walks and mountain pool swimming.",
        "highlights": [
          { "icon": "🏰", "title": "Nizwa Fort Scavenger Hunt", "description": "Solve interactive clues to learn Nizwa Fort history." },
          { "icon": "🏊", "title": "Mountain Pool Activities", "description": "Resort family pools overlooking deep rock canyons." }
        ],
        "stay": "🏨 Stay: dusitD2 Naseem Resort, Jabal Akhdar (4★ Family Retreat)",
        "media": {
          "type": "carousel",
          "id": "carousel-fam-day4",
          "slides": [
            { 
              "type": "single", 
              "src": "images/oman/Resort_pool_surrounded_by_mountains_202608161516.jpeg", 
              "alt": "dusitD2 Naseem Resort, Jabal Akhdar", 
              "title": "dusitD2 Naseem Resort", 
              "caption": "Adventure resort featuring slides and outdoor climbing parks for kids."
            },
            { "type": "single", "src": "images/oman/Nizwa_Fort_tower_and_palms_202608141630.jpeg", "alt": "Nizwa Fort", "title": "Nizwa Clay Watchtowers", "caption": "Climbing Nizwa Fort circular tower." },
            { "type": "single", "src": "images/oman/Mud-brick_village_on_mountain_cl…_202608141639.jpeg", "alt": "Clay mountain village", "title": "Misfat Village Walk", "caption": "Ancient stone houses and date palm trees." }
          ]
        }
      },
      {
        "day": "6",
        "title": "Wahiba Sands Desert Adventures",
        "tagline": "🐫 Camel Rides, Sandboarding & Dunes Campfires",
        "vibe_title": "The Vibe",
        "vibe_text": "Enter Wahiba Sands by 4x4. Try sandboarding down dunes, ride camels, watch the sunset, and enjoy a family dinner under the stars by the fire.",
        "highlights": [
          { "icon": "🏂", "title": "Family Sandboarding", "description": "Glide down golden sand dunes." },
          { "icon": "🐫", "title": "Camel Safari Rides", "description": "Ride camels over sand ridges." }
        ],
        "stay": "⛺ Stay: Desert Nights Camp - Luxury Family Suite (5★)",
        "media": {
          "type": "carousel",
          "id": "carousel-fam-day6",
          "slides": [
            { "type": "single", "src": "images/oman/Red_sand_dunes_in_desert_202608141639.jpeg", "alt": "Dunes", "title": "Golden sand dunes", "caption": "Perfect sand ridges for sandboarding." },
            { "type": "single", "src": "images/oman/Desert_camp_amid_sand_dunes_202608141630.jpeg", "alt": "Desert Camp", "title": "Desert Camp Domes", "caption": "Cozy en-suite canvas setups for family nights." },
            { "type": "single", "src": "images/oman/Campfire_in_Oman_desert_at_202608141639.jpeg", "alt": "Campfire", "title": "Dunes Campfire Night", "caption": "Singing songs and eating around the campfire." }
          ]
        }
      },
      {
        "day": "7",
        "title": "Wadi Bani Khalid Swimming & Turtle Watch",
        "tagline": "🌴 Oasis swims, Sur Dhows & Hatching Sea Turtles",
        "vibe_title": "The Vibe",
        "vibe_text": "Swim in the oasis of Wadi Bani Khalid. Drive to Sur to inspect wooden boat yards, and join an evening guide to see sea turtles laying eggs at Ras Al Jinz.",
        "highlights": [
          { "icon": "🏊", "title": "Wadi Oasis Swimming", "description": "Clean, palm-fringed wadi pools suitable for kids." },
          { "icon": "🐢", "title": "Evening Turtle Tour", "description": "Guided walkthrough to spot nesting sea turtles and baby hatchlings." }
        ],
        "stay": "🏨 Stay: Ras Al Jinz Turtle Reserve Lodge (3★)",
        "media": {
          "type": "carousel",
          "id": "carousel-fam-day7",
          "slides": [
            { "type": "single", "src": "images/oman/Travelers_wading_in_natural_pools_202608141639.jpeg", "alt": "Wadi pools", "title": "Wadi Bani Khalid Pool", "caption": "Safe freshwater pools lined with date palms." },
            { "type": "single", "src": "images/oman/Green_turtle_returning_to_ocean_202608141639.jpeg", "alt": "Green Turtle", "title": "Nesting Green Sea Turtles", "caption": "Green turtles crawling along Ras Al Jinz beaches." },
            { 
              "type": "single", 
              "src": "images/oman/Ras_Al_Jinz_Eco_Lodge_202608161516.jpeg", 
              "alt": "Ras Al Jinz Scientific Reserve Lodge", 
              "title": "Ras Al Jinz Lodge", 
              "caption": "Eco-friendly lodge cabins near the beach conservation center."
            }
          ]
        }
      },
      {
        "day": "8-10",
        "title": "Bimmah Sinkhole & Muscat Beach Farewell",
        "tagline": "🕳️ Coastal roads, Water Sports & Departure Fly",
        "vibe_title": "The Vibe",
        "vibe_text": "Return via Bimmah Sinkhole for swimming. Finish with two nights at a Muscat beach resort. Spend your last day swimming and doing water sports before your departure flight.",
        "highlights": [
          { "icon": "🕳️", "title": "Bimmah Sinkhole Dip", "description": "Jump into the natural limestone sinkhole basin." }
        ],
        "stay": "✈️ Departure",
        "media": {
          "type": "carousel",
          "id": "carousel-fam-day8",
          "slides": [
            { 
              "type": "single", 
              "src": "images/oman/Limestone_sinkhole_in_Oman_202608161516.jpeg", 
              "alt": "Bimmah Sinkhole Pool", 
              "title": "Bimmah Sinkhole Basin", 
              "caption": "Limestone collapsed sinkhole."
            },
            { "type": "single", "src": "images/oman/Waves_spraying_near_coastal_cliffs_202608141639.jpeg", "alt": "Waves Spraying", "title": "Coastal Route Cliffs", "caption": "Dramatic sea views near Bimmah Sinkhole." },
            { "type": "single", "src": "images/oman/Landscape_mountains_meeting_turq…_202608141639.jpeg", "alt": "Departure take-off", "title": "Takeoff Flight Home", "caption": "Oman's pristine coastline from above." }
          ]
        }
      }
    ],
    "booking": {
      "title": "Book Your Family Oman Discovery",
      "description": "Experience family-friendly Omani adventures. Includes child-safe resorts, private transport, guided turtle walks, activity checklists, and 24/7 support.",
      "bullets": [
        "All Kid-Friendly Hotels & Camps Included",
        "Young Explorers Activity Packages Included",
        "Private Chauffeur & Scavenger Fort Guides Included",
        "100% Flexible Dates & Child Bed Adjustments"
      ]
    },
    "pricing": {
      "base_price": 2690,
      "currency": "$",
      "dates": [
        { "id": "om-fam-nov", "label": "Nov 20 – Nov 30", "season": "Prime Season", "price_modifier": 0 },
        { "id": "om-fam-jan", "label": "Jan 12 – Jan 22", "season": "Mild Season", "price_modifier": 80 }
      ],
      "focus_options": [
        { "id": "family-standard", "name": "Kempinski Deluxe Family Room", "description": "Comfortable family layout facing pools", "price_per_person": 0 },
        { "id": "family-connecting-suite", "name": "Kempinski Connecting Suite & Alila Villa", "description": "Two connected suites and private pool decks", "price_per_person": 850 }
      ],
      "supplements": [
        { "id": "om-fam-supp-kids", "name": "Young Explorer Package Discount", "description": "Discount applied per child under 12 years", "price": -450 }
      ]
    },
    "contact": {
      "company_name": "Pandora Travel",
      "tagline": "Handcrafted Oman & Global Escapes",
      "address": "Shatti Al Qurum • Muscat, Sultanate of Oman",
      "phone": "+45 2622 0288",
      "email": "info@pandoratravel.dk",
      "web": "www.pandoratravel.dk",
      "contact_image": "images/oman/Camels_grazing_by_river_waterfalls_202608141639.jpeg"
    }
  },
  {
    "id": "oman_dubai",
    "countries": ["UAE", "Oman"],
    "meta": {
      "title": "Dubai + Oman Premium Journey | Pandora Travel",
      "description": "Embark on an ultra-luxury 11-night journey combining Dubai's contemporary skyline with Oman's historic forts and dunes."
    },
    "hero": {
      "subtitle": "11 Nights / 12 Days · Ultra-Premium Dual Destination:",
      "title": "Dubai + Oman Premium Journey",
      "description": "Contrast Dubai's contemporary skyline with Oman's history, canyons, and desert glamping on this premium 12-day journey.",
      "background_image": "images/oman/Landscape_mountains_meeting_turq…_202608141639.jpeg",
      "cta_book": "Secure Your Premium Cross-Border Tour",
      "cta_view": "View Itinerary Details"
    },
    "essentials": [
      { "icon": "⏱️", "title": "Duration", "value": "11 Nights / 12 Days" },
      { "icon": "✈️", "title": "Route", "value": "Dubai ➔ Muscat ➔ Jabal Akhdar ➔ Desert ➔ Muscat Coast" },
      { "icon": "👑", "title": "Travel Style", "value": "Ultra-Luxury Cross-Border Transfers & 5-Star Beach Resorts" },
      { "icon": "⚡", "title": "Pace", "value": "Curated & Premium" }
    ],
    "timeline": [
      {
        "day": "1-3",
        "title": "Dubai Contemporary Skyline Luxury",
        "tagline": "🏙️ Burj Khalifa, Traditional Gold Souks & Yacht Cruises",
        "vibe_title": "The Vibe",
        "vibe_text": "Touch down in Dubai. Settle into your downtown luxury suite. Day 2: Private highlights tour covering Burj Khalifa, Gold Souks, and Downtown. Day 3: Premium yacht cruising around Dubai Marina.",
        "highlights": [
          { "icon": "🏙️", "title": "Burj Khalifa Top Entry", "description": "Access the VIP observation decks looking over Dubai's skyline." },
          { "icon": "⛵", "title": "Private Yacht Cruise", "description": "Sailing past Jumeirah beach villas and modern glass skyscrapers." }
        ],
        "stay": "🏨 Stay: Armani Hotel Dubai / Jumeirah Al Naseem (5★ Ultra-Luxury)",
        "media": {
          "type": "carousel",
          "id": "carousel-dub-day1",
          "slides": [
            { 
              "type": "single", 
              "src": "images/oman/Burj_Khalifa_at_sunset_202608161516.jpeg", 
              "alt": "Dubai Skyline", 
              "title": "Dubai Downtown Horizon", 
              "caption": "Contemporary glass skyscrapers flanking the Burj Khalifa."
            },
            { 
              "type": "single", 
              "src": "images/oman/Spices_inside_historic_market_al…_202608161516.jpeg", 
              "alt": "Dubai Souks", 
              "title": "Gold & Spice Souks", 
              "caption": "Old Dubai street alley marketplaces."
            },
            { 
              "type": "single", 
              "src": "images/oman/Yacht_cruising_Dubai_Marina_202608161516.jpeg", 
              "alt": "Dubai Yacht Cruise", 
              "title": "Marina Yacht Charters", 
              "caption": "Cruising past modern harbor skyscrapers."
            }
          ]
        }
      },
      {
        "day": "4-5",
        "title": "Flight to Muscat & Capital Heritage",
        "tagline": "🕌 Grand Mosque & Waterfront Muttrah Corniche",
        "vibe_title": "The Vibe",
        "vibe_text": "Take a short flight to Muscat and settle in at Mandarin Oriental. Next morning: private heritage tour visiting Sultan Qaboos Mosque, Opera House, and Mutrah Corniche.",
        "highlights": [
          { "icon": "🕌", "title": "Sultan Qaboos Grand Mosque", "description": "Exquisite Islamic architecture tour with a private guide." },
          { "icon": "🎭", "title": "Royal Opera House Muscat", "description": "Browse the grand marble theaters and gardens." }
        ],
        "stay": "🏨 Stay: Mandarin Oriental, Muscat (5★ Luxury)",
        "media": {
          "type": "carousel",
          "id": "carousel-dub-day4",
          "slides": [
            { "type": "single", "src": "images/oman/Sultan_Qaboos_Grand_Mosque_exterior_202608141630.jpeg", "alt": "Grand Mosque", "title": "Grand Mosque Archways", "caption": "Beautiful hand-carved pillars and gardens." },
            { "type": "single", "src": "images/oman/Royal_Opera_House_exterior_at_202608141639.jpeg", "alt": "Opera House", "title": "Opera House Gardens", "caption": "White marble facades of Muscat's premier theater." },
            { 
              "type": "single", 
              "src": "images/oman/oman_mandarin_oriental_muscat.jpg", 
              "alt": "Mandarin Oriental, Muscat", 
              "title": "Mandarin Oriental Seaside", 
              "caption": "Elegant oceanfront retreat in Muscat."
            }
          ]
        }
      },
      {
        "day": "6-7",
        "title": "Nizwa Fort & Jabal Akhdar Ascent",
        "tagline": "⛰️ Circular Clay Forts & Mountain Spa Retreats",
        "vibe_title": "The Vibe",
        "vibe_text": "Travel to Nizwa Fort and climb the 17th-century watchtower. Ascend by private 4x4 into the Hajar Mountains for guided village canyon walks and luxury spa treatments.",
        "highlights": [
          { "icon": "🏰", "title": "Nizwa Fort Tower", "description": "Historic defensive ramparts and silver souks." },
          { "icon": "🥾", "title": "Three Villages Canyon Walk", "description": "Meet traditional rose water distillers along cliff paths." }
        ],
        "stay": "🏨 Stay: Alila Jabal Akhdar Resort / Anantara (5★ Mountain Retreat)",
        "media": {
          "type": "carousel",
          "id": "carousel-dub-day6",
          "slides": [
            { "type": "single", "src": "images/oman/Nizwa_Fort_tower_and_palms_202608141630.jpeg", "alt": "Nizwa Fort", "title": "Nizwa Fort Circular Tower", "caption": "Circular clay battlements in Nizwa." },
            { "type": "single", "src": "images/oman/Cliffside_infinity_pool_at_resort_202608141630.jpeg", "alt": "Infinity Pool", "title": "Infinity Pool Alila", "caption": "Canyon edge view over Jabal Akhdar." },
            { 
              "type": "single", 
              "src": "images/oman/Resort_perched_on_cliff_edge_202608161516.jpeg", 
              "alt": "Anantara Jabal Akhdar", 
              "title": "Anantara Al Jabal Al Akhdar Resort", 
              "caption": "Diana's Point canyon lookout terrace."
            }
          ]
        }
      },
      {
        "day": "8",
        "title": "Sharqiyah Sands Dunes Glamping",
        "tagline": "🌴 Oasis swim, Sunset Camel Safari & Bedouin Dinner",
        "vibe_title": "The Vibe",
        "vibe_text": "Swim in the pools of Wadi Bani Khalid. Proceed to Wahiba Sands for private sunset dunes driving, camel rides, and stargazing at the dunes camp.",
        "highlights": [
          { "icon": "🏊", "title": "Wadi Bani Khalid swim", "description": "Palm-fringed canyon swimming pools." },
          { "icon": "⛺", "title": "Luxury Dunes Glamping", "description": "Bedouin dome suite stargazing." }
        ],
        "stay": "⛺ Stay: Desert Nights Camp - Luxury Suite (5★)",
        "media": {
          "type": "carousel",
          "id": "carousel-dub-day8",
          "slides": [
            { "type": "single", "src": "images/oman/Travelers_wading_in_natural_pools_202608141639.jpeg", "alt": "Wadi swim", "title": "Wadi Bani Khalid pools", "caption": "Safe freshwater swimming inside mountain ravines." },
            { "type": "single", "src": "images/oman/Red_sand_dunes_in_desert_202608141639.jpeg", "alt": "Red dunes", "title": "Wahiba Dunes crossing", "caption": "Sunset sand ridges crossing by 4x4." }
          ]
        }
      },
      {
        "day": "9-12",
        "title": "St. Regis Al Mouj Beach Finale",
        "tagline": "🐠 Snorkeling Daymaniyat & Six Senses Musandam Option",
        "vibe_title": "The Vibe",
        "vibe_text": "Return via Sur and Bimmah Sinkhole. Check into St. Regis Al Mouj Muscat for three nights. Enjoy Daymaniyat Islands snorkeling boat trips and free beach days before departures. Opt to stay at Six Senses Zighy Bay Musandam.",
        "highlights": [
          { "icon": "🐠", "title": "Daymaniyat Snorkeling Excursion", "description": "Snorkel with reef sea life and wild sea turtles." },
          { "icon": "👑", "title": "Six Senses Zighy Bay Upgrade", "description": "Musandam rustic luxury stone villas option." }
        ],
        "stay": "✈️ Departure",
        "media": {
          "type": "carousel",
          "id": "carousel-dub-day9",
          "slides": [
            { 
              "type": "single", 
              "src": "images/oman/St._Regis_Al_Mouj_Muscat_202608161516.jpeg", 
              "alt": "St. Regis Al Mouj", 
              "title": "St. Regis Al Mouj Muscat Resort", 
              "caption": "Elegant oceanfront resort with pool access."
            },
            { 
              "type": "single", 
              "src": "images/oman/Six_Senses_Zighy_Bay_resort_202608161516.jpeg", 
              "alt": "Six Senses Zighy Bay Resort", 
              "title": "Six Senses Zighy Bay", 
              "caption": "Ultra-luxury Musandam stone villas on the turquoise coast."
            },
            { "type": "single", "src": "images/oman/Green_sea_turtle_swimming_underw…_202608141639.jpeg", "alt": "Snorkeling turtle", "title": "Daymaniyat Islands reef", "caption": "Snorkeling with green turtles inside clear ocean waters." }
          ]
        }
      }
    ],
    "booking": {
      "title": "Book Your Dubai + Oman Premium Journey",
      "description": "Contrast contemporary skyline luxury with desert heritage. Includes Dubai + Oman 5-star hotel stays, airport flight connections, private 4x4 chauffeurs, and 24/7 support.",
      "bullets": [
        "Armani Hotel Dubai & St. Regis Muscat Stays Included",
        "Inter-Country Flight Connections & Fast-Track Transfers",
        "Private 4x4 Desert Crossing & Mountain Chauffeurs",
        "Private Daymaniyat Yacht Snorkeling Cruises Included"
      ]
    },
    "pricing": {
      "base_price": 4950,
      "currency": "$",
      "dates": [
        { "id": "om-dub-nov", "label": "Nov 12 – Nov 24", "season": "Prime Season", "price_modifier": 0 },
        { "id": "om-dub-jan", "label": "Jan 15 – Jan 27", "season": "Mild Season", "price_modifier": 150 }
      ],
      "focus_options": [
        { "id": "focus-standard-dub", "name": "Armani Dubai & St. Regis Standard Room", "description": "Premium 5-star luxury layout", "price_per_person": 0 },
        { "id": "focus-connecting-dub", "name": "Armani Burj Suite & St. Regis Beachfront Suite", "description": "Upgraded suite views and private pool decks", "price_per_person": 1850 }
      ],
      "supplements": [
        { "id": "om-dub-supp-single", "name": "Solo Supplement", "description": "Single occupancy rooms & private guides", "price": 1200 }
      ]
    },
    "contact": {
      "company_name": "Pandora Travel",
      "tagline": "Handcrafted Oman & Global Escapes",
      "address": "Shatti Al Qurum • Muscat, Sultanate of Oman",
      "phone": "+45 2622 0288",
      "email": "info@pandoratravel.dk",
      "web": "www.pandoratravel.dk",
      "contact_image": "images/oman/Landscape_mountains_meeting_turq…_202608141639.jpeg"
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
      const regionName = chapter.getAttribute('data-region-name') || 'SULTANATE OF OMAN';
      const regionCode = chapter.getAttribute('data-region') || 'OMAN';
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

      if (code === 'OMAN') {
        document.getElementById('region-oman')?.classList.add('active-region');
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
        
        document.querySelectorAll('.dropdown-menu').forEach(m => {
          if (m !== menu) m.classList.remove('show');
        });
        
        if (menu) menu.classList.toggle('show');
      });
    });

    document.addEventListener('click', () => {
      document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('show'));
    });
  }

  // ==========================================================================
  // RENDER & MENU FUNCTIONS FOR OMAN ITINERARIES
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
                        <img src="${s.src}" alt="${s.alt}" onerror="this.onerror=null; this.src='images/oman/Landscape_mountains_meeting_turq…_202608141639.jpeg';">
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
            <button class="btn-primary-cyan open-booking-trigger" data-dest="${item.hero.title}">BOOK THIS SAFARI</button>
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

  function bindExploreItineraryTriggers() {
    const triggers = document.querySelectorAll('.explore-itinerary-trigger');
    triggers.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const itineraryId = btn.getAttribute('data-itinerary');
        if (itineraryId) {
          renderItinerary(itineraryId);
          const viewport = document.getElementById('itinerary-viewport');
          if (viewport) {
            viewport.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
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
  bindExploreItineraryTriggers();

});
