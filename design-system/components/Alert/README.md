# Alert

A status message about the thing it sits beside, on a leading edge.

**Class** `.xds-alert` · **Family** messages, the user receives · **Font** ui (title) · body (body) · **Ground** light only: stays light on a dark ground

## Markup

Element: `div.xds-alert[role=status|alert][data-status] > svg.__icon(use[href=#xds-<status>]) + div.__content(p.__title + p.__body) + button.__dismiss?`

```html
<div class="xds-alert" data-status="warning" role="status"><svg class="xds-icon xds-alert__icon" aria-hidden="true"><use href="#xds-warning"></use></svg><div class="xds-alert__content"><p class="xds-alert__title">Title</p><p class="xds-alert__body">Body.</p></div></div>
<!-- dismissible -->
<div class="xds-alert" data-status="error" role="alert"><svg class="xds-icon xds-alert__icon" aria-hidden="true"><use href="#xds-error"></use></svg><div class="xds-alert__content"><p class="xds-alert__title">Title</p><p class="xds-alert__body">Body.</p></div><button class="xds-button xds-alert__dismiss" data-variant="tertiary" data-icon="only" aria-label="Dismiss" type="button"><svg class="xds-icon" data-size="sm" aria-hidden="true"><use href="#xds-close"></use></svg></button></div>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `data-status` | `emergency` · `error` · `warning` · `success` · `info` | — |

## Which value

- `data-status` — How hard may this interrupt?
  - `emergency`: life-safety, or the service is down — act now
  - `error`: this failed or is invalid; the reader cannot proceed until it is resolved
  - `warning`: the reader can proceed, but it will cost them if they ignore it
  - `success`: what they just did worked, and the record should stay on the page — if it should not, it is a toast
  - `info`: a fact about this thing they would not otherwise know

## Composes

`icon`

## States

rest

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `[data-status=error\|emergency] => [role=alert]` | 4.1.3 |
| check | `[data-status=warning\|success\|info] => [role=status]` | 4.1.3 |
| app | An alert added after load goes into a live region already in the DOM, or focus moves to it; a region added and filled at once is silent. | 4.1.3 |

## Tokens

Binds 37 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-alert-edge-width` | `--s-emphasis-edge-2` | 3px |
| `--c-alert-inset` | `--s-space-base` | 16px |
| `--c-alert-gap` | `--s-space-md` | 12px |
| `--c-alert-icon-size` | `--s-size-icon-md` | 20px |
| `--c-alert-title-font-family` | `--s-font-family-ui` | Outfit |
| `--c-alert-title-font-size` | `--s-type-ui-lg-size` | 15px |
| `--c-alert-title-line-height` | `--s-type-ui-lg-line-height` | 20px |
| `--c-alert-title-tracking` | `--s-type-ui-lg-tracking` | 0.1px |
| `--c-alert-title-weight` | `--s-font-weight-medium` | 500 |
| `--c-alert-body-font-family` | `--s-font-family-body` | Newsreader |
| `--c-alert-body-font-size` | `--s-type-body-xs-size` | 14px |
| `--c-alert-body-line-height` | `--s-type-body-xs-line-height` | 20px |
| `--c-alert-body-tracking` | `--s-type-body-xs-tracking` | 0 |
| `--c-alert-body-ink` | `--s-color-text-secondary` | #4c453f · dark #e8dfda |
| `--c-alert-error-surface` | `--s-color-status-error-surface` | #fff6f2 · dark #330300 |
| `--c-alert-error-border` | `--s-color-status-error-border` | #ffc9c1 · dark #490000 |
| `--c-alert-error-edge` | `--s-color-status-error-base` | #c7162a · dark #ffada5 |
| `--c-alert-error-ink` | `--s-color-status-error-text` | #890d1b · dark #ffefec |
| `--c-alert-warning-surface` | `--s-color-status-warning-surface` | #fffbed · dark #201400 |
| `--c-alert-warning-border` | `--s-color-status-warning-border` | #ffcf69 · dark #2c1c00 |
| `--c-alert-warning-edge` | `--s-color-status-warning-base` | #684e00 · dark #ffb700 |
| `--c-alert-warning-ink` | `--s-color-status-warning-text` | #5b3e00 · dark #ffcf69 |
| `--c-alert-success-surface` | `--s-color-status-success-surface` | #f3fdf1 · dark #031a00 |
| `--c-alert-success-border` | `--s-color-status-success-border` | #b0e6a9 · dark #022500 |
| `--c-alert-success-edge` | `--s-color-status-success-base` | #30722f · dark #8cd585 |
| `--c-alert-success-ink` | `--s-color-status-success-text` | #1e4d1f · dark #b0e6a9 |
| `--c-alert-info-surface` | `--s-color-status-info-surface` | #f4fcfd · dark #07181a |
| `--c-alert-info-border` | `--s-color-status-info-border` | #b7dfe7 · dark #062227 |
| `--c-alert-info-edge` | `--s-color-status-info-base` | #3a6c75 · dark #96cdd7 |
| `--c-alert-info-ink` | `--s-color-status-info-text` | #26494f · dark #b7dfe7 |
| `--c-alert-emergency-surface` | `--s-color-status-emergency-surface` | #fcf8ff · dark #131031 |
| `--c-alert-emergency-border` | `--s-color-status-emergency-border` | #ddd2ff · dark #15184d |
| `--c-alert-emergency-edge` | `--s-color-status-emergency-base` | #5e56c1 · dark #c7baff |
| `--c-alert-emergency-ink` | `--s-color-status-emergency-text` | #3e3a84 · dark #ddd2ff |
| `--c-alert-dismiss-ink` | `--s-color-text-dismiss` | #35312d · dark #d4ceca |
| `--c-alert-dismiss-size` | `--s-size-icon-lg` | 24px |
| `--c-alert-stack` | `--s-space-sm` | 8px |
