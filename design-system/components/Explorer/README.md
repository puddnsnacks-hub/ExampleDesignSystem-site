# Explorer

A vertical index with the selected entry beside it — a tab set turned on its side.

**Class** `.xds-explorer` · **Family** wayfinding, the user goes · **Font** heading (title) . body (summary) . ui (meta) · **Ground** light only: stays light on a dark ground

## Markup

Element: `div.xds-explorer > div.__index(p.xds-eyebrow[data-divider] + div.__list[role=tablist] > button.__row[role=tab] x n(span.__title, span.__summary?, span.__meta?)) + div.__panel[role=tabpanel] x n(h3.__heading + content)`

```html
<div class="xds-explorer"><div class="xds-explorer__index"><p class="xds-eyebrow" data-divider>Latest</p><div class="xds-explorer__list" role="tablist" aria-orientation="vertical" aria-label="Entries"><button class="xds-explorer__row" role="tab" aria-selected="true" aria-controls="e1" id="er1"><span class="xds-explorer__title">The subject of the row</span><span class="xds-explorer__summary">A line or two the row can carry that a tab label could not.</span><span class="xds-explorer__meta">Source</span></button><button class="xds-explorer__row" role="tab" aria-selected="false" aria-controls="e2" id="er2"><span class="xds-explorer__title">A second subject</span><span class="xds-explorer__summary">Sunken until it is chosen.</span></button></div></div><div class="xds-explorer__panel" role="tabpanel" id="e1" aria-labelledby="er1"><h3 class="xds-explorer__heading">The subject of the row</h3><article class="xds-prose"><p>The entry.</p></article></div><div class="xds-explorer__panel" role="tabpanel" id="e2" aria-labelledby="er2" hidden>The second entry.</div></div>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `__row[aria-selected]` | `true` · `false` | — |

## Composes

`eyebrow`

## States

rest (sunken) · hover · active · focus-visible · selected (raised, no hover wash)

## What it is

vertical index and entry

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `__list[role=tablist][aria-orientation=vertical]` | 1.3.1, 4.1.2 |
| check | `__row[role=tab]` | 4.1.2 |
| check | `__panel[role=tabpanel]` | 1.3.1, 4.1.2 |
| behavior | `explorer.controller` | 2.1.1 |
| behavior | `tabs.roving` | 2.1.1, 2.4.3 |
| behavior | `tabs.home-end` | 2.1.1 |
| behavior | `tabs.wire` | 1.3.1, 4.1.2 |

## Behavior

What `components/bundle.js` does for it. A line marked CSS is the stylesheet's work.

```text
explorer                                                  .xds-explorer
          The tabs controller without the chrome: SELECT and WIRE exactly as
          tabs, keyed off the roles, both arrow pairs moving and selecting.  #explorer.controller
¬         No fold and no overflow. A vertical list cannot run out of width.
  viewport ≤bp                   → one column: the index, then the selected
                                   panel under it. CSS
```

## Tokens

Binds 36 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-explorer-index-width` | `--s-size-measure-aside` | 480px |
| `--c-explorer-index-gap` | `--s-space-base` | 16px |
| `--c-explorer-divider` | `--s-color-border-divider-soft` | #d4ceca · dark #1e374f |
| `--c-explorer-row-inset-block` | `--s-space-base` | 16px |
| `--c-explorer-row-inset-inline` | `--s-space-base` | 16px |
| `--c-explorer-panel-inset` | `--s-space-2xl` | 32px |
| `--c-explorer-stack` | `--s-space-xs` | 4px |
| `--c-explorer-surface-rest` | `--s-color-surface-sunken` | #f7f5f5 · dark #12151a |
| `--c-explorer-surface-current` | `--s-color-surface-raised` | #ffffff · dark #142536 |
| `--c-explorer-panel-surface` | `--s-color-surface-raised` | #ffffff · dark #142536 |
| `--c-explorer-panel-stack` | `--s-space-base` | 16px |
| `--c-explorer-edge` | `--s-color-border-strong` | #988b80 · dark #b7aea6 |
| `--c-explorer-indicator` | `--s-color-emphasis-selected-edge-primary` | #017097 · dark #afc6de |
| `--c-explorer-indicator-width` | `--s-emphasis-edge-4` | 12px |
| `--c-explorer-heading-font-family` | `--s-font-family-heading` | Lato |
| `--c-explorer-heading-font-size` | `--s-type-heading-md-size` | 24px |
| `--c-explorer-heading-line-height` | `--s-type-heading-md-line-height` | 32px |
| `--c-explorer-heading-tracking` | `--s-type-heading-md-tracking` | -0.2px |
| `--c-explorer-heading-weight` | `--s-font-weight-bold` | 700 |
| `--c-explorer-heading-ink` | `--s-color-text-heading` | #262321 · dark #edbf98 |
| `--c-explorer-title-font-family` | `--s-font-family-heading` | Lato |
| `--c-explorer-title-font-size` | `--s-type-heading-sm-size` | 20px |
| `--c-explorer-title-line-height` | `--s-type-heading-sm-line-height` | 24px |
| `--c-explorer-title-tracking` | `--s-type-heading-sm-tracking` | 0 |
| `--c-explorer-title-weight` | `--s-font-weight-bold` | 700 |
| `--c-explorer-title-ink` | `--s-color-text-primary` | #262321 · dark #fff7f2 |
| `--c-explorer-summary-font-family` | `--s-font-family-body` | Newsreader |
| `--c-explorer-summary-font-size` | `--s-type-body-sm-size` | 16px |
| `--c-explorer-summary-line-height` | `--s-type-body-sm-line-height` | 24px |
| `--c-explorer-summary-tracking` | `--s-type-body-sm-tracking` | 0 |
| `--c-explorer-summary-ink` | `--s-color-text-secondary` | #4c453f · dark #e8dfda |
| `--c-explorer-meta-font-family` | `--s-font-family-ui` | Outfit |
| `--c-explorer-meta-font-size` | `--s-type-ui-xs-size` | 11px |
| `--c-explorer-meta-line-height` | `--s-type-ui-xs-line-height` | 16px |
| `--c-explorer-meta-tracking` | `--s-type-ui-xs-tracking` | 0.1px |
| `--c-explorer-meta-ink` | `--s-color-text-tertiary` | #6a5e55 · dark #b7aea6 |
