document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // EMBEDDED OMAN ITINERARIES DATA
  // ==========================================================================
  const itineraries = [
  {
    "id": "oman_luxury",
    "countries": ["Oman"],
    "meta": {
      "title": "8-Day Omani Majesty Luxury Mountain & Coast Escape | Abbey's Road",
      "description": "Indulge in an 8-day luxury adventure in the Sultanate of Oman. Stay at the cliffside Alila Jabal Akhdar and the beachfront Chedi Muscat."
    },
    "hero": {
      "subtitle": "5-Star Luxury Mountain & Coastal Retreats:",
      "title": "Omani Majesty: Mountains & Coast",
      "description": "Escape to the cooling heights of Jabal Akhdar and relax on the pristine beaches of Muscat on this curated 5-star getaway.",
      "background_image": "images/oman/Landscape_mountains_meeting_turq…_202608141639.jpeg",
      "cta_book": "Secure Your Luxury Oman Escape",
      "cta_view": "View Itinerary Details"
    },
    "essentials": [
      { "icon": "⏱️", "title": "Duration", "value": "8 Refined Days" },
      { "icon": "🗺️", "title": "Route", "value": "Muscat ➔ Jebel Akhdar ➔ Nizwa ➔ Muscat" },
      { "icon": "🚙", "title": "Travel Style", "value": "Private 4x4 Chauffeur & 5-Star Luxury Resorts" },
      { "icon": "⚡", "title": "Pace", "value": "Curated & Relaxed" }
    ],
    "timeline": [
      {
        "day": "1",
        "title": "Arrival in Muscat & Coastal Vibe",
        "tagline": "🏨 VIP Landing at Gulf of Oman Coast",
        "vibe_title": "The Vibe",
        "vibe_text": "Touch down in the pristine capital city of Muscat. A private VIP escort conducts you from the airport tarmac to your beachfront paradise at The Chedi.",
        "highlights": [
          { "icon": "✈️", "title": "VIP Airport Meet & Greet", "description": "Fast-track immigration and private luxury chauffeur transfer." },
          { "icon": "🍹", "title": "Sunset Beach Cocktails", "description": "Enjoy welcoming drinks facing the Gulf of Oman." }
        ],
        "stay": "🏨 Stay: The Chedi Muscat 5* (Deluxe Room)",
        "media": {
          "type": "carousel",
          "id": "carousel-oman-day1",
          "slides": [
            { "type": "single", "src": "images/oman/Pool_and_reflecting_water_gardens_202608141639.jpeg", "alt": "Chedi Muscat Water Gardens", "title": "The Chedi Water Gardens", "caption": "Lush landscape design blending with Arabian minimalist architecture." },
            { "type": "single", "src": "images/oman/Dhow_boat_sailing_Muscat_coast_202608141630.jpeg", "alt": "Dhow Sailing Muscat", "title": "Coastal Dhow Sailing", "caption": "Traditional wooden dhows navigating Muscat's clean coast." },
            { "type": "single", "src": "images/oman/Waves_spraying_near_coastal_cliffs_202608141639.jpeg", "alt": "Muscat Ocean Cliffs", "title": "Muscat Coastal Cliffs", "caption": "Turquoise waters spraying along dramatic shoreline rock formations." },
            { "type": "single", "src": "images/oman/Dolphins_swimming_near_wooden_boat_202608141639.jpeg", "alt": "Dolphins Swimming", "title": "Muscat Dolphin Watching", "caption": "Schools of dolphins swimming alongside the local dhow charters." }
          ]
        }
      },
      {
        "day": "2",
        "title": "Cultural Treasures of the Capital",
        "tagline": "🕌 Sultan Qaboos Mosque & Muttrah Souk Alleys",
        "vibe_title": "The Vibe",
        "vibe_text": "Discover the marble-clad architectural triumph of the Grand Mosque and dive into the scents of frankincense and spices at Muttrah Souk.",
        "highlights": [
          { "icon": "🕌", "title": "Grand Mosque Tour", "description": "Guided walkthrough of the main hall featuring the massive Persian carpet." },
          { "icon": "🏺", "title": "Muttrah Souk Search", "description": "Shop for traditional silver daggers, cashmere, and local dates." }
        ],
        "stay": "🏨 Stay: The Chedi Muscat 5* (Deluxe Room)",
        "media": {
          "type": "carousel",
          "id": "carousel-oman-day2",
          "slides": [
            { "type": "single", "src": "images/oman/Sultan_Qaboos_Grand_Mosque_exterior_202608141630.jpeg", "alt": "Sultan Qaboos Grand Mosque", "title": "Grand Mosque Exterior", "caption": "Exquisite Islamic hand-carved details and marble pillars." },
            { "type": "single", "src": "images/oman/Royal_Opera_House_exterior_at_202608141639.jpeg", "alt": "Royal Opera House Muscat", "title": "Royal Opera House", "caption": "Stunning white limestone architecture and pristine geometric gardens." },
            { "type": "single", "src": "images/oman/Frankincense_burning_in_Muttrah_…_202608141639.jpeg", "alt": "Muttrah Souk Incense", "title": "Incense Souk Stalls", "caption": "Fragrant local frankincense burning in decorative clay vessels." },
            { "type": "single", "src": "images/oman/Sunbeams_streaming_into_historic…_202608141639.jpeg", "alt": "Sunbeams in Historic Building", "title": "Sultanate Heritage Interiors", "caption": "Warm golden sunbeams illuminating traditional arches and pottery." }
          ]
        }
      },
      {
        "day": "3",
        "title": "Ascent to the Al Hajar Mountains",
        "tagline": "⛰️ Birkat Al Mouz Ruins & Mountain Ridges",
        "vibe_title": "The Vibe",
        "vibe_text": "Ascend 2,000m above sea level to the cool heights of the Jabal Akhdar plateau, stopping to explore abandoned clay mountain villages en route.",
        "highlights": [
          { "icon": "🏚️", "title": "Birkat Al Mouz Walkway", "description": "Explore ancient mudbrick dwellings and active Falaj irrigation channels." },
          { "icon": "⛰️", "title": "Jabal Akhdar Offroad", "description": "Private 4x4 mountain pass drive with dramatic scenic drop-offs." }
        ],
        "stay": "🏨 Stay: Alila Jabal Akhdar 5* (Horizon View Suite)",
        "media": {
          "type": "carousel",
          "id": "carousel-oman-day3",
          "slides": [
            { "type": "single", "src": "images/oman/Cliffside_infinity_pool_at_resort_202608141630.jpeg", "alt": "Alila Jabal Akhdar Pool", "title": "Cliffside Mountain Pool", "caption": "Infinity pool overlooking sweeping canyon gorges at 2000m altitude." },
            { "type": "single", "src": "images/oman/Ruins_and_palm_plantation_in_202608141639.jpeg", "alt": "Birkat Al Mouz Palms", "title": "Birkat Al Mouz Ruins", "caption": "Historic clay ruins nestled under green date palm plantations." },
            { "type": "single", "src": "images/oman/Balcony_Walk_along_Wadi_Ghul_202608141639.jpeg", "alt": "Balcony Walk Path", "title": "Wadi Ghul Mountain Ridges", "caption": "Rugged canyons climbing high into the sky." },
            { "type": "single", "src": "images/oman/Mud-brick_village_on_mountain_cl…_202608141639.jpeg", "alt": "Mountain mudbrick village", "title": "Misfat Al Abriyeen Terraces", "caption": "Multi-story clay houses hanging on the steep mountain slopes." }
          ]
        }
      },
      {
        "day": "4",
        "title": "Canyons & Stone Village Hikes",
        "tagline": "🥾 Three Villages Walk & Rose Water Distilleries",
        "vibe_title": "The Vibe",
        "vibe_text": "Breathe the refreshing crisp mountain air while hiking along cliffside paths between ancient villages and rose terraces.",
        "highlights": [
          { "icon": "🥾", "title": "Canyon Cliff Walk", "description": "Guided scenic walking path visiting the traditional villages of Al Aqr and Al Ayn." },
          { "icon": "🌹", "title": "Rosewater Distillery Visit", "description": "Observe local Ifri Rose distilleries utilizing historic clay ovens." }
        ],
        "stay": "🏨 Stay: Alila Jabal Akhdar 5* (Horizon View Suite)",
        "media": {
          "type": "carousel",
          "id": "carousel-oman-day4",
          "slides": [
            { "type": "single", "src": "images/oman/Balcony_Walk_along_Wadi_Ghul_202608141639.jpeg", "alt": "Wadi Ghul Balcony Walk", "title": "Wadi Ghul Balcony Walk", "caption": "Hiking routes following thin ridges with vertical mountain drops." },
            { "type": "single", "src": "images/oman/Mud-brick_village_on_mountain_cl…_202608141639.jpeg", "alt": "Mountain village stone path", "title": "Mountain Stone Terraces", "caption": "Stone terraces built by local tribes centuries ago." },
            { "type": "single", "src": "images/oman/Ruins_and_palm_plantation_in_202608141639.jpeg", "alt": "Ancient village plantation", "title": "Ancient Terraced Farming", "caption": "Rose water crops watered by mountain streams." },
            { "type": "single", "src": "images/oman/Camels_grazing_by_river_waterfalls_202608141639.jpeg", "alt": "Camels in mountain river", "title": "Omani Camels Grazing", "caption": "Wild camels roaming down natural mountain river banks." }
          ]
        }
      },
      {
        "day": "5",
        "title": "Nizwa Fort en Route to the Coast",
        "tagline": "🏰 Ancient Capital Fortresses & Clay Crafts",
        "vibe_title": "The Vibe",
        "vibe_text": "Descend from the mountains to explore the ancient Omani capital of Nizwa before returning to Muscat's coastal sands.",
        "highlights": [
          { "icon": "🏰", "title": "Nizwa Fort Exploration", "description": "Climb to the top of the 17th-century circular defense tower." },
          { "icon": "☕", "title": "Nizwa Souk Coffee", "description": "Taste Omani cardamom coffee and traditional halwa sweets." }
        ],
        "stay": "🏨 Stay: The Chedi Muscat 5* (Deluxe Room)",
        "media": {
          "type": "carousel",
          "id": "carousel-oman-day5",
          "slides": [
            { "type": "single", "src": "images/oman/Nizwa_Fort_tower_and_palms_202608141630.jpeg", "alt": "Nizwa Fort Tower", "title": "Nizwa Fort Circular Tower", "caption": "Oman's largest historic circular defense structure." },
            { "type": "single", "src": "images/oman/Host_pouring_coffee_into_cup_202608141639.jpeg", "alt": "Omani Coffee Hospitality", "title": "Omani Hospitality Coffee", "caption": "Pouring traditional spiced cardamom coffee into small cups." },
            { "type": "single", "src": "images/oman/Sunbeams_streaming_into_historic…_202608141639.jpeg", "alt": "Inside Nizwa Fort", "title": "Fort Clay Chambers", "caption": "Beautiful interior rooms inside the Nizwa fort complex." },
            { "type": "single", "src": "images/oman/Ruins_and_palm_plantation_in_202608141639.jpeg", "alt": "Nizwa Town Palms", "title": "Nizwa Town Palms", "caption": "Vast green oases surrounding the historic Nizwa souk." }
          ]
        }
      },
      {
        "day": "6-7",
        "title": "Beachside Indulgence & Spa Sanctuary",
        "tagline": "💆 Waterfront Relaxation & Sublimely Long Pools",
        "vibe_title": "The Vibe",
        "vibe_text": "Unwind completely on the private shoreline of Muscat. Enjoy temperature-controlled pools, custom Spa Alila treatments, and oceanfront dining.",
        "highlights": [
          { "icon": "💆", "title": "Spa Alila Experience", "description": "Complimentary Balinese or Oriental massage treatment." },
          { "icon": "🏊", "title": "The Chedi Long Pool", "description": "Swim in Muscat's famous 103-meter outdoor pool framed by palm trees." }
        ],
        "stay": "🏨 Stay: The Chedi Muscat 5* (Deluxe Room)",
        "media": {
          "type": "carousel",
          "id": "carousel-oman-day6",
          "slides": [
            { "type": "single", "src": "images/oman/Pool_and_reflecting_water_gardens_202608141639.jpeg", "alt": "Chedi Long Pool Sunset", "title": "Chedi Long Pool Sunset", "caption": "Arabian lanterns lit alongside the mirror-like long pool." },
            { "type": "single", "src": "images/oman/Dhow_boat_sailing_Muscat_coast_202608141630.jpeg", "alt": "Dhow Sunset Sailing", "title": "Sunset Dhow Cruise", "caption": "Sailing past Muscat cliffs under a golden twilight sky." },
            { "type": "single", "src": "images/oman/Waves_spraying_near_coastal_cliffs_202608141639.jpeg", "alt": "Chedi Beach Shore", "title": "Chedi Beach Shoreline", "caption": "Lounge beds overlooking the calm shoreline waters." },
            { "type": "single", "src": "images/oman/Dolphins_swimming_near_wooden_boat_202608141639.jpeg", "alt": "Coastal dolphin pods", "title": "Seaside Dolphin Pods", "caption": "Wild dolphins jumping near the coastal safari boat." }
          ]
        }
      },
      {
        "day": "8",
        "title": "Departure from Muscat",
        "tagline": "✈️ Luxury Chauffeur & Flight home",
        "vibe_title": "The Vibe",
        "vibe_text": "Private luxury transfer conducts you back to Muscat International Airport for your flight back to the Nordic countries.",
        "highlights": [
          { "icon": "🚙", "title": "Airport Transfer", "description": "Private chauffeur transfer directly to the departure terminal." }
        ],
        "stay": "✈️ Departure",
        "media": {
          "type": "carousel",
          "id": "carousel-oman-day8",
          "slides": [
            { "type": "single", "src": "images/oman/Landscape_mountains_meeting_turq…_202608141639.jpeg", "alt": "Oman Departure", "title": "Muscat Coastal Peaks", "caption": "Ascending above the Gulf coast for your flight home." }
          ]
        }
      }
    ],
    "booking": {
      "title": "Book Your Luxury Oman Escape",
      "description": "Experience premium Omani hospitality. This 8-day package includes luxury resort stays, private 4x4 transfers, expert local guides, and 24/7 guest support.",
      "bullets": [
        "All Luxury Resorts & Mountain Suites Included",
        "Private 4x4 Chauffeur & Guide Included",
        "Custom Spa Treatments & Highlight Meals Included",
        "100% Flexible Dates & Customization"
      ]
    },
    "pricing": {
      "base_price": 3490,
      "currency": "$",
      "dates": [
        { "id": "om-nov15", "label": "Nov 15 – Nov 22", "season": "Prime Winter Season", "price_modifier": 0 },
        { "id": "om-dec20", "label": "Dec 20 – Dec 27", "season": "Holiday Peak", "price_modifier": 480 },
        { "id": "om-feb10", "label": "Feb 10 – Feb 17", "season": "Mild Spring Season", "price_modifier": 150 }
      ],
      "focus_options": [
        { "id": "chedi-deluxe", "name": "Chedi Muscat Deluxe Room", "description": "Elegant design facing the gardens", "price_per_person": 0 },
        { "id": "chedi-club-suite", "name": "Chedi Muscat Club Suite", "description": "Includes VIP lounge access & airport fast-track", "price_per_person": 850 }
      ],
      "supplements": [
        { "id": "om-supp-single", "name": "Private Solo Supplement", "description": "Single occupancy rooms & private 4x4", "price": 790 }
      ]
    },
    "contact": {
      "company_name": "Abbey's Road Destinations",
      "tagline": "Handcrafted Oman & Global Escapes",
      "address": "Shatti Al Qurum • Muscat, Sultanate of Oman",
      "phone": "+45 2622 0288",
      "email": "abbey@abbeysroad.dk",
      "web": "www.abbeysroad.com",
      "contact_image": "images/oman/Landscape_mountains_meeting_turq…_202608141639.jpeg"
    }
  },
  {
    "id": "oman_safari",
    "countries": ["Oman"],
    "meta": {
      "title": "10-Day Desert Winds & Emerald Wadis Safari Adventure | Abbey's Road",
      "description": "Embark on an epic 10-day off-road safari through Oman's coastal shipyards, turtle reserves, dunes of Wahiba Sands, and mountain gorges."
    },
    "hero": {
      "subtitle": "4x4 Desert Crossing, Gorges & Bedouin Glamping:",
      "title": "Desert Winds & Emerald Wadis Safari",
      "description": "Cross towering sand dunes, hike through hidden wadi canyons, and sleep under desert stars on this comprehensive Omani safari.",
      "background_image": "images/oman/Red_sand_dunes_in_desert_202608141639.jpeg",
      "cta_book": "Secure Your Safari Adventure",
      "cta_view": "View Itinerary Details"
    },
    "essentials": [
      { "icon": "⏱️", "title": "Duration", "value": "10 Epic Days" },
      { "icon": "🗺️", "title": "Route", "value": "Muscat ➔ Sur ➔ Wahiba ➔ Nizwa ➔ Muscat" },
      { "icon": "⛺", "title": "Travel Style", "value": "4x4 Off-Road Safari, Glamping & Lodges" },
      { "icon": "⚡", "title": "Pace", "value": "Active & Comprehensive" }
    ],
    "timeline": [
      {
        "day": "1",
        "title": "Welcome to Muscat",
        "tagline": "🏨 Oceanfront Base at Muscat Cliffs",
        "vibe_title": "The Vibe",
        "vibe_text": "Touch down in Muscat. Meet your private safari guide and driver, and settle into your sea view resort facing the cliffs.",
        "highlights": [
          { "icon": "🚙", "title": "Meet Your Guide", "description": "Meet your dedicated driver and 4x4 vehicle." }
        ],
        "stay": "🏨 Stay: Crowne Plaza Muscat 4* (Sea View Room)",
        "media": {
          "type": "carousel",
          "id": "carousel-safari-day1",
          "slides": [
            { "type": "single", "src": "images/oman/Dhow_boat_sailing_Muscat_coast_202608141630.jpeg", "alt": "Muscat Cliffs View", "title": "Muscat Seaside Heights", "caption": "Overlooking the pristine sand beaches and cliffs of Muscat." },
            { "type": "single", "src": "images/oman/Waves_spraying_near_coastal_cliffs_202608141639.jpeg", "alt": "Muscat Shoreline", "title": "Seaside Cliff Shoreline", "caption": "Unwinding pools overlooking the coastal gulf." }
          ]
        }
      },
      {
        "day": "2",
        "title": "Coastal Sinkhole & Wadi Shab Canyons",
        "tagline": "🥾 Sinkhole Swims & Trekking Hidden Gorges",
        "vibe_title": "The Vibe",
        "vibe_text": "Journey south along the rocky coast. Dip into the emerald basin of Bimmah Sinkhole, then cross the river to hike deep into Wadi Shab.",
        "highlights": [
          { "icon": "🕳️", "title": "Bimmah Sinkhole Dip", "description": "Swim inside a naturally collapsed limestone sinkhole." },
          { "icon": "🥾", "title": "Wadi Shab Trekking", "description": "Climb canyon walls to reach hidden emerald pools and a waterfall cave." }
        ],
        "stay": "🏨 Stay: Sur Plaza Hotel 4*",
        "media": {
          "type": "carousel",
          "id": "carousel-safari-day2",
          "slides": [
            { "type": "single", "src": "images/oman/River_flowing_through_canyon_202608141630.jpeg", "alt": "River flowing through canyon", "title": "Wadi Shab Gorge River", "caption": "Beautiful freshwater flowing through limestone gorges." },
            { "type": "single", "src": "images/oman/Travelers_wading_in_natural_pools_202608141639.jpeg", "alt": "Travelers wading in pools", "title": "Wading in Canyon Pools", "caption": "Deep pools of clear emerald water welcoming swimmers." },
            { "type": "single", "src": "images/oman/Waves_spraying_near_coastal_cliffs_202608141639.jpeg", "alt": "Wadi Cliff Walls", "title": "Canyon Gorge Walls", "caption": "Walking between vertical towering limestone walls." },
            { "type": "single", "src": "images/oman/Dolphins_swimming_near_wooden_boat_202608141639.jpeg", "alt": "Ocean Life Muscat", "title": "Muscat Sea Life", "caption": "Jumping dolphins seen near coastal wadi trails." }
          ]
        }
      },
      {
        "day": "3",
        "title": "Maritime Sur & Ras Al Jinz Turtle Sanctuary",
        "tagline": "🐢 Wooden Dhow Shipyards & Night Turtle Nesting",
        "vibe_title": "The Vibe",
        "vibe_text": "Explore Sur's traditional shipbuilding heritage, then proceed to the Ras Al Jinz beaches to spot nesting green sea turtles at night.",
        "highlights": [
          { "icon": "⛵", "title": "Dhow Shipyard Tour", "description": "See craftsmen constructing Omani wooden dhows without nails." },
          { "icon": "🐢", "title": "Guided Turtle Search", "description": "Walk the protected beaches at night with a ranger to witness nesting sea turtles." }
        ],
        "stay": "🏨 Stay: Ras Al Jinz Turtle Reserve Lodge",
        "media": {
          "type": "carousel",
          "id": "carousel-safari-day3",
          "slides": [
            { "type": "single", "src": "images/oman/Dhow_boat_sailing_Muscat_coast_202608141630.jpeg", "alt": "Dhow Sail", "title": "Sur Dhow Harbor", "caption": "Historic watchtowers and harbors in Sur." },
            { "type": "single", "src": "images/oman/Green_turtle_returning_to_ocean_202608141639.jpeg", "alt": "Green Turtle Beach", "title": "Turtle Returning to Ocean", "caption": "Witnessing green turtles walking down the sands at dawn." },
            { "type": "single", "src": "images/oman/Green_sea_turtle_swimming_underw…_202608141639.jpeg", "alt": "Green Sea Turtle Swimming", "title": "Sea Turtle Swimming", "caption": "Protected turtles swimming in local coral lagoons." },
            { "type": "single", "src": "images/oman/Dolphins_swimming_near_wooden_boat_202608141639.jpeg", "alt": "Wild dolphins Sur", "title": "Sur Coast Dolphins", "caption": "Marine biodiversity along the eastern coastline." }
          ]
        }
      },
      {
        "day": "4",
        "title": "Wahiba Desert Crossing",
        "tagline": "🐫 High Dune Safaris & Luxury Bedouin Glamping",
        "vibe_title": "The Vibe",
        "vibe_text": "Enter the golden expanse of Wahiba Sands. Your 4x4 deflates its tires to bash over sand ridges 100 meters high, culminating in sunset drinks.",
        "highlights": [
          { "icon": "🚙", "title": "Dune Bashing Safari", "description": "High-adrenaline 4x4 dune traversal with expert guides." },
          { "icon": "⛺", "title": "Luxury Desert Campfire", "description": "Relax with music and Omani food around the fire." }
        ],
        "stay": "⛺ Stay: Desert Nights Camp (Luxury Desert Tent)",
        "media": {
          "type": "carousel",
          "id": "carousel-safari-day4",
          "slides": [
            { "type": "single", "src": "images/oman/Red_sand_dunes_in_desert_202608141639.jpeg", "alt": "Wahiba Sands Desert", "title": "Endless Wahiba Sands", "caption": "Windswept copper-colored sand ridges stretching to the horizon." },
            { "type": "single", "src": "images/oman/Desert_camp_amid_sand_dunes_202608141630.jpeg", "alt": "Desert Nights Glamping Tents", "title": "Desert Nights Luxury Camp", "caption": "5-star canvas structures nestled between high dunes." },
            { "type": "single", "src": "images/oman/Campfire_in_Oman_desert_at_202608141639.jpeg", "alt": "Desert campfire", "title": "Campfire under the Stars", "caption": "Sipping coffee around a warm campfire in the desert dunes." }
          ]
        }
      },
      {
        "day": "5",
        "title": "Wadi Bani Khalid Oasis Oasis",
        "tagline": "🌴 Natural Pools & Shade Date Palms",
        "vibe_title": "The Vibe",
        "vibe_text": "Escape the desert heat in Wadi Bani Khalid — a luxury oasis of green pools lined with palms hidden deep inside mountain ravines.",
        "highlights": [
          { "icon": "🌴", "title": "Oasis Swimming", "description": "Swim inside refreshing natural pools surrounded by date palms." }
        ],
        "stay": "⛺ Stay: Desert Nights Camp (Luxury Desert Tent)",
        "media": {
          "type": "carousel",
          "id": "carousel-safari-day5",
          "slides": [
            { "type": "single", "src": "images/oman/Travelers_wading_in_natural_pools_202608141639.jpeg", "alt": "Wadi Bani Khalid Pool", "title": "Bani Khalid Main Pool", "caption": "Large freshwater basin tucked inside limestone mountains." },
            { "type": "single", "src": "images/oman/River_flowing_through_canyon_202608141630.jpeg", "alt": "Date Palm Oasis", "title": "Oasis Waterways", "caption": "Green shade palms alongside natural waterways." },
            { "type": "single", "src": "images/oman/Campfire_in_Oman_desert_at_202608141639.jpeg", "alt": "Desert star nights", "title": "Desert Night Sky", "caption": "Bedouin storytelling around the glowing embers." },
            { "type": "single", "src": "images/oman/Camels_grazing_by_river_waterfalls_202608141639.jpeg", "alt": "Mountain Camels", "title": "Oasis Wildlife", "caption": "Friendly desert camels wandering near wadi oases." }
          ]
        }
      },
      {
        "day": "6",
        "title": "Nizwa Fort & Friday Cattle Market",
        "tagline": "🐏 Historic Trading & Round Clay Towers",
        "vibe_title": "The Vibe",
        "vibe_text": "Rise early to experience Nizwa's historic Friday cattle market, where traders bargain for livestock, then explore the clay ramparts.",
        "highlights": [
          { "icon": "🐏", "title": "Friday Cattle Souk", "description": "Witness the authentic local auction of goats and cows." },
          { "icon": "🏰", "title": "Nizwa Fort Circular Tower", "description": "Climb the steps of the largest defense tower in the interior." }
        ],
        "stay": "🏨 Stay: Golden Tulip Nizwa 4*",
        "media": {
          "type": "carousel",
          "id": "carousel-safari-day6",
          "slides": [
            { "type": "single", "src": "images/oman/Nizwa_Fort_tower_and_palms_202608141630.jpeg", "alt": "Nizwa Fort Tower", "title": "Nizwa Fort Circular Tower", "caption": "Massive clay watchtower overlooking Nizwa town." },
            { "type": "single", "src": "images/oman/Host_pouring_coffee_into_cup_202608141639.jpeg", "alt": "Friday Cattle Auction", "title": "Omani Cardamom Coffee", "caption": "Local hospitality welcoming buyers in the Nizwa souks." },
            { "type": "single", "src": "images/oman/Sunbeams_streaming_into_historic…_202608141639.jpeg", "alt": "Inside Nizwa Fort", "title": "Historic Fort Gateways", "caption": "Sunbeams highlighting clay carvings and massive wooden doors." }
          ]
        }
      },
      {
        "day": "7",
        "title": "Jebel Shams Grand Canyon Trek",
        "tagline": "🥾 Grand Canyon Balcony Walk & Canyons",
        "vibe_title": "The Vibe",
        "vibe_text": "Ascend Oman's highest peak, Jebel Shams, to hike the balcony path looking down into the 1,000m deep Wadi Nakhr canyon.",
        "highlights": [
          { "icon": "🥾", "title": "Balcony Walk Hike", "description": "Walk a cliff edge path to the abandoned village of Sab Bani Khamis." }
        ],
        "stay": "⛺ Stay: Jebel Shams Resort / Alila Jabal Akhdar",
        "media": {
          "type": "carousel",
          "id": "carousel-safari-day7",
          "slides": [
            { "type": "single", "src": "images/oman/Balcony_Walk_along_Wadi_Ghul_202608141639.jpeg", "alt": "Wadi Ghul Canyon", "title": "Wadi Ghul Grand Canyon", "caption": "Breathtaking 1,000-meter drop-offs into the mountain belly." },
            { "type": "single", "src": "images/oman/Mud-brick_village_on_mountain_cl…_202608141639.jpeg", "alt": "Canyon mud brick terraces", "title": "Jebel Shams Balcony Path", "caption": "Narrow mountain paths carved directly into high shale cliffs." },
            { "type": "single", "src": "images/oman/Camels_grazing_by_river_waterfalls_202608141639.jpeg", "alt": "Camels in Wadi", "title": "High Elevation Wildlife", "caption": "Mountain camels foraging on Jebel Shams canyon slopes." }
          ]
        }
      },
      {
        "day": "8",
        "title": "Misfat Al Abriyeen Clay Village",
        "tagline": "🏡 300-Year-Old Mud Houses & Mountain Springs",
        "vibe_title": "The Vibe",
        "vibe_text": "Stroll the terraced gardens and clay houses of Misfat Al Abriyeen, observing how mountain springs still water their crops.",
        "highlights": [
          { "icon": "🏡", "title": "Mudbrick Village Walk", "description": "Guided walking tour through clay alleyways and stone houses." }
        ],
        "stay": "🏨 Stay: The Chedi Muscat 5* (Deluxe Room)",
        "media": {
          "type": "carousel",
          "id": "carousel-safari-day8",
          "slides": [
            { "type": "single", "src": "images/oman/Mud-brick_village_on_mountain_cl…_202608141639.jpeg", "alt": "Misfat Mud Houses", "title": "Clay Village Terraces", "caption": "Historic mudbrick houses constructed on steep mountain rock." },
            { "type": "single", "src": "images/oman/Ruins_and_palm_plantation_in_202608141639.jpeg", "alt": "Misfat Palms", "title": "Oasis Spring Systems", "caption": "Date palms irrigated by falaj mountain spring systems." }
          ]
        }
      },
      {
        "day": "9",
        "title": "Leisurely Day in Muscat",
        "tagline": "🌊 Beachside Pool & Spa Refurbishment",
        "vibe_title": "The Vibe",
        "vibe_text": "Relax alongside the private coastline of The Chedi Muscat. Enjoy fine dining and a custom Spa massage.",
        "highlights": [
          { "icon": "🌊", "title": "Beach relaxation", "description": "Relax on loungers facing the Gulf of Oman." }
        ],
        "stay": "🏨 Stay: The Chedi Muscat 5*",
        "media": {
          "type": "carousel",
          "id": "carousel-safari-day9",
          "slides": [
            { "type": "single", "src": "images/oman/Pool_and_reflecting_water_gardens_202608141639.jpeg", "alt": "Chedi Pool Lounge", "title": "Chedi Reflecting Water Gardens", "caption": "Relaxing sand beds and symmetric reflecting ponds." }
          ]
        }
      },
      {
        "day": "10",
        "title": "Departure from Muscat",
        "tagline": "✈️ Private Airport Chauffeur",
        "vibe_title": "The Vibe",
        "vibe_text": "Your guide transfers you back to Muscat International Airport for your departure flight.",
        "highlights": [
          { "icon": "🛫", "title": "Airport Transfer", "description": "Chauffeur transfer directly to the terminal." }
        ],
        "stay": "✈️ Departure",
        "media": {
          "type": "carousel",
          "id": "carousel-safari-day10",
          "slides": [
            { "type": "single", "src": "images/oman/Landscape_mountains_meeting_turq…_202608141639.jpeg", "alt": "Oman coastline takeoff", "title": "Sultanate Farewell", "caption": "Ascending over Muscat's coastline." }
          ]
        }
      }
    ],
    "booking": {
      "title": "Book Your Oman Safari Escape",
      "description": "Experience premium Omani desert safaris. This 10-day package includes hotels & desert glamping, private 4x4 safari vehicles, expert guides, and 24/7 client care.",
      "bullets": [
        "All Luxury Camps & Hotels Included",
        "Private 4x4 Off-Road Safari Vehicle & Guide Included",
        "Wadi Trekking & Turtle Reserve Entry Included",
        "100% Flexible Dates & Adjustments"
      ]
    },
    "pricing": {
      "base_price": 2950,
      "currency": "$",
      "dates": [
        { "id": "om-saf-nov20", "label": "Nov 20 – Nov 30", "season": "Prime Season", "price_modifier": 0 },
        { "id": "om-saf-jan10", "label": "Jan 10 – Jan 20", "season": "Mild Season", "price_modifier": 100 }
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
      "company_name": "Abbey's Road Destinations",
      "tagline": "Handcrafted Oman & Global Escapes",
      "address": "Shatti Al Qurum • Muscat, Sultanate of Oman",
      "phone": "+45 2622 0288",
      "email": "abbey@abbeysroad.dk",
      "web": "www.abbeysroad.com",
      "contact_image": "images/oman/Red_sand_dunes_in_desert_202608141639.jpeg"
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

        if (autoCollapseTimers.has(card)) {
          clearTimeout(autoCollapseTimers.get(card));
        }

        const timer = setTimeout(() => {
          card.classList.remove('expanded');
          autoCollapseTimers.delete(card);
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
        
        const viewport = document.getElementById('itinerary-viewport');
        if (viewport) {
          viewport.scrollIntoView({ behavior: 'smooth' });
        }
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
