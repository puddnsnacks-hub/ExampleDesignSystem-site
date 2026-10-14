# SectionHeading

The heading that opens a page or a band, with its eyebrow and lede.

**Class** `.xds-section-heading` · **Family** content, the user reads · **Font** ui (eyebrow) · heading / display (heading) · body (lede) · **Ground** light and dark: carries `data-surface="dark"`

## Markup

Element: `header > (p.xds-eyebrow)? + div.row((h1|h2|h3).heading + .action?) + p.lede?`

```html
<header class="xds-section-heading" data-scale="display"><p class="xds-eyebrow">Eyebrow</p><div class="xds-section-heading__row"><h2 class="xds-section-heading__heading">Statement</h2></div><p class="xds-section-heading__lede">Lede.</p></header>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `data-scale` | `reading` · `display` | `reading` |
| `data-surface` | `dark` | — |

## Which value

- `data-scale`
  - `reading`: a band's heading inside the page
  - `display`: the page title (its h1), or a band's opening statement

## Optional parts

`eyebrow` · `lede` · `action`

## Composes

`eyebrow` · `button`

## States

rest

## Never

Never author these:

- `__heading[data-rung]`

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| review | The heading's level follows the document's outline, never the size it shows. | 1.3.1 |
| review | The action's name works out of context: "View all permits", not "View all". | 2.4.4, 2.4.9 |

## Behavior

What `components/bundle.js` does for it. A line marked CSS is the stylesheet's work.

```text
section-heading                                           .xds-section-heading
FIT       the display heading only: .xds-section-heading[data-scale=display]
          .xds-section-heading__heading. CSS holds each line to
          c.section-heading.headline-measure (40ch). The script counts lines
          and stamps a rung.
  init · resize (150ms after the last) · document.fonts.ready
                                 → remove data-rung from every display
                                   __heading, then measure each one from
                                   the top
  __heading taller than 2 of its own line-heights
                                 → data-rung := 1 (display-sm), then
                                   measure again; still taller →
                                   data-rung := 2 (display-xs) and stop
  own width ≤ --c-page-breakpoint-compact
                                 → the statement starts at display-sm;
                                   data-rung 1 or 2 → display-xs. CSS
  own width ≤ --c-page-breakpoint-narrow
                                 → display-xs at any rung. CSS
¬         A rung only steps DOWN from what the width chose, and display-xs is
          the floor: a heading still over two lines there stays over.
          data-rung is the script's and is never authored. Without script the
          heading keeps the rung its width gives it.
```

## Tokens

Binds 30 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-section-heading-stack` | `--s-space-sm` | 8px |
| `--c-section-heading-divider-display` | `--s-color-emphasis-eyebrow-divider` | #75d3f4 |
| `--c-section-heading-divider-display-width` | `--s-border-width-heavy` | 3px |
| `--c-section-heading-divider-display-length` | `--s-space-5xl` | 64px |
| `--c-section-heading-heading-font-family` | `--s-font-family-heading` | Lato |
| `--c-section-heading-heading-font-size` | `--s-type-heading-lg-size` | 32px |
| `--c-section-heading-heading-line-height` | `--s-type-heading-lg-line-height` | 40px |
| `--c-section-heading-heading-tracking` | `--s-type-heading-lg-tracking` | -0.3px |
| `--c-section-heading-heading-weight` | `--s-font-weight-bold` | 700 |
| `--c-section-heading-heading-ink` | `--s-color-text-heading` | #262321 · dark #edbf98 |
| `--c-section-heading-statement-font-family` | `--s-font-family-display` | Lato |
| `--c-section-heading-statement-font-size` | `--s-type-display-md-size` | 48px |
| `--c-section-heading-statement-line-height` | `--s-type-display-md-line-height` | 52px |
| `--c-section-heading-statement-tracking` | `--s-type-display-md-tracking` | -0.6px |
| `--c-section-heading-lede-font-family` | `--s-font-family-body` | Newsreader |
| `--c-section-heading-lede-font-size` | `--s-type-body-lg-size` | 20px |
| `--c-section-heading-lede-line-height` | `--s-type-body-lg-line-height` | 32px |
| `--c-section-heading-lede-tracking` | `--s-type-body-lg-tracking` | -0.1px |
| `--c-section-heading-lede-ink` | `--s-color-text-secondary` | #4c453f · dark #e8dfda |
| `--c-section-heading-measure` | `--s-size-measure-text` | 54ch |
| `--c-section-heading-action-gap` | `--s-space-xl` | 24px |
| `--c-section-heading-statement-font-size-compact` | `--s-type-display-sm-size` | 40px |
| `--c-section-heading-statement-line-height-compact` | `--s-type-display-sm-line-height` | 44px |
| `--c-section-heading-statement-font-size-narrow` | `--s-type-display-xs-size` | 32px |
| `--c-section-heading-statement-line-height-narrow` | `--s-type-display-xs-line-height` | 36px |
| `--c-section-heading-eyebrow-gap` | `--s-space-md` | 12px |
| `--c-section-heading-eyebrow-ink` | `--s-color-text-section-eyebrow` | #896037 · dark #fff7f2 |
| `--c-section-heading-divider-display-gap` | `--s-space-md` | 12px |
| `--c-section-heading-lede-gap` | `--s-space-lg` | 20px |
| `--c-section-heading-headline-measure` | `--s-size-measure-headline` | 40ch |
