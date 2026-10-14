# InPageNav

“On this page”: links to anchors within this page, on a sticky rail.

**Class** `.xds-in-page-nav` · **Family** wayfinding, the user goes · **Font** ui · **Ground** light and dark: carries `data-surface="dark"`

## Markup

Element: `nav[aria-label] > p.label + ul.list > li > a.link (+ nested ul for h3s) — xds.js inserts button.fold inside div.fold-wrap`

```html
<nav class="xds-in-page-nav" aria-label="On this page"><p class="xds-in-page-nav__label">On this page</p><ul class="xds-in-page-nav__list"><li><a class="xds-in-page-nav__link" href="#s1" aria-current="true">Overview</a></li><li><a class="xds-in-page-nav__link" href="#s2">Eligibility</a><ul class="xds-in-page-nav__list"><li><a class="xds-in-page-nav__link" href="#s2a">Who can apply</a></li></ul></li></ul></nav>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `data-surface` | `dark` | — |
| `__link[aria-current]` | `true` | — |
| `data-side` | `end` | `start` |

## Which value

- `data-side`
  - `end`: the rail is the band's right-hand slot

## States

rest · hover · active · current · focus-visible · folded (compact)

## Placement

- **in**: container
- **on**
  - ground[data-container]
  - paper[data-container]
- **gate**: P29

## Never

Never author these:

- `[data-sticky]`
- `[data-fold]`

## Patterns

- **direct-child-of-the-slot** — The nav is a DIRECT child of the ground's slot. An element between them - an <aside>, a wrapper div - stops the slot stretching, and a rail that does not stretch cannot travel: position:sticky computes, and moves nothing.
- **sticky-is-not-an-attribute** — Sticky is the component, not an option. There is nothing to author. If the rail is not sticking, the nesting is wrong, not the markup on the nav.

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `[aria-label]` | 1.3.1, 2.4.1 |
| check | `__link[href]` | 2.4.1 |
| behavior | `in-page-nav.current` | 1.3.1, 2.4.8 |
| behavior | `in-page-nav.no-script` | 2.1.1 |
| behavior | `in-page-nav.fold-trigger` | 4.1.2 |
| behavior | `all.escape` | 2.1.1, 2.4.3 |
| behavior | `all.tab-closes` | 2.4.3 |
| behavior | `in-page-nav.choose` | 2.4.1, 2.4.3 |

## Behavior

What `components/bundle.js` does for it. A line marked CSS is the stylesheet's work.

```text
in-page-nav                                               .xds-in-page-nav
STICKY    The rail sticks, always: position:sticky at --_xds-header-height
          + c.in-page-nav.sticky-gap. There is nothing to author.
          The slot holding the nav stretches (ground[data-container] or
          paper[data-container] > slot > nav), so the rail has its whole
          band to travel in. At ≤bp that ground becomes a flex column and
          the slot display:contents, so the folded trigger keeps the band
          as its containing block and stays pinned under the header.
¬         A grid item can only stick inside its own grid area; a flex item's
          containing block is the whole flex container. Anything between the
          slot and the nav stops the stretch: sticky computes and moves
          nothing. Nothing errors. P29 catches it.
BUILT AT RUNTIME
  __fold-wrap   div     inserted before __list, and __list moves into it.
                        Permanent, so the popover always has a positioning
                        context. Inert when unfolded.
  __fold        button  also carries .xds-select__trigger — the DS select,
                        not the native one. aria-controls := __list  #in-page-nav.fold-trigger
  __fold-label  span    inside __fold
STATE     data-fold=on on root · aria-expanded on __fold
          aria-current=true on exactly one __link
EVENTS
  viewport ≤bp                   → data-fold := on, __list hidden
  viewport > bp                  → data-fold removed, __list shown,
                                   aria-expanded := false
  click __fold                   → toggle. On open, focus the aria-current
                                   link, else the first
  key ArrowDown|ArrowUp|Enter|Space on __fold   → open
  key Escape in __list, folded   → close, refocus __fold
  key Tab in __list, folded      → close, ¬refocus
  click a __link, folded         → close, ¬refocus; the page travels (page,
                                   ANCHOR). Choosing commits: without this
                                   the popover stays open over the very
                                   section the page just traveled to  #in-page-nav.choose
  click outside root             → close, ¬refocus
