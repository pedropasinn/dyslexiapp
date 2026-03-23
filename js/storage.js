// storage.js — Shared localStorage utility with error handling
const Storage = {
  get(key, fallback) {
    if (fallback === undefined) fallback = [];
    try { return JSON.parse(localStorage.getItem(key)) || fallback; }
    catch { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); }
    catch (e) { console.warn('localStorage full or unavailable:', e); }
  },
  push(key, entry) {
    const arr = this.get(key, []);
    arr.push(entry);
    this.set(key, arr);
  },
  remove(key) {
    try { localStorage.removeItem(key); } catch {}
  }
};
