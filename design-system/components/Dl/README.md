# Dl

Terms and their details — a record's fields.

**Class** `.xds-dl` · **Family** data, values the user looks up or compares · **Font** ui (dt) · body (dd) · **Ground** light only: stays light on a dark ground

## Markup

Element: `dl.xds-dl[data-layout][data-dividers] > div.__group × n > dt + dd`

```html
<dl class="xds-dl" data-layout="row" data-dividers><div class="xds-dl__group"><dt>Contact</dt><dd>Office of Public Affairs, 555-010-4570</dd></div><div class="xds-dl__group"><dt>Release number</dt><dd>Agency 42-26</dd></div><div class="xds-dl__group"><dt>Date</dt><dd>Tuesday, August 18, 2026</dd></div></dl>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `data-layout` | `stacked` · `row` | `stacked` |
| `data-dividers` | `(present)` | — |

## Which value

- `data-layout` — Does the term belong above its detail, or beside it?
  - `stacked`: the term above its detail — the default, and what a page's meta block wants
  - `row`: the term beside its detail — a record's fields, read as rows

## States

rest

## What it is

definition list

## Patterns

- **term-is-a-word** — Do: 'Release number'. Don't: 'RELEASE NUMBER' or 'Release number:' — the layout is the colon.
- **row-for-short-terms** — Do: data-layout=row when every term fits the 180px column. Don't: row with a term that wraps three lines — use stacked.

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `has <dt>` | 1.3.1 |
| check | `has <dd>` | 1.3.1 |
| check | `__group[!role]` | 1.3.1 |
| behavior | `dl.restack` | 1.3.2 |

## Behavior

What `components/bundle.js` does for it. A line marked CSS is the stylesheet's work.

```text
dl                                                        .xds-dl
  viewport ≤narrow, data-layout=row
                                 → each __group restacks, dt above dd. CSS  #dl.restack
```

## Tokens

Binds 16 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-dl-gap` | `--s-space-base` | 16px |
| `--c-dl-stack` | `--s-space-xs` | 4px |
| `--c-dl-column-gap` | `--s-space-xl` | 24px |
| `--c-dl-term-width` | `--s-size-column-min` | 180px |
| `--c-dl-term-font-family` | `--s-font-family-ui` | Outfit |
| `--c-dl-term-font-size` | `--s-type-ui-sm-size` | 12px |
| `--c-dl-term-line-height` | `--s-type-ui-sm-line-height` | 16px |
| `--c-dl-term-tracking` | `--s-type-ui-sm-tracking` | 0.1px |
| `--c-dl-term-weight` | `--s-font-weight-medium` | 500 |
| `--c-dl-term-ink` | `--s-color-text-tertiary` | #6a5e55 · dark #b7aea6 |
| `--c-dl-detail-font-family` | `--s-font-family-body` | Newsreader |
| `--c-dl-detail-font-size` | `--s-type-body-md-size` | 18px |
| `--c-dl-detail-line-height` | `--s-type-body-md-line-height` | 28px |
| `--c-dl-detail-tracking` | `--s-type-body-md-tracking` | -0.1px |
| `--c-dl-detail-ink` | `--s-color-text-primary` | #262321 · dark #fff7f2 |
| `--c-dl-divider` | `--s-color-border-divider-soft` | #d4ceca · dark #1e374f |
