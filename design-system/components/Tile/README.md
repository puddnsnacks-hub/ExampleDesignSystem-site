# Tile

A card with a required 16:9 image over its copy.

**Class** `.xds-tile` · **Family** blocks, content contained · **Font** ui (eyebrow, meta) · heading (title) · body (text) · **Ground** light and dark: carries `data-surface="dark"`

## Markup

Element: `article | a > div.media(img) + div.body(eyebrow + title + text + meta + div.action?)`

```html
<article class="xds-tile" data-emphasis="2"><div class="xds-tile__media"><img src="…" alt=""></div><div class="xds-tile__body"><p class="xds-tile__eyebrow">Program</p><h3 class="xds-tile__title">Title</h3><p class="xds-tile__text">Body set in Newsreader.</p><p class="xds-tile__meta">Updated </p></div></article>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `data-emphasis` | `1` · `2` · `3` · `4` | — |
| `data-surface` | `dark` | — |
| `data-interactive` | `(present)` | — |
| `data-variant` | `accent` | — |
| `__media[data-ratio]` | `square` | — |

## Which value

- `data-variant`
  - `accent`: featured or high-visibility content; rationed

## Optional parts

`action`

## States

rest · hover (linked) · focus-visible (linked)

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `[href] => has __title` | 2.4.4 |
| check | `<img>[alt]` | 1.1.1 |
| review | The image's alt is empty when it is decorative and says what the image means when it is not. | 1.1.1 |

## Tokens

Binds 41 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-tile-surface` | `--s-color-surface-raised` | #ffffff · dark #142536 |
| `--c-tile-border` | `--s-color-border-on-raised` | #d4ceca · dark #1e374f |
| `--c-tile-emphasis-border` | `--s-color-emphasis-border` | #3cb1de |
| `--c-tile-emphasis-edge` | `--s-color-emphasis-edge` | #017097 |
| `--c-tile-accent-border` | `--s-color-emphasis-accent-border` | #896037 · dark #d49458 |
| `--c-tile-accent-edge` | `--s-color-emphasis-accent-edge` | #654421 · dark #896037 |
| `--c-tile-accent-surface` | `--s-color-emphasis-accent-surface` | #fff7f2 · dark #1e374f |
| `--c-tile-accent-eyebrow-ink` | `--s-color-emphasis-accent-ink` | #654421 · dark #edbf98 |
| `--c-tile-emphasis-edge-1` | `--s-emphasis-edge-1` | 1px |
| `--c-tile-emphasis-edge-2` | `--s-emphasis-edge-2` | 3px |
| `--c-tile-emphasis-edge-3` | `--s-emphasis-edge-3` | 6px |
| `--c-tile-emphasis-edge-4` | `--s-emphasis-edge-4` | 12px |
| `--c-tile-media-surface` | `--s-color-surface-sunken` | #f7f5f5 · dark #12151a |
| `--c-tile-media-divider` | `--s-color-border-divider-soft` | #d4ceca · dark #1e374f |
| `--c-tile-inset` | `--s-space-base` | 16px |
| `--c-tile-stack` | `--s-space-sm` | 8px |
| `--c-tile-eyebrow-font-family` | `--s-font-family-ui` | Outfit |
| `--c-tile-eyebrow-font-size` | `--s-type-ui-xs-size` | 11px |
| `--c-tile-eyebrow-line-height` | `--s-type-ui-xs-line-height` | 16px |
| `--c-tile-eyebrow-weight` | `--s-font-weight-medium` | 500 |
| `--c-tile-eyebrow-ink` | `--s-color-accent-base` | #896037 · dark #edbf98 |
| `--c-tile-title-font-family` | `--s-font-family-heading` | Lato |
| `--c-tile-title-font-size` | `--s-type-heading-xs-size` | 18px |
| `--c-tile-title-line-height` | `--s-type-heading-xs-line-height` | 24px |
| `--c-tile-title-tracking` | `--s-type-heading-xs-tracking` | 0 |
| `--c-tile-title-weight` | `--s-font-weight-bold` | 700 |
| `--c-tile-title-ink` | `--s-color-text-primary` | #262321 · dark #fff7f2 |
| `--c-tile-body-font-family` | `--s-font-family-body` | Newsreader |
| `--c-tile-body-font-size` | `--s-type-body-xs-size` | 14px |
| `--c-tile-body-line-height` | `--s-type-body-xs-line-height` | 20px |
| `--c-tile-body-tracking` | `--s-type-body-xs-tracking` | 0 |
| `--c-tile-body-ink` | `--s-color-text-secondary` | #4c453f · dark #e8dfda |
| `--c-tile-meta-font-family` | `--s-font-family-ui` | Outfit |
| `--c-tile-meta-font-size` | `--s-type-ui-sm-size` | 12px |
| `--c-tile-meta-line-height` | `--s-type-ui-sm-line-height` | 16px |
| `--c-tile-meta-tracking` | `--s-type-ui-sm-tracking` | 0.1px |
| `--c-tile-meta-ink` | `--s-color-text-tertiary` | #6a5e55 · dark #b7aea6 |
| `--c-tile-grid-gap` | `--s-space-xl` | 24px |
| `--c-tile-grid-min` | `--s-size-measure-ui` | 384px |
| `--c-tile-eyebrow-tracking` | `--s-font-tracking-caps` | 0.3px |
| `--c-tile-action-inset-block` | `--s-space-base` | 16px |
