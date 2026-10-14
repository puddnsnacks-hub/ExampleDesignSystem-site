# Card

A raised container for a piece of content that stands on its own.

**Class** `.xds-card` · **Family** blocks, content contained · **Font** heading (title) · body (body) · ui (eyebrow, meta) · **Ground** light and dark: carries `data-surface="dark"`

## Markup

Element: `article | div`

```html
<article class="xds-card" data-emphasis="2"><p class="xds-card__eyebrow">Eyebrow</p><h3 class="xds-card__title">Title</h3><p class="xds-card__body">Body set in Newsreader.</p><p class="xds-card__meta">Meta</p></article>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `data-emphasis` | `1` · `2` · `3` · `4` | — |
| `data-density` | `compact` | — |
| `data-interactive` | `(present)` | — |
| `data-surface` | `dark` | — |
| `data-variant` | `accent` | — |
| `data-fill` | `gray` · `cream` · `primary` · `vivid` · `gray-70` · `gray-80` · `gray-90` | — |

## Which value

- `data-variant`
  - `accent`: featured or high-visibility content; rationed
- `data-fill`
  - `gray-70`: a dark card only (data-surface=dark)
  - `gray-80`: a dark card only (data-surface=dark)
  - `gray-90`: a dark card only (data-surface=dark)

## Composes

`button`

## States

rest · hover (interactive) · focus-visible (interactive)

## Never

Never author these:

- `[data-surface=dark][data-fill=gray]`
- `[data-surface=dark][data-fill=cream]`
- `[data-surface=dark][data-fill=primary]`
- `[data-surface=dark][data-fill=vivid]`
- `[role=button]`
- `[tabindex=0]`
- `[onclick]`

## Patterns

- **linking-card-title** — A linking card never underlines its title: mark the headline with a trailing pop-out icon, or compose the card with a real button (an image card and a button for feature moments).

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| review | The card's action is one real <a> or <button> inside it, with no interactive element nested in another and no handler on the card. | 2.1.1, 4.1.2 |

## Tokens

Binds 51 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-card-surface` | `--s-color-surface-card` | #ffffff · dark #1e374f |
| `--c-card-surface-gray` | `--s-color-surface-tint-gray` | #f5f3f2 |
| `--c-card-surface-cream` | `--s-color-surface-tint-cream` | #fff7f2 |
| `--c-card-surface-primary` | `--s-color-surface-tint-primary` | #f0f7ff |
| `--c-card-surface-vivid` | `--s-color-surface-tint-vivid` | #f2feff |
| `--c-card-surface-gray-70` | `--s-color-surface-shade-gray-70` | #3d3833 |
| `--c-card-surface-gray-80` | `--s-color-surface-shade-gray-80` | #35312d |
| `--c-card-surface-gray-90` | `--s-color-surface-shade-gray-90` | #262321 |
| `--c-card-border` | `--s-color-border-on-elevated` | #d4ceca · dark #142536 |
| `--c-card-emphasis-border` | `--s-color-emphasis-border` | #3cb1de |
| `--c-card-emphasis-edge` | `--s-color-emphasis-edge` | #017097 |
| `--c-card-accent-border` | `--s-color-emphasis-accent-border` | #896037 · dark #d49458 |
| `--c-card-accent-edge` | `--s-color-emphasis-accent-edge` | #654421 · dark #896037 |
| `--c-card-accent-surface` | `--s-color-emphasis-accent-surface` | #fff7f2 · dark #1e374f |
| `--c-card-accent-eyebrow-ink` | `--s-color-emphasis-accent-ink` | #654421 · dark #edbf98 |
| `--c-card-accent-title-ink` | `--s-color-emphasis-accent-ink-strong` | #262321 · dark #ffe9da |
| `--c-card-emphasis-edge-1` | `--s-emphasis-edge-1` | 1px |
| `--c-card-emphasis-edge-2` | `--s-emphasis-edge-2` | 3px |
| `--c-card-emphasis-edge-3` | `--s-emphasis-edge-3` | 6px |
| `--c-card-emphasis-edge-4` | `--s-emphasis-edge-4` | 12px |
| `--c-card-inset` | `--s-space-xl` | 24px |
| `--c-card-inset-compact` | `--s-space-base` | 16px |
| `--c-card-stack` | `--s-space-sm` | 8px |
| `--c-card-eyebrow-font-family` | `--s-font-family-ui` | Outfit |
| `--c-card-eyebrow-font-size` | `--s-type-ui-xs-size` | 11px |
| `--c-card-eyebrow-line-height` | `--s-type-ui-xs-line-height` | 16px |
| `--c-card-eyebrow-weight` | `--s-font-weight-medium` | 500 |
| `--c-card-eyebrow-ink` | `--s-color-accent-base` | #896037 · dark #edbf98 |
| `--c-card-title-font-family` | `--s-font-family-heading` | Lato |
| `--c-card-title-font-size` | `--s-type-heading-sm-size` | 20px |
| `--c-card-title-line-height` | `--s-type-heading-sm-line-height` | 24px |
| `--c-card-title-tracking` | `--s-type-heading-sm-tracking` | 0 |
| `--c-card-title-weight` | `--s-font-weight-bold` | 700 |
| `--c-card-title-ink` | `--s-color-text-primary` | #262321 · dark #fff7f2 |
| `--c-card-body-font-family` | `--s-font-family-body` | Newsreader |
| `--c-card-body-font-size` | `--s-type-body-sm-size` | 16px |
| `--c-card-body-line-height` | `--s-type-body-sm-line-height` | 24px |
| `--c-card-body-tracking` | `--s-type-body-sm-tracking` | 0 |
| `--c-card-body-ink` | `--s-color-text-secondary` | #4c453f · dark #e8dfda |
| `--c-card-meta-font-family` | `--s-font-family-ui` | Outfit |
| `--c-card-meta-font-size` | `--s-type-ui-sm-size` | 12px |
| `--c-card-meta-line-height` | `--s-type-ui-sm-line-height` | 16px |
| `--c-card-meta-tracking` | `--s-type-ui-sm-tracking` | 0.1px |
| `--c-card-meta-ink` | `--s-color-text-tertiary` | #6a5e55 · dark #b7aea6 |
| `--c-card-eyebrow-tracking` | `--s-font-tracking-caps` | 0.3px |
| `--c-card-emphasis-title-font-size` | `--s-type-heading-md-size` | 24px |
| `--c-card-emphasis-title-line-height` | `--s-type-heading-md-line-height` | 32px |
| `--c-card-emphasis-title-tracking` | `--s-type-heading-md-tracking` | -0.2px |
| `--c-card-emphasis-body-font-size` | `--s-type-body-lg-size` | 20px |
| `--c-card-emphasis-body-line-height` | `--s-type-body-lg-line-height` | 32px |
| `--c-card-emphasis-body-tracking` | `--s-type-body-lg-tracking` | -0.1px |
