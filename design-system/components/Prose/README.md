# Prose

Authored or CMS HTML styled by element — the one place the system styles tags instead of classes.

**Class** `.xds-prose` · **Family** content, the user reads · **Font** heading (h1–h6) · body (p, li, blockquote) · ui (cite, dt, table) · code (code, pre) · **Ground** light and dark: carries `data-surface="dark"`

## Markup

Element: `.xds-prose > (h1|h2|h3|h4|h5|h6|p|p.__lead|ul|ol|blockquote(+cite)|figure(+figcaption)|img|video|table(+caption)|pre|code|hr|dl|small|strong|em)*`

```html
<article class="xds-prose"><h1>Bridge investment program</h1><p class="xds-prose__lead">Lead paragraph.</p><h2>Who can apply</h2><p>Body with <a href="#">a link</a>, <strong>strong</strong>, <em>emphasis</em> and <code>code</code>.</p><ul><li>Item</li></ul><blockquote><p>Quoted.</p><cite>Source</cite></blockquote><figure><img src="…" alt="…"><figcaption>Caption</figcaption></figure><table><caption>Caption</caption><thead><tr><th scope="col">Head</th></tr></thead><tbody><tr><td>Cell</td></tr></tbody></table><dl><dt>Term</dt><dd>Definition</dd></dl><hr><pre><code>code block</code></pre></article>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `data-surface` | `dark` | — |

## Optional parts

`lead`

## States

rest · a: hover · a: active · a: visited · a: focus-visible

## Patterns

- **headings-in-order** — Do: h1, then h2, then h3 under it. Don't: jump from h2 to h4 to get a smaller size — use the real level; the size follows.
- **one-h1** — Do: one h1 per page, the page title. Don't: an h1 on every section or card inside the prose.
- **no-interactive-in-blockquote** — Do: quote text and a cite. Don't: put buttons, forms or links inside a blockquote — a quotation is something said, not something to act on.

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `<img>[alt]` | 1.1.1 |
| check | `<th>[scope]` | 1.3.1 |
| check | `<table> => has <caption>` | 1.3.1 |
| review | Headings run in document order and no level is skipped. | 1.3.1 |
| review | Every alt says what the image means here, or is empty when the image is decoration. | 1.1.1 |
| behavior | `prose.pre-scrolls` | 1.4.10 |

## Behavior

What `components/bundle.js` does for it. A line marked CSS is the stylesheet's work.

```text
prose          a <pre> line longer than the column → the <pre> scrolls
               sideways inside itself (overflow-x: auto); the page does not.
               CSS                                                  #prose.pre-scrolls
