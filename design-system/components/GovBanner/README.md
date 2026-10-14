# GovBanner

The required official-government banner above the header.

**Class** `.xds-gov-banner` · **Family** chrome, the page frame · **Font** ui (line, titles) · body (explanations) · **Ground** light and dark: carries `data-surface="dark"`

## Markup

Element: `section.gov-banner[aria-label] > details.__disclosure > summary.__line(span.__inner(img.__flag + span + span.__how)) + div.__panel > div.__grid(div.__item × 2 > p(b.__title + text + svg.__lock?))`

```html
<section class="xds-gov-banner" aria-label="Official website of the United States government"><details class="xds-gov-banner__disclosure"><summary class="xds-gov-banner__line"><span class="xds-gov-banner__inner"><img class="xds-gov-banner__flag" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAG1BMVEUdM7EeNLIeM7HgQCDaPh/bPh/bPx/////bPyBEby41AAAAUElEQVQI123MNw4CABDEwD3jC/9/MQ1BQrgeOSkIqYe2o2FZtthXgQLgbHVMZdlsfUQFQnHtjP1+8BUhBDKOqtmfot6ojqPzR7TjdU+f6vkED+IDPhTBcMAAAAAASUVORK5CYII=" alt="" width="16" height="11" decoding="async"><span>An official website of the United States government</span><span class="xds-gov-banner__how">Here’s how you know</span></span></summary><div class="xds-gov-banner__panel"><div class="xds-gov-banner__grid"><div class="xds-gov-banner__item"><p><b class="xds-gov-banner__title">Official websites use .gov</b>A <strong>.gov</strong> website belongs to an official government organization in the United States.</p></div><div class="xds-gov-banner__item"><p><b class="xds-gov-banner__title">Secure .gov websites use HTTPS</b>A <strong>lock</strong> (<svg class="xds-gov-banner__lock" viewBox="0 0 16 16" role="img" aria-label="Locked padlock icon" focusable="false"><path d="M8 1a3.7 3.7 0 0 0-3.7 3.7v1.9h1.8V4.7a1.9 1.9 0 0 1 3.8 0v1.9h1.8V4.7A3.7 3.7 0 0 0 8 1z"/><path d="M3.2 6.6h9.6V15H3.2z"/></svg>) or <strong>https://</strong> means you’ve safely connected to the .gov website. Share sensitive information only on official, secure websites.</p></div></div></div></details></section>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `data-surface` | `dark` | — |

## States

closed · open (panel rises in) · hover · pressed · focus-visible

## Placement

- **in**: body
- **after**: skip-link

## How many

- **per**: page
- **max**: 1

## Copy

- **$comment**: Fixed by USWDS. Use it verbatim, and identically on every page of a .gov or .mil site served over HTTPS. Do not edit, translate ad hoc, or shorten. Use the block matching the site's top-level domain.
- **aria-label**: Official website of the United States government
- **lock**: Locked padlock icon
- **line**: An official website of the United States government
- **action**: Here’s how you know
- **gov**
  - Official websites use .gov
  - A .gov website belongs to an official government organization in the United States.
  - Secure .gov websites use HTTPS
  - A lock ( ) or https:// means you’ve safely connected to the .gov website. Share sensitive information only on official, secure websites.
- **mil**
  - Official websites use .mil
  - A .mil website belongs to an official U.S. Department of Defense organization.
  - Secure .mil websites use HTTPS
  - A lock ( ) or https:// means you’ve safely connected to the .mil website. Share sensitive information only on official, secure websites.
- **exceptions**
  - A non-federal .gov site may adapt the first line for accuracy (a state or city is not “the United States government”).
  - A .mil site outside the DOD uses “A .mil website operates under the approval of the U.S. Department of Defense.”
  - Official Spanish translations exist for both TLDs.
  - Do not use the banner at all on a.com/.org domain, or on a test site where it would mislead.
- **source**: https://designsystem.digital.gov/components/banner/

## Never

Never author these:

- `__disclosure[open]`

## On a dark surface

Parts that keep a light fill inside a dark component: `.xds-gov-banner__panel` · `.xds-gov-banner[data-surface="dark"] .xds-gov-banner__panel`.

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `[aria-label]` | 1.3.1, 2.4.1 |
| check | `has <summary>` | 2.1.1, 4.1.2 |
| check | `__flag[alt=""]` | 1.1.1 |
| check | `__lock[role=img][aria-label]` | 1.1.1 |

## Behavior

What `components/bundle.js` does for it. A line marked CSS is the stylesheet's work.

```text
accordion · reference-list · footer sitemap · gov-banner  <details>
          Every details whose class starts xds- and whose stylesheet does not
          ease it: the reference-list items, the gov-banner and the footer's
          sitemap band; the accordion item and the disclosure only where
          ::details-content is unsupported. Elsewhere those two ease in CSS.
