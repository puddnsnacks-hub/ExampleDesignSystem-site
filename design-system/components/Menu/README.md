# Menu

A vertical list of destinations that leave the page.

**Class** `.xds-menu` · **Family** wayfinding, the user goes · **Font** ui · **Ground** light and dark: carries `data-surface="dark"`

## Markup

Element: `nav > ul > li > a[aria-current=page] | ul[role=menu] > li > button[role=menuitem] | ul[role=listbox] (select)`

```html
<nav aria-label="Section"><ul class="xds-menu"><li><a class="xds-menu__item" href="#">Item</a></li><li><a class="xds-menu__item" href="#" aria-current="page">Current</a></li></ul></nav>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `data-surface` | `dark` | — |
| `data-tone` | `accent` · `vivid` | — |

## States

rest · hover · active · current / selected · focus-visible · disabled

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `[!role] => __item[href]` | 1.3.1, 4.1.2 |
| check | `[!role] => has __item[aria-current=page]` | 1.3.1, 2.4.8 |
| check | `<a>[!role] => [!role]` | 4.1.2 |
| check | `[role=menu] => __item[role=menuitem\|menuitemradio\|menuitemcheckbox]` | 4.1.2 |
| behavior | `menu.nav-unscripted` | 2.1.1 |
| behavior | `menu.roving` | 2.1.1, 2.4.3 |
| behavior | `menu.arrows` | 2.1.1 |
| behavior | `menu.home-end` | 2.1.1 |
| behavior | `menu.typeahead` | 2.1.1 |
| behavior | `menu.escape` | 2.1.1 |
| behavior | `menu.disabled` | 4.1.2 |

## Behavior

What `components/bundle.js` does for it. A line marked CSS is the stylesheet's work.

```text
menu                                                      .xds-menu
          Scripted only when the root carries role=menu. Side navigation,
          nav > ul.xds-menu with plain links, gets no script at all.  #menu.nav-unscripted
ITEMS     [role=menuitem|menuitemradio|menuitemcheckbox], skipping
          aria-disabled=true. Roving tabindex: the first enabled item is the
          menu's one Tab stop. A <button> item gets type=button.    #menu.roving
  key ArrowDown / ArrowUp        → next / previous, wrapping        #menu.arrows
  key Home / End                 → first / last                     #menu.home-end
  key (any single character)     → the next item whose text starts with it,  #menu.typeahead
                                   wrapping to the top
  key Escape                     → fire `xds:menuescape` on root, bubbling.
                                   The owner closes the menu and returns
                                   focus; the menu does neither itself  #menu.escape
  click an aria-disabled item    → preventDefault; propagation stops at the
                                   root                             #menu.disabled
```

## Tokens

Binds 24 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-menu-surface` | `--s-color-surface-menu` | #ffffff · dark #151e26 |
| `--c-menu-surface-accent` | `--s-color-surface-raised` | #ffffff · dark #142536 |
| `--c-menu-surface-vivid` | `--s-color-surface-elevated` | #ffffff · dark #1e374f |
| `--c-menu-border` | `--s-color-border-on-raised` | #d4ceca · dark #1e374f |
| `--c-menu-min-width` | `--s-size-measure-ui` | 384px |
| `--c-menu-item-font-family` | `--s-font-family-ui` | Outfit |
| `--c-menu-item-font-size` | `--s-type-ui-lg-size` | 15px |
| `--c-menu-item-line-height` | `--s-type-ui-lg-line-height` | 20px |
| `--c-menu-item-tracking` | `--s-type-ui-lg-tracking` | 0.1px |
| `--c-menu-item-height` | `--s-size-control-md` | 40px |
| `--c-menu-item-inset-inline` | `--s-space-md` | 12px |
| `--c-menu-item-ink` | `--s-color-text-menu-item` | #262321 · dark #e8dfda |
| `--c-menu-item-surface-selected` | `--s-color-surface-selected-primary` | #e7f8fd · dark #4f6780 |
| `--c-menu-item-edge-selected` | `--s-color-emphasis-selected-edge-primary` | #017097 · dark #afc6de |
| `--c-menu-item-surface-accent-selected` | `--s-color-surface-selected-accent` | #e7f8fd · dark #896037 |
| `--c-menu-item-edge-accent-selected` | `--s-color-emphasis-selected-edge` | #017097 · dark #d69e6e |
| `--c-menu-item-surface-vivid-selected` | `--s-color-surface-selected-vivid` | #e7f8fd · dark #017097 |
| `--c-menu-item-edge-vivid-selected` | `--s-color-emphasis-selected-edge-vivid` | #017097 · dark #3cb1de |
| `--c-menu-item-edge-width-selected` | `--s-emphasis-edge-2` | 3px |
| `--c-menu-item-ink-disabled` | `--s-color-text-disabled` | #988b80 |
| `--c-menu-separator` | `--s-color-border-on-raised` | #d4ceca · dark #1e374f |
| `--c-menu-elevation` | `--s-elevation-overlay` | 200 |
| `--c-menu-item-ink-selected` | `--s-color-text-on-selected` | #262321 · dark #ffffff |
| `--c-menu-border-vivid` | `--s-color-border-on-elevated` | #d4ceca · dark #142536 |
