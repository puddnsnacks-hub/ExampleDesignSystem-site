# Disclosure

A titled bar that opens a panel about something else on the page, overlaying upward so nothing moves.

**Class** `.xds-disclosure` · **Family** blocks, content contained · **Font** code (index) · ui (title, glyph) · body (rows) · **Ground** light and dark: carries `data-surface="dark"`

## Markup

Element: `details > summary.summary(index? + title + control) + ul.panel > li.row*`

```html
<details class="xds-disclosure"><summary class="xds-disclosure__summary"><span class="xds-disclosure__index">1.1</span><span class="xds-disclosure__title">Title</span><span class="xds-disclosure__control" aria-hidden="true"></span></summary><ul class="xds-disclosure__panel"><li class="xds-disclosure__row">Item</li></ul></details>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `data-surface` | `dark` | — |
| `data-density` | `compact` | `comfortable` |
| `data-divider` | `(present)` | — |
| `open` | `(present)` | — |

## Which value

- `open`
  - `(present)`: the panel should already be showing at first paint

## States

closed · open (overlay grows upward over the content above; rule wipes right-to-left; bar and panel take the note surface; title cross-fades) · hover · active · focus-visible · close: rest · close: hover · close: focus-visible

## Never

Never author these:

- `__summary[data-surface]`

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `has <summary>` | 2.1.1 |
| check | `__control[aria-hidden=true]` | 1.1.1 |
| behavior | `all.escape` | 2.1.1 |
| behavior | `disclosure.close` | 2.4.3 |

## Behavior

What `components/bundle.js` does for it. A line marked CSS is the stylesheet's work.

```text
disclosure                                                .xds-disclosure
OVERLAY   An upside-down select, drawn by CSS but for --_rise. The details
          keeps its closed bar's footprint in the flow; nothing on the page
          moves.
  open                           → ::details-content, anchored to the bar's
                                   bottom edge, eases block-size 0 → auto:
                                   the panel grows UPWARD over the content
                                   above
                                 → --_rise := the panel's height (xds.js, on
                                   toggle); the bar rides up by it and stays
                                   on top
                                 → the divider wipes in right to left along
                                   the bar's top edge; title, index and
                                   glyph cross-fade to the open ink
  close                          → the reverse; the bar settles back into
                                   its footprint
DURATION  One, the state duration: c.disclosure.motion-expand binds
          s.motion.fast, as c.page.motion-state does. Height, wipe and
          cross-fade share it.
FALLBACK  Without ::details-content the panel flows under the bar and opens
          DOWNWARD, eased by xds.js like any <details> (the <details> block,
          --c-page-motion-state).
BUILT AT RUNTIME
  __close-row   li      or div when __panel is not a list. Appended to
                        __panel once, at bind
  __close       button  "Close" + __close-glyph "−" (aria-hidden), inside
                        __close-row: the bar's own mark for the same act
EVENTS
  click __close                  → close, refocus the summary       #disclosure.close
  key Escape                     → close, refocus the summary
  pointerdown outside root       → close, ¬refocus (a pointerdown, not a
                                   click)
¬         Headroom. An ancestor whose overflow is not visible clips the top of
          the panel: give the container room, or let it overflow.
