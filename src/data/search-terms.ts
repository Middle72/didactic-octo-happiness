export interface SearchTermRow {
  syntax: string;
  pulls: string;
  useCase: string;
}

export interface SearchTermSection {
  heading: string;
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
];
