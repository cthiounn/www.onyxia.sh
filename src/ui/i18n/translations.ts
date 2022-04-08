import { symToStr } from "tsafe/symToStr";
import { Reflect } from "tsafe/Reflect";
import { id } from "tsafe/id";
import type { Language } from "./useLng";
import { App } from "ui/App";
import { Home } from "ui/pages/Home";
import { FourOhFour } from "ui/pages/FourOhFour";

export type Scheme = {
    [key: string]: undefined | Record<string, string>;
};

type ToTranslations<S extends Scheme> = {
    [key in keyof S]: string;
};

// prettier-ignore
const reflectedI18nSchemes = {
    [symToStr({ App })]: Reflect<App.I18n>(),
    [symToStr({ Home })]: Reflect<Home.I18n>(),
    [symToStr({ FourOhFour })]: Reflect<FourOhFour.I18n>(),
};

export type I18nSchemes = typeof reflectedI18nSchemes;

export type Translations = {
    [K in keyof I18nSchemes]: ToTranslations<I18nSchemes[K]>;
};

export const resources = id<Record<Language, Translations>>({
    "en": {
        "App": {
            "install": "Install",
            "paid for by French taxpayers": "Onyxia is free and open source software payed for by the french tax payers 🇫🇷",
            "pricing": "Pricing",
            "try it": "Try it",
            "it is libre software": "It is libre software",
            "ok": "Ok"
        },
        "Home": {
            "subTitle": "Pool computing resources and provide a state of the art work environnement to your data scientists without relying on big tech closed-source software.",
        },
        "FourOhFour": {
            "not found": "Page not found",
        },
    },
    "fr": {
        /* spell-checker: disable */
        "App": {
            "install": "Installer",
            "paid for by French taxpayers": "Onyxia est un logiciel libre et gratuit firancer par le contribuable francais. 🇫🇷",
            "pricing": "Prix",
            "try it": "Demo",
            "it is libre software": "C'est un logiciel libre",
            "ok": "D'accord"
        },
        "Home": {
            "subTitle": "Mettez en commun votre puissance de calcul et fournissez un environnement de travail a l'état de l'art pour vos datascientits sans dépendre de logiciels propiétaires des GAFAM."
            
        },
        "FourOhFour": {
            "not found": "Page non trouvée",
        },
        /* spell-checker: enable */
    },
    "zh-CN": {
        /* spell-checker: disable */
        "App": {
            "install": "安装",
            "paid for by French taxpayers": "由法国税收官员支付",
            "pricing": "价格",
            "try it": "试用",
            "it is libre software": "这是一个开源软件",
            "ok": "好"
        },
        "Home": {
            "subTitle": "共享计算资源，提供一个状态最高的工作环境给您的数据科学家，而不依赖于大型的开源软件。"
        },
        "FourOhFour": {
            "not found": "网页未找到",
        },
        /* spell-checker: enable */
    },
});
