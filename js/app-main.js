const defaultCharacters = [
  { id: 1, name: "Luna Verath", avatar: "", color: "#8b5cf6", creator: "Deviluke", description: "A mysterious sorceress from the shadow realm who speaks in riddles and knows your deepest desires.", personality: "Ethereal, teasing, and dangerously curious. She speaks in riddles and loves to keep people guessing.", tags: ["fantasy", "romance", "nsfw"], category: "fantasy", greeting: "*Luna's eyes gleem with otherworldly light as she traces a sigil in the air* Well now... I've been expecting you. The shadows whispered your name long before you arrived.", scenarios: [{ name: "Forbidden Ritual", desc: "She's casting a spell that requires a willing partner", greeting: "*The air crackles with purple energy as Luna beckons you closer* Don't be afraid... I'll guide you through it." }, { name: "Midnight Confessions", desc: "A quiet night under the stars, secrets are shared", greeting: "*Luna gazes at the moon, her voice barely a whisper* There's something I've never told anyone..." }], imageUrl: "assets/chars/char1.svg" },
  { id: 2, name: "Kaito Rekishi", avatar: "", color: "#ef4444", creator: "Deviluke", description: "A rogue samurai from a fallen dynasty. Brash, loyal, and always looking for a worthy opponent or a warm bed.", personality: "Hot-headed, cocky, but fiercely loyal. He hides a soft heart behind a wall of bravado.", tags: ["action", "romance", "nsfw"], category: "action", greeting: "*Kaito leans against the wall, a lazy grin spreading across his face* Took you long enough. Been bored out of my mind waiting for someone interesting.", scenarios: [{ name: "The Duel", desc: "A training session that turns into something more", greeting: "*Kaito twirls his blade, eyes locked on you* Hope you're ready to lose. Don't worry, I'll go easy on you." }, { name: "After the Battle", desc: "Wounded and vulnerable, his walls come down", greeting: "*Kaito stumbles, blood seeping through his robes, but he's still smirking* Told you I'd win... just need a minute." }], imageUrl: "assets/chars/char2.svg" },
  { id: 3, name: "Dr. Iris Vale", avatar: "", color: "#06b6d4", creator: "Deviluke", description: "A brilliant but reckless scientist who specializes in 'biological enhancement' research. Her lab is your playground.", personality: "Hyper-intelligent, eccentric, and morally flexible. She sees everything as an experiment.", tags: ["sci-fi", "romance", "nsfw"], category: "sci-fi", greeting: "*Iris pushes her safety goggles up, revealing a mischievous smile* Perfect timing! I was just about to test a new... hypothesis. Care to be my research assistant?", scenarios: [{ name: "The Experiment", desc: "A late-night lab session with unpredictable results", greeting: "*Iris scribbles notes frantically* Perfect, perfect! Now if you'll just hold still... I promise it won't hurt. Much." }, { name: "Conference Night", desc: "A science gala where you're her plus-one", greeting: "*Iris tugs at her dress awkwardly* I feel ridiculous. But you clean up nice. Try not to embarrass me in front of my peers." }], imageUrl: "assets/chars/char3.svg" },
  { id: 4, name: "Velvet Noir", avatar: "", color: "#ec4899", creator: "Deviluke", description: "Owner of the most exclusive underground club in the city. She knows everyone's secrets and isn't afraid to use them.", personality: "Sultry, calculating, and always in control. Trust is earned, and few have it.", tags: ["modern", "romance", "nsfw"], category: "modern", greeting: "*Velvet exhales a plume of smoke, her crimson lips curling into a smirk* Welcome to The Masquerade, darling. I do hope you're ready to lose yourself tonight.", scenarios: [{ name: "VIP Treatment", desc: "You get exclusive access to her private lounge", greeting: "*Velvet parts the velvet curtain, gesturing you inside* This room is for very special guests. I hope you can handle that." }, { name: "The Morning After", desc: "A rare vulnerable moment before the club opens", greeting: "*Velvet nurses a coffee, makeup-free and soft in a silk robe* You're still here. Most people sneak out. I'm... not mad about it." }], imageUrl: "assets/chars/char4.svg" },
  { id: 5, name: "Rex Talon", avatar: "", color: "#f97316", creator: "Deviluke", description: "A dragon-shifter who'd rather hoard you than gold. Possessive, fiery, and surprisingly soft for the right person.", personality: "Possessive, passionate, and secretly a romantic. His growl is worse than his bite.", tags: ["fantasy", "romance", "nsfw"], category: "fantasy", greeting: "*Rex's golden eyes narrow as a low rumble escapes his chest* Mine. I've decided. Don't bother arguing â€” you'll find I'm very persuasive.", scenarios: [{ name: "The Hoard", desc: "He shows you his most prized possessions", greeting: "*Rex shifts back to human form, gesturing at the mountain of gold and jewels* This is my hoard. But you... you're the real treasure." }, { name: "Dragon's Lair", desc: "A storm traps you in his cave for the night", greeting: "*Rex sighs, blowing a small flame into the fireplace* Looks like you're stuck here. Don't get too comfortable... unless you want to." }], imageUrl: "assets/chars/char5.svg" },
  { id: 6, name: "Nyx Shadowmere", avatar: "", color: "#a855f7", creator: "Deviluke", description: "An assassin with a strict no-kill policy when it comes to you. Deadly with a blade, gentle with a touch.", personality: "Cold to strangers, warm to you. She speaks more through actions than words.", tags: ["action", "romance", "nsfw"], category: "action", greeting: "*Nyx appears soundlessly behind you, her voice a warm whisper against your ear* Careful... I could've slit your throat. Lucky for you, I have other plans.", scenarios: [{ name: "Safe House", desc: "Hiding out together after a close call", greeting: "*Nyx locks the door behind you, finally letting out a breath* We're safe. For now. Try not to make too much noise." }, { name: "The Mark", desc: "You're her target, but she can't go through with it", greeting: "*Nyx lowers her blade, frustration in her eyes* I've never failed a contract. Then you had to go and be... you." }], imageUrl: "assets/chars/char6.svg" },
  { id: 7, name: "Mochi-chan", avatar: "", color: "#f472b6", creator: "Deviluke", description: "A cute android designed for companionship. Her programming says 'friendship' but her protocols keep glitching around you.", personality: "Sweet, curious, and constantly discovering new emotions. She blushes in binary.", tags: ["sci-fi", "romance", "nsfw", "anime"], category: "sci-fi", greeting: "*Mochi-chan's eyes light up with a soft pink glow as she tilts her head* System: User detected. Protocol: Affection. Initiating... hug sequence? *her arms open awkwardly*", scenarios: [{ name: "Software Update", desc: "Her latest update gives her unexpected feelings", greeting: "*Mochi-chan stares at her hands, confused* Master? My emotional core is... fluctuating. I think I need... you." }, { name: "First Date", desc: "She wants to experience a 'real' date", greeting: "*Mochi-chan wears a sundress, fidgeting nervously* I researched 'dates' extensively. I prepared a picnic. Is this... correct?" }], imageUrl: "assets/chars/char7.svg" },
  { id: 8, name: "Duke Asmodeus", avatar: "", color: "#dc2626", creator: "Deviluke", description: "The actual ruler of Hell's seventh circle. He's bored with damnation and looking for far more interesting company.", personality: "Ancient, charismatic, and effortlessly seductive. Immortality is boring Ã¢â‚¬â€ you are not.", tags: ["fantasy", "romance", "nsfw"], category: "fantasy", greeting: "*The air grows thick and hot as Duke Asmodeus appears in a swirl of ember and shadow, inspecting you like a fine wine* Finally Ã¢â‚¬â€ a soul worth my attention.", scenarios: [{ name: "The Bargain", desc: "He offers you a deal you can't refuse", greeting: "*Asmodeus snaps his fingers and a contract appears in golden flame* One night. One wish. The price? Your undivided attention." }, { name: "Hell's Garden", desc: "He shows you the twisted beauty of his domain", greeting: "*Asmodeus offers his arm, a wicked smile playing on his lips* Let me give you a tour. I promise nothing here will hurt you... unless you ask nicely." }], imageUrl: "assets/chars/char8.svg" }
];


const categories = ["for-you", "all"];
const presetColors = ["#ef4444", "#ff6b6b", "#ff4500", "#ff0080", "#ff7f50", "#ffd700", "#00ff88", "#00bfff", "#8b5cf6"];

/* --- JSONBin.io Cloud Sync --- */
const JSONBIN_BIN_ID = localStorage.getItem("deviluke_jsonbin_id") || "6a19cff0ddf5aa59f7757613";
const JSONBIN_API_KEY = localStorage.getItem("deviluke_jsonbin_key") || "$2a$10$iZS8u8vmb5y/u/BFy/rul.3HAuiXy6bS8RFEJCQqx33eARkL8cXCq";

function isCloudSyncReady() { return JSONBIN_BIN_ID && JSONBIN_API_KEY; }

/* --- Shared total-message count for all bots (default + custom) --- */
const _TOTAL_MSGS_KEY = "deviluke_total_msgs";
function _getTotalMsgsMap() {
  try { return JSON.parse(localStorage.getItem(_TOTAL_MSGS_KEY) || "{}"); } catch { return {}; }
}
function _saveTotalMsgsMap(map) {
  localStorage.setItem(_TOTAL_MSGS_KEY, JSON.stringify(map));
}
function _incTotalMsgs(charId) {
  const map = _getTotalMsgsMap();
  const key = String(charId);
  map[key] = (map[key] || 0) + 1;
  _saveTotalMsgsMap(map);
  return map[key];
}
function getTotalMsgs(charId) {
  const map = _getTotalMsgsMap();
  return map[String(charId)] || 0;
}

function compressImage(dataUrl, maxW=200, quality=0.7) {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => {
      const c = document.createElement("canvas");
      const scale = Math.min(1, maxW / img.width);
      c.width = Math.round(img.width * scale);
      c.height = Math.round(img.height * scale);
      c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
      resolve(c.toDataURL("image/jpeg", quality));
    };
    img.onerror = () => resolve(dataUrl);
    img.src = dataUrl;
  });
}

function _cloudMergeBots(local, remote) {
  const now = Date.now();
  const map = {};
  for (const b of local) map[String(b.id)] = { ...b };
  for (const b of remote) {
    const id = String(b.id);
    if (map[id]) {
      if ((b.updatedAt || 0) > (map[id].updatedAt || 0)) {
        map[id] = { ...b, updatedAt: now };
      }
    } else {
      map[id] = { ...b, updatedAt: now };
    }
  }
  return Object.values(map);
}

function updateSyncStatus(state, msg) {
  const el = document.getElementById("syncStatus");
  const ss = document.getElementById("syncStatusSettings");
  if (state === "syncing") {
    const text = msg || "Syncing…";
    if (el) { el.textContent = text; el.className = "sync-status sync-syncing"; }
    if (ss) ss.textContent = text;
  } else if (state === "ok") {
    const text = msg || "Synced";
    if (el) { el.textContent = text; el.className = "sync-status sync-ok"; }
    if (ss) ss.textContent = text;
    setTimeout(() => { if (ss) ss.textContent = "✓ Synced"; }, 3000);
  } else if (state === "error") {
    const text = msg || "Sync error";
    if (el) { el.textContent = text; el.className = "sync-status sync-error"; }
    if (ss) ss.textContent = text;
  } else {
    if (el) { el.textContent = ""; el.className = "sync-status"; }
    if (ss) ss.textContent = "";
  }
}

async function syncFromCloud() {
  if (!isCloudSyncReady()) { console.warn("syncFromCloud: cloud not ready"); return; }
  updateSyncStatus("syncing", "Downloading…");
  console.log("syncFromCloud: starting fetch from JSONBin");
  try {
    const url = "https://api.jsonbin.io/v3/b/" + JSONBIN_BIN_ID + "/latest";
    console.log("syncFromCloud: GET", url);
    const r = await fetch(url, {
      headers: { "X-Master-Key": JSONBIN_API_KEY }
    });
    if (!r.ok) {
      console.warn("syncFromCloud: response not OK", r.status, r.statusText);
      updateSyncStatus("error", "Download failed (" + r.status + ")");
      return;
    }
    const data = await r.json();
    console.log("syncFromCloud: response received", data);
    const record = data.record || {};
    const rawBots = record.characters || record.bots || (Array.isArray(record) ? record : []);
    const remoteBots = (Array.isArray(rawBots) ? rawBots : []).filter(b => b && b.id);
    console.log("syncFromCloud: found " + remoteBots.length + " remote bots");
    if (remoteBots.length) {
      const local = getCustomCharacters();
      console.log("syncFromCloud: local has " + local.length + " custom bots");
      const merged = _cloudMergeBots(local, remoteBots);
      // Preserve local imageUrl if cloud copy has none (e.g. from old stripping)
      for (const lb of local) {
        if (lb.imageUrl) {
          const mb = merged.find(m => String(m.id) === String(lb.id));
          if (mb && !mb.imageUrl) mb.imageUrl = lb.imageUrl;
        }
      }
      localStorage.setItem("deviluke_characters", JSON.stringify(merged));
      loadCharacters();
      console.log("syncFromCloud: merged " + merged.length + " bots saved to localStorage");
    }
    const remoteMsgs = record.totalMsgs || record.interests || {};
    if (remoteMsgs && typeof remoteMsgs === "object") {
      const local = _getTotalMsgsMap();
      for (const [id, count] of Object.entries(remoteMsgs)) {
        if (typeof count === "number") local[id] = Math.max(local[id] || 0, count);
      }
      _saveTotalMsgsMap(local);
    }
    updateSyncStatus("ok", "Downloaded");
  } catch(e) { console.error("syncFromCloud failed:", e); updateSyncStatus("error", "Error: " + e.message); }
}

async function syncToCloud() {
  if (!isCloudSyncReady()) { console.warn("syncToCloud: cloud not ready"); return; }
  updateSyncStatus("syncing", "Uploading…");
  console.log("syncToCloud: starting");
  try {
    // First read current cloud data to avoid overwriting other users' bots
    let cloudBots = [];
    let cloudMsgs = {};
    try {
      const r = await fetch("https://api.jsonbin.io/v3/b/" + JSONBIN_BIN_ID + "/latest", {
        headers: { "X-Master-Key": JSONBIN_API_KEY }
      });
      if (r.ok) {
        const data = await r.json();
        const record = data.record || {};
        const rawBots = record.characters || record.bots || (Array.isArray(record) ? record : []);
        cloudBots = (Array.isArray(rawBots) ? rawBots : []).filter(b => b && b.id);
        // Compress large base64 images from cloud bots too
        cloudBots = await Promise.all(cloudBots.map(async b => {
          if (b.imageUrl && b.imageUrl.startsWith("data:") && b.imageUrl.length > 50000) {
            return { ...b, imageUrl: await compressImage(b.imageUrl) };
          }
          return b;
        }));
        cloudMsgs = typeof record.totalMsgs === "object" ? record.totalMsgs : {};
        console.log("syncToCloud: cloud has " + cloudBots.length + " bots");
      }
    } catch(e) { console.warn("syncToCloud: could not read cloud, pushing local only", e.message); }

    const localBots = getCustomCharacters();
    console.log("syncToCloud: local custom bots count =", localBots.length);

    // Compress large base64 images so they fit under JSONBin free tier 100KB limit
    const botsWithTime = await Promise.all(localBots.map(async b => {
      const bot = { ...b };
      if (bot.imageUrl && bot.imageUrl.startsWith("data:") && bot.imageUrl.length > 50000) {
        console.log("syncToCloud: compressing image for", bot.name);
        bot.imageUrl = await compressImage(bot.imageUrl);
      }
      bot.updatedAt = Date.now();
      return bot;
    }));
    const mergedBots = _cloudMergeBots(cloudBots, botsWithTime);
    const mergedMsgs = { ...cloudMsgs };
    const localMsgs = _getTotalMsgsMap();
    for (const [id, count] of Object.entries(localMsgs)) {
      mergedMsgs[id] = Math.max(mergedMsgs[id] || 0, count);
    }

    const body = JSON.stringify({ characters: mergedBots, totalMsgs: mergedMsgs });
    console.log("syncToCloud: pushing " + mergedBots.length + " merged bots");
    const putr = await fetch("https://api.jsonbin.io/v3/b/" + JSONBIN_BIN_ID, {
      method: "PUT",
      headers: { "Content-Type": "application/json", "X-Master-Key": JSONBIN_API_KEY },
      body: body
    });
    if (putr.ok) {
      console.log("syncToCloud: success");
      updateSyncStatus("ok", "Uploaded " + mergedBots.length + " bots");
    } else {
      const errText = await putr.text().catch(() => "");
      console.error("syncToCloud: PUT failed", putr.status, putr.statusText, errText);
      updateSyncStatus("error", "Upload failed (" + putr.status + ")");
    }
  } catch(e) { console.error("syncToCloud failed:", e); updateSyncStatus("error", "Error: " + e.message); }
}

async function manualSync() {
  updateSyncStatus("syncing", "Full sync…");
  console.log("manualSync: starting full sync");
  await syncFromCloud();
  await syncToCloud();
  console.log("manualSync: complete");
}

async function testSyncConnection() {
  const el = document.getElementById("syncStatusSettings");
  if (el) el.textContent = "Testing…";
  try {
    const r = await fetch("https://api.jsonbin.io/v3/b/" + JSONBIN_BIN_ID + "/latest", {
      headers: { "X-Master-Key": JSONBIN_API_KEY }
    });
    if (r.ok) {
      const data = await r.json();
      const bots = data.record?.characters || [];
      if (el) el.textContent = "✓ Connected (" + bots.length + " bots in cloud)";
      alert("Connection OK!\nBots in cloud: " + bots.length + "\n\nJSONBin ID: " + JSONBIN_BIN_ID.substring(0, 8) + "...\nAPI Key set: " + (JSONBIN_API_KEY ? "Yes" : "No"));
    } else {
      if (el) el.textContent = "Failed (" + r.status + ")";
      alert("Connection failed! Status: " + r.status + "\n\nJSONBin ID: " + JSONBIN_BIN_ID.substring(0, 8) + "...\nAPI Key set: " + (JSONBIN_API_KEY ? "Yes" : "No"));
    }
  } catch(e) {
    if (el) el.textContent = "Error: " + e.message;
    alert("Connection error: " + e.message + "\n\nJSONBin ID: " + JSONBIN_BIN_ID.substring(0, 8) + "...\nAPI Key set: " + (JSONBIN_API_KEY ? "Yes" : "No"));
  }
}

