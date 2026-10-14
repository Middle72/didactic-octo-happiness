export interface SearchTermRow {
  syntax: string;
  pulls: string;
  useCase: string;
}

export interface SearchTermSection {
  heading: string;
  useCaseHeader?: string;
  rows: SearchTermRow[];
}

export const SEARCH_TERM_SECTIONS: SearchTermSection[] = [
  {
    heading: "Individual Mega Search Terms",
    rows: [
      {
        syntax: "megaevolve",
        pulls: "Every Pokemon that currently has enough Mega/Primal Energy to evolve right now (cooldown or fresh).",
        useCase: "Quick check to see who you have enough energy to evolve immediately.",
      },
      {
        syntax: "mega0",
        pulls: "Species with a released Mega Evolution that you have never Mega Evolved yet.",
        useCase: "Finds candidates waiting for their first initial Mega Energy unlock.",
      },
      {
        syntax: "mega1",
        pulls: "Pokemon currently at Base Mega Level (Level 1).",
        useCase: "Isolates early-stage Megas needing 6 more daily evolutions to hit Level 2.",
      },
      {
        syntax: "mega2",
        pulls: "Pokemon currently at High Mega Level (Level 2).",
        useCase: "Tracks Megas in the final stretch (needing 23 more evolutions to max out).",
      },
      {
        syntax: "mega3",
        pulls: "Pokemon that have reached Max Mega Level (Level 3).",
        useCase: "Shows your fully maxed Megas with maximum XL candy drop bonuses and the shortest 3-day cooldown.",
      },
      {
        syntax: "mega1-2",
        pulls: "All Pokemon currently at Level 1 or Level 2 (in active progression).",
        useCase: "The primary filter for your daily leveling routine.",
      },
      {
        syntax: "mega1-3",
        pulls: "Every Pokemon you have ever Mega Evolved at least once.",
        useCase: "Displays your entire active Mega portfolio.",
      },
    ],
  },
  {
    heading: "Routine & Optimization Combos",
    rows: [
      {
        syntax: "mega1-2 & !megaevolve0",
        pulls: "Megas in Level 1 or 2 whose cooldowns are up and can evolve for 0 Mega Energy.",
        useCase: "Daily Routine: Mega Evolve everyone on this list each night without spending any energy.",
      },
      {
        syntax: "mega1-2 & megaevolve",
        pulls: "Megas in Level 1 or 2 that can evolve right now (either free or using available energy).",
        useCase: "Fast-Track Routine: Burn spare energy to speed up daily levels instead of waiting out full cooldowns.",
      },
      {
        syntax: "mega0 & megaevolve",
        pulls: "Eligible Pokemon you have never Mega Evolved before, but have banked enough energy to unlock.",
        useCase: "Discovers unactivated Megas sitting idle in your inventory.",
      },
      {
        syntax: "mega1-3 & 4*",
        pulls: "Perfect 100% IV Pokemon that have been Mega Evolved.",
        useCase: "Quick filter for your trophy/maxed Mega attackers.",
      },
      {
        syntax: "mega3 & !megaevolve0",
        pulls: "Max Level (Level 3) Megas that are off their 3-day cooldown.",
        useCase: "Free Mega activation for Community Days or Raid Hours to maximize catch XL candies.",
      },
    ],
  },
  {
    heading: "Identifying Top Pokemon & Keepers (Inspect & Tag)",
    useCaseHeader: "Practical Use & Action",
    rows: [
      {
        syntax: "4* & !#",
        pulls: 'Uncategorized 100% IV perfect "Hundos".',
        useCase: "Favorite immediately and tag as Hundo or Maxed. Never transfer.",
      },
      {
        syntax: "3* & !# & !favorite",
        pulls: "Unreviewed 3-Star Pokemon (82%–98% IVs).",
        useCase: "Review stat distribution; keep specimens with 14–15 Attack for raids, then favorite or tag them.",
      },
      {
        syntax: "0-1attack & 3-4defense & 3-4hp & cp-2500 & !# & !favorite",
        pulls: "High-stat product PvP IV candidates (low Attack, high Defense/HP for Great & Ultra League).",
        useCase: "Scan via appraisal or Poke Genie before binning, as low CP doesn't mean bad PvP stats.",
      },
      {
        syntax: "0attack & 0defense & 0hp",
        pulls: 'True "Nundos" (0% IVs).',
        useCase: "Rarer than 100% IVs; favorite as collectors' trophies or transfer if you only care about battle viability.",
      },
      {
        syntax: "shadow & 3*,4* & !# & !favorite",
        pulls: "High-IV Shadow Pokemon (+20% attack bonus).",
        useCase: "Top-tier raid attackers; lock these down before Rocket takeover events to TM away Frustration.",
      },
      {
        syntax: "shiny,legendary,mythical,ultra beasts & !favorite",
        pulls: "Unprotected ultra-rare / special Pokemon.",
        useCase: "Safety check to favorite valuable catches before doing any mass purges.",
      },
      {
        syntax: "dynamax,gigantamax & !# & !favorite",
        pulls: "Untagged Max Battle assets.",
        useCase: "Tag for Max Battles or check IVs for Power Spot defense.",
      },
      {
        syntax: "count1 & !favorite",
        pulls: "Species where you only have a single, untagged copy.",
        useCase: "Safety check before mass-transferring duplicates; favorite these so a \"select all dupes\" purge can't accidentally catch your only copy of a species.",
      },
    ],
  },
  {
    heading: 'Cleanout & Safe Mass Transfer (The "Trash" Filters)',
    useCaseHeader: "Practical Use & Action",
    rows: [
      {
        syntax: "0*,1*,2* & !favorite & !# & !shiny & !shadow & !legendary & !mythical & !costume & !dynamax & !gigantamax",
        pulls: "The Master Trash Purge: Low/mid IVs (under 82%), excluding any favorites, tags, shinies, shadows, legendaries, costumes, or dynamax.",
        useCase: "Instant Mass Cleanup: Tap one, hit Select All, and transfer without risking any valuable assets.",
      },
      {
        syntax: "0*,1* & !favorite & !# & !shiny & !shadow & !costume",
        pulls: "Bottom-tier fodder (0–66% IVs) excluding protected classes.",
        useCase: "Daily quick-dump when bag space is tight after a play session.",
      },
      {
        syntax: "distance100- & !favorite & !#",
        pulls: "Pokemon caught over 100 km away.",
        useCase: "Guaranteed +1 Candy XL and 3 standard candies when traded to a local friend; trade first, then transfer what's left.",
      },
      {
        syntax: "tradeevolve & !favorite & !#",
        pulls: "Species with free trade evolutions (Machoke, Haunter, Kadabra, Graveler, Gurdurr, Boldore, Karrablast, Shelmet).",
        useCase: "Tag for trading so your trade partner can evolve them for 0 candy.",
      },
      {
        syntax: "!favorite & !# & year2016-2019",
        pulls: "Old, untagged catches from 2016 to 2019.",
        useCase: "Guaranteed or boosted Lucky Trade triggers; do not transfer—trade these for guaranteed Lucky Pokemon.",
      },
    ],
  },
];
