import { TRANSLOCO_SCOPE } from "@ngneat/transloco";

const loader = ['en', 'ru'].reduce((acc, lang) => {
    acc[lang] = () => import(`./${lang}.json`);
    return acc;
}, {} as any);

export const I18N_PROVIDER = {
    provide: TRANSLOCO_SCOPE,
    useValue: {
        scope: 'scopeName',
        loader
    }
}