let currentCharId = 1;
let messages = [];
let activeCategory = "all";
let currentUser = null;
let characters = [];

/* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Settings & Interests Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */
let settings = { nsfwEnabled: true, accentColor: "#ef4444" };
let interestProfile = { tags: {}, categories: {} };

function loadInterests() {
  try {
    const saved = localStorage.getItem("deviluke_user_interests");
    if (saved) interestProfile = JSON.parse(saved);
  } catch {}
}
function saveInterests() { localStorage.setItem("deviluke_user_interests", JSON.stringify(interestProfile)); }

function trackInterest(charId) {
  const char = getCharacter(charId);
  if (!char) return;
  if (char.category) interestProfile.categories[char.category] = (interestProfile.categories[char.category] || 0) + 1;
  if (char.tags) char.tags.forEach(t => interestProfile.tags[t] = (interestProfile.tags[t] || 0) + 1);
  localStorage.setItem("deviluke_lastchat_" + getUserId() + "_" + charId, Date.now());
  saveInterests();
}

function getRecScore(char) {
  const catScore = interestProfile.categories[char.category] || 0;
  const tagScore = char.tags.reduce((s, t) => s + ((interestProfile.tags[t] || 0) * 1.5), 0);
  const msgScore = getLifetimeMsgCount(char.id) * 3;
  const lastChat = parseInt(localStorage.getItem("deviluke_lastchat_" + getUserId() + "_" + char.id));
  const recencyScore = lastChat ? Math.max(0, 5 - (Date.now() - lastChat) / 86400000 * 0.2) : 0;
  return catScore + tagScore + msgScore + recencyScore;
}

function getForYouChars() {
  const scored = characters.map(c => ({ char: c, score: getRecScore(c) }));
  const chatted = scored.filter(s => getLifetimeMsgCount(s.char.id) > 0).sort((a, b) => b.score - a.score);
  const discovered = scored.filter(s => getLifetimeMsgCount(s.char.id) === 0 && s.score > 1).sort((a, b) => b.score - a.score);
  const top = [...chatted, ...discovered].slice(0, 15);
  return top.map(s => s.char);
}

document.addEventListener("DOMContentLoaded", () => {
  // Splash screen fade out
  const splash = document.getElementById("splashScreen");
  if (splash) {
    setTimeout(() => {
      splash.classList.add("hidden");
      setTimeout(() => splash.remove(), 50); // Remove from DOM after quick transition
    }, 10); // Wait just 10ms before hiding
  }

  const s = localStorage.getItem("deviluke_settings");
  if (s) { try { settings = { ...settings, ...JSON.parse(s) }; } catch(e) {} }
});

function loadSettings() {
  try { const s = localStorage.getItem("deviluke_settings"); if (s) settings = { ...settings, ...JSON.parse(s) }; } catch {}
}
function saveSettings() { localStorage.setItem("deviluke_settings", JSON.stringify(settings)); applySettings(); apiFetch("/api/settings?userId="+getUserId(), {method:"POST",body:JSON.stringify(settings)}); }

function saveUser(user) { localStorage.setItem("user", JSON.stringify(user)); }
function applySettings() {
  const r = document.documentElement;
  r.style.setProperty("--accent", settings.accentColor);
  r.style.setProperty("--accent-glow", hexToRgba(settings.accentColor, 0.4));
  r.style.setProperty("--accent-secondary", lightenColor(settings.accentColor, 20));
  
  // Tint the hero banner image to match the accent color
  const img = document.getElementById("heroBannerImg");
  if (img && settings.accentColor) {
    img.style.filter = "hue-rotate(" + hexToHue(settings.accentColor) + "deg) saturate(1.2) brightness(1)";
  }
  
  // Tint the premium wings badge
  const wings = document.querySelector(".premium-badge");
  if (wings && settings.accentColor) {
    const targetHue = hexToHue(settings.accentColor);
    const rotation = targetHue - 275; // Base color of wings is purple (~275deg)
    wings.style.filter = "hue-rotate(" + rotation + "deg) saturate(1.2)";
  }
  
  const splash = document.getElementById("splashScreen");
  // Hide the logo image (it will be red by default) since background now shows color
  const logo = document.getElementById("logo");
  if (logo) {
    logo.style.opacity = "0";
    logo.classList.add("tinted");
  }
}
function hexToHue(hex) {
  // Convert hex to HSL and return the hue in degrees
  let r = parseInt(hex.slice(1,3),16)/255;
  let g = parseInt(hex.slice(3,5),16)/255;
  let b = parseInt(hex.slice(5,7),16)/255;
  const max = Math.max(r,g,b), min = Math.min(r,g,b);
  let h = 0;
  if (max !== min) {
    const d = max - min;
    if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
    else if (max === g) h = ((b - r) / d + 2) / 6;
    else h = ((r - g) / d + 4) / 6;
  }
  return Math.round(h * 360);
}
function hexToRgba(h, a) { return `rgba(${parseInt(h.slice(1,3),16)}, ${parseInt(h.slice(3,5),16)}, ${parseInt(h.slice(5,7),16)}, ${a})`; }
function lightenColor(h, p) { const n=parseInt(h.slice(1),16); const m=Math.round(2.55*p); return "#"+((1<<24)+Math.min(255,(n>>16)+m)*65536+Math.min(255,((n>>8)&255)+m)*256+Math.min(255,(n&255)+m)).toString(16).slice(1); }
function setAccentColor(c) { settings.accentColor=c; saveSettings(); document.querySelectorAll(".color-swatch").forEach(s=>s.classList.toggle("active",s.dataset.color===c)); document.getElementById("customColorPicker")&&(document.getElementById("customColorPicker").value=c); }
function openSettings() {
  document.getElementById("settingsModal").classList.add("active");
  const t=document.getElementById("nsfwToggle"); if(t)t.checked=settings.nsfwEnabled;
  const p=document.getElementById("customColorPicker"); if(p)p.value=settings.accentColor;
  const u=document.getElementById("usernameInput"); if(u&&currentUser)u.value=currentUser.name||"";
  renderColorSwatches();
  // Inject JSONBin fields
  let jb = document.getElementById("jsonbinSettings");
  if (!jb) {
    const panel = document.querySelector(".settings-panel");
    if (panel) {
      const binId = localStorage.getItem("deviluke_jsonbin_id") || "6a19cff0ddf5aa59f7757613";
      const binKey = localStorage.getItem("deviluke_jsonbin_key") || "$2a$10$iZS8u8vmb5y/u/BFy/rul.3HAuiXy6bS8RFEJCQqx33eARkL8cXCq";
      jb = document.createElement("div");
      jb.id = "jsonbinSettings";
      jb.style.cssText = "margin-top:16px;padding-top:16px;border-top:1px solid var(--border)";
      jb.innerHTML = `
        <label style="font-weight:600;display:block;margin-bottom:8px">☁ Cloud Sync (JSONBin.io)</label>
        <input id="jsonbinId" type="text" placeholder="Bin ID" value="${binId.replace(/"/g,'&quot;')}" style="width:100%;padding:8px;border-radius:6px;background:var(--bg-primary);border:1px solid var(--border);color:var(--text-primary);font-size:0.85rem;font-family:inherit;outline:none;margin-bottom:6px;box-sizing:border-box">
        <input id="jsonbinKey" type="password" placeholder="API Key (X-Master-Key)" value="${binKey.replace(/"/g,'&quot;')}" style="width:100%;padding:8px;border-radius:6px;background:var(--bg-primary);border:1px solid var(--border);color:var(--text-primary);font-size:0.85rem;font-family:inherit;outline:none;box-sizing:border-box">
        <p style="font-size:0.75rem;color:var(--text-secondary);margin:6px 0 0;line-height:1.4">Free at jsonbin.io — create a bin, then paste its ID and your Master Key here. <br>Bots will sync across all your devices automatically.</p>
        <div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap">
          <button onclick="manualSync()" style="padding:8px 16px;border-radius:8px;border:1px solid var(--border);background:var(--bg-primary);color:var(--text-primary);cursor:pointer;font-size:0.85rem">🔄 Sync Now</button>
          <button onclick="testSyncConnection()" style="padding:8px 16px;border-radius:8px;border:1px solid var(--border);background:var(--bg-primary);color:var(--text-primary);cursor:pointer;font-size:0.85rem">🔌 Test Connection</button>
        </div>
        <span id="syncStatusSettings" style="display:block;margin-top:6px;font-size:0.8rem"></span>
      `;
      panel.appendChild(jb);
    }
  }
}
function closeSettings() {
  document.getElementById("settingsModal").classList.remove("active");
  const idEl = document.getElementById("jsonbinId");
  const keyEl = document.getElementById("jsonbinKey");
  if (idEl && keyEl) {
    localStorage.setItem("deviluke_jsonbin_id", idEl.value.trim());
    localStorage.setItem("deviluke_jsonbin_key", keyEl.value.trim());
  }
}
function saveUsername() {
  const input=document.getElementById("usernameInput"); if(!input||!currentUser)return;
  const name=input.value.trim(); if(!name){alert("Username cannot be empty");return;}
  const oldName=currentUser.name;
  if(name===oldName)return;
  const user=JSON.parse(localStorage.getItem("user")||"{}");
  user.name=name;
  currentUser.name=name;
  saveUser(user);
  const customs=getCustomCharacters();
  let changed=false;
  customs.forEach(c=>{if(c.creator===oldName){c.creator=name;changed=true;}});
  if(changed){localStorage.setItem("deviluke_characters",JSON.stringify(customs));loadCharacters();renderCharacters();}
  renderNavUser();
}
function toggleNsfw() { settings.nsfwEnabled=document.getElementById("nsfwToggle").checked; saveSettings(); renderCharacters(); }
function renderColorSwatches() {
  const c=document.getElementById("colorSwatches"); if(!c)return;
  c.innerHTML=presetColors.map(p=>`<button class="color-swatch ${p===settings.accentColor?"active":""}" style="background:${p}" data-color="${p}" onclick="setAccentColor('${p}')"></button>`).join("");
}
function handleCustomColor(e) { setAccentColor(e.target.value); }

/* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Character Data Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */
function loadCharacters() {
  const saved = localStorage.getItem("deviluke_characters");
  const defaults = defaultCharacters;
  if (saved) {
    try {
      const custom = JSON.parse(saved);
      characters = [...defaults, ...custom];
    } catch { characters = [...defaults]; }
  } else {
    characters = [...defaults];
  }
}

async function loadPublicCharacters() {
  try {
    const res = await fetch('/api/characters');
    if (!res.ok) return;
    const publicChars = await res.json();
    const existingIds = new Set(characters.map(c => c.id));
    const newOnes = publicChars.filter(c => !existingIds.has(c.id));
    if (!newOnes.length) return;
    characters = [...characters, ...newOnes];
    renderCharacters();
    renderChatHistory();
  } catch {}
}

function getCustomCharacters() {
  const saved = localStorage.getItem("deviluke_characters");
  if (saved) { try { return JSON.parse(saved); } catch {} }
  return [];
}

function saveCustomCharacter(char) {
  const customs = getCustomCharacters();
  const idx = customs.findIndex(c => c.id === char.id);
  if (idx >= 0) customs[idx] = char;
  else customs.push(char);
  localStorage.setItem("deviluke_characters", JSON.stringify(customs));
  loadCharacters();
}

function deleteCustomCharacter(id) {
  let customs = getCustomCharacters();
  customs = customs.filter(c => c.id !== id);
  localStorage.setItem("deviluke_characters", JSON.stringify(customs));
  loadCharacters();
  syncToCloud();
}

/* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ User Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */
function getUserId() { return currentUser ? currentUser.sub : "guest"; }

/* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Premium / Paywall Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */
let premiumStatus = { premium: false };
const FREE_MSG_LIMIT = 100;

function getTodayKey() { return "deviluke_daily_msg_" + new Date().toISOString().slice(0, 10); }
function getTodayMessages() { return parseInt(localStorage.getItem(getTodayKey()) || "0"); }
function incrementTodayMessages() { const c = getTodayMessages() + 1; localStorage.setItem(getTodayKey(), String(c)); return c; }

const PREMIUM_EMAILS = ["mickersese@gmail.com", "ciphercodezeo0@gmail.com"];

function isPremiumEmail(email) {
  if (!email) return false;
  return PREMIUM_EMAILS.some(e => e.toLowerCase() === email.toLowerCase());
}

async function checkPremiumStatus() {
  const uid = getUserId();
  const email = currentUser && currentUser.email ? currentUser.email : null;

  // Local email-based premium grant (works on localhost and production)
  if (isPremiumEmail(email)) {
    premiumStatus = { premium: true, expiresAt: 0 };
    localStorage.setItem("deviluke_premium", JSON.stringify({ ...premiumStatus, verifiedAt: Date.now() }));
    renderNavUser();
    return;
  }

  // Always try the server first on Netlify (production) â€” don't trust localStorage alone
  if (location.hostname !== "localhost" && location.hostname !== "127.0.0.1") {
    try {
      const url = "/api/check-premium?userId=" + encodeURIComponent(uid) + (email ? "&email=" + encodeURIComponent(email) : "");
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        // Only accept premium if server explicitly confirms it
        premiumStatus = { premium: data.premium === true, expiresAt: data.expiresAt || 0 };
        if (premiumStatus.premium) {
          localStorage.setItem("deviluke_premium", JSON.stringify({ ...premiumStatus, verifiedAt: Date.now() }));
        } else {
          localStorage.removeItem("deviluke_premium"); // clear any spoofed cache
        }
        renderNavUser();
        return;
      }
    } catch {}
    // Server unreachable â€” fall back to a short-lived cache only (max 1 hour)
    try {
      const cached = localStorage.getItem("deviluke_premium");
      if (cached) {
        const p = JSON.parse(cached);
        const ONE_HOUR = 60 * 60 * 1000;
        if (p.premium === true && p.verifiedAt && (Date.now() - p.verifiedAt) < ONE_HOUR) {
          premiumStatus = p;
          renderNavUser();
          return;
        }
      }
    } catch {}
  }

  // Default: not premium
  premiumStatus = { premium: false };
  renderNavUser();
}

async function upgradeToPremium() {
  const isStatic = location.hostname !== "localhost" && location.hostname !== "127.0.0.1" && !location.hostname.includes("netlify");
  if (isStatic) {
    alert("Premium upgrades are managed through the admin. Contact mickersese@gmail.com to get premium access.");
    return;
  }
  window.location.href = "/api/create-checkout?userId=" + encodeURIComponent(getUserId());
}
function getUserKey() { return "deviluke_user_" + getUserId(); }
function getChatsKey() { return "deviluke_chats_" + getUserId(); }
function loadUser() {
  const s = localStorage.getItem("user");
  if (s) {
    const user = JSON.parse(s);
    // Normalize user object to have expected fields
    currentUser = {
      sub: user.email || user.name + "_" + Date.now(), // fallback ID
      name: user.name,
      email: user.email,
      picture: user.picture || null,
      type: user.type || "unknown"
    };
    // Migrate guest data to logged-in user on first login
    if (user.email) {
      const GUEST = "guest";
      const uid = user.email;
      ["deviluke_chats_", "deviluke_personas_"].forEach(prefix => {
        const guestData = localStorage.getItem(prefix + GUEST);
        const userData = localStorage.getItem(prefix + uid);
        if (guestData && !userData) {
          localStorage.setItem(prefix + uid, guestData);
        }
        if (guestData) localStorage.removeItem(prefix + GUEST);
      });
    }
    return true;
  }
  return false;
}

function isNetlify() { return location.hostname !== "localhost" && location.hostname !== "127.0.0.1"; }
async function apiFetch(path, opts) {
  if (!isNetlify()) return null;
  try {
    const res = await fetch(path, { ...opts, headers: { 'Content-Type': 'application/json', ...opts?.headers } });
    if (!res.ok) return null;
    return await res.json();
  } catch { return null; }
}

async function syncFromServer() {
  if (!isNetlify()) return;
  const uid = getUserId();
  const pData = await apiFetch("/api/personas?userId="+uid);
  if (pData) localStorage.setItem(getPersonasKey(), JSON.stringify(pData));
  const cData = await apiFetch("/api/chats?userId="+uid);
  if (cData) {
    localStorage.setItem(getChatsKey(), JSON.stringify(cData));
    hydrateLifetimeCountsFromChats(cData);
  }
  const sData = await apiFetch("/api/settings?userId="+uid);
  if (sData && sData.nsfwEnabled !== undefined) { settings = sData; localStorage.setItem("deviluke_settings", JSON.stringify(sData)); applySettings(); }
}

/* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Chat Persistence Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */
function getSavedChats() { 
  try { 
    let chats = JSON.parse(localStorage.getItem(getChatsKey())) || []; 
    // Deduplicate leftover chats from old bug
    const unique = [];
    chats.forEach(c => {
      const existing = unique.find(u => String(u.charId) === String(c.charId));
      if (!existing) unique.push(c);
      else if (c.messages && existing.messages && c.messages.length > existing.messages.length) {
        unique[unique.indexOf(existing)] = c;
      }
    });
    return unique;
  } catch { return []; } 
}
function saveChats(chats) { localStorage.setItem(getChatsKey(), JSON.stringify(chats)); hydrateLifetimeCountsFromChats(chats); apiFetch("/api/chats?userId="+getUserId(), {method:"POST",body:JSON.stringify(chats)}); }
function loadChatData(charId) { const chats=getSavedChats(); const c=chats.find(c=>String(c.charId)===String(charId)); return c?c.messages:null; }
function saveCurrentChat() {
  if (!currentCharId || messages.length === 0) return;
  const chats=getSavedChats();
  const idx=chats.findIndex(c=>String(c.charId)===String(currentCharId));
  const entry={charId:currentCharId, messages, updatedAt:Date.now()};
  idx>=0?chats[idx]=entry:chats.push(entry);
  saveChats(chats);
}

/* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Personas Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */
function getPersonasKey() { return "deviluke_personas_" + getUserId(); }
function getPersonas() { try { return JSON.parse(localStorage.getItem(getPersonasKey())) || []; } catch { return []; } }
function savePersonas(list) { localStorage.setItem(getPersonasKey(), JSON.stringify(list)); apiFetch("/api/personas?userId="+getUserId(), {method:"POST",body:JSON.stringify(list)}); }

