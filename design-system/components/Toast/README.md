# Toast

A transient message about the action just taken.

**Class** `.xds-toast` · **Family** messages, the user receives · **Font** ui · **Ground** light only: stays light on a dark ground

## Markup

Element: `div.xds-toast-region > div.xds-toast[role=status|alert][data-status] > div.body + button.dismiss`

```html
<div class="xds-toast-region"><div class="xds-toast" role="status" data-status="success"><div class="xds-toast__body"><span class="xds-toast__title">Saved</span><span class="xds-toast__text">Your application was saved.</span></div><button class="xds-button xds-toast__dismiss" data-variant="tertiary" data-icon="only" aria-label="Dismiss" type="button">×</button></div></div>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `data-status` | `info` · `success` · `warning` · `error` · `emergency` | — |

## Which value

- `data-status` — How hard may this interrupt? A toast leaves on its own — if the record has to stay on the page, it is an alert.
  - `emergency`: life-safety, or the service is down — act now
  - `error`: this failed or is invalid; the reader cannot proceed until it is resolved
  - `warning`: the reader can proceed, but it will cost them if they ignore it
  - `success`: what they just did worked, and the record should stay on the page — if it should not, it is a toast
  - `info`: a fact about this thing they would not otherwise know

## States

enter (rises in) · rest · leaving (fades out)

## Never

Never author these:

- `[data-leaving]`

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `[data-status=error\|emergency] => [role=alert]` | 4.1.3 |
| check | `[data-status=info\|success\|warning] => [role=status]` | 4.1.3 |
| behavior | `toast.role` | 4.1.3 |
| behavior | `toast.stay` | 2.2.1 |
| behavior | `toast.pause` | 2.2.1 |
| check | `__dismiss[type=button]` | 2.1.1, 4.1.2 |
| check | `__dismiss[aria-label]` | 4.1.2 |

## Behavior

What `components/bundle.js` does for it. A line marked CSS is the stylesheet's work.

```text
toast                                        XDS.toast(message, opts)
REGION    .xds-toast-region is created on first use and appended to the body.
STACK     bottom-right, newest last.
LEAVE     after --c-toast-motion-stay, unless opts.sticky, or opts.status is
          error or emergency: those stay until dismissed.           #toast.stay
  pointerenter / focusin         → cancel the timer                 #toast.pause
  pointerleave / focus leaving the toast
                                 → restart it
  click the dismiss              → leave now
ROLE      status for info, success and warning; alert for error and
          emergency.                                                #toast.role
¬         A toast is never the only record of something the user must act on.
```

## Tokens

Binds 25 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-toast-font-family` | `--s-font-family-ui` | Outfit |
| `--c-toast-font-size` | `--s-type-ui-md-size` | 13.5px |
| `--c-toast-line-height` | `--s-type-ui-md-line-height` | 20px |
| `--c-toast-tracking` | `--s-type-ui-md-tracking` | 0.1px |
| `--c-toast-surface` | `--s-color-surface-raised` | #ffffff · dark #142536 |
| `--c-toast-border` | `--s-color-border-on-raised` | #d4ceca · dark #1e374f |
| `--c-toast-ink` | `--s-color-text-primary` | #262321 · dark #fff7f2 |
| `--c-toast-body-ink` | `--s-color-text-secondary` | #4c453f · dark #e8dfda |
| `--c-toast-title-weight` | `--s-font-weight-medium` | 500 |
| `--c-toast-dismiss-ink` | `--s-color-text-dismiss` | #35312d · dark #d4ceca |
| `--c-toast-edge-width` | `--s-emphasis-edge-2` | 3px |
| `--c-toast-inset` | `--s-space-base` | 16px |
| `--c-toast-gap` | `--s-space-md` | 12px |
| `--c-toast-width` | `--s-size-measure-ui` | 384px |
| `--c-toast-stack-gap` | `--s-space-sm` | 8px |
| `--c-toast-offset` | `--s-space-xl` | 24px |
| `--c-toast-elevation` | `--s-elevation-toast` | 400 |
| `--c-toast-shadow` | `--s-color-scrim-light` | rgb(255 255 255 / 0.6) |
| `--c-toast-motion-rise` | `--s-motion-base` | 200ms |
| `--c-toast-motion-stay` | `--s-motion-toast` | 6000ms |
| `--c-toast-error-edge` | `--s-color-status-error-base` | #c7162a · dark #ffada5 |
| `--c-toast-warning-edge` | `--s-color-status-warning-base` | #684e00 · dark #ffb700 |
| `--c-toast-success-edge` | `--s-color-status-success-base` | #30722f · dark #8cd585 |
| `--c-toast-info-edge` | `--s-color-status-info-base` | #3a6c75 · dark #96cdd7 |
| `--c-toast-emergency-edge` | `--s-color-status-emergency-base` | #5e56c1 · dark #c7baff |
