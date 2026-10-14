# ConvStep

One tool call or stage of work the assistant is doing.

**Class** `.xds-conv-step` · **Family** conversation, the user with AI · **Font** code · **Ground** light only: stays light on a dark ground

## Markup

Element: `ol > li`

```html
<ol class="xds-conv-steps" aria-live="polite"><li class="xds-conv-step" data-state="done">Searched 14 notices</li><li class="xds-conv-step" data-state="running">Reading 23 CFR 650…</li></ol>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `data-state` | `running` · `done` · `error` | — |

## States

running · done · error

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| behavior | `all.reduced-motion` | 2.2.2 |

## Behavior

What `components/bundle.js` does for it. A line marked CSS is the stylesheet's work.

```text
conv-step      data-state=running → the marker pulses, opacity 1 → 0.3 → 1,
               every 6 × --c-conv-motion-step, until the state changes. CSS
               ¬ Reduced motion stops the pulse; the hollow ring still says
               running.
```
