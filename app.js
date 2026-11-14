const D = window.SITE_DATA;
const I18N = window.I18N;
let lang = localStorage.getItem("ll_lang") || "zh";
let activeFilter = "All", mediaDb;
const $ = s => document.querySelector(s);

const tr = k => (I18N[lang] && I18N[lang][k]) || k;

function applyStaticI18n(){
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = tr(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => { el.placeholder = tr(el.dataset.i18nPlaceholder); });
  $("#langToggle").textContent = lang === "zh" ? "EN" : "中文";
}

function renderExperiences(){
  $("#experienceList").innerHTML = D.experiences.map(e => `
    <article class="experience-card">
      <div>
        <div class="exp-date">${e.date}</div>
        <div class="exp-company">${lang === "zh" ? e.company : e.companyEn}</div>
        <div class="exp-role">${lang === "zh" ? e.role : e.roleEn}</div>
      </div>
      <div class="exp-content">
        <h3>${lang === "zh" ? e.title : e.titleEn}</h3>
        <ul>${e.bullets.map(b => `<li>${b[lang === "zh" ? 0 : 1]}</li>`).join("")}</ul>
      </div>
    </article>`).join("");
}

function renderProjects(){
  const q = $("#searchInput").value.toLowerCase().trim();
  const arr = D.projects.filter(p => {
    const catOk = activeFilter === "All" ||
      (activeFilter === "Data Science" ? p.category === "Data Science" : p.category === "Software");
    return catOk && JSON.stringify(p).toLowerCase().includes(q);
  });
  $("#projectGrid").innerHTML = arr.map(p => `
    <a class="project-card" href="project.html?id=${encodeURIComponent(p.id)}">
      <div class="project-cover">
        <span class="cover-placeholder">${p.category.toUpperCase()}</span>
        ${p.cover ? `<img src="${p.cover}" alt="" loading="lazy" onerror="this.style.display='none'">` : ""}
      </div>
      <div class="project-top"><span>${p.category.toUpperCase()}</span><span>${p.date}</span></div>
      <h3>${lang === "zh" ? p.title : p.enTitle}</h3>
      <div class="project-sub">${lang === "zh" ? p.subtitle : p.enSubtitle}</div>
      <p>${lang === "zh" ? p.intro : p.enIntro}</p>
      <ul>${p.bullets.map(b => `<li>${b[lang === "zh" ? 0 : 1]}</li>`).join("")}</ul>
      <div class="tech-list">${p.tech.map(t => `<span>${t}</span>`).join("")}</div>
      <span class="card-cta">${tr("viewDetail")}</span>
    </a>`).join("") || `<div class="empty-state">${tr("noProjects")}</div>`;
}

// 渲染证书（支持点击查看大图）
function renderCredentials(){
  $("#credentialGrid").innerHTML = D.credentials.map(c => {
    const hasImg = c[4] && c[4].length > 0;
    const content = `
      <div class="cred-type">${c[3]}</div>
      <h3>${lang === "zh" ? c[0] : c[1]}</h3>
      <p>${lang === "zh" ? c[2] : c[2]}</p>
      ${hasImg ? `<div class="cert-badge">点击查看证书 ↗</div>` : ""}
    `;
    return hasImg 
      ? `<a href="${c[4]}" target="_blank" class="credential has-img">${content}</a>`
      : `<article class="credential">${content}</article>`;
  }).join("");
}

function renderSkills(){
  $("#skillGrid").innerHTML = D.skills.map(s => `
    <article class="skill-card"><h3>${lang === "zh" ? s[0] : s[1]}</h3><p>${lang === "zh" ? s[2] : s[3]}</p></article>`).join("");
}

function renderFilters(){
  $("#filterButtons").innerHTML = [["All", tr("all")], ["Data Science", tr("data")], ["Software", tr("software")]]
    .map(([v, l]) => `<button class="filter-btn ${activeFilter === v ? "active" : ""}" data-filter="${v}">${l}</button>`).join("");
}

function renderAll(){
  renderExperiences(); renderProjects(); renderCredentials(); renderSkills(); renderFilters();
  $("#phoneText").textContent = D.showPhone ? D.phone : (lang === "zh" ? "未公开（可通过邮箱联系）" : "Hidden — please contact by email");
}

function applyLang(){
  applyStaticI18n();
  renderAll();
  renderMedia();
  syncVaultUI();
}

/* ---------- 数字资产库密码锁 ---------- */
const _vk = [76,108,121,54,54,54,49,49,48,51]; // Lly6661103 的字符码
const VAULT_PASS = _vk.map(c => String.fromCharCode(c)).join("");
let vaultUnlocked = sessionStorage.getItem("ll_vault") === "1";

