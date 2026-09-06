import {useSyncExternalStore} from 'react';
import {LANGUAGES,LANGUAGE_CODES,MESSAGES,type Language} from './languages';
/** Language code from LANGUAGES (BCP 47 primary tag). Kept as `string` so new languages need no type changes. */
export type Locale = string;
/** Re-export the language catalogue so views can render the picker from one source of truth. */
export {LANGUAGES} from './languages';
const STORAGE_KEY = 'anatomy-locale';
export function isLocale(value:string|null|undefined):value is Locale{return !!value&&LANGUAGE_CODES.has(value);}
function detect():Locale{
 if(typeof window==='undefined')return 'en';
 const requested=new URLSearchParams(window.location.search).get('lang');
 if(isLocale(requested)){try{localStorage.setItem(STORAGE_KEY,requested)}catch{}return requested;}
 try{const stored=localStorage.getItem(STORAGE_KEY);if(isLocale(stored))return stored;}catch{}
 for(const language of navigator.languages){const code=language.toLowerCase().split('-')[0];if(isLocale(code))return code;}
 return 'en';
}
/** Active locale. Resolved from the environment once, then switchable at runtime without a reload. */
let current:Locale = detect();
const listeners=new Set<()=>void>();
export function subscribeLocale(listener:()=>void):()=>void{listeners.add(listener);return()=>{listeners.delete(listener)};}
export function getLocale():Locale{return current;}
/** Subscribe to locale changes from React; the component re-renders in place when it flips. */
export function useLocale():Locale{return useSyncExternalStore(subscribeLocale,getLocale,getLocale);}
function langMeta(code:Locale):Language{return LANGUAGES.find(l=>l.code===code) ?? LANGUAGES[0];}
/** Keep <html lang>, <title> and meta description in step with the active locale. */
function syncDocument(){if(typeof document==='undefined')return;const meta=langMeta(current);document.documentElement.lang=meta.htmlLang;document.title=meta.title;const element=document.querySelector<HTMLMetaElement>('meta[name="description"]');if(element)element.setAttribute('content',meta.description);}
/** Mirror the active locale into the address bar (?lang=…) so the URL stays shareable, without navigating. */
function syncUrl(){if(typeof window==='undefined')return;const url=new URL(window.location.href);if(url.searchParams.get('lang')===current)return;url.searchParams.set('lang',current);window.history.replaceState(null,'',url.toString());}
/** Persist the choice and notify subscribers (React re-renders in place). No page reload. */
export function setLocale(locale:Locale){if(current===locale||!isLocale(locale))return;current=locale;try{localStorage.setItem(STORAGE_KEY,locale);}catch{}syncUrl();syncDocument();for(const listener of listeners)listener();}
/** Catalogue to load: English-canonical data; the active language's labels come from its file in app/languages/ and are applied onto the loaded object (applyStructureNames). */
export function atlasUrl():string{return '/models/atlas.json';}
/** Translate interface copy: look the English source string up in the active language table; unknown strings keep the original. */
export function translate(locale:Locale,text:string):string{const dict=MESSAGES[locale];return dict?dict[text]??text:text;}
// Initial metadata sync once the document exists (covers direct visits in a non-English language).
syncDocument();
