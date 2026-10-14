# Steps

Where the user is in a multi-page journey.

**Class** `.xds-steps` · **Family** messages, the user receives · **Font** ui · heading (summary title) · **Ground** light only: stays light on a dark ground

## Markup

Element: `ol > li[data-state] > div.head(a|span.marker) + p.label; p.xds-steps-summary`

```html
<ol class="xds-steps" aria-label="Application progress"><li class="xds-steps__item" data-state="complete"><div class="xds-steps__head"><a class="xds-steps__marker" href="#"></a></div><p class="xds-steps__label">Applicant</p></li><li class="xds-steps__item" data-state="current" aria-current="step"><div class="xds-steps__head"><span class="xds-steps__marker"></span></div><p class="xds-steps__label">Address</p></li><li class="xds-steps__item" data-state="upcoming"><div class="xds-steps__head"><span class="xds-steps__marker"></span></div><p class="xds-steps__label">Payment</p></li></ol>
<p class="xds-steps-summary"><span class="xds-steps__marker">2</span><span>of 3</span><span class="xds-steps-summary__title">Address</span></p>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `data-orientation` | `horizontal` · `vertical` | `horizontal` |
| `__item[data-state]` | `complete` · `current` · `upcoming` · `error` | — |

## States

complete · current · upcoming · focus-visible (linked marker) · error

## Patterns

- **connector-break** — The line touches both circles only when that leg of the journey is complete. If there's a break in the line, you didn't make it there. The connector leaving the current step also breaks.

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `__item[data-state=current] => has __item[data-state=current][aria-current=step]` | 1.3.1 |
| behavior | `steps.marker-name` | 4.1.2 |

## Behavior

What `components/bundle.js` does for it. A line marked CSS is the stylesheet's work.

```text
steps          an empty __marker with no aria-label → aria-label := "Step N:
               <its label's text>", N its position. The script announces no
               state.                                               #steps.marker-name
```

## Tokens

Binds 43 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-steps-marker-size` | `--s-size-control-md` | 40px |
| `--c-steps-marker-radius` | `--s-radius-step` | 999px |
| `--c-steps-marker-ring-width` | `--s-border-width-heavy` | 3px |
| `--c-steps-marker-font-family` | `--s-font-family-ui` | Outfit |
| `--c-steps-marker-font-size` | `--s-type-ui-xl-size` | 16px |
| `--c-steps-marker-weight` | `--s-font-weight-medium` | 500 |
| `--c-steps-segment-width` | `--s-size-bullet` | 6px |
| `--c-steps-segment-gap` | `--s-space-sm` | 8px |
| `--c-steps-fill-complete` | `--s-color-action-deep` | #00506c · dark #3cb1de |
| `--c-steps-ink-complete` | `--s-color-text-on-action` | #ffffff |
| `--c-steps-segment-complete` | `--s-color-action-base` | #017097 |
| `--c-steps-fill-current` | `--s-color-surface-selected` | #e7f8fd · dark #002330 |
| `--c-steps-ring-current` | `--s-color-action-base` | #017097 |
| `--c-steps-ink-current` | `--s-color-action-base` | #017097 |
| `--c-steps-segment-current` | `--s-color-surface-selected` | #e7f8fd · dark #002330 |
| `--c-steps-fill-upcoming` | `--s-color-surface-disabled` | #d4ceca · dark #35312d |
| `--c-steps-ink-upcoming` | `--s-color-text-secondary` | #4c453f · dark #e8dfda |
| `--c-steps-segment-upcoming` | `--s-color-border-strong` | #988b80 · dark #b7aea6 |
| `--c-steps-label-font-family` | `--s-font-family-ui` | Outfit |
| `--c-steps-label-font-size` | `--s-type-ui-sm-size` | 12px |
| `--c-steps-label-line-height` | `--s-type-ui-sm-line-height` | 16px |
| `--c-steps-label-tracking` | `--s-type-ui-sm-tracking` | 0.1px |
| `--c-steps-label-gap` | `--s-space-sm` | 8px |
| `--c-steps-label-ink-complete` | `--s-color-action-deep` | #00506c · dark #3cb1de |
| `--c-steps-label-ink-current` | `--s-color-text-primary` | #262321 · dark #fff7f2 |
| `--c-steps-label-ink-upcoming` | `--s-color-text-tertiary` | #6a5e55 · dark #b7aea6 |
| `--c-steps-label-weight-current` | `--s-font-weight-medium` | 500 |
| `--c-steps-vertical-gap` | `--s-space-xl` | 24px |
| `--c-steps-vertical-min-segment` | `--s-space-2xl` | 32px |
| `--c-steps-summary-gap` | `--s-space-md` | 12px |
| `--c-steps-summary-inset-block-start` | `--s-space-base` | 16px |
| `--c-steps-summary-font-family` | `--s-font-family-ui` | Outfit |
| `--c-steps-summary-font-size` | `--s-type-ui-lg-size` | 15px |
| `--c-steps-summary-line-height` | `--s-type-ui-lg-line-height` | 20px |
| `--c-steps-summary-tracking` | `--s-type-ui-lg-tracking` | 0.1px |
| `--c-steps-summary-ink` | `--s-color-text-secondary` | #4c453f · dark #e8dfda |
| `--c-steps-summary-title-font-family` | `--s-font-family-heading` | Lato |
| `--c-steps-summary-title-weight` | `--s-font-weight-bold` | 700 |
| `--c-steps-summary-title-ink` | `--s-color-text-primary` | #262321 · dark #fff7f2 |
| `--c-steps-fill-error` | `--s-color-status-error-base` | #c7162a · dark #ffada5 |
| `--c-steps-ink-error` | `--s-color-text-on-action` | #ffffff |
| `--c-steps-label-ink-error` | `--s-color-status-error-ink` | #c7162a · dark #ffc9c1 |
| `--c-steps-segment-gap-complete` | `--s-space-none` | 0px |
