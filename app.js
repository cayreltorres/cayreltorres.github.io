(function () {
  const C = window.CONTENT;
  const $ = (s) => document.querySelector(s);
  let lang = localStorage.getItem("lang") || "fr";
  let theme = localStorage.getItem("theme") ||
    (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  const T = () => C[lang];
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------- Photos : liste partagée FR/EN, un fichier absent est ignoré ---------- */
  const photosOf = (id, fallback) => ((C.photos || {})[id] || fallback || []);
  // Pas d'espaces dans le conteneur : s'il n'y a plus d'image, il est vide et se masque tout seul (:empty).
  const imgs = (list, cls) => list.map((src) =>
    `<img class="${cls}" src="${esc(src)}" alt="" loading="lazy" data-zoom onerror="this.remove()">`).join("");

  /* ---------- Éléments fixes (barre, pied de page) ---------- */
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
      </div>
`;
  }

  function pageProjects() {
    const list = [...T().projects].sort((a, b) => String(b.sort || b.date).localeCompare(String(a.sort || a.date))); // antichronologique
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

  // Sections avec photos : mobilité, engagement, loisirs. Formation et carrière restent sans photo.
  const PHOTO_SECTIONS = ["mobility", "civic", "hobbies"];
  function pageSection(key) {
    const s = T()[key];
    const withPhotos = PHOTO_SECTIONS.includes(key);
    const L = T().labels;
    return `
      <h1>${esc(s.title)}</h1>
      <p class="lead">${esc(s.intro)}</p>
      <div class="cards${key === "hobbies" ? " feature" : ""}">
        ${s.items.map((i) => `
          <div class="card">
            ${withPhotos ? `<div class="thumbs">${imgs(photosOf(i.id), "t-img")}</div>` : ""}
            <div class="card-text">
              ${i.date ? `<div class="tl-date">${esc(i.date)}</div>` : ""}
              <h3>${esc(i.title)}</h3>
              <p>${esc(i.text)}</p>
              ${i.href ? `<a class="more" href="${esc(i.href)}">${esc(L.seeProject)}</a>` : ""}
            </div>
          </div>`).join("")}
      </div>`;
  }

  /* ---------- Contact : formulaire Web3Forms (l'adresse mail n'est pas dans le site) ---------- */
  const KEY_OK = () => /^[0-9a-f-]{30,}$/i.test(((C.contact || {}).accessKey) || "");
  let formShownAt = 0;
  function pageContact() {
    const t = T().contact;
    const li = `<p class="contact-alt"><a class="btn" href="${esc(C.linkedin)}" target="_blank" rel="noopener">${esc(t.linkedin)}</a></p>`;
    if (!KEY_OK()) return `<h1>${esc(t.title)}</h1><p class="lead">${esc(t.intro)}</p><p class="notice">${esc(t.unavailable)}</p>${li}`;
    formShownAt = Date.now();
    return `
      <h1>${esc(t.title)}</h1>
      <p class="lead">${esc(t.intro)}</p>
      <form id="contactForm" class="contact-form" novalidate>
        <input type="hidden" name="access_key" value="${esc(C.contact.accessKey)}">
        <input type="hidden" name="subject" value="Portfolio — nouveau message">
        <input type="hidden" name="from_name" value="Portfolio ${esc(C.name)}">
        <input type="checkbox" name="botcheck" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true">
        <label>${esc(t.name)}<input type="text" name="name" required maxlength="80" autocomplete="name"></label>
        <label>${esc(t.email)}<input type="email" name="email" required maxlength="120" autocomplete="email"></label>
        <label>${esc(t.message)}<textarea name="message" required rows="6" maxlength="3000"></textarea></label>
        <div class="h-captcha" data-captcha="true"></div>
        <button class="btn on" type="submit">${esc(t.send)}</button>
        <p id="formResult" class="notice" role="status" hidden></p>
      </form>
      <p class="muted-note">${esc(t.note)}</p>
      ${li}`;
  }
  function afterContact() {
    const form = $("#contactForm");
    if (!form) return;
    const old = document.getElementById("w3f-script");
    if (old) old.remove();
    const s = document.createElement("script");
    s.id = "w3f-script"; s.src = "https://web3forms.com/client/script.js"; s.async = true; s.defer = true;
    document.body.appendChild(s);               // le script tiers n'est chargé que sur cette page
    const t = T().contact, out = $("#formResult"), btn = form.querySelector("button");
    const say = (msg, ok) => { out.hidden = false; out.textContent = msg; out.className = "notice " + (ok ? "ok" : "bad"); };
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const f = new FormData(form);
      if (!f.get("name").trim() || !/^\S+@\S+\.\S+$/.test(f.get("email")) || !f.get("message").trim()) { form.reportValidity && form.reportValidity(); say(t.error, false); return; }
      if (Date.now() - formShownAt < 4000) return say(t.tooFast, false);       // piège anti-robot : envoi trop rapide
      if (f.get("botcheck")) return;                                              // piège anti-robot : champ caché rempli
      const cap = form.querySelector("textarea[name=h-captcha-response]");
      if (cap && !cap.value) return say(t.captcha, false);
      btn.disabled = true; btn.textContent = t.sending;
      try {
        const r = await fetch("https://api.web3forms.com/submit", {
          method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(Object.fromEntries(f)) });
        const d = await r.json();
        if (r.ok && d.success !== false) { say(t.success, true); form.reset(); } else say(t.error, false);
      } catch (_) { say(t.error, false); }
      btn.disabled = false; btn.textContent = t.send;
    });
  }

  /* ---------- Routeur (par hash) ---------- */
  function route() {
    const h = location.hash || "#home";
    let key = "home", html;
    if (h.startsWith("#/projects/")) { key = "projects"; html = pageProject(decodeURIComponent(h.slice(11))); }
    else if (h === "#/projects" || h === "#projects") { key = "projects"; html = pageProjects(); }
    else if (h === "#education") { key = "education"; html = pageSection("education"); }
    else if (h === "#mobility") { key = "mobility"; html = pageSection("mobility"); }
    else if (h === "#civic") { key = "civic"; html = pageSection("civic"); }
    else if (h === "#hobbies" || h === "#sports") { key = "hobbies"; html = pageSection("hobbies"); }
    else if (h === "#career") { key = "career"; html = pageSection("career"); }
    else if (h === "#contact") { key = "contact"; html = pageContact(); }
    else { html = pageHome(); }
    $("#app").innerHTML = html;
    document.querySelectorAll("#nav a").forEach((a) => a.classList.toggle("active", a.dataset.k === key));
    $("#nav").classList.remove("open");
    if (key === "contact") afterContact();
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

  /* Clic sur une photo : agrandissement. Clic ailleurs ou Échap : fermer. */
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
