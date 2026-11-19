(function () {
  const C = window.CONTENT;
  const $ = (s) => document.querySelector(s);
  const store = {
    get: (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} }
  };
  let lang = store.get("lang") || "fr";
  let theme = store.get("theme") ||
    (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  const SECTIONS = ["home", "education", "projects", "mobility", "civic", "hobbies", "career", "contact"];
  const T = () => C[lang];
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // Photos d'un bloc : C.photos[id] si déclaré, sinon assets/photos/<id>.jpg (convention),
  // sinon rien. Une image introuvable disparaît toute seule (pas de trou dans la page).
  const photosOf = (id, fallback) => {
    if (!id) return fallback || [];
    const p = (C.photos || {})[id];
    if (p) return p;
    if (fallback && fallback.length) return fallback;
    return ["assets/photos/" + id + ".jpg"];
  };
  const imgs = (list, cls) => list.map((src) =>
    `<img class="${cls}" src="${esc(src)}" alt="" loading="lazy" data-zoom onerror="this.remove()">`).join("");

  /* ---------- Barre du haut ---------- */
  function renderChrome() {
    document.documentElement.lang = lang;
    document.documentElement.dataset.theme = theme;
    document.title = `${C.name} — e-Portfolio (${C.school} ${C.year})`;
    $("#brand").textContent = C.name;
    $("#nav").innerHTML = SECTIONS
      .map((k) => `<a href="#${k}" data-k="${k}">${esc(T().nav[k])}</a>`).join("") +
      `<a class="nav-cv" href="${esc(C.cv[lang])}" target="_blank" rel="noopener">${esc(T().cvLabel)}</a>`;
    $("#cvLink").textContent = T().cvLabel;
    $("#cvLink").href = C.cv[lang];
    $("#liLink").href = C.linkedin;
    $("#liFooter").href = C.linkedin;
    $("#copyright").textContent = T().copyright;
    $("#langFr").classList.toggle("on", lang === "fr");
    $("#langEn").classList.toggle("on", lang === "en");
  }

  /* ---------- Briques ---------- */
  const head = (k, title, intro) => `
    <header class="sec-head reveal">
      <span class="eyebrow">${String(SECTIONS.indexOf(k) + 1).padStart(2, "0")}</span>
      <h2>${esc(title)}</h2>
      ${intro ? `<p class="lead">${esc(intro)}</p>` : ""}
    </header>`;

  const wrap = (k, inner, cls) =>
    `<section class="sec ${cls || ""}" id="sec-${k}" data-k="${k}"><div class="wrap">${inner}</div></section>`;

  function renderCard(i, L) {
    const list = photosOf(i.id);
    return `
      <article class="card reveal">
        ${list.length ? `<div class="thumbs${list.length === 1 ? " single" : ""}">${imgs(list, "t-img")}</div>` : ""}
        <div class="card-text">
          ${i.date ? `<div class="tl-date">${esc(i.date)}</div>` : ""}
          <h3>${esc(i.title)}</h3>
          <p>${esc(i.text)}</p>
          ${i.href ? `<a class="more" href="${esc(i.href)}">${esc(L.seeProject)}</a>` : ""}
        </div>
      </article>`;
  }

  /* ---------- Sections ---------- */
  function secHome() {
    const h = T().home;
    return wrap("home", `
      <div class="hero">
        <div class="hero-photo reveal"><img src="${esc(C.photo)}" alt="${esc(C.name)}" onerror="this.parentNode.classList.add('noimg')"></div>
        <div class="hero-text reveal">
          <p class="eyebrow">${esc(C.school)} · ${esc(C.year)}</p>
          <h1>${esc(h.title)}</h1>
          <p class="lead">${esc(h.subtitle)}</p>
          <p>${esc(h.intro)}</p>
          <div class="cta">
            <a class="btn primary" href="#projects">${esc(T().nav.projects)} →</a>
            <a class="btn" href="#contact">${esc(T().nav.contact)}</a>
          </div>
        </div>
      </div>
      <div class="block reveal">
        <h3 class="mini">${esc(h.skillsTitle)}</h3>
        <p>${h.skills.map((s) => `<span class="tag">${esc(s)}</span>`).join("")}</p>
      </div>
      ${h.languages ? `<div class="block reveal"><h3 class="mini">${esc(h.languagesTitle)}</h3>
      <div class="langs">${h.languages.map((l) => `
        <div class="lang-chip">
          ${C.showFlags !== false && l.flag ? `<span class="flag" aria-hidden="true">${l.flag}</span>` : ""}
          <div><strong>${esc(l.name)}</strong><span>${esc(l.level)}${l.detail ? " · " + esc(l.detail) : ""}</span></div>
        </div>`).join("")}</div></div>` : ""}
      <div class="block">
        <h3 class="mini reveal">${esc(h.interestsTitle)}</h3>
        <div class="interests">
          ${h.interests.map((i) => {
            const src = (C.interestImages || {})[i.id];
            return `
            <a class="interest reveal" href="${esc(i.href || "#home")}">
              <div class="int-media${src ? "" : " noimg"}" data-icon="${esc(i.icon || "")}">
                ${src ? `<img src="${esc(src)}" alt="${esc(i.title)}" loading="lazy" onerror="this.parentNode.classList.add('noimg');this.remove()">` : ""}
              </div>
              <div class="int-body"><h3>${esc(i.title)}</h3><p>${esc(i.text)}</p>${h.more ? `<span class="more">${esc(h.more)}</span>` : ""}</div>
            </a>`;
          }).join("")}
        </div>
      </div>`, "sec-home");
  }

  function secGeneric(k) {
    const s = T()[k];
    const L = T().labels;
    const feature = k === "hobbies" ? " feature" : "";
    const grid = (items) => `<div class="cards${feature}">${items.map((i) => renderCard(i, L)).join("")}</div>`;
    const body = s.sections
      ? s.sections.map((sec) => `<h3 class="sub reveal">${esc(sec.title)}</h3>${grid(sec.items)}`).join("")
      : grid(s.items);
    return wrap(k, head(k, s.title, s.intro) + body);
  }

  function secProjects() {
    const list = [...T().projects].sort((a, b) => String(b.sort || b.date).localeCompare(String(a.sort || a.date)));
    return wrap("projects", head("projects", T().projectsTitle) + `
      <div class="timeline">
        ${list.map((p) => `
          <div class="tl-item reveal">
            <div class="tl-date">${esc(p.date)}</div>
            <a class="card" href="#/projects/${esc(p.id)}">
              <div class="cover">${imgs(photosOf(p.id, p.images).slice(0, 1), "cover-img").replace(" data-zoom", "")}</div>
              <div class="card-text">
                <h3>${esc(p.title)}</h3>
                <p>${esc(p.summary)}</p>
                ${(p.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("")}
              </div>
            </a>
          </div>`).join("")}
      </div>`);
  }

  function secCareer() {
    const c = T().career;
    return wrap("career", head("career", c.title, c.intro) + c.sections.map((sec) => `
      <h3 class="sub reveal">${esc(sec.title)}</h3>
      <div class="cards career-grid">
        ${sec.items.map((i) => {
          const list = photosOf(i.id);
          return `
          <article class="card career-card reveal">
            ${list.length ? `<div class="thumbs${list.length === 1 ? " single" : ""}">${imgs(list, "t-img")}</div>` : ""}
            <div class="card-text">
              <div class="career-header">
                ${i.logo ? `<img class="company-logo" src="${esc(i.logo)}" alt="" onerror="this.style.display='none'">` : ""}
                <div>
                  <h3>${esc(i.title)}</h3>
                  ${i.company ? `<div class="company-name">${esc(i.company)}</div>` : ""}
                  ${i.date ? `<div class="tl-date">${esc(i.date)}</div>` : ""}
                </div>
              </div>
              <p>${esc(i.text)}</p>
            </div>
          </article>`;
        }).join("")}
      </div>`).join(""));
  }

  function secContact() {
    const t = T().contact;
    const hasKey = !!(C.contact && C.contact.accessKey);
    const form = hasKey ? `
      <form class="contact-form reveal" id="contactForm" novalidate>
        <label>${esc(t.name)}<input type="text" name="name" required autocomplete="name"></label>
        <label>${esc(t.email)}<input type="email" name="email" required autocomplete="email"></label>
        <label>${esc(t.message)}<textarea name="message" rows="6" required></textarea></label>
        <input type="checkbox" name="botcheck" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true">
        <button class="btn primary" type="submit">${esc(t.send)}</button>
        <div id="contactStatus" role="status"></div>
        <p class="muted-note">${esc(t.note)}</p>
      </form>` : "";
    return wrap("contact", head("contact", t.title, t.intro) + form +
      `<p class="cta reveal"><a class="btn primary" href="${esc(C.linkedin)}" target="_blank" rel="noopener">${esc(t.linkedin)}</a>
       <a class="btn" href="${esc(C.cv[lang])}" target="_blank" rel="noopener">${esc(T().cvLabel)}</a></p>`);
  }

  function pageAll() {
    return secHome() + secGeneric("education") + secProjects() + secGeneric("mobility") +
      secGeneric("civic") + secGeneric("hobbies") + secCareer() + secContact();
  }

  /* ---------- Fiche projet (vue détaillée) ---------- */
  function pageProject(id) {
    const p = T().projects.find((x) => x.id === id);
    const L = T().labels;
    if (!p) return wrap("projects", `<p>${esc(L.notFound)}</p>`, "detail");
    const block = (label, txt) => (txt ? `<h3 class="sub">${esc(label)}</h3><p>${esc(txt)}</p>` : "");
    return wrap("projects", `
      <a class="back" href="#projects">${esc(L.back)}</a>
      <h1 class="detail-title">${esc(p.title)}</h1>
      <p class="tl-date">${esc(p.date)}</p>
      <p>${(p.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</p>
      ${block(L.context, p.context)}${block(L.role, p.role)}${block(L.methods, p.methods)}
      ${block(L.results, p.results)}${block(L.lessons, p.lessons)}
      <div class="gallery">${imgs(photosOf(p.id, p.images), "g-img")}</div>
      ${p.link ? `<p><a class="btn primary" href="${esc(p.link)}" target="_blank" rel="noopener">${esc(L.link)}</a></p>` : ""}`, "detail");
  }

  /* ---------- Animations d'apparition et onglet actif ---------- */
  let revealIO, spyIO;
  function observe() {
    if (revealIO) revealIO.disconnect();
    if (spyIO) spyIO.disconnect();
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((el) => el.classList.add("in"));
    } else {
      revealIO = new IntersectionObserver((es) => es.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); revealIO.unobserve(e.target); }
      }), { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
      items.forEach((el) => revealIO.observe(el));
    }
    if (view === "main" && "IntersectionObserver" in window) {
      spyIO = new IntersectionObserver((es) => es.forEach((e) => {
        if (e.isIntersecting) setActive(e.target.dataset.k);
      }), { rootMargin: "-45% 0px -50% 0px" });
      document.querySelectorAll(".sec").forEach((s) => spyIO.observe(s));
    }
  }
  function setActive(k) {
    document.querySelectorAll("#nav a[data-k]").forEach((a) => a.classList.toggle("active", a.dataset.k === k));
  }

  /* ---------- Routage ---------- */
  let view = null; // "main" | "detail"
  const ALIAS = { "#sports": "hobbies", "#/projects": "projects" };

  function scrollToKey(k, smooth) {
    if (k === "home") { window.scrollTo({ top: 0, behavior: smooth ? "smooth" : "auto" }); return; }
    const el = document.getElementById("sec-" + k);
    if (el) el.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
  }

  function route(opts) {
    opts = opts || {};
    const h = location.hash || "#home";
    if (h.startsWith("#/projects/")) {
      view = "detail";
      $("#app").innerHTML = pageProject(decodeURIComponent(h.slice(11)));
      setActive("projects");
      observe();
      window.scrollTo(0, 0);
    } else {
      const key = ALIAS[h] || (SECTIONS.includes(h.slice(1)) ? h.slice(1) : "home");
      const fresh = view !== "main";
      if (fresh || opts.rerender) {
        const y = window.scrollY;
        view = "main";
        $("#app").innerHTML = pageAll();
        observe();
        if (opts.keepScroll) window.scrollTo(0, y);
        else scrollToKey(key, false);
      } else {
        scrollToKey(key, true);
      }
      setActive(key);
    }
    $("#nav").classList.remove("open");
  }

  /* ---------- Événements ---------- */
  $("#burger").addEventListener("click", () => $("#nav").classList.toggle("open"));
  $("#nav").addEventListener("click", (e) => {
    const a = e.target.closest("a[data-k]");
    if (!a) return;
    $("#nav").classList.remove("open");
    // Si on clique sur l'onglet déjà dans l'URL, le hash ne change pas : on défile à la main.
    if (location.hash === "#" + a.dataset.k && view === "main") { e.preventDefault(); scrollToKey(a.dataset.k, true); }
  });
  $("#themeBtn").addEventListener("click", () => {
    theme = theme === "dark" ? "light" : "dark";
    store.set("theme", theme);
    renderChrome();
  });
  const setLang = (l) => {
    lang = l; store.set("lang", l);
    renderChrome();
    route({ rerender: true, keepScroll: true });
  };
  $("#langFr").addEventListener("click", () => setLang("fr"));
  $("#langEn").addEventListener("click", () => setLang("en"));
  window.addEventListener("hashchange", () => route());

  // Formulaire de contact (Web3Forms)
  let formShownAt = Date.now();
  document.addEventListener("submit", async (e) => {
    const f = e.target.closest && e.target.closest("#contactForm");
    if (!f) return;
    e.preventDefault();
    const t = T().contact;
    const status = $("#contactStatus");
    const say = (msg, ok) => { status.className = "notice " + (ok ? "ok" : "bad"); status.textContent = msg; };
    if (f.botcheck.checked) return;
    if (Date.now() - formShownAt < 3000) return say(t.tooFast, false);
    if (!f.name.value.trim() || !f.email.value.trim() || !f.message.value.trim() || !f.email.validity.valid) return say(t.error, false);
    const btn = f.querySelector("button[type=submit]");
    btn.disabled = true; say(t.sending, true);
    try {
      const r = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: C.contact.accessKey,
          subject: "Portfolio — " + f.name.value.trim(),
          from_name: f.name.value.trim(),
          name: f.name.value.trim(),
          email: f.email.value.trim(),
          message: f.message.value.trim(),
          botcheck: ""
        })
      });
      const d = await r.json().catch(() => ({}));
      if (r.ok && d.success) { say(t.success, true); f.reset(); }
      else say(t.error + (d.message ? " (" + d.message + ")" : ""), false);
    } catch (err) { say(t.error, false); }
    btn.disabled = false;
  });

  // Ombre de la barre au défilement
  const onScroll = () => $(".topbar").classList.toggle("scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });

  // Agrandissement des photos
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
  onScroll();
})();