```

## Tokens

Binds 63 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-disclosure-surface-closed` | `--s-color-surface-sunken` | #f7f5f5 · dark #12151a |
| `--c-disclosure-surface-open` | `--s-color-surface-note` | #ffffff · dark #cedeee |
| `--c-disclosure-border` | `--s-color-border-on-sunken` | #e8dfda · dark #1e374f |
| `--c-disclosure-bar-inset-block` | `--s-space-base` | 16px |
| `--c-disclosure-bar-inset-inline` | `--s-space-2xl` | 32px |
| `--c-disclosure-bar-inset-block-compact` | `--s-space-md` | 12px |
| `--c-disclosure-bar-inset-inline-compact` | `--s-space-lg` | 20px |
| `--c-disclosure-bar-gap` | `--s-space-lg` | 20px |
| `--c-disclosure-bar-gap-compact` | `--s-space-md` | 12px |
| `--c-disclosure-index-font-family` | `--s-font-family-code` | Geist Mono |
| `--c-disclosure-index-font-size` | `--s-type-code-lg-size` | 13.5px |
| `--c-disclosure-index-font-size-compact` | `--s-type-code-md-size` | 12px |
| `--c-disclosure-index-line-height` | `--s-type-code-lg-line-height` | 20px |
| `--c-disclosure-index-ink` | `--s-color-accent-base` | #896037 · dark #edbf98 |
| `--c-disclosure-index-width` | `--s-size-target-min` | 44px |
| `--c-disclosure-title-font-family` | `--s-font-family-ui` | Outfit |
| `--c-disclosure-title-font-size` | `--s-type-ui-lg-size` | 15px |
| `--c-disclosure-title-font-size-compact` | `--s-type-ui-md-size` | 13.5px |
| `--c-disclosure-title-line-height` | `--s-type-ui-lg-line-height` | 20px |
| `--c-disclosure-title-weight` | `--s-font-weight-medium` | 500 |
| `--c-disclosure-title-tracking` | `--s-type-ui-lg-tracking` | 0.1px |
| `--c-disclosure-title-ink` | `--s-color-text-primary` | #262321 · dark #fff7f2 |
| `--c-disclosure-control-size` | `--s-size-target-min` | 44px |
| `--c-disclosure-control-size-compact` | `--s-size-control-sm` | 32px |
| `--c-disclosure-glyph-font-size` | `--s-type-ui-2xl-size` | 24px |
| `--c-disclosure-glyph-font-size-compact` | `--s-type-ui-xl-size` | 16px |
| `--c-disclosure-glyph-ink` | `--s-color-accent-base` | #896037 · dark #edbf98 |
| `--c-disclosure-panel-inset-block-end` | `--s-space-base` | 16px |
| `--c-disclosure-panel-inset-block-end-compact` | `--s-space-sm` | 8px |
| `--c-disclosure-close-inset-block-start` | `--s-space-sm` | 8px |
| `--c-disclosure-close-gap` | `--s-space-xs` | 4px |
| `--c-disclosure-close-glyph-font-size` | `--s-type-ui-lg-size` | 15px |
| `--c-disclosure-close-font-family` | `--s-font-family-ui` | Outfit |
| `--c-disclosure-close-font-size` | `--s-type-ui-sm-size` | 12px |
| `--c-disclosure-close-line-height` | `--s-type-ui-sm-line-height` | 16px |
| `--c-disclosure-close-weight` | `--s-font-weight-medium` | 500 |
| `--c-disclosure-close-ink` | `--s-color-text-on-note-soft` | #6a5e55 |
| `--c-disclosure-close-ink-hover` | `--s-color-text-on-note-strong` | #262321 · dark #4c453f |
| `--c-disclosure-row-inset-block` | `--s-space-sm` | 8px |
| `--c-disclosure-row-inset-block-compact` | `--s-space-xs` | 4px |
| `--c-disclosure-row-gap` | `--s-space-md` | 12px |
| `--c-disclosure-row-gap-compact` | `--s-space-sm` | 8px |
| `--c-disclosure-bullet-size` | `--s-size-bullet` | 6px |
| `--c-disclosure-bullet-ink` | `--s-color-accent-on-note` | #896037 · dark #654421 |
| `--c-disclosure-text-font-family` | `--s-font-family-body` | Newsreader |
| `--c-disclosure-text-font-size` | `--s-type-body-sm-size` | 16px |
| `--c-disclosure-text-font-size-compact` | `--s-type-body-xs-size` | 14px |
| `--c-disclosure-text-line-height` | `--s-type-body-sm-line-height` | 24px |
| `--c-disclosure-text-tracking` | `--s-type-body-sm-tracking` | 0 |
| `--c-disclosure-text-line-height-compact` | `--s-type-body-xs-line-height` | 20px |
| `--c-disclosure-text-ink` | `--s-color-text-on-note` | #4c453f |
| `--c-disclosure-row-divider` | `--s-color-border-divider` | #b7aea6 · dark #4f6780 |
| `--c-disclosure-row-divider-width` | `--s-border-width-hairline` | 1px |
| `--c-disclosure-wipe-divider` | `--s-color-accent-divider` | #d69e6e · dark #d49458 |
| `--c-disclosure-wipe-width` | `--s-emphasis-edge-2` | 3px |
| `--c-disclosure-title-ink-open` | `--s-color-text-on-note` | #4c453f |
| `--c-disclosure-motion-expand` | `--s-motion-fast` | 120ms |
| `--c-disclosure-elevation` | `--s-elevation-overlay` | 200 |
| `--c-disclosure-index-ink-open` | `--s-color-text-on-note` | #4c453f |
| `--c-disclosure-glyph-ink-open` | `--s-color-text-on-note` | #4c453f |
| `--c-disclosure-panel-inset-block-start` | `--s-space-sm` | 8px |
| `--c-disclosure-panel-inset-block-start-compact` | `--s-space-xs` | 4px |
| `--c-disclosure-panel-border` | `--s-color-border-on-raised` | #d4ceca · dark #1e374f |
