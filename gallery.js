const viewer = document.getElementById('viewer');
const image = document.getElementById('viewer-image');
const caption = document.getElementById('viewer-caption');
document.querySelectorAll('a.zoom').forEach(link => {
  link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey) return;
    event.preventDefault();
    image.src = link.href;
    image.alt = link.querySelector('img').alt;
    caption.textContent = link.dataset.caption;
    viewer.showModal();
  });
});
viewer.addEventListener('click', event => { if (event.target === viewer) viewer.close(); });
