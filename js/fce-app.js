// fce-app.js — FCE course logic (requires fce-data.js loaded first)

// ─── Progress tracking ───
const STORAGE_KEY = 'fce_watched';
function getWatched() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch { return {}; }
}
function setWatched(key) {
  const w = getWatched(); w[key] = true; localStorage.setItem(STORAGE_KEY, JSON.stringify(w));
}
function isWatched(key) { return !!getWatched()[key]; }

function getModuleProgress(mod) {
  let total = 0, done = 0;
  mod.sections.forEach(s => s.videos.forEach(v => { total++; if (isWatched(v.ytId || v.file)) done++; }));
  return { total, done };
}

// ─── Sidebar ───
let activeModuleId = null;

function collapseFceSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.add('collapsed');
  const btn = document.getElementById('fce-expand-btn');
  if (btn) btn.classList.add('visible');
}

function expandFceSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.remove('collapsed');
  const btn = document.getElementById('fce-expand-btn');
  if (btn) btn.classList.remove('visible');
}

function buildSidebar() {
  const sidebar = document.getElementById('sidebar');
  const main = COURSE_MODULES.filter(m => !m.number.startsWith('B'));
  const bonus = COURSE_MODULES.filter(m => m.number.startsWith('B'));

  let html = '<button class="sidebar-collapse-btn" onclick="collapseFceSidebar()" title="Recolher menu">&#10094;</button>';
  html += '<div class="sidebar-group-title">Curso Principal</div>';
  main.forEach(m => { html += sidebarItem(m); });
  html += '<div class="sidebar-group-title">Bonus</div>';
  bonus.forEach(m => { html += sidebarItem(m); });
  sidebar.innerHTML = html;
}

function sidebarItem(mod) {
  const p = getModuleProgress(mod);
  const pct = p.total ? Math.round(p.done / p.total * 100) : 0;
  const cls = mod.id === activeModuleId ? ' active' : '';
  const progCls = pct === 100 ? ' complete' : '';
  const progText = pct === 100 ? '100%' : (p.done > 0 ? pct + '%' : '');
  return `<div class="sidebar-item${cls}" data-id="${mod.id}" onclick="selectModule('${mod.id}')">
    <span class="sidebar-num">${mod.number}</span>
    <span class="sidebar-label">${mod.title}</span>
    ${progText ? `<span class="sidebar-progress${progCls}">${progText}</span>` : ''}
  </div>`;
}

// ─── Content ───
function selectModule(id) {
  activeModuleId = id;
  const mod = COURSE_MODULES.find(m => m.id === id);
  if (!mod) return;

  buildSidebar();
  renderContent(mod);

  // Close sidebar on mobile
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderContent(mod) {
  const content = document.getElementById('content');
  let html = `<div class="module-header">
    <div class="module-number">${mod.number}</div>
    <h2>${mod.title}</h2>`;

  if (mod.apostila) {
    const href = APOSTILA_BASE + encodeURIComponent(mod.apostila);
    html += `<a class="apostila-btn" href="${href}" target="_blank">
      <svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 2l5 5h-5V4zM6 20V4h5v7h7v9H6z"/></svg>
      Abrir Apostila (PDF)</a>`;
  }
  html += '</div>';

  mod.sections.forEach((sec, si) => {
    html += `<div class="section-block">`;
    if (mod.sections.length > 1 || sec.title !== mod.title) {
      html += `<div class="section-title">${sec.title}</div>`;
    }
    html += '<div class="video-list">';
    sec.videos.forEach((v, vi) => {
      const uid = `${mod.id}-${si}-${vi}`;
      const videoKey = v.ytId || v.file;
      const watched = isWatched(videoKey);
      html += `<div class="video-card" id="vc-${uid}">
        <div class="video-card-header" onclick="toggleVideo('${uid}', '${videoKey}')">
          <span class="video-title">${v.name}</span>
          <span class="video-check${watched ? ' watched' : ''}" id="check-${uid}">&#10003;</span>
          <span class="video-toggle" id="arrow-${uid}">&#9662;</span>
        </div>
        <div class="video-player-wrap" id="vp-${uid}">
          <iframe src="" data-src="https://www.youtube.com/embed/${v.ytId}?rel=0" allowfullscreen loading="lazy"></iframe>
        </div>
      </div>`;
    });
    html += '</div></div>';
  });

  if (mod.apostilaContent) {
    html += '<div class="apostila-content">';
    html += '<div class="section-title">Conteudo da Apostila</div>';
    html += mod.apostilaContent;
    html += '</div>';
  }

  content.innerHTML = html;
  content.style.animation = 'none';
  content.offsetHeight;
  content.style.animation = 'fadeIn 0.4s ease';
}

function toggleVideo(uid, videoKey) {
  const wrap = document.getElementById('vp-' + uid);
  const arrow = document.getElementById('arrow-' + uid);
  const isOpen = wrap.classList.contains('open');

  // Close all others — clear iframe src to stop playback
  document.querySelectorAll('.video-player-wrap.open').forEach(el => {
    el.classList.remove('open');
    const iframe = el.querySelector('iframe');
    if (iframe) iframe.src = '';
  });
  document.querySelectorAll('.video-toggle.open').forEach(el => el.classList.remove('open'));

  if (!isOpen) {
    wrap.classList.add('open');
    arrow.classList.add('open');
    // Lazy-load: set iframe src on first open
    const iframe = wrap.querySelector('iframe');
    if (iframe && !iframe.src.includes('youtube')) {
      iframe.src = iframe.dataset.src;
    }
    // Mark as watched after opening
    if (videoKey) markWatched(videoKey, uid);
  }
}

function markWatched(key, uid) {
  if (isWatched(key)) return;
  setWatched(key);
  const check = document.getElementById('check-' + uid);
  if (check) check.classList.add('watched');
  buildSidebar();
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('sidebar-overlay').classList.toggle('open');
}

// ─── Init ───
buildSidebar();
selectModule(COURSE_MODULES[0].id);
