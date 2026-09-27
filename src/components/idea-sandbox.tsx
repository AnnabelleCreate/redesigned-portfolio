"use client";

import { useState } from "react";

type Category = "Learning" | "Accessibility" | "Travel" | "Community" | "Tools";

type Idea = {
  id: string;
  title: string;
  category: Category;
  emoji: string;
  prompt: string;
  notes: string[];
  color: string;
};

const ideas: Idea[] = [
  {
    id: "crochet",
    title: "Beginner Crochet Guide",
    category: "Learning",
    emoji: "🧶",
    prompt: "Could technology help beginners tell whether a stitch is correct?",
    notes: [
      "Explore static 3D stitch models generated from an uploaded pattern.",
      "A live camera coach would be exciting, but lighting and stitch recognition make it a much larger technical challenge.",
      "Start with interactive pattern visualization before attempting real-time feedback.",
    ],
    color: "#fff4c2",
  },
  {
    id: "ux-game",
    title: "UX/UI Learning Game",
    category: "Learning",
    emoji: "🎮",
    prompt: "A playful way for high-school students to discover product design.",
    notes: [
      "Use small design challenges, cute UI, and progress-based learning.",
      "Teach accessibility, research, hierarchy, and prototyping through play.",
      "Gamification should support learning rather than become the whole experience.",
    ],
    color: "#ead9ff",
  },
  {
    id: "deaf-access",
    title: "Everyday Deaf Accessibility",
    category: "Accessibility",
    emoji: "🤟",
    prompt: "What everyday tool could make communication easier for my deaf grandma?",
    notes: [
      "Begin with observation instead of assuming the solution.",
      "Look for one specific, repeated communication barrier to tackle first.",
      "Design with Deaf users, not only for them.",
    ],
    color: "#d6ebff",
  },
  {
    id: "qr-menu",
    title: "A Better QR Menu",
    category: "Accessibility",
    emoji: "🥟",
    prompt: "Ordering should not require endlessly scrolling through a huge list of food.",
    notes: [
      "Rework information architecture for Hong Kong restaurant ordering.",
      "Make categories, customization, translation, and the cart easier to understand.",
      "Treat this as a service-system problem, not only a prettier menu.",
    ],
    color: "#ffdcc8",
  },
  {
    id: "travel",
    title: "Local Transit Travel Guide",
    category: "Travel",
    emoji: "🚋",
    prompt: "Country-specific guidance for navigating unfamiliar transportation systems.",
    notes: [
      "Hong Kong: MTR, buses, railways, trams, Octopus, and tourist passes.",
      "Japan: local, limited, and high-speed rail plus Suica and regional cards.",
      "San Francisco: Caltrain, BART, and Clipper cards.",
    ],
    color: "#d4efd8",
  },
  {
    id: "saved-travel",
    title: "Saved Video → Itinerary",
    category: "Travel",
    emoji: "🗺️",
    prompt: "Turn a pile of saved travel videos into places and a usable route.",
    notes: [
      "Extract locations from saved Instagram videos.",
      "Send places to Google Maps or group them into a generated itinerary.",
      "Organize by neighborhood, opening hours, and travel time.",
    ],
    color: "#ead9ff",
  },
  {
    id: "artists",
    title: "Artist Convention Companion",
    category: "Community",
    emoji: "🎨",
    prompt: "What recurring problem could be solved for artists at conventions?",
    notes: [
      "Research preparation, inventory, booth setup, commissions, and community discovery.",
      "Use San Jose conventions as an initial context.",
      "Narrow the concept after speaking with working artists.",
    ],
    color: "#fff4c2",
  },
  {
    id: "animals",
    title: "Shelter Personality Profiles",
    category: "Community",
    emoji: "🐾",
    prompt: "Help adopters understand an animal beyond a single photo.",
    notes: [
      "Show routines, temperament, favorite activities, and comfort needs.",
      "Make it easier for shelter staff to capture personality over time.",
      "Prioritize responsible matching rather than swipe-style browsing.",
    ],
    color: "#d4efd8",
  },
  {
    id: "swimming",
    title: "Underwater Coach Audio",
    category: "Accessibility",
    emoji: "🏊",
    prompt: "A safer, clearer version of DIY underwater coaching earphones.",
    notes: [
      "Explore how competitive swimmers could hear live coach instructions.",
      "This leans heavily into hardware, waterproofing, safety, and audio design.",
      "A useful collaboration opportunity with an engineer or industrial designer.",
    ],
    color: "#d6ebff",
  },
  {
    id: "idea-board",
    title: "Idea-Pile Organizer",
    category: "Tools",
    emoji: "💭",
    prompt: "A board that turns scattered notes into themes and possible next steps.",
    notes: [
      "Capture ideas as quickly as opening the Notes app.",
      "Automatically cluster related thoughts without over-organizing them.",
      "Surface forgotten ideas when they become relevant again.",
    ],
    color: "#ffdcc8",
  },
  {
    id: "weather",
    title: "Feels-Like Wardrobe",
    category: "Tools",
    emoji: "🧥",
    prompt: "Dress a character and get outfit suggestions based on how weather feels.",
    notes: [
      "Translate wind, humidity, rain, and temperature into understandable clothing guidance.",
      "Use a character to make checking the weather playful.",
      "Learn from the user's comfort preferences over time.",
    ],
    color: "#ead9ff",
  },
  {
    id: "hobby-portfolio",
    title: "Hobby Portfolio Generator",
    category: "Tools",
    emoji: "📸",
    prompt: "A low-effort home for crochet, puzzles, artwork, and other personal projects.",
    notes: [
      "Drop in photos and short descriptions without designing a new page every time.",
      "Generate a clean archive organized by hobby, date, or project.",
      "Make documenting the process feel as rewarding as sharing the result.",
    ],
    color: "#fff4c2",
  },
];

