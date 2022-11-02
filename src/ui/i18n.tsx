import { createI18nApi } from "i18nifty";
import MuiLink from "@mui/material/Link";

export const languages = ["en", "fr"] as const;

export const fallbackLanguage = "fr";

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
                "it is libre software dialog title": "It's libre software",
                "it is libre software dialog body": ({ licenseUrl, inseeUrl, etalabUrl }) => (
                    <>
                        Onyxia is a free and open source software{" "}
                        <MuiLink href={licenseUrl}>released under the MIT license</MuiLink>.<br/>
                        This software is the result of a collaboration between the <MuiLink href={inseeUrl}>INSEE</MuiLink> and <MuiLink href={etalabUrl}>Etalab</MuiLink>
                    </>
                ),
                "pricing": "FLOSS",
                "demo instance": "Demo instance",
                "ok": "Ok",
                "edit this website": "Edit this website",
            },
            "Home": {
                "orange title": "The modern datascience stack made accessible",
                "subTitle":
                    "Pool computing resources and provide a state of the art work environment to your data scientists without relying on big tech closed-source software.",
                "what is onyxia title": "What is Onyxia?",
                "what is onyxia body": `Onyxia enables data scientists to work with modern cloud based technologies even 
                    if they are not well versed into computing.  
                    At its core Onyxia is a web UI that turns a helm chart repo into a catalog of services.
                    Onyxia enables to provide your data scientists with a nice and intuitive interface for launching [containers](https://wwww.docker.com/) like [Spark, RStudio or Jupyter](https://datalab/sppcloud.fr/catalog).  
                    On top of that Onyxia features a tight S3 integration via [MinIO](https://min.io/) or [Amazon S3](https://aws.amazon.com/s3/).`,
                "install now": "Access the deployment guide",
                "article 1 title": "Build your catalog of services or use the builtin one",
                "article 1 body": `Build a custom offer of services by setting up 
                    your own depot of Helm charts. All is [well documented](https://docs.onyxia.sh/contributing/catalog-of-services).  
                    You can also opt for using [the default catalog](https://datalab.sspcloud.fr/catalog).`,
                "article 2 title": `Services configurations`,
                "article 2 body": `Onyxia automatically generates a form from the Helm chart that enables users to configure their services.
                    As an Onyxia administrator you can also decide to pre fill some values based on what is known about the user.  
                    This mechanism enables for example to inject the correct environment variables so that the user can easily connect to his S3 bucket within his service.`,

                "article 3 title": `Versatile and secure authentication`,
                "article 3 body": `Onyxia is distributed with a Keycloak login theme. 
                    Easily restrict who can use your platform with an email domain accept list.`,


                "bp title 1": "We are not trying to lock you in, we are trying to free you out.",
                "bp description 1": `Onyxia makes it very transparent what are the command executed on the 
                    cluster on the behalf of the user. We are looking to build trust and 
                    understanding in the underlying technologies.`,

                "bp title 2": `S3 file explorer`,
                "bp description 2": `Onyxia enables to drag and drop files to be uploaded on S3. The files 
                    are then readily accessible within the services.`,

                "bp title 3": `[HashiCorp Vault](https://www.vaultproject.io) integration`,
                "bp description 3": `Onyxia provides a safe storage space for storing critical information like API keys.  
                    Theses sensitive information are injected in the services under the form of environment variables.`,

                "bp title 4": `Apply your own branding`,
                "bp description 4": `Onyxia enables to customize the default look and information displayed there and there 
                    without having to change to fork the code. Look for example how different looks [this instance from Etalab](https://sill.etalab.gouv.fr/software).`,

                "bp title 5": "Great for education ",
                "bp description 5": `Onyxia enables you to generate links that start a service just by clicking them.  
                    It is used to create training catalogs such as [this one](https://www.sspcloud.fr/formation).`,

                "bp title 6": "Technology agnostic",
                "bp description 6": `By making the choice of Onyxia you aren't gambling on one specific stack being the future of Data science.  
                Onyxia lets you leverage any technology as long as it is cloud native (containerized using HTTP).`,

                "bp title 7": "Work groups",
                "bp description 7": "Multiple users can collaborate on a project, share services and S3 buckets.",

                "bp title 8": "Open source",
                "bp description 8": `Onyxia is fully open source and well documented. Feel free to [get involved in the development](https://docs.onyxia.sh/contributing)!`
                
            },
            "FourOhFour": {
                "not found": "Page not found",
            },
        },
        /* spell-checker: disable */
        "fr": {
            "App": {
                "contact": "Contacter l'équipe",
                "documentation": "Documentation",
                "it is libre software dialog title": "C'est un logiciel libre",
                "it is libre software dialog body": ({ licenseUrl, inseeUrl, etalabUrl }) => (
                    <>
                        Onyxia est un logiciel libre et open source{" "}
                        <MuiLink href={licenseUrl}>sous licence MIT</MuiLink>.<br/>
                        Ce logiciel est issu d'une collaboration entre l'<MuiLink href={inseeUrl}>INSEE</MuiLink> et <MuiLink href={etalabUrl}>Etalab</MuiLink>
                    </>
                ),
                "pricing": "FLOSS",
                "demo instance": "Instance de démonstration",
                "ok": "D'accord",
                "edit this website": "Modifier ce site",
            },
            "Home": {
                "orange title": "La stack data science moderne rendue accessible",
                "subTitle":
                    "Fournissez un environnement de travail à l'état de l'art à vos data scientists sans dépendre de logiciels propriétaires.",
                "what is onyxia title": "Qu'est-ce qu'Onyxia?",
                "what is onyxia body": `Onyxia est une application web qui permet aux 
                    data scientists d'accéder à un environnement de travail a l'état 
                    de l'art même sans être très pointu en informatique.
                    Essentiellement, Onyxia transforme un repo de charts [Helm](https://helm.sh) en un catalogue de services
                    configurables et configurés automatiquement.  
                    Onyxia propose également une intégration avec S3.`,
                "install now": "Guide de déploiment",
                "article 1 title": "Construisez votre catalogue ou réutilisez les nôtres",
                "article 1 body": `Construisez une offre de services sur mesure pour votre métier en mettant en place 
                votre propre dépôt de charts Helm ou réutilisez les nôtres : [interactive-services](https://github.com/InseeFrLab/helm-charts-interactive-services), [databases](https://github.com/InseeFrLab/helm-charts-databases), [automation](https://github.com/InseeFrLab/helm-charts-automation), ...`,
                "article 2 title": `Configuration des services`,
                "article 2 body": `Onyxia génère automatiquement un formulaire qui permet aux utilisateurs
                d'écraser les valeurs pas défaut des \`values.yaml\` de vos charts Helm.
                Onyxia vous permet également de préciser des valeurs à préremplir spécifiquement
                pour l'utilisateur en question.
                Ce mécanisme permet notamment à l'utilisateur d'être déjà authentifié à S3 et d'avoir accès
                à son bucket personel dès l'ouverture de Jupyter ou RStudio.`,

                "article 3 title": `Un système d'authentification versatile`,
                "article 3 body": `Onyxia s'intègre avec Keycloak via OpenID Connect. Restreignez 
                    l'inscription aux services aux utilisateurs détenteurs d'un email d'un domaine spécifique.  
                    Onyxia est distribué avec un thème Keycloak pour offrir une expérience utilisateur 
                    homogène.`,

                "bp title 1": "Onyxia ne cherche pas à se rendre indispensable",
                "bp description 1": `Nous visons à rendre les utilisateurs de la plateforme suffisamment 
                    familiers avec les technologies sous-jacentes (Kubernetes, helm, S3...) pour pouvoir s'affranchir 
                    d'Onyxia.  Nous affichons les commandes exécutées sur le cluster, sur S3, sur Vault par le biais d'Onyxia.`,

                "bp title 2": `Un explorateur de fichiers S3`,
                "bp description 2": `Onyxia permet de glisser déposer ses jeux de données pour les uploader sur S3.`,

                "bp title 3": `Intégration avec [HashiCorp Vault](https://www.vaultproject.io)`,
                "bp description 3": `Onyxia permet de stocker les informations sensibles de type 
                    clés d'API dans Vault et de les rendre accessibles dans les services sous forme de variable.`,

                "bp title 4": `Personnalisez l'apparence d'Onyxia`,
                "bp description 4": `Onyxia offre de nombreuses options de personalisation.
                    Modifiez le thème, le lien et le logo de l'entête sans avoir à toucher au code source d'Onyxia. Mais uniquement
                    en modifiant les paramètres de votre instance.`,

                "bp title 5": "Un environement de formation",
                "bp description 5": `Onyxia permet de générer des liens de lancement de service.  
                    Cette fonctionalité peut être utilisée pour créer des catalogues de formations comme [celui-là](https://www.sspcloud.fr/formation).`,

                "bp title 6": "Technologiquement agnostique",
                "bp description 6": `Avec Onyxia vous n'investissez pas sur une stack technique en particulier sauf kubernetes et S3.
                Onyxia permet de rendre accessible n'importe quelle technologie cloud native et ne génére 
                donc pas de potentielle dette technique future.`,

                "bp title 7": "Projets",
                "bp description 7": `Plusieurs utilisateurs peuvent collaborer sur un même projet,
                    partager des services et un même bucket S3`,

                "bp title 8": "Open source",
                "bp description 8": `Onyxia est un logiciel libre, 
                    [bien documenté](https://docs.onyxia.sh/) et sous [license MIT](https://github.com/InseeFrLab/onyxia-web/blob/main/LICENSE).
                    Sentez-vous libre de [participer a son développement](https://docs.onyxia.sh/contributing)!`,
            },
            "FourOhFour": {
                "not found": "Page non trouvée",
            },
        },
    },
    /* spell-checker: enable */
);
