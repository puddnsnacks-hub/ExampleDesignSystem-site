# SiteAlert

A site-wide notice band between the gov-banner and the header.

**Class** `.xds-site-alert` · **Family** messages, the user receives · **Font** ui (title) · body (text) · **Ground** light only: stays light on a dark ground

## Markup

Element: `div.xds-site-alert[role=region|alert][aria-label][data-status][data-density] > div.__inner > svg.__icon + div.__body(p.__title + p.__text) + button.__dismiss`

```html
<div class="xds-site-alert" data-status="warning" role="region" aria-label="Site notice"><div class="xds-site-alert__inner"><svg class="xds-icon xds-site-alert__icon" aria-hidden="true"><use href="#xds-warning"></use></svg><div class="xds-site-alert__body"><p class="xds-site-alert__title">Winter weather advisory</p><p class="xds-site-alert__text">Some offices are closed. <a class="xds-link" href="#">Check office status</a> before you travel.</p></div><button class="xds-button xds-site-alert__dismiss" data-variant="tertiary" data-icon="only" aria-label="Dismiss" type="button"><svg class="xds-icon" data-size="md" aria-hidden="true"><use href="#xds-close"></use></svg></button></div></div>
<div class="xds-site-alert" data-status="emergency" role="alert"><div class="xds-site-alert__inner">…<button class="xds-button xds-site-alert__dismiss" data-variant="tertiary" data-icon="only" aria-label="Dismiss" type="button"><svg class="xds-icon" data-size="md" aria-hidden="true"><use href="#xds-close"></use></svg></button></div></div>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `data-status` | `emergency` · `warning` · `info` | — |
| `data-density` | `compact` | — |

## Which value

- `data-density`
  - `compact`: a short notice whose title and text share one line
- `data-status` — How hard may this interrupt, site-wide?
  - `emergency`: life-safety, or the service is down — act now
  - `warning`: the reader can proceed, but it will cost them if they ignore it
  - `info`: a fact about this thing they would not otherwise know

## Composes

`icon` · `button` · `link`

## States

rest · dismiss hover · dismiss pressed (settled) · dismiss focus-visible · dismissed (removed by xds.js, xds:dismiss fires)

## Placement

- **in**: body
- **after**: gov-banner
- **otherwise**
  - **after**: skip-link
- **before**: header

## How many

- **per**: page
- **max**: 1

## Copy

- **__dismiss[aria-label]**: Dismiss

## What it is

site-wide notice band

## Never

Never author these:

- `[data-dismissible]`

## Patterns

- **one-band** — Do: one site-alert per page, above the header. Don't: stack two, or put one inside the content — that is the alert.
- **emergency-is-alert** — Do: role=alert only with data-status=emergency. Don't: give a warning band role=alert to make it louder.
- **between-banner-and-header** — Do: gov-banner, then site-alert, then header. Don't: put it under the header where it scrolls away with the page.

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `[role=region] => [aria-label]` | 1.3.1, 2.4.1 |
| check | `[data-status=emergency] => [role=alert]` | 4.1.3 |
| review | Only a genuine site-wide emergency takes data-status=emergency, because it interrupts every user as the page loads. | 2.2.4 |
| check | `[data-status=warning\|info] => [role=region]` | 4.1.3 |
| check | `__icon[aria-hidden=true]` | 1.1.1 |
| check | `__dismiss[type=button]` | 2.1.1, 4.1.2 |
| check | `__dismiss[aria-label]` | 4.1.2 |
| behavior | `site-alert.dismiss` | 2.4.3 |

## Behavior

What `components/bundle.js` does for it. A line marked CSS is the stylesheet's work.

```text
site-alert                                                .xds-site-alert
  click __dismiss                → fire xds:dismiss, then remove the band;
                                   a focused __dismiss goes with it, so
                                   focus falls to <body>  #site-alert.dismiss
¬         Every band carries the __dismiss. There is no attribute to turn
          it on.
```

## Tokens

Binds 27 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-site-alert-inset-block` | `--s-space-md` | 12px |
| `--c-site-alert-inset-block-compact` | `--s-space-sm` | 8px |
| `--c-site-alert-inset-inline` | `--s-space-2xl` | 32px |
| `--c-site-alert-content-max-width` | `--s-size-measure-page` | 1440px |
| `--c-site-alert-gap` | `--s-space-md` | 12px |
| `--c-site-alert-stack` | `--s-space-2xs` | 2px |
| `--c-site-alert-icon-size` | `--s-size-icon-md` | 20px |
| `--c-site-alert-title-font-family` | `--s-font-family-ui` | Outfit |
| `--c-site-alert-title-font-size` | `--s-type-ui-md-size` | 13.5px |
| `--c-site-alert-title-line-height` | `--s-type-ui-md-line-height` | 20px |
| `--c-site-alert-title-tracking` | `--s-type-ui-md-tracking` | 0.1px |
| `--c-site-alert-title-weight` | `--s-font-weight-medium` | 500 |
| `--c-site-alert-text-font-family` | `--s-font-family-body` | Newsreader |
| `--c-site-alert-text-font-size` | `--s-type-body-sm-size` | 16px |
| `--c-site-alert-text-line-height` | `--s-type-body-sm-line-height` | 24px |
| `--c-site-alert-text-tracking` | `--s-type-body-sm-tracking` | 0 |
| `--c-site-alert-text-ink` | `--s-color-text-secondary` | #4c453f · dark #e8dfda |
| `--c-site-alert-link-ink` | `--s-color-action-link` | #00506c · dark #cedeee |
| `--c-site-alert-info-surface` | `--s-color-status-info-surface` | #f4fcfd · dark #07181a |
| `--c-site-alert-info-border` | `--s-color-status-info-border` | #b7dfe7 · dark #062227 |
| `--c-site-alert-info-ink` | `--s-color-status-info-text` | #26494f · dark #b7dfe7 |
| `--c-site-alert-warning-surface` | `--s-color-status-warning-surface` | #fffbed · dark #201400 |
| `--c-site-alert-warning-border` | `--s-color-status-warning-border` | #ffcf69 · dark #2c1c00 |
| `--c-site-alert-warning-ink` | `--s-color-status-warning-text` | #5b3e00 · dark #ffcf69 |
| `--c-site-alert-emergency-surface` | `--s-color-status-emergency-fill` | #5e56c1 |
| `--c-site-alert-emergency-ink` | `--s-color-text-on-action` | #ffffff |
| `--c-site-alert-dismiss-ink` | `--s-color-text-dismiss` | #35312d · dark #d4ceca |