export function IdeaSandbox() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedIdea = ideas.find((idea) => idea.id === selectedId);

  return (
    <section className="mt-10">
      <h2 className="font-serif text-3xl tracking-[-0.03em] text-ink sm:text-4xl">
        My Sandbox
      </h2>

      <div
        className="relative mt-5 overflow-hidden rounded-[38px] border-[9px] border-[#d1a16e] bg-[#ead09d] p-5 shadow-[inset_0_8px_24px_rgba(116,74,35,0.18),0_12px_30px_rgba(74,48,24,0.08)] min-[351px]:p-7"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 22%, rgba(255,255,255,.38) 0 1px, transparent 1.8px), radial-gradient(circle at 72% 66%, rgba(126,81,39,.13) 0 1px, transparent 2px), repeating-radial-gradient(ellipse at 50% 110%, transparent 0 22px, rgba(151,104,57,.09) 23px 25px, transparent 26px 40px)",
          backgroundSize: "19px 19px, 27px 27px, 100% 100%",
        }}
      >
        <span aria-hidden className="absolute -left-4 bottom-6 rotate-12 text-5xl opacity-60">
          🪣
        </span>
        <span aria-hidden className="absolute right-5 top-4 -rotate-12 text-3xl opacity-55">
          🐚
        </span>

        <div className="relative z-10 grid grid-cols-2 gap-4 min-[601px]:grid-cols-3 min-[1000px]:grid-cols-4">
          {ideas.map((idea, index) => {
            const selected = selectedId === idea.id;
            const shapes = [
              "rounded-[48%_52%_44%_56%/55%_42%_58%_45%]",
              "rounded-[58%_42%_53%_47%/43%_55%_45%_57%]",
              "rounded-[43%_57%_47%_53%/58%_46%_54%_42%]",
            ];
            return (
              <button
                key={idea.id}
                type="button"
                aria-expanded={selected}
                aria-label={`${idea.title}: ${idea.prompt}`}
                onClick={() => setSelectedId(selected ? null : idea.id)}
                className={`group/item relative flex min-h-28 flex-col items-center justify-center border border-white/50 px-3 py-4 text-center shadow-[0_5px_0_rgba(109,72,37,0.13),0_9px_16px_rgba(91,57,28,0.12)] transition hover:z-20 hover:-translate-y-1 hover:scale-[1.03] focus-visible:z-20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-crayon ${shapes[index % shapes.length]} ${
                  selected ? "ring-2 ring-crayon ring-offset-2 ring-offset-[#ead09d]" : ""
                }`}
                style={{
                  background: idea.color,
                  rotate: `${[-3, 2, -1.5, 3.5][index % 4]}deg`,
                }}
              >
                <span className="text-2xl" aria-hidden>
                  {idea.emoji}
                </span>
                <span className="mt-1 text-[10px] uppercase tracking-[0.1em] text-ink/50">
                  {idea.category}
                </span>
                <span className="mt-1 font-serif text-[15px] leading-tight text-ink">
                  {idea.title}
                </span>
                <span className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center rounded-[inherit] bg-ink/95 px-3 text-[11px] leading-4 text-white opacity-0 shadow-lg transition group-hover/item:opacity-100 group-focus-visible/item:opacity-100">
                  {idea.prompt}
                </span>
              </button>
            );
          })}
        </div>

        {selectedIdea ? (
          <div className="relative z-10 mt-8 rounded-[24px] border border-[#8f633d]/20 bg-white/95 p-5 text-left shadow-[0_10px_24px_rgba(93,60,31,0.13)] min-[601px]:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.12em] text-[#8f633d]">
                  Dug up from the sandbox · {selectedIdea.category}
                </p>
                <h3 className="mt-1 font-serif text-2xl tracking-[-0.02em]">
                  {selectedIdea.emoji} {selectedIdea.title}
                </h3>
                <p className="mt-2 text-[14px] leading-5 text-muted">{selectedIdea.prompt}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedId(null)}
                aria-label="Close full idea"
                className="rounded-full border border-ink/10 px-3 py-1 text-[12px] text-muted hover:text-ink"
              >
                Close
              </button>
            </div>
            <ul className="mt-5 grid gap-3 text-[13px] leading-5 text-ink/75 min-[700px]:grid-cols-3">
              {selectedIdea.notes.map((note) => (
                <li key={note} className="rounded-xl bg-[#fff8ea] p-3">
                  <span aria-hidden className="mr-1.5 text-[#b07842]">
                    ✦
                  </span>
                  {note}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