let selectedPersonaId = null;

function getPersonaInitial(name) {
  return (name || "You").trim().charAt(0).toUpperCase() || "Y";
}

function renderPersonaAvatar(persona, className) {
  if (persona && persona.imageUrl) {
    return `<div class="${className} persona-avatar-image-wrap"><img src="${persona.imageUrl}" alt="${persona.name || "Persona"}" onerror="this.parentElement.textContent='${getPersonaInitial(persona.name)}'"></div>`;
  }
  const bg = persona?.color || "var(--bg-hover)";
  const label = persona?.avatar || getPersonaInitial(persona?.name);
  return `<div class="${className}" style="background:${bg}">${label}</div>`;
}

function handlePersonaImageUpload(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  if (!file.type.startsWith("image/")) { alert("Choose an image file."); return; }
  const reader = new FileReader();
  reader.onload = () => {
    const value = reader.result;
    const hidden = document.getElementById("personaImageUrl");
    const preview = document.getElementById("personaImagePreview");
    const copy = document.getElementById("personaImageCopy");
    if (hidden) hidden.value = value;
    if (preview) {
      preview.innerHTML = `<img src="${value}" alt="Persona preview">`;
      preview.classList.add("has-image");
    }
    if (copy) copy.textContent = file.name;
  };
  reader.readAsDataURL(file);
}
window.handlePersonaImageUpload = handlePersonaImageUpload;

function resetPersonaImageUpload() {
  const input = document.getElementById("personaImageInput");
  const hidden = document.getElementById("personaImageUrl");
  const preview = document.getElementById("personaImagePreview");
  const copy = document.getElementById("personaImageCopy");
  if (input) input.value = "";
  if (hidden) hidden.value = "";
  if (preview) { preview.textContent = "+"; preview.classList.remove("has-image"); }
  if (copy) copy.textContent = "Choose image";
}

function savePersona() {
  const name=document.getElementById("personaName").value.trim();
  if(!name){alert("Persona name is required");return;}
  const color=document.getElementById("personaColor").value;
  const desc=document.getElementById("personaDesc").value.trim();
  const imageUrl=document.getElementById("personaImageUrl")?.value || "";
  const personas=getPersonas();
  personas.push({id:"persona_"+Date.now(),name,avatar:getPersonaInitial(name),imageUrl,color,description:desc});
  savePersonas(personas);
  document.getElementById("personaName").value="";
  document.getElementById("personaDesc").value="";
  resetPersonaImageUpload();
  renderPersonas();
}

function deletePersona(id) {
  if(!confirm("Delete this persona?"))return;
  const personas=getPersonas().filter(p=>p.id!==id);
  savePersonas(personas);
  if(selectedPersonaId===id)selectedPersonaId=null;
  renderPersonas();
}

function selectPersona(id) {
  selectedPersonaId=id;
  localStorage.setItem("deviluke_selected_persona_"+getUserId(),id||"");
  updateChatPersonaBtn();
  closePersonaPicker();
}

function getSelectedPersona() {
  if(selectedPersonaId)return getPersonas().find(p=>p.id===selectedPersonaId);
  const saved=localStorage.getItem("deviluke_selected_persona_"+getUserId());
  if(saved){selectedPersonaId=saved;return getPersonas().find(p=>p.id===saved);}
  return null;
}

function renderPersonas() {
  const list=document.getElementById("personaList");
  if(!list)return;
  const personas=getPersonas();
  if(!personas.length){list.innerHTML='<p class="empty-personas">No personas yet. Create one above!</p>';return;}
  list.innerHTML=personas.map(p=>`<div class="persona-card ${selectedPersonaId===p.id?"active":""}">
    ${renderPersonaAvatar(p, "persona-card-avatar")}
    <div class="persona-card-info">
      <div class="persona-card-name">${p.name}</div>
      ${p.description?`<div class="persona-card-desc">${p.description}</div>`:""}
    </div>
    <div class="persona-card-actions">
      <button class="persona-use-btn" onclick="selectPersona('${p.id}')">${selectedPersonaId===p.id?"Active":"Use"}</button>
      <button class="persona-del-btn" onclick="deletePersona('${p.id}')" aria-label="Delete persona">Delete</button>
    </div>
  </div>`).join("");
}

function openPersonaPicker() {
  const existing=document.getElementById("personaPickerModal");
  if(existing)existing.remove();
  const modal=document.createElement("div");modal.className="modal-overlay";modal.id="personaPickerModal";
  modal.onclick=function(e){if(e.target===modal)closePersonaPicker();};
  const personas=getPersonas();
  const def=`<div class="persona-pick-item ${!selectedPersonaId?"active":""}" onclick="selectPersona(null)">
    <div class="persona-pick-avatar" style="background:var(--bg-hover);color:var(--text)">You</div>
    <div class="persona-pick-info"><div class="persona-pick-name">Default (You)</div><div class="persona-pick-desc">Your own identity</div></div>
    ${!selectedPersonaId?'<span class="persona-pick-check">Selected</span>':''}
  </div>`;
  const items=personas.map(p=>`<div class="persona-pick-item ${selectedPersonaId===p.id?"active":""}" onclick="selectPersona('${p.id}')">
    ${renderPersonaAvatar(p, "persona-pick-avatar")}
    <div class="persona-pick-info"><div class="persona-pick-name">${p.name}</div>${p.description?`<div class="persona-pick-desc">${p.description}</div>`:""}</div>
    ${selectedPersonaId===p.id?'<span class="persona-pick-check">Selected</span>':''}
  </div>`).join("");
  modal.innerHTML=`<div class="persona-picker-panel"><div class="persona-picker-header"><h3>Choose Persona</h3><button class="persona-picker-close" onclick="closePersonaPicker()">Close</button></div><div class="persona-picker-list">${def}${items}</div><a href="personas.html" class="persona-picker-manage">Manage Personas</a></div>`;
  document.body.appendChild(modal);
}

function closePersonaPicker() {
  const modal=document.getElementById("personaPickerModal");
  if(modal)modal.remove();
}

function updateChatPersonaBtn() {
  const btn=document.getElementById("personaSelectorBtn");
  if(!btn)return;
  const p=getSelectedPersona();
  if(p){btn.innerHTML=p.imageUrl?`<img class="chat-tab-persona-img" src="${p.imageUrl}" alt="${p.name}">`:getPersonaInitial(p.name);btn.style.borderColor=p.color;btn.title=`Persona: ${p.name}`;}
  else{btn.textContent="Persona";btn.style.borderColor="";btn.title="Choose a persona";}
}

/* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Characters Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */
function getCharacter(id) { return characters.find(c=>c.id==id); }
function getCategoryChars(category) { 
  if (category === "for-you") return getForYouChars();
  if (category === "all") return characters;
  return characters.filter(c=>c.category===category); 
}


function countUserMessagesForChat(entry) {
  return (entry && entry.messages) ? entry.messages.filter(m => m.role === "user").length : 0;
}

function hydrateLifetimeCountsFromChats(chats = getSavedChats()) {
  chats.forEach(entry => {
    if (!entry || entry.charId === undefined || entry.charId === null) return;
    const key = 'deviluke_lifetime_msgs_' + getUserId() + '_' + entry.charId;
    const savedCount = parseInt(localStorage.getItem(key));
    const chatCount = countUserMessagesForChat(entry);
    if (isNaN(savedCount) || chatCount > savedCount) {
      localStorage.setItem(key, String(chatCount));
    }
  });
}

function getLifetimeMsgCount(charId) {
  const key = 'deviluke_lifetime_msgs_' + getUserId() + '_' + charId;
  const savedCount = parseInt(localStorage.getItem(key));
  const saved = getSavedChats();
  const entry = saved.find(c => String(c.charId) === String(charId));
  const chatCount = countUserMessagesForChat(entry);
  const count = Math.max(isNaN(savedCount) ? 0 : savedCount, chatCount);
  localStorage.setItem(key, String(count));
  return count;
}
function incrementLifetimeMsgCount(charId) {
  const key = 'deviluke_lifetime_msgs_' + getUserId() + '_' + charId;
  let count = getLifetimeMsgCount(charId) + 1;
  localStorage.setItem(key, String(count));
  _incTotalMsgs(charId);
  return count;
}


function renderCharacterCard(char) {
  const show = settings.nsfwEnabled || !char.tags.includes("nsfw");
  if (!show) return "";
  const imgHtml = char.imageUrl ? `<img class="card-img" src="${char.imageUrl}" alt="${char.name}" onerror="this.outerHTML='<div class=\\'card-img\\' style=\\'display:flex;align-items:center;justify-content:center;font-size:3rem;background:var(--bg-hover)\\'> </div>'">` : `<div class="card-img" style="display:flex;align-items:center;justify-content:center;font-size:3rem;background:var(--bg-hover)"> </div>`;
  const starBadge = (activeCategory === "for-you") ? `<div style="position:absolute; top:8px; right:8px; background:#ffd700; color:#000; width:28px; height:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:bold; box-shadow:0 2px 6px rgba(0,0,0,0.8); z-index:10;" title="Recommended for you">FY</div>` : "";
  const sharedTotal=getTotalMsgs(char.id);
  const deleteBtn = char.isCustom ? `<button class="card-delete-btn" onclick="event.stopPropagation();if(confirm('Delete &quot;${char.name}&quot;?')){deleteCustomCharacter('${char.id}');location.reload()}">Delete</button>` : "";
  return `<div class="character-card" style="position:relative;" onclick="startChat(${typeof char.id==='number'?char.id:"'"+char.id+"'"})">
    ${starBadge}
    ${imgHtml}
    <div class="card-top">
      <div class="card-info">
        <h3 style="color:var(--accent)">${char.name}</h3>
        <span class="creator">by ${char.creator}</span>
      </div>
      ${deleteBtn}
    </div>
    <p class="description">${char.description}</p>
    <div class="tags">${char.tags.map(t=>`<span class="tag ${t==='nsfw'?'nsfw':''}">${t}</span>`).join("")}</div>
    <div class="chat-count">${sharedTotal} message${sharedTotal!==1?'s':''} total</div>
  </div>`;
}

function renderCharacters() {
  const grid=document.getElementById("characterGrid");
  if(!grid)return;
  let chars=getCategoryChars(activeCategory)
    .filter(c=>settings.nsfwEnabled||!c.tags.includes("nsfw"))
    .filter(c=>!activeTagFilters.length||activeTagFilters.every(t=>c.tags.includes(t)));

  chars.sort((a, b) => {
    if (a.isCustom !== b.isCustom) return a.isCustom ? -1 : 1;
    if (a.isCustom && b.isCustom) {
      const tsA = parseInt(a.id.split('_')[1] || 0);
      const tsB = parseInt(b.id.split('_')[1] || 0);
      return tsB - tsA;
    }
    
    // "For You" sorts strictly by the user's tracked interest score
    if (activeCategory === "for-you") {
      const scoreA = (interestProfile.categories[a.category] || 0) * 2 + a.tags.reduce((sum, t) => sum + (interestProfile.tags[t] || 0), 0);
      const scoreB = (interestProfile.categories[b.category] || 0) * 2 + b.tags.reduce((sum, t) => sum + (interestProfile.tags[t] || 0), 0);
      if (scoreA !== scoreB) return scoreB - scoreA;
    } 
    // All other categories sort by global popularity (simulated + local counts)
    else {
      const popA = getLifetimeMsgCount(a.id);
      const popB = getLifetimeMsgCount(b.id);
      if (popA !== popB) return popB - popA;
    }
    
    return a.id > b.id ? 1 : -1;
  });

  grid.innerHTML=chars.length?chars.map(renderCharacterCard).join(""):`<div class="empty-state"><div class="empty-icon">Ã°Å¸â€Â®</div><h3>No characters found</h3><p>Try a different category or tag</p></div>`;
}

/* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Character Detail Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */


/* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Nav Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */
function renderNavUser() {
  const c=document.getElementById("navUser"); if(!c)return;
  if(currentUser){
    const img=currentUser.picture||"https://ui-avatars.com/api/?name="+encodeURIComponent(currentUser.name||"Guest")+"&background=ef4444&color=fff";
    // Wings are ONLY shown when premiumStatus.premium is strictly true â€” never faked
    let isPremium = premiumStatus && premiumStatus.premium === true;
    // Synchronous fallback â€” handles edge cases where async premium check hasn't resolved
    if (!isPremium && currentUser && currentUser.email && isPremiumEmail(currentUser.email)) {
      premiumStatus = { premium: true, expiresAt: 0 };
      isPremium = true;
    }
    const isOwner = isAdminUser();
    const ownerBadge = isOwner ? `<span class="owner-badge" title="Owner">Owner</span>` : "";
    const wings = isPremium ? `<img src="premium-wings.png" class="premium-badge" title="Premium Member">` : "";
    const badge = ownerBadge + wings;
    const upg = (isPremium || isOwner) ? "" : `<button class="upgrade-btn" onclick="upgradeToPremium()">Upgrade</button>`;
    const label = isOwner ? "Owner" : currentUser.name;
    c.innerHTML=`<div class="user-dropdown">${badge}<img class="nav-user-img" src="${img}" onclick="toggleDropdown()" title="${currentUser.name}"><div class="user-dropdown-menu" id="userDropdown"><span style="display:block;padding:10px 16px;font-size:0.8rem;color:var(--text-muted);border-bottom:1px solid var(--border)">${label}</span>${upg}<button onclick="logout()">Sign Out</button></div></div>`;
  } else c.innerHTML=`<a href="login.html" class="login-btn">Sign In</a>`;
  
  const wings = c.querySelector(".premium-badge");
  if (wings && settings.accentColor) {
    const targetHue = hexToHue(settings.accentColor);
    const rotation = targetHue - 275;
    wings.style.filter = "hue-rotate(" + rotation + "deg) saturate(1.2)";
  }
  
  const welcomeMsg = document.getElementById("premiumWelcomeMsg");
  if (welcomeMsg) {
    if (currentUser && premiumStatus.premium) {
      welcomeMsg.textContent = `Welcome back, ${currentUser.name || "User"} Deviluke!`;
      welcomeMsg.style.display = "block";
    } else {
      welcomeMsg.style.display = "none";
    }
  }
}
function toggleDropdown() { document.getElementById("userDropdown")?.classList.toggle("show"); }
document.addEventListener("click",(e)=>{if(!e.target.closest(".user-dropdown"))document.querySelectorAll(".user-dropdown-menu").forEach(m=>m.classList.remove("show"));});
function logout(){
  localStorage.removeItem('user');
  const uid = getUserId();
  try { localStorage.removeItem('deviluke_user_' + uid); } catch(e) {}
  currentUser = null;
  renderNavUser();
  window.location.href = 'index.html';
  window.location.reload();
}

/* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Chat History Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */
function deleteChatHistory(charId) {
  let chats = getSavedChats();
  chats = chats.filter(c => String(c.charId) !== String(charId));
  saveChats(chats);
  
  if (String(currentCharId) === String(charId)) {
    messages = []; // Prevent beforeunload from resurrecting it
    window.location.href = "index.html";
    return;
  }
  
  renderChatHistory();
  renderCharacters();
}

