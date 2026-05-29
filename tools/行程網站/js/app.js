document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  const state = { currentDay: null, favorites: JSON.parse(localStorage.getItem('favDays') || '[]') };

  function render() {
    app.innerHTML = '';
    app.appendChild(createNav());
    app.appendChild(createHero());
    app.appendChild(createOverview());
    app.appendChild(createDayDetails());
    app.appendChild(createBackToTop());

    setupCards();
    setupBackToTop();
    setupHeroScroll();
  }

  function createNav() {
    const nav = document.createElement('nav');
    nav.className = 'nav';
    nav.id = 'nav';
    nav.innerHTML = `
      <div class="nav-logo">✈️ Italy 2026</div>
      <button class="menu-toggle" id="menuToggle" aria-label="選單">☰</button>
      <ul class="nav-links" id="navLinks">
        <li><a data-nav="home" class="active">首頁</a></li>
        <li><a data-nav="overview">行程總覽</a></li>
        <li><a data-nav="favorites">我的收藏</a></li>
        <li><button class="theme-toggle" id="themeToggle" aria-label="切換主題">
          ${document.documentElement.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙'}
        </button></li>
      </ul>
    `;

    nav.querySelector('#menuToggle').addEventListener('click', () => {
      nav.querySelector('#navLinks').classList.toggle('open');
    });

    nav.querySelectorAll('[data-nav]').forEach(link => {
      link.addEventListener('click', (e) => {
        nav.querySelector('#navLinks').classList.remove('open');
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
      <div class="hero-bg">
        <img src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1600" alt="Italy" loading="lazy">
      </div>
      <div class="hero-content">
        <h1>🇮🇹 義大利 12 天</h1>
        <p class="subtitle">親子仲夏之旅 · 南進北出全攻略</p>
        <p class="date-range">2026.07.22 — 2026.08.02</p>
        <div class="hero-scroll" id="heroScroll" style="cursor:pointer">
          <span>向下探索</span>
          <span>↓</span>
        </div>
      </div>
    `;
    return hero;
  }

  function setupHeroScroll() {
    const el = document.getElementById('heroScroll');
    if (el) {
      el.addEventListener('click', () => scrollToSection('overview'));
    }
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
    itinerary.forEach((day, index) => {
      const card = document.createElement('div');
      card.className = 'day-card fade-in';
      card.dataset.day = day.day;
      card.innerHTML = `
        <div class="day-emoji">${day.emoji}</div>
        <div class="day-number">Day ${day.day} · ${day.date}</div>
        <h3>${day.title} ${day.subtitle}</h3>
        <div class="day-region">📍 ${day.region}</div>
        <div class="day-desc">${day.summary[0]}</div>
        <div class="day-date">📅 ${day.dayOfWeek} · ${day.date}</div>
      `;
      card.addEventListener('click', () => showDay(day.day));
      grid.appendChild(card);
    });

    return section;
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
          ${day.schedule.map(s => `
            <div class="timeline-item">
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
        ${day.attractions.map(a => `
          <div class="attraction-item">
            <h3>📍 ${a.name}</h3>
            <p>${a.description}</p>
            ${a.tip ? `<div class="tip">💡 ${a.tip}</div>` : ''}
          </div>
        `).join('')}
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
      if (!btn) return;
      const day = btn.dataset.day;
      const carousel = document.getElementById(`carousel-${day}`);
      const slides = carousel.querySelectorAll('.carousel-slide');
      const current = carousel.querySelector('.carousel-slide.active');
      const currentIdx = parseInt(current.dataset.index);
      slides.forEach(s => s.classList.remove('active'));
      let nextIdx;
      if (btn.classList.contains('next')) {
        nextIdx = (currentIdx + 1) % slides.length;
      } else {
        nextIdx = (currentIdx - 1 + slides.length) % slides.length;
      }
      slides[nextIdx].classList.add('active');
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
        slides.forEach(s => s.classList.remove('active'));
        const nextIdx = (currentIdx + 1) % slides.length;
        slides[nextIdx].classList.add('active');
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