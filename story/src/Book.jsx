import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, RotateCcw, Volume2, VolumeX, Info, Eye, Maximize2 } from 'lucide-react';
import './Book.css';

const AjantaStoryboard = () => {
    const [currentPanel, setCurrentPanel] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [autoPlay, setAutoPlay] = useState(false);
    const [soundEnabled, setSoundEnabled] = useState(true);
    const [showDetails, setShowDetails] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [imageLoaded, setImageLoaded] = useState({});
    const panelRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);

    const storyPanels = [
        {
            title: "The Compassionate Bodhisattva",
            scene: "Cave 1 - Padmapani Avalokiteshvara",
            period: "5th-6th Century CE",
            description: "The magnificent Padmapani Bodhisattva stands as one of Ajanta's most celebrated masterpieces. With infinite compassion in his eyes, he holds a blue lotus while adorned in royal garments, symbolizing his vow to help all beings achieve enlightenment.",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Bodhisattva_Padmapani%2C_cave_1%2C_Ajanta%2C_India.jpg/640px-Bodhisattva_Padmapani%2C_cave_1%2C_Ajanta%2C_India.jpg",
            historicalContext: "This fresco represents the pinnacle of Gupta period art, showcasing sophisticated techniques in shading, perspective, and emotional expression that influenced Buddhist art across Asia.",
            symbolism: "The lotus represents purity, the jeweled crown signifies wisdom, and the gentle expression embodies infinite compassion for all sentient beings.",
            colors: ["#D4AF37", "#8B4513", "#DC143C", "#191970"],
            animation: "fadeInUp",
            soundCue: "temple-bell"
        },
        {
            title: "The Great Departure",
            scene: "Cave 17 - Mahaparinirvana",
            period: "5th Century CE",
            description: "Under the cover of night, Prince Siddhartha makes his momentous decision to leave the palace. His horse Kanthaka carries him silently past sleeping guards toward his spiritual destiny, marking the beginning of his journey to Buddhahood.",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/015_Cave_19%2C_Buddha_Teaching_%2834246747701%29.jpg/640px-015_Cave_19%2C_Buddha_Teaching_%2834246747701%29.jpg",
            historicalContext: "This narrative painting demonstrates the sophisticated storytelling techniques of Ajanta artists, who could convey complex emotional and spiritual themes through visual narrative.",
            symbolism: "The sleeping figures represent ignorance, the departing prince symbolizes awakening consciousness, and the celestial beings above bless his noble quest.",
            colors: ["#2F4F4F", "#4169E1", "#FFD700", "#F5F5DC"],
            animation: "slideInLeft",
            soundCue: "night-ambient"
        },
        {
            title: "Buddha's Enlightenment",
            scene: "Cave 26 - Temptation of Mara",
            period: "6th Century CE",
            description: "In this dramatic scene, Siddhartha sits in deep meditation under the Bodhi tree while Mara, the demon of temptation, sends his daughters and fearsome armies to disturb him. The earth goddess emerges to witness his enlightenment.",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Ajanta_Caves%2C_India%2C_Buddha_image_carving.jpg/640px-Ajanta_Caves%2C_India%2C_Buddha_image_carving.jpg",
            historicalContext: "Cave 26 represents the transition from Hinayana to Mahayana Buddhism, featuring both narrative paintings and sculptural elements that tell the Buddha's life story.",
            symbolism: "The earth-touching mudra calls the earth to witness, Mara's army represents internal obstacles, and the Bodhi tree symbolizes wisdom and awakening.",
            colors: ["#228B22", "#8B0000", "#FF69B4", "#DEB887"],
            animation: "zoomIn",
            soundCue: "meditation-chant"
        },
        {
            title: "The Wheel of Dharma",
            scene: "Cave 17 - First Sermon at Sarnath",
            period: "5th Century CE",
            description: "The newly enlightened Buddha delivers his first sermon in the Deer Park at Sarnath. Five ascetics become his first disciples as he sets the Wheel of Dharma in motion, beginning 45 years of teaching.",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Buddha%27s_First_Sermon_at_Sarnath_%2822220250308%29.jpg/640px-Buddha%27s_First_Sermon_at_Sarnath_%2822220250308%29.jpg",
            historicalContext: "This painting captures the historical moment that established the Buddhist Sangha (community) and represents one of the most significant events in Buddhist tradition.",
            symbolism: "The teaching gesture (dharmachakra mudra) represents the turning of the wheel of law, while the deer symbolize the gentle nature of the Buddha's message.",
            colors: ["#FF6347", "#32CD32", "#87CEEB", "#F0E68C"],
            animation: "fadeInDown",
            soundCue: "dharma-wheel"
        },
        {
            title: "The Twin Miracle",
            scene: "Cave 17 - Miracle at Shravasti",
            period: "5th Century CE",
            description: "To demonstrate the power of dharma to skeptical brahmins, Buddha performs the Yamakapratiharya - the twin miracle where fire emanates from his upper body while streams of water flow from his lower body.",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/048_The_Double_Miracle_of_Fire_and_Water_%289013118109%29.jpg/640px-048_The_Double_Miracle_of_Fire_and_Water_%289013118109%29.jpg",
            historicalContext: "This miraculous event was frequently depicted in Buddhist art as proof of the Buddha's spiritual power and the supremacy of Buddhist doctrine over other religious traditions.",
            symbolism: "Fire represents wisdom destroying ignorance, water symbolizes compassion cooling suffering, and the amazed crowd shows the transformative power of witnessing truth.",
            colors: ["#FF4500", "#1E90FF", "#FFD700", "#8A2BE2"],
            animation: "bounceIn",
            soundCue: "miracle-sound"
        },
        {
            title: "Tales of Previous Lives",
            scene: "Cave 10 - Jataka Stories",
            period: "2nd Century BCE - 1st Century CE",
            description: "The Jataka tales depict Buddha's previous incarnations, including the generous King Shibi who offered his own flesh to save a dove, demonstrating how compassion and wisdom were cultivated over countless lifetimes.",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Carved_pedestal_depicting_scene_from_one_of_the_Jataka_Tales_6th_century_CE_Shanxi_Province%2C_China_limestone_03.jpg/640px-Carved_pedestal_depicting_scene_from_one_of_the_Jataka_Tales_6th_century_CE_Shanxi_Province%2C_China_limestone_03.jpg",
            historicalContext: "Cave 10 is one of the earliest caves at Ajanta, representing the Hinayana period. These Jataka paintings served both as decoration and moral instruction for Buddhist practitioners.",
            symbolism: "Multiple life scenes show the continuity of the bodhisattva path, with each act of sacrifice and compassion building toward ultimate enlightenment.",
            colors: ["#DAA520", "#CD853F", "#B22222", "#4682B4"],
            animation: "rotateIn",
            soundCue: "ancient-story"
        }
    ];

    const animatePanel = (animationType) => {
        if (isAnimating) return;
        setIsAnimating(true);

        const panel = panelRef.current;
        const text = textRef.current;
        const image = imageRef.current;

        if (soundEnabled) {
            console.log(`Playing sound: ${storyPanels[currentPanel].soundCue}`);
        }

        // Reset styles
        if (panel) {
            panel.style.transform = 'translateX(0) scale(1) rotateY(0)';
            panel.style.opacity = '1';
            panel.style.filter = 'blur(0px)';
        }
        if (text) {
            text.style.transform = 'translateY(0) scale(1)';
            text.style.opacity = '1';
        }
        if (image) {
            image.style.transform = 'translateX(0) scale(1) rotateZ(0)';
            image.style.opacity = '1';
            image.style.filter = 'blur(0px) saturate(1)';
        }

        setTimeout(() => {
            if (panel && text && image) {
                switch (animationType) {
                    case 'fadeInUp':
                        text.style.transform = 'translateY(-30px) scale(1.02)';
                        text.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                        image.style.filter = 'saturate(1.1) contrast(1.05)';
                        image.style.transition = 'all 1s ease-out';
                        break;
                    case 'slideInLeft':
                        panel.style.transform = 'translateX(-40px) scale(1.01)';
                        panel.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
                        image.style.transform = 'scale(1.03)';
                        break;
                    case 'zoomIn':
                        image.style.transform = 'scale(1.08) rotateZ(1deg)';
                        image.style.transition = 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
                        text.style.transform = 'scale(1.01)';
                        break;
                    case 'fadeInDown':
                        text.style.transform = 'translateY(30px) scale(0.98)';
                        text.style.transition = 'all 0.9s cubic-bezier(0.4, 0, 0.2, 1)';
                        panel.style.filter = 'brightness(1.05)';
                        break;
                    case 'bounceIn':
                        panel.style.transform = 'scale(0.92)';
                        panel.style.transition = 'all 0.3s ease-out';
                        setTimeout(() => {
                            panel.style.transform = 'scale(1.05)';
                            panel.style.transition = 'all 0.4s ease-out';
                            setTimeout(() => {
                                panel.style.transform = 'scale(1)';
                                panel.style.transition = 'all 0.2s ease-out';
                            }, 400);
                        }, 300);
                        break;
                    case 'rotateIn':
                        panel.style.transform = 'rotateY(8deg) scale(0.95)';
                        panel.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
                        image.style.transform = 'scale(1.05) rotateZ(-2deg)';
                        break;
                }
            }
        }, 100);

        setTimeout(() => setIsAnimating(false), 1200);
    };

    const nextPanel = () => {
        if (currentPanel < storyPanels.length - 1) {
            setCurrentPanel(prev => prev + 1);
        }
    };

    const prevPanel = () => {
        if (currentPanel > 0) {
            setCurrentPanel(prev => prev - 1);
        }
    };

    const resetStory = () => {
        setCurrentPanel(0);
        setAutoPlay(false);
        setShowDetails(false);
    };

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen?.();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen?.();
            setIsFullscreen(false);
        }
    };

    useEffect(() => {
        let interval;
        if (autoPlay && currentPanel < storyPanels.length - 1) {
            interval = setInterval(() => {
                nextPanel();
            }, 6000);
        } else if (autoPlay && currentPanel === storyPanels.length - 1) {
            setAutoPlay(false);
        }
        return () => clearInterval(interval);
    }, [autoPlay, currentPanel]);

    useEffect(() => {
        if (storyPanels[currentPanel]) {
            animatePanel(storyPanels[currentPanel].animation);
        }
    }, [currentPanel]);

    const handleImageLoad = (index) => {
        setImageLoaded(prev => ({ ...prev, [index]: true }));
    };

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'ArrowRight' && currentPanel < storyPanels.length - 1) nextPanel();
            if (e.key === 'ArrowLeft' && currentPanel > 0) prevPanel();
            if (e.key === ' ') {
                e.preventDefault();
                setAutoPlay(!autoPlay);
            }
            if (e.key === 'Escape') setShowDetails(false);
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [currentPanel, autoPlay]);

    const currentStory = storyPanels[currentPanel];

    return (
        <div className={`ajanta-container ${isFullscreen ? 'fullscreen' : ''}`}>
            <div className="main-wrapper">
                {/* Header */}
                <div className="header">
                    <div className="header-title-section">
                        <div className="header-icon">
                            <Eye size={24} />
                        </div>
                        <h1 className="main-title">Ajanta Chronicles</h1>
                    </div>
                    <p className="subtitle">
                        An Immersive Journey Through 2,000 Years of Buddhist Art & Storytelling
                    </p>
                    <div className="header-divider">
                        <div className="divider-line"></div>
                        <span className="location-text">Maharashtra, India</span>
                        <div className="divider-line"></div>
                    </div>
                </div>

                {/* Main Panel */}
                <div
                    ref={panelRef}
                    className="main-panel"
                    style={{
                        background: `linear-gradient(135deg, ${currentStory.colors.join(', ')}08, white)`,
                        border: `2px solid ${currentStory.colors[0]}20`
                    }}
                >
                    {/* Scene Header */}
                    <div className="scene-header">
                        <div className="scene-info">
                            <h2 className="scene-title">{currentStory.title}</h2>
                            <div className="scene-meta">
                                <span className="scene-badge">{currentStory.scene}</span>
                                <span className="period-badge">{currentStory.period}</span>
                            </div>
                        </div>
                        <div className="progress-info">
                            <div className="progress-number">
                                {currentPanel + 1}/{storyPanels.length}
                            </div>
                            <div className="progress-label">Panel Progress</div>
                        </div>
                    </div>

                    <div className="panel-content">
                        {/* Visual Layout */}
                        <div className="content-grid">
                            {/* Main Image Panel */}
                            <div className="image-section">
                                <div ref={imageRef} className="image-container">
                                    <div className="image-wrapper">
                                        {!imageLoaded[currentPanel] && (
                                            <div className="loading-placeholder">
                                                <div>Loading ancient masterpiece...</div>
                                            </div>
                                        )}
                                        <img
                                            src={currentStory.imageUrl}
                                            alt={currentStory.title}
                                            className={`main-image ${imageLoaded[currentPanel] ? 'loaded' : ''}`}
                                            onLoad={() => handleImageLoad(currentPanel)}
                                            onError={(e) => {
                                                const canvas = document.createElement('canvas');
                                                canvas.width = 800;
                                                canvas.height = 600;
                                                const ctx = canvas.getContext('2d');

                                                const gradient = ctx.createLinearGradient(0, 0, 800, 600);
                                                gradient.addColorStop(0, currentStory.colors[0]);
                                                gradient.addColorStop(1, currentStory.colors[1]);
                                                ctx.fillStyle = gradient;
                                                ctx.fillRect(0, 0, 800, 600);

                                                ctx.fillStyle = 'rgba(139, 69, 19, 0.3)';
                                                for (let i = 0; i < 100; i++) {
                                                    ctx.beginPath();
                                                    ctx.arc(Math.random() * 800, Math.random() * 600, Math.random() * 3, 0, 2 * Math.PI);
                                                    ctx.fill();
                                                }

                                                ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
                                                ctx.font = 'bold 48px serif';
                                                ctx.textAlign = 'center';
                                                ctx.fillText(currentStory.title, 400, 280);

                                                ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
                                                ctx.font = '24px serif';
                                                ctx.fillText(currentStory.scene, 400, 320);

                                                ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
                                                ctx.font = '18px serif';
                                                ctx.fillText('Ancient Buddhist Art', 400, 360);

                                                e.target.src = canvas.toDataURL();
                                                handleImageLoad(currentPanel);
                                            }}
                                        />

                                        {/* Image Overlay */}
                                        <div className="image-overlay">
                                            <button onClick={toggleFullscreen} className="fullscreen-btn">
                                                <Maximize2 size={24} />
                                            </button>
                                        </div>

                                        {/* Color Palette */}
                                        <div className="color-palette">
                                            {currentStory.colors.map((color, index) => (
                                                <div
                                                    key={index}
                                                    className="color-dot"
                                                    style={{ backgroundColor: color }}
                                                ></div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="progress-section">
                                        <div className="progress-labels">
                                            <span>Journey Progress</span>
                                            <span>{Math.round(((currentPanel + 1) / storyPanels.length) * 100)}% Complete</span>
                                        </div>
                                        <div className="progress-bar">
                                            <div
                                                className="progress-fill"
                                                style={{ width: `${((currentPanel + 1) / storyPanels.length) * 100}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div ref={textRef} className="text-section">
                                <div className="story-description">
                                    <p>{currentStory.description}</p>
                                </div>

                                {/* Details Toggle */}
                                <div className="details-section">
                                    <button
                                        onClick={() => setShowDetails(!showDetails)}
                                        className="details-toggle"
                                    >
                                        <Info size={16} />
                                        <span>{showDetails ? 'Hide' : 'Show'} Details</span>
                                    </button>

                                    <div className={`details-content ${showDetails ? 'expanded' : ''}`}>
                                        <div className="detail-box historical">
                                            <h4>Historical Context</h4>
                                            <p>{currentStory.historicalContext}</p>
                                        </div>

                                        <div className="detail-box symbolism">
                                            <h4>Symbolism & Meaning</h4>
                                            <p>{currentStory.symbolism}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Timeline */}
                                <div className="timeline-section">
                                    <h4>Cave Timeline</h4>
                                    <div className="timeline">
                                        <div className="timeline-line"></div>
                                        {storyPanels.map((panel, index) => (
                                            <div
                                                key={index}
                                                className={`timeline-item ${index === currentPanel ? 'active' : ''}`}
                                                onClick={() => !isAnimating && setCurrentPanel(index)}
                                            >
                                                <div className={`timeline-dot ${index <= currentPanel ? 'completed' : ''}`}></div>
                                                <div className="timeline-content">
                                                    <div className="timeline-title">{panel.title}</div>
                                                    <div className="timeline-period">{panel.period}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Controls */}
                <div className="controls-panel">
                    <div className="controls-wrapper">
                        {/* Primary Navigation */}
                        <div className="nav-controls">
                            <button
                                onClick={prevPanel}
                                disabled={currentPanel === 0 || isAnimating}
                                className="nav-btn prev-btn"
                            >
                                <ChevronLeft size={20} />
                                <span>Previous</span>
                            </button>

                            <button
                                onClick={() => setAutoPlay(!autoPlay)}
                                className="nav-btn play-btn"
                            >
                                {autoPlay ? <Pause size={20} /> : <Play size={20} />}
                                <span>{autoPlay ? 'Pause Journey' : 'Auto Journey'}</span>
                            </button>

                            <button
                                onClick={nextPanel}
                                disabled={currentPanel === storyPanels.length - 1 || isAnimating}
                                className="nav-btn next-btn"
                            >
                                <span>Next</span>
                                <ChevronRight size={20} />
                            </button>
                        </div>

                        <div className="controls-divider"></div>

                        {/* Secondary Controls */}
                        <div className="secondary-controls">
                            <button
                                onClick={() => setSoundEnabled(!soundEnabled)}
                                className="secondary-btn"
                            >
                                {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
                                <span>{soundEnabled ? 'Sound On' : 'Sound Off'}</span>
                            </button>

                            <button onClick={resetStory} className="secondary-btn">
                                <RotateCcw size={20} />
                                <span>Reset</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Panel Navigation */}
                <div className="panel-nav">
                    {storyPanels.map((panel, index) => (
                        <div
                            key={index}
                            className="panel-dot-container"
                            onClick={() => !isAnimating && setCurrentPanel(index)}
                        >
                            <div className={`panel-dot ${
                                index === currentPanel ? 'active' :
                                    index < currentPanel ? 'completed' : ''
                            }`}></div>

                            <div className="panel-tooltip">{panel.title}</div>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="footer">
                    <div className="footer-content">
                        <h3>About the Ajanta Caves</h3>
                        <p>
                            The Ajanta Caves, a UNESCO World Heritage Site, comprise 30 rock-cut Buddhist cave monuments dating from the 2nd century BCE to about 480 CE. Located in Maharashtra, India, these caves contain some of the finest examples of ancient Indian art, particularly expressive paintings and sculptures that depict the life of Buddha and various Jataka tales.
                        </p>
                    </div>

                    <div className="footer-stats">
                        <div className="stat-item">
                            <div className="stat-number">30</div>
                            <div>Cave Monuments</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">2,000+</div>
                            <div>Years of History</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">UNESCO</div>
                            <div>World Heritage Site</div>
                        </div>
                    </div>

                    <div className="footer-note">
                        Interactive experience designed to bring ancient Buddhist art into the digital age • Use arrow keys for navigation • Press spacebar for auto-play
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AjantaStoryboard;