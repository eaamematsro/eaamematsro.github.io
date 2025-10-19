---
layout: page
title: Projects
nav: true
permalink: /projects/
nav_order: 30
---

<!-- ===== Controls: Search, View toggle, Filter bar ===== -->
<div class="proj-controls">
  <input id="proj-search" placeholder="Search projects…" aria-label="Search projects">
  <div class="view-toggle">
    <button data-view="grid" class="active" title="Grid view">☷</button>
    <button data-view="list" title="List view">☰</button>
  </div>
</div>

<div class="dir-filter" id="dir-filter">
  <button class="dir-btn active" data-dir="all">All</button>
  {% for pair in site.data.directions %}
    {% assign key = pair[0] %}
    {% assign info = pair[1] %}
    <button class="dir-btn" data-dir="{{ key }}">{{ info.label }}</button>
  {% endfor %}
</div>

<!-- ===== Projects grid ===== -->
<div class="projects-grid" id="projects-grid">
  {% assign projects = site.projects | sort: "date" | reverse %}
  {% assign EMPTY = "" | split: "" %}

  {% for p in projects %}
    {% assign ptitle    = p.title | default: p.name %}
    {% assign pimg      = p.thumbnail | default: p.thumb | default: p.image | default: p.img %}
    {% assign psummary  = p.summary | default: p.description | default: p.excerpt %}
    {% assign dirs      = p.directions | default: EMPTY %}
    {% capture projslug %}{{ p.slug | default: p.title | default: p.name | default: p.basename_without_ext | slugify | downcase }}{% endcapture %}

    <div class="project-card{% if p.featured %} featured{% endif %}"
         data-dirs="{{ dirs | join: ' ' }}"
         data-projslug="{{ projslug }}">

      {% if pimg %}
        <a href="{{ p.url | relative_url }}" class="project-link" aria-label="Open project: {{ ptitle | escape }}">
          <img class="project-thumb" loading="lazy"
               src="{{ pimg | relative_url }}"
               alt="{{ ptitle | escape }}">
        </a>
      {% endif %}

      <div class="pc-body">
        <h3 class="project-title">
          <a href="{{ p.url | relative_url }}">{{ ptitle }}</a>
        </h3>

        {% if psummary %}<p class="project-summary">{{ psummary }}</p>{% endif %}

        <!-- Direction + Subdirection badges -->
        <div class="dir-badges">
          {% for d in dirs %}
            {% assign dinfo = site.data.directions[d] %}
            {% assign label = dinfo.label | default: d %}
            {% assign clr = dinfo.color | default: '#444' %}
            <span class="dir-badge" style="--badge-color: {{ clr }}">{{ label }}</span>
          {% endfor %}

          {% assign subdirs = p.subdirs | default: p.keywords_sub | default: p.subdir | default: '' %}
          {% if subdirs %}
            {% for s in subdirs %}
              {% assign sinfo = site.data.subdirections[s] %}
              {% assign slabel = sinfo.label | default: s %}
              {% assign sclr = sinfo.color | default: '#999' %}
              <span class="sub-badge sub-{{ s }}" style="color: {{ sclr }}; border-color: {{ sclr }};">{{ slabel }}</span>
            {% endfor %}
          {% endif %}
        </div>

        <!-- Publication + quick view actions -->
        <p class="project-actions">
          <a href="{{ '/publications/' | relative_url }}?project={{ projslug | uri_escape }}">See related publications →</a>
          <a href="#" class="quickview qv-btn" data-slug="{{ projslug }}" aria-label="Quick view">Quick view</a>
        </p>
      </div>

      <!-- Embedded JSON for Quick View -->
      <script type="application/json" class="qv-json">
      {
        "slug": {{ projslug | jsonify }},
        "title": {{ ptitle | default: "" | jsonify }},
        "summary": {{ psummary | default: "" | jsonify }},
        "problem": {{ p.problem | default: "" | jsonify }},
        "approach": {{ p.approach | default: "" | jsonify }},
        "results": {{ p.results | default: "" | jsonify }},
        "highlights": {{ p.highlights | default: EMPTY | jsonify }},
        "artifacts": {% if p.artifacts %}{{ p.artifacts | jsonify }}{% else %}{}{% endif %},
        "status": {{ p.status | default: "" | jsonify }},
        "timeframe": {{ p.timeframe | default: "" | jsonify }},
        "directions": {{ dirs | jsonify }}
      }
      </script>
    </div>
  {% endfor %}
