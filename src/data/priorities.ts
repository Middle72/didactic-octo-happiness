export interface Priority {
  rank: string;
  pokemon: string;
  whyItMatters: string;
  actionToTake: string;
}

export const PRIORITIES: Record<string, Priority[]> = {
  bobby: [],
  kelly: [],
  kim: [
    {
      rank: "#1",
      pokemon: "Lucky Piloswine (CP 2082, 93% IV)",
      whyItMatters: "Fills her biggest offensive gap (Ice); gets a 50% Stardust discount.",
      actionToTake: "Needs 51 more candies (buddy/rare candy) + 1 Sinnoh Stone to evolve into Mamoswine; teach Powder Snow + Avalanche.",
    },
    {
      rank: "#2",
      pokemon: "Purified Houndoom (CP 1871, 89% IV)",
      whyItMatters: "She already has 245 Mega Energy banked (needs only 100); boosts team Dark/Fire damage.",
      actionToTake: "Mega Evolve immediately; TM to Snarl + Foul Play (Dark) or Fire Fang + Flamethrower (Fire).",
    },
    {
      rank: "#3",
      pokemon: "Dragonite (CP 1612, 98% IV)",
      whyItMatters: "Has near-perfect 15/15/14 IVs, far better than her 80% MegDragonite.",
      actionToTake: "Use her 133 Dratini candies to power up to 2500+ CP; TM to Dragon Tail + Outrage/Dragon Claw.",
    },
    {
      rank: "#4",
      pokemon: "Shadow Thundurus & Shadow Giratina",
      whyItMatters: "Top-tier 89% IV legendary shadows with +20% damage multipliers; currently locked with Frustration.",
      actionToTake: 'Do NOT purify; tag them "Rocket TM" to swap Frustration to Thunderbolt and Shadow Ball during the next Team Rocket event.',
    },
    {
      rank: "#5",
      pokemon: "Frigibax (CP 689, 93% IV)",
      whyItMatters: "Evolves into Baxcalibur, covering both top-tier Dragon and Ice raid DPS.",
      actionToTake: "Set as buddy after Swinub to start walking for candies to fully evolve.",
    },
  ],
};
