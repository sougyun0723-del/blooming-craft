---
name: Blooming Craft Studio
colors:
  surface: '#fff8f5'
  surface-dim: '#e1d8d4'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fbf2ed'
  surface-container: '#f5ece7'
  surface-container-high: '#efe6e2'
  surface-container-highest: '#e9e1dc'
  on-surface: '#1e1b18'
  on-surface-variant: '#57423b'
  inverse-surface: '#34302c'
  inverse-on-surface: '#f8efea'
  outline: '#8a726a'
  outline-variant: '#dec0b7'
  surface-tint: '#a23e18'
  primary: '#9f3c16'
  on-primary: '#ffffff'
  primary-container: '#bf542c'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb59c'
  secondary: '#8e4e14'
  on-secondary: '#ffffff'
  secondary-container: '#ffab69'
  on-secondary-container: '#783d01'
  tertiary: '#056952'
  on-tertiary: '#ffffff'
  tertiary-container: '#2e826a'
  on-tertiary-container: '#f5fff9'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcf'
  primary-fixed-dim: '#ffb59c'
  on-primary-fixed: '#390c00'
  on-primary-fixed-variant: '#822801'
  secondary-fixed: '#ffdcc4'
  secondary-fixed-dim: '#ffb780'
  on-secondary-fixed: '#2f1400'
  on-secondary-fixed-variant: '#6f3800'
  tertiary-fixed: '#a1f3d6'
  tertiary-fixed-dim: '#85d6bb'
  on-tertiary-fixed: '#002118'
  on-tertiary-fixed-variant: '#00513f'
  background: '#fff8f5'
  on-background: '#1e1b18'
  surface-variant: '#e9e1dc'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 42px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: 0em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: 0em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 26px
    letterSpacing: 0.01em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 22px
    letterSpacing: 0.02em
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '700'
    lineHeight: 24px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.03em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.04em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1.25rem
  space-xs: 0.375rem
  space-sm: 0.75rem
  space-md: 1.25rem
  space-lg: 2rem
  space-xl: 3rem
---

## Brand & Style

The design system is created for a specialized heat-transfer craft workshop application tailored for special education students, instructors, and supportive caregivers. The brand personality is patient, warm, encouraging, tactile, and celebratory. It removes sensory overload and intimidating digital abstraction, replacing them with the comforting, grounded presence of an artisanal textile workshop.

The visual style blends **Tactile Craft Warmth** with **Accessible Minimalism**:
- Surfaces evoke unbleached cotton blanks, primed canvas, and smooth ceramic pressing plates.
- Interactions replicate reassuring physical confirmations: soft clay-like cushion states, distinct pressed feedback, and vivid visual blooming as artwork transfers from paper to fabric.
- Cognitive clarity is prioritized through generous spacing, high visual affordance, and deeply intuitive touch targets (large radii and thick minimum touch perimeters of 56px).

## Colors

The color palette centers on the transformative magic of heat pressing: turning quiet sketches into blooming, permanent creations.

- **Primary (`#C85A32` - Terracotta Ember):** Reflects the soothing, steady heat of the transfer iron and heat-press platen. Used for primary triggers, action steps, key milestones, and focal focal points.
- **Secondary (`#F4A261` - Sunlit Honey):** Evokes creative optimism, warm sunlight across the workbench, and active exploration. Used for secondary highlights, instructional badges, and active selection rings.
- **Tertiary (`#4E9F86` - Sage Leaf):** Symbolizes blooming botanicals, steady patience, success confirmations, and calm restorative focus. Provides a soft natural counterweight to the thermal warmth.
- **Neutral Ground (`#2D2926` - Roasted Charcoal):** A softened black that prevents optical harshness while maintaining WCAG AAA contrast ratios across text and icon indicators.
- **Canvas Tones (`#FFFBF5` base canvas, `#F7F5F0` elevated container, `#EFECE4` subtle border line):** Form a backdrop of organic cotton fibers and handmade papers, preventing screen glare.

## Typography

The typography is built around **Plus Jakarta Sans**, chosen for its friendly geometric curves, wide aperture, tall x-height, and exceptional legibility for neurodivergent and special education readers. 

- Body text begins at `16px` for standard viewports, with a generous `18px` preference for step-by-step guidance workflows to reduce visual stress.
- Weights avoid ultra-thin ranges entirely; headings utilize bold 700 and 800 weights with slightly increased letter tracking to prevent visual crowding.
- Numerals and step markers maintain tabular properties so operational time, heat press counts, and sequence instructions remain strictly aligned.

## Layout & Spacing

