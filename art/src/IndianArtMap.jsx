// App.jsx
import React, { useState, useEffect, useRef } from 'react';
import { MapPin, X, Calendar, Palette, Users, Image, Info } from 'lucide-react';
import './App.css';

    const IndianArtMap = () => {
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [map, setMap] = useState(null);
    const [markers, setMarkers] = useState([]);
    const mapRef = useRef(null);

    const artLocations = [
        {
            id: 1,
            name: "Ajanta Caves",
            region: "Maharashtra",
            coordinates: [20.5519, 75.7033], // [lat, lng]
            period: "2nd Century BCE - 6th Century CE",
            artStyle: "Buddhist Cave Art",
            description: "Ancient Buddhist cave monuments famous for their exquisite murals and sculptures depicting the life of Buddha and Jataka tales.",
            significance: "Represents the pinnacle of ancient Indian Buddhist art with sophisticated painting techniques and narrative storytelling.",
            artists: "Unknown Buddhist monks and artisans",
            artworks: "The Bodhisattva Padmapani, Various Jataka paintings",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Paintings_on_the_walls_of_Cave_No_16%2C_Ajanta_Caves%2C_Maharashtra%2C_India_23.jpg/1200px-Paintings_on_the_walls_of_Cave_No_16%2C_Ajanta_Caves%2C_Maharashtra%2C_India_23.jpg?20250729081552",
            color: "#ff6b6b"
        },
        {
            id: 2,
            name: "Khajuraho",
            region: "Madhya Pradesh",
            coordinates: [24.8318, 79.9199],
            period: "950 - 1050 CE",
            artStyle: "Nagara Temple Architecture",
            description: "Group of Hindu and Jain temples renowned for their intricate stone carvings and erotic sculptures.",
            significance: "Epitome of medieval Indian temple architecture showcasing advanced sculptural techniques and religious iconography.",
            artists: "Chandela dynasty sculptors",
            artworks: "Kandariya Mahadeva Temple sculptures, Lakshmana Temple carvings",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Khajuraho_tempel_india.jpg/640px-Khajuraho_tempel_india.jpg",
            color: "#4ecdc4"
        },
        {
            id: 3,
            name: "Mysore",
            region: "Karnataka",
            coordinates: [12.2958, 76.6394],
            period: "18th - 19th Century",
            artStyle: "Mysore Painting",
            description: "Classical South Indian painting style characterized by elegant lines, intricate brush work, and gold leaf application.",
            significance: "Preserved traditional South Indian painting techniques and iconography through royal patronage.",
            artists: "Court painters of Mysore Palace",
            artworks: "Gaja Gauri paintings, Dashavatara series",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Mysore_painting.jpg/640px-Mysore_painting.jpg",
            color: "#45b7d1"
        },
        {
            id: 4,
            name: "Jaipur",
            region: "Rajasthan",
            coordinates: [26.9124, 75.7873],
            period: "16th - 19th Century",
            artStyle: "Rajasthani Miniatures",
            description: "Vibrant miniature paintings from various schools including Mewar, Marwar, and Hadoti traditions.",
            significance: "Developed distinctive regional styles with rich colors, detailed compositions, and courtly themes.",
            artists: "Sahibdin, Nihal Chand, Nainsukh",
            artworks: "Ragamala paintings, Ramayana series, Portrait miniatures",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Codice_Casanatense_Rajputs.png/640px-Codice_Casanatense_Rajputs.png",
            color: "#f39c12"
        },
        {
            id: 5,
            name: "Kolkata",
            region: "West Bengal",
            coordinates: [22.5726, 88.3639],
            period: "19th - 20th Century",
            artStyle: "Bengal School",
            description: "Modern art movement that sought to revive traditional Indian art forms and reject Western academic realism.",
            significance: "First major modern art movement in India, influencing nationalist cultural identity.",
            artists: "Abanindranath Tagore, Nandalal Bose, Jamini Roy",
            artworks: "Bharat Mata, Krishna Leela paintings, Folk art adaptations",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Bharat_Mata_by_Abanindranath_Tagore.jpg/640px-Bharat_Mata_by_Abanindranath_Tagore.jpg",
            color: "#9b59b6"
        },
        {
            id: 6,
            name: "Thanjavur",
            region: "Tamil Nadu",
            coordinates: [10.7905, 79.1378],
            period: "7th - 16th Century",
            artStyle: "Dravidian Temple Art",
            description: "Magnificent temple complexes with towering gopurams, intricate bronze sculptures, and stone carvings.",
            significance: "Represents the height of South Indian temple architecture and bronze casting techniques.",
            artists: "Chola period sculptors and architects",
            artworks: "Nataraja bronze sculptures, Brihadeeswara Temple carvings",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Natraja_in_Bronze.jpg/640px-Natraja_in_Bronze.jpg",
            color: "#e74c3c"
        },
        {
            id: 7,
            name: "Srinagar",
            region: "Jammu & Kashmir",
            coordinates: [34.0837, 74.7973],
            period: "8th - 12th Century",
            artStyle: "Kashmiri Art",
            description: "Unique blend of Indian, Central Asian, and Gandhara influences in sculpture and painting.",
            significance: "Bridge between Indian and Central Asian artistic traditions with distinctive iconographic features.",
            artists: "Kashmir valley artisans",
            artworks: "Martand Temple sculptures, Manuscript illustrations",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Martand_Sun_Temple_enclosure_%286134371538%29.jpg/640px-Martand_Sun_Temple_enclosure_%286134371538%29.jpg",
            color: "#3498db"
        },
        {
            id: 8,
            name: "Puri",
            region: "Odisha",
            coordinates: [19.8135, 85.8312],
            period: "7th - 16th Century",
            artStyle: "Kalinga Architecture",
            description: "Distinctive temple architecture and Patta Chitra paintings with vibrant colors and mythological themes.",
            significance: "Unique regional style combining architectural innovation with traditional painting techniques.",
            artists: "Odishan temple architects and Patta Chitra painters",
            artworks: "Jagannath Temple art, Patta Chitra scrolls",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Pattachitra_Painting_%2816419912954%29.jpg/640px-Pattachitra_Painting_%2816419912954%29.jpg",
            color: "#1abc9c"
        },
        {
            id: 9,
            name: "Kochi",
            region: "Kerala",
            coordinates: [9.9312, 76.2673],
            period: "16th - 18th Century",
            artStyle: "Kerala Murals",
            description: "Traditional temple wall paintings with distinctive style, warm colors, and religious themes.",
            significance: "Unique South Indian mural tradition with sophisticated color techniques and iconography.",
            artists: "Traditional Kerala mural artists",
            artworks: "Mattancherry Palace murals, Temple wall paintings",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Mattancherry_palace_murals.jpg/640px-Mattancherry_palace_murals.jpg",
            color: "#27ae60"
        },
        {
            id: 10,
            name: "Ahmedabad",
            region: "Gujarat",
            coordinates: [23.0225, 72.5714],
            period: "11th - 16th Century",
            artStyle: "Jain Manuscript Art",
            description: "Elaborate illuminated manuscripts and temple architecture with intricate geometric patterns.",
            significance: "Center of Jain artistic tradition with sophisticated manuscript illumination techniques.",
            artists: "Jain monk-artists and scribes",
            artworks: "Kalpasutra manuscripts, Dilwara Temple sculptures",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Anonymous_-_Lustration_of_the_Infant_Jina_Mahavira%2C_Folio_from_a_Kalpasutra_Manuscript_-_2005.35_-_Metropolitan_Museum_of_Art.jpg/640px-Anonymous_-_Lustration_of_the_Infant_Jina_Mahavira%2C_Folio_from_a_Kalpasutra_Manuscript_-_2005.35_-_Metropolitan_Museum_of_Art.jpg",
            color: "#e67e22"
        },
        {
            id: 11,
            name: "Ellora Caves",
            region: "Maharashtra",
            coordinates: [20.0258, 75.1777],
            period: "6th - 11th Century CE",
            artStyle: "Rock-cut Architecture",
            description: "Complex of 34 monasteries and temples, featuring Buddhist, Hindu, and Jain monuments and artwork cut into the basalt cliff.",
            significance: "Demonstrates the religious harmony prevalent during this period with monuments of Buddhism, Hinduism and Jainism in close proximity.",
            artists: "Unknown sculptors and architects of the Rashtrakuta dynasty",
            artworks: "Kailasa Temple, The Carpenter's Cave, Buddhist monastery halls",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Ellora_Caves%2C_India%2C_The_Vishvakarma_Buddhist_Cave.jpg/640px-Ellora_Caves%2C_India%2C_The_Vishvakarma_Buddhist_Cave.jpg",
            color: "#2c3e50"
        },
        {
            id: 12,
            name: "Hampi",
            region: "Karnataka",
            coordinates: [15.3350, 76.4600],
            period: "14th - 16th Century CE",
            artStyle: "Vijayanagara Empire Architecture",
            description: "Ruins of a vast, sophisticated Hindu kingdom with temples, royal complexes, and elaborate stone carvings.",
            significance: "Showcases the culmination of Dravidian architecture and the artistic vision of the Vijayanagara Empire.",
            artists: "Vijayanagara royal sculptors and architects",
            artworks: "Vittala Temple musical pillars, Virupaksha Temple, Krishna Temple complex",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Hampi%2C_India%2C_Temple_on_top_of_Matanga_Hill.jpg/640px-Hampi%2C_India%2C_Temple_on_top_of_Matanga_Hill.jpg",
            color: "#d35400"
        },
        {
            id: 13,
            name: "Mahabalipuram",
            region: "Tamil Nadu",
            coordinates: [12.6269, 80.1920],
            period: "7th - 8th Century CE",
            artStyle: "Pallava Rock Sculpture",
            description: "Collection of monolithic rock temples, cave sanctuaries, giant open-air reliefs, and structural temples showcasing Pallava art.",
            significance: "Pioneer of Dravidian architecture, featuring the transition from rock-cut to structural temples.",
            artists: "Pallava dynasty artisans",
            artworks: "Arjuna's Penance relief, Shore Temple, Five Rathas (chariots)",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Mamallapuram%2C_The_Shore_Temple_2%2C_India.jpg/640px-Mamallapuram%2C_The_Shore_Temple_2%2C_India.jpg",
            color: "#3498db"
        },
        {
            id: 14,
            name: "Santiniketan",
            region: "West Bengal",
            coordinates: [23.6803, 87.6851],
            period: "20th Century CE",
            artStyle: "Contemporary Indian Art",
            description: "Artistic and cultural center founded by Rabindranath Tagore, fostering experimental approaches to art education and practice.",
            significance: "Birthplace of the contextual modernism movement in Indian art, blending Eastern and Western artistic traditions.",
            artists: "Rabindranath Tagore, Abanindranath Tagore, Nandalal Bose, Benode Behari Mukherjee, Ramkinkar Baij",
            artworks: "Santhali murals, Nature studies, Contextual modernist paintings",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Fresco_by_Nandalal_Bose_-_Dinantika_-_Ashram_Complex_-_Santiniketan_01.jpg/640px-Fresco_by_Nandalal_Bose_-_Dinantika_-_Ashram_Complex_-_Santiniketan_01.jpg",
            color: "#16a085"
        },
        {
            id: 15,
            name: "Kangra",
            region: "Himachal Pradesh",
            coordinates: [32.0998, 76.2691],
            period: "18th - 19th Century CE",
            artStyle: "Pahari Miniature Painting",
            description: "Delicate miniature paintings depicting romance, poetry, and mythology in vibrant natural settings with lyrical quality.",
            significance: "Represents the pastoral romanticism in Indian art with distinctive use of cool colors and naturalistic landscapes.",
            artists: "Nainsukh, Manaku, and their descendants",
            artworks: "Bhagavata Purana series, Gita Govinda illustrations, Baramasa (seasons) paintings",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Painting_of_Raja_Govardhan_Chand_of_Guler%2C_Kangra._He_ruled_Guler_state_from_1730%E2%80%931741.jpg/640px-Painting_of_Raja_Govardhan_Chand_of_Guler%2C_Kangra._He_ruled_Guler_state_from_1730%E2%80%931741.jpg",
            color: "#8e44ad"
        },
        {
            id: 16,
            name: "Mumbai",
            region: "Maharashtra",
            coordinates: [19.0760, 72.8777],
            period: "20th - 21st Century CE",
            artStyle: "Progressive Artists' Group",
            description: "Pioneering modernist art movement formed after Indian independence, seeking to break from colonial academic traditions.",
            significance: "First post-independence avant-garde movement in Indian art, incorporating elements of expressionism, cubism and abstractionism.",
            artists: "M.F. Husain, F.N. Souza, S.H. Raza, V.S. Gaitonde, Tyeb Mehta",
            artworks: "Husain's 'Horses', Raza's 'Bindu' series, Souza's 'Heads'",
            image: "data:image/jpeg;base64,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",
            color: "#2980b9"
        },
        {
            id: 17,
            name: "Lucknow",
            region: "Uttar Pradesh",
            coordinates: [26.8467, 80.9462],
            period: "18th - 19th Century CE",
            artStyle: "Awadhi Architecture & Crafts",
            description: "Syncretic cultural center known for its Nawabi architecture, fine chikankari embroidery, and courtly arts.",
            significance: "Exemplifies the Indo-Persian cultural synthesis during the late Mughal period with distinctive decorative arts.",
            artists: "Court architects of Nawabs, Chikankari embroiderers",
            artworks: "Bara Imambara, Rumi Darwaza, Chikankari textiles",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Bara_Imambara%2C_Lucknow_2.jpg/640px-Bara_Imambara%2C_Lucknow_2.jpg",
            color: "#7f8c8d"
        },
        {
            id: 18,
            name: "Chola Temples",
            region: "Tamil Nadu",
            coordinates: [11.1276, 79.3785],
            period: "9th - 13th Century CE",
            artStyle: "Chola Bronze Casting",
            description: "Exceptional bronze sculptures created using the lost-wax technique, depicting Hindu deities with remarkable grace and dynamism.",
            significance: "Represents the zenith of bronze casting art in India with perfectly balanced compositions and fluid movement.",
            artists: "Chola period master craftsmen",
            artworks: "Nataraja (Dancing Shiva), Parvati, Rama, and other divine figures",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/A_collage_of_Great_living_Chola_temples_UNESCO_heritage_site.jpg/640px-A_collage_of_Great_living_Chola_temples_UNESCO_heritage_site.jpg",
            color: "#cd7f32"
        },
        {
            id: 19,
            name: "Bijapur",
            region: "Karnataka",
            coordinates: [16.8302, 75.7100],
            period: "15th - 17th Century CE",
            artStyle: "Deccan Sultanate Architecture",
            description: "Islamic architectural marvels featuring massive domes, intricate plasterwork, and geometric patterns from the Adil Shahi dynasty.",
            significance: "Represents the unique fusion of Persian, Turkish, and indigenous Indian architectural elements.",
            artists: "Adil Shahi court architects and craftsmen",
            artworks: "Gol Gumbaz (second largest dome in the world), Ibrahim Rauza, Jami Masjid",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Gol_Gumbaj2.JPG/640px-Gol_Gumbaj2.JPG",
            color: "#34495e"
        },
        {
            id: 20,
            name: "Warli Art",
            region: "Maharashtra",
            coordinates: [19.5800, 73.1300],
            period: "Ancient - Contemporary",
            artStyle: "Tribal Folk Art",
            description: "Geometric white line paintings on mud walls depicting everyday village scenes, created by the Warli tribe of Maharashtra.",
            significance: "One of the oldest folk art traditions of India, using a visual language dating back to 10th century CE.",
            artists: "Warli tribal artists, notably Jivya Soma Mashe",
            artworks: "Tarpa dance scenes, Harvest celebrations, Wedding rituals",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Warli_painting.jpg/640px-Warli_painting.jpg",
            color: "#795548"
        }
    ];

    useEffect(() => {
        // Initialize Leaflet map
        const initMap = async () => {
            // Wait for Leaflet to load
            const L = window.L;
            if (!L) {
                console.error('Leaflet not loaded');
                return;
            }

            const mapInstance = L.map(mapRef.current, {
                center: [20.5937, 78.9629], // Center of India
                zoom: 5,
                zoomControl: true,
                scrollWheelZoom: true,
                doubleClickZoom: true,
                boxZoom: true,
                keyboard: true,
                dragging: true,
                touchZoom: true
            });

            // Add beautiful tile layer
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors',
                maxZoom: 18
            }).addTo(mapInstance);

            // Create custom markers for each art location
            const markerInstances = artLocations.map(location => {
                const customIcon = L.divIcon({
                    className: 'custom-marker',
                    html: `
            <div class="marker-container" style="background-color: ${location.color}">
              <img src="${location.image}" class="marker-image" alt="${location.name}" />
              <div class="marker-pulse" style="border-color: ${location.color}"></div>
            </div>
          `,
                    iconSize: [40, 40],
                    iconAnchor: [20, 20]
                });

                const marker = L.marker([location.coordinates[0], location.coordinates[1]], {
                    icon: customIcon
                }).addTo(mapInstance);

                marker.on('click', () => {
                    setSelectedLocation(location);
                });

                // Add popup on hover
                marker.bindTooltip(`
          <div class="map-tooltip">
            <strong>${location.name}</strong><br>
            <span>${location.region}</span><br>
            <em>${location.artStyle}</em>
          </div>
        `, {
                    direction: 'top',
                    offset: [0, -20],
                    className: 'custom-tooltip'
                });

                return marker;
            });

            setMap(mapInstance);
            setMarkers(markerInstances);
        };

        // Load Leaflet CSS and JS
        const loadLeaflet = () => {
            // Add Leaflet CSS
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css';
            document.head.appendChild(link);

            // Add Leaflet JS
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js';
            script.onload = initMap;
            document.head.appendChild(script);
        };

        loadLeaflet();

        // Cleanup
        return () => {
            if (map) {
                map.remove();
            }
        };
    }, []);

    return (
        <div className="art-map-container">
            <div className="header">
                <h1>
                    <Palette className="header-icon" />
                    Interactive Indian Art History Map
                </h1>
                <p>Explore the rich artistic heritage across India's diverse regions</p>
            </div>

            <div className="map-wrapper">
                <div className="map-container">
                    <div ref={mapRef} className="leaflet-map"></div>

                    {/* Instructions overlay */}
                    <div className="map-instructions">
                        <Info size={16} />
                        <span>Click on markers to explore art locations</span>
                    </div>
                </div>

                {/* Location Details Panel */}
                {selectedLocation && (
                    <div className="details-panel">
                        <div className="panel-header" style={{background: `linear-gradient(135deg, ${selectedLocation.color} 0%, ${selectedLocation.color}88 100%)`}}>
                            <h2>{selectedLocation.name}</h2>
                            <button
                                className="close-btn"
                                onClick={() => setSelectedLocation(null)}
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="panel-content">
                            <div className="location-icon-large">
                                <img src={selectedLocation.image} alt={selectedLocation.name} className="location-image" />
                            </div>

                            <div className="info-grid">
                                <div className="info-item">
                                    <MapPin className="info-icon" style={{color: selectedLocation.color}} />
                                    <div>
                                        <strong>Region:</strong>
                                        <span>{selectedLocation.region}</span>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <Calendar className="info-icon" style={{color: selectedLocation.color}} />
                                    <div>
                                        <strong>Period:</strong>
                                        <span>{selectedLocation.period}</span>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <Palette className="info-icon" style={{color: selectedLocation.color}} />
                                    <div>
                                        <strong>Art Style:</strong>
                                        <span>{selectedLocation.artStyle}</span>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <Users className="info-icon" style={{color: selectedLocation.color}} />
                                    <div>
                                        <strong>Notable Artists:</strong>
                                        <span>{selectedLocation.artists}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="description-section">
                                <h3 style={{color: selectedLocation.color}}>Description</h3>
                                <p>{selectedLocation.description}</p>
                            </div>

                            <div className="significance-section">
                                <h3 style={{color: selectedLocation.color}}>Historical Significance</h3>
                                <p>{selectedLocation.significance}</p>
                            </div>

                            <div className="artworks-section">
                                <h3 style={{color: selectedLocation.color}}>
                                    <Image className="section-icon" />
                                    Notable Artworks
                                </h3>
                                <p>{selectedLocation.artworks}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Legend */}
            <div className="legend">
                <h3>Art Movements & Periods</h3>
                <div className="legend-items">
                    <div className="legend-item ancient">
                        <span className="legend-color"></span>
                        Ancient (Before 1000 CE)
                    </div>
                    <div className="legend-item medieval">
                        <span className="legend-color"></span>
                        Medieval (1000-1500 CE)
                    </div>
                    <div className="legend-item modern">
                        <span className="legend-color"></span>
                        Modern (1500 CE onwards)
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndianArtMap;