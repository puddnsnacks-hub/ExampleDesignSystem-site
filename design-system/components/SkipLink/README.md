# SkipLink

The first focusable element on the page, jumping to the main landmark.

**Class** `.xds-skip-link` · **Family** chrome, the page frame · **Font** ui · **Ground** light only: stays light on a dark ground

## Markup

Element: `a[href=#main]`

```html
<a class="xds-skip-link" href="#main">Skip to main content</a>
```

## States

hidden · focus-visible (shown)

## Placement

- **first**: body

## How many

- **per**: page
- **min**: 1
- **max**: 1

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `[href=#main]` | 2.4.1 |
| behavior | `skip-link.focus` | 2.4.1, 2.4.3 |

## Behavior

What `components/bundle.js` does for it. A line marked CSS is the stylesheet's work.

```text
skip-link      no script of its own: its click is the page block's ANCHOR,
               which focuses the target (tabindex=-1 first if needed) with
               preventScroll, so the browser's own jump is not doubled.  #skip-link.focus
```

## Tokens

Binds 13 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-skip-link-font-family` | `--s-font-family-ui` | Outfit |
| `--c-skip-link-font-size` | `--s-type-ui-md-size` | 13.5px |
| `--c-skip-link-line-height` | `--s-type-ui-md-line-height` | 20px |
| `--c-skip-link-tracking` | `--s-type-ui-md-tracking` | 0.1px |
| `--c-skip-link-surface` | `--s-color-surface-raised` | #ffffff · dark #142536 |
| `--c-skip-link-ink` | `--s-color-action-outline` | #017097 · dark #afc6de |
| `--c-skip-link-weight` | `--s-font-weight-medium` | 500 |
| `--c-skip-link-inset-block` | `--s-space-md` | 12px |
| `--c-skip-link-inset-inline` | `--s-space-xl` | 24px |
| `--c-skip-link-offset` | `--s-space-base` | 16px |
| `--c-skip-link-elevation` | `--s-elevation-toast` | 400 |
| `--c-skip-link-border` | `--s-color-action-outline` | #017097 · dark #afc6de |
| `--c-skip-link-icon-size` | `--s-size-icon-sm` | 16px |
