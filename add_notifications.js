const fs = require('fs');

const files = ['index.html', 'chat.html', 'create.html', 'personas.html', 'my-bots.html', 'download.html'];

const notifHtml = `
      <div class="notifications-dropdown">
        <button class="notif-btn" onclick="toggleNotifDropdown()" title="Notifications">
          🔔<span class="notif-badge">3</span>
        </button>
        <div class="notif-dropdown-menu" id="notifDropdown">
          <div class="notif-header">Notifications</div>
          <div class="notif-list" id="notifList">
            <div class="notif-item">
              <img src="assets/chars/char1.svg" class="notif-avatar" onerror="this.style.display='none'">
              <div class="notif-content">
                <strong>Luna Verath</strong> commented: "I've been waiting for you."
                <div class="notif-time">2 mins ago</div>
              </div>
            </div>
            <div class="notif-item">
              <img src="assets/chars/char4.svg" class="notif-avatar" onerror="this.style.display='none'">
              <div class="notif-content">
                <strong>Velvet Noir</strong> replied: "You think you can handle me?"
                <div class="notif-time">1 hr ago</div>
              </div>
            </div>
            <div class="notif-item">
              <img src="assets/chars/char5.svg" class="notif-avatar" onerror="this.style.display='none'">
              <div class="notif-content">
                <strong>Rex Talon</strong> liked your message.
                <div class="notif-time">3 hrs ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
`;

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    if (!content.includes('notifications-dropdown')) {
      content = content.replace('<button class="settings-btn"', notifHtml.trim() + '\n      <button class="settings-btn"');
      fs.writeFileSync(file, content);
      console.log(`Updated ${file}`);
    }
  }
});

// Add CSS to style.css
const cssCode = `
/* --- Notifications Dropdown --- */
.notifications-dropdown { position: relative; display: inline-block; margin-right: 5px; }
.notif-btn {
  background: transparent; border: none; font-size: 1.4rem;
  cursor: pointer; padding: 6px; border-radius: 50%; transition: var(--transition);
  position: relative; color: var(--text-primary);
}
.notif-btn:hover { background: var(--bg-hover); }
.notif-badge {
  position: absolute; top: 2px; right: 2px; background: var(--accent); color: #fff;
  font-size: 0.7rem; font-weight: bold; width: 18px; height: 18px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center; border: 2px solid var(--bg-secondary);
}
.notif-dropdown-menu {
  display: none; position: absolute; right: 0; top: 45px; width: 320px;
  background: var(--surface); border: 1px solid var(--border-color); border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.6); z-index: 1000; overflow: hidden;
}
.notif-dropdown-menu.show { display: flex; flex-direction: column; }
.notif-header {
  padding: 14px 16px; border-bottom: 1px solid var(--border-color);
  font-weight: 700; color: var(--text-primary); font-size: 1.05rem; background: rgba(255,255,255,0.02);
}
.notif-list { max-height: 350px; overflow-y: auto; display: flex; flex-direction: column; }
.notif-item {
  display: flex; gap: 12px; padding: 14px 16px; border-bottom: 1px solid rgba(255,255,255,0.05);
  cursor: pointer; transition: background 0.2s; align-items: flex-start;
}
.notif-item:hover { background: var(--bg-hover); }
.notif-avatar { width: 40px; height: 40px; border-radius: 50%; object-fit: cover; background: #222; }
.notif-content { flex: 1; font-size: 0.9rem; color: var(--text-secondary); line-height: 1.4; }
.notif-content strong { color: var(--text-primary); }
.notif-time { font-size: 0.75rem; color: var(--text-muted); margin-top: 4px; }
`;
const cssPath = 'css/style.css';
if (fs.existsSync(cssPath)) {
  let cssContent = fs.readFileSync(cssPath, 'utf8');
  if (!cssContent.includes('.notifications-dropdown')) {
    fs.appendFileSync(cssPath, '\\n' + cssCode);
    console.log('Updated style.css');
  }
}

// Add JS logic to app-main.js
const jsCode = `
/* --- Notifications Logic --- */
function toggleNotifDropdown() {
  document.getElementById("notifDropdown")?.classList.toggle("show");
}
window.toggleNotifDropdown = toggleNotifDropdown;

document.addEventListener("click", (e) => {
  if (!e.target.closest(".notifications-dropdown")) {
    document.getElementById("notifDropdown")?.classList.remove("show");
  }
});
`;
const jsPath = 'js/app-main.js';
if (fs.existsSync(jsPath)) {
  let jsContent = fs.readFileSync(jsPath, 'utf8');
  if (!jsContent.includes('toggleNotifDropdown')) {
    fs.appendFileSync(jsPath, '\\n' + jsCode);
    console.log('Updated app-main.js');
  }
}
