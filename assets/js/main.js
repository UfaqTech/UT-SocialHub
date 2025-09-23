  document.addEventListener('DOMContentLoaded', () => {
            // --- DATA & CONFIG ---
            const linksData = [
                // Platforms: Facebook, WhatsApp, Telegram, YouTube, TikTok, Instagram, Twitter (X), LinkedIn, Discord, Reddit
                { id: 1, platform: "Facebook", category: "Business / Marketing", title: "FB Marketing Pro", url: "https://www.facebook.com/groups/marketingpro", description: "Grow your business with expert marketing strategies.", media: "https://placehold.co/600x400/1877F2/fff?text=FB+Marketing", tags: ["Featured"], likes: 52 },
                { id: 2, platform: "Facebook", category: "Gaming / eSports", title: "Retro Gaming Community", url: "https://www.facebook.com/groups/retrogaming", description: "Discuss classic video games and consoles with passionate gamers.", media: "https://placehold.co/600x400/4CAF50/fff?text=Gaming", tags: ["Trending"], likes: 101 },
                { id: 3, platform: "Facebook", category: "Education / Study", title: "Learn to Code", url: "https://www.facebook.com/groups/learn.to.code", description: "Resources for aspiring programmers, from basics to advanced topics.", media: "https://placehold.co/600x400/F08080/fff?text=Coding", tags: [], likes: 23 },
                { id: 4, platform: "Facebook", category: "Sports / Fitness / Health", title: "Healthy Recipes", url: "https://www.facebook.com/groups/healthyrecipes", description: "Share and discover delicious, easy-to-make healthy meals.", media: "https://placehold.co/600x400/00C853/fff?text=Recipes", tags: [], likes: 45 },
                { id: 5, platform: "WhatsApp", category: "Tech", title: "Tech Enthusiasts", url: "https://chat.whatsapp.com/techgroup", description: "Daily tech news, gadget reviews, and discussions on the latest innovations.", media: "https://placehold.co/600x400/25D366/fff?text=Tech", tags: ["Verified"], likes: 78 },
                { id: 6, platform: "WhatsApp", category: "Education / Study", title: "Student Study Group", url: "https://chat.whatsapp.com/studygroup", description: "A group for students to collaborate and help each other with homework.", media: "https://placehold.co/600x400/4CAF50/fff?text=Study", tags: [], likes: 30 },
                { id: 7, platform: "Telegram", category: "Crypto", title: "Crypto Signals", url: "https://t.me/cryptosignals", description: "Real-time crypto trading signals and market analysis from experts.", media: "https://placehold.co/600x400/2AABEE/fff?text=Crypto", tags: [], likes: 62 },
                { id: 8, platform: "Telegram", category: "Jobs", title: "Remote Jobs Worldwide", url: "https://t.me/remotejobsworldwide", description: "Find remote job opportunities from leading companies globally.", media: "https://placehold.co/600x400/FF5722/fff?text=Remote+Jobs", tags: ["Trending"], likes: 88 },
                { id: 9, platform: "YouTube", category: "Entertainment", title: "Movie Buffs", url: "https://www.youtube.com/@moviebuffs", description: "Share movie reviews, trailers, and discuss cinema with fellow enthusiasts.", media: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", tags: [], likes: 41 },
                { id: 10, platform: "YouTube", category: "Tutorials", title: "CSS Masterclass", url: "https://www.youtube.com/@cssmasterclass", description: "Advanced CSS tutorials and design tips for developers.", media: "https://www.youtube.com/watch?v=O-p9J41E4mI", tags: ["Featured"], likes: 112 },
                { id: 11, platform: "TikTok", category: "Lifestyle", title: "DIY Hacks", url: "https://www.tiktok.com/@diyhacks", description: "Creative and easy-to-follow DIY projects and life hacks.", media: "https://www.tiktok.com/@diyhacks/video/1234567890123456789", tags: [], likes: 95 },
                { id: 12, platform: "TikTok", category: "Entertainment", title: "Comedy Skits", url: "https://www.tiktok.com/@comedyskits", description: "A daily dose of hilarious comedy content and viral skits.", media: "https://www.tiktok.com/@memezar/video/7342738753239856416", tags: [], likes: 76 },
                { id: 13, platform: "Instagram", category: "Photography", title: "Street Photography", url: "https://www.instagram.com/streetphotography", description: "Showcase urban street photography and connect with other artists.", media: "https://placehold.co/600x400/8A3AB9/fff?text=Photo", tags: [], likes: 58 },
                { id: 14, platform: "Instagram", category: "Art", title: "Digital Art Gallery", url: "https://www.instagram.com/digitalartgallery", description: "Explore and share inspiring digital art and illustrations.", media: "https://placehold.co/600x400/C13584/fff?text=Digital+Art", tags: [], likes: 67 },
                { id: 15, platform: "Twitter", category: "News", title: "Daily Tech News", url: "https://twitter.com/DailyTechNews", description: "Stay updated with the latest in technology news and breakthroughs.", media: "https://placehold.co/600x400/000000/fff?text=Tech+News", tags: ["Trending"], likes: 130 },
                { id: 16, platform: "Discord", category: "Gaming", title: "Valorant Community", url: "https://discord.gg/valorant", description: "Find teammates and strategies for Valorant with a huge community.", media: "https://placehold.co/600x400/5865F2/fff?text=Valorant", tags: [], likes: 99 },
                { id: 17, platform: "Discord", category: "Coding", title: "Python Devs", url: "https://discord.gg/pydevs", description: "A community for Python enthusiasts and developers to ask questions and share projects.", media: "https://placehold.co/600x400/4B7293/fff?text=Python", tags: ["Verified"], likes: 85 },
                { id: 18, platform: "Reddit", category: "Tech", title: "r/technology", url: "https://www.reddit.com/r/technology", description: "The front page of technology news and discussion on the web.", media: "https://placehold.co/600x400/FF4500/fff?text=Tech", tags: [], likes: 210 },
                { id: 19, platform: "Reddit", category: "Memes", title: "r/memes", url: "https://www.reddit.com/r/memes", description: "The best memes on the internet for daily laughs.", media: "https://placehold.co/600x400/FF4500/fff?text=Memes", tags: ["Trending"], likes: 155 },
                { id: 20, platform: "LinkedIn", category: "Business", title: "Startup Founders", url: "https://www.linkedin.com/groups/startupfounders", description: "Connect with and learn from experienced startup founders and entrepreneurs.", media: "https://placehold.co/600x400/0077B5/fff?text=Startups", tags: ["Featured"], likes: 72 },
                { id: 21, platform: "WhatsApp", category: "Entertainment", title: "Movie Reviewers", url: "https://chat.whatsapp.com/moviereviewers", description: "Discuss and rate the latest movies with a passionate group.", media: "https://placehold.co/600x400/A020F0/fff?text=Reviews", tags: [], likes: 38 },
                { id: 22, platform: "YouTube", category: "Gaming", title: "Live Streams", url: "https://www.youtube.com/@livestreams", description: "Community for sharing and watching live gaming streams from top players.", media: "https://www.youtube.com/watch?v=Fj2F1l2hFzY", tags: [], likes: 50 },
                { id: 23, platform: "Discord", category: "Music", title: "Electronic Music", url: "https://discord.gg/edm", description: "Share and discover new electronic music and playlists.", media: "https://placehold.co/600x400/50C878/fff?text=Music", tags: [], likes: 44 },
                { id: 24, platform: "Telegram", category: "News", title: "World News Digest", url: "https://t.me/worldnewsdigest", description: "Daily news headlines from around the world, delivered straight to you.", media: "https://placehold.co/600x400/808080/fff?text=News", tags: ["Verified"], likes: 91 },
                { id: 25, platform: "Facebook", category: "Education", title: "History Enthusiasts", url: "https://www.facebook.com/groups/historyenthusiasts", description: "Explore historical events and figures with fellow history buffs.", media: "https://placehold.co/600x400/B0E0E6/fff?text=History", tags: [], likes: 29 },
                { id: 26, platform: "YouTube", category: "Art", title: "Digital Painting Tutorials", url: "https://www.youtube.com/watch?v=W_X94VzXF3k", description: "Learn how to create digital art from experienced artists.", media: "https://www.youtube.com/watch?v=W_X94VzXF3k", tags: [], likes: 65 }
            ];

            // --- STATE MANAGEMENT & DOM ELEMENTS ---
            const state = {
                currentPage: 1,
                linksPerPage: 9,
                searchTerm: '',
                currentPlatform: 'All',
                currentCategory: 'All',
                bookmarks: JSON.parse(localStorage.getItem('bookmarks')) || [],
                loading: false
            };

            const elements = {
                linksContainer: document.getElementById('links-container'),
                trendingContainer: document.getElementById('trending-links-container'),
                noResultsMessage: document.getElementById('no-results-message'),
                searchInput: document.getElementById('searchInput'),
                searchClearBtn: document.getElementById('searchClearBtn'),
                platformsGrid: document.getElementById('platforms-grid'),
                categoriesGrid: document.getElementById('categories-grid'),
                paginationControls: document.getElementById('pagination-controls'),
                prevBtn: document.getElementById('prevBtn'),
                nextBtn: document.getElementById('nextBtn'),
                pageInfo: document.getElementById('pageInfo'),
                pageJumpInput: document.getElementById('pageJumpInput'),
                modeToggleBtn: document.getElementById('mode-toggle'),
                modeIcon: document.getElementById('mode-icon'),
                loadingOverlay: document.getElementById('loadingOverlay'),
                alertModal: new bootstrap.Modal(document.getElementById('customAlertModal')),
                alertMessage: document.getElementById('alertMessage'),
                videoModal: new bootstrap.Modal(document.getElementById('videoModal')),
                videoIframe: document.getElementById('videoIframe'),
                shareModal: new bootstrap.Modal(document.getElementById('shareModal')),
                shareModalTitle: document.getElementById('shareTitle'),
                floatingBtn: document.querySelector('.floating-btn')
            };

            // --- UTILITY FUNCTIONS ---
            const showLoading = (show) => {
                state.loading = show;
                elements.loadingOverlay.classList.toggle('visible', show);
            };

            const showAlert = (message) => {
                elements.alertMessage.textContent = message;
                elements.alertModal.show();
            };

            const isYouTubeUrl = (url) => {
                return url && (url.includes('youtube.com/watch') || url.includes('youtu.be/'));
            };

            const getYouTubeEmbedUrl = (url) => {
                try {
                    const videoId = url.includes('youtu.be/') ? url.split('youtu.be/')[1].split('?')[0] : url.split('v=')[1].split('&')[0];
                    return `https://www.youtube.com/embed/${videoId}`;
                } catch (e) {
                    console.error("Failed to parse YouTube URL", e);
                    return null;
                }
            };

            const isTikTokUrl = (url) => {
                return url && url.includes('tiktok.com/');
            };

            const getTikTokEmbedUrl = (url) => {
                try {
                    const parts = url.split('/video/');
                    if (parts.length > 1) {
                        const videoId = parts[1].split('?')[0];
                        return `https://www.tiktok.com/embed/v2/${videoId}`;
                    }
                } catch (e) {
                    console.error("Failed to parse TikTok URL", e);
                }
                return null;
            };

            const formatLink = (link) => {
                const isVideo = isYouTubeUrl(link.media) || isTikTokUrl(link.media);
                let mediaHtml = `<img src="${link.media}" class="card-img-top" alt="${link.title}" onerror="this.onerror=null;this.src='https://placehold.co/600x400/232426/fff?text=Link'">`;
                
                if (isVideo) {
                    let thumbnailUrl = "https://placehold.co/600x400/232426/fff?text=Video+Preview";
                    if (isYouTubeUrl(link.media)) {
                        const videoId = getYouTubeEmbedUrl(link.media).split('/').pop();
                        thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
                    }
                    
                    mediaHtml = `
                        <div class="position-relative">
                            <img src="${thumbnailUrl}" class="card-img-top" alt="Video thumbnail">
                            <button class="play-btn" data-url="${link.media}">
                                <i class="fas fa-play"></i>
                            </button>
                        </div>
                    `;
                }

                const isBookmarked = state.bookmarks.includes(link.id);
                const bookmarkIcon = isBookmarked ? 'fa-solid' : 'fa-regular';

                const platformIcon = platformIcons[link.platform] || 'fas fa-link';
                const tagBadges = (link.tags || []).map(tag => `<span class="${tagBadgesConfig[tag]} btn-badge">${tag}</span>`).join('');
                
                let buttonText = 'Join Now';
                if (link.platform === 'YouTube') {
                    buttonText = 'Subscribe';
                } else if (link.platform === 'TikTok') {
                    buttonText = 'Follow';
                }

                return `
                    <div class="col animate__animated animate__fadeInLeft">
                        <div class="card h-100 shadow-sm rounded-4">
                            <div class="card-img-container">
                                ${mediaHtml}
                            </div>
                            <div class="card-body d-flex flex-column">
                                <div class="d-flex justify-content-between align-items-start mb-2">
                                    <div class="d-flex align-items-center">
                                        <i class="${platformIcon} me-2" title="${link.platform}"></i>
                                        <h5 class="card-title mb-0">${link.title}</h5>
                                    </div>
                                    <div class="d-flex gap-2">
                                        <button class="btn btn-sm btn-share" data-link-id="${link.id}">
                                            <i class="fas fa-share-alt"></i>
                                        </button>
                                        <button class="btn btn-sm btn-bookmark" data-id="${link.id}">
                                            <i class="${bookmarkIcon} fa-bookmark"></i>
                                        </button>
                                    </div>
                                </div>
                                <p class="card-text text-muted mb-3">${link.description}</p>
                                <div class="mt-auto d-flex justify-content-between align-items-center">
                                    <div class="d-flex gap-2">
                                        <a href="${link.url}" target="_blank" class="btn btn-primary rounded-pill btn-sm">
                                            ${buttonText}
                                        </a>
                                        <button class="btn btn-outline-secondary rounded-circle btn-sm btn-like" data-id="${link.id}">
                                            <i class="fas fa-heart"></i>
                                        </button>
                                        <span class="ms-1 align-self-center" id="likes-${link.id}">${link.likes || 0}</span>
                                    </div>
                                    <div class="d-flex gap-1">
                                        ${tagBadges}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            };


            const platformIcons = {
                "Facebook": "fab fa-facebook",
                "WhatsApp": "fab fa-whatsapp",
                "Telegram": "fab fa-telegram",
                "YouTube": "fab fa-youtube",
                "TikTok": "fab fa-tiktok",
                "Instagram": "fab fa-instagram",
                "Twitter": "fab fa-x-twitter",
                "LinkedIn": "fab fa-linkedin",
                "Discord": "fab fa-discord",
                "Reddit": "fab fa-reddit-alien"
            };
            
            const categoryIcons = {
                "All": "fas fa-globe",
                "Business / Marketing": "fas fa-briefcase",
                "Gaming / eSports": "fas fa-gamepad",
                "Education / Study": "fas fa-graduation-cap",
                "Sports / Fitness / Health": "fas fa-dumbbell",
                "Tech": "fas fa-robot",
                "Crypto": "fas fa-bitcoin",
                "Jobs": "fas fa-user-tie",
                "Entertainment": "fas fa-film",
                "Tutorials": "fas fa-chalkboard-teacher",
                "Lifestyle": "fas fa-heart",
                "Photography": "fas fa-camera",
                "Art": "fas fa-paint-brush",
                "News": "fas fa-newspaper",
                "Coding": "fas fa-code",
                "Memes": "fas fa-laugh-squint",
                "Music": "fas fa-music"
            };


            const tagBadgesConfig = {
                "Featured": "badge bg-primary",
                "Trending": "badge bg-warning text-dark",
                "Verified": "badge bg-success",
                "New": "badge bg-info"
            };

            // --- RENDER FUNCTIONS ---
            const getFilteredLinks = () => {
                return linksData.filter(link => {
                    const matchesSearch = !state.searchTerm ||
                        link.title.toLowerCase().includes(state.searchTerm) ||
                        link.description.toLowerCase().includes(state.searchTerm) ||
                        link.platform.toLowerCase().includes(state.searchTerm) ||
                        link.category.toLowerCase().includes(state.searchTerm);
                    const matchesPlatform = state.currentPlatform === 'All' || link.platform === state.currentPlatform;
                    const matchesCategory = state.currentCategory === 'All' || link.category === state.currentCategory;
                    return matchesSearch && matchesPlatform && matchesCategory;
                });
            };

            const renderTrendingLinks = () => {
                const trending = linksData.filter(link => link.tags.includes('Trending') || link.tags.includes('Featured')).slice(0, 5);
                elements.trendingContainer.innerHTML = trending.map(formatLink).join('');
            };

            const renderLinks = () => {
                showLoading(true);
                const filteredLinks = getFilteredLinks();
                const totalPages = Math.ceil(filteredLinks.length / state.linksPerPage);
                const start = (state.currentPage - 1) * state.linksPerPage;
                const end = start + state.linksPerPage;
                const linksToDisplay = filteredLinks.slice(start, end);

                elements.linksContainer.innerHTML = linksToDisplay.map(formatLink).join('');

                elements.noResultsMessage.classList.toggle('d-none', filteredLinks.length > 0);
                elements.paginationControls.classList.toggle('d-none', filteredLinks.length <= state.linksPerPage);

                updatePagination(totalPages, filteredLinks.length);
                setTimeout(() => showLoading(false), 300);
            };

            const updatePagination = (totalPages, totalLinks) => {
                elements.prevBtn.disabled = state.currentPage === 1;
                elements.nextBtn.disabled = state.currentPage === totalPages || totalLinks === 0;
                elements.pageInfo.textContent = `Page ${state.currentPage} of ${totalPages || 1}`;
                elements.pageJumpInput.value = state.currentPage;
            };

            const renderFilterGrids = () => {
                const platforms = ['All', ...new Set(linksData.map(link => link.platform))].sort();
                const categories = ['All', ...new Set(linksData.map(link => link.category))].sort();

                elements.platformsGrid.innerHTML = platforms.map(p => `
                    <div class="filter-item" data-filter-type="platform" data-filter-value="${p}">
                        <i class="${platformIcons[p] || 'fas fa-link'} filter-icon"></i>
                        <span class="filter-text">${p}</span>
                    </div>
                `).join('');

                elements.categoriesGrid.innerHTML = categories.map(c => `
                    <div class="filter-item" data-filter-type="category" data-filter-value="${c}">
                        <i class="${categoryIcons[c] || 'fas fa-tag'} filter-icon"></i>
                        <span class="filter-text">${c}</span>
                    </div>
                `).join('');
            };


            // --- HERO SECTION 3D ANIMATION ---
            const init3DHero = () => {
                const canvas = document.getElementById('hero-canvas');
                const scene = new THREE.Scene();
                const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
                const renderer = new THREE.WebGLRenderer({
                    canvas: canvas,
                    alpha: true
                });

                renderer.setSize(window.innerWidth, window.innerHeight);
                renderer.setPixelRatio(window.devicePixelRatio);
                renderer.setClearColor(0x000000, 0);

                const particles = new THREE.Group();
                scene.add(particles);

                const particleCount = 200;
                const geometry = new THREE.IcosahedronGeometry(1, 0);
                const material = new THREE.MeshLambertMaterial({
                    color: 0x00ffff,
                    wireframe: true
                });

                for (let i = 0; i < particleCount; i++) {
                    const mesh = new THREE.Mesh(geometry, material);
                    mesh.position.set(
                        (Math.random() - 0.5) * 200,
                        (Math.random() - 0.5) * 200,
                        (Math.random() - 0.5) * 200
                    );
                    mesh.rotation.set(
                        Math.random() * 2 * Math.PI,
                        Math.random() * 2 * Math.PI,
                        Math.random() * 2 * Math.PI
                    );
                    mesh.scale.setScalar(Math.random() * 0.5 + 0.5);
                    particles.add(mesh);
                }

                const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
                scene.add(ambientLight);
                const pointLight = new THREE.PointLight(0xffffff, 1);
                pointLight.position.set(10, 10, 10);
                scene.add(pointLight);

                camera.position.z = 50;

                const animate = () => {
                    requestAnimationFrame(animate);
                    particles.rotation.x += 0.001;
                    particles.rotation.y += 0.002;
                    renderer.render(scene, camera);
                };

                window.addEventListener('resize', () => {
                    camera.aspect = window.innerWidth / window.innerHeight;
                    camera.updateProjectionMatrix();
                    renderer.setSize(window.innerWidth, window.innerHeight);
                });

                animate();
            };

            // --- EVENT HANDLERS ---
            const handleSearchInput = () => {
                state.searchTerm = elements.searchInput.value.toLowerCase();
                state.currentPage = 1;
                renderLinks();
            };
            
            const handleFilterGridClick = (e) => {
                const item = e.target.closest('.filter-item');
                if (!item) return;

                const filterType = item.dataset.filterType;
                const value = item.dataset.filterValue;

                document.querySelectorAll(`.filter-item[data-filter-type="${filterType}"]`).forEach(el => {
                    el.classList.remove('selected');
                });

                item.classList.add('selected');

                if (filterType === 'platform') {
                    state.currentPlatform = value;
                    if (value !== 'All') {
                        document.querySelector('.filter-item[data-filter-type="category"][data-filter-value="All"]').classList.remove('selected');
                        state.currentCategory = 'All';
                    }
                } else if (filterType === 'category') {
                    state.currentCategory = value;
                    if (value !== 'All') {
                        document.querySelector('.filter-item[data-filter-type="platform"][data-filter-value="All"]').classList.remove('selected');
                        state.currentPlatform = 'All';
                    }
                }
                
                state.currentPage = 1;
                renderLinks();
            };

            const handleLike = (e) => {
                const button = e.target.closest('.btn-like');
                const linkId = parseInt(button.dataset.id, 10);
                const link = linksData.find(l => l.id === linkId);
                if (link) {
                    link.likes = (link.likes || 0) + 1;
                    const likesSpan = document.getElementById(`likes-${linkId}`);
                    if (likesSpan) {
                        likesSpan.textContent = link.likes;
                    }
                }
            };

            const handleBookmark = (e) => {
                const button = e.target.closest('.btn-bookmark');
                const linkId = parseInt(button.dataset.id, 10);
                const icon = button.querySelector('i');
                const index = state.bookmarks.indexOf(linkId);

                if (index > -1) {
                    state.bookmarks.splice(index, 1);
                    icon.classList.remove('fa-solid');
                    icon.classList.add('fa-regular');
                } else {
                    state.bookmarks.push(linkId);
                    icon.classList.remove('fa-regular');
                    icon.classList.add('fa-solid');
                }
                localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
            };

            const handleVideoPlay = (e) => {
                const button = e.target.closest('.play-btn');
                const videoUrl = button.dataset.url;
                
                if (isYouTubeUrl(videoUrl)) {
                    const embedUrl = getYouTubeEmbedUrl(videoUrl);
                    if (embedUrl) {
                        elements.videoIframe.src = embedUrl;
                        elements.videoModal.show();
                    } else {
                        showAlert('Could not get a valid YouTube embed URL.');
                    }
                } else if (isTikTokUrl(videoUrl)) {
                    const embedUrl = getTikTokEmbedUrl(videoUrl);
                    if (embedUrl) {
                        elements.videoIframe.src = embedUrl;
                        elements.videoModal.show();
                    } else {
                        showAlert('Could not get a valid TikTok embed URL.');
                    }
                }
            };

            const handleShare = (e) => {
                const button = e.target.closest('.btn-share');
                const linkId = parseInt(button.dataset.linkId, 10);
                const link = linksData.find(l => l.id === linkId);

                if (link) {
                    elements.shareModalTitle.textContent = link.title;
                    const encodedUrl = encodeURIComponent(link.url);
                    const encodedTitle = encodeURIComponent(link.title);

                    document.getElementById('share-facebook').href = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
                    document.getElementById('share-twitter').href = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
                    document.getElementById('share-whatsapp').href = `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`;
                    document.getElementById('share-telegram').href = `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`;

                    // Set up copy to clipboard functionality
                    document.getElementById('copy-link').onclick = () => {
                        const tempInput = document.createElement('input');
                        tempInput.value = link.url;
                        document.body.appendChild(tempInput);
                        tempInput.select();
                        document.execCommand('copy');
                        document.body.removeChild(tempInput);
                        elements.shareModal.hide();
                        showAlert('Link copied to clipboard!');
                    };

                    elements.shareModal.show();
                }
            };
            
            const handleScroll = () => {
                const scrollPosition = window.scrollY;
                const heroSectionHeight = elements.searchInput.getBoundingClientRect().bottom + window.scrollY;
                
                if (scrollPosition > heroSectionHeight) {
                    elements.floatingBtn.classList.add('visible');
                } else {
                    elements.floatingBtn.classList.remove('visible');
                }
            };

            const init = () => {
                renderFilterGrids();
                // Select 'All' filters by default
                document.querySelector('.filter-item[data-filter-type="platform"][data-filter-value="All"]').classList.add('selected');
                document.querySelector('.filter-item[data-filter-type="category"][data-filter-value="All"]').classList.add('selected');
                
                renderTrendingLinks();
                renderLinks();
                init3DHero();
            };

            // --- EVENT LISTENERS ---
            elements.searchInput.addEventListener('input', handleSearchInput);
            elements.searchClearBtn.addEventListener('click', () => {
                elements.searchInput.value = '';
                handleSearchInput();
            });
            
            elements.platformsGrid.addEventListener('click', handleFilterGridClick);
            elements.categoriesGrid.addEventListener('click', handleFilterGridClick);


            elements.prevBtn.addEventListener('click', () => {
                if (state.currentPage > 1) {
                    state.currentPage--;
                    renderLinks();
                }
            });

            elements.nextBtn.addEventListener('click', () => {
                const filteredLinks = getFilteredLinks();
                const totalPages = Math.ceil(filteredLinks.length / state.linksPerPage);
                if (state.currentPage < totalPages) {
                    state.currentPage++;
                    renderLinks();
                }
            });

            elements.pageJumpInput.addEventListener('change', (e) => {
                const totalPages = Math.ceil(getFilteredLinks().length / state.linksPerPage);
                let page = parseInt(e.target.value, 10);
                if (page > 0 && page <= totalPages) {
                    state.currentPage = page;
                    renderLinks();
                } else {
                    e.target.value = state.currentPage;
                }
            });

            elements.linksContainer.addEventListener('click', (e) => {
                if (e.target.closest('.btn-like')) handleLike(e);
                if (e.target.closest('.btn-bookmark')) handleBookmark(e);
                if (e.target.closest('.play-btn')) handleVideoPlay(e);
                if (e.target.closest('.btn-share')) handleShare(e);
            });

            // New event listener for trending links container
            elements.trendingContainer.addEventListener('click', (e) => {
                if (e.target.closest('.btn-like')) handleLike(e);
                if (e.target.closest('.btn-bookmark')) handleBookmark(e);
                if (e.target.closest('.play-btn')) handleVideoPlay(e);
                if (e.target.closest('.btn-share')) handleShare(e);
            });

            // Video modal cleanup
            document.getElementById('videoModal').addEventListener('hidden.bs.modal', () => {
                elements.videoIframe.src = '';
            });

            // Theme Toggle
            const storedTheme = localStorage.getItem('theme');
            if (storedTheme === 'dark') {
                document.body.classList.add('dark-mode');
                elements.modeIcon.classList.remove('fa-moon');
                elements.modeIcon.classList.add('fa-sun');
            } else {
                document.body.classList.remove('dark-mode');
                elements.modeIcon.classList.remove('fa-sun');
                elements.modeIcon.classList.add('fa-moon');
            }

            elements.modeToggleBtn.addEventListener('click', () => {
                if (document.body.classList.contains('dark-mode')) {
                    document.body.classList.remove('dark-mode');
                    localStorage.setItem('theme', 'light');
                    elements.modeIcon.classList.remove('fa-sun');
                    elements.modeIcon.classList.add('fa-moon');
                } else {
                    document.body.classList.add('dark-mode');
                    localStorage.setItem('theme', 'dark');
                    elements.modeIcon.classList.remove('fa-moon');
                    elements.modeIcon.classList.add('fa-sun');
                }
            });
            
            // Floating button visibility
            window.addEventListener('scroll', handleScroll);

            // --- INITIALIZE APP ---
            init();
        });