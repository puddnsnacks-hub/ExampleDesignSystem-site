# ConvNotice

A quiet system line with a divider either side: a date, a disclaimer, a context reset.

**Class** `.xds-conv-notice` · **Family** conversation, the user with AI · **Font** ui · **Ground** light only: stays light on a dark ground

## Markup

Element: `p`

```html
<p class="xds-conv-notice">Today</p>
```

## States

rest

## Placement

- **in**: conv-thread

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| review | A notice that marks a change, such as a context reset, carries role="status"; a date divider does not. | 4.1.3 |
