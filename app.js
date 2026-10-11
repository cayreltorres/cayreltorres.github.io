(function () {
  const C = window.CONTENT;
  const $ = (s) => document.querySelector(s);
  let lang = localStorage.getItem("lang") || "fr";
  let theme = localStorage.getItem("theme") ||
    (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  const T = () => C[lang];
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------- Éléments fixes (barre, pied de page) ---------- */
  function renderChrome() {
    document.documentElement.lang = lang;
    document.documentElement.dataset.theme = theme;
    document.title = `${C.name} — e-Portfolio (${C.school} ${C.year})`;
    $("#brand").textContent = C.name;
    $("#nav").innerHTML = ["home", "projects", "mobility", "civic", "sports", "career"]
      .map((k) => `<a href="${k === "projects" ? "#/projects" : "#" + k}" data-k="${k}">${esc(T().nav[k])}</a>`).join("");
    $("#cvLink").textContent = T().cvLabel;
    $("#cvLink").href = C.cv[lang];
    $("#liLink").href = C.linkedin;
    $("#liFooter").href = C.linkedin;
    $("#copyright").textContent = T().copyright;
    $("#langFr").classList.toggle("on", lang === "fr");
    $("#langEn").classList.toggle("on", lang === "en");
  }

  /* ---------- Pages ---------- */
  function pageHome() {
    const h = T().home;
    return `
      <section class="hero">
        <img src="${esc(C.photo)}" alt="${esc(C.name)}" onerror="this.style.display='none'">
        <div>
          <h1>${esc(h.title)}</h1>
          <p class="lead">${esc(h.subtitle)}</p>
          <p>${esc(h.intro)}</p>
        </div>
      </section>
      <h2>${esc(h.skillsTitle)}</h2>
      <p>${h.skills.map((s) => `<span class="tag">${esc(s)}</span>`).join("")}</p>
      <h2>${esc(h.interestsTitle)}</h2>
      <p>${esc(h.interests)}</p>`;
  }

  function pageProjects() {
    const list = [...T().projects].sort((a, b) => String(b.date).localeCompare(String(a.date))); // antichronologique
    return `
      <h1>${esc(T().projectsTitle)}</h1>
      <div class="timeline">
        ${list.map((p) => `
          <div class="tl-item">
            <div class="tl-date">${esc(p.date)}</div>
            <a class="card" href="#/projects/${esc(p.id)}">
              <h3>${esc(p.title)}</h3>
              <p>${esc(p.summary)}</p>
              ${(p.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("")}
            </a>
          </div>`).join("")}
      </div>`;
  }

  function pageProject(id) {
    const p = T().projects.find((x) => x.id === id);
    if (!p) return `<p>${esc(T().labels.notFound)}</p>`;
    const L = T().labels;
    const block = (label, txt) => (txt ? `<h2>${esc(label)}</h2><p>${esc(txt)}</p>` : "");
    return `
      <a class="back" href="#/projects">${esc(L.back)}</a>
      <h1>${esc(p.title)}</h1>
      <p class="tl-date">${esc(p.date)}</p>
      <p>${(p.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</p>
      ${block(L.context, p.context)}${block(L.role, p.role)}${block(L.methods, p.methods)}
      ${block(L.results, p.results)}${block(L.lessons, p.lessons)}
      ${(p.images || []).length ? `<div class="gallery">${p.images.map((i) => `<img src="${esc(i)}" alt="">`).join("")}</div>` : ""}
      ${p.link ? `<p><a class="btn" href="${esc(p.link)}" target="_blank" rel="noopener">${esc(L.link)}</a></p>` : ""}`;
  }

  function pageSection(key) {
    const s = T()[key];
    return `
      <h1>${esc(s.title)}</h1>
      <p class="lead">${esc(s.intro)}</p>
      <div class="cards">
        ${s.items.map((i) => `
          <div class="card">
            ${i.date ? `<div class="tl-date">${esc(i.date)}</div>` : ""}
            <h3>${esc(i.title)}</h3>
            <p>${esc(i.text)}</p>
          </div>`).join("")}
      </div>`;
  }

  /* ---------- Routeur (par hash) ---------- */
  function route() {
    const h = location.hash || "#home";
    let key = "home", html;
    if (h.startsWith("#/projects/")) { key = "projects"; html = pageProject(decodeURIComponent(h.slice(11))); }
    else if (h === "#/projects" || h === "#projects") { key = "projects"; html = pageProjects(); }
    else if (h === "#mobility") { key = "mobility"; html = pageSection("mobility"); }
    else if (h === "#civic") { key = "civic"; html = pageSection("civic"); }
    else if (h === "#sports") { key = "sports"; html = pageSection("sports"); }
    else if (h === "#career") { key = "career"; html = pageSection("career"); }
    else { html = pageHome(); }
    $("#app").innerHTML = html;
    document.querySelectorAll("#nav a").forEach((a) => a.classList.toggle("active", a.dataset.k === key));
    $("#nav").classList.remove("open");
    window.scrollTo(0, 0);
  }

  /* ---------- Événements ---------- */
  $("#burger").addEventListener("click", () => $("#nav").classList.toggle("open"));
  $("#themeBtn").addEventListener("click", () => {
    theme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", theme);
    renderChrome();
  });
  const setLang = (l) => { lang = l; localStorage.setItem("lang", l); renderChrome(); route(); };
  $("#langFr").addEventListener("click", () => setLang("fr"));
  $("#langEn").addEventListener("click", () => setLang("en"));
  window.addEventListener("hashchange", route);

  renderChrome();
  route();
})();
