# Laws

Every rule of the system, one sentence each, by topic. A rule about one component lives in that component's guide instead.

## Page

What a builder writes: the page, its CSS and its markup.

- Page CSS binds --s-* tokens only, never --c-* or --g-*.
- Every var() in page CSS names a token that exists.
- Page CSS carries no color literal.
- Page CSS may scope by a system class but never styles one; a component that has to change changes in xds.css.
- Every xds- class on a page is a shipped component or one of its parts.
- A page is well-formed: its tags nest.
- A page never authors an attribute a record has retired.
- Every asset slot carries its asset: an img has a src, an svg has something to draw.
- Every page that renders components wears .xds-page on its body.
- A page has one visible h1, and it is the page's first heading.
- A template composes shipped components with no page-local classes and no style block, and is registered in templates.json; a page with a vocabulary of its own is not a template.
- Every form control sits in a field, which names it and carries its help and its error.

## Layout

The model every page is made of: ground, container, paper.

- Space is measured from the outside in: what a component adds lives inside its declared number, never on top of it.
- Marks take no space: a stroke, an edge or a shadow moves nothing.
- Vertically, everything fills what holds it.
- A container's width is fill, hug or set, and two side by side are named for the one that is not fill: equal, hug-left, hug-right, set-left, set-right, third-left, third-right.
- A ground is a section: it sits at section level, never inside a container or a paper.
- A ground carries the color, holds its content 32 from the window's side edges (16 at compact) up to the page's content width, and has no vertical padding.
- Every container sits in a ground, has no fill, and holds its content 24 from the color.
- A container stacks its components 16 apart unless data-gap sets another step, and a component's own vertical margin includes that gap.
- Every component that is not itself a section (page chrome, the hero, a ground) sits in a container, never directly on a ground.
- The 24 between a color and its content is paid once: columns inside a host that already paid it pay 24 only at the seam.
- Every slot of a two-container ground is a container, so the 48 seam between the columns is their two insets and nothing else.
- In a two-container ground the rail is the slot that is not fill; it spans the other slots, up to eight, which stack beside it.
- A container in a two-container ground takes every column with data-span="full", for one heading over both columns.
- A set width is one number that stops growing; it takes no breakpoint.
- A navigation rail hugs; a rail with a designed width is set.
- A seam between two grounds of the same polarity draws a 1px divider, except a seam touching the fade ground or running into the vivid one; across a polarity change there is none.
- A paper is a component with a fill: it sits in a container, never directly on a ground, and carries a stroke paired to its own fill.
- A value with no useful wrap (a URL, path, filename, hash, ID or address) truncates at its box; copy wraps at its measure.

## Space

The grid, and the vertical rhythm that answers to type.

- Horizontal space falls on 8, with 4 for precision.

  Right:

  ```text
  tokens/s.json   "type": { "heading-md": { "line-height": { "$value": "32px" } } }   <- 32 is 4x8; a band whose largest line is heading-md hands the band below a seam of 48
  ```


  Wrong:

  ```text
  tokens/g.json   "space": { "10": { "$value": "10px" } }   <- neither 8 nor 4. Two components set 10px apart sit off every line in the page.
  ```

- Every line-height is a multiple of 4.
- Vertical space answers to type: two stacked bands are held apart by 1.5 times the largest line-height of the band above (2 across a polarity change), split evenly between them, and the first and last band pay 1.5 times their own at the page's edge.
- Every line-height the system sets has a rung on the lead ladder.
- The smallest gap between two components is 16, and every layout gap from 16 up is itself a line-height.

## Color

Fills, the ink and strokes they decide, and the packs that swap them.

- There is always a background, and its polarity belongs to its value: a brand step of 10 or under (and page, elevated, sunken) is light, 60 or over is dark.
- Steps 20 to 50 are fills, borders and marks, never grounds.
- The fill directly beneath decides what is painted on it: ink by the fill's polarity, stroke by the fill's role.
- A hover or pressed wash is chosen by the fill it lies on, never by the ground, unless a component fixes its own.
- Every fill carries a stroke paired to it by role (token name), never by color value, unless a component overrides it to mean state, focus or emphasis.
- A surface on the page, sunken, raised and elevated ladder is named for its relationship to what is under it and judged against the surfaces beside it, never against an absolute.
- A brand pack swaps the four brand ramps (primary, vivid, accent, neutral) and nothing else; the status ramps never vary.
- A brand pack is declared with data-theme on <html>.

## Dark

Which components go dark, and where the attribute is written.

