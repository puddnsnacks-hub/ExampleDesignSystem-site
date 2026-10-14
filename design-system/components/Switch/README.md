# Switch

An on/off control that applies the moment it is flipped.

**Class** `.xds-switch` · **Family** fields, the user gives · **Font** ui · **Ground** light and dark: carries `data-surface="dark"`

## Markup

Element: `label > input[type=checkbox][role=switch] + text`

```html
<label class="xds-switch"><input class="xds-switch__control" type="checkbox" role="switch"> Label</label>
```

## States

off · on · hover · active · focus-visible · disabled · invalid

## On a dark surface

Only these tokens flip on a dark surface: `label-ink`.

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `has __control` | 1.3.1, 4.1.2 |
| check | `__control[type=checkbox][role=switch]` | 4.1.2 |
| review | A switch applies the moment it flips; no Save or Submit in the same form also governs it. | 3.2.2 |
| review | The switch's label names the setting and stays the same whether it is on or off. | 2.4.6 |

## Tokens

Binds 15 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-switch-track-height` | `--s-size-icon-lg` | 24px |
| `--c-switch-thumb-inset` | `--s-space-xs` | 4px |
| `--c-switch-track-off` | `--s-color-border-strong` | #988b80 · dark #b7aea6 |
| `--c-switch-track-on` | `--s-color-action-base` | #017097 |
| `--c-switch-thumb` | `--s-color-surface-knob` | #f5f3f2 · dark #ffffff |
| `--c-switch-hover` | `--s-color-state-hover-fixed` | rgb(0 0 0 / 0.08) |
| `--c-switch-pressed` | `--s-color-state-pressed-fixed` | rgb(0 0 0 / 0.16) |
| `--c-switch-track-disabled` | `--s-color-surface-disabled` | #d4ceca · dark #35312d |
| `--c-switch-border-error` | `--s-color-status-error-base` | #c7162a · dark #ffada5 |
| `--c-switch-label-font-family` | `--s-font-family-ui` | Outfit |
| `--c-switch-label-font-size` | `--s-type-ui-lg-size` | 15px |
| `--c-switch-label-line-height` | `--s-type-ui-lg-line-height` | 20px |
| `--c-switch-label-tracking` | `--s-type-ui-lg-tracking` | 0.1px |
| `--c-switch-label-ink` | `--s-color-text-primary` | #262321 · dark #fff7f2 |
| `--c-switch-gap` | `--s-space-sm` | 8px |
