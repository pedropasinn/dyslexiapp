// timer.js — Timer utilities (formatTime, createTimer)

function formatTime(ms) {
  const totalSec = ms / 1000;
  const min = Math.floor(totalSec / 60);
  const sec = Math.floor(totalSec % 60);
  const tenths = Math.floor((totalSec % 1) * 10);
  return `${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}.${tenths}`;
}

function createTimer(displayId, onTick) {
  const display = document.getElementById(displayId);
  let startTime, elapsed = 0, interval = null, running = false;

  return {
    toggle() {
      if (running) { this.stop(); return false; }
      else { this.start(); return true; }
    },
    start() {
      startTime = Date.now() - elapsed;
      interval = setInterval(() => {
        elapsed = Date.now() - startTime;
        display.textContent = formatTime(elapsed);
        display.classList.add('running');
        if (onTick) onTick(elapsed);
      }, 100);
      running = true;
    },
    stop() {
      clearInterval(interval);
      running = false;
      display.classList.remove('running');
    },
    reset() {
      this.stop();
      elapsed = 0;
      display.textContent = '00:00.0';
    },
    getElapsed() { return elapsed; },
    isRunning() { return running; },
  };
}
