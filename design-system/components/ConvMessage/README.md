# ConvMessage

One turn in a conversation: avatar, bubble, meta and footer.

**Class** `.xds-conv-message` · **Family** conversation, the user with AI · **Font** body (bubble) · ui (meta) · **Ground** light only: stays light on a dark ground

## Markup

Element: `article >.xds-conv-avatar +.content(.bubble +.meta? +.footer?)`

```html
<article class="xds-conv-message" data-role="assistant"><div class="xds-conv-avatar" aria-hidden="true">AI</div><div class="xds-conv-message__content"><div class="xds-conv-message__bubble"><p>…</p></div><p class="xds-conv-message__meta">Assistant · 10:42</p></div></article>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `data-role` | `assistant` · `user` | `assistant` |

## Composes

`conv-avatar` · `conv-actions` · `conv-source`

## States

rest

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `__meta => conv-avatar[aria-hidden=true]` | 1.1.1 |
| review | Every turn names its speaker in text, never by the side its bubble sits on or its color alone. | 1.3.1, 1.4.1 |
