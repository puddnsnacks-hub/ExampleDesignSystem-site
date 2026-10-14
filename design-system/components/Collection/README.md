# Collection

A list of links with context: title, summary, meta and optional badges.

**Class** `.xds-collection` · **Family** sets, two or more grouped blocks · **Font** heading (title) · body (summary) · ui (meta, tags) · **Ground** light only: stays light on a dark ground

## Markup

Element: `div.xds-collection[data-media] > ul > li.__item × n > div.__media? + div.__body(h3.__heading > a.xds-link.__title, p.__summary, p.__meta, div.__tags? > span.xds-badge)`

```html
<div class="xds-collection"><ul><li class="xds-collection__item"><div class="xds-collection__body"><h3 class="xds-collection__heading"><a class="xds-link xds-collection__title" href="#">Agency announces $1.2 billion for rural bridges</a></h3><p class="xds-collection__summary">Grants to 43 states for bridges in poor condition.</p><p class="xds-collection__meta"><time datetime="">August 18, 2026</time> · Highway Office</p><div class="xds-collection__tags"><span class="xds-badge" data-status="info">Press release</span></div></div></li></ul></div>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `data-media` | `(present)` | — |

## Which value

- `data-media`
  - `(present)`: items carry images; an item without one keeps an empty __media

## Optional parts

`media` · `tags`

## Composes

`link` · `badge`

## States

rest · title hover (the link's) · title focus-visible (the link's)

## What it is

list of links

## Patterns

- **title-is-the-link** — Do: one link per item, on the title. Don't: a 'Read more' link under the summary, or the whole item as a link — that is the tile.
- **heading-level** — Do: h3 under a section's h2, h2 under a page's h1. Don't: skip a level because it looks too big — the size comes from the token, not the tag.

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `has <ul>` | 1.3.1 |
| check | `__title[href]` | 2.4.4, 4.1.2 |
| check | `has <h3>` | 1.3.1, 2.4.10 |
| check | `<time>[datetime]` | 1.3.1 |
| check | `<img>[alt]` | 1.1.1 |
| review | A thumbnail's alt is empty unless the image says something the title does not. | 1.1.1 |

## Tokens

Binds 22 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-collection-inset-block` | `--s-space-base` | 16px |
| `--c-collection-stack` | `--s-space-xs` | 4px |
| `--c-collection-divider` | `--s-color-border-divider-soft` | #d4ceca · dark #1e374f |
| `--c-collection-title-font-family` | `--s-font-family-heading` | Lato |
| `--c-collection-title-font-size` | `--s-type-heading-sm-size` | 20px |
| `--c-collection-title-line-height` | `--s-type-heading-sm-line-height` | 24px |
| `--c-collection-title-tracking` | `--s-type-heading-sm-tracking` | 0 |
| `--c-collection-title-weight` | `--s-font-weight-bold` | 700 |
| `--c-collection-summary-font-family` | `--s-font-family-body` | Newsreader |
| `--c-collection-summary-font-size` | `--s-type-body-sm-size` | 16px |
| `--c-collection-summary-line-height` | `--s-type-body-sm-line-height` | 24px |
| `--c-collection-summary-tracking` | `--s-type-body-sm-tracking` | 0 |
| `--c-collection-summary-ink` | `--s-color-text-secondary` | #4c453f · dark #e8dfda |
| `--c-collection-meta-font-family` | `--s-font-family-ui` | Outfit |
| `--c-collection-meta-font-size` | `--s-type-ui-xs-size` | 11px |
| `--c-collection-meta-line-height` | `--s-type-ui-xs-line-height` | 16px |
| `--c-collection-meta-tracking` | `--s-type-ui-xs-tracking` | 0.1px |
| `--c-collection-meta-ink` | `--s-color-text-tertiary` | #6a5e55 · dark #b7aea6 |
| `--c-collection-tags-gap` | `--s-space-xs` | 4px |
| `--c-collection-media-width` | `--s-size-media-thumbnail` | 120px |
| `--c-collection-media-gap` | `--s-space-base` | 16px |
| `--c-collection-media-surface` | `--s-color-surface-sunken` | #f7f5f5 · dark #12151a |
