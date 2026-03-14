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
