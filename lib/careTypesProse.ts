/**
 * Turn raw Google-style category labels into short, natural phrases for prose
 * (e.g. city page intros). Omits entries that do not look fertility-clinic-related.
 */

const EXACT_PHRASE: Record<string, string> = {
  "fertility clinic": "fertility clinics",
  "reproductive health clinic": "reproductive health clinics",
  "women's health clinic": "women's health clinics",
  "womens health clinic": "women's health clinics",
  "fertility physician": "fertility physicians",
  "family planning center": "family planning centers",
  "obstetrician-gynecologist": "obstetrician-gynecologists",
  "pregnancy care center": "pregnancy care centers",
  "birth control center": "birth control centers",
  gynecologist: "gynecologists",
  midwife: "midwives",
  "birth center": "birth centers",
};

const FERTILITY_LIKE =
  /fertility|reproductive|women'?s\s+health|family\s+planning|obstetric|gynec|pregnan|birth\s+control|midwi|birth\s+center/i;

/** Labels that match common noise but are not healthcare services. */
const NON_FERTILITY =
  /auto\s+repair|collision|transmission|student\s+dormitory|orthodox\s+church|storage\s+facility|insurance\s+agency/i;

function normalizeKey(raw: string): string {
  return raw.trim().toLowerCase().replace(/\s+/g, " ");
}

/** Fallback: lowercase prose, light plural / phrasing for service-style labels. */
function humanizeFallback(raw: string): string {
  let s = raw.trim().toLowerCase();
  if (!s) return "";
  if (s.endsWith(" service")) {
    return `${s.slice(0, -" service".length)} services`;
  }
  if (s.endsWith(" clinic")) {
    return s.replace(/ clinic$/, " clinics");
  }
  if (s.endsWith(" center")) {
    return s.replace(/ center$/, " centers");
  }
  if (s.endsWith("ist") && !s.endsWith("fertility physician")) {
    return `${s}s`;
  }
  if (!s.endsWith("s")) {
    return `${s}s`;
  }
  return s;
}

function phraseForLabel(raw: string): string | null {
  const key = normalizeKey(raw);
  if (!key) return null;
  if (NON_FERTILITY.test(key)) return null;
  if (EXACT_PHRASE[key]) return EXACT_PHRASE[key];
  if (!FERTILITY_LIKE.test(raw)) return null;
  return humanizeFallback(raw);
}

function oxfordJoin(items: string[]): string {
  if (items.length === 1) return items[0]!;
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

/**
 * @param careTypes Raw labels from listings (dedupe before calling if needed).
 * @param maxItems Cap how many categories appear in the sentence (default 5).
 * @returns Clause starting with "including …" or a neutral fallback (no leading "including" duplicate in caller).
 */
export function formatCareTypesClause(
  careTypes: string[],
  maxItems = 5,
): string {
  const seen = new Set<string>();
  const phrases: string[] = [];
  for (const raw of careTypes) {
    const p = phraseForLabel(raw);
    if (!p || seen.has(p)) continue;
    seen.add(p);
    phrases.push(p);
    if (phrases.length >= maxItems) break;
  }
  if (phrases.length === 0) {
    return "including fertility clinic and reproductive health services";
  }
  return `including ${oxfordJoin(phrases)}`;
}
