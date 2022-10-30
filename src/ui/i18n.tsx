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
                "contact": "Contact us",
                "documentation": "Documentation",
                "it is free software": ({ licenseUrl, inseeUrl, etalabUrl }) => (
                    <>
                        Onyxia is free and open source software{" "}
                        <MuiLink href={licenseUrl}>released under the MIT license</MuiLink>.<br/>
                        This software is the result of a collaboration between the <MuiLink href={inseeUrl}>INSEE</MuiLink> and <MuiLink href={etalabUrl}>Etalab</MuiLink>
                    </>
                ),
                "pricing": "Pricing",
                "demo instance": "Demo instance",
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
                "install now": "Guide de déploiment",
                "article 1 title": "Construisez votre catalog ou réutilisez le nôtre",
                "article 1 body": `Construisez une offre de service sur mesure pour votre métier en metant en place 
                votre propre dépot de chart Helm ou réutilisez le nôtre.  
                Onyxia transforme un repo Helm en un catalog de service.`,
                "article 2 title": `Configuration des services`,
                "article 2 body": `Onyxia génére automatiquement un formulaire qui permet aux utilisateur 
                d'écraser les valeurs pas défault des \`values.yaml\` de vos chart helm.
                Onyxia vous permet également de précisée des valeurs a préremplire spécifiquement
                pour l'utilisateur en question.
                Ce mecanisme permet notament a l'utilisateur d'être déjà autentifier a S3 et d'avoir acces
                a son bucket personel dès l'ouverture de Jupyter ou Rstudio.`,
                "article 3 title": `Un système d'autentification versatile`,
                "article 3 body": `Onyxia s'intègre avec Keycloak via openidconnect. Restraignez 
                l'inscription aux services aux utilisateur détenteur d'une email d'un domaine spécifique.  
                Onyxia est distribuer avec un theme Keycloak pour offrire une experience utilisateur 
                homogène.`,
                "bp title 1": "Libre",
                "bp description 1": `Onyxia est un logiciel libre sous licence MIT`,
                "bp title 2": "Technologiquement agnostique",
                "bp description 2": `Avec Onyxia vous n'investisez pas sur une stack technique en particulier.
                Onyxia permet de rendre accessible nimporte quelle technologie cloud native et ne génére 
                donc pas de potentielle dette technique future.  
                `,
                "bp title 3": "Onyxia ne cherche pas a se rendre indispensable",
                "bp description 3": `Nous visons a rendre les utilisateurs de la plaforme sufisament 
                famillier avec les technoliges sougeacente (Kuberneter, helm, S3...) pour pouvoir s'affranchire 
                d'Onyxia.  Nous affichons les commandes  executer sur le cluster par le biais d'Onyxia.`,
                "bp title 4": `Un explorateur de fichier S3`,
                "bp description 4": `Onyxia permet de glisser déposer ses dataset pour les uploader sur S3.`,
                "bp title 5": `Integration avec Vault`,
                "bp description 5": `Onyxia permet de stoquer les informations sensibles de types 
                clef d'API dans Vault et de les rendre accécible dans les services sous forme de variable
                d'environement.`,
                "bp title 6": `Customisation cosmétique`,
                "bp description 6": `Onyxia offre de nombreuse option de personalisations.
                Modifiez le thème, le lien et le logo du header sans avoir a forker Onyxia. Mais uniquement
                en modifiant les paramètre de votre instance.`,
            },
            "FourOhFour": {
                "not found": "Page not found",
            },
        },
        /* spell-checker: disable */
        "fr": {
            "App": {
                "contact": "Contact us",
                "documentation": "Documentation",
                "it is free software": ({ licenseUrl, inseeUrl, etalabUrl }) => (
                    <>
                        Onyxia is free and open source software{" "}
                        <MuiLink href={licenseUrl}>released under the MIT license</MuiLink>.<br/>
                        This software is the result of a collaboration between the <MuiLink href={inseeUrl}>INSEE</MuiLink> and <MuiLink href={etalabUrl}>Etalab</MuiLink>
                    </>
                ),
                "pricing": "Pricing",
                "demo instance": "Demo instance",
                "it is libre software": "It is libre software",
                "ok": "Ok",
                "edit this website": "Edit this website",
            },
            "Home": {
                "orange title": "La plate-forme cloud orientée données",
                "subTitle":
                    "Fournissez un environnement de travail à l'état de l'art à vos data scientists sans dépendre de logiciels propriétaires.",
                "what is onyxia title": "Qu'est-ce qu'Onyxia?",
                "what is onyxia body": `Une webapp [Kubernetes](https://kubernetes.io/) qui vous
                    permet de fournir a vos data scientists une interface intuitive et agréable pour lancer des services orienté data comme [Spark, RStudio ou Jupyter](https://datalab.sspcloud.fr/catalog/). 
                    Onyxa prevoit aussi une integration avec un stockage S3 ([MinIO](https://min.io/) ou 
                    [Amazon S3](https://aws.amazon.com/s3/)) et avec [Vault](https://www.vaultproject.io/) pour la 
                    gestion sécurisée des informations sensibles.`,
                "install now": "Guide de déploiment",
                "article 1 title": "Construisez votre catalog ou réutilisez le nôtre",
                "article 1 body": `Construisez une offre de service sur mesure pour votre métier en metant en place 
                votre propre dépot de chart Helm ou réutilisez le nôtre.  
                Onyxia transforme un repo Helm en un catalog de service.`,
                "article 2 title": `Configuration des services`,
                "article 2 body": `Onyxia génére automatiquement un formulaire qui permet aux utilisateur 
                d'écraser les valeurs pas défault des \`values.yaml\` de vos chart helm.
                Onyxia vous permet également de précisée des valeurs a préremplire spécifiquement
                pour l'utilisateur en question.
                Ce mecanisme permet notament a l'utilisateur d'être déjà autentifier a S3 et d'avoir acces
                a son bucket personel dès l'ouverture de Jupyter ou Rstudio.`,
                "article 3 title": `Un système d'autentification versatile`,
                "article 3 body": `Onyxia s'intègre avec Keycloak via openidconnect. Restraignez 
                l'inscription aux services aux utilisateur détenteur d'une email d'un domaine spécifique.  
                Onyxia est distribuer avec un theme Keycloak pour offrire une experience utilisateur 
                homogène.`,
                "bp title 1": "Libre",
                "bp description 1": `Onyxia est un logiciel libre sous licence MIT`,
                "bp title 2": "Technologiquement agnostique",
                "bp description 2": `Avec Onyxia vous n'investisez pas sur une stack technique en particulier.
                Onyxia permet de rendre accessible nimporte quelle technologie cloud native et ne génére 
                donc pas de potentielle dette technique future.  
                `,
                "bp title 3": "Onyxia ne cherche pas a se rendre indispensable",
                "bp description 3": `Nous visons a rendre les utilisateurs de la plaforme sufisament 
                famillier avec les technoliges sougeacente (Kuberneter, helm, S3...) pour pouvoir s'affranchire 
                d'Onyxia.  Nous affichons les commandes  executer sur le cluster par le biais d'Onyxia.`,
                "bp title 4": `Un explorateur de fichier S3`,
                "bp description 4": `Onyxia permet de glisser déposer ses dataset pour les uploader sur S3.`,
                "bp title 5": `Integration avec Vault`,
                "bp description 5": `Onyxia permet de stoquer les informations sensibles de types 
                clef d'API dans Vault et de les rendre accécible dans les services sous forme de variable
                d'environement.`,
                "bp title 6": `Customisation cosmétique`,
                "bp description 6": `Onyxia offre de nombreuse option de personalisations.
                Modifiez le thème, le lien et le logo du header sans avoir a forker Onyxia. Mais uniquement
                en modifiant les paramètre de votre instance.`,
            },
            "FourOhFour": {
                "not found": "Page non trouvée",
            },
        },
    },
    /* spell-checker: enable */
);