```

## Tokens

Binds 88 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-prose-stack` | `--s-space-base` | 16px |
| `--c-prose-stack-heading` | `--s-space-2xl` | 32px |
| `--c-prose-stack-heading-lg` | `--s-space-3xl` | 40px |
| `--c-prose-stack-heading-sm` | `--s-space-xl` | 24px |
| `--c-prose-stack-tight` | `--s-space-xs` | 4px |
| `--c-prose-measure` | `--s-size-measure-text` | 54ch |
| `--c-prose-indent` | `--s-space-xl` | 24px |
| `--c-prose-ink` | `--s-color-text-primary` | #262321 · dark #fff7f2 |
| `--c-prose-heading-ink` | `--s-color-text-heading` | #262321 · dark #edbf98 |
| `--c-prose-ink-secondary` | `--s-color-text-secondary` | #4c453f · dark #e8dfda |
| `--c-prose-body-font-family` | `--s-font-family-body` | Newsreader |
| `--c-prose-body-font-size` | `--s-type-body-md-size` | 18px |
| `--c-prose-body-line-height` | `--s-type-body-md-line-height` | 28px |
| `--c-prose-body-tracking` | `--s-type-body-md-tracking` | -0.1px |
| `--c-prose-body-weight` | `--s-font-weight-regular` | 400 |
| `--c-prose-strong-weight` | `--s-font-weight-semibold` | 600 |
| `--c-prose-lead-font-size` | `--s-type-body-lg-size` | 20px |
| `--c-prose-lead-line-height` | `--s-type-body-lg-line-height` | 32px |
| `--c-prose-lead-tracking` | `--s-type-body-lg-tracking` | -0.1px |
| `--c-prose-small-font-size` | `--s-type-body-sm-size` | 16px |
| `--c-prose-small-line-height` | `--s-type-body-sm-line-height` | 24px |
| `--c-prose-small-tracking` | `--s-type-body-sm-tracking` | 0 |
| `--c-prose-heading-font-family` | `--s-font-family-heading` | Lato |
| `--c-prose-heading-weight` | `--s-font-weight-bold` | 700 |
| `--c-prose-heading-weight-minor` | `--s-font-weight-medium` | 500 |
| `--c-prose-h1-font-size` | `--s-type-heading-xl-size` | 40px |
| `--c-prose-h1-line-height` | `--s-type-heading-xl-line-height` | 52px |
| `--c-prose-h1-tracking` | `--s-type-heading-xl-tracking` | -0.4px |
| `--c-prose-h2-font-size` | `--s-type-heading-lg-size` | 32px |
| `--c-prose-h2-line-height` | `--s-type-heading-lg-line-height` | 40px |
| `--c-prose-h2-tracking` | `--s-type-heading-lg-tracking` | -0.3px |
| `--c-prose-h3-font-size` | `--s-type-heading-md-size` | 24px |
| `--c-prose-h3-line-height` | `--s-type-heading-md-line-height` | 32px |
| `--c-prose-h3-tracking` | `--s-type-heading-md-tracking` | -0.2px |
| `--c-prose-h4-font-size` | `--s-type-heading-sm-size` | 20px |
| `--c-prose-h4-line-height` | `--s-type-heading-sm-line-height` | 24px |
| `--c-prose-h4-tracking` | `--s-type-heading-sm-tracking` | 0 |
| `--c-prose-h5-font-size` | `--s-type-heading-xs-size` | 18px |
| `--c-prose-h5-line-height` | `--s-type-heading-xs-line-height` | 24px |
| `--c-prose-h5-tracking` | `--s-type-heading-xs-tracking` | 0 |
| `--c-prose-marker-ink` | `--s-color-text-secondary` | #4c453f · dark #e8dfda |
| `--c-prose-quote-mark` | `--s-color-border-vivid-soft` | #3cb1de · dark #75d3f4 |
| `--c-prose-quote-mark-width` | `--s-border-width-thick` | 2px |
| `--c-prose-quote-inset-inline` | `--s-space-xl` | 24px |
| `--c-prose-cite-font-family` | `--s-font-family-ui` | Outfit |
| `--c-prose-cite-font-size` | `--s-type-ui-sm-size` | 12px |
| `--c-prose-cite-line-height` | `--s-type-ui-sm-line-height` | 16px |
| `--c-prose-cite-tracking` | `--s-type-ui-sm-tracking` | 0.1px |
| `--c-prose-link-ink` | `--s-color-action-link` | #00506c · dark #cedeee |
| `--c-prose-link-ink-visited` | `--s-color-action-link-visited` | #003244 · dark #a1e2f7 |
| `--c-prose-link-underline-width` | `--s-border-width-hairline` | 1px |
| `--c-prose-divider` | `--s-color-border-divider` | #b7aea6 · dark #4f6780 |
| `--c-prose-divider-width` | `--s-border-width-hairline` | 1px |
| `--c-prose-table-surface` | `--s-color-surface-raised` | #ffffff · dark #142536 |
| `--c-prose-table-border` | `--s-color-border-on-raised` | #d4ceca · dark #1e374f |
| `--c-prose-table-head-surface` | `--s-color-surface-sunken` | #f7f5f5 · dark #12151a |
| `--c-prose-table-head-divider` | `--s-color-text-primary` | #262321 · dark #fff7f2 |
| `--c-prose-table-head-divider-width` | `--s-border-width-thick` | 2px |
| `--c-prose-table-font-family` | `--s-font-family-ui` | Outfit |
| `--c-prose-table-head-font-size` | `--s-type-ui-md-size` | 13.5px |
| `--c-prose-table-head-line-height` | `--s-type-ui-md-line-height` | 20px |
| `--c-prose-table-head-weight` | `--s-font-weight-medium` | 500 |
| `--c-prose-table-head-tracking` | `--s-font-tracking-caps` | 0.3px |
| `--c-prose-table-head-ink` | `--s-color-text-secondary` | #4c453f · dark #e8dfda |
| `--c-prose-table-cell-font-size` | `--s-type-ui-lg-size` | 15px |
| `--c-prose-table-cell-line-height` | `--s-type-ui-lg-line-height` | 20px |
| `--c-prose-table-cell-tracking` | `--s-type-ui-lg-tracking` | 0.1px |
| `--c-prose-table-cell-inset-inline` | `--s-space-base` | 16px |
| `--c-prose-table-cell-inset-block` | `--s-space-md` | 12px |
| `--c-prose-table-caption-font-size` | `--s-type-ui-md-size` | 13.5px |
| `--c-prose-table-caption-tracking` | `--s-type-ui-md-tracking` | 0.1px |
| `--c-prose-table-caption-ink` | `--s-color-text-tertiary` | #6a5e55 · dark #b7aea6 |
| `--c-prose-code-font-family` | `--s-font-family-code` | Geist Mono |
| `--c-prose-code-font-size` | `--s-type-code-sm-size` | 11px |
| `--c-prose-code-line-height` | `--s-type-code-sm-line-height` | 16px |
| `--c-prose-code-tracking` | `--s-type-code-sm-tracking` | 0.3px |
| `--c-prose-pre-font-size` | `--s-type-code-md-size` | 12px |
| `--c-prose-pre-line-height` | `--s-type-code-md-line-height` | 20px |
| `--c-prose-code-surface` | `--s-color-surface-sunken` | #f7f5f5 · dark #12151a |
| `--c-prose-code-border` | `--s-color-border-on-sunken` | #e8dfda · dark #1e374f |
| `--c-prose-code-inset-inline` | `--s-space-xs` | 4px |
| `--c-prose-pre-inset` | `--s-space-base` | 16px |
| `--c-prose-dt-font-family` | `--s-font-family-ui` | Outfit |
| `--c-prose-dt-font-size` | `--s-type-ui-md-size` | 13.5px |
| `--c-prose-dt-line-height` | `--s-type-ui-md-line-height` | 20px |
| `--c-prose-dt-tracking` | `--s-type-ui-md-tracking` | 0.1px |
| `--c-prose-dt-weight` | `--s-font-weight-medium` | 500 |
| `--c-prose-figcaption-gap` | `--s-space-sm` | 8px |
