# Select

One value from a list, drawn by the system rather than by the browser.

**Class** `.xds-select` · **Family** fields, the user gives · **Font** ui · **Ground** light only: stays light on a dark ground

## Markup

Element: `div > button.trigger[aria-expanded aria-haspopup=listbox] + ul.xds-menu.list[role=listbox] + select.native`

```html
<div class="xds-select"><button class="xds-select__trigger" type="button" role="combobox" id="sel1" aria-haspopup="listbox" aria-expanded="false" aria-controls="sel1-list" data-placeholder>Select an agency</button><ul class="xds-menu xds-select__list" id="sel1-list" role="listbox" hidden><li class="xds-menu__item xds-select__option" role="option" data-value="alt">Aviation Office</li></ul><select class="xds-select__native" name="agency" tabindex="-1" aria-hidden="true"><option value="alt">Aviation Office</option></select></div>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `__trigger[data-placeholder]` | `(present)` | — |
| `__option[aria-selected]` | `true` | — |
| `__trigger[disabled]` | `(present)` | — |

## Composes

`menu`

## States

rest · hover · open · focus-visible · option hover · option selected · disabled · invalid

## Never

Never author these:

- `__trigger[aria-invalid]`

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `__trigger[aria-haspopup=listbox][aria-expanded]` | 4.1.2 |
| check | `__trigger[aria-controls] -> __list` | 4.1.2 |
| check | `__trigger[type=button]` | 3.2.2 |
| check | `__list[role=listbox][hidden]` | 4.1.2 |
| check | `__option[role=option]` | 4.1.2 |
| check | `__native[tabindex=-1][aria-hidden=true]` | 4.1.2, 2.4.3 |
| behavior | `select.role` | 4.1.2 |
| behavior | `select.name` | 4.1.2 |
| behavior | `select.mirror` | 4.1.2, 3.3.1 |
| behavior | `select.state` | 4.1.2 |
| behavior | `select.open` | 2.1.1 |
| behavior | `select.arrows` | 2.1.1 |
| behavior | `select.home-end` | 2.1.1 |
| behavior | `select.typeahead` | 2.1.1 |
| behavior | `select.choose` | 2.1.1 |
| behavior | `select.escape` | 2.1.1, 2.4.3 |
| behavior | `all.tab-closes` | 2.4.3 |

## Behavior

What `components/bundle.js` does for it. A line marked CSS is the stylesheet's work.

```text
select                                                    .xds-select
ROLE      __trigger is the combobox. Focus really moves to the option;
          aria-activedescendant is not used.                        #select.role
NAME      __trigger takes aria-labelledby from the .xds-label of the enclosing
          .xds-field, unless it already has a name.                 #select.name
MIRROR    from __native → aria-required when required; aria-invalid when the
          native is invalid and non-empty. The DS select never owns validity.  #select.mirror
STATE     aria-expanded on __trigger · aria-selected on each __option ·  #select.state
          data-placeholder on __trigger while nothing is chosen
EVENTS
  click __trigger                → toggle open
  key ArrowDown|ArrowUp|Enter|Space on __trigger
                                 → open, focus the selected option else first  #select.open
  key ArrowDown / ArrowUp in list→ focus next / previous, wrapping  #select.arrows
  key Home / End                 → focus first / last               #select.home-end
  key Enter|Space on an option   → choose it                        #select.choose
  key Escape                     → close, refocus __trigger         #select.escape
  key Tab                        → close, ¬refocus
  key (any single character)     → focus the next option whose text starts
                                   with it, wrapping to the top     #select.typeahead
  click an option                → choose it
  click outside root             → close, ¬refocus
CHOOSE    active := index → repaint → close → __native value := the option's
          data-value, else its text → fire `change` on __native and
          `xds:change` on root, both bubbling.
¬         Options are tabindex=-1. The list is never focusable as a whole.
¬         The native <select> carries the value for the form; it is not a
          fallback. It is hidden and out of the tab order, with or without
          script.
```

## Tokens

Binds 26 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-select-trigger-font-family` | `--s-font-family-ui` | Outfit |
| `--c-select-trigger-font-size` | `--s-type-ui-lg-size` | 15px |
| `--c-select-trigger-line-height` | `--s-type-ui-lg-line-height` | 20px |
| `--c-select-trigger-tracking` | `--s-type-ui-lg-tracking` | 0.1px |
| `--c-select-trigger-height` | `--s-size-control-md` | 40px |
| `--c-select-trigger-inset-inline` | `--s-space-md` | 12px |
| `--c-select-trigger-radius` | `--s-radius-control` | 0 |
| `--c-select-trigger-border-width` | `--s-border-width-hairline` | 1px |
| `--c-select-trigger-surface` | `--s-color-surface-raised` | #ffffff · dark #142536 |
| `--c-select-trigger-border` | `--s-color-border-strong` | #988b80 · dark #b7aea6 |
| `--c-select-trigger-border-hover` | `--s-color-text-secondary` | #4c453f · dark #e8dfda |
| `--c-select-trigger-border-open` | `--s-color-action-base` | #017097 |
| `--c-select-trigger-ink` | `--s-color-text-primary` | #262321 · dark #fff7f2 |
| `--c-select-trigger-placeholder-ink` | `--s-color-text-tertiary` | #6a5e55 · dark #b7aea6 |
| `--c-select-chevron-size` | `--s-size-icon-sm` | 16px |
| `--c-select-chevron-ink` | `--s-color-text-secondary` | #4c453f · dark #e8dfda |
| `--c-select-surface-disabled` | `--s-color-surface-disabled` | #d4ceca · dark #35312d |
| `--c-select-ink-disabled` | `--s-color-text-disabled` | #988b80 |
| `--c-select-border-disabled` | `--s-color-border-disabled` | #d4ceca · dark #4c453f |
| `--c-select-list-offset` | `--s-space-xs` | 4px |
| `--c-select-list-max-height` | `--s-size-measure-ui` | 384px |
| `--c-select-elevation` | `--s-elevation-overlay` | 200 |
| `--c-select-option-check-size` | `--s-size-icon-sm` | 16px |
| `--c-select-option-check-ink` | `--s-color-action-base` | #017097 |
| `--c-select-trigger-border-error` | `--s-color-status-error-base` | #c7162a · dark #ffada5 |
| `--c-select-chevron-ink-disabled` | `--s-color-text-disabled` | #988b80 |
