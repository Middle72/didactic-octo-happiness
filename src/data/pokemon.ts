export interface Pokemon {
  name: string;
  species: string;
  types: string;
  cp: number;
  levelRange: string;
  atk: number;
  def: number;
  hp: number;
  iv: string;
  fastAttack: string;
  chargedAttack1: string;
  chargedAttack2: string;
  notes: string;
}

export interface Trainer {
  slug: string;
  name: string;
}

export const TRAINERS: Trainer[] = [
  { slug: 'bobby', name: 'Bobby' },
  { slug: 'kelly', name: 'Kelly' },
  { slug: 'kim', name: 'Kim' },
];

export const POKEMON: Record<string, Pokemon[]> = {
  bobby: [],
  kelly: [],
  kim: [
    {
      name: 'MegDragonite',
      species: 'dragonite',
      types: 'Dragon / Flying',
      cp: 2091,
      levelRange: '~21–22',
      atk: 10,
      def: 13,
      hp: 13,
      iv: '36/45 (80.0% / 2★)',
      fastAttack: 'Steel Wing (Steel)',
      chargedAttack1: 'Hurricane (Flying)',
      chargedAttack2: '—',
      notes: 'Has 158 Dragonite Mega Energy; needs Dragon Fast/Charged TM',
    },
    {
      name: 'Latias',
      species: 'latias',
      types: 'Dragon / Psychic',
      cp: 2143,
      levelRange: '~20',
      atk: 12,
      def: 15,
      hp: 15,
      iv: '42/45 (93.3% / 3★)',
      fastAttack: 'Dragon Breath (Dragon)',
      chargedAttack1: 'Aura Sphere (Fighting)',
      chargedAttack2: '—',
      notes: 'Elite 93% bulk; Mega Latias eligible (needs 300 Mega Energy)',
    },
    {
      name: 'Drampa',
      species: 'drampa',
      types: 'Normal / Dragon',
      cp: 1875,
      levelRange: '~24–25',
      atk: 15,
      def: 14,
      hp: 13,
      iv: '42/45 (93.3% / 3★)',
      fastAttack: 'Dragon Breath (Dragon)',
      chargedAttack1: 'Swift (Normal)',
      chargedAttack2: '—',
      notes: 'Dynamax capable; max 15 Attack stat; high niche bulk',
    },
    {
      name: 'Tyrunt',
      species: 'tyrunt',
      types: 'Rock / Dragon',
      cp: 1450,
      levelRange: '~17–18',
      atk: 14,
      def: 14,
      hp: 13,
      iv: '41/45 (91.1% / 3★)',
      fastAttack: 'Dragon Tail (Dragon)',
      chargedAttack1: 'Dragon Claw (Dragon)',
      chargedAttack2: '—',
      notes: '91% Tyrantrum candidate (needs 50 candy during daytime)',
    },
    {
      name: 'Latios',
      species: 'latios',
      types: 'Dragon / Psychic',
      cp: 2143,
      levelRange: '~20',
      atk: 11,
      def: 14,
      hp: 12,
      iv: '37/45 (82.2% / 3★)',
      fastAttack: 'Dragon Breath (Dragon)',
      chargedAttack1: 'Dragon Claw (Dragon)',
      chargedAttack2: '—',
      notes: 'Premier PvE Dragon DPS; Mega Latios eligible (needs 300 Mega Energy)',
    },
    {
      name: 'Dragonite',
      species: 'dragonite',
      types: 'Dragon / Flying',
      cp: 1612,
      levelRange: '~16–17',
      atk: 15,
      def: 15,
      hp: 14,
      iv: '44/45 (97.8% / 3★)',
      fastAttack: 'Dragon Breath (Dragon)',
      chargedAttack1: 'Hurricane (Flying)',
      chargedAttack2: '—',
      notes: 'Elite 98% (15/15/14) investment; far superior stats to MegDragonite',
    },
    {
      name: 'Gible',
      species: 'gible',
      types: 'Dragon / Ground',
      cp: 749,
      levelRange: '~24–25',
      atk: 12,
      def: 11,
      hp: 11,
      iv: '34/45 (75.6% / 2★)',
      fastAttack: 'Mud Shot (Ground)',
      chargedAttack1: 'Body Slam (Normal)',
      chargedAttack2: '—',
      notes: 'Has 115 Gible Candy & Garchomp Mega Energy',
    },
    {
      name: 'Frigibax',
      species: 'frigibax',
      types: 'Dragon / Ice',
      cp: 689,
      levelRange: '~17–18',
      atk: 13,
      def: 14,
      hp: 15,
      iv: '42/45 (93.3% / 3★)',
      fastAttack: 'Dragon Breath (Dragon)',
      chargedAttack1: 'Avalanche (Ice)',
      chargedAttack2: '—',
      notes: 'Elite 93% IV Baxcalibur line; bridges her Dragon and Ice deficits',
    },
  ],
};