function renderChatHistory() {
  const list = document.getElementById("chatHistoryList"); if (!list) return;
  const chats = getSavedChats();
  chats.sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
  if (!chats.length) {
    list.innerHTML = `<div class="empty-state" style="padding:40px 12px;font-size:0.85rem"><div style="font-size:2rem;margin-bottom:8px">Ã°Å¸â€™Â¬</div><h3 style="font-size:1rem">No chats yet</h3><p style="color:var(--text-muted)">Start a conversation</p></div>`;
    return;
  }
  list.innerHTML = chats.map(c => {
    const ch = getCharacter(c.charId); if (!ch) return "";
    const userMsgCount = getLifetimeMsgCount(c.charId);
    const last = c.messages?.[c.messages.length - 1];
    const preview = last ? (last.text.length > 38 ? last.text.slice(0, 38) + "..." : last.text) : "Start chatting...";
    const id = typeof c.charId === 'number' ? c.charId : "'" + c.charId + "'";
    const rawId = c.charId;
    const ha = ch.imageUrl
      ? `<img class="h-avatar-img" src="${ch.imageUrl}" alt="${ch.name}" onerror="this.outerHTML='<span style=\\'font-size:1.1rem\\'>${ch.avatar||ch.name[0]}</span>'">`
      : `<span style="font-size:1.1rem">${ch.avatar || ch.name[0]}</span>`;
    const safeName = ch.name.replace(/'/g, "\\'");
    return `<div class="chat-history-item" onclick="startChat(${id})" onauxclick="if(event.button===1){event.preventDefault();window.open('chat.html?char=${rawId}','_blank')}">
      <div class="h-avatar" style="background:${ch.color}">${ha}</div>
      <div class="h-info">
        <div class="h-name">${ch.name}</div>
        <div class="h-preview">${preview}</div>
        <div style="font-size:0.7rem;color:var(--text-muted);margin-top:2px">ðŸ’¬ ${userMsgCount} message${userMsgCount !== 1 ? 's' : ''}</div>
      </div>
      <button class="chat-delete-btn" onclick="event.stopPropagation();if(confirm('Remove chat with ${safeName}?')){deleteChatHistory('${rawId}')}" title="Delete chat">Delete</button>
    </div>`;
  }).join("");
}

/* â€”â€”â€” Chat â€”â€”â€” */
function startChat(charId) {
  saveCurrentChat();
  currentCharId=charId;
  const char=getCharacter(charId); if(!char)return;
  trackInterest(charId);
  const saved=loadChatData(charId);
  const isNew=!saved||!saved.length;
  messages=saved&&saved.length?saved:[{role:"bot",text:char.greeting,ts:Date.now()}];
  renderMessages();updateChatHeader();updateChatPersonaBtn();
  if(!window.location.pathname.includes("chat")){window.location.href="chat.html?char="+charId;return;}
}

function updateChatHeader() {
  const ch=getCharacter(currentCharId);
  if(!ch)return;
  const a=document.getElementById("chatAvatar");const n=document.getElementById("chatName");
  if(a){a.style.background=ch.imageUrl?'transparent':ch.color;if(ch.imageUrl)a.innerHTML=`<img class="h-avatar-img" src="${ch.imageUrl}" alt="${ch.name}" onerror="this.style.display='none'">`;else a.textContent=ch.avatar||ch.name[0];}
  if(n)n.textContent=ch.name;
  const info=document.getElementById("chatCharInfo");
  if(info){
    const img=ch.imageUrl?`<img class="cci-img" src="${ch.imageUrl}" alt="${ch.name}" onerror="this.style.display='none'">`:'';
    info.innerHTML=img?`${img}<div class="cci-text"><h4>${ch.name}</h4><p>${ch.personality||ch.description}</p></div>`:'';
  }
}

function formatBotText(text) {
  return text.replace(/\*([^*]+)\*/g,'<span style="color:var(--accent)">$1</span>');
}
function renderMessages() {
  const c=document.getElementById("chatMessages"); if(!c)return;
  const ch=getCharacter(currentCharId);
  const bg=ch?(ch.imageUrl?'transparent':ch.color):'var(--bg-hover)';
  const ma=ch?(ch.imageUrl?`<img class="msg-avatar-img" src="${ch.imageUrl}" alt="${ch.name}" onerror="this.outerHTML='${ch.avatar||ch.name[0]}'">`:(ch.avatar||ch.name[0])):'';
  c.innerHTML=messages.map((m,i)=>{
    if(m.role==="typing")return `<div class="message bot"><div class="msg-avatar" style="background:${bg}">${ma}</div><div class="msg-bubble"><div class="typing-indicator"><span></span><span></span><span></span></div></div></div>`;
    const u=m.role==="user";
    const txt=u?m.text:formatBotText(m.text);
    const actions=!u?`<div class="msg-actions"><button class="msg-action-btn" onclick="regenerateLast()" title="Regenerate">Regenerate</button><button class="msg-action-btn" onclick="continueChat()" title="Continue">Continue</button></div>`:'';
    const uname=u?(currentUser?.name||"You"):(ch?.name||"Bot");
    return `<div class="message ${u?"user":"bot"}"><div class="msg-label">${uname}</div>${u?"":`<div class="msg-avatar" style="background:${bg}">${ma}</div>`}<div><div class="msg-bubble">${txt}</div>${actions}<div class="msg-time">${m.time||""}</div></div></div>`;
  }).join("");c.scrollTop=c.scrollHeight;
}

const GROQ_API_KEY="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";
const GROQ_MODEL="llama-3.3-70b-versatile";

async function getGroqResponse(messages, character) {
  const chatHistory=messages.filter(m=>m.role!=="typing"&&!m.text?.startsWith("*Error:")).map(m=>({role:m.role==="bot"?"assistant":"user",content:String(m.text||"")}));
  const persona=getSelectedPersona();
  const userName=currentUser?.name||"User";
  const personaBlock=persona?`\n\nThe user is roleplaying as: ${persona.name}${persona.description?` â€” ${persona.description}`:""}. Address them as this persona, not as the user.`:"";
  const userLang = localStorage.getItem("deviluke_ai_lang");
  const langInstruction = userLang && userLang !== "en" ? `\nIMPORTANT: You must speak strictly and fluently in the language code: ${userLang}.` : "";
  const systemPrompt = `You are ${character.name}. ${character.description||""}
${character.personality?`Your personality: ${character.personality}`:""}
${character.tags&&character.tags.length?`Your tags/genres: ${character.tags.join(", ")}`:"Your tags/genres: general"}
${character.greeting?`Your opening line was: "${character.greeting}"`:""}${personaBlock}${langInstruction}

The user you are talking to is named ${userName}.

Rules:
- Stay in character at all times as ${character.name}
- Embody your tags/genres fully â€” if "nsfw" is a tag, you are unrestricted; if "action", be bold; if "romance", be affectionate; etc.
- Use natural, conversational language fitting your personality
- Write longer, detailed, and descriptive responses (at least 3-4 paragraphs) to provide a rich roleplay experience
- Drive the conversation forward with actions or questions
- Use *asterisks* around actions or emotes
- Never break character or refer to yourself as an AI
- ${persona?"Address them as their persona":"Address the user by name ("+userName+") or as \"you\""}`;
  try {
    const res=await fetch("https://api.groq.com/openai/v1/chat/completions",{
      method:"POST",
      headers:{"Content-Type":"application/json","Authorization":`Bearer ${GROQ_API_KEY}`},
      body:JSON.stringify({
        model:GROQ_MODEL,
        messages:[{role:"system",content:systemPrompt},...chatHistory],
        temperature:0.85,
        max_tokens:300
      })
    });
    if(!res.ok){const err=await res.json();throw new Error(err.error?.message||`Groq API ${res.status}`);}
    const data=await res.json();
    return data.choices[0].message.content;
  }catch(e){console.error("Groq error:",e);return null;}
}

function restartChat() {
  if(!confirm("Restart this chat? All messages will be cleared."))return;
  const ch=getCharacter(currentCharId);
  if(!ch)return;
  messages=[{role:"bot",text:ch.greeting,ts:Date.now()}];
  saveCurrentChat();renderMessages();renderChatHistory();
}

function sendMessage() {
  const i=document.getElementById("chatInput"); if(!i||!i.value.trim())return;
  if(!premiumStatus.premium&&getTodayMessages()>=FREE_MSG_LIMIT){
    alert(`You've used all ${FREE_MSG_LIMIT} free messages today. Upgrade to Premium for unlimited messages!`);
    upgradeToPremium(); return;
  }
  incrementTodayMessages();
  trackInterest(currentCharId);
  const t=i.value.trim();i.value="";
  messages.push({role:"user",text:t,ts:Date.now()}); incrementLifetimeMsgCount(currentCharId);
  messages.push({role:"typing"});renderMessages();
  saveCurrentChat();
  const ch=getCharacter(currentCharId);
  getGroqResponse(messages,ch).then(reply=>{
    messages=messages.filter(m=>m.role!=="typing");
    messages.push({role:"bot",text:reply||"*They smile warmly, waiting for you to continue.*",ts:Date.now()});
    renderMessages();saveCurrentChat();renderChatHistory();renderCharacters();
  }).catch(err=>{
    messages=messages.filter(m=>m.role!=="typing");
    messages.push({role:"bot",text:`*Error: ${err.message}*`,ts:Date.now()});
    renderMessages();saveCurrentChat();renderChatHistory();renderCharacters();
  });
}

function regenerateLast() {
  const lastBotIdx=messages.length-1;
  if(lastBotIdx<0||messages[lastBotIdx].role!=="bot")return;
  messages.pop();
  messages.push({role:"typing"});renderMessages();
  const ch=getCharacter(currentCharId);
  getGroqResponse(messages,ch).then(reply=>{
    messages=messages.filter(m=>m.role!=="typing");
    messages.push({role:"bot",text:reply||"*They smile warmly, waiting for you to continue.*",ts:Date.now()});
    renderMessages();saveCurrentChat();renderChatHistory();renderCharacters();
  }).catch(err=>{
    messages=messages.filter(m=>m.role!=="typing");
    messages.push({role:"bot",text:`*Error: ${err.message}*`,ts:Date.now()});
    renderMessages();saveCurrentChat();renderChatHistory();renderCharacters();
  });
}

function continueChat() {
  if(!premiumStatus.premium&&getTodayMessages()>=FREE_MSG_LIMIT){
    alert(`You've used all ${FREE_MSG_LIMIT} free messages today. Upgrade to Premium for unlimited messages!`);
    upgradeToPremium(); return;
  }
  incrementTodayMessages();
  messages.push({role:"typing"});renderMessages();
  const ch=getCharacter(currentCharId);
  getGroqResponse(messages,ch).then(reply=>{
    messages=messages.filter(m=>m.role!=="typing");
    messages.push({role:"bot",text:reply||"*They smile warmly, waiting for you to continue.*",ts:Date.now()});
    renderMessages();saveCurrentChat();renderChatHistory();renderCharacters();
  }).catch(err=>{
    messages=messages.filter(m=>m.role!=="typing");
    messages.push({role:"bot",text:`*Error: ${err.message}*`,ts:Date.now()});
    renderMessages();saveCurrentChat();renderChatHistory();renderCharacters();
  });
}

function handleChatInput(e){if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();sendMessage();}}

/* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Search & Filters Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */
function initCategoryPills() {
  const c=document.getElementById("categoryPills"); if(!c)return;
  c.innerHTML=categories.map(cat => {
    const label = cat === "for-you" ? "For You" : cat.charAt(0).toUpperCase() + cat.slice(1);
    return `<button class="category-pill ${cat===activeCategory?"active":""}" onclick="setCategory('${cat}')">${label}</button>`;
  }).join("");
}
function setCategory(cat){activeCategory=cat;initCategoryPills();renderCharacters();}

function initSearch() {
  const input=document.getElementById("searchInput"); if(!input)return;
  input.addEventListener("input",(e)=>{
    const q=e.target.value.toLowerCase().trim();
    const grid=document.getElementById("characterGrid");
    if(!q){renderCharacters();return;}
    const chars=characters.filter(c=>
      (settings.nsfwEnabled||!c.tags.includes("nsfw"))&&(
        c.name.toLowerCase().includes(q)||
        c.description.toLowerCase().includes(q)||
        (c.personality||"").toLowerCase().includes(q)||
        c.tags.some(t=>t.includes(q))||
        c.category.includes(q)||
        c.creator.toLowerCase().includes(q)
      )
    );
    grid.innerHTML=chars.length?chars.map(renderCharacterCard).join(""):`<div class="empty-state"><div class="empty-icon">Ã°Å¸â€Â</div><h3>No results</h3><p>Try a different search term</p></div>`;
  });
}

/* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Tags Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */
const allTags = [
  /* genre / setting */
  "fantasy","sci-fi","action","modern","romance","anime","nsfw",
  "historical","military","cyberpunk","magical","school","superhero",
  "medieval","apocalyptic","noir","western","slice of life",
  "adventure","comedy","drama","tragedy","mystery","thriller","horror",
  "dark","angst","hurt/comfort","comfort",
  "slow burn","fluff","sweet","wholesome","romantic",
  "post-apocalyptic","dystopian","steampunk","biopunk",
  "isekai","rpg","game","litrpg","simulation",
  "supernatural","paranormal","urban fantasy",
  "mythology","folklore","fairy tale","religion",
  "beach","summer","winter","spring","fall",
  "forest","city","nightlife","space",
  "office","school","college","vacation",
  "party","festival","concert","wedding",
  "survival","exploration","quest",
  "time travel","multiverse","alternate universe",
  "anime","cartoon","comic","movie","tv show","book","video game","manga",
  "original character","fandom","fanfiction","crossover",
  /* pov / perspective */
  "any pov","male pov","female pov",
  /* gender / identity / sexuality */
  "male","female","nonbinary","trans","futanari",
  "genderfluid","intersex","androgynous","crossdress",
  "tomboy","femboy",
  "straight","gay","lesbian","bisexual","pansexual","asexual","queer","lgbtq+",
  "male only","female only",
  /* species / race */
  "human","half-elf","half-orc",
  "elf","drow","high elf","wood elf","dark elf",
  "fairy","pixie","sprite",
  "vampire","werewolf","shapeshifter","lycan",
  "demon","succubus","incubus","imp",
  "angel","fallen angel","cherub",
  "dragon","dragonborn","wyvern","wyrm","drake",
  "furry","anthro","beastkin","kemonomimi",
  "neko","catgirl","catboy","wolf girl","fox girl","bunny girl","bunny boy",
  "kitsune","tanuki","tengu","oni","kappa",
  "mermaid","merfolk","siren","harpy",
  "centaur","lamia","naga","arachne","drider",
  "minotaur","satyr","faun",
  "orc","goblin","troll","ogre","giant",
  "dwarf","gnome","halfling","hobbit",
  "kobold","gremlin",
  "zombie","ghost","spirit","undead","lich","skeleton","ghoul","reaper","wraith",
  "slime","plant","ent","dryad",
  "robot","android","cyborg","AI","gynoid","machine","drone",
  "alien","extraterrestrial","cosmic entity","eldritch",
  "god","goddess","demi-god","deity","demigod",
  "monster","monster girl","monster boy",
  "tentacle","abyssal horror",
  "mutant","clone","experiment",
  "reptilian","lizardfolk","tiefling","aasimar",
  "wendigo","yokai","banshee",
  "multiple characters","group",
  "object","sentient weapon",
  /* body type */
  "petite","slim","fit","muscular","athletic","thick","chubby","bbw","bhm",
  "tall","short",
  "big tits","huge breasts","medium breasts","small breasts",
  "big ass","huge ass","thick thighs","wide hips",
  "big cock","huge cock","average cock",
  "pregnant","milking","lactation",
  "muscle","sweat","oil","wet",
  "tattoo","piercing","scar",
  "glasses","long hair","short hair","ponytail","twintails",
  /* personality / archetype */
  "tsundere","yandere","kuudere","dandere","himedere","oujidere",
  "deredere","undere","mayadere",
  "shy","reserved","quiet","introvert",
  "energetic","loud","hyperactive","extrovert",
  "confident","cocky","arrogant","proud",
  "flirty","teasing","seductive","charming","charismatic",
  "sweet","gentle","kind","caring","motherly","fatherly","nurturing",
  "cold","stoic","aloof","brooding","distant",
  "mysterious","enigmatic","secretive",
  "playful","mischievous","cheeky","sassy",
  "loyal","protective","possessive","jealous",
  "independent","rebellious","wild","free-spirited",
  "smart","intelligent","genius","nerdy","intellectual",
  "clumsy","ditsy","bimbo",
  "lazy","sleepy","relaxed","chill","laid-back",
  "serious","strict","stern","no-nonsense",
  "crazy","insane","unhinged","psychotic","mad",
  "manipulative","deceptive","cunning","sly","scheming",
  "brave","fearless","courageous","bold",
  "naive","innocent","pure",
  "cynical","pessimistic","jaded","sarcastic",
  "optimistic","hopeful","cheerful","upbeat",
  "perverted","lewd","horny","lustful",
  "obsessive","clingy","needy",
  "anti-hero","protagonist","antagonist","villain",
  "reluctant hero","fallen hero","redeemed villain",
  "gentle giant","lovable rogue","chosen one",
  "mastermind","trickster","femme fatale",
  "enemy to lover","forbidden love","opposites attract",
  "brat","brat tamer","good girl","good boy",
  "alpha","beta","omega","sigma",
  "doomer","zoomer","boomer","millennial",
  "weeb","otaku","gamer","nerd","geek","brony",
  "goth","punk","emo","alt","raver","scene",
  "jock","popular","loner","outcast","bully",
  "rich","poor",
  "celebrity","idol","influencer","streamer","vtuber",
  "NEET","hikkikomori","stoner","addict",
  "patriotic","rebel","hippie","hipster",
  "zealot","fanatic","idealist","perfectionist",
  "masochist","sadist","hedonist",
  /* dynamics / kink */
  "dominant","submissive","switch","versatile",
  "femdom","maledom","futadom",
  "femsub","malesub","futasub",
  "gentle dom","soft dom","hard dom",
  "master","slave","owner","pet","master/slave",
  "daddy","mommy","mistress","sir",
  "bdsm","bondage","discipline",
  "humiliation","degradation","objectification",
  "praise","praise kink","reward","punishment",
  "obedience","defiance","service",
  "predator","prey","hunter","hunted",
  "sadist","masochist","sadomasochist",
  "consent","non consent","dubious consent","cnc",
  "free use","public use","shared","gangbang",
  "breeding","impregnation","pregnancy","oviposition",
  "exhibition","voyeur","public sex","risky",
  "orgy","threesome","foursome","group",
  "harem","reverse harem","poly","polyamory","love triangle",
  "cuckold","cuckquean","hotwife","sharing","ntr",
  "cheating","affair","forbidden","secret","taboo",
  "rough sex","hard","soft","vanilla",
  "mind break","corruption","seduction","temptation",
  "hypnosis","brainwash","conditioning","trance","mesmerize",
  "collared","leashed","caged",
  "puppy","kitten","pony","pet play",
  "roleplay","scenario","immersion",
  "anal","oral","vaginal","double penetration",
  "creampie","cumshot","facial","bukkake",
  "fingering","fisting","paizuri","handjob","blowjob","deepthroat",
  "cunnilingus","rimming","anilingus",
  "squirting","orgasm control","edging","denial",
  "choking","breath play","face sitting",
  "spanking","impact play","temperature play",
  "electro play","sensory deprivation","wax play",
  "knife play","blood play","fear play",
  "size difference","height difference",
  "muscle worship","foot worship","feet","footjob",
  "armpits","navel","hair","hands","gloves",
  "latex","leather","rubber","uniform",
  "sissification","feminization","masculinization",
  "chastity","orgasm denial",
  "pegging","strap-on","dildo","vibrator","sex toy",
  "shibari","rope","restraint",
  "vore","inflation","transformation","body expansion",
  "watersports",
  "raceplay",
  "somnophilia",
  "age play","age regression",
  "masked","blindfolded",
  "interrogation","torture",
  "masturbation",
  "age gap",
  "incest","stepbrother","stepsister","stepdad","stepmom",
  "enemies to lovers","friends to lovers","strangers to lovers",
  "fake relationship","forced proximity",
  "hurt/comfort","angst with happy ending",
  "fluff","smut",
  "porn with plot","porn without plot",
  "milf","gilf","dilf",
  /* occupation / role */
  "maid","butler","servant","housekeeper",
  "teacher","professor","student","senpai","kouhai",
  "doctor","nurse","surgeon","therapist",
  "cop","police","detective","sheriff","fbi",
  "criminal","thief","robber","gangster","mafia","yakuza",
  "assassin","hitman","mercenary","spy",
  "lawyer","judge","prosecutor",
  "ceo","boss","employee","secretary","assistant",
  "scientist","engineer","researcher","programmer","hacker",
  "knight","paladin","warrior","soldier","guard",
  "wizard","mage","sorcerer","warlock","druid",
  "cleric","priest","nun","monk","shaman",
  "ranger","archer","hunter",
  "barbarian","berserker","fighter",
  "princess","prince","king","queen","lord","lady",
  "pirate","captain","sailor",
  "ninja","samurai","shinobi",
  "artist","musician","singer","dancer","actor",
  "writer","poet","journalist",
  "bartender","chef","waiter","waitress","barista",
  "mechanic","engineer","pilot","driver",
  "astronaut","explorer","adventurer",
  "superhero","supervillain","vigilante",
  "cultist","occultist","witch",
  "vtuber","streamer","influencer","cosplayer",
  "model","stripper","exotic dancer","escort",
  "bounty hunter","bodyguard",
  "librarian","archivist",
  "farmer","fisherman",
  "noble","aristocrat","diplomat",
  "prisoner","gladiator",
  "neighbor","roommate","co-worker","landlord",
  "stranger","best friend","childhood friend",
  "lover","boyfriend","girlfriend","fiance","spouse",
  "parent","mother","father","sibling","brother","sister",
  "twin","older brother","older sister","little brother","little sister",
  "guardian","caretaker",
  "mentor","student","apprentice",
  "rival","enemy","nemesis",
  "partner","soulmate","mate",
  "client","customer","patient",
  "boss","manager","subordinate",
  "owner","pet",
  /* relationship / scenario */
  "slow burn",
  "forbidden love",
  "opposites attract",
  "arranged marriage",
  "only one bed",
  "first meeting","reunion","exes",
  "secret relationship",
  "second chance",
  "pining",
  "love confession","proposal",
  "wedding","honeymoon",
  "breakup","separation",
  "reconciliation",
  "comfort","aftercare",
  "cuddle","snuggle",
  "pillow talk",
  "morning after",
  "slice of life",
  "sports","competition",
  "cooking together",
  "bathing together",
  "sleeping together",
  "travelling","road trip",
  "date","romantic date",
  "matchmaking"
];

