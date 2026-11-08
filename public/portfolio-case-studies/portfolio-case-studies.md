# Annabelle Chow — Design Work (Case Study Source Content)

> **For GitHub Copilot / AI assistants:** This file is a text conversion of a 56-slide PDF portfolio deck ("Design Work", dated June 3, 2026). It is the source of truth for the content of four case studies. Use it when editing, rewriting, or restructuring the case-study pages on the portfolio website.
>
> **Conventions**
> - Each section lists the original slide number(s) in `[Slide N]` tags. The matching image is at `slides/slide-NN.jpg` (e.g. `slides/slide-12.jpg`).
> - Text in quotes is verbatim from the slides. Text in *italics inside square brackets* is a visual description added during conversion, not slide text.
> - Numbers and metrics (see each "Results" section) are real and should not be changed without confirmation.
> - Chart values, UI mockups, and screenshots exist only in the slide images. Where that matters, it is flagged with **[IMAGE ONLY]**.
> - Hex codes and exact measurements are not in the deck unless stated.

---

## Contents

1. [About / Intro](#about--intro) — slides 1–3
2. [Case Study 1: CMUsed](#case-study-1-cmused) — slides 4–18
3. [Case Study 2: Ladle](#case-study-2-ladle) — slides 19–29
4. [Case Study 3: SonaRide](#case-study-3-sonaride) — slides 30–43
5. [Case Study 4: CORE](#case-study-4-core) — slides 44–56
6. [Quick Reference Tables](#quick-reference-tables)
7. [Notes for Editing](#notes-for-editing)

---

## About / Intro

**[Slide 1] Title**
- Annabelle Chow
- Design Work
- June 3, 2026

**[Slide 2] Roles and positioning**

| Organization | Role |
|---|---|
| Ladle | UX/UI Designer |
| CMU Business Technology Group | Product Designer & Design Chair |
| Design for America | Designer & 26-27 Team Lead |

- Discipline: Product Design Thinking
- Education: Business Administration + HCI @ Carnegie Mellon University
- Tagline: "Making complex systems more efficient by designing for the user's workflow"

**[Slide 3] Why I design** *(headings only, no body text)*
- 01 — Human-First Design
- 02 — Shared Mission

---

## Case Study 1: CMUsed

**Title:** CMUsed — Student Marketplace for CMU Community
**Role:** Product Designer, CMU Business Technology Group
**Scope:** Competitor research, product page, branding, component library, shipping process
**Case study type:** Product Design Case Study

### Summary — [Slide 5] "The Story at a Glance"
1. **The Problem:** CMU secondhand exchanges were fragmented across social channels and general marketplaces.
2. **The Solution:** A centralized student marketplace built around trusted profiles, scannable listings, and direct messaging.
3. **Key Decisions:** Scannable listings, trust signals, and local coordination.

### The Problem — [Slide 6]
**Headline:** "Two groups. One gap. Zero connection."
Upperclassmen needed to offload furniture. Underclassmen needed to furnish dorms. But there was no streamlined way to connect them.

| Group | Situation | Gap |
|---|---|---|
| Upperclassmen (Sellers) | "Stuck with furniture they can't move." Moving out of dorms means beds, desks, and chairs with nowhere to go, and no easy way to find buyers fast. | Surplus with no marketplace |
| Underclassmen (Buyers) | "Moving in and starting from scratch." Incoming students needed affordable furniture quickly, but existing channels were scattered and hard to coordinate. | Demand with no trusted source |

**The "No Bridge" point:** No platform connected these two groups within the CMU community.

### Research — [Slide 7] Transition
"So we have the clear gap? What now?" The team dove into target users, working with business to discover what CMU students truly wanted.

### Research: Survey Findings — [Slide 8]
**Headline:** "Convenience is king — price & pickup matter most."
- **Chart 1:** Ranking of top priorities when potentially buying from another CMU student. Priorities showed students were largely price conscious and wanted convenience.
- **Chart 2:** Most frequently used channel to purchase second-hand items at CMU. Word of mouth (WOM) was the most popular, confirming the assumption of a disconnected and inefficient marketplace.
- **[IMAGE ONLY]** Chart values and exact rankings are in `slides/slide-08.jpg`.

### Research: Competitor Analysis — [Slide 9]
**Headline:** "General marketplaces gave us the browsing blueprint — but not the answer."
Campus trust, local logistics, and peer-seller dynamics required something general platforms couldn't offer.

- **What Translated — search, browse, and listing conventions:** Etsy's category navigation, photo-first listing cards, and seller profiles provided familiar UX patterns users already understood, reducing onboarding friction.
- **The Gap — campus trust & local logistics, unsolved:** General marketplaces support broad commerce, but CMU exchange needed seller credibility, neighborhood filters, and local coordination.
- Source label on slide: Etsy · Competitor Audit

### External Pressures & Feedback — [Slide 10]
**Headline:** "External Pressures & Feedback resulting in targeted focus" *(context label: Fall-Semester Final Presentation)*

| Pressure | What happened | Takeaway |
|---|---|---|
| Google Employee Feedback | A Google employee reviewing the project challenged the team to concentrate on key services rather than solving every problem in the student marketplace. | "Scope the core, cut the rest" |
| CollegeCart (Competitive Pressure) | Another student club began building CollegeCart, creating direct competition. Required a faster turnaround ("Accelerated Execution") and reinforced the need for a tighter scope. | "Ship faster, stay focused" |

### Our Focused Pivot — [Slide 11]
**Headline:** "Three user priorities that organize the entire CMUsed experience."

1. **Browse & Compare** *(research priority)*: Surface listing image, price, condition, and category so students can scan and compare options quickly.
2. **Build Trust** *(trust priority)*: Reviews, required photos or videos, and clear condition details reduce uncertainty between student buyers and sellers.
3. **Coordinate Locally** *(local coordination)*: Neighborhood filters and in-app messaging help students plan local handoffs and keep conversations moving.

### Design Decision: Listing Page — [Slide 12]
**Headline:** "Scan first. Then build confidence."
**Decision:** Surface the most critical signals up front (image, price, condition) so students decide fast. Reveal seller context and reviews to seal trust.

*[Slide shows a Before/After comparison of the product listing page, with annotated callouts on the After design.]*

Annotated callouts on the listing page:
- **Price:** Prominent, with a "negotiable" flag
- **Image:** Multi-angle gallery for confident scanning
- **Condition:** Color-coded quality label (e.g. "Like New")
- **Seller CTA:** Direct contact action above the fold (Message / Contact Seller)
- **Description:** Short listing description
- **Reviews:** Filterable grid builds trust below the fold (filter options: Lowest, Highest, Most Relevant)

*Note: Text inside the mockup (lorem ipsum, "Megan Bellman", "Bell Forest", sample contact details) is placeholder content.*

### Onboarding — [Slide 13]
**Headline:** "Reduce friction. Keep campus trust."
CMU sign-on keeps entry simple while grounding the experience in the campus community.

Flow shown:
1. Splash / landing: "Join the marketplace just for you" with "Carnegie Mellon University - CMU Sign On"
2. Welcome `[andrewID]`: "What are you most interested in doing on CMUsed?" → **Selling / Buying / Both** → Next
3. Pick 3 categories you're most interested in buying/selling: **Clothing, Furniture, Electronics, Bikes/Scooters, Storage/Organizers, Appliances** → Next
4. Also shown: "List Items Easily"

### Visual System — [Slide 14]
**Headline:** "A shared visual system made CMUsed feel coherent and trustworthy."
A shared palette, type scale, and reusable components created a consistent marketplace experience.

- **Color palette (brand):** Dark Red, Primary Red, Tan, Off-white *(hex codes not in the deck; see `slides/slide-14.jpg`)*
- **Type scale:**

| Style | Spec |
|---|---|
| Display 1 | 56 / SemiBold |
| Display 2 | 48 / SemiBold |
| Headline 1 | 32 / SemiBold |
| Headline 2 | 24 / Medium |
| Body 1 (primary reading text) | 16 / Regular |
| Body 2 (secondary / supporting text) | 14 / Regular |
| Label (buttons, tags, UI controls) | 14–16 / Medium |

### Component Library — [Slide 15]
**Headline:** "One library. Every screen, consistent."
*[Shows the marketplace home/browse and listing screens built from the same component set: listing cards with price, condition label (e.g. "Like New", "Quality: Good"), category, and "Contact Seller" buttons; header with search, Login / Sell Now.]*

### Cross-Functional Collaboration — [Slide 16]
**Headline:** "Design didn't ship alone."
- **Engineering:** Made Figma implementation-ready. Set shared file structure, design-system, and component practices with developers so designs were easy to understand and build.
- **Data:** Designed features to capture useful data. Partnered with data to ensure key interactions could generate meaningful signals about user behavior.
- **Business:** Scoped around user needs and launched together. Prioritized the core experience, then planned branding and launch materials as one team.

### Results — [Slide 17]
**Headline:** "CMUsed connected the CMU community."

| Period | Metric | Value |
|---|---|---|
| First week | Unique users | 679 |
| First week | Listings created | 232 |
| First week | Messages sent | 339 |
| Current cumulative | Total users | 1,787 |
| Current cumulative | Total listings | 874 |
| Current cumulative | Sold inventory | $23.8k |

### Next Steps — [Slide 18]
1. **Audit the site:** Close development gaps. Align design and implementation so the current experience is polished and reliable.
2. **Build a design system:** Create shared product standards. Work with the design team to pioneer an organization-wide system for consistent products.
3. **Create a mobile app:** Expand to mobile. Carry the core marketplace experience into a dedicated mobile app.

---

## Case Study 2: Ladle

**Title:** Ladle — Brand Menopausal Redesign & New Journal Feature
**Role:** UX/UI Intern
**Scope:** Built component library, spearheaded new features
**Context:** Startup; previously outsourced UI design

### Founder Ask — [Slide 20]
> "I want a brand redesign to focus primarily on menopausal women due to internal research and a nutritional journal feature for 40-50 year old women to plan their meals."

### Initial Challenge — [Slide 21]
1. **Time Constraint: Three Weeks.** Startup pace required a redesign and feature to relaunch the brand. Redo and establish a clearer UI library with the new rebrand.
2. **Unbuilt Design System.** Previously outsourced UI design. Lack of connected components/website layouts. No styles/variables.
3. **Zero to One: New Unbuilt Journal Feature.** No journal feature in sight, just the founder's concept. Needed to build additional flows to incorporate it.

### Broken Design System — [Slide 22]
**Headline:** "No Styles, No Variables, Disconnected Components"
- Had organized color styles, but none of the actual components inherited them
- No font style rules
- No scalable design system

### Fixing the Design System — [Slide 23]
**Headline:** "Fixing the design system from the get-go" / "Ensuring handoff & time-constraints"
With the time constraint of this project, I focused on getting the basic styles and fonts connected with all the components, to ensure on-time dev handoff and future design handoffs.

### Spearheading the Journal Feature: Speed vs. User Research — [Slide 24]
**Tradeoff:** "We prioritized speed over validated user research."
- **Desk research:** Secondary research and inspiration from existing UI patterns.
- **Proven UI patterns:** External examples with familiar flows and established interaction models.
- **Developed persona:** Busy women in their 40s–50s balancing work or family duties during pre-menopause.

### Calendar Home Screen — [Slide 25]
**Subhead:** Color Coding & Layout Choices
**Simple Calendar View.** Target user: busy woman in her 40s.
- Easy to see all seven days
- Easily edit a specific meal of the day

**Palette:**

| Color | Usage |
|---|---|
| Primary terracotta | Emphasis, accents, and the primary CTA |
| Warm off-white | Surfaces, cards, and a calm neutral background |
| Ladle green | Health goals, freshness, and supporting accents |

*[Screenshot: Ladle web app, weekly meal-plan calendar ("April 5 - April 12", Sun–Sat), with Breakfast / Lunch / Dinner rows, add (+) cells, and a "Generate Shopping List" button. Top nav: Recipes, Cuisines, Diets, Goals, Occasions, About, Pricing.]*

### Side Drawer — [Slide 26]
**Subhead:** Keeping user in context
**Side Drawer Pop Out.**
- Users of this demographic are busy and multitasking.
- Keeping the context of where the user currently is helps them reorient.
- Easy to move back and forth between screens.

**Color-coded recipes:** Quick visual cues using the secondary sage for recipes dedicated to menopausal women ("Menopause Support" tag) to ensure scannability.

*[Screenshot: calendar with a "Day Plan" drawer for "Sunday, April 5 — 3 meals planned, 770 cal"; recipe cards show title, time, and calories (e.g. "Air fryer buffalo stuffed chicken breasts, 32 min, 210 cal").]*

### AI Prototyping & Dev Collaboration — [Slide 27]
**Subhead:** Experimenting with FigmaMake, to expedite prototype-to-dev handoff for stakeholder presentations.
- Helpful for expressing complex interactions/flows rapidly
- Lacked understanding of the design system
- Struggled with cohesive user flows
- Required additional fine tuning

### Refinement & Human Touch — [Slide 28]
**Subhead:** Adding user persona considerations & system consistency
- Similar calendar style to the previous meal plan feature to ensure consistency
- More cohesive use of the design system
- Re-establishing previous user persona considerations, like keeping users within context

### Future Steps — [Slide 29]
1. **Refine the journal feature:** Continue refining based on future learnings.
2. **Design a doctor-facing view:** Explore how journal results could be organized in a doctor-facing view.
3. **Collect user feedback:** Validate assumptions and identify improvements.
4. **Further utilizing AI capabilities:** Establish a clear workflow balance of AI prototyping and collaborating with devs.

---

## Case Study 3: SonaRide

**Title:** SonaRide — Hard-of-Hearing Semi-Autonomous Moped
**Focus:** Physical and digital interactions + app design
**Team / timeline:** Partnered with three other product designers for a 6-week sprint.
*(Slide 30 lists this as "SonaRide: Moped for Hard-of-Hearing".)*

### Design Prompt — [Slide 32]
"Identify current issues with the effectiveness of SAV vehicles and develop a physical and digital prototype mitigating these issues."
*(SAV = semi-autonomous vehicle.)*

### User Research — [Slide 33]
1. **CMU Campus Field Study:** Observed current use of e-bikes/scooters on a college campus and interviewed students.
2. **Guerrilla User Research:** Three user interviews with e-moped users.
3. **Secondary Research:** Synthesized current moped user reviews and current guidelines/regulations.

### Version 1.0: Low-Fidelity Prototype — [Slide 34]
1. **Central Screen:** iPad-sized screen with a 3D navigation model. Helps users easily follow their route.
2. **Handlebar Screen:** Smaller screens display speed and battery. Keeps focus on the central navigation screen.
3. **Trapezoid Display:** Features a Face-ID camera. Displays current SAV state: Manual, Emergency, or SAV control mode.
4. **Button:** A switch for indication lights, adapted to SAV on/off.

### Critique Pivot: Mindmap + Revisiting User Interviews/Research — [Slide 35]
After critique, the team reevaluated the prototype and realized the design was overall unfocused, resulting in a broad, non-targeted solution.

**Constraints:**
- Limited physical prototyping materials left
- Limited time (three weeks left)
- Upcoming user test + Round 1 Showcase

The team needed a new direction, fast, and could reuse elements of the old design.
**Key user insight (quote):** "I use headphones a lot while on my moped"

### Iteration After Pivot: Version 2.0 — [Slide 36]
The new iteration was completely revamped to adapt to the new user: **hard-of-hearing drivers.**

### Establishing Clear Screen Hierarchy — [Slide 37]
- **Version 1.0:** Side screens compete with the big screen, so hierarchy is lacking. No longer applicable for hard-of-hearing users.
- **Version 2.0:** Small main screen to reduce mental load and prioritize focusing on surroundings. A small circle screen gives emphasized hierarchy and a division of information.

### Version 2.0 Handlebar — [Slide 38]
- **LED lights:** Color-changing handlebar to visually communicate vehicle status. States: Semi-Autonomous Mode, Turning, Alert, Charging.
- **Haptics:** Vibration feedback notifying users without requiring screen attention.
  - Turning: vibrate the left or right handle
  - Alert: both handles vibrate

### User Testing Findings — [Slide 39]
- **Honk icon:** The current icon was interpreted as celebration/light.
- **SAV mode:** Users found it difficult to differentiate between manual and SAV mode.
- **Accessibility features:** Users were overwhelmed and confused by all the various features.

### Usability Improvements — [Slides 40–42]
**[Slide 40] Clear distinction between modes**

| | SAV Mode | Manual Mode |
|---|---|---|
| Overall color | Everything is blue | Everything is gray |
| Screen | 3D route | 2D map |
| Speed ring | Blue | Gray |
| Handlebars | Blue | Colorless |

**[Slide 41] Welcome + tutorial:** Added welcome screens and tutorial/onboarding to help reduce user confusion.

**[Slide 42] Paper to digital prototyping; refining semantic icon usages.** *(Image-led slide; see `slides/slide-42.jpg`.)*

### Next Steps — [Slide 43]
1. **Gradient honking:** Additionally refine the gradient symbolism of how far away a sound is.
2. **Use haptics more:** Utilize haptics more to translate audio information.
3. **Color blindness:** Provide alternative color choices for color-blind users.

---

## Case Study 4: CORE

**Title:** CORE — Mobile App Design for Administrators on Call
**Organization:** CORE (Center for Organ Recovery & Education)
**Role:** Lead Product Designer
**Scope:** Developed component library, user research

### Client Ask — [Slide 45]
> "Take the current elements of the internal Trackerboard and AOC Form translate it to mobile layout that will be easy to digest and interact with"

### Initial Challenge — [Slide 46]
1. **Time Constraint: Six weeks.** Mobile design for a desktop tool. Run >3 user testing rounds. Proof of concept + dev handoff.
2. **Medical Jargon.** Organ donation process, lots of medical terms, unfamiliar abbreviations, complex forms and systems.
3. **Zero to One.** Build a mobile design system. The original website had no responsive web design at all. Broad solution space.

### Current Tools on Mobile — [Slides 47–48]
- **Trackerboard [47]:** An organization-level dashboard for all employees to see the current status of all types of donors. Has all of the individual donor information essential for employees.
- **AOC Form [48]:** An individual organ donor form consisting of the most updated information regarding the patient's progression. *(Slide shows Desktop vs. Mobile versions.)*

### Narrowing Our Scope — [Slide 49]
The team prioritized and narrowed the initial client ask to deliver the best proof of concept.
**Focused on Administrators on Call (AOCs):**
- Staff role that was on the go
- Time-sensitive role that couldn't sit at a laptop

### Senior Administrator On Call Interview — [Slide 50]
**Highlights & pain points:**
- Difficult handovers; currently done in the notes section of the AOC Form
- Heavy workload but no task reminder, so the AOC on shift often forgets to update certain fields
- Repeated workflow: notes down ICU information on paper, then transfers it manually to the system later
- Overwhelming amount of information, making it difficult to input on mobile

**Needs surfaced:**
- Time reminders for serologies
- Ordering of AOC Form input (standardized among AOCs)

### Design Decisions — [Slides 51–55]
**[Slide 51] Keeping the familiarity of AOC Forms.** The AOC Form is standardized, so the original order was kept to minimize mental load. Created form sections with a **jump-to-section** feature so AOCs on the go don't have to scroll.

**[Slide 52] Table to cards for better mobile visibility.** Cards were a glanceable format for AOCs while on the go.

**[Slide 53] Prioritization & designing with the AOC's workflow.** Prioritized blood tests that would expire in a certain amount of time.

**[Slide 54] Prioritization & designing with the AOC's workflow.** Grouped related items to reduce mental load and improve glanceability.

**[Slide 55] Cutting down on redundancies.** Reduced click count by using pop-ups instead of separate pages.

### Handoff — [Slide 56]
**HTML and CSS Proof of Concept:** To hand off to the client, the team provided a proof of concept built with HTML and CSS.

---

## Quick Reference Tables

### Case study overview

| Case study | Role | Timeline / constraint | Key outcome |
|---|---|---|---|
| CMUsed | Product Designer (CMU Business Technology Group) | Tighter scope and faster turnaround after CollegeCart emerged as competition | 679 unique users in week one; 1,787 total users; 874 listings; $23.8k sold inventory |
| Ladle | UX/UI Intern | Three weeks | Connected styles and fonts to components for dev handoff; designed the calendar-based journal feature; experimented with FigmaMake |
| SonaRide | Product designer on a team of four | Six-week sprint; pivot with three weeks left | Redesigned for hard-of-hearing drivers with visual (LED) and haptic feedback |
| CORE | Lead Product Designer | Six weeks; >3 user testing rounds | Mobile proof of concept for Administrators on Call, handed off in HTML/CSS |

### Recurring themes (verbatim from the deck's framing)
- "Making complex systems more efficient by designing for the user's workflow"
- Human-first design; shared mission
- Scoping under time pressure (CMUsed, Ladle, SonaRide, CORE)
- Building design systems/component libraries from scratch (CMUsed, Ladle, CORE)

---

## Notes for Editing

- **Verify before publishing:** Slide 12 mockup text is placeholder; slide 40 pairs "3D Route" with SAV mode and "2D Map" with Manual mode based on the text order on the slide, so confirm against `slides/slide-40.jpg`.
- **Image-only content:** Survey chart data (slide 8), hex codes (slide 14), and screenshots/prototype photos throughout are visible only in the slide images. Reference the JPGs when rebuilding visuals.
- **Empty or sparse slides:** Slide 3 (headings only), slide 30 (section divider), and slide 42 (image-led) have little text.
- **Deck artifacts:** Some slides carry leftover page labels (e.g. "06 / 16", "8 / 16", "5", "10") from the original CMUsed deck. Ignore these when converting to web copy.
- **Team context:** SonaRide was a four-person team. Avoid writing it as a solo project. CMUsed's data and engineering partners are referenced in slide 16.
- **Dates:** The deck itself is dated June 3, 2026. Project dates are not included in the slides.
