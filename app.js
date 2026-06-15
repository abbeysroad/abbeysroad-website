document.addEventListener('DOMContentLoaded', () => {

  // Embedded bundled itineraries data
  const itineraries = [
  {
    "id": "scandinavia",
    "countries": [
      "Sweden",
      "Norway",
      "Denmark"
    ],
    "meta": {
      "title": "9-Day Nordic Summer Escape | NordisTravel",
      "description": "Embark on an extraordinary 9-day summer journey through Sweden, Norway, and Denmark. Discover Stockholm, Oslo, Copenhagen, the Flåm Railway, and majestic fjords on a premium, curated Scandinavian vacation."
    },
    "hero": {
      "subtitle": "Fjords, Castles & Capitals:",
      "title": "The Ultimate 9-Day Nordic Escape",
      "description": "Discover the magic of Sweden, Norway, and Denmark on a premium, curated journey through Scandinavia’s most iconic landscapes and vibrant historic capitals.",
      "background_image": "images/day5_cruise_sunset.jpg",
      "cta_book": "Secure Your Nordic Summer Escape",
      "cta_view": "View Itinerary Details"
    },
    "essentials": [
      {
        "icon": "⏱️",
        "title": "Duration",
        "value": "9 Epic Days"
      },
      {
        "icon": "🗺️",
        "title": "Route",
        "value": "Stockholm ➔ Oslo ➔ Copenhagen"
      },
      {
        "icon": "🚌",
        "title": "Travel Style",
        "value": "Coach, Rail & Cruise"
      },
      {
        "icon": "⚡",
        "title": "Pace",
        "value": "Active & Comprehensive"
      }
    ],
    "map_deck": {
      "title": "THE MAP DECK",
      "description": "Visualize your premium journey across Scandinavia’s scenic routes, mountains, and seas.",
      "background_image": "images/scandinavia_map.png",
      "route_path": "M 885 458 L 610 475 L 463 399 L 350 350 L 220 290 L 463 399 C 463 560, 547 700, 547 873",
      "pins": [
        {
          "id": "pin-stockholm",
          "day": 2,
          "cx": 885,
          "cy": 458,
          "label": "Stockholm",
          "label_x": 885,
          "label_y": 430
        },
        {
          "id": "pin-karlstad",
          "day": 2,
          "cx": 610,
          "cy": 475,
          "label": "Karlstad",
          "label_x": 610,
          "label_y": 505
        },
        {
          "id": "pin-oslo",
          "day": 3,
          "cx": 463,
          "cy": 399,
          "label": "Oslo",
          "label_x": 463,
          "label_y": 370
        },
        {
          "id": "pin-al",
          "day": 3,
          "cx": 350,
          "cy": 350,
          "label": "Ål",
          "label_x": 350,
          "label_y": 325
        },
        {
          "id": "pin-flam",
          "day": 4,
          "cx": 220,
          "cy": 290,
          "label": "Flåm",
          "label_x": 220,
          "label_y": 265
        },
        {
          "id": "pin-copenhagen",
          "day": 6,
          "cx": 547,
          "cy": 873,
          "label": "Copenhagen",
          "label_x": 547,
          "label_y": 905
        }
      ],
      "steps": [
        {
          "id": "step-day1-2",
          "target": "day-2",
          "marker": "🇸🇪",
          "title": "Sweden Entrance",
          "description": "Start in Stockholm, the Venice of the North. Cruise historical canals and unwind by the lake in Karlstad."
        },
        {
          "id": "step-day3-4",
          "target": "day-3",
          "marker": "🇳🇴",
          "title": "Norway Fjordlands",
          "description": "Cross into Norway. Explore Oslo's art parks, ski summits, and take the breathtaking Flåm Mountain Railway loop."
        },
        {
          "id": "step-day5-7",
          "target": "day-6",
          "marker": "🇩🇰",
          "title": "Denmark Coast & Castles",
          "description": "Sail overnight to Copenhagen. Immerse yourself in Tivoli, Danish Smørrebrød, and Shakespeare's Elsinore Castle."
        }
      ],
      "active_states": [
        {
          "max_day": 2,
          "pins": [
            "pin-stockholm",
            "pin-karlstad"
          ],
          "step_id": "step-day1-2",
          "route_percent": 0.25
        },
        {
          "max_day": 4,
          "pins": [
            "pin-oslo",
            "pin-al",
            "pin-flam"
          ],
          "step_id": "step-day3-4",
          "route_percent": 0.6
        },
        {
          "max_day": 9,
          "pins": [
            "pin-copenhagen"
          ],
          "step_id": "step-day5-7",
          "route_percent": 1.0
        }
      ]
    },
    "itinerary": [
      {
        "day": "1",
        "title": "The Journey Begins",
        "tagline": "✈️ Departure: Bound for Scandinavia",
        "vibe_title": "The Vibe",
        "vibe_text": "Leave the ordinary behind. Board your flight and prepare to wake up in the capital of Nordic chic.",
        "highlights": [
          {
            "icon": "✈️",
            "title": "Flight Departure",
            "description": "Depart your flight bound for Stockholm Arlanda Airport. Smooth boarding and flight preparations."
          }
        ],
        "stay": null,
        "media": {
          "type": "carousel",
          "id": "carousel-scandinavia-day1",
          "slides": [
            {
              "type": "single",
              "src": "images/day8_copenhagen_departure.png",
              "alt": "Modern Aircraft Cabin View",
              "title": "Boarding & Departure",
              "caption": "Embarking on the journey of a lifetime to Northern Europe."
            },
            {
              "type": "double",
              "images": [
                {
                  "src": "images/day2_stockholm.jpg",
                  "alt": "Stockholm Skyline",
                  "title": "Nordic Destination",
                  "caption": "Flying towards Sweden's beautiful capital."
                },
                {
                  "src": "images/logo.png",
                  "alt": "NordisTravel Premium Tour",
                  "title": "Curated Escapes",
                  "caption": "Uncompromising comfort and curated itineraries."
                }
              ]
            }
          ]
        }
      },
      {
        "day": "2",
        "title": "Royalty, Canals & Historic Cobblestone",
        "tagline": "🇸🇪 Stockholm to Karlstad: The Swedish Transition",
        "vibe_title": "The Vibe",
        "vibe_text": "Explore a city built across 14 islands before winding down by the scenic shores of Lake Vänern.",
        "highlights": [
          {
            "icon": "🏰",
            "title": "Stockholm City Tour",
            "description": "Wander the medieval alleyways of Gamla Stan (Old Town), view the Royal Palace, the grand Opera House, and catch panoramic views from Fjällgatan Hill."
          },
          {
            "icon": "🚌",
            "title": "Scenic Countryside Drive",
            "description": "Relax on a panoramic 2.5-hour coach ride (225 km) deep into the Swedish countryside to Karlstad."
          },
          {
            "icon": "🍽️",
            "title": "Welcome Dinner",
            "description": "Regroup for an authentic dinner at a local Karlstad restaurant."
          }
        ],
        "stay": "🏨 Stay: Good Morning Karlstad (or similar)",
        "media": {
          "type": "carousel",
          "id": "carousel-scandinavia-day2",
          "slides": [
            {
              "type": "single",
              "src": "images/day2_stockholm.jpg",
              "alt": "Stockholm Gamla Stan historic townhouses",
              "title": "Stockholm Gamla Stan",
              "caption": "Colorful medieval townhouses standing by the historic waterfront."
            },
            {
              "type": "double",
              "images": [
                {
                  "src": "images/day2_karlstad.jpg",
                  "alt": "Lake Vänern Karlstad",
                  "title": "Lake Vänern, Karlstad",
                  "caption": "Relaxing views of Sweden's largest and most serene lake."
                },
                {
                  "src": "images/day3_road_al.jpg",
                  "alt": "Swedish Countryside Route",
                  "title": "Swedish Countryside Drive",
                  "caption": "Winding past fields and traditional wooden houses."
                }
              ]
            }
          ]
        }
      },
      {
        "day": "3",
        "title": "Sculpture Parks & Majestic Fjords",
        "tagline": "🇳🇴 Crossing Borders: Karlstad to Oslo & Ål",
        "vibe_title": "The Vibe",
        "vibe_text": "Transition from Sweden to Norway. Experience masterfully crafted art parks before heading into the gateway of the majestic Norwegian fjords.",
        "highlights": [
          {
            "icon": "🌳",
            "title": "Oslo City Tour",
            "description": "Walk among the 200+ mesmerizing masterworks in Vigeland Sculpture Park and Frogner Park, stand outside the Oslo Cathedral, and feel the energy of Karl Johans gate."
          },
          {
            "icon": "📸",
            "title": "Holmenkollen Panoramic View",
            "description": "Capture a panoramic snapshot at the world-famous Holmenkollen ski jump area overlooking the city and fjords."
          },
          {
            "icon": "🏔️",
            "title": "Into the Highlands",
            "description": "Board your long-distance coach for a scenic 3-hour journey (195 km) to the mountain village of Ål."
          },
          {
            "icon": "🪵",
            "title": "Alpine Feast",
            "description": "Indulge in a premium 3-course or buffet dinner hosted at your hotel."
          }
        ],
        "stay": "🏨 Stay: Thon Hotel Hallingdal (or similar)",
        "media": {
          "type": "carousel",
          "id": "carousel-scandinavia-day3",
          "slides": [
            {
              "type": "single",
              "src": "images/day3_oslo_vigeland.png",
              "alt": "Vigeland Sculpture Park monolith granite statues",
              "title": "Vigeland Sculpture Park, Oslo",
              "caption": "Granite statues rising dynamically in Oslo's premium park."
            },
            {
              "type": "double",
              "images": [
                {
                  "src": "images/day3_road_al.jpg",
                  "alt": "Scenic highland road to Ål",
                  "title": "The Road to Ål",
                  "caption": "Embarking on scenic highways towards mountain highlands."
                },
                {
                  "src": "images/day4_flam_fjord.jpg",
                  "alt": "Norwegian fjord mountain valley",
                  "title": "Gateway to the Fjords",
                  "caption": "Sweeping valleys where massive cliffs meet clear water."
                }
              ]
            }
          ]
        }
      },
      {
        "day": "4",
        "title": "The Crown Jewel of Rail Journeys",
        "tagline": "🚂 The Flåm Railway Experience",
        "vibe_title": "The Vibe",
        "vibe_text": "Prepare for one of the absolute highlights of your trip—a jaw-dropping train ride through steep ravines, cascading waterfalls, and deep fjords.",
        "highlights": [
          {
            "icon": "🚂",
            "title": "The Legendary Flåm Railway",
            "description": "Board the legendary Flåm-Myrdal loop. Peer out panoramic windows as you ascend over 800 meters along the sheer walls of the valley."
          },
          {
            "icon": "🍽️",
            "title": "Fjord-Side Lunch",
            "description": "Savor local specialties at a charming local restaurant in the heart of the valley."
          },
          {
            "icon": "🏔️",
            "title": "Highland Return",
            "description": "Return to the serene comfort of Ål for another incredible 3-course hotel dinner."
          }
        ],
        "stay": "🏨 Stay: Thon Hotel Hallingdal (or similar)",
        "media": {
          "type": "carousel",
          "id": "carousel-scandinavia-day4",
          "slides": [
            {
              "type": "single",
              "src": "images/day4_flam_railway.jpg",
              "alt": "Vintage green Flåm railway train alongside cliff",
              "title": "The Flåm Railway",
              "caption": "Ascending steep mountain cliffs alongside dramatic valleys."
            },
            {
              "type": "double",
              "images": [
                {
                  "src": "images/day4_flam_fjord.jpg",
                  "alt": "Spectacular green mountain valley in Flåm",
                  "title": "Flåm Valley Fjord View",
                  "caption": "Emerald waters reflecting towering Norwegian peaks."
                },
                {
                  "src": "images/day4_bergen_bryggen.jpg",
                  "alt": "Scenic fjord waters",
                  "title": "Fjord Waterways",
                  "caption": "Deep fjords presenting unforgettable scenic vistas."
                }
              ]
            }
          ]
        }
      },
      {
        "day": "5",
        "title": "Setting Sail on the Baltic Sea",
        "tagline": "🚢 Oslo to Copenhagen: The Overnight Luxury Cruise",
        "vibe_title": "The Vibe",
        "vibe_text": "Say goodbye to Norway's mountains with a grand farewell tour of Oslo, then step aboard a premium cruise liner to sleep your way across the sea to Denmark.",
        "highlights": [
          {
            "icon": "🏛️",
            "title": "Oslo Farewell & Palace",
            "description": "See the Parliament building and enjoy a photo stop outside the elegant Royal Palace."
          },
          {
            "icon": "🚢",
            "title": "Go Nordic Cruiseline Cabin",
            "description": "Check into your private, comfortable overnight ocean cruise cabin."
          },
          {
            "icon": "🦐",
            "title": "The Grand Buffet",
            "description": "Celebrate the evening with a massive, premium dinner buffet on board as you cruise down the historic Oslofjord."
          }
        ],
        "stay": "🏨 Stay: Overnight Cruise Inside Cabin (Go Nordic Cruiseline)",
        "media": {
          "type": "carousel",
          "id": "carousel-scandinavia-day5",
          "slides": [
            {
              "type": "single",
              "src": "images/day5_cruise_sunset.jpg",
              "alt": "Ocean cruise ship at sunset",
              "title": "Sailing the Oslofjord",
              "caption": "Cruising past tranquil inlets as the sun goes down."
            },
            {
              "type": "double",
              "images": [
                {
                  "src": "images/day5_cruise_buffet.png",
                  "alt": "On-board cruise buffet",
                  "title": "The Grand Buffet Dinner",
                  "caption": "Premium dining featuring fresh seafood and local bites."
                },
                {
                  "src": "images/day8_copenhagen_departure.png",
                  "alt": "Sleek cruise ship lounge",
                  "title": "Luxury Cruise Transit",
                  "caption": "Comfortable ocean view salons and dynamic amenities."
                }
              ]
            }
          ]
        }
      },
      {
        "day": "6",
        "title": "Welcome to the Capital of \"Hygge\"",
        "tagline": "🇩🇰 Copenhagen: Leisure & Latitude",
        "vibe_title": "The Vibe",
        "vibe_text": "Wake up in Denmark! Disembark directly into the heart of Copenhagen for a day of absolute freedom to explore at your own pace.",
        "highlights": [
          {
            "icon": "🚢",
            "title": "Copenhagen Terminal Arrival",
            "description": "Cruise into the Copenhagen Terminal and check into your downtown boutique hotel."
          },
          {
            "icon": "🚲",
            "title": "Free at Leisure",
            "description": "Rent a bike, grab a coffee, stroll down the famous Strøget shopping street, or sit by the colorful townhouses along the canals of Nyhavn."
          }
        ],
        "stay": "🏨 Stay: Good Morning City Copenhagen Star (or similar)",
        "media": {
          "type": "carousel",
          "id": "carousel-scandinavia-day6",
          "slides": [
            {
              "type": "single",
              "src": "images/day6_copenhagen_nyhavn.jpg",
              "alt": "Vibrant townhouses along the canal in Nyhavn",
              "title": "Nyhavn Canal, Copenhagen",
              "caption": "Historic colorful townhouses lining the water's edge."
            },
            {
              "type": "double",
              "images": [
                {
                  "src": "images/day6_copenhagen_tivoli.jpg",
                  "alt": "Tivoli Gardens illuminated at night",
                  "title": "Tivoli Gardens",
                  "caption": "Amusement park lights sparkling in the Danish night."
                },
                {
                  "src": "images/day7_smorrebrod.jpg",
                  "alt": "Danish Smørrebrød sandwiches",
                  "title": "Danish Pastries & Cafes",
                  "caption": "Soaking in the relaxing vibe of Copenhagen coffee culture."
                }
              ]
            }
          ]
        }
      },
      {
        "day": "7",
        "title": "Of Castles, Queens & Open Sandwiches",
        "tagline": "👑 Copenhagen & The Shakespearean Castle",
        "vibe_title": "The Vibe",
        "vibe_text": "Dive deep into Danish history, indulge in world-class local cuisine, and explore the legendary seaside fortress that inspired Hamlet.",
        "highlights": [
          {
            "icon": "🧜‍♀️",
            "title": "Copenhagen City Highlights",
            "description": "Visit the mystical Little Mermaid statue, Gefion Fountain, Amalienborg Palace, and the majestic Frederiks Kirke (The Marble Church)."
          },
          {
            "icon": "🍽&zwj;🍳",
            "title": "The Smørrebrød Experience",
            "description": "Sit down for an authentic Danish lunch to try world-famous, beautifully arranged open-faced sandwiches."
          },
          {
            "icon": "🏰",
            "title": "Elsinore Castle (Kronborg)",
            "description": "Travel north to Elsinore to stand in the real-life coastal fortress made immortal by William Shakespeare's Hamlet."
          }
        ],
        "stay": "🏨 Stay: Good Morning City Copenhagen Star (or similar)",
        "media": {
          "type": "carousel",
          "id": "carousel-scandinavia-day7",
          "slides": [
            {
              "type": "single",
              "src": "images/day7_kronborg_castle.jpg",
              "alt": "Aerial view of seaside Kronborg Castle in Elsinore",
              "title": "Kronborg Castle, Elsinore",
              "caption": "The historic maritime stronghold that inspired Shakespeare's Hamlet."
            },
            {
              "type": "double",
              "images": [
                {
                  "src": "images/day7_little_mermaid.jpg",
                  "alt": "Little Mermaid statue sitting on a rock in Copenhagen harbor",
                  "title": "The Little Mermaid",
                  "caption": "Graceful symbol of Denmark on Copenhagen's harbor."
                },
                {
                  "src": "images/day7_smorrebrod.jpg",
                  "alt": "Beautifully styled traditional Danish Smørrebrød sandwich",
                  "title": "Danish Smørrebrød",
                  "caption": "Elegant open-faced sandwiches styled with fresh ingredients."
                }
              ]
            }
          ]
        }
      },
      {
        "day": "8-9",
        "title": "Farewell Scandinavia",
        "tagline": "🛫 Copenhagen Departure to Destination",
        "vibe_title": "The Vibe",
        "vibe_text": "Savor your final morning of fresh Danish pastries and coffee before heading to the airport for your smooth journey home.",
        "highlights": [
          {
            "icon": "☕",
            "title": "Leisurely Breakfast & Souvenirs",
            "description": "Enjoy breakfast at your hotel followed by last-minute souvenir hunting and boutique exploring at leisure."
          },
          {
            "icon": "🚌",
            "title": "Hassle-Free Airport Transfer",
            "description": "Comfortable group airport transfer pickup timed perfectly with your departure flight."
          },
          {
            "icon": "🌍",
            "title": "Return Arrival (Day 9)",
            "description": "Arrive back at your destination airport with a lifetime of spectacular Nordic memories."
          }
        ],
        "stay": null,
        "media": {
          "type": "carousel",
          "id": "carousel-scandinavia-day8",
          "slides": [
            {
              "type": "single",
              "src": "images/day8_copenhagen_departure.png",
              "alt": "Sleek, minimalist architecture layout of Copenhagen airport",
              "title": "Nordic Departure",
              "caption": "Departing from Copenhagen's modern, design-forward airport terminal."
            },
            {
              "type": "double",
              "images": [
                {
                  "src": "images/day6_copenhagen_nyhavn.jpg",
                  "alt": "Last coffee in Copenhagen",
                  "title": "Danish Pastries & Coffee",
                  "caption": "Taking a final moment to savor local bakery specialties."
                },
                {
                  "src": "images/day5_cruise_sunset.jpg",
                  "alt": "Sunset flight view",
                  "title": "Unforgettable Memories",
                  "caption": "Heading home with a camera full of beautiful Scandinavian moments."
                }
              ]
            }
          ]
        }
      }
    ],
    "parallax_sections": [
      {
        "insert_after_day": "5",
        "background_image": "images/day5_cruise_sunset.jpg",
        "title": "Cruise Across The Skagerrak",
        "subtitle": "Dine, relax, and wake up in Copenhagen."
      }
    ],
    "booking": {
      "title": "Secure Your Nordic Summer Escape",
      "description": "Book your summer adventure today. Our premium package includes scenic transportation, luxury rail passes, overnight fjord cruise, hotel stays, and professional tour leadership.",
      "bullets": [
        "All Premium Hotels Included",
        "Flåm Mountain Railway Return Ticket",
        "Overnight Baltic Cruise (Oslo ➔ Copenhagen)",
        "Daily Buffet Breakfasts & Highlight Dinners"
      ],
      "base_price": 2495,
      "dates": [
        {
          "id": "jul10",
          "label": "July 10, 2026 (Summer peak)",
          "multiplier": 1.15
        },
        {
          "id": "aug05",
          "label": "August 05, 2026 (Mild summer)",
          "multiplier": 1.05
        },
        {
          "id": "sep02",
          "label": "September 02, 2026 (Late summer)",
          "multiplier": 1.0
        }
      ],
      "cabins": [
        {
          "id": "inside",
          "label": "Inside Shared Cabin (Included)",
          "addon": 0
        },
        {
          "id": "outside",
          "label": "Outside Sea View Cabin (+$150)",
          "addon": 150
        },
        {
          "id": "suite",
          "label": "Luxury Commodore Suite (+$450)",
          "addon": 450
        }
      ],
      "single_supplement": {
        "addon": 550,
        "no_label": "Shared Double Room (Included)",
        "yes_label": "Private Single Room Throughout (+$550/person)"
      }
    },
    "value_insights": {
      "title": "VALUE INSIGHTS",
      "description": "Premium value and total transparency. Here is exactly what is included in your tour.",
      "inclusions_title": "🎁 Included in Your Package",
      "inclusions": [
        "<strong>Overnight Stays:</strong> 6 nights in premium standard rooms (Good Morning Karlstad, Thon Hotel Hallingdal, Good Morning City Copenhagen Star) plus 1 night in a cruise cabin.",
        "<strong>Premium Meals:</strong> 7 breakfasts on-board/hotels, 1 Danish Smørrebrød lunch, 1 buffet dinner on-board the cruise, and 2 alpine dinners in Ål.",
        "<strong>Scenic Transits:</strong> Long-distance coach services across Sweden and Norway.",
        "<strong>Activities & Passes:</strong> Flåm Railway return loop ticket, Oslo & Stockholm panoramic city tours, Kronborg Castle entry excursion."
      ],
      "exclusions_title": "✕ Excluded",
      "exclusions": [
        "Personal shopping, custom souvenirs, and optional local activities.",
        "Lunches and dinners not explicitly detailed in the itinerary.",
        "Entry tickets to sites not specified under inclusions.",
        "Individual travel insurance."
      ]
    },
    "footer": {
      "description": "Providing premium, authentic travel experiences across the spectacular landscapes of Scandinavia. Our team organizes every detail so you can focus on making memories that last a lifetime.",
      "address": "Vester Voldgade 83, 2 • 1552 København K, Denmark",
      "phone": "+45 2622 0288",
      "email": "sales@nordistravel.com",
      "web": "www.nordistravel.com",
      "contact_image": "images/contact_footer.jpg"
    }
  },
  {
    "id": "classic_scandinavia",
    "countries": [
      "Denmark",
      "Norway",
      "Finland",
      "Sweden"
    ],
    "meta": {
      "title": "Classic Scandinavia w/ Fjords | NordisTravel",
      "description": "Embark on an extraordinary 8-day summer journey through Denmark, Norway, Finland, and Sweden. Discover Copenhagen, Oslo, Flåm, Bergen, Helsinki, and Stockholm on a premium, curated Scandinavian vacation."
    },
    "hero": {
      "subtitle": "Denmark, Norway, Finland & Sweden:",
      "title": "Classic Scandinavia with Fjords",
      "description": "Discover the magic of Northern Europe on a premium, curated journey through spectacular Norwegian fjords and vibrant Nordic capitals.",
      "background_image": "images/tour_hero_fjord.png",
      "cta_book": "Secure Your Classic Scandinavia Tour",
      "cta_view": "View Itinerary Details"
    },
    "essentials": [
      {
        "icon": "⏱️",
        "title": "Duration",
        "value": "8 Epic Days"
      },
      {
        "icon": "🗺️",
        "title": "Route",
        "value": "Copenhagen ➔ Bergen ➔ Helsinki ➔ Stockholm"
      },
      {
        "icon": "🚢",
        "title": "Travel Style",
        "value": "Coach, Rail, Cruise & Flight"
      },
      {
        "icon": "⚡",
        "title": "Pace",
        "value": "Active & Comprehensive"
      }
    ],
    "map_deck": {
      "title": "THE MAP DECK",
      "description": "Visualize your premium journey across Denmark, Norway, Finland, and Sweden.",
      "background_image": "images/scandinavia_finland_map.png",
      "route_path": "M 325 950 C 290 880, 310 780, 380 700 L 295 660 L 240 620 L 165 630 Q 490 470, 815 690 Q 680 730, 555 710",
      "pins": [
        {
          "id": "pin-copenhagen",
          "day": 2,
          "cx": 325,
          "cy": 950,
          "label": "Copenhagen",
          "label_x": 325,
          "label_y": 985
        },
        {
          "id": "pin-oslo",
          "day": 3,
          "cx": 380,
          "cy": 700,
          "label": "Oslo",
          "label_x": 420,
          "label_y": 705
        },
        {
          "id": "pin-gol",
          "day": 3,
          "cx": 295,
          "cy": 660,
          "label": "Gol",
          "label_x": 295,
          "label_y": 685
        },
        {
          "id": "pin-flam",
          "day": 4,
          "cx": 240,
          "cy": 620,
          "label": "Flåm",
          "label_x": 240,
          "label_y": 600
        },
        {
          "id": "pin-bergen",
          "day": 5,
          "cx": 165,
          "cy": 630,
          "label": "Bergen",
          "label_x": 130,
          "label_y": 635
        },
        {
          "id": "pin-helsinki",
          "day": 6,
          "cx": 815,
          "cy": 690,
          "label": "Helsinki",
          "label_x": 815,
          "label_y": 665
        },
        {
          "id": "pin-stockholm",
          "day": 7,
          "cx": 555,
          "cy": 710,
          "label": "Stockholm",
          "label_x": 555,
          "label_y": 685
        }
      ],
      "steps": [
        {
          "id": "step-day1-2",
          "target": "day-2",
          "marker": "🇩🇰",
          "title": "Denmark Capital",
          "description": "Start in historic Copenhagen. Stroll Nyhavn, visit royal palaces, and cruise overnight across the sea to Norway."
        },
        {
          "id": "step-day3-4",
          "target": "day-3",
          "marker": "🇳🇴",
          "title": "Norway Fjordlands",
          "description": "Cross into Norway. Journey through Gol, cruise the breathtaking Aurlandsfjord, and ride the iconic Flåm Railway."
        },
        {
          "id": "step-day5",
          "target": "day-5",
          "marker": "🇳🇴",
          "title": "Bergen Wharf",
          "description": "Explore Bergen's Bryggen wharf, ride the Fløibanen funicular, and fly over Sweden to Finland."
        },
        {
          "id": "step-day6",
          "target": "day-6",
          "marker": "🇫🇮",
          "title": "Helsinki Harbor",
          "description": "Tour Helsinki's unique Rock Church, Uspenski Cathedral, and cruise overnight to Sweden."
        },
        {
          "id": "step-day7-8",
          "target": "day-7",
          "marker": "🇸🇪",
          "title": "Sweden Entrance",
          "description": "Explore the historic Vasa Museum, Stockholm City Hall, and depart from Stockholm."
        }
      ],
      "active_states": [
        {
          "max_day": 2,
          "pins": [
            "pin-copenhagen"
          ],
          "step_id": "step-day1-2",
          "route_percent": 0.2
        },
        {
          "max_day": 4,
          "pins": [
            "pin-oslo",
            "pin-gol",
            "pin-flam"
          ],
          "step_id": "step-day3-4",
          "route_percent": 0.5
        },
        {
          "max_day": 5,
          "pins": [
            "pin-bergen"
          ],
          "step_id": "step-day5",
          "route_percent": 0.65
        },
        {
          "max_day": 6,
          "pins": [
            "pin-helsinki"
          ],
          "step_id": "step-day6",
          "route_percent": 0.85
        },
        {
          "max_day": 8,
          "pins": [
            "pin-stockholm"
          ],
          "step_id": "step-day7-8",
          "route_percent": 1.0
        }
      ]
    },
    "itinerary": [
      {
        "day": "1",
        "title": "Welcome to Denmark",
        "tagline": "✈️ Arrival: Bound for Copenhagen",
        "vibe_title": "The Vibe",
        "vibe_text": "Arrive in Denmark's charming capital. Check into your hotel and enjoy a relaxing evening at leisure.",
        "highlights": [
          {
            "icon": "✈️",
            "title": "Arrival & Transfer",
            "description": "Arrive at Copenhagen Airport by flight, pick up, and transfer to your hotel."
          },
          {
            "icon": "🚲",
            "title": "Leisure Time",
            "description": "Enjoy a free afternoon to relax and explore the surrounding neighborhood."
          }
        ],
        "stay": "🏨 Stay: Scandic Sluseholmen (or similar)",
        "media": {
          "type": "carousel",
          "id": "carousel-classic-day1",
          "slides": [
            {
              "type": "single",
              "src": "images/day6_copenhagen_nyhavn.jpg",
              "alt": "Welcome to Copenhagen",
              "title": "Welcome to Copenhagen",
              "caption": "Bright canals and historic brick townhouses."
            },
            {
              "type": "double",
              "images": [
                {
                  "src": "images/day6_copenhagen_tivoli.jpg",
                  "alt": "Tivoli Gardens",
                  "title": "Tivoli Gardens",
                  "caption": "Illuminated evening walks in Copenhagen's heart."
                },
                {
                  "src": "images/day8_copenhagen_departure.png",
                  "alt": "Modern Copenhagen",
                  "title": "Modern Copenhagen",
                  "caption": "Clean transport and high-fidelity comfort."
                }
              ]
            }
          ]
        }
      },
      {
        "day": "2",
        "title": "Royalty, Canals & Seaside Mermaids",
        "tagline": "🇩🇰 Copenhagen Sightseeing & Overnight Baltic Cruise",
        "vibe_title": "The Vibe",
        "vibe_text": "Explore Copenhagen's historic palaces and iconic Nyhavn canals before boarding your premium overnight cruise to Norway.",
        "highlights": [
          {
            "icon": "🧜‍♀️",
            "title": "Copenhagen City Tour",
            "description": "Visit the Little Mermaid statue, Gefion Fountain, Amalienborg Palace (outside), Nyhavn, and the City Hall."
          },
          {
            "icon": "🚢",
            "title": "Baltic Cruise Boarding",
            "description": "Transfer to the Go Nordic Cruise Terminal and check in to your sea view cabin."
          },
          {
            "icon": "🍽️",
            "title": "Grand Buffet Dinner",
            "description": "Celebrate the evening with a massive dinner buffet on board as you cruise overnight to Oslo."
          }
        ],
        "stay": "🏨 Stay: Overnight Cruise Sea View Cabin (Go Nordic Cruiseline)",
        "media": {
          "type": "carousel",
          "id": "carousel-classic-day2",
          "slides": [
            {
              "type": "single",
              "src": "images/day6_copenhagen_nyhavn.jpg",
              "alt": "Nyhavn Waterfront",
              "title": "Nyhavn Waterfront",
              "caption": "Strolling along the historic harbor canals."
            },
            {
              "type": "double",
              "images": [
                {
                  "src": "images/day7_little_mermaid.jpg",
                  "alt": "The Little Mermaid",
                  "title": "The Little Mermaid",
                  "caption": "Graceful seaside symbol of Copenhagen."
                },
                {
                  "src": "images/day5_cruise_buffet.png",
                  "alt": "Overnight Cruise Buffet",
                  "title": "Overnight Cruise Buffet",
                  "caption": "Feast on Baltic specialties sailing to Norway."
                }
              ]
            }
          ]
        }
      },
      {
        "day": "3",
        "title": "From Fjordlands to Alpine Peaks",
        "tagline": "🇳🇴 Oslo, Gol & Gudvangen Fjord Cruise",
        "vibe_title": "The Vibe",
        "vibe_text": "Arrive in Oslo and transfer deep into the Norwegian highlands, ending with a spectacular 2-hour fjord cruise from Flåm to Gudvangen.",
        "highlights": [
          {
            "icon": "🚌",
            "title": "Oslo Port to Gol",
            "description": "Arrive at Oslo Port, board your long-distance coach, and drive to Gol for a 3-course lunch at Pers Hotell."
          },
          {
            "icon": "🏔️",
            "title": "Transfer to Flåm",
            "description": "Continue on a scenic highland drive towards the village of Flåm."
          },
          {
            "icon": "⛵",
            "title": "Spectacular Fjord Cruise",
            "description": "Board a 2-hour cruise from Flåm to Gudvangen to experience the dramatic cliffs of the Nærøyfjord."
          }
        ],
        "stay": "🏨 Stay: Fretheim Hotel (or similar)",
        "media": {
          "type": "carousel",
          "id": "carousel-classic-day3",
          "slides": [
            {
              "type": "single",
              "src": "images/day4_flam_fjord.jpg",
              "alt": "Nærøyfjord Cruise",
              "title": "Nærøyfjord Cruise",
              "caption": "Unbelievable views of dramatic cliffs rising from the water."
            },
            {
              "type": "double",
              "images": [
                {
                  "src": "images/day3_road_al.jpg",
                  "alt": "Oslo to Gol Highland Route",
                  "title": "Oslo to Gol Highland Route",
                  "caption": "Charming alpine towns and sweeping mountain roads."
                },
                {
                  "src": "images/day2_karlstad.jpg",
                  "alt": "Scenic Norway Rivers",
                  "title": "Scenic Norway Rivers",
                  "caption": "Passing lakes and rushing rivers through high country."
                }
              ]
            }
          ]
        }
      },
      {
        "day": "4",
        "title": "The Legendary Rail & Waterfront Wharf",
        "tagline": "🚂 Flåm Railway & Historic Bergen",
        "vibe_title": "The Vibe",
        "vibe_text": "Ride the iconic Flåm Railway loop up steep mountain canyons, then transfer to Bergen for city sightseeing and Bryggen wharf views.",
        "highlights": [
          {
            "icon": "🚂",
            "title": "The Legendary Flåm Railway",
            "description": "Embark on the world-famous return train journey from Flåm to Myrdal, ascending over 800 meters."
          },
          {
            "icon": "🍽️",
            "title": "Fjord-Side Lunch",
            "description": "Savor a buffet lunch at Flåmsbrygga Hotel / Flåmstova Restaurant."
          },
          {
            "icon": "🏘️",
            "title": "Bergen City Tour & Funicular",
            "description": "Drive to Bergen. Tour the Bryggen wharf, visit the Bergen Fish Market, and ride the Fløibanen funicular for city views."
          }
        ],
        "stay": "🏨 Stay: Scandic Bergen City (or similar)",
        "media": {
          "type": "carousel",
          "id": "carousel-classic-day4",
          "slides": [
            {
              "type": "single",
              "src": "images/day4_flam_railway.jpg",
              "alt": "The Flåm Railway",
              "title": "The Flåm Railway",
              "caption": "Spectacular engineering through wild mountain terrain."
            },
            {
              "type": "double",
              "images": [
                {
                  "src": "images/day4_bergen_bryggen.jpg",
                  "alt": "Bergen Bryggen Wharf",
                  "title": "Bergen Bryggen Wharf",
                  "caption": "Colorful medieval Hanseatic wooden houses."
                },
                {
                  "src": "images/day3_oslo_vigeland.png",
                  "alt": "Bergen Fish Market",
                  "title": "Bergen Fish Market",
                  "caption": "Local atmosphere and fresh catches by the harbor."
                }
              ]
            }
          ]
        }
      },
      {
        "day": "5",
        "title": "Crossing the Baltic Airspace",
        "tagline": "✈️ Bergen to Helsinki: Welcome to Finland",
        "vibe_title": "The Vibe",
        "vibe_text": "Depart Norway on a short flight to Helsinki, Finland. Transfer to the city center and check in to your premium seaside hotel.",
        "highlights": [
          {
            "icon": "✈️",
            "title": "Flight to Helsinki",
            "description": "Transfer to Bergen airport and board your flight to Helsinki, Finland."
          },
          {
            "icon": "🚌",
            "title": "City Center Transfer",
            "description": "Arrive at Helsinki airport and drive to your downtown hotel."
          },
          {
            "icon": "🏨",
            "title": "Seaside Lodging",
            "description": "Check in and enjoy dinner at your premium seaside hotel."
          }
        ],
        "stay": "🏨 Stay: Scandic Grand Marina (or similar)",
        "media": {
          "type": "carousel",
          "id": "carousel-classic-day5",
          "slides": [
            {
              "type": "single",
              "src": "images/day5_helsinki_city.jpg",
              "alt": "Helsinki Cathedral Senate Square",
              "title": "Helsinki Cathedral",
              "caption": "Stunning neoclassical white cathedral overlooking Senate Square."
            },
            {
              "type": "double",
              "images": [
                {
                  "src": "images/day8_copenhagen_departure.png",
                  "alt": "Bergen Airport Departure",
                  "title": "Bergen Airport Departure",
                  "caption": "Boarding your short flight to Finland."
                },
                {
                  "src": "images/day6_helsinki_rock_church.jpg",
                  "alt": "Helsinki Seaside View",
                  "title": "Seaside Harbor",
                  "caption": "Arriving at the premium Grand Marina hotel."
                }
              ]
            }
          ]
        }
      },
      {
        "day": "6",
        "title": "Rock Churches, Cathedrals & Baltic Cruise",
        "tagline": "🇫🇮 Helsinki Highlights & Silja Line Overnight Cruise",
        "vibe_title": "The Vibe",
        "vibe_text": "Tour Helsinki's architectural marvels, including the Rock Church, before setting sail on a premium overnight cruise to Stockholm.",
        "highlights": [
          {
            "icon": "🏛️",
            "title": "Helsinki Monuments",
            "description": "Photo stop at Uspenski Cathedral, entrance to Temppeliaukio Rock Church, and a 3-course lunch at Ravintola Zetor."
          },
          {
            "icon": "🛍️",
            "title": "Market Square Shopping",
            "description": "Visit Senate Square, the Market Square, and shop at the historic Stockmann mall."
          },
          {
            "icon": "🚢",
            "title": "Silja Line Cruise",
            "description": "Transfer to Silja Line Terminal, check in to your A-Class sea view cabin, and enjoy the grand dinner buffet on board."
          }
        ],
        "stay": "🏨 Stay: Overnight Cruise Sea View Cabin (Tallink Silja Line)",
        "media": {
          "type": "carousel",
          "id": "carousel-classic-day6",
          "slides": [
            {
              "type": "single",
              "src": "images/day6_helsinki_rock_church.jpg",
              "alt": "Helsinki Rock Church Interior",
              "title": "Temppeliaukio Rock Church",
              "caption": "Unique architecture carved directly into solid rock."
            },
            {
              "type": "double",
              "images": [
                {
                  "src": "images/day5_helsinki_city.jpg",
                  "alt": "Uspenski Cathedral",
                  "title": "Uspenski Cathedral",
                  "caption": "Red-brick Eastern Orthodox cathedral with gold domes."
                },
                {
                  "src": "images/day5_cruise_sunset.jpg",
                  "alt": "Silja Line Cruise Ship",
                  "title": "Silja Line Cruise",
                  "caption": "Overnight cruise sailing across the Baltic Sea to Sweden."
                }
              ]
            }
          ]
        }
      },
      {
        "day": "7",
        "title": "Venice of the North & Majestic Warships",
        "tagline": "🇸🇪 Arrive Stockholm: Museums & City Sightseeing",
        "vibe_title": "The Vibe",
        "vibe_text": "Sail into Stockholm and tour the historic capital, visiting the world-famous Vasa Museum and the grand Stockholm City Hall.",
        "highlights": [
          {
            "icon": "🏰",
            "title": "Stockholm City Tour",
            "description": "Arrive Stockholm port and begin city sightseeing with your Tour Leader."
          },
          {
            "icon": "⛵",
            "title": "Vasa Museum & City Hall",
            "description": "Entrance to Vasa Museum to see the 17th-century warship, and guided tour of Stockholm City Hall."
          },
          {
            "icon": "🍽️",
            "title": "Agaton Swedish Lunch",
            "description": "Enjoy a 3-course lunch at Restaurang Agaton, followed by hotel transfer."
          }
        ],
        "stay": "🏨 Stay: Scandic Victoria Tower (or similar)",
        "media": {
          "type": "carousel",
          "id": "carousel-classic-day7",
          "slides": [
            {
              "type": "single",
              "src": "images/day7_stockholm_vasa.jpg",
              "alt": "Stockholm Vasa Museum Warship",
              "title": "The Vasa Museum",
              "caption": "Unbelievably preserved 17th-century royal warship."
            },
            {
              "type": "double",
              "images": [
                {
                  "src": "images/day2_stockholm.jpg",
                  "alt": "Stockholm Gamla Stan",
                  "title": "Stockholm Gamla Stan",
                  "caption": "Historic palaces and old town streets of the capital."
                },
                {
                  "src": "images/day3_oslo_vigeland.png",
                  "alt": "Stockholm City Hall",
                  "title": "Stockholm City Hall",
                  "caption": "Iconic city landmark on the waterfront."
                }
              ]
            }
          ]
        }
      },
      {
        "day": "8",
        "title": "Farewell Northern Europe",
        "tagline": "🛫 Stockholm Departure to Destination",
        "vibe_title": "The Vibe",
        "vibe_text": "Enjoy your final Swedish breakfast before transferring to the airport for your flight back home, carrying a lifetime of Baltic memories.",
        "highlights": [
          {
            "icon": "☕",
            "title": "Last Morning",
            "description": "Enjoy breakfast at your hotel followed by last-minute souvenir shopping at leisure."
          },
          {
            "icon": "🚌",
            "title": "Airport Transfer",
            "description": "Coach transfer from Scandic Victoria Tower to Stockholm airport."
          },
          {
            "icon": "🌍",
            "title": "Return Flight",
            "description": "Arrive at the airport, check in, and board your flight home."
          }
        ],
        "stay": null,
        "media": {
          "type": "carousel",
          "id": "carousel-classic-day8",
          "slides": [
            {
              "type": "single",
              "src": "images/day8_copenhagen_departure.png",
              "alt": "Modern Nordic Airport Lounge",
              "title": "Stockholm Arlanda Departure",
              "caption": "Ready to check in for your return flight."
            },
            {
              "type": "double",
              "images": [
                {
                  "src": "images/day6_copenhagen_nyhavn.jpg",
                  "alt": "Swedish Fika Coffee",
                  "title": "Swedish Fika Coffee",
                  "caption": "Final morning of coffee and cinnamon pastries."
                },
                {
                  "src": "images/day5_cruise_sunset.jpg",
                  "alt": "Baltic Sunset",
                  "title": "Baltic Sunset",
                  "caption": "Bidding farewell to the magical Scandinavian summers."
                }
              ]
            }
          ]
        }
      }
    ],
    "parallax_sections": [
      {
        "insert_after_day": "2",
        "background_image": "images/day5_cruise_sunset.jpg",
        "title": "Cruise Across the Oslofjord",
        "subtitle": "Dine, relax, and wake up in Norway."
      }
    ],
    "booking": {
      "title": "Secure Your Classic Scandinavia Journey",
      "description": "Book your premium summer adventure today. Our package includes coach transits, rail passes, intra-tour flight (Bergen ➔ Helsinki), overnight cruise cabins, hotels, highlight meals, and professional tour leadership.",
      "bullets": [
        "All Premium Hotels & Cruise Cabins Included",
        "Flåm Railway & Fjord Cruise Tickets",
        "Intra-tour Flight (Bergen to Helsinki) Included",
        "Daily Buffet Breakfasts & Highlight Dinners"
      ],
      "base_price": 2995,
      "dates": [
        {
          "id": "jul12",
          "label": "July 12, 2026 (Summer peak)",
          "multiplier": 1.15
        },
        {
          "id": "aug09",
          "label": "August 09, 2026 (Mild summer)",
          "multiplier": 1.05
        },
        {
          "id": "sep06",
          "label": "September 06, 2026 (Late summer)",
          "multiplier": 1.0
        }
      ],
      "cabins": [
        {
          "id": "inside",
          "label": "Inside Shared Cabin (Included)",
          "addon": 0
        },
        {
          "id": "outside",
          "label": "Outside Sea View Cabin (+€180)",
          "addon": 180
        },
        {
          "id": "suite",
          "label": "Luxury Commodore Suite (+€490)",
          "addon": 490
        }
      ],
      "single_supplement": {
        "addon": 650,
        "no_label": "Shared Room (Included)",
        "yes_label": "Private Single Room Throughout (+€650/person)"
      }
    },
    "value_insights": {
      "title": "VALUE INSIGHTS",
      "description": "Premium value and total transparency. Here is exactly what is included in your tour.",
      "inclusions_title": "🎁 Included in Your Package",
      "inclusions": [
        "<strong>Hotel Stays:</strong> 5 nights in premium hotels (Scandic Sluseholmen, Fretheim Hotel, Scandic Bergen City, Scandic Grand Marina, Scandic Victoria Tower) in standard double room sharing.",
        "<strong>Baltic Cruises:</strong> 2 nights in overnight cruises (Copenhagen ➔ Oslo and Helsinki ➔ Stockholm) in standard 2/4-bed cabins with buffet dinners included.",
        "<strong>Transit Flights:</strong> One-way flight ticket from Bergen to Helsinki (economy class, standard luggage).",
        "<strong>Meals:</strong> 7 breakfasts, 3 premium lunches (Gol, Flåm, Stockholm), 4 dinners (including cruise buffets).",
        "<strong>Activities & Excursions:</strong> Flåm Railway ticket, 2-hour fjord cruise, Vasa Museum entry, Rock Church entry, and guided city tours in Copenhagen, Bergen, Helsinki, and Stockholm."
      ],
      "exclusions_title": "✕ Excluded",
      "exclusions": [
        "Personal shopping, souvenirs, and optional sightseeing activities.",
        "Lunches and dinners not explicitly detailed in the itinerary.",
        "Individual international flights to Copenhagen and from Stockholm.",
        "Travel insurance."
      ]
    },
    "footer": {
      "description": "Providing premium, authentic travel experiences across the spectacular landscapes of Scandinavia and the Baltic capitals. Our team organizes every detail so you can focus on making memories.",
      "address": "Vester Voldgade 83, 2 • 1552 København K, Denmark",
      "phone": "+45 2622 0288",
      "email": "sales@nordistravel.com",
      "web": "www.nordistravel.com",
      "contact_image": "images/contact_footer.jpg"
    }
  }
];
  let activeItineraryId = null;
  let activeItinerary = null;

  // --- STATE ELEMENTS ---
  const itinerariesMenu = document.getElementById('itineraries-menu');
  const viewport = document.getElementById('itinerary-viewport');
  const footerContent = document.getElementById('footer-content-dynamic');

  // --- HEADER SCROLL ACTION ---
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // --- RENDER ITINERARIES DROP DOWN MENU ---
  function initItinerariesMenu() {
    itinerariesMenu.innerHTML = '';
    itineraries.forEach(it => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#';
      a.textContent = it.hero.title;
      a.setAttribute('data-id', it.id);
      a.addEventListener('click', (e) => {
        e.preventDefault();
        switchItinerary(it.id);
        
        // Sync checkboxes to match the active itinerary's countries
        syncCheckboxesToItinerary(it);
      });
      li.appendChild(a);
      itinerariesMenu.appendChild(li);
    });
  }

  // Sync checkboxes to selected itinerary's countries
  function syncCheckboxesToItinerary(itinerary) {
    const checkboxes = document.querySelectorAll('.country-filter');
    const itCountries = itinerary.countries || [];
    checkboxes.forEach(cb => {
      cb.checked = itCountries.includes(cb.value);
    });
  }

  // --- SWITCH ITINERARY WITH FADE ---
  function switchItinerary(id) {
    if (activeItineraryId === id) return;
    
    viewport.classList.add('fade-out');
    setTimeout(() => {
      renderItinerary(id);
      viewport.classList.remove('fade-out');
      viewport.classList.add('fade-in');
      setTimeout(() => viewport.classList.remove('fade-in'), 400);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  }

  // --- RENDER DYNAMIC VIEWPORT ---
  function renderItinerary(id) {
    activeItinerary = itineraries.find(it => it.id === id);
    if (!activeItinerary) return;
    activeItineraryId = id;

    // 1. Update Title and Headers
    document.title = activeItinerary.meta.title;
    document.querySelector('meta[name="description"]').setAttribute('content', activeItinerary.meta.description);

    // 2. Generate Hero HTML
    const heroHTML = `
      <section class="hero" id="hero-section">
        <img src="${activeItinerary.hero.background_image}" alt="Hero Background" class="hero-bg-media">
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <div class="hero-quick-links">
            <a href="#map-section" class="hero-quick-link">Route Map</a>
            <a href="#itinerary-section" class="hero-quick-link">Itinerary</a>
            <a href="#booking-section" class="hero-quick-link">Book Now</a>
          </div>
          <h1>
            <span class="hero-subtitle">${activeItinerary.hero.subtitle}</span>
            <span class="hero-title">${activeItinerary.hero.title}</span>
          </h1>
          <p>${activeItinerary.hero.description}</p>
          <div class="cta-group">
            <a href="#booking-section" class="btn btn-primary" id="cta-book">${activeItinerary.hero.cta_book}</a>
            <a href="#itinerary-section" class="btn btn-secondary" id="cta-view">${activeItinerary.hero.cta_view}</a>
          </div>
        </div>
      </section>
    `;

    // 3. Generate Essentials HTML
    const essentialsHTML = `
      <section class="essentials-section">
        <div class="essentials-grid">
          ${activeItinerary.essentials.map(e => `
            <div class="essential-card">
              <div class="essential-icon">${e.icon}</div>
              <div class="essential-info">
                <h4>${e.title}</h4>
                <p>${e.value}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `;

    // 4. Generate Map Deck HTML
    const mapPinsHTML = activeItinerary.map_deck.pins.map(pin => `
      <g class="map-pin" id="${pin.id}" data-day="${pin.day}">
        <circle cx="${pin.cx}" cy="${pin.cy}" r="14"/>
        <text x="${pin.label_x}" y="${pin.label_y}" class="map-pin-label" style="font-size: 16px; font-weight: 700; fill: var(--primary); text-shadow: 0 0 5px #fff;">${pin.label}</text>
      </g>
    `).join('\n');

    const mapStepsHTML = activeItinerary.map_deck.steps.map(step => `
      <div class="route-step" id="${step.id}" data-target="${step.target}">
        <div class="step-marker">${step.marker}</div>
        <div class="step-info">
          <h3>${step.title}</h3>
          <p>${step.description}</p>
        </div>
      </div>
    `).join('\n');

    const mapDeckHTML = `
      <section class="map-deck-section" id="map-section">
        <div class="section-header">
          <h2>${activeItinerary.map_deck.title}</h2>
          <p>${activeItinerary.map_deck.description}</p>
        </div>
        <div class="map-layout">
          <div class="map-canvas-container">
            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
              <image href="${activeItinerary.map_deck.background_image}" x="0" y="0" width="1024" height="1024" />
              <path id="route-path" class="map-route-line" d="${activeItinerary.map_deck.route_path}"/>
              <path id="route-path-active" class="map-route-active" d="${activeItinerary.map_deck.route_path}" style="stroke-width: 8; stroke: var(--accent-gold);"/>
            </svg>
          </div>
          <div class="route-details">
            ${mapStepsHTML}
          </div>
        </div>
      </section>
    `;

    // 5. Generate Daily Breakdown HTML
    const parallaxMap = {};
    (activeItinerary.parallax_sections || []).forEach(p => {
      parallaxMap[p.insert_after_day.toString()] = p;
    });

    const dayCardsHTML = activeItinerary.itinerary.map(dayInfo => {
      const dayStr = dayInfo.day.toString();
      const dayNodeLabel = dayStr.split('-')[0];

      const highlightsHTML = dayInfo.highlights.map(hl => `
        <li class="highlight-item">
          <div class="icon">${hl.icon}</div>
          <div class="details">
            <h5>${hl.title}</h5>
            <p>${hl.description}</p>
          </div>
        </li>
      `).join('\n');

      const stayHTML = dayInfo.stay ? `<div class="stay-badge">${dayInfo.stay}</div>` : '';

      // Render Media
      let mediaHTML = '';
      const media = dayInfo.media || {};
      if (media.type === 'single') {
        const styleAttr = media.style ? ` style="${media.style}"` : '';
        mediaHTML = `
          <div class="day-media">
            <img src="${media.src}" alt="${media.alt}"${styleAttr}>
          </div>
        `;
      } else if (media.type === 'split_grid' && media.images && media.images.length >= 2) {
        mediaHTML = `
          <div class="day-media split-grid">
            <img src="${media.images[0].src}" alt="${media.images[0].alt}">
            <img src="${media.images[1].src}" alt="${media.images[1].alt}">
          </div>
        `;
      } else if (media.type === 'carousel' && media.slides) {
        const isMobile = window.innerWidth <= 768;
        const processedSlides = [];
        media.slides.forEach(s => {
          if (s.type === 'double' && s.images && s.images.length >= 2) {
            if (isMobile) {
              processedSlides.push({
                type: 'single',
                src: s.images[0].src,
                alt: s.images[0].alt,
                title: s.images[0].title,
                caption: s.images[0].caption
              });
              processedSlides.push({
                type: 'single',
                src: s.images[1].src,
                alt: s.images[1].alt,
                title: s.images[1].title,
                caption: s.images[1].caption
              });
            } else {
              processedSlides.push(s);
            }
          } else {
            processedSlides.push(s);
          }
        });

        const slidesHTML = processedSlides.map((s, idx) => {
          const isActive = idx === 0 ? ' active' : '';
          if (s.type === 'double' && s.images && s.images.length >= 2) {
            return `
              <div class="carousel-slide${isActive} double-slide">
                <div class="double-slide-half">
                  <img src="${s.images[0].src}" alt="${s.images[0].alt}">
                  <div class="carousel-caption">
                    <h4>${s.images[0].title}</h4>
                    <p>${s.images[0].caption}</p>
                  </div>
                </div>
                <div class="double-slide-half">
                  <img src="${s.images[1].src}" alt="${s.images[1].alt}">
                  <div class="carousel-caption">
                    <h4>${s.images[1].title}</h4>
                    <p>${s.images[1].caption}</p>
                  </div>
                </div>
              </div>
            `;
          } else {
            return `
              <div class="carousel-slide${isActive} single-slide">
                <img src="${s.src}" alt="${s.alt}">
                <div class="carousel-caption">
                  <h4>${s.title}</h4>
                  <p>${s.caption}</p>
                </div>
              </div>
            `;
          }
        }).join('\n');

        mediaHTML = `
          <div class="day-media carousel-container" id="${media.id}">
            ${slidesHTML}
            <button class="carousel-btn prev">&lt;</button>
            <button class="carousel-btn next">&gt;</button>
          </div>
        `;
      } else if (media.type === 'gallery_3col' && media.items) {
        const itemsHTML = media.items.map(item => `
          <div class="gallery-item">
            <img src="${item.src}" alt="${item.alt}">
            <div class="gallery-overlay">
              <h5>${item.title}</h5>
            </div>
          </div>
        `).join('\n');

        mediaHTML = `
          <div class="day-media gallery-3col">
            ${itemsHTML}
          </div>
        `;
      }

      // Base Daily Card HTML
      let baseCard = `
        <div class="day-card-container" id="day-${dayStr}">
          <div class="timeline-node">${dayNodeLabel}</div>
          <div class="day-card">
            <div class="day-header">
              <h3>DAY ${dayStr} | ${dayInfo.title}</h3>
              <div class="tagline">${dayInfo.tagline}</div>
            </div>
            <div class="day-body">
              <div class="vibe-box">
                <h4>${dayInfo.vibe_title || 'The Vibe'}</h4>
                <p>${dayInfo.vibe_text}</p>
              </div>
              <div class="highlights-title">📋 Today's Plan</div>
              <ul class="highlight-list">
                ${highlightsHTML}
              </ul>
              ${stayHTML}
              ${mediaHTML}
            </div>
          </div>
        </div>
      `;

      // Check if we should append a parallax section after this card
      if (parallaxMap[dayStr]) {
        const p = parallaxMap[dayStr];
        baseCard += `
          <section class="parallax-container" style="background-image: url('${p.background_image}');">
            <div class="parallax-content">
              <h2>${p.title}</h2>
              <p>${p.subtitle}</p>
            </div>
          </section>
        `;
      }

      return baseCard;
    }).join('\n');

    const timelineHTML = `
      <section class="timeline-section" id="itinerary-section">
        <div class="section-header">
          <h2>🗺️ THE DAILY BREAKDOWN</h2>
          <p>Follow your customized day-by-day travel breakdown.</p>
        </div>
        <div class="timeline-container">
          <div class="timeline-line"></div>
          ${dayCardsHTML}
        </div>
      </section>
    `;

    // 6. Generate Booking HTML
    const dateOptionsHTML = activeItinerary.booking.dates.map(d => `
      <option value="${d.id}">${d.label}</option>
    `).join('\n');

    const cabinOptionsHTML = activeItinerary.booking.cabins.map(c => `
      <option value="${c.id}" data-addon="${c.addon}">${c.label}</option>
    `).join('\n');

    const bookingHTML = `
      <section class="booking-section" id="booking-section">
        <div class="booking-container">
          <div class="booking-info">
            <h2>${activeItinerary.booking.title}</h2>
            <p>${activeItinerary.booking.description}</p>
            <ul class="booking-bullets">
              ${activeItinerary.booking.bullets.map(b => `<li><span>✓</span> ${b}</li>`).join('')}
            </ul>
          </div>
          <div class="booking-form-side">
            <form id="booking-calculator">
              <div class="form-group">
                <label for="travel-date">Select Travel Date</label>
                <select id="travel-date" required>
                  ${dateOptionsHTML}
                </select>
              </div>
              <div class="form-group">
                <label for="travelers">Number of Travelers</label>
                <input type="number" id="travelers" min="1" max="10" value="2" required>
              </div>
              <div class="form-group">
                <label for="cabin-style">Cruise Cabin Type</label>
                <select id="cabin-style">
                  ${cabinOptionsHTML}
                </select>
              </div>
              <div class="form-group">
                <label for="single-supplement">Single Room Supplement</label>
                <select id="single-supplement">
                  <option value="no">${activeItinerary.booking.single_supplement.no_label}</option>
                  <option value="yes">${activeItinerary.booking.single_supplement.yes_label}</option>
                </select>
              </div>
              
              <div class="price-display-box">
                <div class="price-label">
                  <h4>Estimated Price</h4>
                  <p>Includes flights, hotels, rail & cruise</p>
                </div>
                <div class="price-val" id="price-total">$0</div>
              </div>
              
              <button type="submit" class="btn btn-primary" style="width: 100%; font-size: 1.1rem; padding: 1.2rem;">Book My Journey</button>
            </form>
          </div>
        </div>
      </section>
    `;

    // 7. Generate Value Insights HTML
    const valueHTML = `
      <section class="value-insights">
        <div class="section-header" style="margin-bottom: 3rem;">
          <h2>${activeItinerary.value_insights.title}</h2>
          <p>${activeItinerary.value_insights.description}</p>
        </div>
        <div class="value-grid">
          <div class="value-box">
            <h3>${activeItinerary.value_insights.inclusions_title}</h3>
            <ul>
              ${activeItinerary.value_insights.inclusions.map(inc => `<li>${inc}</li>`).join('')}
            </ul>
          </div>
          <div class="value-box excludes">
            <h3>${activeItinerary.value_insights.exclusions_title}</h3>
            <ul>
              ${activeItinerary.value_insights.exclusions.map(exc => `<li>${exc}</li>`).join('')}
            </ul>
          </div>
        </div>
      </section>
    `;

    // 8. Generate Dynamic Footer Content
    const footerHTML = `
      <div class="footer-info">
        <p>${activeItinerary.footer.description}</p>
        <p>
          <strong>📍 Address:</strong> ${activeItinerary.footer.address}<br>
          <strong>📞 Telephone:</strong> ${activeItinerary.footer.phone}<br>
          <strong>✉️ Email:</strong> ${activeItinerary.footer.email}<br>
          <strong>🌐 Web:</strong> <a href="http://${activeItinerary.footer.web}" style="color: var(--accent-gold); text-decoration: none;">${activeItinerary.footer.web}</a>
        </p>
      </div>
      <div class="footer-contact-img">
        <img src="${activeItinerary.footer.contact_image}" alt="Office Vibe">
      </div>
    `;

    // Write all into viewports
    viewport.innerHTML = heroHTML + essentialsHTML + mapDeckHTML + timelineHTML + bookingHTML + valueHTML;
    footerContent.innerHTML = footerHTML;

    // 9. Reinitialize Interactive Components
    initSPAInteraction();
  }

  // --- REINITIALIZE CAROUSELS, MAPS, CALCULATORS & SCROLLSPY ---
  function initSPAInteraction() {
    if (!activeItinerary) return;

    // A. Init carousels
    activeItinerary.itinerary.forEach(dayInfo => {
      const media = dayInfo.media || {};
      if (media.type === 'carousel' && media.id) {
        initCarousel(media.id);
      }
    });

    // B. Animate days on scroll
    const dayCards = document.querySelectorAll('.day-card-container');
    const scrollOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const dayObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, scrollOptions);

    dayCards.forEach(card => dayObserver.observe(card));

    // C. SVG path length drawing
    const path = document.getElementById('route-path-active');
    const pins = document.querySelectorAll('.map-pin');
    const routeSteps = document.querySelectorAll('.route-step');
    let pathLength = 0;

    if (path) {
      pathLength = path.getTotalLength();
      path.style.strokeDasharray = pathLength;
      path.style.strokeDashoffset = pathLength;
    }

    function updateRouteDraw(percent) {
      if (!path) return;
      const offset = pathLength - (pathLength * percent);
      path.style.strokeDashoffset = offset;
    }

    function setActiveState(dayNum) {
      // Reset active states
      pins.forEach(pin => pin.classList.remove('active'));
      routeSteps.forEach(step => step.classList.remove('active'));

      // Find best active state based on active_states config
      const activeStates = activeItinerary.map_deck.active_states;
      let activeState = activeStates[activeStates.length - 1]; // Default to final
      for (let i = 0; i < activeStates.length; i++) {
        if (dayNum <= activeStates[i].max_day) {
          activeState = activeStates[i];
          break;
        }
      }

      if (activeState) {
        activeState.pins.forEach(pinId => {
          const el = document.getElementById(pinId);
          if (el) el.classList.add('active');
        });
        if (activeState.step_id) {
          const el = document.getElementById(activeState.step_id);
          if (el) el.classList.add('active');
        }
        updateRouteDraw(activeState.route_percent);
      }
    }

    // SVG Pin clicks
    pins.forEach(pin => {
      pin.addEventListener('click', () => {
        const targetDay = pin.getAttribute('data-day');
        setActiveState(parseInt(targetDay));
        const targetEl = document.getElementById(`day-${targetDay}`);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    });

    // Step cards clicks
    routeSteps.forEach(step => {
      step.addEventListener('click', () => {
        const targetId = step.getAttribute('data-target');
        const dayNum = parseInt(targetId.replace('day-', ''));
        setActiveState(dayNum);
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    });

    // Scrollspy to draw route
    window.addEventListener('scroll', () => {
      let currentDay = 1;
      dayCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.4) {
          const cleanId = card.id.replace('day-', '');
          const dayVal = parseInt(cleanId.split('-')[0]);
          if (!isNaN(dayVal)) {
            currentDay = dayVal;
          }
        }
      });
      setActiveState(currentDay);
    });

    // Initial state draw
    setActiveState(1);

    // D. Live Price Calculator
    const basePrice = activeItinerary.booking.base_price;
    const calcForm = document.getElementById('booking-calculator');
    const travelersInput = document.getElementById('travelers');
    const cabinSelect = document.getElementById('cabin-style');
    const singleSelect = document.getElementById('single-supplement');
    const travelDateSelect = document.getElementById('travel-date');
    const priceDisplay = document.getElementById('price-total');

    function calculateQuote() {
      const numTravelers = parseInt(travelersInput.value) || 1;
      const dateVal = travelDateSelect.value;
      
      const dateOption = activeItinerary.booking.dates.find(d => d.id === dateVal);
      const dateMultiplier = dateOption ? dateOption.multiplier : 1.0;

      const cabinOption = cabinSelect.options[cabinSelect.selectedIndex];
      const cabinAddon = cabinOption ? parseFloat(cabinOption.getAttribute('data-addon')) : 0;

      let supplementAddon = 0;
      if (singleSelect.value === 'yes') {
        supplementAddon = activeItinerary.booking.single_supplement.addon;
      }

      const calculatedBase = basePrice * dateMultiplier;
      const pricePerPerson = calculatedBase + cabinAddon + supplementAddon;
      const totalPrice = Math.round(pricePerPerson * numTravelers);

      priceDisplay.textContent = `$${totalPrice.toLocaleString()}`;
    }

    travelersInput.addEventListener('input', calculateQuote);
    cabinSelect.addEventListener('change', calculateQuote);
    singleSelect.addEventListener('change', calculateQuote);
    travelDateSelect.addEventListener('change', calculateQuote);

    // Run first quote calculate
    calculateQuote();

    // Submit handler
    calcForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert(`Thank you for booking! We have reserved your journey: "${activeItinerary.hero.title}". A representative from NordisTravel will contact you shortly.`);
    });

    // E. Hero quick links smooth scrolls
    document.querySelectorAll('.hero-quick-link').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          window.scrollTo({
            top: targetEl.offsetTop - 80, // offset sticky header height
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // --- COUNTRY FILTERING LOGIC ---
  function handleCountryFilterChange() {
    const checkedCountries = Array.from(document.querySelectorAll('.country-filter:checked')).map(cb => cb.value);
    if (checkedCountries.length === 0) return;

    let bestItinerary = null;
    let bestScore = -1;

    itineraries.forEach(it => {
      let score = 0;
      const itCountries = it.countries || [];
      checkedCountries.forEach(c => {
        if (itCountries.includes(c)) score++;
      });
      // Prioritize itineraries that have a higher percentage of the checked countries
      if (score > bestScore) {
        bestScore = score;
        bestItinerary = it;
      }
    });

    if (bestItinerary && bestItinerary.id !== activeItineraryId) {
      switchItinerary(bestItinerary.id);
    }
  }

  document.querySelectorAll('.country-filter').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const val = checkbox.value;
      const isChecked = checkbox.checked;
      document.querySelectorAll(`.country-filter[value="${val}"]`).forEach(cb => {
        cb.checked = isChecked;
      });
      handleCountryFilterChange();
    });
  });

  // --- CAROUSEL UTILITY ---
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

    nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));
    prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));

    // Auto play every 6s
    let autoPlayInterval = setInterval(() => showSlide(currentIndex + 1), 6000);
    container.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
    container.addEventListener('mouseleave', () => {
      autoPlayInterval = setInterval(() => showSlide(currentIndex + 1), 6000);
    });
  }

  // Initialize dropdown toggle listeners for mouse triggers
  const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');
  dropdownTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      // Toggles dropdown
      const menu = trigger.nextElementSibling;
      if (menu) {
        menu.classList.toggle('show');
      }
    });
  });

  // Close dropdowns when clicking outside
  window.addEventListener('click', (e) => {
    if (!e.target.matches('.dropdown-trigger') && !e.target.closest('.dropdown-menu')) {
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.classList.remove('show');
      });
    }
  });

  // Mobile Burger Menu Toggle
  const burgerBtn = document.getElementById('burger-btn');
  const navLinks = document.querySelector('.nav-links');

  if (burgerBtn && navLinks) {
    burgerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      burgerBtn.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    // Close when clicking a link inside nav-links (using delegation for dynamic links)
    navLinks.addEventListener('click', (e) => {
      const targetLink = e.target.closest('a');
      if (targetLink && !targetLink.classList.contains('dropdown-trigger')) {
        burgerBtn.classList.remove('open');
        navLinks.classList.remove('open');
      }
    });

    // Close when clicking outside
    window.addEventListener('click', (e) => {
      if (!burgerBtn.contains(e.target) && !navLinks.contains(e.target)) {
        burgerBtn.classList.remove('open');
        navLinks.classList.remove('open');
      }
    });
  }

  // Book a Meeting Modal Logic
  const bookMeetingBtn = document.getElementById('book-meeting-btn');
  const meetingModal = document.getElementById('meeting-modal');
  const closeModalBtn = document.getElementById('close-modal');

  if (bookMeetingBtn && meetingModal) {
    bookMeetingBtn.addEventListener('click', (e) => {
      e.preventDefault();
      meetingModal.classList.add('show');
    });
  }

  if (closeModalBtn && meetingModal) {
    closeModalBtn.addEventListener('click', () => {
      meetingModal.classList.remove('show');
    });
  }

  window.addEventListener('click', (e) => {
    if (meetingModal && e.target === meetingModal) {
      meetingModal.classList.remove('show');
    }
  });

  // Load Itineraries menu and default view
  initItinerariesMenu();
  if (itineraries.length > 0) {
    // Default to first itinerary
    renderItinerary(itineraries[0].id);
    syncCheckboxesToItinerary(itineraries[0]);
  }

  let lastWidth = window.innerWidth;
  window.addEventListener('resize', () => {
    const currentWidth = window.innerWidth;
    if ((lastWidth > 768 && currentWidth <= 768) || (lastWidth <= 768 && currentWidth > 768)) {
      if (activeItineraryId) {
        renderItinerary(activeItineraryId);
      }
    }
    lastWidth = currentWidth;
  });
});
