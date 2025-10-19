(function () {
  const bar = document.getElementById('dir-filter');
  const cards = Array.from(document.querySelectorAll('#projects-grid .project-card'));

  if (!bar || cards.length === 0) return;

  bar.addEventListener('click', (e) => {
    const btn = e.target.closest('.dir-btn');
    if (!btn) return;

    // toggle active button
    bar.querySelectorAll('.dir-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const target = btn.dataset.dir;
    cards.forEach(card => {
      if (target === 'all') {
        card.style.display = '';
        return;
      }
      const dirs = (card.dataset.dirs || '').split(/\s+/);
      card.style.display = dirs.includes(target) ? '' : 'none';
    });
  });
})();