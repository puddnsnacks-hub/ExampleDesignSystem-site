# Hero

The page's front door: a photograph and a content panel, on three independent axes.

**Class** `.xds-hero` · **Family** blocks, content contained · **Font** ui (eyebrow) · display (heading) · heading (subhead) · body (intro) · **Ground** light and dark: carries `data-surface="dark"`

## Markup

Element: `section[data-media][data-align][data-panel] > div.media(img) + div.inner > div.content(eyebrow? heading? subhead? intro? search? actions?)`

```html
<section class="xds-hero" data-media="1-1" data-align="start" data-panel="light"><div class="xds-hero__media"><img src="…" alt=""></div><div class="xds-hero__inner"><div class="xds-hero__content"><p class="xds-hero__eyebrow">Eyebrow</p><h1 class="xds-hero__heading">Heading</h1><p class="xds-hero__subhead">Subhead</p><p class="xds-hero__intro">Intro body.</p><form class="xds-hero__search">…input + button…</form><div class="xds-hero__actions"><button class="xds-button" data-variant="primary">CTA 1</button><button class="xds-button" data-variant="secondary">CTA 2</button></div></div></div></section>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `data-media` | `16-9` · `4-3` · `1-1` | `16-9` |
| `data-align` | `start` · `end` | `start` |
| `data-panel` | `light` · `dark` · `none` | `light` |
| `data-scrim` | `light` · `dark` | — |
| `__eyebrow[data-divider]` | `(present)` | — |
| `data-scale` | `display` | — |

## Which value

- `data-media`
  - `16-9`: a full-width photograph under the panel; may be a cover
  - `4-3`: a taller full-width photograph; may be a cover
  - `1-1`: photograph and content side by side; never a cover
- `data-panel`
  - `light`: the photograph suits a light panel
  - `dark`: the photograph suits a dark panel
  - `none`: no box: type on the scrim, or the page ground when split
- `data-scrim`
  - `dark`: no panel, with light type over the photograph
  - `light`: no panel, with dark type over the photograph
- `data-scale`
  - `display`: the one hero that opens the site; pair scrim dark, panel none

## Optional parts

`eyebrow` · `heading` · `subhead` · `intro` · `search` · `actions`

## Composes

`input` · `button`

## States

rest

## Placement

- **in**: main
- **first**: main

## How many

- **per**: page
- **max**: 1
- **of**: button
- **per**: .xds-hero__actions
- **max**: 2

## Never

Never author these:

- `__eyebrow[data-rule]`

## Patterns

- **cover-is-a-pairing** — A COVER is a hero plus a header carrying data-cover, and nothing else. YOU WRITE NO CSS FOR IT. xds.css pulls main up by the measured bar height, brings the hero's content back down by the same measure, and flips the bar opaque past the cover; xds.js stamps data-past-cover. Do not add a negative margin, a z-index, a position, a sentinel element or a scroll listener, and do not re-measure the header: it publishes --_xds-header-height and any page may read it. Every one of those was hand-rolled by a build agent that had the mechanism and not the sentence. The html on this entry is the whole arrangement, at BODY level, because that is the only level at which it can be shown: the mechanism is a sibling selector, so no single component's own example could ever carry it.
- **cover-is-a-layer** — A COVER IS A LAYER, NOT AN ORDER. The header does not sit above the hero; it sits ON it. The photograph's top edge is the top of the window and the sticky bar composites over it - so the first thing a reader sees at y=0 is photograph, with the lockup and nav floating on it. If your page shows the bar, and then the photograph beginning underneath it, you have built the ordinary arrangement and should not be carrying data-cover.
- **cover-needs-full-width-media** — A cover takes data-media="16-9" or "4-3". The 1-1 split puts the content panel beside the photograph, so half the bar would be translucent over a light panel and half over the photograph. P16 fails it.
- **cover-wants-a-dark-bar** — Over a photograph the header is normally data-surface="dark". 80% white glass over an arbitrary photograph does not hold the header's own 4.5:1 caveat; 80% navy does, and the two are the same rung at two polarities.
- **display-is-rationed** — data-scale="display" is the front-door voice and belongs to ONE hero per site. It is the hero's axis, not the header's - which is why the header carries no size prop: two components signaling front door is drift.

## On a dark surface

Parts that keep a light fill inside a dark component: `.xds-hero:not([data-panel="dark"]):not([data-panel="none"]) .xds-hero__content`.

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `<img>[alt]` | 1.1.1 |
| review | The image's alt is empty when it is decorative and says what the image means when it is not. | 1.1.1 |
| check | `[data-panel=none][data-media=16-9\|4-3] => [data-scrim]` | 1.4.3 |
| review | With data-panel=none over the photograph, the text keeps its contrast on the image and scrim behind it. | 1.4.3 |

## Behavior

What `components/bundle.js` does for it. A line marked CSS is the stylesheet's work.

```text
hero           data-media=1-1 at ≤bp → the halves stack, the photograph first
               and the content under it. Viewport-based: the grid is on the
               hero itself. CSS
               the hero's own width ≤ compact → data-scale=display rejoins the
               standard ladder: the heading takes the compact step and the
               subhead its ordinary size; ≤ narrow → the heading steps once
               more. CSS
