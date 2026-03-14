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
