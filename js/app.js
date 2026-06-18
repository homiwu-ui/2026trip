document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  const state = { currentDay: null, favorites: JSON.parse(localStorage.getItem('favDays') || '[]') };

  function render() {
    app.innerHTML = '';
    app.appendChild(createNav());
    app.appendChild(createHero());
    app.appendChild(createOverview());
    app.appendChild(createChurchesSection());
    app.appendChild(createRestaurantsSection());
    app.appendChild(createDayDetails());
    app.appendChild(createBackToTop());

    setupCards();
    setupBackToTop();
    setupHeroScroll();
    setupParallax();
    setupNavScroll();
    setupScrollReveal();
    setupRipple();
    setupImageLoading();
  }

  function createNav() {
    const nav = document.createElement('nav');
    nav.className = 'nav';
    nav.id = 'nav';
    nav.innerHTML = `
      <div class="nav-logo">✈️ Italy 2026</div>
      <button class="menu-toggle" id="menuToggle" aria-label="選單">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
      <ul class="nav-links" id="navLinks">
        <li><a data-nav="home" class="active">首頁</a></li>
        <li><a data-nav="overview">行程總覽</a></li>
        <li><a data-nav="churches">教堂推薦</a></li>
        <li><a data-nav="restaurants">餐廳推薦</a></li>
        <li><a data-nav="favorites">我的收藏</a></li>
        <li><button class="theme-toggle" id="themeToggle" aria-label="切換主題">
          ${document.documentElement.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙'}
        </button></li>
      </ul>
    `;

    const menuBtn = nav.querySelector('#menuToggle');
    menuBtn.addEventListener('click', () => {
      nav.querySelector('#navLinks').classList.toggle('open');
      menuBtn.classList.toggle('open');
    });

    nav.querySelectorAll('[data-nav]').forEach(link => {
      link.addEventListener('click', (e) => {
        nav.querySelector('#navLinks').classList.remove('open');
        menuBtn.classList.remove('open');
        nav.querySelectorAll('[data-nav]').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        const target = link.dataset.nav;
        if (target === 'home') {
          document.getElementById('dayDetails').style.display = 'none';
          document.querySelectorAll('.day-detail').forEach(d => d.classList.remove('active'));
          scrollToSection('hero');
        } else if (target === 'overview') {
          document.getElementById('dayDetails').style.display = 'none';
          document.querySelectorAll('.day-detail').forEach(d => d.classList.remove('active'));
          scrollToSection('overview');
        } else if (target === 'churches') {
          document.getElementById('dayDetails').style.display = 'none';
          document.querySelectorAll('.day-detail').forEach(d => d.classList.remove('active'));
          scrollToSection('churches');
        } else if (target === 'restaurants') {
          document.getElementById('dayDetails').style.display = 'none';
          document.querySelectorAll('.day-detail').forEach(d => d.classList.remove('active'));
          scrollToSection('restaurants');
        } else if (target === 'favorites') showFavorites();
      });
    });

    const themeToggle = nav.querySelector('#themeToggle');
    themeToggle.addEventListener('click', toggleTheme);

    return nav;
  }

  function createHero() {
    const hero = document.createElement('section');
    hero.className = 'hero';
    hero.id = 'hero';
    hero.innerHTML = `
      <div class="hero-bg" id="heroBg">
        <img src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1600" alt="Italy" loading="lazy">
      </div>
      <div class="hero-content">
        <div class="hero-flag">
          <span></span><span></span><span></span>
        </div>
        <h1>義大利 12 天</h1>
        <p class="subtitle">親子仲夏之旅 · 南進北出全攻略</p>
        <p class="date-range">2026.07.22 — 2026.08.02</p>
        <div class="hero-divider"></div>
        <button class="hero-cta btn-ripple" id="heroCta">探索行程 ↓</button>
        <div class="hero-scroll" id="heroScroll">
          <span class="scroll-arrow">↓</span>
          <span>向下探索</span>
        </div>
      </div>
    `;
    return hero;
  }

  function setupHeroScroll() {
    const scrollEl = document.getElementById('heroScroll');
    const ctaEl = document.getElementById('heroCta');
    const goToOverview = () => scrollToSection('overview');
    if (scrollEl) scrollEl.addEventListener('click', goToOverview);
    if (ctaEl) ctaEl.addEventListener('click', goToOverview);
  }

  function setupParallax() {
    const heroBg = document.getElementById('heroBg');
    if (!heroBg) return;
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          const maxScroll = window.innerHeight;
          const amount = Math.min(scrolled / maxScroll, 1);
          heroBg.style.transform = `translateY(${scrolled * 0.15}px)`;
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  function setupNavScroll() {
    const nav = document.getElementById('nav');
    if (!nav) return;
    const hero = document.getElementById('hero');
    const observer = new IntersectionObserver(
      ([entry]) => {
        nav.classList.toggle('scrolled', !entry.isIntersecting);
      },
      { rootMargin: '-1px 0px 0px 0px' }
    );
    observer.observe(hero);
  }

  function setupScrollReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    setTimeout(() => {
      document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    }, 100);
  }

  function setupRipple() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.btn-ripple');
      if (!btn) return;
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'ripple-effect';
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
      btn.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    });
  }

  function setupImageLoading() {
    function handleImage(img) {
      if (img.complete && img.naturalWidth) {
        img.classList.add('loaded');
        if (img.closest('.card-thumb')) img.closest('.card-thumb').classList.add('loaded');
        if (img.closest('.hero-bg')) img.closest('.hero-bg').classList.add('loaded');
        if (img.closest('.detail-header-bg')) img.closest('.detail-header-bg').classList.add('loaded');
        if (img.closest('.attraction-carousel')) img.closest('.attraction-carousel').classList.add('loaded');
      } else {
        img.addEventListener('load', () => {
          img.classList.add('loaded');
          if (img.closest('.card-thumb')) img.closest('.card-thumb').classList.add('loaded');
          if (img.closest('.hero-bg')) img.closest('.hero-bg').classList.add('loaded');
          if (img.closest('.detail-header-bg')) img.closest('.detail-header-bg').classList.add('loaded');
          if (img.closest('.attraction-carousel')) img.closest('.attraction-carousel').classList.add('loaded');
        });
      }
    }
    setTimeout(() => {
      document.querySelectorAll('img').forEach(handleImage);
      const observer = new MutationObserver(mutations => {
        mutations.forEach(m => {
          m.addedNodes.forEach(node => {
            if (node.nodeType === 1) {
              node.querySelectorAll('img').forEach(handleImage);
            }
          });
        });
      });
      observer.observe(document.getElementById('app'), { childList: true, subtree: true });
    }, 50);
  }

  function createOverview() {
    const section = document.createElement('section');
    section.className = 'section';
    section.id = 'overview';
    section.innerHTML = `
      <h2 class="section-title">📋 完整行程</h2>
      <p class="section-subtitle">從羅馬到米蘭，12 天 4 座城市的完美旅程</p>
      <div class="day-grid" id="dayGrid"></div>
    `;

    const grid = section.querySelector('#dayGrid');

    const cardImages = {
      1: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800',
      2: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=800',
      3: 'https://images.unsplash.com/photo-1577083288073-40892c0860a4?w=800',
      4: 'https://images.unsplash.com/photo-1748191024085-391d76b8d5ed?w=800',
      5: 'https://images.unsplash.com/photo-1767037447367-99ffa711277c?w=800',
      6: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=800',
      7: 'https://images.unsplash.com/photo-1761589339308-542aee20bbbb?w=800',
      8: 'https://images.unsplash.com/photo-1574962696438-d3b30b145233?w=800',
      9: 'https://images.unsplash.com/photo-1542277235-f9877df42ad7?w=800',
      10: 'https://images.unsplash.com/photo-1538472241850-7085af704f13?w=800',
      11: 'https://images.unsplash.com/photo-1575399877732-9363881b907e?w=800',
      12: 'https://images.unsplash.com/photo-1516296270211-f3ae5494e65d?w=800',
    };

    itinerary.forEach((day, index) => {
      const card = document.createElement('div');
      card.className = `day-card fade-in day-card--${day.day}`;
      card.style.setProperty('--reveal-index', index);
      card.dataset.day = day.day;
      const thumbImg = cardImages[day.day] || day.attractions[0]?.image || '';
      card.innerHTML = `
        <div class="card-thumb">
          <img src="${thumbImg}" alt="${day.title}" loading="lazy">
          <div class="card-thumb-overlay">
            <span class="card-day-label">Day ${day.day}</span>
          </div>
        </div>
        <div class="card-body">
          <div class="day-number">${day.date} · ${day.dayOfWeek}</div>
          <h3>${day.title}</h3>
          <div class="day-subtitle">${day.subtitle}</div>
          <div class="day-region">📍 ${day.region}</div>
          <div class="day-desc">${day.summary[0]}</div>
        </div>
      `;
      card.addEventListener('click', () => showDay(day.day));
      grid.appendChild(card);
    });

    return section;
  }

  let churchFilter = '全部';

  function createChurchesSection() {
    const section = document.createElement('section');
    section.className = 'section';
    section.id = 'churches';
    section.innerHTML = `
      <h2 class="section-title">⛪ 教堂推薦</h2>
      <p class="section-subtitle">17 座必訪教堂．依城市分類，含門票、開放時間與必看重點</p>
      <div class="church-filters" id="churchFilters">
        <button class="church-filter active" data-city="全部">全部 (17)</button>
        <button class="church-filter" data-city="羅馬">羅馬 (4)</button>
        <button class="church-filter" data-city="佛羅倫斯">佛羅倫斯 (3)</button>
        <button class="church-filter" data-city="比薩">比薩 (2)</button>
        <button class="church-filter" data-city="威尼斯">威尼斯 (4)</button>
        <button class="church-filter" data-city="米蘭">米蘭 (4)</button>
      </div>
      <div class="church-grid" id="churchGrid"></div>
    `;

    const grid = section.querySelector('#churchGrid');
    renderChurches(grid, '全部');

    section.addEventListener('click', (e) => {
      const btn = e.target.closest('.church-filter');
      if (!btn) return;
      section.querySelectorAll('.church-filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      churchFilter = btn.dataset.city;
      const g = document.getElementById('churchGrid');
      renderChurches(g, churchFilter);
      scrollToSection('churches');
    });

    return section;
  }

  function renderChurches(grid, city) {
    const filtered = city === '全部' ? churches : churches.filter(c => c.city === city);
    grid.innerHTML = filtered.map((ch, i) => `
      <div class="church-card fade-in visible" data-id="${ch.id}" style="--reveal-index:${i}">
        <div class="church-card-img">
          <img src="${ch.image}" alt="${ch.name}" loading="lazy">
          <div class="church-card-city">${ch.city} · Day ${ch.day}</div>
        </div>
        <div class="church-card-body">
          <h3>${ch.name}</h3>
          <div class="church-card-en">${ch.nameEn}</div>
          <div class="church-tags">
            ${ch.tags.map(t => `<span class="church-tag">${t}</span>`).join('')}
          </div>
          <p class="church-desc">${ch.description}</p>
          <div class="church-meta">
            <div class="church-meta-item">
              <span class="meta-label">💰</span>
              <span>${ch.ticket}</span>
            </div>
            <div class="church-meta-item">
              <span class="meta-label">🕐</span>
              <span>${ch.suggestedTime}</span>
            </div>
            <div class="church-meta-item">
              <span class="meta-label">📍</span>
              <span>${ch.address}</span>
              <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ch.name + ' ' + ch.address)}" target="_blank" rel="noopener" class="map-icon-link" title="在 Google Maps 中開啟">
                <svg viewBox="0 0 24 24" class="map-icon" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </a>
            </div>
          </div>
          <div class="church-mustsee">
            <strong>✨ 必看：</strong>${ch.mustSee}
          </div>
          <button class="church-detail-btn" data-id="${ch.id}" data-city="${ch.city}">查看詳細資訊 →</button>
        </div>
      </div>
    `).join('');
    setupChurchEvents(grid);
  }

  function setupChurchEvents(grid) {
    grid.querySelectorAll('.church-detail-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id);
        const ch = churches.find(c => c.id === id);
        if (!ch) return;
        grid.querySelectorAll('.church-card').forEach(c => c.style.display = 'none');
        showChurchDetail(ch, grid);
      });
    });

  }

  function showChurchDetail(church, grid) {
    const detail = document.createElement('div');
    detail.className = 'church-detail-view fade-in visible';
    detail.id = `church-detail-${church.id}`;
    detail.innerHTML = `
      <div class="church-detail-header">
        <img src="${church.image}" alt="${church.name}">
        <div class="church-detail-header-overlay">
          <button class="back-btn church-back-btn" id="churchBackBtn">← 回到列表</button>
          <h1>${church.name}</h1>
          <div class="church-detail-city">${church.city} · Day ${church.day} · ${church.nameEn}</div>
        </div>
      </div>
      <div class="church-detail-body">
        <div class="info-card fade-in visible">
          <h2>📖 介紹</h2>
          <p style="color:var(--text-light);line-height:1.8;">${church.description}</p>
        </div>
        <div class="info-card fade-in visible">
          <h2>ℹ️ 詳細資訊</h2>
          <div class="church-detail-table">
            <div class="detail-row">
              <span class="detail-label">地址</span>
              <span>${church.address}</span>
              <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(church.name + ' ' + church.address)}" target="_blank" rel="noopener" class="map-icon-link" title="在 Google Maps 中開啟" style="margin-left:8px;">
                <svg viewBox="0 0 24 24" class="map-icon" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </a>
            </div>
            <div class="detail-row">
              <span class="detail-label">開放時間</span>
              <span>${church.hours}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">建議時段</span>
              <span>${church.suggestedTime}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">門票</span>
              <span>${church.ticket}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">✨ 必看</span>
              <span style="font-weight:600;color:var(--accent);">${church.mustSee}</span>
            </div>
          </div>
        </div>
      </div>
    `;
    grid.appendChild(detail);

    document.getElementById('churchBackBtn').addEventListener('click', () => {
      grid.innerHTML = '';
      detail.remove();
      const gridReload = document.getElementById('churchGrid');
      renderChurches(gridReload, churchFilter);
    });
  }

  let restaurantFilter = '全部';

  function createRestaurantsSection() {
    const section = document.createElement('section');
    section.className = 'section';
    section.id = 'restaurants';
    section.innerHTML = `
      <h2 class="section-title">🍝 餐廳推薦</h2>
      <p class="section-subtitle">61 間精選餐廳·依城市分類，含價格、推薦菜色與網路評分</p>
      <div class="restaurant-filters" id="restaurantFilters">
        <button class="restaurant-filter active" data-city="全部">全部 (61)</button>
        <button class="restaurant-filter" data-city="羅馬">羅馬 (19)</button>
        <button class="restaurant-filter" data-city="佛羅倫斯">佛羅倫斯 (12)</button>
        <button class="restaurant-filter" data-city="威尼斯">威尼斯 (8)</button>
        <button class="restaurant-filter" data-city="米蘭">米蘭 (14)</button>
      </div>
      <div class="restaurant-grid" id="restaurantGrid"></div>
      <div class="restaurant-legend" style="margin-top:2rem;padding:1rem;background:var(--card-bg);border-radius:12px;font-size:0.85rem;color:var(--text-light);">
        <p>💰 費用說明：€ = €10 以下 | €€ = €10–25 | €€€ = €25–50 | €€€€ = €50 以上（每人）</p>
        <p>🦐 = Gambero Rosso 紅蝦評鑑餐廳</p>
      </div>
    `;

    const grid = section.querySelector('#restaurantGrid');
    renderRestaurants(grid, '全部');

    section.addEventListener('click', (e) => {
      const btn = e.target.closest('.restaurant-filter');
      if (!btn) return;
      section.querySelectorAll('.restaurant-filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      restaurantFilter = btn.dataset.city;
      const g = document.getElementById('restaurantGrid');
      renderRestaurants(g, restaurantFilter);
      scrollToSection('restaurants');
    });

    return section;
  }

  function renderRestaurants(grid, city) {
    const cityMap = { "羅馬": "羅馬", "佛羅倫斯": "佛羅倫斯", "威尼斯": "威尼斯", "米蘭": "米蘭" };
    const filtered = city === '全部' ? restaurants : restaurants.filter(r => r.city === city);
    grid.innerHTML = filtered.map((r, i) => `
      <div class="restaurant-card fade-in visible" data-id="${r.id}" style="--reveal-index:${i}">
        <div class="restaurant-card-body">
          <div class="restaurant-meta-top">
            <span class="restaurant-city">${r.city} · Day ${r.day}</span>
            <span class="restaurant-price">${r.price}</span>
          </div>
          <h3>${r.name}</h3>
          ${r.nameEn ? `<div class="restaurant-en">${r.nameEn}</div>` : ''}
          <div class="restaurant-cuisine">${r.cuisine}</div>
          <div class="restaurant-tags">
            ${r.tags.map(t => `<span class="restaurant-tag">${t}</span>`).join('')}
          </div>
          <p class="restaurant-desc">${r.description}</p>
          <div class="restaurant-meta">
            <div class="restaurant-meta-item">
              <span class="meta-label">👍</span>
              <span>${r.mustEat}</span>
            </div>
            <div class="restaurant-meta-item">
              <span class="meta-label">📍</span>
              <span>${r.address}</span>
              <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r.name + ' ' + r.address)}" target="_blank" rel="noopener" class="map-icon-link" title="在 Google Maps 中開啟" style="margin-left:4px;">
                <svg viewBox="0 0 24 24" class="map-icon" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </a>
            </div>
            ${r.rating ? `<div class="restaurant-meta-item"><span class="meta-label">⭐</span><span>${r.rating}</span></div>` : ''}
          </div>
        </div>
      </div>
    `).join('');
    setupRestaurantEvents(grid);
  }

  function setupRestaurantEvents(grid) {
  }

  function createDayDetails() {
    const container = document.createElement('div');
    container.id = 'dayDetails';
    container.style.display = 'none';

    itinerary.forEach(day => {
      const detail = document.createElement('div');
      detail.className = 'day-detail';
      detail.id = `day-${day.day}`;

      const coverImages = day.attractions.map(a => a.image);
      const heroImg = coverImages[0] || 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1600';

      detail.innerHTML = `
        <div class="detail-header">
          <div class="detail-header-bg">
            <img src="${heroImg}" alt="${day.title}" loading="lazy">
          </div>
          <div class="detail-header-content">
            <button class="back-btn" onclick="scrollToSection('overview')">← 回到行程總覽</button>
            <h1>Day ${day.day} · ${day.title}</h1>
            <div class="detail-date">
              <span>📅 ${day.date} (${day.dayOfWeek})</span>
              <span>${day.emoji}</span>
            </div>
          </div>
        </div>
        <div class="detail-body">
          ${renderHighlights(day)}
          ${renderSchedule(day)}
          ${renderTransport(day)}
          ${renderAttractions(day)}
          ${renderFood(day)}
          ${renderHotel(day)}
          ${renderTips(day)}
          ${renderMap(day)}
        </div>
      `;

      container.appendChild(detail);
    });

    return container;
  }

  function renderHighlights(day) {
    return `
      <div class="info-card fade-in">
        <h2>🌟 今日重點</h2>
        <ul style="padding-left:20px;display:flex;flex-direction:column;gap:8px;">
          ${day.highlights.map(h => `<li style="font-size:0.95rem;">${h}</li>`).join('')}
        </ul>
      </div>
    `;
  }

  function renderSchedule(day) {
    return `
      <div class="info-card fade-in">
        <h2>⏰ 行程時間表</h2>
        <div class="timeline">
          ${day.schedule.map((s, i) => `
            <div class="timeline-item fade-in" style="--reveal-index:${i}">
              <div class="time">${s.time}</div>
              <div class="activity">${s.activity}</div>
              ${s.note ? `<div class="note">${s.note}</div>` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  function renderTransport(day) {
    return `
      <div class="info-card fade-in">
        <h2>🚌 交通資訊</h2>
        <div class="transport-list">
          ${day.transport.map(t => `
            <div class="transport-item">
              <span class="mode">${t.mode}</span>
              <span class="detail">${t.detail}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  function renderAttractions(day) {
    return `
      <div class="info-card fade-in">
        <h2>🏛️ 景點介紹</h2>
        <div class="attraction-carousel" id="carousel-${day.day}">
          ${day.attractions.map((a, i) => `
            <img class="carousel-slide ${i === 0 ? 'active' : ''}" 
                 src="${a.image}" 
                 alt="${a.name}" 
                 loading="lazy"
                 data-index="${i}">
          `).join('')}
          ${day.attractions.length > 1 ? `
            <button class="carousel-btn prev" data-day="${day.day}">‹</button>
            <button class="carousel-btn next" data-day="${day.day}">›</button>
          ` : ''}
        </div>
        ${day.attractions.length > 1 ? `
          <div class="carousel-dots" id="dots-${day.day}">
            ${day.attractions.map((_, i) => `
              <button class="carousel-dot ${i === 0 ? 'active' : ''}" 
                      data-index="${i}" data-day="${day.day}"></button>
            `).join('')}
          </div>
        ` : ''}
        ${day.attractions.map(a => {
          const mapQuery = encodeURIComponent(`${a.name} ${day.region} Italy`);
          return `
          <div class="attraction-item">
            <h3 style="display:flex;align-items:center;gap:8px;">
              <span>📍 ${a.name}</span>
              <a href="https://www.google.com/maps/search/?api=1&query=${mapQuery}" target="_blank" rel="noopener" class="map-icon-link" title="在 Google Maps 中開啟">
                <svg viewBox="0 0 24 24" class="map-icon" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </a>
            </h3>
            <p>${a.description}</p>
            ${a.tip ? `<div class="tip">💡 ${a.tip}</div>` : ''}
          </div>`;
        }).join('')}
      </div>
    `;
  }

  function renderFood(day) {
    return `
      <div class="info-card fade-in">
        <h2>🍝 美食推薦</h2>
        <div class="food-grid">
          ${day.food.map(f => `
            <div class="food-card">
              <div class="food-type">${f.type}</div>
              <h4>${f.name}</h4>
              <div class="food-recommend">👍 ${f.recommend}</div>
              <div class="food-price">💰 ${f.price}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  function renderHotel(day) {
    return `
      <div class="info-card fade-in">
        <h2>🏨 住宿資訊</h2>
        <div class="hotel-card">
          <div class="hotel-icon">🏠</div>
          <div>
            <h3>${day.hotel.name}</h3>
            <div class="hotel-address">📍 ${day.hotel.address}</div>
            ${day.hotel.note ? `<div class="hotel-note">💬 ${day.hotel.note}</div>` : ''}
          </div>
        </div>
      </div>
    `;
  }

  function renderTips(day) {
    return `
      <div class="info-card fade-in">
        <h2>💡 注意事項</h2>
        <ul class="tips-list">
          ${day.tips.map(t => `<li>${t}</li>`).join('')}
        </ul>
      </div>
    `;
  }

  function renderMap(day) {
    return `
      <div class="info-card fade-in">
        <h2>🗺️ 地圖</h2>
        <div class="map-container">
          <iframe src="${day.mapEmbed}" loading="lazy" allowfullscreen></iframe>
        </div>
      </div>
    `;
  }

  function createBackToTop() {
    const btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.id = 'backToTop';
    btn.innerHTML = '↑';
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    return btn;
  }

  function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';
    html.setAttribute('data-theme', isDark ? 'light' : 'dark');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
    document.getElementById('themeToggle').textContent = isDark ? '🌙' : '☀️';
  }

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (!el) return;
    const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height'));
    window.scrollTo({ top: el.offsetTop - navH - 20, behavior: 'smooth' });
    history.replaceState(null, '', `#${id}`);
  }

  function showDay(dayNum) {
    const details = document.getElementById('dayDetails');
    document.querySelectorAll('.day-detail').forEach(d => d.classList.remove('active'));
    const target = document.getElementById(`day-${dayNum}`);
    if (target) {
      details.style.display = 'block';
      target.classList.add('active');
      setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 100);
      history.replaceState(null, '', `#day-${dayNum}`);
      state.currentDay = dayNum;
    }
  }

  function setupCards() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.carousel-btn');
      const dot = e.target.closest('.carousel-dot');
      let day, targetIdx;

      if (btn) {
        day = btn.dataset.day;
        const carousel = document.getElementById(`carousel-${day}`);
        const slides = carousel.querySelectorAll('.carousel-slide');
        const current = carousel.querySelector('.carousel-slide.active');
        const currentIdx = parseInt(current.dataset.index);
        if (btn.classList.contains('next')) {
          targetIdx = (currentIdx + 1) % slides.length;
        } else {
          targetIdx = (currentIdx - 1 + slides.length) % slides.length;
        }
      } else if (dot) {
        day = dot.dataset.day;
        targetIdx = parseInt(dot.dataset.index);
      } else {
        return;
      }

      const carousel = document.getElementById(`carousel-${day}`);
      const slides = carousel.querySelectorAll('.carousel-slide');
      slides.forEach(s => s.classList.remove('active'));
      slides[targetIdx].classList.add('active');

      const dots = document.getElementById(`dots-${day}`);
      if (dots) {
        dots.querySelectorAll('.carousel-dot').forEach(d => d.classList.remove('active'));
        dots.querySelector(`.carousel-dot[data-index="${targetIdx}"]`).classList.add('active');
      }
    });
  }

  function setupBackToTop() {
    window.addEventListener('scroll', () => {
      const btn = document.getElementById('backToTop');
      if (!btn) return;
      if (window.scrollY > 300) btn.classList.add('visible');
      else btn.classList.remove('visible');
    });
  }

  function showFavorites() {
    const favs = JSON.parse(localStorage.getItem('favDays') || '[]');
    if (favs.length === 0) {
      alert('📌 還沒有收藏行程喔！點擊每日行程的 ⭐ 按鈕即可收藏。');
      return;
    }
    const dayGrid = document.getElementById('dayGrid');
    const firstFav = itinerary.find(d => d.day === favs[0]);
    if (firstFav) showDay(firstFav.day);
  }

  function toggleFavorite(dayNum) {
    let favs = JSON.parse(localStorage.getItem('favDays') || '[]');
    const idx = favs.indexOf(dayNum);
    if (idx > -1) favs.splice(idx, 1);
    else favs.push(dayNum);
    localStorage.setItem('favDays', JSON.stringify(favs));
    state.favorites = favs;
  }

  function initTheme() {
    const saved = localStorage.getItem('theme');
    if (saved) {
      document.documentElement.setAttribute('data-theme', saved);
    }
  }

  initTheme();

  render();

  makeAutoCarousels();

  function makeAutoCarousels() {
    setInterval(() => {
      document.querySelectorAll('.attraction-carousel').forEach(carousel => {
        const slides = carousel.querySelectorAll('.carousel-slide');
        if (slides.length < 2) return;
        const current = carousel.querySelector('.carousel-slide.active');
        const currentIdx = parseInt(current.dataset.index);
        const nextIdx = (currentIdx + 1) % slides.length;
        slides.forEach(s => s.classList.remove('active'));
        slides[nextIdx].classList.add('active');
        const day = carousel.id.replace('carousel-', '');
        const dots = document.getElementById(`dots-${day}`);
        if (dots) {
          dots.querySelectorAll('.carousel-dot').forEach(d => d.classList.remove('active'));
          dots.querySelector(`.carousel-dot[data-index="${nextIdx}"]`).classList.add('active');
        }
      });
    }, 5000);
  }

  window.scrollToSection = scrollToSection;
  window.showDay = showDay;
  window.toggleFavorite = toggleFavorite;
});

document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  e.preventDefault();
  const id = link.getAttribute('href').slice(1);
  if (window.scrollToSection) {
    window.scrollToSection(id);
  }
});