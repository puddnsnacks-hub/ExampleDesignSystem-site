# Divider

A horizontal rule between two blocks that have no other boundary.

**Class** `.xds-divider` · **Family** content, the user reads · **Font** none · **Ground** light and dark: carries `data-surface="dark"`

## Markup

Element: `hr`

```html
<hr class="xds-divider">
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `data-weight` | `strong` | — |
| `data-style` | `dash` | — |
| `data-surface` | `dark` | — |

## States

rest

## Placement

- **notAdjacent**: divider
- **gate**: P12

## Never

Never author these:

- `[data-weight=strong][data-surface=dark]`

## Patterns

- **carries-its-own-space** — A divider holds its own space, the same above and below. Never add a margin or a spacer beside it: in a container the container's gap counts toward that space, and in a stack, grid or cluster the gap is all of it.

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| review | An <hr> that is only visual rhythm between blocks already grouped carries aria-hidden="true". | 1.3.1 |

## Tokens

Binds 5 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-divider-divider` | `--s-color-border-divider-soft` | #d4ceca · dark #1e374f |
| `--c-divider-divider-strong` | `--s-color-border-divider-strong` | #988b80 |
| `--c-divider-divider-width` | `--s-border-width-hairline` | 1px |
| `--c-divider-divider-width-strong` | `--s-border-width-thick` | 2px |
| `--c-divider-space` | `--s-space-base` | 16px |
