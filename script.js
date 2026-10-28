/* =====================  EDIT YOUR CONTENT HERE  ===================== */
const SITE = {
  tagline: "Mathematics Education through Digital and Human-centred AI",
  logoSrc: "",                // e.g. "src/logo.png" or a full image URL. Empty = temporary text placeholder.
  copyright: "© 2026 MEDHA Project. All rights reserved.",
  geogebraPracticeUrl: "https://www.geogebra.org/calculator", // GeoGebra interactive math practice destination
  social: [],                 // e.g. [{label:"YouTube", url:"https://youtube.com/..."}] – shown only if filled
  contact: {
    email: "shanthi@cse.sastra.edu",                // e.g. "medha@example.edu"
    phone: "0435-2426823",
    institution: "SASTRA Deemed to be University – Srinivasa Ramanujan Centre",
    address: ""
  }
};
const ABOUT = {
  intro: "MEDHA is a capacity-building initiative that supports high school mathematics teachers and students in understanding Mathematics through digital resources and human-centred AI.",
  items: [
    {
      t: "About the Project",
      d: "MEDHA is a structured Professional Development Programme designed to build Technological Pedagogical Content Knowledge (TPACK) among mathematics teachers through the integrated use of dynamic mathematics software and human-centered Artificial Intelligence tools.\n\nThe programme focuses on two industry-standard platforms: GeoGebra and Desmos, integrated with Generative AI assistants. While GeoGebra and Desmos enable visual exploration and dynamic conceptual understanding, Generative AI is used as a thought partner for lesson design, item generation, and creation of differentiated resources — keeping the teacher at the center of pedagogical decision-making."
    },
    {
      t: "Vision and Mission",
      d: "To transform Mathematics education through AI-driven, inclusive, and innovative learning.\n\n To empower teachers with AI tools and digital resources for effective, equitable, and engaging Mathematics education."
    },
    {
      t: "Learning Objectives",
      d: "• Understand the role of AI and digital tools in modern mathematics teaching.\n\n• Use GeoGebra to create geometric constructions, graphs, and dynamic models.\n\n• Use Desmos to plot functions, build sliders, and design interactive classroom activities.\n\n• Use AI tools to generate lesson plans, questions, examples, and assessments.\n\n• Design activities that promote exploration, pattern recognition, and problem solving.\n\n• Integrate these tools into the current curriculum in a practical and time-efficient manner.\n\n• Assess students' understanding using digital and interactive evaluation methods"
    },
    {
      t: "Target Audience",
      d: "School mathematics teachers teaching at the  upper primary, secondary and  higher secondary levels in government, aided, and private schools. B.Ed. Students can also benefit from this training."
    },
    {
      t: "Educational Benefits",
      d: "Interactive digital tools offer several benefits in mathematics education. They make abstract concepts such as functions, transformations, and geometric paths easier to understand through dynamic diagrams. Students engage in active learning by experimenting with sliders and constructions to discover mathematical rules on their own.\n\n • AI tools help teachers save time by preparing worksheets, quizzes, and lesson ideas quickly. Students receive instant feedback, enabling them to check their answers and correct misconceptions.\n\n • Learning activities can be personalised to suit students’ different learning levels and speeds."
    }
  ]
};
const VISION = [
  { t: "Our Vision", d: "To transform school Mathematics education through Digital and Human-Centred Artificial Intelligence (AI), fostering conceptual understanding, logical reasoning, creativity, and problem-solving skills among students, while building an inclusive, innovative, and future-ready learning ecosystem." },
  { t: "Our Mission", d: "To empower school Mathematics teachers, particularly those teaching Grades VI–XII, through structured training and hands-on exposure to AI tools, digital applications, and innovative pedagogical practices. MEDHA aims to promote AI-assisted lesson planning, assessment, mathematical concept visualization, and digital teaching material development; address classroom learning challenges through AI-based solutions; and establish a sustainable ecosystem of reusable educational resources and collaborative innovation to improve Mathematics teaching and learning, with particular emphasis on equitable access for rural and underserved schools." },
  {
    t: "Educational Impact",
    d: "• Improved understanding: Students move from rote learning to conceptual understanding and reasoning.\n\n• Higher engagement: Interactive lessons raise interest, participation, and curiosity in mathematics.\n\n• Reduced fear of maths: Visual and playful exploration makes the subject less intimidating.\n\n• Multiplier effect: Each trained teacher reaches hundreds of students and can mentor colleagues, so the impact spreads across schools.\n\n• Long-term outcomes: Stronger problem-solving, analytical, and digital skills that prepare students for higher studies."
  }
];
/* GeoGebra Manual PDFs: ONE manual card per class (Classes 6, 8, 9). Class 7 has one per TERM (shown only after a term is selected).
   List the available PDF files for each class/term. Left empty = the Manual card shows "PDF not added yet". */
