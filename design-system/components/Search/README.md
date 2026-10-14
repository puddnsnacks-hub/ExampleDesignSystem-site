# Search

The search control: a text input and its icon button fused into one.

**Class** `.xds-search` · **Family** fields, the user gives · **Font** ui · **Ground** light only: stays light on a dark ground

## Markup

Element: `form[role=search] > input.xds-input[type=search] + button.clear + button.xds-button[data-variant=primary][data-icon=only]`

```html
<form class="xds-search" role="search"><input class="xds-input" type="search" aria-label="Search" placeholder="Begin typing to search"><button class="xds-search__clear" type="button" aria-label="Clear"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 5l10 10M15 5L5 15"/></svg></button><button class="xds-button" data-variant="primary" data-icon="only" aria-label="Search" type="submit"><svg class="xds-button__icon" viewBox="0 0 20 20" aria-hidden="true"><circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" stroke-width="2" fill="none"/><path d="M13 13l4.5 4.5" stroke="currentColor" stroke-width="2"/></svg></button></form>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `data-width` | `full` | — |

## States

rest · focus-within · has value (clear shows)

## Copy

- **$comment**: The aria-label of each icon-only button, verbatim.
- **submit**: Search
- **clear**: Clear

## Never

Never author these:

- `[data-has-value]`

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `[role=search]` | 1.3.1 |
| check | `input[!aria-labelledby] => input[aria-label]` | 4.1.2 |
| check | `button[data-icon=only][aria-label]` | 4.1.2 |
| check | `__clear[aria-label]` | 4.1.2 |
| check | `<svg>[aria-hidden=true]` | 1.1.1 |
| behavior | `search.clear` | 2.4.3 |

## Behavior

What `components/bundle.js` does for it. A line marked CSS is the stylesheet's work.

```text
search         input → data-has-value on the root while the field is
               non-empty; click the clear control → empty it, drop the flag,
               refocus the input and fire `input`.                  #search.clear
```

## Tokens

Binds 5 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-search-width` | `--s-size-measure-ui` | 384px |
| `--c-search-icon-size` | `--s-size-icon-md` | 20px |
| `--c-search-clear-size` | `--s-size-icon-lg` | 24px |
| `--c-search-clear-ink` | `--s-color-text-tertiary` | #6a5e55 · dark #b7aea6 |
| `--c-search-clear-ink-hover` | `--s-color-text-primary` | #262321 · dark #fff7f2 |
