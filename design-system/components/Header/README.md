# Header

The site header: a utility bar, the main bar, and a mega menu any nav item can open.

**Class** `.xds-header` · **Family** chrome, the page frame · **Font** heading (brand) · ui (everything else) · **Ground** light and dark: carries `data-surface="dark"`

## Markup

Element: `header > div.utility[data-surface=dark]?(ul.utility-links) + div.bar(a.lockup + button.menu + div.drawer(nav + form.search?)) + div.mega[hidden](div.content > div.mega-column(p.mega-heading | a.mega-heading + ul.mega-list > a.mega-link))`

```html
<header class="xds-header"><div class="xds-header__utility" data-surface="dark"><div class="xds-header__content"><ul class="xds-header__utility-links"><li><a class="xds-header__utility-link" href="#">Help</a></li><li><a class="xds-header__utility-link" href="#">Contact</a></li><li><a class="xds-header__utility-link" href="#">Sign in</a></li></ul></div></div><div class="xds-header__bar"><div class="xds-header__content"><a class="xds-header__lockup" href="#"><svg class="xds-header__logo" viewBox="0 0 48 48" aria-hidden="true"><path d="M2 2H12L46 36V46H36L2 12Z"/><path d="M10 28L20 38L12 46H2V36Z"/><path d="M28 10L36 2H46V12L38 20Z"/></svg><span class="xds-header__brand">Example Agency</span></a><button class="xds-header__menu" type="button" aria-label="Menu" aria-expanded="false"><svg class="xds-icon xds-header__menu-open" aria-hidden="true"><use href="#xds-menu"></use></svg><svg class="xds-icon xds-header__menu-close" aria-hidden="true"><use href="#xds-close"></use></svg></button><div class="xds-header__drawer"><nav aria-label="Primary"><ul class="xds-header__nav"><li><a class="xds-header__nav-item" href="#" aria-current="page">About</a></li><li><button class="xds-header__nav-item" type="button" aria-expanded="false" aria-controls="mega-programs">Programs</button></li><li><a class="xds-header__nav-item" href="#">Newsroom</a></li><li><a class="xds-header__nav-item" href="#">Resources</a></li></ul></nav><form class="xds-header__search" role="search"><input class="xds-input" type="search" aria-label="Search" placeholder="Begin typing to search"><button class="xds-button" data-variant="primary" data-icon="only" aria-label="Search"><svg class="xds-icon xds-button__icon" aria-hidden="true"><use href="#xds-search"></use></svg></button></form></div></div></div><div class="xds-header__mega" id="mega-programs" hidden><div class="xds-header__content"><div class="xds-header__mega-column"><p class="xds-header__mega-heading">Aviation</p><ul class="xds-header__mega-list"><li><a class="xds-header__mega-link" href="#">Office of Aviation</a></li><li><a class="xds-header__mega-link" href="#">Aviation consumer protection</a></li><li><a class="xds-header__mega-link" href="#">Aircraft registration</a></li></ul></div><div class="xds-header__mega-column"><p class="xds-header__mega-heading">Highways and roads</p><ul class="xds-header__mega-list"><li><a class="xds-header__mega-link" href="#">Office of Highways</a></li><li><a class="xds-header__mega-link" href="#">Bridge inspection</a></li><li><a class="xds-header__mega-link" href="#">Road safety</a></li><li><a class="xds-header__mega-link" href="#">National Highway System</a></li></ul></div><div class="xds-header__mega-column"><p class="xds-header__mega-heading">Maritime and rail</p><ul class="xds-header__mega-list"><li><a class="xds-header__mega-link" href="#">Office of Rail</a></li><li><a class="xds-header__mega-link" href="#">Office of Maritime Affairs</a></li><li><a class="xds-header__mega-link" href="#">Pipeline and hazmat</a></li></ul></div></div></div></header>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `data-cover` | `(present)` | — |
| `data-surface` | `dark` | — |
| `__utility[data-surface]` | `dark` | — |
| `__nav-item[aria-expanded]` | `true` · `false` | — |
| `__nav-item[aria-current]` | `page` | — |
| `data-open` | `true` · `false` | `false` |

## Which value

- `data-cover`
  - `(present)`: main opens with a hero at 16-9 or 4-3, never 1-1
- `data-surface`
  - `dark`: over a cover, where light glass cannot hold 4.5:1

## Composes

`input` · `button`

## States

rest · nav hover · nav current · nav expanded (mega open) · focus-visible · shelf: nav on the strip · gated: drawer closed / open

## Placement

- **in**: body
- **before**: main

## How many

- **per**: page
- **min**: 1
- **max**: 1
- **of**: .xds-header__utility-link
- **per**: .xds-header__utility
- **min**: 1

## Never

Never author these:

- `[data-size]`
- `[data-gate]`
- `[data-shelf]`
- `[data-past-cover]`

## On a dark surface

Parts that go dark: `utility`.
Parts that keep a light fill inside a dark component: `.xds-header[data-surface="dark"] >.xds-header__mega`.

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `__mega => has __nav-item[aria-expanded][aria-controls]` | 4.1.2 |
| check | `__mega[id]` | 4.1.2 |
| check | `__mega[hidden]` | 4.1.2 |
| check | `input[aria-label]` | 4.1.2 |
| check | `__search => has button[aria-label]` | 1.1.1, 4.1.2 |
| check | `__menu[aria-label]` | 1.1.1, 4.1.2 |
| behavior | `header.mega-toggle` | 4.1.2 |
| behavior | `header.mega-escape` | 2.1.1, 2.4.3 |
| behavior | `header.menu-state` | 4.1.2 |
| behavior | `header.drawer` | 2.4.3 |
| behavior | `header.drawer-escape` | 2.1.1, 2.4.3 |
| behavior | `header.drawer-gate` | 4.1.2 |
| behavior | `header.drawer-headings` | 1.3.1 |
| behavior | `header.no-script` | 2.1.1 |
| review | The bar's text holds 4.5:1 over the cover photograph behind it; pair data-cover with data-surface="dark" when the light glass does not. | 1.4.3 |

## Behavior

What `components/bundle.js` does for it. A line marked CSS is the stylesheet's work.

```text
header                                                    .xds-header
PUBLISHES --_xds-header-height on the document element, in px, via a
          ResizeObserver, while the header is sticky. Any page may read it;
          only xds.js writes it.
