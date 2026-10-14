# Breadcrumb

The trail to this page, in its own container.

**Class** `.xds-breadcrumb` · **Family** wayfinding, the user goes · **Font** ui · **Ground** light and dark: carries `data-surface="dark"`

## Markup

Element: `nav[aria-label=Breadcrumb] > ol.__list > (li > a.__link) x n + li > span.__current[aria-current=page]`

```html
<nav class="xds-breadcrumb" aria-label="Breadcrumb"><ol class="xds-breadcrumb__list"><li><a class="xds-breadcrumb__link" href="#">Home</a></li><li><a class="xds-breadcrumb__link" href="#">Programs</a></li><li><span class="xds-breadcrumb__current" aria-current="page">Bridge Investment</span></li></ol></nav>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `data-surface` | `dark` | — |

## States

rest · hover · active · focus-visible

## Placement

- **in**: container
- **after**: hero
- **otherwise**
  - **first**: main
- **gate**
  - P17
  - P18

## How many

- **per**: page
- **max**: 1

## Copy

- **aria-label**: Breadcrumb

## Patterns

- **below-a-hero** — With a hero, the breadcrumb goes BELOW it - in the first ordinary section under the hero, not between the header and the hero. The hero carries the h1, so a trail above it sits above the page's own title; and on a cover the space above the hero is occupied by the header, so a breadcrumb there renders under the glass bar. P17 fails it.
- **in-the-section-container** — The breadcrumb goes INSIDE the container of the section it leads to, like every other component - it is not a sibling of the content. MEASURED at 1440 and 1024: in the container the trail starts 56 from the window, the same place every other line on the page starts; hoisted out to the ground it starts 32 and falls out of alignment with the content it introduces. A container of its own also lands 56, so that shape is legal and buys nothing. P18 counts the loose ones. REPLACES it-stands-alone (2026-09-17), which required the opposite and priced the nesting at 64 and a container of its own at 108 - numbers from before the 2026-09-01 layout rework, and false in all eleven templates carrying a breadcrumb by the time anyone read them.

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `[aria-label]` | 1.3.1, 2.4.1 |
| check | `has __current[aria-current=page]` | 1.3.1, 2.4.8 |
| check | `__current[!href]` | 1.3.1, 2.4.8 |
| check | `__link[!aria-current]` | 1.3.1, 2.4.8 |

## Tokens

Binds 12 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-breadcrumb-font-family` | `--s-font-family-ui` | Outfit |
| `--c-breadcrumb-inset-block` | `--s-space-base` | 16px |
| `--c-breadcrumb-font-size` | `--s-type-ui-sm-size` | 12px |
| `--c-breadcrumb-line-height` | `--s-type-ui-sm-line-height` | 16px |
| `--c-breadcrumb-tracking` | `--s-type-ui-sm-tracking` | 0.1px |
| `--c-breadcrumb-weight` | `--s-font-weight-regular` | 400 |
| `--c-breadcrumb-link-ink` | `--s-color-action-link` | #00506c · dark #cedeee |
| `--c-breadcrumb-ink-current` | `--s-color-text-secondary` | #4c453f · dark #e8dfda |
| `--c-breadcrumb-gap` | `--s-space-sm` | 8px |
| `--c-breadcrumb-chevron-size` | `--s-size-icon-xs` | 12px |
| `--c-breadcrumb-chevron-ink` | `--s-color-text-tertiary` | #6a5e55 · dark #b7aea6 |
| `--c-breadcrumb-min-height` | `--s-size-icon-lg` | 24px |
