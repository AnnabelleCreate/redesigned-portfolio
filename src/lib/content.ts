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

export const hobbies = ["Crochet", "Baking", "K-pop", "Puzzles"];

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
      "Zero to One development of CMUsed, a CMU community marketplace for students to sell and buy",
    recruiter:
      "Product designer on 0→1 campus marketplace CMUsed: 700+ users in week one, plus a design system and cross-functional launch strategy.",
    image: framer("bLXS7uhMMkOTdjE5zPriYSrjXUA.png"),
    tags: ["Zero to one", "Product Designer", "Team"],
    kind: "product",
    href: "/work/cmused",
    cta: "View Case Study",
  },
  {
    slug: "ladle",
    title: "Ladle",
    description: "Founding UX/UI internship — product, systems, and handoff for an early-stage team.",
    recruiter: "Founding UX/UI intern at Ladle. Password-protected case study.",
    tags: ["Internship", "Product Designer"],
    kind: "product",
    href: "/work/ladle",
    cta: "View Case Study",
    locked: true,
  },
  {
    slug: "homehudl",
    title: "HomeHudl",
    description: "Founding UX/UI internship — product, systems, and handoff for an early-stage team.",
    recruiter: "Founding UX/UI intern at HomeHudl. Password-protected case study.",
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
      "Mobile redesign of CORE's complex and data heavy internal staff dashboard for Administrators on Call (AOCs)'s workflow",
    recruiter:
      "Lead designer for a 6-week mobile redesign of a desktop-only organ donation ops tool. 94% unaided task success; handed off to production.",
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
      "Transformed a static one-pager to multi-page client facing website developing trust and reducing application friction",
    recruiter:
      "Solo intern who rebuilt Cavalry Insurance from a broken one-pager into a multi-page B2B site plus a 22-page handoff handbook.",
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
      "Hearing-impaired moped concept spanning hardware, navigation HUD, and companion interface.",
    recruiter:
      "Designed an accessible moped concept connecting physical controls, a navigation HUD, and a companion mobile experience.",
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
      "Developed marketing material for Girls on the Run UPMC that will be used during community events and outreach",
    recruiter:
      "Designed outreach and recruitment materials for Girls on the Run UPMC, used at community events.",
    image: framer("fN171GJxLejXj3WBF94ehUI7NQ.png"),
    tags: ["Partner", "Product Designer", "Team"],
    kind: "product",
    href: "https://www.dfaxcmu.org/girls-on-the-run",
    cta: "View Case Study",
    external: true,
  },
];