¬         A measurement is not a design decision, so this is a private
          property and NEVER a token. That says who OWNS the value - the
          header measures it, nobody declares it - and nothing about who may
          read it. xds.css has read it since the in-page-nav shipped. Read
          it; never write it, and never re-measure the header.
¬         No token states the header's height. 90px = 33 utility + 57 bar at
          wide; 78px = 33 + 45 at compact. Both are the sum of padded bars.
COVER     data-cover on root: the bar is LAYERED ON the hero's photograph,
          not stacked above it. xds.css pulls main up by --_xds-header-height,
          so the photograph's top edge is the top of the window, and brings
          the content of main's first hero child back down by the same
          measure. The bar is translucent while the cover is behind it.
  the cover's bottom edge reaches the bar
                                 → data-past-cover on root; the bar goes
                                   opaque
  scrolling back up past it      → data-past-cover removed
          One IntersectionObserver on the cover - not a scroll listener, not
          a page-supplied sentinel - its rootMargin re-armed from the
          measurement that publishes the height, so the trip wire and the bar
          cannot drift apart.
¬         A Z relationship, not a flow one. A bar with the photograph
          beginning BELOW it is not a cover and must not carry the prop - the
          glass would composite over the white page ground and read as slate.
¬         The page writes no CSS for a cover and measures nothing: no negative
          margin, no z-index, no position, no sentinel element, no scroll
          listener.
MEGA      One panel open at a time. An open panel overlays the page from the
          header's bottom edge: nothing below the header moves, and the
          published height does not change.
  click a nav item with a panel  → toggle it: shown, aria-expanded true on
                                   its item; every other panel hidden,
                                   aria-expanded false              #header.mega-toggle
  key Escape anywhere in the document
                                 → close the open panel, focus its nav item
                                   (not while data-open="true")     #header.mega-escape
  a panel opens with slack       → its columns sit under the nav item that
                                   opened it (--_mega-anchor, measured)
¬         A click outside does not close the panel; only a nav item and
          Escape do.
SHELF     MEASURED, not a breakpoint. With data-gate="measuring" the bar row
  AND     is read unfolded, at max-content, and the result stamped on root.
  GATE    Three stages:
  the row holds lockup + nav +   → data-gate="off", no data-shelf
  the search at its floor
  it does not, but the top row   → data-gate="off", data-shelf="on": the nav
  holds lockup + a hugging         drops to a strip under the bar; the
  search or CTA and the nav        search or CTA hugs and stays in the top
  fits one shelf row               row
  otherwise                      → data-gate="on": the menu button shows;
                                   the nav and the search go into the drawer
  the header resizes and the     → measure again
  row's width changed, or
  document.fonts.ready
¬         One number could not serve every header: a fixed 900 was 174px
          early for one page and 218px late for another, which is where that
          page's 92px overflow at 901 came from.
¬         "measuring" belongs to neither the fold rules nor the no-script
          floor, so the row is measured as it would be with room to spare.
          Removing the attribute instead reads a FOLDED state and puts the
          gate 275px late.