function syncVaultUI(){
  const lock = $("#vaultLock"), ctl = $("#vaultControls");
  if (lock) lock.hidden = vaultUnlocked;
  if (ctl) ctl.hidden = !vaultUnlocked;
}

function tryUnlock(){
  const val = $("#vaultPassword").value;
  if (val === VAULT_PASS) {
    vaultUnlocked = true;
    sessionStorage.setItem("ll_vault", "1");
    $("#vaultError").textContent = "";
    $("#vaultPassword").value = "";
    syncVaultUI();
  } else {
    $("#vaultError").textContent = tr("vaultWrong");
    $("#vaultPassword").value = "";
    $("#vaultPassword").focus();
  }
}

$("#vaultUnlock").addEventListener("click", tryUnlock);
$("#vaultPassword").addEventListener("keydown", e => { if (e.key === "Enter") tryUnlock(); });

/* ---------- 事件绑定 ---------- */
$("#langToggle").addEventListener("click", () => { lang = lang === "zh" ? "en" : "zh"; localStorage.setItem("ll_lang", lang); applyLang(); });
$("#menuToggle").addEventListener("click", () => $("#nav").classList.toggle("open"));
$("#nav").addEventListener("click", e => { if (e.target.tagName === "A") $("#nav").classList.remove("open"); });
$("#searchInput").addEventListener("input", renderProjects);
$("#filterButtons").addEventListener("click", e => {
  const b = e.target.closest("button[data-filter]");
  if (b) { activeFilter = b.dataset.filter; renderFilters(); renderProjects(); }
});
$("#copyEmail").addEventListener("click", async () => {
  await navigator.clipboard.writeText(D.profile.email);
  const btn = $("#copyEmail");
  btn.textContent = tr("copyDone");
  setTimeout(() => { btn.textContent = tr("copyEmail"); }, 1800);
});

/* ---------- IndexedDB ---------- */
const req = indexedDB.open("LeyuanPersonalArchive", 1);
req.onupgradeneeded = () => req.result.createObjectStore("media", { keyPath: "id", autoIncrement: true });
req.onsuccess = () => { mediaDb = req.result; renderMedia(); };

function storeMedia(file){
  return new Promise((resolve, reject) => {
    const tx = mediaDb.transaction("media", "readwrite");
    tx.objectStore("media").add({ name: file.name, type: file.type, blob: file, added: new Date().toISOString() });
    tx.oncomplete = resolve; tx.onerror = reject;
  });
}
function getMedia(){
  return new Promise(resolve => {
    const r = mediaDb.transaction("media", "readonly").objectStore("media").getAll();
    r.onsuccess = () => resolve(r.result || []);
  });
}
async function renderMedia(){
  if (!mediaDb) return;
  const items = await getMedia();
  $("#mediaGrid").innerHTML = items.length
    ? items.map(m => `<article class="media-item" data-id="${m.id}">${
        m.type.startsWith("image/") ? `<img src="${URL.createObjectURL(m.blob)}" alt="">`
        : m.type.startsWith("video/") ? `<video src="${URL.createObjectURL(m.blob)}" controls></video>`
        : `<div class="file-preview">PDF</div>`
      }<p>${escapeHtml(m.name)}</p><button data-delete="${m.id}">${tr("delete")}</button></article>`).join("")
    : `<div class="empty-state">${tr("emptyMedia")}</div>`;
}
function escapeHtml(s){ return String(s).replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c])); }

$("#mediaInput").addEventListener("change", async e => {
  for (const f of e.target.files) await storeMedia(f);
  e.target.value = ""; renderMedia();
});
$("#mediaGrid").addEventListener("click", e => {
  const b = e.target.closest("[data-delete]");
  if (!b) return;
  const tx = mediaDb.transaction("media", "readwrite");
  tx.objectStore("media").delete(Number(b.dataset.delete));
  tx.oncomplete = renderMedia;
});

$("#exportData").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify({
    profile: D.profile, experiences: D.experiences, projects: D.projects,
    credentials: D.credentials, skills: D.skills
  }, null, 2)], { type: "application/json" });
  download(blob, "leyuan-archive.json");
});
$("#importInput").addEventListener("change", async e => {
  const f = e.target.files[0]; if (!f) return;
  const obj = JSON.parse(await f.text());
  download(new Blob([JSON.stringify(obj, null, 2)], { type: "application/json" }), "imported-archive-preview.json");
  alert(lang === "zh" ? "已校验 JSON 并下载备份。" : "JSON validated and exported.");
  e.target.value = "";
});
function download(blob, name){
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob); a.download = name; a.click();
  URL.revokeObjectURL(a.href);
}

applyLang();
