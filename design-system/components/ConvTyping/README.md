# ConvTyping

Three pulsing dots, in the running color, where the assistant's bubble will appear.

**Class** `.xds-conv-typing` · **Family** conversation, the user with AI · **Font** — · **Ground** light only: stays light on a dark ground

## Markup

Element: `div[aria-label]`

```html
<div class="xds-conv-typing" role="status" aria-label="Assistant is typing"><i aria-hidden="true"></i><i aria-hidden="true"></i><i aria-hidden="true"></i></div>
```

## States

rest

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `[role=status]` | 4.1.3 |
| check | `[aria-label]` | 4.1.3 |
| check | `<i>[aria-hidden=true]` | 1.1.1 |
| app | The app removes the indicator from the DOM the moment the reply arrives. | 4.1.3 |