const MANUALS = {
  6: [
    { title: "6th Standard Manual", url: "manuals/6th Standard Manual.pdf" },
  ],
  7: {
    1: [
      { title: "Manual Class 7 Term 1", url: "manuals/Manual Class7 Term 1.pdf" }
    ],
    2: [
      { title: "Class 7 term 2 Manual", url: "manuals/Class 7 term 2 Manual.pdf" },
      { title: "Class 7 term 2 Chapter 1 - Manual", url: "manuals/Class 7 term 2 Chapter 1 - Manual.pdf" },
      { title: "Class 7 term 2 Chapter 3 - Manual", url: "manuals/Class 7 term 2 Chapter 3-Manual.pdf" }
    ],
    3: [
      { title: "GeoGebra Algebra 7th Standard 3rd Term", url: "manuals/GeoGebra_Algebra_7th_Standard_3rd_term.pdf" },
      { title: "GeoGebra Algebra 7th Standard 3rd Term (Part 2)", url: "manuals/GeoGebra_Algebra_7th_Standard_3rd_term-1.pdf" }
    ]
  },
  8: [
    { title: "Algebra 8th Std", url: "manuals/Algebra_8th Std.pdf" }
  ],
  9: [
    {title:"Algebra 9th Std",url:"manuals/9th Algebra Manual.pdf"}
  ]
};
/* Chapters: one row per chapter. demo = link of the GeoGebra demo video (opens when "GeoGebra Demo Video" is clicked).
   image = picture on the chapter card (put pictures in the src folder, e.g. image: "src/cards/chapter1.jpg"; change the path to change the picture);
   added = "YYYY-MM-DD"; term only for Class 7. */
