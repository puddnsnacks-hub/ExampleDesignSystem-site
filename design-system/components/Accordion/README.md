# Accordion

A list of rows where each prompt IS the content — a question and its answer.

**Class** `.xds-accordion` · **Family** sets, two or more grouped blocks · **Font** heading (title) · body (panel) · **Ground** light and dark: carries `data-surface="dark"`

## Markup

Element: `div > details.item > summary(prompt) + div.panel`

```html
<div class="xds-accordion"><details class="xds-accordion__item"><summary class="xds-accordion__summary"><span class="xds-accordion__prompt">Question</span></summary><div class="xds-accordion__panel">Answer.</div></details></div>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `data-surface` | `dark` | — |
| `__item[open]` | `(present)` | — |

## States

closed · open (panel grows downward) · hover · focus-visible

## Never

Never author these:

- `__item[name]`

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `has <summary>` | 2.1.1, 4.1.2 |

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
accordion      open and close ease in CSS (::details-content,
               c.accordion.motion-expand); the script eases only where the
               selector is unsupported (the <details> block).
```

## Tokens

Binds 23 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-accordion-item-divider` | `--s-color-border-divider-soft` | #d4ceca · dark #1e374f |
| `--c-accordion-item-divider-width` | `--s-border-width-hairline` | 1px |
| `--c-accordion-row-inset-block` | `--s-space-base` | 16px |
| `--c-accordion-row-inset-inline` | `--s-space-md` | 12px |
| `--c-accordion-gap` | `--s-space-md` | 12px |
| `--c-accordion-chevron-box` | `--s-size-icon-lg` | 24px |
| `--c-accordion-chevron-size` | `--s-space-sm` | 8px |
| `--c-accordion-chevron-ink` | `--s-color-action-link` | #00506c · dark #cedeee |
| `--c-accordion-prompt-font-family` | `--s-font-family-heading` | Lato |
| `--c-accordion-prompt-font-size` | `--s-type-heading-xs-size` | 18px |
| `--c-accordion-prompt-line-height` | `--s-type-heading-xs-line-height` | 24px |
| `--c-accordion-prompt-tracking` | `--s-type-heading-xs-tracking` | 0 |
| `--c-accordion-prompt-weight` | `--s-font-weight-regular` | 400 |
| `--c-accordion-prompt-ink` | `--s-color-text-primary` | #262321 · dark #fff7f2 |
| `--c-accordion-panel-inset-block-end` | `--s-space-lg` | 20px |
| `--c-accordion-panel-max-width` | `--s-size-measure-prose` | 672px |
| `--c-accordion-body-font-family` | `--s-font-family-body` | Newsreader |
| `--c-accordion-body-font-size` | `--s-type-body-sm-size` | 16px |
| `--c-accordion-body-line-height` | `--s-type-body-sm-line-height` | 24px |
| `--c-accordion-body-tracking` | `--s-type-body-sm-tracking` | 0 |
| `--c-accordion-body-ink` | `--s-color-text-secondary` | #4c453f · dark #e8dfda |
| `--c-accordion-panel-inset-inline` | `--s-space-2xl` | 32px |
| `--c-accordion-motion-expand` | `--s-motion-fast` | 120ms |
