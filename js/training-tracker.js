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
