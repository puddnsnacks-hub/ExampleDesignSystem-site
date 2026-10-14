# Objective

One numbered objective: the argument, with its supporting list or figure beside it.

**Class** `.xds-objective` · **Family** blocks, content contained · **Font** code (index) · display (title) · ui (label) · body (prose, strategies) · **Ground** light and dark: carries `data-surface="dark"`

## Markup

Element: `section > div.head(index + h3) + div.body(div.prose + div.strategies(label + ul | label + figure.media))`

```html
<section class="xds-objective"><div class="xds-objective__head"><span class="xds-objective__index">1.1</span><h3 class="xds-objective__title">Title</h3></div><div class="xds-objective__body"><div class="xds-objective__prose"><p>Argument.</p></div><div class="xds-objective__strategies"><p class="xds-objective__label">Strategies</p><ul class="xds-objective__list"><li class="xds-objective__item">Strategy</li></ul></div></div></section>
<section class="xds-objective"><div class="xds-objective__head"><span class="xds-objective__index">1.2</span><h3 class="xds-objective__title">Title</h3></div><div class="xds-objective__body"><div class="xds-objective__prose"><p>Argument.</p></div><div class="xds-objective__strategies"><p class="xds-objective__label">How it works</p><figure class="xds-objective__media"><img src="assets/diagram.svg" alt="What the diagram says"><figcaption>What the figure adds.</figcaption></figure></div></div></section>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `data-surface` | `dark` | — |

## States

rest

## How many

- **per**: page
- **min**: 2
- **gate**: P10
- **of**: .xds-objective__strategies
- **per**: objective
- **min**: 1
- **gate**: P10

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `<img>[alt]` | 1.1.1 |
| review | A figure's alt says what the diagram argues, a figcaption carries what it adds in its own voice, and any point the argument needs is in the prose. | 1.1.1 |
| behavior | `objective.stack` | 1.4.10 |

## Behavior

What `components/bundle.js` does for it. A line marked CSS is the stylesheet's work.

```text
objective      ≤bp → the strategies column drops under the prose, the
               index gutter releases: one column. CSS      #objective.stack
```

## Tokens

Binds 46 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-objective-divider` | `--s-color-border-divider` | #b7aea6 · dark #4f6780 |
| `--c-objective-divider-width` | `--s-border-width-hairline` | 1px |
| `--c-objective-bar-inset-block-start` | `--s-space-xl` | 24px |
| `--c-objective-bar-inset-block-end` | `--s-space-lg` | 20px |
| `--c-objective-index-width` | `--s-size-index-column` | 56px |
| `--c-objective-title-hang` | `--s-space-lg` | 20px |
| `--c-objective-index-font-family` | `--s-font-family-code` | Geist Mono |
| `--c-objective-index-font-size` | `--s-type-code-lg-size` | 13.5px |
| `--c-objective-index-line-height` | `--s-type-code-lg-line-height` | 20px |
| `--c-objective-index-ink` | `--s-color-accent-base` | #896037 · dark #edbf98 |
| `--c-objective-title-font-family` | `--s-font-family-display` | Lato |
| `--c-objective-title-font-size` | `--s-type-heading-sm-size` | 20px |
| `--c-objective-title-line-height` | `--s-type-heading-sm-line-height` | 24px |
| `--c-objective-title-tracking` | `--s-type-heading-sm-tracking` | 0 |
| `--c-objective-title-weight` | `--s-font-weight-medium` | 500 |
| `--c-objective-title-ink` | `--s-color-text-heading` | #262321 · dark #edbf98 |
| `--c-objective-body-inset-block-end` | `--s-space-2xl` | 32px |
| `--c-objective-body-gap` | `--s-space-4xl` | 48px |
| `--c-objective-prose-font-family` | `--s-font-family-body` | Newsreader |
| `--c-objective-prose-font-size` | `--s-type-body-sm-size` | 16px |
| `--c-objective-prose-line-height` | `--s-type-body-sm-line-height` | 24px |
| `--c-objective-prose-tracking` | `--s-type-body-sm-tracking` | 0 |
| `--c-objective-prose-ink` | `--s-color-text-secondary` | #4c453f · dark #e8dfda |
| `--c-objective-prose-measure` | `--s-size-measure-text` | 54ch |
| `--c-objective-title-measure` | `--s-size-measure-prose` | 672px |
| `--c-objective-prose-stack` | `--s-space-base` | 16px |
| `--c-objective-strategies-width` | `--s-size-measure-aside` | 480px |
| `--c-objective-strategies-divider` | `--s-color-border-divider` | #b7aea6 · dark #4f6780 |
| `--c-objective-strategies-inset` | `--s-space-2xl` | 32px |
| `--c-objective-strategies-gap` | `--s-space-md` | 12px |
| `--c-objective-label-font-family` | `--s-font-family-ui` | Outfit |
| `--c-objective-label-font-size` | `--s-type-ui-xs-size` | 11px |
| `--c-objective-label-line-height` | `--s-type-ui-xs-line-height` | 16px |
| `--c-objective-label-weight` | `--s-font-weight-medium` | 500 |
| `--c-objective-label-tracking` | `--s-type-ui-xs-tracking` | 0.1px |
| `--c-objective-label-ink` | `--s-color-text-tertiary` | #6a5e55 · dark #b7aea6 |
| `--c-objective-bullet-size` | `--s-size-bullet` | 6px |
| `--c-objective-bullet-ink` | `--s-color-accent-base` | #896037 · dark #edbf98 |
| `--c-objective-bullet-gap` | `--s-space-md` | 12px |
| `--c-objective-text-font-family` | `--s-font-family-body` | Newsreader |
| `--c-objective-text-font-size` | `--s-type-body-xs-size` | 14px |
| `--c-objective-text-line-height` | `--s-type-body-xs-line-height` | 20px |
| `--c-objective-text-tracking` | `--s-type-body-xs-tracking` | 0 |
| `--c-objective-text-ink` | `--s-color-text-primary` | #262321 · dark #fff7f2 |
| `--c-objective-media-surface` | `--s-color-surface-sunken` | #f7f5f5 · dark #12151a |
| `--c-objective-media-gap` | `--s-space-md` | 12px |
