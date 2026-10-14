# SrOnly

Text announced by assistive technology and painted nowhere.

**Class** `.xds-sr-only` · **Family** content, the user reads · **Font** inherits · **Ground** light only: stays light on a dark ground

## Markup

Element: `span | label | caption | h2 | a | button`

```html
<button class="xds-button" data-variant="tertiary"><svg class="xds-icon" aria-hidden="true"><use href="#xds-search"></use></svg><span class="xds-sr-only">Search</span></button>
```

## States

rest · focus-visible (unclipped)

## Never

Never author these:

- `[aria-hidden]`

## Patterns

- **name-not-decoration** — An icon-only control gets its name from an.xds-sr-only span inside it, not from a title attribute.
- **not-a-layout-tool** — If the text helps sighted readers too, show it. sr-only hides; it does not tidy.

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| behavior | `sr-only.unclip` | 2.4.7 |
| review | Hidden text says only what a sighted user gets from context, such as an icon-only button's name; nothing sighted users need wears it. | 1.3.1 |

## Behavior

What `components/bundle.js` does for it. A line marked CSS is the stylesheet's work.

```text
sr-only        focus-visible on the element → unclipped: it paints where it
               stands in the flow; focus leaves → clipped again. CSS
               (.xds-sr-only:not(:focus-visible))                   #sr-only.unclip
               ¬ Focus that is not focus-visible, such as a mouse click,
               leaves it clipped.
```
