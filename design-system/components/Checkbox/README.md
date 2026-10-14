# Checkbox

A binary choice, on its own or one of several independent ones.

**Class** `.xds-checkbox`, `.xds-radio` · **Family** fields, the user gives · **Font** ui · **Ground** light and dark: carries `data-surface="dark"`

## Markup

Element: `label.xds-checkbox > input.xds-checkbox__control[type=checkbox] + text`

```html
<div class="xds-field"><label class="xds-checkbox"><input class="xds-checkbox__control" type="checkbox"> Label</label></div>
```

## States

rest · hover · active · checked · indeterminate · focus-visible · disabled · invalid

## Never

Never author these:

- `__control[indeterminate]`
- `__control[aria-checked]`

## On a dark surface

Only these tokens flip on a dark surface: `label-ink` · `label-ink-disabled`.

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `has __control` | 1.3.1, 4.1.2 |
| check | `__control[type=checkbox\|radio]` | 4.1.2 |

## Tokens

Binds 20 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-checkbox-size` | `--s-size-icon-md` | 20px |
| `--c-checkbox-target` | `--s-size-target-min` | 44px |
| `--c-checkbox-border-width` | `--s-border-width-thick` | 2px |
| `--c-checkbox-surface` | `--s-color-surface-raised` | #ffffff · dark #142536 |
| `--c-checkbox-border` | `--s-color-border-strong` | #988b80 · dark #b7aea6 |
| `--c-checkbox-border-error` | `--s-color-status-error-base` | #c7162a · dark #ffada5 |
| `--c-checkbox-fill-checked` | `--s-color-action-base` | #017097 |
| `--c-checkbox-mark-checked` | `--s-color-text-on-action` | #ffffff |
| `--c-checkbox-fill-disabled` | `--s-color-surface-disabled` | #d4ceca · dark #35312d |
| `--c-checkbox-border-disabled` | `--s-color-border-disabled` | #d4ceca · dark #4c453f |
| `--c-checkbox-label-font-family` | `--s-font-family-ui` | Outfit |
| `--c-checkbox-label-font-size` | `--s-type-ui-lg-size` | 15px |
| `--c-checkbox-label-line-height` | `--s-type-ui-lg-line-height` | 20px |
| `--c-checkbox-label-tracking` | `--s-type-ui-lg-tracking` | 0.1px |
| `--c-checkbox-label-ink` | `--s-color-text-primary` | #262321 · dark #fff7f2 |
| `--c-checkbox-label-ink-disabled` | `--s-color-text-disabled` | #988b80 |
| `--c-checkbox-gap` | `--s-space-sm` | 8px |
| `--c-checkbox-radio-radius` | `--s-radius-radio` | 999px |
| `--c-checkbox-mark-size` | `--s-size-icon-sm` | 16px |
| `--c-checkbox-bar-width` | `--s-border-width-heavy` | 3px |
