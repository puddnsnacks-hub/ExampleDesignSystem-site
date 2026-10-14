# Field

One control, or one set of options, with its name, its help and its error.

**Class** `.xds-field` · **Family** fields, the user gives · **Font** ui · **Ground** light and dark: carries `data-surface="dark"`

## Markup

Element: `div > (label.xds-label + control | label.xds-checkbox | label.xds-switch) + p.help? + p.error? | fieldset > legend.xds-label + option+ + p.help? + p.error?`

```html
<div class="xds-field"><label class="xds-label" for="f2">Name</label><input class="xds-input" id="f2" aria-describedby="f2-help"><p class="xds-field__help" id="f2-help">Help text.</p></div>
<!-- one checkbox, carrying its own error -->
<div class="xds-field"><label class="xds-checkbox"><input class="xds-checkbox__control" type="checkbox" required aria-invalid="true" aria-describedby="t1-err"> I agree to the terms</label><p class="xds-field__error" id="t1-err">You must agree to the terms</p></div>
<!-- a set of options: the field is the fieldset, the legend names the set -->
<fieldset class="xds-field" aria-describedby="d1-err"><legend class="xds-label">How should we send the permit?</legend><label class="xds-radio"><input class="xds-radio__control" type="radio" name="d1" value="mail"> By mail</label><label class="xds-radio"><input class="xds-radio__control" type="radio" name="d1" value="pickup"> Hold for pickup</label><p class="xds-field__error" id="d1-err">Choose how to receive the permit</p></fieldset>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `data-width` | `full` | — |
| `data-state` | `disabled` · `readonly` | — |

## Which value

- `data-state` — Is the value out of play, or fixed?
  - `disabled`: not submitted and not focusable — the control is out of play
  - `readonly`: submitted and focusable — the value is fixed, but still read and copied

## Composes

`label` · `input` · `select` · `checkbox` · `radio` · `switch` · `selection-card`

## States

rest · error

## On a dark surface

Only these tokens flip on a dark surface: `help-ink` · `error-ink` · `label-ink-disabled`.

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `label[for] -> input` | 1.3.1, 4.1.2 |
| check | `input => has label` | 1.3.1, 3.3.2 |
| check | `.xds-select__trigger[!aria-label][!aria-labelledby] => has label` | 3.3.2, 4.1.2 |
| check | `[!aria-describedby] => <input>[aria-describedby] -> __help, __error[!hidden]` | 1.3.1 |
| check | `[!aria-describedby] => <textarea>[aria-describedby] -> __help, __error[!hidden]` | 1.3.1 |
| check | `[!aria-describedby] => .xds-select__trigger[aria-describedby] -> __help, __error[!hidden]` | 1.3.1 |
| check | `<legend> => [aria-describedby] -> __help, __error[!hidden]` | 1.3.1 |
| check | `.xds-radio => has <legend>` | 1.3.1 |
| check | `.xds-selection-card => has <legend>` | 1.3.1 |
| check | `__error[!hidden] => input[aria-invalid=true]` | 3.3.1 |
| check | `__error[!hidden] => <select>[aria-invalid=true]` | 3.3.1 |
| check | `<input>[aria-invalid=true] => has __error[!hidden]` | 3.3.1 |
| check | `<textarea>[aria-invalid=true] => has __error[!hidden]` | 3.3.1 |
| check | `<select>[aria-invalid=true] => has __error[!hidden]` | 3.3.1 |
| check | `<input>[!title]` | 3.3.1 |
| check | `<textarea>[!title]` | 3.3.1 |
| check | `.xds-label__required => input[required\|aria-required]` | 1.3.1, 3.3.2 |
| check | `.xds-label__required => <select>[required]` | 1.3.1, 3.3.2 |
| check | `[data-state=disabled][!disabled] => <input>[disabled]` | 4.1.2 |
| check | `[data-state=disabled][!disabled] => <select>[disabled]` | 4.1.2 |
| check | `[data-state=disabled][!disabled] => <textarea>[disabled]` | 4.1.2 |
| check | `[data-state=disabled][!disabled] => <button>[disabled]` | 4.1.2 |

## Tokens

Binds 9 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-field-gap` | `--s-space-xs` | 4px |
| `--c-field-help-font-family` | `--s-font-family-ui` | Outfit |
| `--c-field-help-font-size` | `--s-type-ui-md-size` | 13.5px |
| `--c-field-help-line-height` | `--s-type-ui-md-line-height` | 20px |
| `--c-field-help-tracking` | `--s-type-ui-md-tracking` | 0.1px |
| `--c-field-help-ink` | `--s-color-text-tertiary` | #6a5e55 · dark #b7aea6 |
| `--c-field-error-ink` | `--s-color-status-error-text` | #890d1b · dark #ffefec |
| `--c-field-max-width` | `--s-size-measure-ui` | 384px |
| `--c-field-label-ink-disabled` | `--s-color-text-disabled` | #988b80 |
