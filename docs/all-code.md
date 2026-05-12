# NFR Tools — Full Source Bundle

Generated 2026-05-12. Every file in the repo, with paths as headings. Copy whatever you need.

## Table of contents

- [`netlify.toml`](#netlify-toml)
- [`index.html`](#index-html)
- [`agreement-portal.html`](#agreement-portal-html)
- [`po-portal.html`](#po-portal-html)
- [`jen-portal.html`](#jen-portal-html)
- [`contract.html`](#contract-html)
- [`flooring-workorder.html`](#flooring-workorder-html)
- [`proposal-calculator.html`](#proposal-calculator-html)
- [`training-employee.html`](#training-employee-html)
- [`training-manager.html`](#training-manager-html)
- [`js/auth.js`](#js-auth-js)
- [`js/training-content.js`](#js-training-content-js)
- [`js/training-employee.js`](#js-training-employee-js)
- [`js/training-manager.js`](#js-training-manager-js)
- [`js/training-tracker.js`](#js-training-tracker-js)
- [`css/training-styles.css`](#css-training-styles-css)


---

## `netlify.toml` <a id="netlify-toml"></a>

```toml
[build]
  publish = "."
  ignore = "git status --short"
```

---

## `index.html` <a id="index-html"></a>

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>NFR Staff Portal — Sign In</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" crossorigin="anonymous">
<style>
  :root {
    --primary:  #3A6B5F;
    --primary2: #2E5548;
    --accent:   #E07B54;
    --light:    #F2F8F6;
    --border:   #A8CEBF;
    --text:     #2C2C2C;
    --muted:    #6B7B7A;
    --error:    #DC2626;
    --success:  #059669;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }

  /* ── LOGIN SCREEN ─────────────────────────────────────────────── */
  body.login-mode {
    font-family: 'Lato', sans-serif;
    background: linear-gradient(145deg, #2E5548 0%, #4A8C7E 100%);
    min-height: 100vh;
    display: flex; align-items: center; justify-content: center;
    padding: 20px;
  }

  .login-card {
    background: #fff;
    border-radius: 14px;
    width: 100%; max-width: 420px;
    box-shadow: 0 20px 60px rgba(0,0,0,.25);
    overflow: hidden;
  }

  .card-header {
    background: var(--primary);
    padding: 32px 36px 28px;
    text-align: center;
    color: #fff;
  }
  .card-header h1 {
    font-family: 'Playfair Display', serif;
    font-size: 22px; font-weight: 700;
    margin-bottom: 4px;
  }
  .card-header p {
    font-size: 12px; opacity: .75; letter-spacing: .5px; text-transform: uppercase;
  }
  .card-header .nfr-dot {
    display: inline-block; width: 40px; height: 40px; border-radius: 50%;
    background: rgba(255,255,255,.15); margin-bottom: 14px;
    font-size: 20px; line-height: 40px;
  }

  .card-body { padding: 32px 36px; }

  .step { display: none; }
  .step.active { display: block; }

  .field { margin-bottom: 18px; }
  .field label {
    display: block; font-size: 11px; font-weight: 700; color: var(--muted);
    text-transform: uppercase; letter-spacing: .4px; margin-bottom: 6px;
  }
  .field input {
    width: 100%; border: 1.5px solid var(--border); border-radius: 7px;
    padding: 11px 14px; font-family: 'Lato', sans-serif; font-size: 14px;
    color: var(--text); outline: none; transition: border-color .15s;
    background: #fff;
  }
  .field input:focus { border-color: var(--primary); }
  .field input[type=password] { letter-spacing: 2px; }

  .btn {
    width: 100%; padding: 13px; border: none; border-radius: 7px;
    font-family: 'Lato', sans-serif; font-size: 14px; font-weight: 700;
    cursor: pointer; transition: opacity .15s; margin-top: 4px;
  }
  .btn:hover { opacity: .88; }
  .btn-primary { background: var(--primary); color: #fff; }
  .btn-accent  { background: var(--accent);  color: #fff; }

  .msg {
    font-size: 13px; padding: 10px 14px; border-radius: 6px;
    margin-bottom: 16px; display: none;
  }
  .msg.error   { background: #FEE2E2; color: var(--error);   border: 1px solid #FECACA; display: block; }
  .msg.success { background: #D1FAE5; color: var(--success); border: 1px solid #A7F3D0; display: block; }

  .setup-intro {
    font-size: 13px; color: var(--muted); margin-bottom: 20px; line-height: 1.5;
  }
  .setup-intro strong { color: var(--primary); }

  .strength-bar { height: 4px; border-radius: 2px; margin-top: 6px; background: #E5E7EB; overflow: hidden; }
  .strength-fill { height: 100%; border-radius: 2px; transition: width .3s, background .3s; width: 0%; }

  .back-link {
    display: block; text-align: center; margin-top: 14px;
    font-size: 12px; color: var(--muted); cursor: pointer;
    text-decoration: underline;
  }
  .back-link:hover { color: var(--primary); }

  /* ── DASHBOARD SCREEN ────────────────────────────────────────────── */
  body.dashboard-mode {
    font-family: 'Lato', sans-serif;
    background: #EEF3F1;
    min-height: 100vh;
  }

  .dash-topbar {
    background: var(--primary);
    color: #fff;
    padding: 16px 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 2px 12px rgba(0,0,0,.15);
  }
  .dash-brand {
    font-family: 'Playfair Display', serif;
    font-size: 18px;
    font-weight: 700;
  }
  .dash-brand span { opacity: .65; font-size: 13px; font-weight: 400; margin-left: 10px; }
  .dash-user { font-size: 13px; opacity: .85; margin-right: 14px; }
  .btn-logout {
    background: rgba(255,255,255,.15);
    border: 1px solid rgba(255,255,255,.35);
    color: #fff;
    border-radius: 6px;
    padding: 7px 16px;
    font-family: 'Lato', sans-serif;
    font-size: 12px; font-weight: 700;
    cursor: pointer;
    transition: background .15s;
  }
  .btn-logout:hover { background: rgba(255,255,255,.25); }

  .dash-main {
    max-width: 900px;
    margin: 0 auto;
    padding: 40px 24px;
  }
  .dash-welcome {
    font-family: 'Playfair Display', serif;
    font-size: 26px;
    color: var(--primary2);
    margin-bottom: 6px;
  }
  .dash-sub {
    font-size: 13px;
    color: var(--muted);
    margin-bottom: 32px;
  }

  .portal-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
    gap: 18px;
  }

  .portal-tile {
    background: #fff;
    border-radius: 12px;
    padding: 28px 20px 22px;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    box-shadow: 0 2px 8px rgba(0,0,0,.07);
    transition: transform .15s, box-shadow .15s;
    display: block;
  }
  .portal-tile:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(0,0,0,.12);
  }
  .tile-icon {
    width: 52px; height: 52px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    margin: 0 auto 14px;
    font-size: 22px;
    color: #fff;
  }
  .tile-label {
    font-size: 14px; font-weight: 700; color: var(--text);
    margin-bottom: 4px;
  }
  .tile-sub {
    font-size: 11px; color: var(--muted);
  }
</style>
</head>
<body class="login-mode" id="page-body">

<!-- ══════════════════════════════════════════════════════
     LOGIN CARD (shown when not logged in)
══════════════════════════════════════════════════════ -->
<div class="login-card" id="login-card">
  <div class="card-header">
    <div class="nfr-dot">🌿</div>
    <h1>Natures Friend &amp; Resources</h1>
    <p>Staff Portal Access</p>
  </div>

  <div class="card-body">

    <!-- Step 1: Username + Password -->
    <div class="step active" id="step-login">
      <div id="msg-login" class="msg"></div>
      <div class="field">
        <label>Username</label>
        <input type="text" id="login-username" placeholder="your name" autocomplete="username"
               onkeydown="if(event.key==='Enter') document.getElementById('login-password').focus()">
      </div>
      <div class="field">
        <label>Password</label>
        <input type="password" id="login-password" placeholder="password" autocomplete="current-password"
               onkeydown="if(event.key==='Enter') attemptLogin()">
      </div>
      <button class="btn btn-primary" onclick="attemptLogin()">Sign In →</button>
    </div>

    <!-- Step 2: First-time password setup -->
    <div class="step" id="step-setup">
      <div class="setup-intro">
        Welcome, <strong id="setup-name-label"></strong>! Set a password for your account to continue.
      </div>
      <div id="msg-setup" class="msg"></div>
      <div class="field">
        <label>Create Password</label>
        <input type="password" id="setup-password" placeholder="Choose a password" autocomplete="new-password"
               oninput="checkStrength()"
               onkeydown="if(event.key==='Enter') document.getElementById('setup-confirm').focus()">
        <div class="strength-bar"><div class="strength-fill" id="strength-fill"></div></div>
      </div>
      <div class="field">
        <label>Confirm Password</label>
        <input type="password" id="setup-confirm" placeholder="Type it again" autocomplete="new-password"
               onkeydown="if(event.key==='Enter') createPassword()">
      </div>
      <button class="btn btn-accent" onclick="createPassword()">Create Password &amp; Sign In →</button>
      <span class="back-link" onclick="goBackToLogin()">← Back</span>
    </div>

  </div>
</div>

<!-- ══════════════════════════════════════════════════════
     DASHBOARD (shown after login)
══════════════════════════════════════════════════════ -->
<div id="dashboard" style="display:none; width:100%;">
  <div class="dash-topbar">
    <div class="dash-brand">
      🌿 NFR Staff Portal
      <span id="dash-role-label"></span>
    </div>
    <div style="display:flex; align-items:center; gap:8px;">
      <span class="dash-user" id="dash-user-label"></span>
      <button class="btn-logout" onclick="NFRAuth.logout()">Sign Out</button>
    </div>
  </div>
  <div class="dash-main">
    <div class="dash-welcome" id="dash-welcome"></div>
    <div class="dash-sub">Select a portal below.</div>
    <div class="portal-grid" id="portal-grid"></div>
  </div>
</div>

<script src="js/auth.js"></script>
<script>
// ── Portal card definitions ─────────────────────────────────────────────────
var PORTAL_CARDS = [
  { key: 'agreements',        label: 'Agreement Portal',    sub: 'Create & manage agreements', icon: 'fa-file-signature', color: '#3A6B5F', href: 'agreement-portal.html'   },
  { key: 'po',                label: 'Purchase Orders',     sub: 'View & track POs',           icon: 'fa-box-open',       color: '#5A7FA3', href: 'po-portal.html'          },
  { key: 'jen',               label: 'Operations',          sub: "Jen's portal",               icon: 'fa-clipboard-list', color: '#7A5FA3', href: 'jen-portal.html'         },
  { key: 'calculator',        label: 'Proposal Calculator', sub: 'Build job estimates',        icon: 'fa-calculator',     color: '#C06A2E', href: 'proposal-calculator.html'},
  { key: 'contract',          label: 'Contract Builder',    sub: 'Generate contracts',         icon: 'fa-file-contract',  color: '#2E7D6E', href: 'contract.html'           },
  { key: 'flooring',          label: 'Flooring Work Orders',sub: 'Field work orders',          icon: 'fa-layer-group',    color: '#8A6A2E', href: 'flooring-workorder.html' },
  { key: 'training-manager',  label: 'Training Dashboard',  sub: 'Manager view',               icon: 'fa-graduation-cap', color: '#1C5A8A', href: 'training-manager.html'   },
  { key: 'training-employee', label: 'My Training',         sub: 'Daily training plan',        icon: 'fa-graduation-cap', color: '#1C5A8A', href: 'training-employee.html'  },
];

// ── Step flow helpers ────────────────────────────────────────────────────────
var pendingUsername = '';

function showStep(id) {
  document.querySelectorAll('.step').forEach(function(s){ s.classList.remove('active'); });
  document.getElementById(id).classList.add('active');
}

function showMsg(id, text, type) {
  var el = document.getElementById(id);
  el.className = 'msg ' + type;
  el.textContent = text;
}

function clearMsg(id) {
  var el = document.getElementById(id);
  el.className = 'msg';
  el.textContent = '';
}

function goBackToLogin() {
  pendingUsername = '';
  clearMsg('msg-login');
  showStep('step-login');
  setTimeout(function(){ document.getElementById('login-username').focus(); }, 50);
}

// ── Login flow ───────────────────────────────────────────────────────────────
function attemptLogin() {
  var username = document.getElementById('login-username').value.trim().toLowerCase();
  var password = document.getElementById('login-password').value;

  if (!username) { showMsg('msg-login', 'Please enter your username.', 'error'); return; }
  if (!password) { showMsg('msg-login', 'Please enter your password.', 'error'); return; }

  // Unknown user
  if (!NFRAuth.users[username]) {
    showMsg('msg-login', 'Username not recognized. Check with Jose.', 'error');
    return;
  }

  // First-time setup (no password yet)
  if (!NFRAuth.hasPassword(username)) {
    pendingUsername = username;
    document.getElementById('setup-name-label').textContent = NFRAuth.users[username].name;
    document.getElementById('setup-password').value = '';
    document.getElementById('setup-confirm').value = '';
    clearMsg('msg-setup');
    showStep('step-setup');
    setTimeout(function(){ document.getElementById('setup-password').focus(); }, 50);
    return;
  }

  // Attempt sign-in
  var result = NFRAuth.login(username, password);
  if (result.ok) {
    showDashboard(result.session);
  } else {
    showMsg('msg-login', 'Incorrect password. Try again.', 'error');
    document.getElementById('login-password').value = '';
    document.getElementById('login-password').focus();
  }
}

// ── First-time password creation ────────────────────────────────────────────
function createPassword() {
  var pw  = document.getElementById('setup-password').value;
  var cfm = document.getElementById('setup-confirm').value;
  if (!pw)          { showMsg('msg-setup', 'Please choose a password.', 'error'); return; }
  if (pw.length < 4){ showMsg('msg-setup', 'Password must be at least 4 characters.', 'error'); return; }
  if (pw !== cfm)   { showMsg('msg-setup', 'Passwords do not match.', 'error'); return; }

  NFRAuth.setPassword(pendingUsername, pw);
  showMsg('msg-setup', 'Password created! Signing you in…', 'success');

  setTimeout(function() {
    var result = NFRAuth.login(pendingUsername, pw);
    if (result.ok) showDashboard(result.session);
  }, 700);
}

// ── Password strength indicator ──────────────────────────────────────────────
function checkStrength() {
  var pw   = document.getElementById('setup-password').value;
  var fill = document.getElementById('strength-fill');
  var score = 0;
  if (pw.length >= 6)          score++;
  if (pw.length >= 10)         score++;
  if (/[A-Z]/.test(pw))        score++;
  if (/[0-9]/.test(pw))        score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  var pcts = ['0%','20%','40%','60%','80%','100%'];
  var cols = ['#E5E7EB','#EF4444','#F59E0B','#EAB308','#22C55E','#10B981'];
  fill.style.width      = pcts[score];
  fill.style.background = cols[score];
}

// ── Render dashboard ─────────────────────────────────────────────────────────
function showDashboard(session) {
  // Switch to dashboard layout
  document.getElementById('page-body').className = 'dashboard-mode';
  document.getElementById('login-card').style.display = 'none';
  document.getElementById('dashboard').style.display  = 'block';

  // Header info
  document.getElementById('dash-welcome').textContent   = 'Welcome, ' + session.name + '.';
  document.getElementById('dash-user-label').textContent = session.name;
  document.getElementById('dash-role-label').textContent = '· ' + capitalizeRole(session.role);

  // Render portal cards the user has access to
  var grid  = document.getElementById('portal-grid');
  var cards = PORTAL_CARDS.filter(function(c){ return session.portals.indexOf(c.key) !== -1; });

  grid.innerHTML = cards.map(function(c) {
    return '<a class="portal-tile" href="' + c.href + '">' +
      '<div class="tile-icon" style="background:' + c.color + '">' +
        '<i class="fa-solid ' + c.icon + '"></i>' +
      '</div>' +
      '<div class="tile-label">' + c.label + '</div>' +
      '<div class="tile-sub">'   + c.sub   + '</div>' +
    '</a>';
  }).join('');
}

function capitalizeRole(r) {
  return r ? (r.charAt(0).toUpperCase() + r.slice(1)) : '';
}

// ── Auto-login if session already exists ─────────────────────────────────────
window.addEventListener('DOMContentLoaded', function() {
  var session = NFRAuth.getSession();
  if (session && NFRAuth.users[session.user]) {
    showDashboard(session);
  } else {
    setTimeout(function(){ document.getElementById('login-username').focus(); }, 50);
  }
});
</script>
</body>
</html>
```

---

## `agreement-portal.html` <a id="agreement-portal-html"></a>

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>NFR Agreement Portal</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Lato:wght@300;400;700&display=swap');
  :root {
    --primary:#3A6B5F; --accent:#E07B54; --light:#F2F8F6;
    --border:#A8CEBF; --muted:#6B7C76; --text:#2D2D2D;
    --gold:#D4A054; --danger:#C0392B; --success:#27AE60; --warn:#E67E22;
  }
  *{margin:0;padding:0;box-sizing:border-box;}
  body{font-family:'Lato',sans-serif;font-size:10pt;color:var(--text);background:#f0f4f3;}
  .app{max-width:1440px;margin:0 auto;padding:20px 18px;}

  .top-bar{display:flex;justify-content:space-between;align-items:center;
    background:var(--primary);color:#fff;padding:13px 22px;border-radius:8px;margin-bottom:18px;}
  .brand{font-family:'Playfair Display',serif;font-size:14pt;}
  .brand span{font-family:'Lato',sans-serif;font-size:7.5pt;letter-spacing:2px;text-transform:uppercase;opacity:.7;display:block;margin-top:2px;}
  .agr-pill{background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.3);
    border-radius:20px;padding:6px 18px;font-size:9pt;text-align:right;line-height:1.7;}
  .agr-pill strong{font-size:12pt;}

  .layout{display:grid;grid-template-columns:320px 1fr;gap:16px;align-items:start;}

  .panel{background:#fff;border:1px solid var(--border);border-radius:8px;padding:16px 18px;margin-bottom:14px;}
  .p-title{font-family:'Playfair Display',serif;font-size:10.5pt;color:var(--primary);
    border-bottom:2px solid var(--border);padding-bottom:7px;margin-bottom:12px;}

  .f{margin-bottom:10px;}
  .f label{display:block;font-size:7.5pt;font-weight:700;color:var(--primary);text-transform:uppercase;letter-spacing:.4px;margin-bottom:3px;}
  .f input,.f select,.f textarea{width:100%;border:1px solid var(--border);border-radius:4px;
    padding:6px 9px;font-family:'Lato',sans-serif;font-size:9.5pt;color:var(--text);outline:none;}
  .f input:focus,.f select:focus,.f textarea:focus{border-color:var(--primary);}
  .f input:disabled,.f select:disabled,.f textarea:disabled{background:#f5f5f5;color:var(--muted);}
  .row2{display:flex;gap:8px;}.row2 .f{flex:1;}
  .row3{display:flex;gap:8px;}.row3 .f{flex:1;}

  .addr-wrap{position:relative;}
  .addr-badge{position:absolute;right:8px;top:50%;transform:translateY(-50%);font-size:7.5pt;font-weight:700;white-space:nowrap;}
  .addr-badge.verified{color:var(--success);}
  .addr-badge.unverified{color:var(--muted);}
  .addr-input-padded{padding-right:90px !important;}

  /* MAPS PANEL */
  .maps-panel{background:#fff;border:1px solid var(--border);border-radius:8px;padding:12px 14px;margin-bottom:14px;}
  .maps-header{display:flex;align-items:center;justify-content:space-between;cursor:pointer;}
  .maps-header span{font-size:8pt;font-weight:700;color:var(--primary);text-transform:uppercase;letter-spacing:.4px;}
  .maps-status{font-size:7.5pt;color:var(--muted);}
  .maps-status.connected{color:var(--success);}
  .maps-settings{margin-top:10px;border-top:1px solid var(--border);padding-top:10px;display:none;}
  .maps-settings.open{display:block;}
  .maps-key-row{display:flex;gap:8px;align-items:flex-end;}
  .maps-key-row .f{flex:1;margin-bottom:0;}
  .maps-key-row button{padding:6px 12px;border-radius:4px;font-family:'Lato',sans-serif;font-size:8.5pt;font-weight:700;cursor:pointer;border:none;background:var(--primary);color:#fff;white-space:nowrap;}

  /* SCOPE TABLE */
  .tbl-wrap{overflow-x:auto;}
  table.sc{width:100%;border-collapse:collapse;font-size:8pt;min-width:1100px;}
  table.sc thead th{background:var(--primary);color:#fff;padding:7px 5px;text-align:left;
    font-size:7pt;font-weight:700;letter-spacing:.3px;white-space:nowrap;}
  table.sc thead th.r{text-align:right;}
  table.sc thead th.c{text-align:center;}
  table.sc tbody td{border-bottom:1px solid #e5ede9;padding:0;vertical-align:middle;}
  table.sc tbody tr:nth-child(even) td{background:#fafcfb;}
  table.sc tbody tr:hover td{background:#f0f8f5;}
  table.sc td input,table.sc td select{width:100%;border:none;background:transparent;
    padding:5px 5px;font-family:'Lato',sans-serif;font-size:8pt;color:var(--text);outline:none;}
  table.sc td input.ldesc{text-align:left;}
  table.sc td input:focus,table.sc td select:focus{background:#e8f5f0;}
  table.sc td input:disabled,table.sc td select:disabled{color:var(--muted);}
  table.sc td.lt-num{text-align:center;padding:5px 4px;font-size:7.5pt;color:var(--muted);width:22px;}
  table.sc tfoot td{border-top:2px solid var(--primary);padding:6px 5px;font-size:8pt;font-weight:700;}
  table.sc tfoot td.r{text-align:right;}
  .del-btn{background:none;border:none;color:#ccc;cursor:pointer;font-size:13pt;padding:0 5px;line-height:1;}
  .del-btn:hover{color:var(--danger);}
  .chk-btn{background:none;border:none;color:var(--primary);cursor:pointer;font-size:12pt;padding:0 4px;line-height:1;}
  .chk-btn:hover{color:var(--accent);}
  .add-row-btn{background:var(--light);border:1px dashed var(--border);color:var(--primary);
    padding:7px 16px;border-radius:4px;cursor:pointer;font-size:9pt;font-weight:700;margin-top:8px;width:100%;}
  .add-row-btn:hover{background:var(--border);}

  /* TOTALS BAR */
  .totals-bar{display:flex;gap:20px;flex-wrap:wrap;background:var(--light);border:1px solid var(--border);
    border-radius:6px;padding:10px 14px;margin-top:10px;}
  .t-item{display:flex;flex-direction:column;gap:2px;}
  .t-item label{font-size:7pt;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.3px;}
  .t-item .t-val{font-size:11pt;font-weight:700;color:var(--primary);}

  /* STATUS BADGES */
  .status-badge{display:inline-block;padding:3px 10px;border-radius:12px;font-size:8pt;font-weight:700;text-transform:uppercase;letter-spacing:.3px;}
  .st-draft{background:#e8f5f0;color:var(--primary);}
  .st-pending_jose{background:#fff3cd;color:#856404;}
  .st-jose_approved{background:#cce5ff;color:#004085;}
  .st-sent_to_client{background:#e8d5f5;color:#5a2d7a;}
  .st-signed{background:#d4edda;color:#155724;}
  .st-deposit_paid{background:#0d5c2e;color:#fff;}
  .st-cancelled{background:#f8d7da;color:#721c24;}

  /* LOCKED / INFO BANNERS */
  .locked-note{background:#fff3cd;border:1px solid var(--gold);border-radius:5px;
    padding:9px 12px;font-size:8.5pt;color:#856404;margin-bottom:12px;line-height:1.6;}
  .info-note{background:#e8f5f0;border:1px solid var(--border);border-radius:5px;
    padding:9px 12px;font-size:8.5pt;color:var(--primary);margin-bottom:12px;line-height:1.6;}

  /* AGENT CHECK PANEL */
  .agent-panel{background:#fff;border:1px solid var(--border);border-radius:8px;margin-top:14px;}
  .agent-header{display:flex;align-items:center;justify-content:space-between;padding:12px 18px;cursor:pointer;}
  .agent-header-title{font-family:'Playfair Display',serif;font-size:10.5pt;color:var(--primary);}
  .agent-body{padding:0 18px 16px;display:none;}
  .agent-body.open{display:block;}
  .agent-results{margin-top:12px;}
  .agent-item{display:flex;align-items:flex-start;gap:8px;padding:5px 0;border-bottom:1px solid #f0f0f0;font-size:8.5pt;}
  .agent-item:last-child{border-bottom:none;}
  .agent-icon{font-size:13pt;line-height:1;flex-shrink:0;margin-top:-1px;}
  .agent-passed{font-size:9pt;color:var(--success);font-style:italic;padding:8px 0;}
  .agent-suggest-title{font-size:8pt;font-weight:700;color:var(--primary);text-transform:uppercase;letter-spacing:.3px;margin-top:12px;padding-top:10px;border-top:2px dashed var(--border);}
  .agent-suggest-item{display:flex;align-items:flex-start;gap:8px;padding:5px 8px;margin-top:5px;background:var(--light);border:1px dashed var(--border);border-radius:4px;cursor:pointer;font-size:8.5pt;transition:background .15s;}
  .agent-suggest-item:hover{background:#d8eee8;border-color:var(--primary);}
  .agent-suggest-icon{font-size:14pt;font-weight:700;color:var(--primary);line-height:1;flex-shrink:0;}

  /* BUTTONS */
  .actions{display:flex;gap:10px;margin-top:14px;flex-wrap:wrap;align-items:center;}
  .btn{padding:10px 22px;border-radius:4px;font-family:'Lato',sans-serif;font-size:10pt;font-weight:700;cursor:pointer;border:none;}
  .btn-p{background:var(--primary);color:#fff;}.btn-p:hover{background:#2d5448;}
  .btn-o{background:#fff;color:var(--primary);border:2px solid var(--primary);}.btn-o:hover{background:var(--light);}
  .btn-a{background:var(--accent);color:#fff;}.btn-a:hover{background:#c56840;}
  .btn-g{background:var(--success);color:#fff;}.btn-g:hover{background:#1e8449;}
  .btn-w{background:var(--warn);color:#fff;}.btn-w:hover{background:#ca6f1e;}
  .btn-sm{padding:5px 13px;font-size:8pt;}

  /* HISTORY */
  table.hist{width:100%;border-collapse:collapse;font-size:8.5pt;}
  table.hist th{background:var(--primary);color:#fff;padding:7px 10px;text-align:left;font-size:7.5pt;font-weight:700;letter-spacing:.3px;}
  table.hist td{border-bottom:1px solid #e5ede9;padding:8px 10px;vertical-align:middle;}
  table.hist tr:nth-child(even) td{background:#fafcfb;}
  table.hist tr:hover td{background:#f0f8f5;}

  /* MODAL */
  .modal-backdrop{position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:1000;display:flex;align-items:center;justify-content:center;}
  .modal{background:#fff;border-radius:10px;padding:24px 28px;width:480px;max-width:94vw;max-height:90vh;overflow-y:auto;position:relative;box-shadow:0 8px 40px rgba(0,0,0,.2);}
  .modal-title{font-family:'Playfair Display',serif;font-size:12pt;color:var(--primary);margin-bottom:16px;}
  .modal-close{position:absolute;top:14px;right:18px;font-size:16pt;background:none;border:none;cursor:pointer;color:var(--muted);}
  .modal-close:hover{color:var(--text);}
  .chk-item{display:flex;align-items:flex-start;gap:8px;padding:7px 0;border-bottom:1px solid #f0f0f0;cursor:pointer;}
  .chk-item:last-child{border-bottom:none;}
  .chk-item input[type=checkbox]{margin-top:2px;cursor:pointer;accent-color:var(--primary);}
  .chk-item-label{font-size:9pt;line-height:1.5;}
  .chk-progress{font-size:8.5pt;color:var(--muted);margin-bottom:10px;}
  .modal-footer{margin-top:16px;display:flex;justify-content:flex-end;gap:10px;}

  /* TOAST */
  #nfr-toast{position:fixed;bottom:24px;right:24px;background:var(--primary);color:#fff;
    padding:12px 20px;border-radius:8px;font-size:9.5pt;font-weight:700;z-index:9999;
    box-shadow:0 4px 16px rgba(0,0,0,.2);transition:opacity .3s;opacity:0;pointer-events:none;}

  /* CUSTOM TAX INPUT */
  #custom-tax-wrap{display:none;}
</style>
<script src="js/auth.js"></script>
<script>NFRAuth.requireAuth('agreements');</script>
</head>
<body>
<div class="app">

<div class="top-bar">
  <div class="brand">Natures Friend &amp; Resources
    <span>Staff Portal — Client Agreement</span>
  </div>
  <div class="agr-pill">
    Agreement <strong id="agr-display">New Draft</strong><br>
    <span id="agr-meta" style="font-size:8pt;opacity:.8;">Created by Maria &nbsp;·&nbsp; <span id="agr-timestamp">—</span></span>
  </div>
</div>

<div class="layout">

<!-- LEFT COLUMN -->
<div>
  <div class="panel">
    <div class="p-title">Project Information</div>

    <div class="f"><label>Client Name</label>
      <input type="text" id="client-name" placeholder="Full name or company">
    </div>

    <div class="f"><label>Property Address</label>
      <div class="addr-wrap">
        <input type="text" id="client-addr" class="addr-input-padded" placeholder="Street address" autocomplete="off">
        <span class="addr-badge unverified" id="addr-badge">&#9675; Unverified</span>
      </div>
    </div>

    <div class="row2">
      <div class="f"><label>City</label><input type="text" id="client-city" placeholder="Columbus"></div>
      <div class="f" style="max-width:60px;"><label>State</label><input type="text" id="client-state" value="OH" placeholder="OH" maxlength="2"></div>
      <div class="f" style="max-width:75px;"><label>Zip</label><input type="text" id="client-zip" placeholder="43228" maxlength="10"></div>
    </div>

    <div class="row2">
      <div class="f"><label>Client Phone</label><input type="tel" id="client-phone" placeholder="(614) 000-0000"></div>
      <div class="f"><label>Client Email</label><input type="email" id="client-email" placeholder="client@email.com"></div>
    </div>

    <div class="f"><label>Project Type</label>
      <select id="proj-type">
        <option>Kitchen Remodel</option>
        <option>Bathroom Remodel</option>
        <option>Kitchen + Bath Remodel</option>
        <option>Full Interior Remodel</option>
        <option>Paint / Drywall</option>
        <option>Cabinets Only</option>
        <option>Flooring Only</option>
        <option>Demo Only</option>
        <option>Other</option>
      </select>
    </div>

    <div class="row2">
      <div class="f"><label>Tax Region</label>
        <select id="tax-region" onchange="handleTaxChange()">
          <option value="7.5">Columbus (7.5%)</option>
          <option value="8.0">Dublin (8.0%)</option>
          <option value="custom">Custom</option>
        </select>
      </div>
      <div class="f" id="custom-tax-wrap"><label>Custom Tax %</label>
        <input type="number" id="custom-tax" value="7.5" step="0.1" min="0" oninput="calcTotals()">
      </div>
    </div>

    <div class="f"><label>Estimated Start Date</label><input type="date" id="start-date"></div>
    <div class="f"><label>Project Manager</label><input type="text" id="proj-mgr" value="Jose Martinez"></div>
  </div>

  <!-- GOOGLE MAPS PANEL -->
  <div class="maps-panel">
    <div class="maps-header" onclick="toggleMapsSettings()">
      <span>&#9881; Google Maps</span>
      <span class="maps-status" id="maps-status">&#9675; Manual entry — add API key to enable address verify</span>
    </div>
    <div class="maps-settings" id="maps-settings">
      <div class="maps-key-row">
        <div class="f">
          <label>API Key</label>
          <input type="password" id="maps-api-key" placeholder="AIzaSy...">
        </div>
        <button onclick="saveMapsKey()">Save</button>
      </div>
    </div>
  </div>

  <!-- STATUS PANEL (shown when editing saved agreement) -->
  <div class="panel" id="status-panel" style="display:none;">
    <div class="p-title">Agreement Status</div>
    <div id="status-info"></div>
  </div>
</div>

<!-- RIGHT COLUMN -->
<div>
  <div class="panel">
    <div class="p-title">Scope of Work — Detailed Line Items</div>
    <p style="font-size:8pt;color:var(--muted);margin-bottom:12px;line-height:1.6;">
      Fill in every column. These descriptions drive the client-facing agreement. <strong>Client output never shows man-hours, costs, or markup.</strong>
    </p>
    <div id="locked-msg" class="locked-note" style="display:none;">
      Submitted for Jose's review. Form is locked. Ask Jose to reopen if changes are needed.
    </div>
    <div id="info-msg" class="info-note" style="display:none;"></div>

    <div class="tbl-wrap">
      <table class="sc" id="sc-table">
        <thead>
          <tr>
            <th style="width:22px;">#</th>
            <th style="width:110px;">Category</th>
            <th style="width:130px;">Sub-Category</th>
            <th style="min-width:160px;">Description</th>
            <th style="min-width:110px;">Spec / Grade</th>
            <th style="min-width:110px;">Dimensions / Qty</th>
            <th class="r" style="width:42px;">Men</th>
            <th class="r" style="width:52px;">Est Hrs</th>
            <th class="r" style="width:78px;">Materials $</th>
            <th class="r" style="width:68px;">Sub $</th>
            <th class="r" style="width:72px;">Tools $</th>
            <th style="min-width:110px;">Sub-Contractor</th>
            <th class="c" style="width:28px;">&#128203;</th>
            <th style="width:22px;"></th>
          </tr>
        </thead>
        <tbody id="sc-body"></tbody>
        <tfoot>
          <tr>
            <td colspan="6" style="color:var(--muted);font-size:7.5pt;padding-left:5px;">TOTALS</td>
            <td class="r" id="ft-men">—</td>
            <td class="r" id="ft-hrs">—</td>
            <td class="r" id="ft-mat">$0.00</td>
            <td class="r" id="ft-sub">$0.00</td>
            <td class="r" id="ft-tools">$0.00</td>
            <td colspan="3"></td>
          </tr>
        </tfoot>
      </table>
    </div>
    <button class="add-row-btn" id="add-row-btn" onclick="addScopeRow()">+ Add Scope Item</button>

    <div class="totals-bar">
      <div class="t-item"><label>Total Man-Hours</label><div class="t-val" id="tot-manhrs">0 hrs</div></div>
      <div class="t-item"><label>Materials</label><div class="t-val" id="tot-mat">$0.00</div></div>
      <div class="t-item"><label>Sub-Contractor</label><div class="t-val" id="tot-sub">$0.00</div></div>
      <div class="t-item"><label>Tools / Equip</label><div class="t-val" id="tot-tools">$0.00</div></div>
      <div class="t-item"><label>Raw Cost Total</label><div class="t-val" id="tot-raw">$0.00</div></div>
      <div class="t-item"><label>Est. Grand Total (Jose's rates)</label><div class="t-val" id="tot-grand" style="color:var(--accent);">$0.00</div></div>
    </div>
  </div>

  <!-- AGENT CHECK PANEL -->
  <div class="agent-panel">
    <div class="agent-header" onclick="toggleAgentPanel()">
      <span class="agent-header-title">Pre-Submission Check</span>
      <span id="agent-chevron" style="font-size:10pt;color:var(--muted);">&#9660;</span>
    </div>
    <div class="agent-body" id="agent-body">
      <button class="btn btn-o btn-sm" onclick="runAgentCheck()" id="run-check-btn">Run Pre-Submission Check</button>
      <div id="agent-results" class="agent-results"></div>
    </div>
  </div>

  <div class="actions" id="action-btns">
    <button class="btn btn-o" onclick="saveDraft()">Save Draft</button>
    <button class="btn btn-w" onclick="runAgentCheck()">Run Agent Check</button>
    <button class="btn btn-g" id="submit-btn" onclick="submitForJose()" disabled title="Run Agent Check first">Submit for Jose's Review</button>
    <button class="btn btn-a" onclick="newAgreement()">+ New Agreement</button>
  </div>
</div>

</div><!-- end layout -->

<!-- HISTORY TABLE -->
<div class="panel" style="margin-top:4px;">
  <div class="p-title">Agreement History</div>
  <div id="history-empty" style="font-size:8.5pt;color:var(--muted);font-style:italic;padding:6px 0;">
    No agreements yet. Fill out the form above and click Save Draft.
  </div>
  <div style="overflow-x:auto;">
    <table class="hist" id="hist-table" style="display:none;">
      <thead>
        <tr>
          <th>AGR #</th><th>Client</th><th>Type</th><th>Submitted</th><th>Status</th><th>Action</th>
        </tr>
      </thead>
      <tbody id="hist-body"></tbody>
    </table>
  </div>
</div>

</div><!-- end app -->

<!-- CHECKLIST MODAL -->
<div class="modal-backdrop" id="chk-modal" style="display:none;" onclick="closeChecklistModal(event)">
  <div class="modal" onclick="event.stopPropagation()">
    <button class="modal-close" onclick="closeChecklistModal()">&#215;</button>
    <div class="modal-title" id="chk-modal-title">Checklist</div>
    <div class="chk-progress" id="chk-progress"></div>
    <div id="chk-items"></div>
    <div class="modal-footer">
      <button class="btn btn-p" onclick="closeChecklistModal()">Done</button>
    </div>
  </div>
</div>

<div id="nfr-toast"></div>

<script>
// ── State ──────────────────────────────────────────────────────────────────────
let currentAgrId = null;
let scopeRowCount = 0;
let isLocked = false;
let agentCheckRan = false;
let addressVerified = false;
let activeChecklistRow = null;

// ── Renovation Taxonomy ────────────────────────────────────────────────────────
const RENO = {
  "Demo & Site Prep": {
    subs: ["Demo cabinets","Demo countertops","Demo tile — floor","Demo tile — walls","Demo flooring","Demo tub/shower","Demo toilet","Demo vanity & fixtures","Demo walls / partitions","Demo ceiling","Demo appliances & removal","Dumpster / haul away","Site protection & staging"],
    desc: {"Demo cabinets":"Remove and haul away all existing cabinets","Demo countertops":"Remove existing countertops and dispose","Demo tile — floor":"Remove floor tile and thin-set; inspect subfloor","Demo tile — walls":"Remove wall tile and backer board","Demo flooring":"Remove existing flooring and prep subfloor","Demo tub/shower":"Demo tub/shower unit and surround","Demo toilet":"Remove and cap toilet flange","Demo vanity & fixtures":"Remove vanity, sink, and all fixtures","Demo walls / partitions":"Remove non-structural partition walls","Demo ceiling":"Remove ceiling drywall or tile","Demo appliances & removal":"Disconnect and remove all appliances","Dumpster / haul away":"Roll-off dumpster and debris removal","Site protection & staging":"Floor protection, plastic barriers, staging area"},
    checks: {"Demo cabinets":["Disconnect power at breaker","Remove cabinet doors first","Mark/cap utility locations","Protect floors with plywood","Stage debris area outside"],"Demo tile — floor":["Score grout lines first","Remove toilet/vanity if needed","Inspect subfloor after removal","Document condition with photos"],"Demo tub/shower":["Shut off water supply","Disconnect drain","Remove tile surround","Inspect framing/subfloor for rot"],"Demo walls / partitions":["Confirm non-load-bearing","Locate and cap all utilities in wall","Remove drywall in stages","Photograph wall cavity before closing"]}
  },
  "Structural": {
    subs: ["Load-bearing wall removal","Header / beam install (LVL)","Header / beam install (steel)","Subfloor repair / replacement","Wall framing modification","Niche / alcove framing","Column / post install","Subfloor leveling"],
    desc: {"Load-bearing wall removal":"Remove load-bearing wall with temporary shoring","Header / beam install (LVL)":"Install LVL beam with proper bearing","Header / beam install (steel)":"Install steel beam with bearing plates","Subfloor repair / replacement":"Repair or replace damaged subfloor sheathing","Wall framing modification":"Modify existing wall framing per plan","Niche / alcove framing":"Frame recessed niche or alcove in wall","Column / post install":"Install structural column or decorative post","Subfloor leveling":"Self-leveling compound or shimming for flat substrate"},
    checks: {"Load-bearing wall removal":["Pull permit before starting","Install temporary shoring","Size header per engineer spec","Verify beam bearing on each side"],"Subfloor repair / replacement":["Identify source of damage (moisture/rot)","Remove all damaged material","Treat with antimicrobial before closing","Match thickness to existing floor"]}
  },
  "Windows & Doors": {
    subs: ["Window replacement","Window — new opening","Window trim / casing","Entry door replacement","Interior door install","Pocket / sliding door","Barn door","Door hardware install","Egress window"],
    desc: {"Window replacement":"Replace existing window with new unit, same opening","Window — new opening":"Create new window opening with header","Window trim / casing":"Install interior window casing and sill","Entry door replacement":"Replace exterior entry door and frame","Interior door install":"Install interior door, frame, and hardware","Pocket / sliding door":"Install pocket or bypass sliding door","Barn door":"Install barn door with track hardware","Door hardware install":"Install handles, locks, hinges on existing doors","Egress window":"Install code-compliant egress window"},
    checks: {"Window replacement":["Flash and seal exterior","Level and shim properly","Insulate perimeter","Test operation before trimming"],"Entry door replacement":["Flash threshold properly","Install weatherstripping","Verify plumb and square","Test lockset operation"]}
  },
  "Rough Electrical": {
    subs: ["Panel upgrade / circuit add","GFCI circuit — kitchen","GFCI circuit — bathroom","Under-cabinet lighting rough","Island lighting rough","Range hood wiring","Dishwasher circuit (20A)","Refrigerator circuit","Microwave circuit (20A)","Heated floor thermostat rough","Exhaust fan rough-in","Shower light rough (wet-rated)","Vanity lighting rough","USB outlet install","Recessed lighting rough"],
    desc: {"Panel upgrade / circuit add":"Add circuits or upgrade electrical panel","GFCI circuit — kitchen":"Install GFCI-protected circuits per code","GFCI circuit — bathroom":"Install GFCI-protected bathroom circuit","Under-cabinet lighting rough":"Run low-voltage wire for under-cabinet lights","Island lighting rough":"Run wire and install junction box for island pendant","Range hood wiring":"Wire dedicated circuit for range hood","Dishwasher circuit (20A)":"Dedicated 20A circuit for dishwasher","Refrigerator circuit":"Dedicated circuit for refrigerator","Microwave circuit (20A)":"Dedicated 20A circuit for microwave","Heated floor thermostat rough":"Run wire for in-floor heat thermostat","Exhaust fan rough-in":"Run wire and duct for bathroom exhaust fan","Shower light rough (wet-rated)":"Install wet-rated box and wiring in shower ceiling","Vanity lighting rough":"Run wire for vanity light fixture","USB outlet install":"Install combination outlet with USB ports","Recessed lighting rough":"Run wire and install cans for recessed lights"},
    checks: {"Panel upgrade / circuit add":["Pull permit","Coordinate with licensed electrician","Arc-fault and GFCI per code","Label panel directory after"],"GFCI circuit — kitchen":["Two 20A small-appliance circuits minimum","GFCI at first outlet on circuit","Test trip function"],"Exhaust fan rough-in":["Duct to exterior — not to attic","Damper on exterior cap","Support fan housing to framing"]}
  },
  "Rough Plumbing": {
    subs: ["Supply line relocation","Drain relocation","Toilet flange install","Shower valve rough-in","Tub drain rough-in","Dishwasher connection rough","Ice maker line","Gas line (range / cooktop)","Gas line (water heater)","Water heater relocation","Wet wall framing"],
    desc: {"Supply line relocation":"Relocate hot/cold supply to new position","Drain relocation":"Relocate drain line to new fixture location","Toilet flange install":"Set toilet flange at finished floor height","Shower valve rough-in":"Set shower valve body at correct height","Tub drain rough-in":"Set tub drain and overflow rough","Dishwasher connection rough":"Stub out hot supply and drain for dishwasher","Ice maker line":"1/4\" copper or poly line for refrigerator ice maker","Gas line (range / cooktop)":"Run gas line with shutoff for range/cooktop","Gas line (water heater)":"Run or extend gas line for water heater","Water heater relocation":"Relocate water heater with new connections","Wet wall framing":"Frame 2x6 wet wall for back-to-back plumbing"},
    checks: {"Supply line relocation":["Pressure test before closing wall","Support pipe per code","Insulate exterior wall pipes"],"Shower valve rough-in":["Confirm valve height per design drawing","Stub out at correct height for trim plate","Pressure test","Photo before closing wall"],"Gas line (range / cooktop)":["Licensed plumber required","Pressure test 24 hours","Install shutoff within 6 feet of appliance"]}
  },
  "HVAC & Mechanicals": {
    subs: ["Range hood / ductwork","Exhaust fan + duct install","Radiant floor heat — electric","Radiant floor heat — hydronic","In-floor heat thermostat","Heated towel bar rough","HVAC duct modification","Mini-split install"],
    desc: {"Range hood / ductwork":"Install range hood and run duct to exterior","Exhaust fan + duct install":"Install exhaust fan and duct to exterior cap","Radiant floor heat — electric":"Install electric radiant mat under tile","Radiant floor heat — hydronic":"Install hydronic tubing in floor","In-floor heat thermostat":"Install programmable thermostat for floor heat","Heated towel bar rough":"Rough wire for electric heated towel bar","HVAC duct modification":"Modify existing ductwork for remodel","Mini-split install":"Install ductless mini-split head and lineset"},
    checks: {"Range hood / ductwork":["Duct to exterior only","Use 6\" round or equivalent rectangular","Include damper at exterior","Verify CFM meets hood requirements"],"Radiant floor heat — electric":["Test mat resistance before tile","Do not cut mat","Install insulation board under mat","Connect to GFCI-protected circuit"]}
  },
  "Insulation": {
    subs: ["Exterior wall batt insulation","Sound insulation — interior","Spray foam — rim joist","Spray foam — gaps/penetrations","Vapor barrier","Rigid foam — exterior"],
    desc: {"Exterior wall batt insulation":"Install batt insulation in exterior walls","Sound insulation — interior":"Install Rockwool sound batt in interior walls","Spray foam — rim joist":"Seal and insulate rim joist with closed-cell foam","Spray foam — gaps/penetrations":"Air seal all penetrations with spray foam","Vapor barrier":"Install poly vapor barrier on crawl/slab","Rigid foam — exterior":"Install rigid foam board on exterior sheathing"},
    checks: {}
  },
  "Waterproofing": {
    subs: ["Cement board / backer board","Schluter / Kerdi membrane","RedGard waterproof coating","Shower pan liner (CPE)","Curb installation","Shower niche — waterproof"],
    desc: {"Cement board / backer board":"Install cement backer board in wet areas","Schluter / Kerdi membrane":"Apply Kerdi waterproof membrane over substrate","RedGard waterproof coating":"Apply RedGard liquid membrane to shower walls/floor","Shower pan liner (CPE)":"Install CPE shower pan liner with clamping drain","Curb installation":"Build and waterproof shower curb","Shower niche — waterproof":"Frame, board, and waterproof recessed shower niche"},
    checks: {"Cement board / backer board":["Stagger seams from drywall seams","Tape all seams with alkali-resistant mesh","Do not use drywall in wet zone","Fasteners every 8\" at edges"],"Schluter / Kerdi membrane":["Overlap seams minimum 2\"","Seal all corners with Kerdi-Band","Let cure 24 hours before tile","Flood test before closing"]}
  },
  "Drywall": {
    subs: ["Drywall install — standard","Drywall install — moisture-resistant","Level 5 finish","Ceiling drywall","Drywall repair / patch","Skim coat"],
    desc: {"Drywall install — standard":"Hang and tape standard drywall","Drywall install — moisture-resistant":"Hang and tape moisture-resistant (green/purple board)","Level 5 finish":"Apply two skim coats for Level 5 paint-ready finish","Ceiling drywall":"Hang and finish ceiling drywall","Drywall repair / patch":"Repair damaged drywall sections","Skim coat":"Skim coat existing walls for smooth finish"},
    checks: {"Level 5 finish":["Prime coat before first skim","Two skim coats minimum","Sand between coats with 150 grit","Inspect under raking light before paint"],"Drywall install — standard":["Stagger seams","Screw 16\" on center","Tape all seams with joint compound","Feather edges for smooth finish"]}
  },
  "Tile Work": {
    subs: ["Floor tile install","Shower wall tile","Tub surround tile","Backsplash tile","Niche tile","Accent / listello tile","Floor tile — large format","Grout & seal","Caulk joints"],
    desc: {"Floor tile install":"Install tile on floor with thinset mortar","Shower wall tile":"Install tile on shower walls","Tub surround tile":"Install tile on tub surround walls","Backsplash tile":"Install kitchen backsplash tile","Niche tile":"Tile recessed shower niche","Accent / listello tile":"Install accent or border tile","Floor tile — large format":"Install large format (24\"x24\"+) floor tile","Grout & seal":"Apply grout and sealer to all tile joints","Caulk joints":"Apply silicone caulk at all change-of-plane joints"},
    checks: {"Floor tile install":["Dry-lay tile for pattern/cut check","Use large-format trowel for full coverage","Check level every 4 tiles","Back-butter all tiles over 15\""],"Shower wall tile":["Start from center of focal wall","Maintain consistent grout joints","Cut tiles at perimeter","Seal grout after 72-hour cure"],"Grout & seal":["Mix to peanut butter consistency","Work in 4 sq ft sections","Diagonal float strokes","Seal 72 hours after grout install"]}
  },
  "Flooring": {
    subs: ["LVP / luxury vinyl install","Hardwood — install","Hardwood — refinish","Carpet install","Floor leveling / prep","Transition strips","Underlayment install"],
    desc: {"LVP / luxury vinyl install":"Install luxury vinyl plank flooring with underlayment","Hardwood — install":"Install nail-down or glue-down hardwood","Hardwood — refinish":"Sand, stain, and refinish existing hardwood","Carpet install":"Install carpet with pad","Floor leveling / prep":"Self-leveling compound for flat substrate","Transition strips":"Install transition strips at all floor changes","Underlayment install":"Install foam or cork underlayment"},
    checks: {"LVP / luxury vinyl install":["Acclimate planks 48 hours","Leave 1/4\" expansion gap at walls","Stagger end joints minimum 6\"","Roll floor after install"],"Hardwood — refinish":["Screen between coats","Buff edges by hand","Apply minimum 3 coats polyurethane","24-hour dry time between coats"]}
  },
  "Cabinets": {
    subs: ["Base cabinets","Upper cabinets","Island / peninsula cabinets","Pantry / tall cabinets","Vanity cabinet","Linen / storage cabinet","Medicine cabinet","Cabinet hardware install","Soft-close hardware","Crown molding — cabinets","Cabinet trim / filler","Cabinet lighting install"],
    desc: {"Base cabinets":"Install base cabinet run","Upper cabinets":"Install upper cabinet run","Island / peninsula cabinets":"Install island or peninsula cabinet base","Pantry / tall cabinets":"Install full-height pantry or utility cabinets","Vanity cabinet":"Install bathroom vanity cabinet","Linen / storage cabinet":"Install linen or storage cabinet","Medicine cabinet":"Install recessed or surface-mount medicine cabinet","Cabinet hardware install":"Install all pulls, knobs, and hinges","Soft-close hardware":"Install soft-close hinges and drawer slides","Crown molding — cabinets":"Install crown molding on cabinet tops","Cabinet trim / filler":"Install filler strips and end panels","Cabinet lighting install":"Install puck or strip lights in cabinets"},
    checks: {"Base cabinets":["Level each cabinet — shim as needed","Screw cabinets together before wall attachment","Attach to wall studs only","Check plumb and level after all are hung"],"Upper cabinets":["Ledger board for support during install","Locate all studs before starting","Check level and plumb every cabinet","Remove ledger after all are secured"]}
  },
  "Countertops": {
    subs: ["Granite — fabricate & install","Quartz — fabricate & install","Laminate countertop","Cultured marble top","Butcher block","Concrete countertop","Countertop edge profile","Backsplash substrate"],
    desc: {"Granite — fabricate & install":"Template, fabricate, and install granite countertop","Quartz — fabricate & install":"Template, fabricate, and install quartz countertop","Laminate countertop":"Install laminate countertop with post-form edge","Cultured marble top":"Install cultured marble vanity top with integral sink","Butcher block":"Install butcher block countertop","Concrete countertop":"Cast and install concrete countertop","Countertop edge profile":"Specify edge detail (eased, beveled, ogee, etc.)","Backsplash substrate":"Install cement board for tile backsplash"},
    checks: {"Granite — fabricate & install":["Template after cabinets are set","Confirm sink cutout dimensions","Seam placement away from sink","Support seams from below"],"Quartz — fabricate & install":["Template after cabinets leveled","Confirm overhang spec (standard 1.5\")","Check plumb of sink wall for reveal"]}
  },
  "Shower / Tub": {
    subs: ["Prefab shower unit","Custom tile shower build","Shower door — frameless","Shower door — semi-frameless","Shower door — framed","Shower base / pan","Standard tub install","Freestanding / soaking tub","Whirlpool / jetted tub","Grab bar install","Steam unit install","Tub surround install"],
    desc: {"Prefab shower unit":"Install one-piece or multi-piece prefab shower unit","Custom tile shower build":"Build custom shower with backer, membrane, and tile","Shower door — frameless":"Install frameless glass shower door or enclosure","Shower door — semi-frameless":"Install semi-frameless shower door","Shower door — framed":"Install aluminum-framed shower door","Shower base / pan":"Install shower base/pan (acrylic or fiberglass)","Standard tub install":"Install alcove or drop-in tub","Freestanding / soaking tub":"Install freestanding soaking tub","Whirlpool / jetted tub":"Install whirlpool or air-jet tub","Grab bar install":"Install ADA grab bars in shower/tub area","Steam unit install":"Install steam generator and head","Tub surround install":"Install 3-piece tub surround"},
    checks: {"Custom tile shower build":["Waterproof membrane required","Slope floor 1/4\" per foot to drain","Test drain before tiling","Float test shower pan 24 hours"],"Shower door — frameless":["Confirm glass thickness (3/8\" min)","Plumb wall within 1/8\"","Header bar for doors over 60\" wide","Silicone all perimeter joints"]}
  },
  "Fixtures & Plumbing Finish": {
    subs: ["Kitchen sink install","Bathroom sink — undermount","Vessel sink install","Kitchen faucet","Bathroom faucet","Shower valve trim","Showerhead install","Hand shower install","Tub faucet / trim","Tub spout","Body sprays","Garbage disposal","Toilet install","Bidet / toilet seat","P-trap & drain connections","Shut-off valves"],
    desc: {"Kitchen sink install":"Install undermount or drop-in kitchen sink","Bathroom sink — undermount":"Install undermount bathroom sink","Vessel sink install":"Install vessel sink with drain assembly","Kitchen faucet":"Install kitchen faucet and supply lines","Bathroom faucet":"Install bathroom faucet and pop-up drain","Shower valve trim":"Install shower valve trim plate and handle","Showerhead install":"Install showerhead on arm","Hand shower install":"Install slide bar and hand shower","Tub faucet / trim":"Install tub faucet trim and handles","Tub spout":"Install tub spout (diverter or non-diverter)","Body sprays":"Install body spray jets and volume control","Garbage disposal":"Install garbage disposal and wiring connection","Toilet install":"Set toilet on flange with new wax ring","Bidet / toilet seat":"Install bidet seat or attachment","P-trap & drain connections":"Connect P-traps and drain lines","Shut-off valves":"Install angle stops at all fixtures"},
    checks: {"Kitchen sink install":["Support undermount from below before countertop","Caulk perimeter after cabinet install","Test for leaks 24 hours after"],"Toilet install":["New wax ring required","Shim base if floor unlevel","Caulk front and sides (leave back open)","Test flush and check for leaks"]}
  },
  "Appliances": {
    subs: ["Range / cooktop install","Wall oven install","Microwave install","Dishwasher install","Refrigerator — water line","Range hood — final install","Warming drawer"],
    desc: {"Range / cooktop install":"Set and connect range or cooktop (gas or electric)","Wall oven install":"Install wall oven in cabinet opening","Microwave install":"Install over-range or drawer microwave","Dishwasher install":"Set dishwasher and connect water/drain/power","Refrigerator — water line":"Connect refrigerator to ice maker water line","Range hood — final install":"Final mount and duct connection for range hood","Warming drawer":"Install warming drawer in base cabinet"},
    checks: {"Range / cooktop install":["Anti-tip bracket for ranges","Verify gas connection by licensed plumber","Test all burners","Clearances per manufacturer"],"Dishwasher install":["High-loop or air gap on drain","Secure to cabinet sides","Test full cycle for leaks"]}
  },
  "Finish Electrical": {
    subs: ["Outlet & switch plates","Light fixture install","Under-cabinet lights — final","Recessed lighting — final","Dimmer switch install","Exhaust fan — final","Bathroom fan/light combo","GFCI outlets — final","Smoke / CO detector"],
    desc: {"Outlet & switch plates":"Install all outlet and switch cover plates","Light fixture install":"Install light fixtures and connect wiring","Under-cabinet lights — final":"Connect and install under-cabinet LED strips","Recessed lighting — final":"Trim and bulb all recessed cans","Dimmer switch install":"Install dimmer switches per plan","Exhaust fan — final":"Install exhaust fan grille and test","Bathroom fan/light combo":"Install combination fan/light unit","GFCI outlets — final":"Install GFCI receptacles and test","Smoke / CO detector":"Install smoke and CO detectors per code"},
    checks: {"Recessed lighting — final":["IC-rated cans in insulated ceiling","Trim flush to ceiling","Bulb type matches dimmer rating"],"GFCI outlets — final":["Test trip function","Label breaker","Check all outlets downstream on same circuit"]}
  },
  "Paint & Finish": {
    subs: ["Ceiling paint","Wall paint — standard","Wall paint — moisture-resistant","Cabinet paint / stain","Trim paint","Exterior paint / touch-up"],
    desc: {"Ceiling paint":"Apply two coats ceiling paint","Wall paint — standard":"Prime and apply two coats wall paint","Wall paint — moisture-resistant":"Apply moisture-resistant paint (bathroom)","Cabinet paint / stain":"Prime, sand, and apply two coats cabinet paint","Trim paint":"Apply semi-gloss on all trim and doors","Exterior paint / touch-up":"Touch up or repaint exterior trim/siding"},
    checks: {"Cabinet paint / stain":["Sand between all coats 220 grit","Remove all hardware before painting","Water-based enamel or conversion varnish","Allow 24h cure between coats"],"Wall paint — standard":["Cut in before rolling","Two coats minimum","Check sheen spec (eggshell, satin, flat)","Back-roll sprayed areas"]}
  },
  "Trim & Millwork": {
    subs: ["Baseboard","Door casing","Crown molding","Window sill / stool / apron","Chair rail","Wainscoting","Beadboard panel","Built-in shelving"],
    desc: {"Baseboard":"Install baseboard throughout room","Door casing":"Install interior door casing","Crown molding":"Install crown molding at ceiling","Window sill / stool / apron":"Install window interior trim","Chair rail":"Install chair rail at mid-wall height","Wainscoting":"Install wainscoting panel system","Beadboard panel":"Install beadboard on wall section","Built-in shelving":"Build and install custom built-in shelves"},
    checks: {"Crown molding":["Cope inside corners — no miters","Nail to studs and top plate","Caulk before paint","Prime cut ends before install"],"Baseboard":["Cope inside corners","Scarf joint at splices","Check for floor height changes","Fill nail holes before paint"]}
  },
  "Bathroom Accessories": {
    subs: ["Towel bar install","Toilet paper holder","Robe hooks","Mirror install","Frameless mirror","Shelving — bathroom","Towel ring"],
    desc: {"Towel bar install":"Install towel bar(s) on blocking","Toilet paper holder":"Install toilet paper holder on blocking","Robe hooks":"Install robe hooks on blocking","Mirror install":"Install framed mirror above vanity","Frameless mirror":"Install frameless mirror on wall","Shelving — bathroom":"Install bathroom shelving unit","Towel ring":"Install towel ring next to vanity"},
    checks: {"Towel bar install":["Block in wall during framing","Confirm height (48\" standard)","Use toggle anchors if no blocking"]}
  },
  "Exterior & Siding": {
    subs: ["Vinyl siding — repair","Vinyl siding — replacement","Brick repair / repointing","Tuckpointing","Brick veneer install","Exterior trim repair","Caulk & weatherstrip","Soffit / fascia repair","Window flashing"],
    desc: {"Vinyl siding — repair":"Repair damaged vinyl siding panels","Vinyl siding — replacement":"Replace vinyl siding on wall section","Brick repair / repointing":"Repoint deteriorated brick mortar joints","Tuckpointing":"Tuckpoint brick or block joints","Brick veneer install":"Install brick veneer over framed wall","Exterior trim repair":"Repair or replace exterior trim boards","Caulk & weatherstrip":"Caulk all exterior penetrations and install weatherstrip","Soffit / fascia repair":"Repair or replace soffit and fascia boards","Window flashing":"Install or repair window flashing and sill pan"},
    checks: {"Brick repair / repointing":["Match existing mortar color","Rake joints minimum 3/4\" deep","Dampen joints before applying mortar","Cure slowly — avoid direct sun for 3 days"]}
  },
  "Sub-Contractors": {
    subs: ["Licensed plumber","Licensed electrician","HVAC technician","Structural engineer","Tile setter","Flooring installer","Cabinet installer","Countertop fabricator","Glass / shower door","Painter — sub","Roofer / flashing sub","Foundation / masonry sub"],
    desc: {"Licensed plumber":"Licensed plumber for rough or finish work","Licensed electrician":"Licensed electrician for panel/rough/finish","HVAC technician":"HVAC tech for ductwork or mechanical","Structural engineer":"PE stamp for structural modifications","Tile setter":"Sub-contract tile installation","Flooring installer":"Sub-contract flooring installation","Cabinet installer":"Sub-contract cabinet installation","Countertop fabricator":"Sub-contract countertop template and install","Glass / shower door":"Sub-contract frameless glass and shower door","Painter — sub":"Sub-contract painting","Roofer / flashing sub":"Sub-contract roofing or flashing work","Foundation / masonry sub":"Sub-contract foundation or masonry work"},
    checks: {"Licensed plumber":["Verify license number","Confirm liability insurance","Get signed scope buyout","Pull permit in their name if required"],"Licensed electrician":["Verify license number","Confirm liability insurance","Get signed scope buyout","Pull permit in their name if required"]}
  },
  "Permits & Inspections": {
    subs: ["Building permit","Electrical permit","Plumbing permit","Mechanical permit","Inspection — rough-in","Inspection — final","Certificate of occupancy"],
    desc: {"Building permit":"Pull building permit for remodel work","Electrical permit":"Pull electrical permit","Plumbing permit":"Pull plumbing permit","Mechanical permit":"Pull mechanical/HVAC permit","Inspection — rough-in":"Schedule rough-in inspection","Inspection — final":"Schedule final inspection","Certificate of occupancy":"Obtain certificate of occupancy if required"},
    checks: {}
  },
  "Other": {
    subs: ["Custom item (specify)","Allowance item","Owner-furnished / contractor-installed","Miscellaneous labor","Final cleaning"],
    desc: {"Custom item (specify)":"Custom scope item — add description","Allowance item":"Budget allowance for undetermined item","Owner-furnished / contractor-installed":"Owner provides material, NFR installs","Miscellaneous labor":"General labor not categorized above","Final cleaning":"Final clean and punch-list cleanup"},
    checks: {}
  }
};

const RENO_CATS = Object.keys(RENO);

// ── Row checklist data store (keyed by row id) ────────────────────────────────
const rowChecklists = {};   // rowChecklists[rowId] = { items: [...], done: [...] }

// ── DOM Ready ─────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initMapsPanel();
  initNewAgreement();
  renderHistory();
});

// ── Agreement ID ──────────────────────────────────────────────────────────────
function getNextAgrId() {
  const year = new Date().getFullYear();
  let counter = parseInt(localStorage.getItem('nfr_agr_counter') || '1000');
  counter++;
  localStorage.setItem('nfr_agr_counter', counter);
  return `AGR-${year}-${counter}`;
}

// ── Init / Reset ──────────────────────────────────────────────────────────────
function initNewAgreement() {
  currentAgrId = null;
  scopeRowCount = 0;
  isLocked = false;
  agentCheckRan = false;
  addressVerified = false;
  document.getElementById('agr-display').textContent = 'New Draft';
  document.getElementById('agr-timestamp').textContent = '—';
  document.getElementById('status-panel').style.display = 'none';
  document.getElementById('locked-msg').style.display = 'none';
  document.getElementById('info-msg').style.display = 'none';
  document.getElementById('add-row-btn').style.display = 'block';
  document.getElementById('agent-results').innerHTML = '';
  updateVerifiedBadge(false);
  resetActionBtns();

  const fields = ['client-name','client-addr','client-city','client-state','client-zip',
                  'client-phone','client-email','start-date'];
  fields.forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
  document.getElementById('client-state').value = 'OH';
  document.getElementById('proj-mgr').value = 'Jose Martinez';
  document.getElementById('proj-type').selectedIndex = 0;
  document.getElementById('tax-region').selectedIndex = 0;
  document.getElementById('custom-tax-wrap').style.display = 'none';

  document.getElementById('sc-body').innerHTML = '';
  scopeRowCount = 0;
  Object.keys(rowChecklists).forEach(k => delete rowChecklists[k]);
  addScopeRow(); addScopeRow(); addScopeRow();
  calcTotals();

  document.querySelectorAll('.panel input, .panel select, .panel textarea').forEach(el => el.disabled = false);
}

function resetActionBtns() {
  document.getElementById('action-btns').innerHTML = `
    <button class="btn btn-o" onclick="saveDraft()">Save Draft</button>
    <button class="btn btn-w" onclick="runAgentCheck()">Run Agent Check</button>
    <button class="btn btn-g" id="submit-btn" onclick="submitForJose()" disabled>Submit for Jose's Review</button>
    <button class="btn btn-a" onclick="newAgreement()">+ New Agreement</button>`;
}

// ── Tax Toggle ─────────────────────────────────────────────────────────────────
function handleTaxChange() {
  const v = document.getElementById('tax-region').value;
  document.getElementById('custom-tax-wrap').style.display = (v === 'custom') ? 'block' : 'none';
  calcTotals();
}

// ── Category / Sub-Category ───────────────────────────────────────────────────
function buildCatOptions(selectedCat) {
  return RENO_CATS.map(c =>
    `<option${c === selectedCat ? ' selected' : ''}>${h(c)}</option>`
  ).join('');
}

function buildSubOptions(cat, selectedSub) {
  const subs = (RENO[cat] || RENO[RENO_CATS[0]]).subs;
  let opts = `<option value="">— select —</option>`;
  opts += subs.map(s =>
    `<option${s === selectedSub ? ' selected' : ''}>${h(s)}</option>`
  ).join('');
  return opts;
}

function onCatChange(rowId) {
  const cat = document.getElementById('scat' + rowId)?.value || RENO_CATS[0];
  const subSel = document.getElementById('ssub' + rowId);
  if (subSel) subSel.innerHTML = buildSubOptions(cat, '');
  document.getElementById('sdesc' + rowId).value = '';
  rowChecklists[rowId] = { items: [], done: [] };
  calcTotals();
}

function onSubChange(rowId) {
  const cat = document.getElementById('scat' + rowId)?.value || RENO_CATS[0];
  const sub = document.getElementById('ssub' + rowId)?.value || '';
  if (sub && RENO[cat] && RENO[cat].desc[sub]) {
    document.getElementById('sdesc' + rowId).value = RENO[cat].desc[sub];
  }
  // Load checklist items
  const checks = (RENO[cat] && RENO[cat].checks && RENO[cat].checks[sub]) ? RENO[cat].checks[sub] : [];
  rowChecklists[rowId] = { items: checks, done: [] };
  updateChecklistBtnBadge(rowId);
  calcTotals();
}

function updateChecklistBtnBadge(rowId) {
  const btn = document.getElementById('chkbtn' + rowId);
  if (!btn) return;
  const cl = rowChecklists[rowId] || { items: [], done: [] };
  const total = cl.items.length;
  const done = cl.done.length;
  if (total > 0) {
    btn.title = `Checklist: ${done}/${total} done`;
    btn.style.color = (done === total) ? 'var(--success)' : 'var(--warn)';
  } else {
    btn.title = 'No checklist for this item';
    btn.style.color = 'var(--border)';
  }
}

// ── Scope Rows ────────────────────────────────────────────────────────────────
function addScopeRow(item) {
  if (isLocked) return;
  const id = ++scopeRowCount;
  const cat = item ? item.category : RENO_CATS[0];
  const sub = item ? (item.sub_category || '') : '';
  rowChecklists[id] = item ? { items: item.checklist || [], done: item.checklist_done || [] } : { items: [], done: [] };

  const tr = document.createElement('tr');
  tr.id = 'sr' + id;
  tr.innerHTML = `
    <td class="lt-num">${id}</td>
    <td><select id="scat${id}" onchange="onCatChange(${id});calcTotals()">${buildCatOptions(cat)}</select></td>
    <td><select id="ssub${id}" onchange="onSubChange(${id})">${buildSubOptions(cat, sub)}</select></td>
    <td><input class="ldesc" type="text" id="sdesc${id}" value="${item ? h(item.description||'') : ''}" placeholder="Work description..." oninput="calcTotals()"></td>
    <td><input class="ldesc" type="text" id="sspec${id}" value="${item ? h(item.spec||'') : ''}" placeholder="Grade, type, finish..."></td>
    <td><input class="ldesc" type="text" id="sdim${id}" value="${item ? h(item.dimensions||'') : ''}" placeholder="Qty, sqft..."></td>
    <td><input type="number" min="1" step="1" value="${item ? (item.men||1) : 1}" id="smen${id}" oninput="calcTotals()" style="text-align:right;"></td>
    <td><input type="number" min="0" step=".5" value="${item ? (item.est_hrs||'') : ''}" id="shrs${id}" placeholder="0" oninput="calcTotals()" style="text-align:right;"></td>
    <td><input type="number" min="0" step=".01" value="${item ? (item.mat_cost||'') : ''}" id="smat${id}" placeholder="0.00" oninput="calcTotals()" style="text-align:right;"></td>
    <td><input type="number" min="0" step=".01" value="${item ? (item.sub_cost||'') : ''}" id="ssub_cost${id}" placeholder="0.00" oninput="calcTotals()" style="text-align:right;"></td>
    <td><input type="number" min="0" step=".01" value="${item ? (item.tools_cost||'') : ''}" id="stools${id}" placeholder="0.00" oninput="calcTotals()" style="text-align:right;"></td>
    <td><input class="ldesc" type="text" id="svendor${id}" value="${item ? h(item.sub_contractor||'') : ''}" placeholder="Vendor name..."></td>
    <td style="text-align:center;"><button class="chk-btn" id="chkbtn${id}" onclick="openChecklist(${id})" title="Checklist">&#128203;</button></td>
    <td><button class="del-btn" onclick="delScopeRow(${id})">&#215;</button></td>`;
  document.getElementById('sc-body').appendChild(tr);
  updateChecklistBtnBadge(id);
  renumRows();
}

function delScopeRow(id) {
  if (isLocked) return;
  const el = document.getElementById('sr' + id);
  if (el) el.remove();
  delete rowChecklists[id];
  renumRows();
  calcTotals();
}

function renumRows() {
  document.querySelectorAll('#sc-body tr').forEach((tr, i) => {
    const c = tr.querySelector('.lt-num');
    if (c) c.textContent = i + 1;
  });
}

function getScopeItems() {
  const items = [];
  let idx = 1;
  document.querySelectorAll('#sc-body tr').forEach(tr => {
    const id = tr.id.replace('sr', '');
    const desc   = val('sdesc'     + id);
    const cat    = val('scat'      + id);
    const sub    = val('ssub'      + id);
    const spec   = val('sspec'     + id);
    const dim    = val('sdim'      + id);
    const men    = pn('smen'       + id);
    const hrs    = pn('shrs'       + id);
    const mat    = pn('smat'       + id);
    const sub_c  = pn('ssub_cost'  + id);
    const tools  = pn('stools'     + id);
    const vendor = val('svendor'   + id);
    const cl     = rowChecklists[id] || { items: [], done: [] };
    if (desc || mat || sub_c || tools || hrs > 0 || vendor) {
      items.push({
        id: idx++,
        category: cat,
        sub_category: sub,
        description: desc,
        spec,
        dimensions: dim,
        men,
        est_hrs: hrs,
        mat_cost: mat,
        sub_cost: sub_c,
        tools_cost: tools,
        sub_contractor: vendor,
        sub_contractor_signed: false,
        notes: '',
        checklist: cl.items,
        checklist_done: cl.done
      });
    }
  });
  return items;
}

// ── Totals ────────────────────────────────────────────────────────────────────
function calcTotals() {
  let totMat = 0, totSub = 0, totTools = 0, totalManHrs = 0, totalMen = 0;
  document.querySelectorAll('#sc-body tr').forEach(tr => {
    const id = tr.id.replace('sr', '');
    const men   = pn('smen'       + id);
    const hrs   = pn('shrs'       + id);
    const mat   = pn('smat'       + id);
    const sub_c = pn('ssub_cost'  + id);
    const tools = pn('stools'     + id);
    totalMen    += men;
    totalManHrs += men * hrs;
    totMat      += mat;
    totSub      += sub_c;
    totTools    += tools;
  });

  const fmt = n => '$' + (n || 0).toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});

  document.getElementById('ft-men').textContent   = totalMen || '—';
  document.getElementById('ft-hrs').textContent   = totalManHrs > 0 ? totalManHrs.toFixed(1) : '—';
  document.getElementById('ft-mat').textContent   = fmt(totMat);
  document.getElementById('ft-sub').textContent   = fmt(totSub);
  document.getElementById('ft-tools').textContent = fmt(totTools);

  document.getElementById('tot-manhrs').textContent = totalManHrs.toFixed(1) + ' hrs';
  document.getElementById('tot-mat').textContent    = fmt(totMat);
  document.getElementById('tot-sub').textContent    = fmt(totSub);
  document.getElementById('tot-tools').textContent  = fmt(totTools);
  document.getElementById('tot-raw').textContent    = fmt(totMat + totSub + totTools);

  // Grand total: labor @ $85/hr + mat×1.24 + sub×1.30 + tools×1.15 + tax
  const taxEl  = document.getElementById('tax-region');
  const taxPct = taxEl.value === 'custom'
    ? (parseFloat(document.getElementById('custom-tax')?.value) || 7.5)
    : parseFloat(taxEl.value);
  const labor   = totalManHrs * 85;
  const matMkp  = totMat   * 1.24;
  const subMkp  = totSub   * 1.30;
  const toolMkp = totTools * 1.15;
  const preTax  = labor + matMkp + subMkp + toolMkp;
  const grand   = preTax * (1 + taxPct / 100);
  document.getElementById('tot-grand').textContent = fmt(grand);
}

function calcGrandTotal(agr) {
  let totalManHrs = 0, totMat = 0, totSub = 0, totTools = 0;
  (agr.scope_items || []).forEach(i => {
    totalManHrs += (i.men || 1) * (i.est_hrs || 0);
    totMat      += i.mat_cost   || 0;
    totSub      += i.sub_cost   || 0;
    totTools    += i.tools_cost || 0;
  });
  const taxPct  = parseFloat(agr.project.tax_region) || 7.5;
  const labor   = totalManHrs * 85;
  const preTax  = labor + totMat * 1.24 + totSub * 1.30 + totTools * 1.15;
  return preTax * (1 + taxPct / 100);
}

// ── Build Agreement Object ────────────────────────────────────────────────────
function buildAgreement(status) {
  const taxEl  = document.getElementById('tax-region');
  const taxVal = taxEl.value === 'custom'
    ? String(parseFloat(document.getElementById('custom-tax')?.value) || 7.5)
    : taxEl.value;

  const now    = new Date().toISOString();
  const id     = currentAgrId || getNextAgrId();
  currentAgrId = id;

  return {
    id,
    created_by: 'Maria',
    created_at: now,
    status,
    project: {
      client_name:      val('client-name'),
      client_addr:      val('client-addr'),
      client_city:      val('client-city'),
      client_state:     val('client-state') || 'OH',
      client_zip:       val('client-zip'),
      client_phone:     val('client-phone'),
      client_email:     val('client-email'),
      project_type:     val('proj-type'),
      proj_mgr:         val('proj-mgr') || 'Jose Martinez',
      start_date:       val('start-date'),
      tax_region:       taxVal,
      address_verified: addressVerified
    },
    scope_items:        getScopeItems(),
    agent_check:        getLastAgentCheckResult(),
    jose_notes:         '',
    jose_approved_at:   '',
    sent_to_client_at:  '',
    signed_at:          '',
    deposit_amount:     0,
    deposit_paid_at:    '',
    deposit_method:     '',
    po_id:              ''
  };
}

let lastAgentResult = null;
function getLastAgentCheckResult() {
  return lastAgentResult || { ran_at: '', issues: [], passed: false };
}

// ── Storage ───────────────────────────────────────────────────────────────────
function loadAgreements() {
  try { return JSON.parse(localStorage.getItem('nfr_agreements') || '[]'); } catch(e) { return []; }
}
function saveAgreements(arr) { localStorage.setItem('nfr_agreements', JSON.stringify(arr)); }

function upsertAgreement(agr) {
  const list = loadAgreements();
  const idx  = list.findIndex(a => a.id === agr.id);
  if (idx >= 0) list[idx] = agr; else list.push(agr);
  saveAgreements(list);
}

function findAgreement(id) {
  return loadAgreements().find(a => a.id === id);
}

// ── Actions ───────────────────────────────────────────────────────────────────
function saveDraft() {
  if (isLocked) return;
  const agr = buildAgreement('draft');
  upsertAgreement(agr);
  document.getElementById('agr-display').textContent = agr.id;
  document.getElementById('agr-timestamp').textContent =
    new Date(agr.created_at).toLocaleDateString('en-US', {month:'short', day:'numeric', year:'numeric', hour:'numeric', minute:'2-digit'});
  renderHistory();
  showToast('Draft saved — ' + agr.id);
}

function submitForJose() {
  if (isLocked) return;
  if (!val('client-name')) { alert('Please enter a client name before submitting.'); return; }
  if (getScopeItems().length === 0) { alert('Please add at least one scope item before submitting.'); return; }
  if (!agentCheckRan) { alert('Please run the Pre-Submission Check before submitting.'); return; }
  if (!confirm('Submit ' + (currentAgrId || 'this agreement') + ' for Jose\'s review?\n\nYou will not be able to edit it after submission.')) return;

  const agr = buildAgreement('pending_jose');
  upsertAgreement(agr);
  isLocked = true;

  document.getElementById('agr-display').textContent = agr.id;
  document.getElementById('locked-msg').style.display = 'block';
  document.getElementById('add-row-btn').style.display = 'none';
  document.querySelectorAll('#sc-body input, #sc-body select').forEach(el => el.disabled = true);
  document.querySelectorAll('.panel input, .panel select').forEach(el => el.disabled = true);
  document.getElementById('action-btns').innerHTML = `
    <button class="btn btn-a" onclick="newAgreement()">+ New Agreement</button>
    <span style="font-size:9pt;color:var(--success);padding:10px 0;font-weight:700;">Submitted — awaiting Jose's review</span>`;
  renderHistory();
  showToast('Submitted — ' + agr.id);
}

function newAgreement() {
  if (!isLocked && val('client-name')) {
    if (!confirm('Start a new agreement? Unsaved changes to this form will be lost.')) return;
  }
  initNewAgreement();
  renderHistory();
  window.scrollTo(0, 0);
}

// ── Load Agreement for Editing ────────────────────────────────────────────────
function loadAgreementForEdit(agrId) {
  const agr = findAgreement(agrId);
  if (!agr) return;
  if (agr.status !== 'draft') { alert('This agreement cannot be edited — status: ' + agr.status); return; }

  currentAgrId     = agr.id;
  isLocked         = false;
  agentCheckRan    = agr.agent_check && agr.agent_check.ran_at ? true : false;
  addressVerified  = agr.project.address_verified || false;
  lastAgentResult  = agr.agent_check || null;

  document.getElementById('agr-display').textContent = agr.id;
  document.getElementById('agr-timestamp').textContent =
    new Date(agr.created_at).toLocaleDateString('en-US', {month:'short', day:'numeric', year:'numeric'});
  document.getElementById('status-panel').style.display = 'none';
  document.getElementById('locked-msg').style.display = 'none';
  document.getElementById('info-msg').style.display = 'none';
  document.getElementById('add-row-btn').style.display = 'block';
  document.getElementById('agent-results').innerHTML = '';
  updateVerifiedBadge(addressVerified);
  resetActionBtns();

  document.querySelectorAll('.panel input, .panel select, .panel textarea').forEach(el => el.disabled = false);

  // Fill project fields
  document.getElementById('client-name').value  = agr.project.client_name  || '';
  document.getElementById('client-addr').value  = agr.project.client_addr  || '';
  document.getElementById('client-city').value  = agr.project.client_city  || '';
  document.getElementById('client-state').value = agr.project.client_state || 'OH';
  document.getElementById('client-zip').value   = agr.project.client_zip   || '';
  document.getElementById('client-phone').value = agr.project.client_phone || '';
  document.getElementById('client-email').value = agr.project.client_email || '';
  document.getElementById('proj-mgr').value     = agr.project.proj_mgr     || 'Jose Martinez';
  document.getElementById('start-date').value   = agr.project.start_date   || '';

  setSelectVal('proj-type', agr.project.project_type);

  // Tax region
  const taxVal = agr.project.tax_region;
  if (taxVal === '7.5' || taxVal === '8.0') {
    setSelectVal('tax-region', taxVal);
    document.getElementById('custom-tax-wrap').style.display = 'none';
  } else {
    setSelectVal('tax-region', 'custom');
    document.getElementById('custom-tax-wrap').style.display = 'block';
    document.getElementById('custom-tax').value = taxVal;
  }

  // Rebuild scope rows
  document.getElementById('sc-body').innerHTML = '';
  scopeRowCount = 0;
  Object.keys(rowChecklists).forEach(k => delete rowChecklists[k]);
  (agr.scope_items || []).forEach(item => addScopeRow(item));
  calcTotals();

  // Enable submit if agent check previously ran
  if (agentCheckRan) {
    const sb = document.getElementById('submit-btn');
    if (sb) sb.disabled = false;
  }

  window.scrollTo(0, 0);
}

// ── Agent Check ───────────────────────────────────────────────────────────────
function toggleAgentPanel() {
  const body = document.getElementById('agent-body');
  const chev = document.getElementById('agent-chevron');
  const open = body.classList.toggle('open');
  chev.innerHTML = open ? '&#9650;' : '&#9660;';
}

function runAgentCheck() {
  // Open the panel
  const body = document.getElementById('agent-body');
  if (!body.classList.contains('open')) toggleAgentPanel();

  const items   = getScopeItems();
  const projType = val('proj-type');
  const issues  = [];   // { type: 'error'|'warn'|'pass', msg }

  // 1. Missing description
  items.forEach((item, i) => {
    if (!item.description || !item.description.trim()) {
      issues.push({ type: 'error', msg: `Item ${i+1}: Missing description` });
    }
  });

  // 2. Sub cost but no vendor
  items.forEach((item, i) => {
    if (item.sub_cost > 0 && (!item.sub_contractor || !item.sub_contractor.trim())) {
      issues.push({ type: 'error', msg: `Item ${i+1}: Sub cost entered but no vendor assigned` });
    }
  });

  // 3. Kitchen with no plumbing or electrical
  if (projType === 'Kitchen Remodel') {
    const cats = items.map(i => i.category);
    const hasPlumbing = cats.some(c => c.includes('Plumbing') || c.includes('Fixtures'));
    const hasElec     = cats.some(c => c.includes('Electrical'));
    if (!hasPlumbing) issues.push({ type: 'warn', msg: 'Kitchen Remodel: No plumbing scope found — is this correct?' });
    if (!hasElec)     issues.push({ type: 'warn', msg: 'Kitchen Remodel: No electrical scope found — is this correct?' });
  }

  // 4. Bathroom with no plumbing or waterproofing
  if (projType === 'Bathroom Remodel') {
    const cats = items.map(i => i.category);
    const hasPlumbing = cats.some(c => c.includes('Plumbing') || c.includes('Fixtures'));
    const hasWater    = cats.some(c => c.toLowerCase().includes('waterproof'));
    if (!hasPlumbing) issues.push({ type: 'warn', msg: 'Bathroom Remodel: No plumbing scope found — is this correct?' });
    if (!hasWater)    issues.push({ type: 'warn', msg: 'Bathroom Remodel: No waterproofing scope found — is this correct?' });
  }

  // 5. Grand total < $500
  let totalManHrs = 0, totMat = 0, totSub = 0, totTools = 0;
  items.forEach(i => {
    totalManHrs += (i.men || 1) * (i.est_hrs || 0);
    totMat      += i.mat_cost   || 0;
    totSub      += i.sub_cost   || 0;
    totTools    += i.tools_cost || 0;
  });
  const taxPct  = parseFloat(document.getElementById('tax-region').value === 'custom'
    ? (document.getElementById('custom-tax')?.value || 7.5)
    : document.getElementById('tax-region').value) || 7.5;
  const grand = (totalManHrs * 85 + totMat * 1.24 + totSub * 1.30 + totTools * 1.15) * (1 + taxPct / 100);

  if (grand > 0 && grand < 500) issues.push({ type: 'error', msg: 'Total under $500 — confirm this is correct' });

  // 6. Grand total > $100K
  if (grand > 100000) issues.push({ type: 'warn', msg: 'Total over $100K — Jose must verify scope' });

  // 7. Items with costs but no labor hours
  items.forEach((item, i) => {
    const hasCost = (item.mat_cost + item.sub_cost + item.tools_cost) > 0;
    if (hasCost && (!item.est_hrs || item.est_hrs === 0)) {
      issues.push({ type: 'warn', msg: `Item ${i+1}: Has costs but no labor hours — is this correct?` });
    }
  });

  // ── Trade-pair checks (v2) ────────────────────────────────────
  const allCats     = items.map(i => i.category);
  const suggestions = [];   // { category, text } — clickable add-row suggestions

  // 8. Shower/Tub present + Waterproofing absent → ERROR
  if (allCats.some(c => c === 'Shower / Tub') && !allCats.some(c => c === 'Waterproofing')) {
    issues.push({ type: 'error', msg: 'Shower / Tub scoped but Waterproofing is missing — water damage liability exposure' });
    suggestions.push({ category: 'Waterproofing', text: 'Apply waterproof membrane to all shower walls and floor before tile installation.' });
  }

  // 9. Structural present + Permits absent → ERROR
  if (allCats.some(c => c === 'Structural') && !allCats.some(c => c === 'Permits & Inspections')) {
    issues.push({ type: 'error', msg: 'Structural work scoped but no Permits & Inspections line item — permit required by law' });
    suggestions.push({ category: 'Permits & Inspections', text: 'Pull all required permits. Schedule and pass rough-in and final inspections.' });
  }

  // 10. Rough Electrical present + Finish Electrical absent → WARNING
  if (allCats.some(c => c === 'Rough Electrical') && !allCats.some(c => c === 'Finish Electrical')) {
    issues.push({ type: 'warn', msg: 'Rough Electrical is scoped but Finish Electrical is missing — confirm this is handled separately' });
    suggestions.push({ category: 'Finish Electrical', text: 'Install all outlet covers, switch plates, light fixtures, under-cabinet lighting final trim, and GFCI outlets as required.' });
  }

  // 11. Rough Plumbing present + Fixtures & Plumbing Finish absent → WARNING
  if (allCats.some(c => c === 'Rough Plumbing') && !allCats.some(c => c === 'Fixtures & Plumbing Finish')) {
    issues.push({ type: 'warn', msg: 'Rough Plumbing is scoped but Fixtures & Plumbing Finish is missing — confirm fixtures are handled separately' });
    suggestions.push({ category: 'Fixtures & Plumbing Finish', text: 'Install all fixtures: sink, faucet(s), shower valve trim, showerhead, toilet. Connect all supply and drain lines.' });
  }

  // 12. Cabinets present + Countertops absent → WARNING
  if (allCats.some(c => c === 'Cabinets') && !allCats.some(c => c === 'Countertops')) {
    issues.push({ type: 'warn', msg: 'Cabinets scoped but Countertops are missing — confirm client is supplying their own countertops' });
    suggestions.push({ category: 'Countertops', text: 'Supply and install countertops per client selection. Template after cabinet install. Lead time 10–14 business days.' });
  }

  // 13. Demo present + Dumpster/Haul Away absent → WARNING
  if (allCats.some(c => c === 'Demo & Site Prep') &&
      !items.some(i => i.category === 'Demo & Site Prep' && (i.sub_category||'').toLowerCase().includes('dumpster'))) {
    issues.push({ type: 'warn', msg: 'Demo scope present but no Dumpster / Haul Away line item — confirm debris removal is accounted for' });
    suggestions.push({ category: 'Demo & Site Prep', text: 'Dumpster / haul away — provide roll-off dumpster and remove all demolition debris within 48 hours.' });
  }

  // Check: no items at all
  if (items.length === 0) {
    issues.push({ type: 'error', msg: 'No scope items added yet' });
  }

  // Check: no client name
  if (!val('client-name')) {
    issues.push({ type: 'error', msg: 'Client name is required' });
  }

  const errors = issues.filter(i => i.type === 'error');
  const warns  = issues.filter(i => i.type === 'warn');
  const passed = errors.length === 0;

  // Render results
  const container = document.getElementById('agent-results');
  if (issues.length === 0) {
    container.innerHTML = `<div class="agent-passed">All checks passed. Agreement is ready to submit.</div>`;
  } else {
    let html = '';
    errors.forEach(e => {
      html += `<div class="agent-item"><span class="agent-icon" style="color:var(--danger);">&#10007;</span><span>${h(e.msg)}</span></div>`;
    });
    warns.forEach(w => {
      html += `<div class="agent-item"><span class="agent-icon" style="color:var(--warn);">&#9888;</span><span>${h(w.msg)}</span></div>`;
    });
    if (passed) {
      html = `<div class="agent-passed">No errors found (${warns.length} warning${warns.length !== 1 ? 's' : ''} — review before submitting).</div>` + html;
    }
    // Suggested missing trades
    if (suggestions.length > 0) {
      html += `<div class="agent-suggest-title">Suggested Missing Trades — click to add row</div>`;
      suggestions.forEach(s => {
        html += `<div class="agent-suggest-item" onclick="addSuggestedRow(${JSON.stringify(s.category)}, ${JSON.stringify(s.text)})">
          <span class="agent-suggest-icon">+</span>
          <span><strong>${h(s.category)}</strong> — ${h(s.text)}</span>
        </div>`;
      });
    }
    container.innerHTML = html;
  }

  // Store result
  agentCheckRan = true;
  lastAgentResult = {
    ran_at: new Date().toISOString(),
    issues: issues.map(i => i.msg),
    passed
  };

  // Enable submit button if no errors
  const sb = document.getElementById('submit-btn');
  if (sb) {
    sb.disabled = false;
    sb.title = '';
  }

  showToast(passed
    ? 'Check passed — ready to submit'
    : `Check complete: ${errors.length} error(s), ${warns.length} warning(s)`);
}

// ── Add Suggested Row ─────────────────────────────────────────────────────────
function addSuggestedRow(category, description) {
  if (isLocked) return;
  addScopeRow({ category, description, sub_category: '', spec: '', dimensions: '', men: 1, est_hrs: 0, mat_cost: 0, sub_cost: 0, tools_cost: 0, sub_contractor: '', checklist: [], checklist_done: [] });
  showToast('Row added: ' + category);
  // Scroll to scope table
  document.getElementById('sc-body')?.closest('table')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ── Share with Client ─────────────────────────────────────────────────────────
function shareWithClient(agrId) {
  const agr = findAgreement(agrId);
  if (!agr) return;
  const snap = {
    id:              agr.id,
    status:          agr.status,
    project:         agr.project,
    scope_items:     agr.scope_items,
    grand_total:     agr.grand_total || calcGrandTotal(agr),
    jose_approved_at: agr.jose_approved_at || '',
    created_at:      agr.created_at
  };
  const encoded = btoa(unescape(encodeURIComponent(JSON.stringify(snap))));
  const base    = window.location.href.replace(/[^/]*$/, '');
  const url     = `${base}contract.html?shared=${encodeURIComponent(agr.id)}&snap=${encodeURIComponent(encoded)}`;
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(url)
      .then(() => showToast('Client link copied to clipboard!'))
      .catch(() => prompt('Copy this link and send to the client:', url));
  } else {
    prompt('Copy this link and send to the client:', url);
  }
}

// ── Checklist Modal ───────────────────────────────────────────────────────────
function openChecklist(rowId) {
  activeChecklistRow = rowId;
  const cat = val('scat' + rowId);
  const sub = val('ssub' + rowId);
  const cl  = rowChecklists[rowId] || { items: [], done: [] };

  document.getElementById('chk-modal-title').textContent =
    (sub || 'Item') + ' — Checklist';

  if (cl.items.length === 0) {
    document.getElementById('chk-items').innerHTML =
      '<p style="font-size:9pt;color:var(--muted);font-style:italic;padding:8px 0;">No predefined checklist for this item. You can add notes in the description field.</p>';
    document.getElementById('chk-progress').textContent = '';
  } else {
    const done = cl.done.length;
    document.getElementById('chk-progress').textContent = `${done} / ${cl.items.length} complete`;
    let html = '';
    cl.items.forEach((item, i) => {
      const checked = cl.done.includes(item);
      html += `<label class="chk-item">
        <input type="checkbox" ${checked ? 'checked' : ''} onchange="toggleChecklistItem(${rowId}, '${h(item).replace(/'/g,"\\'")}', this.checked)">
        <span class="chk-item-label">${h(item)}</span>
      </label>`;
    });
    document.getElementById('chk-items').innerHTML = html;
  }

  document.getElementById('chk-modal').style.display = 'flex';
}

function toggleChecklistItem(rowId, item, checked) {
  const cl = rowChecklists[rowId] || { items: [], done: [] };
  // Decode the item back (it was h()-encoded in attribute)
  const decoded = item.replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"');
  if (checked) {
    if (!cl.done.includes(decoded)) cl.done.push(decoded);
  } else {
    cl.done = cl.done.filter(d => d !== decoded);
  }
  rowChecklists[rowId] = cl;
  // Update progress label
  const total = cl.items.length;
  const done  = cl.done.length;
  document.getElementById('chk-progress').textContent = `${done} / ${total} complete`;
  updateChecklistBtnBadge(rowId);
}

function closeChecklistModal(e) {
  if (e && e.target !== document.getElementById('chk-modal')) return;
  document.getElementById('chk-modal').style.display = 'none';
  activeChecklistRow = null;
}

// ── History Table ─────────────────────────────────────────────────────────────
function renderHistory() {
  const list  = loadAgreements().sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  const empty = document.getElementById('history-empty');
  const table = document.getElementById('hist-table');
  const tbody = document.getElementById('hist-body');

  if (list.length === 0) { empty.style.display = 'block'; table.style.display = 'none'; return; }
  empty.style.display = 'none';
  table.style.display = 'table';
  tbody.innerHTML = '';

  list.forEach(agr => {
    const dt     = new Date(agr.created_at).toLocaleDateString('en-US', {month:'short', day:'numeric', year:'numeric'});
    const stMap  = {
      draft:            ['st-draft',         'Draft'],
      pending_jose:     ['st-pending_jose',   'Awaiting Jose'],
      jose_approved:    ['st-jose_approved',  'Jose Approved'],
      sent_to_client:   ['st-sent_to_client', 'Sent to Client'],
      signed:           ['st-signed',         'Signed'],
      deposit_paid:     ['st-deposit_paid',   'Deposit Paid'],
      cancelled:        ['st-cancelled',      'Cancelled']
    };
    const [stClass, stText] = stMap[agr.status] || ['st-draft', agr.status];

    let actionHtml = '';
    if (agr.status === 'draft') {
      actionHtml = `<button class="btn btn-o btn-sm" onclick="loadAgreementForEdit('${h(agr.id)}')">Edit</button>`;
    } else if (agr.status === 'pending_jose') {
      actionHtml = `<span style="font-size:8pt;color:var(--muted);">Awaiting Jose</span>`;
    } else if (agr.status === 'jose_approved') {
      actionHtml = `
        <span style="font-size:8pt;color:var(--success);font-weight:700;margin-right:8px;">Approved</span>
        <button class="btn btn-p btn-sm" onclick="shareWithClient('${h(agr.id)}')" title="Generate shareable link to send to client" style="margin-right:4px;">Share with Client</button>
        <button class="btn btn-g btn-sm" onclick="markSigned('${h(agr.id)}')">Mark Signed</button>`;
    } else if (agr.status === 'sent_to_client') {
      actionHtml = `<button class="btn btn-g btn-sm" onclick="markSigned('${h(agr.id)}')">Mark Signed</button>`;
    } else if (agr.status === 'signed') {
      actionHtml = `<button class="btn btn-p btn-sm" onclick="markDepositPaid('${h(agr.id)}')">Mark Deposit Paid</button>`;
    } else if (agr.status === 'deposit_paid') {
      const poId = agr.po_id;
      if (poId) {
        actionHtml = `<button class="btn btn-p btn-sm" onclick="window.open('jen-portal.html','_blank')">View in Ops (${h(poId)})</button>`;
      } else {
        actionHtml = `<span style="font-size:8pt;color:var(--success);font-weight:700;">Deposit Paid</span>`;
      }
    } else if (agr.status === 'cancelled') {
      actionHtml = `<span style="font-size:8pt;color:var(--muted);">Cancelled</span>`;
    }

    // Show Jose's notes if they exist
    let notesHtml = '';
    if (agr.jose_notes) {
      notesHtml = `<br><span style="font-size:7.5pt;color:var(--muted);font-style:italic;">${h(agr.jose_notes.substring(0,60))}${agr.jose_notes.length > 60 ? '…' : ''}</span>`;
    }

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${h(agr.id)}</strong></td>
      <td>${h(agr.project.client_name || '—')}${notesHtml}</td>
      <td>${h(agr.project.project_type || '—')}</td>
      <td>${dt}</td>
      <td><span class="status-badge ${stClass}">${stText}</span></td>
      <td>${actionHtml}</td>`;
    tbody.appendChild(tr);
  });
}

// ── Mark Signed ───────────────────────────────────────────────────────────────
function markSigned(agrId) {
  const dateStr = prompt('Enter signature date (YYYY-MM-DD):', new Date().toISOString().substring(0,10));
  if (!dateStr) return;
  const agr = findAgreement(agrId);
  if (!agr) return;
  agr.status    = 'signed';
  agr.signed_at = new Date(dateStr).toISOString();
  upsertAgreement(agr);
  renderHistory();
  showToast(agrId + ' marked as signed.');
}

// ── Mark Deposit Paid → Auto-create PO ───────────────────────────────────────
function markDepositPaid(agrId) {
  const amtStr = prompt('Deposit amount received ($):');
  if (amtStr === null) return;
  const amt = parseFloat(amtStr) || 0;
  const method = prompt('Payment method (check / credit card / Zelle / cash):', 'check');
  if (method === null) return;

  const agr = findAgreement(agrId);
  if (!agr) return;

  agr.status           = 'deposit_paid';
  agr.deposit_amount   = amt;
  agr.deposit_paid_at  = new Date().toISOString();
  agr.deposit_method   = method;

  const poId = createPOFromAgreement(agr);
  agr.po_id  = poId;
  upsertAgreement(agr);

  renderHistory();
  showToast('Deposit recorded. PO created: ' + poId);
}

function createPOFromAgreement(agr) {
  const year    = new Date().getFullYear();
  let counter   = parseInt(localStorage.getItem('nfr_po_counter') || '1000');
  counter++;
  localStorage.setItem('nfr_po_counter', counter);
  const poId    = `PO-${year}-${String(counter).padStart(4, '0')}`;
  const grand   = calcGrandTotal(agr);

  const po = {
    id:              poId,
    agreement_id:    agr.id,
    created_by:      'System',
    created_at:      new Date().toISOString(),
    status:          'new',
    project:         Object.assign({}, agr.project),
    scope_items:     agr.scope_items.map(i => Object.assign({}, i, { materials_ordered: false, jorge_scheduled: false })),
    jose_notes:      agr.jose_notes || '',
    jen_notes:       '',
    materials_ordered_at:   '',
    materials_notes:        '',
    jorge_scheduled_for:    '',
    jorge_calendar_event_id:'',
    grand_total:            grand,
    deposit_amount:         agr.deposit_amount,
    progress_payment_due:   grand * 0.4,
    final_payment_due:      grand * 0.2,
    progress_payment_paid_at: '',
    final_payment_paid_at:    '',
    approved_at:  new Date().toISOString(),
    approved_by:  'System'
  };

  const pos = JSON.parse(localStorage.getItem('nfr_pos') || '[]');
  pos.push(po);
  localStorage.setItem('nfr_pos', JSON.stringify(pos));
  return poId;
}

// ── Google Maps Panel ─────────────────────────────────────────────────────────
function initMapsPanel() {
  const key = localStorage.getItem('nfr_gmaps_api_key');
  if (key) {
    document.getElementById('maps-api-key').value = key;
    updateMapsStatus(true);
    loadMapsScript(key);
  }
}

function toggleMapsSettings() {
  document.getElementById('maps-settings').classList.toggle('open');
}

function saveMapsKey() {
  const key = document.getElementById('maps-api-key').value.trim();
  if (!key) { alert('Please enter an API key.'); return; }
  localStorage.setItem('nfr_gmaps_api_key', key);
  updateMapsStatus(true);
  loadMapsScript(key);
  showToast('Maps API key saved.');
}

function updateMapsStatus(connected) {
  const el = document.getElementById('maps-status');
  if (connected) {
    el.textContent = 'Maps Connected';
    el.className   = 'maps-status connected';
  } else {
    el.textContent = 'Manual entry — add API key to enable address verify';
    el.className   = 'maps-status';
  }
}

function updateVerifiedBadge(verified) {
  const badge = document.getElementById('addr-badge');
  if (verified) {
    badge.textContent = '\u2713 Verified';
    badge.className   = 'addr-badge verified';
  } else {
    badge.textContent = '\u25CB Unverified';
    badge.className   = 'addr-badge unverified';
  }
}

function loadMapsScript(key) {
  if (window._mapsLoaded) return;
  window._mapsLoaded = true;
  window.initAutocomplete = function() {
    const input = document.getElementById('client-addr');
    if (!input) return;
    const ac = new google.maps.places.Autocomplete(input, {
      types: ['address'],
      componentRestrictions: { country: 'us' }
    });
    ac.addListener('place_changed', function() {
      const place = ac.getPlace();
      const comps = place.address_components || [];
      const get   = (type) => (comps.find(c => c.types.includes(type)) || {}).long_name  || '';
      const getS  = (type) => (comps.find(c => c.types.includes(type)) || {}).short_name || '';
      document.getElementById('client-addr').value  = (get('street_number') + ' ' + get('route')).trim();
      document.getElementById('client-city').value  = get('locality');
      document.getElementById('client-state').value = getS('administrative_area_level_1');
      document.getElementById('client-zip').value   = get('postal_code');
      addressVerified = true;
      updateVerifiedBadge(true);
    });
  };
  const s   = document.createElement('script');
  s.src     = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places&callback=initAutocomplete`;
  s.async   = true;
  s.onerror = () => { window._mapsLoaded = false; updateMapsStatus(false); };
  document.head.appendChild(s);
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function val(id) { return (document.getElementById(id)?.value || '').trim(); }
function pn(id)  { return parseFloat(document.getElementById(id)?.value) || 0; }
function h(s)    {
  return String(s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function setSelectVal(id, v) {
  const el = document.getElementById(id);
  if (!el) return;
  for (let i = 0; i < el.options.length; i++) {
    if (el.options[i].value === v || el.options[i].text === v) { el.selectedIndex = i; return; }
  }
}
function showToast(msg) {
  const t = document.getElementById('nfr-toast');
  t.textContent = msg;
  t.style.opacity = '1';
  clearTimeout(t._t);
  t._t = setTimeout(() => { t.style.opacity = '0'; }, 3200);
}
</script>
</body>
</html>
```

---

## `po-portal.html` <a id="po-portal-html"></a>

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>NFR Purchase Order Portal</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Lato:wght@300;400;700&display=swap');
  :root {
    --primary:#3A6B5F; --accent:#E07B54; --light:#F2F8F6;
    --border:#A8CEBF; --muted:#6B7C76; --text:#2D2D2D;
    --gold:#D4A054; --danger:#C0392B; --success:#27AE60; --warn:#E67E22;
  }
  *{margin:0;padding:0;box-sizing:border-box;}
  body{font-family:'Lato',sans-serif;font-size:10pt;color:var(--text);background:#f0f4f3;}
  .app{max-width:1440px;margin:0 auto;padding:20px 18px;}

  .top-bar{display:flex;justify-content:space-between;align-items:center;
    background:var(--primary);color:#fff;padding:13px 22px;border-radius:8px;margin-bottom:18px;}
  .brand{font-family:'Playfair Display',serif;font-size:14pt;}
  .brand span{font-family:'Lato',sans-serif;font-size:7.5pt;letter-spacing:2px;text-transform:uppercase;opacity:.7;display:block;margin-top:2px;}
  .po-pill{background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.3);
    border-radius:20px;padding:6px 18px;font-size:9pt;text-align:right;line-height:1.7;}
  .po-pill strong{font-size:12pt;}

  .layout{display:grid;grid-template-columns:310px 1fr;gap:16px;align-items:start;}

  .panel{background:#fff;border:1px solid var(--border);border-radius:8px;padding:16px 18px;margin-bottom:14px;}
  .p-title{font-family:'Playfair Display',serif;font-size:10.5pt;color:var(--primary);
    border-bottom:2px solid var(--border);padding-bottom:7px;margin-bottom:12px;}

  .f{margin-bottom:10px;}
  .f label{display:block;font-size:7.5pt;font-weight:700;color:var(--primary);text-transform:uppercase;letter-spacing:.4px;margin-bottom:3px;}
  .f input,.f select{width:100%;border:1px solid var(--border);border-radius:4px;
    padding:6px 9px;font-family:'Lato',sans-serif;font-size:9.5pt;color:var(--text);outline:none;}
  .f input:focus,.f select:focus{border-color:var(--primary);}
  .f input:disabled,.f select:disabled{background:#f5f5f5;color:var(--muted);}
  .row2{display:flex;gap:8px;}.row2 .f{flex:1;}

  /* SCOPE TABLE */
  .tbl-wrap{overflow-x:auto;}
  table.sc{width:100%;border-collapse:collapse;font-size:8pt;min-width:900px;}
  table.sc thead th{background:var(--primary);color:#fff;padding:7px 5px;text-align:left;
    font-size:7pt;font-weight:700;letter-spacing:.3px;white-space:nowrap;}
  table.sc thead th.r{text-align:right;}
  table.sc tbody td{border-bottom:1px solid #e5ede9;padding:0;vertical-align:middle;}
  table.sc tbody tr:nth-child(even) td{background:#fafcfb;}
  table.sc tbody tr:hover td{background:#f0f8f5;}
  table.sc td input,table.sc td select{width:100%;border:none;background:transparent;
    padding:5px 5px;font-family:'Lato',sans-serif;font-size:8pt;color:var(--text);outline:none;}
  table.sc td input.ldesc{text-align:left;}
  table.sc td input:focus,table.sc td select:focus{background:#e8f5f0;}
  table.sc td input:disabled,table.sc td select:disabled{color:var(--muted);}
  table.sc td.lt-num{text-align:center;padding:5px 4px;font-size:7.5pt;color:var(--muted);width:22px;}
  table.sc tfoot td{border-top:2px solid var(--primary);padding:6px 5px;font-size:8pt;font-weight:700;}
  table.sc tfoot td.r{text-align:right;}
  .del-btn{background:none;border:none;color:#ccc;cursor:pointer;font-size:13pt;padding:0 5px;line-height:1;}
  .del-btn:hover{color:var(--danger);}
  .add-row-btn{background:var(--light);border:1px dashed var(--border);color:var(--primary);
    padding:7px 16px;border-radius:4px;cursor:pointer;font-size:9pt;font-weight:700;margin-top:8px;width:100%;}
  .add-row-btn:hover{background:var(--border);}

  /* TOTALS BAR */
  .totals-bar{display:flex;gap:20px;flex-wrap:wrap;background:var(--light);border:1px solid var(--border);
    border-radius:6px;padding:10px 14px;margin-top:10px;}
  .t-item{display:flex;flex-direction:column;gap:2px;}
  .t-item label{font-size:7pt;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.3px;}
  .t-item .t-val{font-size:11pt;font-weight:700;color:var(--primary);}

  /* STATUS BADGES */
  .status-badge{display:inline-block;padding:3px 10px;border-radius:12px;font-size:8pt;font-weight:700;text-transform:uppercase;letter-spacing:.3px;}
  .status-draft{background:#e8f5f0;color:var(--primary);}
  .status-pending{background:#fff3cd;color:#856404;}
  .status-approved{background:#d4edda;color:#155724;}
  .status-rejected{background:#f8d7da;color:#721c24;}

  /* LOCKED BANNER */
  .locked-note{background:#fff3cd;border:1px solid var(--gold);border-radius:5px;
    padding:9px 12px;font-size:8.5pt;color:#856404;margin-bottom:12px;line-height:1.6;}
  .rejected-note{background:#f8d7da;border:1px solid #f5c6cb;border-radius:5px;
    padding:9px 12px;font-size:8.5pt;color:#721c24;margin-bottom:12px;line-height:1.6;}

  /* BUTTONS */
  .actions{display:flex;gap:10px;margin-top:14px;flex-wrap:wrap;align-items:center;}
  .btn{padding:10px 22px;border-radius:4px;font-family:'Lato',sans-serif;font-size:10pt;font-weight:700;cursor:pointer;border:none;}
  .btn-p{background:var(--primary);color:#fff;}.btn-p:hover{background:#2d5448;}
  .btn-o{background:#fff;color:var(--primary);border:2px solid var(--primary);}.btn-o:hover{background:var(--light);}
  .btn-a{background:var(--accent);color:#fff;}.btn-a:hover{background:#c56840;}
  .btn-g{background:var(--success);color:#fff;}.btn-g:hover{background:#1e8449;}

  /* HISTORY */
  table.hist{width:100%;border-collapse:collapse;font-size:8.5pt;}
  table.hist th{background:var(--primary);color:#fff;padding:7px 10px;text-align:left;font-size:7.5pt;font-weight:700;letter-spacing:.3px;}
  table.hist td{border-bottom:1px solid #e5ede9;padding:8px 10px;vertical-align:middle;}
  table.hist tr:nth-child(even) td{background:#fafcfb;}
  table.hist tr:hover td{background:#f0f8f5;}

  /* TOAST */
  #nfr-toast{position:fixed;bottom:24px;right:24px;background:var(--primary);color:#fff;
    padding:12px 20px;border-radius:8px;font-size:9.5pt;font-weight:700;z-index:9999;
    box-shadow:0 4px 16px rgba(0,0,0,.2);transition:opacity .3s;opacity:0;pointer-events:none;}
</style>
<script src="js/auth.js"></script>
<script>NFRAuth.requireAuth('po');</script>
</head>
<body>
<div class="app">

<div class="top-bar">
  <div class="brand">Natures Friend &amp; Resources
    <span>Staff Portal — Purchase Order</span>
  </div>
  <div class="po-pill">
    PO Number <strong id="po-display">—</strong><br>
    <span id="po-meta" style="font-size:8pt;opacity:.8;">Created by Maria &nbsp;·&nbsp; <span id="po-timestamp">—</span></span>
  </div>
</div>

<div class="layout">

<!-- LEFT: Project Info -->
<div>
  <div class="panel">
    <div class="p-title">Project Information</div>
    <div class="f"><label>Client Name</label><input type="text" id="client-name" placeholder="Full name or company"></div>
    <div class="f"><label>Property Address</label><input type="text" id="client-addr" placeholder="Street address"></div>
    <div class="row2">
      <div class="f"><label>City</label><input type="text" id="client-city" placeholder="Columbus"></div>
      <div class="f" style="max-width:80px;"><label>Zip</label><input type="text" id="client-zip" placeholder="43228"></div>
    </div>
    <div class="row2">
      <div class="f"><label>Project Type</label>
        <select id="proj-type">
          <option>Kitchen Remodel</option><option>Bathroom Remodel</option>
          <option>Full Remodel</option><option>Paint / Drywall</option>
          <option>Cabinets</option><option>Demo</option><option>Flooring</option><option>Other</option>
        </select>
      </div>
      <div class="f"><label>Tax Region</label>
        <select id="tax-region">
          <option value="7.5">Columbus (7.5%)</option>
          <option value="8.0">Dublin (8.0%)</option>
          <option value="custom">Custom</option>
        </select>
      </div>
    </div>
    <div class="f"><label>Estimated Start Date</label><input type="date" id="start-date"></div>
    <div class="f"><label>Project Manager</label><input type="text" id="proj-mgr" value="Jose Martinez"></div>
  </div>

  <div class="panel" id="status-panel" style="display:none;">
    <div class="p-title">PO Status</div>
    <div id="status-info"></div>
  </div>
</div>

<!-- RIGHT: Scope -->
<div>
  <div class="panel">
    <div class="p-title">Scope of Work — Detailed Line Items</div>
    <p style="font-size:8pt;color:var(--muted);margin-bottom:12px;line-height:1.6;">
      Fill in every column with specific detail. These descriptions become the client contract. The more precise the spec and dimensions, the better Jose can price it.
    </p>
    <div id="locked-msg" class="locked-note" style="display:none;">
      ✅ Submitted for Jose's review. Locked for editing. Ask Jose to request changes if revisions are needed.
    </div>
    <div id="rejected-msg" class="rejected-note" style="display:none;">
      ↩ <strong>Jose requested changes:</strong> <span id="rejected-reason"></span>
    </div>
    <div class="tbl-wrap">
      <table class="sc" id="sc-table">
        <thead>
          <tr>
            <th style="width:22px;">#</th>
            <th style="width:95px;">Category</th>
            <th style="min-width:155px;">Line Description</th>
            <th style="min-width:140px;">Spec / Grade</th>
            <th style="min-width:120px;">Dimensions / Qty</th>
            <th class="r" style="width:42px;">Men</th>
            <th class="r" style="width:52px;">Est Hrs</th>
            <th class="r" style="width:78px;">Materials $</th>
            <th class="r" style="width:78px;">Sub $</th>
            <th class="r" style="width:78px;">Tools/Equip $</th>
            <th style="min-width:120px;">Notes</th>
            <th style="width:22px;"></th>
          </tr>
        </thead>
        <tbody id="sc-body"></tbody>
        <tfoot>
          <tr>
            <td colspan="5" style="color:var(--muted);font-size:7.5pt;padding-left:5px;">TOTALS</td>
            <td class="r" id="ft-men">—</td>
            <td class="r" id="ft-hrs">—</td>
            <td class="r" id="ft-mat">$0.00</td>
            <td class="r" id="ft-sub">$0.00</td>
            <td class="r" id="ft-tools">$0.00</td>
            <td colspan="2"></td>
          </tr>
        </tfoot>
      </table>
    </div>
    <button class="add-row-btn" id="add-row-btn" onclick="addScopeRow()">+ Add Scope Item</button>

    <div class="totals-bar">
      <div class="t-item"><label>Total Man-Hours</label><div class="t-val" id="tot-manhrs">0 hrs</div></div>
      <div class="t-item"><label>Materials</label><div class="t-val" id="tot-mat">$0.00</div></div>
      <div class="t-item"><label>Sub-Contractor</label><div class="t-val" id="tot-sub">$0.00</div></div>
      <div class="t-item"><label>Tools / Equip</label><div class="t-val" id="tot-tools">$0.00</div></div>
      <div class="t-item"><label>Raw Cost Total</label><div class="t-val" id="tot-raw" style="color:var(--accent);">$0.00</div></div>
    </div>
  </div>

  <div class="actions" id="action-btns">
    <button class="btn btn-o" onclick="saveDraft()">Save Draft</button>
    <button class="btn btn-g" onclick="submitPO()">Submit for Review →</button>
    <button class="btn btn-a" onclick="newPO()">+ New PO</button>
  </div>
</div>

</div><!-- end layout -->

<!-- PO HISTORY -->
<div class="panel" style="margin-top:4px;">
  <div class="p-title">PO History</div>
  <div id="history-empty" style="font-size:8.5pt;color:var(--muted);font-style:italic;padding:6px 0;">
    No purchase orders yet. Fill out the form above and click Save Draft or Submit for Review.
  </div>
  <div style="overflow-x:auto;">
    <table class="hist" id="hist-table" style="display:none;">
      <thead>
        <tr>
          <th>PO #</th><th>Client</th><th>Project Type</th><th>Submitted</th><th>Status</th><th>Action</th>
        </tr>
      </thead>
      <tbody id="hist-body"></tbody>
    </table>
  </div>
</div>

</div><!-- end app -->
<div id="nfr-toast"></div>

<script>
let currentPOId = null;
let scopeRowCount = 0;
let isLocked = false;
const CATEGORIES = ['Drywall','Paint','Flooring','Cabinets','Demo','Tile','Framing','Sub-contract','Tools','Other'];

document.addEventListener('DOMContentLoaded', () => {
  initNewPO();
  renderHistory();
});

// ── PO Counter ────────────────────────────────────────────────────────────────
function getNextPONumber() {
  const year = new Date().getFullYear();
  let counter = parseInt(localStorage.getItem('nfr_po_counter') || '1000');
  counter++;
  localStorage.setItem('nfr_po_counter', counter);
  return `PO-${year}-${String(counter).padStart(4, '0')}`;
}

// ── Init / Reset ──────────────────────────────────────────────────────────────
function initNewPO() {
  currentPOId = getNextPONumber();
  isLocked = false;
  document.getElementById('po-display').textContent = currentPOId;
  const now = new Date();
  document.getElementById('po-timestamp').textContent = now.toLocaleDateString('en-US',
    {month:'short', day:'numeric', year:'numeric', hour:'numeric', minute:'2-digit'});
  document.getElementById('status-panel').style.display = 'none';
  document.getElementById('locked-msg').style.display = 'none';
  document.getElementById('rejected-msg').style.display = 'none';
  document.getElementById('add-row-btn').style.display = 'block';
  resetActionBtns();

  ['client-name','client-addr','client-city','client-zip'].forEach(id => {
    const el = document.getElementById(id); if (el) el.value = '';
  });
  document.getElementById('proj-mgr').value = 'Jose Martinez';
  document.getElementById('proj-type').selectedIndex = 0;
  document.getElementById('tax-region').selectedIndex = 0;
  document.getElementById('start-date').value = '';
  document.getElementById('sc-body').innerHTML = '';
  scopeRowCount = 0;
  addScopeRow(); addScopeRow(); addScopeRow();
  calcTotals();

  // Enable all project fields
  document.querySelectorAll('.panel input, .panel select').forEach(el => el.disabled = false);
}

function resetActionBtns() {
  document.getElementById('action-btns').innerHTML = `
    <button class="btn btn-o" onclick="saveDraft()">Save Draft</button>
    <button class="btn btn-g" onclick="submitPO()">Submit for Review →</button>
    <button class="btn btn-a" onclick="newPO()">+ New PO</button>`;
}

// ── Scope Rows ────────────────────────────────────────────────────────────────
function addScopeRow() {
  if (isLocked) return;
  const id = ++scopeRowCount;
  const tr = document.createElement('tr');
  tr.id = 'sr' + id;
  tr.innerHTML = `
    <td class="lt-num">${id}</td>
    <td><select id="scat${id}" onchange="calcTotals()">
      ${CATEGORIES.map(c => `<option>${c}</option>`).join('')}
    </select></td>
    <td><input class="ldesc" type="text" id="sdesc${id}" placeholder="Describe the work..." oninput="calcTotals()"></td>
    <td><input class="ldesc" type="text" id="sspec${id}" placeholder="Grade, type, finish..." oninput="calcTotals()"></td>
    <td><input class="ldesc" type="text" id="sdim${id}" placeholder="Qty, sqft, sheets..." oninput="calcTotals()"></td>
    <td><input type="number" min="1" step="1" value="1" id="smen${id}" oninput="calcTotals()"></td>
    <td><input type="number" min="0" step=".5" placeholder="0" id="shrs${id}" oninput="calcTotals()"></td>
    <td><input type="number" min="0" step=".01" placeholder="0.00" id="smat${id}" oninput="calcTotals()"></td>
    <td><input type="number" min="0" step=".01" placeholder="0.00" id="ssub${id}" oninput="calcTotals()"></td>
    <td><input type="number" min="0" step=".01" placeholder="0.00" id="stools${id}" oninput="calcTotals()"></td>
    <td><input class="ldesc" type="text" id="snotes${id}" placeholder="Extra notes..." oninput="calcTotals()"></td>
    <td><button class="del-btn" onclick="delScopeRow(${id})">×</button></td>`;
  document.getElementById('sc-body').appendChild(tr);
  renumRows();
}

function delScopeRow(id) {
  if (isLocked) return;
  const el = document.getElementById('sr' + id);
  if (el) el.remove();
  renumRows(); calcTotals();
}

function renumRows() {
  document.querySelectorAll('#sc-body tr').forEach((tr, i) => {
    const c = tr.querySelector('.lt-num'); if (c) c.textContent = i + 1;
  });
}

function getScopeItems() {
  const items = [];
  let idx = 1;
  document.querySelectorAll('#sc-body tr').forEach(tr => {
    const id = tr.id.replace('sr', '');
    const desc  = val('sdesc'  + id);
    const cat   = val('scat'   + id);
    const spec  = val('sspec'  + id);
    const dim   = val('sdim'   + id);
    const men   = pn('smen'    + id);
    const hrs   = pn('shrs'    + id);
    const mat   = pn('smat'    + id);
    const sub   = pn('ssub'    + id);
    const tools = pn('stools'  + id);
    const notes = val('snotes' + id);
    if (desc || mat || sub || tools || hrs > 0) {
      items.push({ id: idx++, category: cat, description: desc, spec, dimensions: dim,
        men, est_hrs: hrs, mat_cost: mat, sub_cost: sub, tools_cost: tools, notes, commission_pct: 0 });
    }
  });
  return items;
}

function calcTotals() {
  let totMat = 0, totSub = 0, totTools = 0, realManHrs = 0;
  document.querySelectorAll('#sc-body tr').forEach(tr => {
    const id = tr.id.replace('sr', '');
    const men  = pn('smen'  + id);
    const hrs  = pn('shrs'  + id);
    totMat   += pn('smat'   + id);
    totSub   += pn('ssub'   + id);
    totTools += pn('stools' + id);
    realManHrs += men * hrs;
  });
  const fmt = n => '$' + (n||0).toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
  document.getElementById('ft-mat').textContent    = fmt(totMat);
  document.getElementById('ft-sub').textContent    = fmt(totSub);
  document.getElementById('ft-tools').textContent  = fmt(totTools);
  document.getElementById('tot-manhrs').textContent = realManHrs.toFixed(1) + ' hrs';
  document.getElementById('tot-mat').textContent   = fmt(totMat);
  document.getElementById('tot-sub').textContent   = fmt(totSub);
  document.getElementById('tot-tools').textContent = fmt(totTools);
  document.getElementById('tot-raw').textContent   = fmt(totMat + totSub + totTools);
}

// ── Build PO Object ───────────────────────────────────────────────────────────
function buildPO(status) {
  const taxEl = document.getElementById('tax-region');
  const taxVal = taxEl.value === 'custom'
    ? (parseFloat(document.getElementById('custom-tax')?.value) || 7.5)
    : parseFloat(taxEl.value);
  return {
    id: currentPOId,
    created_by: 'Maria',
    created_at: new Date().toISOString(),
    status: status,
    project: {
      client_name:  val('client-name'),
      client_addr:  val('client-addr'),
      client_city:  val('client-city'),
      client_zip:   val('client-zip'),
      project_type: val('proj-type'),
      proj_mgr:     val('proj-mgr') || 'Jose Martinez',
      start_date:   val('start-date'),
      tax_region:   String(taxVal)
    },
    scope_items:     getScopeItems(),
    jose_notes:      '',
    approved_at:     '',
    approved_by:     '',
    rejected_reason: '',
    commission_pct:  0
  };
}

// ── Storage ───────────────────────────────────────────────────────────────────
function loadPOs() {
  try { return JSON.parse(localStorage.getItem('nfr_pos') || '[]'); } catch(e) { return []; }
}
function savePOs(pos) { localStorage.setItem('nfr_pos', JSON.stringify(pos)); }

function upsertPO(po) {
  const pos = loadPOs();
  const idx = pos.findIndex(p => p.id === po.id);
  if (idx >= 0) pos[idx] = po; else pos.push(po);
  savePOs(pos);
}

// ── Actions ───────────────────────────────────────────────────────────────────
function saveDraft() {
  if (isLocked) return;
  upsertPO(buildPO('draft'));
  renderHistory();
  showToast('Draft saved — ' + currentPOId);
}

function submitPO() {
  if (isLocked) return;
  if (!val('client-name')) { alert('Please enter a client name before submitting.'); return; }
  if (getScopeItems().length === 0) { alert('Please add at least one scope item before submitting.'); return; }
  if (!confirm('Submit ' + currentPOId + ' for Jose\'s review?\n\nYou will not be able to edit it after submission.')) return;

  upsertPO(buildPO('pending_review'));
  isLocked = true;

  document.getElementById('locked-msg').style.display = 'block';
  document.getElementById('add-row-btn').style.display = 'none';
  document.querySelectorAll('#sc-body input, #sc-body select').forEach(el => el.disabled = true);
  document.querySelectorAll('.panel input, .panel select').forEach(el => el.disabled = true);
  document.getElementById('action-btns').innerHTML = `
    <button class="btn btn-a" onclick="newPO()">+ New PO</button>
    <span style="font-size:9pt;color:var(--success);padding:10px 0;font-weight:700;">✅ Submitted — awaiting Jose's review</span>`;
  renderHistory();
  showToast('✅ ' + currentPOId + ' submitted!');
}

function newPO() {
  if (!isLocked && val('client-name')) {
    if (!confirm('Start a new PO? Unsaved changes to this form will be lost.')) return;
  }
  initNewPO();
  renderHistory();
}

// ── Load draft for editing ────────────────────────────────────────────────────
function loadPOForEdit(poId) {
  const pos = loadPOs();
  const po = pos.find(p => p.id === poId);
  if (!po) return;
  if (po.status !== 'draft') { alert('This PO cannot be edited — status: ' + po.status); return; }

  currentPOId = po.id;
  isLocked = false;
  document.getElementById('po-display').textContent = po.id;
  document.getElementById('po-timestamp').textContent = new Date(po.created_at)
    .toLocaleDateString('en-US', {month:'short', day:'numeric', year:'numeric'});
  document.getElementById('status-panel').style.display = 'none';
  document.getElementById('locked-msg').style.display = 'none';
  document.getElementById('rejected-msg').style.display = 'none';
  document.getElementById('add-row-btn').style.display = 'block';
  resetActionBtns();

  // Re-enable all inputs
  document.querySelectorAll('.panel input, .panel select').forEach(el => el.disabled = false);

  // Fill project fields
  document.getElementById('client-name').value  = po.project.client_name || '';
  document.getElementById('client-addr').value  = po.project.client_addr || '';
  document.getElementById('client-city').value  = po.project.client_city || '';
  document.getElementById('client-zip').value   = po.project.client_zip  || '';
  document.getElementById('proj-mgr').value     = po.project.proj_mgr    || 'Jose Martinez';
  document.getElementById('start-date').value   = po.project.start_date  || '';
  setSelectVal('proj-type', po.project.project_type);

  // Rebuild scope rows
  document.getElementById('sc-body').innerHTML = '';
  scopeRowCount = 0;
  po.scope_items.forEach(item => {
    const id = ++scopeRowCount;
    const tr = document.createElement('tr');
    tr.id = 'sr' + id;
    tr.innerHTML = `
      <td class="lt-num">${id}</td>
      <td><select id="scat${id}" onchange="calcTotals()">
        ${CATEGORIES.map(c => `<option${c===item.category?' selected':''}>${c}</option>`).join('')}
      </select></td>
      <td><input class="ldesc" type="text" id="sdesc${id}" value="${h(item.description)}" oninput="calcTotals()"></td>
      <td><input class="ldesc" type="text" id="sspec${id}" value="${h(item.spec)}" oninput="calcTotals()"></td>
      <td><input class="ldesc" type="text" id="sdim${id}" value="${h(item.dimensions)}" oninput="calcTotals()"></td>
      <td><input type="number" min="1" step="1" value="${item.men||1}" id="smen${id}" oninput="calcTotals()"></td>
      <td><input type="number" min="0" step=".5" value="${item.est_hrs||''}" id="shrs${id}" oninput="calcTotals()"></td>
      <td><input type="number" min="0" step=".01" value="${item.mat_cost||''}" id="smat${id}" oninput="calcTotals()"></td>
      <td><input type="number" min="0" step=".01" value="${item.sub_cost||''}" id="ssub${id}" oninput="calcTotals()"></td>
      <td><input type="number" min="0" step=".01" value="${item.tools_cost||''}" id="stools${id}" oninput="calcTotals()"></td>
      <td><input class="ldesc" type="text" id="snotes${id}" value="${h(item.notes)}" oninput="calcTotals()"></td>
      <td><button class="del-btn" onclick="delScopeRow(${id})">×</button></td>`;
    document.getElementById('sc-body').appendChild(tr);
  });
  calcTotals();
  window.scrollTo(0, 0);
}

// ── History ───────────────────────────────────────────────────────────────────
function renderHistory() {
  const pos = loadPOs().sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  const empty = document.getElementById('history-empty');
  const table = document.getElementById('hist-table');
  const tbody = document.getElementById('hist-body');
  if (pos.length === 0) { empty.style.display = 'block'; table.style.display = 'none'; return; }
  empty.style.display = 'none'; table.style.display = 'table';
  tbody.innerHTML = '';
  pos.forEach(po => {
    const dt = new Date(po.created_at).toLocaleDateString('en-US', {month:'short', day:'numeric', year:'numeric'});
    const sClass = {draft:'status-draft', pending_review:'status-pending',
      approved:'status-approved', rejected:'status-rejected'}[po.status] || 'status-draft';
    const sText = {draft:'Draft', pending_review:'Pending Review',
      approved:'Approved', rejected:'Needs Changes'}[po.status] || po.status;
    let actionHtml = '';
    if (po.status === 'draft') {
      actionHtml = `<button class="btn btn-o" style="padding:4px 12px;font-size:8pt;" onclick="loadPOForEdit('${h(po.id)}')">Edit</button>`;
    } else if (po.status === 'approved') {
      actionHtml = `<button class="btn btn-p" style="padding:4px 12px;font-size:8pt;" onclick="window.open('contract.html?po=${encodeURIComponent(po.id)}','_blank')">View Contract</button>`;
    } else if (po.status === 'rejected') {
      actionHtml = `<button class="btn btn-a" style="padding:4px 12px;font-size:8pt;" onclick="resubmitPO('${h(po.id)}')">Revise &amp; Resubmit</button>`;
    } else {
      actionHtml = '<span style="font-size:8pt;color:var(--muted);">Awaiting review</span>';
    }
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${h(po.id)}</strong></td>
      <td>${h(po.project.client_name || '—')}</td>
      <td>${h(po.project.project_type || '—')}</td>
      <td>${dt}</td>
      <td><span class="status-badge ${sClass}">${sText}</span></td>
      <td>${actionHtml}</td>`;
    tbody.appendChild(tr);
  });
}

function resubmitPO(poId) {
  const pos = loadPOs();
  const po = pos.find(p => p.id === poId);
  if (!po) return;
  // Load it like a draft for editing, then change status back to draft
  po.status = 'draft';
  upsertPO(po);
  loadPOForEdit(poId);
  if (po.rejected_reason) {
    document.getElementById('rejected-msg').style.display = 'block';
    document.getElementById('rejected-reason').textContent = po.rejected_reason;
  }
  renderHistory();
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function val(id) { return (document.getElementById(id)?.value || '').trim(); }
function pn(id) { return parseFloat(document.getElementById(id)?.value) || 0; }
function h(s) { return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function setSelectVal(id, v) {
  const el = document.getElementById(id); if (!el) return;
  for (let i = 0; i < el.options.length; i++) { if (el.options[i].value === v || el.options[i].text === v) { el.selectedIndex = i; return; } }
}
function showToast(msg) {
  const t = document.getElementById('nfr-toast');
  t.textContent = msg; t.style.opacity = '1';
  clearTimeout(t._t); t._t = setTimeout(() => t.style.opacity = '0', 3200);
}
</script>
</body>
</html>
```

---

## `jen-portal.html` <a id="jen-portal-html"></a>

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>NFR Operations Portal — Jen</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Lato:wght@300;400;700&display=swap');
  :root {
    --primary:#3A6B5F; --accent:#E07B54; --light:#F2F8F6;
    --border:#A8CEBF; --muted:#6B7C76; --text:#2D2D2D;
    --gold:#D4A054; --danger:#C0392B; --success:#27AE60; --warn:#E67E22;
    --blue:#3498DB; --purple:#9B59B6; --dark-blue:#2C3E50;
  }
  *{margin:0;padding:0;box-sizing:border-box;}
  body{font-family:'Lato',sans-serif;font-size:10pt;color:var(--text);background:#f0f4f3;}
  .app{max-width:1440px;margin:0 auto;padding:20px 18px;}

  /* TOP BAR */
  .top-bar{display:flex;justify-content:space-between;align-items:center;
    background:var(--primary);color:#fff;padding:13px 22px;border-radius:8px;margin-bottom:18px;flex-wrap:wrap;gap:10px;}
  .brand{font-family:'Playfair Display',serif;font-size:14pt;}
  .brand span{font-family:'Lato',sans-serif;font-size:7.5pt;letter-spacing:2px;text-transform:uppercase;opacity:.7;display:block;margin-top:2px;}
  .pills{display:flex;gap:8px;flex-wrap:wrap;}
  .pill{background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.3);
    border-radius:20px;padding:5px 14px;font-size:8.5pt;text-align:center;line-height:1.7;}
  .pill strong{font-size:12pt;display:block;}
  .pill span{font-size:7pt;text-transform:uppercase;letter-spacing:.5px;opacity:.8;}

  /* DASHBOARD CARDS */
  .dash-cards{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:18px;}
  .dash-card{background:#fff;border-radius:8px;padding:14px 18px;border-left:4px solid;text-align:center;}
  .dash-card.new{border-color:var(--warn);}
  .dash-card.materials{border-color:var(--gold);}
  .dash-card.inprog{border-color:var(--success);}
  .dash-card.awaiting{border-color:var(--blue);}
  .dash-card .dc-num{font-size:28pt;font-weight:700;line-height:1;}
  .dash-card.new .dc-num{color:var(--warn);}
  .dash-card.materials .dc-num{color:var(--gold);}
  .dash-card.inprog .dc-num{color:var(--success);}
  .dash-card.awaiting .dc-num{color:var(--blue);}
  .dash-card .dc-lbl{font-size:8pt;color:var(--muted);margin-top:4px;text-transform:uppercase;letter-spacing:.4px;font-weight:700;}

  /* PO CARD */
  .po-card{background:#fff;border-radius:8px;margin-bottom:20px;border-left:5px solid;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,.06);}
  .po-card.status-new{border-color:var(--warn);}
  .po-card.status-materials_ordered{border-color:var(--gold);}
  .po-card.status-jorge_scheduled{border-color:var(--blue);}
  .po-card.status-in_progress{border-color:var(--success);}
  .po-card.status-punch_list{border-color:var(--purple);}
  .po-card.status-complete{border-color:var(--primary);}
  .po-card.status-invoiced{border-color:var(--dark-blue);}

  /* CARD HEADER */
  .po-card-header{padding:14px 18px 10px;border-bottom:1px solid #e8f0ed;}
  .card-hdr-top{display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:8px;margin-bottom:8px;}
  .card-ids{display:flex;align-items:center;gap:10px;flex-wrap:wrap;}
  .po-id{font-family:'Playfair Display',serif;font-size:13pt;color:var(--primary);}
  .agr-link{font-size:8pt;color:var(--muted);text-decoration:none;border:1px solid var(--border);padding:2px 8px;border-radius:10px;}
  .agr-link:hover{background:var(--light);color:var(--primary);}
  .status-badge{display:inline-block;padding:4px 11px;border-radius:12px;font-size:8pt;font-weight:700;text-transform:uppercase;letter-spacing:.3px;}
  .sb-new{background:#fff3e0;color:var(--warn);}
  .sb-materials_ordered{background:#fef9e7;color:#a07000;}
  .sb-jorge_scheduled{background:#ebf5fb;color:#1a6fa1;}
  .sb-in_progress{background:#eafaf1;color:#1a7a45;}
  .sb-punch_list{background:#f5eef8;color:#6c3483;}
  .sb-complete{background:#eaf4f2;color:var(--primary);}
  .sb-invoiced{background:#eaecee;color:#1c2833;}
  .sb-paid{background:#f0f0f0;color:var(--muted);}

  .card-info-row{display:flex;gap:20px;flex-wrap:wrap;font-size:9pt;color:var(--muted);}
  .card-info-row strong{color:var(--text);}
  .card-payment-row{display:flex;gap:16px;flex-wrap:wrap;margin-top:8px;background:var(--light);border-radius:5px;padding:8px 12px;}
  .pay-item{display:flex;flex-direction:column;gap:2px;}
  .pay-item .pay-lbl{font-size:7pt;font-weight:700;text-transform:uppercase;letter-spacing:.3px;color:var(--muted);}
  .pay-item .pay-amt{font-size:10pt;font-weight:700;color:var(--primary);}
  .pay-item .pay-rcvd{font-size:7.5pt;color:var(--success);}

  /* CARD SECTION */
  .card-body{padding:14px 18px;}
  .section{margin-bottom:16px;}
  .section-title{font-family:'Playfair Display',serif;font-size:10pt;color:var(--primary);
    border-bottom:2px solid var(--border);padding-bottom:6px;margin-bottom:10px;}

  /* SCOPE TABLE */
  .tbl-wrap{overflow-x:auto;}
  table.sc{width:100%;border-collapse:collapse;font-size:8pt;min-width:800px;}
  table.sc thead th{background:var(--primary);color:#fff;padding:7px 6px;text-align:left;
    font-size:7pt;font-weight:700;letter-spacing:.3px;white-space:nowrap;}
  table.sc thead th.c{text-align:center;}
  table.sc tbody td{border-bottom:1px solid #e5ede9;padding:6px 6px;vertical-align:middle;font-size:8pt;}
  table.sc tbody tr:nth-child(even) td{background:#fafcfb;}
  table.sc tbody tr:hover td{background:#f0f8f5;}
  table.sc td.lt-num{text-align:center;color:var(--muted);width:28px;font-size:7.5pt;}
  table.sc td.c{text-align:center;}
  .sub-badge{display:inline-block;padding:2px 7px;border-radius:10px;font-size:7pt;font-weight:700;}
  .sub-signed{background:#d4edda;color:#155724;}
  .sub-unsigned{background:#fff3cd;color:#856404;}
  .chk-btn{background:var(--light);border:1px solid var(--border);color:var(--primary);
    cursor:pointer;font-size:8pt;padding:3px 8px;border-radius:4px;white-space:nowrap;}
  .chk-btn:hover{background:var(--border);}
  .mat-check{width:16px;height:16px;cursor:pointer;accent-color:var(--success);}

  /* PANELS */
  .sub-panel{background:var(--light);border:1px solid var(--border);border-radius:6px;padding:12px 14px;margin-bottom:12px;}
  .sub-panel-title{font-size:8pt;font-weight:700;color:var(--primary);text-transform:uppercase;letter-spacing:.4px;margin-bottom:10px;}
  .f{margin-bottom:9px;}
  .f label{display:block;font-size:7.5pt;font-weight:700;color:var(--primary);text-transform:uppercase;letter-spacing:.4px;margin-bottom:3px;}
  .f input,.f select,.f textarea{width:100%;border:1px solid var(--border);border-radius:4px;
    padding:6px 9px;font-family:'Lato',sans-serif;font-size:9pt;color:var(--text);background:#fff;outline:none;}
  .f input:focus,.f select:focus,.f textarea:focus{border-color:var(--primary);}
  .f textarea{resize:vertical;min-height:60px;}
  .row2{display:flex;gap:8px;}.row2 .f{flex:1;}

  .btn{border:none;border-radius:4px;padding:7px 16px;font-family:'Lato',sans-serif;
    font-size:9pt;font-weight:700;cursor:pointer;transition:opacity .15s;}
  .btn:hover{opacity:.85;}
  .btn-primary{background:var(--primary);color:#fff;}
  .btn-warn{background:var(--warn);color:#fff;}
  .btn-gold{background:var(--gold);color:#fff;}
  .btn-blue{background:var(--blue);color:#fff;}
  .btn-success{background:var(--success);color:#fff;}
  .btn-accent{background:var(--accent);color:#fff;}
  .btn-muted{background:#ddd;color:var(--text);}
  .btn-sm{padding:4px 10px;font-size:8pt;}

  .jorge-note{background:#e8f4fd;border:1px solid #a8d6f0;border-radius:5px;
    padding:8px 12px;font-size:8.5pt;color:#1a6fa1;margin-top:8px;}

  /* PAYMENT TRACKING */
  .pay-track-row{display:flex;align-items:center;gap:10px;flex-wrap:wrap;
    background:#fff;border:1px solid var(--border);border-radius:5px;padding:9px 12px;margin-bottom:8px;}
  .pay-track-lbl{flex:1;min-width:160px;}
  .pay-track-lbl strong{display:block;font-size:9.5pt;color:var(--primary);}
  .pay-track-lbl span{font-size:7.5pt;color:var(--muted);}
  .pay-track-row input[type="date"]{border:1px solid var(--border);border-radius:4px;
    padding:5px 8px;font-family:'Lato',sans-serif;font-size:9pt;color:var(--text);background:#fff;outline:none;}
  .pay-check{color:var(--success);font-size:16pt;line-height:1;}

  /* STATUS ACTION BAR */
  .action-bar{background:#f8faf9;border-top:1px solid var(--border);padding:12px 18px;
    display:flex;align-items:center;gap:10px;flex-wrap:wrap;}
  .action-bar .notes-wrap{flex:1;min-width:200px;}
  .action-bar textarea{width:100%;border:1px solid var(--border);border-radius:4px;
    padding:6px 9px;font-family:'Lato',sans-serif;font-size:9pt;color:var(--text);
    background:#fff;outline:none;resize:vertical;min-height:40px;}
  .action-bar textarea:focus{border-color:var(--primary);}
  .notes-lbl{font-size:7.5pt;font-weight:700;color:var(--primary);text-transform:uppercase;letter-spacing:.4px;margin-bottom:3px;}

  /* COMPLETED SECTION */
  .completed-section{background:#fff;border:1px solid var(--border);border-radius:8px;padding:14px 18px;margin-top:8px;}
  .completed-toggle{display:flex;justify-content:space-between;align-items:center;cursor:pointer;}
  .completed-toggle h3{font-family:'Playfair Display',serif;font-size:10pt;color:var(--muted);}
  .completed-toggle .toggle-icon{font-size:12pt;color:var(--muted);}
  .completed-body{margin-top:12px;display:none;}
  .completed-body.open{display:block;}
  table.paid-tbl{width:100%;border-collapse:collapse;font-size:8.5pt;}
  table.paid-tbl thead th{background:var(--light);color:var(--muted);padding:6px 8px;text-align:left;
    font-size:7.5pt;font-weight:700;letter-spacing:.3px;border-bottom:2px solid var(--border);}
  table.paid-tbl tbody td{padding:7px 8px;border-bottom:1px solid #eee;color:var(--text);}
  table.paid-tbl tbody tr:hover td{background:#f9faf9;}

  /* EMPTY STATE */
  .empty-state{text-align:center;padding:60px 20px;color:var(--muted);}
  .empty-state h2{font-family:'Playfair Display',serif;font-size:16pt;color:var(--primary);margin-bottom:10px;}
  .empty-state p{font-size:10pt;margin-bottom:16px;line-height:1.7;}
  .empty-state a{color:var(--accent);font-weight:700;}

  /* MODAL */
  .modal-bg{position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:1000;display:flex;align-items:center;justify-content:center;padding:20px;}
  .modal-bg.hidden{display:none;}
  .modal{background:#fff;border-radius:10px;padding:22px 24px;max-width:500px;width:100%;max-height:80vh;overflow-y:auto;position:relative;}
  .modal h3{font-family:'Playfair Display',serif;font-size:12pt;color:var(--primary);margin-bottom:4px;}
  .modal .modal-sub{font-size:8pt;color:var(--muted);margin-bottom:14px;}
  .modal-close{position:absolute;top:12px;right:14px;background:none;border:none;font-size:16pt;cursor:pointer;color:var(--muted);line-height:1;}
  .modal-close:hover{color:var(--danger);}
  .chk-progress{font-size:8.5pt;color:var(--muted);margin-bottom:10px;}
  .chk-progress strong{color:var(--primary);}
  .chk-item{display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid #eee;font-size:9pt;}
  .chk-item:last-child{border-bottom:none;}
  .chk-item input[type="checkbox"]{width:15px;height:15px;accent-color:var(--success);cursor:pointer;flex-shrink:0;}
  .chk-item.done{color:var(--muted);text-decoration:line-through;}

  /* TOAST */
  #toast{position:fixed;bottom:20px;right:20px;background:var(--primary);color:#fff;
    padding:10px 20px;border-radius:6px;font-size:9pt;font-weight:700;
    z-index:9999;opacity:0;transition:opacity .3s;pointer-events:none;}
  #toast.show{opacity:1;}

  @media(max-width:900px){
    .dash-cards{grid-template-columns:repeat(2,1fr);}
    .pills{gap:5px;}
  }
  @media(max-width:600px){
    .dash-cards{grid-template-columns:1fr 1fr;}
    .card-info-row{gap:10px;}
  }
</style>
<script src="js/auth.js"></script>
<script>NFRAuth.requireAuth('jen');</script>
</head>
<body>
<div class="app">

  <!-- TOP BAR -->
  <div class="top-bar">
    <div class="brand">
      Natures Friend &amp; Resources
      <span>Operations Portal &mdash; Jen</span>
    </div>
    <div class="pills" id="summary-pills">
      <div class="pill"><strong id="pill-active">0</strong><span>Active Jobs</span></div>
      <div class="pill"><strong id="pill-materials">0</strong><span>Materials Pending</span></div>
      <div class="pill"><strong id="pill-jorge">0</strong><span>Jorge Scheduled</span></div>
      <div class="pill"><strong id="pill-payments">0</strong><span>Payments Due</span></div>
    </div>
  </div>

  <!-- DASHBOARD CARDS -->
  <div class="dash-cards">
    <div class="dash-card new"><div class="dc-num" id="dc-new">0</div><div class="dc-lbl">New POs</div></div>
    <div class="dash-card materials"><div class="dc-num" id="dc-materials">0</div><div class="dc-lbl">Materials Ordering</div></div>
    <div class="dash-card inprog"><div class="dc-num" id="dc-inprog">0</div><div class="dc-lbl">In Progress</div></div>
    <div class="dash-card awaiting"><div class="dc-num" id="dc-awaiting">0</div><div class="dc-lbl">Awaiting Payment</div></div>
  </div>

  <!-- PO LIST -->
  <div id="po-list"></div>

  <!-- COMPLETED SECTION -->
  <div class="completed-section" id="completed-section" style="display:none;">
    <div class="completed-toggle" onclick="toggleCompleted()">
      <h3>Completed &amp; Paid Jobs (<span id="paid-count">0</span>)</h3>
      <span class="toggle-icon" id="toggle-icon">&#9660;</span>
    </div>
    <div class="completed-body" id="completed-body">
      <table class="paid-tbl">
        <thead><tr>
          <th>PO #</th><th>Client</th><th>Project Type</th><th>Total</th><th>Completed</th><th>Action</th>
        </tr></thead>
        <tbody id="paid-tbody"></tbody>
      </table>
    </div>
  </div>

</div><!-- /app -->

<!-- CHECKLIST MODAL -->
<div class="modal-bg hidden" id="chk-modal">
  <div class="modal">
    <button class="modal-close" onclick="closeModal()">&times;</button>
    <h3 id="modal-title">Checklist</h3>
    <div class="modal-sub" id="modal-sub"></div>
    <div class="chk-progress" id="chk-progress"></div>
    <div id="modal-chk-list"></div>
  </div>
</div>

<!-- VIEW MODAL (paid PO detail) -->
<div class="modal-bg hidden" id="view-modal">
  <div class="modal" style="max-width:600px;">
    <button class="modal-close" onclick="closeViewModal()">&times;</button>
    <h3 id="view-modal-title">PO Detail</h3>
    <div id="view-modal-body"></div>
  </div>
</div>

<!-- TOAST -->
<div id="toast"></div>

<script>
// ── HELPERS ──────────────────────────────────────────────────────────────────

const $ = id => document.getElementById(id);
const fmt = n => '$' + (parseFloat(n)||0).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
const fmtDate = s => s ? new Date(s+'T00:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}) : '';

function toast(msg){
  const t=$('toast'); t.textContent=msg; t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2200);
}

function loadPOs(){
  try{ return JSON.parse(localStorage.getItem('nfr_pos')||'[]'); }catch(e){ return []; }
}
function savePOs(pos){
  localStorage.setItem('nfr_pos', JSON.stringify(pos));
}
function getPO(id){ return loadPOs().find(p=>p.id===id); }
function updatePO(id, fn){
  const pos=loadPOs();
  const idx=pos.findIndex(p=>p.id===id);
  if(idx===-1) return;
  fn(pos[idx]);
  savePOs(pos);
}

const STATUS_ORDER=['new','materials_ordered','jorge_scheduled','in_progress','punch_list','complete','invoiced','paid'];
const STATUS_LABELS={
  new:'New',materials_ordered:'Materials Ordering',jorge_scheduled:'Jorge Scheduled',
  in_progress:'In Progress',punch_list:'Punch List',complete:'Complete',invoiced:'Invoiced',paid:'Paid'
};

// ── RENDER ────────────────────────────────────────────────────────────────────

function render(){
  const all=loadPOs();

  // Pills + dashboard counts
  const active = all.filter(p=>!['paid','cancelled'].includes(p.status));
  const matPending = all.filter(p=>{
    if(['paid','cancelled','complete','invoiced'].includes(p.status)) return false;
    return (p.scope_items||[]).some(s=>!s.materials_ordered);
  });
  const jorgeCount = all.filter(p=>p.jorge_scheduled_for&&!['paid','cancelled'].includes(p.status)).length;
  const payDue = all.filter(p=>{
    if(['paid','cancelled'].includes(p.status)) return false;
    const needProgress = (p.progress_payment_due||0)>0 && !p.progress_payment_paid_at;
    const needFinal = (p.final_payment_due||0)>0 && !p.final_payment_paid_at;
    return needProgress || needFinal;
  });

  $('pill-active').textContent = active.length;
  $('pill-materials').textContent = matPending.length;
  $('pill-jorge').textContent = jorgeCount;
  $('pill-payments').textContent = payDue.length;

  $('dc-new').textContent = all.filter(p=>p.status==='new').length;
  $('dc-materials').textContent = all.filter(p=>p.status==='materials_ordered').length;
  $('dc-inprog').textContent = all.filter(p=>['in_progress','jorge_scheduled'].includes(p.status)).length;
  $('dc-awaiting').textContent = all.filter(p=>['complete','invoiced'].includes(p.status)).length;

  // Sort active
  const activeSorted = active.slice().sort((a,b)=>{
    const ai=STATUS_ORDER.indexOf(a.status), bi=STATUS_ORDER.indexOf(b.status);
    if(ai!==bi) return ai-bi;
    const da=a.project?.start_date||'9999', db=b.project?.start_date||'9999';
    return da.localeCompare(db);
  });

  const listEl=$('po-list');
  if(activeSorted.length===0){
    listEl.innerHTML=`<div class="empty-state">
      <h2>No Active POs</h2>
      <p>POs are auto-generated from the Agreement Portal when a client signs and pays their deposit.</p>
      <p><a href="agreement-portal.html">Go to Agreement Portal &rarr;</a></p>
    </div>`;
  } else {
    listEl.innerHTML = activeSorted.map(po=>renderPOCard(po)).join('');
  }

  // Paid
  const paid=all.filter(p=>p.status==='paid');
  $('paid-count').textContent=paid.length;
  if(paid.length>0){
    $('completed-section').style.display='';
    const tbody=$('paid-tbody');
    tbody.innerHTML=paid.map(p=>`
      <tr>
        <td>${p.id}</td>
        <td>${p.project?.client_name||''}</td>
        <td>${p.project?.project_type||''}</td>
        <td>${fmt(p.grand_total)}</td>
        <td>${fmtDate(p.final_payment_paid_at||p.approved_at||'')}</td>
        <td><button class="btn btn-muted btn-sm" onclick="viewPaid('${p.id}')">View</button></td>
      </tr>
    `).join('');
  } else {
    $('completed-section').style.display='none';
  }
}

function renderPOCard(po){
  const proj = po.project||{};
  const deposit = po.deposit_amount||0;
  const grand = po.grand_total||0;
  const progress = po.progress_payment_due||(grand*0.40);
  const final = po.final_payment_due||(grand*0.20);
  const scope = po.scope_items||[];

  // payment display
  const depositLine = deposit>0
    ? `<div class="pay-item"><div class="pay-lbl">Deposit Received</div><div class="pay-amt" style="color:var(--success)">${fmtDate(po.approved_at)}</div></div>`
    : '';
  const progRcvd = po.progress_payment_paid_at
    ? `<div class="pay-rcvd">&#10003; Received ${fmtDate(po.progress_payment_paid_at)}</div>` : '';
  const finalRcvd = po.final_payment_paid_at
    ? `<div class="pay-rcvd">&#10003; Received ${fmtDate(po.final_payment_paid_at)}</div>` : '';

  // scope table rows
  const scopeRows = scope.map((item,i)=>{
    const subName = item.sub_contractor||'';
    let subBadge='';
    if(subName){
      if(item.sub_contractor_signed){
        subBadge=`<br><span class="sub-badge sub-signed">Signed &#10003;</span>`;
      } else {
        subBadge=`<br><span class="sub-badge sub-unsigned">&#9888; Get Buyout</span>`;
      }
    }
    const chkTotal=(item.checklist||[]).length;
    const chkDone=(item.checklist_done||[]).length;
    const chkLbl=chkTotal>0?`${chkDone}/${chkTotal}`:'&mdash;';
    const chkBtn=chkTotal>0
      ?`<button class="chk-btn" onclick="openChecklist('${po.id}',${item.id})">&#128203; ${chkLbl}</button>`
      :`<span style="color:var(--muted);font-size:7.5pt;">&mdash;</span>`;
    return `<tr>
      <td class="lt-num">${i+1}</td>
      <td>${item.category||''}</td>
      <td>${item.sub_category||''}</td>
      <td>${item.description||''}</td>
      <td style="max-width:160px;word-break:break-word;">${item.spec||''}</td>
      <td>${item.dimensions||''}</td>
      <td>${subName}${subBadge}</td>
      <td class="c"><input type="checkbox" class="mat-check" ${item.materials_ordered?'checked':''} onchange="toggleMatOrdered('${po.id}',${item.id},this.checked)"></td>
      <td class="c">${chkBtn}</td>
    </tr>`;
  }).join('');

  // Materials panel
  const matPanel=`<div class="sub-panel">
    <div class="sub-panel-title">&#128230; Materials &amp; Ordering</div>
    <div class="row2">
      <div class="f"><label>Materials Notes / Order Details</label>
        <textarea rows="2" placeholder="Supplier names, order numbers, delivery notes..." onchange="saveField('${po.id}','jen_notes',this.value)" oninput="autoSaveField('${po.id}','jen_notes',this.value)">${po.jen_notes||''}</textarea></div>
      <div class="f"><label>Materials Ordered Date</label>
        <input type="date" value="${po.materials_ordered_at||''}" onchange="saveField('${po.id}','materials_ordered_at',this.value)"></div>
    </div>
    <button class="btn btn-gold btn-sm" onclick="markAllMaterials('${po.id}')">&#10003; Mark All Materials Ordered</button>
  </div>`;

  // Jorge panel
  const jorgePanel=`<div class="sub-panel">
    <div class="sub-panel-title">&#128197; Jorge&#39;s Schedule</div>
    <div class="row2">
      <div class="f"><label>Schedule Jorge For</label>
        <input type="date" value="${po.jorge_scheduled_for||''}" onchange="saveJorge('${po.id}','jorge_scheduled_for',this.value)"></div>
      <div class="f"><label>Calendar Note</label>
        <input type="text" placeholder="Job description for calendar event..." value="${po.jorge_calendar_event_id||''}" onchange="saveField('${po.id}','jorge_calendar_event_id',this.value)"></div>
    </div>
    <button class="btn btn-blue btn-sm" onclick="lockJorge('${po.id}')">&#128274; Lock Jorge&#39;s Schedule</button>
    ${po.jorge_scheduled_for?`<div class="jorge-note">&#128197; Reminder: Add to Google Calendar &mdash; <strong>/jorge-calendar</strong> skill &nbsp;|&nbsp; Scheduled: <strong>${fmtDate(po.jorge_scheduled_for)}</strong></div>`:''}
  </div>`;

  // Payment tracking
  const payPanel=`<div class="sub-panel">
    <div class="sub-panel-title">&#128181; Payment Tracking</div>
    <div class="pay-track-row">
      <div class="pay-track-lbl">
        <strong>Progress Payment (40%) &mdash; ${fmt(progress)}</strong>
        <span>Due at midpoint of job</span>
      </div>
      ${po.progress_payment_paid_at
        ?`<span class="pay-check">&#10003;</span><span style="font-size:8.5pt;color:var(--success);">Received ${fmtDate(po.progress_payment_paid_at)}</span>`
        :`<input type="date" id="prog-date-${po.id}" value="">
         <button class="btn btn-success btn-sm" onclick="markPayment('${po.id}','progress')">Mark Received</button>`
      }
    </div>
    <div class="pay-track-row">
      <div class="pay-track-lbl">
        <strong>Final Payment (20%) &mdash; ${fmt(final)}</strong>
        <span>Due on completion</span>
      </div>
      ${po.final_payment_paid_at
        ?`<span class="pay-check">&#10003;</span><span style="font-size:8.5pt;color:var(--success);">Received ${fmtDate(po.final_payment_paid_at)}</span>`
        :`<input type="date" id="final-date-${po.id}" value="">
         <button class="btn btn-success btn-sm" onclick="markPayment('${po.id}','final')">Mark Received</button>`
      }
    </div>
  </div>`;

  // Status action button
  const actionBtn = getActionBtn(po);

  return `<div class="po-card status-${po.status}" id="card-${po.id}">
    <div class="po-card-header">
      <div class="card-hdr-top">
        <div class="card-ids">
          <span class="po-id">${po.id}</span>
          ${po.agreement_id?`<a class="agr-link" href="agreement-portal.html">${po.agreement_id}</a>`:''}
          <span class="status-badge sb-${po.status}">${STATUS_LABELS[po.status]||po.status}</span>
        </div>
      </div>
      <div class="card-info-row">
        <span><strong>${proj.client_name||'—'}</strong></span>
        <span>${[proj.client_addr,proj.client_city,proj.client_state,proj.client_zip].filter(Boolean).join(', ')||'No address'}</span>
        <span>Type: <strong>${proj.project_type||'—'}</strong></span>
        <span>Start: <strong>${fmtDate(proj.start_date)||'TBD'}</strong></span>
        <span>PM: <strong>${proj.proj_mgr||'Jose Martinez'}</strong></span>
      </div>
      <div class="card-payment-row">
        <div class="pay-item"><div class="pay-lbl">Grand Total</div><div class="pay-amt">${fmt(grand)}</div></div>
        <div class="pay-item"><div class="pay-lbl">40% Deposit</div><div class="pay-amt">${fmt(grand*0.40)}</div></div>
        <div class="pay-item"><div class="pay-lbl">40% Progress</div><div class="pay-amt">${fmt(progress)}</div></div>
        <div class="pay-item"><div class="pay-lbl">20% Final</div><div class="pay-amt">${fmt(final)}</div></div>
        ${depositLine}
      </div>
    </div>

    <div class="card-body">
      ${po.jose_notes?`<div style="background:#fff8f0;border:1px solid #f0d5b0;border-radius:5px;padding:8px 12px;font-size:8.5pt;margin-bottom:12px;"><strong style="color:var(--warn);">&#128204; Jose&#39;s Note:</strong> ${po.jose_notes}</div>`:''}

      <div class="section">
        <div class="section-title">Scope of Work</div>
        <div class="tbl-wrap">
          <table class="sc">
            <thead><tr>
              <th style="width:28px;">#</th>
              <th>Category</th>
              <th>Sub-Category</th>
              <th>Description</th>
              <th>Spec</th>
              <th>Dimensions</th>
              <th>Sub-Contractor</th>
              <th class="c">Materials &#10003;</th>
              <th class="c">Checklist</th>
            </tr></thead>
            <tbody>${scopeRows||'<tr><td colspan="9" style="text-align:center;color:var(--muted);padding:12px;">No scope items</td></tr>'}</tbody>
          </table>
        </div>
      </div>

      ${matPanel}
      ${jorgePanel}
      ${payPanel}
    </div>

    <div class="action-bar">
      <div class="notes-wrap">
        <div class="notes-lbl">Notes for Jose</div>
        <textarea placeholder="Add notes for Jose..." onchange="saveField('${po.id}','jen_notes',this.value)" oninput="autoSaveField('${po.id}','jen_notes',this.value)">${po.jen_notes||''}</textarea>
      </div>
      ${actionBtn}
    </div>
  </div>`;
}

function getActionBtn(po){
  const s=po.status;
  const btns={
    new:`<button class="btn btn-warn" onclick="advanceStatus('${po.id}','materials_ordered','Start Material Order?')">&#128230; Start Material Order</button>`,
    materials_ordered:`<button class="btn btn-gold" onclick="advanceStatus('${po.id}','jorge_scheduled','Confirm Jorge is scheduled?')">&#128197; Confirm Jorge Scheduled</button>`,
    jorge_scheduled:`<button class="btn btn-blue" onclick="advanceStatus('${po.id}','in_progress','Mark work as started?')">&#9881; Mark Work Started</button>`,
    in_progress:`<button class="btn btn-primary" onclick="advanceStatus('${po.id}','punch_list','Submit punch list and move to final walkthrough?')">&#128203; Submit Punch List</button>`,
    punch_list:`<button class="btn btn-success" onclick="advanceStatus('${po.id}','complete','Mark job complete?')">&#10003; Mark Complete</button>`,
    complete:`<button class="btn btn-accent" onclick="advanceStatus('${po.id}','invoiced','Mark as invoiced? (No email is sent)')">&#128196; Send Invoice</button>`,
    invoiced:`<button class="btn btn-success" onclick="advanceStatus('${po.id}','paid','Mark job PAID and close out?')">&#10003; Mark Paid &mdash; Job Done</button>`,
  };
  return btns[s]||'';
}

// ── ACTIONS ───────────────────────────────────────────────────────────────────

function toggleMatOrdered(poId, itemId, val){
  updatePO(poId, po=>{
    const item=(po.scope_items||[]).find(s=>s.id===itemId);
    if(item) item.materials_ordered=val;
  });
  toast(val?'Material marked ordered':'Material unmarked');
  render();
}

function saveField(poId, field, val){
  updatePO(poId, po=>{ po[field]=val; });
}

// Debounce map for auto-save
const _debounce={};
function autoSaveField(poId, field, val){
  const key=poId+field;
  clearTimeout(_debounce[key]);
  _debounce[key]=setTimeout(()=>{ updatePO(poId,po=>{po[field]=val;}); },600);
}

function saveJorge(poId, field, val){
  updatePO(poId, po=>{ po[field]=val; });
}

function markAllMaterials(poId){
  if(!confirm('Mark ALL scope items as materials ordered?')) return;
  updatePO(poId, po=>{
    (po.scope_items||[]).forEach(s=>s.materials_ordered=true);
    if(!po.materials_ordered_at) po.materials_ordered_at=new Date().toISOString().split('T')[0];
    if(po.status==='new') po.status='materials_ordered';
  });
  toast('All materials marked ordered');
  render();
}

function lockJorge(poId){
  const po=getPO(poId);
  if(!po) return;
  if(!po.jorge_scheduled_for){ toast('Set a date first'); return; }
  if(!confirm(`Lock Jorge for ${fmtDate(po.jorge_scheduled_for)}?`)) return;
  updatePO(poId, p=>{
    if(['new','materials_ordered'].includes(p.status)) p.status='jorge_scheduled';
  });
  toast('Jorge scheduled — remember to add to Google Calendar');
  render();
}

function markPayment(poId, type){
  const dateEl=$(type==='progress'?`prog-date-${poId}`:`final-date-${poId}`);
  const dateVal = dateEl?dateEl.value:'';
  const dateToSave = dateVal || new Date().toISOString().split('T')[0];
  if(!confirm(`Mark ${type} payment received on ${fmtDate(dateToSave)}?`)) return;
  updatePO(poId, po=>{
    if(type==='progress') po.progress_payment_paid_at=dateToSave;
    else po.final_payment_paid_at=dateToSave;
  });
  toast('Payment recorded');
  render();
}

function advanceStatus(poId, newStatus, confirmMsg){
  if(!confirm(confirmMsg)) return;
  updatePO(poId, po=>{ po.status=newStatus; });
  toast(`Status updated: ${STATUS_LABELS[newStatus]}`);
  render();
}

// ── CHECKLIST MODAL ───────────────────────────────────────────────────────────

let _chkPOId=null, _chkItemId=null;

function openChecklist(poId, itemId){
  const po=getPO(poId);
  if(!po) return;
  const item=(po.scope_items||[]).find(s=>s.id===itemId);
  if(!item) return;
  _chkPOId=poId; _chkItemId=itemId;
  const checklist=item.checklist||[];
  const done=item.checklist_done||[];
  $('modal-title').textContent=`Checklist: ${item.description||'Item '+itemId}`;
  $('modal-sub').textContent=`${item.category||''} ${item.sub_category?'/ '+item.sub_category:''}`;
  $('chk-progress').innerHTML=`<strong>${done.length}/${checklist.length}</strong> tasks completed`;
  const listEl=$('modal-chk-list');
  if(checklist.length===0){
    listEl.innerHTML='<p style="color:var(--muted);font-size:9pt;text-align:center;padding:10px 0;">No checklist items defined.</p>';
  } else {
    listEl.innerHTML=checklist.map((c,i)=>{
      const isDone=done.includes(c)||(typeof done[i]==='string'?done.includes(c):done.indexOf(c)!==-1);
      return `<div class="chk-item ${isDone?'done':''}" id="chk-row-${i}">
        <input type="checkbox" ${isDone?'checked':''} onchange="toggleChk(${i},this.checked,'${encodeURIComponent(c)}')">
        <span>${c}</span>
      </div>`;
    }).join('');
  }
  $('chk-modal').classList.remove('hidden');
}

function toggleChk(idx, checked, encodedText){
  const text=decodeURIComponent(encodedText);
  updatePO(_chkPOId, po=>{
    const item=(po.scope_items||[]).find(s=>s.id===_chkItemId);
    if(!item) return;
    if(!item.checklist_done) item.checklist_done=[];
    if(checked){ if(!item.checklist_done.includes(text)) item.checklist_done.push(text); }
    else { item.checklist_done=item.checklist_done.filter(x=>x!==text); }
  });
  // Update modal progress
  const po=getPO(_chkPOId);
  const item=po?(po.scope_items||[]).find(s=>s.id===_chkItemId):null;
  if(item){
    const total=(item.checklist||[]).length;
    const done=(item.checklist_done||[]).length;
    $('chk-progress').innerHTML=`<strong>${done}/${total}</strong> tasks completed`;
    const row=$(`chk-row-${idx}`);
    if(row){ if(checked) row.classList.add('done'); else row.classList.remove('done'); }
  }
}

function closeModal(){
  $('chk-modal').classList.add('hidden');
  _chkPOId=null; _chkItemId=null;
  render();
}

// ── VIEW PAID MODAL ───────────────────────────────────────────────────────────

function viewPaid(poId){
  const po=getPO(poId);
  if(!po) return;
  const proj=po.project||{};
  $('view-modal-title').textContent=po.id+' — '+STATUS_LABELS[po.status];
  $('view-modal-body').innerHTML=`
    <div style="font-size:9pt;line-height:1.9;color:var(--text);">
      <div><strong>Client:</strong> ${proj.client_name||'—'}</div>
      <div><strong>Address:</strong> ${[proj.client_addr,proj.client_city,proj.client_state].filter(Boolean).join(', ')||'—'}</div>
      <div><strong>Project Type:</strong> ${proj.project_type||'—'}</div>
      <div><strong>Start Date:</strong> ${fmtDate(proj.start_date)||'—'}</div>
      <div><strong>Total:</strong> ${fmt(po.grand_total)}</div>
      <div><strong>Progress Paid:</strong> ${po.progress_payment_paid_at?fmtDate(po.progress_payment_paid_at):'—'}</div>
      <div><strong>Final Paid:</strong> ${po.final_payment_paid_at?fmtDate(po.final_payment_paid_at):'—'}</div>
      ${po.jen_notes?`<div style="margin-top:8px;"><strong>Notes:</strong> ${po.jen_notes}</div>`:''}
    </div>
  `;
  $('view-modal').classList.remove('hidden');
}

function closeViewModal(){
  $('view-modal').classList.add('hidden');
}

// ── COMPLETED TOGGLE ──────────────────────────────────────────────────────────

function toggleCompleted(){
  const body=$('completed-body');
  const icon=$('toggle-icon');
  if(body.classList.contains('open')){
    body.classList.remove('open');
    icon.innerHTML='&#9660;';
  } else {
    body.classList.add('open');
    icon.innerHTML='&#9650;';
  }
}

// ── CLOSE MODAL ON BG CLICK ───────────────────────────────────────────────────

$('chk-modal').addEventListener('click',e=>{ if(e.target===$('chk-modal')) closeModal(); });
$('view-modal').addEventListener('click',e=>{ if(e.target===$('view-modal')) closeViewModal(); });

// ── INIT ──────────────────────────────────────────────────────────────────────

render();

// Re-render on storage changes from other tabs
window.addEventListener('storage', e=>{ if(e.key==='nfr_pos') render(); });
</script>
</body>
</html>
```

---

## `contract.html` <a id="contract-html"></a>

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>NFR Contract</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Lato:wght@300;400;700&display=swap');
  :root { --primary:#3A6B5F; --accent:#E07B54; --border:#A8CEBF; --text:#2D2D2D; --warn:#92400E; --success:#065F46; }
  *{margin:0;padding:0;box-sizing:border-box;}
  body{font-family:'Lato',sans-serif;font-size:10pt;color:var(--text);background:#f0f4f3;}

  /* PRINT BAR */
  .print-bar{background:var(--primary);color:#fff;padding:10px 24px;
    display:flex;justify-content:space-between;align-items:center;gap:12px;}
  .print-bar span{font-size:9pt;opacity:.85;}
  .btn-print{background:#fff;color:var(--primary);border:none;border-radius:4px;
    padding:8px 20px;font-family:'Lato',sans-serif;font-size:9.5pt;font-weight:700;cursor:pointer;white-space:nowrap;}
  .btn-print:hover{background:#e8f5f0;}
  .btn-back{background:rgba(255,255,255,.15);color:#fff;border:1px solid rgba(255,255,255,.4);border-radius:4px;
    padding:8px 16px;font-family:'Lato',sans-serif;font-size:9pt;cursor:pointer;}
  .btn-back:hover{background:rgba(255,255,255,.25);}

  /* CONTRACT BODY */
  .contract{max-width:820px;margin:24px auto 40px;background:#fff;padding:52px 62px;
    box-shadow:0 2px 20px rgba(0,0,0,.1);border-radius:4px;}

  /* HEADER */
  .co-header{text-align:center;border-bottom:3px solid var(--primary);padding-bottom:22px;margin-bottom:26px;}
  .co-name{font-family:'Playfair Display',serif;font-size:22pt;color:var(--primary);letter-spacing:.5px;}
  .co-sub{font-size:9pt;color:#777;margin-top:5px;letter-spacing:1px;text-transform:uppercase;}
  .co-contact{font-size:8.5pt;color:#aaa;margin-top:5px;}
  .contract-title{font-family:'Playfair Display',serif;font-size:16pt;color:var(--primary);
    text-align:center;margin:22px 0 20px;}

  /* INFO GRID */
  .info-grid{display:grid;grid-template-columns:1fr 1fr;border:1px solid #ddd;border-radius:4px;
    overflow:hidden;margin-bottom:26px;}
  .info-cell{padding:10px 14px;border-bottom:1px solid #eee;}
  .info-cell:nth-child(odd){border-right:1px solid #eee;background:#fafafa;}
  .info-cell.full{grid-column:1/-1;}
  .info-cell label{font-size:7pt;font-weight:700;color:#999;text-transform:uppercase;
    letter-spacing:.4px;display:block;margin-bottom:3px;}
  .info-cell .val{font-size:10pt;font-weight:700;}

  /* SECTIONS */
  .section{margin-bottom:26px;}
  .section-title{font-family:'Playfair Display',serif;font-size:13pt;color:var(--primary);
    border-bottom:2px solid var(--border);padding-bottom:8px;margin-bottom:14px;}

  /* SCOPE */
  ol.scope-list{margin:0;padding-left:20px;}
  ol.scope-list li{margin-bottom:11px;line-height:1.75;font-size:10pt;}
  ol.scope-list li .scope-cat{font-size:7.5pt;font-weight:700;color:var(--primary);
    text-transform:uppercase;letter-spacing:.4px;display:block;margin-bottom:2px;}

  /* PRICING */
  .pricing-table{width:100%;border-collapse:collapse;margin-top:8px;}
  .pricing-table td{padding:10px 14px;border-bottom:1px solid #eee;font-size:9.5pt;}
  .pricing-table td:last-child{text-align:right;font-weight:700;}
  .pricing-table .grand-row td{border-top:3px solid var(--primary);font-size:14pt;
    font-weight:700;color:var(--primary);padding-top:14px;}
  .pricing-table .tax-row td{color:#888;font-size:8.5pt;}

  /* PAYMENT */
  .pay-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:12px;}
  .pay-card{border:2px solid var(--border);border-radius:6px;padding:14px;text-align:center;}
  .pay-card .pct{font-size:20pt;font-weight:700;color:var(--primary);line-height:1;}
  .pay-card .amt{font-size:13pt;font-weight:700;color:var(--accent);margin-top:4px;}
  .pay-card .lbl{font-size:8pt;color:#777;margin-top:6px;line-height:1.5;}

  /* TERMS */
  ul.terms-list{list-style:none;padding:0;}
  ul.terms-list li{padding:7px 0 7px 18px;border-bottom:1px solid #f0f0f0;
    font-size:9.5pt;line-height:1.65;position:relative;}
  ul.terms-list li:last-child{border-bottom:none;}
  ul.terms-list li::before{content:'•';position:absolute;left:0;color:var(--primary);font-weight:700;}

  /* SIGNATURES */
  .sig-grid{display:grid;grid-template-columns:1fr 1fr;gap:44px;margin-top:12px;}
  .sig-block .sig-name{font-size:11pt;font-weight:700;color:var(--primary);}
  .sig-block .sig-role{font-size:8.5pt;color:#888;margin-top:3px;}
  .sig-line{border-bottom:1.5px solid #bbb;height:44px;margin:18px 0 5px;}
  .sig-block .date-label{font-size:8pt;color:#aaa;}

  /* STAMP */
  .nfr-stamp{border:2px solid var(--border);border-radius:6px;padding:14px 18px;
    text-align:center;margin-top:28px;}
  .stamp-name{font-family:'Playfair Display',serif;color:var(--primary);font-size:11pt;}
  .stamp-sub{font-size:8pt;color:#aaa;margin-top:4px;}
  .stamp-ref{font-size:7.5pt;color:#ccc;margin-top:6px;}

  /* ERROR */
  .error-box{background:#c0392b;color:#fff;padding:24px 28px;border-radius:8px;
    text-align:center;font-size:11pt;max-width:600px;margin:60px auto;line-height:1.7;}
  .error-box.warn{background:#856404;}

  /* TERMS */
  .terms-block{display:flex;gap:12px;margin-bottom:14px;font-size:9pt;line-height:1.7;color:#444;}
  .terms-num{min-width:22px;font-weight:700;color:var(--primary);padding-top:1px;}
  .terms-highlight{background:#FFFBEB;border:1px solid #FDE68A;border-radius:6px;padding:12px 14px;margin-bottom:14px;}
  .terms-highlight .terms-num{color:#92400E;}
  .terms-highlight{color:#78350F;}

  /* E-SIGN */
  .esign-box{background:#F0F7FF;border:2px solid #3B82F6;border-radius:10px;padding:28px 32px;margin:30px 0 20px;}
  .esign-title{font-family:'Playfair Display',serif;font-size:14pt;color:#1E3A5F;margin-bottom:10px;}
  .esign-intro{font-size:9pt;color:#374151;line-height:1.7;margin-bottom:20px;}
  .esign-checks{display:flex;flex-direction:column;gap:14px;margin-bottom:22px;}
  .esign-check-row{display:flex;gap:12px;align-items:flex-start;font-size:9pt;color:#1F2937;line-height:1.6;cursor:pointer;}
  .esign-check-row input[type=checkbox]{min-width:18px;height:18px;margin-top:2px;accent-color:#1D4ED8;cursor:pointer;}
  .esign-name-row{display:grid;grid-template-columns:1fr 180px;gap:16px;margin-bottom:16px;}
  .esign-field label{display:block;font-size:8pt;font-weight:700;color:#374151;text-transform:uppercase;letter-spacing:.3px;margin-bottom:5px;}
  .esign-field input{width:100%;border:1.5px solid #93C5FD;border-radius:6px;padding:10px 12px;font-family:'Lato',sans-serif;font-size:11pt;outline:none;transition:border-color .15s;}
  .esign-field input:focus{border-color:#2563EB;}
  .esign-btn{width:100%;padding:14px;background:#1D4ED8;color:#fff;border:none;border-radius:7px;font-family:'Lato',sans-serif;font-size:13pt;font-weight:700;cursor:pointer;transition:opacity .15s;margin-bottom:12px;}
  .esign-btn:disabled{background:#93C5FD;cursor:not-allowed;}
  .esign-btn:not(:disabled):hover{opacity:.88;}
  .esign-legal-note{font-size:8pt;color:#6B7280;line-height:1.6;font-style:italic;text-align:center;}
  .esign-confirmed{background:#D1FAE5;border:2px solid #6EE7B7;border-radius:10px;padding:20px 24px;margin:20px 0;display:flex;align-items:center;gap:16px;}
  .esign-confirmed-icon{font-size:28px;}
  .esign-confirmed-text{font-size:10pt;color:#065F46;line-height:1.6;}

  /* SCOPE GROUPS */
  .scope-group{margin-bottom:18px;}
  .scope-group-title{font-family:'Playfair Display',serif;font-size:10.5pt;color:var(--primary);
    border-left:3px solid var(--border);padding:5px 0 5px 12px;margin-bottom:8px;font-weight:600;}
  .scope-group ol{margin:0 0 0 22px;padding:0;}
  .scope-group ol li{margin-bottom:7px;line-height:1.7;font-size:9.5pt;}
  .scope-clause{font-size:8pt;color:#6B7280;line-height:1.65;font-style:italic;
    background:#F9FAFB;border-left:2px solid #D1D5DB;padding:7px 10px;margin-top:6px;border-radius:0 4px 4px 0;}

  /* NETLIFY FORM THANK-YOU */
  .esign-thankyou{background:#D1FAE5;border:2px solid #6EE7B7;border-radius:10px;
    padding:28px 32px;margin:30px 0 20px;text-align:center;}
  .esign-thankyou h2{font-family:'Playfair Display',serif;color:#065F46;font-size:16pt;margin-bottom:10px;}
  .esign-thankyou p{font-size:10pt;color:#065F46;line-height:1.7;}

  @media print {
    body{background:#fff;}
    .print-bar{display:none!important;}
    .esign-box{display:none!important;}
    .contract{margin:0;padding:36px 44px;box-shadow:none;max-width:100%;}
    .info-cell:nth-child(odd){background:#f8f8f8 !important;-webkit-print-color-adjust:exact;}
    .pay-card{border-color:#ccc;}
    .terms-highlight{background:#FFFDE7 !important;-webkit-print-color-adjust:exact;}
    .esign-confirmed{background:#F0FFF4 !important;-webkit-print-color-adjust:exact;}
  }
</style>
<script src="js/auth.js"></script>
<script>NFRAuth.requireAuth('contract');</script>
</head>
<body>

<div class="print-bar" id="print-bar">
  <div style="display:flex;gap:10px;align-items:center;">
    <button class="btn-back" onclick="history.back()">← Back</button>
    <span id="bar-label">Loading contract…</span>
  </div>
  <button class="btn-print" onclick="window.print()">Print / Save as PDF</button>
</div>

<!-- Netlify form (hidden — submitted via fetch in shared/remote mode) -->
<form id="netlify-sig-form" name="nfr-esign" method="POST" data-netlify="true" netlify-honeypot="bot-field" style="display:none">
  <input name="form-name" value="nfr-esign">
  <input name="bot-field">
  <input name="agreement_id"        id="nf-agr-id">
  <input name="client_name_signed"  id="nf-client-name">
  <input name="signed_at"           id="nf-signed-at">
  <input name="contract_total"      id="nf-total">
  <input name="project_type"        id="nf-proj-type">
  <input name="client_address"      id="nf-address">
  <input name="user_agent"          id="nf-ua">
</form>

<div id="contract-root"></div>

<script>
function qp(n) { return new URLSearchParams(window.location.search).get(n); }
function loadPOs() { try { return JSON.parse(localStorage.getItem('nfr_pos')||'[]'); } catch(e){ return []; } }
function fmt(n){ return '$'+(n||0).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2}); }
function h(s){ return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function fmtDate(iso){
  if(!iso) return '—';
  // handle date-only strings like "2026-04-01" safely
  const d = iso.length <= 10 ? new Date(iso+'T12:00:00') : new Date(iso);
  return d.toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'});
}

function scopeLine(item) {
  let line = item.description || '(No description)';
  if (item.spec)       line += ` — ${item.spec}`;
  if (item.dimensions) line += ` (${item.dimensions})`;
  if (item.notes)      line += `. Note: ${item.notes}`;
  return line;
}

// ── Per-trade contract clauses ────────────────────────────────────────────────
const TRADE_CLAUSES = {
  'Demo & Site Prep': 'All demolition debris removed within 48 hours. Work areas inaccessible during active demo. Pre-existing conditions discovered after demo require a written change order before remediation.',
  'Structural': 'All structural modifications performed per applicable code. Permits and engineering review may be required and are billed at cost. Additional structural deficiencies found during work require a change order.',
  'Rough Electrical': 'All rough electrical work performed by or under supervision of a licensed electrician. Permits pulled where required. Electrical panel must be unobstructed on start date.',
  'Finish Electrical': 'All outlet covers, switch plates, light fixtures, and GFCI outlets installed per approved scope. Client approves any fixture substitutions in writing before installation.',
  'Rough Plumbing': 'All rough plumbing performed by a licensed plumber. Water shutoff confirmed before work begins. Pressure-tested before walls are closed. Gas line work requires licensed plumber to pull permit.',
  'Fixtures & Plumbing Finish': 'Client confirms all fixture selections in writing before ordering. Owner-supplied fixtures installed at owner\'s risk. All connections leak-tested 24 hours after installation.',
  'Waterproofing': 'Waterproofing applied per manufacturer spec. NFR warranty covers installation workmanship only — does not cover external water intrusion, drainage issues, or foundation failure. Flood test performed before tile installation.',
  'Drywall': 'Drywall installed, taped, and finished to specified level. Level 5 finish requires primer coat before application.',
  'Tile Work': 'Client approves tile layout, grout color, and pattern in writing before installation begins. Changes after installation commences are a change order. Grout sealed 72 hours after installation.',
  'Flooring': 'Client approves flooring material, color, and run direction before installation. Flooring acclimated per manufacturer requirements. Existing subfloor defects discovered during installation require a change order.',
  'Cabinets': 'Client reviews and approves cabinet layout drawing before order is placed. Cancellation or changes after order placement are subject to restocking fees passed to client.',
  'Countertops': 'Template/measurement appointment required after cabinet installation. Countertop lead time is 10–14 business days after template. Client approves stone slab selection before fabrication.',
  'Shower / Tub': 'Shower floor sloped minimum ¼" per foot toward drain. Shower pan flood-tested for 24 hours before tile installation.',
  'Appliances': 'Client confirms appliance dimensions match rough-in locations before installation. NFR not responsible for manufacturer defects. Anti-tip brackets installed on all freestanding ranges.',
  'Paint & Finish': 'Client approves color samples on actual wall surface in writing before full application. Touch-up coat included. Full repaint after application begins due to color change is a change order.',
  'Trim & Millwork': 'All inside corners coped, not mitered. Nail holes and caulk filled before paint.',
  'Bathroom Accessories': 'Accessories installed on blocking or rated anchors. Standard towel bar height 48" AFF unless otherwise specified in writing.',
  'Sub-Contractors': 'All sub-contractors carry their own general liability insurance and applicable state licensing. Sub-contractor scope buyouts signed before work commences.',
  'Permits & Inspections': 'All permits obtained before permitted work begins. Permit fees not listed above billed at cost. Work shall not be covered until all required rough-in inspections are passed.',
  'Acoustic / Drop Ceiling Tile': 'All existing tile removed and disposed. New grid installed level and square. Accessibility panels provided at all mechanical/junction box locations per code.'
};

document.addEventListener('DOMContentLoaded', () => {
  // Support ?shared= (remote client link), ?agr= (internal), or ?po= (legacy)
  const sharedId = qp('shared');
  const snapParam = qp('snap');
  const agrId = qp('agr');
  const poId  = qp('po');
  const root  = document.getElementById('contract-root');

  // ── Shared / remote mode ──
  if (sharedId && snapParam) {
    let record = null;
    try {
      record = JSON.parse(decodeURIComponent(escape(atob(decodeURIComponent(snapParam)))));
    } catch(e) {
      root.innerHTML = '<div class="error-box">Invalid or corrupted contract link. Please ask Jose to re-send the link.</div>';
      return;
    }
    renderContract(record, sharedId, 'agr', true, root);
    return;
  }

  if (!agrId && !poId) {
    root.innerHTML = '<div class="error-box">No ID in URL.<br><small>Use contract.html?agr=AGR-2026-1001 or contract.html?po=PO-2026-1001</small></div>';
    return;
  }

  let record = null;
  let recordId = '';

  if (agrId) {
    const agrs = JSON.parse(localStorage.getItem('nfr_agreements') || '[]');
    record = agrs.find(a => a.id === agrId);
    recordId = agrId;
    if (!record) {
      root.innerHTML = `<div class="error-box">Agreement <strong>${h(agrId)}</strong> not found in this browser's storage.</div>`;
      return;
    }
    if (!['jose_approved','sent_to_client','signed','deposit_paid'].includes(record.status)) {
      root.innerHTML = `<div class="error-box warn">Agreement <strong>${h(agrId)}</strong> has not been approved yet.<br><small>Status: ${h(record.status)}</small></div>`;
      return;
    }
  } else {
    const pos = loadPOs();
    record = pos.find(p => p.id === poId);
    recordId = poId;
    if (!record) {
      root.innerHTML = `<div class="error-box">PO <strong>${h(poId)}</strong> not found in this browser's storage.<br><small>Open this page in the same Chrome/Edge window where the PO was created.</small></div>`;
      return;
    }
    if (record.status !== 'approved') {
      root.innerHTML = `<div class="error-box warn">PO <strong>${h(poId)}</strong> has not been approved yet.<br><small>Status: ${h(record.status)}</small></div>`;
      return;
    }
  }

  renderContract(record, recordId, agrId ? 'agr' : 'po', false, root);

});

// ── Shared-mode flag (set by renderContract) ──────────────────────────────────
let _isSharedMode = false;

// ── Main contract renderer ────────────────────────────────────────────────────
function renderContract(po, recordId, recordType, isShared, root) {
  _isSharedMode = isShared;

  document.getElementById('bar-label').textContent = `Contract — ${po.project.client_name || 'Client'} · ${recordId}`;
  document.title = `NFR Contract — ${po.project.client_name || recordId}`;
  if (isShared) {
    const backBtn = document.querySelector('.btn-back');
    if (backBtn) backBtn.style.display = 'none';
  }

  const MAT_MU = 0.24, SUB_MU = 0.30, EQ_MU = 0.15, LABOR_RATE = 85;
  const taxRate = parseFloat(po.project.tax_region) || 7.5;

  let totMat=0, totSub=0, totTools=0, totManHrs=0;
  (po.scope_items||[]).forEach(item => {
    totMat   += item.mat_cost   || 0;
    totSub   += item.sub_cost   || 0;
    totTools += item.tools_cost || 0;
    totManHrs += (item.men||1) * (item.est_hrs||0);
  });

  const laborRev    = totManHrs * LABOR_RATE;
  const matBilled   = totMat   * (1 + MAT_MU);
  const subBilled   = totSub   * (1 + SUB_MU);
  const toolsBilled = totTools * (1 + EQ_MU);
  const taxAmt      = totMat   * (taxRate / 100);
  const grand       = po.grand_total || (laborRev + matBilled + subBilled + toolsBilled + taxAmt);

  const contractDate = fmtDate(po.jose_approved_at || po.signed_at || po.approved_at || po.created_at);
  const startDate    = fmtDate(po.project.start_date);

  // Group scope items by category and append per-trade protection clauses
  const scopeItems = (po.scope_items||[]).filter(i => i.description || i.mat_cost > 0 || i.sub_cost > 0);
  let scopeHtml;
  if (scopeItems.length > 0) {
    const grouped = {};
    const catOrder = [];
    scopeItems.forEach(item => {
      const cat = item.category || 'Other';
      if (!grouped[cat]) { grouped[cat] = []; catOrder.push(cat); }
      grouped[cat].push(item);
    });
    scopeHtml = catOrder.map(cat => {
      const clause = TRADE_CLAUSES[cat] || '';
      return `<div class="scope-group">
        <div class="scope-group-title">${h(cat)}</div>
        <ol>${grouped[cat].map(item => `<li>${h(scopeLine(item))}</li>`).join('')}</ol>
        ${clause ? `<div class="scope-clause">${h(clause)}</div>` : ''}
      </div>`;
    }).join('');
  } else {
    scopeHtml = '<p style="color:#aaa;font-style:italic;">No scope items defined.</p>';
  }

  const fullAddr = [po.project.client_addr, po.project.client_city, 'OH', po.project.client_zip]
    .filter(Boolean).join(', ') || '—';

  root.innerHTML = `
  <div class="contract">

    <div class="co-header">
      <div class="co-name">Natures Friend &amp; Resources</div>
      <div class="co-sub">Home Improvement · Columbus, Ohio</div>
      <div class="co-contact">Licensed &amp; Insured &nbsp;·&nbsp; Columbus, OH</div>
    </div>

    <div class="contract-title">Home Improvement Contract</div>

    <div class="section">
      <div class="section-title">Client &amp; Project Information</div>
      <div class="info-grid">
        <div class="info-cell"><label>Client Name</label><div class="val">${h(po.project.client_name||'—')}</div></div>
        <div class="info-cell"><label>Contract Date</label><div class="val">${contractDate}</div></div>
        <div class="info-cell full"><label>Property Address</label><div class="val">${h(fullAddr)}</div></div>
        <div class="info-cell"><label>Project Type</label><div class="val">${h(po.project.project_type||'—')}</div></div>
        <div class="info-cell"><label>Estimated Start Date</label><div class="val">${startDate}</div></div>
        <div class="info-cell"><label>Project Manager</label><div class="val">${h(po.project.proj_mgr||'Jose Martinez')}</div></div>
        <div class="info-cell"><label>Contract Reference</label><div class="val">${h(po.id)}</div></div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Scope of Work</div>
      <p style="font-size:9pt;color:#777;margin-bottom:14px;line-height:1.65;">
        Natures Friend &amp; Resources agrees to perform the following work at the above-referenced property in a workmanlike manner consistent with industry standards:
      </p>
      ${scopeHtml}
    </div>

    <div class="section">
      <div class="section-title">Contract Price</div>
      <table class="pricing-table">
        <tr class="tax-row"><td>Labor, materials, sub-contractors, and equipment as described in scope above</td><td>Included</td></tr>
        <tr class="tax-row"><td>Sales tax on materials (${taxRate}%)</td><td>${fmt(taxAmt)}</td></tr>
        <tr class="grand-row"><td>Total Contract Amount</td><td>${fmt(grand)}</td></tr>
      </table>
    </div>

    <div class="section">
      <div class="section-title">Payment Schedule</div>
      <div class="pay-grid">
        <div class="pay-card">
          <div class="pct">40%</div>
          <div class="amt">${fmt(grand * 0.4)}</div>
          <div class="lbl"><strong>Deposit</strong><br>Due upon signing<br>Reserves project start date</div>
        </div>
        <div class="pay-card">
          <div class="pct">40%</div>
          <div class="amt">${fmt(grand * 0.4)}</div>
          <div class="lbl"><strong>Progress Payment</strong><br>Due when materials ordered<br>or work is underway</div>
        </div>
        <div class="pay-card">
          <div class="pct">20%</div>
          <div class="amt">${fmt(grand * 0.2)}</div>
          <div class="lbl"><strong>Final Payment</strong><br>Due upon completion<br>After walkthrough</div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Terms &amp; Conditions</div>

      <div class="terms-block">
        <div class="terms-num">1.</div>
        <div>
          <strong>Work Commencement &amp; Deposit.</strong> Natures Friend &amp; Resources ("Contractor") shall not begin work, order materials, or reserve labor until the 40% deposit has been received in full. The deposit reserves the project start date. If the deposit is not received within 30 days of the contract date, this contract expires and Contractor is released from all obligations hereunder.
        </div>
      </div>

      <div class="terms-block">
        <div class="terms-num">2.</div>
        <div>
          <strong>Payment Obligations — Binding Agreement to Pay.</strong> Client is legally obligated to make all payments in accordance with the payment schedule on the preceding page: (a) <strong>40% Deposit</strong> — due upon signing, prior to commencement; (b) <strong>40% Progress Payment</strong> — due upon materials being ordered or work commencing on site, whichever occurs first; (c) <strong>20% Final Payment</strong> — due in full on the day of project completion and walkthrough. Payments are accepted by Personal Check, Zelle, or ACH Bank Transfer only. Time is of the essence with respect to all payment obligations under this Contract.
        </div>
      </div>

      <div class="terms-block">
        <div class="terms-num">3.</div>
        <div>
          <strong>Late Payments &amp; Interest.</strong> Any payment not received within five (5) calendar days of its due date shall be considered past due. Past-due balances shall accrue interest at the rate of <strong>1.5% per month (18% annually)</strong> from the due date until paid in full. Contractor reserves the right to apply any partial payment first to accrued interest, then to the outstanding principal.
        </div>
      </div>

      <div class="terms-block">
        <div class="terms-num">4.</div>
        <div>
          <strong>Right to Suspend or Terminate Work.</strong> If Client fails to make any payment within five (5) calendar days of the due date, Contractor may, at its sole discretion: (a) suspend all work and remove materials and equipment from the job site; or (b) terminate this Contract upon written notice to Client. In the event of work suspension or termination due to Client's non-payment, Client shall be liable for all work performed to date, materials purchased, labor mobilized, and any reasonable costs of demobilization and remobilization. Resumption of work after a payment-related suspension shall require full payment of all overdue amounts plus a remobilization fee.
        </div>
      </div>

      <div class="terms-block terms-highlight">
        <div class="terms-num">5.</div>
        <div>
          <strong>Ohio Mechanic's Lien Notice (Required by Ohio Law).</strong> Any contractor, subcontractor, laborer, or material supplier who helps improve your property, but is not paid for his work, may record what is called a mechanic's lien on your property. A mechanic's lien is a claim against your property. If the lien is not resolved, the claimant may be able to force the sale of your property to collect the amount owed. Natures Friend &amp; Resources reserves all rights under Ohio Revised Code Chapter 1311 to file a mechanic's lien against the property described in this Contract for any unpaid amounts.
        </div>
      </div>

      <div class="terms-block">
        <div class="terms-num">6.</div>
        <div>
          <strong>Change Orders.</strong> The scope of work set forth in this Contract is final. Any additions, deletions, or modifications to the scope of work must be agreed upon in writing by both parties in a signed change order before any additional work is performed. Verbal agreements to perform additional work are not binding on Contractor. Each approved change order shall constitute an amendment to this Contract and may affect the total contract price and project timeline.
        </div>
      </div>

      <div class="terms-block">
        <div class="terms-num">7.</div>
        <div>
          <strong>Client Responsibilities.</strong> Client agrees to: (a) provide Contractor and its subcontractors reasonable access to the property during normal working hours (7:00 AM – 5:00 PM, Monday–Friday); (b) remove or protect personal belongings, furniture, and valuables from work areas prior to the project start date; (c) disclose in writing any known or suspected hazardous materials (including but not limited to asbestos, lead paint, mold) prior to commencement. Failure to disclose known hazardous conditions may result in additional costs and delays, all of which shall be the responsibility of Client.
        </div>
      </div>

      <div class="terms-block">
        <div class="terms-num">8.</div>
        <div>
          <strong>Pre-Existing Conditions.</strong> Contractor is not responsible for damage arising from pre-existing conditions at the property that were not disclosed in writing prior to commencement, including but not limited to: defective framing, subfloor damage, concealed plumbing or electrical deficiencies, water intrusion, or structural defects discovered during the course of work. Discovery of pre-existing conditions may require a written change order for remediation and may affect the project timeline and total price.
        </div>
      </div>

      <div class="terms-block">
        <div class="terms-num">9.</div>
        <div>
          <strong>Delays &amp; Force Majeure.</strong> Contractor shall not be liable for delays caused by circumstances beyond its reasonable control, including but not limited to: adverse weather conditions, supply chain disruptions, material shortages, subcontractor delays, utility company schedules, permit processing times, acts of God, or government orders. Contractor will notify Client of any material delays and provide a revised estimated timeline as practicable.
        </div>
      </div>

      <div class="terms-block">
        <div class="terms-num">10.</div>
        <div>
          <strong>Workmanship Warranty.</strong> Contractor warrants all labor performed under this Contract against defects in workmanship for a period of <strong>one (1) year</strong> from the date of project completion. This warranty does not cover damage caused by Client misuse, modification, neglect, or normal wear and tear. Materials are covered solely by the manufacturer's warranty, which Contractor will assist Client in filing where applicable. This warranty is void if Client fails to make all payments due under this Contract.
        </div>
      </div>

      <div class="terms-block">
        <div class="terms-num">11.</div>
        <div>
          <strong>Permits &amp; Code Compliance.</strong> Where required by applicable law, Contractor shall obtain necessary building permits and inspections. Permit fees, where not expressly included in the contract price above, shall be an additional cost billed to Client at cost. Client hereby authorizes Contractor to act as contractor of record for permitting purposes for this project.
        </div>
      </div>

      <div class="terms-block">
        <div class="terms-num">12.</div>
        <div>
          <strong>Limitation of Liability.</strong> Contractor's maximum liability to Client under this Contract, for any reason, shall not exceed the total amount paid by Client to Contractor under this Contract. In no event shall Contractor be liable for indirect, incidental, consequential, or punitive damages of any kind.
        </div>
      </div>

      <div class="terms-block">
        <div class="terms-num">13.</div>
        <div>
          <strong>Dispute Resolution &amp; Attorney Fees.</strong> In the event of any dispute arising from or relating to this Contract, the parties agree to first attempt resolution through good-faith negotiation. If the dispute is not resolved within thirty (30) days, either party may pursue available legal remedies in the courts of Franklin County, Ohio. The prevailing party in any legal action shall be entitled to recover reasonable attorney fees and court costs from the non-prevailing party.
        </div>
      </div>

      <div class="terms-block">
        <div class="terms-num">14.</div>
        <div>
          <strong>Three-Day Right to Cancel (Ohio Home Solicitation Sales Act).</strong> If this contract was solicited at the Client's residence or a location other than Contractor's permanent place of business, Client has the right to cancel this transaction within three (3) business days of the date of signing. Cancellation must be made in writing and delivered to Natures Friend &amp; Resources. If Client cancels within this period, any deposit paid shall be refunded within 10 business days. <em>This right does not apply if Client initiated contact and the work is urgently required to protect health or safety.</em>
        </div>
      </div>

      <div class="terms-block">
        <div class="terms-num">15.</div>
        <div>
          <strong>Entire Agreement.</strong> This Contract, including any signed change orders, constitutes the entire agreement between the parties with respect to the project described herein and supersedes all prior discussions, representations, or agreements, whether oral or written. This Contract may not be modified except by a written instrument signed by both parties. This Contract shall be governed by the laws of the State of Ohio.
        </div>
      </div>
    </div>

    <!-- ── Physical Signature Block (for print) ── -->
    <div class="section" id="print-sig-block">
      <div class="section-title">Signatures</div>
      <p style="font-size:9pt;color:#777;margin-bottom:20px;line-height:1.65;">
        By signing below, both parties agree to the complete scope of work, total contract price, payment schedule, and all fifteen (15) terms and conditions set forth above. Client acknowledges having read and understood this entire contract.
      </p>
      <div class="sig-grid">
        <div class="sig-block">
          <div class="sig-name">${h(po.project.client_name||'Client')}</div>
          <div class="sig-role">Property Owner / Client</div>
          <div class="sig-line"></div>
          <div class="date-label">Signature &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Date</div>
        </div>
        <div class="sig-block">
          <div class="sig-name">Jose Martinez</div>
          <div class="sig-role">Owner — Natures Friend &amp; Resources</div>
          <div class="sig-line"></div>
          <div class="date-label">Signature &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Date</div>
        </div>
      </div>
    </div>

    <!-- ── Electronic Acknowledgment (screen only) ── -->
    <div id="esign-section"></div>

    <div class="nfr-stamp">
      <div class="stamp-name">Natures Friend &amp; Resources</div>
      <div class="stamp-sub">Columbus, Ohio &nbsp;·&nbsp; Licensed &amp; Insured &nbsp;·&nbsp; Home Improvement Contractor</div>
      <div class="stamp-ref">${h(po.id)} &nbsp;·&nbsp; Generated ${new Date().toLocaleDateString()}</div>
    </div>

  </div>`;

  // ── Render e-sign section based on agreement status ──────────
  const esignEl = document.getElementById('esign-section');
  const alreadySigned = ['signed','deposit_paid'].includes(po.status) && po.client_signed_name;

  if (alreadySigned) {
    esignEl.innerHTML = `
      <div class="esign-confirmed">
        <div class="esign-confirmed-icon">✅</div>
        <div class="esign-confirmed-text">
          <strong>Electronically Acknowledged</strong><br>
          Signed by <strong>${h(po.client_signed_name)}</strong> on ${fmtDate(po.client_signed_at)}<br>
          <small style="color:#065F46;opacity:.75">Agreement ID: ${h(po.id)}</small>
        </div>
      </div>`;
  } else if (isShared || ['jose_approved','sent_to_client','signed'].includes(po.status)) {
    esignEl.innerHTML = `
      <div class="esign-box">
        <div class="esign-title">Electronic Acknowledgment &amp; Signature</div>
        <p class="esign-intro">
          Please read this entire contract carefully before signing. By completing the acknowledgment below, you confirm that you have read and understood all terms, and you agree to be legally bound by this contract including the payment obligations described above.
        </p>
        <div class="esign-checks">
          <label class="esign-check-row">
            <input type="checkbox" id="chk-read" onchange="checkEsignReady()">
            <span>I have read and understand the complete scope of work, total contract price, payment schedule (40% deposit / 40% progress / 20% final), and all fifteen (15) terms and conditions in this contract.</span>
          </label>
          <label class="esign-check-row">
            <input type="checkbox" id="chk-pay" onchange="checkEsignReady()">
            <span>I agree to make all payments according to the schedule above and understand that failure to pay on time may result in work suspension, interest charges of 1.5%/month, a mechanic's lien on my property, and legal action to recover all amounts owed including attorney fees.</span>
          </label>
          <label class="esign-check-row">
            <input type="checkbox" id="chk-cancel" onchange="checkEsignReady()">
            <span>I have been informed of my three-day right to cancel (if applicable under Ohio law) and I am signing this contract voluntarily.</span>
          </label>
        </div>
        <div class="esign-name-row">
          <div class="esign-field">
            <label>Your Full Legal Name <span style="color:#DC2626">*</span></label>
            <input type="text" id="esign-name" placeholder="Type your full name to serve as your signature" oninput="checkEsignReady()">
          </div>
          <div class="esign-field" style="max-width:180px">
            <label>Today's Date <span style="color:#DC2626">*</span></label>
            <input type="date" id="esign-date" value="${new Date().toISOString().substring(0,10)}" oninput="checkEsignReady()">
          </div>
        </div>
        <div id="esign-msg" style="font-size:12px;color:#DC2626;margin-bottom:10px;display:none"></div>
        <button class="esign-btn" id="esign-btn" onclick="submitEsign('${h(recordId)}','${recordType}')" disabled>
          Sign &amp; Accept Contract
        </button>
        <p class="esign-legal-note">
          Your typed name above constitutes your electronic signature on this contract. This electronic acknowledgment is binding and has the same legal effect as a handwritten signature under the Electronic Signatures in Global and National Commerce Act (E-SIGN) and applicable Ohio law.
        </p>
      </div>`;
    // Pre-fill Netlify hidden form with metadata
    if (isShared) {
      const fullAddr2 = [po.project.client_addr, po.project.client_city, 'OH', po.project.client_zip].filter(Boolean).join(', ') || '—';
      const el = (id, v) => { const e = document.getElementById(id); if (e) e.value = v; };
      el('nf-agr-id',    recordId);
      el('nf-total',     fmt(grand));
      el('nf-proj-type', po.project.project_type || '');
      el('nf-address',   fullAddr2);
      el('nf-ua',        navigator.userAgent);
    }
  }
} // end renderContract

function checkEsignReady() {
  const chkRead   = document.getElementById('chk-read');
  const chkPay    = document.getElementById('chk-pay');
  const chkCancel = document.getElementById('chk-cancel');
  const name      = (document.getElementById('esign-name')?.value || '').trim();
  const date      = document.getElementById('esign-date')?.value;
  const btn       = document.getElementById('esign-btn');
  if (!btn) return;
  const ready = chkRead?.checked && chkPay?.checked && chkCancel?.checked && name.length >= 3 && date;
  btn.disabled = !ready;
}

function submitEsign(recordId, recordType) {
  const name = (document.getElementById('esign-name')?.value || '').trim();
  const date = document.getElementById('esign-date')?.value;
  const msg  = document.getElementById('esign-msg');

  if (!name || name.length < 3) {
    msg.textContent = 'Please type your full legal name.';
    msg.style.display = 'block'; return;
  }
  if (!date) {
    msg.textContent = 'Please enter today\'s date.';
    msg.style.display = 'block'; return;
  }

  const signedAt = new Date().toISOString();
  const esignEl  = document.getElementById('esign-section');

  // ── Shared / remote mode → submit to Netlify ──────────────────
  if (_isSharedMode) {
    const btn = document.getElementById('esign-btn');
    if (btn) { btn.disabled = true; btn.textContent = 'Submitting…'; }

    document.getElementById('nf-client-name').value = name;
    document.getElementById('nf-signed-at').value   = signedAt;
    document.getElementById('nf-ua').value          = navigator.userAgent;

    const formData = new FormData(document.getElementById('netlify-sig-form'));
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    }).then(() => {
      if (esignEl) {
        esignEl.innerHTML = `
          <div class="esign-thankyou">
            <h2>Contract Signed</h2>
            <p>
              Thank you, <strong>${name.replace(/</g,'&lt;')}</strong>. Your contract has been submitted.<br>
              <strong>Jose Martinez</strong> will contact you within 24 hours to confirm receipt and next steps.<br>
              <small style="opacity:.7;">Agreement: ${recordId} &nbsp;·&nbsp; ${new Date(signedAt).toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'})}</small>
            </p>
          </div>`;
        document.querySelector('.esign-thankyou')?.scrollIntoView({behavior:'smooth', block:'center'});
      }
    }).catch(() => {
      if (msg) {
        msg.textContent = 'Submission failed. Please email naturesfriendandresources@gmail.com directly.';
        msg.style.display = 'block';
      }
      if (btn) { btn.disabled = false; btn.textContent = 'Sign & Accept Contract'; }
    });
    return;
  }

  // ── Local mode → write to localStorage ────────────────────────
  if (recordType === 'agr') {
    const agrs = JSON.parse(localStorage.getItem('nfr_agreements') || '[]');
    const idx = agrs.findIndex(a => a.id === recordId);
    if (idx >= 0) {
      agrs[idx].status             = 'signed';
      agrs[idx].client_signed_name = name;
      agrs[idx].client_signed_at   = signedAt;
      agrs[idx].client_signed_date = date;
      agrs[idx].signed_at          = signedAt;
      localStorage.setItem('nfr_agreements', JSON.stringify(agrs));
    }
  } else {
    const pos = JSON.parse(localStorage.getItem('nfr_pos') || '[]');
    const idx = pos.findIndex(p => p.id === recordId);
    if (idx >= 0) {
      pos[idx].status             = 'signed';
      pos[idx].client_signed_name = name;
      pos[idx].client_signed_at   = signedAt;
      pos[idx].client_signed_date = date;
      pos[idx].signed_at          = signedAt;
      localStorage.setItem('nfr_pos', JSON.stringify(pos));
    }
  }

  if (esignEl) {
    esignEl.innerHTML = `
      <div class="esign-confirmed">
        <div class="esign-confirmed-icon">✅</div>
        <div class="esign-confirmed-text">
          <strong>Contract Electronically Signed</strong><br>
          Signed by <strong>${name.replace(/</g,'&lt;')}</strong> on ${new Date(signedAt).toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'})} at ${new Date(signedAt).toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit'})}<br>
          <small style="color:#065F46;opacity:.75">Agreement ID: ${recordId} &nbsp;·&nbsp; This electronic signature is legally binding.</small>
        </div>
      </div>`;
  }
  document.querySelector('.esign-confirmed')?.scrollIntoView({behavior:'smooth', block:'center'});
}
</script>
</body>
</html>
```

---

## `flooring-workorder.html` <a id="flooring-workorder-html"></a>

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>NFR Flooring Work Order</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
<style>
  :root {
    --primary: #3A6B5F;
    --accent: #E07B54;
    --light: #F2F8F6;
    --border: #A8CEBF;
    --text: #2C2C2C;
    --muted: #6B7B7A;
    --warn: #D97706;
    --error: #DC2626;
    --success: #059669;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Lato', sans-serif; background: #EEF5F3; color: var(--text); font-size: 13px; }

  /* ── Top bar ── */
  .topbar {
    background: var(--primary); color: #fff;
    display: flex; align-items: center; justify-content: space-between;
    padding: 10px 24px; gap: 12px;
  }
  .topbar h1 { font-family: 'Playfair Display', serif; font-size: 18px; font-weight: 700; }
  .topbar .subtitle { font-size: 11px; opacity: .75; margin-top: 2px; }
  .topbar-right { display: flex; align-items: center; gap: 10px; }
  .wo-num { background: rgba(255,255,255,.15); border-radius: 6px; padding: 6px 14px; font-size: 14px; font-weight: 700; letter-spacing: .5px; }
  .status-badge {
    padding: 4px 12px; border-radius: 20px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .5px;
  }
  .badge-draft    { background: #D1FAE5; color: #065F46; }
  .badge-pending  { background: #FEF3C7; color: #92400E; }
  .badge-complete { background: #DBEAFE; color: #1E40AF; }
  .badge-signed   { background: #D1FAE5; color: #065F46; }

  /* ── Layout ── */
  .page { max-width: 1100px; margin: 20px auto; padding: 0 16px 60px; }

  .panel { background: #fff; border: 1px solid var(--border); border-radius: 8px; margin-bottom: 16px; overflow: hidden; }
  .panel-header {
    background: var(--light); border-bottom: 1px solid var(--border);
    padding: 10px 16px; font-weight: 700; font-size: 12px;
    text-transform: uppercase; letter-spacing: .5px; color: var(--primary);
    display: flex; align-items: center; justify-content: space-between;
  }
  .panel-body { padding: 16px; }

  /* ── Form grid ── */
  .form-grid { display: grid; gap: 10px; }
  .col-2 { grid-template-columns: 1fr 1fr; }
  .col-3 { grid-template-columns: 1fr 1fr 1fr; }
  .col-4 { grid-template-columns: 1fr 1fr 1fr 1fr; }
  .col-5 { grid-template-columns: 2fr 1fr 1fr 1fr 1fr; }

  .field label { display: block; font-size: 11px; font-weight: 700; color: var(--muted); margin-bottom: 3px; text-transform: uppercase; letter-spacing: .3px; }
  .field input, .field select, .field textarea {
    width: 100%; border: 1px solid var(--border); border-radius: 4px;
    padding: 7px 10px; font-family: 'Lato', sans-serif; font-size: 13px; color: var(--text);
    background: #fff; transition: border-color .15s;
  }
  .field input:focus, .field select:focus, .field textarea:focus { outline: none; border-color: var(--primary); }
  .field textarea { resize: vertical; min-height: 60px; }
  .field.span2 { grid-column: span 2; }
  .field.span3 { grid-column: span 3; }
  .field.span4 { grid-column: span 4; }

  /* ── Checkboxes / radios ── */
  .check-group { display: flex; gap: 14px; align-items: center; flex-wrap: wrap; padding-top: 4px; }
  .check-group label { display: flex; align-items: center; gap: 5px; font-size: 13px; cursor: pointer; font-weight: 400; text-transform: none; letter-spacing: 0; }
  .check-group input[type=checkbox], .check-group input[type=radio] { width: auto; margin: 0; accent-color: var(--primary); }

  /* ── Tables ── */
  .wo-table { width: 100%; border-collapse: collapse; font-size: 12px; }
  .wo-table th {
    background: var(--light); border: 1px solid var(--border);
    padding: 6px 8px; text-align: left; font-size: 10px; font-weight: 700;
    text-transform: uppercase; letter-spacing: .4px; color: var(--primary);
    white-space: nowrap;
  }
  .wo-table td { border: 1px solid #E5EFEB; padding: 4px; vertical-align: middle; }
  .wo-table tr:hover td { background: #F7FBFA; }
  .wo-table td input, .wo-table td select {
    border: none; background: transparent; width: 100%;
    font-family: 'Lato', sans-serif; font-size: 12px; padding: 3px 4px;
  }
  .wo-table td input:focus, .wo-table td select:focus { outline: 1px solid var(--primary); border-radius: 2px; background: #fff; }
  .wo-table td.num { text-align: right; }
  .wo-table td.num input { text-align: right; }
  .row-del { color: var(--error); cursor: pointer; font-size: 14px; padding: 2px 6px; }
  .row-del:hover { background: #FEE2E2; border-radius: 3px; }
  .sqft-calc { color: var(--muted); font-size: 11px; pointer-events: none; }

  /* ── Add row button ── */
  .add-row-btn {
    margin-top: 8px; padding: 6px 14px; font-size: 12px;
    background: var(--light); border: 1px dashed var(--border); border-radius: 4px;
    cursor: pointer; color: var(--primary); font-weight: 700; font-family: 'Lato', sans-serif;
  }
  .add-row-btn:hover { background: #E5F0EC; }

  /* ── Substrate conditions ── */
  .conditions-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px; }
  .condition-block label.cond-label { display: block; font-size: 11px; font-weight: 700; color: var(--muted); margin-bottom: 6px; text-transform: uppercase; letter-spacing: .3px; }

  /* ── Install table ── */
  .install-table th.money, .install-table td.money { text-align: right; }
  .install-total-row td { background: var(--light); font-weight: 700; }

  /* ── Terms ── */
  .terms-box { background: #FFFBEB; border: 1px solid #FDE68A; border-radius: 6px; padding: 12px 16px; font-size: 12px; color: #78350F; line-height: 1.6; }
  .terms-box strong { display: block; margin-bottom: 4px; font-size: 13px; }

  /* ── Signature ── */
  .sig-grid { display: grid; grid-template-columns: 1fr 200px; gap: 20px; }
  .sig-line { border-bottom: 1px solid #333; height: 32px; }
  .sig-lbl { font-size: 11px; color: var(--muted); margin-top: 4px; }

  /* ── Action buttons ── */
  .action-bar { display: flex; gap: 10px; padding: 16px; border-top: 1px solid var(--border); background: var(--light); flex-wrap: wrap; }
  .btn { padding: 9px 20px; border-radius: 5px; border: none; font-family: 'Lato', sans-serif; font-size: 13px; font-weight: 700; cursor: pointer; transition: opacity .15s; }
  .btn:hover { opacity: .85; }
  .btn-primary { background: var(--primary); color: #fff; }
  .btn-accent  { background: var(--accent); color: #fff; }
  .btn-outline { background: #fff; color: var(--primary); border: 1px solid var(--border); }
  .btn-sm { padding: 5px 12px; font-size: 12px; }
  .btn-warn { background: var(--warn); color: #fff; }

  /* ── Toast ── */
  #toast {
    position: fixed; bottom: 24px; right: 24px; background: #1F2937; color: #fff;
    padding: 12px 20px; border-radius: 8px; font-size: 13px; font-weight: 700;
    opacity: 0; pointer-events: none; transition: opacity .3s; z-index: 9999;
  }
  #toast.show { opacity: 1; }

  /* ── History ── */
  .history-row td { padding: 8px 10px; }
  .history-row:nth-child(even) td { background: #FAFCFB; }
  .action-link { color: var(--primary); cursor: pointer; text-decoration: underline; font-size: 12px; margin-right: 6px; }
  .action-link:hover { color: var(--accent); }

  /* ── Print styles ── */
  @media print {
    .topbar, .action-bar, .add-row-btn, .row-del, #toast, .history-section, #no-print { display: none !important; }
    .page { margin: 0; padding: 0; max-width: 100%; }
    .panel { border: 1px solid #ccc; margin-bottom: 10px; }
    body { background: #fff; }
  }

  /* ── Responsive ── */
  @media (max-width: 768px) {
    .col-2, .col-3, .col-4, .col-5 { grid-template-columns: 1fr; }
    .field.span2, .field.span3, .field.span4 { grid-column: span 1; }
    .sig-grid { grid-template-columns: 1fr; }
    .conditions-grid { grid-template-columns: 1fr; }
  }
</style>
<script src="js/auth.js"></script>
<script>NFRAuth.requireAuth('flooring');</script>
</head>
<body>

<div class="topbar">
  <div>
    <h1>Natures Friend &amp; Resources</h1>
    <div class="subtitle">Flooring Division — Work Order</div>
  </div>
  <div class="topbar-right">
    <div class="wo-num" id="wo-num-display">WO-2026-####</div>
    <span class="status-badge badge-draft" id="status-badge">Draft</span>
    <button class="btn btn-outline btn-sm" onclick="printWO()" id="no-print" style="color:#fff;border-color:rgba(255,255,255,.4)">🖨 Print</button>
  </div>
</div>

<div class="page">

  <!-- ── Client Info ── -->
  <div class="panel">
    <div class="panel-header">
      Client &amp; Job Information
      <span id="wo-id-label" style="font-size:11px;font-weight:400;color:var(--muted)"></span>
    </div>
    <div class="panel-body">
      <div class="form-grid col-2">
        <div class="field span2">
          <label>Sold To (Client Name / Company)</label>
          <input type="text" id="client_name" placeholder="Full name or business name">
        </div>
        <div class="field span2">
          <label>Property Address</label>
          <input type="text" id="client_addr" placeholder="Street address" oninput="initMapsIfReady()">
        </div>
        <div class="field">
          <label>City</label>
          <input type="text" id="client_city" placeholder="Columbus">
        </div>
        <div class="field" style="display:grid;grid-template-columns:80px 1fr;gap:8px">
          <div class="field">
            <label>State</label>
            <input type="text" id="client_state" value="OH" placeholder="OH">
          </div>
          <div class="field">
            <label>Zip</label>
            <input type="text" id="client_zip" placeholder="43215">
          </div>
        </div>
        <div class="field">
          <label>Home Phone</label>
          <input type="tel" id="home_phone" placeholder="(614) 000-0000">
        </div>
        <div class="field">
          <label>Job Phone</label>
          <input type="tel" id="job_phone" placeholder="(614) 000-0000">
        </div>
        <div class="field">
          <label>Location / Room Reference</label>
          <input type="text" id="location" placeholder="e.g. Whole main floor">
        </div>
        <div class="field">
          <label>Contractor / Customer PO #</label>
          <input type="text" id="contractor_po" placeholder="Link to agreement or PO">
        </div>
        <div class="field">
          <label>Estimated Start Date</label>
          <input type="date" id="start_date">
        </div>
        <div class="field">
          <label>Project Manager</label>
          <input type="text" id="proj_mgr" value="Jose Martinez">
        </div>
      </div>
    </div>
  </div>

  <!-- ── Product / Material Grid ── -->
  <div class="panel">
    <div class="panel-header">
      Flooring Products &amp; Materials
      <button class="btn btn-outline btn-sm" onclick="addProductRow()">+ Add Product Row</button>
    </div>
    <div class="panel-body" style="overflow-x:auto">
      <table class="wo-table" id="product-table">
        <thead>
          <tr>
            <th style="width:28px">#</th>
            <th style="min-width:90px">Room</th>
            <th style="min-width:110px">Mfgr / Distributor</th>
            <th style="min-width:90px">Style No.</th>
            <th style="min-width:130px">Product Name</th>
            <th style="min-width:80px">Color No.</th>
            <th style="min-width:110px">Color Name</th>
            <th style="min-width:90px">Type Floor</th>
            <th style="width:60px">Width</th>
            <th style="width:70px">Length</th>
            <th style="width:70px">CTNS / PCS</th>
            <th style="width:80px">Sq Ft / CTNS</th>
            <th style="width:80px">Total Sq Ft</th>
            <th style="width:28px"></th>
          </tr>
        </thead>
        <tbody id="product-tbody"></tbody>
      </table>
    </div>
  </div>

  <!-- ── Substrate / Conditions ── -->
  <div class="panel">
    <div class="panel-header">Job Site Conditions</div>
    <div class="panel-body">
      <div class="conditions-grid">
        <div class="condition-block">
          <label class="cond-label">Type Sub Floor</label>
          <div class="check-group">
            <label><input type="checkbox" name="subfloor" value="Wood" id="sf_wood"> Wood</label>
            <label><input type="checkbox" name="subfloor" value="Concrete" id="sf_concrete"> Concrete</label>
            <label><input type="checkbox" name="subfloor" value="Gypsum" id="sf_gyp"> Gypsum (Gyp-Crete)</label>
            <label><input type="checkbox" name="subfloor" value="Existing_Flooring" id="sf_existing"> Over Existing Floor</label>
          </div>
        </div>
        <div class="condition-block">
          <label class="cond-label">Furniture &amp; Appliances</label>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:4px">
            <div>
              <div style="font-size:11px;color:var(--muted);margin-bottom:4px">Furniture Move</div>
              <div class="check-group">
                <label><input type="radio" name="furniture" value="Yes" id="furn_yes"> Yes</label>
                <label><input type="radio" name="furniture" value="No" id="furn_no" checked> No</label>
              </div>
            </div>
            <div>
              <div style="font-size:11px;color:var(--muted);margin-bottom:4px">Appliances Move</div>
              <div class="check-group">
                <label><input type="radio" name="appliances" value="Yes" id="app_yes"> Yes</label>
                <label><input type="radio" name="appliances" value="No" id="app_no" checked> No</label>
              </div>
            </div>
          </div>
        </div>
        <div class="condition-block">
          <label class="cond-label">Prep Material / Notes</label>
          <textarea id="prep_material" placeholder="e.g. Self-leveling compound needed, remove existing tile, fill low spots..."></textarea>
        </div>
      </div>
    </div>
  </div>

  <!-- ── Installation ── -->
  <div class="panel">
    <div class="panel-header">
      Installation Scope
      <button class="btn btn-outline btn-sm" onclick="addInstallRow()">+ Add Installation Row</button>
    </div>
    <div class="panel-body" style="overflow-x:auto">
      <table class="wo-table install-table" id="install-table">
        <thead>
          <tr>
            <th style="width:28px">#</th>
            <th style="min-width:160px">Installation Type</th>
            <th style="min-width:80px">Area / Room</th>
            <th style="width:90px">Total SF / SY</th>
            <th style="width:70px">Unit</th>
            <th style="width:80px">Qty</th>
            <th class="money" style="width:90px">Unit Price</th>
            <th class="money" style="width:100px">Amount</th>
            <th style="min-width:120px">Notes</th>
            <th style="width:28px"></th>
          </tr>
        </thead>
        <tbody id="install-tbody"></tbody>
        <tfoot>
          <tr class="install-total-row">
            <td colspan="7" style="text-align:right;padding:8px 12px">Installation Total</td>
            <td class="money" id="install-total" style="padding:8px 12px">$0.00</td>
            <td colspan="2"></td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>

  <!-- ── Additional Charges ── -->
  <div class="panel">
    <div class="panel-header">
      Additional Charges
      <button class="btn btn-outline btn-sm" onclick="addChargeRow()">+ Add Row</button>
    </div>
    <div class="panel-body" style="overflow-x:auto">
      <table class="wo-table install-table" id="charge-table">
        <thead>
          <tr>
            <th style="width:28px">#</th>
            <th style="min-width:200px">Description</th>
            <th class="money" style="width:100px">Amount</th>
            <th style="min-width:120px">Notes</th>
            <th style="width:28px"></th>
          </tr>
        </thead>
        <tbody id="charge-tbody">
          <tr>
            <td>1</td>
            <td><input type="text" placeholder="e.g. Underlayment / Transition strips / Stair nosing..."></td>
            <td class="money"><input type="number" min="0" step="0.01" placeholder="0.00" oninput="calcTotals()"></td>
            <td><input type="text" placeholder="Notes"></td>
            <td><span class="row-del" onclick="delRow(this)">✕</span></td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="install-total-row">
            <td colspan="2" style="text-align:right;padding:8px 12px">Charges Total</td>
            <td class="money" id="charge-total" style="padding:8px 12px">$0.00</td>
            <td colspan="2"></td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>

  <!-- ── Grand Total ── -->
  <div class="panel">
    <div class="panel-header">Order Summary</div>
    <div class="panel-body">
      <table style="width:300px;margin-left:auto;border-collapse:collapse;font-size:13px">
        <tr>
          <td style="padding:6px 10px;color:var(--muted)">Installation Subtotal</td>
          <td style="padding:6px 10px;text-align:right;font-weight:700" id="summary-install">$0.00</td>
        </tr>
        <tr>
          <td style="padding:6px 10px;color:var(--muted)">Additional Charges</td>
          <td style="padding:6px 10px;text-align:right;font-weight:700" id="summary-charges">$0.00</td>
        </tr>
        <tr>
          <td style="padding:6px 10px;color:var(--muted)">Tax (Columbus 7.5%)</td>
          <td style="padding:6px 10px;text-align:right;font-weight:700" id="summary-tax">$0.00</td>
        </tr>
        <tr style="border-top:2px solid var(--primary)">
          <td style="padding:10px;font-weight:700;font-size:15px">GRAND TOTAL</td>
          <td style="padding:10px;text-align:right;font-weight:700;font-size:15px;color:var(--primary)" id="summary-grand">$0.00</td>
        </tr>
      </table>
      <div style="margin-top:12px;display:flex;gap:10px;align-items:center;flex-wrap:wrap">
        <div class="field" style="flex:1;min-width:200px">
          <label>Tax Region</label>
          <select id="tax_region" onchange="calcTotals()">
            <option value="7.5">Columbus — 7.5%</option>
            <option value="8.0">Dublin — 8.0%</option>
            <option value="0">No Tax</option>
            <option value="custom">Custom</option>
          </select>
        </div>
        <div class="field" id="custom-tax-field" style="display:none;width:100px">
          <label>Custom %</label>
          <input type="number" id="custom_tax_rate" min="0" max="20" step="0.1" value="7.5" oninput="calcTotals()">
        </div>
      </div>
    </div>
  </div>

  <!-- ── Payment Terms ── -->
  <div class="panel">
    <div class="panel-header">Payment Terms</div>
    <div class="panel-body">
      <div class="terms-box">
        <strong>PAYMENT IN FULL TO BE MADE UPON COMPLETION OF INSTALLATION</strong>
        A finance charge of 1.5% per month (18% APR) will be charged on all balances 30 days past due.
        In the event of collection proceedings, buyer agrees to pay all costs including reasonable attorney's fees.
        Accepted payment methods: Check, Zelle, ACH / Bank Transfer.
      </div>
      <div style="margin-top:12px" class="field">
        <label>Payment Notes</label>
        <textarea id="payment_notes" placeholder="e.g. Deposit received $500, balance due on completion..."></textarea>
      </div>
    </div>
  </div>

  <!-- ── Internal Notes ── -->
  <div class="panel" id="no-print">
    <div class="panel-header">Internal Notes (not printed)</div>
    <div class="panel-body">
      <div class="field">
        <label>Crew Notes / Reminders</label>
        <textarea id="internal_notes" placeholder="e.g. Key under mat, dog in backyard, contact Joe for access, lot number 967881..." style="min-height:80px"></textarea>
      </div>
      <div class="form-grid col-3" style="margin-top:10px">
        <div class="field">
          <label>Dyelot / Lot Number</label>
          <input type="text" id="dyelot" placeholder="e.g. 967881">
        </div>
        <div class="field">
          <label>Roll / Carton Reference</label>
          <input type="text" id="roll_ref" placeholder="e.g. roll 0775">
        </div>
        <div class="field">
          <label>Supplier Reference / PO</label>
          <input type="text" id="supplier_ref" placeholder="e.g. Floorit ref 5091737385">
        </div>
      </div>
    </div>
  </div>

  <!-- ── Signature ── -->
  <div class="panel">
    <div class="panel-header">Authorization &amp; Acceptance</div>
    <div class="panel-body">
      <p style="font-size:12px;line-height:1.7;margin-bottom:16px">
        BUYER HEREBY ACCEPTS THE ABOVE TERMS AND CONDITIONS. I/we authorize Natures Friend &amp; Resources to perform the flooring installation work described herein and agree to make payment in full upon completion.
      </p>
      <div class="sig-grid">
        <div>
          <div class="sig-line" id="sig-line-client"></div>
          <div class="sig-lbl">Client Signature</div>
        </div>
        <div>
          <div class="sig-line" id="sig-line-date"></div>
          <div class="sig-lbl">Date</div>
        </div>
      </div>
      <div class="sig-grid" style="margin-top:20px">
        <div>
          <div class="sig-line"></div>
          <div class="sig-lbl">Jose Martinez — Natures Friend &amp; Resources</div>
        </div>
        <div>
          <div class="sig-line"></div>
          <div class="sig-lbl">Date</div>
        </div>
      </div>

      <!-- Signature status (internal) -->
      <div id="no-print" style="margin-top:16px;display:flex;gap:10px;align-items:center;flex-wrap:wrap">
        <button class="btn btn-outline btn-sm" onclick="markSigned()">✓ Mark as Signed</button>
        <span id="signed-note" style="font-size:12px;color:var(--success);display:none"></span>
      </div>
    </div>
  </div>

  <!-- ── Action Bar ── -->
  <div class="panel" id="no-print">
    <div class="action-bar">
      <button class="btn btn-outline" onclick="saveDraft()">💾 Save Draft</button>
      <button class="btn btn-primary" onclick="submitWO()">📋 Submit for Review</button>
      <button class="btn btn-outline" onclick="newWO()">+ New Work Order</button>
      <button class="btn btn-accent" onclick="printWO()" style="margin-left:auto">🖨 Print / PDF</button>
    </div>
  </div>

  <!-- ── History ── -->
  <div class="panel history-section" id="no-print">
    <div class="panel-header">Work Order History</div>
    <div class="panel-body" style="overflow-x:auto">
      <table class="wo-table" id="history-table">
        <thead>
          <tr>
            <th>WO #</th>
            <th>Client</th>
            <th>Location</th>
            <th>Start Date</th>
            <th>Grand Total</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="history-tbody">
          <tr><td colspan="7" style="text-align:center;color:var(--muted);padding:20px">No work orders saved yet.</td></tr>
        </tbody>
      </table>
    </div>
  </div>

</div><!-- /page -->

<div id="toast"></div>

<script>
// ── Constants ──────────────────────────────────────────────────
const INSTALL_TYPES = [
  'Glue-Down Install','Float / Click Install','Nail-Down / Staple Install',
  'Peel &amp; Stick Install','Glue-Down + Staple','Carpet Stretch Install',
  'Carpet Glue-Down','Sheet Vinyl Install','Demo &amp; Remove Existing Floor',
  'Sub-floor Prep / Leveling','Stair Installation','Transition Strips / T-Molding',
  'Quarter Round / Base Install','Threshold / Reducer Install','Other'
];

const FLOOR_TYPES = [
  'LVP — Luxury Vinyl Plank','LVT — Luxury Vinyl Tile','Hardwood — Solid',
  'Hardwood — Engineered','Carpet — Broadloom','Carpet — Tile',
  'Ceramic Tile','Porcelain Tile','Natural Stone / Travertine',
  'Laminate','Sheet Vinyl','Cork','Bamboo','Other'
];

// ── State ──────────────────────────────────────────────────────
let currentWO = null;
let productRowCount = 0;
let installRowCount = 0;
let chargeRowCount  = 0;

// ── Init ───────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Add default rows
  addProductRow(); addProductRow(); addProductRow();
  addInstallRow(); addInstallRow();
  renderHistory();

  // Check URL for edit param
  const params = new URLSearchParams(window.location.search);
  const woId = params.get('wo');
  if (woId) loadWOForEdit(woId);
  else updateWODisplay('WO-' + new Date().getFullYear() + '-####', 'draft');
});

// ── Product rows ───────────────────────────────────────────────
function addProductRow() {
  productRowCount++;
  const n = productRowCount;
  const typeOpts = FLOOR_TYPES.map(t => `<option>${t}</option>`).join('');

  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${n}</td>
    <td><input type="text" placeholder="Living Rm"></td>
    <td><input type="text" placeholder="Shaw / Floorit"></td>
    <td><input type="text" placeholder="Style #"></td>
    <td><input type="text" placeholder="Product name"></td>
    <td><input type="text" placeholder="Color #"></td>
    <td><input type="text" placeholder="Color name"></td>
    <td><select>${typeOpts}</select></td>
    <td><input type="text" placeholder='12"' style="width:55px"></td>
    <td><input type="text" placeholder='8&apos;6"' style="width:65px"></td>
    <td><input type="number" min="0" step="1" placeholder="0" style="width:60px" class="ctns-input" oninput="calcSqFt(this)"></td>
    <td><input type="number" min="0" step="0.01" placeholder="0.00" style="width:70px" class="sqft-per-input" oninput="calcSqFt(this)"></td>
    <td class="num sqft-calc" style="width:70px">—</td>
    <td><span class="row-del" onclick="delRow(this)">✕</span></td>
  `;
  document.getElementById('product-tbody').appendChild(tr);
}

function calcSqFt(el) {
  const row = el.closest('tr');
  const ctns = parseFloat(row.querySelector('.ctns-input').value) || 0;
  const sqftPer = parseFloat(row.querySelector('.sqft-per-input').value) || 0;
  const total = ctns * sqftPer;
  row.querySelector('.sqft-calc').textContent = total > 0 ? total.toFixed(1) : '—';
}

// ── Install rows ───────────────────────────────────────────────
function addInstallRow() {
  installRowCount++;
  const n = installRowCount;
  const typeOpts = INSTALL_TYPES.map(t => `<option>${t}</option>`).join('');

  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${n}</td>
    <td><select style="min-width:150px">${typeOpts}</select></td>
    <td><input type="text" placeholder="Room / area"></td>
    <td><input type="number" min="0" step="0.1" placeholder="0.0" oninput="calcInstallLine(this)"></td>
    <td>
      <select oninput="calcInstallLine(this)">
        <option value="SF">SF</option>
        <option value="SY">SY</option>
        <option value="LF">LF</option>
        <option value="EA">EA</option>
        <option value="HR">HR</option>
      </select>
    </td>
    <td><input type="number" min="0" step="1" placeholder="1" oninput="calcInstallLine(this)"></td>
    <td class="money"><input type="number" min="0" step="0.01" placeholder="0.00" oninput="calcInstallLine(this)"></td>
    <td class="money line-amt" style="padding:4px 8px">$0.00</td>
    <td><input type="text" placeholder="Notes"></td>
    <td><span class="row-del" onclick="delRow(this)">✕</span></td>
  `;
  document.getElementById('install-tbody').appendChild(tr);
}

function calcInstallLine(el) {
  const row = el.closest('tr');
  const inputs = row.querySelectorAll('input[type=number]');
  // qty × unit price
  const qty = parseFloat(inputs[1]?.value) || 1;
  const unitPrice = parseFloat(inputs[2]?.value) || 0;
  const amt = qty * unitPrice;
  row.querySelector('.line-amt').textContent = '$' + amt.toFixed(2);
  calcTotals();
}

// ── Charge rows ────────────────────────────────────────────────
function addChargeRow() {
  chargeRowCount++;
  const n = document.getElementById('charge-tbody').querySelectorAll('tr').length + 1;
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${n}</td>
    <td><input type="text" placeholder="Description"></td>
    <td class="money"><input type="number" min="0" step="0.01" placeholder="0.00" oninput="calcTotals()"></td>
    <td><input type="text" placeholder="Notes"></td>
    <td><span class="row-del" onclick="delRow(this)">✕</span></td>
  `;
  document.getElementById('charge-tbody').appendChild(tr);
}

// ── Delete row ─────────────────────────────────────────────────
function delRow(btn) {
  btn.closest('tr').remove();
  calcTotals();
}

// ── Totals ─────────────────────────────────────────────────────
function calcTotals() {
  // Install lines
  let installTotal = 0;
  document.querySelectorAll('#install-tbody tr').forEach(tr => {
    const inputs = tr.querySelectorAll('input[type=number]');
    const qty = parseFloat(inputs[1]?.value) || 1;
    const unitPrice = parseFloat(inputs[2]?.value) || 0;
    installTotal += qty * unitPrice;
  });

  // Charges
  let chargeTotal = 0;
  document.querySelectorAll('#charge-tbody tr').forEach(tr => {
    const inp = tr.querySelector('input[type=number]');
    chargeTotal += parseFloat(inp?.value) || 0;
  });

  // Tax
  const taxSel = document.getElementById('tax_region').value;
  let taxRate = 0;
  if (taxSel === 'custom') {
    taxRate = parseFloat(document.getElementById('custom_tax_rate').value) || 0;
    document.getElementById('custom-tax-field').style.display = '';
  } else {
    taxRate = parseFloat(taxSel) || 0;
    document.getElementById('custom-tax-field').style.display = 'none';
  }

  const taxAmt = (installTotal + chargeTotal) * (taxRate / 100);
  const grand  = installTotal + chargeTotal + taxAmt;

  document.getElementById('install-total').textContent  = '$' + installTotal.toFixed(2);
  document.getElementById('charge-total').textContent   = '$' + chargeTotal.toFixed(2);
  document.getElementById('summary-install').textContent = '$' + installTotal.toFixed(2);
  document.getElementById('summary-charges').textContent = '$' + chargeTotal.toFixed(2);
  document.getElementById('summary-tax').textContent    = '$' + taxAmt.toFixed(2);
  document.getElementById('summary-grand').textContent  = '$' + grand.toFixed(2);
  return { installTotal, chargeTotal, taxAmt, grand };
}

// ── WO numbering ───────────────────────────────────────────────
function getNextWONumber() {
  const year = new Date().getFullYear();
  let counter = parseInt(localStorage.getItem('nfr_wo_counter') || '1000');
  counter++;
  localStorage.setItem('nfr_wo_counter', counter);
  return `WO-${year}-${String(counter).padStart(4,'0')}`;
}

function updateWODisplay(id, status) {
  document.getElementById('wo-num-display').textContent = id;
  document.getElementById('wo-id-label').textContent = id !== 'WO-' + new Date().getFullYear() + '-####' ? id : '';
  const badge = document.getElementById('status-badge');
  const labels = { draft:'Draft', pending_review:'Pending Review', approved:'Approved', signed:'Signed', complete:'Complete' };
  const classes = { draft:'badge-draft', pending_review:'badge-pending', approved:'badge-complete', signed:'badge-signed', complete:'badge-signed' };
  badge.textContent = labels[status] || status;
  badge.className = 'status-badge ' + (classes[status] || 'badge-draft');
}

// ── Collect form data ──────────────────────────────────────────
function collectWO(status) {
  const totals = calcTotals();

  const products = [];
  document.querySelectorAll('#product-tbody tr').forEach(tr => {
    const inputs = tr.querySelectorAll('input, select');
    products.push({
      room:         inputs[0]?.value || '',
      mfgr:         inputs[1]?.value || '',
      style_no:     inputs[2]?.value || '',
      product_name: inputs[3]?.value || '',
      color_no:     inputs[4]?.value || '',
      color_name:   inputs[5]?.value || '',
      floor_type:   inputs[6]?.value || '',
      width:        inputs[7]?.value || '',
      length:       inputs[8]?.value || '',
      ctns_pcs:     inputs[9]?.value || '',
      sqft_per:     inputs[10]?.value || '',
    });
  });

  const install_rows = [];
  document.querySelectorAll('#install-tbody tr').forEach(tr => {
    const sels   = tr.querySelectorAll('select');
    const numIns = tr.querySelectorAll('input[type=number]');
    const texts  = tr.querySelectorAll('input[type=text]');
    install_rows.push({
      type:       sels[0]?.value || '',
      area:       texts[0]?.value || '',
      total_sf_sy: parseFloat(numIns[0]?.value) || 0,
      unit:       sels[1]?.value || 'SF',
      qty:        parseFloat(numIns[1]?.value) || 1,
      unit_price: parseFloat(numIns[2]?.value) || 0,
      amount:     (parseFloat(numIns[1]?.value)||1) * (parseFloat(numIns[2]?.value)||0),
      notes:      texts[1]?.value || '',
    });
  });

  const charges = [];
  document.querySelectorAll('#charge-tbody tr').forEach(tr => {
    const desc = tr.querySelector('input[type=text]');
    const amt  = tr.querySelector('input[type=number]');
    const note = tr.querySelectorAll('input[type=text]')[1];
    charges.push({
      description: desc?.value || '',
      amount: parseFloat(amt?.value) || 0,
      notes: note?.value || '',
    });
  });

  const subfloor = [];
  ['sf_wood','sf_concrete','sf_gyp','sf_existing'].forEach(id => {
    const el = document.getElementById(id);
    if (el?.checked) subfloor.push(el.value);
  });

  return {
    id:              currentWO?.id || null,
    status,
    created_at:      currentWO?.created_at || new Date().toISOString(),
    updated_at:      new Date().toISOString(),
    client_name:     document.getElementById('client_name').value,
    client_addr:     document.getElementById('client_addr').value,
    client_city:     document.getElementById('client_city').value,
    client_state:    document.getElementById('client_state').value,
    client_zip:      document.getElementById('client_zip').value,
    home_phone:      document.getElementById('home_phone').value,
    job_phone:       document.getElementById('job_phone').value,
    location:        document.getElementById('location').value,
    contractor_po:   document.getElementById('contractor_po').value,
    start_date:      document.getElementById('start_date').value,
    proj_mgr:        document.getElementById('proj_mgr').value,
    tax_region:      document.getElementById('tax_region').value,
    products,
    subfloor,
    furniture:       document.querySelector('input[name=furniture]:checked')?.value || 'No',
    appliances:      document.querySelector('input[name=appliances]:checked')?.value || 'No',
    prep_material:   document.getElementById('prep_material').value,
    install_rows,
    charges,
    install_total:   totals.installTotal,
    charge_total:    totals.chargeTotal,
    tax_amount:      totals.taxAmt,
    grand_total:     totals.grand,
    payment_notes:   document.getElementById('payment_notes').value,
    internal_notes:  document.getElementById('internal_notes').value,
    dyelot:          document.getElementById('dyelot').value,
    roll_ref:        document.getElementById('roll_ref').value,
    supplier_ref:    document.getElementById('supplier_ref').value,
  };
}

// ── Save / Submit ──────────────────────────────────────────────
function saveDraft() {
  if (!currentWO?.id) {
    const id = getNextWONumber();
    currentWO = { id };
  }
  const wo = collectWO('draft');
  wo.id = currentWO.id;
  currentWO = wo;
  persistWO(wo);
  updateWODisplay(wo.id, 'draft');
  showToast('Draft saved — ' + wo.id);
  renderHistory();
}

function submitWO() {
  if (!document.getElementById('client_name').value.trim()) {
    showToast('⚠ Client name required before submitting', true);
    return;
  }
  if (!currentWO?.id) {
    currentWO = { id: getNextWONumber() };
  }
  const wo = collectWO('pending_review');
  wo.id = currentWO.id;
  currentWO = wo;
  persistWO(wo);
  updateWODisplay(wo.id, 'pending_review');
  showToast('Submitted for review — ' + wo.id);
  renderHistory();
}

function persistWO(wo) {
  const wos = JSON.parse(localStorage.getItem('nfr_wos') || '[]');
  const idx = wos.findIndex(w => w.id === wo.id);
  if (idx >= 0) wos[idx] = wo;
  else wos.unshift(wo);
  localStorage.setItem('nfr_wos', JSON.stringify(wos));
}

function markSigned() {
  if (!currentWO?.id) { showToast('Save the work order first', true); return; }
  const wos = JSON.parse(localStorage.getItem('nfr_wos') || '[]');
  const wo = wos.find(w => w.id === currentWO.id);
  if (wo) {
    wo.status = 'signed';
    wo.signed_at = new Date().toISOString();
    localStorage.setItem('nfr_wos', JSON.stringify(wos));
    currentWO = wo;
  }
  updateWODisplay(currentWO.id, 'signed');
  document.getElementById('signed-note').style.display = '';
  document.getElementById('signed-note').textContent = '✓ Signed ' + new Date().toLocaleDateString();
  showToast('Marked as signed');
  renderHistory();
}

// ── New / Load ─────────────────────────────────────────────────
function newWO() {
  if (!confirm('Start a new work order? Unsaved changes will be lost.')) return;
  currentWO = null;
  productRowCount = 0; installRowCount = 0; chargeRowCount = 0;
  document.getElementById('product-tbody').innerHTML = '';
  document.getElementById('install-tbody').innerHTML = '';
  document.getElementById('charge-tbody').innerHTML  = '';
  ['client_name','client_addr','client_city','client_state','client_zip',
   'home_phone','job_phone','location','contractor_po','start_date',
   'prep_material','payment_notes','internal_notes','dyelot','roll_ref','supplier_ref'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { if (id === 'client_state') el.value = 'OH'; else el.value = ''; }
  });
  document.getElementById('client_state').value = 'OH';
  document.getElementById('proj_mgr').value = 'Jose Martinez';
  document.getElementById('furn_no').checked = true;
  document.getElementById('app_no').checked  = true;
  ['sf_wood','sf_concrete','sf_gyp','sf_existing'].forEach(id => {
    document.getElementById(id).checked = false;
  });
  document.getElementById('signed-note').style.display = 'none';
  addProductRow(); addProductRow(); addProductRow();
  addInstallRow(); addInstallRow();
  updateWODisplay('WO-' + new Date().getFullYear() + '-####', 'draft');
  calcTotals();
}

function loadWOForEdit(id) {
  const wos = JSON.parse(localStorage.getItem('nfr_wos') || '[]');
  const wo = wos.find(w => w.id === id);
  if (!wo) { showToast('Work order not found: ' + id, true); return; }

  currentWO = wo;
  productRowCount = 0; installRowCount = 0; chargeRowCount = 0;
  document.getElementById('product-tbody').innerHTML = '';
  document.getElementById('install-tbody').innerHTML = '';
  document.getElementById('charge-tbody').innerHTML  = '';

  // Fill basic fields
  const fields = ['client_name','client_addr','client_city','client_state','client_zip',
    'home_phone','job_phone','location','contractor_po','start_date','proj_mgr',
    'prep_material','payment_notes','internal_notes','dyelot','roll_ref','supplier_ref'];
  fields.forEach(f => {
    const el = document.getElementById(f);
    if (el && wo[f] !== undefined) el.value = wo[f];
  });

  // Subfloor
  ['sf_wood','sf_concrete','sf_gyp','sf_existing'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.checked = (wo.subfloor || []).includes(el.value);
  });

  // Furniture / appliances
  if (wo.furniture === 'Yes') document.getElementById('furn_yes').checked = true;
  else document.getElementById('furn_no').checked = true;
  if (wo.appliances === 'Yes') document.getElementById('app_yes').checked = true;
  else document.getElementById('app_no').checked = true;

  // Tax
  document.getElementById('tax_region').value = wo.tax_region || '7.5';

  // Product rows
  (wo.products || []).forEach(() => addProductRow());
  const pRows = document.querySelectorAll('#product-tbody tr');
  (wo.products || []).forEach((p, i) => {
    const tr = pRows[i];
    if (!tr) return;
    const inputs = tr.querySelectorAll('input, select');
    const vals = [p.room,p.mfgr,p.style_no,p.product_name,p.color_no,p.color_name,p.floor_type,p.width,p.length,p.ctns_pcs,p.sqft_per];
    vals.forEach((v, j) => { if (inputs[j]) inputs[j].value = v || ''; });
    calcSqFt(inputs[9]);
  });

  // Install rows
  (wo.install_rows || []).forEach(() => addInstallRow());
  const iRows = document.querySelectorAll('#install-tbody tr');
  (wo.install_rows || []).forEach((r, i) => {
    const tr = iRows[i];
    if (!tr) return;
    const sels = tr.querySelectorAll('select');
    const numIns = tr.querySelectorAll('input[type=number]');
    const texts  = tr.querySelectorAll('input[type=text]');
    if (sels[0]) sels[0].value = r.type || '';
    if (texts[0]) texts[0].value = r.area || '';
    if (numIns[0]) numIns[0].value = r.total_sf_sy || '';
    if (sels[1])  sels[1].value  = r.unit || 'SF';
    if (numIns[1]) numIns[1].value = r.qty || '';
    if (numIns[2]) numIns[2].value = r.unit_price || '';
    calcInstallLine(numIns[2] || numIns[1]);
  });

  // Charges
  chargeRowCount = 0;
  document.getElementById('charge-tbody').innerHTML = '';
  (wo.charges || []).forEach(c => {
    addChargeRow();
    const rows = document.querySelectorAll('#charge-tbody tr');
    const last = rows[rows.length - 1];
    const inputs = last.querySelectorAll('input');
    if (inputs[0]) inputs[0].value = c.description || '';
    if (inputs[1]) inputs[1].value = c.amount || '';
    if (inputs[2]) inputs[2].value = c.notes || '';
  });

  // Signed note
  if (wo.signed_at) {
    document.getElementById('signed-note').style.display = '';
    document.getElementById('signed-note').textContent = '✓ Signed ' + new Date(wo.signed_at).toLocaleDateString();
  }

  updateWODisplay(wo.id, wo.status);
  calcTotals();
  showToast('Loaded ' + wo.id);
}

// ── History ────────────────────────────────────────────────────
function renderHistory() {
  const wos  = JSON.parse(localStorage.getItem('nfr_wos') || '[]');
  const tbody = document.getElementById('history-tbody');
  if (!wos.length) {
    tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;color:var(--muted);padding:20px">No work orders saved yet.</td></tr>';
    return;
  }
  const statusColor = { draft:'var(--muted)', pending_review:'var(--warn)', approved:'var(--primary)', signed:'var(--success)', complete:'var(--success)' };
  tbody.innerHTML = wos.map(w => `
    <tr class="history-row">
      <td><strong>${w.id}</strong></td>
      <td>${escH(w.client_name || '—')}</td>
      <td>${escH(w.location || w.client_addr || '—')}</td>
      <td>${w.start_date || '—'}</td>
      <td style="text-align:right;font-weight:700">$${(w.grand_total || 0).toFixed(2)}</td>
      <td style="color:${statusColor[w.status]||'var(--muted)'};font-weight:700;text-transform:capitalize">${(w.status||'').replace('_',' ')}</td>
      <td>
        <span class="action-link" onclick="loadWOForEdit('${w.id}')">Edit</span>
        <span class="action-link" onclick="confirmDelete('${w.id}')">Delete</span>
      </td>
    </tr>
  `).join('');
}

function confirmDelete(id) {
  if (!confirm('Delete work order ' + id + '?')) return;
  const wos = JSON.parse(localStorage.getItem('nfr_wos') || '[]');
  localStorage.setItem('nfr_wos', JSON.stringify(wos.filter(w => w.id !== id)));
  if (currentWO?.id === id) newWO();
  else renderHistory();
  showToast('Deleted ' + id);
}

// ── Print ──────────────────────────────────────────────────────
function printWO() { window.print(); }

// ── Google Maps autocomplete ───────────────────────────────────
let mapsReady = false;
function initMapsIfReady() {
  if (mapsReady) return;
  const apiKey = localStorage.getItem('nfr_gmaps_api_key');
  if (!apiKey || typeof google !== 'undefined') return;
  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initAutocomplete`;
  script.async = true;
  document.head.appendChild(script);
}
function initAutocomplete() {
  mapsReady = true;
  const input = document.getElementById('client_addr');
  if (!input || typeof google === 'undefined') return;
  const ac = new google.maps.places.Autocomplete(input, { types: ['address'], componentRestrictions: { country: 'us' } });
  ac.addListener('place_changed', () => {
    const place = ac.getPlace();
    (place.address_components || []).forEach(comp => {
      if (comp.types.includes('locality')) document.getElementById('client_city').value = comp.long_name;
      if (comp.types.includes('administrative_area_level_1')) document.getElementById('client_state').value = comp.short_name;
      if (comp.types.includes('postal_code')) document.getElementById('client_zip').value = comp.long_name;
    });
  });
}

// ── Utilities ─────────────────────────────────────────────────
function escH(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

function showToast(msg, err) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.style.background = err ? '#DC2626' : '#1F2937';
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// Init maps if key already stored
window.addEventListener('load', () => {
  const apiKey = localStorage.getItem('nfr_gmaps_api_key');
  if (apiKey) {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initAutocomplete`;
    script.async = true;
    document.head.appendChild(script);
  }
  calcTotals();
});
</script>
</body>
</html>
```

---

## `proposal-calculator.html` <a id="proposal-calculator-html"></a>

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>NFR Proposal Calculator</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Lato:wght@300;400;700&display=swap');
  :root {
    --primary:#3A6B5F; --accent:#E07B54; --light:#F2F8F6;
    --border:#A8CEBF; --muted:#6B7C76; --text:#2D2D2D;
    --gold:#D4A054; --danger:#C0392B; --success:#27AE60; --warn:#E67E22;
  }
  *{margin:0;padding:0;box-sizing:border-box;}
  body{font-family:'Lato',sans-serif;font-size:10pt;color:var(--text);background:#f0f4f3;}
  .app{max-width:1340px;margin:0 auto;padding:20px 18px;}

  /* TOP BAR */
  .top-bar{display:flex;justify-content:space-between;align-items:center;
    background:var(--primary);color:#fff;padding:13px 22px;border-radius:8px;margin-bottom:18px;}
  .brand{font-family:'Playfair Display',serif;font-size:14pt;}
  .brand span{font-family:'Lato',sans-serif;font-size:7.5pt;letter-spacing:2px;text-transform:uppercase;opacity:.7;display:block;margin-top:2px;}
  .oh-pill{background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.3);
    border-radius:20px;padding:6px 18px;font-size:9pt;text-align:right;line-height:1.7;}
  .oh-pill strong{font-size:12pt;}

  /* LAYOUT */
  .layout{display:grid;grid-template-columns:310px 1fr;gap:16px;align-items:start;}

  /* PANELS */
  .panel{background:#fff;border:1px solid var(--border);border-radius:8px;padding:16px 18px;margin-bottom:14px;}
  .p-title{font-family:'Playfair Display',serif;font-size:10.5pt;color:var(--primary);
    border-bottom:2px solid var(--border);padding-bottom:7px;margin-bottom:12px;}

  /* FIELDS */
  .f{margin-bottom:10px;}
  .f label{display:block;font-size:7.5pt;font-weight:700;color:var(--primary);text-transform:uppercase;letter-spacing:.4px;margin-bottom:3px;}
  .f input,.f select{width:100%;border:1px solid var(--border);border-radius:4px;
    padding:6px 9px;font-family:'Lato',sans-serif;font-size:9.5pt;color:var(--text);outline:none;}
  .f input:focus,.f select:focus{border-color:var(--primary);}
  .row2{display:flex;gap:8px;}.row2 .f{flex:1;}

  /* MARKUP GRID */
  .mu-grid{display:grid;grid-template-columns:1fr 1fr;gap:7px;}
  .mu-item{display:flex;flex-direction:column;gap:3px;}
  .mu-item label{font-size:7pt;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.3px;}
  .mu-item input{border:1px solid #dde8e3;border-radius:3px;padding:4px 7px;font-size:9pt;text-align:right;outline:none;width:100%;}
  .mu-item input:focus{border-color:var(--primary);}
  .mu-note{font-size:7.5pt;color:var(--muted);margin-top:9px;line-height:1.6;font-style:italic;}
  .toggle-link{font-size:8.5pt;color:var(--primary);cursor:pointer;text-decoration:underline;margin-bottom:8px;display:inline-block;}
  .collapsible{overflow:hidden;transition:max-height .3s ease;}

  /* LABOR RATE BOX */
  .rate-box{background:#e8f5f0;border:1px solid var(--border);border-radius:6px;padding:10px 12px;margin-bottom:14px;font-size:9pt;}
  .rate-box strong{color:var(--primary);}
  .rate-box .rate-row{display:flex;align-items:center;gap:10px;margin-top:6px;flex-wrap:wrap;}
  .rate-box .rate-item{display:flex;flex-direction:column;gap:2px;}
  .rate-box .rate-item label{font-size:7pt;font-weight:700;color:var(--muted);text-transform:uppercase;}
  .rate-box .rate-item input{border:1px solid var(--border);border-radius:4px;padding:5px 9px;
    font-size:10pt;font-weight:700;width:110px;outline:none;text-align:right;}
  .rate-box .rate-item input:focus{border-color:var(--primary);}
  .rate-box .rate-tag{background:var(--primary);color:#fff;padding:4px 10px;border-radius:12px;font-size:8pt;font-weight:700;white-space:nowrap;}
  .rate-box .rate-tag.warn{background:var(--accent);}

  /* LINE ITEMS TABLE */
  .tbl-wrap{overflow-x:auto;}
  table.lt{width:100%;border-collapse:collapse;font-size:8.5pt;}
  table.lt thead th{background:var(--primary);color:#fff;padding:7px 7px;text-align:left;
    font-size:7.5pt;font-weight:700;letter-spacing:.3px;white-space:nowrap;}
  table.lt thead th.r{text-align:right;}
  table.lt thead th.labor-col{background:#2d5448;}
  table.lt thead th.cost-col{background:#4a7a6e;}
  table.lt tbody td{border-bottom:1px solid #e5ede9;padding:0;vertical-align:middle;}
  table.lt tbody tr:nth-child(even) td{background:#fafcfb;}
  table.lt tbody tr:hover td{background:#f0f8f5;}
  table.lt td input{width:100%;border:none;background:transparent;
    padding:6px 7px;font-family:'Lato',sans-serif;font-size:8.5pt;color:var(--text);outline:none;text-align:right;}
  table.lt td input.desc{text-align:left;}
  table.lt td input:focus{background:#e8f5f0;}
  table.lt td.lt-val{text-align:right;padding:6px 8px;font-weight:700;color:var(--primary);white-space:nowrap;font-size:9pt;}
  table.lt td.lt-num{text-align:right;padding:6px 7px;font-size:8pt;color:var(--muted);}
  table.lt td.lt-profit{text-align:right;padding:6px 8px;font-size:8.5pt;font-weight:700;}
  table.lt tfoot td{border-top:2px solid var(--primary);padding:6px 8px;font-size:8pt;font-weight:700;}
  table.lt tfoot td.r{text-align:right;}
  .del-btn{background:none;border:none;color:#ccc;cursor:pointer;font-size:13pt;padding:0 5px;line-height:1;}
  .del-btn:hover{color:var(--danger);}
  .add-row-btn{background:var(--light);border:1px dashed var(--border);color:var(--primary);
    padding:7px 16px;border-radius:4px;cursor:pointer;font-size:9pt;font-weight:700;margin-top:8px;width:100%;}
  .add-row-btn:hover{background:var(--border);}

  /* TOTALS */
  .totals-split{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:14px;}
  .t-tbl{width:100%;font-size:9pt;border-collapse:collapse;}
  .t-tbl tr td{padding:5px 8px;}
  .t-tbl tr td:last-child{text-align:right;font-weight:700;}
  .t-tbl .sub-row td{border-top:1px solid var(--border);padding-top:8px;}
  .t-tbl .grand-row td{border-top:2px solid var(--primary);font-size:12pt;color:var(--primary);padding-top:9px;}
  .t-tbl .gp-row td{color:var(--success);font-weight:700;}
  .t-tbl .muted td{color:var(--muted);font-size:8.5pt;}
  .t-tbl .mu-row td{color:var(--accent);}
  .t-tbl .oh-row td{color:var(--muted);font-size:8.5pt;}

  /* BREAK-EVEN */
  .be-box{background:#fff;border:2px solid var(--primary);border-radius:8px;padding:18px 20px;margin-top:14px;}
  .be-title{font-family:'Playfair Display',serif;font-size:12pt;color:var(--primary);margin-bottom:13px;}
  .be-cards{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;}
  .be-card{background:var(--light);border:1px solid var(--border);border-radius:6px;padding:11px 12px;text-align:center;}
  .be-card .lbl{font-size:7pt;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.4px;margin-bottom:5px;}
  .be-card .val{font-size:17pt;font-weight:700;color:var(--primary);line-height:1;}
  .be-card .sub{font-size:7.5pt;color:var(--muted);margin-top:3px;}
  .be-card.green .val{color:var(--success);}
  .be-card.warn .val{color:var(--warn);}
  .be-card.red .val{color:var(--danger);}
  .bar-wrap{margin-top:14px;}
  .bar-labels{display:flex;justify-content:space-between;font-size:8pt;color:var(--muted);margin-bottom:5px;}
  .bar{height:12px;background:#e0ece8;border-radius:6px;overflow:hidden;}
  .bar-fill{height:100%;border-radius:6px;transition:width .4s;min-width:2px;}
  .be-msg{margin-top:11px;background:#f8faf9;border:1px solid var(--border);
    border-radius:4px;padding:10px 13px;font-size:8.5pt;color:var(--text);line-height:1.7;}

  /* PAYMENT */
  .pay-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:10px;}
  .pay-card{background:var(--light);border:1px solid var(--border);border-radius:6px;padding:12px;text-align:center;}
  .pay-card .pct{font-size:22pt;font-weight:700;color:var(--primary);line-height:1;}
  .pay-card .amt{font-size:13pt;font-weight:700;color:var(--accent);margin-top:3px;}
  .pay-card .lbl{font-size:7.5pt;color:var(--muted);margin-top:4px;line-height:1.5;}

  /* BUTTONS */
  .actions{display:flex;gap:10px;margin-top:14px;flex-wrap:wrap;}
  .btn{padding:10px 22px;border-radius:4px;font-family:'Lato',sans-serif;font-size:10pt;font-weight:700;cursor:pointer;border:none;}
  .btn-p{background:var(--primary);color:#fff;}.btn-p:hover{background:#2d5448;}
  .btn-o{background:#fff;color:var(--primary);border:2px solid var(--primary);}.btn-o:hover{background:var(--light);}
  .btn-a{background:var(--accent);color:#fff;}.btn-a:hover{background:#c56840;}

  /* JORGE HELPER NOTE */
  .jorge-note{background:#fff8e8;border:1px solid var(--gold);border-radius:5px;
    padding:9px 12px;font-size:8.5pt;color:#7a5800;margin-bottom:12px;line-height:1.6;}

  /* OVERHEAD BUILDER */
  .oh-builder{border:1px solid var(--border);border-radius:6px;overflow:hidden;margin-bottom:10px;}
  .oh-line{display:flex;align-items:center;justify-content:space-between;padding:5px 10px;border-bottom:1px solid #e8f0ed;}
  .oh-line:last-child{border-bottom:none;}
  .oh-line:nth-child(even){background:#fafcfb;}
  .oh-line label{font-size:8pt;color:var(--text);flex:1;}
  .oh-line input{width:90px;border:1px solid var(--border);border-radius:3px;padding:3px 7px;
    font-size:9pt;text-align:right;outline:none;font-family:'Lato',sans-serif;}
  .oh-line input:focus{border-color:var(--primary);}
  .oh-total-bar{background:var(--primary);color:#fff;display:flex;justify-content:space-between;
    align-items:center;padding:8px 10px;border-radius:4px;margin-bottom:10px;font-size:9pt;}
  .oh-total-bar strong{font-size:11pt;}
  .oh-result{background:#e8f5f0;border:1px solid var(--border);border-radius:5px;
    padding:9px 12px;font-size:8.5pt;color:var(--text);line-height:1.8;margin-top:10px;}
  .oh-result .oh-row-item{display:flex;justify-content:space-between;}
  .oh-result .oh-row-item span:last-child{font-weight:700;color:var(--primary);}
  .oh-result .warn-row span{color:var(--danger)!important;}
  /* JORGE RATE ENGINE */
  .jorge-engine{background:var(--primary);color:#fff;border-radius:8px;padding:14px 16px;margin-bottom:12px;}
  .jorge-engine .engine-title{font-size:8pt;text-transform:uppercase;letter-spacing:1px;opacity:.7;margin-bottom:10px;}
  .engine-formula{display:flex;align-items:center;gap:8px;flex-wrap:wrap;}
  .engine-block{display:flex;flex-direction:column;align-items:center;gap:3px;}
  .engine-block label{font-size:6.5pt;text-transform:uppercase;letter-spacing:.4px;opacity:.7;}
  .engine-block .eb-val{font-size:13pt;font-weight:700;line-height:1;}
  .engine-block input{background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.3);
    color:#fff;border-radius:4px;padding:4px 8px;font-size:12pt;font-weight:700;width:90px;text-align:center;outline:none;}
  .engine-block input::placeholder{opacity:.5;}
  .engine-div{font-size:18pt;font-weight:300;opacity:.6;}
  .engine-result{background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.25);
    border-radius:6px;padding:10px 14px;text-align:center;min-width:110px;}
  .engine-result label{font-size:6.5pt;text-transform:uppercase;letter-spacing:.4px;opacity:.7;display:block;margin-bottom:4px;}
  .engine-result .er-rate{font-size:20pt;font-weight:700;line-height:1;}
  .engine-result .er-sub{font-size:7pt;opacity:.7;margin-top:3px;}
  .engine-status{margin-top:10px;font-size:8pt;background:rgba(255,255,255,.1);
    border-radius:4px;padding:7px 10px;line-height:1.6;}

  @media print{
    body{background:#fff;}
    .app{padding:0;max-width:100%;}
    .no-print{display:none!important;}
    .layout{grid-template-columns:1fr;}
    .be-cards{grid-template-columns:repeat(4,1fr);}
    table.lt td input{padding:3px 5px;}
  }

  /* ── PO INBOX ── */
  .po-inbox-panel{border:2px solid var(--warn);border-radius:8px;background:#fff;
    padding:16px 18px;margin-bottom:14px;display:none;}
  .po-inbox-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;}
  .po-inbox-title{font-family:'Playfair Display',serif;font-size:10.5pt;color:var(--warn);display:flex;align-items:center;gap:8px;}
  .po-count-badge{background:var(--warn);color:#fff;border-radius:12px;padding:2px 10px;
    font-size:8.5pt;font-family:'Lato',sans-serif;font-weight:700;}
  .po-inbox-row{display:flex;align-items:center;gap:6px;padding:8px 10px;border-radius:4px;
    background:var(--light);margin-bottom:6px;cursor:pointer;border:1px solid var(--border);}
  .po-inbox-row:hover{background:#e0ece8;border-color:var(--primary);}
  .pi-col{flex:1;min-width:0;}
  .pi-label{font-size:7pt;color:var(--muted);text-transform:uppercase;font-weight:700;letter-spacing:.3px;}
  .pi-val{font-weight:700;color:var(--primary);font-size:8.5pt;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
  .review-btn{background:var(--warn);color:#fff;border:none;border-radius:4px;
    padding:5px 14px;font-size:8.5pt;font-weight:700;cursor:pointer;white-space:nowrap;flex-shrink:0;}
  .review-btn:hover{background:#c56b10;}

  /* PO BADGE IN TOP BAR */
  .po-badge-pill{background:rgba(230,126,34,.25);border:1px solid rgba(230,126,34,.5);
    border-radius:20px;padding:6px 14px;font-size:8.5pt;cursor:pointer;color:#fff;
    white-space:nowrap;margin-left:10px;transition:background .2s;}
  .po-badge-pill:hover{background:rgba(230,126,34,.4);}
  .po-badge-pill.empty{opacity:.45;}

  /* ── REVIEW MODAL ── */
  .po-modal{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.55);
    z-index:1000;display:none;align-items:flex-start;justify-content:center;
    overflow-y:auto;padding:20px;}
  .po-modal.open{display:flex;}
  .po-modal-inner{background:#fff;border-radius:8px;width:100%;max-width:1100px;
    padding:24px 28px;position:relative;margin:auto;}
  .po-modal-close{position:absolute;top:10px;right:14px;background:none;border:none;
    font-size:18pt;cursor:pointer;color:var(--muted);line-height:1;}
  .po-modal-close:hover{color:var(--danger);}
  .po-modal-title{font-family:'Playfair Display',serif;font-size:14pt;color:var(--primary);margin-bottom:16px;padding-right:30px;}
  .pm-info-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:16px;}
  .pm-info-cell{background:var(--light);border:1px solid var(--border);border-radius:4px;padding:9px 12px;}
  .pm-info-cell label{font-size:7pt;color:var(--muted);text-transform:uppercase;font-weight:700;
    letter-spacing:.3px;display:block;margin-bottom:3px;}
  .pm-info-cell .pmv{font-size:10pt;font-weight:700;}
  .pm-section{font-family:'Playfair Display',serif;font-size:10.5pt;color:var(--primary);
    border-bottom:1px solid var(--border);padding-bottom:6px;margin:16px 0 10px;}
  table.pm-scope{width:100%;border-collapse:collapse;font-size:8pt;min-width:800px;}
  table.pm-scope th{background:var(--primary);color:#fff;padding:6px 5px;text-align:left;
    font-size:7.5pt;font-weight:700;white-space:nowrap;}
  table.pm-scope th.r{text-align:right;}
  table.pm-scope td{border-bottom:1px solid #e5ede9;padding:6px 5px;vertical-align:top;}
  table.pm-scope tr:nth-child(even) td{background:#fafcfb;}
  table.pm-scope td.r{text-align:right;}
  .pm-cost-summary{display:flex;gap:14px;flex-wrap:wrap;background:var(--light);
    border:1px solid var(--border);border-radius:6px;padding:12px 16px;margin-bottom:14px;}
  .pm-cost-item{display:flex;flex-direction:column;gap:2px;min-width:100px;}
  .pm-cost-item label{font-size:7pt;color:var(--muted);text-transform:uppercase;font-weight:700;letter-spacing:.3px;}
  .pm-cost-item .pmcv{font-size:12pt;font-weight:700;color:var(--primary);}
  .pm-cost-item .pmcv.grand{font-size:16pt;color:var(--accent);}
  .pm-notes-area{width:100%;border:1px solid var(--border);border-radius:4px;padding:10px 12px;
    font-family:'Lato',sans-serif;font-size:9.5pt;outline:none;min-height:70px;resize:vertical;margin-bottom:12px;}
  .pm-notes-area:focus{border-color:var(--primary);}
  .pm-actions{display:flex;gap:12px;flex-wrap:wrap;align-items:center;}
  .btn-approve{background:var(--success);color:#fff;border:none;border-radius:4px;
    padding:11px 26px;font-family:'Lato',sans-serif;font-size:10.5pt;font-weight:700;cursor:pointer;}
  .btn-approve:hover{background:#1e8449;}
  .btn-changes{background:#fff;color:var(--danger);border:2px solid var(--danger);border-radius:4px;
    padding:10px 22px;font-family:'Lato',sans-serif;font-size:10.5pt;font-weight:700;cursor:pointer;}
  .btn-changes:hover{background:#fdf0ee;}
</style>
<script src="js/auth.js"></script>
<script>NFRAuth.requireAuth('calculator');</script>
</head>
<body>
<div class="app">

<!-- ERROR DISPLAY (hidden unless JS error occurs) -->
<div id="calc-error" style="display:none;background:#c0392b;color:#fff;padding:10px 18px;border-radius:6px;margin-bottom:10px;font-size:9pt;font-family:monospace;"></div>

<!-- TOP BAR -->
<div class="top-bar no-print">
  <div class="brand">Natures Friend &amp; Resources
    <span>Proposal Calculator — Internal Use Only</span>
  </div>
  <div style="display:flex;align-items:center;gap:0;">
    <div class="oh-pill">
      Monthly Overhead <strong id="oh-display">$13,555</strong><br>
      IS Salary Excluded &nbsp;·&nbsp; NFR Must Cover This
    </div>
    <button class="po-badge-pill empty no-print" id="po-badge-pill" onclick="scrollToPOInbox()">📋 PO Inbox</button>
  </div>
</div>

<div class="layout">

<!-- LEFT: Project Info + Settings -->
<div>

  <div class="panel">
    <div class="p-title">Project Information</div>
    <div class="f"><label>Client Name</label><input type="text" id="client-name" placeholder="Full name or company"></div>
    <div class="f"><label>Property Address</label><input type="text" id="client-addr" placeholder="Street address"></div>
    <div class="row2">
      <div class="f"><label>City</label><input type="text" id="client-city" placeholder="Columbus"></div>
      <div class="f" style="max-width:80px;"><label>Zip</label><input type="text" id="client-zip" placeholder="43228"></div>
    </div>
    <div class="row2">
      <div class="f"><label>Proposal Date</label><input type="date" id="prop-date"></div>
      <div class="f"><label>Valid Until</label><input type="date" id="prop-valid"></div>
    </div>
    <div class="row2">
      <div class="f"><label>Project Type</label>
        <select id="proj-type">
          <option>Kitchen Remodel</option><option>Bathroom Remodel</option>
          <option>Full Remodel</option><option>Paint / Drywall</option>
          <option>Cabinets</option><option>Demo</option><option>Other</option>
        </select>
      </div>
      <div class="f"><label>Tax Region</label>
        <select id="tax-region" onchange="taxRegionChange()">
          <option value="7.5">Columbus (7.5%)</option>
          <option value="8.0">Dublin (8.0%)</option>
          <option value="custom">Custom</option>
        </select>
      </div>
    </div>
    <div class="f" id="custom-tax-wrap" style="display:none;"><label>Custom Tax %</label>
      <input type="number" id="custom-tax" value="7.5" step="0.1" oninput="calc()">
    </div>
    <div class="f"><label>Project Manager</label><input type="text" id="proj-mgr" placeholder="Jose Martinez"></div>
  </div>

  <!-- JORGE RATE ENGINE -->
  <div class="panel">
    <div class="p-title">Jorge's Rate — The Overhead Engine</div>
    <p style="font-size:8pt;color:var(--muted);margin-bottom:10px;line-height:1.5;">
      Maria and Scott are overhead — they don't bill clients. <strong>Jorge is the only worker who generates revenue.</strong> His hourly rate must carry the entire monthly overhead across all 3 departments. Set it here once.
    </p>

    <div class="jorge-engine">
      <div class="engine-title">Required Rate Formula</div>
      <div class="engine-formula">
        <div class="engine-block">
          <label>Monthly Overhead</label>
          <div class="eb-val" id="jrf-oh">$13,555</div>
        </div>
        <div class="engine-div">÷</div>
        <div class="engine-block">
          <label>Jorge's Hrs/Month</label>
          <input type="number" id="oh-bill-hrs" value="160" min="1" step="8" oninput="calc()">
        </div>
        <div class="engine-div">=</div>
        <div class="engine-result">
          <label>Required Rate</label>
          <div class="er-rate" id="jorge-req-rate">$84.72</div>
          <div class="er-sub">/hr to break even</div>
        </div>
      </div>
      <div class="engine-status" id="engine-status">
        Set Jorge's charge rate to <strong id="es-rate">$84.72/hr</strong> and every hour he works, one hour of overhead is paid.
      </div>
    </div>

    <div class="rate-box">
      <strong>Charge Rates — Used in Scope Table Below</strong>
      <div class="rate-row">
        <div class="rate-item">
          <label>Jorge — charge $/hr</label>
          <input type="number" id="default-bill-rate" value="85" min="0" step="1" oninput="calc()">
        </div>
        <div class="rate-item">
          <label>Helper — cost $/hr</label>
          <input type="number" id="default-cost-rate" value="25" min="0" step="1" oninput="calc()">
        </div>
        <div>
          <div style="font-size:7pt;color:var(--muted);text-transform:uppercase;font-weight:700;letter-spacing:.3px;margin-bottom:3px;">Profit/hr</div>
          <span class="rate-tag" id="bank-rate">$0/hr</span>
        </div>
      </div>
      <div id="rate-status" style="font-size:8pt;margin-top:8px;line-height:1.6;"></div>
    </div>

    <div class="jorge-note" style="margin-top:10px;margin-bottom:0;">
      <strong>Helper hours = bonus profit</strong> — overhead is already covered by Jorge's rate. Whatever you make above helper cost ($25/hr) is extra.<br>
      <strong>Jorge manages 1099 subs?</strong> Still charge his daily rate. The sub cost goes in the Sub $ column with 30% markup — all profit on top.
    </div>
  </div>

  <!-- MONTHLY OVERHEAD BUILDER -->
  <div class="panel">
    <div class="p-title">Your Monthly Overhead — Actual Costs</div>
    <p style="font-size:8pt;color:var(--muted);margin-bottom:10px;line-height:1.5;">Enter your real monthly costs. The calculator will figure out what % to add to every job so these bills get paid — without touching your IS salary.</p>
    <div class="oh-builder">
      <div class="oh-line"><label>Team Labor (wages + payroll taxes)</label><input type="number" id="oh-labor" value="11520" min="0" step="10" oninput="calc()"></div>
      <div class="oh-line"><label>Payroll Service</label><input type="number" id="oh-payroll" value="450" min="0" step="10" oninput="calc()"></div>
      <div class="oh-line"><label>Worker's Comp / Benefits</label><input type="number" id="oh-wc" value="0" min="0" step="10" oninput="calc()"></div>
      <div class="oh-line"><label>Phones &amp; Tablets</label><input type="number" id="oh-phones" value="110" min="0" step="5" oninput="calc()"></div>
      <div class="oh-line"><label>Internet</label><input type="number" id="oh-internet" value="75" min="0" step="5" oninput="calc()"></div>
      <div class="oh-line"><label>Vehicle Fuel (2 trucks)</label><input type="number" id="oh-fuel" value="1000" min="0" step="50" oninput="calc()"></div>
      <div class="oh-line"><label>General Liability Insurance</label><input type="number" id="oh-insurance" value="0" min="0" step="25" oninput="calc()"></div>
      <div class="oh-line"><label>Food / Job Site Meals</label><input type="number" id="oh-food" value="400" min="0" step="50" oninput="calc()"></div>
      <div class="oh-line"><label>Other (tools, misc)</label><input type="number" id="oh-other" value="0" min="0" step="50" oninput="calc()"></div>
    </div>
    <div class="oh-total-bar">
      <span>Total Monthly Overhead</span>
      <strong id="oh-total-val">$13,555</strong>
    </div>
    <p style="font-size:8pt;color:var(--muted);margin-top:6px;line-height:1.5;">
      This total flows into Jorge's Rate above. Update any line and his required rate recalculates instantly.
    </p>
  </div>

  <!-- PROJECT MARKUPS -->
  <div class="panel">
    <div class="p-title">Project Markups</div>
    <p style="font-size:8pt;color:var(--muted);margin-bottom:10px;line-height:1.5;">Applied on top of cost — these cover your risk, scheduling, and project management on top of overhead.</p>
    <div class="mu-grid">
      <div class="mu-item"><label>Materials &amp; Tools %</label><input type="number" id="m-mat" value="24" min="0" step="1" oninput="calc()"></div>
      <div class="mu-item"><label>Sub-contractor %</label><input type="number" id="m-sub" value="30" min="0" step="1" oninput="calc()"></div>
      <div class="mu-item"><label>Equipment %</label><input type="number" id="m-eq" value="15" min="0" step="1" oninput="calc()"></div>
      <div class="mu-item"><label>Commission %</label><input type="number" id="m-comm" value="0" min="0" step="1" oninput="calc()"></div>
    </div>
    <p class="mu-note">Overhead recovery is calculated automatically from your monthly costs above — no guessing percentages.</p>
  </div>

</div><!-- end left -->

<!-- RIGHT: Line Items + Results -->
<div>

  <!-- AGREEMENT INBOX PANEL -->
  <div class="po-inbox-panel no-print" id="po-inbox-panel">
    <div class="po-inbox-header">
      <div class="po-inbox-title">
        📋 Agreements Awaiting Your Review
        <span class="po-count-badge" id="po-count-badge">0</span>
      </div>
      <span style="font-size:8pt;color:var(--muted);">Review scope · approve · send to client</span>
    </div>
    <div id="po-inbox-list"></div>
  </div>

  <div class="panel">
    <div class="p-title">Scope of Work — Line Items</div>
    <div class="tbl-wrap">
      <table class="lt" id="lt">
        <thead>
          <tr>
            <th style="width:2%;">#</th>
            <th style="width:18%;">Scope Description</th>
            <th class="r labor-col" style="width:4%;">Men</th>
            <th class="r labor-col" style="width:4%;">Est Hrs</th>
            <th class="r" style="width:4%;background:#5a7f73;" title="Actual hours worked — fill in as job progresses">Act Hrs</th>
            <th class="r labor-col" style="width:6%;">Charge $/hr</th>
            <th class="r cost-col"  style="width:6%;">Cost $/hr</th>
            <th class="r labor-col" style="width:7%;">Labor Rev.</th>
            <th class="r cost-col"  style="width:6%;">Labor Profit</th>
            <th class="r" style="width:7%;">Materials $</th>
            <th class="r" style="width:7%;">Sub $</th>
            <th class="r" style="width:6%;">Equip $</th>
            <th class="r" style="width:8%;">Line Total</th>
            <th style="width:2%;"></th>
          </tr>
        </thead>
        <tbody id="lt-body"></tbody>
        <tfoot>
          <tr>
            <td colspan="7" style="color:var(--muted);font-size:7.5pt;padding-left:8px;">TOTALS</td>
            <td class="r" id="ft-labrev">$0</td>
            <td class="r" id="ft-labprofit" style="color:var(--success);">$0</td>
            <td class="r" id="ft-mat">$0</td>
            <td class="r" id="ft-sub">$0</td>
            <td class="r" id="ft-eq">$0</td>
            <td class="r" id="ft-total" style="color:var(--primary);">$0</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
    <button class="add-row-btn no-print" onclick="addRow()">+ Add Scope Item</button>
  </div>

  <!-- JOB PROGRESS TRACKER -->
  <div class="panel" style="border-color:var(--gold);">
    <div class="p-title" style="border-color:var(--gold);">Job Progress — Actual vs. Estimated Hours</div>
    <div id="prog-empty" style="font-size:8.5pt;color:var(--muted);font-style:italic;padding:4px 0;">
      Fill in the <strong>Act Hrs</strong> column above as work progresses. If you finish in fewer hours than estimated on a fixed-price job, the saved labor cost becomes extra profit. If you go over, you can see exactly how much it's eating into your margin.
    </div>
    <div id="prog-body" style="display:none;">
      <div class="be-cards" style="grid-template-columns:repeat(3,1fr);margin-bottom:12px;">
        <div class="be-card" id="pg-c-var">
          <div class="lbl">Hours Variance</div><div class="val" id="pg-var">0</div>
          <div class="sub" id="pg-var-sub">—</div>
        </div>
        <div class="be-card" id="pg-c-saved">
          <div class="lbl" id="pg-saved-lbl">Labor Cost Saved</div><div class="val" id="pg-saved">$0</div>
          <div class="sub">vs. estimate</div>
        </div>
        <div class="be-card">
          <div class="lbl">Adjusted Gross Margin</div><div class="val" id="pg-adj-margin">0%</div>
          <div class="sub">after actual hours</div>
        </div>
      </div>
      <div class="bar-wrap">
        <div class="bar-labels"><span>Hours Burned</span><span id="pg-bar-lbl">0 of 0 hrs</span></div>
        <div class="bar"><div class="bar-fill" id="pg-bar-fill" style="width:0%;background:var(--success);"></div></div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:12px;">
        <table class="t-tbl">
          <tr><td colspan="2" style="font-size:7.5pt;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.4px;padding-bottom:5px;">Hour Count</td></tr>
          <tr class="muted"><td>Estimated Man-Hours</td><td id="pg-est">0</td></tr>
          <tr class="muted"><td>Actual Man-Hours</td><td id="pg-act">0</td></tr>
        </table>
        <table class="t-tbl">
          <tr><td colspan="2" style="font-size:7.5pt;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.4px;padding-bottom:5px;">P&amp;L Impact (Fixed Price)</td></tr>
          <tr class="muted"><td>Est. Labor Cost</td><td id="pg-est-cost">$0.00</td></tr>
          <tr class="muted"><td>Actual Labor Cost</td><td id="pg-act-cost">$0.00</td></tr>
          <tr><td>Estimated GP</td><td id="pg-est-gp">$0.00</td></tr>
          <tr><td><strong>Adjusted GP</strong></td><td id="pg-adj-gp" style="font-weight:700;">$0.00</td></tr>
        </table>
      </div>
      <div class="be-msg" id="pg-msg" style="margin-top:10px;"></div>
    </div>
  </div>

  <!-- TOTALS BREAKDOWN -->
  <div class="panel">
    <div class="p-title">Cost Breakdown &amp; Pricing</div>
    <div class="totals-split">
      <table class="t-tbl">
        <tr><td colspan="2" style="font-size:7.5pt;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.4px;padding-bottom:5px;">What You're Billing</td></tr>
        <tr><td>Labor Revenue</td><td id="t-labrev">$0.00</td></tr>
        <tr><td>Materials (cost + <span id="lb-mat">10</span>%)</td><td id="t-mat-billed">$0.00</td></tr>
        <tr><td>Sub-contractors (cost + <span id="lb-sub">30</span>%)</td><td id="t-sub-billed">$0.00</td></tr>
        <tr><td>Equipment (cost + <span id="lb-eq">15</span>%)</td><td id="t-eq-billed">$0.00</td></tr>
        <tr class="sub-row"><td style="font-weight:700;">Subtotal</td><td id="t-subtotal">$0.00</td></tr>
        <tr style="height:6px;"><td colspan="2"></td></tr>
        <tr><td colspan="2" style="font-size:7.5pt;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.4px;padding-bottom:5px;">Added to Client Price</td></tr>
        <tr class="oh-row"><td style="font-size:7.5pt;color:var(--muted);">Overhead baked into Jorge's rate — no separate load</td><td style="font-size:7.5pt;color:var(--muted);">—</td></tr>
        <tr class="oh-row"><td>Commission (<span id="lb-comm">0</span>%)</td><td id="t-comm">$0.00</td></tr>
        <tr class="oh-row" style="border-top:1px dashed var(--border);"><td><strong>Sales Tax on Materials (<span id="lb-taxrate">7.5</span>%)</strong></td><td id="t-tax" style="font-weight:700;">$0.00</td></tr>
      </table>
      <table class="t-tbl">
        <tr><td colspan="2" style="font-size:7.5pt;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.4px;padding-bottom:5px;">What It Cost You</td></tr>
        <tr class="muted"><td>Labor Cost (workers paid)</td><td id="t-labcost">$0.00</td></tr>
        <tr class="muted"><td>Materials (at cost)</td><td id="t-matcost">$0.00</td></tr>
        <tr class="muted"><td>Sub-contractors (at cost)</td><td id="t-subcost">$0.00</td></tr>
        <tr class="muted"><td>Equipment (at cost)</td><td id="t-eqcost">$0.00</td></tr>
        <tr class="sub-row muted"><td>Total Direct Cost</td><td id="t-directcost">$0.00</td></tr>
        <tr style="height:6px;"><td colspan="2"></td></tr>
        <tr><td colspan="2" style="font-size:7.5pt;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.4px;padding-bottom:5px;">Your Result</td></tr>
        <tr class="grand-row"><td>Grand Total (client pays)</td><td id="t-grand">$0.00</td></tr>
        <tr class="gp-row"><td>Gross Profit</td><td id="t-gp">$0.00</td></tr>
        <tr class="muted"><td>Gross Margin</td><td id="t-margin">0.0%</td></tr>
        <tr style="height:6px;"><td colspan="2"></td></tr>
        <tr><td colspan="2" style="font-size:7.5pt;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.4px;padding-bottom:5px;">Labor Breakdown</td></tr>
        <tr class="muted"><td>Total Man-Hours</td><td id="t-manhours">0</td></tr>
        <tr class="muted"><td>Avg Charge Rate</td><td id="t-avgcharge">—</td></tr>
        <tr style="color:var(--success);font-weight:700;"><td>Labor Profit</td><td id="t-labprofit">$0.00</td></tr>
        <tr style="color:var(--success);font-weight:700;"><td>Profit Per Man-Hour</td><td id="t-pph">$0.00</td></tr>
      </table>
    </div>
  </div>

  <!-- BREAK-EVEN -->
  <div class="be-box">
    <div class="be-title">Break-Even Check — Without IS Salary</div>
    <div class="be-cards">
      <div class="be-card" id="c-gp"><div class="lbl">Gross Profit</div><div class="val" id="be-gp">$0</div><div class="sub">this job</div></div>
      <div class="be-card" id="c-mg"><div class="lbl">Gross Margin</div><div class="val" id="be-mg">0%</div><div class="sub">of total price</div></div>
      <div class="be-card" id="c-dy"><div class="lbl">Days Covered</div><div class="val" id="be-dy">0</div><div class="sub">of NFR overhead</div></div>
      <div class="be-card" id="c-mo"><div class="lbl">Months Covered</div><div class="val" id="be-mo">0.0</div><div class="sub">fully covered</div></div>
    </div>
    <div class="bar-wrap">
      <div class="bar-labels"><span>Overhead Coverage</span><span id="bar-lbl">$0 of $15,600/mo</span></div>
      <div class="bar"><div class="bar-fill" id="bar-fill" style="width:0%;background:var(--danger);"></div></div>
    </div>
    <div class="be-msg" id="be-msg">Enter your scope items above to see if this job covers NFR's monthly overhead without touching your IS income.</div>
  </div>

  <!-- PAYMENT SCHEDULE -->
  <div class="panel" style="margin-top:14px;">
    <div class="p-title">Payment Schedule</div>
    <div class="pay-grid">
      <div class="pay-card"><div class="pct">40%</div><div class="amt" id="pay-1">$0.00</div><div class="lbl">Deposit · Upon signing<br>Reserves start date</div></div>
      <div class="pay-card"><div class="pct">40%</div><div class="amt" id="pay-2">$0.00</div><div class="lbl">Progress · Materials ordered<br>Work underway</div></div>
      <div class="pay-card"><div class="pct">20%</div><div class="amt" id="pay-3">$0.00</div><div class="lbl">Final · Project complete<br>Walkthrough done</div></div>
    </div>
    <p style="font-size:7.5pt;color:var(--muted);margin-top:9px;">⚠️ Work will not begin until deposit is received. &nbsp;·&nbsp; Work pauses if progress payment is late. &nbsp;·&nbsp; Accepted: Check · Zelle · ACH Transfer</p>
  </div>

  <!-- ACTIONS -->
  <div class="actions no-print">
    <button class="btn btn-p" onclick="window.print()">Print / Save as PDF</button>
    <button class="btn btn-o" onclick="resetAll()">New Job</button>
    <button class="btn btn-a" onclick="copyTotal()">Copy Grand Total</button>
  </div>

</div><!-- end right -->
</div><!-- end layout -->
</div><!-- end app -->

<!-- PO REVIEW MODAL -->
<div class="po-modal no-print" id="po-review-modal">
  <div class="po-modal-inner">
    <button class="po-modal-close" onclick="closePOReview()" title="Close">×</button>
    <div id="pm-content"></div>
  </div>
</div>

<script>
let rows = [], rc = 0;

document.addEventListener('DOMContentLoaded', () => {
  const t = new Date(), v = new Date(t);
  v.setDate(v.getDate() + 30);
  document.getElementById('prop-date').value = ds(t);
  document.getElementById('prop-valid').value = ds(v);
  addRow(); addRow(); addRow(); addRow();
  calc();
});

function ds(d){ return d.toISOString().split('T')[0]; }

function addRow(){
  const id = ++rc; rows.push(id);
  const br = parseFloat(document.getElementById('default-bill-rate').value) || 85;
  const cr = 0; // Jorge's labor cost = $0 (wages are in monthly overhead)
  const tr = document.createElement('tr');
  tr.id = 'r'+id;
  tr.innerHTML = `
    <td class="lt-num">${rows.length}</td>
    <td><input class="desc" type="text" placeholder="Scope description..." oninput="calc()"></td>
    <td><input type="number" min="1" step="1" value="1" id="men${id}" oninput="rowLabor(${id})"></td>
    <td><input type="number" min="0" step=".5" placeholder="—" id="hrs${id}" oninput="rowLabor(${id})"></td>
    <td><input type="number" min="0" step=".5" placeholder="—" id="act${id}" oninput="calc()" style="background:#edf6f2;" title="Actual hours per man worked"></td>
    <td><input type="number" min="0" step="1" value="${br}" id="br${id}" oninput="rowLabor(${id})"></td>
    <td><input type="number" min="0" step="1" value="${cr}" id="cr${id}" oninput="rowLabor(${id})"></td>
    <td class="lt-val" id="lrev${id}">—</td>
    <td class="lt-profit" id="lprof${id}">—</td>
    <td><input type="number" min="0" step=".01" placeholder="0.00" id="mat${id}" oninput="calc()"></td>
    <td><input type="number" min="0" step=".01" placeholder="0.00" id="sub${id}" oninput="calc()"></td>
    <td><input type="number" min="0" step=".01" placeholder="0.00" id="eq${id}" oninput="calc()"></td>
    <td class="lt-val" id="ltot${id}">$0.00</td>
    <td><button class="del-btn no-print" onclick="delRow(${id})">×</button></td>`;
  document.getElementById('lt-body').appendChild(tr);
  renum();
}

function delRow(id){
  const el=document.getElementById('r'+id); if(el) el.remove();
  rows=rows.filter(r=>r!==id); renum(); calc();
}

function renum(){
  document.querySelectorAll('#lt-body tr').forEach((tr,i)=>{
    const c=tr.querySelector('.lt-num'); if(c) c.textContent=i+1;
  });
}

function rowLabor(id){
  const men=parseFloat(document.getElementById('men'+id)?.value)||0;
  const hrs=parseFloat(document.getElementById('hrs'+id)?.value)||0;
  const br=parseFloat(document.getElementById('br'+id)?.value)||0;
  const cr=parseFloat(document.getElementById('cr'+id)?.value)||0;
  const lrev=men*hrs*br, lcost=men*hrs*cr, lprof=lrev-lcost;
  const lrevEl=document.getElementById('lrev'+id);
  const lprofEl=document.getElementById('lprof'+id);
  if(lrevEl) lrevEl.textContent = (men||hrs||br) ? fmt(lrev) : '—';
  if(lprofEl){
    lprofEl.textContent = (men||hrs||br) ? fmt(lprof) : '—';
    lprofEl.style.color = lprof>0?'var(--success)':lprof<0?'var(--danger)':'var(--muted)';
  }
  calc();
}

function calc(){
  try { _calc(); } catch(e) {
    var dbg=document.getElementById('calc-error');
    if(dbg){ dbg.style.display='block'; dbg.textContent='Calc error: '+e.message+' ('+e.stack.split('\n')[1]+')';}
    console.error('calc() error:', e);
  }
}
function _calc(){
  // ── 1. CALCULATIONS FIRST — must run before any display code ─────────
  const overhead = getOverhead();
  const billHrs  = pf('oh-bill-hrs') || 160;
  console.log('[NFR calc] overhead='+overhead+' billHrs='+billHrs+' rows='+JSON.stringify(rows));
  const reqRate  = (overhead > 0 && billHrs > 0) ? (overhead / billHrs) : 0;

  const defBR = pf('default-bill-rate') || 85;
  const defCR = pf('default-cost-rate') || 25;

  const mu = {
    mat:  pf('m-mat')  || 0,
    sub:  pf('m-sub')  || 0,
    eq:   pf('m-eq')   || 0,
    comm: pf('m-comm') || 0
  };
  const taxRate = getTax() || 0;

  let totLabRev=0, totLabCost=0, totLabProf=0;
  let totMatCost=0, totSubCost=0, totEqCost=0;
  let totManHours=0, totLineTotal=0;
  let totActManHours=0, totActLabCost=0, hasActual=false;

  rows.forEach(function(id){
    const men = pf('men'+id)||0;
    const hrs = pf('hrs'+id)||0;
    const actHrs = pf('act'+id)||0;
    const br  = pf('br'+id)||0;
    const cr  = pf('cr'+id)||0;
    const mat = pf('mat'+id)||0;
    const sub = pf('sub'+id)||0;
    const eq  = pf('eq'+id)||0;

    if(actHrs>0){ hasActual=true; totActManHours+=men*actHrs; totActLabCost+=men*actHrs*cr; }

    const labRev   = men*hrs*br;
    const labCost  = men*hrs*cr;
    const labProf  = labRev - labCost;
    const matBilledRow = mat*(1 + mu.mat/100);
    const subBilledRow = sub*(1 + mu.sub/100);
    const eqBilledRow  = eq *(1 + mu.eq /100);
    // Tax is a summary item only — not included in per-row Line Total
    const rowSubtotal  = labRev + matBilledRow + subBilledRow + eqBilledRow;
    const lineTotal    = rowSubtotal*(1 + mu.comm/100);

    totLabRev  += labRev;  totLabCost += labCost; totLabProf += labProf;
    totMatCost += mat;     totSubCost += sub;      totEqCost  += eq;
    totManHours += men*hrs; totLineTotal += lineTotal;

    console.log('[NFR row'+id+'] men='+men+' hrs='+hrs+' br='+br+' mat='+mat+' labRev='+labRev+' lineTotal='+lineTotal.toFixed(2));
    // Update this row's display
    set('lrev'+id, (men||hrs||br) ? fmt(labRev) : '—');
    var lpEl = document.getElementById('lprof'+id);
    if(lpEl){
      lpEl.textContent = (men||hrs||br) ? fmt(labProf) : '—';
      lpEl.style.color = labProf>0 ? 'var(--success)' : labProf<0 ? 'var(--danger)' : 'var(--muted)';
    }
    set('ltot'+id, fmt(lineTotal));
  });

  // Full job totals — tax always separate, never inside subtotal
  const matBilled  = totMatCost*(1 + mu.mat/100);
  const subBilled  = totSubCost*(1 + mu.sub/100);
  const eqBilled   = totEqCost *(1 + mu.eq /100);
  const subtotal   = totLabRev + matBilled + subBilled + eqBilled;   // NO tax here
  const commAmt    = subtotal*(mu.comm/100);
  const taxLoad    = totMatCost*(taxRate/100);                        // tax always last
  const grand      = subtotal + commAmt + taxLoad;
  const directCost = totLabCost + totMatCost + totSubCost + totEqCost;
  const gp         = grand - directCost;
  const margin     = grand>0 ? (gp/grand*100) : 0;
  const jorgeOHCovered = totManHours * reqRate;
  const overheadPct    = overhead>0 ? Math.min((jorgeOHCovered/overhead)*100, 999) : 0;

  // ── 2. UPDATE ALL DISPLAYS ────────────────────────────────────────────

  // Footer row
  set('ft-labrev', fmt(totLabRev));    set('ft-labprofit', fmt(totLabProf));
  set('ft-mat', fmt(totMatCost));      set('ft-sub', fmt(totSubCost));
  set('ft-eq', fmt(totEqCost));        set('ft-total', fmt(totLineTotal));

  // Totals panel
  set('t-labrev', fmt(totLabRev));
  set('t-mat-billed', fmt(matBilled)); set('t-sub-billed', fmt(subBilled));
  set('t-eq-billed', fmt(eqBilled));   set('t-subtotal', fmt(subtotal));
  set('t-comm', fmt(commAmt));         set('t-tax', fmt(taxLoad));
  set('lb-taxrate', taxRate);
  set('t-labcost', fmt(totLabCost));   set('t-matcost', fmt(totMatCost));
  set('t-subcost', fmt(totSubCost));   set('t-eqcost', fmt(totEqCost));
  set('t-directcost', fmt(directCost));
  set('t-grand', fmt(grand));          set('t-gp', fmt(gp));
  set('t-margin', margin.toFixed(1)+'%');
  set('t-manhours', Math.round(totManHours)+' hrs');
  set('t-avgcharge', totManHours>0 ? ('$'+(totLabRev/totManHours).toFixed(2)+'/hr') : '—');
  set('t-labprofit', fmt(totLabProf));
  set('t-pph', totManHours>0 ? ('$'+(totLabProf/totManHours).toFixed(2)+'/hr') : '$0.00');
  set('lb-mat', mu.mat); set('lb-sub', mu.sub); set('lb-eq', mu.eq); set('lb-comm', mu.comm);

  // Payment schedule
  set('pay-1', fmt(grand*.4)); set('pay-2', fmt(grand*.4)); set('pay-3', fmt(grand*.2));

  // Jorge rate engine display
  var ohDisplay = '$' + Math.round(overhead).toLocaleString('en-US');
  set('jrf-oh', ohDisplay);
  set('oh-display', ohDisplay);
  set('jorge-req-rate', '$' + reqRate.toFixed(2));

  var profitPerHr = defBR - reqRate;
  var bankEl = document.getElementById('bank-rate');
  if(bankEl){
    bankEl.textContent = (profitPerHr>=0?'+':'') + '$' + profitPerHr.toFixed(2) + '/hr';
    bankEl.className = 'rate-tag' + (profitPerHr<0?' warn':'');
  }
  var statusEl = document.getElementById('rate-status');
  if(statusEl){
    if(defBR < reqRate){
      statusEl.textContent = 'Rate too low — raise Jorge to at least $' + Math.ceil(reqRate) + '/hr to cover overhead.';
      statusEl.style.color = 'var(--danger)';
      statusEl.style.fontWeight = '700';
    } else {
      statusEl.textContent = 'At $' + defBR + '/hr, every Jorge hour banks $' + profitPerHr.toFixed(2) + ' above overhead.';
      statusEl.style.color = 'var(--success)';
      statusEl.style.fontWeight = 'normal';
    }
  }
  var engineEl = document.getElementById('engine-status');
  if(engineEl){
    var hrsNeeded = overhead>0 ? Math.ceil(overhead/defBR) : 0;
    engineEl.textContent = 'Jorge needs ' + hrsNeeded + ' hrs/month at $' + defBR + '/hr (' + Math.ceil(hrsNeeded/8) + ' days) to cover all overhead.';
  }
  var esRate = document.getElementById('es-rate');
  if(esRate) esRate.textContent = '$' + reqRate.toFixed(2) + '/hr';

  // Break-even & progress
  breakeven(gp, margin, overhead, grand, totManHours, reqRate, jorgeOHCovered, overheadPct);
  updateProgress(totManHours, totActManHours, hasActual, totLabCost, totActLabCost, gp, grand);
} // end _calc

function breakeven(gp, margin, overhead, grand, manHours, reqRate, jorgeOHCovered, ohPct){
  const days=overhead>0?(jorgeOHCovered/overhead)*30:0;
  const months=overhead>0?jorgeOHCovered/overhead:0;
  const barPct=Math.min(Math.max(ohPct,0),100);
  const gpDays=overhead>0?(gp/overhead)*30:0;
  const gpMonths=overhead>0?gp/overhead:0;

  set('be-gp', fmtS(gp)); set('be-mg', margin.toFixed(1)+'%');
  set('be-dy', Math.round(days)); set('be-mo', months.toFixed(1));
  set('bar-lbl', fmt(jorgeOHCovered)+' of $'+overhead.toLocaleString()+'/mo (from Jorge hrs)');

  const fill=document.getElementById('bar-fill');
  if(fill){ fill.style.width=barPct+'%'; fill.style.background=barPct>=100?'var(--success)':barPct>=50?'var(--warn)':'var(--danger)'; }

  color('c-gp', gp>=overhead?'green':gp>0?'warn':'red');
  color('c-mg', margin>=30?'green':margin>=20?'warn':'red');
  color('c-dy', days>=30?'green':days>=15?'warn':'red');
  color('c-mo', months>=1?'green':months>=0.5?'warn':'red');

  let msg='';
  if(grand===0){
    msg='Add scope items above. Every hour Jorge bills at his required rate covers that slice of monthly overhead — materials and sub markups on top are straight profit.';
  } else {
    const ohLine = manHours>0
      ? `Jorge's ${Math.round(manHours)} hrs × $${reqRate.toFixed(2)}/hr required rate covers ${fmt(jorgeOHCovered)} (${Math.round(days)} days of the $${overhead.toLocaleString()}/mo overhead).`
      : `No labor hours entered — overhead coverage comes from markups only.`;
    const profitLine = gp > 0
      ? ` Total gross profit: ${fmt(gp)} — materials + sub markups + labor spread above the required rate.`
      : ` Gross profit is negative — check your rates.`;
    const needLine = gp < overhead
      ? ` Need ${fmt(overhead - jorgeOHCovered)} more in Jorge hours this month to fully cover overhead without IS salary.`
      : ` This job alone covers all overhead for the month.`;
    msg = ohLine + profitLine + (jorgeOHCovered < overhead ? needLine : '');
  }
  set('be-msg', msg);
}

function updateProgress(estHrs, actHrs, hasAct, estCost, actCost, gp, grand){
  const empty=document.getElementById('prog-empty');
  const body=document.getElementById('prog-body');
  if(!hasAct){
    if(empty) empty.style.display='block';
    if(body) body.style.display='none';
    return;
  }
  if(empty) empty.style.display='none';
  if(body) body.style.display='block';

  const varHrs=estHrs-actHrs;
  const costSaved=estCost-actCost;       // positive = under budget (saved money)
  const adjGP=gp+costSaved;             // fixed-price job: less cost = more profit
  const adjMargin=grand>0?(adjGP/grand*100):0;
  const pctDone=estHrs>0?Math.min((actHrs/estHrs)*100,150):0;

  set('pg-est', Math.round(estHrs)+' hrs');
  set('pg-act', Math.round(actHrs)+' hrs');
  const varSign=varHrs>=0?'+':'';
  set('pg-var', varSign+Math.round(varHrs)+' hrs');
  set('pg-var-sub', varHrs>0?'under estimate ✅':varHrs<0?'over estimate ⚠️':'exactly on track');

  set('pg-est-cost', fmt(estCost));
  set('pg-act-cost', fmt(actCost));
  const savedEl=document.getElementById('pg-saved');
  if(savedEl){
    savedEl.textContent=fmt(Math.abs(costSaved));
    savedEl.style.color=costSaved>=0?'var(--success)':'var(--danger)';
    const lbl=document.getElementById('pg-saved-lbl');
    if(lbl) lbl.textContent=costSaved>=0?'Labor Cost Saved':'Extra Labor Cost';
  }

  set('pg-est-gp', fmt(gp));
  const adjEl=document.getElementById('pg-adj-gp');
  if(adjEl){adjEl.textContent=fmt(adjGP); adjEl.style.color=adjGP>0?'var(--success)':'var(--danger)';}
  set('pg-adj-margin', adjMargin.toFixed(1)+'%');

  // Progress bar
  const pbar=document.getElementById('pg-bar-fill');
  if(pbar){
    pbar.style.width=Math.min(pctDone,100)+'%';
    pbar.style.background=pctDone<=80?'var(--success)':pctDone<=100?'var(--warn)':'var(--danger)';
  }
  set('pg-bar-lbl', Math.round(actHrs)+' of '+Math.round(estHrs)+' est. hrs ('+Math.round(pctDone)+'%)');

  // Color cards
  color('pg-c-var', varHrs>=0?'green':'red');
  color('pg-c-saved', costSaved>=0?'green':'red');

  let msg='';
  if(varHrs>0){
    msg=`✅ ${Math.round(varHrs)} hrs under estimate — labor cost came in ${fmt(costSaved)} less than budgeted. Fixed-price means that savings go straight to your pocket. Adjusted gross profit: ${fmt(adjGP)} (${adjMargin.toFixed(1)}%).`;
  } else if(varHrs<0){
    msg=`⚠️ ${Math.round(Math.abs(varHrs))} hrs over estimate — extra labor cost: ${fmt(Math.abs(costSaved))}. This eats into your $10/hr contingency buffer. If you're still over, review scope before finishing.`;
  } else {
    msg=`✅ Hours exactly on track. Gross profit holding at ${fmt(adjGP)} (${adjMargin.toFixed(1)}%).`;
  }
  set('pg-msg', msg);
}

function getOverhead(){
  const ids=['oh-labor','oh-payroll','oh-wc','oh-phones','oh-internet','oh-fuel','oh-insurance','oh-food','oh-other'];
  const total=ids.reduce((s,id)=>s+(pf(id)||0),0);
  const el=document.getElementById('oh-total-val');
  if(el) el.textContent='$'+total.toLocaleString('en-US',{minimumFractionDigits:0,maximumFractionDigits:0});
  return total;
}

// Helpers
function pf(id){ return parseFloat(document.getElementById(id)?.value)||0; }
function set(id,v){ const e=document.getElementById(id); if(e) e.textContent=v; }
function color(id,cls){ const e=document.getElementById(id); if(e) e.className='be-card '+cls; }
function fmt(n){ return '$'+(n||0).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2}); }
function fmtS(n){ return n>=1000?'$'+(n/1000).toFixed(1)+'k':'$'+Math.round(n||0); }
function getTax(){
  const r=document.getElementById('tax-region').value;
  return r==='custom'?pf('custom-tax'):parseFloat(r)||0;
}
function taxRegionChange(){
  document.getElementById('custom-tax-wrap').style.display=
    document.getElementById('tax-region').value==='custom'?'block':'none';
  calc();
}
function resetAll(){
  if(!confirm('Clear and start a new job?')) return;
  ['client-name','client-addr','client-city','client-zip','proj-mgr'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('lt-body').innerHTML=''; rows=[]; rc=0;
  const t=new Date(),v=new Date(t); v.setDate(v.getDate()+30);
  document.getElementById('prop-date').value=ds(t);
  document.getElementById('prop-valid').value=ds(v);
  addRow(); addRow(); addRow(); addRow(); calc();
}
function copyTotal(){
  const v=document.getElementById('t-grand').textContent;
  navigator.clipboard.writeText(v).then(()=>alert('Copied: '+v));
}

// ── AGREEMENT INBOX SYSTEM ────────────────────────────────────────────────────
function loadPOs(){ try{ return JSON.parse(localStorage.getItem('nfr_pos')||'[]'); }catch(e){ return []; } }
function savePOs(pos){ localStorage.setItem('nfr_pos', JSON.stringify(pos)); }
function loadAgreements(){ try{ return JSON.parse(localStorage.getItem('nfr_agreements')||'[]'); }catch(e){ return []; } }
function saveAgreements(agrs){ localStorage.setItem('nfr_agreements', JSON.stringify(agrs)); }
function escH(s){ return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

function refreshPOInbox(){
  // Show both pending agreements AND legacy pending_review POs
  const pendingAgr = loadAgreements().filter(a => a.status === 'pending_jose');
  const pendingPOs = loadPOs().filter(p => p.status === 'pending_review');
  const pending = [
    ...pendingAgr.map(a => ({...a, _type:'agr'})),
    ...pendingPOs.map(p => ({...p, _type:'po'}))
  ];
  const panel   = document.getElementById('po-inbox-panel');
  const badge   = document.getElementById('po-badge-pill');
  const countEl = document.getElementById('po-count-badge');

  if(badge){
    if(pending.length > 0){
      badge.textContent = '📋 ' + pending.length + ' awaiting review';
      badge.className = 'po-badge-pill no-print';
    } else {
      badge.textContent = '📋 Inbox';
      badge.className = 'po-badge-pill empty no-print';
    }
  }
  if(countEl) countEl.textContent = pending.length;
  if(!panel) return;

  if(pending.length === 0){ panel.style.display='none'; return; }
  panel.style.display = 'block';

  const list = document.getElementById('po-inbox-list');
  if(!list) return;
  list.innerHTML = '';
  pending.forEach(item => {
    const dt = new Date(item.created_at).toLocaleDateString('en-US',{month:'short',day:'numeric'});
    const label = item._type === 'agr' ? 'AGR' : 'PO';
    const row = document.createElement('div');
    row.className = 'po-inbox-row';
    row.innerHTML = `
      <div class="pi-col"><div class="pi-label">${label} #</div><div class="pi-val">${escH(item.id)}</div></div>
      <div class="pi-col"><div class="pi-label">Client</div><div class="pi-val">${escH(item.project.client_name||'—')}</div></div>
      <div class="pi-col"><div class="pi-label">Type</div><div class="pi-val">${escH(item.project.project_type||'—')}</div></div>
      <div class="pi-col"><div class="pi-label">Created by</div><div class="pi-val">${escH(item.created_by||'—')}</div></div>
      <div class="pi-col"><div class="pi-label">Date</div><div class="pi-val">${dt}</div></div>
      <button class="review-btn" onclick="openPOReview('${escH(item.id)}','${item._type}')">Review →</button>`;
    list.appendChild(row);
  });
}

function scrollToPOInbox(){
  const panel = document.getElementById('po-inbox-panel');
  if(panel && panel.style.display !== 'none') panel.scrollIntoView({behavior:'smooth',block:'start'});
}

function openPOReview(recordId, recordType){
  recordType = recordType || 'po';
  let po;
  if(recordType === 'agr'){
    po = loadAgreements().find(a => a.id === recordId);
  } else {
    po = loadPOs().find(p => p.id === recordId);
  }
  if(!po) return;

  const modal = document.getElementById('po-review-modal');
  modal.dataset.poId = recordId;
  modal.dataset.poType = recordType;

  // Use current calculator rates
  const laborRate = pf('default-bill-rate') || 85;
  const matMu     = pf('m-mat') || 24;
  const subMu     = pf('m-sub') || 30;
  const eqMu      = pf('m-eq')  || 15;
  const taxRate   = getTax() || 7.5;

  let totMat=0, totSub=0, totTools=0, totManHrs=0;
  (po.scope_items||[]).forEach(item => {
    totMat    += item.mat_cost   || 0;
    totSub    += item.sub_cost   || 0;
    totTools  += item.tools_cost || 0;
    totManHrs += (item.men||1) * (item.est_hrs||0);
  });

  const laborRev    = totManHrs * laborRate;
  const matBilled   = totMat   * (1 + matMu/100);
  const subBilled   = totSub   * (1 + subMu/100);
  const toolsBilled = totTools * (1 + eqMu/100);
  const taxAmt      = totMat   * (taxRate/100);
  const grand       = laborRev + matBilled + subBilled + toolsBilled + taxAmt;
  const fmtD = n => '$'+(n||0).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
  const fmtN = n => (n||0).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});

  const startDate = po.project.start_date
    ? new Date(po.project.start_date+'T12:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'})
    : '—';

  const scopeRows = (po.scope_items||[]).map((item,i) => `
    <tr>
      <td>${i+1}</td>
      <td><strong>${escH(item.category)}</strong></td>
      <td>${escH(item.description)}</td>
      <td>${escH(item.spec)}</td>
      <td>${escH(item.dimensions)}</td>
      <td class="r">${item.men||1}</td>
      <td class="r">${item.est_hrs||0}</td>
      <td class="r">$${fmtN(item.mat_cost)}</td>
      <td class="r">$${fmtN(item.sub_cost)}</td>
      <td class="r">$${fmtN(item.tools_cost)}</td>
      <td>${escH(item.notes)}</td>
    </tr>`).join('');

  document.getElementById('pm-content').innerHTML = `
    <div class="po-modal-title">📋 Reviewing: ${escH(po.id)} — ${escH(po.project.client_name||'No Client')}</div>
    <div class="pm-info-grid">
      <div class="pm-info-cell"><label>Client</label><div class="pmv">${escH(po.project.client_name||'—')}</div></div>
      <div class="pm-info-cell"><label>Address</label><div class="pmv">${escH([po.project.client_addr,po.project.client_city].filter(Boolean).join(', ')||'—')}</div></div>
      <div class="pm-info-cell"><label>Project Type</label><div class="pmv">${escH(po.project.project_type||'—')}</div></div>
      <div class="pm-info-cell"><label>Est. Start Date</label><div class="pmv">${startDate}</div></div>
      <div class="pm-info-cell"><label>Created By</label><div class="pmv">${escH(po.created_by||'—')}</div></div>
      <div class="pm-info-cell"><label>Tax Region</label><div class="pmv">${escH(po.project.tax_region)}%</div></div>
    </div>

    <div class="pm-section">Scope of Work &nbsp;·&nbsp; ${(po.scope_items||[]).length} items &nbsp;·&nbsp; ${totManHrs.toFixed(1)} man-hours</div>
    <div style="overflow-x:auto;margin-bottom:12px;">
      <table class="pm-scope">
        <thead><tr>
          <th style="width:22px;">#</th>
          <th style="width:80px;">Category</th>
          <th style="min-width:130px;">Description</th>
          <th style="min-width:110px;">Spec / Grade</th>
          <th style="min-width:100px;">Dimensions / Qty</th>
          <th class="r" style="width:40px;">Men</th>
          <th class="r" style="width:44px;">Hrs</th>
          <th class="r" style="width:68px;">Mat $</th>
          <th class="r" style="width:68px;">Sub $</th>
          <th class="r" style="width:68px;">Tools $</th>
          <th style="min-width:90px;">Notes</th>
        </tr></thead>
        <tbody>${scopeRows}</tbody>
      </table>
    </div>

    <div class="pm-section">Estimated Pricing &nbsp;·&nbsp; Using your rates: $${laborRate}/hr · ${matMu}% mat · ${subMu}% sub · ${eqMu}% equip · ${taxRate}% tax</div>
    <div class="pm-cost-summary">
      <div class="pm-cost-item"><label>Man-Hours</label><div class="pmcv">${totManHrs.toFixed(1)} hrs</div></div>
      <div class="pm-cost-item"><label>Labor Revenue</label><div class="pmcv">${fmtD(laborRev)}</div></div>
      <div class="pm-cost-item"><label>Materials (billed)</label><div class="pmcv">${fmtD(matBilled)}</div></div>
      <div class="pm-cost-item"><label>Sub (billed)</label><div class="pmcv">${fmtD(subBilled)}</div></div>
      <div class="pm-cost-item"><label>Tools (billed)</label><div class="pmcv">${fmtD(toolsBilled)}</div></div>
      <div class="pm-cost-item"><label>Sales Tax</label><div class="pmcv">${fmtD(taxAmt)}</div></div>
      <div class="pm-cost-item"><label>Estimated Grand Total</label><div class="pmcv grand">${fmtD(grand)}</div></div>
    </div>

    <div class="pm-section">Jose's Notes</div>
    <textarea class="pm-notes-area" id="pm-jose-notes" placeholder="Add feedback or approval notes...">${escH(po.jose_notes||'')}</textarea>

    <div class="pm-actions">
      <button class="btn-approve" onclick="approvePO()">✅ Approve — Generate Contract</button>
      <button class="btn-changes" onclick="requestPOChanges()">↩ Request Changes</button>
      <span style="flex:1;"></span>
      <span style="font-size:8pt;color:var(--muted);">Submitted ${new Date(po.created_at).toLocaleDateString()}</span>
    </div>`;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePOReview(){
  const modal = document.getElementById('po-review-modal');
  if(modal){ modal.classList.remove('open'); }
  document.body.style.overflow = '';
}

function approvePO(){
  const modal      = document.getElementById('po-review-modal');
  const recordId   = modal?.dataset.poId;
  const recordType = modal?.dataset.poType || 'po';
  if(!recordId) return;

  const notes = document.getElementById('pm-jose-notes')?.value || '';

  if(recordType === 'agr'){
    const agrs = loadAgreements();
    const idx  = agrs.findIndex(a => a.id === recordId);
    if(idx < 0) return;
    agrs[idx].status           = 'jose_approved';
    agrs[idx].jose_notes       = notes;
    agrs[idx].jose_approved_at = new Date().toISOString();
    saveAgreements(agrs);
    closePOReview();
    refreshPOInbox();
    window.open('contract.html?agr=' + encodeURIComponent(recordId), '_blank');
    alert('✅ Agreement approved — contract opened in new tab.\n\nNext step: Send the contract to the client. When they sign and pay the deposit, mark it in Agreement Portal and a PO will be auto-generated.');
  } else {
    const pos = loadPOs();
    const idx = pos.findIndex(p => p.id === recordId);
    if(idx < 0) return;
    pos[idx].status      = 'approved';
    pos[idx].jose_notes  = notes;
    pos[idx].approved_at = new Date().toISOString();
    pos[idx].approved_by = 'Jose Martinez';
    savePOs(pos);
    closePOReview();
    refreshPOInbox();
    window.open('contract.html?po=' + encodeURIComponent(recordId), '_blank');
  }
}

function requestPOChanges(){
  const modal      = document.getElementById('po-review-modal');
  const recordId   = modal?.dataset.poId;
  const recordType = modal?.dataset.poType || 'po';
  if(!recordId) return;

  const notes = (document.getElementById('pm-jose-notes')?.value || '').trim();
  if(!notes){ alert('Please add notes explaining what changes are needed.'); document.getElementById('pm-jose-notes')?.focus(); return; }

  if(recordType === 'agr'){
    const agrs = loadAgreements();
    const idx  = agrs.findIndex(a => a.id === recordId);
    if(idx < 0) return;
    agrs[idx].status          = 'draft'; // send back to draft for Maria to revise
    agrs[idx].jose_notes      = notes;
    agrs[idx].rejected_reason = notes;
    saveAgreements(agrs);
  } else {
    const pos = loadPOs();
    const idx = pos.findIndex(p => p.id === recordId);
    if(idx < 0) return;
    pos[idx].status          = 'rejected';
    pos[idx].jose_notes      = notes;
    pos[idx].rejected_reason = notes;
    savePOs(pos);
  }

  closePOReview();
  refreshPOInbox();
  alert('Changes requested for ' + recordId + '. Maria will see the feedback in her portal.');
}

// Close modal on backdrop click
document.getElementById('po-review-modal')?.addEventListener('click', function(e){
  if(e.target === this) closePOReview();
});

// Init + auto-refresh every 30s
document.addEventListener('DOMContentLoaded', refreshPOInbox);
setInterval(refreshPOInbox, 30000);

// ── Staff Password Management (Jose only) ─────────────────────
const STAFF_USERS = [
  { key:'jose',  label:'Jose Martinez',  portal:'proposal-calculator.html' },
  { key:'maria', label:'Maria',          portal:'agreement-portal.html' },
  { key:'jen',   label:'Jen',            portal:'jen-portal.html' },
];

function getPwStore()   { return JSON.parse(localStorage.getItem('nfr_staff_passwords') || '{}'); }
function savePwStore(o) { localStorage.setItem('nfr_staff_passwords', JSON.stringify(o)); }
function encode(pw)     { return btoa(unescape(encodeURIComponent(pw))); }

function renderPasswordPanel() {
  const store = getPwStore();
  const rows = STAFF_USERS.map(u => {
    const set = !!store[u.key];
    return `<tr>
      <td style="padding:8px 10px;font-weight:700">${u.label}</td>
      <td style="padding:8px 10px">
        <span style="padding:3px 10px;border-radius:12px;font-size:11px;font-weight:700;
          background:${set ? '#D1FAE5' : '#FEF3C7'};color:${set ? '#065F46' : '#92400E'}">
          ${set ? '✓ Password Set' : '⚠ Not Set'}
        </span>
      </td>
      <td style="padding:8px 10px">
        <div style="display:flex;gap:6px;align-items:center">
          <input type="password" id="pw-reset-${u.key}" placeholder="New password"
            style="border:1px solid var(--border);border-radius:4px;padding:5px 8px;font-size:11px;width:140px;outline:none">
          <button onclick="resetStaffPassword('${u.key}')"
            style="padding:5px 12px;font-size:11px;font-weight:700;background:var(--primary);color:#fff;border:none;border-radius:4px;cursor:pointer">
            Set
          </button>
          ${set ? `<button onclick="clearStaffPassword('${u.key}')"
            style="padding:5px 10px;font-size:11px;font-weight:700;background:#FEE2E2;color:#DC2626;border:1px solid #FECACA;border-radius:4px;cursor:pointer">
            Clear
          </button>` : ''}
        </div>
        <div id="pw-msg-${u.key}" style="font-size:11px;margin-top:4px;color:var(--success);display:none"></div>
      </td>
    </tr>`;
  }).join('');

  document.getElementById('pw-table-body').innerHTML = rows;
}

function resetStaffPassword(userKey) {
  const inp = document.getElementById('pw-reset-' + userKey);
  const pw  = inp.value.trim();
  if (!pw) { showPwMsg(userKey, 'Enter a new password first.', '#DC2626'); return; }
  if (pw.length < 4) { showPwMsg(userKey, 'Minimum 4 characters.', '#DC2626'); return; }
  const store = getPwStore();
  store[userKey] = encode(pw);
  savePwStore(store);
  inp.value = '';
  showPwMsg(userKey, '✓ Password updated.', 'var(--success)');
  setTimeout(renderPasswordPanel, 1200);
}

function clearStaffPassword(userKey) {
  if (!confirm('Clear password for ' + userKey + '? They will need to create a new one on next login.')) return;
  const store = getPwStore();
  delete store[userKey];
  savePwStore(store);
  renderPasswordPanel();
}

function showPwMsg(userKey, msg, color) {
  const el = document.getElementById('pw-msg-' + userKey);
  if (!el) return;
  el.textContent = msg;
  el.style.color = color;
  el.style.display = 'block';
  setTimeout(() => { el.style.display = 'none'; }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
  const pwPanel = document.getElementById('pw-panel-body');
  if (pwPanel) renderPasswordPanel();
});
</script>

<!-- ── Staff Password Panel (visible at bottom of Jose's page) ── -->
<div style="max-width:1340px;margin:0 auto 30px;padding:0 18px">
  <div class="panel" style="border-top:3px solid var(--primary)">
    <div class="p-title" style="display:flex;justify-content:space-between;align-items:center;cursor:pointer"
         onclick="const b=document.getElementById('pw-panel-body');b.style.display=b.style.display==='none'?'block':'none'">
      🔑 Staff Portal Access &amp; Passwords
      <span style="font-size:11px;color:var(--muted);font-family:'Lato',sans-serif;font-weight:400">Manage who can access each portal</span>
    </div>
    <div id="pw-panel-body" style="display:none">
      <p style="font-size:12px;color:var(--muted);margin-bottom:14px">
        Set or reset passwords for each staff member. They will be prompted to create their own password on first login.
        Passwords are stored locally in this browser — share new passwords directly with each person.
      </p>
      <div style="overflow-x:auto">
        <table style="width:100%;border-collapse:collapse;font-size:13px">
          <thead>
            <tr style="background:var(--light)">
              <th style="padding:8px 10px;text-align:left;border-bottom:1px solid var(--border);font-size:11px;text-transform:uppercase;letter-spacing:.3px;color:var(--primary)">Staff Member</th>
              <th style="padding:8px 10px;text-align:left;border-bottom:1px solid var(--border);font-size:11px;text-transform:uppercase;letter-spacing:.3px;color:var(--primary)">Status</th>
              <th style="padding:8px 10px;text-align:left;border-bottom:1px solid var(--border);font-size:11px;text-transform:uppercase;letter-spacing:.3px;color:var(--primary)">Reset Password</th>
            </tr>
          </thead>
          <tbody id="pw-table-body"></tbody>
        </table>
      </div>
      <p style="font-size:11px;color:var(--muted);margin-top:12px;font-style:italic">
        Note: Passwords are stored in this browser's localStorage. Each computer/browser has its own copy.
        For a shared office computer, one setup covers the whole team.
      </p>
    </div>
  </div>
</div>

</body>
</html>
```

---

## `training-employee.html` <a id="training-employee-html"></a>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>NFR Training — My Training</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Lato:wght@400;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="css/training-styles.css" />
</head>
<body>
  <header class="app-header">
    <div class="header-brand">
      <span>NFR</span>
      <span class="brand-dot">·</span>
      <span>Team Training</span>
    </div>
    <div class="header-right">
      <span class="header-name" id="emp-name"></span>
      <span class="header-timer" id="session-timer">00:00</span>
      <button class="btn-logout" id="btn-logout">Sign Out</button>
    </div>
  </header>

  <main class="employee-main">
    <div id="main-content">
      <div class="rest-card">
        <div class="rest-icon">⏳</div>
        <h2>Loading your training…</h2>
      </div>
    </div>

    <div class="week-pills-wrap" id="week-pills-container"></div>
  </main>

  <script src="js/auth.js"></script>
  <script>NFRAuth.requireAuth('training-employee');</script>
  <script src="js/training-tracker.js"></script>
  <script src="js/training-content.js"></script>
  <script src="js/training-employee.js"></script>
</body>
</html>
```

---

## `training-manager.html` <a id="training-manager-html"></a>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>NFR Training — Manager Dashboard</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Lato:wght@400;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="css/training-styles.css" />
</head>
<body>
  <header class="app-header">
    <div class="header-brand">
      <span>NFR</span>
      <span class="brand-dot">·</span>
      <span>Team Training</span>
    </div>
    <div class="header-right">
      <span class="header-name">Manager Dashboard</span>
      <button class="btn-logout" id="btn-logout">Sign Out</button>
    </div>
  </header>

  <main class="manager-main">
    <div class="week-nav">
      <span class="week-nav-label" id="week-label">Loading…</span>
      <button class="btn-nav" id="btn-prev-week">&larr; Prev Week</button>
      <button class="btn-nav btn-this-week" id="btn-this-week">This Week</button>
      <button class="btn-nav" id="btn-next-week">Next Week &rarr;</button>
    </div>

    <div class="employee-grid" id="employee-grid"></div>

    <h2 class="detail-section-heading">Week Detail</h2>
    <div class="detail-table-wrap">
      <div id="detail-table-container"></div>
    </div>
  </main>

  <script src="js/auth.js"></script>
  <script>NFRAuth.requireAuth('training-manager');</script>
  <script src="js/training-tracker.js"></script>
  <script src="js/training-content.js"></script>
  <script src="js/training-manager.js"></script>
</body>
</html>
```

---

## `js/auth.js` <a id="js-auth-js"></a>

```js
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
```

---

## `js/training-content.js` <a id="js-training-content-js"></a>

```js
/**
 * content.js — NFR Team Training Portal
 * Training content for Maria (Mozaik), Scott (CNC), Jorge (Field).
 */

(function () {
  'use strict';

  // ═══════════════════════════════════════════════════════════════════════════
  // MOZAIK PLAN — Maria (Weeks 8–12)
  // ═══════════════════════════════════════════════════════════════════════════

  const MOZAIK_URL   = 'https://sites.google.com/view/mozaikonlinehelp/training-videos';
  const MOZAIK_LABEL = 'Mozaik Training Library';

  const MOZAIK_PLAN = {
    8: [
      // Mon
      {
        topic: 'Custom Width Modifications',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Change a standard cabinet to a custom width',
          'Apply width changes to multiple cabinets in sequence',
          'Verify the fit in the 3D layout view',
        ],
        task: 'Open a kitchen project, change one 24" base cabinet to 27", verify the change in 3D view, and save as [Project]-W8D1.',
        tip: 'Always view in 3D after any width change.',
      },
      // Tue
      {
        topic: 'Height & Depth Customization',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Adjust cabinet height for non-standard ceiling situations',
          'Modify depth for appliance clearance requirements',
          'Stack multiple modifications on a single cabinet',
        ],
        task: 'Change a base cabinet to 32" height, set a wall cabinet to reduced depth 11", and save as [Project]-W8D2.',
        tip: 'Height changes affect countertop alignment — always check after.',
      },
      // Wed
      {
        topic: 'Specialty Configurations — Fillers, Angles & Transitions',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Add filler panels to close gaps at walls',
          'Create corner transitions between two cabinet runs',
          'Use specialty cabinet types in a layout',
        ],
        task: 'Build an L-shape layout, add fillers on wall ends, add a corner base cabinet, verify no gaps in 3D, and save as [Project]-W8D3.',
        tip: 'Filler panels must match cabinet finish.',
      },
      // Thu
      {
        topic: 'Combining Modifications on Full Layouts',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Apply multiple modifications across a full kitchen layout',
          'Check for conflicts between stacked modifications',
          'Regenerate the cut list after all changes are made',
        ],
        task: 'Build a 10×12 kitchen with at least 3 modification types, generate the cut list, and save as [Project]-W8D4.',
        tip: 'Always regenerate cut list after modifications.',
      },
      // Fri
      {
        topic: 'Week 8 Review — Practice Kitchen',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Complete a full kitchen using all Week 8 skills without reference',
          'Include custom width, non-standard height, and fillers',
          'Generate a 3D view and cut list as deliverables',
        ],
        task: 'Build a complete kitchen from Jose\'s brief, apply all Week 8 modifications, generate 3D and cut list — this is your Friday 1pm check-in deliverable.',
        tip: 'Friday check-in: show 3D view, walk through modifications, explain one decision.',
      },
    ],

    9: [
      // Mon
      {
        topic: 'L-Shape Kitchen Layouts',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Build a complete L-shape kitchen layout',
          'Place the corner base cabinet correctly at the turn',
          'Fill outward from the corner on both runs',
        ],
        task: 'Build a 10×10 L-shape kitchen with corner base cabinet at the turn and wall cabinets above both runs. Export 3D view.',
        tip: 'Place corner cabinet first, fill outward.',
      },
      // Tue
      {
        topic: 'Island & Peninsula Design',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Add a kitchen island with correct aisle clearance',
          'Apply a contrasting finish to the island',
          'Verify minimum 42" clearance on all sides',
        ],
        task: 'Add a 36×60 island to the W9D1 layout with 42" clearance maintained. Apply a contrasting finish to the island.',
        tip: 'Island aisle clearance is a code minimum — do not go below 42".',
      },
      // Wed
      {
        topic: 'Awkward Spaces — Soffits and Bulkheads',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Model a soffit above a wall cabinet run',
          'Handle a wall with a 2" offset correctly',
          'Verify everything looks correct in 3D',
        ],
        task: 'Build a kitchen with a soffit above the wall cabinet run and one wall with a 2" offset. Verify in 3D.',
        tip: 'Measure from both ends of each wall.',
      },
      // Thu
      {
        topic: 'U-Shape & Galley Layouts',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Build a complete U-shape kitchen layout',
          'Build a complete galley layout with correct clearance',
          'Understand minimum walkway requirements for each layout type',
        ],
        task: 'Build both — a U-shape in an 8×10 room and a galley in an 8×14 room with 48" clearance between runs.',
        tip: 'Galley needs 48" minimum between runs.',
      },
      // Fri
      {
        topic: 'Week 9 Review — Full Layout Challenge',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Build a complete kitchen layout from Jose\'s assigned room size and type',
          'Apply Week 8 modifications within the layout',
          'Generate 3D and cut list, present to Jose at 1pm',
        ],
        task: 'Jose assigns room size and layout type. Build the complete kitchen, apply Week 8 modifications, generate 3D and cut list, and present at 1pm.',
        tip: 'Show Jose the layout, explain why you chose each cabinet type.',
      },
    ],

    10: [
      // Mon
      {
        topic: '3D View Navigation & Camera Angles',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Navigate the 3D view confidently from any angle',
          'Save named camera views for a project',
          'Export camera views as images',
        ],
        task: 'Open a completed kitchen. Save 3 camera views: overall, island detail, and corner. Export each as an image.',
        tip: 'Best client angle is from the kitchen entry at eye height.',
      },
      // Tue
      {
        topic: 'Material & Color Application in 3D',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Apply finishes and colors in the 3D view',
          'Create two distinct finish versions of the same kitchen',
          'Export both versions for client comparison',
        ],
        task: 'Create Version A (white perimeter, navy island) and Version B (greige perimeter, white island). Export both.',
        tip: 'Always show two options side-by-side — clients decide faster with a comparison.',
      },
      // Wed
      {
        topic: 'Lighting & Rendering Quality',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Adjust lighting settings in an existing 3D view',
          'Export a render at the highest quality setting',
          'Compare before and after lighting adjustment',
        ],
        task: 'Adjust lighting on an existing 3D view, export at highest quality, compare before and after. Save both.',
        tip: 'Good lighting does more for client confidence than cabinet details.',
      },
      // Thu
      {
        topic: 'Creating Client Presentation Exports',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Assemble a complete client presentation export package',
          'Follow the NFR file naming convention',
          'Ensure the package contains all 4 required items',
        ],
        task: 'Export a full package: 2 camera views, floor plan, and cut list. Name each file: [ClientLastName]-[Date]-[Version].',
        tip: 'Every package needs the same 4 items every time.',
      },
      // Fri
      {
        topic: 'Week 10 Review — Full Presentation Walkthrough',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Build a kitchen to Jose\'s brief and prepare a full presentation package',
          'Walk Jose through the design as if he were the client',
          'Demonstrate camera angles, color options, and the cut list',
        ],
        task: 'Jose plays the client. Build the kitchen to his brief, prepare the full package, and walk him through it at 1pm.',
        tip: 'This is your chance to practice being a designer, not just a software operator.',
      },
    ],

    11: [
      // Mon
      {
        topic: 'Understanding Cut List Output',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Generate a cut list from a completed kitchen project',
          'Identify every part on the list by name and purpose',
          'Circle or flag any entry that looks incorrect',
        ],
        task: 'Generate a cut list from a completed kitchen. Go line by line, identify every part, circle anything that looks wrong.',
        tip: 'The cut list is what Scott and the CNC work from. Read it like you\'re the one making the cut.',
      },
      // Tue
      {
        topic: 'Part Labeling & Sheet Optimization',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Review the sheet layout and nesting output',
          'Calculate waste percentage from the nesting layout',
          'Identify the largest and smallest cut on the sheet',
        ],
        task: 'Review a Mozaik sheet layout and nesting output. Note the waste percentage. Identify the largest and smallest cut.',
        tip: 'If waste is above 20%, flag to Jose before approving.',
      },
      // Wed
      {
        topic: 'Material Quantity Reports',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Generate a full material quantity report',
          'List total sheet count, door count, drawer count, and hardware',
          'Compare the quantity report to the cut list for accuracy',
        ],
        task: 'Generate a full material quantity report. List total sheets, door count, drawer count, and hinges. Compare to the cut list.',
        tip: 'This becomes your purchase order — it must be accurate.',
      },
      // Thu
      {
        topic: 'CNC Output Files & Job Setup',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Export CNC-ready files from Mozaik',
          'Apply the NFR file naming convention',
          'Organize exported files in a labeled folder',
        ],
        task: 'Export CNC-ready files. Name each: [Client]-[Date]-[PartType]. Place in a correctly labeled folder.',
        tip: 'File naming is not optional — Scott needs to know which files go with which job.',
      },
      // Fri
      {
        topic: 'Week 11 Review — Full Manufacturing Package',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Generate a complete production package for a real job',
          'Hand the package off to Scott with everything labeled',
          'Present the package to Jose at 1pm',
        ],
        task: 'Generate the complete production package: cut list, material report, CNC files, labeled folder. Hand to Scott. Present to Jose at 1pm.',
        tip: 'This is the full circle — design to production.',
      },
    ],

    12: [
      // Mon
      {
        topic: 'Project Planning from Client Brief',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Read and interpret a client brief before opening Mozaik',
          'Write out room dimensions and design constraints',
          'Prepare 3 clarifying questions for the client',
        ],
        task: 'Jose gives a client brief. Before opening Mozaik: write the room dimensions, constraints, and 3 questions for the client. Then set up the room in Mozaik.',
        tip: 'The best design starts before you open the software.',
      },
      // Tue
      {
        topic: 'Layout & Cabinet Selection',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Build a full cabinet layout from the client brief',
          'Select appropriate cabinet types for each position',
          'Apply Week 8 modifications where required',
        ],
        task: 'Build the full cabinet layout from the brief. Select appropriate cabinet types. Apply Week 8 modifications. Layout only — no finishes yet.',
        tip: 'Get the layout perfect before touching color.',
      },
      // Wed
      {
        topic: 'Finish, Modifications & Final Design',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Apply client-selected finishes to the layout',
          'Create two distinct color option versions',
          'Make final adjustments and review in 3D',
        ],
        task: 'Apply finishes, create two color options, make final adjustments, and view in 3D. End with the 3D view open.',
        tip: 'Always end with 3D view open — if it doesn\'t look right there, it won\'t look right in person.',
      },
      // Thu
      {
        topic: '3D Renders, Presentation & Cut List',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Generate renders for both color option versions',
          'Export floor plan and cut list',
          'Assemble everything in a labeled package folder',
        ],
        task: 'Generate the complete package: renders for both options, floor plan, cut list, material report, labeled folder.',
        tip: 'Package should be clean enough Jose could send it to the client without reviewing.',
      },
      // Fri
      {
        topic: 'Week 12 Final — Complete Project Presentation',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Present the full project to Jose at 1pm',
          'Walk through every design decision',
          'Write a self-assessment: 3 things learned, 1 to improve',
        ],
        task: 'Present the full project to Jose at 1pm. Walk through every decision. After: write 3 things learned this week and 1 to improve.',
        tip: 'Week 12 is not the end — it\'s the baseline.',
      },
    ],
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // CNC PLAN — Scott (Weeks 1–12)
  // ═══════════════════════════════════════════════════════════════════════════

  const CNC_URL   = 'https://www.shopsabre.com/shopsabre-university/';
  const CNC_LABEL = 'ShopSabre University';

  const CNC_PLAN = {
    1: [
      {
        topic: 'Machine Overview — Parts, Axes & Work Envelope',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Identify all axes on the physical machine',
          'Understand the machine\'s work envelope dimensions',
          'Learn the control panel layout and key functions',
        ],
        task: 'Watch the introduction video. Walk to the machine and identify each axis by name. Label them on a hand-drawn diagram.',
        tip: 'You must know where each axis moves before you touch a control.',
      },
      {
        topic: 'Safety — Emergency Stop, Pinch Points & PPE',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Locate every safety feature on the machine',
          'Know the emergency stop procedure by memory',
          'Identify all pinch points on the machine perimeter',
        ],
        task: 'Watch the safety video. Walk the machine perimeter and identify every safety feature. Write them all down.',
        tip: 'Know where the e-stop is before you ever start the machine.',
      },
      {
        topic: 'Practice — Safety Walk',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Walk the machine safety route from memory',
          'Recite the emergency stop procedure without prompting',
          'Demonstrate all safety knowledge to Jose',
        ],
        task: 'No video today — full practice. Walk the machine safety route 3 times from memory. Recite the emergency procedure to Jose.',
        tip: 'If you can\'t do it from memory today, you\'re not ready for Thursday.',
      },
      {
        topic: 'Power On/Off Sequence & Homing',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Execute the startup sequence in the correct order',
          'Home all axes correctly',
          'Understand why homing matters for every job',
        ],
        task: 'Watch the startup video. With Jose present, power on and home the machine. Do it 3 times.',
        tip: 'Skipping homing causes crashes. Always home first.',
      },
      {
        topic: 'Week 1 Review',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Recall the 3 most important safety rules without reference',
          'Explain what happens if homing is skipped',
          'Draw the machine axes from memory',
        ],
        task: 'Write in the training log: (1) What are the 3 most important safety rules? (2) What happens if you skip homing? (3) Draw the machine axes from memory.',
        tip: 'You cannot move forward without knowing this section cold.',
      },
    ],

    2: [
      {
        topic: 'Software Overview — Toolbars, Workspace & File Types',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Identify every toolbar and menu in the CNC software',
          'Understand the file type the machine uses for jobs',
          'Navigate the workspace without assistance',
        ],
        task: 'Watch the software interface video. Open the software and identify every toolbar. List what each toolbar does.',
        tip: 'Learn the software before you touch the machine.',
      },
      {
        topic: 'Loading and Opening a Job File',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Locate a job file on the shop computer',
          'Load the file into the CNC software correctly',
          'Verify the file loaded without errors',
        ],
        task: 'Watch the opening files video. Load 3 different sample files provided by Jose.',
        tip: 'Always double-check the file name matches the job before loading.',
      },
      {
        topic: 'Practice — File Loading',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Load 5 different files independently',
          'Identify the job and what it will cut for each file',
          'Confirm correct loading without assistance',
        ],
        task: 'Open 5 different files. For each, state what job it is and what it will cut. No cuts — software only.',
        tip: 'Speed in file loading prevents mistakes under pressure.',
      },
      {
        topic: 'Toolpath Preview',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Run the toolpath simulation for a loaded file',
          'Identify each cut pass in the simulation',
          'Spot potential errors before any cutting begins',
        ],
        task: 'Watch the toolpath simulation video. Preview the sample file and describe each cut pass out loud.',
        tip: 'If the preview looks wrong, it IS wrong. Stop and call Jose.',
      },
      {
        topic: 'Week 2 Review',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'State the file format the machine uses',
          'Explain what toolpath preview reveals before cutting',
          'Know when to stop and call Jose',
        ],
        task: 'Write: What file format does the machine use? What does toolpath preview tell you? What would make you stop and call Jose?',
        tip: 'These are the three most important questions in software operation.',
      },
    ],

    3: [
      {
        topic: 'Spoilboard — Purpose & Maintenance',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Understand the spoilboard\'s purpose in the cutting process',
          'Identify when the spoilboard needs replacement',
          'Know the maintenance procedure',
        ],
        task: 'Watch the spoilboard video. Inspect the actual spoilboard and write its current condition in the training log.',
        tip: 'A damaged spoilboard causes cut-through problems.',
      },
      {
        topic: 'Hold-Down Methods — Clamps, Vacuum & Screws',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Set up each hold-down type correctly',
          'Know which method to use for each material type',
          'Secure a panel correctly before cutting',
        ],
        task: 'Watch the hold-down video. Set up a scrap panel using the method Jose specifies.',
        tip: 'A panel that shifts mid-cut ruins the part and can break a bit.',
      },
      {
        topic: 'Practice — Hold-Down',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Set up panels using three different hold-down methods',
          'Have Jose inspect each setup before moving on',
          'Know the correct method for every material type we use',
        ],
        task: 'Set up 3 different scrap panels using 3 different hold-down methods. Jose inspects each.',
        tip: 'Consistent hold-down setup is what separates good cuts from bad ones.',
      },
      {
        topic: 'Setting Material Zero — X, Y, Z',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Set X and Y zero to the material corner correctly',
          'Set Z zero to the material surface',
          'Understand the consequence of incorrect zero',
        ],
        task: 'Watch the zero-setting video. Practice setting Z-zero on a scrap panel with Jose present.',
        tip: 'Wrong Z-zero = cutting into the spoilboard or not cutting through.',
      },
      {
        topic: 'Week 3 Review',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Explain why Z-zero matters',
          'State which hold-down method is used for sheet goods',
          'Walk Jose through the full material setup sequence from memory',
        ],
        task: 'Write: Why does Z-zero matter? What hold-down method do we use for sheet goods? Walk Jose through the full material setup sequence from memory.',
        tip: 'Material setup is the foundation of every cut. Own it.',
      },
    ],

    4: [
      {
        topic: 'Cutting a Straight Line — Feed Rate & Cut Direction',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Set up a straight-line cut correctly',
          'Understand climb vs. conventional cutting direction',
          'Verify the cut setup before running',
        ],
        task: 'Watch the basic cutting video. Set up a straight-line cut on scrap. Jose approves before running.',
        tip: 'Climb cutting can grab the material — use conventional on first passes.',
      },
      {
        topic: 'Cutting a Rectangle — Pocket vs. Profile & Tabs',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Set up a profile cut with tabs correctly',
          'Understand the difference between pocket and profile cuts',
          'Identify tab locations in the toolpath preview',
        ],
        task: 'Watch the rectangle cuts video. Set up a rectangle cut with tabs on scrap.',
        tip: 'Tabs prevent parts from flying when the cut completes. Never cut without tabs on loose parts.',
      },
      {
        topic: 'Practice — First Live Cuts',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Run 3 live rectangle cuts on scrap material',
          'Measure each part after cutting',
          'Compare measured dimensions to programmed dimensions',
        ],
        task: 'Cut 3 rectangles from scrap material. Jose supervises. Measure each part after cutting — compare to programmed dimensions.',
        tip: 'First cuts are about process. Slow and correct beats fast and wrong.',
      },
      {
        topic: 'Feed Rates & Speeds',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Understand what feed rate and spindle speed mean',
          'Know NFR standard settings for sheet goods',
          'Know when to adjust and when to stop',
        ],
        task: 'Watch the feed and speed video. Write down the standard settings Jose uses for plywood and MDF.',
        tip: 'If the bit burns or chatters, something is wrong — stop and ask.',
      },
      {
        topic: 'Week 4 Review',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Explain what a tab is and why it exists',
          'Compare your cut dimensions to programmed dimensions',
          'Describe what happened on your first cut',
        ],
        task: 'Write: What is a tab and why does it exist? What were your cut dimensions vs. programmed dimensions? What happened on your first cut?',
        tip: 'Your first cuts tell you a lot about your setup habits.',
      },
    ],

    5: [
      {
        topic: 'What Mozaik Outputs — File Types & Naming',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Understand what Mozaik generates for the CNC',
          'Know the NFR file naming convention',
          'Understand the difference between box part and door files',
        ],
        task: 'Sit with Maria for 30 minutes. Have her show you how she exports a cut file from Mozaik. Write down what you observed.',
        tip: 'Maria is your upstream — understand her output before cutting it.',
      },
      {
        topic: 'Loading a Mozaik File',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Load a real Mozaik export into the ShopSabre software',
          'Verify the file loaded correctly with no errors',
          'Preview the full toolpath',
        ],
        task: 'Load a real Mozaik export. Preview the full toolpath. List every part you see in the preview.',
        tip: 'Every part in the preview should match the cut list Maria generated.',
      },
      {
        topic: 'Practice — Reading Cut Files',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Load 3 different Mozaik files independently',
          'List every part by name and dimension before previewing',
          'Verify each part against the preview',
        ],
        task: 'Load 3 different Mozaik files. For each, list every part by name and dimension before previewing. Then preview and verify.',
        tip: 'Reading before previewing builds the habit of thinking before cutting.',
      },
      {
        topic: 'Cross-Checking Cut List Against Machine File',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Compare the Mozaik cut list to the loaded machine file',
          'Identify any discrepancies between them',
          'Know what to do if they don\'t match',
        ],
        task: 'Take a real Mozaik cut list and a loaded machine file. Cross-check every part. Flag anything that doesn\'t match to Jose.',
        tip: 'If the file and cut list disagree, stop. Do not cut.',
      },
      {
        topic: 'Week 5 Review',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Explain the difference between box part, door, and drawer front files',
          'State the procedure when file and cut list don\'t match',
          'Describe how Maria\'s output becomes your input',
        ],
        task: 'Write: What is the difference between a box part, a door, and a drawer front in a Mozaik file? What do you do if the file and cut list don\'t match?',
        tip: 'Understanding the upstream makes you a better operator.',
      },
    ],

    6: [
      {
        topic: 'Pre-Cut Checklist',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Build a personal pre-cut checklist for every job',
          'Get it approved by Jose as the NFR standard',
          'Commit to running it before every single cut',
        ],
        task: 'Write your own pre-cut checklist. Bring it to Jose for approval. This becomes your permanent standard.',
        tip: 'If you skip the checklist once, you\'ll skip it again. Don\'t start that habit.',
      },
      {
        topic: 'First Live Mozaik Cut — Simple Parts',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Run a complete Mozaik job file from load to finished parts',
          'Follow the pre-cut checklist on every step',
          'Measure all parts after cutting and record results',
        ],
        task: 'Run the cut with Jose watching the full session. Measure every part. Save results in the training log.',
        tip: 'First cut is about process, not speed. Slow and correct.',
      },
      {
        topic: 'Practice — Second Cut Independently',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Run a complete Mozaik cut independently',
          'Measure all parts and compare to programmed dimensions',
          'Flag any variance outside tolerance to Jose',
        ],
        task: 'Run a second Mozaik cut on your own. Jose is nearby but not watching every step. Measure all parts. Flag any variance.',
        tip: 'Independence is earned by doing it correctly, not quickly.',
      },
      {
        topic: 'Post-Cut Part Inspection',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Measure every cut part against the cut list',
          'Identify acceptable vs. unacceptable variance',
          'Know when to recut vs. when to flag to Jose',
        ],
        task: 'Inspect all parts from the week\'s cuts. Record measurements in the log. Flag anything outside tolerance to Jose.',
        tip: 'Measure twice, flag once — don\'t guess.',
      },
      {
        topic: 'Week 6 Review',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Describe what was hardest about the first live cut',
          'Identify what you would do differently',
          'Write the final pre-cut checklist from memory',
        ],
        task: 'Write: What was hardest about your first cut? What would you do differently? Write your final pre-cut checklist from memory.',
        tip: 'The gap between your first cut and your tenth is where skill lives.',
      },
    ],

    7: [
      {
        topic: 'Nesting — Part Arrangement & Waste Minimization',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Understand how nesting arranges parts on a panel',
          'Calculate waste percentage from a nesting layout',
          'Identify when waste is too high to approve',
        ],
        task: 'Watch the nesting video. Review a Mozaik sheet layout. Calculate the waste percentage.',
        tip: 'Above 20% waste, flag to Jose before approving the cut.',
      },
      {
        topic: 'Cutting a Full 4×8 Panel',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Load and set up a full panel with multiple parts',
          'Manage the cut sequence correctly',
          'Handle tabs correctly on a multi-part panel',
        ],
        task: 'Assist Jose or observe a full panel cut. Write every step he takes in sequence.',
        tip: 'Full panels are heavy — get help loading and unloading.',
      },
      {
        topic: 'Practice — Full Panel Independently',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Load, cut, and unload a full panel independently',
          'Stack parts by part type after unloading',
          'Pass Jose\'s inspection',
        ],
        task: 'Load, cut, and unload a full panel on your own. Stack parts by part type. Jose inspects.',
        tip: 'Organized parts after unloading saves time in assembly.',
      },
      {
        topic: 'Panel Handling — Loading, Unloading & Stacking',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Load a full panel safely without bowing',
          'Unload cut parts without breaking tabs incorrectly',
          'Stack finished parts by part type and job',
        ],
        task: 'Practice 3 full panel load/unload cycles with scrap material.',
        tip: 'Never stack cut parts randomly — a mixed stack causes job errors downstream.',
      },
      {
        topic: 'Week 7 Review',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Explain how to prevent a panel from shifting mid-cut',
          'Describe the correct stacking method for finished parts',
          'Demonstrate a full panel cut sequence from memory',
        ],
        task: 'Write: How do you prevent a panel from shifting? What is the correct stacking method for finished parts?',
        tip: 'Handling is half the job. Treat it seriously.',
      },
    ],

    8: [
      {
        topic: 'Door Dimensions — How Mozaik Sets Them',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Understand how Mozaik calculates door sizing from opening dimensions',
          'Know the standard overlay and gap settings',
          'Read door dimensions correctly from the cut list',
        ],
        task: 'Review door dimensions in a real Mozaik file with Maria. Write down how door width is calculated from cabinet opening.',
        tip: 'Door sizing errors are the most common defect. Know the formula.',
      },
      {
        topic: 'Cutting Door Panels — Tolerances & Grain Direction',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Set up a door cut with correct grain direction',
          'Run the cut with proper tolerances',
          'Inspect all door panels after cutting',
        ],
        task: 'Watch the door cutting module. Cut a set of 4 doors from a real Mozaik file. Measure all 4.',
        tip: 'Grain direction is non-negotiable on wood-look panels. Wrong direction = reject.',
      },
      {
        topic: 'Practice — Full Door Set',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Cut a complete door set from a real job file independently',
          'Measure all doors against the cut list',
          'Flag anything outside tolerance',
        ],
        task: 'Cut a complete door set from a real job file without Jose present. Measure all doors. Flag anything outside tolerance.',
        tip: 'Door quality is what the client sees and touches. Own the standard.',
      },
      {
        topic: 'Drawer Fronts — Sizing & False Front Rules',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Understand drawer front sizing rules',
          'Cut a set of drawer fronts correctly',
          'Verify false front reveal is consistent on all four sides',
        ],
        task: 'Watch the drawer front video. Cut a drawer front set from scrap. Check reveal consistency on all sides.',
        tip: 'Drawer front gaps should be equal top, bottom, and sides. Measure all four.',
      },
      {
        topic: 'Week 8 Review',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'State the tolerance used on door width',
          'Explain why grain direction matters',
          'Describe the reveal standard for drawer fronts',
        ],
        task: 'Write: What tolerance do we use on door width? Why does grain direction matter? What is the reveal standard for drawer fronts?',
        tip: 'Doors and drawer fronts are the client-facing parts. Hold the standard.',
      },
    ],

    9: [
      {
        topic: 'Bit Types — Compression, Downcut, Upcut & V-Bits',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Identify each bit type by sight',
          'Know which bit to use for each material and cut type',
          'Know where bits are stored and how they\'re labeled',
        ],
        task: 'Walk the shop and find every bit. Identify its type. Write down which bit is used for sheet good box parts and which for doors.',
        tip: 'Using the wrong bit destroys surface quality.',
      },
      {
        topic: 'Changing a Bit — Collet, Torque & Runout Check',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Change a bit safely and correctly',
          'Torque the collet to the correct specification',
          'Perform a runout check before cutting',
        ],
        task: 'Watch the tool change video. Observe Jose change a bit. Then do it yourself under supervision.',
        tip: 'Under-torqued bits spin loose mid-cut. Over-torqued collets crack.',
      },
      {
        topic: 'Practice — Bit Change Independently',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Complete 3 full bit changes independently',
          'Pass Jose\'s inspection for torque and runout on each',
          'Build the habit before it matters on a live job',
        ],
        task: 'Complete 3 full bit changes independently. Jose inspects each for correct torque and runout. No cuts until approved.',
        tip: 'Bit changes done right take 5 minutes. Done wrong, they cost hours.',
      },
      {
        topic: 'Tool Life — When to Replace & Signs of a Dull Bit',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Identify visual signs of a dull bit',
          'Know the life expectancy of our standard bits',
          'Know the replacement process and who to notify',
        ],
        task: 'Watch the tool wear video. Inspect all current bits and note condition in the log. Flag any that need replacement to Jose.',
        tip: 'A dull bit burns, chatters, and tears the material. If you see any of those, stop.',
      },
      {
        topic: 'Week 9 Review',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Describe how to identify a dull bit',
          'Explain what a dull bit does to cut quality',
          'Write the correct bit change procedure from memory',
        ],
        task: 'Write: How do you know a bit is dull? What does a dull bit do to cut quality? What is the correct change procedure from memory?',
        tip: 'Tool management is machine management. Own both.',
      },
    ],

    10: [
      {
        topic: 'Daily Maintenance — Lubrication, Dust Collection & Rail Cleaning',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Identify all lubrication points on the machine',
          'Clean the rails correctly',
          'Empty and check the dust collection system',
        ],
        task: 'Watch the daily maintenance video. Walk the machine and find every lubrication point. Do the full daily maintenance routine with Jose.',
        tip: 'A dirty machine makes bad cuts. Maintenance is part of the job.',
      },
      {
        topic: 'Weekly Maintenance Checklist',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Build a personal weekly maintenance checklist',
          'Understand what happens when maintenance is skipped',
          'Commit to the maintenance schedule',
        ],
        task: 'Watch the weekly maintenance video. Build Scott\'s personal weekly maintenance checklist. Jose approves it.',
        tip: 'The checklist is not optional — it\'s what protects the machine investment.',
      },
      {
        topic: 'Practice — Full Maintenance Routine',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Complete the full daily maintenance routine independently',
          'Complete the applicable weekly checklist items',
          'Pass Jose\'s inspection',
        ],
        task: 'Complete full daily maintenance independently. Then do the weekly checklist items that apply to today. Jose inspects.',
        tip: 'Maintenance done consistently costs less than repairs done reactively.',
      },
      {
        topic: 'Calibration — Squaring the Machine & Z-Height Accuracy',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Understand what machine calibration means',
          'Assist with a calibration check on the actual machine',
          'Know when calibration is needed vs. when it\'s an operator error',
        ],
        task: 'Watch the calibration video. Assist Jose with a calibration check on the machine.',
        tip: 'If cuts are consistently off in one direction, that\'s a calibration issue, not an operator error.',
      },
      {
        topic: 'Week 10 Review',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Explain what happens to cut quality when rails aren\'t clean',
          'State the first thing to check when a cut is off-dimension',
          'Complete the full maintenance routine from memory',
        ],
        task: 'Write: What happens to cut quality if rails aren\'t clean? What\'s the first thing you check if a cut is off-dimension? Complete the full maintenance routine from memory.',
        tip: 'A machine you maintain is a machine you understand.',
      },
    ],

    11: [
      {
        topic: 'Part Inspection Process — What to Measure & Acceptable Tolerances',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Know the tolerance range for box panels, doors, and drawer fronts',
          'Measure parts correctly with a tape measure',
          'Record measurements accurately in the inspection log',
        ],
        task: 'Build a part inspection checklist with Jose. Write the tolerance for each part type.',
        tip: 'Measure twice. Never guess.',
      },
      {
        topic: 'Identifying Cut Defects — Tearout, Burning, Undersized & Oversized',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Identify each defect type visually',
          'Know the cause of each defect',
          'Know which defects are fixable vs. require a recut',
        ],
        task: 'Watch the quality control video. Find examples of each defect in scrap. Photograph and label each.',
        tip: 'Every defect has a cause. Find the cause, not just the defect.',
      },
      {
        topic: 'Practice — Full Inspection',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Inspect a complete set of parts from a real job',
          'Record every measurement in the inspection log',
          'Flag anything outside tolerance without prompting',
        ],
        task: 'Inspect a complete set of parts from a real job. Record every measurement. Flag anything outside tolerance.',
        tip: 'Do not release parts that fail inspection without Jose\'s explicit approval.',
      },
      {
        topic: 'What to Do When a Part is Wrong',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Apply the decision tree for a wrong part — recut, trim, or flag',
          'Understand the cost of each option',
          'Know how to communicate a recut to Jose clearly',
        ],
        task: 'Discuss with Jose: at what variance does a part get flagged vs. accepted? Write the decision rules.',
        tip: 'Never use a part you\'re not sure about. A bad part costs more to fix in assembly than to recut now.',
      },
      {
        topic: 'Week 11 Review',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'State the tolerance range for a box panel',
          'Answer the first question when a part is wrong',
          'Complete a full inspection of today\'s cut parts',
        ],
        task: 'Write: What is the tolerance range for a box panel? What is the first question when a part is wrong? Complete a full inspection of today\'s cut parts.',
        tip: 'Quality control is not a final step — it\'s built into every step.',
      },
    ],

    12: [
      {
        topic: 'Job Setup — Receive File, Review Cut List & Stage Material',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Receive a job file from Maria and review the full cut list',
          'Stage all material in the correct zone with correct labels',
          'Flag any cut list discrepancies before staging begins',
        ],
        task: 'Take a real job from Maria. Review the file and cut list. Pull and stage all material. Label the staging bundle: [JobName] | [CutDate] | Scott.',
        tip: 'If anything on the cut list looks wrong, call Maria before staging.',
      },
      {
        topic: 'Cut the Job — All Panels, Doors & Drawer Fronts',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Run the full cut in the correct sequence',
          'Follow the pre-cut checklist on every step',
          'Manage tabs and finished parts correctly throughout',
        ],
        task: 'Run the full cut. Jose spot-checks only — no hand-holding.',
        tip: 'You know how to do this. Trust your training.',
      },
      {
        topic: 'Practice — Second Full Job',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Run a second full job independently',
          'Maintain the same quality standard as the first',
          'Identify where you\'re gaining confidence and where you need more reps',
        ],
        task: 'Run a second full job independently. Jose is available but not watching.',
        tip: 'Speed comes from confidence. Confidence comes from doing it correctly.',
      },
      {
        topic: 'Part Inspection & Job Packaging',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Inspect every part against the cut list',
          'Flag any issues before packaging',
          'Package parts by cabinet and label for assembly or staging',
        ],
        task: 'Inspect all parts from Tuesday\'s cut. Package by cabinet. Write the inspection report.',
        tip: 'The package you send to assembly is your signature. Make it clean and organized.',
      },
      {
        topic: 'Week 12 Graduation',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Present the full job from Mozaik file to finished parts',
          'Identify what went well and what needs work',
          'Write your training log final entry',
        ],
        task: 'Present to Jose: walk through the full job from Mozaik file to finished parts. What went well? What needs work? What\'s next? Write your training log final entry.',
        tip: 'Week 12 is the baseline. Every real job from here is your ongoing training.',
      },
    ],
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // FIELD PLAN — Jorge (Weeks 1–10)
  // ═══════════════════════════════════════════════════════════════════════════

  const FIELD_URL_SAFETY  = 'https://www.osha.gov/construction';
  const FIELD_URL_QUALITY = 'https://www.youtube.com/results?search_query=construction+quality+control';
  const FIELD_LABEL       = 'Training Resource';

  const FIELD_PLAN = {
    1: [
      {
        topic: 'PPE Requirements by Trade',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'Know the required PPE for each NFR trade type',
          'Check crew PPE before work starts each day',
          'Correct crew members if PPE is missing',
        ],
        task: 'Review the OSHA construction safety page. List the required PPE for: paint, demo, flooring, and drywall.',
        tip: 'You are responsible for crew PPE on your site. If someone gets hurt without PPE, it comes back to you.',
      },
      {
        topic: 'Hazard Identification',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'Identify the 5 most common job site hazards for NFR work',
          'Know how to report a hazard to Jose',
          'Create a hazard log entry with photos',
        ],
        task: 'Walk a real or mock job site. Identify and photograph 5 potential hazards. Report to Jose via WhatsApp with photos.',
        tip: 'The hazard you identify today is the injury that doesn\'t happen next week.',
      },
      {
        topic: 'Practice — Safety Walk',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'Complete an independent safety walk on an active job site',
          'Log every hazard identified',
          'Report findings to Jose without prompting',
        ],
        task: 'Complete an independent safety walk on an active job site. Log every hazard. Report to Jose.',
        tip: 'A safety walk you do once gets noticed. One you do every time saves someone.',
      },
      {
        topic: 'Chemical Safety — Paint, Epoxy & Adhesives',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'Know SDS requirements for paint, epoxy, and adhesive products',
          'Ensure proper ventilation before crew starts chemical work',
          'Know emergency response for chemical exposure',
        ],
        task: 'Look up the SDS for the paint product currently on a job. Write down the ventilation requirement and emergency response.',
        tip: 'Never let crew work with chemical products in an unventilated space.',
      },
      {
        topic: 'Week 1 Review',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'State the 3 non-negotiable PPE items for a demo job',
          'Know the protocol when a crew member refuses PPE',
          'Demonstrate safety walk from memory',
        ],
        task: 'Write: What are the 3 non-negotiable PPE items for a demo job? What do you do if a crew member refuses to wear PPE?',
        tip: 'PPE refusal is a non-negotiable situation. Know your response before it happens.',
      },
    ],

    2: [
      {
        topic: 'What\'s in a Scope Document',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'Read and understand all sections of an NFR scope/proposal',
          'Identify the start and end of each line item',
          'Know what is and is not included in the scope',
        ],
        task: 'Read a real NFR proposal from the templates folder. List every line item and what it covers.',
        tip: 'If you don\'t understand a line item, ask Jose before the job starts — not during.',
      },
      {
        topic: 'Line Item Breakdown',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'Translate each line item into specific field tasks',
          'Know who performs each task',
          'Estimate what each task requires in time and materials',
        ],
        task: 'Take the proposal from Monday. For each line item, write: who does it, what materials they need, how long it should take.',
        tip: 'This is how you plan the job before you arrive on site.',
      },
      {
        topic: 'Practice — Scope Review',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'Review a scope for a real upcoming job',
          'Write a complete field plan: who, what, when for each line item',
          'Present the plan to Jose for review',
        ],
        task: 'Review a scope for an upcoming real job. Write your field plan: who, what, when for each line item.',
        tip: 'A written plan before the job prevents a verbal excuse during the job.',
      },
      {
        topic: 'Change Order Triggers — What is NOT in Scope',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'Identify when a client request is outside the original scope',
          'Know the exact language to use when a change order situation arises',
          'Know how to escalate to Jose immediately',
        ],
        task: 'Review NFR\'s change order template. Write 3 examples of scope creep that Jorge might encounter on site.',
        tip: 'Never agree to extra work without calling Jose first. Every undocumented extra eats profit.',
      },
      {
        topic: 'Week 2 Review',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'State the 3 most common scope creep situations in NFR work',
          'Know the exact words to say to a client asking for extra work',
          'Apply scope reading skills to a real upcoming job',
        ],
        task: 'Write: What are the 3 most common scope creep situations in NFR work? What exact words do you say to a client who asks for extra work?',
        tip: 'The right words said calmly on site save the relationship and the margin.',
      },
    ],

    3: [
      {
        topic: 'How to Give Clear Task Instructions',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'Give instructions that include: what, how, when, and what done looks like',
          'Practice written task briefings before verbal ones',
          'Get a briefing reviewed by Jose before using it',
        ],
        task: 'Practice giving a task briefing — written first, then verbal. Jose reviews.',
        tip: 'If your instruction can be misunderstood, it will be.',
      },
      {
        topic: 'Setting Daily Production Targets',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'Set a realistic daily output target for each trade',
          'Communicate it to the crew at the start of the day',
          'Check progress at midday and adjust',
        ],
        task: 'For a current job, set a daily target for the crew. Check at 11am. Report to Jose by EOD whether target was hit.',
        tip: 'A crew without a daily target drifts. A crew with one moves.',
      },
      {
        topic: 'Practice — Daily Briefing',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'Give the full crew morning briefing independently',
          'Include: today\'s target, each person\'s assignment, what done looks like',
          'Have Jose observe and provide feedback',
        ],
        task: 'Give the full crew morning briefing independently. Jose observes. Briefing must include: today\'s target, each person\'s assignment, and what done looks like.',
        tip: 'The briefing sets the tone. Own it.',
      },
      {
        topic: 'Managing Crew Pace and Quality',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'Identify when a crew is falling behind pace',
          'Correct pace without micromanaging',
          'Catch quality issues in the moment before they compound',
        ],
        task: 'Observe a crew for 2 hours. Log pace observations. Identify one quality or pace correction and make it. Report to Jose.',
        tip: 'Correct early and clearly. Don\'t let problems build until they\'re too big to fix on-site.',
      },
      {
        topic: 'Week 3 Review',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'Describe the hardest part of directing a crew',
          'State the protocol when a crew member pushes back on instruction',
          'Apply briefing skills on a real job site',
        ],
        task: 'Write: What is the hardest part of directing a crew? What do you do when a crew member pushes back on your instruction?',
        tip: 'Pushback handled well builds authority. Handled poorly, it undermines it.',
      },
    ],

    4: [
      {
        topic: 'Paint Prep Standards',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Know the surface prep requirements before painting',
          'Verify prep is complete before paint starts',
          'Flag any surface issues that will affect the finish',
        ],
        task: 'Review NFR\'s paint SOP. List every prep step in order. Walk a prepped surface and verify against the list.',
        tip: '80% of a bad paint job is bad prep. Never let paint start on a surface that isn\'t ready.',
      },
      {
        topic: 'Cut Line and Edge Standards',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Define what an acceptable cut line looks like',
          'Identify unacceptable cut lines on a real job',
          'Know the correction process for failed cut lines',
        ],
        task: 'Inspect cut lines on a paint job in progress or completed. Photograph any that fail the standard. Show Jose.',
        tip: 'Cut lines are what clients look at first. They notice before anything else.',
      },
      {
        topic: 'Practice — Full Paint Inspection',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Complete an independent paint inspection on a real or practice surface',
          'Photograph all findings',
          'Log findings with specific descriptions',
        ],
        task: 'Complete an independent paint inspection on a real or practice surface. Photograph and log all findings.',
        tip: 'What you document, you own. Document everything.',
      },
      {
        topic: 'Paint Inspection Checklist',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Build a personal paint inspection checklist',
          'Cover all inspection points consistently',
          'Get Jose\'s approval before using it on jobs',
        ],
        task: 'Build the paint inspection checklist. Jose approves it.',
        tip: 'The checklist is what keeps you from missing something on a busy day.',
      },
      {
        topic: 'Week 4 Review',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Use the new paint inspection checklist on a completed job',
          'Write what passed, what failed, what surprised you',
          'Own the paint quality standard for every NFR job going forward',
        ],
        task: 'Inspect a completed paint job using your new checklist. Write: What passed, what failed, what did you find that surprised you?',
        tip: 'Your checklist is only as good as your commitment to using it every time.',
      },
    ],

    5: [
      {
        topic: 'Subfloor Prep Standards',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Know acceptable subfloor conditions for LVP and carpet',
          'Identify issues that must be fixed before install begins',
          'Know who is responsible for fixing each type of issue',
        ],
        task: 'Review subfloor prep standards. Inspect a subfloor on a job site and log its condition.',
        tip: 'A bad subfloor telegraphs through any flooring. Never approve install on a bad subfloor.',
      },
      {
        topic: 'Seam and Transition Standards',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Define an acceptable seam in LVP and carpet',
          'Identify unacceptable seam placement or quality',
          'Know the transition strip standard at doorways',
        ],
        task: 'Inspect seams and transitions on a completed flooring job. Photograph any that fail the standard.',
        tip: 'Seams in high-traffic areas and visible doorways are client hot buttons. Inspect those first.',
      },
      {
        topic: 'Practice — Full Flooring Inspection',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Complete an independent flooring inspection',
          'Log all findings with photos',
          'Flag any issues before client walkthrough',
        ],
        task: 'Complete an independent flooring inspection. Log all findings with photos.',
        tip: 'Flooring issues found before client walkthrough cost nothing. Found after, they cost trust.',
      },
      {
        topic: 'Flooring Inspection Checklist',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Build a personal flooring inspection checklist',
          'Cover subfloor, seams, transitions, and edges',
          'Get Jose\'s approval before using it on jobs',
        ],
        task: 'Build Jorge\'s flooring inspection checklist. Jose approves.',
        tip: 'Same principle as paint — the checklist is your standard.',
      },
      {
        topic: 'Week 5 Review',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Inspect a flooring job using the new checklist',
          'Write findings including what passed and what failed',
          'Identify one improvement to the checklist',
        ],
        task: 'Inspect a flooring job using your checklist. Write findings: what passed, what failed, and one thing to add to the checklist.',
        tip: 'A checklist that never improves eventually becomes obsolete.',
      },
    ],

    6: [
      {
        topic: 'Demo Scope Verification',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'Verify what comes down and what stays before demo starts',
          'Walk the scope with the crew before the first swing',
          'Know how to handle unexpected discoveries',
        ],
        task: 'Review a demo scope. Walk the space and mark what comes down.',
        tip: 'A demo mistake is irreversible. Verify twice before the crew starts.',
      },
      {
        topic: 'Safe Demo Sequence',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'Know the correct top-down demo sequence',
          'Understand structural awareness — what cannot be touched',
          'Manage dust and debris flow correctly',
        ],
        task: 'Watch a demo sequence video. Write the correct sequence for a standard room gut demo.',
        tip: 'Demo from top to bottom. Taking a load-bearing wall down wrong ends the job and starts a lawsuit.',
      },
      {
        topic: 'Practice — Demo Walkthrough',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'Walk a demo job from start to finish',
          'Log sequence, crew PPE, and debris management',
          'Identify anything that deviates from the correct procedure',
        ],
        task: 'Walk a demo job start to finish. Log sequence, crew PPE, and debris management.',
        tip: 'What you inspect, you influence.',
      },
      {
        topic: 'Post-Demo Inspection Checklist',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'Build a post-demo inspection checklist',
          'Cover debris removal, floor condition, structural integrity, and utilities',
          'Get Jose\'s approval before using it',
        ],
        task: 'Build Jorge\'s post-demo inspection checklist. Jose approves. Include: debris removal complete, floor swept, no structural damage, utilities marked.',
        tip: 'A clean demo site is as important as a clean finished job.',
      },
      {
        topic: 'Week 6 Review',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'Walk a completed demo and run the new checklist',
          'Identify what was missed and what passed',
          'Reflect on what you\'d do differently',
        ],
        task: 'Walk a completed demo. Run your new checklist. Write: What was missed, what passed, what would you do differently next time?',
        tip: 'Every demo teaches you something about the next one.',
      },
    ],

    7: [
      {
        topic: 'NFR Photo Protocol',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Know the required photos for every job type',
          'Know when to take before, milestone, and after photos',
          'Understand why before photos protect NFR legally',
        ],
        task: 'Review NFR WhatsApp photo protocol. List every required photo for a standard paint job.',
        tip: 'If it\'s not photographed, it didn\'t happen. Before photos protect NFR legally.',
      },
      {
        topic: 'CompanyCam for Interior Surface Jobs',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Set up CompanyCam correctly on a job',
          'Tag photos to the correct project',
          'Know what Jose needs to see in CompanyCam',
        ],
        task: 'Open CompanyCam. Find the active Interior Surface project. Upload 5 photos tagged correctly.',
        tip: 'Interior Surface clients look at CompanyCam. Every photo is client-facing.',
      },
      {
        topic: 'Practice — Full Photo Documentation',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Document a real job site from start to finish',
          'Use the full photo protocol without prompting',
          'Have Jose review the photos for completeness',
        ],
        task: 'Document a real job site from start to finish using the full photo protocol. Jose reviews the photos.',
        tip: 'Documentation habits built now protect you on every future job.',
      },
      {
        topic: 'What Makes a Good Site Photo',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Know the difference between a useful and a useless site photo',
          'Take photos that show progress, context, and quality',
          'Get Jose\'s feedback on photo quality',
        ],
        task: 'Take 10 site photos. Jose rates each as useful or not useful. Discuss why.',
        tip: 'A photo of a wall from 3 feet away shows nothing. Step back. Show context.',
      },
      {
        topic: 'Week 7 Review',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Conduct full photo documentation independently',
          'Have Jose spot-check the results',
          'Build photo documentation as a daily non-negotiable habit',
        ],
        task: 'Conduct full photo documentation on a real job independently. Jose spot-checks.',
        tip: 'The photos you take become the record of every job. Make them count.',
      },
    ],

    8: [
      {
        topic: 'What Jorge Can and Cannot Say',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Know the boundaries of Jorge\'s client communication authority',
          'Know which questions to redirect to Jose immediately',
          'Know how to handle scope questions on site',
        ],
        task: 'Review NFR client communication rules. Write: 5 things Jorge can answer, 5 things that go to Jose immediately.',
        tip: 'Saying the wrong thing to a client on site can cost more than the job. When in doubt, redirect.',
      },
      {
        topic: 'Handling Client Questions About Scope or Timeline',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Respond to client scope questions without committing to anything',
          'Give professional responses that buy time to call Jose',
          'Keep the client calm and confident while getting more information',
        ],
        task: 'Practice 3 client scenarios with Jose. He plays the client.',
        tip: '"Let me confirm that with Jose and get back to you by end of day" is always a correct answer.',
      },
      {
        topic: 'Practice — Client Scenarios',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Handle 5 client scenarios with increasing difficulty',
          'Stay calm and redirect without seeming evasive',
          'Build confidence in client-facing communication',
        ],
        task: '5 more client scenarios with Jose. Focus on keeping calm and redirecting without seeming evasive.',
        tip: 'Calm redirection builds more trust than an on-the-spot answer that\'s wrong.',
      },
      {
        topic: 'What to Do When a Client is Unhappy',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'De-escalate a client complaint on site',
          'Never argue or defend on the spot',
          'Get Jose involved immediately with full context',
        ],
        task: 'Practice one difficult client scenario with Jose. Write the protocol for an unhappy client.',
        tip: 'Your job is to listen and get Jose involved. Not to fix the complaint yourself.',
      },
      {
        topic: 'Week 8 Review',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'State the 3 most common client questions received on site',
          'Write a scripted response to each',
          'Apply the unhappy client protocol from memory',
        ],
        task: 'Write: What are the 3 most common client questions you get on site? What is your response to each?',
        tip: 'Scripted responses aren\'t robotic — they\'re professional.',
      },
    ],

    9: [
      {
        topic: 'Reading the Project Schedule',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Read and understand the NFR project schedule',
          'Know each trade\'s window on the schedule',
          'Identify dependencies between trades',
        ],
        task: 'Review the current week\'s project schedule in Google Calendar. For each active job, identify: what\'s happening, who\'s doing it, what comes next.',
        tip: 'If you don\'t know the schedule, you can\'t flag when it\'s off.',
      },
      {
        topic: 'When to Flag a Job is Running Late',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Identify signs a job will miss its deadline before it actually misses it',
          'Know the threshold for flagging to Jose',
          'Know what information Jose needs when you flag',
        ],
        task: 'For a current job, write a status report: on track vs. at risk. Send to Jose via WhatsApp.',
        tip: 'Flag early. Jose can fix an early warning. He cannot fix a missed deadline.',
      },
      {
        topic: 'Practice — Daily Reporting',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Send Jose a structured EOD field report for each active job',
          'Cover done, in progress, and at risk for every job',
          'Make reporting a daily non-negotiable habit',
        ],
        task: 'Send Jose a structured EOD field report for each active job: done, in progress, at risk. One paragraph per job.',
        tip: 'A report Jose doesn\'t have to ask for is worth twice the one he does.',
      },
      {
        topic: 'Managing Multiple Concurrent Jobs',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Prioritize time across multiple active jobs',
          'Sequence site visits efficiently',
          'Keep Jose informed across all jobs simultaneously',
        ],
        task: 'For the current week\'s jobs, build a daily visit plan — which job, at what time, for how long. Jose reviews.',
        tip: 'You can\'t be on 3 sites at once. Plan your day so each job gets the attention it needs.',
      },
      {
        topic: 'Week 9 Review',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'State how you decide which job to visit first',
          'Write your daily reporting format for Jose',
          'Apply schedule management skills to next week\'s jobs',
        ],
        task: 'Write: How do you decide which job to visit first? What is your reporting format for Jose each day?',
        tip: 'A field manager who owns the schedule owns the outcome.',
      },
    ],

    10: [
      {
        topic: 'Managing vs. Leading on Site',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Understand the difference between task management and team leadership',
          'Identify one leadership behavior to practice this week',
          'Own the outcome of your jobs — not just your tasks',
        ],
        task: 'Read or discuss: what is the difference between a manager and a leader? Write one leadership behavior you will practice this week.',
        tip: 'A manager tells people what to do. A leader makes them want to do it right.',
      },
      {
        topic: 'Building Crew Reliability',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Understand what makes a crew reliable vs. unreliable',
          'Identify one thing Jorge does that builds crew trust',
          'Identify one thing that undermines it',
        ],
        task: 'Write: What makes your best 1099 crew member reliable? What do you do that makes them want to show up for NFR?',
        tip: 'Reliable crews are earned, not assigned.',
      },
      {
        topic: 'Self-Management — Owning Your Scope',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Take personal ownership of every job on your list',
          'Stop waiting for Jose to catch things — catch them yourself',
          'Bring solutions not just problems to every conversation with Jose',
        ],
        task: 'Audit your current jobs. Find one thing that could be better. Fix it or propose the fix to Jose.',
        tip: 'Jose\'s job is not to run the field — it\'s yours. Own it.',
      },
      {
        topic: 'Bringing Solutions, Not Problems',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Identify problems early and think through solutions before escalating',
          'Come to Jose with a proposed solution alongside every problem',
          'Eliminate pure problem-reporting without thinking first',
        ],
        task: 'For the next issue that comes up on site, write a 2-sentence solution before calling Jose. Practice saying: "We have a problem and here\'s what I think we should do."',
        tip: 'Anyone can report a problem. Leaders bring options.',
      },
      {
        topic: 'Week 10 Graduation — Field Leadership Assessment',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Demonstrate field leadership across all trained areas',
          'Receive Jose\'s evaluation on site',
          'Write a personal self-assessment after the evaluation',
        ],
        task: 'Jose and Jorge walk an active job site together. Jose evaluates: safety, quality, crew direction, documentation, communication. Jorge writes a self-assessment after.',
        tip: 'The best field managers are always studying. Every job teaches you something if you pay attention.',
      },
    ],
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // TRAINING CONTENT CONFIG
  // ═══════════════════════════════════════════════════════════════════════════

  const TRAINING_CONTENT = {
    maria: {
      name:      'Maria',
      role:      'Designer / Office Manager',
      color:     '#5F8062',
      anchor:    '2026-03-16',
      startWeek: 8,
      plan:      MOZAIK_PLAN,
    },
    scott: {
      name:      'Scott',
      role:      'Warehouse Manager / CNC Operator',
      color:     '#C4622D',
      anchor:    '2026-03-16',
      startWeek: 1,
      plan:      CNC_PLAN,
    },
    jorge: {
      name:      'Jorge',
      role:      'Field Manager',
      color:     '#7BAFD4',
      anchor:    '2026-03-16',
      startWeek: 1,
      plan:      FIELD_PLAN,
    },
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // getTrainingDay
  // ═══════════════════════════════════════════════════════════════════════════

  /**
   * Returns the training content for a given employee on a given date.
   * Returns null on weekends, before anchor date, or when no plan exists.
   */
  function getTrainingDay(employee, dateStr) {
    const config = TRAINING_CONTENT[employee];
    if (!config) return null;

    const date = new Date(dateStr + 'T12:00:00');
    const dow = date.getDay();
    if (dow === 0 || dow === 6) return null;

    const anchor = new Date(config.anchor + 'T12:00:00');
    const diffDays = Math.round((date - anchor) / 86400000);
    if (diffDays < 0) return null;

    const weekOffset = Math.floor(diffDays / 7);
    const weekNum    = config.startWeek + weekOffset;
    const dayIdx     = dow - 1; // Mon=0, Fri=4

    const weekPlan = config.plan[weekNum];
    if (!weekPlan) return null;

    return {
      week: weekNum,
      day:  dayIdx + 1,
      employee,
      ...weekPlan[dayIdx],
    };
  }

  // ── exports ────────────────────────────────────────────────────────────────
  window.TRAINING_CONTENT = TRAINING_CONTENT;
  window.getTrainingDay   = getTrainingDay;
})();
```

---

## `js/training-employee.js` <a id="js-training-employee-js"></a>

```js
/**
 * employee.js — NFR Team Training Portal
 * Drives the employee training view (employee.html).
 */

(function () {
  'use strict';

  // ── constants ──────────────────────────────────────────────────────────────

  const DAY_NAMES  = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const DAY_SHORT  = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

  // ── state ──────────────────────────────────────────────────────────────────

  let currentEmployee = '';
  let currentDate     = '';
  let currentContent  = null;
  let timerInterval   = null;
  let sessionStart    = null;
  let noteDebounce    = null;

  // ── init ───────────────────────────────────────────────────────────────────

  function init() {
    const session = auth.requireAuth('employee');
    if (!session) return;

    currentEmployee = session.employee;
    currentDate     = tracker.todayStr();

    // Set employee name in header
    const nameEl = document.getElementById('emp-name');
    if (nameEl) nameEl.textContent = session.name;

    // Wire logout
    const logoutBtn = document.getElementById('btn-logout');
    if (logoutBtn) logoutBtn.addEventListener('click', auth.logout);

    // Start session timer
    sessionStart = new Date();
    startTimer();

    // Render the page
    const dow = new Date(currentDate + 'T12:00:00').getDay();
    if (dow === 0 || dow === 6) {
      renderWeekend();
    } else {
      currentContent = getTrainingDay(currentEmployee, currentDate);
      if (!currentContent) {
        renderNoTraining();
      } else {
        const record = tracker.getRecord(currentEmployee, currentDate);
        renderTrainingCard(currentContent, record);
        renderWeekPills(currentEmployee, tracker.getMondayStr(currentDate));
      }
    }
  }

  // ── timer ──────────────────────────────────────────────────────────────────

  function startTimer() {
    const timerEl = document.getElementById('session-timer');
    if (!timerEl) return;
    timerInterval = setInterval(function () {
      const elapsed = Math.floor((new Date() - sessionStart) / 1000);
      const h = Math.floor(elapsed / 3600);
      const m = Math.floor((elapsed % 3600) / 60);
      const s = elapsed % 60;
      if (h > 0) {
        timerEl.textContent = h + ':' + pad(m) + ':' + pad(s);
      } else {
        timerEl.textContent = pad(m) + ':' + pad(s);
      }
    }, 1000);
  }

  function pad(n) {
    return String(n).padStart(2, '0');
  }

  // ── weekend message ────────────────────────────────────────────────────────

  function renderWeekend() {
    const main = document.getElementById('main-content');
    if (!main) return;
    main.innerHTML = `
      <div class="rest-card">
        <div class="rest-icon">🌿</div>
        <h2>It's the weekend — rest up.</h2>
        <p>Training resumes Monday. See you then.</p>
      </div>
    `;
  }

  // ── no training ────────────────────────────────────────────────────────────

  function renderNoTraining() {
    const main = document.getElementById('main-content');
    if (!main) return;
    main.innerHTML = `
      <div class="rest-card">
        <div class="rest-icon">📋</div>
        <h2>No training scheduled today.</h2>
        <p>Check with Jose if you think this is an error.</p>
      </div>
    `;
  }

  // ── training card ──────────────────────────────────────────────────────────

  function renderTrainingCard(content, record) {
    const main = document.getElementById('main-content');
    if (!main) return;

    const config   = TRAINING_CONTENT[currentEmployee];
    const accentColor = config ? config.color : '#C4622D';
    const dateObj  = new Date(currentDate + 'T12:00:00');
    const dayName  = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dateObj.getDay()];

    const isComplete = record && record.completed;

    const objectivesHtml = (content.objectives || []).map(function (obj) {
      return '<li>' + escHtml(obj) + '</li>';
    }).join('');

    const completionHtml = isComplete
      ? `<div class="completion-badge">
           <span class="checkmark">✓</span>
           Completed at ${escHtml(record.completedAt || '')}
         </div>`
      : '';

    const btnClass = isComplete ? 'mark-complete-btn done' : 'mark-complete-btn';
    const btnText  = isComplete ? '✓ Completed' : 'Mark Complete';

    main.innerHTML = `
      <div class="training-card" style="--accent: ${accentColor}">
        <div class="week-badge">
          Week ${content.week} &middot; Day ${content.day} &middot; ${dayName}
        </div>

        <h1 class="topic-title">${escHtml(content.topic)}</h1>

        ${completionHtml}

        <div class="card-columns">
          <div class="card-left">
            <h3 class="section-heading">Objectives</h3>
            <ul class="objectives-list">
              ${objectivesHtml}
            </ul>

            <a href="${escAttr(content.resourceUrl)}" target="_blank" rel="noopener" class="resource-btn">
              <span class="resource-icon">📚</span>
              ${escHtml(content.resourceLabel)}
            </a>
          </div>

          <div class="card-right">
            <div class="task-box">
              <h3 class="section-heading">Today's Task</h3>
              <p>${escHtml(content.task)}</p>
            </div>

            <blockquote class="tip-blockquote">
              <span class="tip-label">Tip from Jose</span>
              <p>${escHtml(content.tip)}</p>
            </blockquote>
          </div>
        </div>

        <div class="notes-section">
          <h3 class="section-heading">Notes</h3>
          <textarea
            id="notes-area"
            class="notes-area"
            placeholder="Write your notes here…"
            rows="4"
          >${escHtml((record && record.notes) || '')}</textarea>
        </div>

        <div class="complete-row">
          <button id="btn-complete" class="${btnClass}">
            ${btnText}
          </button>
        </div>
      </div>
    `;

    // Bind events
    const notesEl = document.getElementById('notes-area');
    if (notesEl) {
      notesEl.addEventListener('input', handleNoteInput);
    }

    const completeBtn = document.getElementById('btn-complete');
    if (completeBtn) {
      if (!isComplete) {
        completeBtn.addEventListener('click', handleMarkComplete);
      }
    }
  }

  // ── week pills ─────────────────────────────────────────────────────────────

  function renderWeekPills(employee, mondayStr) {
    const container = document.getElementById('week-pills-container');
    if (!container) return;

    const monday  = new Date(mondayStr + 'T12:00:00');
    const today   = tracker.todayStr();
    const records = tracker.getWeekRecords(employee, mondayStr);

    let html = '<div class="week-pills">';
    for (let i = 0; i < 5; i++) {
      const d  = new Date(monday);
      d.setDate(monday.getDate() + i);
      const ds = tracker.localDateStr(d);
      const rec = records[ds] || {};

      let pillClass = 'pill upcoming';
      if (ds === today)          pillClass = 'pill today';
      if (rec.completed)         pillClass = 'pill complete';
      // Past + not complete + not today = missed
      if (ds < today && !rec.completed && ds !== today) pillClass = 'pill missed';

      html += `<div class="${pillClass}" title="${ds}">
        <span class="pill-day">${DAY_SHORT[i]}</span>
        ${rec.completed ? '<span class="pill-check">✓</span>' : ''}
      </div>`;
    }
    html += '</div>';
    container.innerHTML = html;
  }

  // ── mark complete ──────────────────────────────────────────────────────────

  function handleMarkComplete() {
    if (!currentContent) return;
    tracker.markComplete(
      currentEmployee,
      currentDate,
      currentContent.week,
      currentContent.day,
      currentContent.topic
    );
    // Re-render
    const record = tracker.getRecord(currentEmployee, currentDate);
    renderTrainingCard(currentContent, record);
    renderWeekPills(currentEmployee, tracker.getMondayStr(currentDate));

    // Re-bind notes (renderTrainingCard rebuilds the DOM)
    const notesEl = document.getElementById('notes-area');
    if (notesEl) notesEl.addEventListener('input', handleNoteInput);
  }

  // ── notes ──────────────────────────────────────────────────────────────────

  function handleNoteInput(e) {
    const text = e.target.value;
    clearTimeout(noteDebounce);
    noteDebounce = setTimeout(function () {
      tracker.saveNote(currentEmployee, currentDate, text);
    }, 500);
  }

  // ── html helpers ───────────────────────────────────────────────────────────

  function escHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function escAttr(str) {
    return String(str || '').replace(/"/g, '&quot;');
  }

  // ── boot ───────────────────────────────────────────────────────────────────

  document.addEventListener('DOMContentLoaded', init);
})();
```

---

## `js/training-manager.js` <a id="js-training-manager-js"></a>

```js
/**
 * manager.js — NFR Team Training Portal
 * Drives the manager dashboard (manager.html).
 */

(function () {
  'use strict';

  // ── constants ──────────────────────────────────────────────────────────────

  const EMPLOYEES  = ['maria', 'scott', 'jorge'];
  const DAY_SHORT  = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const MONTHS     = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  // ── state ──────────────────────────────────────────────────────────────────

  let currentMonday = '';

  // ── init ───────────────────────────────────────────────────────────────────

  function init() {
    const session = auth.requireAuth('manager');
    if (!session) return;

    const logoutBtn = document.getElementById('btn-logout');
    if (logoutBtn) logoutBtn.addEventListener('click', auth.logout);

    const prevBtn = document.getElementById('btn-prev-week');
    if (prevBtn) prevBtn.addEventListener('click', function () { navigateWeek(-1); });

    const nextBtn = document.getElementById('btn-next-week');
    if (nextBtn) nextBtn.addEventListener('click', function () { navigateWeek(1); });

    const thisBtn = document.getElementById('btn-this-week');
    if (thisBtn) thisBtn.addEventListener('click', function () {
      currentMonday = tracker.getMondayStr(tracker.todayStr());
      renderAll();
    });

    currentMonday = tracker.getMondayStr(tracker.todayStr());
    renderAll();
  }

  // ── navigation ─────────────────────────────────────────────────────────────

  function navigateWeek(direction) {
    const d = new Date(currentMonday + 'T12:00:00');
    d.setDate(d.getDate() + direction * 7);
    currentMonday = tracker.localDateStr(d);
    renderAll();
  }

  // ── render all ─────────────────────────────────────────────────────────────

  function renderAll() {
    const labelEl = document.getElementById('week-label');
    if (labelEl) labelEl.textContent = getWeekLabel(currentMonday);

    renderAllEmployees(currentMonday);
  }

  // ── week label ─────────────────────────────────────────────────────────────

  function getWeekLabel(mondayStr) {
    const d = new Date(mondayStr + 'T12:00:00');
    return 'Week of ' + MONTHS[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
  }

  // ── render employees ───────────────────────────────────────────────────────

  function renderAllEmployees(mondayStr) {
    const grid = document.getElementById('employee-grid');
    if (!grid) return;

    grid.innerHTML = EMPLOYEES.map(function (emp) {
      return renderEmployeeCard(emp, mondayStr);
    }).join('');

    renderDetailTable(mondayStr);
  }

  // ── employee card ──────────────────────────────────────────────────────────

  function renderEmployeeCard(employee, mondayStr) {
    const config  = TRAINING_CONTENT[employee];
    const today   = tracker.todayStr();
    const stats   = tracker.getWeekStats(employee, mondayStr);
    const records = tracker.getWeekRecords(employee, mondayStr);
    const monday  = new Date(mondayStr + 'T12:00:00');

    // Today's topic
    const todayContent = getTrainingDay(employee, today);
    const todayTopic   = todayContent ? todayContent.topic : 'No training today';
    const weekNum      = todayContent ? 'Week ' + todayContent.week : '—';

    // Last active
    const lastActive = tracker.getLastActive(employee);
    const lastActiveDisplay = lastActive ? formatDisplayDate(lastActive) : 'Never';

    // Last note
    const lastNoteData = tracker.getLastNote(employee);
    const lastNote = lastNoteData
      ? truncate(lastNoteData.notes, 80)
      : '<em class="no-note">No notes yet</em>';

    // Day pills
    let pillsHtml = '<div class="day-pills">';
    for (let i = 0; i < 5; i++) {
      const d  = new Date(monday);
      d.setDate(monday.getDate() + i);
      const ds  = tracker.localDateStr(d);
      const rec = records[ds] || {};

      let pillClass = 'pill upcoming';
      if (rec.completed) {
        pillClass = 'pill complete';
      } else if (ds === today) {
        pillClass = 'pill today';
      } else if (ds < today) {
        pillClass = 'pill missed';
      }

      pillsHtml += `<div class="${pillClass}" title="${DAY_SHORT[i]} ${ds}">
        <span class="pill-day">${DAY_SHORT[i]}</span>
        ${rec.completed ? '<span class="pill-check">✓</span>' : ''}
      </div>`;
    }
    pillsHtml += '</div>';

    return `
      <div class="employee-col">
        <div class="employee-card">
          <div class="accent-bar" style="background: ${config.color}"></div>
          <div class="card-body">
            <div class="emp-header-row">
              <div>
                <div class="emp-name">${escHtml(config.name)}</div>
                <div class="emp-role">${escHtml(config.role)}</div>
              </div>
              <div class="week-tag">${escHtml(weekNum)}</div>
            </div>

            <div class="today-topic">${escHtml(todayTopic)}</div>

            ${pillsHtml}

            <div class="stats-row">
              <div class="stat">
                <span class="stat-value">${stats.completed}</span>
                <span class="stat-label">/ 5 this week</span>
              </div>
              <div class="stat">
                <span class="stat-value">${stats.streak}</span>
                <span class="stat-label">day streak</span>
              </div>
            </div>

            <div class="last-active">Last active: <strong>${escHtml(lastActiveDisplay)}</strong></div>

            <div class="last-note-section">
              <span class="last-note-label">Latest note:</span>
              <span class="last-note-text">${lastNote}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // ── detail table ───────────────────────────────────────────────────────────

  function renderDetailTable(mondayStr) {
    const container = document.getElementById('detail-table-container');
    if (!container) return;

    const monday = new Date(mondayStr + 'T12:00:00');
    const today  = tracker.todayStr();

    // Build date list (Mon-Fri)
    const dates = [];
    for (let i = 0; i < 5; i++) {
      const d = new Date(monday);
      d.setDate(monday.getDate() + i);
      dates.push(tracker.localDateStr(d));
    }

    // Header
    let html = `
      <table class="detail-table">
        <thead>
          <tr>
            <th>Day</th>
            ${EMPLOYEES.map(function (emp) {
              return '<th>' + escHtml(TRAINING_CONTENT[emp].name) + '</th>';
            }).join('')}
          </tr>
        </thead>
        <tbody>
    `;

    dates.forEach(function (ds, i) {
      const isToday = ds === today;
      const rowClass = isToday ? 'row-today' : '';
      const dayLabel = DAY_SHORT[i] + '<br><small>' + formatShortDate(ds) + '</small>';

      html += `<tr class="${rowClass}">`;
      html += `<td class="day-cell">${dayLabel}</td>`;

      EMPLOYEES.forEach(function (emp) {
        const content = getTrainingDay(emp, ds);
        const record  = tracker.getRecord(emp, ds);

        if (!content) {
          html += '<td class="table-cell no-content"><span class="no-content-text">—</span></td>';
          return;
        }

        let cellClass = 'table-cell';
        let statusBadge = '';

        if (record.completed) {
          cellClass += ' cell-complete';
          statusBadge = '<span class="cell-badge badge-done">✓ Done</span>';
        } else if (ds === today) {
          cellClass += ' cell-today';
          statusBadge = '<span class="cell-badge badge-today">Today</span>';
        } else if (ds < today) {
          cellClass += ' cell-missed';
          statusBadge = '<span class="cell-badge badge-missed">Missed</span>';
        } else {
          cellClass += ' cell-upcoming';
          statusBadge = '<span class="cell-badge badge-upcoming">Upcoming</span>';
        }

        html += `<td class="${cellClass}">
          <div class="cell-topic">${escHtml(content.topic)}</div>
          ${statusBadge}
          ${record.notes ? '<div class="cell-note">' + escHtml(truncate(record.notes, 40)) + '</div>' : ''}
        </td>`;
      });

      html += '</tr>';
    });

    html += '</tbody></table>';
    container.innerHTML = html;
  }

  // ── helpers ────────────────────────────────────────────────────────────────

  function truncate(str, maxLen) {
    if (!str) return '';
    return str.length > maxLen ? str.slice(0, maxLen) + '…' : str;
  }

  function formatDisplayDate(dateStr) {
    if (!dateStr) return '';
    const d = new Date(dateStr + 'T12:00:00');
    return MONTHS[d.getMonth()].slice(0, 3) + ' ' + d.getDate();
  }

  function formatShortDate(dateStr) {
    const d = new Date(dateStr + 'T12:00:00');
    return (d.getMonth() + 1) + '/' + d.getDate();
  }

  function escHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // ── boot ───────────────────────────────────────────────────────────────────

  document.addEventListener('DOMContentLoaded', init);
})();
```

---

## `js/training-tracker.js` <a id="js-training-tracker-js"></a>

```js
/**
 * tracker.js — NFR Team Training Portal
 * Per-employee training completion stored in localStorage.
 * Key format: nfr_tp_{employee}  (e.g. nfr_tp_scott)
 *
 * Each stored value is a JSON object keyed by YYYY-MM-DD:
 * {
 *   completed: bool,
 *   notes: '',
 *   completedAt: 'HH:MM',
 *   week: N,
 *   day: N,
 *   topic: 'string'
 * }
 */

(function () {
  'use strict';

  // ── helpers ────────────────────────────────────────────────────────────────

  function storageKey(employee) {
    return 'nfr_tp_' + employee;
  }

  function loadAll(employee) {
    try {
      const raw = localStorage.getItem(storageKey(employee));
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function saveAll(employee, data) {
    try {
      localStorage.setItem(storageKey(employee), JSON.stringify(data));
    } catch (e) {
      console.error('localStorage write failed', e);
    }
  }

  // ── public API ─────────────────────────────────────────────────────────────

  function todayStr() {
    const d = new Date();
    return d.toISOString().slice(0, 10); // YYYY-MM-DD (local may differ—use explicit)
  }

  // Returns YYYY-MM-DD using local time zone
  function localDateStr(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  function todayLocalStr() {
    return localDateStr(new Date());
  }

  function formatTime(date) {
    const h = String(date.getHours()).padStart(2, '0');
    const m = String(date.getMinutes()).padStart(2, '0');
    return `${h}:${m}`;
  }

  /** Returns Monday of the week containing dateStr as YYYY-MM-DD */
  function getMondayStr(dateStr) {
    const d = new Date(dateStr + 'T12:00:00');
    const dow = d.getDay(); // 0=Sun
    const diff = dow === 0 ? -6 : 1 - dow;
    d.setDate(d.getDate() + diff);
    return localDateStr(d);
  }

  /** Get one day's record (or empty default) */
  function getRecord(employee, dateStr) {
    const all = loadAll(employee);
    return all[dateStr] || { completed: false, notes: '', completedAt: '', week: null, day: null, topic: '' };
  }

  /** Save/merge one day's record */
  function saveRecord(employee, dateStr, data) {
    const all = loadAll(employee);
    all[dateStr] = Object.assign({}, all[dateStr] || {}, data);
    saveAll(employee, all);
  }

  /** Mark a day complete */
  function markComplete(employee, dateStr, week, day, topic) {
    saveRecord(employee, dateStr, {
      completed:   true,
      completedAt: formatTime(new Date()),
      week:        week,
      day:         day,
      topic:       topic,
    });
  }

  /** Save notes for a day */
  function saveNote(employee, dateStr, text) {
    saveRecord(employee, dateStr, { notes: text });
  }

  /**
   * Returns records for Mon–Fri of the week containing mondayStr.
   * { 'YYYY-MM-DD': record, ... }
   */
  function getWeekRecords(employee, mondayStr) {
    const monday = new Date(mondayStr + 'T12:00:00');
    const result = {};
    for (let i = 0; i < 5; i++) {
      const d = new Date(monday);
      d.setDate(monday.getDate() + i);
      const ds = localDateStr(d);
      result[ds] = getRecord(employee, ds);
    }
    return result;
  }

  /**
   * Returns { completed: N, total: 5, streak: N }
   * streak = consecutive completed days from today backward (cross-week).
   */
  function getWeekStats(employee, mondayStr) {
    const records = getWeekRecords(employee, mondayStr);
    const completed = Object.values(records).filter(r => r.completed).length;

    // streak: go backward from today
    const today = new Date();
    let streak = 0;
    let check = new Date(today);
    // Only count up to 60 days back
    for (let i = 0; i < 60; i++) {
      const dow = check.getDay();
      if (dow !== 0 && dow !== 6) {
        const ds = localDateStr(check);
        const rec = getRecord(employee, ds);
        if (rec.completed) {
          streak++;
        } else {
          // If it's today and not completed, don't break — just skip
          if (ds !== localDateStr(today)) break;
        }
      }
      check.setDate(check.getDate() - 1);
    }

    return { completed, total: 5, streak };
  }

  /** Last recorded note across all time for an employee (most recent date with notes) */
  function getLastNote(employee) {
    const all = loadAll(employee);
    const dates = Object.keys(all).sort().reverse();
    for (const ds of dates) {
      if (all[ds].notes && all[ds].notes.trim()) {
        return { date: ds, notes: all[ds].notes.trim() };
      }
    }
    return null;
  }

  /** Most recent completed date for an employee */
  function getLastActive(employee) {
    const all = loadAll(employee);
    const dates = Object.keys(all).filter(d => all[d].completed).sort().reverse();
    return dates[0] || null;
  }

  window.tracker = {
    todayStr: todayLocalStr,
    localDateStr,
    formatTime,
    getMondayStr,
    getRecord,
    saveRecord,
    markComplete,
    saveNote,
    getWeekRecords,
    getWeekStats,
    getLastNote,
    getLastActive,
  };
})();
```

---

## `css/training-styles.css` <a id="css-training-styles-css"></a>

```css
/* ============================================================
   NFR Team Training Portal — styles.css
   Palette: Cream / Espresso / Terracotta / Sage
   ============================================================ */

/* ── reset & variables ────────────────────────────────────── */

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --cream:       #FAF7F2;
  --cream-dark:  #F0EBE2;
  --espresso:    #2C1A0E;
  --espresso-60: rgba(44, 26, 14, 0.6);
  --terracotta:  #C4622D;
  --terracotta-light: #F0D5C5;
  --sage:        #7A9E7E;
  --sage-light:  #D4E6D5;
  --gold:        #C9A96E;

  --white:       #FFFFFF;
  --grey-100:    #F5F5F5;
  --grey-200:    #E8E8E8;
  --grey-300:    #CCCCCC;
  --grey-500:    #888888;
  --grey-700:    #444444;
  --green:       #3A8C4E;
  --green-light: #D6EFDB;
  --red:         #C0392B;
  --red-light:   #FDECEA;
  --yellow:      #E6A817;
  --yellow-light:#FFF5D6;
  --blue:        #7BAFD4;
  --blue-light:  #D6EAF8;

  --font-head: 'Playfair Display', Georgia, serif;
  --font-body: 'Lato', Arial, sans-serif;

  --shadow-sm:  0 1px 3px rgba(0,0,0,.08);
  --shadow-md:  0 4px 12px rgba(0,0,0,.10);
  --shadow-lg:  0 8px 24px rgba(0,0,0,.12);

  --radius-sm:  4px;
  --radius-md:  8px;
  --radius-lg:  12px;

  --transition: 0.18s ease;
}

html {
  font-size: 16px;
  -webkit-text-size-adjust: 100%;
}

body {
  font-family: var(--font-body);
  background: var(--cream);
  color: var(--espresso);
  line-height: 1.6;
  min-height: 100vh;
}

a {
  color: var(--terracotta);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

h1, h2, h3 {
  font-family: var(--font-head);
  line-height: 1.25;
}

/* ── shared utilities ─────────────────────────────────────── */

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
}

/* ============================================================
   LOGIN PAGE
   ============================================================ */

.page-login {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--cream);
}

.login-card {
  background: var(--white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 2.5rem 2rem;
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.login-brand {
  margin-bottom: 1.5rem;
}

.login-logo {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  background: var(--terracotta);
  border-radius: 50%;
  color: var(--white);
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
}

.login-brand h1 {
  font-size: 1.5rem;
  color: var(--espresso);
}

.login-brand .brand-sub {
  font-size: 0.85rem;
  color: var(--grey-500);
  margin-top: 0.2rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.login-form label {
  text-align: left;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--espresso);
}

.login-form input {
  width: 100%;
  padding: 0.65rem 0.9rem;
  border: 1.5px solid var(--grey-300);
  border-radius: var(--radius-sm);
  font-family: var(--font-body);
  font-size: 1rem;
  background: var(--cream);
  color: var(--espresso);
  transition: border-color var(--transition);
}

.login-form input:focus {
  outline: none;
  border-color: var(--terracotta);
  background: var(--white);
}

.btn-login {
  padding: 0.75rem 1rem;
  background: var(--terracotta);
  color: var(--white);
  border: none;
  border-radius: var(--radius-sm);
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: background var(--transition), transform var(--transition);
}

.btn-login:hover {
  background: #a84e22;
  transform: translateY(-1px);
}

.btn-login:active {
  transform: translateY(0);
}

.login-error {
  display: none;
  background: var(--red-light);
  color: var(--red);
  border: 1px solid #f5c6cb;
  border-radius: var(--radius-sm);
  padding: 0.6rem 0.9rem;
  font-size: 0.875rem;
  text-align: left;
}

.login-error.visible {
  display: block;
}

.login-footer {
  margin-top: 1.5rem;
  font-size: 0.8rem;
  color: var(--grey-500);
}

/* ============================================================
   SHARED HEADER
   ============================================================ */

.app-header {
  background: var(--espresso);
  color: var(--cream);
  padding: 0 1.5rem;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: var(--shadow-md);
}

.header-brand {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--font-head);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--cream);
  white-space: nowrap;
}

.header-brand .brand-dot {
  color: var(--terracotta);
}

.header-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.header-name {
  font-size: 0.9rem;
  color: var(--cream);
  opacity: 0.85;
}

.header-timer {
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: var(--gold);
  background: rgba(255,255,255,0.1);
  padding: 0.2rem 0.5rem;
  border-radius: var(--radius-sm);
}

.btn-logout {
  padding: 0.35rem 0.8rem;
  background: transparent;
  color: var(--cream);
  border: 1.5px solid rgba(255,255,255,0.35);
  border-radius: var(--radius-sm);
  font-family: var(--font-body);
  font-size: 0.8rem;
  cursor: pointer;
  transition: background var(--transition), border-color var(--transition);
}

.btn-logout:hover {
  background: rgba(255,255,255,0.1);
  border-color: rgba(255,255,255,0.6);
}

/* ============================================================
   EMPLOYEE PAGE
   ============================================================ */

.employee-main {
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
}

/* Rest / no-training card */

.rest-card {
  background: var(--white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  padding: 3rem 2rem;
  text-align: center;
  margin-top: 3rem;
}

.rest-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.rest-card h2 {
  font-size: 1.5rem;
  color: var(--espresso);
  margin-bottom: 0.5rem;
}

.rest-card p {
  color: var(--grey-500);
}

/* Training card */

.training-card {
  background: var(--white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  overflow: hidden;
  border-top: 4px solid var(--accent, var(--terracotta));
}

.training-card > * {
  padding-left: 2rem;
  padding-right: 2rem;
}

.week-badge {
  display: inline-block;
  background: var(--cream-dark);
  color: var(--espresso-60);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 0.4rem 0.75rem;
  border-radius: 0 0 var(--radius-md) var(--radius-md);
  margin-bottom: 0;
  margin-top: 0;
  padding-left: 2rem;
  padding-right: 2rem;
}

.topic-title {
  font-size: 1.75rem;
  color: var(--espresso);
  padding-top: 1.25rem;
  padding-bottom: 0.5rem;
}

.completion-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: var(--green-light);
  color: var(--green);
  font-size: 0.875rem;
  font-weight: 700;
  padding: 0.3rem 0.8rem;
  border-radius: 2rem;
  margin-bottom: 1rem;
}

.checkmark {
  font-size: 1rem;
}

.card-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  border-top: 1px solid var(--grey-200);
  border-bottom: 1px solid var(--grey-200);
  margin-top: 0.5rem;
}

.section-heading {
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--grey-500);
  margin-bottom: 0.6rem;
}

.objectives-list {
  list-style: none;
  padding: 0;
  margin-bottom: 1.25rem;
}

.objectives-list li {
  position: relative;
  padding-left: 1.1em;
  margin-bottom: 0.35rem;
  font-size: 0.925rem;
  color: var(--espresso);
}

.objectives-list li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--accent, var(--terracotta));
  font-size: 0.8em;
  top: 0.1em;
}

.resource-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  background: var(--espresso);
  color: var(--cream);
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  transition: background var(--transition), transform var(--transition);
}

.resource-btn:hover {
  background: #3d2515;
  transform: translateY(-1px);
  text-decoration: none;
}

.resource-icon {
  font-size: 1rem;
}

.task-box {
  background: var(--cream-dark);
  border-left: 3px solid var(--accent, var(--terracotta));
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  padding: 1rem;
  margin-bottom: 1rem;
}

.task-box .section-heading {
  margin-bottom: 0.4rem;
}

.task-box p {
  font-size: 0.925rem;
  color: var(--espresso);
}

.tip-blockquote {
  background: var(--yellow-light);
  border-left: 3px solid var(--gold);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  padding: 1rem;
  margin: 0;
}

.tip-label {
  display: block;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--gold);
  margin-bottom: 0.3rem;
}

.tip-blockquote p {
  font-size: 0.9rem;
  font-style: italic;
  color: var(--grey-700);
}

/* Notes */

.notes-section {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}

.notes-area {
  width: 100%;
  padding: 0.75rem;
  border: 1.5px solid var(--grey-300);
  border-radius: var(--radius-sm);
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--espresso);
  background: var(--cream);
  resize: vertical;
  min-height: 90px;
  transition: border-color var(--transition);
  line-height: 1.6;
}

.notes-area:focus {
  outline: none;
  border-color: var(--accent, var(--terracotta));
  background: var(--white);
}

/* Complete button */

.complete-row {
  padding-top: 1rem;
  padding-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.mark-complete-btn {
  padding: 0.7rem 1.75rem;
  background: var(--green);
  color: var(--white);
  border: none;
  border-radius: var(--radius-sm);
  font-family: var(--font-body);
  font-size: 0.975rem;
  font-weight: 700;
  cursor: pointer;
  transition: background var(--transition), transform var(--transition);
}

.mark-complete-btn:hover {
  background: #2d7040;
  transform: translateY(-1px);
}

.mark-complete-btn.done {
  background: var(--grey-200);
  color: var(--grey-500);
  cursor: default;
}

.mark-complete-btn.done:hover {
  background: var(--grey-200);
  transform: none;
}

/* Week pills (employee page) */

.week-pills-wrap {
  margin-top: 2rem;
}

.week-pills-label {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--grey-500);
  margin-bottom: 0.6rem;
}

.week-pills {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.pill {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 52px;
  height: 52px;
  border-radius: var(--radius-md);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  user-select: none;
  cursor: default;
}

.pill-day {
  display: block;
  font-size: 0.7rem;
}

.pill-check {
  font-size: 0.85rem;
  margin-top: 0.1rem;
}

.pill.complete {
  background: var(--green-light);
  color: var(--green);
  border: 1.5px solid #a8d9b4;
}

.pill.missed {
  background: var(--red-light);
  color: var(--red);
  border: 1.5px solid #f5c6cb;
}

.pill.today {
  background: var(--yellow-light);
  color: var(--yellow);
  border: 1.5px solid #f5d990;
}

.pill.upcoming {
  background: var(--grey-100);
  color: var(--grey-500);
  border: 1.5px solid var(--grey-200);
}

/* ============================================================
   MANAGER PAGE
   ============================================================ */

.manager-main {
  max-width: 1280px;
  margin: 0 auto;
  padding: 1.75rem 1.5rem 4rem;
}

/* Week navigation */

.week-nav {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.75rem;
  flex-wrap: wrap;
}

.week-nav-label {
  font-family: var(--font-head);
  font-size: 1.2rem;
  color: var(--espresso);
  flex: 1;
  min-width: 200px;
}

.btn-nav {
  padding: 0.45rem 1rem;
  background: var(--white);
  border: 1.5px solid var(--grey-300);
  border-radius: var(--radius-sm);
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--espresso);
  cursor: pointer;
  transition: background var(--transition), border-color var(--transition);
}

.btn-nav:hover {
  background: var(--cream-dark);
  border-color: var(--grey-500);
}

.btn-this-week {
  background: var(--espresso);
  color: var(--cream);
  border-color: var(--espresso);
}

.btn-this-week:hover {
  background: #3d2515;
  color: var(--white);
  border-color: #3d2515;
}

/* Employee grid */

.employee-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  margin-bottom: 2.5rem;
}

.employee-col {
  min-width: 0;
}

.employee-card {
  background: var(--white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  overflow: hidden;
  height: 100%;
}

.accent-bar {
  height: 5px;
  width: 100%;
}

.card-body {
  padding: 1.25rem;
}

.emp-header-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 0.6rem;
}

.emp-name {
  font-family: var(--font-head);
  font-size: 1.15rem;
  color: var(--espresso);
  font-weight: 700;
}

.emp-role {
  font-size: 0.78rem;
  color: var(--grey-500);
  margin-top: 0.1rem;
}

.week-tag {
  font-size: 0.75rem;
  font-weight: 700;
  background: var(--cream-dark);
  color: var(--espresso);
  padding: 0.2rem 0.55rem;
  border-radius: 2rem;
  white-space: nowrap;
  flex-shrink: 0;
}

.today-topic {
  font-size: 0.875rem;
  color: var(--grey-700);
  font-style: italic;
  margin-bottom: 0.9rem;
  min-height: 2.6em;
  line-height: 1.4;
}

/* Day pills on manager cards */

.day-pills {
  display: flex;
  gap: 0.35rem;
  margin-bottom: 1rem;
}

.day-pills .pill {
  flex: 1;
  min-width: 0;
  height: 44px;
  font-size: 0.65rem;
}

/* Stats */

.stats-row {
  display: flex;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.stat {
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
}

.stat-value {
  font-family: var(--font-head);
  font-size: 1.3rem;
  color: var(--espresso);
  font-weight: 700;
}

.stat-label {
  font-size: 0.75rem;
  color: var(--grey-500);
}

.last-active {
  font-size: 0.8rem;
  color: var(--grey-500);
  margin-bottom: 0.6rem;
}

.last-note-section {
  font-size: 0.8rem;
  color: var(--grey-500);
  border-top: 1px solid var(--grey-200);
  padding-top: 0.6rem;
  margin-top: 0.2rem;
}

.last-note-label {
  font-weight: 700;
  color: var(--grey-500);
  margin-right: 0.3rem;
}

.last-note-text {
  color: var(--grey-700);
  font-style: italic;
}

.no-note {
  font-style: italic;
  color: var(--grey-300);
}

/* Detail table */

.detail-section-heading {
  font-family: var(--font-head);
  font-size: 1.1rem;
  color: var(--espresso);
  margin-bottom: 0.75rem;
}

.detail-table-wrap {
  background: var(--white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  overflow: auto;
}

.detail-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
}

.detail-table th {
  background: var(--espresso);
  color: var(--cream);
  padding: 0.7rem 1rem;
  text-align: left;
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
}

.detail-table td {
  padding: 0.75rem 1rem;
  vertical-align: top;
  border-bottom: 1px solid var(--grey-200);
}

.detail-table tr:last-child td {
  border-bottom: none;
}

.detail-table .row-today td {
  background: var(--yellow-light);
}

.day-cell {
  font-weight: 700;
  font-size: 0.82rem;
  color: var(--espresso);
  white-space: nowrap;
  width: 80px;
}

.day-cell small {
  display: block;
  color: var(--grey-500);
  font-weight: 400;
  font-size: 0.75rem;
  margin-top: 0.1rem;
}

.table-cell {
  min-width: 180px;
}

.cell-topic {
  font-size: 0.83rem;
  color: var(--espresso);
  margin-bottom: 0.3rem;
  line-height: 1.35;
}

.cell-badge {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.15rem 0.45rem;
  border-radius: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.badge-done     { background: var(--green-light);  color: var(--green);  }
.badge-today    { background: var(--yellow-light); color: var(--yellow); }
.badge-missed   { background: var(--red-light);    color: var(--red);    }
.badge-upcoming { background: var(--grey-100);     color: var(--grey-500); }

.cell-note {
  font-size: 0.75rem;
  color: var(--grey-500);
  font-style: italic;
  margin-top: 0.3rem;
}

.no-content-text {
  color: var(--grey-300);
}

/* ============================================================
   RESPONSIVE
   ============================================================ */

@media (max-width: 900px) {
  .employee-grid {
    grid-template-columns: 1fr;
  }
  .card-columns {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .app-header {
    padding: 0 1rem;
  }
  .employee-main,
  .manager-main {
    padding: 1rem 1rem 3rem;
  }
  .training-card > * {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .week-badge {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .topic-title {
    font-size: 1.3rem;
  }
  .header-timer {
    display: none;
  }
}
```