const LESSONS = [
  { cls: 6, no: 1, title: "Algebraic Properties", topic: "Number System", image: "src/cards/number-system.svg", desc: "Properties and rules used in algebra", duration: "", demo: "src/Videos/Class_6/Class_6_Video1.mp4", added: "" },
  { cls: 6, no: 2, title: "Number Pattern Detection", topic: "Algebra", image: "src/cards/algebra.svg", desc: "Finding and understanding patterns in numbers", duration: "", demo: "src/Videos/Class_6/Class_6_Video2.mp4", added: "" },
  { cls: 6, no: 3, title: "Length of the shapes", topic: "Geometry", image: "src/cards/geometry.svg", desc: "Finding the length and measurements of shapes", duration: "", demo: "src/Videos/Class_6/Class_6_Video3.mp4", added: "" },
  { cls: 6, no: 4, title: "Shape Pattern Detection", topic: "Mensuration", image: "src/cards/mensuration.svg", desc: "Finding and understanding patterns in shapes", duration: "", demo: "src/Videos/Class_6/Class_6_Video4.mp4", added: "" },
  
  { cls: 7, term: 1, no: 1, title: "Exploring Expressions, Distributive Property and Consecutive Numbers", topic: "Number System", image: "src/cards/number-system.svg", desc: "Numbers	Understanding algebraic expressions, distribution, and number sequences", duration: "", demo: "/src/Videos/Class_7_Term1/Class_7_Term1_Video1.mp4", added: "" },
  { cls: 7, term: 1, no: 2, title: "Adding Algebraic Expressions and Solving Equations ", topic: "Geometry", image: "src/cards/geometry.svg", desc: "Adding expressions and finding unknown values", duration: "", demo: "/src/Videos/Class_7_Term1/Class_7_Term1_Video2.mp4", added: "" },
  
  { cls: 7, term: 2, no: 1, title: "Numbers in exponential form", topic: "Algebra", image: "src/cards/algebra.svg", desc: "Writing and understanding numbers using powers", duration: "", demo: "/src/Videos/Class_7_Term2/Chapter_1/Class_7_term2_chapter_1-video.mp4", added: "" },
  { cls: 7, term: 2, no: 2, title: "Laws of exponents", topic: "Geometry", image: "src/cards/geometry.svg", desc: "Basic rules for working with exponents", duration: "", demo: [
    "src/Videos/Class_7_Term2/Chapter_2/Class_7_Term2_Chapter_2_Video1.mp4",
    "src/Videos/Class_7_Term2/Chapter_2/Class_7_Term2_chapter_2 _video2.mp4"
  ], added: "" },
  { cls: 7, term: 2, no: 3, title: "Unit digit of a Number in exponential form", topic: "Geometry", image: "src/cards/geometry.svg", desc: "Finding the last digit of powers", duration: "", demo: "/src/Videos/Class_7_Term2/Chapter_3/class_7_term_2_chapter_3_video.mp4", added: "" },
  { cls: 7, term: 3, no: 1, title: "Geometric Representation of the identity", topic: "Algebra", image: "src/cards/algebra.svg", desc: "Understanding algebraic identities using shapes", duration: "", demo: "src/Videos/Class_7_Term3/class-7-Term-3-video-1.mp4", added: "" },
  { cls: 7, term: 3, no: 2, title: "Factorisation Using Identities", topic: "Statistics", image: "src/cards/statistics.svg", desc: "Factoring expressions using algebraic identities", duration: "", demo: "src/Videos/Class_7_Term3/class-7-Term-3-video-2.mp4", added: "" },
  { cls: 7, term: 3, no: 3, title: "Graphical representation of Inequation", topic: "Statistics", image: "src/cards/statistics.svg", desc: "Showing inequalities using graphs", duration: "", demo: "src/Videos/Class_7_Term3/class-7-Term-3-video-3.mp4", added: "" },
  { cls: 7, term: 3, no: 4, title: "Simple Linear Inequation on a Number Line", topic: "Statistics", image: "src/cards/statistics.svg", desc: "Representing inequalities on a number line", duration: "", demo: "src/Videos/Class_7_Term3/class-7-Term-3-video-4.mp4", added: "" },
  { cls: 7, term: 3, no: 5, title: "Proving Algebraic Difference Identities", topic: "Statistics", image: "src/cards/statistics.svg", desc: "Verifying algebraic identities involving differences", duration: "", demo: "src/Videos/Class_7_Term3/class-7-Term-3-video-5.mp4", added: "" },
  
 
 
  { cls: 8, no: 1, title: "Solving a Simple Linear Equation ", topic: "Algebra", image: "src/cards/algebra.svg", desc: "Finding the unknown in a linear equation", duration: "", demo: "/src/Videos/Class_8/class_8_video_1.mp4", added: "" },
  { cls: 8, no: 2, title: "Product of Monomials", topic: "Geometry", image: "src/cards/geometry.svg", desc: "Multiplying single algebraic terms", duration: "", demo: "/src/Videos/Class_8/class_8_video_2.mp4", added: "" },
  { cls: 8, no: 3, title: "Expansion of (x + a)³", topic: "Mensuration", image: "src/cards/mensuration.svg", desc: "Expanding the cube of a binomial", duration: "", demo: "/src/Videos/Class_8/class_8_video_3.mp4", added: "" },
  { cls: 8, no: 4, title: "Graphing Linear Equations", topic: "Algebra", image: "src/cards/algebra.svg", desc: "Drawing linear equations on a graph", duration: "", demo: "/src/Videos/Class_8/class_8_video_4.mp4", added: "" },
  { cls: 8, no: 5, title: "Product of a Monomial by a Polynomial", topic: "Algebra", image: "src/cards/algebra.svg", desc: "Multiplying a single term by a polynomial", duration: "", demo: "/src/Videos/Class_8/class_8_video_5.mp4", added: "" },
 
  { cls: 9, no: 1, title: "Remainder Theorem", topic: "Geometry", image: "src/cards/geometry.svg", desc: "Finding remainders when dividing polynomials", duration: "", demo: "/src/Videos/Class_9/class_9_video_5.mp4", added: "" },
  { cls: 9, no: 2, title: "Factorisation", topic: "Geometry", image: "src/cards/geometry.svg", desc: "Breaking expressions into simpler factors", duration: "", demo: "/src/Videos/Class_9/class_9_video_4.mp4", added: "" },
  { cls: 9, no: 3, title: "Consistency of linear equations", topic: "Algebra", image: "src/cards/algebra.svg", desc: "Checking whether linear equations have solutions", duration: "", demo: "/src/Videos/Class_9/class_9_video_1.mp4", added: "" },
  { cls: 9, no: 4, title: "Factor theorem", topic: "Geometry", image: "src/cards/geometry.svg", desc: "Using factors to solve polynomial expressions", duration: "", demo: "/src/Videos/Class_9/class_9_video_3.mp4", added: "" },
  { cls: 9, no: 5, title: "Cross Multiplication", topic: "Geometry", image: "src/cards/geometry.svg", desc: "Solving equations using cross multiplication", duration: "", demo: "/src/Videos/Class_9/class_9_video_2.mp4", added: "" }
  
  
  
];
/* Workshop carousel: the photos of the Teachers' workshop. Add or change paths here (pictures live in the src folder). */
const WORKSHOP_PHOTOS = ["src/workshop-3.jpg", "src/workshop-2.jpg", "src/workshop-4.jpg", "src/workshop-1.jpg", "src/workshop-5.jpg", "src/workshop-6.jpg"];
/* ---- The six "Our Impact" photo cards are switched off for now (kept here so they can be restored later) ----
const GALLERY = [
  {
    title: "Teachers’ workshop", date: "", venue: "", desc: "", image: "src/workshop-3.jpg",
    photos: ["src/workshop-1.jpg", "src/workshop-2.jpg", "src/workshop-3.jpg", "src/workshop-4.jpg", "src/workshop-5.jpg", "src/workshop-6.jpg"]
  },
  { title: "Student participation", date: "", venue: "", desc: "", image: "" },
  { title: "Faculty interaction", date: "", venue: "", desc: "", image: "" },
  { title: "Group photograph", date: "", venue: "", desc: "", image: "" },
  { title: "Learning activity", date: "", venue: "", desc: "", image: "" },
  { title: "Hands-on session", date: "", venue: "", desc: "", image: "" }
];
*/
/* ======================  END OF EDITABLE CONTENT  ====================== */

const $ = s => document.querySelector(s), esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const TBD = '<span class="editable">Content to be added by the MEDHA team.</span>';
const CLASSES = [6, 7, 8, 9];
let state = { cls: null, term: null };

