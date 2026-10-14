# ReferenceList

Numbered sources in two columns, each row opening into its note.

**Class** `.xds-reference-list` · **Family** sets, two or more grouped blocks · **Font** ui (label, count) · code (index, link) · body (citation, summary, quote) · **Ground** light and dark: carries `data-surface="dark"`

## Markup

Element: `section > h2.head(label + count) + div.columns(ol.column x 2 > li > details.item(summary.row(index + citation) + div.note(summary + quote? + a.source)))`

```html
<section class="xds-reference-list"><h2 class="xds-reference-list__head"><span class="xds-reference-list__label">References</span><span class="xds-reference-list__count">15 sources</span></h2><div class="xds-reference-list__columns"><ol class="xds-reference-list__column"><li><details class="xds-reference-list__item"><summary class="xds-reference-list__row"><span class="xds-reference-list__index">1</span><span class="xds-reference-list__citation">Citation.</span></summary><div class="xds-reference-list__note"><p class="xds-reference-list__summary">Summary.</p><blockquote class="xds-reference-list__quote">“Quote.”</blockquote><a class="xds-reference-list__source" href="#">http://source</a></div></details></li></ol><ol class="xds-reference-list__column" start="8"><li><details class="xds-reference-list__item"><summary class="xds-reference-list__row"><span class="xds-reference-list__index">8</span><span class="xds-reference-list__citation">Citation.</span></summary><div class="xds-reference-list__note"><p class="xds-reference-list__summary">Summary.</p><a class="xds-reference-list__source" href="#">http://source</a></div></details></li></ol></div></section>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `data-surface` | `dark` | — |
| `__column[start]` | `(number)` | — |

## Which value

- `data-surface`
  - `dark`: its ground is dark, brand or vivid

## Optional parts

`quote`

## States

closed · open (note rises in) · hover · focus-visible

## Placement

- **in**: container
- **on**: ground
- **last**: main
- **gate**: P32

## Never

Never author these:

- `__item[open]`

## On a dark surface

Only these tokens flip on a dark surface: `surface` · `label-ink` · `count-ink` · `index-ink` · `citation-ink` · `rule` · `note-surface` · `summary-ink` · `quote-ink` · `citation-ink-open` · `index-ink-open` · `link-ink`.
Parts that keep a light fill inside a dark component: `.xds-reference-list__item[open] >.xds-reference-list__row` · `.xds-reference-list__note`.

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `has <summary>` | 2.1.1, 4.1.2 |
| check | `has <ol>` | 1.3.1 |
| check | `has __column[start]` | 1.3.1 |
| behavior | `reference-list.one-open` | 2.1.1, 4.1.2 |
| behavior | `reference-list.head` | 1.3.1 |
| review | The head's heading level follows the page outline. | 1.3.1 |

## Behavior

What `components/bundle.js` does for it. A line marked CSS is the stylesheet's work.

```text
accordion · reference-list · footer sitemap · gov-banner  <details>
          Every details whose class starts xds- and whose stylesheet does not
          ease it: the reference-list items, the gov-banner and the footer's
          sitemap band; the accordion item and the disclosure only where
          ::details-content is unsupported. Elsewhere those two ease in CSS.
OPEN      height 0 → the panel's scroll height, then cleared. overflow hidden
          only while traveling.
CLOSE     the reverse, and `open` is removed on finish, never before — remove
          it first and the panel is gone before it can move.
EVENTS
  click the summary              → animate instead of the native jump
DURATION  --c-page-motion-state, read at run time.
¬         No Escape here. Only the disclosure closes on Escape.
reference-list click a __row, or key Enter|Space on it → toggle that row (the
               native <summary>); opening one closes every other row in the
               list. Open and close ease as the <details> block says.  #reference-list.one-open
               ¬ Escape does not close a row. No hover preview. The list
               itself never collapses: its head is a heading, not a summary.  #reference-list.head
               A link to a reference is the page block's ANCHOR: it travels
               to the reference and focuses it.
