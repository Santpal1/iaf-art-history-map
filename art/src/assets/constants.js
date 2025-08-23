// constants.js

export const LOCATIONS = [
    {
        id: "ajanta",
        name: "Ajanta Caves",
        coords: [20.5519, 75.7033],
        state: "Maharashtra",
        eras: ["Ancient", "Gupta", "Buddhist"],
        movement: "Gupta-era Buddhist mural tradition",
        image: "https://placehold.co/640x360?text=Ajanta+Caves",
        blurb:
            "Rock-cut Buddhist cave monuments famed for vibrant murals and narrative frescoes like the Bodhisattva Padmapani.",
        highlights: ["Murals & frescoes", "Narrative panels", "UNESCO World Heritage"]
    },
    {
        id: "ellora",
        name: "Ellora Caves",
        coords: [20.025, 75.179],
        state: "Maharashtra",
        eras: ["Ancient", "Medieval", "Buddhist", "Hindu", "Jain"],
        movement: "Rock-cut temple architecture",
        image: "https://placehold.co/640x360?text=Ellora+Caves",
        blurb:
            "34 rock-cut monasteries and temples of Buddhist, Hindu, and Jain traditions, including the magnificent Kailasa temple.",
        highlights: ["Kailasa Temple", "Multifaith heritage", "Sculptural mastery"]
    },
    {
        id: "khajuraho",
        name: "Khajuraho Temples",
        coords: [24.8318, 79.9199],
        state: "Madhya Pradesh",
        eras: ["Medieval", "Chandela Dynasty"],
        movement: "Nagara-style temple architecture",
        image: "https://placehold.co/640x360?text=Khajuraho+Temples",
        blurb:
            "Famed for intricate Nagara-style temples and sculptures blending spirituality, symbolism, and eroticism.",
        highlights: ["Nagara style", "Erotic sculptures", "UNESCO World Heritage"]
    },
    {
        id: "konark",
        name: "Konark Sun Temple",
        coords: [19.8876, 86.0945],
        state: "Odisha",
        eras: ["Medieval", "Eastern Ganga Dynasty"],
        movement: "Kalinga architecture",
        image: "https://placehold.co/640x360?text=Konark+Sun+Temple",
        blurb:
            "13th-century temple shaped like a colossal chariot dedicated to the Sun God, adorned with exquisite stone carvings.",
        highlights: ["Stone chariot", "Erotic sculptures", "UNESCO World Heritage"]
    },
    {
        id: "tanjore",
        name: "Brihadeeswarar Temple (Thanjavur)",
        coords: [10.7847, 79.131],
        state: "Tamil Nadu",
        eras: ["Medieval", "Chola Dynasty"],
        movement: "Dravidian temple architecture",
        image: "https://placehold.co/640x360?text=Brihadeeswarar+Temple",
        blurb:
            "A grand temple built by Raja Raja Chola I, known for its towering vimana and bronze sculptures of Chola art.",
        highlights: ["Dravidian architecture", "Chola bronzes", "UNESCO World Heritage"]
    },
    {
        id: "hampi",
        name: "Hampi",
        coords: [15.335, 76.46],
        state: "Karnataka",
        eras: ["Medieval", "Vijayanagara Empire"],
        movement: "Vijayanagara architecture",
        image: "https://placehold.co/640x360?text=Hampi",
        blurb:
            "The capital of the Vijayanagara Empire, featuring a vast complex of temples, palaces, and markets.",
        highlights: ["Virupaksha Temple", "Stone chariot", "UNESCO World Heritage"]
    },
    {
        id: "mughal-miniatures",
        name: "Mughal Miniature Painting Centers (Agra, Delhi, Fatehpur Sikri)",
        coords: [27.1767, 78.0081], // Approx center (Agra)
        state: "Uttar Pradesh / Delhi",
        eras: ["Mughal Era"],
        movement: "Mughal miniature painting",
        image: "https://placehold.co/640x360?text=Mughal+Miniatures",
        blurb:
            "Flourished under emperors Akbar, Jahangir, and Shah Jahan, combining Persian techniques with Indian themes.",
        highlights: ["Akbarnama", "Naturalism in painting", "Persian-Indian fusion"]
    },
    {
        id: "shantiniketan",
        name: "Shantiniketan (Kala Bhavana)",
        coords: [23.6776, 87.6827],
        state: "West Bengal",
        eras: ["Modern", "Bengal School"],
        movement: "Bengal School & Santiniketan modernism",
        image: "https://placehold.co/640x360?text=Shantiniketan",
        blurb:
            "Hub of the Bengal School and Santiniketan modernism led by Nandalal Bose, Ramkinkar Baij, and Rabindranath Tagore.",
        highlights: ["Tagore legacy", "Kala Bhavana", "Modern Indian art"]
    },
    {
        id: "cholamandal",
        name: "Cholamandal Artists’ Village",
        coords: [12.897, 80.2276],
        state: "Tamil Nadu",
        eras: ["Contemporary"],
        movement: "Contemporary art cooperative",
        image: "https://placehold.co/640x360?text=Cholamandal+Artists+Village",
        blurb:
            "Founded in 1966 near Chennai, India’s largest artists’ commune fostering modernist and contemporary art.",
        highlights: ["Artists’ commune", "Contemporary art", "Self-sustained model"]
    },
    {
        id: "kochi-biennale",
        name: "Kochi-Muziris Biennale",
        coords: [9.9312, 76.2673],
        state: "Kerala",
        eras: ["Contemporary"],
        movement: "International contemporary art biennale",
        image: "https://placehold.co/640x360?text=Kochi+Biennale",
        blurb:
            "India’s biggest contemporary art festival showcasing installations, performances, and new media art.",
        highlights: ["Contemporary art", "Global collaboration", "Cultural festival"]
    },
    {
        id: "sanchi",
        name: "Sanchi Stupa",
        coords: [23.4793, 77.7397],
        state: "Madhya Pradesh",
        eras: ["Ancient", "Maurya", "Buddhist"],
        movement: "Buddhist stupas and gateways",
        image: "https://placehold.co/640x360?text=Sanchi+Stupa",
        blurb:
            "Commissioned by Emperor Ashoka, Sanchi’s stupas are among the oldest stone structures in India, with intricately carved gateways narrating Jataka tales.",
        highlights: ["Ashokan legacy", "Jataka tales carvings", "UNESCO World Heritage"]
    },
    {
        id: "amaravati",
        name: "Amaravati Stupa",
        coords: [16.5721, 80.3575],
        state: "Andhra Pradesh",
        eras: ["Ancient", "Satavahana", "Buddhist"],
        movement: "Amaravati School of sculpture",
        image: "https://placehold.co/640x360?text=Amaravati+Stupa",
        blurb:
            "Center of the Amaravati School, known for detailed narrative reliefs and influence on Southeast Asian Buddhist art.",
        highlights: ["Narrative reliefs", "White marble sculptures", "Buddhist heritage"]
    },
    {
        id: "badami",
        name: "Badami Cave Temples",
        coords: [15.9149, 75.6768],
        state: "Karnataka",
        eras: ["Medieval", "Chalukya Dynasty"],
        movement: "Rock-cut Hindu and Jain temples",
        image: "https://placehold.co/640x360?text=Badami+Caves",
        blurb:
            "Carved into sandstone cliffs, Badami caves feature Hindu, Jain, and Buddhist deities with early Chalukyan art styles.",
        highlights: ["Chalukyan art", "Sandstone carvings", "Rock-cut shrines"]
    },
    {
        id: "mahabalipuram",
        name: "Mahabalipuram (Mamallapuram)",
        coords: [12.6208, 80.192],
        state: "Tamil Nadu",
        eras: ["Medieval", "Pallava Dynasty"],
        movement: "Dravidian rock-cut architecture",
        image: "https://placehold.co/640x360?text=Mahabalipuram",
        blurb:
            "Famed for shore temples, rock-cut caves, and bas-reliefs like the Descent of the Ganges, showcasing Pallava artistry.",
        highlights: ["Shore Temple", "Bas-relief art", "UNESCO World Heritage"]
    },
    {
        id: "baroda",
        name: "Baroda (Vadodara) MS University Fine Arts Faculty",
        coords: [22.3072, 73.1812],
        state: "Gujarat",
        eras: ["Modern", "Contemporary"],
        movement: "Baroda Group of artists",
        image: "https://placehold.co/640x360?text=Baroda+Fine+Arts",
        blurb:
            "A post-independence hub of Indian modern art, nurturing the Baroda Group including Gulammohammed Sheikh, Bhupen Khakhar, and Jyoti Bhatt.",
        highlights: ["Modern art hub", "Baroda Group", "Art education center"]
    },
    {
        id: "lucknow",
        name: "Lucknow (Awadhi Miniature Painting)",
        coords: [26.8467, 80.9462],
        state: "Uttar Pradesh",
        eras: ["Medieval", "Nawabi Period"],
        movement: "Awadhi miniature painting",
        image: "https://placehold.co/640x360?text=Awadhi+Miniatures",
        blurb:
            "A distinct school of painting under the Nawabs of Awadh, blending Mughal, Persian, and local aesthetics with refined detailing.",
        highlights: ["Miniatures", "Awadhi culture", "Persian influence"]
    },
    {
        id: "jaipur",
        name: "Jaipur (Rajput Painting School)",
        coords: [26.9124, 75.7873],
        state: "Rajasthan",
        eras: ["Medieval", "Rajput Era"],
        movement: "Rajput miniature painting",
        image: "https://placehold.co/640x360?text=Jaipur+Paintings",
        blurb:
            "Rajput courts of Jaipur produced vibrant miniature paintings depicting epics, court scenes, and local traditions.",
        highlights: ["Rajput style", "Miniature paintings", "Court patronage"]
    },
    {
        id: "bishnupur",
        name: "Bishnupur Terracotta Temples",
        coords: [23.071, 87.319],
        state: "West Bengal",
        eras: ["Medieval", "Malla Dynasty"],
        movement: "Terracotta temple architecture",
        image: "https://placehold.co/640x360?text=Bishnupur+Terracotta",
        blurb:
            "Known for terracotta temples with intricate panels depicting scenes from the Ramayana, Mahabharata, and Vaishnava traditions.",
        highlights: ["Terracotta panels", "Vaishnava art", "Temple architecture"]
    },
    {
        id: "srinigar",
        name: "Kashmir (Medieval Buddhist and Hindu Art)",
        coords: [34.0837, 74.7973],
        state: "Jammu & Kashmir",
        eras: ["Ancient", "Medieval"],
        movement: "Kashmiri Buddhist and Shaivite sculpture",
        image: "https://placehold.co/640x360?text=Kashmir+Art",
        blurb:
            "Kashmir’s art blended Buddhist, Shaivite, and Central Asian influences, evident in its stone sculptures and manuscripts.",
        highlights: ["Stone sculpture", "Central Asian influence", "Shaivite art"]
    },
    {
        id: "elephanta",
        name: "Elephanta Caves",
        coords: [18.9633, 72.9311],
        state: "Maharashtra",
        eras: ["Medieval", "Gupta", "Hindu"],
        movement: "Rock-cut Shaivite cave art",
        image: "https://placehold.co/640x360?text=Elephanta+Caves",
        blurb:
            "Famed for the colossal Trimurti Sadashiva sculpture, Elephanta represents Gupta-inspired rock-cut Shaivite art.",
        highlights: ["Trimurti Sadashiva", "Rock-cut shrines", "UNESCO World Heritage"]
    }
];
