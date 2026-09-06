import type {Atlas} from './anatomy';
/** Translation table for one language's UI copy, keyed by the canonical English source string. */
export type MessageDict = Record<string, string>;
/** Labels for named structures (parts/concepts in public/models/atlas.json), keyed by structure id. */
export type StructureDict = Record<string, string>;
/** Metadata for a selectable interface language. Codes are lower-case BCP 47 primary tags. `order` ranks the picker after English (0); languages without it sort last by code. */
export interface Language {code: string; label: string; nativeName: string; htmlLang: string; title: string; description: string; order?: number}
/** One self-contained language module = the file a contributor drops into app/languages/. */
export interface LanguageModule {meta?: Language; copy?: MessageDict; structure?: StructureDict}
/**
 * Language catalogue — every file in app/languages/ is registered here automatically.
 *
 * To add a language, copy app/languages/zh.ts to e.g. app/languages/ja.ts and translate it; this module picks the
 * file up through import.meta.glob — no other file changes. English is built in (order 0) because its copy keys
 * and structure names need no table. Dropping any helper .ts into app/languages/ without a `meta` export is safe:
 * it is ignored with a console warning. Duplicate `code`s keep the first file and warn.
 */
const EN: Language = {code: 'en', label: 'English', nativeName: 'English', htmlLang: 'en', title: 'Human Atlas', description: 'An interactive atlas of the human body. Explore named anatomical structures, reveal organ systems, and inspect individual parts in 3D.', order: 0};
const modules = import.meta.glob<LanguageModule>('./languages/*.ts', {eager: true});
const found = new Map<string, Required<Pick<LanguageModule, 'meta'>> & LanguageModule>();
for (const [path, module] of Object.entries(modules)) {
  const meta = module.meta;
  if (!meta) {console.warn(`[languages] ignoring ${path}: no meta export`); continue;}
  if (found.has(meta.code)) {console.warn(`[languages] duplicate language code "${meta.code}" in ${path}; keeping the first`); continue;}
  found.set(meta.code, module as Required<Pick<LanguageModule, 'meta'>> & LanguageModule);
}
/** Languages offered by the picker: English first, then each file's meta ordered by `order`, then by code. */
export const LANGUAGES: Language[] = [EN, ...[...found.values()].map((m) => m.meta).sort((a, b) => (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER) || a.code.localeCompare(b.code))];
/** Codes accepted by i18n (isLocale/detect/?lang=…), derived from LANGUAGES. */
export const LANGUAGE_CODES = new Set<string>(LANGUAGES.map((l) => l.code));
/** UI copy by language code, read by translate(). English has no table: its keys are the strings. */
export const MESSAGES: Record<string, MessageDict> = {};
/** Structure-label tables by language code, read by applyStructureNames(). */
export const STRUCTURES = new Map<string, StructureDict>();
for (const module of found.values()) {
  if (module.copy) MESSAGES[module.meta.code] = module.copy;
  if (module.structure) STRUCTURES.set(module.meta.code, module.structure);
}
/** Structural contract for anything display-named: a canonical English name plus runtime labels added by applyStructureNames. */
export type Named = {name: string; nameZh?: string};
/** Display name for a part or concept: the active locale's `name` + TitleCase(code) label when present, otherwise the English `name`. */
export function nameFor(locale: string, item: Named): string {
  if (locale === 'en') return item.name;
  const field = 'name' + locale.charAt(0).toUpperCase() + locale.slice(1);
  const localized = (item as unknown as Record<string, unknown>)[field];
  return typeof localized === 'string' && localized ? localized : item.name;
}
/** Copy the active language's labels onto the in-memory atlas structures as `name` + TitleCase(code) fields (nameZh, nameJa, …). Tables are auto-registered, so nothing else is needed. */
export function applyStructureNames(atlas: Atlas, code: string): void {
  if (code === 'en') return;
  const dict = STRUCTURES.get(code);
  if (!dict) return;
  const field = 'name' + code.charAt(0).toUpperCase() + code.slice(1);
  for (const p of atlas.parts) {const label = dict[p.id]; if (label !== undefined) (p as unknown as Record<string, unknown>)[field] = label;}
  for (const c of atlas.concepts) {const label = dict[c.id]; if (label !== undefined) (c as unknown as Record<string, unknown>)[field] = label;}
}
