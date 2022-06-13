import { createI18nApi } from "i18nifty";
import MuiLink from "@mui/material/Link";

export const languages = ["en", "fr"] as const;

export const fallbackLanguage = "en";

export type Language = typeof languages[number];

export const {
    useTranslation,
    resolveLocalizedString,
    useLang,
    useResolveLocalizedString,
} = createI18nApi<
    | typeof import("./App").i18n
    | typeof import("./pages/Home").i18n
    | typeof import("./pages/FourOhFour").i18n
>()(
    {
        languages,
        fallbackLanguage,
    },
    {
        "en": {
            "App": {
                "install": "Install",
                "it is free software": ({ licenseUrl }) => (
                    <>
                        Onyxia is free and open source software{" "}
                        <MuiLink href={licenseUrl}>under MIT license</MuiLink>
                    </>
                ),
                "pricing": "Pricing",
                "try it": "Try it",
                "it is libre software": "It is libre software",
                "ok": "Ok",
                "edit this website": "Edit this website",
            },
            "Home": {
                "orange title": "The data oriented cloud platform",
                "subTitle":
                    "Pool computing resources and provide a state of the art work environnement to your data scientists without relying on big tech closed-source software.",
                "what is onyxia title": "What's Onyxia?",
                "what is onyxia body": `Onyxia is a web app that installs on [Kubernetes](https://hubernetes.io) cluster.  
                It provides to your data scientist a nice and intuitive interface to launch on demand [containers](https://wwww.docker.com/) like [Spark, RStudio or Jupyter](https://datalab/sppcloud.fr/catalog) on demand.  
                On top of that Onyxia features a tight S3 integration via [MINIO](https://min.io/) or [AWS](https://aws.amazon.com/s3/) and [Vault](https://www.vaultproject.io) for managing sensitive information.`,
                "install now": "Install now",
                "article UI title": "An interface for launching data services",
                "article UI body": `Deploy services and tools on demand with advanced customization options (e.g: Jupyter, RStudio) on a Kubernetes cluster.
A default catalog of services is available but you can chosse to create your own.`,

                "article data title": "Features data storage",
                "article data body": `Propose a S3-compatible file explorer for object storage. 
		Stored files are easily accessible via a simple URL, which can be shared, or directly from datalab services 
		for better reproducibility of analyses.`,
                "article envs title": "Store and manage  environment variables",
                "article envs body": `Store and manage sensitive environment variables, database credentials, 
		API keys, etc. In addition to being able to store secrets, decrypt data stored elsewhere. `,
                "article auth title": "Authentication and authorization",
                "article auth body": `Users can create their own accounts and authenticate with their own credentials.`,
                "and much more": "And much more...",
                "bp title 1": "bullet point title 1",
                "bp description 1": "bullet point body 1",
                "bp title 2": "bullet point title 2",
                "bp description 2": "bullet point body 2",
                "bp title 3": "bullet point title 3",
                "bp description 3": "bullet point body 3",
                "bp title 4": "bullet point title 4",
                "bp description 4": "bullet point body 4",
                "bp title 5": "bullet point title 5",
                "bp description 5": "bullet point body 5",
                "bp title 6": "bullet point title 6",
                "bp description 6": "bullet point body 6",
                "datalab core features": "Datalab core features",
                "fundamental principles": "Fundamental principles",
                "fundamental principe 1": "Production oriented",
                "fundamental principe 2": "No proprietary lock-in",
                "fundamental principe 3": "Deploy easily on Kubernetes",
                "fundamental principe 4": "100% cloud-native",
                "fundamental principe 5": "100% open source",
                "fundamental principe 6": "User friendly",
                "youtube video title": "Hands-on with Onyxia",

                "card 1 title": "Read and contribute",
                "card 1 paragraph": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis luctus auctor. 
		Pellentesque quis molestie tellus, ac laoreet arcu. Fusce egestas fermentum convallis.`,
                "card 1 button label": "See the Github Repository",
                "card 2 title": "...",
                "card 2 paragraph": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis luctus auctor. 
		Pellentesque quis molestie tellus, ac laoreet arcu. Fusce egestas fermentum convallis.`,
                "card 2 button label": "...",
                "card 3 title": "...",
                "card 3 paragraph": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Duis mattis luctus auctor. Pellentesque quis molestie tellus, ac laoreet arcu. Fusce egestas fermentum convallis.`,
                "card 3 button label": "...",
            },
            "FourOhFour": {
                "not found": "Page not found",
            },
        },
        /* spell-checker: disable */
        "fr": {
            "App": {
                "install": "Installer",
                "it is free software": ({ licenseUrl }) => (
                    <>
                        Onyxia est un logiciel libre et open source{" "}
                        <MuiLink href={licenseUrl}>sous licence MIT</MuiLink>
                    </>
                ),
                "pricing": "Prix",
                "try it": "Demo",
                "it is libre software": "C'est un logiciel libre",
                "ok": "D'accord",
                "edit this website": "Modifier ce site",
            },
            "Home": {
                "orange title": "La plate-forme cloud orientée données",
                "subTitle":
                    "Mettez en commun votre puissance de calcul et fournissez un environnement de travail a l'état de l'art à vos data scientist sans dépendre de logiciels propiétaires.",
                "what is onyxia title": "Qu'est-ce qu'Onyxia?",
                "what is onyxia body": `Onyxia est une application web qui s'installe sur un cluster [Kubernetes](https://kubernetes.io/).  
            Elle fournit à vos data scientist une interface intuitive et agréable pour lancer des [containers](https://www.docker.com/) comme [Spark, RStudio ou Jupyter](https://datalab.sspcloud.fr/catalog/) à la demande
            et propose une intégration S3 ([MINIO](https://min.io/) ou [AWS](https://aws.amazon.com/s3/)) pour travailler avec la donnée et [Vault](https://www.vaultproject.io/) pour la gestion sécurisée des informations sensibles.
            `,
                "install now": "Installer maintenant",
                "article UI title": "Une interface pour lancer des services data",
                "article UI body": `Deployez des services et des outils à la demande avec des options de personnalisation avancées (e.g: Jupyter, RStudio) sur un cluster Kubernetes.
				Un catalogue de service par défaut est disponible mais vous pouvez choisir de créer le vôtre.`,
                "article data title": undefined,
                "article data body": undefined,
                "article envs title": undefined,
                "article envs body": undefined,
                "article auth title": "Authentification et autorisation",
                "article auth body": undefined,
                "and much more": "Et bien plus...",
                "bp title 1": undefined,
                "bp description 1": undefined,
                "bp title 2": undefined,
                "bp description 2": undefined,
                "bp title 3": undefined,
                "bp description 3": undefined,
                "bp title 4": undefined,
                "bp description 4": undefined,
                "bp title 5": undefined,
                "bp description 5": undefined,
                "bp title 6": undefined,
                "bp description 6": undefined,
                "datalab core features": "Fonctionalitée essentielle du datalab",
                "fundamental principles": "Fundamental principles",
                "fundamental principe 1": "Production oriented",
                "fundamental principe 2": "No proprietary lock-in",
                "fundamental principe 3": "Deploy easily on Kubernetes",
                "fundamental principe 4": "100% cloud-native",
                "fundamental principe 5": "100% open source",
                "fundamental principe 6": "User friendly",
                "youtube video title": "Prise en main d'Onyxia",
                "card 1 title": undefined,
                "card 1 paragraph": undefined,
                "card 1 button label": undefined,
                "card 2 title": undefined,
                "card 2 paragraph": undefined,
                "card 2 button label": undefined,
                "card 3 title": undefined,
                "card 3 paragraph": undefined,
                "card 3 button label": undefined,
            },
            "FourOhFour": {
                "not found": "Page non trouvée",
            },
        },
    },
    /* spell-checker: enable */
);
