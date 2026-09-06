export type Locale = 'en'|'zh';
const STORAGE_KEY = 'anatomy-locale';
export function isLocale(value:string|null|undefined):value is Locale{return value==='en'||value==='zh';}
function detect():Locale{
 if(typeof window==='undefined')return 'en';
 const requested=new URLSearchParams(window.location.search).get('lang');
 if(isLocale(requested)){try{localStorage.setItem(STORAGE_KEY,requested)}catch{}return requested;}
 try{const stored=localStorage.getItem(STORAGE_KEY);if(isLocale(stored))return stored;}catch{}
 return navigator.language.toLowerCase().startsWith('zh')?'zh':'en';
}
/** Active locale, resolved once per page load: ?lang=zh|en > localStorage > browser language. */
export const LOCALE:Locale = detect();
/** Catalogue to load: translated part names only exist in the locale-specific manifest. */
export function atlasUrl(locale:Locale = LOCALE):string{return locale==='zh' ? '/models/atlas-zh.json' : '/models/atlas.json';}
/** Persist the choice and reload so every locale-bound module constant is rebuilt. */
export function setLocale(locale:Locale){try{localStorage.setItem(STORAGE_KEY,locale);}catch{}const url=new URL(window.location.href);url.searchParams.set('lang',locale);window.location.assign(url.toString());}
