# ConvChip

A suggested prompt or quick reply.

**Class** `.xds-conv-chip` · **Family** conversation, the user with AI · **Font** ui · **Ground** light only: stays light on a dark ground

## Markup

Element: `button`

```html
<div class="xds-conv-chips"><button class="xds-conv-chip">Summarize this notice</button></div>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `aria-pressed` | `true` | — |

## States

rest · hover · active · selected · focus-visible

## Placement

- **in**: .xds-conv-chips

## Patterns

- **after-the-reply** — A row of conv-chips (.xds-conv-chips) sits under the assistant's message and before the user's next turn.

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| review | aria-pressed appears only on a chip that toggles a state, never on one that sends a prompt. | 4.1.2 |
| review | The chip's text reads as an instruction on its own, out of the row. | 2.4.6 |
