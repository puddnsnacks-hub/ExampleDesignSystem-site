# Badge

A small status word attached to something else.

**Class** `.xds-badge` · **Family** messages, the user receives · **Font** ui · **Ground** light only: stays light on a dark ground

## Markup

Element: `span`

```html
<span class="xds-badge" data-status="success">Active</span>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `data-status` | `neutral` · `error` · `warning` · `success` · `info` · `emergency` | `neutral` |

## Which value

- `data-status` — What state is being reported about the thing this badge sits on?
  - `neutral`: nothing to report — the default, a plain label
  - `emergency`: life-safety, or the service is down
  - `error`: this item failed or is invalid
  - `warning`: this item needs attention before it costs the reader
  - `success`: this item completed
  - `info`: a fact about this item the reader would not otherwise know

## States

rest

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| review | The badge's word says its status on its own, because color is the only other signal. | 1.4.1 |
| review | A badge that is the only sign of a change made while the page is open sits in a role=status container. | 4.1.3 |

## Tokens

Binds 25 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-badge-font-family` | `--s-font-family-ui` | Outfit |
| `--c-badge-weight` | `--s-font-weight-medium` | 500 |
| `--c-badge-font-size` | `--s-type-ui-sm-size` | 12px |
| `--c-badge-line-height` | `--s-type-ui-sm-line-height` | 16px |
| `--c-badge-tracking` | `--s-type-ui-sm-tracking` | 0.1px |
| `--c-badge-inset-inline` | `--s-space-sm` | 8px |
| `--c-badge-inset-block` | `--s-space-2xs` | 2px |
| `--c-badge-neutral-surface` | `--s-color-surface-sunken` | #f7f5f5 · dark #12151a |
| `--c-badge-neutral-border` | `--s-color-border-on-sunken` | #e8dfda · dark #1e374f |
| `--c-badge-neutral-ink` | `--s-color-text-secondary` | #4c453f · dark #e8dfda |
| `--c-badge-error-surface` | `--s-color-status-error-surface` | #fff6f2 · dark #330300 |
| `--c-badge-error-border` | `--s-color-status-error-border` | #ffc9c1 · dark #490000 |
| `--c-badge-error-ink` | `--s-color-status-error-text` | #890d1b · dark #ffefec |
| `--c-badge-warning-surface` | `--s-color-status-warning-surface` | #fffbed · dark #201400 |
| `--c-badge-warning-border` | `--s-color-status-warning-border` | #ffcf69 · dark #2c1c00 |
| `--c-badge-warning-ink` | `--s-color-status-warning-text` | #5b3e00 · dark #ffcf69 |
| `--c-badge-success-surface` | `--s-color-status-success-surface` | #f3fdf1 · dark #031a00 |
| `--c-badge-success-border` | `--s-color-status-success-border` | #b0e6a9 · dark #022500 |
| `--c-badge-success-ink` | `--s-color-status-success-text` | #1e4d1f · dark #b0e6a9 |
| `--c-badge-info-surface` | `--s-color-status-info-surface` | #f4fcfd · dark #07181a |
| `--c-badge-info-border` | `--s-color-status-info-border` | #b7dfe7 · dark #062227 |
| `--c-badge-info-ink` | `--s-color-status-info-text` | #26494f · dark #b7dfe7 |
| `--c-badge-emergency-surface` | `--s-color-status-emergency-surface` | #fcf8ff · dark #131031 |
| `--c-badge-emergency-border` | `--s-color-status-emergency-border` | #ddd2ff · dark #15184d |
| `--c-badge-emergency-ink` | `--s-color-status-emergency-text` | #3e3a84 · dark #ddd2ff |
