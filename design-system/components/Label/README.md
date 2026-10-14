# Label

The name of one control, or of a set of options.

**Class** `.xds-label` · **Family** fields, the user gives · **Font** ui · **Ground** light and dark: carries `data-surface="dark"`

## Markup

Element: `label(text + span.__required?) | legend(text + span.__required?)`

```html
<label class="xds-label" for="f1">Email <span class="xds-label__required" aria-hidden="true">*</span></label>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `data-surface` | `dark` | — |

## Optional parts

`required`

## States

rest

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `__required[aria-hidden=true]` | 1.3.1 |

## Tokens

Binds 8 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-label-font-family` | `--s-font-family-ui` | Outfit |
| `--c-label-weight` | `--s-font-weight-medium` | 500 |
| `--c-label-font-size` | `--s-type-ui-md-size` | 13.5px |
| `--c-label-line-height` | `--s-type-ui-md-line-height` | 20px |
| `--c-label-tracking` | `--s-type-ui-md-tracking` | 0.1px |
| `--c-label-ink` | `--s-color-text-primary` | #262321 · dark #fff7f2 |
| `--c-label-ink-required` | `--s-color-status-error-ink` | #c7162a · dark #ffc9c1 |
| `--c-label-gap` | `--s-space-xs` | 4px |
