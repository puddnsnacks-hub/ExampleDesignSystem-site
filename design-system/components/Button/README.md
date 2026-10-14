# Button

The action control: it does something rather than going somewhere.

**Class** `.xds-button` · **Family** actions, the user triggers · **Font** ui · **Ground** light and dark: carries `data-surface="dark"`

## Markup

Element: `button | a[role=button] — svg.__icon? + text + svg.__icon?: an icon leads or trails where it is written`

```html
<button class="xds-button" data-variant="primary" data-size="md">Label <svg class="xds-icon xds-button__icon" aria-hidden="true"><use href="#xds-arrow-right"></use></svg></button>
<button class="xds-button" data-variant="secondary" data-icon="only" aria-label="Download"><svg class="xds-icon xds-button__icon" aria-hidden="true"><use href="#xds-download"></use></svg></button>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `data-variant` | `primary` · `secondary` · `accent` · `accent-secondary` · `destructive` · `tertiary` | — |
| `data-size` | `sm` · `md` · `lg` | — |
| `data-surface` | `dark` | — |
| `data-icon` | `only` | — |

## States

rest · hover · active · focus-visible · disabled · busy (aria-busy)

## Never

Never author these:

- `[data-variant=destructive][data-surface=dark]`

## Patterns

- **destructive-stays-light** — Destructive actions live on light surfaces only. The red fill on a dark ground reads as an alarm, not a control — a pattern that deletes or destroys is built on the light ground, and the dark variant of the destructive button is not offered.

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `[data-icon=only] => [aria-label]` | 4.1.2 |
| check | `<svg>[aria-hidden=true]` | 1.1.1 |
| behavior | `button.aria-disabled` | 4.1.2 |

## Behavior

What `components/bundle.js` does for it. A line marked CSS is the stylesheet's work.

```text
button         click on .xds-button[aria-disabled=true] → preventDefault
               and stop, in the capture phase, before any handler runs;
               it stays focusable and announced, unlike disabled.   #button.aria-disabled
```

## Tokens

Binds 26 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-button-font-family` | `--s-font-family-ui` | Outfit |
| `--c-button-weight` | `--s-font-weight-medium` | 500 |
| `--c-button-tracking` | `--s-type-ui-lg-tracking` | 0.1px |
| `--c-button-font-size-sm` | `--s-type-ui-md-size` | 13.5px |
| `--c-button-font-size-md` | `--s-type-ui-lg-size` | 15px |
| `--c-button-font-size-lg` | `--s-type-ui-xl-size` | 16px |
| `--c-button-line-height` | `--s-type-ui-lg-line-height` | 20px |
| `--c-button-height-sm` | `--s-size-control-sm` | 32px |
| `--c-button-height-md` | `--s-size-control-md` | 40px |
| `--c-button-height-lg` | `--s-size-control-lg` | 48px |
| `--c-button-inset-inline-sm` | `--s-space-md` | 12px |
| `--c-button-inset-inline-md` | `--s-space-lg` | 20px |
| `--c-button-inset-inline-lg` | `--s-space-xl` | 24px |
| `--c-button-gap` | `--s-space-sm` | 8px |
| `--c-button-icon-size` | `--s-size-icon-md` | 20px |
| `--c-button-primary-fill` | `--s-color-action-base` | #017097 |
| `--c-button-primary-ink` | `--s-color-text-on-action` | #ffffff |
| `--c-button-primary-hover` | `--s-color-state-hover-fixed` | rgb(0 0 0 / 0.08) |
| `--c-button-primary-pressed` | `--s-color-state-pressed-fixed` | rgb(0 0 0 / 0.16) |
| `--c-button-secondary-outline` | `--s-color-action-outline` | #017097 · dark #afc6de |
| `--c-button-destructive-fill` | `--s-color-action-destructive` | #c7162a |
| `--c-button-fill-disabled` | `--s-color-surface-disabled` | #d4ceca · dark #35312d |
| `--c-button-ink-disabled` | `--s-color-text-disabled` | #988b80 |
| `--c-button-border-disabled` | `--s-color-border-disabled` | #d4ceca · dark #4c453f |
| `--c-button-accent-fill` | `--s-color-accent-fill` | #896037 |
| `--c-button-accent-outline` | `--s-color-accent-outline` | #896037 · dark #ffd7b0 |