```

## Tokens

Binds 61 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-hero-min-height` | `--s-size-measure-ui` | 384px |
| `--c-hero-inset-block` | `--s-space-5xl` | 64px |
| `--c-hero-inset-inline` | `--s-space-2xl` | 32px |
| `--c-hero-content-max-width` | `--s-size-measure-page` | 1440px |
| `--c-hero-panel-max-width` | `--s-size-measure-prose` | 672px |
| `--c-hero-panel-surface` | `--s-color-pinned-surface` | #f7f5f5 |
| `--c-hero-panel-border` | `--s-color-pinned-border` | #e8dfda |
| `--c-hero-panel-border-width` | `--s-border-width-hairline` | 1px |
| `--c-hero-panel-inset` | `--s-space-2xl` | 32px |
| `--c-hero-stack` | `--s-space-base` | 16px |
| `--c-hero-media-surface` | `--s-color-surface-sunken` | #f7f5f5 · dark #12151a |
| `--c-hero-scrim-light` | `--s-color-scrim-light` | rgb(255 255 255 / 0.6) |
| `--c-hero-scrim-dark` | `--s-color-scrim-dark` | rgb(21 30 38 / 0.6) |
| `--c-hero-eyebrow-font-family` | `--s-font-family-ui` | Outfit |
| `--c-hero-eyebrow-font-size` | `--s-type-ui-sm-size` | 12px |
| `--c-hero-eyebrow-line-height` | `--s-type-ui-sm-line-height` | 16px |
| `--c-hero-eyebrow-weight` | `--s-font-weight-medium` | 500 |
| `--c-hero-eyebrow-ink` | `--s-color-accent-base` | #896037 · dark #edbf98 |
| `--c-hero-heading-font-family` | `--s-font-family-display` | Lato |
| `--c-hero-heading-font-size` | `--s-type-display-sm-size` | 40px |
| `--c-hero-heading-line-height` | `--s-type-display-sm-line-height` | 44px |
| `--c-hero-heading-tracking` | `--s-type-display-sm-tracking` | -0.4px |
| `--c-hero-heading-weight` | `--s-font-weight-bold` | 700 |
| `--c-hero-heading-ink` | `--s-color-text-primary` | #262321 · dark #fff7f2 |
| `--c-hero-subhead-font-family` | `--s-font-family-heading` | Lato |
| `--c-hero-subhead-font-size` | `--s-type-heading-sm-size` | 20px |
| `--c-hero-subhead-line-height` | `--s-type-heading-sm-line-height` | 24px |
| `--c-hero-subhead-tracking` | `--s-type-heading-sm-tracking` | 0 |
| `--c-hero-subhead-weight` | `--s-font-weight-regular` | 400 |
| `--c-hero-subhead-ink` | `--s-color-text-secondary` | #4c453f · dark #e8dfda |
| `--c-hero-intro-font-family` | `--s-font-family-body` | Newsreader |
| `--c-hero-intro-font-size` | `--s-type-body-md-size` | 18px |
| `--c-hero-intro-line-height` | `--s-type-body-md-line-height` | 28px |
| `--c-hero-intro-tracking` | `--s-type-body-md-tracking` | -0.1px |
| `--c-hero-intro-ink` | `--s-color-text-secondary` | #4c453f · dark #e8dfda |
| `--c-hero-search-max-width` | `--s-size-measure-ui` | 384px |
| `--c-hero-actions-gap` | `--s-space-sm` | 8px |
| `--c-hero-actions-inset-block-start` | `--s-space-sm` | 8px |
| `--c-hero-eyebrow-tracking` | `--s-font-tracking-caps` | 0.3px |
| `--c-hero-eyebrow-divider` | `--s-color-emphasis-eyebrow-divider` | #75d3f4 |
| `--c-hero-eyebrow-divider-width` | `--s-border-width-thick` | 2px |
| `--c-hero-eyebrow-divider-length` | `--s-space-3xl` | 40px |
| `--c-hero-eyebrow-divider-gap` | `--s-space-sm` | 8px |
| `--c-hero-search-gap` | `--s-space-lg` | 20px |
| `--c-hero-heading-font-size-compact` | `--s-type-display-xs-size` | 32px |
| `--c-hero-heading-line-height-compact` | `--s-type-display-xs-line-height` | 36px |
| `--c-hero-heading-font-size-narrow` | `--s-type-heading-lg-size` | 32px |
| `--c-hero-heading-line-height-narrow` | `--s-type-heading-lg-line-height` | 40px |
| `--c-hero-panel-ink-strong` | `--s-color-pinned-ink-strong` | #262321 |
| `--c-hero-panel-ink` | `--s-color-pinned-ink` | #4c453f |
| `--c-hero-panel-eyebrow-ink` | `--s-color-accent-fill` | #896037 |
| `--c-hero-panel-surface-dark` | `--s-color-pinned-surface-dark` | #151e26 |
| `--c-hero-panel-ink-dark` | `--s-color-pinned-ink-dark` | #d4ceca |
| `--c-hero-panel-heading-ink-dark` | `--s-color-pinned-heading-dark` | #edbf98 |
| `--c-hero-panel-ink-strong-dark` | `--s-color-pinned-ink-strong-dark` | #fff7f2 |
| `--c-hero-heading-display-font-size` | `--s-type-display-lg-size` | 56px |
| `--c-hero-heading-display-line-height` | `--s-type-display-lg-line-height` | 60px |
| `--c-hero-heading-display-tracking` | `--s-type-display-lg-tracking` | -0.6px |
| `--c-hero-subhead-display-font-size` | `--s-type-heading-md-size` | 24px |
| `--c-hero-subhead-display-line-height` | `--s-type-heading-md-line-height` | 32px |
| `--c-hero-chrome-lift` | `--s-space-5xl` | 64px |
