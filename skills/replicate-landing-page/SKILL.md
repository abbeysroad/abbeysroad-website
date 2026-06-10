---
name: replicate-landing-page
description: "Replicates the premium, interactive NordisTravel landing page design system (layout, style, fonts, colors, interactive map, daily timeline, quote calculator) with custom itineraries, pricing, and locations."
---

# Landing Page Replication Skill

This skill allows any agent to quickly regenerate the NordisTravel landing page for a new itinerary or region, preserving the exact layout, interactive features, responsive styles, and high-end aesthetics of the original.

## Workspace Layout

The skill is contained inside the project workspace:
```
skills/replicate-landing-page/
├── SKILL.md                          # This instruction document
├── resources/
│   ├── index.html.template           # Layout skeleton matching styles.css
│   └── app.js.template               # Interactive logic skeleton
├── examples/
│   └── scandinavia_itinerary.json    # Example configuration (9-Day Scandinavia)
└── scripts/
    └── generate_page.py              # Python compiler script
```

---

## Workflow Steps

To replicate the landing page for a new tour:

### Step 1: Draft the Itinerary Configuration JSON
1. Review the structure in [scandinavia_itinerary.json](file:///Users/michaelnnielsen/Documents/ANTIGRAVITY/NordisTravel/skills/replicate-landing-page/examples/scandinavia_itinerary.json).
2. Create a new JSON file for your tour (e.g. `italy_itinerary.json`).
3. Fill out the `meta`, `hero`, `essentials`, `booking`, `value_insights`, and `footer` fields.
4. Set up the `itinerary` daily breakdown array. For each day, specify the vibe, highlights list, lodging stay, and media block.

### Step 2: SVG Map Design and Calibration
The interactive map deck uses an SVG coordinate system overlaying a clean geography map image (`1024x1024`px).
1. **Map Design Guidelines (Consistent Style):** The background map image must always match the design style of the original 9-day Nordic escape map:
   - **Type:** Clean, physical topographic/relief map.
   - **Landmasses:** Shaded white and light-grey land colors highlighting elevations, mountain ridges, and valleys.
   - **Waterbodies:** A soft, clean light-blue color for oceans, with dark-grey or light-blue lakes.
   - **Labels:** Keep it clean with minimal or no text labels (as pins and city labels are overlaid dynamically in the SVG layer).
   - **Quality:** High-resolution, watermark-free, and professional travel-brochure look.
   - **Route Line Styling (Dotted/Dashed):** Do not apply inline `stroke`, `stroke-width`, or opacity styles directly to the SVG path element (`#route-path` with class `.map-route-line`). Instead, let it inherit CSS styling which specifies a high-visibility, dark navy dotted line (`hsl(215, 60%, 18%)`, `90%` opacity, `stroke-width: 5`, and `stroke-dasharray: 8 8`) so that transit segments (like flights or long air travel) stand out clearly on the light-grey topographic backdrop.
2. **Source the Map Background:** Find or generate an image fitting these style criteria for your target region (e.g. Italy, Iceland, Japan) and save it in `images/` (e.g. `images/italy_map.png`).
3. **Trace the Route Path:** Plot the travel route path in a standard SVG editor (or estimate coordinates manually). The `d` attribute of the path contains the route path string.
4. **Calibrate Pins:** Each pin (`g.map-pin`) overlays a coordinate `(cx, cy)`. Ensure the `cx` and `cy` are specified, and offset the label positions using `label_x` and `label_y` so they don't overlap pins.
5. **Map Transitions (`active_states`):** Define how the map updates as the user scrolls. Map the `max_day` to the list of `pins` to highlight, the route steps card `step_id` to focus, and the route draw percent `route_percent` (from `0.0` to `1.0`).

### Step 3: Source and Generate Aspirational Images
Images must always represent and beautifully display aspirational scenes of the travel highlights. They should match the premium, professional, yet real-world photography style of the original page.

#### Image Guidelines
- **No Watermarks:** Ensure all sourced or generated images are free of watermarks, branding, or text overlays.
- **Composition & Perspective:** Prefer wide-angle scenic shots, dramatic lighting, and natural framing (e.g., looking through a doorway, reflections in water). Avoid overly artificial stock-photo framing.
- **Human Element:** Include real-looking travelers caught in candid, natural movements (avoid posed studio models).
- **Lighting & Color:** Use rich, natural color palettes (golden hour sunset, crisp blue morning light, misty green mountains) that evoke high-end, high-quality, and premium adventure travel.

#### Sourcing & Generation Prompts
If the details do not include high-quality images:
1. **Search Unsplash or Pexels:** Search for professional, royalty-free landscape and destination pictures (e.g. "Copenhagen Nyhavn colorful houses canal, golden hour").
2. **AI Image Generation Prompt Formula:** When generating images with Gemini, use the following composition formula:
   > *"[Beautiful, aspirational travel photograph depicting highlight description, e.g. vintage train ascending steep green cliff next to waterfall], real-world travel photography, captured on 35mm lens, natural golden-hour lighting, realistic textures, high fidelity details, candid tourist perspective, no watermarks, professional color grade"*
3. **Save Locations:** Save all assets in the `images/` directory with clear names (e.g., `images/day2_rome_colosseum.jpg`) and reference them in the itinerary JSON.

### Step 4: Run the Compiler
Execute the compiler script from the terminal to write the new `index.html` and `app.js` files:

```bash
python skills/replicate-landing-page/scripts/generate_page.py --itinerary <path_to_your_itinerary.json>
```

---

## Configuration JSON Schema Reference

The configuration file details:

| Path | Type | Description |
| :--- | :--- | :--- |
| `meta.title` | string | Browser title tag. |
| `meta.description` | string | SEO meta description. |
| `hero` | object | Content for the main page fold (image, title, subtitles, CTA). |
| `essentials` | array | Four key metadata cards showing Duration, Route, Style, Pace. |
| `map_deck` | object | Map titles, image source, SVG path (`route_path`), pins, and timeline steps. |
| `itinerary` | array | Day-by-day details. Days can be numeric or ranges (e.g. `"8-9"`). |
| `itinerary[].media` | object | Visual element of the day card. Supported types: `single`, `split_grid`, `carousel`, `gallery_3col`, `none`. |
| `booking` | object | Price calculator values: base price, date-multipliers, cabin types, and room upgrades. |
| `value_insights` | object | Bulleted lists of inclusions and exclusions. |
| `footer` | object | Local agency coordinates and copyright branding. |
