# Footer

The site footer: five full-width bands divided by hairlines.

**Class** `.xds-footer` · **Family** chrome, the page frame · **Font** heading (brand) · ui (everything else) · body (newsletter description) · **Ground** light and dark: carries `data-surface="dark"`

## Markup

Element: `footer > div.band[data-band=top] + details.band[data-band=nav](summary.sitemap? + nav) + div.band[social|compliance|copyright]`

```html
<footer class="xds-footer" data-surface="dark"><div class="xds-footer__band" data-band="top"><div class="xds-footer__content"><div class="xds-footer__agency"><div class="xds-footer__lockup"><svg class="xds-footer__logo" viewBox="0 0 48 48" aria-hidden="true"><path d="M2 2H12L46 36V46H36L2 12Z"/><path d="M10 28L20 38L12 46H2V36Z"/><path d="M28 10L36 2H46V12L38 20Z"/></svg><p class="xds-footer__brand">Example Agency</p></div><address class="xds-footer__address">100 Example Street<br>Anytown, ST 00000<br>855-368-4200</address></div><form class="xds-footer__newsletter"><p class="xds-footer__heading">Stay connected</p><p class="xds-footer__description">Get news and updates by email.</p><div class="xds-footer__subscribe"><input class="xds-input" type="email" aria-label="Email address" placeholder="Email address"><button class="xds-button" data-variant="primary">Subscribe</button></div></form></div></div><details class="xds-footer__band" data-band="nav" open><summary class="xds-footer__sitemap">Site map</summary><nav class="xds-footer__content" aria-label="Footer"><div class="xds-footer__columns"><div class="xds-footer__column"><p class="xds-footer__heading">About the Agency</p><ul class="xds-footer__list"><li><a class="xds-footer__link" href="#">Mission</a></li><li><a class="xds-footer__link" href="#">Leadership</a></li><li><a class="xds-footer__link" href="#">Careers</a></li></ul></div><div class="xds-footer__column"><p class="xds-footer__heading">Programs</p><ul class="xds-footer__list"><li><a class="xds-footer__link" href="#">Aviation</a></li><li><a class="xds-footer__link" href="#">Highway</a></li><li><a class="xds-footer__link" href="#">Maritime</a></li></ul></div><div class="xds-footer__column"><p class="xds-footer__heading">Connect</p><ul class="xds-footer__list"><li><a class="xds-footer__link" href="#">Newsroom</a></li><li><a class="xds-footer__link" href="#">Subscribe</a></li><li><a class="xds-footer__link" href="#">Public engagement</a></li></ul></div><div class="xds-footer__column"><p class="xds-footer__heading">Resources</p><ul class="xds-footer__list"><li><a class="xds-footer__link" href="#">Forms</a></li><li><a class="xds-footer__link" href="#">Reports</a></li><li><a class="xds-footer__link" href="#">Data catalog</a></li></ul></div></div></nav></details><div class="xds-footer__band" data-band="social"><div class="xds-footer__content"><p class="xds-footer__social-label">Connect with us:</p><ul class="xds-footer__socials"><li><a class="xds-footer__social" href="#" aria-label="Facebook"><svg class="xds-icon" aria-hidden="true"><use href="#xds-social-facebook"></use></svg></a></li><li><a class="xds-footer__social" href="#" aria-label="Instagram"><svg class="xds-icon" aria-hidden="true"><use href="#xds-social-instagram"></use></svg></a></li><li><a class="xds-footer__social" href="#" aria-label="LinkedIn"><svg class="xds-icon" aria-hidden="true"><use href="#xds-social-linkedin"></use></svg></a></li><li><a class="xds-footer__social" href="#" aria-label="YouTube"><svg class="xds-icon" aria-hidden="true"><use href="#xds-social-youtube"></use></svg></a></li><li><a class="xds-footer__social" href="#" aria-label="X"><svg class="xds-icon" aria-hidden="true"><use href="#xds-social-x"></use></svg></a></li></ul></div></div><div class="xds-footer__band" data-band="compliance"><nav class="xds-footer__content" aria-label="Policies"><ul class="xds-footer__compliance"><li><a class="xds-footer__link" href="#">Privacy policy</a></li><li><a class="xds-footer__link" href="#">FOIA</a></li><li><a class="xds-footer__link" href="#">Accessibility</a></li><li><a class="xds-footer__link" href="#">No FEAR Act</a></li><li><a class="xds-footer__link" href="#">Information quality</a></li><li><a class="xds-footer__link" href="#">USA.gov</a></li><li><a class="xds-footer__link" href="#">Plain writing</a></li><li><a class="xds-footer__link" href="#">Web policies</a></li></ul></nav></div><div class="xds-footer__band" data-band="copyright"><div class="xds-footer__content"><p class="xds-footer__legal">Example Agency · 100 Example Street · Anytown, ST 00000</p></div></div></footer>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `data-surface` | `dark` | — |
| `__band[data-band]` | `top` · `nav` · `social` · `compliance` · `copyright` | — |
| `data-open` | `true` | — |

## Composes

`input` · `button`

## States

rest

## Placement

- **in**: body
- **after**: main

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `__social[aria-label]` | 1.1.1, 4.1.2 |
| check | `<nav>[aria-label]` | 1.3.1, 2.4.1 |
| check | `__address => has <address>` | 1.3.1 |
| behavior | `footer.sitemap` | 2.1.1, 4.1.2 |

## Behavior

What `components/bundle.js` does for it. A line marked CSS is the stylesheet's work.

```text
accordion · reference-list · footer sitemap · gov-banner  <details>
          Every details whose class starts xds- and whose stylesheet does not
          ease it: the reference-list items, the gov-banner and the footer's
          sitemap band; the accordion item and the disclosure only where
          ::details-content is unsupported. Elsewhere those two ease in CSS.
