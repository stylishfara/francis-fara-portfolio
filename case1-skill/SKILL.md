---
name: case1
description: Apply Francis Fara's Case Study Layout 1 system to portfolio case-study pages. Use when creating, redesigning, or aligning HTML/CSS case study pages to the WalletWise-style layout, including hero image treatment, section typography, research insight cards, process image sections, impact cards, reflection, next-project links, spacing, background, and responsive behavior.
---

# Case Study Layout 1

Use this skill to apply the WalletWise case-study layout system to other portfolio project pages. Treat the layout as a quiet, editorial product-design case study: restrained, neutral, image-led, and readable. Prefer consistency over novelty.

## Core Principles

- Build a real case-study page, not a marketing landing page.
- Use one continuous page background: `#fafafa` for `body`, normal sections, and sticky nav translucency.
- Keep the page centered and narrow for reading: `.container { max-width: 900px; margin: 0 auto; padding: 0 40px; }`.
- Use generous vertical rhythm: `section { padding: 60px 0; }`, hero `72px 0 56px`, process `padding-top: 72px`.
- Use borderless grey cards for research and impact sections: `#eeeeee`, radius `16px`.
- Avoid shadows, decorative gradients, or nested cards.
- Use real project images where possible. If a live/reference site exists, inspect it and copy the exact assets into the local `images/` folder before wiring them into the page.

## Typography

Load fonts in HTML head:

```html
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800&amp;family=Geist+Mono:wght@400;500;600;700&amp;display=swap" rel="stylesheet" />
```

Base font:

```css
body {
  font-family: 'Geist', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  line-height: 1.7;
}
```

Type rules:

- Page background and text: `--bg: #fafafa`, `--text-primary: #333333`, `--text-secondary: #6b6b6b`, `--text-muted: #999`.
- Section labels such as `Overview`, `The Problem`, `Research & Insights`, `Process`, `Impact`, `Reflection`: Geist Mono, 16px, weight 500, uppercase, letter spacing `1.2px`, `margin-bottom: 8px`.
- Impact and Process labels may use wider Framer-like spacing: `letter-spacing: 0.2em`, color `rgba(72,72,72,0.6)`, line-height `30px`, but keep the same 8px gap to the title below.
- Section sublabels: 20px, weight 500 or 600 depending on emphasis, line-height about 1.3 or 30px, margin-bottom 32px unless the section has its own copy block.
- Body paragraphs: 16px, color `#6b6b6b` or `#484848`, line-height 1.75 for narrative sections, 24px for Framer-matched process text.
- Hero title: Geist Mono, weight 500, responsive `clamp(28px, 4vw, 36px)`, line-height 1.05, letter spacing `-1.2px`.
- Next project label: Geist Mono, 12px, weight 500, uppercase, letter spacing `0.8px`.
- Next project title: normal Geist, 20px, weight 500.

## Page Structure

Use this order unless the project content requires a small adjustment:

1. Sticky nav
2. Hero with project title, real hero image, metadata row
3. Overview with narrative text and optional stats grid
4. The Problem
5. Research & Insights with numbered grey insight cards
6. Process with stacked image-led process blocks
7. Impact / Measured outcomes with grey metric cards
8. Reflection
9. Next project
10. Footer

## Hero

Hero layout:

- `.hero { padding: 72px 0 56px; }`
- Small case-study tag: 12px, weight 500, muted, uppercase, margin-bottom 20px.
- Hero title uses Geist Mono at max 36px.
- Hero image comes after the title, with `margin-top: 56px`, radius 16px, overflow hidden, background fallback `#e8e6f4`.
- Use a real image, not placeholder text. Structure:

```html
<div class="hero-image">
  <img src="images/project-hero.png" alt="Descriptive project preview" />
</div>
```

```css
.hero-image {
  width: 100%;
  aspect-ratio: 16 / 8;
  border-radius: 16px;
  margin-top: 56px;
  overflow: hidden;
  background: #e8e6f4;
}
.hero-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
```

## Metadata Row

Use a four-column bordered row below the hero image.

- Border top and bottom: `1px solid #e8e8e6`.
- Each item flexes, min-width 140px.
- Item padding: `20px 0`, horizontal gutters of 32px between items.
- Labels: 11px, weight 600, uppercase, letter spacing 0.8px, muted.
- Values and links: 14px, regular. Links use `#007AFF`.

## Overview Stats Grid

If the case study includes summary stats near Overview:

- Use a single bordered grid with `grid-template-columns: repeat(3, 1fr)`.
- Background of grid uses border color with 1px gaps.
- Items use page background `#fafafa`, padding `32px 28px`.
- Stat number: 32px, weight 500, letter spacing `-1.5px`.
- Stat label: 14px, muted, line-height 1.4.

## Research & Insights Cards

Research insights use independent grey cards, not a bordered list.

