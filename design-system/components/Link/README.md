# Link

Inline navigation inside a sentence, underlined at rest.

**Class** `.xds-link` · **Family** wayfinding, the user goes · **Font** inherits · **Ground** light and dark: carries `data-surface="dark"`

## Markup

Element: `a`

```html
<a class="xds-link" href="#">Read the plan</a>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `data-surface` | `dark` | — |

## States

rest · hover · focus-visible · active · visited · external (rel=external → ↗)

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `[href]` | 2.1.1, 4.1.2 |
| review | A link that leaves the site carries rel="external", and one with target=_blank says "opens in a new tab" in its own text. | 2.4.4, 3.2.5 |

## Tokens

Binds 3 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-link-ink` | `--s-color-action-link` | #00506c · dark #cedeee |
| `--c-link-underline-width` | `--s-border-width-hairline` | 1px |
| `--c-link-ink-visited` | `--s-color-action-link-visited` | #003244 · dark #a1e2f7 |
