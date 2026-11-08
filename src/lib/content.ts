export const site = {
  name: "Annabelle Chow",
  email: "ahollychow99@gmail.com",
  linkedin: "https://www.linkedin.com/in/annabelle-chow-895b3932a/",
  resume:
    "https://docs.google.com/document/d/1WWZy6D8QzlCSL0iC4AII9VZVFTmkCmMo9ljl0zaCWos/edit",
  headline: {
    lead: "I'm a designer that's",
    accents: [
      "business oriented",
      "systems obsessed",
      "playful",
      "gritty",
      "creative",
      "user-centered",
      "a crafting nerd",
    ],
    recruiter:
      "Product designer who turns complex operations into tools people can actually use.",
  },
  bio: "I combine business strategy with human-centered solutions to make complex ecosystems more efficient.",
  nowPlaying: {
    title: "Unknown Planet",
    artist: "IU",
    spotifyEmbed:
      "https://open.spotify.com/embed/track/02KRPJcx4TJFLCXt9qwEUE?utm_source=generator&theme=0",
  },
};

export const roles = [
  {
    label: "Carnegie Mellon University",
    detail: "Bus Admin & HCI",
    items: [
      "@CMU BTG Product Studio",
      "@Design for America",
      "@ScottyLabs",
    ],
  },
  {
    label: "Founding UX/UI Intern",
    items: ["@Ladle", "@HomeHudl"],
  },
];

export const traits = [
  "a passionate designer",
  "crafting nerd",
  "professional grit",
  "strategist",
  "presentation wiz",
  "complexity architect",
];

export const hobbies = ["Crochet", "Baking", "K-pop", "K-dramas", "Puzzles", "Swimming"];

const framer = (id: string, width = 1600) =>
  `https://framerusercontent.com/images/${id}?width=${width}`;

export type WorkKind = "product" | "visual";

export type Project = {
  slug: string;
  title: string;
  description: string;
  recruiter: string;
  image?: string;
  tags: string[];
  kind: WorkKind;
  href: string;
  cta: string;
  external?: boolean;
  locked?: boolean;
};

export const projects: Project[] = [
  {
    slug: "cmused",
    title: "Navigating E-Commerce System",
    description:
      "Connected CMU buyers and sellers in a marketplace used by 679 people in its first week.",
    recruiter:
      "Built a focused CMU marketplace with 679 first-week users, 232 listings, and 339 messages.",
    image: framer("bLXS7uhMMkOTdjE5zPriYSrjXUA.png"),
    tags: ["Zero to one", "Product Designer", "Team"],
    kind: "product",
    href: "/work/cmused",
    cta: "View Case Study",
  },
  {
    slug: "ladle",
    title: "Rebranding Menopause Wellness",
    description:
      "Repaired Ladle's design system and designed its calendar-based meal planner and nutrition journal.",
    recruiter:
      "Connected styles and components for handoff while designing a meal-planning journal for women aged 40-50.",
    image: "/ladle-thumbnail.jpg",
    tags: ["Internship", "Product Designer"],
    kind: "product",
    href: "/work/ladle",
    cta: "View Case Study",
    locked: true,
  },
  {
    slug: "homehudl",
    title: "Accelerating Startup Prototyping",
    description:
      "Built an AI-assisted prototyping process for startup-speed iteration.",
    recruiter:
      "Used Claude and Figma Make to establish a faster, clearer product process.",
    image: "/homehudl-thumbnail.png",
    tags: ["Internship", "Product Designer"],
    kind: "product",
    href: "/work/homehudl",
    cta: "View Case Study",
    locked: true,
  },
  {
    slug: "core",
    title: "Desktop Only to Mobile for Administrators on Call",
    description:
      "Turned a desktop-only operations tool into a mobile workflow for on-call administrators.",
    recruiter:
      "Led a mobile redesign that reached 94% unaided task success and production handoff.",
    image: framer("RuOXdl12Qq6f14eD4iYSqLxnFs.png"),
    tags: ["Client", "Lead Product Designer", "Team"],
    kind: "product",
    href: "/work/core",
    cta: "View Case Study",
  },
  {
    slug: "cavalry",
    title: "Architecting B2B Ecosystem",
    description:
      "Rebuilt a one-page insurance site into a scalable B2B ecosystem.",
    recruiter:
      "Rebuilt Cavalry’s B2B site and delivered a 22-page handoff handbook.",
    image: framer("Dj8H0FgrLdQKdPi6NOKEkI3BMvU.png"),
    tags: ["Internship", "Solo Product Designer", "Solo"],
    kind: "product",
    href: "/work/cavalry",
    cta: "View Case Study",
  },
  {
    slug: "sonaride",
    title: "SonaRide",
    description:
      "Designed an accessible moped, navigation HUD, and companion app.",
    recruiter:
      "Connected physical controls, navigation, and mobile UX in one accessible concept.",
    image: framer("6kuU00WQfGEmxaXAXdsEa1qVEjk.png"),
    tags: ["Project", "Product Designer", "Team"],
    kind: "product",
    href: "https://www.notion.so/achow-design-portfolio/SonaRide-Hearing-Impaired-Moped-26775466486481429a80fa2880ee9920",
    cta: "View Case Study",
    external: true,
  },
  {
    slug: "gotr",
    title: "Coach Recruitment",
    description:
      "Created community outreach materials to support coach recruitment.",
    recruiter:
      "Designed coach-recruitment materials for Girls on the Run UPMC events.",
    image: framer("fN171GJxLejXj3WBF94ehUI7NQ.png"),
    tags: ["Partner", "Product Designer", "Team"],
    kind: "product",
    href: "https://www.dfaxcmu.org/girls-on-the-run",
    cta: "View Case Study",
    external: true,
  },
];

