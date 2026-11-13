/* Generated from the approved design copy. Draft service copy awaits Trensleek approval. */
export type Service = {
  key: string; slug: string; name: string; short: string; num: string; description: string;
  cardImage: string; cardImageHome: string; cardAlt: string; heroImage: string; heroAlt: string;
  titleA: string; titleB: string; lead: string; overviewTitle: string; overview1: string; overview2: string;
  band: { image: string; alt: string }[]; offers: { title: string; text: string }[]; whyTitle: string; scopeToConfirm: boolean;
};

export const SERVICES: Service[] = [
  {
    "key": "LocalFlights",
    "slug": "local-flight-ticketing",
    "name": "Local Flight Ticketing",
    "short": "Local Flights",
    "num": "01",
    "description": "Domestic flight tickets for journeys within Nigeria, with personal assistance from first enquiry to ticket.",
    "cardImage": "local-hero",
    "cardImageHome": "local-hero",
    "cardAlt": "A commercial airliner parked on the apron, viewed head-on",
    "heroImage": "local-hero",
    "heroAlt": "A commercial airliner on the apron, viewed head-on from the taxiway",
    "titleA": "Local Flight",
    "titleB": "Ticketing",
    "lead": "Getting around Nigeria should be simple. Tell us where and when, and we will handle the ticketing.",
    "overviewTitle": "Domestic flights, sorted.",
    "overview1": "We book domestic flight tickets across Nigeria for individuals, families and organisations, at fair prices and with a real person handling every step.",
    "overview2": "Share your route and dates. We'll come back with suitable options and take care of the ticketing once you decide.",
    "band": [
      {
        "image": "cabin",
        "alt": "The aisle of a passenger cabin with travellers seated before departure"
      },
      {
        "image": "traveller-lounge",
        "alt": "A traveller waiting at the gate with a plane taking off outside"
      }
    ],
    "offers": [
      {
        "title": "Ticket booking",
        "text": "One-way and return tickets on domestic routes, booked on your behalf."
      },
      {
        "title": "Fare and schedule options",
        "text": "We compare available fares and times so you can choose what suits your budget."
      },
      {
        "title": "Changes and rebooking",
        "text": "Help with date changes, rebooking and cancellations, subject to airline rules."
      },
      {
        "title": "Business and group travel",
        "text": "Ticketing for staff, teams and groups travelling together."
      }
    ],
    "whyTitle": "Personal service at pocket-friendly prices, on every domestic trip.",
    "scopeToConfirm": false
  },
  {
    "key": "InternationalFlights",
    "slug": "international-flight-ticketing",
    "name": "International Flight Ticketing",
    "short": "International Flights",
    "num": "02",
    "description": "Flight tickets for international journeys, with a dedicated person to guide you as you plan.",
    "cardImage": "intl-hero",
    "cardImageHome": "intl-hero",
    "cardAlt": "A traveller reading the departures board in a busy international terminal",
    "heroImage": "intl-terminal",
    "heroAlt": "A wide-body long-haul airliner at an international terminal gate at sunset, with jet bridges and ground crew",
    "titleA": "International Flight",
    "titleB": "Ticketing",
    "lead": "International travel has more moving parts. We help you get the right ticket, with someone to guide you as you plan.",
    "overviewTitle": "International travel, made clear.",
    "overview1": "We book international flight tickets for business, study, family and leisure travel, and guide you through the details along the way.",
    "overview2": "Tell us where you're going and when. We'll find suitable routes and fares and handle the ticketing for you.",
    "band": [
      {
        "image": "airliner",
        "alt": "A wide-body airliner climbing into a clear blue sky"
      },
      {
        "image": "wing-pink",
        "alt": "The wing of an aircraft above a sea of pink clouds"
      }
    ],
    "offers": [
      {
        "title": "International tickets",
        "text": "One-way, return and multi-city tickets to destinations worldwide."
      },
      {
        "title": "Route and fare advice",
        "text": "Clear options on routes, connections and fares, so you can choose with confidence."
      },
      {
        "title": "Before-you-fly guidance",
        "text": "Pointers on what to check before travel, such as passport validity and baggage rules."
      },
      {
        "title": "Changes and support",
        "text": "Help with changes and rebooking, subject to airline rules."
      }
    ],
    "whyTitle": "Confident international travel, with a team that answers when you call.",
    "scopeToConfirm": false
  },
  {
    "key": "PrivateJet",
    "slug": "private-jet-hire",
    "name": "Private Jet Rental/Hire",
    "short": "Private Jet Hire",
    "num": "03",
    "description": "Private jet rental and hire for individuals and organisations who value flexibility and privacy.",
    "cardImage": "jet-hero",
    "cardImageHome": "jet-stairs",
    "cardAlt": "A private jet on the tarmac at sunset",
    "heroImage": "jet-hero",
    "heroAlt": "A private jet on the tarmac silhouetted against a golden sunset",
    "titleA": "Private Jet",
    "titleB": "Rental & Hire",
    "lead": "When schedules, privacy or comfort matter most, travel on your own terms.",
    "overviewTitle": "Private travel, on your schedule.",
    "overview1": "We arrange private jet charter for executives, families, groups and organisations who need flexibility, privacy and comfort.",
    "overview2": "Share your route, dates and number of passengers. We'll source suitable aircraft options and handle the arrangements in confidence.",
    "band": [
      {
        "image": "jet-stairs",
        "alt": "A white private jet on the apron with its airstair door open"
      }
    ],
    "offers": [
      {
        "title": "Domestic and international charter",
        "text": "One-way and return private flights within Nigeria and beyond."
      },
      {
        "title": "Aircraft to suit your trip",
        "text": "Options matched to your passenger numbers, route and preferences."
      },
      {
        "title": "Flexible scheduling",
        "text": "Departure times planned around your diary, not a timetable."
      },
      {
        "title": "Complete discretion",
        "text": "Your travel details handled with full confidentiality."
      }
    ],
    "whyTitle": "Discretion comes as standard. Confidentiality is one of our core values.",
    "scopeToConfirm": false
  },
  {
    "key": "EscortServices",
    "slug": "escort-services",
    "name": "Escort Services",
    "short": "Escort Services",
    "num": "04",
    "description": "Personal assistance for travellers who'd like support from check-in to arrival.",
    "cardImage": "silhouette",
    "cardImageHome": "silhouette",
    "cardAlt": "A traveller with a suitcase at a terminal window, watching a plane pass",
    "heroImage": "window-sunset",
    "heroAlt": "The view from an aircraft window at sunset",
    "titleA": "Escort",
    "titleB": "Services",
    "lead": "Personal assistance for travellers who'd like someone by their side, from check-in to arrival.",
    "overviewTitle": "Support at every step of the journey.",
    "overview1": "Our escort service provides personal travel assistance for anyone who would value extra support, including first-time flyers, older travellers and VIP guests.",
    "overview2": "A member of our team can meet you, help with airport formalities and stay with you until you're safely on your way.",
    "band": [
      {
        "image": "traveller-lounge",
        "alt": "A traveller waiting at the departure gate as a plane takes off outside"
      },
      {
        "image": "handshake",
        "alt": "Two professionals greeting each other with a handshake"
      }
    ],
    "offers": [
      {
        "title": "Airport meet and assist",
        "text": "We meet you at the airport and help you through check-in and boarding."
      },
      {
        "title": "Accompanied travel",
        "text": "A team member can travel with you where extra support is needed."
      },
      {
        "title": "Arrival assistance",
        "text": "Help on arrival, from meeting you to coordinating onward transport."
      },
      {
        "title": "VIP and protocol support",
        "text": "Discreet, attentive assistance for executives and VIP guests."
      }
    ],
    "whyTitle": "Whatever the request, our values stay the same.",
    "scopeToConfirm": true
  },
  {
    "key": "HotelReservation",
    "slug": "hotel-reservation",
    "name": "Hotel Reservation",
    "short": "Hotel Reservation",
    "num": "05",
    "description": "Hotel reservations arranged on your behalf, matched to your trip and your budget.",
    "cardImage": "hotel-suite",
    "cardImageHome": "hotel-suite",
    "cardAlt": "A warmly lit hotel suite with a made bed and seating area",
    "heroImage": "hotel-hero",
    "heroAlt": "A resort terrace with a curved pool and sun loungers at golden hour",
    "titleA": "Hotel",
    "titleB": "Reservation",
    "lead": "The right room makes the whole trip. We arrange hotel reservations to suit your plans and your budget.",
    "overviewTitle": "Stays that suit your trip.",
    "overview1": "We book hotels for business trips, holidays and events, in Nigeria and abroad, matched to your location, dates and budget.",
    "overview2": "Tell us where you're staying and what matters to you. We'll suggest suitable options and confirm your reservation.",
    "band": [
      {
        "image": "hotel-room",
        "alt": "A calm hotel room with a dark timber headboard and soft lighting"
      },
      {
        "image": "resort-pool",
        "alt": "Thatched resort villas around a turquoise pool, framed by palms"
      }
    ],
    "offers": [
      {
        "title": "Hotel bookings",
        "text": "Rooms reserved for individuals, families and groups."
      },
      {
        "title": "Options for every budget",
        "text": "From practical business stays to luxury hotels and resorts."
      },
      {
        "title": "Flights and stays together",
        "text": "Combine your hotel with your flight, arranged by one team."
      },
      {
        "title": "Group and event accommodation",
        "text": "Room blocks for teams, conferences and special events."
      }
    ],
    "whyTitle": "Stays chosen around you, not around a booking engine.",
    "scopeToConfirm": false
  },
  {
    "key": "TravelConsultancy",
    "slug": "travel-consultancy",
    "name": "Travel Consultancy",
    "short": "Travel Consultancy",
    "num": "06",
    "description": "Personalised travel advice to help you plan with clarity and confidence.",
    "cardImage": "consult-hero",
    "cardImageHome": "consult-hero",
    "cardAlt": "Two people planning a trip over a map and printed itinerary",
    "heroImage": "consult-hero",
    "heroAlt": "Two people planning a trip together, marking up a printed itinerary over a map",
    "titleA": "Travel",
    "titleB": "Consultancy",
    "lead": "Not sure where to start? Talk it through with people who plan travel every day.",
    "overviewTitle": "Expert advice before you go.",
    "overview1": "Our travel consultancy helps individuals and organisations plan with confidence, from choosing destinations and routes to managing regular business travel.",
    "overview2": "Start a conversation on WhatsApp or through the enquiry form and tell us what you're planning.",
    "band": [
      {
        "image": "flatlay",
        "alt": "A travel planning flat lay with a map, notebook, camera and guidebooks"
      },
      {
        "image": "map-pin",
        "alt": "A hand placing red pins on a printed map"
      }
    ],
    "offers": [
      {
        "title": "Trip planning",
        "text": "Advice on destinations, routes, timing and budget."
      },
      {
        "title": "Itinerary building",
        "text": "A clear, practical plan for multi-stop or complex trips."
      },
      {
        "title": "Corporate travel management",
        "text": "Ongoing support for organisations with regular staff travel."
      },
      {
        "title": "Pre-travel guidance",
        "text": "What to check before you go, from documents to baggage."
      }
    ],
    "whyTitle": "Personalised, sustainable travel experiences. That is our mission.",
    "scopeToConfirm": false
  }
];

export const serviceBySlug = (slug: string) => SERVICES.find((s) => s.slug === slug);
