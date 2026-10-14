# Radio

Exactly one choice from a named set.

**Class** `.xds-radio` · **Family** fields, the user gives · **Font** ui · **Ground** light only: stays light on a dark ground

## Markup

Element: `label.xds-radio > input.xds-radio__control[type=radio][name] + text`

```html
<fieldset class="xds-field"><legend class="xds-label">Permit type</legend><label class="xds-radio"><input class="xds-radio__control" type="radio" name="permit"> Single trip</label><label class="xds-radio"><input class="xds-radio__control" type="radio" name="permit" checked> Annual</label></fieldset>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `input[name]` | `(present)` | — |
| `input[disabled]` | `(present)` | — |

## States

rest · hover · active · checked · focus-visible · disabled · invalid

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `has __control` | 1.3.1, 4.1.2 |
| check | `__control[type=radio]` | 4.1.2 |
| check | `__control[name]` | 1.3.1, 2.1.1 |
