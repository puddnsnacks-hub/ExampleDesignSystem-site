# Stat

One measured figure with its unit and a plain-language label.

**Class** `.xds-stat` · **Family** data, values the user looks up or compares · **Font** display (value) · ui (unit) · body (label) · **Ground** light and dark: carries `data-surface="dark"`

## Markup

Element: `div.xds-stat-band(p.xds-eyebrow? + div.xds-stat x n) | div.xds-stat > p.__figure(span.__value + span.__unit?) + p.__label`

```html
<div class="xds-stat-band"><p class="xds-eyebrow">What the set measures</p><div class="xds-stat"><p class="xds-stat__figure"><span class="xds-stat__value">123.4</span><span class="xds-stat__unit">unit of value</span></p><p class="xds-stat__label">Short description of what the value measures</p></div><div class="xds-stat"><p class="xds-stat__figure"><span class="xds-stat__value">56</span><span class="xds-stat__unit">unit</span></p><p class="xds-stat__label">A second figure in the same set</p></div></div>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `data-surface` | `dark` | — |
| `data-tone` | `deep` | — |

## Which value

- `data-tone`
  - `deep`: the figure follows the story that explains it

## States

rest

## Placement

- **in**
  - .xds-stat-band
  - container

## How many

- **per**: .xds-stat-band
- **max**: 5
- **of**: eyebrow
- **per**: .xds-stat-band
- **max**: 1
- **gate**: P19
- **of**: eyebrow
- **per**: stat
- **max**: 0
- **gate**: P19

## Never

Never author these:

- `[data-tone=deep][data-surface=dark]`

## Patterns

- **one-eyebrow-per-grouping** — A .xds-stat-band carries at most ONE .xds-eyebrow and it comes first. It names what the whole set measures - the thing a single figure cannot say about itself. Two eyebrows in a band is two groups pretending to be one; split the band. P19 fails both.
- **never-on-the-figure** — An eyebrow never goes inside a .xds-stat. Per-figure it labels a number rather than a group, and the stat already has its own label under the figure for exactly that job.
- **the-band-is-the-grouping** — Group stats with .xds-stat-band, not with a bare grid. A grid is a layout and holds no contract; the band is the set, which is what lets the eyebrow belong to something and what lets the one-per rule be checked at all.
- **a-single-figure-needs-no-band** — A single figure needs no band and no eyebrow.

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| review | Heard aloud, the value, unit and label together still say what the figure measures. | 1.3.1 |

## Tokens

Binds 26 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-stat-divider` | `--s-color-border-vivid-soft` | #3cb1de · dark #75d3f4 |
| `--c-stat-divider-width` | `--s-border-width-thick` | 2px |
| `--c-stat-inset-block` | `--s-space-xs` | 4px |
| `--c-stat-inset-inline-start` | `--s-space-xl` | 24px |
| `--c-stat-inset-inline-end` | `--s-space-4xl` | 48px |
| `--c-stat-stack` | `--s-space-tight` | 10px |
| `--c-stat-band-eyebrow-gap` | `--s-space-base` | 16px |
| `--c-stat-figure-gap` | `--s-space-sm` | 8px |
| `--c-stat-value-font-family` | `--s-font-family-display` | Lato |
| `--c-stat-value-font-size` | `--s-type-display-md-size` | 48px |
| `--c-stat-value-line-height` | `--s-type-display-md-line-height` | 52px |
| `--c-stat-value-weight` | `--s-font-weight-bold` | 700 |
| `--c-stat-value-ink` | `--s-color-accent-base` | #896037 · dark #edbf98 |
| `--c-stat-value-ink-deep` | `--s-color-accent-numeral-deep` | #654421 |
| `--c-stat-unit-font-family` | `--s-font-family-ui` | Outfit |
| `--c-stat-unit-font-size` | `--s-type-ui-xs-size` | 11px |
| `--c-stat-unit-line-height` | `--s-type-ui-xs-line-height` | 16px |
| `--c-stat-unit-weight` | `--s-font-weight-medium` | 500 |
| `--c-stat-unit-tracking` | `--s-font-tracking-caps` | 0.3px |
| `--c-stat-unit-ink` | `--s-color-accent-base` | #896037 · dark #edbf98 |
| `--c-stat-label-font-family` | `--s-font-family-body` | Newsreader |
| `--c-stat-label-font-size` | `--s-type-body-xs-size` | 14px |
| `--c-stat-label-line-height` | `--s-type-body-xs-line-height` | 20px |
| `--c-stat-label-tracking` | `--s-type-body-xs-tracking` | 0 |
| `--c-stat-label-ink` | `--s-color-text-brand-tertiary` | #4f6780 · dark #cedeee |
| `--c-stat-max-width` | `--s-size-measure-ui` | 384px |
