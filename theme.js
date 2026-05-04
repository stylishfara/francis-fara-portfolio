(function () {
  const root = document.documentElement;
  const moon = '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>';
  const sun = '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>';

  let requestedTheme = null;
  try {
    requestedTheme = new URLSearchParams(window.location.search).get('theme');
  } catch (error) {
    requestedTheme = null;
  }

  try {
    if (requestedTheme === 'dark' || requestedTheme === 'light') {
      localStorage.setItem('theme', requestedTheme);
    }

    if (localStorage.getItem('theme') === 'dark') {
      root.classList.add('dark');
    } else if (requestedTheme === 'light') {
      root.classList.remove('dark');
    }
  } catch (error) {
    root.classList.toggle('dark', requestedTheme === 'dark');
  }

  function setThemeIcon(isDark) {
    document.querySelectorAll('[data-theme-icon], #themeIcon').forEach((icon) => {
      icon.innerHTML = isDark ? sun : moon;
    });
    document.querySelectorAll('[data-theme-toggle], #themeToggle').forEach((button) => {
      const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';
      button.setAttribute('aria-label', label);
      button.setAttribute('title', label);
    });
  }

  window.playThemeToggleSound = function playThemeToggleSound(isDark) {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(isDark ? 280 : 520, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(isDark ? 160 : 680, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.18, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.18);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.18);
      osc.onended = () => ctx.close();
    } catch (error) {
      // Browsers can block audio in some contexts; the theme change should still work.
    }
  };

  window.toggleTheme = function toggleTheme() {
    const isDark = root.classList.toggle('dark');
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch (error) {
      // Theme still applies for the current page if storage is unavailable.
    }

    const gbShell = document.getElementById('gbShell');
    if (gbShell) gbShell.classList.toggle('gb-dark', isDark);
    window.playThemeToggleSound(isDark);
    setThemeIcon(isDark);
  };

  document.addEventListener('DOMContentLoaded', function () {
    const isDark = root.classList.contains('dark');
    const gbShell = document.getElementById('gbShell');
    if (gbShell) gbShell.classList.toggle('gb-dark', isDark);
    setThemeIcon(isDark);
  });
})();
