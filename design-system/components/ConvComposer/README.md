# ConvComposer

Where the person types their turn.

**Class** `.xds-conv-composer` · **Family** conversation, the user with AI · **Font** ui · **Ground** light only: stays light on a dark ground

## Markup

Element: `form > textarea + button + p.hint`

```html
<form class="xds-conv-composer"><textarea class="xds-conv-composer__input" aria-label="Message" placeholder="Ask about…"></textarea><button class="xds-conv-composer__send" aria-label="Send"><svg class="xds-icon" aria-hidden="true"><use href="#xds-send"></use></svg></button><p class="xds-conv-composer__hint">Shift+Enter for a new line</p></form>
```

## States

rest · focus-within · send disabled

## Placement

- **in**: conv-thread
- **last**: conv-thread

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `__input[!aria-label] => has <label>` | 4.1.2 |
| check | `__send[!aria-label] => has .xds-sr-only` | 4.1.2 |
| app | Send carries disabled while the field is empty, set and cleared by the app as the user types. | 4.1.2 |
| behavior | `conv-composer.keys` | 2.1.1 |

## Behavior

What `components/bundle.js` does for it. A line marked CSS is the stylesheet's work.

```text
conv-composer  typing in __input → __input grows with its content from
               --c-conv-composer-min-height to --c-conv-composer-max-height,
               then scrolls inside itself. CSS (field-sizing: content)
               ¬ A browser without field-sizing keeps the textarea at a fixed
               height.
               ¬ No key is handled: Enter in __input is a new line, as in any
               textarea. Sending on Enter, and a hint that promises it, are
               the app's.                                           #conv-composer.keys
```