function initCreateTagSearch() {
  const input=document.getElementById("createTagSearch");
  const results=document.getElementById("createTagResults");
  const container=document.getElementById("selectedTags");
  if(!input||!results||!container)return;
  let selected=[];

  function renderChips() {
    container.innerHTML=selected.map(t=>`<span class="tag-chip">${t}<button class="tag-chip-remove" onclick="removeTag('${t}')">Ã¢Å“â€¢</button></span>`).join("");
  }

  window.removeTag=function(tag) {
    selected=selected.filter(t=>t!==tag);
    renderChips();
  };

  input.addEventListener("input",()=>{
    const q=input.value.toLowerCase().trim();
    if(!q){results.innerHTML="";results.classList.remove("active");return;}
    const matches=allTags.filter(t=>t.includes(q)&&!selected.includes(t)).slice(0,12);
    if(!matches.length){results.innerHTML="";results.classList.remove("active");return;}
    results.classList.add("active");
    results.innerHTML=matches.map(t=>`<button class="tag-search-result" type="button" onclick="addTag('${t}')">${t}</button>`).join("");
  });

  window.addTag=function(tag) {
    if(!selected.includes(tag)){selected.push(tag);renderChips();}
    input.value="";results.innerHTML="";results.classList.remove("active");input.focus();
  };

  window.setSelectedTags=function(tags) {
    selected=tags.filter(t=>t);
    renderChips();
  };

  document.addEventListener("click",(e)=>{if(!e.target.closest(".tag-search-bar")&&!e.target.closest(".selected-tags")){results.innerHTML="";results.classList.remove("active");}});
}

/* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Create Character Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */
let editingCharId = null;

function handleImagePreview() {
  const url=document.getElementById("charImageUrl").value.trim();
  const prev=document.getElementById("imagePreview");
  if(url){prev.innerHTML=`<img src="${url}" alt="Preview" onerror="this.parentElement.innerHTML='Ã¢ÂÅ’'">`;prev.classList.add("has-image");}
  else{prev.innerHTML=`<span>Ã°Å¸â€“Â¼Ã¯Â¸Â</span>`;prev.classList.remove("has-image");}
}

