# Table

Rows and columns of data — never layout.

**Class** `.xds-table` · **Family** data, values the user looks up or compares · **Font** ui · code (numeric) · **Ground** light only: stays light on a dark ground

## Markup

Element: `div.xds-table-wrap > table.xds-table[data-stacked][aria-busy] > caption + thead > tr > th[scope=col][aria-sort] > button.__sort + tbody[data-empty] > tr > th[scope=row][data-label] + td[data-align][data-label]`

```html
<div class="xds-table-wrap"><table class="xds-table" data-stacked><caption>Highway fatalities by state, 2024</caption><thead><tr><th scope="col" aria-sort="none"><button class="xds-table__sort" type="button">State</button></th><th scope="col" data-align="numeric" aria-sort="none"><button class="xds-table__sort" type="button">Fatalities</button></th></tr></thead><tbody><tr><th scope="row">Texas</th><td data-align="numeric">4,283</td></tr><tr><th scope="row">Ohio</th><td data-align="numeric">1,197</td></tr></tbody></table></div>
<!-- empty --> <div class="xds-table-wrap"><table class="xds-table"><caption>Routes</caption><thead><tr><th scope="col" aria-sort="none"><button class="xds-table__sort" type="button">Route</button></th><th scope="col" data-align="numeric" aria-sort="none"><button class="xds-table__sort" type="button">Miles</button></th></tr></thead><tbody data-empty><tr><td colspan="2">No routes match these filters.</td></tr></tbody></table></div>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `th[scope]` | `col` · `row` | — |
| `td[data-align] · th[data-align]` | `numeric` | — |
| `th[aria-sort]` | `none` · `ascending` · `descending` | — |
| `table[data-stacked]` | `(present)` | — |
| `td[data-label] · th[data-label]` | `(the column head's text)` | — |
| `tbody[data-empty]` | `(present)` | — |
| `table[aria-busy]` | `true` | — |
| `table[role]` | `grid` | — |
| `table[data-fit]` | `(present)` | — |

## Which value

- `table[role]`
  - `grid`: row selection is wired in script
- `th[scope]` — Which direction does this header label?
  - `col`: the header labels the column under it
  - `row`: the header labels the row beside it

## States

rest · row hover · row selected (a checked control in the row, or aria-selected under role=grid) · sort hover · sort pressed (settled) · sort focus-visible · sorted ascending / descending (aria-sort) · stacked (data-stacked under the narrow breakpoint) · empty (tbody[data-empty]) · wrap focus-visible (when the table overflows) · busy (aria-busy)

## Patterns

- **sort-marks-from-state** — Do: set aria-sort and let the mark follow it. Don't: swap icons by hand or mark more than one head sorted.
- **stacked-needs-labels** — Do: put the column text in data-label (or let xds.js fill it) before relying on data-stacked. Don't: stack a table with an empty head.
- **empty-is-a-row** — Do: one td with colspan inside tbody[data-empty]. Don't: hide the table and show a paragraph — the head still names the columns that would have been there.
- **fit-to-content** — A table should not stretch to full width when its columns don't need it — cap it at its content (data-fit) or a measure so rows don't become bars of empty space. Alternating fills only >6 rows.

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `has <caption>` | 1.3.1 |
| check | `has <thead>` | 1.3.1 |
| check | `has <tbody>` | 1.3.1 |
| check | `<th>[scope=col\|row]` | 1.3.1 |
| behavior | `table.overflow-region` | 2.1.1 |
| check | `<tr>[aria-selected] => [role=grid]` | 4.1.2 |
| check | `__sort[type=button]` | 2.1.1 |
| check | `__sort => has <th>[aria-sort]` | 4.1.2 |
| behavior | `table.sort` | 4.1.3 |
| behavior | `table.stack` | 1.3.1 |
| behavior | `table.busy` | 4.1.2 |
| review | Row selection is a real checkbox in the row's first cell; the row's fill follows it. | 4.1.2 |

## Behavior

What `components/bundle.js` does for it. A line marked CSS is the stylesheet's work.

```text
table                                                     .xds-table
SORT      aria-sort on each sortable head, th[aria-sort] holding
          button.__sort: one of ascending|descending|none. Base state none.
  click a head's __sort          → that head := ascending, or descending if
                                   it was ascending; every other sortable
                                   head := none → reorder the tbody rows
                                   (by number when both cells read as one,
                                   else locale order with numeric
                                   collation) → "Sorted by {column},
                                   {direction}" in a polite live region
                                   placed after the table → fire
                                   `xds:sort` on the table          #table.sort
¬         A tbody[data-empty] is never reordered, announced or evented;
          only aria-sort changes.
STACK     data-stacked only: every body cell without data-label gets its
          column head's text. At ≤narrow the rows restack, the head is
          clipped with the sr-only pattern, and each cell shows its
          data-label. CSS.                                          #table.stack
WRAP      The author writes div.xds-table-wrap. xds.js names it by the
          caption (aria-labelledby, unless it has an aria-label) and, only
          while it actually overflows, gives it tabindex=0 and role=region;
          when it fits, both are removed. Re-checked on resize.     #table.overflow-region
¬         NO HORIZONTAL SCROLLERS. The wrap is a last-resort accessibility
          affordance for genuine data, not a layout tool. Restack instead.
BUSY      aria-busy="true" on the table, set and cleared by the page while
          it updates → the table dims and takes no pointer input, its
          __sort buttons included. CSS                     #table.busy
```

## Tokens

Binds 42 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-table-surface` | `--s-color-surface-raised` | #ffffff · dark #142536 |
| `--c-table-border` | `--s-color-border-on-raised` | #d4ceca · dark #1e374f |
| `--c-table-head-surface` | `--s-color-surface-sunken` | #f7f5f5 · dark #12151a |
| `--c-table-head-divider` | `--s-color-text-primary` | #262321 · dark #fff7f2 |
| `--c-table-head-divider-width` | `--s-border-width-thick` | 2px |
| `--c-table-head-font-family` | `--s-font-family-ui` | Outfit |
| `--c-table-head-font-size` | `--s-type-ui-md-size` | 13.5px |
| `--c-table-head-line-height` | `--s-type-ui-md-line-height` | 20px |
| `--c-table-head-weight` | `--s-font-weight-medium` | 500 |
| `--c-table-head-tracking` | `--s-font-tracking-caps` | 0.3px |
| `--c-table-head-ink` | `--s-color-text-secondary` | #4c453f · dark #e8dfda |
| `--c-table-cell-font-family` | `--s-font-family-ui` | Outfit |
| `--c-table-cell-font-size` | `--s-type-ui-lg-size` | 15px |
| `--c-table-cell-line-height` | `--s-type-ui-lg-line-height` | 20px |
| `--c-table-cell-tracking` | `--s-type-ui-lg-tracking` | 0.1px |
| `--c-table-cell-ink` | `--s-color-text-primary` | #262321 · dark #fff7f2 |
| `--c-table-cell-inset-inline` | `--s-space-base` | 16px |
| `--c-table-cell-inset-block` | `--s-space-md` | 12px |
| `--c-table-numeric-font-family` | `--s-font-family-code` | Geist Mono |
| `--c-table-row-selected` | `--s-color-surface-selected` | #e7f8fd · dark #002330 |
| `--c-table-row-divider` | `--s-color-border-divider-soft` | #d4ceca · dark #1e374f |
| `--c-table-caption-font-family` | `--s-font-family-ui` | Outfit |
| `--c-table-caption-font-size` | `--s-type-ui-md-size` | 13.5px |
| `--c-table-caption-ink` | `--s-color-text-tertiary` | #6a5e55 · dark #b7aea6 |
| `--c-table-caption-tracking` | `--s-type-ui-md-tracking` | 0.1px |
| `--c-table-sort-icon-size` | `--s-size-icon-sm` | 16px |
| `--c-table-sort-icon-ink` | `--s-color-text-tertiary` | #6a5e55 · dark #b7aea6 |
| `--c-table-sort-gap` | `--s-space-xs` | 4px |
| `--c-table-label-font-family` | `--s-font-family-ui` | Outfit |
| `--c-table-label-font-size` | `--s-type-ui-xs-size` | 11px |
| `--c-table-label-line-height` | `--s-type-ui-xs-line-height` | 16px |
| `--c-table-label-tracking` | `--s-type-ui-xs-tracking` | 0.1px |
| `--c-table-label-weight` | `--s-font-weight-medium` | 500 |
| `--c-table-label-ink` | `--s-color-text-secondary` | #4c453f · dark #e8dfda |
| `--c-table-label-gap` | `--s-space-2xs` | 2px |
| `--c-table-stacked-inset-block` | `--s-space-xs` | 4px |
| `--c-table-empty-font-family` | `--s-font-family-body` | Newsreader |
| `--c-table-empty-font-size` | `--s-type-body-sm-size` | 16px |
| `--c-table-empty-line-height` | `--s-type-body-sm-line-height` | 24px |
| `--c-table-empty-tracking` | `--s-type-body-sm-tracking` | 0 |
| `--c-table-empty-ink` | `--s-color-text-secondary` | #4c453f · dark #e8dfda |
| `--c-table-empty-inset-block` | `--s-space-2xl` | 32px |
