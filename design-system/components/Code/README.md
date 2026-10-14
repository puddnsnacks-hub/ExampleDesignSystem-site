# Code

A literal string the user would type, copy or match.

**Class** `.xds-code` · **Family** content, the user reads · **Font** code · **Ground** light only: stays light on a dark ground

## Markup

Element: `code.xds-code | pre.xds-code-block > code.xds-code?`

```html
<p class="xds-text" data-role="body-md">Bind <code class="xds-code">--c-button-gap</code>, never the g tier.</p>
<pre class="xds-code-block"><code class="xds-code">.xds-button { gap: var(--c-button-gap); }</code></pre>
```

## States

rest

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| review | A code block long enough to want skipping sits in a <figure> with a <figcaption>. | 1.3.1 |

## Behavior

What `components/bundle.js` does for it. A line marked CSS is the stylesheet's work.

```text
code           a line longer than the .xds-code-block → wraps, breaking
               anywhere (white-space: pre-wrap; overflow-wrap: anywhere).
               ¬ The block never scrolls sideways. CSS
```

## Tokens

Binds 11 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-code-font-family` | `--s-font-family-code` | Geist Mono |
| `--c-code-font-size` | `--s-type-code-sm-size` | 11px |
| `--c-code-line-height` | `--s-type-code-sm-line-height` | 16px |
| `--c-code-tracking` | `--s-type-code-sm-tracking` | 0.3px |
| `--c-code-ink` | `--s-color-text-primary` | #262321 · dark #fff7f2 |
| `--c-code-surface` | `--s-color-surface-sunken` | #f7f5f5 · dark #12151a |
| `--c-code-border` | `--s-color-border-on-sunken` | #e8dfda · dark #1e374f |
| `--c-code-inset-inline` | `--s-space-xs` | 4px |
| `--c-code-block-font-size` | `--s-type-code-md-size` | 12px |
| `--c-code-block-line-height` | `--s-type-code-md-line-height` | 20px |
| `--c-code-block-inset` | `--s-space-base` | 16px |
