# Form

Groups of fields under legends, with an actions row at the end.

**Class** `.xds-form` · **Family** fields, the user gives · **Font** heading (legend) · body (hint) · ui (fields) · **Ground** light only: stays light on a dark ground

## Markup

Element: `form > fieldset.section* + details.xds-disclosure.xds-form__notes + div.actions`

```html
<form class="xds-form"><fieldset class="xds-form__section"><legend class="xds-form__legend">Name</legend><div class="xds-field"><label class="xds-label" for="fn">First name</label><input class="xds-input" id="fn" autocomplete="given-name"></div><div class="xds-field"><label class="xds-label" for="ln">Last name</label><input class="xds-input" id="ln" autocomplete="family-name"></div></fieldset><fieldset class="xds-form__section"><legend class="xds-form__legend">Mailing address</legend><div class="xds-field"><label class="xds-label" for="a1">Street address</label><input class="xds-input" id="a1" autocomplete="address-line1"></div><div class="xds-field"><label class="xds-checkbox"><input class="xds-checkbox__control" type="checkbox" aria-controls="a2" data-reveal aria-expanded="false"> Add a second address line</label></div><div class="xds-form__reveal" id="a2" hidden><div class="xds-field"><label class="xds-label" for="a2i">Address line 2</label><input class="xds-input" id="a2i" autocomplete="address-line2"></div></div><div class="xds-field"><label class="xds-label" for="city">City</label><input class="xds-input" id="city" autocomplete="address-level2"></div></fieldset><details class="xds-disclosure xds-form__notes" data-density="compact"><summary class="xds-disclosure__summary"><span class="xds-disclosure__title">Why we ask for this, and how it is used</span><span class="xds-disclosure__control" aria-hidden="true"></span></summary><ul class="xds-disclosure__panel"><li class="xds-disclosure__row">Mailing address: where the printed permit is sent.</li><li class="xds-disclosure__row">Your name is used only on the permit.</li></ul></details><!-- the last page of a multi-page form: Submit takes Continue's place. Every page before it ends in Continue, never both. --><div class="xds-form__actions" data-journey><button class="xds-button" data-variant="secondary" type="button">Back</button><div class="xds-form__forward"><button class="xds-button" data-variant="tertiary" type="button">Save and finish later</button><button class="xds-button" data-variant="primary" type="submit">Submit</button></div></div></form>
```

## Props

Each prop is an attribute on the component's root (or the part it names).

| attribute | values | default |
| --- | --- | --- |
| `__reveal[hidden]` | `(present)` | — |
| `input[data-reveal]` | `(present)` | — |
| `__actions[data-journey]` | `(present)` | — |

## Which value

- `__actions[data-journey]`
  - `(present)`: the form runs across more than one page

## Composes

`field` · `button-group` · `disclosure`

## States

rest · busy (aria-busy)

## How many

- **of**: .xds-form__actions
- **per**: form
- **max**: 1
- **gate**: P34
- **of**: button[data-variant=primary]
- **per**: .xds-form__actions
- **max**: 1
- **gate**: P34

## Patterns

- **own-row** — Every text input gets its own row. No side-by-side text inputs.
- **spacing-is-grouping** — Fields inside a group sit at c.form.gap (16px). Groups sit at c.form.group-gap (32px). Never express grouping with boxes or rules — only space. The one line in a form is the divider along the top of the actions row, which separates the answers from the act of submitting them.
- **name-order** — First name always precedes last name.
- **address-line-2** — Address line 2 is hidden behind a checkbox ("Add a second address line") that defaults to unchecked. Checking it reveals the field and moves focus into it. The checkbox carries data-reveal and aria-controls="<region id>"; the region carries that id and hidden.
- **card-verification-zip** — Card verification address asks for ZIP code only — no street, city or state.
- **address-order** — Street · (line 2) · City · State · ZIP, in that order.
- **journey-actions** — Multi-page forms: Back is a secondary button justified left of the form content. Continue (or Next) is primary, justified right. On the last page, Submit takes Continue's place: the same primary button in the same position. A form never shows Continue and Submit together. A tertiary text button "Save and finish later" sits immediately left of the primary button. Markup: .xds-form__actions[data-journey] > button.back + div.xds-form__forward(save + continue | submit).
- **form-notes** — The last element in the content area, above the actions row, is an.xds-disclosure (data-density=compact, no index) containing clarifying information about the form's questions. It is closed by default and sits at the group gap.
- **explain-before-submit** — Every form carries a disclosure above the submit/actions, collapsed by default, that explains in more detail what the form is asking for and why (why we ask, how it is used, what is optional). 

## Accessibility

A `check` is what the authored markup must say: `A => B` means every A satisfies B, `A[attr] -> B` means A's attribute names B, `has X` means it contains X. A `behavior` is a line of the behavior script, an `app` item is the page's own script's duty, and a `review` item is a person's judgment.

| kind | requirement | WCAG 2.2 |
| --- | --- | --- |
| check | `__section => has __legend` | 1.3.1 |
| check | `__reveal[id]` | 4.1.2 |
| check | `__reveal => has <input>[data-reveal][aria-controls]` | 4.1.2 |
| behavior | `form.reveal` | 2.4.3, 4.1.2 |
| review | Every input that asks for the user's own data carries its autocomplete token; card fields use cc-* with inputmode=numeric. | 1.3.5 |

## Behavior

What `components/bundle.js` does for it. A line marked CSS is the stylesheet's work.

```text
form           a checkbox carrying data-reveal, on bind and on change → the
               region its aria-controls names: hidden := not checked;
               aria-expanded := checked; on check, focus the region's first
               input, select, textarea or button.                   #form.reveal
```

## Tokens

Binds 18 component tokens of its own, plus the shared page tokens (`--c-page-*`: focus ring, wash, hairline, motion).

| token | reads | value |
| --- | --- | --- |
| `--c-form-gap` | `--s-space-base` | 16px |
| `--c-form-max-width` | `--s-size-measure-prose` | 672px |
| `--c-form-legend-font-family` | `--s-font-family-heading` | Lato |
| `--c-form-legend-font-size` | `--s-type-heading-sm-size` | 20px |
| `--c-form-legend-line-height` | `--s-type-heading-sm-line-height` | 24px |
| `--c-form-legend-tracking` | `--s-type-heading-sm-tracking` | 0 |
| `--c-form-legend-weight` | `--s-font-weight-bold` | 700 |
| `--c-form-legend-ink` | `--s-color-text-primary` | #262321 · dark #fff7f2 |
| `--c-form-hint-font-family` | `--s-font-family-body` | Newsreader |
| `--c-form-hint-font-size` | `--s-type-body-xs-size` | 14px |
| `--c-form-hint-line-height` | `--s-type-body-xs-line-height` | 20px |
| `--c-form-hint-tracking` | `--s-type-body-xs-tracking` | 0 |
| `--c-form-hint-ink` | `--s-color-text-secondary` | #4c453f · dark #e8dfda |
| `--c-form-actions-gap` | `--s-space-sm` | 8px |
| `--c-form-actions-divider` | `--s-color-border-on-page` | #e8dfda · dark #1e374f |
| `--c-form-actions-divider-width` | `--s-border-width-hairline` | 1px |
| `--c-form-actions-inset-block-start` | `--s-space-xl` | 24px |
| `--c-form-group-gap` | `--s-space-xl` | 24px |