/* header, logo, footer */
document.querySelectorAll("[data-tagline]").forEach(e => e.textContent = "Mathematics · Classes 6–9");
document.querySelectorAll("[data-logo]").forEach(e => { if (SITE.logoSrc) { e.innerHTML = '<img alt="MEDHA logo" src="' + esc(SITE.logoSrc) + '">' } else e.innerHTML = "∑" });
$("#copy").textContent = SITE.copyright + " Temporary placeholder logo shown until the official logo is added.";
const pBtn = $("#geogebraPracticeBtn");
if (pBtn && SITE.geogebraPracticeUrl) pBtn.href = SITE.geogebraPracticeUrl;
$("#social").innerHTML = SITE.social.length ? "<b>Follow us</b>" + SITE.social.map(s => `<a href="${esc(s.url)}" rel="noopener" target="_blank">${esc(s.label)}</a>`).join("") : "";
$("#menuBtn").onclick = () => { const n = $("#nav"), o = n.classList.toggle("open"); $("#menuBtn").setAttribute("aria-expanded", o); if (o && window.updateNavIndicator) window.updateNavIndicator(); };
document.querySelectorAll("nav a").forEach(a => a.onclick = () => { $("#nav").classList.remove("open"); $("#menuBtn").setAttribute("aria-expanded", false) });

/* about, vision, contact */
$("#aboutIntro").textContent = ABOUT.intro;
const renderCardContent = d => {
  if (!d) return TBD;
  if (!d.includes("\n")) return `<p class="card-para" style="margin:0">${esc(d)}</p>`;
  const rawLines = d.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  const out = [];
  let currentList = null;
  for (const line of rawLines) {
    if (line.startsWith("•")) {
      if (!currentList) {
        currentList = [];
        out.push({ type: "list", items: currentList });
      }
      currentList.push(line);
    } else {
      currentList = null;
      out.push({ type: "para", text: line });
    }
  }
  return out.map(item => {
    if (item.type === "list") {
      return `<ul class="card-list">${item.items.map(l => `<li class="card-bullet">${esc(l)}</li>`).join("")}</ul>`;
    }
    return `<p class="card-para">${esc(item.text)}</p>`;
  }).join("");
};
const block = (i, k) => `<div class="card abcard"><h3 id="ah${k}">${esc(i.t)}</h3><div class="abody" tabindex="0" role="region" aria-labelledby="ah${k}">${renderCardContent(i.d)}</div></div>`;
$("#aboutGrid").innerHTML = ABOUT.items.map(block).join("");
$("#visionGrid").innerHTML = VISION.map((i, k) => `<div class="card vcard"><h3 id="vh${k}">${esc(i.t)}</h3><div class="vbody" tabindex="0" role="region" aria-labelledby="vh${k}">${renderCardContent(i.d)}</div></div>`).join("");
const C = SITE.contact;
const contactIcons = {
  Email: '<svg class="contact-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/></svg>',
  Phone: '<svg class="contact-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  Institution: '<svg class="contact-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>'
};
$("#contactGrid").innerHTML = [
  ["Email", C.email ? `<a href="mailto:${esc(C.email)}">${esc(C.email)}</a>` : null],
  ["Phone", C.phone ? `<a href="tel:${esc(C.phone)}">${esc(C.phone)}</a>` : null],
  ["Institution", C.institution ? esc(C.institution) + (C.address ? "<br>" + esc(C.address) : "") : null]
].map(([t, v]) => {
  const icon = contactIcons[t] || "";
  const content = v ? `<div class="contact-row"><span class="contact-icon-wrap">${icon}</span><span class="contact-val">${v}</span></div>` : TBD;
  return `<div class="card contact-card"><h3>${t}</h3>${content}</div>`;
}).join("");