- Dark is a variant a component carries with data-surface="dark", never a page mode.

  Right:

  ```text
  <article class="xds-card" data-surface="dark">…</article>                 ← card is dark-capable
  <label class="xds-checkbox">…</label> inside that card                      ← only its label text flips (darkTokens)
  ```


  Wrong:

  ```text
  <input class="xds-input" data-surface="dark">        ← input is light-only: the attribute has no selector, nothing happens
  <body class="xds-page" data-theme="dark">            ← there is no theme; dark is a variant on a component
  ```

- Only a component whose ground lists dark may carry data-surface="dark"; a light-only component stays light on a dark ground, unchanged.
- On a dark ground (dark, brand or vivid) a dark-capable component carries data-surface="dark" itself; the ground's own attribute darkens only the ground.
- data-surface is written on components, never on a section.

## Type

Headings, measure and the rasterization hint.

- The page's first heading is its h1 at display scale, carried by a section-heading at display scale in the opening position, a hero heading, or a prose h1.
- Running text takes the character measure (s.size.measure-text); forms, modals, panels and set containers take a pixel width.
- Text in an all-caps part runs to 24 characters at most.

  Right:

  ```text
  docs/specimens.js   <p class="xds-card__eyebrow">Program</p>                        ← 7 characters, a label
  ```


  Wrong:

  ```text
  docs/specimens.js   <p class="xds-card__eyebrow">Emphasis 4 · feature · 12px · chamfer 12px</p>   ← 42 characters of rectangles
  ```

- Type is antialiased once, by .xds-page, for light and dark alike, and nowhere else.

## Motion

One duration and one curve for every state change.

- Hover, pressed and focus ease on one duration (c.page.motion-state) and one curve (c.page.motion-ease).
- Something opening or arriving eases on the enter curve (c.page.motion-ease-enter), and something leaving on the exit curve (c.page.motion-ease-exit).
- An anchor link travels to its target over one fixed duration, whatever the distance, instead of jumping.
- prefers-reduced-motion stops every transition and animation except the busy spinner, which slows to a quarter of its speed.

## Components

What every component record promises, and the build checks.

- Every component has exactly one family, from the eleven.
- Every component answers a question in CHOOSE.md, and every answer there names a real component, part or value.
- A record carries only the fields its shape names, in the canonical order.
- A record's first sample carries every part its element grammar requires.
- Every xds- class in a sample, a component's or a pattern's, exists in xds.css or xds.js.
- Every attribute a sample authors is accounted for by a record.
- A record never demonstrates an attribute it has retired.
- Every prop a record declares is read by xds.css or xds.js, or named in propDefaults as the base state.

  Right:

  ```text
  registry.json   "layout": { "props": {"data-kind": ["stack","grid"]}, "propDefaults": {"data-kind": "stack"} }   <- grid has a selector; stack is the base state, declared
  ```


  Wrong:

  ```text
  registry.json   "section-opener": { "props": {"data-media": ["trailing","leading"]} }   <- trailing has no selector and is not declared a default
  ```

- A prop holds attribute values only; an optional part goes in optionalParts.
- A pick names a value its prop offers.
- A component that declares a hover or focus state implements it, on itself or on a part its element grammar names.
- Every part a component's element grammar names is styled by the stylesheet, which is where the parts list is derived from.
- An interactive component carries an accessibility checklist, and its sample passes every check on it.
- An open defect or question lives in docket, never in a field that ships.
- A rule that sets cursor:pointer also declares the target's size.
- Every selector can match: a part is reached as a descendant of its block, and two blocks share one element only where the markup puts both on it.

  Right:

  ```text
  components/xds.css   .xds-hero[data-panel="none"] .xds-hero__content   <- a descendant: the content INSIDE a panel-less hero
  ```


  Wrong:

  ```text
  components/xds.css   .xds-hero[data-panel="none"].xds-hero__content    <- one element that is both the hero and its own child. Matches nothing, silently.
  ```

- Every class docs/layout.json names exists in the shipped CSS, and every token it references resolves.
- A specimen carries no color literal outside stand-in imagery marked data-standin="photo".
- A system law is one sentence in index/laws.json, naming the gate that enforces it or none.

## Tokens

The three tiers and how a token is named, for extending the system.

- A g.* value is a literal and references nothing.

  Right:

  ```text
  tokens/g.json   "brand-vivid": { "50": { "$value": "#017097", "$type": "color" } }
  ```


  Wrong:

  ```text
  tokens/g.json   "brand-vivid": { "50": { "$value": "{s.color.action.base}" } }   ← a global that references
  ```

- An s.* value references g.* only.

  Right:

  ```text
  tokens/s.json   "action": { "base": { "$value": "{g.color.brand.vivid.50}" } }
  ```


  Wrong:

  ```text
  tokens/s.json   "action": { "base": { "$value": "#017097" } }                ← a literal in the semantic tier
  tokens/s.json   "action": { "base": { "$value": "{c.button.primary-fill}" } }  ← s reaching down into c
  ```