export type VisualCard = {
  id: string;
  title: string;
  description: string;
  image?: string;
  href?: string;
  tags: string[];
  comingSoon?: boolean;
};

export const visualCards: VisualCard[] = [
  {
    id: "robotics-data-summit",
    title: "Robotics & Data Summit",
    description: "Event identity, social campaign, and editorial booklet.",
    image: "/robotics-data-summit/summit-flyer.jpg",
    href: "/visual/robotics-data-summit",
    tags: ["Event identity", "Marketing design"],
  },
  {
    id: "nova-ai-hackathon",
    title: "NOVA: AI Hackathon",
    description: "Hackathon identity and campaign design.",
    tags: ["Brand identity", "Event design"],
    comingSoon: true,
  },
  {
    id: "uxa",
    title: "UXA",
    description: "Community branding and visual design.",
    image: "/visual-work/uxa.jpg",
    tags: ["Brand identity", "Community"],
    comingSoon: true,
  },
  {
    id: "cmu-btg",
    title: "CMU BTG",
    description: "Product studio marketing and event design.",
    image: "/visual-work/cmu-btg.png",
    tags: ["Marketing", "Event design"],
    comingSoon: true,
  },
];

export const playground = [
  {
    title: "Personal experiments",
    blurb: "HTML / CSS / JS studies hosted on my CMU Andrew space.",
    image: framer("qGkGpfu7PYS4PSG8RtD3YkDZRC0.png"),
    href: "https://www.andrew.cmu.edu/user/achow3/",
  },
  {
    title: "Mobile interface studies",
    blurb: "Visual explorations for compact, glanceable product UI.",
    image: framer("XLzGbEZumSJhtJzRQpj57E0SI.png"),
    href: "https://canva.link/emvqog43e5m9kvp",
  },
  {
    title: "Visual system 01",
    blurb: "Layout, type, and color studies outside client constraints.",
    image: framer("JlrMMdtJbOyqsukt6vaqkUPJplo.png"),
    href: "https://canva.link/9ozjchg3a7yh743",
  },
  {
    title: "Visual system 02",
    blurb: "More product-adjacent visual craft and composition.",
    image: framer("7K9xDGihC4Fn6umS8BRmwxpfk.png"),
    href: "https://canva.link/g9dwioixbn6qi2k",
  },
  {
    title: "Stitch a Friend",
    blurb: "Crochet community site — beginners, patterns, and making together.",
    image: framer("HdGxFwlFftdS1iDMVmnx69ZzkcI.png"),
    href: "https://stitchafriend.wixsite.com/stitch-a-friend",
  },
  {
    title: "Character & craft",
    blurb: "Illustration and character work that feeds the rest of my practice.",
    image: framer("QeLXlnrsfAtTrqFMbdKqM0aFJc.png"),
    href: "https://canva.link/umfxgogu11na3l5",
  },
  {
    title: "Motion snippet",
    blurb: "A short film / motion study from the playground pile.",
    image: framer("jari8bWAB0lRU0PoBfslAJ5eE.png"),
    href: "https://youtu.be/-cywilzuQDY",
  },
];

