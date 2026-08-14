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
      "background_image": "images/contact_footer.jpg",
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
            { "type": "single", "src": "images/contact_footer.jpg", "alt": "Chedi Muscat Water Gardens", "title": "The Chedi Water Gardens", "caption": "Lush landscape design blending with Arabian minimalist architecture." },
            { "type": "single", "src": "images/oslofjord_sunset.png", "alt": "Chedi Muscat Beachfront", "title": "Private Shoreline Lounge", "caption": "Pristine sandy beach with luxury canopy cabanas." },
            { "type": "single", "src": "images/road_to_al.png", "alt": "Luxury Hotel Lobby", "title": "1001 Nights Lobby Entrance", "caption": "Authentic lanterns and incense welcoming premium guests." },
            { "type": "single", "src": "images/fjord_waterways.png", "alt": "Seaside Pools", "title": "The Serai Pool", "caption": "Temperature-controlled swimming pools overlooking the gulf." }
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
            { "type": "single", "src": "images/uspenski_cathedral.png", "alt": "Sultan Qaboos Grand Mosque", "title": "Grand Mosque Dome", "caption": "Exquisite Islamic hand-carved details and marble pillars." },
            { "type": "single", "src": "images/page_3_img_1_X22.jpg", "alt": "Mosque Chandelier", "title": "Swarovski Chandelier", "caption": "The grand prayer hall's legendary ceiling lighting." },
            { "type": "single", "src": "images/page_1_img_2_X9.jpg", "alt": "Muttrah Souk Markets", "title": "Muttrah Souk Markets", "caption": "Vibrant spices, frankincense burners, and traditional artifacts." },
            { "type": "single", "src": "images/page_2_img_4_X16.jpg", "alt": "Al Alam Palace Gates", "title": "Al Alam Palace Gates", "caption": "Gold and blue pillars of the Sultan's ceremonial palace." }
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
            { "type": "single", "src": "images/road_to_al.png", "alt": "Mountain Pass Ascent", "title": "Al Hajar Mountain Switchbacks", "caption": "Thrilling 4x4 winding roads climbing into the clouds." },
            { "type": "single", "src": "images/naeroyfjord.png", "alt": "Birkat Al Mouz Mud Ruins", "title": "Birkat Al Mouz Mud Ruins", "caption": "Abandoned clay dwellings tucked beneath palm groves." },
            { "type": "single", "src": "images/page_3_img_6_X27.png", "alt": "Alila Jabal Akhdar Cliff", "title": "Alila Jabal Akhdar Cliff Edge", "caption": "Luxury eco-resort constructed from local mountain stone." },
            { "type": "single", "src": "images/page_3_img_4_X25.jpg", "alt": "Resort Horizon View", "title": "Horizon View Balcony", "caption": "Overlooking deep limestone gorges directly from your private suite." }
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
            { "type": "single", "src": "images/fjord_waterways.png", "alt": "Canyon Ravines", "title": "Spectacular Canyon Ravines", "caption": "Limestone canyon walls plunging hundreds of meters below." },
            { "type": "single", "src": "images/page_3_img_5_X26.jpg", "alt": "Mountain Rose Terraces", "title": "Jabal Akhdar Rose Terraces", "caption": "Fragrant rose fields clinging to the steep cliffs." },
            { "type": "single", "src": "images/page_2_img_5_X18.jpg", "alt": "Ancient Village Walkway", "title": "Village Stone Walkway", "caption": "Walking paths connecting traditional Omani mountain communities." },
            { "type": "single", "src": "images/page_2_img_3_X15.jpg", "alt": "Local Rosewater Distillery", "title": "Traditional Clay Stills", "caption": "Clay ovens cooking roses to distill pure rose water." }
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
            { "type": "single", "src": "images/uspenski_cathedral.png", "alt": "Nizwa Fort Tower", "title": "Nizwa Fort Main Tower", "caption": "Oman's largest historic circular defense structure." },
            { "type": "single", "src": "images/page_1_img_3_X10.jpg", "alt": "Fort Ramparts view", "title": "Nizwa Clay Ramparts", "caption": "Mud-brick walls framing Nizwa town palm oases." },
            { "type": "single", "src": "images/page_2_img_2_X14.jpg", "alt": "Traditional Silver Souk", "title": "Silver Handcraft Souk", "caption": "Browsing hand-crafted silver jewelry and traditional Omani daggers." },
            { "type": "single", "src": "images/page_2_img_1_X13.png", "alt": "Clay Pottery Shops", "title": "Bahla Clay Pottery", "caption": "Traditional water vessels on display in Nizwa market." }
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
            { "type": "single", "src": "images/contact_footer.jpg", "alt": "Chedi Long Pool Sunset", "title": "Chedi Long Pool Sunset", "caption": "Arabian lanterns lit alongside the mirror-like long pool." },
            { "type": "single", "src": "images/oslofjord_sunset.png", "alt": "Spa Treatment Rooms", "title": "Spa Alila Treatment", "caption": "Serene spa interiors offering premium organic therapies." },
            { "type": "single", "src": "images/fjord_waterways.png", "alt": "Beachfront Diners", "title": "Seaside Beach Restaurant", "caption": "Fine dining with fresh catches right on the Gulf coast." },
            { "type": "single", "src": "images/road_to_al.png", "alt": "Quiet Gardens", "title": "Symmetrical Courtyards", "caption": "Beautiful fountains and water gardens inside the resort." }
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
            { "type": "single", "src": "images/contact_footer.jpg", "alt": "Muscat Departure", "title": "Muscat International Airport", "caption": "Modern terminal arches and duty-free lounges." }
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
      "cabin_options": [
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
      "contact_image": "images/contact_footer.jpg"
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
      "background_image": "images/baltic_sunset.png",
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
            { "type": "single", "src": "images/contact_footer.jpg", "alt": "Muscat Cliffs View", "title": "Muscat Seaside Heights", "caption": "Overlooking the pristine sand beaches and cliffs of Muscat." },
            { "type": "single", "src": "images/oslofjord_sunset.png", "alt": "Hotel Oceanfront Pool", "title": "Seaside Cliff Pool", "caption": "Unwinding pool overlooking the coastal gulf." }
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
            { "type": "single", "src": "images/fjord_waterways.png", "alt": "Bimmah Sinkhole", "title": "Bimmah Limestone Sinkhole", "caption": "Crystal clear turquoise water tucked inside a limestone crater." },
            { "type": "single", "src": "images/norway_rivers.png", "alt": "Wadi Shab Entrance", "title": "Wadi Shab Gorge", "caption": "Boarding small outriggers to cross the wadi river mouth." },
            { "type": "single", "src": "images/page_3_img_3_X24.jpg", "alt": "Wadi Canyon Path", "title": "Canyon Gorge Trails", "caption": "Walking between vertical towering limestone walls." },
            { "type": "single", "src": "images/page_3_img_2_X23.jpg", "alt": "Hidden Cave Swim", "title": "Hidden Cave Waterfall", "caption": "Swimming through a narrow crack into a dark waterfall cavern." }
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
            { "type": "single", "src": "images/uspenski_cathedral.png", "alt": "Sur Watchtowers", "title": "Al Ayjah Watchtower", "caption": "Historic beacons guarding the entrance to Sur lagoon." },
            { "type": "single", "src": "images/page_2_img_6_X19.png", "alt": "Wooden Dhow Building", "title": "Wooden Dhow Shipyard", "caption": "Handcrafted wooden ship building in Sur." },
            { "type": "single", "src": "images/page_1_img_3_X10.jpg", "alt": "Coastline Cliffs", "title": "Ras Al Jinz Protected Coast", "caption": "Dramatically shaped limestone cliffs meeting the Indian Ocean." },
            { "type": "single", "src": "images/page_2_img_5_X18.jpg", "alt": "Nesting Green Turtle", "title": "Nesting Sea Turtle", "caption": "Spotting wild green turtles laying eggs on the protected beach." }
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
            { "type": "single", "src": "images/baltic_sunset.png", "alt": "Wahiba Sands Desert", "title": "Endless Wahiba Sands", "caption": "Windswept copper-colored sand ridges stretching to the horizon." },
            { "type": "single", "src": "images/page_4_img_1_X31.jpg", "alt": "Desert Nights Glamping Tents", "title": "Desert Nights Luxury Camp", "caption": "5-star canvas structures nestled between high dunes." },
            { "type": "single", "src": "images/page_3_img_5_X26.jpg", "alt": "Dune Sunset Panorama", "title": "Sand Ridge Sunset", "caption": "Golden sunlight bathing the Omani desert." },
            { "type": "single", "src": "images/page_2_img_4_X16.jpg", "alt": "Camel Ride", "title": "Desert Camel Trek", "caption": "Walking alongside camels as the sun descends." }
          ]
        }
      },
      {
        "day": "5",
        "title": "Wadi Bani Khalid Oasis Oasis",
        "tagline": "🌴 Natural Pools & Shade Date Palms",
        "vibe_title": "The Vibe",
        "vibe_text": "Escape the desert heat in Wadi Bani Khalid — a lush oasis of green pools lined with palms hidden deep inside mountain ravines.",
        "highlights": [
          { "icon": "🌴", "title": "Oasis Swimming", "description": "Swim inside refreshing natural pools surrounded by date palms." }
        ],
        "stay": "⛺ Stay: Desert Nights Camp (Luxury Desert Tent)",
        "media": {
          "type": "carousel",
          "id": "carousel-safari-day5",
          "slides": [
            { "type": "single", "src": "images/fjord_waterways.png", "alt": "Wadi Bani Khalid Pool", "title": "Bani Khalid Main Pool", "caption": "Large freshwater basin tucked inside limestone mountains." },
            { "type": "single", "src": "images/page_3_img_4_X25.jpg", "alt": "Date Palm Oasis", "title": "Date Palm Groves", "caption": "Green shade palms alongside natural waterways." },
            { "type": "single", "src": "images/page_2_img_3_X15.jpg", "alt": "Oasis Stream Hike", "title": "Wadi Stream Walk", "caption": "Winding pathways following streams into deep caves." },
            { "type": "single", "src": "images/page_2_img_2_X14.jpg", "alt": "Desert Night Sky", "title": "Bedouin Star Gazing", "caption": "Crystal clear night skies over the desert camp." }
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
            { "type": "single", "src": "images/uspenski_cathedral.png", "alt": "Friday Cattle Auction", "title": "Friday Cattle Souk", "caption": "Local Omani farmers trading livestock in the historic circle." },
            { "type": "single", "src": "images/page_1_img_2_X9.jpg", "alt": "Nizwa Fort Tower", "title": "Nizwa Fort Circular Tower", "caption": "Massive clay watchtower overlooking Nizwa town." },
            { "type": "single", "src": "images/page_1_img_3_X10.jpg", "alt": "Pottery Souk", "title": "Traditional Clay Ware", "caption": "Displays of handmade water vessels and spice pots." },
            { "type": "single", "src": "images/page_2_img_1_X13.png", "alt": "Nizwa Souk Gate", "title": "Nizwa Souk Entrance", "caption": "Historic arches welcoming travelers into the marketplace." }
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
            { "type": "single", "src": "images/road_to_al.png", "alt": "Jebel Shams Gorge", "title": "Wadi Nakhr Grand Canyon", "caption": "Breathtaking 1,000-meter drop-offs into the mountain belly." },
            { "type": "single", "src": "images/naeroyfjord.png", "alt": "Balcony Path Walkway", "title": "Balcony Walk Cliff Trail", "caption": "Narrow mountain paths carved directly into high shale cliffs." },
            { "type": "single", "src": "images/page_3_img_6_X27.png", "alt": "Sab Bani Khamis Village", "title": "Abandoned Cliff Village", "caption": "Ruins of a stone village clinging to canyon ledges." },
            { "type": "single", "src": "images/page_3_img_5_X26.jpg", "alt": "Peak Sunset View", "title": "Peak Sunset Elevation", "caption": "Oman's highest peaks bathed in dramatic twilight colors." }
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
            { "type": "single", "src": "images/uspenski_cathedral.png", "alt": "Misfat Mud Houses", "title": "Clay Village Terraces", "caption": "Historic mudbrick houses constructed on steep mountain rock." },
            { "type": "single", "src": "images/norway_rivers.png", "alt": "Falaj Channels", "title": "Falaj Irrigation Channels", "caption": "Splitting spring water to date palms and orchards." },
            { "type": "single", "src": "images/contact_footer.jpg", "alt": "Chedi Arrival Lobby", "title": "Chedi Muscat Courtyard", "caption": "Elegant luxury return after an offroad safari." }
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
            { "type": "single", "src": "images/contact_footer.jpg", "alt": "Chedi Beach Lounge", "title": "Chedi Shoreline", "caption": "Relaxing sand beds facing calm gulf waters." },
            { "type": "single", "src": "images/oslofjord_sunset.png", "alt": "Pool Terrace Garden", "title": "Lush Garden Courtyards", "caption": "Water features and quiet palms in the luxury resort." }
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
            { "type": "single", "src": "images/contact_footer.jpg", "alt": "Takeoff", "title": "Sultanate Farewell", "caption": "Ascending over Muscat's coastline." }
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
      "cabin_options": [
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
