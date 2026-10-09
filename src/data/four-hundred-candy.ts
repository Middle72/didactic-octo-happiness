export interface CandyEvolution {
  from: string;
  fromSpecies: string;
  to: string;
  toSpecies: string;
  note?: string;
  // Trainer slugs (see TRAINERS in ./pokemon) who have caught/evolved this one.
  owners: string[];
}

// Pokemon whose evolution costs 400 candy in Pokemon GO - the highest
// standard candy tier in the game. Sourced from Bulbapedia's Candy (GO)
// and evolution-family pages, cross-checked against the Pokemon GO
// Fandom wiki. A few entries (Toxel, Snom, Dipplin, Sinistea) were only
// confirmed by the Fandom source at the time this was written - worth a
// sanity check against current in-game costs if anything looks off.
export const FOUR_HUNDRED_CANDY: CandyEvolution[] = [
  { from: 'Magikarp', fromSpecies: 'magikarp', to: 'Gyarados', toSpecies: 'gyarados', owners: ['bobby', 'kelly', 'kim'] },
  { from: 'Wailmer', fromSpecies: 'wailmer', to: 'Wailord', toSpecies: 'wailord', owners: ['bobby'] },
  { from: 'Swablu', fromSpecies: 'swablu', to: 'Altaria', toSpecies: 'altaria', owners: [] },
  { from: 'Larvesta', fromSpecies: 'larvesta', to: 'Volcarona', toSpecies: 'volcarona', owners: [] },
  { from: 'Noibat', fromSpecies: 'noibat', to: 'Noivern', toSpecies: 'noivern', owners: [] },
  { from: 'Stufful', fromSpecies: 'stufful', to: 'Bewear', toSpecies: 'bewear', owners: [] },
  { from: 'Wimpod', fromSpecies: 'wimpod', to: 'Golisopod', toSpecies: 'golisopod', owners: ['bobby'] },
  { from: 'Meltan', fromSpecies: 'meltan', to: 'Melmetal', toSpecies: 'melmetal', note: 'Meltan Candy, not standard candy', owners: [] },
  { from: 'Toxel', fromSpecies: 'toxel', to: 'Toxtricity', toSpecies: 'toxtricity', owners: [] },
  { from: 'Snom', fromSpecies: 'snom', to: 'Frosmoth', toSpecies: 'frosmoth', owners: [] },
  { from: 'Sinistea (Antique)', fromSpecies: 'sinistea', to: 'Polteageist (Antique)', toSpecies: 'polteageist', owners: [] },
  { from: 'Dipplin', fromSpecies: 'dipplin', to: 'Hydrapple', toSpecies: 'hydrapple', note: 'Applin Candy, not standard candy', owners: [] },
];