```css
.research-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
}
.research-item {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 40px;
  min-height: 168px;
  padding: 32px 36px;
  background: #eeeeee;
  border-radius: 16px;
}
.research-item-body { display: flex; flex-direction: column; gap: 20px; max-width: 680px; }
.research-item-title { font-size: 20px; font-weight: 600; letter-spacing: -0.4px; line-height: 1.25; }
.research-item-text { font-size: 18px; color: #6b6b6b; line-height: 1.55; }
.research-item-num {
  font-size: clamp(64px, 9vw, 76px);
  font-weight: 600;
  letter-spacing: -4px;
  line-height: 0.9;
  color: rgba(0,0,0,0.06);
}
```

Content pattern:

```html
<div class="research-item">
  <span class="research-item-num">01</span>
  <div class="research-item-body">
    <p class="research-item-title">Insight title</p>
    <p class="research-item-text">Insight explanation.</p>
  </div>
</div>
```

## Process Section

Process is a stacked single-column narrative with image blocks. Do not use side labels. Do not place content inside bordered cards.

- Section label: Geist Mono 16px, color `rgba(72,72,72,0.6)`, letter spacing `0.2em`, line-height 30px, margin-bottom 8px.
- Process list gap: 80px desktop.
- Each process layer: `display:flex; flex-direction:column; gap:24px`.
- Process title: 20px, weight 600, line-height 24px, color `#484848`.
- Process text: 16px, line-height 24px, color `#484848`.
- Image: full width, `height:auto`, radius 24px, `margin-top:16px`.
- Use exact process assets from the source/reference when available and store them locally as `images/project-process-*.png` or `.webp`.

Example layer:

```html
<div class="process-layer">
  <h3 class="process-layer-title">Layer 1 - Onboarding Flow</h3>
  <div class="process-layer-content">
    <p class="process-layer-text">Narrative paragraph.</p>
    <p class="process-layer-text">Second paragraph if needed.</p>
    <img class="process-layer-image" src="images/project-process-onboarding.png" alt="Descriptive alt text" />
  </div>
</div>
```

## Impact / Measured Outcomes

Use the compact Framer-like card scale, not oversized screenshot pixel scale.

- Section background inherits page `#fafafa`.
- Label: Geist Mono 16px, `letter-spacing: 0.2em`, color `rgba(72,72,72,0.6)`, line-height 30px, margin-bottom 8px.
- Heading: `Measured outcomes`, 20px, weight 600, line-height 30px, color `#484848`, margin bottom 24px.
- Copy: 16px, line-height 24px, color `#484848`, margin-bottom 32px.
- Cards: grid 3 columns desktop, gap 20px, grey `#eeeeee`, radius 16px, no border, no shadow.
- Card dimensions: min-height 170px, padding `32px 28px`, flex column, centered vertically, gap 22px.
- Metric number: 32px, weight 500, letter spacing `-0.8px`, color `#484848`, line-height 1.
- Metric label: 14px, line-height 1.5, color `#484848`.

Example:

```html
<section class="impact-section" id="impact">
  <div class="container">
    <p class="section-label">Impact</p>
    <p class="section-sublabel">Measured outcomes</p>
    <p class="impact-copy">Post-launch performance highlights across adoption, engagement, and support efficiency</p>
    <div class="impact-grid">
      <div class="impact-item">
        <span class="impact-number">10,000+</span>
        <span class="impact-label">App Downloads, 65% post v2 launch</span>
      </div>
    </div>
  </div>
</section>
```

## Reflection

Reflection uses the standard section label and sublabel rhythm:

- Label to title gap: 8px.
- Title to body gap: 32px via `.section-sublabel` margin-bottom.
- Body paragraphs: 16px, line-height 1.8, color secondary, paragraph gap 20px.
- No card wrapper or background panel.

## Next Project

Use a simple horizontal row, no card:

- Link has top and bottom borders, padding `32px 0`.
- Label: Geist Mono, 12px, weight 500, uppercase, letter spacing 0.8px, muted, margin-bottom 6px.
- Project title: Geist, 20px, weight 500, letter spacing `-0.4px`.
- Arrow: 24px muted.

## Responsive Rules

At `max-width: 680px`:

- Nav padding: `18px 20px`.
- Container padding: `0 20px`.
- Hero padding: `48px 0 40px`.
- Metadata row stacks vertically; remove right borders and use bottom dividers.
- Overview stats grid and impact grid become 2 columns.
- Process list gap becomes 56px; process image radius becomes 18px.
- Research cards become one-column; number moves below body, left aligned, 56px.
- Research text reduces to 16px.
- Footer stacks vertically.

At `max-width: 520px`:

- Impact grid becomes 1 column.

## Verification Checklist

Before finishing a page using this layout:

- Confirm all backgrounds read as one continuous `#fafafa` page surface.
- Confirm section labels are Geist Mono 16px and the gap to the title below is 8px.
- Confirm no cards have borders unless the pattern explicitly calls for dividers or metadata rows.
- Confirm hero and process images are real images, not placeholders, and are not distorted.
- Confirm the impact cards use 32px metric numbers and 14px labels.
- Render desktop and mobile if browser tooling is available; check for horizontal scrolling, clipped text, broken images, and excessive white gaps.
