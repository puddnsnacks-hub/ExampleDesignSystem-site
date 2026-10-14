# Text

The type ramp as one component: data-role picks size, line-height and family.

**Class** `.xds-text` · **Family** content, the user reads · **Font** by role · **Ground** light and dark: carries `data-surface="dark"`

## Markup

Element: `h1–h6[data-role] | p[data-role] | span[data-role]`

```html
<h2 class="xds-text" data-role="heading-md">Nine Program Offices</h2>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `data-role` | `ui-xs` · `ui-sm` · `ui-md` · `ui-lg` · `ui-xl` · `ui-2xl` · `body-xs` · `body-sm` · `body-md` · `body-lg` · `body-xl` · `heading-xs` · `heading-sm` · `heading-md` · `heading-lg` · `heading-xl` · `display-xs` · `display-sm` · `display-md` · `display-lg` · `display-xl` · `code-sm` · `code-md` · `code-lg` | — |
| `data-weight` | `regular` · `medium` · `semibold` · `bold` | — |
| `data-tone` | `secondary` · `tertiary` | — |
| `data-surface` | `dark` | — |

## Which value

- `data-surface`
  - `dark`: the fill directly under it is dark, brand or vivid

## States

rest

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| review | Text that is a heading is a real h1–h6 at its level in the document, whatever size data-role gives it. | 1.3.1 |

## Tokens

Binds 87 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-text-ui-xs-size` | `--s-type-ui-xs-size` | 11px |
| `--c-text-ui-xs-line-height` | `--s-type-ui-xs-line-height` | 16px |
| `--c-text-ui-xs-tracking` | `--s-type-ui-xs-tracking` | 0.1px |
| `--c-text-ui-sm-size` | `--s-type-ui-sm-size` | 12px |
| `--c-text-ui-sm-line-height` | `--s-type-ui-sm-line-height` | 16px |
| `--c-text-ui-sm-tracking` | `--s-type-ui-sm-tracking` | 0.1px |
| `--c-text-ui-md-size` | `--s-type-ui-md-size` | 13.5px |
| `--c-text-ui-md-line-height` | `--s-type-ui-md-line-height` | 20px |
| `--c-text-ui-md-tracking` | `--s-type-ui-md-tracking` | 0.1px |
| `--c-text-ui-lg-size` | `--s-type-ui-lg-size` | 15px |
| `--c-text-ui-lg-line-height` | `--s-type-ui-lg-line-height` | 20px |
| `--c-text-ui-lg-tracking` | `--s-type-ui-lg-tracking` | 0.1px |
| `--c-text-ui-xl-size` | `--s-type-ui-xl-size` | 16px |
| `--c-text-ui-xl-line-height` | `--s-type-ui-xl-line-height` | 20px |
| `--c-text-ui-xl-tracking` | `--s-type-ui-xl-tracking` | 0.1px |
| `--c-text-ui-2xl-size` | `--s-type-ui-2xl-size` | 24px |
| `--c-text-ui-2xl-line-height` | `--s-type-ui-2xl-line-height` | 32px |
| `--c-text-ui-2xl-tracking` | `--s-type-ui-2xl-tracking` | 0 |
| `--c-text-body-xs-size` | `--s-type-body-xs-size` | 14px |
| `--c-text-body-xs-line-height` | `--s-type-body-xs-line-height` | 20px |
| `--c-text-body-xs-tracking` | `--s-type-body-xs-tracking` | 0 |
| `--c-text-body-sm-size` | `--s-type-body-sm-size` | 16px |
| `--c-text-body-sm-line-height` | `--s-type-body-sm-line-height` | 24px |
| `--c-text-body-sm-tracking` | `--s-type-body-sm-tracking` | 0 |
| `--c-text-body-md-size` | `--s-type-body-md-size` | 18px |
| `--c-text-body-md-line-height` | `--s-type-body-md-line-height` | 28px |
| `--c-text-body-md-tracking` | `--s-type-body-md-tracking` | -0.1px |
| `--c-text-body-lg-size` | `--s-type-body-lg-size` | 20px |
| `--c-text-body-lg-line-height` | `--s-type-body-lg-line-height` | 32px |
| `--c-text-body-lg-tracking` | `--s-type-body-lg-tracking` | -0.1px |
| `--c-text-body-xl-size` | `--s-type-body-xl-size` | 24px |
| `--c-text-body-xl-line-height` | `--s-type-body-xl-line-height` | 40px |
| `--c-text-body-xl-tracking` | `--s-type-body-xl-tracking` | -0.1px |
| `--c-text-heading-xs-size` | `--s-type-heading-xs-size` | 18px |
| `--c-text-heading-xs-line-height` | `--s-type-heading-xs-line-height` | 24px |
| `--c-text-heading-xs-tracking` | `--s-type-heading-xs-tracking` | 0 |
| `--c-text-heading-sm-size` | `--s-type-heading-sm-size` | 20px |
| `--c-text-heading-sm-line-height` | `--s-type-heading-sm-line-height` | 24px |
| `--c-text-heading-sm-tracking` | `--s-type-heading-sm-tracking` | 0 |
| `--c-text-heading-md-size` | `--s-type-heading-md-size` | 24px |
| `--c-text-heading-md-line-height` | `--s-type-heading-md-line-height` | 32px |
| `--c-text-heading-md-tracking` | `--s-type-heading-md-tracking` | -0.2px |
| `--c-text-heading-lg-size` | `--s-type-heading-lg-size` | 32px |
| `--c-text-heading-lg-line-height` | `--s-type-heading-lg-line-height` | 40px |
| `--c-text-heading-lg-tracking` | `--s-type-heading-lg-tracking` | -0.3px |
| `--c-text-heading-xl-size` | `--s-type-heading-xl-size` | 40px |
| `--c-text-heading-xl-line-height` | `--s-type-heading-xl-line-height` | 52px |
| `--c-text-heading-xl-tracking` | `--s-type-heading-xl-tracking` | -0.4px |
| `--c-text-display-xs-size` | `--s-type-display-xs-size` | 32px |
| `--c-text-display-xs-line-height` | `--s-type-display-xs-line-height` | 36px |
| `--c-text-display-xs-tracking` | `--s-type-display-xs-tracking` | -0.3px |
| `--c-text-display-sm-size` | `--s-type-display-sm-size` | 40px |
| `--c-text-display-sm-line-height` | `--s-type-display-sm-line-height` | 44px |
| `--c-text-display-sm-tracking` | `--s-type-display-sm-tracking` | -0.4px |
| `--c-text-display-md-size` | `--s-type-display-md-size` | 48px |
| `--c-text-display-md-line-height` | `--s-type-display-md-line-height` | 52px |
| `--c-text-display-md-tracking` | `--s-type-display-md-tracking` | -0.6px |
| `--c-text-display-lg-size` | `--s-type-display-lg-size` | 56px |
| `--c-text-display-lg-line-height` | `--s-type-display-lg-line-height` | 60px |
| `--c-text-display-lg-tracking` | `--s-type-display-lg-tracking` | -0.6px |
| `--c-text-display-xl-size` | `--s-type-display-xl-size` | 72px |
| `--c-text-display-xl-line-height` | `--s-type-display-xl-line-height` | 80px |
| `--c-text-display-xl-tracking` | `--s-type-display-xl-tracking` | -0.6px |
| `--c-text-code-sm-size` | `--s-type-code-sm-size` | 11px |
| `--c-text-code-sm-line-height` | `--s-type-code-sm-line-height` | 16px |
| `--c-text-code-sm-tracking` | `--s-type-code-sm-tracking` | 0.3px |
| `--c-text-code-md-size` | `--s-type-code-md-size` | 12px |
| `--c-text-code-md-line-height` | `--s-type-code-md-line-height` | 20px |
| `--c-text-code-md-tracking` | `--s-type-code-md-tracking` | 0.3px |
| `--c-text-code-lg-size` | `--s-type-code-lg-size` | 13.5px |
| `--c-text-code-lg-line-height` | `--s-type-code-lg-line-height` | 20px |
| `--c-text-code-lg-tracking` | `--s-type-code-lg-tracking` | 0.3px |
| `--c-text-family-display` | `--s-font-family-display` | Lato |
| `--c-text-family-heading` | `--s-font-family-heading` | Lato |
| `--c-text-family-body` | `--s-font-family-body` | Newsreader |
| `--c-text-family-ui` | `--s-font-family-ui` | Outfit |
| `--c-text-family-code` | `--s-font-family-code` | Geist Mono |
| `--c-text-weight-regular` | `--s-font-weight-regular` | 400 |
| `--c-text-weight-medium` | `--s-font-weight-medium` | 500 |
| `--c-text-weight-semibold` | `--s-font-weight-semibold` | 600 |
| `--c-text-weight-bold` | `--s-font-weight-bold` | 700 |
| `--c-text-tracking-ui` | `--s-font-tracking-ui` | 0.1px |
| `--c-text-tracking-none` | `--s-font-tracking-none` | 0 |
| `--c-text-ink` | `--s-color-text-primary` | #262321 · dark #fff7f2 |
| `--c-text-ink-secondary` | `--s-color-text-secondary` | #4c453f · dark #e8dfda |
| `--c-text-ink-tertiary` | `--s-color-text-tertiary` | #6a5e55 · dark #b7aea6 |
| `--c-text-measure` | `--s-size-measure-text` | 54ch |
