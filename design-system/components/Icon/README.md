# Icon

One named mark from the sprite, taking the ink of whatever it sits in.

**Class** `.xds-icon` · **Family** content, the user reads · **Font** none · **Ground** light and dark: carries `data-surface="dark"`

## Markup

Element: `svg > use`

```html
<svg class="xds-icon" data-size="md" aria-hidden="true"><use href="#xds-search"></use></svg>
<svg class="xds-icon" data-size="sm" role="img" aria-label="Opens in a new tab"><use href="#xds-external"></use></svg>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `data-size` | `sm` · `md` · `lg` · `xl` · `2xl` | — |
| `data-tone` | `default` · `secondary` · `tertiary` · `disabled` · `action` · `accent` · `on-action` · `error` · `warning` · `success` · `info` · `emergency` | — |
| `data-inline` | `(present)` | — |
| `data-surface` | `dark` | — |

## Which value

- `data-inline`
  - `(present)`: a mark standing in for a word inside running text

## States

rest

## Geometry

IBM Carbon: 32x32 grid, outlines converted to filled paths, 2px effective stroke weight at 32px. No stroke contract of our own — do not add one. STATUS RULING survives the swap: no two statuses share a silhouette. error = close--outline (circle + X), info = information (circle + i), success = checkmark--outline (circle + check), warning = warning--alt (triangle + bar), emergency = warning--hex (hexagon + bar). close is Carbon's bare close (an X with no enclosure), so it still cannot be read as error; clear is clean. assets/icons/icon-data.js records every upstream Carbon name.

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `[!role] => [aria-hidden=true]` | 1.1.1 |
| check | `[role=img] => [aria-label]` | 1.1.1 |
| review | A status mark sits beside real text that says the same status; its color and shape are never the only signal. | 1.4.1 |
| review | A labeled mark's aria-label says what it means, not what it depicts: "Opens in a new tab", not "arrow". | 1.1.1 |

## Behavior

What `components/bundle.js` does for it. A line marked CSS is the stylesheet's work.

```text
icon           at load (at DOMContentLoaded if the document is still
               loading) → XDS_SPRITE, which ships inside xds.js, is inserted
               once as div#xds-sprite, aria-hidden, first in the body. Every
               icon is <svg class="xds-icon"><use href="#xds-name"></use>
               </svg>.
               ¬ Nothing is fetched: a <use href> reaches only symbols in the
               document. Skipped when #xds-sprite is already there or xds.js
               carries no sprite.
```

## Tokens

Binds 17 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-icon-size-sm` | `--s-size-icon-sm` | 16px |
| `--c-icon-size-md` | `--s-size-icon-md` | 20px |
| `--c-icon-size-lg` | `--s-size-icon-lg` | 24px |
| `--c-icon-size-xl` | `--s-size-icon-xl` | 32px |
| `--c-icon-size-2xl` | `--s-size-icon-2xl` | 48px |
| `--c-icon-ink` | `--s-color-text-primary` | #262321 · dark #fff7f2 |
| `--c-icon-ink-secondary` | `--s-color-text-secondary` | #4c453f · dark #e8dfda |
| `--c-icon-ink-tertiary` | `--s-color-text-tertiary` | #6a5e55 · dark #b7aea6 |
| `--c-icon-ink-disabled` | `--s-color-text-disabled` | #988b80 |
| `--c-icon-ink-action` | `--s-color-action-base` | #017097 |
| `--c-icon-ink-accent` | `--s-color-accent-base` | #896037 · dark #edbf98 |
| `--c-icon-ink-on-action` | `--s-color-text-on-action` | #ffffff |
| `--c-icon-ink-error` | `--s-color-status-error-base` | #c7162a · dark #ffada5 |
| `--c-icon-ink-warning` | `--s-color-status-warning-base` | #684e00 · dark #ffb700 |
| `--c-icon-ink-success` | `--s-color-status-success-base` | #30722f · dark #8cd585 |
| `--c-icon-ink-info` | `--s-color-status-info-base` | #3a6c75 · dark #96cdd7 |
| `--c-icon-ink-emergency` | `--s-color-status-emergency-base` | #5e56c1 · dark #c7baff |
