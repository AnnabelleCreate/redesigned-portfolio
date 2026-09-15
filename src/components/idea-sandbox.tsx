"use client";

import { useMemo, useState } from "react";

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

const categories: Array<"All" | Category> = [
  "All",
  "Learning",
  "Accessibility",
  "Travel",
  "Community",
  "Tools",
];

export function IdeaSandbox() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [order, setOrder] = useState(() => ideas.map((idea) => idea.id));

  const visibleIdeas = useMemo(() => {
    const ordered = order
      .map((id) => ideas.find((idea) => idea.id === id))
      .filter((idea): idea is Idea => Boolean(idea));
    return category === "All"
      ? ordered
      : ordered.filter((idea) => idea.category === category);
  }, [category, order]);

  function shuffleIdeas() {
    setOrder((current) => {
      const shuffled = [...current];
      for (let index = shuffled.length - 1; index > 0; index -= 1) {
        const next = Math.floor(Math.random() * (index + 1));
        [shuffled[index], shuffled[next]] = [shuffled[next], shuffled[index]];
      }
      return shuffled;
    });
  }

  return (
    <section className="mt-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.14em] text-crayon">
            Unbuilt, for now
          </p>
          <h2 className="mt-1 font-serif text-3xl tracking-[-0.03em] text-ink sm:text-4xl">
            Idea sandbox
          </h2>
          <p className="mt-2 max-w-2xl text-[15px] leading-6 text-muted">
            Loose concepts, difficult questions, and things I would love to prototype
            when time permits. Click a note to unpack the thought.
          </p>
        </div>
        <button
          type="button"
          onClick={shuffleIdeas}
          className="rounded-full border border-crayon/30 bg-white px-4 py-2 text-[13px] text-crayon shadow-sm transition hover:-rotate-1 hover:bg-lavender/40"
        >
          Shuffle the pile ↻
        </button>
      </div>

      <div className="mt-6 flex flex-wrap gap-2" aria-label="Filter ideas">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => {
              setCategory(item);
              setSelectedId(null);
            }}
            className={`rounded-full px-3.5 py-1.5 text-[12px] transition ${
              category === item
                ? "bg-crayon text-white"
                : "border border-ink/10 bg-white text-ink/55 hover:text-ink"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div
        className="mt-5 grid gap-5 rounded-[28px] border border-ink/10 bg-white/70 p-4 min-[351px]:p-6 min-[700px]:grid-cols-2"
        style={{
          backgroundImage: "radial-gradient(#d2d0ca 1.1px, transparent 1.2px)",
          backgroundSize: "22px 22px",
        }}
      >
        {visibleIdeas.map((idea, index) => {
          const selected = selectedId === idea.id;
          return (
            <button
              key={idea.id}
              type="button"
              aria-expanded={selected}
              onClick={() => setSelectedId(selected ? null : idea.id)}
              className={`figjam-sticky figjam-card-lift relative self-start p-5 text-left ${
                selected ? "min-[700px]:col-span-2" : ""
              }`}
              style={{
                background: idea.color,
                rotate: selected ? "0deg" : `${[-1.1, 0.8, -0.5, 1.2][index % 4]}deg`,
              }}
            >
              <span className="text-2xl" aria-hidden>
                {idea.emoji}
              </span>
              <span className="ml-2 text-[10px] uppercase tracking-[0.12em] text-ink/45">
                {idea.category}
              </span>
              <h3 className="mt-3 font-serif text-[1.35rem] leading-tight tracking-[-0.02em]">
                {idea.title}
              </h3>
              <p className="mt-2 text-[14px] leading-5 text-ink/65">{idea.prompt}</p>
              <span className="mt-4 inline-block text-[11px] font-medium uppercase tracking-[0.1em] text-crayon">
                {selected ? "Fold note ↑" : "Open note ↓"}
              </span>

              {selected ? (
                <ul className="mt-4 space-y-2 border-t border-ink/10 pt-4 text-[13px] leading-5 text-ink/70">
                  {idea.notes.map((note) => (
                    <li key={note} className="flex gap-2">
                      <span aria-hidden className="text-crayon">
                        ✦
                      </span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </button>
          );
        })}
      </div>
    </section>
  );
}