/* lessons */
const label = l => "Class " + l.cls + (l.term ? " · Term " + l.term : "");
const cleanPath = p => {
  if (!p || typeof p !== "string") return p;
  let s = p.startsWith("/src/") ? p.slice(1) : p;
  if (s === "src/Videos/Class_6/Class_6_Video4.mp4") return "src/Videos/Class_6/class_6_ Video4.mp4";
  if (s === "src/Videos/Class_7_Term1/Class_7_Term1_Video2.mp4") return "src/Videos/Class_7_Term1/Class7_Term1_Video2.mp4";
  return s;
};
function getVideos(l) {
  if (!l || !l.demo) return [];
  let d = l.demo;
  if (!Array.isArray(d)) d = [d];
  return d.filter(Boolean).map((v, i) => {
    if (typeof v === "string") {
      const u = v.trim();
      if (!u) return null;
      return { title: `Video ${i + 1}`, url: cleanPath(u) };
    }
    if (typeof v === "object" && v) {
      const u = (v.url || v.src || "").trim();
      if (!u) return null;
      return { title: v.title || v.name || `Video ${i + 1}`, url: cleanPath(u) };
    }
    return null;
  }).filter(Boolean);
}
const has = l => getVideos(l).length > 0;
const thumbOf = l => l.image || "src/cards/default.svg";
function lessonCard(l, index = 0) {
  const t = thumbOf(l);
  const vids = getVideos(l);
  const idx = LESSONS.indexOf(l);
  const btn = vids.length
    ? `<button type="button" class="btn sm geo" data-video="${idx}">GeoGebra Demo Video</button>`
    : `<button type="button" class="btn sm geo" data-missing="demo">GeoGebra Demo Video</button>`;
  const delay = (Math.min(index * 0.045, 0.45)).toFixed(3);
  return `<article class="card" style="--card-index:${index};animation-delay:${delay}s"><div class="thumb" style="background-image:linear-gradient(180deg,rgba(18,18,43,.18),rgba(18,18,43,.55)),url('${esc(t)}')">${l.duration ? `<span class="dur">${esc(l.duration)}</span>` : ""}</div>
 <div class="cbody"><h3>Chapter ${l.no}: ${esc(l.title)}</h3><p>${esc(label(l))}. ${esc(l.desc)}</p><div class="acts">${btn}</div></div></article>`;
}
function getManuals(c, term) {
  let m = c === 7 ? (MANUALS[7] || {})[term] : MANUALS[c];
  if (!m) return [];
  if (!Array.isArray(m)) m = [m];
  return m.filter(Boolean).map(item => {
    if (typeof item === "string") {
      const name = item.split("/").pop().replace(/\.pdf$/i, "").replace(/_/g, " ");
      return { title: name, url: item };
    }
    return item;
  });
}
function manualCard(c, term, index = 0) {
  const list = getManuals(c, term);
  const name = c === 7 ? `Class 7 · Term ${term}` : `Class ${c}`;
  const btn = list.length
    ? `<button class="btn sm" data-manual="${c}" ${c === 7 ? `data-mterm="${term}"` : ""}>GeoGebra Manual</button>`
    : `<button class="btn sm" data-missing="manual">GeoGebra Manual</button>`;
  const delay = (Math.min(index * 0.045, 0.45)).toFixed(3);
  return `<article class="card manual-card" style="--card-index:${index};animation-delay:${delay}s"><div class="thumb" style="background-image:linear-gradient(180deg,rgba(18,18,43,.18),rgba(18,18,43,.55)),url('src/cards/default.svg')"></div>
 <div class="cbody"><h3>${name}: GeoGebra Manual</h3><p>Step-by-step GeoGebra manual for ${c === 7 ? `the Term ${term} chapters of Class 7` : `all Class ${c} chapters`}.</p><div class="acts">${btn}</div></div></article>`;
}
function positionResults() {
  const isMobile = window.matchMedia && window.matchMedia("(max-width: 820px)").matches;
  const box = $("#results");
  const tools = $(".tools");
  if (!box || !tools) return;
  const q = $("#q") ? $("#q").value.trim() : "";

  if (isMobile && state.cls && !q) {
    const activeBtn = document.querySelector(`.cls[data-cls="${state.cls}"]`);
    if (activeBtn) {
      if (activeBtn.nextElementSibling !== box && activeBtn.after) {
        activeBtn.after(box);
      }
      return;
    }
  }
  if (tools.nextElementSibling !== box && tools.after) {
    tools.after(box);
  }
}
function renderClasses() {
  const box = $("#results");
  const tools = $(".tools");
  if (box && tools && box.parentElement === $("#classes") && tools.after) {
    tools.after(box);
  }
  $("#classes").innerHTML = CLASSES.map(c => {
    const n = LESSONS.filter(l => l.cls === c).length;
    return `<button class="cls" data-cls="${c}" aria-pressed="${state.cls === c}"><b>Class ${c}</b><span>${n} chapter${n === 1 ? "" : "s"}${c === 7 ? " · 3 terms" : ""}</span></button>`
  }).join("");
  if (window.observeReveals) window.observeReveals();
}
function renderResults() {
  positionResults();
  const q = $("#q").value.trim().toLowerCase(), box = $("#results"); let list, head = "";
  if (q) {
    list = LESSONS.filter(l => (l.title + " " + (l.topic || "") + " " + l.desc + " class " + l.cls + " term " + (l.term || "")).toLowerCase().includes(q));
    head = `<div class="crumb"><b>${list.length} result${list.length === 1 ? "" : "s"} for “${esc(q)}”</b><button class="btn ghost" id="clr">Clear search</button></div>`
  }
  else if (state.cls) {
    head = `<div class="crumb"><button class="btn ghost" id="back">← Back to all classes</button><b>Class ${state.cls} chapters</b></div>`;
    if (state.cls === 7) {
      head += `<div class="tabs" role="group" aria-label="Term">` + [1, 2, 3].map(t => `<button class="tab" data-term="${t}" aria-pressed="${state.term === t}">Term ${t}</button>`).join("") + `</div>`;
      if (!state.term) { box.innerHTML = head + '<div class="empty">Select Term 1, Term 2 or Term 3 to see the Class 7 chapters.</div>'; positionResults(); return }
    }
    list = LESSONS.filter(l => l.cls === state.cls && (state.cls !== 7 || l.term === state.term));
  } else { box.innerHTML = '<div class="empty">Select a class above to view its chapters.</div>'; positionResults(); return }
  const mc = (!q && state.cls && (state.cls !== 7 || state.term)) ? manualCard(state.cls, state.term, list.length) : "";
  box.innerHTML = head + (list.length || mc ? `<div class="grid">${list.map((l, i) => lessonCard(l, i)).join("")}${mc}</div>` : '<div class="empty">No chapters found. Try another word or select a class.</div>');
  positionResults();
  if (window.observeReveals) window.observeReveals();
}
function renderRecent() {
  const r = LESSONS.filter(l => has(l) && l.added).sort((a, b) => b.added.localeCompare(a.added)).slice(0, 4);
  $("#recent").innerHTML = r.length ? r.map((l, i) => lessonCard(l, i)).join("") : '<div class="empty" style="grid-column:1/-1">New lessons will appear here once a manual or demo video link and an “added” date are set in script.js.</div>';
  if (window.observeReveals) window.observeReveals();
}
document.addEventListener("click", e => {
  const t = e.target.closest("button"); if (!t) return;
  if (t.dataset.cls) { const c = +t.dataset.cls; state.cls = state.cls === c ? null : c; state.term = null; $("#q").value = ""; renderClasses(); renderResults() }
  else if (t.dataset.term) { state.term = +t.dataset.term; renderResults() }
  else if (t.id === "back") { state.cls = null; state.term = null; renderClasses(); renderResults() }
  else if (t.id === "clr") { $("#q").value = ""; renderResults() }
  else if (t.dataset.manual) openManuals(+t.dataset.manual, t.dataset.mterm ? +t.dataset.mterm : null);
  else if (t.dataset.video !== undefined) openVideoModal(+t.dataset.video);
  else if (t.dataset.playLesson !== undefined && t.dataset.playVideo !== undefined) playChapterVideo(+t.dataset.playLesson, +t.dataset.playVideo);
  else if (t.dataset.missing) openMissing(t.dataset.missing);
});
$("#q").addEventListener("input", renderResults);

