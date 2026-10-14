# Kbd

One key the user is told to press.

**Class** `.xds-kbd` · **Family** content, the user reads · **Font** code · **Ground** light only: stays light on a dark ground

## Markup

Element: `kbd`

```html
<kbd class="xds-kbd">Tab</kbd>
```

## States

rest

## Patterns

- **one-key-per-cap** — One key per kbd. A chord is one cap per key joined by a real plus sign: <kbd class="xds-kbd">Ctrl</kbd> + <kbd class="xds-kbd">K</kbd>, never one cap holding both.

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| review | A key with no spoken name is spelled out, as Esc, never written as its glyph. | 1.1.1 |

## Tokens

Binds 10 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-kbd-font-family` | `--s-font-family-code` | Geist Mono |
| `--c-kbd-font-size` | `--s-type-code-sm-size` | 11px |
| `--c-kbd-line-height` | `--s-type-code-sm-line-height` | 16px |
| `--c-kbd-tracking` | `--s-type-code-sm-tracking` | 0.3px |
| `--c-kbd-ink` | `--s-color-text-primary` | #262321 · dark #fff7f2 |
| `--c-kbd-surface` | `--s-color-surface-raised` | #ffffff · dark #142536 |
| `--c-kbd-border` | `--s-color-border-strong` | #988b80 · dark #b7aea6 |
| `--c-kbd-shoulder-width` | `--s-border-width-thick` | 2px |
| `--c-kbd-inset-inline` | `--s-space-xs` | 4px |
| `--c-kbd-inset-block` | `--s-space-2xs` | 2px |