¬         The fold is a breakpoint, not a measurement: a matchMedia on
          --c-page-breakpoint-compact, the width the two-container ground
          collapses at. Tabs measure their rail; this does not.
CURRENT   The line is the bottom of the sticky header, --_xds-header-height.
          aria-current := the target whose section has passed the line and  #in-page-nav.current
          sits closest to it; above the first section, the first. A target's
          top is its container's or paper's, and when one container holds
          two targets the first in document order claims it.
          An IntersectionObserver (rootMargin -line 0 0 0) and a scroll
          sampler, once per animation frame, both repaint. The observer is
          re-armed on resize and on document.fonts.ready.
LABEL     __fold-label := the current link's text, else the first link's,
          else the __label's text, else "On this page".
¬         The fold is layout and must NOT depend on the observer. A nav with
          one mistyped href, or one whose sections are absent, still folds.
          It used to bail early and kept the full rail at compact.
¬         Without script there is no fold, and the author's aria-current
          stands.                                                   #in-page-nav.no-script
```

## Tokens

Binds 33 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-in-page-nav-font-family` | `--s-font-family-ui` | Outfit |
| `--c-in-page-nav-font-size` | `--s-type-ui-sm-size` | 12px |
| `--c-in-page-nav-line-height` | `--s-type-ui-sm-line-height` | 16px |
| `--c-in-page-nav-tracking` | `--s-type-ui-sm-tracking` | 0.1px |
| `--c-in-page-nav-label-font-size` | `--s-type-ui-xs-size` | 11px |
| `--c-in-page-nav-label-line-height` | `--s-type-ui-xs-line-height` | 16px |
| `--c-in-page-nav-label-tracking` | `--s-font-tracking-caps` | 0.3px |
| `--c-in-page-nav-label-weight` | `--s-font-weight-medium` | 500 |
| `--c-in-page-nav-label-ink` | `--s-color-text-tertiary` | #6a5e55 · dark #b7aea6 |
| `--c-in-page-nav-label-gap` | `--s-space-sm` | 8px |
| `--c-in-page-nav-rail` | `--s-color-border-divider` | #b7aea6 · dark #4f6780 |
| `--c-in-page-nav-rail-width` | `--s-border-width-hairline` | 1px |
| `--c-in-page-nav-link-ink` | `--s-color-text-secondary` | #4c453f · dark #e8dfda |
| `--c-in-page-nav-link-ink-current` | `--s-color-text-primary` | #262321 · dark #fff7f2 |
| `--c-in-page-nav-link-weight-current` | `--s-font-weight-medium` | 500 |
| `--c-in-page-nav-item-inset-block` | `--s-space-base` | 16px |
| `--c-in-page-nav-item-inset-inline` | `--s-space-base` | 16px |
| `--c-in-page-nav-indicator` | `--s-color-emphasis-selected-edge-primary` | #017097 · dark #afc6de |
| `--c-in-page-nav-indicator-width` | `--s-emphasis-edge-2` | 3px |
| `--c-in-page-nav-sub-inset` | `--s-space-base` | 16px |
| `--c-in-page-nav-max-width` | `--s-size-measure-ui` | 384px |
| `--c-in-page-nav-item-inset-block-sub` | `--s-space-md` | 12px |
| `--c-in-page-nav-item-surface-current` | `--s-color-surface-selected-primary` | #e7f8fd · dark #4f6780 |
| `--c-in-page-nav-fold-list-offset` | `--s-space-xs` | 4px |
| `--c-in-page-nav-fold-list-max-height` | `--s-size-measure-ui` | 384px |
| `--c-in-page-nav-fold-elevation` | `--s-elevation-overlay` | 200 |
| `--c-in-page-nav-fold-surface` | `--s-color-surface-menu` | #ffffff · dark #151e26 |
| `--c-in-page-nav-fold-border` | `--s-color-border-on-raised` | #d4ceca · dark #1e374f |
| `--c-in-page-nav-fold-item-inset-inline` | `--s-space-md` | 12px |
| `--c-in-page-nav-sticky-gap` | `--s-space-xl` | 24px |
| `--c-in-page-nav-edge-hover` | `--s-color-emphasis-border` | #3cb1de |
| `--c-in-page-nav-edge-width-hover` | `--s-border-width-thick` | 2px |
| `--c-in-page-nav-item-surface-hover` | `--s-color-state-hover-surface` | #ffffff · dark rgb(0 0 0 / 0.08) |
