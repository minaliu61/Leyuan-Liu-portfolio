const D = window.SITE_DATA;
const I18N = window.I18N;
let lang = localStorage.getItem("ll_lang") || "zh";
let activeFilter = "All";
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
      <div class="tech-list">${p.tech.map(t => `<span>${t}</span>`).join("")}</div>
      <span class="card-cta">${tr("viewDetail")}</span>
    </a>`).join("") || `<div class="empty-state">${tr("noProjects")}</div>`;
}

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

// 事件监听
$("#langToggle").addEventListener("click", () => { 
  lang = lang === "zh" ? "en" : "zh"; 
  localStorage.setItem("ll_lang", lang); 
  applyStaticI18n();
  renderAll();
});
$("#menuToggle").addEventListener("click", () => $("#nav").classList.toggle("open"));
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

// 初始化
applyStaticI18n();
renderAll();