OPEN      height 0 → the panel's scroll height, then cleared. overflow hidden
          only while traveling.
CLOSE     the reverse, and `open` is removed on finish, never before — remove
          it first and the panel is gone before it can move.
EVENTS
  click the summary              → animate instead of the native jump
DURATION  --c-page-motion-state, read at run time.
¬         No Escape here. Only the disclosure closes on Escape.
```

## Tokens

Binds 27 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-gov-banner-font-family` | `--s-font-family-ui` | Outfit |
| `--c-gov-banner-font-size` | `--s-type-ui-sm-size` | 12px |
| `--c-gov-banner-line-height` | `--s-type-ui-sm-line-height` | 16px |
| `--c-gov-banner-tracking` | `--s-type-ui-sm-tracking` | 0.1px |
| `--c-gov-banner-surface` | `--s-color-surface-sunken` | #f7f5f5 · dark #12151a |
| `--c-gov-banner-divider` | `--s-color-border-vivid` | #017097 · dark #3cb1de |
| `--c-gov-banner-ink` | `--s-color-text-primary` | #262321 · dark #fff7f2 |
| `--c-gov-banner-link-ink` | `--s-color-action-link` | #00506c · dark #cedeee |
| `--c-gov-banner-inset-block` | `--s-space-sm` | 8px |
| `--c-gov-banner-inset-inline` | `--s-space-2xl` | 32px |
| `--c-gov-banner-compact-inset-inline` | `--s-space-base` | 16px |
| `--c-gov-banner-gap` | `--s-space-sm` | 8px |
| `--c-gov-banner-icon-size` | `--s-size-icon-sm` | 16px |
| `--c-gov-banner-content-max-width` | `--s-size-measure-page` | 1440px |
| `--c-gov-banner-panel-inset-block` | `--s-space-base` | 16px |
| `--c-gov-banner-panel-surface` | `--s-color-pinned-surface` | #f7f5f5 |
| `--c-gov-banner-panel-divider` | `--s-color-pinned-border` | #e8dfda |
| `--c-gov-banner-panel-gap` | `--s-space-2xl` | 32px |
| `--c-gov-banner-panel-column-min` | `--s-size-column-min` | 180px |
| `--c-gov-banner-panel-font-family` | `--s-font-family-body` | Newsreader |
| `--c-gov-banner-panel-font-size` | `--s-type-body-xs-size` | 14px |
| `--c-gov-banner-panel-line-height` | `--s-type-body-xs-line-height` | 20px |
| `--c-gov-banner-panel-tracking` | `--s-type-body-xs-tracking` | 0 |
| `--c-gov-banner-panel-ink` | `--s-color-pinned-ink` | #4c453f |
| `--c-gov-banner-panel-title-weight` | `--s-font-weight-medium` | 500 |
| `--c-gov-banner-panel-title-gap` | `--s-space-sm` | 8px |
| `--c-gov-banner-panel-title-ink` | `--s-color-pinned-ink-strong` | #262321 |
