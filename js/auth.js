/**
 * auth.js — NFR Staff Portal
 * Unified auth module. Load on every protected page.
 * Exposes window.NFRAuth (new API) and window.auth (backwards-compat for training JS).
 */

(function () {
  'use strict';

  // ── User config ────────────────────────────────────────────────────────────
  // portals[] controls which dashboard cards each user sees AND which pages they can access.

  const NFR_USERS = {
    jose:  { name: 'Jose Martinez', role: 'owner',  employee: null,    portals: ['agreements','po','jen','calculator','contract','flooring','training-manager'] },
    maria: { name: 'Maria',         role: 'office', employee: 'maria', portals: ['agreements','po','jen','flooring','training-employee'] },
    jen:   { name: 'Jen',           role: 'ops',    employee: null,    portals: ['jen','flooring','training-employee'] },
    scott: { name: 'Scott',         role: 'field',  employee: 'scott', portals: ['training-employee'] },
    jorge: { name: 'Jorge',         role: 'field',  employee: 'jorge', portals: ['flooring','training-employee'] },
  };

  // ── Password storage (base64, keyed by username) ───────────────────────────
  // Compatible with the existing nfr_staff_passwords store from old index.html.

  function getPwStore()   { return JSON.parse(localStorage.getItem('nfr_staff_passwords') || '{}'); }
  function savePwStore(o) { localStorage.setItem('nfr_staff_passwords', JSON.stringify(o)); }
  function encode(pw)     { return btoa(unescape(encodeURIComponent(pw))); }

  function hasPassword(username) { return !!getPwStore()[username]; }
  function checkPassword(username, pw) { return getPwStore()[username] === encode(pw); }
  function setPassword(username, pw) {
    var s = getPwStore();
    s[username] = encode(pw);
    savePwStore(s);
  }

  // ── Login ──────────────────────────────────────────────────────────────────

  function login(username, password) {
    var u = NFR_USERS[username];
    if (!u) return { ok: false, reason: 'unknown-user' };
    if (!hasPassword(username)) return { ok: false, reason: 'no-password' };
    if (!checkPassword(username, password)) return { ok: false, reason: 'bad-password' };

    var session = {
      user:       username,
      name:       u.name,
      role:       u.role,
      employee:   u.employee,
      portals:    u.portals,
      loggedInAt: new Date().toISOString(),
    };

    try {
      sessionStorage.setItem('nfr_session', JSON.stringify(session));
    } catch (e) {
      return { ok: false, reason: 'storage-error' };
    }

    // Write training backwards-compat session keys so training JS files work unchanged.
    var isManager  = u.portals.indexOf('training-manager')  !== -1;
    var isEmployee = u.portals.indexOf('training-employee') !== -1;
    if (isManager) {
      sessionStorage.setItem('tp_role',     'manager');
      sessionStorage.setItem('tp_employee', '');
      sessionStorage.setItem('tp_name',     u.name);
    } else if (isEmployee) {
      sessionStorage.setItem('tp_role',     'employee');
      sessionStorage.setItem('tp_employee', u.employee || '');
      sessionStorage.setItem('tp_name',     u.name);
    }

    return { ok: true, session: session };
  }

  // ── Logout ─────────────────────────────────────────────────────────────────

  function logout() {
    try {
      sessionStorage.removeItem('nfr_session');
      sessionStorage.removeItem('tp_role');
      sessionStorage.removeItem('tp_employee');
      sessionStorage.removeItem('tp_name');
    } catch (e) { /* ignore */ }
    window.location.href = 'index.html';
  }

  // ── Session ────────────────────────────────────────────────────────────────

  function getSession() {
    try {
      return JSON.parse(sessionStorage.getItem('nfr_session') || 'null');
    } catch (e) {
      return null;
    }
  }

  // ── requireAuth ────────────────────────────────────────────────────────────
  // Call at the top of every protected page: NFRAuth.requireAuth('portal-key');
  // Redirects to index.html if not logged in or user lacks access to that portal.

  function requireAuth(portalKey) {
    var session = getSession();
    if (!session) {
      window.location.replace('index.html');
      return null;
    }
    if (portalKey && session.portals.indexOf(portalKey) === -1) {
      window.location.replace('index.html');
      return null;
    }
    return session;
  }

  // ── canAccess ──────────────────────────────────────────────────────────────
  // Returns bool — use for conditional UI without redirecting.

  function canAccess(portal) {
    var session = getSession();
    return !!(session && session.portals.indexOf(portal) !== -1);
  }

  // ── Public API ─────────────────────────────────────────────────────────────

  window.NFRAuth = {
    login:        login,
    logout:       logout,
    getSession:   getSession,
    requireAuth:  requireAuth,
    canAccess:    canAccess,
    // Internals exposed for index.html first-time setup flow
    hasPassword:  hasPassword,
    setPassword:  setPassword,
    users:        NFR_USERS,
  };

  // ── Backwards-compat: window.auth ──────────────────────────────────────────
  // Training JS files (training-employee.js, training-manager.js) call:
  //   auth.requireAuth('employee') / auth.requireAuth('manager')
  //   auth.logout
  //   auth.getSession()
  // The tp_role/tp_employee/tp_name keys are written at login above.

  window.auth = {
    requireAuth: function (role) {
      // role = 'employee' | 'manager' (training portal convention)
      var portalKey = role === 'manager' ? 'training-manager' : 'training-employee';
      var session   = requireAuth(portalKey);
      if (!session) return null;
      // Return in training-portal session shape
      return {
        role:     sessionStorage.getItem('tp_role')     || role,
        employee: sessionStorage.getItem('tp_employee') || '',
        name:     sessionStorage.getItem('tp_name')     || session.name,
      };
    },
    logout:     logout,
    getSession: function () {
      return {
        role:     sessionStorage.getItem('tp_role')     || '',
        employee: sessionStorage.getItem('tp_employee') || '',
        name:     sessionStorage.getItem('tp_name')     || '',
      };
    },
  };

})();
