# Layout

A layout primitive that paints nothing: stack, grid, container or cluster, at a token gap.

**Class** `.xds-layout` · **Family** layout, the model every page is made of · **Font** none — inherits · **Ground** light only: stays light on a dark ground

## Markup

Element: `div[data-kind] > *`

```html
<section class="xds-ground" data-container="hug-left"><div class="xds-layout" data-kind="container">…in-page-nav…</div><div class="xds-layout" data-kind="container"><main class="xds-prose">…</main></div></section>
<div class="xds-layout" data-kind="grid" data-columns="3" data-gap="md"><article class="xds-tile">…</article>×3</div>
<div class="xds-layout" data-kind="container"><div class="xds-layout" data-kind="stack" data-gap="xl">…</div></div>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `data-kind` | `stack` · `grid` · `container` · `cluster` | `stack` |
| `data-gap` | `sm` · `md` · `lg` · `xl` | — |
| `data-width` | `hug` · `set` | — |
| `data-set` | `page` · `content` · `prose` · `aside` · `ui` | — |
| `data-lead` | `display-xl` · `display-lg` · `display-md` · `display-sm` · `display-xs` · `heading-xl` · `heading-lg` · `heading-md` · `heading-sm` · `body-xl` · `body-lg` · `body-md` | — |
| `data-columns` | `2` · `3` · `4` | — |
| `data-align` | `end` | — |
| `data-span` | `full` | — |

## States

rest

## What it is

layout primitive

## Never

Never author these:

- `[data-kind=sidebar]`
- `[data-side]`
- `[data-container]`
- `[data-kind=stack][data-columns]`
- `[data-kind=container][data-columns]`
- `[data-kind=cluster][data-columns]`
- `[data-kind=stack][data-align]`
- `[data-kind=grid][data-align]`
- `[data-kind=container][data-align]`

## Patterns

- **one-kind-per-box** — Do: nest a stack inside a grid cell. Don't: put two data-kind values on one element.
- **source-order** — Do: aside then main in the DOM and let the ground's data-container=hug-right flip it. Don't: reorder the DOM to move the aside.
- **a-container-inside-each-ground** — Do: one container INSIDE each ground - the ground carries the color and holds its content 32 off the window, the container holds its content 24 off the ground, and the text lands at 56. Don't: a container outside a ground, or one container at the page level wrapping the sections - a ground IS a section and may not be placed in a box. Counted across the eighteen templates: 35 containers inside a ground, 0 outside one. REPLACES container-outermost (2026-09-17), which said the reverse - it predates the ground model and contradicted every shipped page.

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| review | Children that are a list or a landmark are written as one: a <ul> of tiles, a <nav> or <aside> rail, never a second <main>. | 1.3.1 |
| behavior | `ground.source-order` | 1.3.2, 2.4.3 |
| behavior | `layout.grid-collapse` | 1.4.10 |
| behavior | `ground.stack` | 1.4.10 |

## Behavior

What `components/bundle.js` does for it. A line marked CSS is the stylesheet's work.

```text
layout         ≤bp → data-kind=grid := 2 columns, whatever data-columns says;
               ≤narrow → data-kind=grid := 1 column. CSS            #layout.grid-collapse
               ¬ A container inside a ground keeps its
               c.layout.container-inset at every width; the ground's inset is
               what steps (law layout-ground-inset).
```

## Tokens

Binds 32 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-layout-gap-sm` | `--s-space-sm` | 8px |
| `--c-layout-gap-md` | `--s-space-base` | 16px |
| `--c-layout-gap-lg` | `--s-space-xl` | 24px |
| `--c-layout-gap-xl` | `--s-space-3xl` | 40px |
| `--c-layout-aside-width` | `--s-size-aside-nav` | 256px |
| `--c-layout-container-max` | `--s-size-measure-page` | 1440px |
| `--c-layout-gutter` | `--s-space-2xl` | 32px |
| `--c-layout-container-inset` | `--s-space-xl` | 24px |
| `--c-layout-lead-line-height` | `--s-type-body-md-line-height` | 28px |
| `--c-layout-seam-breadcrumb` | `--s-space-4xl` | 48px |
| `--c-layout-lead-ratio-polarity` | `--s-ratio-section-pad-polarity` | 2 |
| `--c-layout-lead-ratio` | `--s-ratio-section-pad` | 1.5 |
| `--c-layout-lead-display-xl` | `--s-type-display-xl-line-height` | 80px |
| `--c-layout-lead-display-lg` | `--s-type-display-lg-line-height` | 60px |
| `--c-layout-lead-display-md` | `--s-type-display-md-line-height` | 52px |
| `--c-layout-lead-display-sm` | `--s-type-display-sm-line-height` | 44px |
| `--c-layout-lead-display-xs` | `--s-type-display-xs-line-height` | 36px |
| `--c-layout-lead-heading-xl` | `--s-type-heading-xl-line-height` | 52px |
| `--c-layout-lead-heading-lg` | `--s-type-heading-lg-line-height` | 40px |
| `--c-layout-lead-heading-md` | `--s-type-heading-md-line-height` | 32px |
| `--c-layout-lead-heading-sm` | `--s-type-heading-sm-line-height` | 24px |
| `--c-layout-lead-body-xl` | `--s-type-body-xl-line-height` | 40px |
| `--c-layout-lead-body-lg` | `--s-type-body-lg-line-height` | 32px |
| `--c-layout-lead-ui-sm` | `--s-type-ui-sm-line-height` | 16px |
| `--c-layout-lead-ui-md` | `--s-type-ui-md-line-height` | 20px |
| `--c-layout-lead-body-sm` | `--s-type-body-sm-line-height` | 24px |
| `--c-layout-lead-body-md` | `--s-type-body-md-line-height` | 28px |
| `--c-layout-set-page` | `--s-size-measure-page` | 1440px |
| `--c-layout-set-content` | `--s-size-measure-feature` | 1024px |
| `--c-layout-set-prose` | `--s-size-measure-prose` | 672px |
| `--c-layout-set-aside` | `--s-size-measure-aside` | 480px |
| `--c-layout-set-ui` | `--s-size-measure-ui` | 384px |
