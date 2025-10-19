---
layout: page
title: Research
nav: true
nav_order: 20
permalink: /research/
---

<!-- ===== 1. Vision ===== -->
## Understanding Flexible Intelligence

My research asks how intelligent systems, both biological and artificial, learn to act flexibly in structured but uncertain environments. I integrate reinforcement learning, probabilistic inference, and systems neuroscience to uncover principles of adaptive control.

I’m particularly interested in how hierarchical, compositional, and self organizing structure emerges from experience: how the brain and algorithms learn reusable subskills, infer latent goals, and adapt strategies on the fly. This perspective bridges levels: from motor control and neural dynamics to machine learning architectures and embodied robotics.

Ultimately, I aim to develop a unified theory of flexible behavior that both explains neural computation and inspires more adaptive AI.

---
<!-- ===== Research Directions (cards) ===== -->
## Research Directions

<!-- Scoped styles (single source of truth) -->
<style>
:root{
  /* Transparency knob: 0 = fully transparent, 0.30 ≈ quite solid */
  --card-opacity: 0.05;
}

/* Grid */
.rd-scope{
  display:grid;
  grid-template-columns:repeat(auto-fit, minmax(260px,1fr));
  gap:1.1rem;
  margin-top:.75rem;
}

/* Card shell (uses --card-opacity) */
.rd-scope .research-card{
  --dir-fg: var(--dir-color, #64748b);
  background: color-mix(in oklab, var(--dir-fg) calc(var(--card-opacity) * 100%), transparent);
  border: 1px solid color-mix(in oklab, var(--dir-fg) 30%, transparent);
  border-radius: 16px;
  padding: 1rem 1rem 1.1rem;
  box-shadow: 0 4px 18px rgba(0,0,0,.06);
  transition: transform .15s ease, box-shadow .2s ease, border-color .2s ease, background .2s ease;
}
.rd-scope .research-card:hover{
  transform: translateY(-1px);
  box-shadow: 0 10px 28px rgba(0,0,0,.10);
  border-color: color-mix(in oklab, var(--dir-fg) 55%, transparent);
  background: color-mix(in oklab, var(--dir-fg) calc((var(--card-opacity) + 0.05) * 100%), transparent);
}

/* Header row */
.rd-scope .rc-head{display:flex;align-items:center;justify-content:space-between;gap:.5rem;margin-bottom:.25rem;}
.rd-scope .dir-heading{margin:0;font-size:1.05rem;font-weight:700;letter-spacing:.2px;}

/* Count pill */
.rd-scope .dir-count{
  display:inline-flex;align-items:center;justify-content:center;
  min-width:1.7rem;height:1.7rem;padding:0 .4rem;border-radius:999px;
  font-size:.78rem;font-weight:600;
  background: color-mix(in oklab, var(--dir-fg) 18%, #fff);
  border: 1px solid color-mix(in oklab, var(--dir-fg) 45%, #fff);
}

/* Body + CTA */
.rd-scope .dir-description{margin:.25rem 0 .8rem;line-height:1.55;opacity:.9}
.rd-scope .dir-cta{
  display:inline-block;text-decoration:none;font-weight:600;font-size:.9rem;
  padding:.38rem .8rem;border-radius:999px;color:inherit;
  border:1px solid color-mix(in oklab, var(--dir-fg) 55%, transparent);
  transition: background .2s ease, color .2s ease, transform .15s ease, border-color .2s ease;
}
.rd-scope .research-card:hover .dir-cta{
  transform: translateY(-1px);
  color: var(--global-bg-color, #fff);
  background: color-mix(in oklab, var(--dir-fg) 70%, #64748b);
  border-color: color-mix(in oklab, var(--dir-fg) 70%, transparent);
}

/* Dark mode */
@media (prefers-color-scheme: dark){
  :root{ --card-opacity: 0.12; } /* a touch stronger in dark */
  .rd-scope .research-card{ box-shadow: 0 6px 24px rgba(0,0,0,.25); }
}
</style>

<div class="research-grid rd-scope">
  {% for pair in site.data.directions %}
    {% assign key  = pair[0] %}
    {% assign info = pair[1] %}
    {% assign dir_projects = site.projects | where_exp: "p", "p.directions and p.directions contains key" %}
    {% assign count = dir_projects | size %}

    <article class="research-card"
             id="dir-{{ key }}"
             style="--dir-color: {{ info.color | default: '#64748b' }}">
      <header class="rc-head">
        <h3 class="dir-heading">{{ info.label }}</h3>
        {% if count and count > 0 %}
          <span class="dir-count" aria-label="Project count">{{ count }}</span>
        {% endif %}
      </header>

      {% if info.description %}
        <p class="dir-description">{{ info.description }}</p>
      {% endif %}

      <a class="dir-cta" href="{{ '/projects/' | relative_url }}?dir={{ key }}">
        Explore projects →
      </a>
    </article>
  {% endfor %}
</div>

---
<!-- ===== 3. Research trajectory ===== -->
## Research Trajectory

My PhD work (with Larry Abbott and Mark Churchland at Columbia) focused on how motor cortex implements flexible, high-dimensional control. This work revealed that neural dynamics can reorganize compositionally, expressing different “subskills” as needed.

At the Kempner Institute, my research expands these ideas into hierarchical reinforcement learning and robotics, building algorithms and models that learn and adapt with similar compositional flexibility.

Looking forward, I aim to connect these approaches across levels—from neural circuits to robot policies—to uncover general principles of intelligent behavior.