</div>

<!-- ===== Quick-view modal ===== -->
<div id="proj-modal" hidden>
  <div class="pm-backdrop"></div>
  <div class="pm-card">
    <div class="pm-head">
      <h3 class="pm-title"></h3>
      <button class="pm-close" aria-label="Close">×</button>
    </div>
    <div class="pm-body"></div>
  </div>
</div>

<!-- ===== Scripts ===== -->
<script src="{{ '/assets/js/dir-filter.js' | relative_url }}"></script>
<script>
(function(){
  const grid = document.getElementById('projects-grid');

  // ---- Pre-apply direction from URL (?dir=rl, ?direction=..., or #dir-rl)
  (function initDirFromURL(){
    const params = new URLSearchParams(window.location.search);
    let dir = params.get('dir') || params.get('direction') || null;
    if (!dir && window.location.hash && window.location.hash.startsWith('#dir-')) {
      dir = window.location.hash.replace('#dir-','');
    }
    if (!dir) return;
    const norm = dir.toLowerCase().trim().replace(/-/g, '_');
    let btn = document.querySelector('.dir-btn[data-dir="' + norm + '"]');
    if (!btn) {
      const wanted = dir.toLowerCase().trim();
      document.querySelectorAll('.dir-btn').forEach(b => {
        if (!btn && b.textContent.trim().toLowerCase() === wanted) btn = b;
      });
    }
    if (btn) {
      btn.click();
      document.querySelectorAll('.dir-btn.active').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    }
  })();

  // ---- Search
  const search = document.getElementById('proj-search');
  if (search) {
    search.addEventListener('input', () => {
      const s = search.value.toLowerCase();
      grid.querySelectorAll('.project-card').forEach(c => {
        const t = c.innerText.toLowerCase();
        c.style.display = t.includes(s) ? '' : 'none';
      });
    });
  }

  // ---- Grid/List toggle
  document.querySelectorAll('.view-toggle button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('.view-toggle .active')?.classList.remove('active');
      btn.classList.add('active');
      grid.dataset.view = btn.dataset.view;
    });
  });

  // ========== QUICK VIEW ==========
  const modal = document.getElementById('proj-modal');
  const body  = modal.querySelector('.pm-body');
  const close = modal.querySelector('.pm-close');
  const backdrop = modal.querySelector('.pm-backdrop');
  function hide(){ modal.hidden = true; body.innerHTML = ''; }
  [close, backdrop].forEach(el => el.addEventListener('click', hide));

  function pill(t){ return `<span class="pill">${t}</span>`; }
  function btn(label, href){ return href ? `<a class="btn-pill" href="${href}" target="_blank" rel="noopener">${label}</a>` : ''; }

  // Build a collapsible section block with an optional gradient mask
  function collapsibleBlock(innerHTML, open=false){
    return `
      <div class="qv-collapsible ${open ? 'is-open' : ''}">
        ${innerHTML}
      </div>
      <div class="qv-mask"></div>
      <button type="button" class="qv-toggle" aria-expanded="${open ? 'true' : 'false'}">
        ${open ? 'Show less' : 'Read more'}
      </button>
    `;
  }

  function buildIntro(d){
    const sections = [];

    // Summary (collapsible if longer than ~180 chars)
    if (d.summary) {
      const isLong = d.summary.replace(/\s+/g,' ').trim().length > 180;
      const content = `<p>${d.summary}</p>`;
      sections.push(`
        <section class="qv-section">
          <h4 class="qv-h">Quick summary</h4>
          ${isLong ? collapsibleBlock(content, false) : content}
        </section>
      `);
    }

    // Meta
    const meta = [];
    if (d.status)    meta.push(pill(`status: ${d.status}`));
    if (d.timeframe) meta.push(pill(`timeframe: ${d.timeframe}`));
    if (meta.length){
      sections.push(`
        <section class="qv-section">
          <h4 class="qv-h">At a glance</h4>
          <div class="qv-meta">${meta.join(' ')}</div>
        </section>
      `);
    }

    // Problem / Approach (collapsible if combined is long)
    if (d.problem || d.approach) {
      const paHTML = `
        ${d.problem  ? `<p><strong>Problem.</strong> ${d.problem}</p>`   : ``}
        ${d.approach ? `<p><strong>Approach.</strong> ${d.approach}</p>` : ``}
      `;
      const len = (d.problem || '').length + (d.approach || '').length;
      sections.push(`
        <section class="qv-section">
          <h4 class="qv-h">Problem &amp; approach</h4>
          ${len > 360 ? collapsibleBlock(paHTML, false) : paHTML}
        </section>
      `);
    }

    // Results
    if (d.results) {
      sections.push(`
        <section class="qv-section">
          <h4 class="qv-h">Results / status</h4>
          <p>${d.results}</p>
        </section>
      `);
    }

    // Highlights (collapsible if many points)
    if (Array.isArray(d.highlights) && d.highlights.length) {
      const list = `<ul class="qv-highlights">${d.highlights.map(h => `<li>${h}</li>`).join('')}</ul>`;
      sections.push(`
        <section class="qv-section">
          <h4 class="qv-h">Highlights</h4>
          ${d.highlights.length > 3 ? collapsibleBlock(list, false) : list}
        </section>
      `);
    }

    // Artifacts
    const arts = d.artifacts || {};
    if (arts.code || arts.data || arts.demo) {
      sections.push(`
        <section class="qv-section">
          <h4 class="qv-h">Resources</h4>
          <div class="qv-actions">
            ${btn('Code', arts.code)}${btn('Data', arts.data)}${btn('Demo', arts.demo)}
          </div>
        </section>
      `);
    }
    return sections.join('');
  }

  // Open quick view
  document.querySelectorAll('.quickview').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const card = link.closest('.project-card');
      if (!card) return;

      // Read embedded JSON
      let d = {};
      try { d = JSON.parse(card.querySelector('.qv-json')?.textContent || '{}'); } catch(e) {}

      const thumb  = card.querySelector('img.project-thumb')?.outerHTML || '';
      const title  = card.querySelector('.project-title a')?.textContent?.trim()
                     || card.querySelector('.project-title')?.textContent?.trim()
                     || d.title || '';
      const badges = card.querySelector('.dir-badges')?.outerHTML || '';
      const intro  = buildIntro(d);
      const pubLink = d.slug
        ? `<a class="btn-link" href="{{ '/publications/' | relative_url }}?project=${'${d.slug}'}">Related publications →</a>`
        : '';

      body.innerHTML = `
        <div class="qv-header">
          ${thumb}
          <div class="qv-head-text">
            <h3>${title}</h3>
            ${badges}
          </div>
        </div>
        <div class="qv-content">
          ${intro}
          <div class="qv-footer-links">${pubLink}</div>
        </div>`;

      // Wire up toggles
      body.querySelectorAll('.qv-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
          const wrap = btn.previousElementSibling?.previousElementSibling; // .qv-collapsible
          if (!wrap) return;
          const open = wrap.classList.toggle('is-open');
          btn.setAttribute('aria-expanded', open ? 'true' : 'false');
          btn.textContent = open ? 'Show less' : 'Read more';
        });
      });

      modal.hidden = false;
    });
  });
})();
</script>