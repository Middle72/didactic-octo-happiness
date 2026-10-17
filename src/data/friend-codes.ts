export interface OurFriendCode {
  trainer: string;
  code: string;
  team?: string;
  notes?: string;
}

// Add your own code here! Tell Claude your trainer name, friend code,
// team, and any notes (e.g. "mostly raids", "daily gifts welcome").
export const OUR_FRIEND_CODES: OurFriendCode[] = [];

export interface CommunityFriendCode {
  rank: number;
  code: string;
  trainer: string;
  team: string;
  gifts: string;
  raid: string;
  posted: string;
}

// Top 100 community-submitted codes, mostly for daily gift exchange and
// occasional raid invites. Sourced from pokemongofriendcodes.com and
// PokeBase on 2026-10-17 - most posters are anonymous and raid
// availability is frequently "Unknown" since it isn't tracked by the
// source sites. Codes churn fast on these lists, so some may go stale.
export const COMMUNITY_FRIEND_CODES: CommunityFriendCode[] = [
  { rank: 1, code: "7464 7844 8906", trainer: "", team: "Valor", gifts: "Send & open", raid: "Unknown", posted: "2026-10-17" },
  { rank: 2, code: "1325 3692 9719", trainer: "", team: "Any", gifts: "Send & open", raid: "Unknown", posted: "2026-10-17" },
  { rank: 3, code: "4643 6397 4755", trainer: "", team: "Any", gifts: "Send & open", raid: "Unknown", posted: "2026-10-17" },
  { rank: 4, code: "0562 0218 5526", trainer: "", team: "Any", gifts: "Send & open", raid: "Unknown", posted: "2026-10-17" },
  { rank: 5, code: "7174 5644 0976", trainer: "", team: "Any", gifts: "Send & open", raid: "Unknown", posted: "2026-10-17" },
  { rank: 6, code: "5036 0143 7575", trainer: "", team: "Valor", gifts: "Send & open", raid: "Unknown", posted: "2026-10-17" },
  { rank: 7, code: "1298 5620 6479", trainer: "", team: "Any", gifts: "Send & open", raid: "Unknown", posted: "2026-10-17" },
  { rank: 8, code: "2215 8994 4386", trainer: "", team: "Any", gifts: "Send & open", raid: "Unknown", posted: "2026-10-17" },
  { rank: 9, code: "8872 5662 9566", trainer: "", team: "Any", gifts: "Send & open", raid: "Unknown", posted: "2026-10-17" },
  { rank: 10, code: "2917 9309 8260", trainer: "", team: "Any", gifts: "Send & open", raid: "Unknown", posted: "2026-10-17" },
  { rank: 11, code: "9163 7097 4674", trainer: "", team: "Any", gifts: "Send & open", raid: "Unknown", posted: "2026-10-17" },
  { rank: 12, code: "7156 1405 9299", trainer: "", team: "Any", gifts: "Send & open", raid: "Unknown", posted: "2026-10-17" },
  { rank: 13, code: "2695 9580 7592", trainer: "", team: "Any", gifts: "Send & open", raid: "Unknown", posted: "2026-10-17" },
  { rank: 14, code: "5320 6918 6109", trainer: "", team: "Any", gifts: "Send & open", raid: "Unknown", posted: "2026-10-17" },
  { rank: 15, code: "5893 3724 4269", trainer: "", team: "Any", gifts: "Send & open", raid: "Unknown", posted: "2026-10-17" },
  { rank: 16, code: "6209 3092 1874", trainer: "", team: "Any", gifts: "Send & open", raid: "Unknown", posted: "2026-10-17" },
  { rank: 17, code: "8758 1885 0356", trainer: "", team: "Any", gifts: "Send & open", raid: "Unknown", posted: "2026-10-17" },
  { rank: 18, code: "6989 8146 0322", trainer: "", team: "Any", gifts: "Send & open", raid: "Unknown", posted: "2026-10-17" },
  { rank: 19, code: "1518 8561 4997", trainer: "", team: "Any", gifts: "Send & open", raid: "Unknown", posted: "2026-10-17" },
  { rank: 20, code: "4118 6161 0514", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-17" },
  { rank: 21, code: "4539 2136 0962", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-17" },
  { rank: 22, code: "4461 3803 3473", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-16" },
  { rank: 23, code: "0866 9983 5170", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-16" },
  { rank: 24, code: "4425 8956 0111", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-16" },
  { rank: 25, code: "7518 4823 6054", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-16" },
  { rank: 26, code: "9063 7347 5260", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-16" },
  { rank: 27, code: "4072 4221 5452", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-16" },
  { rank: 28, code: "2326 1312 9800", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-16" },
  { rank: 29, code: "3737 3102 4174", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-16" },
  { rank: 30, code: "9390 4868 7821", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-16" },
  { rank: 31, code: "4082 0362 9904", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-16" },
  { rank: 32, code: "9741 4564 5811", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-16" },
  { rank: 33, code: "5804 3114 2744", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-16" },
  { rank: 34, code: "9569 9314 9582", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-16" },
  { rank: 35, code: "8875 5441 0000", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-16" },
  { rank: 36, code: "4184 1724 5375", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-16" },
  { rank: 37, code: "9980 9655 9400", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-16" },
  { rank: 38, code: "2460 9169 3765", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-16" },
  { rank: 39, code: "3573 8198 0051", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-16" },
  { rank: 40, code: "8370 6241 2148", trainer: "Krisdawhale", team: "Mystic", gifts: "Yes", raid: "Yes", posted: "Not shown" },
  { rank: 41, code: "6564 9754 2165", trainer: "VaVaVoom87", team: "Mystic", gifts: "Yes", raid: "Yes", posted: "Not shown" },
  { rank: 42, code: "7832 7552 6382", trainer: "Hereshoggdeeney", team: "Mystic", gifts: "Yes", raid: "Yes", posted: "Not shown" },
  { rank: 43, code: "9615 4791 8497", trainer: "uncKruk", team: "Mystic", gifts: "Yes", raid: "Yes", posted: "Not shown" },
  { rank: 44, code: "5028 0824 0748", trainer: "Trustygrace", team: "Mystic", gifts: "Yes", raid: "Yes", posted: "Not shown" },
  { rank: 45, code: "8439 5422 9994", trainer: "xoxo0128", team: "Mystic", gifts: "Yes", raid: "Yes", posted: "Not shown" },
  { rank: 46, code: "3823 0037 8218", trainer: "patronum93", team: "Mystic", gifts: "Yes", raid: "Yes", posted: "Not shown" },
  { rank: 47, code: "7405 9676 6391", trainer: "Luchinho45", team: "Mystic", gifts: "Yes", raid: "Yes", posted: "Not shown" },
  { rank: 48, code: "8457 7260 7908", trainer: "Ydkyig", team: "Mystic", gifts: "Yes", raid: "Yes", posted: "Not shown" },
  { rank: 49, code: "8230 3663 4496", trainer: "Carny666", team: "Mystic", gifts: "Yes", raid: "Yes", posted: "Not shown" },
  { rank: 50, code: "6456 4852 2544", trainer: "ThomaskhooEC", team: "Mystic", gifts: "Yes", raid: "Yes", posted: "Not shown" },
  { rank: 51, code: "5083 5125 8888", trainer: "weejus", team: "Mystic", gifts: "Yes", raid: "Yes", posted: "Not shown" },
  { rank: 52, code: "7426 2087 3269", trainer: "Julia4505", team: "Mystic", gifts: "Yes", raid: "Yes", posted: "Not shown" },
  { rank: 53, code: "5205 8104 8525", trainer: "Nujake", team: "Mystic", gifts: "Yes", raid: "Yes", posted: "Not shown" },
  { rank: 54, code: "7429 1423 6922", trainer: "vluxnzz", team: "Mystic", gifts: "Yes", raid: "Yes", posted: "Not shown" },
  { rank: 55, code: "1501 5665 4824", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-15" },
  { rank: 56, code: "1440 7103 6456", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-15" },
  { rank: 57, code: "7937 0547 3230", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-15" },
  { rank: 58, code: "7374 3653 6162", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-15" },
  { rank: 59, code: "3015 5885 9182", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-15" },
  { rank: 60, code: "4579 5148 8769", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-15" },
  { rank: 61, code: "9261 3548 5932", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-15" },
  { rank: 62, code: "6205 2481 1530", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-15" },
  { rank: 63, code: "0357 5258 9478", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-15" },
  { rank: 64, code: "7544 3556 6677", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-15" },
  { rank: 65, code: "1672 1886 5013", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-15" },
  { rank: 66, code: "6472 4023 6339", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-15" },
  { rank: 67, code: "3072 5305 5844", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-15" },
  { rank: 68, code: "8204 9487 1415", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-15" },
  { rank: 69, code: "0726 6315 3112", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-15" },
  { rank: 70, code: "2686 6286 0277", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-15" },
  { rank: 71, code: "3795 8866 4851", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-15" },
  { rank: 72, code: "0243 3241 1646", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-15" },
  { rank: 73, code: "7329 5084 5645", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-15" },
  { rank: 74, code: "7895 0346 6437", trainer: "pinaychelle", team: "Mystic", gifts: "Yes", raid: "No", posted: "Not shown" },
  { rank: 75, code: "9994 0867 3770", trainer: "ViviLovesPKMN1", team: "Mystic", gifts: "Yes", raid: "No", posted: "Not shown" },
  { rank: 76, code: "6202 2236 9595", trainer: "somazon", team: "Mystic", gifts: "Yes", raid: "No", posted: "Not shown" },
  { rank: 77, code: "3991 5302 6713", trainer: "LostMaxHD", team: "Mystic", gifts: "Yes", raid: "No", posted: "Not shown" },
  { rank: 78, code: "6997 5283 0853", trainer: "Cadelincon21", team: "Mystic", gifts: "Yes", raid: "No", posted: "Not shown" },
  { rank: 79, code: "1988 6316 3273", trainer: "Pepe", team: "Mystic", gifts: "Yes", raid: "No", posted: "Not shown" },
  { rank: 80, code: "9720 0183 6802", trainer: "M1chelinho", team: "Mystic", gifts: "Yes", raid: "No", posted: "Not shown" },
  { rank: 81, code: "2754 3572 0112", trainer: "RougeEtNoir83", team: "Mystic", gifts: "Yes", raid: "No", posted: "Not shown" },
  { rank: 82, code: "5801 2214 1364", trainer: "Horatio997", team: "Mystic", gifts: "Yes", raid: "No", posted: "Not shown" },
  { rank: 83, code: "8352 8221 0496", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-14" },
  { rank: 84, code: "7402 2291 2661", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-14" },
  { rank: 85, code: "6851 9533 0610", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-14" },
  { rank: 86, code: "8698 1098 5451", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-14" },
  { rank: 87, code: "0940 3289 1854", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-14" },
  { rank: 88, code: "4918 2779 1655", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-14" },
  { rank: 89, code: "2973 4682 8342", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-14" },
  { rank: 90, code: "2101 7524 3743", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-14" },
  { rank: 91, code: "5658 3213 7299", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-14" },
  { rank: 92, code: "4876 8252 0812", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-14" },
  { rank: 93, code: "5728 1518 6087", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-13" },
  { rank: 94, code: "8400 9397 5283", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-13" },
  { rank: 95, code: "9211 8702 4174", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-13" },
  { rank: 96, code: "8491 3045 4129", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-13" },
  { rank: 97, code: "3823 9077 2349", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-13" },
  { rank: 98, code: "1248 2626 0615", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-13" },
  { rank: 99, code: "3603 2393 1389", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-13" },
  { rank: 100, code: "7386 5893 0641", trainer: "", team: "Mystic", gifts: "Send & open", raid: "Unknown", posted: "2026-10-13" },
];
