# Paper

A container that carries a fill: a panel bounded by its own edge rather than by the window.

**Class** `.xds-paper` · **Family** layout, the model every page is made of · **Font** none · **Ground** light and dark: carries `data-surface="dark"`

## Markup

Element: `div`

```html
<div class="xds-paper" data-surface="raised"></div>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `data-surface` | `sunken` · `elevated` · `raised` | — |
| `data-container` | `equal` · `hug-left` · `hug-right` · `set-left` · `set-right` · `third-left` · `third-right` | — |

## States

rest

## Placement

- **in**: container
- **gate**: P22

## Never

Never author these:

- `[role]`

## Patterns

- **two-thirds-column** — In a third-left or third-right ground a paper takes the two-thirds column, never the third: with third-right the paper's container comes first, with third-left second. P28 errors on a paper in the third.

## Tokens

Binds 9 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-paper-inset` | `--s-space-xl` | 24px |
| `--c-paper-surface-page` | `--s-color-surface-page` | #fcfbfb · dark #151e26 |
| `--c-paper-border-on-page` | `--s-color-border-on-page` | #e8dfda · dark #1e374f |
| `--c-paper-surface-sunken` | `--s-color-surface-sunken` | #f7f5f5 · dark #12151a |
| `--c-paper-border-on-sunken` | `--s-color-border-on-sunken` | #e8dfda · dark #1e374f |
| `--c-paper-surface-elevated` | `--s-color-surface-elevated` | #ffffff · dark #1e374f |
| `--c-paper-border-on-elevated` | `--s-color-border-on-elevated` | #d4ceca · dark #142536 |
| `--c-paper-surface-raised` | `--s-color-surface-raised` | #ffffff · dark #142536 |
| `--c-paper-border-on-raised` | `--s-color-border-on-raised` | #d4ceca · dark #1e374f |