export const aboutImages = {
  portrait: framer("mIaa0Sa0Hkyh7rSvDLuJbHUlhQA.jpg", 1200),
  hobbies: [
    framer("UDLIuWKxLTTfp2pvQp2uRrepDH0.jpeg", 900),
    framer("b3Vu9VGaTkh596Oyg9OoL1khBqw.jpeg", 900),
    framer("sIAm5lWeUBx8RoD6RSNxQ2cVM.jpeg", 900),
    framer("9AbVxyK1duJzwrlMVORQhJcAzH8.jpeg", 900),
  ],
};

export type CaseSection = {
  id: string;
  label: string;
  kicker?: string;
  title?: string;
  body?: string;
  bullets?: string[];
  points?: { title: string; body: string }[];
  stats?: { value: string; label: string }[];
  images?: string[];
  imageSlots?: number;
};

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  meta: { label: string; value: string }[];
  hero?: string;
  locked?: boolean;
  sections: CaseSection[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "cmused",
    title: "CMUsed: a marketplace for the CMU community",
    summary:
      "CMU students relied on word of mouth and scattered channels to buy and sell secondhand goods. As a product designer with CMU's Business Technology Group, I helped shape a focused marketplace around scannable listings, campus trust, and local coordination, working with business, data, and engineering from research through launch.",
    hero: framer("bLXS7uhMMkOTdjE5zPriYSrjXUA.png"),
    meta: [
      { label: "Role", value: "Product Designer" },
      { label: "Organization", value: "CMU Business Technology Group" },
      {
        label: "Scope",
        value: "Competitor research, product design, branding, component library, launch",
      },
      { label: "Partners", value: "Design, business, data, engineering" },
    ],
    sections: [
      {
        id: "problem",
        label: "Problem",
        kicker: "Two sides of the same gap",
        title: "Two groups. One gap. Zero connection.",
        body: "Upperclassmen had furniture to move and nowhere reliable to sell it. Incoming students needed affordable furniture but had no trusted way to find it. Secondhand exchange happened through word of mouth and scattered channels, with no CMU-specific bridge between them.",
        imageSlots: 2,
      },
      {
        id: "research",
        label: "Research",
        kicker: "What students valued",
        title: "Convenience, fair price, and pickup shaped the opportunity.",
        body: "Survey responses showed that students cared most about convenient pickup and fair prices. Word of mouth was the most frequently used secondhand channel, confirming that buying and selling lacked a central place. Etsy offered familiar browsing patterns like photo-first listings, categories, and seller profiles, but not the campus trust and local coordination CMU students needed.",
        imageSlots: 2,
      },
      {
        id: "focus",
        label: "Product Focus",
        kicker: "A focused pivot",
        title: "Competition and feedback narrowed the product to its core.",
        body: "A Google employee's feedback challenged the team to prioritize essential services. CollegeCart's emergence added pressure to move faster. We focused CMUsed on the needs general marketplaces did not serve in the campus context.",
        points: [
          {
            title: "Browse and compare",
            body: "Surface each item's image, price, condition, and category so students can scan options quickly.",
          },
          {
            title: "Build trust",
            body: "Use reviews, required photos or videos, and clear condition details to reduce uncertainty between student buyers and sellers.",
          },
          {
            title: "Coordinate locally",
            body: "Use neighborhood filters and in-app messaging to help students plan handoffs and keep conversations moving.",
          },
        ],
        imageSlots: 1,
      },
      {
        id: "listing",
        label: "Listing Page",
        kicker: "Scan first, then build confidence",
        title: "Put the decision-making details up front.",
        body: "The listing page brings price, a multi-angle image gallery, and a color-coded condition label into the first scan. A direct message action stays above the fold; a concise description and filterable reviews add seller context for people who want more confidence before reaching out.",
        imageSlots: 2,
      },
      {
        id: "onboarding",
        label: "Onboarding",
        kicker: "Keep campus trust",
        title: "Make sign-in simple and tailor the first browse.",
        body: "CMU sign-on grounds the marketplace in the campus community. After signing in, students choose whether they want to sell, buy, or do both, then select three interests to shape the experience.",
        bullets: [
          "Interest categories include clothing, furniture, electronics, bikes and scooters, storage and organizers, and appliances.",
          "A list-items prompt introduces the selling path during onboarding.",
        ],
        imageSlots: 1,
      },
      {
        id: "system",
        label: "System & Team",
        kicker: "A shared foundation",
        title: "One component library made the experience coherent and buildable.",
        body: "A shared palette, type scale, and reusable components connected the home, browse, and listing screens. I worked with engineering on Figma structure and component practices, with data on meaningful interaction signals, and with business to scope the core experience and launch materials.",
        imageSlots: 2,
      },
      {
        id: "impact",
        label: "Impact",
        kicker: "The results",
        title: "CMUsed connected the CMU community.",
        stats: [
          {
            value: "679",
            label: "unique users in the first week",
          },
          {
            value: "232",
            label: "listings created in the first week",
          },
          {
            value: "339",
            label: "messages sent in the first week",
          },
          {
            value: "1,787",
            label: "total users to date",
          },
          {
            value: "874",
            label: "total listings to date",
          },
          {
            value: "$23.8k",
            label: "sold inventory to date",
          },
        ],
        imageSlots: 1,
      },
      {
        id: "next-steps",
        label: "Next Steps",
        kicker: "Next steps",
        title: "The next phase is reliability, shared standards, and mobile.",
        points: [
          {
            title: "Audit the live site",
            body: "Close development gaps and align implementation with the intended experience so the marketplace feels polished and reliable.",
          },
          {
            title: "Build shared product standards",
            body: "Work with the design team on an organization-wide system that can keep future products consistent and make new work faster.",
          },
          {
            title: "Explore a mobile app",
            body: "Extend the core campus marketplace experience to a dedicated mobile product.",
          },
        ],
      },
    ],
  },
  {
    slug: "core",
    title: "CORE: transferring a desktop-only tool to mobile",
    summary:
      "CORE's internal table was data-heavy and restricted to desktop, making it difficult for staff to document, update, and manage cases on the go.",
    hero: framer("UZtrSEgnuu4XAR6fS2vC5skC5o.png", 1800),
    meta: [
      { label: "Role", value: "Lead Product Designer" },
      { label: "Type", value: "Client" },
      { label: "Skill", value: "Mobile design, HTML, JavaScript" },
      { label: "Duration", value: "6 weeks" },
      { label: "Team", value: "Tian, John" },
    ],
    sections: [
      {
        id: "challenge",
        label: "Challenge",
        kicker: "The challenge",
        title:
          "The original platform was unresponsive, so donor details could only be viewed and updated on desktop.",
        body: "Client ask: take the Trackerboard and AOC Form and translate them into a mobile layout that is easy to digest and interact with on shift.",
        bullets: [
          "Not mobile adapted",
          "Doubled staff workload",
          "Left staff unable to update items on the go",
        ],
        images: [framer("Eh9GKUcCzFVxqqFS3ar9ppJtNc.png", 1400)],
      },
      {
        id: "solution",
        label: "Solution",
        kicker: "The solution",
        title:
          "A mobile platform designed around Administrator on Call (AOC) workflow.",
        bullets: [
          "Home dashboard: shift handovers, task list, one-tap access to high-priority organ cases",
          "Trackerboard: donor cards instead of a desktop table, with time-sensitive data first",
          "AOC Form: familiar field order, collapsible sections, progress bar for stage awareness",
        ],
        images: [
          framer("Hs9k626iFdLIRTs5StOUg0ABtY.png", 800),
          framer("weFiegLlSAEDbP4gCPwy8o0FtjA.png", 800),
        ],
      },
      {
        id: "impact",
        label: "Impact",
        kicker: "The impact",
        title:
          "Proof of concept for dev handoff, with a validated design system transfer.",
        stats: [
          {
            value: "94%",
            label: "success rate completing critical workflows without assistance",
          },
        ],
        bullets: [
          "Client confidence to move the project into full-scale production",
          "Documentation that helps the Spring 2026 development team start quickly",
        ],
      },
      {
        id: "scope",
        label: "Scope",
        kicker: "Finding the scope",
        title:
          "A short timeline meant narrowing to the most on-the-go, time-sensitive user.",
        body: "Administrators on Call handling active organ cases were the people most likely to be away from a desk. Pending cases and desktop-bound roles were deprioritized.",
      },
      {
        id: "research",
        label: "Research",
        kicker: "A key interview",
        title:
          "Sitting with Nikki, a senior AOC, clarified what actually happens during a shift.",
        bullets: [
          "Handovers live in the notes section of the AOC Form",
          "Heavy workload leads to missed tasks",
          "Paper notes get retyped into the digital tool",
          "Serology time reminders are valuable",
          "Form input order is already standardized among AOCs",
        ],
      },
      {
        id: "process",
        label: "Process",
        kicker: "Design choices",
        title:
          "Balance visibility with familiarity so the jump to mobile does not add cognitive load.",
        bullets: [
          "Keep AOC Form field order, grouped into jumpable sections",
          "Replace the desktop table with scannable donor cards",
          "Add a task list for handover and high-load shifts",
        ],
        images: [framer("h41azBdfNG5d5RJmtz68BaSc40.png", 800)],
      },
      {
        id: "testing",
        label: "User Test",
        kicker: "User testing",
        title: "Make the interface glanceable for time-sensitive contexts.",
        stats: [
          {
            value: "80%",
            label:
              "of participants struggled to return after opening the AOC Form — pop-up reduced 5 clicks to 1",
          },
          {
            value: "90%",
            label:
              "felt the AOC Form list was redundant; it became an export/print page for morning huddles",
          },
        ],
        images: [framer("LCwfIBLBTowCucyFMzRrSZyKhNY.png", 900)],
      },
      {
        id: "advocacy",
        label: "Advocacy",
        kicker: "Design advocacy",
        title:
          "The client was skeptical of an AOC Form progress bar. Testing kept it in.",
        body: "Every AOC fills the form differently. The bar made stage visible without extra hunting. Nikki recommended it; user tests proved it; the client reversed their initial doubt in the final presentation.",
      },
      {
        id: "final",
        label: "Final",
        kicker: "Final iterations",
        title: "HTML and JavaScript proof of concept plus Figma for the next team.",
        images: [framer("UZtrSEgnuu4XAR6fS2vC5skC5o.png", 1600)],
      },
    ],
  },
  {
    slug: "cavalry",
    title: "Cavalry Insurance: architecting a B2B ecosystem",
    summary:
      "Most local brokerages rely on relationships, but their digital presence often creates friction rather than trust. I moved Cavalry from a non-functioning single-page site to a strategically tiered multi-page platform.",
    hero: framer("Dj8H0FgrLdQKdPi6NOKEkI3BMvU.png", 1800),
    meta: [
      { label: "Role", value: "Lead Product Designer" },
      { label: "Type", value: "Internship" },
      {
        label: "Skill",
        value: "Figma, Wix, responsive design, information architecture",
      },
      { label: "Duration", value: "5 weeks" },
      { label: "Team", value: "Solo" },
    ],
    sections: [
      {
        id: "challenge",
        label: "Challenge",
        kicker: "The challenge",
        title: "A digital dead-end: no services, no team, no locations, no trust.",
        body: "The CEO wanted application forms compiled onto the site and brought up to industry standards. Retail brokers hit broken links, invisible offerings, and no clear CTA.",
      },
      {
        id: "solution",
        label: "Solution",
        kicker: "The solution",
        title:
          "A functional, multipage B2B ecosystem built for retail broker and underwriter workflows.",
        bullets: [
          "Centralized application hub instead of multi-email exchanges",
          "Most Popular Packages as a starting point for customers",
          "Meet the Team and a partners carousel for authority",
        ],
      },
      {
        id: "impact",
        label: "Impact",
        kicker: "The impact",
        title: "Shipped on Wix with a 22-page design handbook for staff who are not engineers.",
        bullets: [
          "One-stop application link",
          "Service offerings finally visible",
          "Editable templates so packages and forms can change without a designer",
        ],
      },
      {
        id: "scope",
        label: "Scope",
        kicker: "Finding the scope",
        title:
          "Unlike studio projects, the brief was fragmented. I defined the problem through three lenses.",
        bullets: [
          "Market alignment: competitor and B2C insurance sites",
          "Heuristic evaluation: friction, dead ends, missing CTAs",
          "Stakeholder vision: interviews with employees and underwriters",
        ],
      },
      {
        id: "sitemap",
        label: "Site Map",
        kicker: "Site map",
        title: "Cover the necessary pages without duplicating content.",
        body: "A dedicated team page folded into Meet Us. Home reviews were cut because testimonials already did that job. Navigation stayed simple on purpose.",
      },
      {
        id: "system",
        label: "Design System",
        kicker: "Design system",
        title: "Tonal blues for institutional trust, with a high-contrast accent reserved for CTAs.",
        body: "Critical path actions — like opening an application — stay visually loud against dense product information. Wix templates were designed so staff can update packages in real time.",
      },
    ],
  },
  {
    slug: "ladle",
    title: "Ladle: a meal-planning journal for menopausal wellness",
    summary:
      "In a three-week startup sprint, I reconnected Ladle's styles and typography to reusable components, then designed a weekly meal-planning and nutrition journal experience for women aged 40-50. With an unbuilt feature and no established design system, I used desk research and familiar patterns to move quickly, then refined the prototype for stakeholder and developer handoff.",
    locked: true,
    meta: [
      { label: "Role", value: "UX/UI Intern" },
      { label: "Context", value: "Startup product design" },
      { label: "Timeline", value: "Three weeks" },
      { label: "Audience", value: "Women aged 40-50" },
      { label: "Scope", value: "Design system, meal planner, nutrition journal" },
    ],
    sections: [
      {
        id: "brief",
        label: "Brief",
        kicker: "A founder's ask",
        title: "A three-week brief paired a brand refocus with a feature from zero.",
        body: "The founder wanted Ladle to focus on menopausal women and introduce a nutritional journal for women aged 40-50 to plan meals. The startup timeline meant refreshing the experience while creating a feature that had not yet been designed.",
        imageSlots: 2,
      },
      {
        id: "system",
        label: "Design System",
        kicker: "Repairing the foundation",
        title: "Connect the styles to the components before handoff.",
        body: "Ladle had organized color styles, but components did not inherit them. Font rules were missing and there was no scalable system. I focused first on connecting basic styles and typography to the components so the UI could be implemented consistently and future design handoffs had a usable foundation.",
        imageSlots: 2,
      },
      {
        id: "approach",
        label: "Approach",
        kicker: "Speed versus validation",
        title: "Move quickly while being clear about what was not user-validated.",
        body: "We prioritized speed over primary user research. I used secondary research and familiar interface patterns to shape the new flows, with a working persona of a busy woman in her 40s or 50s balancing work and family responsibilities during pre-menopause.",
        imageSlots: 1,
      },
      {
        id: "meal-planner",
        label: "Meal Planner",
        kicker: "A week at a glance",
        title: "Make the meal plan easy to scan and edit in place.",
        body: "The calendar keeps all seven days visible, organizes meals by breakfast, lunch, and dinner, and lets users edit a specific meal without losing the week view. A shopping-list action supports the next step after planning. Terracotta highlights emphasis and primary actions, warm off-white grounds the surfaces, and Ladle green supports health goals and recipe cues.",
        imageSlots: 2,
      },
      {
        id: "journal",
        label: "Journal",
        kicker: "Keep the user in context",
        title: "Carry the calendar into a more detailed daily plan.",
        body: "A day-plan drawer lets users inspect meals while keeping the weekly calendar in view, making it easier to move between screens and reorient. Sage recipe cues identify menopause-support options at a glance. The journal direction reused the meal planner's calendar language and the same component system for a more cohesive experience.",
        imageSlots: 2,
      },
      {
        id: "prototyping",
        label: "Prototyping",
        kicker: "Figma Make exploration",
        title: "Use AI to express interactions quickly, then refine by hand.",
        body: "Figma Make helped communicate complex flows for stakeholder presentations, including ideas like audio recording and transcripts. It did not understand Ladle's design system and struggled to create cohesive flows, so the prototype needed additional tuning before it could support a clear handoff.",
        imageSlots: 1,
      },
      {
        id: "next-steps",
        label: "Next Steps",
        kicker: "What remains to learn",
        title: "Validate the journal and decide how it should grow.",
        points: [
          {
            title: "Refine the journal",
            body: "Continue iterating as more is learned about the experience in use.",
          },
          {
            title: "Explore a doctor-facing view",
            body: "Investigate how journal results could be organized for a clinician.",
          },
          {
            title: "Collect user feedback",
            body: "Test the assumptions in the flows and identify where the experience needs to improve.",
          },
          {
            title: "Define an AI-to-development workflow",
            body: "Find a practical balance between AI prototyping and close collaboration with developers.",
          },
        ],
        imageSlots: 2,
      },
    ],
  },
  {
    slug: "homehudl",
    title: "Building a faster prototyping process at HomeHudl",
    summary:
      "At HomeHudl, I focused on creating a clear, repeatable design process while building fluency with AI prototyping tools. Using Claude and Figma Make helped me move from ideas to interactive prototypes faster and keep pace with an early-stage startup.",
    locked: true,
    meta: [
      { label: "Role", value: "Founding UX/UI intern" },
      { label: "Type", value: "Internship" },
      {
        label: "Skill",
        value:
          "Process design, rapid prototyping, Claude, Figma Make, cross-functional collaboration",
      },
      { label: "Focus", value: "Startup-speed iteration" },
      { label: "Team", value: "Early-stage startup team" },
    ],
    sections: [
      {
        id: "process",
        label: "Process",
        kicker: "Creating clarity",
        title: "Developing a design process the team could move through clearly.",
        body: "I focused on making the path from an early idea to a testable direction more explicit. A clearer process made it easier to understand what needed to be explored, what was ready to prototype, and what required alignment before moving forward.",
        imageSlots: 2,
      },
      {
        id: "ai-prototyping",
        label: "AI Prototyping",
        kicker: "Building fluency",
        title: "Using Claude and Figma Make as active prototyping tools.",
        body: "I built fluency with Claude and Figma Make by incorporating them into the design process rather than treating them as one-off experiments. They helped me translate concepts into interactive prototypes and evaluate ideas earlier.",
        imageSlots: 2,
      },
      {
        id: "iteration",
        label: "Rapid Iteration",
        kicker: "Meeting startup speed",
        title: "Increasing prototyping speed without losing design intent.",
        body: "The goal was not speed for its own sake. I used faster prototyping cycles to make decisions more concrete, communicate interactions clearly, and keep design moving at the pace the startup required.",
        imageSlots: 2,
      },
      {
        id: "learning",
        label: "Learning",
        kicker: "What I developed",
        title: "A more adaptable way of moving between design and implementation.",
        body: "The experience strengthened my ability to define a process, choose the right level of prototype, and use AI-assisted tools to close the distance between an interface concept and something the team could respond to.",
        imageSlots: 1,
      },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
