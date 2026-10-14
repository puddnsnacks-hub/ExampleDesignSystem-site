# Eyebrow

The short orienting line above a headline.

**Class** `.xds-eyebrow` · **Family** content, the user reads · **Font** ui · **Ground** light and dark: carries `data-surface="dark"`

## Markup

Element: `p`

```html
<p class="xds-eyebrow" data-divider>Grants and funding</p>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `data-divider` | `(present)` | — |
| `data-surface` | `dark` | — |

## States

rest

## Never

Never author these:

- `[data-rule]`

## Patterns

- **not-a-hand-built-heading** — Outside prose, an eyebrow directly above an h2 to h6 is a section-heading built by hand. Use section-heading, which owns the eyebrow and heading as one lockup. P11 errors on it.

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| review | An eyebrow directly above the heading it describes sits inside that heading or carries aria-hidden="true". | 1.3.1 |

## Tokens

Binds 10 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-eyebrow-font-family` | `--s-font-family-ui` | Outfit |
| `--c-eyebrow-font-size` | `--s-type-ui-xs-size` | 11px |
| `--c-eyebrow-line-height` | `--s-type-ui-xs-line-height` | 16px |
| `--c-eyebrow-weight` | `--s-font-weight-medium` | 500 |
| `--c-eyebrow-ink` | `--s-color-accent-base` | #896037 · dark #edbf98 |
| `--c-eyebrow-divider` | `--s-color-emphasis-eyebrow-divider` | #75d3f4 |
| `--c-eyebrow-divider-width` | `--s-border-width-thick` | 2px |
| `--c-eyebrow-divider-length` | `--s-space-3xl` | 40px |
| `--c-eyebrow-gap` | `--s-space-sm` | 8px |
| `--c-eyebrow-tracking` | `--s-font-tracking-caps` | 0.3px |
