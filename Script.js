const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const form = document.getElementById('regForm');
form.addEventListener('submit', event => {
  event.preventDefault();

  const entry = Object.fromEntries(new FormData(form).entries());
  entry.createdAt = new Date().toISOString();

  const saved = JSON.parse(localStorage.getItem('nexoraSoloEntries') || '[]');
  saved.push(entry);
  localStorage.setItem('nexoraSoloEntries', JSON.stringify(saved));

  document.getElementById('message').textContent =
    'Interest saved on this device. It has NOT been sent to the organizer.';
  form.reset();
});
