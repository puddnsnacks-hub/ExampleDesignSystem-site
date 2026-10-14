ExampleDesignSystem (code prefix `xds`) is the system as code, running in the browser. Every token, component and page is the working thing, not a picture of it. Tokens come in three tiers, components are HTML and CSS bound to the component tier, and one optional script adds behavior. It is written to be read by machines as closely as by people.

## Use the system

- Load the tokens (`tokens.css`, compiled from `tokens.json`), then `components/bundle.css`, then, for behavior, `components/bundle.js`. Put `class="xds-page"` on `<body>`: it sets the ground, the ink, the focus ring and the antialiasing, once.
- Write components as markup. Use only classes that begin `xds-`. A variant is a `data-*` attribute on the component's root (`<button class="xds-button" data-variant="primary" data-size="md">`); a part is a `__part` class (`.xds-card__title`). Each component's guide lists its props, parts, states, accessibility checks, behavior and the tokens it binds.
- Never write a color, size, radius or font value. Page CSS binds `--s-*` tokens only: `padding: var(--s-space-xl)`, `color: var(--s-color-text-secondary)`. Components bind `--c-*`, and nothing outside the tokens binds `--g-*`. When no token fits, report the gap rather than invent a value.
- `components/bundle.js` is behavior, not components. It inserts the icon sprite and wires the select, tabs, menus, the modal, the header drawer and mega panels, the footer site map, chip and alert dismissal, table sorting and stacked labels, form reveal and eased disclosures. Markup injected after load needs `XDS.init(root)`. A page calls `XDS.toast(message, { status, title, sticky })` and `XDS.modal.open(id)`.
- Dark is a variant a component carries, never a page mode: put `data-surface="dark"` on a dark-capable component (listed under Dark surface). The **Dark surface** theme on this page applies that variant everywhere at once so each token's dark leg can be seen; it is not a mode to build with.
- Choose a component by the user's goal, not its look: the CHOOSE section answers which component, and lists what the system deliberately does not have. The Laws section holds every system rule in one sentence.
- Start a page from a template. The Templates group holds 15 full pages (the page shell, landing, program, article, newsroom, data, form, grant application, search, emergency, assistant and more), each built only from shipped components: copy one and replace the content.

## Content

- Write plain, specific words in sentence case: headings, labels, buttons, menu items.
- A button does something; a link goes somewhere. Name the action on the button and the destination in the link.
- All caps only in the short-label parts (eyebrows, kickers, table heads, stat units), and never more than 24 characters: caps erase the shape of the word.
- An error message says what to do: "Choose how to receive the permit", "You must agree to the terms". The error summary links each message to its field.
- Use American spelling.
- Center a container, never text. The content area is centered between the page margins; the text inside it stays left-aligned.
- Never underline a headline. A linking card marks its title with a trailing pop-out icon, or carries a real button.
- Color and icons never carry meaning alone: every status has its words, its color and its own silhouette.

## Color

- Global ramps (`g-color-*`) hold the literal values: four brand ramps (primary, vivid, accent and gray, the one neutral), five status ramps (emergency, error, warning, success, info), the reserved focus ramp and the overlays. Steps run 5 to 90; gray adds 0, 1, 3 and 100.
- A step's polarity is part of its value: 10 and under is a light ground, 60 and over a dark ground, and 20 to 50 are fills, borders and marks, never grounds.
- Semantic tokens (`s-color-*`) name the job and alias a rung. Each has a light value and a dark-surface value, and the two move as a symmetric pair, each stepping away from its own ground: `s-color-action-link` is vivid/60 on light and primary/20 on dark.
- Surfaces are relational: `s-color-surface-page`; `s-color-surface-raised`, one tone up (cards, inputs, menus); `s-color-surface-sunken`, one tone down (wells, table heads, code); `s-color-surface-elevated`, the most lifted. A border is one step from its own surface: `s-color-border-on-page`, `-on-raised`, `-on-sunken`, `-on-elevated`.
- Ink follows the fill directly beneath it. Body ink is `s-color-text-primary`, headings `s-color-text-heading` (gold on dark), supporting text `s-color-text-secondary`, captions and metadata `s-color-text-tertiary`. Every text token's note gives its measured contrast on the grounds it is read on.
- The primary action is `s-color-action-base`, step 50 on both grounds, labeled in white `s-color-text-on-action`; the accent button mirrors it with `s-color-accent-fill`. The destructive button (`s-color-action-destructive`) lives on light grounds only.
- A hover or pressed wash is chosen by the fill under it, never the ground: black 8% and 16% on a light fill, white on a dark one (`s-color-state-hover`, `s-color-state-pressed`). A filled button always takes black (`s-color-state-hover-fixed`).
- Emphasis is a box and an edge, never a fill: a 1px `s-color-emphasis-border` hairline all round and an outside left edge of 1, 3, 6 or 12px by level (`data-emphasis="1"` to `"4"`; level 4 is a 12px chamfered flag) in `s-color-emphasis-edge`. It is drawn as a shadow, so nothing reflows. Emphasis always sits on a raised surface.
- Use color only with meaning. Status color always rides with its icon and its words.
- `s-color-pinned-*` values never flip. Use them where one part must hold its ground inside the other: a light panel in a dark header, a gold heading on a photograph.

