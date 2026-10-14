# Modal

A native <dialog> that blocks the page until it is answered.

**Class** `.xds-modal` · **Family** messages, the user receives · **Font** heading (title) · body (body) · **Ground** light and dark: carries `data-surface="dark"`

## Markup

Element: `dialog[aria-labelledby] > button.close + h2.title + p.body + div.actions`

```html
<dialog class="xds-modal" id="confirm"><button class="xds-button xds-modal__close" data-variant="tertiary" data-icon="only" aria-label="Close" data-modal-close type="button">×</button><h2 class="xds-modal__title">Title</h2><p class="xds-modal__body">Body.</p><div class="xds-modal__actions"><button class="xds-button" data-variant="secondary" data-modal-close type="button">Cancel</button><button class="xds-button" data-variant="primary" type="button">Confirm</button></div></dialog>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `data-surface` | `dark` | — |
| `data-modal-light` | `(present)` | — |
| `__opener[data-modal-open]` | `(id)` | — |
| `__any[data-modal-close]` | `(present)` | — |

## Composes

`button-group`

## States

closed · open (rises in, fades out)

## Never

Never author these:

- `[open]`

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| behavior | `modal.open` | 2.4.3 |
| behavior | `all.escape` | 2.1.2 |
| check | `has __title` | 4.1.2 |
| behavior | `modal.name` | 4.1.2 |
| check | `__close[aria-label]` | 4.1.2 |
| behavior | `modal.focus-return` | 2.4.3 |

## Behavior

What `components/bundle.js` does for it. A line marked CSS is the stylesheet's work.

```text
modal                                                     <dialog>
NAME      aria-labelledby := __title's id at bind, unless aria-labelledby is  #modal.name
          present
OPEN      remember the opener → showModal() → focus [autofocus], else
          __close, else the first focusable → fire `xds:open`       #modal.open
  click a [data-modal-open=<id>] button
                                 → open that dialog
  click a [data-modal-close] inside
                                 → close
  `cancel` (Escape)              → close
  click the backdrop             → close, only when data-modal-light is
                                   present
CLOSE     fade out over --c-page-motion-state on the exit curve → focus
          returns to the opener → fire `xds:close`                  #modal.focus-return
```

## Tokens

Binds 23 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-modal-scrim` | `--s-color-surface-scrim` | rgb(18 21 26 / 0.64) |
| `--c-modal-surface` | `--s-color-surface-raised` | #ffffff · dark #142536 |
| `--c-modal-edge` | `--s-color-emphasis-edge` | #017097 |
| `--c-modal-border` | `--s-color-emphasis-border` | #3cb1de |
| `--c-modal-edge-width` | `--s-emphasis-edge-3` | 6px |
| `--c-modal-width` | `--s-size-measure-prose` | 672px |
| `--c-modal-inset` | `--s-space-2xl` | 32px |
| `--c-modal-gap` | `--s-space-base` | 16px |
| `--c-modal-title-font-family` | `--s-font-family-heading` | Lato |
| `--c-modal-title-font-size` | `--s-type-heading-md-size` | 24px |
| `--c-modal-title-line-height` | `--s-type-heading-md-line-height` | 32px |
| `--c-modal-title-tracking` | `--s-type-heading-md-tracking` | -0.2px |
| `--c-modal-title-weight` | `--s-font-weight-bold` | 700 |
| `--c-modal-title-ink` | `--s-color-text-primary` | #262321 · dark #fff7f2 |
| `--c-modal-body-font-family` | `--s-font-family-body` | Newsreader |
| `--c-modal-body-font-size` | `--s-type-body-sm-size` | 16px |
| `--c-modal-body-line-height` | `--s-type-body-sm-line-height` | 24px |
| `--c-modal-body-tracking` | `--s-type-body-sm-tracking` | 0 |
| `--c-modal-body-ink` | `--s-color-text-secondary` | #4c453f · dark #e8dfda |
| `--c-modal-actions-gap` | `--s-space-sm` | 8px |
| `--c-modal-elevation` | `--s-elevation-modal` | 300 |
| `--c-modal-close-inset` | `--s-space-sm` | 8px |
| `--c-modal-close-ink` | `--s-color-text-dismiss` | #35312d · dark #d4ceca |
