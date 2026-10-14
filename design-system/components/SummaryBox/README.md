# SummaryBox

A short recap of what came before: a kicker and a body, with the heavy edge across the top.

**Class** `.xds-summary-box` · **Family** blocks, content contained · **Font** ui (kicker) · body · **Ground** light and dark: carries `data-surface="dark"`

## Markup

Element: `aside > p.kicker + p.body`

```html
<aside class="xds-summary-box" aria-labelledby="summary-box-kicker"><p class="xds-summary-box__kicker" id="summary-box-kicker">In short</p><p class="xds-summary-box__body">The summary.</p></aside>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `data-surface` | `dark` | — |

## States

rest

## Placement

- **last**: section

## Never

Never author these:

- `[data-emphasis]`

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `[aria-labelledby] -> __kicker` | 1.3.1 |
| review | A do/don't pair says which is which in its words, never by the edge color alone. | 1.4.1 |

## Tokens

Binds 17 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-summary-box-surface` | `--s-color-surface-raised` | #ffffff · dark #142536 |
| `--c-summary-box-edge` | `--s-color-emphasis-edge` | #017097 |
| `--c-summary-box-inset` | `--s-space-xl` | 24px |
| `--c-summary-box-stack` | `--s-space-sm` | 8px |
| `--c-summary-box-measure` | `--s-size-measure-text` | 54ch |
| `--c-summary-box-kicker-font-family` | `--s-font-family-ui` | Outfit |
| `--c-summary-box-kicker-font-size` | `--s-type-ui-xs-size` | 11px |
| `--c-summary-box-kicker-line-height` | `--s-type-ui-xs-line-height` | 16px |
| `--c-summary-box-kicker-weight` | `--s-font-weight-medium` | 500 |
| `--c-summary-box-kicker-ink` | `--s-color-accent-base` | #896037 · dark #edbf98 |
| `--c-summary-box-body-font-family` | `--s-font-family-body` | Newsreader |
| `--c-summary-box-body-font-size` | `--s-type-body-sm-size` | 16px |
| `--c-summary-box-body-line-height` | `--s-type-body-sm-line-height` | 24px |
| `--c-summary-box-body-tracking` | `--s-type-body-sm-tracking` | 0 |
| `--c-summary-box-body-ink` | `--s-color-text-primary` | #262321 · dark #fff7f2 |
| `--c-summary-box-kicker-tracking` | `--s-font-tracking-caps` | 0.3px |
| `--c-summary-box-edge-width-top` | `--s-emphasis-edge-3` | 6px |
