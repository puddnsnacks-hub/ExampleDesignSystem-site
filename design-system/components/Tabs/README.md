# Tabs

Peer views of one subject, one visible at a time, on a horizontal rail.

**Class** `.xds-tabs` · **Family** wayfinding, the user goes · **Font** ui · **Ground** light only: stays light on a dark ground

## Markup

Element: `div > div.__list[role=tablist] > button.__tab[role=tab][aria-controls](span.__index? + text) x n; div.__panel[role=tabpanel][aria-labelledby] x n`

```html
<div class="xds-tabs" data-numerals><div class="xds-tabs__list" role="tablist"><button class="xds-tabs__tab" role="tab" aria-selected="true" aria-controls="p1"><span class="xds-tabs__index">01</span>One</button><button class="xds-tabs__tab" role="tab" aria-selected="false" aria-controls="p2"><span class="xds-tabs__index">02</span>Two</button></div><div class="xds-tabs__panel" role="tabpanel" id="p1">One.</div><div class="xds-tabs__panel" role="tabpanel" id="p2" hidden>Two.</div></div>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `__tab[aria-disabled]` | `true` | — |
| `data-numerals` | `(present)` | — |

## Optional parts

`index`

## States

rest · hover · selected · focus-visible · disabled

## Never

Never author these:

- `[data-fold]`
- `[data-overflow]`
- `[data-numerals-off]`

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `__list[role=tablist]` | 1.3.1, 4.1.2 |
| check | `__tab[role=tab]` | 4.1.2 |
| check | `__panel[role=tabpanel]` | 1.3.1, 4.1.2 |
| behavior | `tabs.wire` | 1.3.1, 4.1.2 |
| behavior | `tabs.roving` | 2.1.1, 2.4.3 |
| behavior | `tabs.home-end` | 2.1.1 |
| behavior | `tabs.both-arrows` | 2.1.1 |
| behavior | `tabs.disabled` | 4.1.2 |
| behavior | `tabs.no-script` | 2.1.1 |
| behavior | `tabs.fold-trigger` | 4.1.2 |
| behavior | `tabs.fold-roles` | 4.1.2 |
| behavior | `tabs.overflow` | 1.3.1, 4.1.2 |
| behavior | `tabs.held-focus` | 2.4.3 |

## Behavior

What `components/bundle.js` does for it. A line marked CSS is the stylesheet's work.

```text
tabs                                                      .xds-tabs
SELECT    Roving tabindex. Arrow keys move selection and follow focus.  #tabs.roving
  key ArrowRight|ArrowDown       → select next enabled tab, wrapping
  key ArrowLeft|ArrowUp          → select previous enabled tab, wrapping
  key Home / End                 → select first / last enabled      #tabs.home-end
  click a tab                    → select it. From a popover, also close
                                   it and focus its trigger
  every selection                → aria-selected and tabindex on every tab,
                                   hidden on the panels, then fire
                                   `xds:tabchange` on root
  selecting a tab held in a shut __held
                                 → focus goes to __more, which already wears
                                   its name, never to a hidden button  #tabs.held-focus
WIRE      A tab's panel is its aria-controls target, else the panel at its
          index. The tab gets aria-controls, the panel aria-labelledby and  #tabs.wire
          tabindex=0 unless it has one. First selection: the
          aria-selected=true tab, else the first enabled.
¬         Both arrow pairs work on every orientation.               #tabs.both-arrows
¬         A tab with aria-disabled=true is skipped by the arrows, and a
          click on it does nothing.                                 #tabs.disabled
¬         Without script nothing is wired: each tab is a button in the Tab
          order that selects nothing, and a panel shows unless the author
          wrote hidden on it - an authored hidden panel stays hidden.  #tabs.no-script
OVERFLOW  ¬ The rail never scrolls sideways: it clips on the inline axis, and
          this ladder is what happens instead. Measured against the rail's
          real width, never guessed. Every pass starts from the whole rail
          (numerals on, nothing held) and takes a step only if the one
          before did not fit:
  1  data-numerals-off, when the root carries data-numerals. The numerals
     cost ~40px a tab and they are ornament, so they go before a single
     tab name does.
  2  data-overflow := on. Hold the last 3 tabs in __held behind __more; keep
     taking one more from the tail while it still does not fit. The fit
     reserves c.tabs.overflow-min-inline for __more, never its rendered
     width, so the choice cannot chase its own output.
  3  THE FLOOR: if no tab can stay on the rail, OR the held names cannot
     keep 3 letters each, take the whole rail instead — data-fold := on,
     data-overflow removed, __list becomes a .xds-menu of .xds-menu__item
     rows, numerals restored.
     At 480px eight names came out at one letter each. That is texture, not
     names, so the split has stopped buying anything.
     ¬ Folded, the tablist and its tabs only gain classes (.xds-menu,
     .xds-menu__item) and keep their roles; the menu script does not
     bind to them (no role=menu).                                   #tabs.fold-roles
