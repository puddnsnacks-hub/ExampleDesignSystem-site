# SectionOpener

The opening of one numbered section, with an optional picture or card beside it.

**Class** `.xds-section-opener` · **Family** blocks, content contained · **Font** code (index) · ui (label) · display (statement) · body · **Ground** light and dark: carries `data-surface="dark"`

## Markup

Element: `section > div.copy(p.eyebrow(index + label) + h2.statement + p.body) + div.media(img |.xds-card)?`

```html
<section class="xds-section-opener" data-media="trailing"><div class="xds-section-opener__copy"><p class="xds-section-opener__eyebrow"><span class="xds-section-opener__index">02</span><span class="xds-section-opener__label">Infrastructure</span></p><h2 class="xds-section-opener__statement">Statement.</h2><p class="xds-section-opener__body">Paragraph.</p></div><div class="xds-section-opener__media"><img src="…" alt=""></div></section>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `data-media` | `trailing` · `leading` | `trailing` |
| `data-surface` | `dark` | — |

## Which value

- `data-media`
  - `trailing`: the default; alternate with leading down a page
  - `leading`: alternating with trailing, so consecutive sections do not read as one

## Composes

`card`

## States

rest

## Patterns

- **companion-is-a-picture-or-a-card** — The companion column holds an image or a card, never both: a card when the thing beside the statement is a destination, an image when it is a picture.

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `<img>[alt]` | 1.1.1 |
| review | The image's alt is empty when it is decorative and says what the image means when it is not. | 1.1.1 |
| behavior | `section-opener.stack` | 1.4.10, 1.3.2 |

## Behavior

What `components/bundle.js` does for it. A line marked CSS is the stylesheet's work.

```text
section-opener ≤bp → one column: the media stacks under the copy whichever
               side data-media put it, so what is seen follows the source
               order. CSS                            #section-opener.stack
```

## Tokens

Binds 31 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-section-opener-gap` | `--s-space-4xl` | 48px |
| `--c-section-opener-stack` | `--s-space-lg` | 20px |
| `--c-section-opener-eyebrow-gap` | `--s-space-md` | 12px |
| `--c-section-opener-index-font-family` | `--s-font-family-code` | Geist Mono |
| `--c-section-opener-index-font-size` | `--s-type-code-lg-size` | 13.5px |
| `--c-section-opener-index-line-height` | `--s-type-code-lg-line-height` | 20px |
| `--c-section-opener-index-ink` | `--s-color-accent-base` | #896037 · dark #edbf98 |
| `--c-section-opener-label-font-family` | `--s-font-family-ui` | Outfit |
| `--c-section-opener-label-font-size` | `--s-type-ui-lg-size` | 15px |
| `--c-section-opener-label-line-height` | `--s-type-ui-lg-line-height` | 20px |
| `--c-section-opener-label-weight` | `--s-font-weight-medium` | 500 |
| `--c-section-opener-label-tracking` | `--s-font-tracking-caps` | 0.3px |
| `--c-section-opener-label-ink` | `--s-color-text-opener-eyebrow` | #6a5e55 · dark #e8dfda |
| `--c-section-opener-statement-font-family` | `--s-font-family-display` | Lato |
| `--c-section-opener-statement-font-size` | `--s-type-display-xs-size` | 32px |
| `--c-section-opener-statement-line-height` | `--s-type-display-xs-line-height` | 36px |
| `--c-section-opener-statement-tracking` | `--s-type-display-xs-tracking` | -0.3px |
| `--c-section-opener-statement-weight` | `--s-font-weight-bold` | 700 |
| `--c-section-opener-statement-ink` | `--s-color-text-heading` | #262321 · dark #edbf98 |
| `--c-section-opener-body-font-family` | `--s-font-family-body` | Newsreader |
| `--c-section-opener-body-font-size` | `--s-type-body-md-size` | 18px |
| `--c-section-opener-body-line-height` | `--s-type-body-md-line-height` | 28px |
| `--c-section-opener-body-tracking` | `--s-type-body-md-tracking` | -0.1px |
| `--c-section-opener-body-ink` | `--s-color-text-opener-body` | #4c453f · dark #fff7f2 |
| `--c-section-opener-body-measure` | `--s-size-measure-text` | 54ch |
| `--c-section-opener-media-width` | `--s-size-media-width` | 520px |
| `--c-section-opener-media-height` | `--s-size-media-height` | 340px |
| `--c-section-opener-media-surface` | `--s-color-surface-sunken` | #f7f5f5 · dark #12151a |
| `--c-section-opener-card-width` | `--s-size-media-width` | 520px |
| `--c-section-opener-card-surface` | `--s-color-surface-none` | rgb(0 0 0 / 0) |
| `--c-section-opener-media-max` | `--s-size-media-max-share` | 45% |
