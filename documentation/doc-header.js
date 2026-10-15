/* The site header, injected into every documentation page that has no header of its own.
   It is the system's own .xds-header; its menus are generated from the manifest, so the menu that lists
   the components cannot fall out of step with them. */
(function () {
  var M = window.XDS_MANIFEST;
  var hasOwnHeader = function () { return !!(document.body && document.body.querySelector(":scope > .xds-header")); };
  var esc = function (s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
  };
  var link = document.querySelector('link[href$="design-system/tokens.css"]');
  var ROOT = link ? link.getAttribute("href").replace(/design-system\/tokens\.css$/, "") : "./";
  var DOCS = ROOT + "documentation/", G = DOCS + "guide/";
  var path = location.pathname;
  var section = path.indexOf("/documentation/guide/") >= 0 ? "guide" :
    path.indexOf("/documentation/") >= 0 ? "components" :
    path.indexOf("/templates/") >= 0 ? "templates" :
    path.indexOf("/How-To-Docs/") >= 0 ? "howto" : "home";
  var LOGO = '<svg class="xds-header__logo" viewBox="0 0 48 48" aria-hidden="true"><path d="M2 2H12L46 36V46H36L2 12Z"/><path d="M10 28L20 38L12 46H2V36Z"/><path d="M28 10L36 2H46V12L38 20Z"/></svg>';
  var NAME_MEMBERS_MAX = 10, NAME_MEMBERS_MIN = 3;

  var buildMasthead = function () {
    var F = (M && M.families) || { order: [], members: {} };
    var title = function (f) { return String(f).charAt(0).toUpperCase() + String(f).slice(1); };
    var fams = F.order.slice(), members = {};
    fams.forEach(function (f) { members[f] = []; });
    Object.keys((M && M.components) || {}).forEach(function (k) {
      var c = M.components[k];
      if (!members[c.family]) { members[c.family] = []; fams.push(c.family); }
      members[c.family].push(c.id);
    });
    fams.forEach(function (f) {
      var rank = (F.members || {})[f] || [];
      var at = function (id) { var i = rank.indexOf(id); return i < 0 ? rank.length : i; };
      members[f].sort(function (a, b) { return at(a) - at(b); });
    });
    var familyColumn = function (f) {
      var ids = members[f], home = DOCS + "index.html#family-" + f;
      return '<div class="xds-header__mega-column" data-family="' + esc(f) + '">' +
        '<a class="xds-header__mega-heading" href="' + home + '">' + esc(title(f) + " · " + ids.length) + "</a>" +
        '<ul class="xds-header__mega-list">' +
        ids.map(function (id, i) {
          return "<li" + (i >= NAME_MEMBERS_MAX - 1 && ids.length > NAME_MEMBERS_MAX ? " hidden" : "") + '><a class="xds-header__mega-link" href="' +
            DOCS + "index.html#c-" + id + '">' + esc(id) + "</a></li>";
        }).join("") +
        "<li data-more" + (ids.length > NAME_MEMBERS_MAX ? "" : " hidden") + '><a class="xds-header__mega-link" href="' + home + '">all ' + ids.length + " →</a></li>" +
        "</ul></div>";
    };
    var column = function (heading, links, href) {
      return '<div class="xds-header__mega-column">' +
        '<a class="xds-header__mega-heading" href="' + href + '">' + esc(heading) + "</a>" +
        '<ul class="xds-header__mega-list">' +
        links.map(function (l) { return '<li><a class="xds-header__mega-link" href="' + l[1] + '">' + esc(l[0]) + "</a></li>"; }).join("") +
        "</ul></div>";
    };
    var megaComponents = '<div class="xds-header__mega" id="xdh-c" hidden><div class="xds-header__content">' +
      fams.filter(function (f) { return members[f].length; }).map(familyColumn).join("") + "</div></div>";
    var GUIDE = [["index.html", "Cover"], ["typography.html", "Typography"], ["color.html", "Color"], ["space.html", "Measure"],
      ["layout.html", "Layout"], ["motion.html", "Motion"], ["components.html", "Components"], ["conversational.html", "Conversational"], ["rules.html", "Rules"]];
    var megaGuide = '<div class="xds-header__mega" id="xdh-g" hidden><div class="xds-header__content">' +
      column("The style guide · " + GUIDE.length, GUIDE.map(function (p) { return [p[1], G + p[0]]; }), G + "index.html") + "</div></div>";
    var lockup = '<a class="xds-header__lockup" href="' + ROOT + 'index.html">' + LOGO + '<span class="xds-header__brand">ExampleDesignSystem</span></a>';
    var hasComponents = !!(M && M.components);
    var nav = [
      ["components", "Components", hasComponents ? null : DOCS + "index.html", hasComponents ? "xdh-c" : null],
      ["guide", "Style guide", null, "xdh-g"],
      ["templates", "Templates", ROOT + "templates/index.html", null],
      ["howto", "How-to", ROOT + "How-To-Docs/index.html", null]
    ].map(function (n) {
      var cur = n[0] === section ? ' aria-current="page"' : "";
      return "<li>" + (n[2]
        ? '<a class="xds-header__nav-item" href="' + n[2] + '"' + cur + ">" + n[1] + "</a>"
        : '<button class="xds-header__nav-item" type="button" aria-expanded="false" aria-controls="' + n[3] + '"' + cur + ">" + n[1] + "</button>") + "</li>";
    }).join("");
    var search = '<form class="xds-header__search" role="search" method="get" action="' + DOCS + 'index.html">' +
      '<input class="xds-input" type="search" name="q" aria-label="Search the system" placeholder="Search the system">' +
      '<button class="xds-button" data-variant="primary" data-icon="only" aria-label="Search" type="submit">' +
      '<svg class="xds-icon xds-button__icon" aria-hidden="true"><use href="#xds-search"></use></svg></button></form>';
    return '<header class="xds-header">' +
      '<div class="xds-header__utility" data-surface="dark"><div class="xds-header__content"><ul class="xds-header__utility-links">' +
      '<li><a class="xds-header__utility-link" href="' + DOCS + 'index.html">Reference</a></li>' +
      '<li><a class="xds-header__utility-link" href="' + ROOT + 'templates/index.html">Templates</a></li>' +
      '<li><a class="xds-header__utility-link" href="' + ROOT + 'How-To-Docs/index.html">How-to</a></li>' +
      "</ul></div></div>" +
      '<div class="xds-header__bar"><div class="xds-header__content">' + lockup +
      '<button class="xds-header__menu" type="button" aria-label="Menu" aria-expanded="false">' +
      '<svg class="xds-icon xds-header__menu-open" aria-hidden="true"><use href="#xds-menu"></use></svg>' +
      '<svg class="xds-icon xds-header__menu-close" aria-hidden="true"><use href="#xds-close"></use></svg></button>' +
      '<div class="xds-header__drawer"><nav aria-label="Primary"><ul class="xds-header__nav">' + nav + "</ul></nav>" + search + "</div>" +
      "</div></div>" + (hasComponents ? megaComponents : "") + megaGuide + "</header>";
  };

  var fitMega = function (mega) {
    if (!mega || mega.hidden) return;
    var cols = [].slice.call(mega.querySelectorAll(".xds-header__mega-column[data-family]"));
    var apply = function (cap) {
      cols.forEach(function (col) {
        var items = [].slice.call(col.querySelectorAll("li:not([data-more])")), more = col.querySelector("li[data-more]");
        var cut = items.length > cap;
        items.forEach(function (li, i) { li.hidden = cut && i >= cap - 1; });
        if (more) more.hidden = !cut;
      });
    };
    for (var cap = NAME_MEMBERS_MAX; cap >= NAME_MEMBERS_MIN; cap--) {
      apply(cap);
      if (mega.getBoundingClientRect().bottom <= window.innerHeight) return;
    }
  };

  var mount = function () {
    if (hasOwnHeader()) return;
    var skip = document.querySelector('a[href^="#"][class*="skip"]');
    var box = document.createElement("div");
    box.innerHTML = buildMasthead();
    var el = box.firstChild;
    if (skip && skip.parentNode === document.body) skip.insertAdjacentElement("afterend", el);
    else document.body.insertAdjacentElement("afterbegin", el);
    if (window.XDS && typeof window.XDS.init === "function") window.XDS.init(el.parentNode || document);
    var mega = el.querySelector("#xdh-c");
    if (mega && window.MutationObserver) {
      new MutationObserver(function () { fitMega(mega); }).observe(mega, { attributes: true, attributeFilter: ["hidden"] });
      window.addEventListener("resize", function () { fitMega(mega); });
    }
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount);
  else mount();
})();