## Type

| role | face | for |
| --- | --- | --- |
| UI | Outfit | anything interactive: controls, labels, metadata, navigation |
| Body | Newsreader | anything that carries a body; the only serif, and the only face meant to be read at length |
| Heading | Lato | headings at reading scale, 18 to 40 |
| Display | Lato | the statement a page is built around, 32 to 72 |
| Code | Geist Mono | figures and fixed-width things: indices, counters, table numerals, literal code |

- IBM Plex Sans and IBM Plex Mono are the documentation voice (`--s-font-family-doc`, `--s-font-family-doc-mono`). Never use them inside a component.
- Type is set in pixels, and every line-height is a multiple of 4. Each style in Typography is a size, a line-height and a tracking together; `.xds-text` with `data-role="body-md"` (or any other style name) sets it in markup.
- An undeclared weight means 400, and that is a decision. Headings and display set 700, controls 500. Weight 500 exists only in Outfit: asking Lato or Newsreader for 500 renders 400.
- Tracking: ui text +0.1px (0 at 24px); reading text 0 up to 16px and −0.1px from 18px; headings tighten to −0.4px at 40px; display plateaus at −0.6px from 48px; code and all caps +0.3px.
- Pick a heading's level from the document's structure and its role from the size you want; they are independent. A page has one h1, at display scale, and it is the first heading.
- Running text takes the character measure `s-size-measure-text` (54ch, about 72 characters). Forms, modals and panels take a pixel width, `s-size-measure-prose`.

## Space and layout

- Horizontal space falls on 8, with 4 for precision: the `s-space-*` ladder. The smallest gap between two components is 16, `s-space-base`.
- A page is grounds stacked in `<main>`. A ground (`.xds-ground`) is a section: it carries the color from edge to edge, holds its content 32 from the window's sides (16 at compact) and has no vertical padding of its own. A container (`.xds-layout[data-kind="container"]`) sits in a ground, has no fill, holds its content 24 from the color and stacks its components 16 apart. A paper (`.xds-paper`) is a component with its own fill and a paired stroke, inside a container.
- Two containers side by side are named for the one that is not fill: `data-container="equal | hug-left | hug-right | set-left | set-right | third-left | third-right"`. The 48 seam between them is their two insets and nothing else.
- Vertical space answers to type: two stacked grounds are held apart by 1.5 times the largest line-height of the ground above (twice across a change of polarity), split evenly between them. `bundle.js` measures the seam; never pad a ground by hand.
- Measures: page content stops at 1440 (`s-size-measure-page`), the centered content area at 1024 (`s-size-measure-feature`), a form or panel at 672 (`s-size-measure-prose`).
- Breakpoints: compact at 900, narrow at 600. Grids drop to two columns at compact and to one at narrow; two-container grounds stack at compact.
- No horizontal scrollers, ever. When something does not fit, wrap it, fold it or cut it. A wide data table or a code block scrolls inside itself; the page never does.

## Shape, stroke and elevation

- Square everywhere: `s-radius-control` and `s-radius-container` are 0. The only exceptions are the conversation family (`s-radius-conv-*`), the step circles (`s-radius-step`) and the radio (`s-radius-radio`).
- Boundaries are 1px hairlines (`s-border-width-hairline`). There are no shadows; elevation is stacking order (`s-elevation-*`).
- Marks take no space: a border, an edge or the focus ring never moves the layout.

## Interaction

- Focus is a 3px ring (`s-focus-width`) drawn outside the box at a 2px gap (`s-focus-gap`) in `s-color-focus-ring`. The focus ramp is reserved for it.
- Targets are at least 24px on wide screens and 44px at compact (`s-size-target-min`). Controls are 40px tall (`s-size-control-md`), and a control's label is part of its target.
- Every state change eases on one duration (`s-motion-fast`, 120ms) and one curve (`s-motion-ease-standard`); arrivals take `s-motion-ease-enter`, departures `s-motion-ease-exit`. An anchor link travels to its target in `s-motion-travel` (360ms) whatever the distance. `prefers-reduced-motion` stops all of it; the busy spinner slows to a quarter speed.
- A disabled control is out of play: not submitted, not focusable. A control that must stay focusable and announced takes `aria-disabled="true"` instead, and `bundle.js` makes it inert.