¬         The search never shrinks: its width and its floor are one rung. It
          leaves the top row only at the gate, into the drawer, where it comes
          first. Hugging is max-content: the search asks for what its own
          content needs.
¬         The row's width is a function of the face, and the fallback face is
          not the shipped one: hence the second read on fonts.ready.
¬         Without script there is no gate: while the header is at or under
          the compact breakpoint, an unmeasured header hides the search and
          stacks the nav under the bar, visible. Not a hamburger: a menu
          button whose script never arrives is navigation locked behind a
          control that cannot open.                                 #header.no-script
INSETS    the header at or under --c-page-breakpoint-compact → padding, bar
          height, logo and brand size step to compact, independent of
          data-gate. CSS
DRAWER    while data-gate="on"
  data-gate turns on             → each mega panel moves into its nav item's
                                   <li> and flows there as a nested list
  click the menu button          → toggle data-open on root and aria-expanded
                                   on the button; opening focuses the
                                   drawer's first input, link or button  #header.drawer
  key Escape while open          → close, refocus the menu button   #header.drawer-escape
  data-gate turns off            → data-open := false; every mega panel
                                   returns to its place in the DOM  #header.drawer-gate
¬         In the drawer each mega column keeps its heading above its
          list: hiding the headings left the nested lists unlabeled. CSS  #header.drawer-headings
STATE     aria-expanded on each nav item with a panel and on the menu button ·
          aria-controls on the menu button · data-open on root · data-gate,  #header.menu-state
          data-shelf and data-past-cover written by the script, never
          authored