The layout is built on a responsive 8-column layout for tablets (the primary craft studio tablet form factor) and a single-column stacked layout on mobile handhelds. A max content boundary of 1080px guarantees cards and canvas zones remain within comfortable reach without overextension.

- **Rhythm & Touch Zones:** Everything interactive adheres to a minimum touch bounding box of 56px × 56px with generous spacing (`space-md` or `1.25rem` minimal inter-button gap) to eliminate accidental taps.
- **Work Station Split:** On tablet devices positioned beside a heat press, the layout adopts a 5:3 split: 5 columns dedicated to the visual craft canvas and real-time press countdown, 3 columns dedicated to step-by-step visual pictograms and assistive voice prompts.
- **Margins:** Comfortable padding prevents tactile interaction issues at the hardware edges of rugged tablet cases used in classroom settings.

## Elevation & Depth

Visual depth is designed to feel physical rather than digital, drawing direct inspiration from stacked felts, transfer papers, and cut fabric patches.

- **Tonal Layering:** The backdrop uses canvas ivory (`#FFFBF5`). Cards sit at a soft warm porcelain tone (`#F7F5F0`), delineated by a 1.5px warm biscuit outline (`#EFECE4`) instead of stark drop shadows.
- **Cushion Shadows:** For draggable vinyl cutouts and interactive press controls, elevation utilizes ultra-diffused, warm-tinted shadows:
  - Default state: `0 4px 14px -2px rgba(200, 90, 50, 0.08), 0 2px 6px -1px rgba(45, 41, 38, 0.05)`.
  - Floating / Dragged state: `0 12px 28px -4px rgba(200, 90, 50, 0.16), 0 4px 10px -2px rgba(45, 41, 38, 0.08)`.
- **Physical "Pressed" States:** When pressed, buttons lose their bottom bevel and translate downwards by 2px with an inner warm inset shadow, offering tactile feedback that simulates the firm clamp of a manual heat press.

## Shapes

The shape language is ultra-rounded and tactile, providing a soft, comforting visual rhythm with zero intimidating sharp corners.

- Buttons, inputs, and notification badges leverage full pill contours (`rounded-full` / Level 3).
- Craft tiles, image previews, and step-by-step modular cards feature wide, organic curves (`2rem` to `3rem` corner radii).
- Interactive drag targets and drop zones mirror the natural, imperfect roundness of smooth river stones or felt appliques.

## Components

### Buttons
- **Primary Action (The "Press" Button):** Rich Terracotta (`#C85A32`) background, crisp ivory text (`#FFFBF5`), height of 60px, rounded-full. Elevated with a subtle 3px solid under-lip (`#A24422`) that depresses cleanly on touch.
- **Secondary Action:** Sunlit Honey (`#F4A261`) tint with roasted charcoal text (`#2D2926`) and soft pill borders for exploratory options like "Preview Color" or "Rotate Pattern".
- **Assistive / Read Aloud:** Sage Leaf (`#4E9F86`) pill button with an integrated high-contrast audio wave icon for audio step instructions.

### Cards & Craft Canvas
- Surface is `#F7F5F0` with a 2px solid border in `#EAE5DB`. Cards feature an inner padding of `space-lg` (`2rem`) to give graphics breathing room.
- Craft template cards feature an upper fabric preview window with curved top corners and a lower instructional tray carrying bold pictograms.

### Chips & Badges
- Heat Level & Material Tags: Soft pastel fills (`#FBE8E1` for thermal indicators, `#E8F4F0` for cotton/canvas fabric types) paired with high-contrast text and a prominent status dot.
- Height is fixed at 36px with full pill geometry, ensuring they never visually compete with actionable buttons.

### Form Inputs & Adjusters
- Text inputs and step number counters have an ivory interior (`#FFFBF5`), 56px height, and a 2px border in `#E5DFD5`. 
- Focus and active states swap the border to `#C85A32` accompanied by a warm 4px radiant aura (`rgba(200, 90, 50, 0.20)`).
- Increment and decrement steppers (for adjusting press temperature or seconds) feature oversized `+` and `-` tactile circular pads (48px diameter minimum).

### Checkboxes & Step Checkers
- Step-completion checkboxes are large, friendly 36px circles with a 2.5px border.
- When completed, they animate with a gentle scale-bounce and fill with Sage Leaf (`#4E9F86`), displaying an unmissable white checkmark paired with optional reassuring chime feedback.

### Progress & Heat Press Timer
- The countdown timer is presented as a blooming floral arc: as the heat press applies pressure, a thick 16px rounded stroke fills smoothly with Terracotta and Sun Yellow, turning completely Sage Green when the press cycle is safe to lift.