// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved preference
if (localStorage.getItem('vibeable-dark-mode') === 'true') {
  body.classList.add('dark');
}

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  localStorage.setItem('vibeable-dark-mode', body.classList.contains('dark'));
  
  // Update icon
  const icon = darkModeToggle.querySelector('svg');
  if (body.classList.contains('dark')) {
    icon.innerHTML = '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
  } else {
    icon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
  }
});

// Active nav item highlighting
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    navItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
    // Close sidebar on mobile after nav click
    if (window.innerWidth <= 768) {
      closeSidebar();
    }
  });
});

// Mobile hamburger menu
const hamburgerBtn = document.getElementById('hamburgerBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebarOverlay');

function openSidebar() {
  sidebar.classList.add('open');
  overlay.classList.add('visible');
  document.body.style.overflow = 'hidden';
}

function closeSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('visible');
  document.body.style.overflow = '';
}

hamburgerBtn.addEventListener('click', openSidebar);
overlay.addEventListener('click', closeSidebar);

// Close sidebar on window resize to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    closeSidebar();
  }
});