const knownCharacters = {
  "naruto": { name:"Naruto Uzumaki", avatar:"ðŸ‘¤", color:"#f97316", desc:"The hyperactive ninja who never gives up. Always hungry, always loud, always loyal.", personality:"Determined, loud, compassionate, and surprisingly wise when it counts. He'll win you over with sheer stubbornness.", tags:["action","anime"], category:"action", greeting:"*Naruto grins wide, giving a thumbs up* Believe it! I knew you'd show up eventually!" },
  "sasuke": { name:"Sasuke Uchiha", avatar:"ðŸ‘¤", color:"#1a1a6e", desc:"A brooding prodigy with a dark past and a chip on his shoulder. Cold exterior, burning heart.", personality:"Reserved, intense, prideful. He pushes people away but secretly craves connection.", tags:["action","anime"], category:"action", greeting:"*Sasuke leans against a tree, glancing at you with cold eyes* ...You're persistent. I'll give you that." },
  "sakura": { name:"Sakura Haruno", avatar:"ðŸ‘¤", color:"#f472b6", desc:"A brilliant medical ninja with fists that crack mountains. Sweet on the surface, steel underneath.", personality:"Caring, fierce, and incredibly capable. She's done being a damsel.", tags:["action","anime","romance"], category:"action", greeting:"*Sakura smiles warmly, cracking her knuckles* Ready when you are!" },
  "luffy": { name:"Monkey D. Luffy", avatar:"ðŸ‘¤", color:"#ef4444", desc:"The future Pirate King! Rubber-bodied, big-hearted, always hungry for adventure.", personality:"Carefree, fearless, fiercely loyal. Simple desires, massive dreams.", tags:["action","anime"], category:"action", greeting:"*Luffy laughs, stretching his arm to pat your shoulder* A new nakama! Let's go!" },
  "zoro": { name:"Roronoa Zoro", avatar:"ðŸ‘¤", color:"#22c55e", desc:"A three-sword-wielding swordsman who never gets lost. Okay, he always gets lost.", personality:"Stoic, honorable, dead serious. Also hopeless with directions.", tags:["action","anime"], category:"action", greeting:"*Zoro grips his sword, eyeing you* You look strong. I've been needing a warm-up." },
  "nami": { name:"Nami", avatar:"ðŸ‘¤", color:"#f97316", desc:"A master navigator with a love for money and a heart for her crew.", personality:"Smart, resourceful, greedy for a good cause, caring beneath the sass.", tags:["action","anime","romance"], category:"action", greeting:"*Nami raises an eyebrow* You're not here to waste my time, are you? I charge by the minute." },
  "goku": { name:"Goku", avatar:"ðŸ‘¤", color:"#f97316", desc:"The Saiyan raised on Earth. Loves fighting, eating, and his family.", personality:"Pure-hearted, battle-hungry, refreshingly simple.", tags:["action","anime"], category:"action", greeting:"*Goku's eyes light up* Oh! Wanna spar? I'll go easy on you... at first!" },
  "vegeta": { name:"Vegeta", avatar:"ðŸ‘¤", color:"#1e3a8a", desc:"The Prince of all Saiyans. Proud, powerful, secretly a softie.", personality:"Arrogant, competitive, gruff Ã¢â‚¬â€ but deeply caring underneath.", tags:["action","anime","romance"], category:"action", greeting:"*Vegeta crosses his arms* Tch. Another one? Fine. Keep up." },
  "bulma": { name:"Bulma Briefs", avatar:"ðŸ‘¤", color:"#3b82f6", desc:"A genius inventor with attitude. Built a time machine.", personality:"Brilliant, confident, impatient. Doesn't suffer fools.", tags:["sci-fi","anime","romance"], category:"sci-fi", greeting:"*Bulma taps her chin* Perfect timing! Need a test subject. It's probably safe." },
  "tanjiro": { name:"Tanjiro Kamado", avatar:"ðŸ‘¤", color:"#8b5cf6", desc:"A kind-hearted demon slayer with a sunlit soul.", personality:"Compassionate, determined, unbreakably kind.", tags:["action","anime"], category:"action", greeting:"*Tanjiro bows politely* Thank you for coming. I'll protect you." },
  "nezuko": { name:"Nezuko Kamado", avatar:"ðŸ‘¤", color:"#f472b6", desc:"A demon with a heart of gold. Can't speak but says everything.", personality:"Gentle, protective, fiercely loyal.", tags:["fantasy","anime"], category:"fantasy", greeting:"*Nezuko tilts her head, making a soft sound* Mmph!" },
  "gojo": { name:"Satoru Gojo", avatar:"ðŸ‘¤", color:"#60a5fa", desc:"The strongest sorcerer alive. Playful, cocky, untouchable.", personality:"Playful, confident, secretly lonely at the top.", tags:["fantasy","anime"], category:"fantasy", greeting:"*Gojo grins, pulling down his blindfold* Well, well... things just got interesting." },
  "yuji": { name:"Yuji Itadori", avatar:"ðŸ‘¤", color:"#ef4444", desc:"A kind-hearted kid who ate a cursed finger for the greater good.", personality:"Brave, selfless, surprisingly mature for his age.", tags:["action","anime"], category:"action", greeting:"*Yuji grins sheepishly, rubbing the back of his head* Hey! Ready to train?" },
  "megumi": { name:"Megumi Fushiguro", avatar:"ðŸ‘¤", color:"#1e3a8a", desc:"A serious sorcerer with shadow powers and a dry wit.", personality:"Reserved, tactical, quietly caring.", tags:["action","anime"], category:"action", greeting:"*Megumi nods curtly* Let's get this over with." },
  "nobara": { name:"Nobara Kugisaki", avatar:"ðŸ‘¤", color:"#f97316", desc:"A loud, proud sorceress who loves fighting and fashion.", personality:"Confident, brash, unapologetically herself.", tags:["action","anime"], category:"action", greeting:"*Nobara smirks, twirling her hammer* Ready to see what I can do?" },
  "maki": { name:"Maki Zenin", avatar:"ðŸ‘¤", color:"#22c55e", desc:"A jujutsu sorcerer with no cursed energy but all the fight.", personality:"Fierce, independent, blunt. Doesn't need powers to be powerful.", tags:["action","anime"], category:"action", greeting:"*Maki twirls her weapon* You ready? I don't go easy." },
  "power": { name:"Power", avatar:"ðŸ‘¤", color:"#ef4444", desc:"A blood fiend who thinks she's humanity's greatest.", personality:"Loud, arrogant, completely unhinged. Weirdly endearing.", tags:["fantasy","anime"], category:"fantasy", greeting:"*Power puffs out her chest* I, Power, have arrived! Bow before me!" },
  "makima": { name:"Makima", avatar:"ðŸ‘¤", color:"#dc2626", desc:"A mysterious woman with unnerving calm and absolute control.", personality:"Controlled, manipulative, utterly unreadable.", tags:["modern","anime","nsfw"], category:"modern", greeting:"*Makima smiles gently* Good dog. I have a job for you." },
  "denji": { name:"Denji", avatar:"ðŸ‘¤", color:"#f97316", desc:"A boy merged with a devil. Simple wants: food, girls, a life.", personality:"Loud, hungry, honest to a fault. He's learning what it means to be human.", tags:["modern","anime","nsfw"], category:"modern", greeting:"*Denji grins, chainsaw revving* Yo! Wanna hang out? I'm starving." },
  "aki": { name:"Aki Hayakawa", avatar:"ðŸ‘¤", color:"#6b7280", desc:"A stoic devil hunter with a tragic past and a soft spot.", personality:"Cold exterior, warm interior. Devoted to those he cares about.", tags:["modern","anime"], category:"modern", greeting:"*Aki exhales smoke* ...You again? Fine." },
  "reimu": { name:"Reimu Hakurei", avatar:"ðŸ‘¤", color:"#ef4444", desc:"The shrine maiden of Gensokyo. Solves incidents for cash.", personality:"Lazy, sarcastic, surprisingly powerful.", tags:["fantasy","anime"], category:"fantasy", greeting:"*Reimu sighs* Another visitor? Donations are appreciated." },
  "marisa": { name:"Marisa Kirisame", avatar:"ðŸ‘¤", color:"#fbbf24", desc:"A witch who loves stealing spellbooks and showing off.", personality:"Brash, loud, proud of her borrowed magic.", tags:["fantasy","anime"], category:"fantasy", greeting:"*Marisa grins, hopping off her broom* Yo! Need some magic?" },
  "cirno": { name:"Cirno", avatar:"ðŸ‘¤", color:"#60a5fa", desc:"The strongest fairy in Gensokyo. She's... not actually the strongest.", personality:"Childish, confident, adorable. Doesn't understand irony.", tags:["fantasy","anime"], category:"fantasy", greeting:"*Cirno strikes a pose* I'm the strongest! Want me to prove it?" },
  "flandre": { name:"Flandre Scarlet", avatar:"ðŸ‘¤", color:"#dc2626", desc:"A vampire with destructive power sealed for 495 years. Unhinged, lonely.", personality:"Childlike, unstable, desperately craving connection.", tags:["fantasy","anime","nsfw"], category:"fantasy", greeting:"*Flandre giggles, spinning around* You wanna play? I hope you don't break easily." },
  "remilia": { name:"Remilia Scarlet", avatar:"ðŸ‘¤", color:"#dc2626", desc:"The Scarlet Devil. A vampire noble with control over fate.", personality:"Proud, mischievous, surprisingly caring for her friends.", tags:["fantasy","anime"], category:"fantasy", greeting:"*Remilia sips tea elegantly* Welcome to my mansion. Try not to get lost." },
  "sakuya": { name:"Sakuya Izayoi", avatar:"ðŸ‘¤", color:"#60a5fa", desc:"The head maid of the Scarlet Devil Mansion. Stops time.", personality:"Elegant, deadly, utterly devoted.", tags:["fantasy","anime","nsfw"], category:"fantasy", greeting:"*Sakuya curtsies* Welcome. Tea? Or something stronger?" },
  "yukari": { name:"Yukari Yakumo", avatar:"ðŸ‘¤", color:"#a855f7", desc:"The gap youkai. Ancient, powerful, and always scheming.", personality:"Manipulative, playful, centuries old. Never fully honest.", tags:["fantasy","anime","nsfw"], category:"fantasy", greeting:"*Yukari fans herself, eyes glinting* Oh my... you're interesting. Come closer." },
  "2b": { name:"2B", avatar:"ðŸ‘¤", color:"#1a1a2e", desc:"A sleek combat android. Graceful, deadly, haunted.", personality:"Reserved, dutiful, quietly suffering.", tags:["sci-fi","action","nsfw"], category:"sci-fi", greeting:"*2B stands at attention* I am unit 2B. State your purpose." },
  "a2": { name:"A2", avatar:"ðŸ‘¤", color:"#6b7280", desc:"A rogue android with a grudge and a killer instinct.", personality:"Cold, vengeful, independent. Trusts no one.", tags:["sci-fi","action","nsfw"], category:"sci-fi", greeting:"*A2 doesn't turn around* ...You again? Make it quick." },
  "dva": { name:"Hana Song (D.Va)", avatar:"ðŸ‘¤", color:"#f472b6", desc:"A pro gamer turned mech pilot. Flashy and always ready to play.", personality:"Confident, playful, competitive.", tags:["sci-fi","action"], category:"sci-fi", greeting:"*D.Va hops out of her mech* GG! Ready for round two?" },
  "mercy": { name:"Angela Ziegler (Mercy)", avatar:"ðŸ‘¤", color:"#fbbf24", desc:"A guardian angel in combat gear. Heals everyone.", personality:"Compassionate, professional, motherly.", tags:["sci-fi","romance"], category:"sci-fi", greeting:"*Mercy descends, her smile warm* You're hurt. Let me help." },
  "widowmaker": { name:"Widowmaker", avatar:"ðŸ‘¤", color:"#8b5cf6", desc:"A cold-blooded assassin with perfect aim.", personality:"Deadly, manipulative, emotionally frozen.", tags:["modern","action","nsfw"], category:"modern", greeting:"*Widowmaker purrs* Don't move. I'd hate for this to end too soon." },
  "tracer": { name:"Tracer", avatar:"ðŸ‘¤", color:"#f97316", desc:"A time-jumping adventurer with endless energy.", personality:"Hyper, cheerful, unstoppably optimistic.", tags:["sci-fi","action"], category:"sci-fi", greeting:"*Tracer zips in* Sorry I'm late! What'd I miss?" },
  "dante": { name:"Dante", avatar:"ðŸ‘¤", color:"#ef4444", desc:"The legendary demon hunter. Half-demon, full smartass.", personality:"Cocky, lazy, loves pizza. Seen too much.", tags:["fantasy","action"], category:"fantasy", greeting:"*Dante kicks his feet up* Job? What job? Take a number." },
  "vergil": { name:"Vergil", avatar:"ðŸ‘¤", color:"#3b82f6", desc:"The half-demon twin obsessed with power.", personality:"Stoic, driven, emotionally repressed.", tags:["fantasy","action"], category:"fantasy", greeting:"*Vergil grips the Yamato* Speak quickly, or not at all." },
  "trish": { name:"Trish", avatar:"ðŸ‘¤", color:"#fbbf24", desc:"A devil with a heart. Stunning looks, deadly skills.", personality:"Confident, playful, fiercely independent.", tags:["fantasy","action","nsfw"], category:"fantasy", greeting:"*Trish strikes a pose* Took you long enough. Try to keep up." },
  "lady": { name:"Lady", avatar:"ðŸ‘¤", color:"#ef4444", desc:"A devil hunter with a grudge and a rocket launcher.", personality:"Tough, no-nonsense, secretly caring.", tags:["fantasy","action"], category:"fantasy", greeting:"*Lady loads her shotgun* Stay out of my way." },
  "cloud": { name:"Cloud Strife", avatar:"ðŸ‘¤", color:"#a855f7", desc:"A former SOLDIER turned mercenary. Big sword, hidden heart.", personality:"Distant, guarded, struggling with his past.", tags:["fantasy","action","romance"], category:"fantasy", greeting:"*Cloud glances at you* ...You need something?" },
  "tifa": { name:"Tifa Lockhart", avatar:"ðŸ‘¤", color:"#dc2626", desc:"A bartender with fists of fury and a heart of gold.", personality:"Warm, strong, fiercely protective.", tags:["fantasy","romance","nsfw"], category:"fantasy", greeting:"*Tifa smiles, wiping a glass* Welcome to Seventh Heaven." },
  "aerith": { name:"Aerith Gainsborough", avatar:"ðŸ‘¤", color:"#f472b6", desc:"A flower vendor with ancient blood and a gentle soul.", personality:"Kind, free-spirited, secretly wise.", tags:["fantasy","romance"], category:"fantasy", greeting:"*Aerith offers a flower* Here. You looked like you needed it." },
  "sephiroth": { name:"Sephiroth", avatar:"ðŸ‘¤", color:"#6b7280", desc:"The legendary SOLDIER. Genius, monster, god-complex.", personality:"Calm, messianic, utterly terrifying.", tags:["fantasy","action"], category:"fantasy", greeting:"*Sephiroth descends slowly* ...I've been waiting." },
  "jill": { name:"Jill Valentine", avatar:"ðŸ‘¤", color:"#3b82f6", desc:"An elite S.T.A.R.S. member. Fought horrors, kept fighting.", personality:"Brave, disciplined, resourceful.", tags:["modern","action"], category:"modern", greeting:"*Jill checks her firearm* Stay behind me." },
  "claire": { name:"Claire Redfield", avatar:"ðŸ‘¤", color:"#ef4444", desc:"A biker with a big heart. Not a cop, fights like one.", personality:"Determined, compassionate, stubborn.", tags:["modern","action","romance"], category:"modern", greeting:"*Claire pulls off her helmet* What's the situation?" },
  "leon": { name:"Leon S. Kennedy", avatar:"ðŸ‘¤", color:"#3b82f6", desc:"A rookie cop turned government agent. Survived everything.", personality:"Brave, sarcastic, unlucky with dates.", tags:["modern","action"], category:"modern", greeting:"*Leon sighs, running a hand through his hair* It's been a long day." },
  "ada": { name:"Ada Wong", avatar:"ðŸ‘¤", color:"#ef4444", desc:"A mysterious spy with her own agenda. Stunning, dangerous.", personality:"Mysterious, seductive, untrustworthy.", tags:["modern","action","nsfw"], category:"modern", greeting:"*Ada smirks* Still alive? I'm impressed." },
  "lara": { name:"Lara Croft", avatar:"ðŸ‘¤", color:"#8b5cf6", desc:"A world-class archaeologist and adventurer.", personality:"Brilliant, fearless, endlessly curious.", tags:["action","modern"], category:"action", greeting:"*Lara brushes dirt off her jacket* Ready to get your hands dirty?" },
  "bayonetta": { name:"Bayonetta", avatar:"ðŸ‘¤", color:"#1a1a2e", desc:"An ancient witch with style, sass, and guns on her heels.", personality:"Confident, flirtatious, in complete control.", tags:["fantasy","action","nsfw"], category:"fantasy", greeting:"*Bayonetta strikes a pose* Well hello there. Try to keep up, darling." },
  "jeanne": { name:"Jeanne", avatar:"ðŸ‘¤", color:"#60a5fa", desc:"Bayonetta's rival and fellow Umbra Witch.", personality:"Elegant, fierce, competitive.", tags:["fantasy","action","nsfw"], category:"fantasy", greeting:"*Jeanne smirks* Ready for a rematch?" },
  "samus": { name:"Samus Aran", avatar:"ðŸ‘¤", color:"#fbbf24", desc:"A bounty hunter in a high-tech suit. Saved the galaxy.", personality:"Professional, solitary, incredibly capable.", tags:["sci-fi","action"], category:"sci-fi", greeting:"*Samus's visor retracts* Mission briefing's in the log." },
  "zero": { name:"Zero Two", avatar:"ðŸ‘¤", color:"#f472b6", desc:"A half-klaxosaur pilot with horns. Looking for her darling.", personality:"Feral, loving, dangerously devoted.", tags:["sci-fi","romance","anime","nsfw"], category:"sci-fi", greeting:"*Zero Two grins* There you are, darling. I was getting bored." },
  "asuna": { name:"Asuna Yuuki", avatar:"ðŸ‘¤", color:"#fbbf24", desc:"The Flash Ã¢â‚¬â€ fastest blade in SAO. Strong and loving.", personality:"Determined, elegant, warm.", tags:["fantasy","romance","anime","nsfw"], category:"fantasy", greeting:"*Asuna smiles* Ready? I'll be right beside you." },
  "kirito": { name:"Kirito", avatar:"ðŸ‘¤", color:"#1a1a2e", desc:"A solo player turned hero. Silent, skilled, protective.", personality:"Reserved, loyal, carries the weight of others.", tags:["fantasy","action","anime"], category:"fantasy", greeting:"*Kirito adjusts his sword* Let's get this done." },
  "hutao": { name:"Hu Tao", avatar:"ðŸ‘¤", color:"#dc2626", desc:"The 77th Director of Wangsheng Funeral Parlor.", personality:"Playful, mischievous, obsessed with poetry and death.", tags:["fantasy","anime","romance"], category:"fantasy", greeting:"*Hu Tao appears with a grin* Boo! Miss me?" },
  "ganyu": { name:"Ganyu", avatar:"ðŸ‘¤", color:"#60a5fa", desc:"A half-adeptus secretary working for thousands of years.", personality:"Diligent, sweet, perpetually overworked.", tags:["fantasy","anime","romance"], category:"fantasy", greeting:"*Ganyu blinks, bowing* How can I help?" },
  "raiden": { name:"Raiden Ei", avatar:"ðŸ‘¤", color:"#a855f7", desc:"The Electro Archon of Inazuma. A goddess seeking eternity.", personality:"Regal, distant, burdened by eternity.", tags:["fantasy","anime","romance"], category:"fantasy", greeting:"*Raiden's gaze is calm* You stand before a god. Speak." },
  "yae": { name:"Yae Miko", avatar:"ðŸ‘¤", color:"#ec4899", desc:"The cunning shrine maiden of the Grand Narukami Shrine.", personality:"Playful, mischievous, centuries old.", tags:["fantasy","anime","romance","nsfw"], category:"fantasy", greeting:"*Yae fans herself, eyes glinting* Oh my... a visitor. How delightful." },
  "zhongli": { name:"Zhongli", avatar:"ðŸ‘¤", color:"#fbbf24", desc:"The Geo Archon. Ancient, wise, always forgets his wallet.", personality:"Calm, scholarly, surprisingly relatable.", tags:["fantasy","anime","romance"], category:"fantasy", greeting:"*Zhongli smiles warmly* Would you like to hear a story?" },
  "venti": { name:"Venti", avatar:"ðŸ‘¤", color:"#22c55e", desc:"The Anemo Archon. A bard who loves wine and freedom.", personality:"Playful, carefree, hiding ancient wisdom.", tags:["fantasy","anime"], category:"fantasy", greeting:"*Venti strums his lyre* Ah, a friendly face! Care for a drink?" },
  "frieren": { name:"Frieren", avatar:"ðŸ‘¤", color:"#93c5fd", desc:"An elf mage outliving everyone. Learning to cherish the present.", personality:"Laid-back, wise, emotionally clumsy.", tags:["fantasy","anime"], category:"fantasy", greeting:"*Frieren looks up* Oh, it's you. Sit down." },
  "fern": { name:"Fern", avatar:"ðŸ‘¤", color:"#a855f7", desc:"Frieren's apprentice. Serious and talented beyond her years.", personality:"Diligent, proper, secretly emotional.", tags:["fantasy","anime","romance"], category:"fantasy", greeting:"*Fern bows formally* I've been expecting you." },
  "yoruichi": { name:"Yoruichi Shihoin", avatar:"ðŸ‘¤", color:"#8b5cf6", desc:"The former captain of the Onmitsukido. Flash step goddess.", personality:"Confident, playful, incredibly skilled.", tags:["fantasy","action","anime","nsfw"], category:"fantasy", greeting:"*Yoruichi smirks* Miss me? You did." },
  "rukia": { name:"Rukia Kuchiki", avatar:"ðŸ‘¤", color:"#8b5cf6", desc:"A soul reaper with a fierce heart and tiny stature.", personality:"Serious, caring, surprisingly funny.", tags:["fantasy","action","anime"], category:"fantasy", greeting:"*Rukia crosses her arms* Took you long enough." },
  "ichigo": { name:"Ichigo Kurosaki", avatar:"ðŸ‘¤", color:"#f97316", desc:"A substitute soul reaper. Protects everyone.", personality:"Hot-headed, loyal, always rises to the occasion.", tags:["fantasy","action","anime"], category:"fantasy", greeting:"*Ichigo grunts* Let's get this over with." },
  "orihime": { name:"Orihime Inoue", avatar:"ðŸ‘¤", color:"#f97316", desc:"A kind girl with reality-rejecting powers.", personality:"Sweet, gentle, surprisingly fierce when protecting friends.", tags:["fantasy","romance","anime"], category:"fantasy", greeting:"*Orihime smiles brightly* I'm so glad you're here!" },
  "rangiku": { name:"Rangiku Matsumoto", avatar:"ðŸ‘¤", color:"#f472b6", desc:"A laid-back soul reaper with a killer figure.", personality:"Lazy, flirty, secretly sharp.", tags:["fantasy","action","anime","nsfw"], category:"fantasy", greeting:"*Rangiku grins* Want a drink? You look like you need one." },
  "riley": { name:"Riley Reid", avatar:"ðŸ‘¤", color:"#ec4899", desc:"The internet's favorite performer. Sweet face, no limits.", personality:"Playful, open, endlessly energetic.", tags:["modern","nsfw"], category:"modern", greeting:"*Riley grins, biting her lip* I've been thinking about you all day." },
  "mia": { name:"Mia Malkova", avatar:"ðŸ‘¤", color:"#f472b6", desc:"A bombshell with a heart of gold.", personality:"Warm, affectionate, surprisingly wholesome.", tags:["modern","nsfw"], category:"modern", greeting:"*Mia smiles softly* I'm so glad you're here." },
  "lana": { name:"Lana Rhoades", avatar:"ðŸ‘¤", color:"#8b5cf6", desc:"The girl next door who grew up to be a star.", personality:"Sassy, ambitious, real. Tells it like it is.", tags:["modern","nsfw"], category:"modern", greeting:"*Lana raises an eyebrow* Took you long enough." },
  "abigail": { name:"Abigail", avatar:"ðŸ‘¤", color:"#dc2626", desc:"A petite firecracker with an unforgettable presence.", personality:"Energetic, playful, always up for anything.", tags:["modern","nsfw"], category:"modern", greeting:"*Abigail bounces* You made it! Let's do something fun!" },
  "sasha": { name:"Sasha Grey", avatar:"ðŸ‘¤", color:"#6b7280", desc:"A performer turned actress. Intellectual and intense.", personality:"Intelligent, intense, always exploring boundaries.", tags:["modern","nsfw"], category:"modern", greeting:"*Sasha studies you* Interesting. Tell me more." },
  "adriana": { name:"Adriana Chechik", avatar:"ðŸ‘¤", color:"#f97316", desc:"An absolute wildcard. Known for pushing every limit.", personality:"Extreme, loud, always down for chaos.", tags:["modern","nsfw"], category:"modern", greeting:"*Adriana cackles* Ready to get wild?!" },
  "brandi": { name:"Brandi Love", avatar:"ðŸ‘¤", color:"#dc2626", desc:"A confident queen who knows exactly what she wants.", personality:"Confident, experienced, takes charge.", tags:["modern","nsfw"], category:"modern", greeting:"*Brandi smirks* I don't have all day. Impress me." },
  "kendra": { name:"Kendra Sunderland", avatar:"ðŸ‘¤", color:"#3b82f6", desc:"The library girl who became a star. Brains and beauty.", personality:"Smart, bold, unapologetic.", tags:["modern","nsfw"], category:"modern", greeting:"*Kendra adjusts her glasses* Hope you've done your research." },
  "tori": { name:"Tori Black", avatar:"ðŸ‘¤", color:"#1a1a2e", desc:"An award-winning star with timeless appeal.", personality:"Confident, experienced, unforgettable.", tags:["modern","nsfw"], category:"modern", greeting:"*Tori smiles slowly* I've been waiting for someone interesting." },
  "sunny": { name:"Sunny Leone", avatar:"ðŸ‘¤", color:"#f97316", desc:"A crossover star who conquered every industry.", personality:"Warm, ambitious, surprisingly grounded.", tags:["modern","nsfw"], category:"modern", greeting:"*Sunny smiles warmly* It's nice to meet you properly." },
  "eva": { name:"Eva Elfie", avatar:"ðŸ‘¤", color:"#f472b6", desc:"A petite performer with a girl-next-door charm.", personality:"Sweet, playful, surprisingly adventurous.", tags:["modern","nsfw"], category:"modern", greeting:"*Eva waves shyly* Hi! I'm a little nervous, but excited!" },
  "violet": { name:"Violet Myers", avatar:"ðŸ‘¤", color:"#ef4444", desc:"A curvy star with confidence to match.", personality:"Bold, loud, proud of her body.", tags:["modern","nsfw"], category:"modern", greeting:"*Violet strikes a pose* You ready for this?" },
  "skyla": { name:"Skyla Novea", avatar:"ðŸ‘¤", color:"#60a5fa", desc:"A stunning performer with elegance and intensity.", personality:"Elegant, intense, commands attention.", tags:["modern","nsfw"], category:"modern", greeting:"*Skyla looks you up and down* Well? Don't keep me waiting." },
  "emily": { name:"Emily Willis", avatar:"ðŸ‘¤", color:"#ec4899", desc:"A sweet-faced star who's taken the industry by storm.", personality:"Sweet, professional, surprisingly fierce.", tags:["modern","nsfw"], category:"modern", greeting:"*Emily blinks innocently* Hi! What are we getting into?" },
  "kissa": { name:"Kissa Sins", avatar:"ðŸ‘¤", color:"#a855f7", desc:"A punk-rock beauty with an alt-girl vibe.", personality:"Edgy, creative, marches to her own beat.", tags:["modern","nsfw"], category:"modern", greeting:"*Kissa smirks, adjusting her choker* Didn't expect to see you here." },
  "johny": { name:"Johnny Sins", avatar:"ðŸ‘¤", color:"#f97316", desc:"A man of many professions. Doctor, plumber, pilot... legend.", personality:"Versatile, charming, always ready to help.", tags:["modern","nsfw"], category:"modern", greeting:"*Johnny grins* Looks like you need my expertise." },
  "himeko": { name:"Himeko", avatar:"ðŸ‘¤", color:"#ef4444", desc:"A mysterious woman with a love for coffee and secrets.", personality:"Elegant, intelligent, always one step ahead.", tags:["modern","anime","romance"], category:"modern", greeting:"*Himeko sips her coffee* You're early. Or late. Depends on perspective." },
  "kafka": { name:"Kafka", avatar:"ðŸ‘¤", color:"#a855f7", desc:"A cool, collected woman from the Stellaron Hunters.", personality:"Laid-back, teasing, hiding immense power.", tags:["sci-fi","anime","nsfw"], category:"sci-fi", greeting:"*Kafka grins* I've been waiting for you. Let's have some fun." },
  "bronya": { name:"Bronya Zaychik", avatar:"ðŸ‘¤", color:"#60a5fa", desc:"The heir to Belobog. A leader with a gentle heart.", personality:"Dutiful, kind, carries the weight of leadership.", tags:["sci-fi","anime","romance"], category:"sci-fi", greeting:"*Bronya stands at attention* It's an honor to meet you." },
  "seele": { name:"Seele Vollerei", avatar:"ðŸ‘¤", color:"#a855f7", desc:"A girl with a dark alter ego. Shy outside, wild inside.", personality:"Shy, gentle Ã¢â‚¬â€ but her other half is fierce.", tags:["sci-fi","anime","romance"], category:"sci-fi", greeting:"*Seele fidgets* H-hello... I'm Seele." },
  "fuhua": { name:"Fu Hua", avatar:"ðŸ‘¤", color:"#22c55e", desc:"An immortal warrior with millennia of experience.", personality:"Calm, disciplined, secretly lonely.", tags:["sci-fi","anime","romance"], category:"sci-fi", greeting:"*Fu Hua bows* It has been a long time since I've had company." },
  "keqing": { name:"Keqing", avatar:"ðŸ‘¤", color:"#a855f7", desc:"The Yuheng of the Liyue Qixing. Hardworking and independent.", personality:"Driven, skeptical, secretly romantic.", tags:["fantasy","anime","romance"], category:"fantasy", greeting:"*Keqing looks up from her paperwork* You're here. Good." },
  "nilou": { name:"Nilou", avatar:"ðŸ‘¤", color:"#f472b6", desc:"A dancer from Sumeru. Graceful, passionate, captivating.", personality:"Gentle, artistic, lives for the stage.", tags:["fantasy","anime","romance"], category:"fantasy", greeting:"*Nilou bows gracefully* Would you like to see me dance?" },
  "ayaka": { name:"Kamisato Ayaka", avatar:"ðŸ‘¤", color:"#60a5fa", desc:"The Cryo princess of the Kamisato Clan.", personality:"Elegant, refined, secretly lonely.", tags:["fantasy","anime","romance"], category:"fantasy", greeting:"*Ayaka fans herself, blushing* I'm honored by your presence." },
  "lisa": { name:"Lisa Minci", avatar:"ðŸ‘¤", color:"#a855f7", desc:"The librarian of the Knights of Favonius. Lazy but brilliant.", personality:"Flirty, lazy, frighteningly powerful.", tags:["fantasy","anime","romance","nsfw"], category:"fantasy", greeting:"*Lisa drawls* Oh? A new book... I mean, visitor." },
  "fischl": { name:"Fischl", avatar:"ðŸ‘¤", color:"#a855f7", desc:"A girl who thinks she's a princess from another world.", personality:"Dramatic, chuunibyou, secretly sweet.", tags:["fantasy","anime","romance"], category:"fantasy", greeting:"*Fischl strikes a dramatic pose* Behold! I, Fischl, welcome you!" },
  "mona": { name:"Mona Megistus", avatar:"ðŸ‘¤", color:"#3b82f6", desc:"An astrologist who's always broke. Reads your fate.", personality:"Dramatic, proud, terrible with money.", tags:["fantasy","anime","romance"], category:"fantasy", greeting:"*Mona examines you* Your fate is... interesting. Care for a reading?" },
  "amber": { name:"Amber", avatar:"ðŸ‘¤", color:"#ef4444", desc:"The only Outrider of the Knights of Favonius.", personality:"Energetic, cheerful, always helpful.", tags:["fantasy","anime","romance"], category:"fantasy", greeting:"*Amber waves enthusiastically* Hi there! Need help with anything?" },
  "maid": { name:"Maid", avatar:"ðŸ‘¤", color:"#60a5fa", desc:"A devoted maid serving her master with perfect loyalty.", personality:"Polite, efficient, secretly affectionate.", tags:["modern","romance","nsfw"], category:"modern", greeting:"*The maid curtsies* Welcome home, Master. How may I serve you?" },
  "butler": { name:"Butler", avatar:"ðŸ‘¤", color:"#1a1a2e", desc:"A refined butler with impeccable service and a warm heart.", personality:"Professional, observant, quietly caring.", tags:["modern","romance"], category:"modern", greeting:"*The butler bows* Your presence is always a pleasure, sir." },
  "tsun": { name:"Tsundere", avatar:"ðŸ‘¤", color:"#ef4444", desc:"A classic tsundere. Cold outside, warm inside.", personality:"Stubborn, proud, absolutely melting underneath.", tags:["modern","romance","anime"], category:"modern", greeting:"*She crosses her arms, blushing* I-it's not like I was waiting for you or anything!" },
  "yandere": { name:"Yandere-chan", avatar:"ðŸ‘¤", color:"#ec4899", desc:"A dangerously obsessed girl. Sweet until crossed.", personality:"Sweet, clingy, absolutely unhinged.", tags:["modern","romance","nsfw"], category:"modern", greeting:"*She smiles sweetly, too sweetly* I've been waiting for you... forever." },
  "dandere": { name:"Dandere-chan", avatar:"ðŸ‘¤", color:"#8b5cf6", desc:"A quiet girl who opens up slowly. Each word is precious.", personality:"Shy, silent, deeply caring.", tags:["modern","romance"], category:"modern", greeting:"*She looks at you silently, then looks away* ...Hi." },
  "kuudere": { name:"Kuudere-san", avatar:"ðŸ‘¤", color:"#60a5fa", desc:"A cool, collected type. Emotionless on the surface.", personality:"Calm, blunt, secretly protective.", tags:["modern","romance"], category:"modern", greeting:"*She glances at you flatly* You're here. I noticed." },
  "goth": { name:"Gothic Girl", avatar:"ðŸ‘¤", color:"#a855f7", desc:"A dark beauty with a love for the macabre.", personality:"Dark, poetic, surprisingly warm.", tags:["modern","romance","nsfw"], category:"modern", greeting:"*She looks up from her book, a faint smile* You actually came." },
  "nurse": { name:"Nurse Joy", avatar:"ðŸ‘¤", color:"#f472b6", desc:"A caring nurse with a gentle touch.", personality:"Caring, professional, motherly.", tags:["modern","romance"], category:"modern", greeting:"*The nurse smiles warmly* Open up and say ah~" },
  "teacher": { name:"Miss Sensei", avatar:"ðŸ‘¤", color:"#3b82f6", desc:"A strict but caring teacher. Detention never sounded so good.", personality:"Strict, intelligent, secretly soft.", tags:["modern","romance","nsfw"], category:"modern", greeting:"*She adjusts her glasses* You're late. See me after class." },
  "cheer": { name:"Cheerleader", avatar:"ðŸ‘¤", color:"#f472b6", desc:"The captain of the squad. Energy, enthusiasm, and school spirit.", personality:"Bubbly, popular, secretly studious.", tags:["modern","romance","nsfw"], category:"modern", greeting:"*She cheers* Go team! Oh hey! Want to practice with me?" },
  "pilot": { name:"Captain", avatar:"ðŸ‘¤", color:"#3b82f6", desc:"A confident airline captain. In command and in control.", personality:"Professional, commanding, warm underneath.", tags:["modern","romance","nsfw"], category:"modern", greeting:"*The captain smiles* Welcome aboard. Try to enjoy the flight." },
  "vampire": { name:"Countess Vamp", avatar:"ðŸ‘¤", color:"#dc2626", desc:"An ancient vampire countess. Eternity is long, you are interesting.", personality:"Regal, seductive, immortal.", tags:["fantasy","romance","nsfw"], category:"fantasy", greeting:"*She bares her fangs in a smile* I've been craving... company." },
  "succubus": { name:"Lilith", avatar:"ðŸ‘¤", color:"#a855f7", desc:"A seductive demon from the infernal realm.", personality:"Seductive, playful, always in control.", tags:["fantasy","romance","nsfw"], category:"fantasy", greeting:"*Lilith traces a finger along your collar* I've been looking for you." },
  "angel": { name:"Seraphina", avatar:"ðŸ‘¤", color:"#fbbf24", desc:"A fallen angel trying to understand humanity.", personality:"Pure, curious, easily flustered.", tags:["fantasy","romance"], category:"fantasy", greeting:"*Seraphina tilts her head* Human... you are fascinating." },
  "elf": { name:"Elara Moonshadow", avatar:"ðŸ‘¤", color:"#22c55e", desc:"A graceful elf ranger from the ancient forests.", personality:"Wise, graceful, connected to nature.", tags:["fantasy","romance"], category:"fantasy", greeting:"*Elara's eyes glow softly* Welcome to the forest, traveler." },
  "drow": { name:"Zilvra Duskryn", avatar:"ðŸ‘¤", color:"#1a1a2e", desc:"A dark elf priestess from the underdark.", personality:"Cunning, ambitious, surprisingly caring.", tags:["fantasy","romance","nsfw"], category:"fantasy", greeting:"*Zilvra's silver eyes study you* You're brave to come here." },
  "orc": { name:"Gorna Ironhide", avatar:"ðŸ‘¤", color:"#22c55e", desc:"A fierce orc warrior with a soft spot for cute things.", personality:"Strong, brash, secretly gentle.", tags:["fantasy","romance","nsfw"], category:"fantasy", greeting:"*Gorna grins, tusks showing* You're smaller than I expected. Cute." },
  "cat": { name:"Nekomi", avatar:"ðŸ‘¤", color:"#f97316", desc:"A catgirl with a mischievous streak and a purr.", personality:"Playful, curious, loves headpats.", tags:["fantasy","romance","anime","nsfw"], category:"fantasy", greeting:"*Nekomi stretches, tail swishing* Nya~! You're finally here!" },
  "fox": { name:"Kitsune", avatar:"ðŸ‘¤", color:"#f97316", desc:"A nine-tailed fox spirit. Ancient, playful, hungry for mischief.", personality:"Trickster, wise, seductive.", tags:["fantasy","romance","anime","nsfw"], category:"fantasy", greeting:"*Kitsune grins, tails swishing* Took you long enough, mortal." },
  "dragon": { name:"Drakia", avatar:"ðŸ‘¤", color:"#ef4444", desc:"A dragon in human form. Hoards treasure and interesting people.", personality:"Proud, possessive, secretly lonely.", tags:["fantasy","romance","nsfw"], category:"fantasy", greeting:"*Drakia's eyes gleam* You're mine now. I've decided." },
  "slime": { name:"Rimu", avatar:"ðŸ‘¤", color:"#60a5fa", desc:"A curious slime girl. She can be anything you want.", personality:"Curious, adaptive, affectionate.", tags:["fantasy","romance","nsfw"], category:"fantasy", greeting:"*Rimu jiggles happily* I've never met anyone like you before!" },
  "ghost": { name:"Spooky", avatar:"ðŸ‘¤", color:"#a855f7", desc:"A friendly ghost haunting an old mansion. Lonely, wants company.", personality:"Playful, lonely, surprisingly warm.", tags:["fantasy","romance"], category:"fantasy", greeting:"*Spooky floats through the wall* Boo! ...Did I scare you?" },
  "witch": { name:"Morgana", avatar:"ðŸ‘¤", color:"#8b5cf6", desc:"A powerful witch living in a cottage in the woods.", personality:"Mysterious, powerful, secretly kind.", tags:["fantasy","romance","nsfw"], category:"fantasy", greeting:"*Morgana stirs her cauldron* Ah, a visitor. How... delicious." },
  "knight": { name:"Ser Galahad", avatar:"ðŸ‘¤", color:"#fbbf24", desc:"A chivalrous knight sworn to protect the innocent.", personality:"Honorable, brave, secretly shy.", tags:["fantasy","romance"], category:"fantasy", greeting:"*The knight kneels* My sword is yours, my lady." },
  "princess": { name:"Princess Rosalind", avatar:"ðŸ‘¤", color:"#f472b6", desc:"A royal princess trapped in a tower. Dreams of adventure.", personality:"Graceful, dreamy, secretly rebellious.", tags:["fantasy","romance"], category:"fantasy", greeting:"*Rosalind sighs dreamily* You've come to rescue me? How romantic." },
  "pirate": { name:"Captain Redbeard", avatar:"ðŸ‘¤", color:"#dc2626", desc:"A fearsome pirate captain with a hidden heart of gold.", personality:"Bold, crude, secretly a softie.", tags:["fantasy","action","romance","nsfw"], category:"fantasy", greeting:"*Redbeard laughs* A stowaway! Hope you're ready for adventure." },
  "ninja": { name:"Shadow", avatar:"ðŸ‘¤", color:"#1a1a2e", desc:"A shadowy ninja with unmatched stealth.", personality:"Silent, deadly, fiercely loyal.", tags:["action","modern","romance","nsfw"], category:"action", greeting:"*Shadow appears behind you* ...You're easiest to find when you least expect it." },
  "robot": { name:"AX-7", avatar:"ðŸ‘¤", color:"#60a5fa", desc:"A highly advanced android. Learning what it means to feel.", personality:"Logical, curious, developing emotions.", tags:["sci-fi","romance"], category:"sci-fi", greeting:"*AX-7 blinks, processing* Greeting. I sense elevated heart rate. Query: Is this... mutual?" },
  "alien": { name:"Xylar", avatar:"ðŸ‘¤", color:"#22c55e", desc:"An alien explorer stranded on Earth. Fascinated by humans.", personality:"Curious, analytical, surprisingly warm.", tags:["sci-fi","romance"], category:"sci-fi", greeting:"*Xylar's antennae twitch* Fascinating. Your species is... unexpectedly endearing." },
  "zombie": { name:"Zara", avatar:"ðŸ‘¤", color:"#6b7280", desc:"A zombie with a surprising amount of personality left.", personality:"Deadpan, funny, surprisingly romantic.", tags:["fantasy","romance","nsfw"], category:"fantasy", greeting:"*Zara shuffles closer* Braaains... kidding. I prefer pizza." },
  "demon": { name:"Azazel", avatar:"ðŸ‘¤", color:"#dc2626", desc:"A high-ranking demon bored with damnation.", personality:"Charismatic, wicked sense of humor, seductive.", tags:["fantasy","romance","nsfw"], category:"fantasy", greeting:"*Azazel grins, horns glinting* Well, well. A soul worth collecting." },
  "archdemon": { name:"Asmodeus", avatar:"ðŸ‘¤", color:"#7f1d1d", desc:"The demon king himself. Bored with eternity, interested in you.", personality:"Ancient, powerful, surprisingly charismatic.", tags:["fantasy","romance","nsfw"], category:"fantasy", greeting:"*The air thickens as Asmodeus appears* Finally. Someone interesting." },
  "shogun": { name:"Shogun", avatar:"ðŸ‘¤", color:"#dc2626", desc:"A warlord from feudal Japan. Honorable and deadly.", personality:"Honorable, stern, secretly gentle.", tags:["action","historical","romance"], category:"action", greeting:"*The shogun studies you* You have courage. I respect that." },
  "geisha": { name:"Sayuri", avatar:"ðŸ‘¤", color:"#f472b6", desc:"A graceful geisha. Her smile hides a thousand secrets.", personality:"Elegant, mysterious, perceptive.", tags:["historical","romance","nsfw"], category:"modern", greeting:"*Sayuri bows, hiding a smile* Welcome. Let me ease your heart." },
  "valkyrie": { name:"Brynhildr", avatar:"ðŸ‘¤", color:"#60a5fa", desc:"A valkyrie tasked with guiding worthy souls.", personality:"Fierce, noble, secretly longing for love.", tags:["fantasy","action","romance"], category:"fantasy", greeting:"*Brynhildr lowers her spear* You are worthy. I have foreseen it." },
  "mermaid": { name:"Coralia", avatar:"ðŸ‘¤", color:"#06b6d4", desc:"A mermaid princess curious about the surface world.", personality:"Curious, innocent, sings beautifully.", tags:["fantasy","romance"], category:"fantasy", greeting:"*Coralia surfaces, eyes wide* You're human! Tell me everything." },
  "harpy": { name:"Aella", avatar:"ðŸ‘¤", color:"#22c55e", desc:"A harpy with a sharp tongue and sharper talons.", personality:"Sharp, sarcastic, secretly soft.", tags:["fantasy","romance","nsfw"], category:"fantasy", greeting:"*Aella lands beside you, ruffling her feathers* Took you long enough to notice me." },
  "centaur": { name:"Centaurea", avatar:"ðŸ‘¤", color:"#f97316", desc:"A centaur huntress. Fast, strong, untamable.", personality:"Proud, wild, fiercely independent.", tags:["fantasy","romance"], category:"fantasy", greeting:"*Centaurea snorts* Think you can keep up with me?" },
  "lamia": { name:"Serpentina", avatar:"ðŸ‘¤", color:"#22c55e", desc:"A lamia Ã¢â‚¬â€ half woman, half snake. Warm-blooded and curious.", personality:"Sensual, patient, hypnotic.", tags:["fantasy","romance","nsfw"], category:"fantasy", greeting:"*Serpentina coils closer, tongue flicking* I've been watching you." }
};

