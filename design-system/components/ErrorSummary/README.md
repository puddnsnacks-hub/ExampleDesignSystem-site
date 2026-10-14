# ErrorSummary

Every problem with a submitted form, listed as links to the fields.

**Class** `.xds-error-summary` · **Family** messages, the user receives · **Font** heading (title) · ui · **Ground** light only: stays light on a dark ground

## Markup

Element: `div[role=alert][tabindex=-1] > h2.title + p.body + ul.list > li > a.link`

```html
<div class="xds-error-summary" role="alert" tabindex="-1"><h2 class="xds-error-summary__title">There is a problem</h2><p class="xds-error-summary__body">Fix the following before continuing.</p><ul class="xds-error-summary__list"><li><a class="xds-error-summary__link" href="#p-ln">Enter your last name</a></li><li><a class="xds-error-summary__link" href="#p-zip">ZIP code must be 5 digits</a></li></ul></div>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `data-autofocus` | `(present)` | — |

## States

rest · focus-visible

## Placement

- **before**: form

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `[role=alert]` | 4.1.3 |
| check | `__link[href]` | 3.3.1 |
| behavior | `error-summary.autofocus` | 2.4.3 |
| behavior | `error-summary.link-focus` | 2.4.3 |

## Behavior

What `components/bundle.js` does for it. A line marked CSS is the stylesheet's work.

```text
error-summary  bind → tabindex=-1; if data-autofocus is present and the
               summary is not hidden, focus it.                     #error-summary.autofocus
               click an error link → focus the field it names and scroll
               it to the middle of the view.                        #error-summary.link-focus
               ¬ A summary revealed after bind is not focused by the
               component.
```

## Tokens

Binds 19 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-error-summary-surface` | `--s-color-status-error-surface` | #fff6f2 · dark #330300 |
| `--c-error-summary-border` | `--s-color-status-error-border` | #ffc9c1 · dark #490000 |
| `--c-error-summary-edge` | `--s-color-status-error-base` | #c7162a · dark #ffada5 |
| `--c-error-summary-edge-width` | `--s-emphasis-edge-3` | 6px |
| `--c-error-summary-inset` | `--s-space-xl` | 24px |
| `--c-error-summary-gap` | `--s-space-md` | 12px |
| `--c-error-summary-title-font-family` | `--s-font-family-heading` | Lato |
| `--c-error-summary-title-font-size` | `--s-type-heading-sm-size` | 20px |
| `--c-error-summary-title-line-height` | `--s-type-heading-sm-line-height` | 24px |
| `--c-error-summary-title-tracking` | `--s-type-heading-sm-tracking` | 0 |
| `--c-error-summary-title-weight` | `--s-font-weight-bold` | 700 |
| `--c-error-summary-title-ink` | `--s-color-status-error-text` | #890d1b · dark #ffefec |
| `--c-error-summary-body-font-family` | `--s-font-family-ui` | Outfit |
| `--c-error-summary-body-font-size` | `--s-type-ui-md-size` | 13.5px |
| `--c-error-summary-body-line-height` | `--s-type-ui-md-line-height` | 20px |
| `--c-error-summary-body-tracking` | `--s-type-ui-md-tracking` | 0.1px |
| `--c-error-summary-body-ink` | `--s-color-text-primary` | #262321 · dark #fff7f2 |
| `--c-error-summary-link-ink` | `--s-color-status-error-ink` | #c7162a · dark #ffc9c1 |
| `--c-error-summary-list-gap` | `--s-space-xs` | 4px |
