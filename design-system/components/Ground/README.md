# Ground

The color of a section: a full-bleed band holding its content 32 off the window, with no vertical padding of its own.

**Class** `.xds-ground` · **Family** layout, the model every page is made of · **Font** none · **Ground** light and dark: carries `data-surface="dark"`

## Markup

Element: `section`

```html
<section class="xds-ground" data-ground="sunken" data-container="hug-left"><div class="xds-layout" data-kind="container" data-lead="heading-lg"></div><div class="xds-layout" data-kind="container" data-lead="body-md"></div></section>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `data-ground` | `sunken` · `elevated` · `friendly` · `dark` · `brand` · `vivid` · `quiet` · `fade` | — |
| `data-container` | `equal` · `hug-left` · `hug-right` · `set-left` · `set-right` · `third-left` · `third-right` | — |
| `data-set` | `prose` · `aside` · `ui` | — |

## Which value

- `data-ground`
  - `brand`: the colored band a page opens on, in the brand hue
  - `vivid`: the colored band a page opens on, in the vivid hue
- `data-container`
  - `equal`: two columns of equal weight
  - `hug-left`: a navigation rail on the left, hugging its links
  - `hug-right`: a navigation rail on the right, hugging its links
  - `set-left`: a left column designed to one width: a portrait, note or aside
  - `set-right`: a right column designed to one width: a portrait, note or aside
  - `third-left`: a third on the left whose 1:2 shape holds at every width
  - `third-right`: a third on the right whose 2:1 shape holds at every width

## States

rest

## Placement

- **notIn**
  - container
  - paper
- **gate**
  - P21
  - P15

## Never

Never author these:

- `[data-surface]`

## Patterns

- **the-seam-is-the-containers** — The seam between two columns is 24 + 24 = 48, and it is made by the two CONTAINERS - the ground has no column-gap and contributes nothing. So the two-container arrangement must hold containers, which is what its name says. A slot holding a bare aside, a prose block or a stack contributes 0, and 0 + 0 is the whole arithmetic. Do not fix this with a gap on the ground: where both slots ARE containers that would take the seam to 96.

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| review | A ground is a <section> with an accessible name only when it is a real document section; otherwise it is a <div>. | 1.3.1 |

## Behavior

What `components/bundle.js` does for it. A line marked CSS is the stylesheet's work.

```text
ground         ≤bp → every data-container arrangement := one column; the
               slots stack in source order, including a spanning slot and the
               rail. ≤bp → a slot whose direct child is an in-page-nav :=
               display:contents, so the nav's fold sticks against the whole
               ground. CSS; no attribute changes.                   #ground.stack
               wider than bp → no arrangement moves a slot out of source
               order: the rail of hug-right|set-right is the LAST slot, of
               hug-left|set-left the first after any spanning head. Reading
               and focus order are the DOM's. CSS                   #ground.source-order
```

## Tokens

Binds 20 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-ground-inset` | `--s-space-2xl` | 32px |
| `--c-ground-surface-page` | `--s-color-surface-page` | #fcfbfb · dark #151e26 |
| `--c-ground-surface-sunken` | `--s-color-surface-sunken` | #f7f5f5 · dark #12151a |
| `--c-ground-surface-elevated` | `--s-color-surface-elevated` | #ffffff · dark #1e374f |
| `--c-ground-surface-friendly` | `--s-color-surface-tint-vivid` | #f2feff |
| `--c-ground-surface-quiet` | `--s-color-surface-tint-primary-soft` | #f7fbff |
| `--c-ground-surface-dark` | `--s-color-pinned-surface-dark` | #151e26 |
| `--c-ground-surface-brand` | `--s-color-pinned-surface-raised-dark` | #142536 |
| `--c-ground-surface-vivid` | `--s-color-pinned-surface-vivid-dark` | #003244 |
| `--c-ground-fade-from` | `--s-color-surface-page` | #fcfbfb · dark #151e26 |
| `--c-ground-fade-to` | `--s-color-surface-sunken` | #f7f5f5 · dark #12151a |
| `--c-ground-content-max` | `--s-size-measure-page` | 1440px |
| `--c-ground-divider-width` | `--s-border-width-hairline` | 1px |
| `--c-ground-divider-elevated` | `--s-color-border-seam-elevated` | #f5f3f2 |
| `--c-ground-divider-page` | `--s-color-border-seam-page` | #f5f3f2 |
| `--c-ground-divider-sunken` | `--s-color-border-seam-sunken` | #e8dfda |
| `--c-ground-divider-quiet` | `--s-color-border-seam-quiet` | #f0f7ff |
| `--c-ground-divider-friendly` | `--s-color-border-seam-friendly` | #e7f8fd |
| `--c-ground-divider-brand` | `--s-color-border-seam-dark` | #1e374f |
| `--c-ground-divider-dark` | `--s-color-border-seam-dark` | #1e374f |