BUILT AT RUNTIME
  __fold-wrap / __fold / __fold-label   as in-page-nav. __fold's
                        aria-controls := the tablist; no aria-haspopup  #tabs.fold-trigger
  __overflow    div     role=presentation, appended inside the tablist  #tabs.overflow
  __more        button  also carries .xds-select__trigger. It fills what the
                        rail leaves
  __more-label  span    inside __more
  __held        div     .xds-menu, role=presentation, inside __overflow. A
                        held tab moves in and wears .xds-menu__item
  a hidden ruler span wearing __more's own type, so the letter count is
  measured and not guessed
LABELS    __fold-label := the selected tab's content, else the first tab's.
          __more-label := the held tab that is selected; if none is selected,
          every held name, numeral stripped, cut to the SAME letter count
          and joined " · ". The count is the most letters that fit __more's
          real width, computed from the held names always, never from the
          selection, so choosing a tab cannot change what fits.
HOLD      Re-append every held tab each pass, in index order. Appending only
          the newly-held ones left them stacked after the ones already there.
EVENTS
  click __fold / __more          → toggle that popover
  key ArrowDown|ArrowUp|Enter|Space on either trigger
                                 → open, focus the selected tab in it, else
                                   its first
  key Escape                     → close, refocus · key Tab → close, ¬refocus
  click outside root             → close, ¬refocus
  xds:tabchange                  → repaint whichever label is showing
¬         Arrows inside a popover select and repaint only. They must not
          close it: the arrows select as they move, and closing would slam
          the popover shut on the first press. Committing closes it — and
          <button> fires click for Enter and Space, so the click handler
          already covers both.
RESIZE    Remeasure when the root's size changes (ResizeObserver) and on
          document.fonts.ready, at most once per animation frame.
```

## Tokens

Binds 24 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-tabs-font-family` | `--s-font-family-ui` | Outfit |
| `--c-tabs-weight` | `--s-font-weight-medium` | 500 |
| `--c-tabs-font-size` | `--s-type-ui-lg-size` | 15px |
| `--c-tabs-line-height` | `--s-type-ui-lg-line-height` | 20px |
| `--c-tabs-tracking` | `--s-type-ui-lg-tracking` | 0.1px |
| `--c-tabs-height` | `--s-size-control-md` | 40px |
| `--c-tabs-inset-inline` | `--s-space-base` | 16px |
| `--c-tabs-gap` | `--s-space-xs` | 4px |
| `--c-tabs-ink` | `--s-color-text-secondary` | #4c453f · dark #e8dfda |
| `--c-tabs-ink-selected` | `--s-color-text-primary` | #262321 · dark #fff7f2 |
| `--c-tabs-rail` | `--s-color-border-vivid-faint` | #a1e2f7 · dark #003244 |
| `--c-tabs-rail-width` | `--s-border-width-hairline` | 1px |
| `--c-tabs-indicator` | `--s-color-emphasis-selected-edge` | #017097 · dark #d69e6e |
| `--c-tabs-indicator-width` | `--s-border-width-heavy` | 3px |
| `--c-tabs-ink-disabled` | `--s-color-text-disabled` | #988b80 |
| `--c-tabs-index-font-family` | `--s-font-family-code` | Geist Mono |
| `--c-tabs-index-font-size` | `--s-type-code-md-size` | 12px |
| `--c-tabs-index-ink` | `--s-color-accent-deep` | #452b0e · dark #edbf98 |
| `--c-tabs-index-gap` | `--s-space-base` | 16px |
| `--c-tabs-fold-list-offset` | `--s-space-xs` | 4px |
| `--c-tabs-fold-list-max-height` | `--s-size-measure-ui` | 384px |
| `--c-tabs-fold-elevation` | `--s-elevation-overlay` | 200 |
| `--c-tabs-overflow-min-inline` | `--s-size-aside-nav` | 256px |
| `--c-tabs-overflow-gap` | `--s-space-xs` | 4px |
