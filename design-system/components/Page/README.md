# Page

The ground of the whole document: the class on <body> that sets the default surface, ink and focus ring.

**Class** `.xds-page` · **Family** layout, the model every page is made of · **Font** body · **Ground** light only: stays light on a dark ground

## Markup

Element: `body | main | section`

```html
<body class="xds-page"><header>…</header><main id="main" tabindex="-1">…</main><footer>…</footer></body>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `__region[data-surface]` | `raised` · `sunken` | — |

## States

rest

## Never

Never author these:

- `[data-surface]`

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `has <header>` | 1.3.1 |
| check | `has <main>[id=main][tabindex=-1]` | 2.4.1 |
| check | `has <footer>` | 1.3.1 |
| behavior | `page.anchor` | 2.4.3 |
| review | Nothing a raised or sunken region means is carried by its surface alone; its heading or text says it too. | 1.4.1 |

## Behavior

What `components/bundle.js` does for it. A line marked CSS is the stylesheet's work.

```text
page                                                      a[href^="#"]
ANCHOR    one listener on the document for every a[href^="#"]
  click (primary button, no modifier key) on a link whose #id names an
  element                        → URL := #id; the page travels to the
                                   target over --c-page-motion-travel on an
                                   ease-out, the same duration whatever the
                                   distance; then focus the target,
                                   tabindex=-1 first if it has none, with
                                   preventScroll so the browser's own jump
                                   is not doubled                   #page.anchor
  where it lands                 := the target's scroll-margin-block-start
                                   below the window top: the header's
                                   published --_xds-header-height +
                                   c.page.stack
  the link or an ancestor carries data-anchor-travel="off"
                                 → the browser's own jump; the script does
                                   nothing
¬         A click another handler already prevented (error-summary's links)
          is left alone.
¬         Reduced motion jumps to the same place and still focuses the
          target. No target, or a bare #: the browser's own behavior.
```

## Tokens

Binds 37 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-page-surface` | `--s-color-surface-page` | #fcfbfb · dark #151e26 |
| `--c-page-surface-raised` | `--s-color-surface-raised` | #ffffff · dark #142536 |
| `--c-page-surface-sunken` | `--s-color-surface-sunken` | #f7f5f5 · dark #12151a |
| `--c-page-border-raised` | `--s-color-border-on-raised` | #d4ceca · dark #1e374f |
| `--c-page-border-sunken` | `--s-color-border-on-sunken` | #e8dfda · dark #1e374f |
| `--c-page-border-width` | `--s-border-width-hairline` | 1px |
| `--c-page-ink` | `--s-color-text-primary` | #262321 · dark #fff7f2 |
| `--c-page-font-family` | `--s-font-family-body` | Newsreader |
| `--c-page-font-size` | `--s-type-body-sm-size` | 16px |
| `--c-page-line-height` | `--s-type-body-sm-line-height` | 24px |
| `--c-page-tracking` | `--s-type-body-sm-tracking` | 0 |
| `--c-page-selection` | `--s-color-surface-selection` | #a1e2f7 |
| `--c-page-selection-ink` | `--s-color-pinned-ink-strong` | #262321 |
| `--c-page-focus-ring` | `--s-color-focus-ring` | #2e8577 · dark #6bc7b4 |
| `--c-page-focus-width` | `--s-focus-width` | 3px |
| `--c-page-inset` | `--s-space-2xl` | 32px |
| `--c-page-measure` | `--s-size-measure-text` | 54ch |
| `--c-page-stack` | `--s-space-base` | 16px |
| `--c-page-motion-state` | `--s-motion-fast` | 120ms |
| `--c-page-state-hover` | `--s-color-state-hover` | rgb(0 0 0 / 0.08) · dark rgb(255 255 255 / 0.08) |
| `--c-page-state-tint-hover` | `--s-color-state-hover-tint` | #fff7f2 · dark rgb(255 255 255 / 0.08) |
| `--c-page-state-pressed` | `--s-color-state-pressed` | rgb(0 0 0 / 0.16) · dark rgb(255 255 255 / 0.16) |
| `--c-page-radius` | `--s-radius-control` | 0 |
| `--c-page-busy-opacity` | `--s-opacity-disabled` | 0.4 |
| `--c-page-motion-busy` | `--s-motion-base` | 200ms |
| `--c-page-motion-travel` | `--s-motion-travel` | 360ms |
| `--c-page-compact-gutter` | `--s-space-base` | 16px |
| `--c-page-compact-stack` | `--s-space-xl` | 24px |
| `--c-page-target-min` | `--s-size-target-min` | 44px |
| `--c-page-target-min-wide` | `--s-size-icon-lg` | 24px |
| `--c-page-focus-gap` | `--s-focus-gap` | 2px |
| `--c-page-gap-2xs` | `--s-space-2xs` | 2px |
| `--c-page-breakpoint-compact` | `--s-breakpoint-compact` | 900px |
| `--c-page-breakpoint-narrow` | `--s-breakpoint-narrow` | 600px |
| `--c-page-motion-ease` | `--s-motion-ease-standard` | cubic-bezier(.2,0,0,1) |
| `--c-page-motion-ease-enter` | `--s-motion-ease-enter` | cubic-bezier(0,0,.2,1) |
| `--c-page-motion-ease-exit` | `--s-motion-ease-exit` | cubic-bezier(.4,0,1,1) |
