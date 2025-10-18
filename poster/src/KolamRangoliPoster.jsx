import React, { useState } from 'react';
import './KolamRangoli.css';

const KolamRangoliPoster = () => {
    const [imageLoaded, setImageLoaded] = useState({});

    const handleImageLoad = (id) => {
        setImageLoaded(prev => ({ ...prev, [id]: true }));
    };

    return (
        <div className="poster-wrapper">
            <div className="poster-container">

                {/* Header Section */}
                <div className="header">
                    <div className="header-decoration">
                        {[...Array(200)].map((_, i) => (
                            <div key={i} className="decoration-dot"></div>
                        ))}
                    </div>
                    <div className="header-content">
                        <h1 className="main-title">KOLAM & RANGOLI</h1>
                        <div className="title-divider"></div>
                        <p className="subtitle">Traditional Indian Floor Art</p>
                        <p className="tagline">Where Sacred Geometry Meets Cultural Heritage</p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="content">

                    {/* Introduction Section */}
                    <div className="intro-section">
                        <h3 className="section-title">Introduction</h3>
                        <p className="intro-text">
                            Kolam and Rangoli are ancient Indian art forms that transform ordinary floors into extraordinary sacred canvases.
                            These intricate designs are more than mere decorations—they represent a living tradition that connects generations,
                            honors deities, and celebrates the rhythm of daily life and festivals. Created primarily by women at the threshold
                            of homes, these ephemeral artworks embody the philosophy of impermanence, devotion, and the continuous cycle of
                            creation and dissolution.
                        </p>
                    </div>

                    {/* Main Comparison Section */}
                    <div className="comparison-grid">

                        {/* KOLAM Section */}
                        <div className="art-card kolam-card">
                            <div className="card-header kolam-header">
                                <h2 className="card-title">KOLAM</h2>
                                <p className="card-subtitle">கோலம் - The Art of Tamil Nadu</p>
                            </div>

                            <div className="image-container">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Kolam_Pongal_1stMain_Uthandi_Jan23_A7C_04891.jpg/640px-Kolam_Pongal_1stMain_Uthandi_Jan23_A7C_04891.jpg"
                                    alt="Traditional Kolam pattern"
                                    className={`art-image ${imageLoaded['kolam'] ? 'loaded' : ''}`}
                                    onLoad={() => handleImageLoad('kolam')}
                                />
                                {!imageLoaded['kolam'] && (
                                    <div className="image-loader">
                                        <div className="spinner"></div>
                                    </div>
                                )}
                            </div>

                            <div className="card-content">
                                <div className="info-list">
                                    <div className="info-item">
                                        <span className="info-label">📍 Origin:</span>
                                        <span className="info-text">Tamil Nadu, South India - dates back over 5,000 years</span>
                                    </div>
                                    <div className="info-item">
                                        <span className="info-label">🎨 Material:</span>
                                        <span className="info-text">Rice flour (providing food for birds and insects) or limestone powder</span>
                                    </div>
                                    <div className="info-item">
                                        <span className="info-label">✨ Style:</span>
                                        <span className="info-text">Geometric patterns based on a grid of dots (pulli), featuring continuous lines</span>
                                    </div>
                                    <div className="info-item">
                                        <span className="info-label">⏰ Practice:</span>
                                        <span className="info-text">Drawn daily at dawn before sunrise, swept away by evening</span>
                                    </div>
                                    <div className="info-item">
                                        <span className="info-label">🙏 Purpose:</span>
                                        <span className="info-text">Welcome prosperity, ward off evil, invite Goddess Lakshmi</span>
                                    </div>
                                </div>

                                <div className="features-box kolam-features">
                                    <h4 className="features-title">Special Features:</h4>
                                    <ul className="features-list">
                                        <li><strong>Mathematical Precision:</strong> Based on complex geometric algorithms</li>
                                        <li><strong>Ecological Significance:</strong> Feeds ants and small creatures</li>
                                        <li><strong>Symmetry:</strong> Perfect balance representing cosmic order</li>
                                        <li><strong>Types:</strong> Kambi kolam (lines), Pulli kolam (dots), Freehand kolam</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="secondary-image">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Pongal_Kolam_%2C_Kattur%2C_Trichy.jpg/640px-Pongal_Kolam_%2C_Kattur%2C_Trichy.jpg"
                                    alt="Pongal Kolam design"
                                    className={`art-image ${imageLoaded['kolam2'] ? 'loaded' : ''}`}
                                    onLoad={() => handleImageLoad('kolam2')}
                                />
                                <div className="image-caption">Pongal Festival Kolam</div>
                            </div>
                        </div>

                        {/* RANGOLI Section */}
                        <div className="art-card rangoli-card">
                            <div className="card-header rangoli-header">
                                <h2 className="card-title">RANGOLI</h2>
                                <p className="card-subtitle">रंगोली - The Colorful Expression</p>
                            </div>

                            <div className="image-container">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Rangoli_indian.jpg/640px-Rangoli_indian.jpg"
                                    alt="Colorful Rangoli design"
                                    className={`art-image ${imageLoaded['rangoli'] ? 'loaded' : ''}`}
                                    onLoad={() => handleImageLoad('rangoli')}
                                />
                                {!imageLoaded['rangoli'] && (
                                    <div className="image-loader">
                                        <div className="spinner"></div>
                                    </div>
                                )}
                            </div>

                            <div className="card-content">
                                <div className="info-list">
                                    <div className="info-item">
                                        <span className="info-label">📍 Origin:</span>
                                        <span className="info-text">Pan-India tradition, especially North and Western India</span>
                                    </div>
                                    <div className="info-item">
                                        <span className="info-label">🎨 Material:</span>
                                        <span className="info-text">Colored powders (gulal), flowers, rice, sand, and natural pigments</span>
                                    </div>
                                    <div className="info-item">
                                        <span className="info-label">✨ Style:</span>
                                        <span className="info-text">Vibrant, colorful freehand or stenciled designs with diverse patterns</span>
                                    </div>
                                    <div className="info-item">
                                        <span className="info-label">⏰ Practice:</span>
                                        <span className="info-text">Created during festivals (Diwali, Onam), weddings, and special occasions</span>
                                    </div>
                                    <div className="info-item">
                                        <span className="info-label">🙏 Purpose:</span>
                                        <span className="info-text">Celebrate joy, welcome guests and deities, mark auspicious events</span>
                                    </div>
                                </div>

                                <div className="features-box rangoli-features">
                                    <h4 className="features-title">Special Features:</h4>
                                    <ul className="features-list">
                                        <li><strong>Color Symbolism:</strong> Each color has spiritual meaning</li>
                                        <li><strong>Festival Association:</strong> Integral to Diwali, Onam, Pongal celebrations</li>
                                        <li><strong>Creative Freedom:</strong> Allows personal artistic expression</li>
                                        <li><strong>Regional Names:</strong> Alpana (Bengal), Aripana (Bihar), Muggu (Andhra)</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="secondary-image">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Diya_deepak_Diwali_rangoli_in_goa.JPG/640px-Diya_deepak_Diwali_rangoli_in_goa.JPG"
                                    alt="Diwali Rangoli"
                                    className={`art-image ${imageLoaded['rangoli2'] ? 'loaded' : ''}`}
                                    onLoad={() => handleImageLoad('rangoli2')}
                                />
                                <div className="image-caption">Diwali Festival Rangoli</div>
                            </div>
                        </div>
                    </div>

                    {/* Cultural Significance */}
                    <div className="significance-section">
                        <h3 className="section-title-center">CULTURAL & RELIGIOUS SIGNIFICANCE</h3>
                        <div className="significance-grid">
                            <div className="significance-card">
                                <div className="icon-circle">ॐ</div>
                                <h4 className="card-heading">Spiritual Connection</h4>
                                <p className="card-text">
                                    Acts as a sacred threshold, inviting deities like Goddess Lakshmi (wealth) and Lord Ganesha (remover of obstacles)
                                    into homes. The designs serve as spiritual conduits between the earthly and divine realms.
                                </p>
                            </div>
                            <div className="significance-card">
                                <div className="icon-circle">❀</div>
                                <h4 className="card-heading">Cultural Heritage</h4>
                                <p className="card-text">
                                    Passed down through generations of women, these art forms preserve ancient mathematical knowledge,
                                    artistic skills, and cultural values. They strengthen family bonds and community identity.
                                </p>
                            </div>
                            <div className="significance-card">
                                <div className="icon-circle">✦</div>
                                <h4 className="card-heading">Philosophy of Impermanence</h4>
                                <p className="card-text">
                                    The temporary nature of these designs teaches detachment and acceptance of life's transient beauty.
                                    Each creation and dissolution mirrors the cosmic cycle of birth, life, and death.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Common Motifs */}
                    <div className="motifs-section">
                        <h3 className="section-title-center">COMMON MOTIFS & THEIR MEANINGS</h3>
                        <div className="motifs-grid">
                            <div className="motif-card">
                                <div className="motif-icon">🪷</div>
                                <h4 className="motif-name">Lotus</h4>
                                <p className="motif-meaning">Purity, enlightenment, and spiritual awakening rising from muddy waters</p>
                            </div>
                            <div className="motif-card">
                                <div className="motif-icon">🦚</div>
                                <h4 className="motif-name">Peacock</h4>
                                <p className="motif-meaning">Beauty, grace, and divine protection; vehicle of Goddess Saraswati</p>
                            </div>
                            <div className="motif-card">
                                <div className="motif-icon">🌺</div>
                                <h4 className="motif-name">Flowers</h4>
                                <p className="motif-meaning">Joy, prosperity, and offerings to deities; symbol of nature's bounty</p>
                            </div>
                            <div className="motif-card">
                                <div className="motif-icon">☀️</div>
                                <h4 className="motif-name">Sun</h4>
                                <p className="motif-meaning">Life force, energy, and cosmic power; represents Surya (Sun God)</p>
                            </div>
                            <div className="motif-card">
                                <div className="motif-icon">🕉️</div>
                                <h4 className="motif-name">Swastika</h4>
                                <p className="motif-meaning">Auspiciousness, good fortune, and the four directions of the universe</p>
                            </div>
                            <div className="motif-card">
                                <div className="motif-icon">🐚</div>
                                <h4 className="motif-name">Conch Shell</h4>
                                <p className="motif-meaning">Sacred sound of Om; symbol of Lord Vishnu and cosmic vibration</p>
                            </div>
                            <div className="motif-card">
                                <div className="motif-icon">🪔</div>
                                <h4 className="motif-name">Diya (Lamp)</h4>
                                <p className="motif-meaning">Light over darkness, knowledge over ignorance, hope and celebration</p>
                            </div>
                            <div className="motif-card">
                                <div className="motif-icon">🐘</div>
                                <h4 className="motif-name">Elephant</h4>
                                <p className="motif-meaning">Lord Ganesha, remover of obstacles, wisdom and good fortune</p>
                            </div>
                        </div>
                    </div>

                    {/* Techniques and Festivals */}
                    <div className="two-column-section">
                        <div className="column-card techniques-card">
                            <h4 className="column-title">🎨 Traditional Techniques</h4>
                            <ul className="column-list">
                                <li>
                                    <strong>Pulli Kolam:</strong> Dots are arranged in a grid, and lines connect them in continuous loops
                                </li>
                                <li>
                                    <strong>Freehand Drawing:</strong> Using thumb and forefinger to sprinkle powder with precision
                                </li>
                                <li>
                                    <strong>Stencil Method:</strong> For complex rangoli designs during festivals
                                </li>
                                <li>
                                    <strong>3D Rangoli:</strong> Modern innovation using salt dough, colored sand, and flowers
                                </li>
                            </ul>
                        </div>

                        <div className="column-card festivals-card">
                            <h4 className="column-title">📅 Festival Associations</h4>
                            <ul className="column-list">
                                <li>
                                    <strong>Diwali:</strong> Elaborate rangolis to welcome Goddess Lakshmi
                                </li>
                                <li>
                                    <strong>Pongal:</strong> Large kolams with pots, sugarcane, and sun motifs
                                </li>
                                <li>
                                    <strong>Onam:</strong> Flower rangolis (Pookalam) in circular patterns
                                </li>
                                <li>
                                    <strong>Navratri:</strong> Nine days of special designs honoring divine feminine
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Modern Evolution */}
                    <div className="evolution-section">
                        <h3 className="section-title">🌟 Modern Evolution & Global Recognition</h3>
                        <p className="evolution-text">
                            While rooted in ancient tradition, Kolam and Rangoli continue to evolve in contemporary India and across the world.
                            Modern artists experiment with unconventional materials, larger scales, and innovative designs while respecting traditional
                            principles. These art forms have gained international recognition, featured in art galleries, cultural festivals, and even
                            digital art platforms.
                        </p>
                        <div className="evolution-grid">
                            <div className="evolution-card">
                                <p className="evolution-heading">UNESCO Recognition</p>
                                <p className="evolution-desc">Celebrated as intangible cultural heritage</p>
                            </div>
                            <div className="evolution-card">
                                <p className="evolution-heading">Digital Kolam</p>
                                <p className="evolution-desc">Apps and online communities sharing designs</p>
                            </div>
                            <div className="evolution-card">
                                <p className="evolution-heading">Global Workshops</p>
                                <p className="evolution-desc">Teaching traditional art worldwide</p>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="footer">
                        <p className="footer-quote">
                            "Where tradition meets artistry, every design tells a story of devotion, culture, and timeless beauty"
                        </p>
                        <div className="footer-dots">
                            {[...Array(9)].map((_, i) => (
                                <div key={i} className="footer-dot"></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KolamRangoliPoster;