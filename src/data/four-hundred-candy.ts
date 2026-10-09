export interface CandyEvolution {
  from: string;
  fromSpecies: string;
  to: string;
  toSpecies: string;
  note?: string;
}

// Pokemon whose evolution costs 400 candy in Pokemon GO - the highest
// standard candy tier in the game. Sourced from Bulbapedia's Candy (GO)
// and evolution-family pages, cross-checked against the Pokemon GO
// Fandom wiki. A few entries (Toxel, Snom, Dipplin, Sinistea) were only
// confirmed by the Fandom source at the time this was written - worth a
// sanity check against current in-game costs if anything looks off.
export const FOUR_HUNDRED_CANDY: CandyEvolution[] = [
  { from: 'Magikarp', fromSpecies: 'magikarp', to: 'Gyarados', toSpecies: 'gyarados' },
  { from: 'Wailmer', fromSpecies: 'wailmer', to: 'Wailord', toSpecies: 'wailord' },
  { from: 'Swablu', fromSpecies: 'swablu', to: 'Altaria', toSpecies: 'altaria' },
  { from: 'Larvesta', fromSpecies: 'larvesta', to: 'Volcarona', toSpecies: 'volcarona' },
  { from: 'Noibat', fromSpecies: 'noibat', to: 'Noivern', toSpecies: 'noivern' },
  { from: 'Stufful', fromSpecies: 'stufful', to: 'Bewear', toSpecies: 'bewear' },
  { from: 'Wimpod', fromSpecies: 'wimpod', to: 'Golisopod', toSpecies: 'golisopod' },
  { from: 'Meltan', fromSpecies: 'meltan', to: 'Melmetal', toSpecies: 'melmetal', note: 'Meltan Candy, not standard candy' },
  { from: 'Toxel', fromSpecies: 'toxel', to: 'Toxtricity', toSpecies: 'toxtricity' },
  { from: 'Snom', fromSpecies: 'snom', to: 'Frosmoth', toSpecies: 'frosmoth' },
  { from: 'Sinistea (Antique)', fromSpecies: 'sinistea', to: 'Polteageist (Antique)', toSpecies: 'polteageist' },
  { from: 'Dipplin', fromSpecies: 'dipplin', to: 'Hydrapple', toSpecies: 'hydrapple', note: 'Applin Candy, not standard candy' },
];
