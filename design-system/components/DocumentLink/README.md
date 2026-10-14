# DocumentLink

A link to a file, as one row: file mark, title, and what the file is.

**Class** `.xds-document-link` · **Family** wayfinding, the user goes · **Font** ui · **Ground** light only: stays light on a dark ground

## Markup

Element: `a.xds-document-link[href][download][rel][target] > svg.__icon + span.__body(span.__title + span.__meta)`

```html
<a class="xds-document-link" href="/docs/strategic-plan.pdf" download><svg class="xds-icon xds-document-link__icon" aria-hidden="true"><use href="#xds-file"></use></svg><span class="xds-document-link__body"><span class="xds-document-link__title">Strategic plan FY 2026–2030</span><span class="xds-document-link__meta">PDF · 2.4 MB · 12 pages</span></span></a>
<a class="xds-document-link" href="https://www.regulations.gov/…" rel="external" target="_blank">…<span class="xds-document-link__meta">regulations.gov · opens in a new tab</span>…</a>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `download` | `(present)` | — |
| `rel` | `external` | — |
| `target` | `_blank` | — |

## Composes

`icon`

## States

rest · hover · pressed (settled) · focus-visible

## What it is

file link

## Patterns

- **format-and-size-in-text** — Do: 'PDF · 2.4 MB · 12 pages' in __meta. Don't: rely on the mark to say it is a download.
- **one-mark-per-intent** — Do: download OR external, never both — set download for a file we host, rel=external for one we do not.

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `[href]` | 2.1.1, 4.1.2 |
| check | `has __meta` | 2.4.4 |
| check | `__icon[aria-hidden=true]` | 1.1.1 |
| review | The meta names the file's format and size, and says "opens in a new tab" when the link carries target=_blank. | 2.4.4, 3.2.5 |

## Tokens

Binds 18 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-document-link-gap` | `--s-space-md` | 12px |
| `--c-document-link-stack` | `--s-space-2xs` | 2px |
| `--c-document-link-inset-block` | `--s-space-sm` | 8px |
| `--c-document-link-icon-size` | `--s-size-icon-lg` | 24px |
| `--c-document-link-icon-ink` | `--s-color-text-secondary` | #4c453f · dark #e8dfda |
| `--c-document-link-mark-size` | `--s-size-icon-sm` | 16px |
| `--c-document-link-mark-ink` | `--s-color-text-secondary` | #4c453f · dark #e8dfda |
| `--c-document-link-title-font-family` | `--s-font-family-ui` | Outfit |
| `--c-document-link-title-font-size` | `--s-type-ui-lg-size` | 15px |
| `--c-document-link-title-line-height` | `--s-type-ui-lg-line-height` | 20px |
| `--c-document-link-title-tracking` | `--s-type-ui-lg-tracking` | 0.1px |
| `--c-document-link-title-weight` | `--s-font-weight-medium` | 500 |
| `--c-document-link-title-ink` | `--s-color-action-link` | #00506c · dark #cedeee |
| `--c-document-link-meta-font-family` | `--s-font-family-ui` | Outfit |
| `--c-document-link-meta-font-size` | `--s-type-ui-xs-size` | 11px |
| `--c-document-link-meta-line-height` | `--s-type-ui-xs-line-height` | 16px |
| `--c-document-link-meta-tracking` | `--s-type-ui-xs-tracking` | 0.1px |
| `--c-document-link-meta-ink` | `--s-color-text-secondary` | #4c453f · dark #e8dfda |
