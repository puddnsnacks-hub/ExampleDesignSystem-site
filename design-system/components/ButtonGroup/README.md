# ButtonGroup

Two or more buttons in a row at the system gap.

**Class** `.xds-button-group` · **Family** actions, the user triggers · **Font** none · **Ground** light and dark: carries `data-surface="dark"`

## Markup

Element: `div`

```html
<div class="xds-button-group"><button class="xds-button" data-variant="primary">Save</button><button class="xds-button" data-variant="secondary">Cancel</button></div>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `data-align` | `end` | — |

## Composes

`button`

## States

rest

## How many

- **of**: button
- **per**: button-group
- **min**: 2

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `[role=group] => [aria-label]` | 1.3.1 |
| check | `[aria-label] => [role=group]` | 4.1.2 |
| review | Buttons that are one set of related choices sit in role=group; independent actions do not. | 1.3.1 |

## Tokens

Binds 1 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-button-group-gap` | `--s-space-sm` | 8px |
