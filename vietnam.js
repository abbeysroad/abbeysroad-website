document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // EMBEDDED VIETNAM & INDOCHINA ITINERARIES DATA
  // ==========================================================================
  const itineraries = [
    {
      "id": "vietnam_indochina_escape",
      "countries": ["Vietnam", "Cambodia", "Thailand"],
      "meta": {
        "title": "20-Day Luxury Indochina & Thailand Escape | Pandora Travel",
        "description": "Embark on an extraordinary 20-day journey from the historic streets of Hanoi and bays of Ha Long, to the ruins of Angkor Wat and pristine waters of Koh Yao Yai."
      },
      "hero": {
        "title": "20-Day Luxury Indochina & Thailand Escape",
        "description": "A handcrafted multi-country itinerary featuring pristine waters, ancient heritage sites, private cruises, and 5-star premium sanctuaries across Vietnam, Cambodia, and Thailand.",
        "background_image": "images/vietnam/13_Ha_Long_Bay_and_Lan_Ha_Bay_Cruise_Panorama.jpeg",
        "cta_book": "Secure Your Indochina Escape",
        "cta_view": "View Itinerary Details"
      },
      "essentials": [
        { "icon": "⏱️", "title": "Duration", "value": "20 Majestic Days" },
        { "icon": "🗺️", "title": "Route", "value": "Hanoi ➔ Ninh Binh ➔ Ha Long ➔ Hoi An ➔ Saigon ➔ Siem Reap ➔ Bangkok ➔ Koh Yao Yai" },
        { "icon": "✈️", "title": "Travel Style", "value": "Private Chauffeur, Cruises, & Regional Flights" },
        { "icon": "⚡", "title": "Pace", "value": "Curated & Immersive" }
      ],
      "pricing": {
        "currency": "$",
        "base_price": 5850
      },
      "timeline": [
        {
          "day": "1",
          "title": "Arrival in Hanoi",
          "tagline": "🌆 Check-in at the Sofitel Legend Metropole Hanoi",
          "vibe_title": "The Vibe",
          "vibe_text": "Touch down at Noi Bai International Airport. Enjoy Fast Track Service through immigration before a private transfer to the historic heart of Hanoi's French Quarter.",
          "highlights": [
            { "icon": "⚡", "title": "Airport Fast Track", "description": "Greeting at the gate, fast-tracked customs clearance, and baggage collection assistance." },
            { "icon": "🏨", "title": "Legendary Heritage stay", "description": "Settle into the historic Sofitel Legend Metropole Hanoi." }
          ],
          "stay": "🏨 Stay: Sofitel Legend Metropole Hanoi (Grand Premium Room)",
          "media": {
            "type": "carousel",
            "id": "carousel-vn-day1",
            "slides": [
              { "type": "single", "src": "images/vietnam/01_Hanoi_Hoan_Kiem_Lake_Turtle_Tower.jpeg", "alt": "Hanoi Hoan Kiem Lake Turtle Tower", "title": "Hoan Kiem Lake & Turtle Tower", "caption": "The spiritual heart of Hanoi at peaceful morning light." },
              { "type": "single", "src": "images/vietnam/04_Hanoi_Historic_Temple_Gate.jpeg", "alt": "Hanoi Historic Temple Gate", "title": "Historic Temple Gate", "caption": "Traditional architecture tucked within Hanoi's ancient quarters." }
            ]
          }
        },
        {
          "day": "2",
          "title": "Hanoi: Vintage Minsk Motorcycle & Army Jeep Tour",
          "tagline": "🏍️ French Boulevards & Bat Trang Pottery Village",
          "vibe_title": "The Vibe",
          "vibe_text": "Explore Hanoi's narrow zigzagging alleyways on a vintage Minsk motorcycle before heading out to the 1,000-year-old pottery village of Bat Trang in a green army jeep.",
          "highlights": [
            { "icon": "🏍️", "title": "Minsk Motorcycle Tour", "description": "Experience Hanoi's sights, sounds, and local culinary delights with a private driver." },
            { "icon": "🚜", "title": "Army Jeep Excursion", "description": "Journey through scenic countryside orchards to Bat Trang Village." },
            { "icon": "🏰", "title": "Metropole Hidden Bunker", "description": "Walk through the historic rediscovered wartime bunker under the hotel gardens." }
          ],
          "stay": "🏨 Stay: Sofitel Legend Metropole Hanoi (Grand Premium Room)",
          "media": {
            "type": "carousel",
            "id": "carousel-vn-day2",
            "slides": [
              { "type": "single", "src": "images/vietnam/02_Hanoi_StJoseph_Cathedral_and_Motorcycles.jpeg", "alt": "Hanoi St Joseph Cathedral and Motorcycles", "title": "St. Joseph's Cathedral", "caption": "The gothic cathedral facade in the lively heart of Hanoi." },
              { "type": "single", "src": "images/vietnam/03_Hanoi_Vintage_Army_Jeep_Tour.jpeg", "alt": "Hanoi Vintage Army Jeep Tour", "title": "Vintage Army Jeep", "caption": "Appreciating the natural beauty on the way to Bat Trang village." }
            ]
          }
        },
        {
          "day": "3",
          "title": "Hanoi to Ninh Binh",
          "tagline": "⛰️ Countryside Transition & Local Markets",
          "vibe_title": "The Vibe",
          "vibe_text": "Check out from Hanoi and drive south toward the dramatic limestone peaks of Ninh Binh, stopping to visit rural community markets.",
          "highlights": [
            { "icon": "🚙", "title": "Scenic Private Drive", "description": "100 km private transfer south passing agricultural plains." },
            { "icon": "🛍️", "title": "Market stop", "description": "Enjoy tasting local fresh fruits at a bustling roadside market." }
          ],
          "stay": "🏨 Stay: Emeralda Resort Ninh Binh (Superior Room)",
          "media": {
            "type": "carousel",
            "id": "carousel-vn-day3",
            "slides": [
              { "type": "single", "src": "images/vietnam/05_Ninh_Binh_Resort_Pool_and_Limestone_Mountains.jpeg", "alt": "Ninh Binh Resort Pool and Limestone Mountains", "title": "Emeralda Resort Ninh Binh", "caption": "Breathtaking pools surrounded by towering limestone karsts." },
              { "type": "single", "src": "images/vietnam/07_Ninh_Binh_Terraced_Rice_Fields.jpeg", "alt": "Ninh Binh Terraced Rice Fields", "title": "Terraced Valleys", "caption": "Spectacular green and golden agricultural fields." }
            ]
          }
        },
        {
          "day": "4",
          "title": "Ninh Binh: Mua Cave Hike & Tam Coc Boat Cruise",
          "tagline": "🛶 Ngo Dong River Rowing & Hoa Lu Ancient Capital",
          "vibe_title": "The Vibe",
          "vibe_text": "Climb 500 stone steps up Mua Cave for legendary valley panoramas. Tour the historic temples of Hoa Lu capital, followed by a hand-paddled boat ride along the Ngo Dong River.",
          "highlights": [
            { "icon": "🥾", "title": "Ngoa Long Mountain Climb", "description": "Hike to Mua Cave dragon peak for sweeping panoramic views." },
            { "icon": "🏰", "title": "Hoa Lu Citadel", "description": "Discover 10th-century Dynastic temples protected by limestone walls." },
            { "icon": "🛶", "title": "Tam Coc Cruise", "description": "A 90-minute private boat trip passing three natural river caves." }
          ],
          "stay": "🏨 Stay: Emeralda Resort Ninh Binh (Superior Room)",
          "media": {
            "type": "carousel",
            "id": "carousel-vn-day4",
            "slides": [
              { "type": "single", "src": "images/vietnam/10_Tam_Coc_Ngo_Dong_River_and_Rice_Fields.jpeg", "alt": "Tam Coc Ngo Dong River and Rice Fields", "title": "Tam Coc Waterways", "caption": "Gliding on a traditional rowing boat along Ngo Dong river." },
              { "type": "single", "src": "images/vietnam/08_Ninh_Binh_Mua_Cave_Panoramic_View.jpeg", "alt": "Ninh Binh Mua Cave Panoramic View", "title": "Mua Cave Panoramic View", "caption": "Overlooking the golden rice fields and mountains from above." },
              { "type": "single", "src": "images/vietnam/09_Mua_Cave_Ngoa_Long_Mountain_Dragon_Peak.jpeg", "alt": "Mua Cave Ngoa Long Mountain Dragon Peak", "title": "Ngoa Long Dragon Peak", "caption": "The majestic stone dragon overlooking the valley." },
              { "type": "single", "src": "images/vietnam/11_Hoa_Lu_Ancient_Capital_Gateway.jpeg", "alt": "Hoa Lu Ancient Capital Gateway", "title": "Hoa Lu Capital Gateway", "caption": "Ancient stone archways representing early Vietnamese dynasties." }
            ]
          }
        },
        {
          "day": "5",
          "title": "Ninh Binh to Ha Long & Lan Ha Bay Cruise",
          "tagline": "🚢 Luxury Suite Aboard Orchid Premium Cruises",
          "vibe_title": "The Vibe",
          "vibe_text": "Transfer to Tuan Chau marina and board the Orchid Premium Cruise. Savor fusion dining as you cruise past Lan Ha Bay's dramatic karsts, visiting Trung Trang Cave on Cat Ba Island.",
          "highlights": [
            { "icon": "🚢", "title": "Boutique Cruise Embarkation", "description": "Welcome cocktails and luxury check-in to your private Terrace Suite." },
            { "icon": "⛰️", "title": "Trung Trang Cave", "description": "Guided walkthrough of Cat Ba National Park's famous geological formation." },
            { "icon": "🏊", "title": "Tra Bau Swim", "description": "Refresh in quiet, deep emerald green waters." }
          ],
          "stay": "🚢 Stay: Orchid Premium Cruise (Terrace Suite)",
          "media": {
            "type": "carousel",
            "id": "carousel-vn-day5",
            "slides": [
              { "type": "single", "src": "images/vietnam/12_Orchid_Cruise_Sundeck_in_Lan_Ha_Bay.jpeg", "alt": "Orchid Cruise Sundeck in Lan Ha Bay", "title": "Orchid Cruise Sundeck", "caption": "Neoclassical design deck perfect for taking in the bays." },
              { "type": "single", "src": "images/vietnam/14_Orchid_Premium_Cruise_Terrace_Suite.jpeg", "alt": "Orchid Premium Cruise Terrace Suite", "title": "Terrace Suite Luxury", "caption": "Exquisite private room layout looking directly onto the water." }
            ]
          }
        },
        {
          "day": "6",
          "title": "Ha Long to Hanoi - Flight to Da Nang, Hoi An",
          "tagline": "🛶 Kayaking Ao Ech & Travel to Central Vietnam",
          "vibe_title": "The Vibe",
          "vibe_text": "Wake up to sunrise Tai Chi. Kayak Ao Ech before disembarking for Noi Bai Airport. Catch a regional flight to Da Nang, transferring to the lantern-lit streets of Hoi An.",
          "highlights": [
            { "icon": "🧘", "title": "Sundeck Tai Chi", "description": "Early morning wellness class overlooking the misty bay." },
            { "icon": "🛶", "title": "Ao Ech Kayaking", "description": "Self-paddled kayak excursion into hidden channels." },
            { "icon": "✈️", "title": "Hoi An Transfer", "description": "Short evening flight and private car check-in at Anantara." }
          ],
          "stay": "🏨 Stay: Anantara Hoi An (Deluxe Balcony)",
          "media": {
            "type": "carousel",
            "id": "carousel-vn-day6",
            "slides": [
              { "type": "single", "src": "images/vietnam/13_Ha_Long_Bay_and_Lan_Ha_Bay_Cruise_Panorama.jpeg", "alt": "Ha Long Bay and Lan Ha Bay Cruise Panorama", "title": "Misty Lan Ha Bay", "caption": "Panoramic karst monoliths ascending from the calm sea." },
              { "type": "single", "src": "images/vietnam/15_Kayaking_in_Ao_Ech_Lan_Ha_Bay.jpeg", "alt": "Kayaking in Ao Ech Lan Ha Bay", "title": "Ao Ech Kayaking", "caption": "Paddling close to the ancient limestone cliffs." }
            ]
          }
        },
        {
          "day": "7",
          "title": "Hoi An: Modern Gastronomy & Romantic Field Dinner",
          "tagline": "🌾 Culinary Innovations & E-Car Garden Tours",
          "vibe_title": "The Vibe",
          "vibe_text": "Embark on an electric-buggy modern culinary journey across local organic farms. In the evening, enjoy a private, romantic dinner served amidst the tranquil Thanh Dong rice fields.",
          "highlights": [
            { "icon": "🍽️", "title": "Modern Culinary Experience", "description": "Meet local sustainable chefs, fermentation masters, and browse organic galleries." },
            { "icon": "🌿", "title": "Thanh Dong Garden Tour", "description": "Pick fresh herbs and learn about circular, eco-friendly farming." },
            { "icon": "🍷", "title": "Rice Field Dinner", "description": "Handcrafted sunset dinner set in a private clearing under the stars." }
          ],
          "stay": "🏨 Stay: Anantara Hoi An (Deluxe Balcony)",
          "media": {
            "type": "carousel",
            "id": "carousel-vn-day7",
            "slides": [
              { "type": "single", "src": "images/vietnam/16_Hoi_An_Romantic_Dinner_in_Rice_Fields.jpeg", "alt": "Hoi An Romantic Dinner in Rice Fields", "title": "Romantic Rice Field Setting", "caption": "Exquisite private dining surrounded by peaceful farming fields." },
              { "type": "single", "src": "images/vietnam/17_Thanh_Dong_Village_Rice_Field_Walkway.jpeg", "alt": "Thanh Dong Village Rice Field Walkway", "title": "Thanh Dong Garden Walk", "caption": "Lush walkways in Hoi An's premier organic farming village." }
            ]
          }
        },
        {
          "day": "8",
          "title": "Hoi An to Saigon",
          "tagline": "✈️ Flight to Ho Chi Minh City",
          "vibe_title": "The Vibe",
          "vibe_text": "Fly south to Saigon (Ho Chi Minh City). Settle into your luxury suite at the Park Hyatt Saigon, and enjoy free time exploring the historical French-colonial architecture.",
          "highlights": [
            { "icon": "✈️", "title": "Flight to Saigon", "description": "Private transfer to Da Nang Airport for your flight to HCMC." },
            { "icon": "🏨", "title": "Park Hyatt Saigon", "description": "Enjoy the elegant rooms and beautiful gardens of Saigon's finest luxury hotel." }
          ],
          "stay": "🏨 Stay: Park Hyatt Saigon (Park Room)",
          "media": {
            "type": "carousel",
            "id": "carousel-vn-day8",
            "slides": [
              { "type": "single", "src": "images/vietnam/06_Ninh_Binh_Green_Rice_Fields_Aerial_View.jpeg", "alt": "Saigon Arrival", "title": "Saigon Arrival", "caption": "Touchdown in Southern Vietnam's commercial capital." }
            ]
          }
        },
        {
          "day": "9",
          "title": "Saigon: Cu Chi Tunnels & Artisanal Gin Distillery",
          "tagline": "🤿 Freedom Fighter Tunnels & Lady Trieu Gin Tasting",
          "vibe_title": "The Vibe",
          "vibe_text": "Explore the history of the Cu Chi Tunnels underground systems. Afterward, visit the Lady Trieu Gin Distillery for a private masterclass and curated tasting flight.",
          "highlights": [
            { "icon": "⚔️", "title": "Cu Chi Tunnels Tour", "description": "Walk through underground rooms, smoke outlets, and battle craters." },
            { "icon": "🍸", "title": "Lady Trieu Distillery", "description": "Meet the Master Distiller and enjoy a custom gin flight." }
          ],
          "stay": "🏨 Stay: Park Hyatt Saigon (Park Room)",
          "media": {
            "type": "carousel",
            "id": "carousel-vn-day9",
            "slides": [
              { "type": "single", "src": "images/vietnam/23_Saigon_Cu _Chi_Tunnels.jpeg", "alt": "Saigon Cu Chi Tunnels", "title": "Cu Chi Historical Site", "caption": "The famous network of underground passageways used during conflict." }
            ]
          }
        },
        {
          "day": "10",
          "title": "Saigon: Art Experience with Z-Gong & Sommelier Dinner",
          "tagline": "🎨 Private Gallery Walks & Wine-Paired Feast",
          "vibe_title": "The Vibe",
          "vibe_text": "Discover Saigon's contemporary art scene guided by local art host Angeline Gong (Z-Gong). Celebrate the evening with a private chef's tasting menu paired by a professional sommelier.",
          "highlights": [
            { "icon": "🎨", "title": "Art Walk with Z-Gong", "description": "Exclusive access to two private galleries and discussions with curators." },
            { "icon": "🍷", "title": "Sommelier Pairing Dinner", "description": "Modern Vietnamese gastronomy and wine pairings in an intimate, hidden setting." }
          ],
          "stay": "🏨 Stay: Park Hyatt Saigon (Park Room)",
          "media": {
            "type": "carousel",
            "id": "carousel-vn-day10",
            "slides": [
              { "type": "single", "src": "images/vietnam/18_Saigon_Contemporary_Art_Gallery.jpeg", "alt": "Saigon Contemporary Art Gallery", "title": "Art Gallery Spaces", "caption": "Discovering modern paintings and sculpture works." },
              { "type": "single", "src": "images/vietnam/19_Saigon_Art_Host_Angeline_Gong_Z-Gong.jpeg", "alt": "Saigon Art Host Angeline Gong Z Gong", "title": "Art Host Angeline Gong", "caption": "Experiencing Saigon's culture with a veteran art insider." }
            ]
          }
        },
        {
          "day": "11",
          "title": "Saigon to Siem Reap, Cambodia",
          "tagline": "✈️ Regional Flight to Cambodia",
          "vibe_title": "The Vibe",
          "vibe_text": "Fly to Siem Reap and check in to your private villa at Zannier Phum Baitang, a luxury eco-sanctuary set amidst organic rice fields.",
          "highlights": [
            { "icon": "✈️", "title": "Siem Reap Flight", "description": "Short regional flight from Saigon to Cambodia." },
            { "icon": "🏨", "title": "Phum Baitang Sanctuary", "description": "A stunning luxury resort with stilted wooden villas." }
          ],
          "stay": "🏨 Stay: Zannier Phum Baitang (Terrace Villa)",
          "media": {
            "type": "carousel",
            "id": "carousel-vn-day11",
            "slides": [
              { "type": "single", "src": "images/vietnam/25_Cambodian_Rice_Field_Romantic_Dinner.jpeg", "alt": "Siem Reap", "title": "Siem Reap Arrival", "caption": "Entering the ancient gateway of Cambodia." }
            ]
          }
        },
        {
          "day": "12",
          "title": "Siem Reap: Angkor Thom, Ta Prohm & Sunset Gondola",
          "tagline": "🛶 Tonle Sap Champagne Cruise & Jungle Temples",
          "vibe_title": "The Vibe",
          "vibe_text": "Explore Angkor Thom's smiling stone faces and the jungle-strangled temple of Ta Prohm. In the afternoon, board a private gondola on Tonle Sap for sunset champagne.",
          "highlights": [
            { "icon": "🗿", "title": "Bayon Temple & South Gate", "description": "Admire the giant serene faces carved into stone towers." },
            { "icon": "🌳", "title": "Ta Prohm Temple", "description": "Walk among massive silk-cotton tree roots wrapping temple walls." },
            { "icon": "🥂", "title": "Tonle Sap Sunset Cruise", "description": "Champagne and delicious canapés on a private lake gondola." }
          ],
          "stay": "🏨 Stay: Zannier Phum Baitang (Terrace Villa)",
          "media": {
            "type": "carousel",
            "id": "carousel-vn-day12",
            "slides": [
              { "type": "single", "src": "images/vietnam/24_Ta_Prohm_Jungle_Temple_Siem_Reap.jpeg", "alt": "Ta Prohm Jungle Temple Siem Reap", "title": "Ta Prohm Jungle Temple", "caption": "The incredible integration of nature and historical architecture." },
              { "type": "single", "src": "images/vietnam/21_Tonle_Sap_Sunset_Cruise.jpeg", "alt": "Tonle Sap Sunset Cruise", "title": "Tonle Sap Sunset", "caption": "Floating past local lakeside communities as the sun goes down." },
              { "type": "single", "src": "images/vietnam/22_Siem_Reap_Sunset_Gondola_Cruise.jpeg", "alt": "Siem Reap Sunset Gondola Cruise", "title": "Angkor Gondola Ride", "caption": "Cruising down historic moat waterways with cocktails." }
            ]
          }
        },
        {
          "day": "13",
          "title": "Siem Reap: Angkor Wat & Cambodian Field Dinner",
          "tagline": "✨ UNESCO Masterpieces & Starlit Rice Fields",
          "vibe_title": "The Vibe",
          "vibe_text": "Explore Angkor Wat, the largest religious monument in the world. Catch the sunset from Bakheng Hill, followed by a private romantic dinner set in Cambodian rice fields.",
          "highlights": [
            { "icon": "🕉️", "title": "Angkor Wat Tour", "description": "Discover Hindu relief carvings and grand stone architecture." },
            { "icon": "🌅", "title": "Bakheng Hill Sunset", "description": "Enjoy panoramas of Angkor Wat and surrounding plains." },
            { "icon": "🥩", "title": "Private Garden Feast", "description": "Gourmet Cambodian dinner served by a private chef under the stars." }
          ],
          "stay": "🏨 Stay: Zannier Phum Baitang (Terrace Villa)",
          "media": {
            "type": "carousel",
            "id": "carousel-vn-day13",
            "slides": [
              { "type": "single", "src": "images/vietnam/20_Angkor_Wat_Panorama_Siem_Reap.jpeg", "alt": "Angkor Wat Panorama Siem Reap", "title": "Angkor Wat Monument", "caption": "The iconic towers reflecting across water ponds." },
              { "type": "single", "src": "images/vietnam/25_Cambodian_Rice_Field_Romantic_Dinner.jpeg", "alt": "Cambodian Rice Field Romantic Dinner", "title": "Cambodian Field Dining", "caption": "A private, luxurious table setup overlooking green rice crops." }
            ]
          }
        },
        {
          "day": "14",
          "title": "Siem Reap to Bangkok, Thailand",
          "tagline": "✈️ Travel to Bangkok Metropolis",
          "vibe_title": "The Vibe",
          "vibe_text": "Board your flight from Siem Reap to Bangkok. Check in to the riverside sanctuary of Anantara Riverside Bangkok Resort, and enjoy cocktails by the Chao Phraya River.",
          "highlights": [
            { "icon": "✈️", "title": "Flight to Bangkok", "description": "Private transfer to the airport and flight to Thailand." },
            { "icon": "🏨", "title": "Riverside Oasis stay", "description": "Enjoy the tropical gardens and luxury pools at Anantara Riverside." }
          ],
          "stay": "🏨 Stay: Anantara Riverside Bangkok Resort (Deluxe Riverview Room)",
          "media": {
            "type": "carousel",
            "id": "carousel-vn-day14",
            "slides": [
              { "type": "single", "src": "images/vietnam/26_Bangkok_Grand_Palace_and_Temple_Skyline.jpeg", "alt": "Bangkok", "title": "Bangkok Arrival", "caption": "Stepping into Thailand's historic royal capital." }
            ]
          }
        },
        {
          "day": "15",
          "title": "Bangkok: Palace, Temples & Canals",
          "tagline": "🛺 Chinatown Tuk Tuk Tour & Chao Phraya Long-Tail boat",
          "vibe_title": "The Vibe",
          "vibe_text": "Tour the Grand Palace, Wat Pho's Reclining Buddha, and explore Chinatown's maze of alleys by Tuk Tuk. Later, cruise local canals by long-tail boat, stopping at Wat Arun.",
          "highlights": [
            { "icon": "🏰", "title": "Grand Royal Palace", "description": "See the spectacular Emerald Buddha and golden chedis." },
            { "icon": "🛺", "title": "Chinatown & Talat Noi", "description": "Exhilarating Tuk Tuk ride through historic alleys and retro cafes." },
            { "icon": "⛵", "title": "Long-tail Canal Cruise", "description": "Navigate the inland waterways of the river, visiting Wat Arun." }
          ],
          "stay": "🏨 Stay: Anantara Riverside Bangkok Resort (Deluxe Riverview Room)",
          "media": {
            "type": "carousel",
            "id": "carousel-vn-day15",
            "slides": [
              { "type": "single", "src": "images/vietnam/26_Bangkok_Grand_Palace_and_Temple_Skyline.jpeg", "alt": "Bangkok Grand Palace and Temple Skyline", "title": "Grand Palace Complex", "caption": "The majestic spires of Wat Phra Kaew." },
              { "type": "single", "src": "images/vietnam/27_Wat_Pho_Temple_Complex_Bangkok.jpeg", "alt": "Wat Pho Temple Complex Bangkok", "title": "Wat Pho Temple grounds", "caption": "Golden structures and intricate chedis." },
              { "type": "single", "src": "images/vietnam/28_Wat_Arun_Temple_of_Dawn_Bangkok.jpeg", "alt": "Wat Arun Temple of Dawn Bangkok", "title": "Wat Arun", "caption": "The iconic Temple of Dawn rising above Chao Phraya River." }
            ]
          }
        },
        {
          "day": "16",
          "title": "Free day in Bangkok",
          "tagline": "🛍️ Shopping & Riverfront Relaxation",
          "vibe_title": "The Vibe",
          "vibe_text": "Spend your day exploring Bangkok at your own leisure. Indulge in luxury shopping malls, historical street food stalls, or relax by the resort's pool gardens.",
          "highlights": [
            { "icon": "🌴", "title": "Resort Leisure", "description": "Enjoy spa treatments or read a book by the pool." }
          ],
          "stay": "🏨 Stay: Anantara Riverside Bangkok Resort (Deluxe Riverview Room)",
          "media": {
            "type": "carousel",
            "id": "carousel-vn-day16",
            "slides": [
              { "type": "single", "src": "images/vietnam/28_Wat_Arun_Temple_of_Dawn_Bangkok.jpeg", "alt": "Bangkok Riverfront", "title": "Bangkok Riverfront", "caption": "The scenic vistas along the Chao Phraya river." }
            ]
          }
        },
        {
          "day": "17",
          "title": "Bangkok to Phuket - Speedboat to Koh Yao Yai",
          "tagline": "🏝️ Luxury Lagoon Pool Villa at Anantara Resort",
          "vibe_title": "The Vibe",
          "vibe_text": "Fly south to Phuket, transferring to Laem Sai pier. Board a speedboat to Koh Yao Yai and check in to your private beachfront pool villa.",
          "highlights": [
            { "icon": "✈️", "title": "Flight to Phuket", "description": "Private transfer for domestic flight to Southern Thailand." },
            { "icon": "🛥️", "title": "Speedboat Transfer", "description": "Glide across Phang Nga Bay directly to the island resort." },
            { "icon": "🏊", "title": "Lagoon Pool Villa", "description": "Enjoy your private plunge pool and direct lagoon beach access." }
          ],
          "stay": "🏨 Stay: Anantara Koh Yao Yai Resort and Villas (Lagoon Pool Villa)",
          "media": {
            "type": "carousel",
            "id": "carousel-vn-day17",
            "slides": [
              { "type": "single", "src": "images/vietnam/30_Koh_Yao_Yai_Island_Aerial_View.jpeg", "alt": "Koh Yao Yai Island Aerial View", "title": "Koh Yao Yai Island", "caption": "Misty islands and turquoise bays from the air." },
              { "type": "single", "src": "images/vietnam/31_Anantara_Koh_Yao_Yai_Lagoon_Pool_Villa.jpeg", "alt": "Anantara Koh Yao Yai Lagoon Pool Villa", "title": "Anantara Pool Villa", "caption": "Luxurious villas situated directly on the lagoon waters." }
            ]
          }
        },
        {
          "day": "18-19",
          "title": "Koh Yao Yai: Free Time & Island Life",
          "tagline": "☀️ Phang Nga Bay Sailing & Beach Relaxation",
          "vibe_title": "The Vibe",
          "vibe_text": "Enjoy two full days of leisure. Explore local marine parks, charter wooden longtail boats, snorkel with tropical fish, or enjoy beachfront massages.",
          "highlights": [
            { "icon": "🏝️", "title": "Phang Nga Island Tours", "description": "Option to charter boats to James Bond Island or Hong Islands." },
            { "icon": "💆", "title": "Beachfront Spa", "description": "Traditional Thai massage overlooking the Andaman Sea." }
          ],
          "stay": "🏨 Stay: Anantara Koh Yao Yai Resort and Villas (Lagoon Pool Villa)",
          "media": {
            "type": "carousel",
            "id": "carousel-vn-day18",
            "slides": [
              { "type": "single", "src": "images/vietnam/29_Thailand_Island_Sunset_Boat.jpeg", "alt": "Thailand Island Sunset Boat", "title": "Andaman Sunset Sail", "caption": "Cruising on a traditional boat as the sun sets over Phang Nga bay." }
            ]
          }
        },
        {
          "day": "20",
          "title": "Koh Yao Yai to Phuket - Departure",
          "tagline": "✈️ Speedboat to Phuket & Flight Home",
          "vibe_title": "The Vibe",
          "vibe_text": "Check out from the resort and transfer by speedboat back to Phuket Marina, followed by a private car ride to Phuket International Airport for your departure flight.",
          "highlights": [
            { "icon": "🛥️", "title": "Speedboat Disembarkation", "description": "Final cruise across Phang Nga Bay back to Phuket mainland." },
            { "icon": "✈️", "title": "Phuket Airport Departure", "description": "Private transfer to airport for international check-in." }
          ],
          "stay": "✈️ Departure (End of Services)",
          "media": {
            "type": "carousel",
            "id": "carousel-vn-day20",
            "slides": [
              { "type": "single", "src": "images/vietnam/30_Koh_Yao_Yai_Island_Aerial_View.jpeg", "alt": "Departure view", "title": "Departure", "caption": "Taking home unforgettable memories of Southeast Asia." }
            ]
          }
        }
      ],
      "booking": {
        "title": "Secure Your Handcrafted Indochina Escape",
        "description": "Book your bespoke multi-country luxury honeymoon adventure. Package includes private speedboat transfers, regional flights, 5-star heritage hotels, romantic rice field dinners, and 24/7 client support.",
        "bullets": [
          "All 5-Star Premium Resorts & Luxury Cruise Suites Included",
          "All Regional Flights & Fast Track Airport Services Included",
          "24/7 Local Ground Handling & Certified English Guides",
          "100% Tailor-made & Flexible Departure Dates"
        ]
      }
    },
    {
      "id": "golden_triangle_journey",
      "countries": ["Thailand", "Laos"],
      "meta": {
        "title": "14-Day Golden Triangle Journey | Pandora Travel",
        "description": "Premium Northern Thailand, the Golden Triangle, a Mekong slow-journey, and Northern Laos. Explore Chiang Mai, Chiang Rai, Pakbeng, Luang Prabang, Vang Vieng, and Vientiane."
      },
      "hero": {
        "title": "14-Day Golden Triangle Journey",
        "description": "Premium Northern Thailand, the Golden Triangle, a Mekong slow-journey and Northern Laos. Experience Lanna culture, riverside temples, and scenic river cruises.",
        "background_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Chiang_Saen%2C_Golden_Triangle%2C_Mekong_River%2C_Thailand.jpg/1280px-Chiang_Saen%2C_Golden_Triangle%2C_Mekong_River%2C_Thailand.jpg",
        "cta_book": "Secure Your Golden Triangle Journey",
        "cta_view": "View Itinerary Details"
      },
      "essentials": [
        { "icon": "⏱️", "title": "Duration", "value": "14 Epic Days" },
        { "icon": "🗺️", "title": "Route", "value": "Chiang Mai ➔ Chiang Rai ➔ Golden Triangle ➔ Mekong River / Pakbeng ➔ Luang Prabang ➔ Vang Vieng ➔ Vientiane" },
        { "icon": "⛵", "title": "Travel Style", "value": "Private Transfers, Mekong Slow Boat, Scenic Drives" },
        { "icon": "⚡", "title": "Pace", "value": "Immersive & Relaxed" }
      ],
      "pricing": {
        "currency": "$",
        "base_price": 3850
      },
      "timeline": [
        {
          "day": "1-2",
          "title": "Chiang Mai",
          "tagline": "🛕 Lanna Temples & Sunset at Doi Suthep",
          "vibe_title": "The Vibe",
          "vibe_text": "Touch down in Chiang Mai. Enjoy private transfer to your luxury hotel and explore the ancient Old City temples before catching a spectacular sunset over the mountains at Doi Suthep.",
          "highlights": [
            { "icon": "🚗", "title": "Airport Transfer", "description": "Private airport transfer and premium hotel check-in." },
            { "icon": "🛕", "title": "Old City Temples", "description": "Visit Wat Phra Singh and the historical quarters of Chiang Mai." },
            { "icon": "🌅", "title": "Doi Suthep Sunset", "description": "Witness golden Lanna details and panoramas from Wat Phra That Doi Suthep." }
          ],
          "stay": "🏨 Stay: Premium Chiang Mai Resort",
          "media": {
            "type": "carousel",
            "id": "carousel-gt-day1",
            "slides": [
              { "type": "single", "src": "images/vietnam/day1-2_chiangmai_1.jpeg", "alt": "Chiang Mai", "title": "Chiang Mai Old City", "caption": "Experience historical Lanna culture and golden temples in Northern Thailand." },
              { "type": "single", "src": "images/vietnam/day1-2_chiangmai_2.jpeg", "alt": "Wat Phra That Doi Suthep", "title": "Doi Suthep Sunrise", "caption": "Admire mountain vistas and Buddhist relics from Doi Suthep." },
              { "type": "single", "src": "images/vietnam/day1-2_chiangmai_3.jpeg", "alt": "Lanna Food Tour", "title": "Lanna Gastronomy", "caption": "Savor traditional Northern Thai cuisine and market delicacies." }
            ]
          }
        },
        {
          "day": "3-4",
          "title": "Chiang Rai",
          "tagline": "🎨 White & Blue Temples of the North",
          "vibe_title": "The Vibe",
          "vibe_text": "Travel north to Chiang Rai. Explore the modern architectural marvels of the White Temple (Wat Rong Khun) and the Blue Temple (Wat Rong Suea Ten), followed by tea plantation walks.",
          "highlights": [
            { "icon": "🚙", "title": "Scenic Transfer", "description": "Private scenic transfer from Chiang Mai through Northern hills." },
            { "icon": "🏛️", "title": "Wat Rong Khun", "description": "Marvel at the highly detailed white exterior designed by Chalermchai Kositpipat." },
            { "icon": "🌀", "title": "Wat Rong Suea Ten", "description": "Admire the deep blue sculptural detail and paintings." }
          ],
          "stay": "🏨 Stay: Luxury Riverside Resort Chiang Rai",
          "media": {
            "type": "carousel",
            "id": "carousel-gt-day3",
            "slides": [
              { "type": "single", "src": "images/vietnam/days3-4_chiang_rai_1.jpeg", "alt": "Wat Rong Khun", "title": "Wat Rong Khun", "caption": "The modern artistic White Temple in Chiang Rai." },
              { "type": "single", "src": "images/vietnam/days3-4_chiang_rai_2.jpeg", "alt": "Wat Rong Suea Ten", "title": "Wat Rong Suea Ten", "caption": "Gaze at the vibrant blue designs of the Blue Temple." },
              { "type": "single", "src": "images/vietnam/days3-4_chiang_rai_3.jpeg", "alt": "Tea Plantations", "title": "Tea Plantation Walks", "caption": "Scenic green hills and tea harvesting in the North." }
            ]
          }
        },
        {
          "day": "5-6",
          "title": "Golden Triangle",
          "tagline": "⛵ The Mekong Confluence where Three Nations Meet",
          "vibe_title": "The Vibe",
          "vibe_text": "Explore the historic ruins of Chiang Saen ancient city and board a private long-tail boat on the Mekong River. Visit the Hall of Opium to understand the region's complex history.",
          "highlights": [
            { "icon": "⛵", "title": "Mekong Boat ride", "description": "Cruise the waters dividing Thailand, Laos, and Myanmar." },
            { "icon": "🏛️", "title": "Hall of Opium", "description": "Immersive exhibition detailing the historical opium trade." },
            { "icon": "🧘", "title": "Resort Day", "description": "Enjoy a slow luxury resort day with spa therapies and scenic views." }
          ],
          "stay": "🏨 Stay: Golden Triangle Luxury Resort",
          "media": {
            "type": "carousel",
            "id": "carousel-gt-day5",
            "slides": [
              { "type": "single", "src": "images/vietnam/days5-6_thegoldentriangle_1.jpeg", "alt": "Golden Triangle Viewpoint", "title": "Golden Triangle View", "caption": "The scenic confluence where Thailand, Laos, and Myanmar meet." },
              { "type": "single", "src": "images/vietnam/days5-6_thegoldentriangle_2.jpeg", "alt": "Mekong River Cruise", "title": "Mekong River Boat", "caption": "Cruise the waters dividing three neighboring nations." },
              { "type": "single", "src": "images/vietnam/days5-6_thegoldentriangle_3.jpeg", "alt": "Chiang Saen Ruins", "title": "Chiang Saen Ancient Ruins", "caption": "Historic brick stupas along the banks of the Mekong." }
            ]
          }
        },
        {
          "day": "7-8",
          "title": "Mekong River / Pakbeng",
          "tagline": "🚢 Slow Boat Journey Downstream through Laos",
          "vibe_title": "The Vibe",
          "vibe_text": "Cross the border into Laos at Huay Xai. Board your comfortable Mekong slow boat, passing rural riverside villages before overnighting in the peaceful transit outpost of Pakbeng.",
          "highlights": [
            { "icon": "🛂", "title": "Laos Border Crossing", "description": "Cross the Friendship Bridge into Huay Xai, Laos." },
            { "icon": "🚢", "title": "Mekong Slow Boat", "description": "Settle into custom cushioned seats for a panoramic cruise down the Mekong." },
            { "icon": "🛕", "title": "Pak Ou Caves", "description": "Stop downstream near Luang Prabang to see thousands of Buddha statues." }
          ],
          "stay": "🏨 Stay: Pakbeng Sanctuary Lodge",
          "media": {
            "type": "carousel",
            "id": "carousel-gt-day7",
            "slides": [
              { "type": "single", "src": "images/vietnam/day7_goldentriangle_1.jpeg", "alt": "Mekong Crossing", "title": "Crossing the Mekong", "caption": "Cross the border from Chiang Khong into Huay Xai." },
              { "type": "single", "src": "images/vietnam/day7_goldentriangle_2.jpeg", "alt": "Slow Boat Dock", "title": "Huay Xai Pier", "caption": "Board your private or comfortable Mekong slow boat." },
              { "type": "single", "src": "images/vietnam/day7_goldentriangle_3.jpeg", "alt": "Rural Laos Villages", "title": "Scenic Riverside Life", "caption": "Watch tranquil villages along the Mekong hillsides." }
            ]
          }
        },
        {
          "day": "9-11",
          "title": "Luang Prabang",
          "tagline": "🧘 UNESCO Heritage Architecture & Kuang Si Cascades",
          "vibe_title": "The Vibe",
          "vibe_text": "Immerse yourself in Luang Prabang's tranquil old town. Tour historical French-Lao fusion architecture, hike Mount Phousi, and excursion to the spectacular multi-tiered turquoise Kuang Si Falls.",
          "highlights": [
            { "icon": "🚶", "title": "UNESCO Walking Tour", "description": "See sweeping rooflines of Wat Xieng Thong and the Royal Palace Museum." },
            { "icon": "🌊", "title": "Kuang Si Falls", "description": "Private excursion to swim in the cool turquoise forest pools." },
            { "icon": "🌇", "title": "Mount Phousi Sunset", "description": "Climb Mount Phousi for panoramas over the Mekong and Nam Khan rivers." }
          ],
          "stay": "🏨 Stay: Premium Luang Prabang Boutique Hotel",
          "media": {
            "type": "carousel",
            "id": "carousel-gt-day9",
            "slides": [
              { "type": "single", "src": "images/vietnam/days9-11_luangprabang_1.jpeg", "alt": "Wat Xieng Thong", "title": "Wat Xieng Thong", "caption": "The elegant signature temple of Luang Prabang." },
              { "type": "single", "src": "images/vietnam/days9-11_luangprabang_2.jpeg", "alt": "Alms-Giving Ceremony", "title": "Tak Bat Alms-Giving", "caption": "Witness saffron-robed monks collecting morning alms." },
              { "type": "single", "src": "images/vietnam/days9-11_luangprabang_3.jpeg", "alt": "Kuang Si Falls", "title": "Kuang Si Falls Cascades", "caption": "Cool turquoise water pools in the lush green jungle." }
            ]
          }
        },
        {
          "day": "12",
          "title": "Vang Vieng",
          "tagline": "⛰️ Majestic Limestone Karsts & Nam Song River Views",
          "vibe_title": "The Vibe",
          "vibe_text": "Journey south through breathtaking mountain passes. Relax in a premium riverside resort in Vang Vieng, taking in the dramatic karst peaks at golden hour sunset.",
          "highlights": [
            { "icon": "⛰️", "title": "Limestone Karst Landscapes", "description": "Pass spectacular jagged vertical cliffs lining the valley." },
            { "icon": "🍹", "title": "Riverside Sunset", "description": "Watch hot air balloons drift over the karsts at sunset." }
          ],
          "stay": "🏨 Stay: Riverside Resort Vang Vieng",
          "media": {
            "type": "carousel",
            "id": "carousel-gt-day12",
            "slides": [
              { "type": "single", "src": "images/vietnam/day12_luangprabang_1.jpeg", "alt": "Colonial Architecture", "title": "Colonial Architecture", "caption": "Dine in historic restored villas and cafes." },
              { "type": "single", "src": "images/vietnam/day12_luangprabang_2.jpeg", "alt": "Royal Palace", "title": "Royal Palace Museum", "caption": "Wander the beautiful botanical gardens and royal chambers." },
              { "type": "single", "src": "images/vietnam/day12_luangprabang_3.jpeg", "alt": "Sunset Mekong Sail", "title": "Sunset Mekong Sail", "caption": "Enjoy cold drinks as the sun slips behind the mountains." }
            ]
          }
        },
        {
          "day": "13",
          "title": "Vientiane",
          "tagline": "🕌 Landmark Golden Stupas & Mekong Promenades",
          "vibe_title": "The Vibe",
          "vibe_text": "Drive to Laos' quiet capital city, Vientiane. Tour the imposing golden spires of Pha That Luang and Patuxai monument before enjoying a farewell Lao dinner on the riverside.",
          "highlights": [
            { "icon": "🕌", "title": "Pha That Luang", "description": "The national symbol of Laos, a massive gold-covered Buddhist stupa." },
            { "icon": "🏛️", "title": "Patuxai Victory Gate", "description": "Climb Vientiane's archway for views over the city's tree-lined avenues." },
            { "icon": "🍽️", "title": "Farewell Dinner", "description": "Traditional Lao gastronomy overlooking the Mekong." }
          ],
          "stay": "🏨 Stay: Luxury Boutique Hotel Vientiane",
          "media": {
            "type": "carousel",
            "id": "carousel-gt-day13",
            "slides": [
              { "type": "single", "src": "images/vietnam/day13_vangvieng_1.jpeg", "alt": "Vang Vieng Karst Peaks", "title": "Vang Vieng Karst Peaks", "caption": "Spectacular vertical limestone hills reflecting in the river." },
              { "type": "single", "src": "images/vietnam/day13_vangvieng_2.jpeg", "alt": "Nam Song River", "title": "Nam Song River & Lagoons", "caption": "Dive into refreshing hidden limestone spring lagoons." },
              { "type": "single", "src": "images/vietnam/day13_vangvieng_3.jpeg", "alt": "Tham Chang Cave", "title": "Tham Chang Cave", "caption": "Explore hollowed karst interiors containing sacred shrines." }
            ]
          }
        },
        {
          "day": "14",
          "title": "Departure",
          "tagline": "✈️ Private Airport Transfer",
          "vibe_title": "The Vibe",
          "vibe_text": "Enjoy a relaxed breakfast and free morning in Vientiane. Your private driver will transfer you to Vientiane International Airport for your departure flight.",
          "highlights": [
            { "icon": "🍳", "title": "Relaxed Breakfast", "description": "Final morning breakfast at the hotel." },
            { "icon": "✈️", "title": "Airport Transfer", "description": "Private transfer to Vientiane Airport (VTE) for your departure." }
          ],
          "stay": "✈️ Departure (End of Services)",
          "media": {
            "type": "carousel",
            "id": "carousel-gt-day14",
            "slides": [
              { "type": "single", "src": "images/vietnam/day12_luangprabang_3.jpeg", "alt": "Departure", "title": "Departure", "caption": "Taking home unforgettable memories of the Golden Triangle." }
            ]
          }
        }
      ],
      "booking": {
        "title": "Secure Your Handcrafted Golden Triangle Journey",
        "description": "Book your premium Northern Thailand and Mekong slow boat adventure. Package includes private transfers, custom slow boat seats, 5-star heritage hotels, guided city walks, and 24/7 client support.",
        "bullets": [
          "All 5-Star Boutique Lodges & Pakbeng overnight stay included",
          "Private Mekong slow boat transit, transfers & border coordination",
          "Certified English guides & private wats/monument entry fees",
          "100% custom dates & options available"
        ]
      }
    }
  ];

  // Global state
  let activeItineraryId = null;

  // ==========================================================================
  // LENIS SMOOTH MOMENTUM SCROLL
  // ==========================================================================
  let lenis;
  if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  // ==========================================================================
  // THREE.JS WEBGL PARTICLE BACKGROUND
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
      const regionName = chapter.getAttribute('data-region-name') || 'INDOCHINA';
      const regionCode = chapter.getAttribute('data-region') || 'north-vietnam';
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

      // Exaggerated smooth zoom & vertical parallax scroll effect
      if (bgPhoto) {
        gsap.fromTo(bgPhoto, 
          { scale: 1.0, yPercent: -4 }, 
          {
            scale: 1.40,
            yPercent: 12,
            ease: 'none',
            scrollTrigger: {
              trigger: chapter,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.5
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

      if (code === 'north-vietnam' || code === 'central-vietnam' || code === 'south-vietnam') {
        document.getElementById('region-vietnam')?.classList.add('active-region');
      } else if (code === 'cambodia') {
        document.getElementById('region-cambodia')?.classList.add('active-region');
      } else if (code === 'thailand') {
        document.getElementById('region-thailand')?.classList.add('active-region');
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

        setTimeout(() => {
          if (card.classList.contains('expanded')) {
            card.classList.remove('expanded');
            if (chapter) {
              const bgPhoto = chapter.querySelector('.bg-photo');
              if (bgPhoto) {
                bgPhoto.classList.add('pan-active');
              }
            }
          }
        }, 8000);
      }
    }
  }

  // ==========================================================================
  // MOBILE INTERACTIVE TEXT EXPANSION FOLDERS
  // ==========================================================================
  function initMobileCardFold() {
    const toggleBtns = document.querySelectorAll('.card-fold-toggle-btn');
    toggleBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const card = btn.closest('.dest-info-card');
        const chapter = btn.closest('.film-chapter');
        if (card) {
          card.classList.toggle('expanded');
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
                ${day.media ? `
                <div class="day-carousel" id="${day.media.id}">
                  <div class="carousel-track">
                    ${day.media.slides.map((s, idx) => `
                      <div class="carousel-slide ${idx === 0 ? 'active' : ''}">
                        <img src="${s.src}" alt="${s.alt}">
                        <div class="carousel-caption">
                          <h4>${s.title}</h4>
                          <p>${s.caption}</p>
                          ${s.credit ? `<span class="photo-credit" style="display: block; font-size: 0.62rem; opacity: 0.65; margin-top: 5px; color: #ccc;">${s.credit}</span>` : ''}
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

  // B2B Contact Form submission
  const form = document.getElementById('b2b-contact-form');
  const successMsg = document.getElementById('form-success-msg');
  if (form && successMsg) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      successMsg.style.display = 'block';
      form.reset();
      setTimeout(() => {
        successMsg.style.display = 'none';
      }, 6000);
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
