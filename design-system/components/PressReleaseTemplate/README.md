# Press release

A press release: eyebrow, heading, the contact and release-number block, the body, and the documents that go with it.

**Template** `press-release.html` · drawn at 1440 · a page, not a component: copy its markup and replace the content.

## Composition

In page order: `skip-link` → `gov-banner` → `header` → `breadcrumb` → `eyebrow` → `prose` → `dl` → `document-link` → `footer`.

## Rules every page keeps

- `class="xds-page"` on `<body>`; the skip link first, then the official-site banner, the site alert when there is one, the header, `<main id="main" tabindex="-1">` and the footer.
- One visible h1, and it is the page's first heading: a display section heading, a hero heading or a prose h1.
- Every section is a ground (`.xds-ground`) and every component sits in a container inside it; never pad a ground by hand.
- Dark sections are grounds with `data-ground="dark"`; each dark-capable component inside carries `data-surface="dark"` itself. Of this page's components, these can: `breadcrumb`, `eyebrow`, `footer`, `gov-banner`, `header`, `prose`.
- No page-local classes and no style block: a template composes shipped components only.
