# Pagination

Numbered pages of one list.

**Class** `.xds-pagination` · **Family** wayfinding, the user goes · **Font** ui · **Ground** light only: stays light on a dark ground

## Markup

Element: `nav[aria-label=Pagination] > ul.__list > (li > a.__item[aria-label=First page])? + (li > a.__item[aria-label=Previous page]) + (li > a.__item | li > span.__ellipsis?) x n + (li > a.__item[aria-label=Next page]) + (li > a.__item[aria-label=Last page])?`

```html
<nav class="xds-pagination" aria-label="Pagination"><ul class="xds-pagination__list"><li><a class="xds-pagination__item" href="#" aria-label="First page">First</a></li><li><a class="xds-pagination__item" href="#" aria-label="Previous page"><svg class="xds-icon" data-size="sm" aria-hidden="true"><use href="#xds-chevron-left"></use></svg></a></li><li><a class="xds-pagination__item" href="#">1</a></li><li><a class="xds-pagination__item" href="#" aria-current="page">2</a></li><li><a class="xds-pagination__item" href="#">3</a></li><li><span class="xds-pagination__ellipsis" aria-hidden="true">…</span></li><li><a class="xds-pagination__item" href="#">12</a></li><li><a class="xds-pagination__item" href="#" aria-label="Next page"><svg class="xds-icon" data-size="sm" aria-hidden="true"><use href="#xds-chevron-right"></use></svg></a></li><li><a class="xds-pagination__item" href="#" aria-label="Last page">Last</a></li></ul></nav>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `__item[aria-current]` | `page` | — |
| `__item[aria-disabled]` | `true` | — |

## Optional parts

`ellipsis`

## States

rest · hover · active · current · disabled · focus-visible

## Copy

- **aria-label**: Pagination
- **first**: First page
- **previous**: Previous page
- **next**: Next page
- **last**: Last page

## Never

Never author these:

- `__item[aria-disabled=true][href]`

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `[aria-label]` | 1.3.1, 2.4.1 |
| check | `has __item[aria-label=Previous page]` | 2.4.4, 4.1.2 |
| check | `has __item[aria-label=Next page]` | 2.4.4, 4.1.2 |
| check | `has __item[aria-current=page]` | 1.3.1, 2.4.8 |
| check | `__item[aria-disabled=true] => __item[role=link]` | 4.1.2 |

## Tokens

Binds 15 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-pagination-font-family` | `--s-font-family-ui` | Outfit |
| `--c-pagination-font-size` | `--s-type-ui-md-size` | 13.5px |
| `--c-pagination-line-height` | `--s-type-ui-md-line-height` | 20px |
| `--c-pagination-tracking` | `--s-type-ui-md-tracking` | 0.1px |
| `--c-pagination-weight` | `--s-font-weight-medium` | 500 |
| `--c-pagination-gap` | `--s-space-xs` | 4px |
| `--c-pagination-item-size` | `--s-size-control-md` | 40px |
| `--c-pagination-item-inset-inline` | `--s-space-md` | 12px |
| `--c-pagination-ink` | `--s-color-text-tertiary` | #6a5e55 · dark #b7aea6 |
| `--c-pagination-ink-current` | `--s-color-text-primary` | #262321 · dark #fff7f2 |
| `--c-pagination-ink-disabled` | `--s-color-text-disabled` | #988b80 |
| `--c-pagination-indicator` | `--s-color-emphasis-selected-edge` | #017097 · dark #d69e6e |
| `--c-pagination-indicator-width` | `--s-emphasis-edge-2` | 3px |
| `--c-pagination-ellipsis-ink` | `--s-color-text-tertiary` | #6a5e55 · dark #b7aea6 |
| `--c-pagination-icon-size` | `--s-size-icon-sm` | 16px |