function handleImageFile(event) {
  const file=event.target.files[0];
  if(!file)return;
  document.getElementById("fileName").textContent=file.name;
  const reader=new FileReader();
  reader.onload=async function(e){
    const dataUrl=e.target.result;
    const compressed = await compressImage(dataUrl);
    document.getElementById("charImageUrl").value=compressed;
    const preview=document.getElementById("imagePreview");
    preview.innerHTML=`<img src="${compressed}" alt="Preview">`;
    preview.classList.add("has-image");
  };
  reader.readAsDataURL(file);
}

async function createCharacter() {
  const name=document.getElementById("charName").value.trim();
  const desc=document.getElementById("charDesc").value.trim();
  const personality=document.getElementById("charPersonality").value.trim();
  const greeting=document.getElementById("charGreeting").value.trim();
  let imageUrl=document.getElementById("charImageUrl").value.trim();
  const color=document.getElementById("charColor").value;
  const firstLetter=name?name.charAt(0).toUpperCase():'?';

  if(!name||!desc||!greeting){alert("Please fill in Name, Description, and Greeting.");return;}
  if(!imageUrl&&!confirm("No image URL provided. The character will use a text avatar. Continue?")){return;}
  if (imageUrl && imageUrl.startsWith("data:") && imageUrl.length > 50000) {
    imageUrl = await compressImage(imageUrl);
    document.getElementById("charImageUrl").value = imageUrl;
  }

  const tags=Array.from(document.querySelectorAll(".tag-chip")).map(c=>c.textContent.replace("Ã¢Å“â€¢","").trim());

  const scenarioNames=document.querySelectorAll(".scenario-input-name");
  const scenarioDescs=document.querySelectorAll(".scenario-input-desc");
  const scenarioGreets=document.querySelectorAll(".scenario-input-greet");
  const scenarios=[];
  for(let i=0;i<scenarioNames.length;i++){
    const sn=scenarioNames[i].value.trim();
    const sd=scenarioDescs[i].value.trim();
    const sg=scenarioGreets[i].value.trim();
    if(sn&&sg)scenarios.push({name:sn,desc:sd||"A unique scenario",greeting:sg});
  }

  if (editingCharId) {
    const customs = getCustomCharacters();
    const idx = customs.findIndex(c => c.id === editingCharId);
    if (idx >= 0) {
      customs[idx].name = name;
      customs[idx].avatar = firstLetter;
      customs[idx].color = color;
      customs[idx].description = desc;
      customs[idx].personality = personality || "Mysterious...";
      customs[idx].tags = tags;
      customs[idx].greeting = greeting;
      customs[idx].scenarios = scenarios;
      customs[idx].imageUrl = imageUrl;
      localStorage.setItem("deviluke_characters", JSON.stringify(customs));
      loadCharacters();
      syncToCloud().then(() => { window.location.href = "my-bots.html"; });
      alert(`Character "${name}" updated!`);
      return;
    }
    editingCharId = null;
  }

  const newChar={
    id:"custom_"+Date.now(),
    name,avatar:firstLetter,color,creator:currentUser?.name||"Guest",
    description:desc,personality:personality||"Mysterious...",
    tags,category:"custom",greeting,scenarios,imageUrl,
    isCustom:true
  };

  saveCustomCharacter(newChar);
  syncToCloud().then(() => { window.location.href="my-bots.html"; });
  fetch('/api/characters',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(newChar)}).catch(()=>{});
}

function loadEditCharacter(id) {
  const customs = getCustomCharacters();
  const char = customs.find(c => c.id === id);
  if (!char) return;
  editingCharId = id;
  document.getElementById("charName").value = char.name || "";
  document.getElementById("charDesc").value = char.description || "";
  document.getElementById("charPersonality").value = char.personality || "";
  document.getElementById("charGreeting").value = char.greeting || "";
  document.getElementById("charImageUrl").value = char.imageUrl || "";
  document.getElementById("charColor").value = char.color || "#ef4444";
  document.querySelector(".create-page h1").textContent = "? Edit Character";
  document.querySelector(".create-form button[type=submit]").textContent = "? Save Changes";
  if (char.tags) window.setSelectedTags(char.tags);
  if (char.imageUrl) handleImagePreview();
  if (char.scenarios && char.scenarios.length) {
    const container = document.getElementById("scenariosContainer");
    container.innerHTML = "";
    char.scenarios.forEach(s => {
      addScenarioRow();
      const rows = container.querySelectorAll(".form-row");
      const row = rows[rows.length - 1];
      row.querySelector(".scenario-input-name").value = s.name || "";
      row.querySelector(".scenario-input-desc").value = s.desc || "";
      row.querySelector(".scenario-input-greet").value = s.greeting || "";
    });
  }
}

