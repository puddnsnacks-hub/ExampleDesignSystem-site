# ConvActions

The icon buttons under a message: copy, good, bad, retry.

**Class** `.xds-conv-actions` · **Family** conversation, the user with AI · **Font** — · **Ground** light only: stays light on a dark ground

## Markup

Element: `div > button.xds-conv-action`

```html
<div class="xds-conv-actions"><button class="xds-conv-action" type="button" aria-label="Copy"><svg class="xds-icon" aria-hidden="true"><use href="#xds-copy"></use></svg></button></div>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `aria-pressed` | `true` | — |

## States

rest · hover · active · pressed · focus-visible

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `.xds-conv-action[aria-label]` | 4.1.2 |
| review | A rating action carries aria-pressed; copy and retry do not. | 4.1.2 |