OPEN      height 0 → the panel's scroll height, then cleared. overflow hidden
          only while traveling.
CLOSE     the reverse, and `open` is removed on finish, never before — remove
          it first and the panel is gone before it can move.
EVENTS
  click the summary              → animate instead of the native jump
DURATION  --c-page-motion-state, read at run time.
¬         No Escape here. Only the disclosure closes on Escape.
footer         the footer at or under --c-page-breakpoint-compact → the bands
               stack (CSS) and the nav band closes into the Site Map
               disclosure, unless data-open="true"; the footer wider than that
               → the nav band is open and its Site Map summary hidden (CSS).  #footer.sitemap
               The site map opens and closes like any <details> (the
               <details> block).
```

## Tokens

Binds 68 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-footer-surface` | `--s-color-surface-sunken` | #f7f5f5 · dark #12151a |
| `--c-footer-divider` | `--s-color-border-divider` | #b7aea6 · dark #4f6780 |
| `--c-footer-divider-width` | `--s-border-width-hairline` | 1px |
| `--c-footer-band-inset-block` | `--s-space-2xl` | 32px |
| `--c-footer-band-inset-block-compact` | `--s-space-base` | 16px |
| `--c-footer-band-inset-inline` | `--s-space-2xl` | 32px |
| `--c-footer-content-max-width` | `--s-size-measure-page` | 1440px |
| `--c-footer-column-gap` | `--s-space-xl` | 24px |
| `--c-footer-stack` | `--s-space-md` | 12px |
| `--c-footer-list-gap` | `--s-space-sm` | 8px |
| `--c-footer-subscribe-max-width` | `--s-size-measure-ui` | 384px |
| `--c-footer-block-max-width` | `--s-size-measure-ui` | 384px |
| `--c-footer-logo-size` | `--s-size-control-lg` | 48px |
| `--c-footer-logo-fill` | `--s-color-text-primary` | #262321 · dark #fff7f2 |
| `--c-footer-brand-font-family` | `--s-font-family-heading` | Lato |
| `--c-footer-brand-font-size` | `--s-type-ui-xl-size` | 16px |
| `--c-footer-brand-line-height` | `--s-type-heading-xs-line-height` | 24px |
| `--c-footer-brand-tracking` | `--s-type-ui-xl-tracking` | 0.1px |
| `--c-footer-brand-weight` | `--s-font-weight-regular` | 400 |
| `--c-footer-brand-ink` | `--s-color-text-primary` | #262321 · dark #fff7f2 |
| `--c-footer-address-font-family` | `--s-font-family-ui` | Outfit |
| `--c-footer-address-font-size` | `--s-type-ui-md-size` | 13.5px |
| `--c-footer-address-line-height` | `--s-type-ui-md-line-height` | 20px |
| `--c-footer-address-tracking` | `--s-type-ui-md-tracking` | 0.1px |
| `--c-footer-address-ink` | `--s-color-text-secondary` | #4c453f · dark #e8dfda |
| `--c-footer-heading-font-family` | `--s-font-family-ui` | Outfit |
| `--c-footer-heading-font-size` | `--s-type-ui-lg-size` | 15px |
| `--c-footer-heading-line-height` | `--s-type-ui-lg-line-height` | 20px |
| `--c-footer-heading-weight` | `--s-font-weight-medium` | 500 |
| `--c-footer-heading-tracking` | `--s-type-ui-lg-tracking` | 0.1px |
| `--c-footer-heading-ink` | `--s-color-text-primary` | #262321 · dark #fff7f2 |
| `--c-footer-description-font-family` | `--s-font-family-ui` | Outfit |
| `--c-footer-description-font-size` | `--s-type-body-xs-size` | 14px |
| `--c-footer-description-line-height` | `--s-type-body-xs-line-height` | 20px |
| `--c-footer-description-tracking` | `--s-type-body-xs-tracking` | 0 |
| `--c-footer-description-ink` | `--s-color-text-secondary` | #4c453f · dark #e8dfda |
| `--c-footer-link-font-family` | `--s-font-family-ui` | Outfit |
| `--c-footer-link-font-size` | `--s-type-ui-md-size` | 13.5px |
| `--c-footer-link-line-height` | `--s-type-ui-md-line-height` | 20px |
| `--c-footer-link-tracking` | `--s-type-ui-md-tracking` | 0.1px |
| `--c-footer-link-ink` | `--s-color-action-link` | #00506c · dark #cedeee |
| `--c-footer-social-label-weight` | `--s-font-weight-medium` | 500 |
| `--c-footer-social-size` | `--s-size-control-md` | 40px |
| `--c-footer-social-surface` | `--s-color-surface-raised` | #ffffff · dark #142536 |
| `--c-footer-social-border` | `--s-color-border-on-raised` | #d4ceca · dark #1e374f |
| `--c-footer-social-ink` | `--s-color-text-secondary` | #4c453f · dark #e8dfda |
| `--c-footer-social-icon-size` | `--s-size-icon-lg` | 24px |
| `--c-footer-social-gap` | `--s-space-md` | 12px |
| `--c-footer-compliance-font-size` | `--s-type-ui-sm-size` | 12px |
| `--c-footer-compliance-line-height` | `--s-type-ui-sm-line-height` | 16px |
| `--c-footer-compliance-tracking` | `--s-type-ui-sm-tracking` | 0.1px |
| `--c-footer-compliance-gap` | `--s-space-xl` | 24px |
| `--c-footer-legal-font-family` | `--s-font-family-ui` | Outfit |
| `--c-footer-legal-font-size` | `--s-type-ui-sm-size` | 12px |
| `--c-footer-legal-line-height` | `--s-type-ui-sm-line-height` | 16px |
| `--c-footer-legal-tracking` | `--s-type-ui-sm-tracking` | 0.1px |
| `--c-footer-legal-ink` | `--s-color-text-secondary` | #4c453f · dark #e8dfda |
| `--c-footer-compact-band-inset-inline` | `--s-space-base` | 16px |
| `--c-footer-compact-stack` | `--s-space-xl` | 24px |
| `--c-footer-sitemap-height` | `--s-size-control-lg` | 48px |
| `--c-footer-sitemap-inset-block` | `--s-space-sm` | 8px |
| `--c-footer-sitemap-weight` | `--s-font-weight-medium` | 500 |
| `--c-footer-sitemap-ink` | `--s-color-action-link` | #00506c · dark #cedeee |
| `--c-footer-sitemap-surface` | `--s-color-surface-raised` | #ffffff · dark #142536 |
| `--c-footer-sitemap-inset-inline` | `--s-space-xl` | 24px |
| `--c-footer-sitemap-column-gap` | `--s-space-xl` | 24px |
| `--c-footer-sitemap-chevron-size` | `--s-size-icon-sm` | 16px |
| `--c-footer-column-min` | `--s-size-column-min` | 180px |