- A c.* value references s.* only and never carries $dark: the flip lives in s.

  Right:

  ```text
  tokens/c.json   "button": { "primary-fill": { "$value": "{s.color.action.base}" } }
  ```


  Wrong:

  ```text
  tokens/c.json   "button": { "primary-fill": { "$value": "{g.color.brand.vivid.50}" } }   ← skipping the semantic tier
  tokens/c.json   "button": { "primary-fill": { "$value": "…", "$dark": "…" } }      ← $dark belongs on s.*
  ```

- xds.css binds --c-* tokens only.

  Right:

  ```text
  xds.css   .xds-button[data-variant="primary"] { background-color: var(--c-button-primary-fill); }
  ```


  Wrong:

  ```text
  xds.css   .xds-button[data-variant="primary"] { background-color: var(--s-color-action-base); }   ← binds s-
  xds.css   .xds-button[data-variant="primary"] { background-color: #017097; }                      ← a raw value
  ```

- Documentation CSS binds --s-* tokens only.

  Right:

  ```text
  doc.css   .doc-nav { background: var(--s-color-surface-sunken); }
  ```


  Wrong:

  ```text
  doc.css   .doc-nav { background: var(--g-color-brand-gray-3); }      ← documentation reaching g-
  doc.css   .doc-nav { background: var(--c-page-surface); }       ← documentation wearing a component contract
  ```

- Every radius resolves to 0 unless a token in its chain carries $allow-radius; a mark that is circular by definition is a shape, not a radius.

  Right:

  ```text
  tokens/s.json   "radius": { "control": { "$value": "{g.radius.0}" } }
  tokens/s.json   "radius": { "conv-lg": { "$value": "{g.radius.16}", "$allow-radius": true } }   ← the exception is declared
  ```


  Wrong:

  ```text
  tokens/s.json   "radius": { "control": { "$value": "{g.radius.8}" } }   ← 8px with no $allow-radius in its chain
  ```

- Every c.* token is bound by xds.css.

  Right:

  ```text
  tokens/c.json defines c.button.gap   AND   xds.css binds var(--c-button-gap)
  ```


  Wrong:

  ```text
  tokens/c.json defines c.button.shadow   BUT   nothing in xds.css binds --c-button-shadow   ← dead contract, build fails
  ```

- Every var() a shipped declaration reads is set somewhere.
- An unconsumed s.* token or non-ramp g.* token is reported, not failed; spare rungs on a g ramp are expected.

  Right:

  ```text
  g.color.brand.accent.70 is unconsumed → reported as a warning, build passes (ramps keep spare rungs)
  ```


  Wrong:

  ```text
  (never fails) — but a warning that grows every build is a ramp nobody is using; prune or consume it
  ```

- A token-name suffix names a prop value the component exposes (sm, compact, landing), never a loose adjective.
- A c.* token used only as text color is named *-ink.

  Right:

  ```text
  tokens/c.json   "card": { "title-ink": … }   "button": { "inset-inline-md": … }   "input": { "border-disabled": … }
  ```


  Wrong:

  ```text
  tokens/c.json   "card": { "title-color": … }   "button": { "inset-x-md": … }   "input": { "disabled-border": … }
  ```

- Padding is named inset-inline and inset-block, never -x, -y, -top or -bottom.
- A state word (disabled, selected, current, checked, complete, upcoming) is the last word of a token name, never a prefix and never mid-name.
- A component token never re-declares a page-wide binding under its own name (focus-ring, focus-width, focus-offset, hover, pressed, border-width, motion, radius) unless its value differs.

  Right:

  ```text
  xds.css   .xds-card:focus-visible { outline: var(--c-page-focus-width) solid var(--c-page-focus-ring); }
  ```


  Wrong:

  ```text
  tokens/c.json   "card": { "focus-ring": { "$value": "{s.color.focus.ring}" } }   ← the page already binds this for everyone
  ```

- A @media or @container condition names a token, never raw px; the build substitutes the value.
- An undeclared font-weight means 400, so a weight token exists only to deviate, except on elements the browser bolds (h1 to h6, b, strong, th, dt, legend), where a role declares its weight.

  Right:

  ```text
  tokens/c.json   "card": { "body-font-family": ... } and NO body-weight       <- 400, the default, correctly unstated
  ```


  Wrong:

  ```text
  tokens/c.json   "card": { "body-weight": {"$value": "{s.font.weight.regular}"} }   <- restates the default; one more thing to keep true
  ```

- A stroke token is named for its job: a border surrounds a fill and pairs to it, a divider separates two things, an edge is one-sided and carries state.
- "Rule" names a law of the system, never a line.
- A token drawn on one side only is a divider, not a border.
- The neutral is one ramp, g.color.brand.gray.
- Every token carries a $type.
