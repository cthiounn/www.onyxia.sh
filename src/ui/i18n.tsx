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
                "orange title": "The modern datascience stacks made accessible",
                "subTitle":
                    "Pool computing resources and provide a state of the art work environnement to your data scientists without relying on big tech closed-source software.",
                "what is onyxia title": "What's Onyxia?",
                "what is onyxia body": `Onyxia enables data scientist to work with modern could based technologies event 
                    if they are not well verse into computing.  
                    A it's core Onyxia is a web UI that turns a helm chart repo into a catalog of services.
                    Onyxia enables to provide your data scientist with a nice and intuitive interface for launching [containers](https://wwww.docker.com/) like [Spark, RStudio or Jupyter](https://datalab/sppcloud.fr/catalog).  
                    On top of that Onyxia features a tight S3 integration via [MINIO](https://min.io/) or [AWS](https://aws.amazon.com/s3/).`,
                "install now": "Access the deployment guide",
                "article 1 title": "Build your catalog of service or use the ones that comes builtins",
                "article 1 body": `Build a custom offer of service by setting up 
                    own depot of chart Helm. It's all [well documented](https://docs.onyxia.sh/contributing/catalog-of-services).  
                    You can also opt for using [the default catalog](https://datalab.sspcloud.fr/catalog).`,
                "article 2 title": `Services configurations`,
                "article 2 body": `Onyxia automatically generate a form from the Helm chart that enable users to configure their service.
                    As an Onyxia administrator you can also decide to pre fill some values based on what is known about the user.  
                    This mechanism enables for example to inject the correct ENV variables so that the user can easily connect to it's S3 bucket withing he's service.`,

                "article 3 title": `Versatile and secure authentication`,
                "article 3 body": `Onyxia is distributed with a Keycloak login theme. 
                    Easily restrict who can use your platform with an email domain accept list.`,


                "bp title 1": "We're not trying to lock you in, we're trying to free you out.",
                "bp description 1": `Onyxia make it very transparent what are the command executed on the 
                    cluster on the behalf of the user on the cluster. We're looking to build trust and 
                    understanding in the underlying technologies.`,

                "bp title 2": `An S3 file explorer`,
                "bp description 2": `Onyxia enables to drag and trop files to be uploaded on S3. The files 
                    are the readily accessible within the services`,

                "bp title 3": `[HashiCorp Vault](https://www.vaultproject.io) integration`,
                "bp description 3": `Onyxia pride a safe storage space for storing critical information like API KEYs.  
                    Theses sensitive information are injected in the service under the form of ENV variables.`,

                "bp title 4": `Apply your own branding`,
                "bp description 4": `Onyxia enables to customize the default look and information displayed there and there 
                    without having to change to fork the code. Look for example how different looks [this instance from Etalab](https://sill.etalab.gouv.fr/software)`,

                "bp title 5": "Great for education ",
                "bp description 5": `Onyxia enables you to generates links that stat a services just by clicking them.  
                    It can and is used to create training catalogs such as [this one](https://www.sspcloud.fr/formation).`,

                "bp title 6": "Technology agnostic",
                "bp description 6": `By making the choice of Onyxia you aren't gambling on one specific stack being the future of Data science.  
                Onyxia let you leverage any technology as long as it's cloud native (containerized using HTTP)`,

                "bp title 7": "Work groups",
                "bp description 7": "Multiple users can collaborate on a project, shares services and S3 buckets.",

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
                "it is free software": ({ licenseUrl, inseeUrl, etalabUrl }) => (
                    <>
                        Onyxia est un logiciel libre et open source{" "}
                        <MuiLink href={licenseUrl}>sous licence MIT</MuiLink>.<br/>
                        Ce logiciel est issu d'une collaboration entre l'<MuiLink href={inseeUrl}>INSEE</MuiLink> et <MuiLink href={etalabUrl}>Etalab</MuiLink>
                    </>
                ),
                "pricing": "Prix",
                "demo instance": "Instance de démonstration",
                "it is libre software": "C'est un logiciel libre",
                "ok": "D'accord",
                "edit this website": "Modifier ce site",
            },
            "Home": {
                "orange title": "La stack datascience moderne rendu accessible",
                "subTitle":
                    "Fournissez un environnement de travail à l'état de l'art à vos data scientists sans dépendre de logiciels propriétaires.",
                "what is onyxia title": "Qu'est-ce qu'Onyxia?",
                "what is onyxia body": `Onyxia est une application web qui permet aux 
                    datacientis d'acceder à un environement de travail a l'état 
                    de l'art même sans être très pointu en informatique.
                    Essenciellement, Onyxia trensforme un repo de chart [Helm](https://helm.sh) en un catalogue de services
                    configurable.  
                    Onyxia propose également une intégration avec S3.`,
                "install now": "Guide de déploiment",
                "article 1 title": "Construisez votre catalog ou réutilisez les nôtres",
                "article 1 body": `Construisez une offre de service sur mesure pour votre métier en metant en place 
                votre propre dépot de chart Helm ou réutilisez les nôtres: [interactive-services](https://github.com/InseeFrLab/helm-charts-interactive-services), [databases](https://github.com/InseeFrLab/helm-charts-databases), [automation](https://github.com/InseeFrLab/helm-charts-automation), ...`,
                "article 2 title": `Configuration des services`,
                "article 2 body": `Onyxia génére automatiquement un formulaire qui permet aux utilisateurs
                d'écraser les valeurs pas défault des \`values.yaml\` de vos charts Helm.
                Onyxia vous permet également de précisée des valeurs a préremplire spécifiquement
                pour l'utilisateur en question.
                Ce mecanisme permet notament a l'utilisateur d'être déjà autentifier a S3 et d'avoir acces
                a son bucket personel dès l'ouverture de Jupyter ou Rstudio.`,

                "article 3 title": `Un système d'autentification versatile`,
                "article 3 body": `Onyxia s'intègre avec Keycloak via openidconnect. Restraignez 
                    l'inscription aux services aux utilisateur détenteur d'une email d'un domaine spécifique.  
                    Onyxia est distribuer avec un theme Keycloak pour offrire une experience utilisateur 
                    homogène.`,

                "bp title 1": "Onyxia ne cherche pas a se rendre indispensable",
                "bp description 1": `Nous visons a rendre les utilisateurs de la plaforme sufisament 
                    famillier avec les technoliges sougeacente (Kuberneter, helm, S3...) pour pouvoir s'affranchire 
                    d'Onyxia.  Nous affichons les commandes  executer sur le cluster par le biais d'Onyxia.`,

                "bp title 2": `Un explorateur de fichier S3`,
                "bp description 2": `Onyxia permet de glisser déposer ses dataset pour les uploader sur S3.`,

                "bp title 3": `Integration avec [HashiCorp Vault](https://www.vaultproject.io)`,
                "bp description 3": `Onyxia permet de stoquer les informations sensibles de types 
                    clef d'API dans Vault et de les rendre accécible dans les services sous forme de variable`,

                "bp title 4": `Customizez l'apparence instance d'Onyxia`,
                "bp description 4": `Onyxia offre de nombreuse option de personalisations.
                    Modifiez le thème, le lien et le logo du header sans avoir a forker Onyxia. Mais uniquement
                    en modifiant les paramètre de votre instance.`,

                "bp title 5": "Un environement pour les travaux platiques",
                "bp description 5": `Onyxia permet de généré des liens de lancement de service.  
                    Cette fonctionalité peut être utilise pour crée des catalogue de formation comme [celui là](https://www.sspcloud.fr/formation).`,

                "bp title 6": "Technologiquement agnostique",
                "bp description 6": `Avec Onyxia vous n'investisez pas sur une stack technique en particulier.
                Onyxia permet de rendre accessible nimporte quelle technologie cloud native et ne génére 
                donc pas de potentielle dette technique future.`,

                "bp title 7": "Groupes de travails",
                "bp description 7": `Plusieurs utilisateurs peuvent colaborer sur un même projet,
                    partager des services et un même bucket s3`,

                "bp title 8": "Open source",
                "bp description 8": `Onyxia est un logiciel libre, 
                    [bien documenté](https://docs.onyxia.sh/) et sous [license MIT](https://github.com/InseeFrLab/onyxia-web/blob/main/LICENSE).
                    Sentez vous libre de [participer a son développement](https://docs.onyxia.sh/contributing)!`,
            },
            "FourOhFour": {
                "not found": "Page non trouvée",
            },
        },
    },
    /* spell-checker: enable */
);
