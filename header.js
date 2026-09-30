(function () {
  'use strict';

  var SESSION_KEY = 'mindtest_user';

  function getUser() {
    try {
      var raw = localStorage.getItem(SESSION_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = String(str || '');
    return div.innerHTML;
  }

  function logout() {
    try {
      localStorage.removeItem(SESSION_KEY);
      localStorage.removeItem('mindtest_is_guest');
    } catch (e) {}
    window.location.reload();
  }

  function createAvatar(user) {
    var loginBtn = document.querySelector('.btn-login');
    if (!loginBtn) return;

    var letter = (user.username || user.email || '?').charAt(0).toUpperCase();
    var name = user.username || 'Пользователь';
    var email = user.email || '';

    loginBtn.style.display = 'none';

    var wrap = document.createElement('div');
    wrap.className = 'mt-avatar-wrap';
    wrap.innerHTML =
      '<button class="mt-avatar-btn" id="mtAvatarBtn" aria-label="Аккаунт">' + escapeHtml(letter) + '</button>' +
      '<div class="mt-avatar-menu" id="mtAvatarMenu">' +

        '<div class="mt-avatar-head">' +
          '<div class="mt-avatar-big">' + escapeHtml(letter) + '</div>' +
          '<div class="mt-avatar-info">' +
            '<div class="mt-avatar-name">' + escapeHtml(name) + '</div>' +
            '<div class="mt-avatar-email">' + escapeHtml(email) + '</div>' +
          '</div>' +
        '</div>' +

        '<div class="mt-avatar-divider"></div>' +

        '<a href="#" class="mt-avatar-item" data-coming-soon="true">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>' +
          'Профиль' +
        '</a>' +

        '<a href="#" class="mt-avatar-item" data-coming-soon="true">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>' +
          'Настройки' +
        '</a>' +

        '<a href="#" class="mt-avatar-item" data-coming-soon="true">' +
          '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/></svg>' +
          'Premium подписка' +
        '</a>' +

        '<a href="#" class="mt-avatar-item" data-coming-soon="true">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 15 8.5l7 .9-5 4.8 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.8 7-.9L12 2z"/></svg>' +
          'Мои награды' +
        '</a>' +

        '<a href="#" class="mt-avatar-item" data-coming-soon="true">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M18.7 8 13 13.7 9 9.7 3 15.7"/></svg>' +
          'Мои результаты' +
        '</a>' +

        '<a href="#" class="mt-avatar-item" data-coming-soon="true">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>' +
          'Помощь' +
        '</a>' +

        '<div class="mt-avatar-divider"></div>' +

        '<button type="button" class="mt-avatar-item mt-avatar-logout" id="mtAvatarLogout">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>' +
          'Выйти' +
        '</button>' +

      '</div>';

    loginBtn.parentNode.insertBefore(wrap, loginBtn);

    var avatarBtn = document.getElementById('mtAvatarBtn');
    var menu = document.getElementById('mtAvatarMenu');
    var logoutBtn = document.getElementById('mtAvatarLogout');

    avatarBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      menu.classList.toggle('open');
    });

    document.addEventListener('click', function (e) {
      if (!wrap.contains(e.target)) {
        menu.classList.remove('open');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        menu.classList.remove('open');
      }
    });

    logoutBtn.addEventListener('click', function () {
      logout();
    });

    var stubs = wrap.querySelectorAll('[data-coming-soon]');
    for (var i = 0; i < stubs.length; i++) {
      stubs[i].addEventListener('click', function (e) {
        e.preventDefault();
        menu.classList.remove('open');
        alert('Раздел появится в ближайшее время 💜');
      });
    }
  }

  function init() {
    var user = getUser();
    if (user) {
      createAvatar(user);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