export const visualCards = [
  {
    id: "visual-compact",
    size: "compact" as const,
    title: "Title",
    description: "Description",
  },
  {
    id: "visual-tall",
    size: "tall" as const,
    title: "Title",
    description: "Description",
  },
  {
    id: "visual-wide",
    size: "wide" as const,
    title: "Title",
    description: "Description",
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
    title: "CMUsed: a zero-to-one campus marketplace",
    summary:
      "CMUsed is a Carnegie Mellon community marketplace for students to sell and buy from each other. I helped take it from a fragmented campus selling process to a trusted product — with a design system, cross-functional launch strategy, and room to keep refining after ship.",
    hero: framer("bLXS7uhMMkOTdjE5zPriYSrjXUA.png"),
    meta: [
      { label: "Role", value: "Product designer" },
      { label: "Type", value: "Zero to one" },
      {
        label: "Skill",
        value:
          "Design systems, user testing/research, wireframing, rapid prototyping, cross-functional collaboration",
      },
      { label: "Duration", value: "Sept 2025 – April 2026" },
      { label: "Team", value: "Yutong, Brian, Andrea, Amy" },
    ],
    sections: [
      {
        id: "problem",
        label: "Problem",
        kicker: "The problem",
        title: "Selling on campus lived in group chats, not a product.",
        body: "Students already buy and sell furniture, textbooks, and dorm goods — but the flow lived across Facebook groups, Discord, and word of mouth. Trust, timing, and follow-through were inconsistent, especially around move-in and move-out when furniture actually needs to change hands.",
        imageSlots: 2,
      },
      {
        id: "goal",
        label: "Goal",
        kicker: "The goal",
        title:
          "Stand up a marketplace students would actually use, without losing the campus-specific need.",
        body: "Zero-to-one meant choosing a focused problem — trusted peer-to-peer selling for the CMU community — and resisting feature sprawl while still leaving room for a brand and system that other BTG products could inherit.",
        imageSlots: 1,
      },
      {
        id: "solution",
        label: "Solution",
        kicker: "Solution overview",
        title: "A campus marketplace with a system underneath it.",
        body: "CMUsed is the student-facing marketplace. Underneath it, we invested in a design system and brand so screens, states, and future BTG products could share language — instead of designing one-off pages that would fall apart at launch.",
        imageSlots: 2,
      },
      {
        id: "process",
        label: "Process",
        kicker: "Primary learnings",
        title: "The work was systems, stakeholders, and tradeoffs — not just screens.",
        points: [
          {
            title: "Building a design system and brand",
            body: "We needed a visual and component language that could scale past the first flows: listing, browsing, and trust. The system had to feel CMU without becoming a poster, and stay implementable for a student engineering team.",
          },
          {
            title: "Working cross-functionally",
            body: "Design sat with business, data, and developers. Research and wireframes had to survive actual constraints: what we could ship, what we could measure, and what the campus calendar would allow.",
          },
          {
            title: "Balancing user wants with product focus",
            body: "Students asked for a lot. The job was to hear the want, name the underlying need, and keep the product pointed at selling and buying — instead of becoming a general campus app.",
          },
          {
            title: "Managing external competition",
            body: "We worked with the business team on when to launch versus how polished to be. The call was to release after competition, but ride the furniture-selling timeline so quality and moment both mattered.",
          },
        ],
        imageSlots: 2,
      },
      {
        id: "impact",
        label: "Impact",
        kicker: "The impact",
        title: "The campus selling process actually moved.",
        stats: [
          {
            value: "700+",
            label: "users within the first week of launch",
          },
        ],
        body: "Beyond the first-week spike, CMUsed changed how the CMU community sells and buys — a shared place instead of a scavenger hunt across chats and groups.",
        imageSlots: 1,
      },
      {
        id: "reflections",
        label: "Reflections",
        kicker: "Next steps",
        title: "What I would carry into the next BTG products.",
        points: [
          {
            title: "A full design system for CMU BTG",
            body: "We are producing more websites and products. Curating a studio-wide system would keep quality consistent and make the next zero-to-one faster.",
          },
          {
            title: "More user testing on the live product",
            body: "Onboarding and general UX still need additional testing now that real students are in the flows — not only the prototype.",
          },
          {
            title: "Tighter design–dev handoff cycles",
            body: "Launch taught us where specs, QA, and iteration loops broke down. Improving that cadence is part of the system work, not a separate chore.",
          },
        ],
        imageSlots: 1,
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
  internTemplate({
    slug: "ladle",
    title: "Ladle",
    summary:
      "Founding UX/UI internship at Ladle. This case study is a working template — structure, image slots, and intern framing are in place so the story can be filled in without rebuilding the page.",
  }),
  internTemplate({
    slug: "homehudl",
    title: "HomeHudl",
    summary:
      "Founding UX/UI internship at HomeHudl. This case study is a working template — structure, image slots, and intern framing are in place so the story can be filled in without rebuilding the page.",
  }),
];

function internTemplate({
  slug,
  title,
  summary,
}: {
  slug: string;
  title: string;
  summary: string;
}): CaseStudy {
  return {
    slug,
    title,
    summary,
    locked: true,
    meta: [
      { label: "Role", value: "Product designer" },
      { label: "Type", value: "Internship" },
      {
        label: "Skill",
        value: "Product design, prototyping, cross-functional collaboration",
      },
      { label: "Duration", value: "Founding intern" },
      { label: "Team", value: "Early-stage team" },
    ],
    sections: [
      {
        id: "problem",
        label: "Problem",
        kicker: "The problem",
        title: "What we were asked to make clearer.",
        body: "Add the intern brief, users, and the friction that made a founding designer necessary.",
        imageSlots: 2,
      },
      {
        id: "goal",
        label: "Goal",
        kicker: "The goal",
        title: "The outcome the team needed from design.",
        imageSlots: 1,
      },
      {
        id: "solution",
        label: "Solution",
        kicker: "Solution overview",
        title: "What shipped, and what the system needed to support.",
        imageSlots: 2,
      },
      {
        id: "process",
        label: "Process",
        kicker: "Process",
        title: "Research, iteration, and working with the team.",
        imageSlots: 2,
      },
      {
        id: "impact",
        label: "Impact",
        kicker: "The impact",
        title: "What changed for the product and the team.",
        imageSlots: 1,
      },
      {
        id: "reflections",
        label: "Reflections",
        kicker: "Reflections",
        title: "What I would do next.",
        imageSlots: 1,
      },
    ],
  };
}

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