```

## Tokens

Binds 48 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-reference-list-head-gap` | `--s-space-3xl` | 40px |
| `--c-reference-list-label-font-family` | `--s-font-family-ui` | Outfit |
| `--c-reference-list-label-font-size` | `--s-type-ui-sm-size` | 12px |
| `--c-reference-list-label-line-height` | `--s-type-ui-sm-line-height` | 16px |
| `--c-reference-list-label-weight` | `--s-font-weight-medium` | 500 |
| `--c-reference-list-label-tracking` | `--s-font-tracking-caps` | 0.3px |
| `--c-reference-list-label-ink` | `--s-color-text-label-accent` | #6a5e55 · dark #edbf98 |
| `--c-reference-list-count-ink` | `--s-color-accent-base` | #896037 · dark #edbf98 |
| `--c-reference-list-count-weight` | `--s-font-weight-regular` | 400 |
| `--c-reference-list-column-gap` | `--s-space-4xl` | 48px |
| `--c-reference-list-row-inset-block` | `--s-space-md` | 12px |
| `--c-reference-list-row-gap-inner` | `--s-space-md` | 12px |
| `--c-reference-list-divider` | `--s-color-border-divider` | #b7aea6 · dark #4f6780 |
| `--c-reference-list-divider-width` | `--s-border-width-hairline` | 1px |
| `--c-reference-list-index-width` | `--s-size-icon-lg` | 24px |
| `--c-reference-list-index-font-family` | `--s-font-family-code` | Geist Mono |
| `--c-reference-list-index-font-size` | `--s-type-code-sm-size` | 11px |
| `--c-reference-list-index-line-height` | `--s-type-code-sm-line-height` | 16px |
| `--c-reference-list-index-ink` | `--s-color-accent-numeral` | #896037 · dark #d49458 |
| `--c-reference-list-citation-font-family` | `--s-font-family-body` | Newsreader |
| `--c-reference-list-citation-font-size` | `--s-type-body-xs-size` | 14px |
| `--c-reference-list-citation-line-height` | `--s-type-body-xs-line-height` | 20px |
| `--c-reference-list-citation-tracking` | `--s-type-body-xs-tracking` | 0 |
| `--c-reference-list-citation-ink` | `--s-color-text-citation` | #4c453f · dark #d4ceca |
| `--c-reference-list-citation-ink-open` | `--s-color-text-on-note-strong` | #262321 · dark #4c453f |
| `--c-reference-list-note-surface` | `--s-color-surface-note` | #ffffff · dark #cedeee |
| `--c-reference-list-note-inset-block` | `--s-space-base` | 16px |
| `--c-reference-list-note-inset-inline` | `--s-space-xl` | 24px |
| `--c-reference-list-note-gap` | `--s-space-md` | 12px |
| `--c-reference-list-summary-font-family` | `--s-font-family-body` | Newsreader |
| `--c-reference-list-summary-font-size` | `--s-type-body-md-size` | 18px |
| `--c-reference-list-summary-line-height` | `--s-type-body-md-line-height` | 28px |
| `--c-reference-list-summary-tracking` | `--s-type-body-md-tracking` | -0.1px |
| `--c-reference-list-summary-ink` | `--s-color-text-on-note` | #4c453f |
| `--c-reference-list-quote-mark` | `--s-color-accent-base` | #896037 · dark #edbf98 |
| `--c-reference-list-quote-mark-width` | `--s-emphasis-edge-2` | 3px |
| `--c-reference-list-quote-inset` | `--s-space-sm` | 8px |
| `--c-reference-list-quote-ink` | `--s-color-text-on-note-soft` | #6a5e55 |
| `--c-reference-list-link-font-family` | `--s-font-family-code` | Geist Mono |
| `--c-reference-list-link-font-size` | `--s-type-code-md-size` | 12px |
| `--c-reference-list-link-line-height` | `--s-type-code-md-line-height` | 20px |
| `--c-reference-list-link-ink` | `--s-color-action-link-on-note` | #017097 · dark #00506c |
| `--c-reference-list-glyph-ink` | `--s-color-accent-soft` | #d69e6e |
| `--c-reference-list-glyph-width` | `--s-space-sm` | 8px |
| `--c-reference-list-glyph-height` | `--s-space-xs` | 4px |
| `--c-reference-list-glyph-inset` | `--s-space-sm` | 8px |
| `--c-reference-list-index-ink-open` | `--s-color-text-on-note` | #4c453f |
| `--c-reference-list-note-bleed` | `--s-space-sm` | 8px |