## Dark surface

Dark is a design element that breaks up a layout and carries hierarchy. These components are dark-capable and carry `data-surface="dark"` themselves: prose, paper, button, link, label, checkbox, switch, chip, divider, field, button-group, card, tile, summary-box, menu, disclosure, accordion, reference-list, gov-banner, breadcrumb, in-page-nav, text, icon, eyebrow, section-heading, pull-quote, stat, section-opener, objective, header, hero, modal, footer. Checkbox, switch, field and reference-list flip only their named parts.

- Every other component is light only and stays light on a dark ground, unchanged: every form control, the alert, table, tabs, steps, toast, the site alert and the whole conversation family. Forms are light only.
- A dark section is a ground: `<section class="xds-ground" data-ground="dark">` (also `brand` and `vivid`). It paints the band and nothing else; each dark-capable component inside it still carries `data-surface="dark"`.
- On dark, body ink is cream and headings are gold. A heading on a dark or photographic ground is a stack: the eyebrow, a short vivid divider (`s-color-emphasis-eyebrow-divider`), then the gold heading.
- Never set `data-surface` on a section, and never put a light-only component's `data-surface="dark"` in markup: it does nothing.

## Iconography

- One set: 41 IBM Carbon marks (Apache 2.0), filled, drawn on a 32-unit grid. `bundle.js` inserts them once as a sprite; draw one with `<svg class="xds-icon" data-size="md" aria-hidden="true"><use href="#xds-search"></use></svg>`. The files are in the Icons asset group.
- Sizes: `data-size="sm | md | lg | xl | 2xl"` is 16, 20, 24, 32 and 48 (`s-size-icon-*`). The 12px rung, `s-size-icon-xs`, is only for a separator between words. `data-inline` sets the mark at 1em on the text baseline.
- A mark takes the color of what it sits in; `data-tone` is the override, not the starting point.
- Status marks never share a silhouette: error is a circle with an X, info a circle with an i, success a circle with a check, warning a triangle with a bar, emergency a hexagon with a bar. `close` is a bare X and never sits in an enclosure. `clear` empties a field; `close` dismisses a thing.
- A mark that repeats the words beside it is decorative: `aria-hidden="true"`. A mark that carries meaning alone takes `role="img"` and an `aria-label` that says what it means ("Opens in a new tab", never "arrow"). An icon-only control names the control, not the mark.
- No emoji, and no icon font.

## Imagery

- Photography is real transportation infrastructure, seen from above and toned in the brand's dark blues: the Photography group.
- Type over a photograph sits on a scrim (`s-color-scrim-dark` under light type, `s-color-scrim-light` under dark type) and takes the pinned inks: `s-color-pinned-heading-dark` for the heading, `s-color-pinned-ink-strong-dark` for the eyebrow and subhead.

## Forms

- Every text input gets its own row. Spacing is the grouping: 16 between fields inside a group, 32 between groups, no boxes.
- Every control sits in a field (`.xds-field`), which names it and carries its help and its error.
- First name before last name. Address line 2 hides behind an unchecked "Add a second address line" checkbox. Card verification asks for ZIP only.
- Multi-page forms: Back (secondary) on the left, Continue (primary) on the right, and "Save and finish later" (tertiary) immediately left of Continue. On the last page Submit takes Continue's place; a form never shows Continue and Submit together.
- The last thing above the actions is a compact, index-less disclosure of clarifying notes about the form's questions.

## Brand packs

A brand pack swaps the four brand ramps, and nothing else: the status, focus and overlay ramps never vary, so contrast and meaning hold in every pack. The system ships one, the **Alternate pack**: `data-theme="alt"` on `<html>`. A pack is declared on `<html>`, once per page.

## Accessibility

- The floor is WCAG 2.2 AA. Every component's guide carries its checklist: `check` items the markup must satisfy, `behavior` items `bundle.js` performs, `app` items the page's own script owns, and `review` items a person judges.
- Every page has a skip link to `<main id="main" tabindex="-1">`, landmarks (`<header>`, `<main>`, `<footer>`) and one h1.

## Files

- `tokens.json`: every global color, every semantic token with its light and dark-surface values, the type styles, spacing, radius, size, stroke, focus, motion, elevation, breakpoints and weights.
- `components/bundle.css`: the component tier (`--c-*`) and the components. `components/bundle.js`: behavior, `window.XDS`.
- `components/<Name>/README.md`: one guide per component. `preview.html`: its live specimen.
- `components/<Name>Template/`: the 15 page templates, each a full page and a short guide to its composition.
- `choosing.md`: CHOOSE, which component by the user's goal. `laws.md`: every system law.
- `fonts/`: the 14 font files. Asset groups: Icons, Logos, Photography.