/* dialogs */
const dlg = $("#dlg");
$("#dx").onclick = () => dlg.close();
dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close() });
dlg.addEventListener("close", () => {
  const v = dlg.querySelector("video");
  if (v && typeof v.pause === "function") {
    v.pause();
    v.removeAttribute("src");
    if (typeof v.load === "function") v.load();
  }
  $("#dm").innerHTML = "";
  $("#dd").innerHTML = "";
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && dlg.open) dlg.close();
});
function openVideoModal(idx) {
  const l = LESSONS[idx];
  if (!l) return;
  const vids = getVideos(l);
  if (!vids.length) { openMissing("demo"); return; }
  if (vids.length === 1) {
    $("#dt").textContent = `${label(l)} · Chapter ${l.no}: ${l.title} – GeoGebra Demo Video`;
    $("#dm").innerHTML = `<div class="player player-video"><video src="${esc(vids[0].url)}" controls autoplay playsinline preload="metadata"></video></div>`;
    $("#dd").innerHTML = `<p style="margin:0;color:var(--muted);font-size:.92rem">${esc(l.desc || l.title)}</p>`;
    dlg.showModal();
  } else {
    $("#dt").textContent = `${label(l)} · Chapter ${l.no}: ${l.title} – GeoGebra Demo Videos`;
    $("#dm").innerHTML = "";
    $("#dd").innerHTML = `
      <p style="margin:0 0 12px;color:var(--muted);font-size:.92rem">This chapter has ${vids.length} demo videos. Select a video to play:</p>
      <div class="video-list" style="display:flex;flex-direction:column;gap:10px">
        ${vids.map((v, i) => `
          <button type="button" class="btn sm video-choice" data-play-lesson="${idx}" data-play-video="${i}" style="text-align:left;display:flex;align-items:center;justify-content:space-between;cursor:pointer">
            <span>▶ ${esc(v.title)}</span>
            <span style="font-size:.82rem;font-weight:600;opacity:.85">Play Video ↗</span>
          </button>
        `).join("")}
      </div>
    `;
    dlg.showModal();
  }
}
function playChapterVideo(lessonIdx, videoIdx) {
  const l = LESSONS[lessonIdx];
  if (!l) return;
  const vids = getVideos(l);
  const current = vids[videoIdx];
  if (!current) return;
  $("#dt").textContent = `${label(l)} · Chapter ${l.no}: ${l.title} – ${current.title}`;
  $("#dm").innerHTML = `<div class="player player-video"><video src="${esc(current.url)}" controls autoplay playsinline preload="metadata"></video></div>`;
  $("#dd").innerHTML = `
    <p style="margin:0 0 10px;color:var(--muted);font-size:.88rem">Available videos for this chapter:</p>
    <div class="video-list" style="display:flex;flex-direction:column;gap:8px">
      ${vids.map((v, i) => `
        <button type="button" class="btn sm video-choice${i === videoIdx ? " active" : ""}" data-play-lesson="${lessonIdx}" data-play-video="${i}" style="text-align:left;display:flex;align-items:center;justify-content:space-between;cursor:pointer">
          <span>${i === videoIdx ? "▶" : "▷"} ${esc(v.title)}</span>
          <span style="font-size:.82rem;font-weight:${i === videoIdx ? "800" : "600"};opacity:.9">${i === videoIdx ? "Now Playing ●" : "Switch Video"}</span>
        </button>
      `).join("")}
    </div>
  `;
}
function openManuals(c, term) {
  const name = c === 7 ? `Class 7 · Term ${term}` : `Class ${c}`;
  const list = getManuals(c, term);
  $("#dt").textContent = `${name}: GeoGebra Manual`;
  $("#dm").innerHTML = "";
  $("#dd").innerHTML = list.length
    ? `<p style="margin:0 0 12px;color:var(--muted);font-size:.92rem">Select a manual to open it in the PDF viewer:</p><div style="display:flex;flex-direction:column;gap:10px">${list.map(m => `<a class="btn sm" href="${esc(m.url)}" target="_blank" rel="noopener" style="text-align:left;display:flex;align-items:center;justify-content:space-between"><span>📄 ${esc(m.title)}</span><span style="font-size:.82rem;font-weight:600;opacity:.85">Open PDF ↗</span></a>`).join("")}</div>`
    : `<div class="empty">No manuals available for this class.</div>`;
  dlg.showModal();
}
function openMissing(k) {
  $("#dt").textContent = k === "manual" ? "GeoGebra Manual" : "GeoGebra Demo Video";
  $("#dm").innerHTML = `<div class="player"><div><b>${k === "manual" ? "PDF not added yet" : "Link not added yet"}</b><br>${k === "manual" ? "Put this class's PDF in the manuals folder and set its path in MANUALS in script.js." : "Paste the video link for this chapter in script.js."}</div></div>`;
  $("#dd").innerHTML = "";
  dlg.showModal();
}
/* ---- disabled together with the six cards (restore with the GALLERY data above) ----
function openPhoto(g) {
  $("#dt").textContent = g.title;
  const pics = (g.photos && g.photos.length) ? g.photos : (g.image ? [g.image] : []);
  const n = Math.max(6, pics.length);
  const one = Array.from({ length: n }, (_, k) => pics[k] ? `<div class="sph" style="background-image:url('${esc(pics[k])}')"></div>` : `<div class="sph">Placeholder<br>photo ${k + 1}</div>`).join("");
  $("#dm").innerHTML = `<div class="strip"><div class="track">${one}${one}</div></div>`;
  $("#dd").innerHTML = [g.date, g.venue].filter(Boolean).map(esc).join(" · ") + (g.desc ? `<p style="margin:6px 0 0">${esc(g.desc)}</p>` : "");
  dlg.showModal();
}
$("#gal").innerHTML = GALLERY.map((g, i) => `<button data-photo="${i}" aria-label="View photos: ${esc(g.title)}"><div class="gwrap"><div class="ph" ${g.image ? `style="background-image:url('${esc(g.image)}')"` : ""}>${g.image ? "" : "Placeholder<br>photo to be added"}</div></div><div class="cbody"><h3 style="margin-bottom:2px">${esc(g.title)}</h3><p>${[g.date, g.venue].filter(Boolean).map(esc).join(" · ") || "Date and venue to be added"}</p></div></button>`).join("");
*/
(function carousel() {
  const box = $("#gal"); if (!box || !WORKSHOP_PHOTOS.length) return;
  const n = WORKSHOP_PHOTOS.length; let i = 0, timer = null;
  box.innerHTML = `<div class="car" role="region" aria-roledescription="carousel" aria-label="Teachers’ workshop photographs">
   <div class="car-track">${WORKSHOP_PHOTOS.map((p, k) => `<figure class="car-slide" aria-hidden="${k !== 0}"><img src="${esc(p)}" alt="Teachers’ workshop photograph ${k + 1} of ${n}" ${k ? 'loading="lazy"' : ""}></figure>`).join("")}</div>
   <button class="car-btn prev" aria-label="Previous photo" data-car="-1">‹</button><button class="car-btn next" aria-label="Next photo" data-car="1">›</button>
   <div class="car-dots">${WORKSHOP_PHOTOS.map((_, k) => `<button class="car-dot" aria-label="Show photo ${k + 1}" data-dot="${k}"></button>`).join("")}</div></div>`;
  const car = box.querySelector(".car"), track = box.querySelector(".car-track"), slides = [...box.querySelectorAll(".car-slide")], dots = [...box.querySelectorAll(".car-dot")];
  function go(k) {
    i = (k + n) % n; track.style.transform = `translateX(${-100 * i}%)`;
    slides.forEach((s, x) => s.setAttribute("aria-hidden", x !== i)); dots.forEach((dd, x) => dd.setAttribute("aria-current", x === i));
  }
  const stop = () => { if (timer) clearInterval(timer); timer = null }, start = () => { stop(); timer = setInterval(() => go(i + 1), 3500) };
  box.addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    if (b.dataset.car) go(i + +b.dataset.car); else if (b.dataset.dot !== undefined) go(+b.dataset.dot);
    start();
  });
  car.addEventListener("mouseenter", stop); car.addEventListener("mouseleave", start);
  car.addEventListener("focusin", stop); car.addEventListener("focusout", start);
  document.addEventListener("visibilitychange", () => document.hidden ? stop() : start());
  go(0); start();
})();

