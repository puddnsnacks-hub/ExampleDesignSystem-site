# PullQuote

A sentence lifted out of the text it came from.

**Class** `.xds-pull-quote` · **Family** content, the user reads · **Font** heading (quote) · ui (attribution) · **Ground** light and dark: carries `data-surface="dark"`

## Markup

Element: `figure > blockquote + figcaption?`

```html
<figure class="xds-pull-quote"><blockquote class="xds-pull-quote__quote">The lifted sentence.</blockquote><figcaption class="xds-pull-quote__attribution">Name, role</figcaption></figure>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `data-surface` | `dark` | — |
| `data-scale` | `feature` | — |

## Which value

- `data-scale`
  - `feature`: the quote is the centerpiece of the spread

## Optional parts

`attribution`

## States

rest

## Patterns

- **never-adjacent** — Never place two pull quotes adjacent — separate them with at least a paragraph of prose.

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| review | A quote with a source URL carries it in the blockquote's cite attribute. | 1.3.1 |

## Tokens

Binds 25 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-pull-quote-quote-font-family` | `--s-font-family-heading` | Lato |
| `--c-pull-quote-quote-font-size` | `--s-type-heading-md-size` | 24px |
| `--c-pull-quote-quote-line-height` | `--s-type-heading-md-line-height` | 32px |
| `--c-pull-quote-quote-tracking` | `--s-type-heading-md-tracking` | -0.2px |
| `--c-pull-quote-quote-weight` | `--s-font-weight-medium` | 500 |
| `--c-pull-quote-quote-ink` | `--s-color-text-heading` | #262321 · dark #edbf98 |
| `--c-pull-quote-attribution-font-family` | `--s-font-family-ui` | Outfit |
| `--c-pull-quote-attribution-font-size` | `--s-type-ui-sm-size` | 12px |
| `--c-pull-quote-attribution-line-height` | `--s-type-ui-sm-line-height` | 16px |
| `--c-pull-quote-attribution-weight` | `--s-font-weight-medium` | 500 |
| `--c-pull-quote-attribution-tracking` | `--s-type-ui-sm-tracking` | 0.1px |
| `--c-pull-quote-attribution-ink` | `--s-color-text-tertiary` | #6a5e55 · dark #b7aea6 |
| `--c-pull-quote-mark` | `--s-color-accent-base` | #896037 · dark #edbf98 |
| `--c-pull-quote-mark-width` | `--s-emphasis-edge-2` | 3px |
| `--c-pull-quote-inset-inline-start` | `--s-space-xl` | 24px |
| `--c-pull-quote-stack` | `--s-space-md` | 12px |
| `--c-pull-quote-measure` | `--s-size-measure-text` | 54ch |
| `--c-pull-quote-inset-block` | `--s-space-sm` | 8px |
| `--c-pull-quote-feature-font-size` | `--s-type-display-sm-size` | 40px |
| `--c-pull-quote-feature-line-height` | `--s-type-display-sm-line-height` | 44px |
| `--c-pull-quote-feature-tracking` | `--s-type-display-sm-tracking` | -0.4px |
| `--c-pull-quote-feature-mark-width` | `--s-emphasis-edge-4` | 12px |
| `--c-pull-quote-feature-inset-inline-start` | `--s-space-2xl` | 32px |
| `--c-pull-quote-feature-inset-block` | `--s-space-xl` | 24px |
| `--c-pull-quote-feature-measure` | `--s-size-measure-feature` | 1024px |
