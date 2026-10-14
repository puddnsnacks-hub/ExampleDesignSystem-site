# SelectionCard

An option as a card: the <label> IS the card, with a real radio or checkbox inside it.

**Class** `.xds-selection-card` · **Family** fields, the user gives · **Font** ui · **Ground** light only: stays light on a dark ground

## Markup

Element: `label > input.xds-radio__control | input.xds-checkbox__control + span.body(span.title + span.description?) + span.preview?`

```html
<fieldset class="xds-field"><legend class="xds-label">Focus ring</legend>
  <label class="xds-selection-card"><input class="xds-radio__control" type="radio" name="ring" value="solid" checked aria-labelledby="ring-solid-title" aria-describedby="ring-solid-desc">
    <span class="xds-selection-card__body"><span class="xds-selection-card__title" id="ring-solid-title">Solid</span><span class="xds-selection-card__description" id="ring-solid-desc">A 2px vivid ring, offset from the control.</span></span>
    <span class="xds-selection-card__preview">…</span>
  </label>
</fieldset>
```

## Optional parts

`description` · `preview`

## States

rest · hover · active · selected · focus-visible · disabled

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `has <input>` | 4.1.2 |
| check | `<input>[type=radio\|checkbox]` | 4.1.2 |
| check | `<input>[type=radio] => <input>[name]` | 1.3.1, 2.1.1 |
| check | `has __title` | 1.3.1 |
| check | `<input>[aria-labelledby] -> __title` | 4.1.2 |
| check | `<input>[aria-describedby] -> __description` | 1.3.1 |
| review | The title reads as a complete choice on its own, without the description or the preview. | 2.4.6 |
| review | The preview slot holds no link, button, field or other tab stop; it is a specimen. | 2.4.3 |

## Tokens

Binds 24 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-selection-card-inset` | `--s-space-base` | 16px |
| `--c-selection-card-gap` | `--s-space-md` | 12px |
| `--c-selection-card-body-gap` | `--s-space-2xs` | 2px |
| `--c-selection-card-target` | `--s-size-target-min` | 44px |
| `--c-selection-card-surface` | `--s-color-surface-card` | #ffffff · dark #1e374f |
| `--c-selection-card-surface-selected` | `--s-color-surface-selected-vivid` | #e7f8fd · dark #017097 |
| `--c-selection-card-border` | `--s-color-border-on-page` | #e8dfda · dark #1e374f |
| `--c-selection-card-border-selected` | `--s-color-emphasis-border` | #3cb1de |
| `--c-selection-card-edge-width-selected` | `--s-emphasis-edge-4` | 12px |
| `--c-selection-card-edge-selected` | `--s-color-emphasis-edge` | #017097 |
| `--c-selection-card-title-font-family` | `--s-font-family-ui` | Outfit |
| `--c-selection-card-title-font-size` | `--s-type-ui-lg-size` | 15px |
| `--c-selection-card-title-line-height` | `--s-type-ui-lg-line-height` | 20px |
| `--c-selection-card-title-tracking` | `--s-type-ui-lg-tracking` | 0.1px |
| `--c-selection-card-title-weight` | `--s-font-weight-medium` | 500 |
| `--c-selection-card-title-ink` | `--s-color-text-heading` | #262321 · dark #edbf98 |
| `--c-selection-card-description-font-family` | `--s-font-family-ui` | Outfit |
| `--c-selection-card-description-font-size` | `--s-type-ui-md-size` | 13.5px |
| `--c-selection-card-description-line-height` | `--s-type-ui-md-line-height` | 20px |
| `--c-selection-card-description-tracking` | `--s-type-ui-md-tracking` | 0.1px |
| `--c-selection-card-description-ink` | `--s-color-text-secondary` | #4c453f · dark #e8dfda |
| `--c-selection-card-preview-gap` | `--s-space-md` | 12px |
| `--c-selection-card-preview-inset` | `--s-space-sm` | 8px |
| `--c-selection-card-preview-surface` | `--s-color-surface-page` | #fcfbfb · dark #151e26 |