/* ---- Light / dark theme: follows the device setting until the visitor chooses; the choice is remembered ---- */
(function theme() {
  const root = document.documentElement, btn = $("#themeBtn"), mq = window.matchMedia ? matchMedia("(prefers-color-scheme: dark)") : null;
  const saved = () => { try { const t = localStorage.getItem("medha-theme"); return t === "dark" || t === "light" ? t : null } catch (e) { return null } };
  function apply(t) {
    root.setAttribute("data-theme", t);
    const dark = t === "dark", msg = dark ? "Switch to light mode" : "Switch to dark mode";
    btn.setAttribute("aria-pressed", dark); btn.setAttribute("aria-label", msg); btn.title = msg;
    btn.firstElementChild.textContent = dark ? "☀" : "☾";
  }
  apply(root.getAttribute("data-theme") === "dark" ? "dark" : "light");
  btn.addEventListener("click", () => {
    const t = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    apply(t); try { localStorage.setItem("medha-theme", t) } catch (e) { }
  });
  if (mq) (mq.addEventListener ? mq.addEventListener("change", e => { if (!saved()) apply(e.matches ? "dark" : "light") }) : mq.addListener(e => { if (!saved()) apply(e.matches ? "dark" : "light") }));
})();
renderClasses(); renderResults(); renderRecent();

