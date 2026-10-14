# Chip

A small control — an applied filter you can remove, a toggle, or a link to a sibling page.

**Class** `.xds-chip` · **Family** actions, the user triggers · **Font** ui · **Ground** light and dark: carries `data-surface="dark"`

## Markup

Element: `span > span.label + button.dismiss? | button[aria-pressed] > span.label | a (nav chip)`

```html
<div class="xds-chip-group" aria-label="Active filters"><span class="xds-chip"><span class="xds-chip__label">Aviation Office</span><button class="xds-chip__dismiss" type="button" aria-label="Remove filter: Aviation Office"><svg class="xds-icon" aria-hidden="true"><use href="#xds-close"></use></svg></button></span></div>
<a class="xds-chip" href="#">Landing page</a>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `aria-pressed` | `true` · `false` | — |
| `aria-disabled` | `true` | — |
| `data-variant` | `nav` | — |

## Which value

- `data-variant`
  - `nav`: a navigating chip that is not an <a>; an anchor implies it

## States

rest · hover · active · selected · focus-visible (chip) · focus-visible (dismiss) · disabled · nav rest · nav hover

## Copy

- **$comment**: The dismiss button's aria-label; {label} is the chip's own label text.
- **dismiss**: Remove filter: {label}

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `__dismiss[aria-label]` | 4.1.2 |
| check | `<svg>[aria-hidden=true]` | 1.1.1 |
| behavior | `chip.remove` | 2.4.3 |
| behavior | `chip.toggle` | 4.1.2 |
| review | A .xds-chip-group of dismissible or toggle chips carries role=group and an aria-label that names the set. | 1.3.1 |

## Behavior

What `components/bundle.js` does for it. A line marked CSS is the stylesheet's work.

```text
chip-group     click a chip → toggle aria-pressed. Multi-select by default.  #chip.toggle
               click __dismiss → fire xds:dismiss on the chip (bubbling),
               remove it, focus the next chip's __dismiss, else the group
               (tabindex=-1 first).                                 #chip.remove
```

## Tokens

Binds 25 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-chip-height` | `--s-size-control-sm` | 32px |
| `--c-chip-inset-inline-start` | `--s-space-md` | 12px |
| `--c-chip-inset-inline-end` | `--s-space-xs` | 4px |
| `--c-chip-gap` | `--s-space-xs` | 4px |
| `--c-chip-surface` | `--s-color-surface-sunken` | #f7f5f5 · dark #12151a |
| `--c-chip-border` | `--s-color-border-on-sunken` | #e8dfda · dark #1e374f |
| `--c-chip-ink` | `--s-color-text-primary` | #262321 · dark #fff7f2 |
| `--c-chip-font-family` | `--s-font-family-ui` | Outfit |
| `--c-chip-font-size` | `--s-type-ui-md-size` | 13.5px |
| `--c-chip-line-height` | `--s-type-ui-md-line-height` | 20px |
| `--c-chip-weight` | `--s-font-weight-medium` | 500 |
| `--c-chip-tracking` | `--s-type-ui-md-tracking` | 0.1px |
| `--c-chip-dismiss-size` | `--s-size-icon-lg` | 24px |
| `--c-chip-dismiss-icon-size` | `--s-size-icon-sm` | 16px |
| `--c-chip-dismiss-ink` | `--s-color-text-dismiss` | #35312d · dark #d4ceca |
| `--c-chip-dismiss-ink-hover` | `--s-color-text-primary` | #262321 · dark #fff7f2 |
| `--c-chip-surface-selected` | `--s-color-surface-selected` | #e7f8fd · dark #002330 |
| `--c-chip-border-selected` | `--s-color-action-base` | #017097 |
| `--c-chip-surface-disabled` | `--s-color-surface-disabled` | #d4ceca · dark #35312d |
| `--c-chip-ink-disabled` | `--s-color-text-disabled` | #988b80 |
| `--c-chip-group-gap` | `--s-space-sm` | 8px |
| `--c-chip-nav-surface` | `--s-color-surface-none` | rgb(0 0 0 / 0) |
| `--c-chip-nav-border` | `--s-color-border-strong` | #988b80 · dark #b7aea6 |
| `--c-chip-nav-ink` | `--s-color-text-primary` | #262321 · dark #fff7f2 |
| `--c-chip-nav-border-hover` | `--s-color-border-vivid` | #017097 · dark #3cb1de |
