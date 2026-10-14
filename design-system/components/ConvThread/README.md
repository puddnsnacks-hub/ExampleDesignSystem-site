# ConvThread

The column a conversation lives in.

**Class** `.xds-conv-thread` · **Family** conversation, the user with AI · **Font** — · **Ground** light only: stays light on a dark ground

## Markup

Element: `section[aria-label]`

```html
<section class="xds-conv-thread" aria-label="Conversation">…messages…</section>
```

## States

rest

## Never

Never author these:

- `[aria-live]`

## Patterns

- **whole-exchange** — A whole exchange: conv-notice, conv-message ×2 (user, assistant), conv-step list, conv-source, conv-actions, conv-typing, conv-composer — in that order, all inside one conv-thread. The docs render it as the 'conv-demo' specimen.
- **measured-thread** — A thread on a page always holds a max-width (the prose measure) and centers itself in its container — a wall-to-wall conversation is never right.
- **rounded-means-ai** — Rounded corners mark AI: every conversational part is rounded and everything the system authors is square, so a person always knows whether content was generated in a conversation or put on the page. Never square a conversational part, and never round an authored one.

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `[aria-label]` | 1.3.1 |
| check | `.xds-conv-steps[aria-live=polite]` | 4.1.3 |
