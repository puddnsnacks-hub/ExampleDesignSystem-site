# ConvAvatar

The 24px mark for whoever is speaking.

**Class** `.xds-conv-avatar` · **Family** conversation, the user with AI · **Font** ui · **Ground** light only: stays light on a dark ground

## Markup

Element: `div | img`

```html
<div class="xds-conv-avatar" data-role="user" aria-hidden="true">AB</div>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `data-role` | `assistant` · `user` | `assistant` |

## States

rest

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `[!aria-hidden][!alt] => [role=img][aria-label]` | 1.1.1 |
