# Case Study Layout Prompt

Build a single-page HTML case study in the exact style of the reference below. Do not deviate from the layout, typography, colors, or spacing spec.

---

**TECH**
- Plain HTML + CSS, no frameworks
- Google Font: `Geist` (weights 300–800) via `fonts.googleapis.com`
- All styles in a single `<style>` block in `<head>`

---

**COLOR TOKENS** (define as CSS custom properties on `:root`)
```
--bg: #ffffff
--bg-soft: #f7f7f5
--bg-card: #f2f1ee
--border: #e8e8e6
--border-dark: #c8c8c6
--text-primary: #333333
--text-secondary: #6b6b6b
--text-muted: #999999
```
Links use `#007AFF`. No other accent colors unless specified by content.

---

**TYPOGRAPHY**
- Font family: `'Geist', -apple-system, BlinkMacSystemFont, sans-serif`
- Base: 16px / line-height 1.7 / `-webkit-font-smoothing: antialiased`
- Hero title: `clamp(36px, 5vw, 56px)`, weight 500, letter-spacing -2px, line-height 1.05
- Section labels: 16px, weight 500, letter-spacing 1.2px, uppercase, color `--text-muted`
- Section sublabels: 20px, weight 500, letter-spacing -0.4px, color `--text-primary`
- Body text: 16px, color `--text-secondary`, line-height 1.75
- Stat numbers: 32px, weight 500, letter-spacing -1.5px
- Impact numbers: 40px, weight 500, letter-spacing -2px
- Meta labels: 11px, weight 600, letter-spacing 0.8px, uppercase, color `--text-muted`
- Meta values: 14px, weight 400, color `--text-primary`
- Max font-weight used anywhere: 500 (except meta-label at 600)

---

**LAYOUT**
- Container: max-width 900px, centered, padding 0 40px
- All `<section>` elements: `padding: 60px 0`
- No dividers between sections
- Responsive breakpoint at 680px

---

**STICKY NAV**
- `position: sticky; top: 0; z-index: 100`
- `padding: 22px 48px`, `border-bottom: 1px solid --border`
- Background: `rgba(255,255,255,0.88)` with `backdrop-filter: blur(12px)`
- Left: back arrow link (SVG, 16×16) — color `--text-secondary`, hover `--text-primary`
- Right: project title — 14px, weight 500, color `--text-muted`

---

**HERO SECTION** (`padding: 72px 0 56px`)
1. Small tag: "Case Study" — 12px, weight 500, uppercase, letter-spacing 0.8px, color `--text-muted`
2. `<h1>` with hero title styles
3. Hero image placeholder: `width: 100%; aspect-ratio: 16/8; background: #e8e6f4; border-radius: 16px; margin-top: 56px`
4. Metadata row **below** the image (`margin-top: 32px`): horizontal row of 4 columns separated by `1px solid --border` lines, top + bottom border on the row. Columns: Industry / My role(s) / Collaborators / App store (link in `#007AFF`)

---

**SECTION STRUCTURE** (repeat this pattern per section)
- `<p class="section-label">` — uppercase label
- Optional `<p class="section-sublabel">` — descriptive subtitle
- Content below

---

**SECTIONS IN ORDER**

1. **Overview** — body text paragraphs + a 3-column stats grid below. Stats grid: `display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: --border; border: 1px solid --border; border-radius: 16px; overflow: hidden`. Each stat cell: white background, `padding: 32px 28px`, stat number + stat label.

2. **The Problem** — `<h2>` problem heading (20px, weight 500, letter-spacing -1px) followed by body text paragraphs.

3. **Research & Insights** — sublabel + body intro text + numbered research list. Research list: `border: 1px solid --border; border-radius: 16px; overflow: hidden`. Each item: `display: grid; grid-template-columns: 48px 1fr; gap: 24px; padding: 28px 32px; border-bottom: 1px solid --border`. Number in muted color (12px), title (16px, weight 500, `--text-primary`), description (16px, `--text-secondary`).

4. **Process** — list of process layers. Each layer: `display: grid; grid-template-columns: 200px 1fr; gap: 48px; padding-bottom: 48px; border-bottom: 1px solid --border`. Left col: layer label (14px, weight 500, `--text-muted`). Right col: optional `<h3>` title (20px, weight 500, letter-spacing -0.4px) + body paragraphs + image placeholder (`aspect-ratio: 16/9; background: #f0eff8; border-radius: 12px; border: 1px solid --border`). Last layer has no bottom border.

5. **Impact** — sublabel + intro sentence + 3-column impact grid. Each impact card: `padding: 28px 24px; border: 1px solid --border; border-radius: 14px`. Impact number (40px) + label (14px, `--text-muted`).

6. **Reflection** — sublabel + paragraphs (`line-height: 1.8`, color `--text-secondary`, 20px gap between paragraphs).

7. **Next project** — full-width link row: `border-top + border-bottom: 1px solid --border; padding: 32px 0; display: flex; justify-content: space-between; align-items: center`. Left: "Next project" label (12px, uppercase) + project title (20px, weight 600). Right: `→` arrow (24px, `--text-muted`). Hover: `opacity: 0.7`.

---

**FOOTER**
- `padding: 36px 0`
- Flex row, space-between: left "Designed by X • Built by Y ©️ 2025" / right email link
- Both: 14px, color `--text-muted`

---

**RESPONSIVE (max-width: 680px)**
- Nav padding: 18px 20px
- Container padding: 0 20px
- Hero padding: 48px 0 40px
- Meta row: stack vertically, remove right borders, add bottom borders
- Stats grid: 2 columns
- Impact grid: 2 columns
- Process layers: single column, gap 20px
- Footer: stack vertically, align left

---

**INTERACTIONS**
- All hover states use `opacity: 0.7` or color transition (`0.15s`)
- `scroll-behavior: smooth` on `html`
- `box-sizing: border-box` reset on all elements
