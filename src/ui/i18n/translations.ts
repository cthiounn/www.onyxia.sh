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
            "what is onyxia title": "What's Onyxia?",
            "what is onyxia body": 
                `Onyxia is a web app that installs on [Kubernetes](https://hubernetes.io) cluster.  
                It provides to your data scientist a nice and intuitive interface to launch on demand [containers](https://wwww.docker.com/) like [Spark, RStudio or Jupyter](https://datalab/sppcloud.fr/catalog) on demand.  
                On top of that Onyxia features a tight S3 integration via [MINIO](https://min.io/) or [AWS](https://aws.amazon.com/s3/) and [Vault](https://www.vaultproject.io) for managing sensitive information.`,
            "install now": "Install now",
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
            "subTitle": "Mettez en commun votre puissance de calcul et fournissez un environnement de travail a l'état de l'art à vos datascientits sans dépendre de logiciels propiétaires des GAFAM.",
            "what is onyxia title": "Qu'est-ce qu'Onyxia?",
            "what is onyxia body": 
            `Onyxia est une application web qui s'installe sur un cluster [Kubernetes](https://kubernetes.io/).  
            Elle fournit à vos data scientistes une interface intuitive et agréable pour lancer des [containers](https://www.docker.com/) comme [Spark, RStudio ou Jupyter](https://datalab.sspcloud.fr/catalog/) à la demande
            et propose une intégration S3 ([MINIO](https://min.io/) ou [AWS](https://aws.amazon.com/s3/)) pour travailler avec la donnée et [Vault](https://www.vaultproject.io/) pour la géstion sécuisé des information sensibles.
            `,
            "install now": "Installer maintenant",
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
            "subTitle": "共享计算资源，提供一个状态最高的工作环境给您的数据科学家，而不依赖于大型的开源软件。",
            "what is onyxia title": "什么是Onyxia?",
            "what is onyxia body": "Onyxia是一个web应用程序，它安装在K8s集群上。它提供给您的数据科学家一个简单易用的界面，以便在需要的情况下启动容器，如Spark，RStudio或Jupyter。",
            "install now": "现在安装在您的K8s集群上",
        },
        "FourOhFour": {
            "not found": "网页未找到",
        },
        /* spell-checker: enable */
    },
});