```

## Tokens

Binds 87 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-header-utility-surface` | `--s-color-surface-sunken` | #f7f5f5 · dark #12151a |
| `--c-header-utility-divider` | `--s-color-border-vivid` | #017097 · dark #3cb1de |
| `--c-header-utility-inset-block` | `--s-space-xs` | 4px |
| `--c-header-utility-font-family` | `--s-font-family-ui` | Outfit |
| `--c-header-utility-font-size` | `--s-type-ui-sm-size` | 12px |
| `--c-header-utility-line-height` | `--s-type-ui-sm-line-height` | 16px |
| `--c-header-utility-tracking` | `--s-type-ui-sm-tracking` | 0.1px |
| `--c-header-utility-weight` | `--s-font-weight-medium` | 500 |
| `--c-header-utility-ink` | `--s-color-text-primary` | #262321 · dark #fff7f2 |
| `--c-header-utility-gap` | `--s-space-base` | 16px |
| `--c-header-surface` | `--s-color-surface-bar` | #ffffff · dark #151e26 |
| `--c-header-surface-cover` | `--s-color-surface-glass` | rgb(255 255 255 / 0.8) · dark rgb(21 30 38 / 0.8) |
| `--c-header-divider` | `--s-color-border-divider-soft` | #d4ceca · dark #1e374f |
| `--c-header-height` | `--s-size-control-lg` | 48px |
| `--c-header-inset-inline` | `--s-space-2xl` | 32px |
| `--c-header-inset-block` | `--s-space-xs` | 4px |
| `--c-header-inset-block-cover` | `--s-space-base` | 16px |
| `--c-header-content-max-width` | `--s-size-measure-page` | 1440px |
| `--c-header-gap` | `--s-space-2xl` | 32px |
| `--c-header-logo-size` | `--s-size-icon-xl` | 32px |
| `--c-header-logo-size-cover` | `--s-size-control-lg` | 48px |
| `--c-header-logo-fill` | `--s-color-text-primary` | #262321 · dark #fff7f2 |
| `--c-header-brand-font-family` | `--s-font-family-heading` | Lato |
| `--c-header-brand-font-size` | `--s-type-ui-xl-size` | 16px |
| `--c-header-brand-weight` | `--s-font-weight-bold` | 700 |
| `--c-header-brand-ink` | `--s-color-text-primary` | #262321 · dark #fff7f2 |
| `--c-header-brand-gap` | `--s-space-md` | 12px |
| `--c-header-nav-gap` | `--s-space-xl` | 24px |
| `--c-header-nav-font-family` | `--s-font-family-ui` | Outfit |
| `--c-header-nav-font-size` | `--s-type-ui-md-size` | 13.5px |
| `--c-header-nav-line-height` | `--s-type-ui-md-line-height` | 20px |
| `--c-header-nav-weight` | `--s-font-weight-medium` | 500 |
| `--c-header-nav-tracking` | `--s-type-ui-md-tracking` | 0.1px |
| `--c-header-nav-ink` | `--s-color-text-primary` | #262321 · dark #fff7f2 |
| `--c-header-nav-indicator` | `--s-color-emphasis-selected-edge` | #017097 · dark #d69e6e |
| `--c-header-nav-indicator-width` | `--s-border-width-heavy` | 3px |
| `--c-header-nav-indicator-gap` | `--s-space-xs` | 4px |
| `--c-header-nav-chevron-size` | `--s-size-icon-sm` | 16px |
| `--c-header-search-width` | `--s-size-measure-ui-compact` | 240px |
| `--c-header-search-min-width` | `--s-size-measure-ui-compact` | 240px |
| `--c-header-shelf-surface` | `--s-color-surface-sunken` | #f7f5f5 · dark #12151a |
| `--c-header-shelf-divider` | `--s-color-border-divider-soft` | #d4ceca · dark #1e374f |
| `--c-header-shelf-inset-block` | `--s-space-sm` | 8px |
| `--c-header-mega-surface` | `--s-color-pinned-surface` | #f7f5f5 |
| `--c-header-mega-surface-on-light` | `--s-color-pinned-surface-elevated-dark` | #1e374f |
| `--c-header-mega-heading-ink-on-light` | `--s-color-pinned-ink-strong-dark` | #fff7f2 |
| `--c-header-mega-link-ink-on-light` | `--s-color-pinned-link-dark` | #cedeee |
| `--c-header-mega-border-on-light` | `--s-color-pinned-border` | #e8dfda |
| `--c-header-mega-divider` | `--s-color-pinned-border` | #e8dfda |
| `--c-header-mega-inset-block` | `--s-space-2xl` | 32px |
| `--c-header-mega-column-gap` | `--s-space-2xl` | 32px |
| `--c-header-mega-stack` | `--s-space-base` | 16px |
| `--c-header-mega-list-gap` | `--s-space-sm` | 8px |
| `--c-header-mega-heading-font-size` | `--s-type-ui-md-size` | 13.5px |
| `--c-header-mega-heading-weight` | `--s-font-weight-medium` | 500 |
| `--c-header-mega-heading-ink` | `--s-color-pinned-ink-strong` | #262321 |
| `--c-header-mega-link-font-size` | `--s-type-ui-md-size` | 13.5px |
| `--c-header-mega-link-line-height` | `--s-type-ui-md-line-height` | 20px |
| `--c-header-mega-link-tracking` | `--s-type-ui-md-tracking` | 0.1px |
| `--c-header-mega-link-ink` | `--s-color-pinned-link` | #00506c |
| `--c-header-elevation` | `--s-elevation-sticky` | 100 |
| `--c-header-compact-inset-inline` | `--s-space-base` | 16px |
| `--c-header-compact-inset-block` | `--s-space-sm` | 8px |
| `--c-header-compact-height` | `--s-size-control-lg` | 48px |
| `--c-header-compact-logo-size` | `--s-size-icon-lg` | 24px |
| `--c-header-compact-brand-font-size` | `--s-type-ui-lg-size` | 15px |
| `--c-header-menu-size` | `--s-size-target-min` | 44px |
| `--c-header-menu-icon-size` | `--s-size-icon-lg` | 24px |
| `--c-header-drawer-surface` | `--s-color-surface-bar` | #ffffff · dark #151e26 |
| `--c-header-drawer-edge` | `--s-color-surface-sunken` | #f7f5f5 · dark #12151a |
| `--c-header-drawer-edge-width` | `--s-emphasis-edge-2` | 3px |
| `--c-header-drawer-inset-block-start` | `--s-space-base` | 16px |
| `--c-header-drawer-inset-block-end` | `--s-space-xl` | 24px |
| `--c-header-drawer-gap` | `--s-space-base` | 16px |
| `--c-header-drawer-row-inset-block` | `--s-space-md` | 12px |
| `--c-header-drawer-row-gap` | `--s-space-md` | 12px |
| `--c-header-drawer-divider` | `--s-color-border-divider` | #b7aea6 · dark #4f6780 |
| `--c-header-drawer-sub-inset-inline` | `--s-space-base` | 16px |
| `--c-header-drawer-sub-inset-block` | `--s-space-md` | 12px |
| `--c-header-drawer-sub-gap` | `--s-space-sm` | 8px |
| `--c-header-drawer-heading-ink` | `--s-color-text-primary` | #262321 · dark #fff7f2 |
| `--c-header-drawer-link-ink` | `--s-color-action-link` | #00506c · dark #cedeee |
| `--c-header-mega-column-max` | `--s-size-aside-nav` | 256px |
| `--c-header-mega-column-min` | `--s-size-column-min` | 180px |
| `--c-header-brand-tracking` | `--s-type-ui-xl-tracking` | 0.1px |
| `--c-header-mega-heading-tracking` | `--s-type-ui-md-tracking` | 0.1px |
| `--c-header-compact-brand-tracking` | `--s-type-ui-lg-tracking` | 0.1px |