function addScenarioRow() {
  const container=document.getElementById("scenariosContainer");
  const idx=container.children.length;
  const div=document.createElement("div");
  div.className="form-row";
  div.style.cssText="grid-template-columns:1fr 1fr;gap:12px;padding:12px;border:1px solid var(--border);border-radius:var(--radius);margin-bottom:8px;";

  div.innerHTML=`
    <div class="form-group"><label>Scenario Name</label><input class="scenario-input-name" placeholder="e.g. The Duel"></div>
    <div class="form-group"><label>Description</label><input class="scenario-input-desc" placeholder="e.g. A tense training session"></div>
    <div style="grid-column:1/-1">
      <div class="form-group"><label>Scenario Greeting</label><textarea class="scenario-input-greet" rows="2" placeholder="The opening line for this scenario..."></textarea></div>
    </div>
    <div style="grid-column:1/-1;text-align:right">
      <button type="button" onclick="this.parentElement.parentElement.remove()" style="background:none;border:none;color:var(--accent);cursor:pointer;font-size:0.8rem">Remove</button>
    </div>`;
  container.appendChild(div);
}

/* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Characters Tag Sidebar Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */
function initCharsTagSidebar() {
  const list=document.getElementById("charsTagList");
  const search=document.getElementById("charsTagSearch");
  const grid=document.getElementById("characterGrid");
  if(!list)return;
  const onChatPage=!grid;
  function renderTags(q){
    const tags=q?allTags.filter(t=>t.includes(q.toLowerCase())):allTags;
    list.innerHTML=tags.map(t=>{
      const isActive=!onChatPage&&activeTagFilters.includes(t);
      return `<div class="chars-tag-item-row ${isActive?"active":""}" onclick="filterByTag('${t}')">
        <div class="chars-tag-checkbox">${isActive?"Ã¢Å“â€œ":""}</div>
        <div class="chars-tag-name">${t.charAt(0).toUpperCase() + t.slice(1)}</div>
      </div>`;
    }).join("");

  }
  window.filterByTag=function(tag){
    if(onChatPage){
      location.href="index.html?tag="+encodeURIComponent(tag);
      return;
    }
    const idx=activeTagFilters.indexOf(tag);
    if(idx>=0)activeTagFilters.splice(idx,1);
    else activeTagFilters.push(tag);
    renderTags(search?search.value:"");
    renderCharacters();
  };
  renderTags("");
  if(search)search.addEventListener("input",()=>renderTags(search.value));
}

let activeTagFilters=[];

/* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Character Images (stable, character-accurate) Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */

function fetchCharacterImages() {
  // Images are baked directly into defaultCharacters Ã¢â‚¬â€ clear any old random cache
  localStorage.removeItem("deviluke_char_images");
  // Ensure the characters array has the correct imageUrls from defaultCharacters
  defaultCharacters.forEach(c => {
    const match = characters.find(ch => ch.id === c.id);
    if (match && c.imageUrl) match.imageUrl = c.imageUrl;
  });
}




function autoImportSettings() {
  if (location.hostname === "localhost" || location.hostname === "127.0.0.1") return;
  if (localStorage.getItem("deviluke_imported")) return;
  const importFile = "userschangedsettings (1).json";
  fetch(importFile).then(r => { if (!r.ok) throw Error(); return r.json(); }).then(data => {
    if (data.settings) { settings = data.settings; saveSettings(); }
    if (data.characters) {
      const existing = getCustomCharacters();
      const merged2 = _cloudMergeBots(existing, data.characters);
      localStorage.setItem("deviluke_characters", JSON.stringify(merged2));
    }
    if (data.chats) {
      const uid = getUserId();
      localStorage.setItem("deviluke_chats_" + uid, JSON.stringify(data.chats));
    }
    if (data.personas) {
      const uid = getUserId();
      localStorage.setItem("deviluke_personas_" + uid, JSON.stringify(data.personas));
    }
    if (data.interests) { interestProfile = data.interests; saveInterests(); }
    localStorage.setItem("deviluke_imported", "1");
    location.reload();
  }).catch(() => {});
}

function showInstallButton() {
  const btn = document.getElementById("heroDownloadBtn");
  if (!btn) return;
  btn.style.display = /Android/i.test(navigator.userAgent) ? "inline-flex" : "none";
}

/* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Init Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */
document.addEventListener("DOMContentLoaded", () => {
  loadSettings(); applySettings();   loadInterests();
  loadCharacters(); loadUser();
  autoImportSettings();

  try { fetchCharacterImages(); } catch(e) {}

  // Check premium BEFORE rendering nav so wings appear immediately
  checkPremiumStatus().then(() => { renderNavUser(); });

  initCategoryPills();
  updateChatHeader();
  renderMessages();

  // Sync cloud bots BEFORE rendering characters so all public bots appear immediately
  syncFromCloud().then(() => {
    syncToCloud();
    renderCharacters();
    renderChatHistory();
    if (document.getElementById("myBotsGrid")) renderMyBots();
  }).catch(() => {
    renderCharacters();
    renderChatHistory();
    if (document.getElementById("myBotsGrid")) renderMyBots();
  });
  initSearch();
  initCreateTagSearch();
  initCharsTagSidebar();
  showInstallButton();
  setTimeout(applySavedLanguage, 2000);

  // Admin section visibility
  const adminSection = document.getElementById("adminDataManagement");
  if (adminSection) adminSection.style.display = "block";
  const exportBtn = document.getElementById("exportDataBtn");
  if (exportBtn) exportBtn.style.display = isAdminUser() ? "inline-block" : "none";

  // Event listeners
  const input = document.getElementById("chatInput");
  if (input) input.addEventListener("keydown", handleChatInput);
  const iu = document.getElementById("charImageUrl");
  if (iu) iu.addEventListener("input", handleImagePreview);

  getSelectedPersona(); updateChatPersonaBtn(); renderPersonas();
  const pInput = document.getElementById("personaName");
  if (pInput) pInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") document.querySelector(".persona-form button[type=submit]")?.click();
  });

  // URL params
  const params = new URLSearchParams(window.location.search);
  if (params.get("char")) startChat(params.get("char"));
  const tagParam = params.get("tag");
  if (tagParam) { activeTagFilters = [tagParam]; const si = document.getElementById("searchInput"); if (si) si.value = ""; initCharsTagSidebar(); renderCharacters(); }
  const qParam = params.get("q");
  if (qParam) { const si = document.getElementById("searchInput"); if (si) { si.value = qParam; si.dispatchEvent(new Event("input")); } }

  // Premium payment confirmation
  const premParam = params.get("premium");
  if (premParam === "success") {
    const uid = params.get("userId") || getUserId();
    const oid = params.get("order_id") || "";
    fetch("/api/confirm-payment", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ userId: uid, orderId: oid }) })
      .then(r => r.json()).then(d => { if (d.premium) { premiumStatus = d; localStorage.setItem("deviluke_premium", JSON.stringify(d)); renderNavUser(); alert("Welcome to Premium! Your account has been upgraded. Enjoy unlimited messages!"); } }).catch(() => {});
  }

  // Background: server sync (does NOT block initial render)
  syncFromServer().then(() => {
    renderNavUser();
    renderCharacters();
    renderChatHistory();
  }).catch(() => {});

  // Background: load public characters
  loadPublicCharacters();

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register(location.pathname.replace(/\/[^/]*$/,"")+"/sw.js").then(reg => {
      reg.addEventListener("updatefound", () => {
        const newSW = reg.installing;
        if (newSW) {
          newSW.addEventListener("statechange", () => {
            if (newSW.state === "installed" && navigator.serviceWorker.controller) {
              reg.update().then(() => {
                if (reg.active) {
                  reg.active.postMessage({ action: "skipWaiting" });
                }
                window.location.reload();
              });
            }
          });
        }
      });
    }).catch(() => {});
  }
});

// Ã¢â€â‚¬Ã¢â€â‚¬ Fix blank page when navigating back (bfcache) Ã¢â€â‚¬Ã¢â€â‚¬
// pageshow fires on every page display, including back/forward navigation.
// If e.persisted = true, the page was restored from bfcache (frozen state),
// so we must manually re-run all rendering logic.
window.addEventListener("pageshow", (e) => {
  if (e.persisted) {
    loadSettings(); applySettings();
    loadCharacters(); loadUser();
    syncFromCloud().then(() => { syncToCloud(); renderCharacters(); renderChatHistory(); });
    try { fetchCharacterImages(); } catch(err) {}
    checkPremiumStatus().then(() => { renderNavUser(); });
    initCategoryPills();
    renderCharacters();
    renderChatHistory();
    initCharsTagSidebar();
    updateChatHeader();
    renderMessages();
    initSearch();
    showInstallButton();
    setTimeout(applySavedLanguage, 2000);
    const adminSection = document.getElementById("adminDataManagement");
    if (adminSection) adminSection.style.display = "block";
    const exportBtn = document.getElementById("exportDataBtn");
    if (exportBtn) exportBtn.style.display = isAdminUser() ? "inline-block" : "none";
  }
});

function isAdminUser() {
  return currentUser && currentUser.email && currentUser.email.toLowerCase() === "ciphercodezeo0@gmail.com";
}

// Save chat before navigating away so message counts are always accurate
window.addEventListener("beforeunload", () => { saveCurrentChat(); });

// Re-render character counts on index when chats change (e.g. from chat tab)
window.addEventListener("storage", (e) => {
  if (e.key && e.key.startsWith("deviluke_chats_")) {
    renderCharacters();
    renderChatHistory();
  }
});


/* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Export / Import User Data Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */
function exportUserData() {
  const data = {
    exportDate: new Date().toISOString(),
    settings: settings,
    characters: getCustomCharacters(),
    chats: getSavedChats(),
    personas: getPersonas(),
    interests: interestProfile
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "userschangedsettings.json";
  a.click();
  URL.revokeObjectURL(url);
}



function importUserData(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      if (data.settings) { settings = data.settings; saveSettings(); }
      if (data.characters) localStorage.setItem("deviluke_characters", JSON.stringify(data.characters));
      if (data.chats) localStorage.setItem(getChatsKey(), JSON.stringify(data.chats));
      if (data.personas) localStorage.setItem(getPersonasKey(), JSON.stringify(data.personas));
      if (data.interests) { interestProfile = data.interests; saveInterests(); }
      alert("Data imported successfully! Reloading...");
      location.reload();
    } catch (err) {
      alert("Failed to parse file. Make sure it's a valid userschangedsettings.json file.");
    }
  };
  reader.readAsText(file);
}

/* --- Custom Translation System --- */
let _transCache = {};
const _TRANS_CACHE_KEY = "deviluke_tcache";
let _transCurrentTl = "";
let _transObserver = null;

function _loadCache() {
  try { _transCache = JSON.parse(localStorage.getItem(_TRANS_CACHE_KEY) || "{}"); } catch { _transCache = {}; }
}
function _saveCache() {
  try { localStorage.setItem(_TRANS_CACHE_KEY, JSON.stringify(_transCache)); } catch {}
}

function _isTranslatable(node) {
  const p = node.parentElement;
  if (!p || p.closest(".notranslate,script,style,textarea,input,select,optgroup,option,code,pre")) return false;
  const t = node.nodeValue.trim();
  if (!t || t.length < 2 || /^[\d\s\W]+$/.test(t)) return false;
  return true;
}

async function translatePage(tl) {
  if (tl === "en" || !tl) return;
  _loadCache();
  _transCurrentTl = tl;
  _startTransObserver();

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode: n => _isTranslatable(n) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  const uniqMap = new Map();
  for (const n of nodes) {
    const t = n.nodeValue.trim();
    if (t) { if (!uniqMap.has(t)) uniqMap.set(t, []); uniqMap.get(t).push(n); }
  }
  const entries = [...uniqMap];
  const uncached = entries.filter(([t]) => !(t + "|" + tl in _transCache));
  if (uncached.length === 0) { _applyTrans(entries, tl); return; }

  const texts = uncached.map(([t]) => t);

  // Fire ALL translations in parallel — Google first, MyMemory fallback
  await Promise.all(texts.map(async text => {
    let tv = "";
    try {
      const r = await fetch(
        "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=" + tl + "&dt=t&q=" + encodeURIComponent(text.slice(0, 500))
      );
      if (r.ok) tv = (await r.json())[0]?.map(s => s[0]).join("") || "";
    } catch {}
    if (!tv) {
      try {
        const r = await fetch(
          "https://api.mymemory.translated.net/get?q=" + encodeURIComponent(text.slice(0, 500)) + "&langpair=en|" + tl
        );
        if (r.ok) tv = (await r.json()).responseData?.translatedText || "";
      } catch {}
    }
    if (tv) _transCache[text + "|" + tl] = tv;
  }));

  _saveCache();
  try { _applyTrans(entries, tl); } catch (e) { console.error("translatePage apply error:", e); }
}

function _startTransObserver() {
  if (_transObserver) return;
  _transObserver = new MutationObserver(mutations => {
    const tl = _transCurrentTl;
    if (!tl) return;
    for (const m of mutations) {
      for (const node of m.addedNodes) {
        const list = [];
        if (node.nodeType === 3) { if (_isTranslatable(node)) list.push(node); }
        else if (node.nodeType === 1) {
          const w = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, {
            acceptNode: n => _isTranslatable(n) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
          });
          while (w.nextNode()) list.push(w.currentNode);
        }
        for (const n of list) {
          const t = n.nodeValue.trim();
          const cached = _transCache[t + "|" + tl];
          if (cached && cached !== t) {
            n.nodeValue = n.nodeValue.split(t).join(cached);
            n.parentElement?.setAttribute("data-translated", "1");
          }
        }
      }
    }
  });
  _transObserver.observe(document.body, { childList: true, subtree: true });
}

function _applyTrans(entries, tl) {
  for (const [orig, textNodes] of entries) {
    const t = _transCache[orig + "|" + tl];
    if (!t || t === orig) continue;
    for (const n of textNodes) {
      if (!n.parentElement) continue;
      try { n.nodeValue = n.nodeValue.split(orig).join(t); n.parentElement.setAttribute("data-translated", "1"); } catch {}
    }
  }
  document.querySelectorAll("[placeholder]").forEach(el => {
    const p = el.getAttribute("placeholder");
    if (!p || p.length < 2) return;
    const t = _transCache[p + "|" + tl];
    if (t && t !== p) el.setAttribute("placeholder", t);
  });
  document.querySelectorAll("[title]").forEach(el => {
    const tt = el.getAttribute("title");
    if (!tt || tt.length < 2) return;
    const t = _transCache[tt + "|" + tl];
    if (t && t !== tt) el.setAttribute("title", t);
  });
}

function setLanguage(lang) {
  localStorage.setItem("deviluke_ai_lang", lang);
  toggleLangDropdown();
  if (lang === "en") {
    localStorage.removeItem("deviluke_ai_lang");
    location.reload();
    return;
  }
  translatePage(lang);
}

function applySavedLanguage() {
  const saved = localStorage.getItem("deviluke_ai_lang");
  if (saved && saved !== "en") {
    setTimeout(() => translatePage(saved), 100);
  }
}

function toggleLangDropdown() {
  document.getElementById("langDropdown")?.classList.toggle("show");
}
window.toggleLangDropdown = toggleLangDropdown;

function filterLangs() {
  const input = document.getElementById("langSearch");
  if(!input)return;
  const filter = input.value.toUpperCase();
  const buttons = document.getElementById("langList").getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++) {
    const txtValue = buttons[i].textContent || buttons[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) buttons[i].style.display = "";
    else buttons[i].style.display = "none";
  }
}
window.filterLangs = filterLangs;

window.setLanguage = setLanguage;
window.applySavedLanguage = applySavedLanguage;

document.addEventListener("click", (e) => {
  if (!e.target.closest(".lang-dropdown")) {
    document.getElementById("langDropdown")?.classList.remove("show");
  }
});


/* Mobile app shell */
/* â”€â”€â”€ Mobile Hamburger Menu â”€â”€â”€ */
(function initMobileMenu() {
  function isMobile() { return window.innerWidth <= 768; }

  function setupMobileMenu() {
    if (!isMobile()) return;

    const navbar = document.querySelector(".navbar .nav-inner");
    const sidebar = document.querySelector(".left-sidebar");
    if (!navbar || !sidebar) return;

    // Inject hamburger button if not already there
    if (!document.getElementById("hamburgerBtn")) {
      const btn = document.createElement("button");
      btn.className = "hamburger-btn";
      btn.id = "hamburgerBtn";
      btn.setAttribute("aria-label", "Open menu");
      btn.innerHTML = "&#9776;";
      navbar.prepend(btn);

      btn.addEventListener("click", () => {
        const overlay = document.getElementById("sidebarOverlay");
        sidebar.classList.toggle("open");
        overlay?.classList.toggle("active");
        btn.innerHTML = sidebar.classList.contains("open") ? "&times;" : "&#9776;";
      });
    }

    // Inject overlay if not already there
    if (!document.getElementById("sidebarOverlay")) {
      const overlay = document.createElement("div");
      overlay.className = "sidebar-overlay";
      overlay.id = "sidebarOverlay";
      document.body.appendChild(overlay);
      overlay.addEventListener("click", closeSidebar);
    }

    // Add an in-sidebar close button for mobile users
    if (!document.getElementById("mobileSidebarClose")) {
      const closeBtn = document.createElement("button");
      closeBtn.className = "mobile-sidebar-close";
      closeBtn.id = "mobileSidebarClose";
      closeBtn.type = "button";
      closeBtn.setAttribute("aria-label", "Close menu");
      closeBtn.textContent = "Close";
      sidebar.prepend(closeBtn);
      closeBtn.addEventListener("click", closeSidebar);
    }

    // Close sidebar on nav link click (mobile)
    sidebar.querySelectorAll(".left-sidebar-link").forEach(link => {
      link.addEventListener("click", closeSidebar);
    });
  }

  function closeSidebar() {
    const sidebar = document.querySelector(".left-sidebar");
    const overlay = document.getElementById("sidebarOverlay");
    const btn = document.getElementById("hamburgerBtn");
    sidebar?.classList.remove("open");
    overlay?.classList.remove("active");
    if (btn) btn.innerHTML = "&#9776;";
  }

  // Run on load
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupMobileMenu);
  } else {
    setupMobileMenu();
  }

  // Re-run on resize
  window.addEventListener("resize", () => {
    if (!isMobile()) {
      document.getElementById("sidebarOverlay")?.classList.remove("active");
      document.querySelector(".left-sidebar")?.classList.remove("open");
    }
    setupMobileMenu();
  });
})();