/* ---- Scroll progress bar & active navigation highlight ---- */
(function scrollAndNav() {
  const bar = document.getElementById("scrollProgress");
  const ind = document.getElementById("navIndicator");
  const navLinks = Array.from(document.querySelectorAll("#nav a"));
  const sectionIds = ["home", "about", "lessons", "gallery", "contact"];
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

  function moveIndicator(activeLink) {
    if (!ind || !activeLink) {
      if (ind) ind.style.opacity = "0";
      return;
    }
    const isMobile = window.matchMedia && window.matchMedia("(max-width: 820px)").matches;
    if (isMobile) {
      ind.style.transform = `translateY(${activeLink.offsetTop}px)`;
      ind.style.height = `${activeLink.offsetHeight}px`;
      ind.style.width = "";
    } else {
      ind.style.transform = `translateX(${activeLink.offsetLeft}px)`;
      ind.style.width = `${activeLink.offsetWidth}px`;
      ind.style.height = "";
    }
    ind.style.opacity = "1";
  }

  function setActive(id) {
    let activeLink = null;
    navLinks.forEach(a => {
      const match = a.getAttribute("href") === `#${id}`;
      a.classList.toggle("active", match);
      if (match) {
        a.setAttribute("aria-current", "page");
        activeLink = a;
      } else {
        a.removeAttribute("aria-current");
      }
    });
    moveIndicator(activeLink);
  }

  window.updateNavIndicator = () => {
    const active = document.querySelector("#nav a.active");
    if (active) moveIndicator(active);
  };

  function update() {
    const docEl = document.documentElement;
    const scrollTop = window.scrollY || docEl.scrollTop || 0;
    const scrollHeight = docEl.scrollHeight - docEl.clientHeight;

    // 1. Scroll progress: 0% at top, 100% at bottom
    if (bar) {
      const p = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      bar.style.width = Math.min(100, Math.max(0, p)) + "%";
    }

    // 2. Active section detection
    if (!sections.length) return;

    // Bottom boundary: if scrolled near bottom, highlight Contact
    if (scrollHeight > 0 && scrollTop >= scrollHeight - 50) {
      setActive("contact");
      return;
    }

    // Top boundary: if near top, highlight Home
    if (scrollTop < 100) {
      setActive("home");
      return;
    }

    // Header offset so section highlights as it crosses into view under sticky header
    const offset = 140;
    let currentId = "home";
    for (const sec of sections) {
      if (scrollTop + offset >= sec.offsetTop) {
        currentId = sec.id;
      }
    }
    setActive(currentId);
  }

  // IntersectionObserver for smooth detection across modern browsers
  if ("IntersectionObserver" in window) {
    const obs = new window.IntersectionObserver(() => {
      update();
    }, {
      rootMargin: "-20% 0px -60% 0px",
      threshold: [0, 0.25, 0.5, 0.75]
    });
    sections.forEach(s => obs.observe(s));
  }

  let ticking = false;
  function onScroll() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", () => {
    onScroll();
    positionResults();
    if (window.updateNavIndicator) window.updateNavIndicator();
  }, { passive: true });

  // Update active state immediately when clicking a nav link
  navLinks.forEach(a => {
    a.addEventListener("click", () => {
      const href = a.getAttribute("href");
      if (href && href.startsWith("#")) {
        setActive(href.slice(1));
      }
    });
  });

  update();
})();

/* ---- Scroll-to-Reveal Animations ---- */
(function initScrollReveals() {
  if (!("IntersectionObserver" in window)) return;
  document.documentElement.classList.add("js-reveal");

  // Mark static section headings & intros with reveal classes
  document.querySelectorAll("section h2, section .lead").forEach(el => {
    el.classList.add("reveal-header");
  });

  const revealObs = new window.IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        obs.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: "0px 0px -30px 0px",
    threshold: 0.1
  });

  function observeReveals() {
    const targets = document.querySelectorAll(
      "#home, .reveal-header:not(.is-revealed), .cls:not(.is-revealed), .card:not(.is-revealed), .manual-card:not(.is-revealed), .car:not(.is-revealed), .practice-eyebrow:not(.is-revealed), .practice-actions:not(.is-revealed), .practice-frame:not(.is-revealed), footer:not(.is-revealed)"
    );
    targets.forEach(el => revealObs.observe(el));
  }

  window.observeReveals = observeReveals;
  observeReveals();
})();
