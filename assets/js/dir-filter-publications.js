(function () {
  const bar = document.getElementById('pub-filter');
  const sections = ['pubs-selected', 'pubs-all']
    .map(id => document.getElementById(id))
    .filter(Boolean);

  // Collect all entries across sections
  const cards = sections.flatMap(sec => Array.from(sec.querySelectorAll('.pub-entry')));
  if (!bar || cards.length === 0) return;

  bar.addEventListener('click', (e) => {
    const btn = e.target.closest('.dir-btn');
    if (!btn) return;

    // toggle active
    bar.querySelectorAll('.dir-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const target = btn.dataset.dir;
    cards.forEach(card => {
      if (target === 'all') { card.style.display = ''; return; }
      const dirs = (card.dataset.dirs || '').split(/\s+/).filter(Boolean);
      card.style.display = dirs.includes(target) ? '' : 'none';
    });
  });
})();