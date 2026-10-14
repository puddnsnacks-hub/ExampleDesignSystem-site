# Input

Text entry — one class covering <input> and <textarea>.

**Class** `.xds-input` · **Family** fields, the user gives · **Font** ui · **Ground** light only: stays light on a dark ground

## Markup

Element: `input | textarea`

```html
<input class="xds-input" type="text" placeholder="Placeholder">
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `aria-invalid` | `true` | — |

## States

rest · hover · focus-visible · invalid · disabled · read-only

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `[aria-invalid=true] => [aria-describedby]` | 3.3.1 |
| review | A value the user must still reach and read is read-only, not disabled. | 2.1.1, 4.1.2 |

## Tokens

Binds 18 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-input-font-family` | `--s-font-family-ui` | Outfit |
| `--c-input-font-size` | `--s-type-ui-lg-size` | 15px |
| `--c-input-line-height` | `--s-type-ui-lg-line-height` | 20px |
| `--c-input-tracking` | `--s-type-ui-lg-tracking` | 0.1px |
| `--c-input-height` | `--s-size-control-md` | 40px |
| `--c-input-inset-inline` | `--s-space-md` | 12px |
| `--c-input-inset-block` | `--s-space-sm` | 8px |
| `--c-input-surface` | `--s-color-surface-raised` | #ffffff · dark #142536 |
| `--c-input-border` | `--s-color-border-strong` | #988b80 · dark #b7aea6 |
| `--c-input-border-hover` | `--s-color-text-secondary` | #4c453f · dark #e8dfda |
| `--c-input-border-error` | `--s-color-status-error-base` | #c7162a · dark #ffada5 |
| `--c-input-ink` | `--s-color-text-primary` | #262321 · dark #fff7f2 |
| `--c-input-placeholder-ink` | `--s-color-text-tertiary` | #6a5e55 · dark #b7aea6 |
| `--c-input-surface-disabled` | `--s-color-surface-disabled` | #d4ceca · dark #35312d |
| `--c-input-ink-disabled` | `--s-color-text-disabled` | #988b80 |
| `--c-input-border-disabled` | `--s-color-border-disabled` | #d4ceca · dark #4c453f |
| `--c-input-surface-readonly` | `--s-color-surface-sunken` | #f7f5f5 · dark #12151a |
| `--c-input-textarea-min-height` | `--s-size-textarea-min` | 100px |
