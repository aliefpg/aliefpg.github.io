function toggleExp(row) {
  const isOpen = row.classList.contains('open');
  document.querySelectorAll('.exp-row').forEach(r => {
    r.classList.remove('open');
    r.querySelector('.exp-bullets').classList.remove('open');
  });
  if (!isOpen) {
    row.classList.add('open');
    row.querySelector('.exp-bullets').classList.add('open');
  }
}

const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
