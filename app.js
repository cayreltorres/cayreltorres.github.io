(function () {
  const C = window.CONTENT;
  const $ = (s) => document.querySelector(s);
  let lang = localStorage.getItem("lang") || "fr";
  let theme = localStorage.getItem("theme") ||
    (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  const T = () => C[lang];
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const photosOf = (id, fallback) => ((C.photos || {})[id] || fallback || []);
  const imgs = (list, cls) => list.map((src) =>
    `<img class="${cls}" src="${esc(src)}" alt="" loading="lazy" data-zoom onerror="this.remove()">`).join("");

  function renderChrome() {
    document.documentElement.lang = lang;
    document.documentElement.dataset.theme = theme;
    document.title = `${C.name} — e-Portfolio (${C.school} ${C.year})`;
    $("#brand").textContent = C.name;
    $("#nav").innerHTML = ["home", "education", "projects", "mobility", "civic", "hobbies", "career", "contact"]
      .map((k) => `<a href="${k === "projects" ? "#/projects" : "#" + k}" data-k="${k}">${esc(T().nav[k])}</a>`).join("");
    $("#cvLink").textContent = T().cvLabel;
    $("#cvLink").href = C.cv[lang];
    $("#liLink").href = C.linkedin;
    $("#liFooter").href = C.linkedin;
    $("#copyright").textContent = T().copyright;
    $("#langFr").classList.toggle("on", lang === "fr");
    $("#langEn").classList.toggle("on", lang === "en");
  }

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
      ${h.languages ? `<h2>${esc(h.languagesTitle)}</h2>
      <div class="langs">${h.languages.map((l) => `
        <div class="lang-chip">
          ${C.showFlags !== false && l.flag ? `<span class="flag" aria-hidden="true">${l.flag}</span>` : ""}
          <div><strong>${esc(l.name)}</strong><span>${esc(l.level)}${l.detail ? " · " + esc(l.detail) : ""}</span></div>
        </div>`).join("")}</div>` : ""}
      <h2>${esc(h.interestsTitle)}</h2>
      <div class="interests">
        ${h.interests.map((i) => {
          const src = (C.interestImages || {})[i.id];
          return `
          <a class="interest" href="${esc(i.href || "#home")}">
            <div class="int-media${src ? "" : " noimg"}" data-icon="${esc(i.icon || "")}">
              ${src ? `<img src="${esc(src)}" alt="${esc(i.title)}" loading="lazy" onerror="this.parentNode.classList.add('noimg');this.remove()">` : ""}
            </div>
            <div class="int-body"><h3>${esc(i.title)}</h3><p>${esc(i.text)}</p>${h.more ? `<span class="more">${esc(h.more)}</span>` : ""}</div>
          </a>`;
        }).join("")}
      </div>`;
  }

  function pageProjects() {
    const list = [...T().projects].sort((a, b) => String(b.sort || b.date).localeCompare(String(a.sort || a.date)));
    return `
      <h1>${esc(T().projectsTitle)}</h1>
      <div class="timeline">
        ${list.map((p) => `
          <div class="tl-item">
            <div class="tl-date">${esc(p.date)}</div>
            <a class="card" href="#/projects/${esc(p.id)}">
              <div class="cover">${imgs(photosOf(p.id, p.images).slice(0, 1), "cover-img").replace(" data-zoom", "")}</div>
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
      <div class="gallery">${imgs(photosOf(p.id, p.images), "g-img")}</div>
      ${p.link ? `<p><a class="btn" href="${esc(p.link)}" target="_blank" rel="noopener">${esc(L.link)}</a></p>` : ""}`;
  }

  function renderCard(i, L) {
    const photoList = photosOf(i.id);
    return `
      <div class="card">
        ${photoList.length > 0 ? `<div class="thumbs">${imgs(photoList, "t-img")}</div>` : ""}
        <div class="card-text">
          ${i.date ? `<div class="tl-date">${esc(i.date)}</div>` : ""}
          <h3>${esc(i.title)}</h3>
          <p>${esc(i.text)}</p>
          ${i.href ? `<a class="more" href="${esc(i.href)}">${esc(L.seeProject)}</a>` : ""}
        </div>
      </div>`;
  }

  function pageSection(key) {
    const s = T()[key];
    const L = T().labels;
    let contentHtml = "";

    if (s.sections) {
      contentHtml = s.sections.map((sec) => `
        <h2>${esc(sec.title)}</h2>
        <div class="cards ${key === "hobbies" ? "feature" : ""}">
          ${sec.items.map((i) => renderCard(i, L)).join("")}
        </div>
      `).join("");
    } else {
      contentHtml = `<div class="cards ${key === "hobbies" ? "feature" : ""}">
        ${s.items.map((i) => renderCard(i, L)).join("")}
      </div>`;
    }

    return `
      <h1>${esc(s.title)}</h1>
      <p class="lead">${esc(s.intro)}</p>
      ${contentHtml}`;
  }

  function pageCareer() {
    const c = T().career;
    return `
      <h1>${esc(c.title)}</h1>
      <p class="lead">${esc(c.intro)}</p>
      ${c.sections.map((sec) => `
        <h2>${esc(sec.title)}</h2>
        <div class="cards career-grid">
          ${sec.items.map((i) => `
            <div class="card career-card">
              <div class="career-header">
                ${i.logo ? `<img class="company-logo" src="${esc(i.logo)}" alt="" onerror="this.style.display='none'">` : `<div class="company-logo-placeholder">🏢</div>`}
                <div>
                  <h3>${esc(i.title)}</h3>
                  ${i.company ? `<div class="company-name"><strong>${esc(i.company)}</strong></div>` : ""}
                  ${i.date ? `<div class="tl-date">${esc(i.date)}</div>` : ""}
                </div>
              </div>
              <p>${esc(i.text)}</p>
            </div>
          `).join("")}
        </div>
      `).join("")}`;
  }

  function pageContact() {
    const t = T().contact;
    const li = `<p class="contact-alt"><a class="btn" href="${esc(C.linkedin)}" target="_blank" rel="noopener">${esc(t.linkedin)}</a></p>`;
    return `
      <h1>${esc(t.title)}</h1>
      <p class="lead">${esc(t.intro)}</p>
      ${li}`;
  }

  function route() {
    const h = location.hash || "#home";
    let key = "home", html;
    if (h.startsWith("#/projects/")) { key = "projects"; html = pageProject(decodeURIComponent(h.slice(11))); }
    else if (h === "#/projects" || h === "#projects") { key = "projects"; html = pageProjects(); }
    else if (h === "#education") { key = "education"; html = pageSection("education"); }
    else if (h === "#mobility") { key = "mobility"; html = pageSection("mobility"); }
    else if (h === "#civic") { key = "civic"; html = pageSection("civic"); }
    else if (h === "#hobbies" || h === "#sports") { key = "hobbies"; html = pageSection("hobbies"); }
    else if (h === "#career") { key = "career"; html = pageCareer(); }
    else if (h === "#contact") { key = "contact"; html = pageContact(); }
    else { html = pageHome(); }
    $("#app").innerHTML = html;
    document.querySelectorAll("#nav a").forEach((a) => a.classList.toggle("active", a.dataset.k === key));
    $("#nav").classList.remove("open");
    window.scrollTo(0, 0);
  }

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

  document.addEventListener("click", (e) => {
    const img = e.target.closest && e.target.closest("img[data-zoom]");
    if (!img) return;
    const box = document.createElement("div");
    box.className = "lightbox";
    box.innerHTML = `<img src="${esc(img.getAttribute("src"))}" alt="">`;
    const close = () => { box.remove(); document.removeEventListener("keydown", onKey); };
    const onKey = (ev) => { if (ev.key === "Escape") close(); };
    box.addEventListener("click", close);
    document.addEventListener("keydown", onKey);
    document.body.appendChild(box);
  });

  renderChrome();
  route();
})();
