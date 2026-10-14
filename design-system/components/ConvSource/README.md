# ConvSource

A numbered citation chip under a message.

**Class** `.xds-conv-source` · **Family** conversation, the user with AI · **Font** ui · **Ground** light only: stays light on a dark ground

## Markup

Element: `a`

```html
<a class="xds-conv-source" href="#"><span class="xds-conv-source__marker" aria-hidden="true">1</span>23 CFR 650 Subpart C</a>
```

## States

rest · hover

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `[href]` | 2.1.1 |
| check | `__marker[aria-hidden=true]` | 2.4.4 |
