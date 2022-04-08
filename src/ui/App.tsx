import { useEffect, useMemo, memo } from "react";
import { useRoute } from "./router";
import { FourOhFour } from "./pages/FourOhFour";
import { GlTemplate } from "gitlanding/GlTemplate";
import { useSplashScreen } from "onyxia-ui";
import { Home } from "./pages/Home";
import { GlHeader } from "gitlanding/GlHeader";
import { useTranslation } from "ui/i18n/useTranslations";
import { makeStyles, Text } from "ui/theme";
import { ReactComponent as OnyxiaLogoSvg } from "ui/assets/svg/OnyxiaLogo.svg";
import { useConstCallback } from "powerhooks/useConstCallback";
import { routes } from "ui/router";
import { LanguageSelect } from "ui/theme";
import { useLng } from "ui/i18n/useLng";
//import { Dialog } from "onyxia-ui/Dialog";

// https://docs.gitlanding.dev/creating-a-page

const githubRepoUrl= "https://github.com/InseeFrLab/onyxia-web";

/* spell-checker: disable */
export const App = memo(() => {
    const route = useRoute();

    const { lng, setLng } = useLng();

    {
        const { hideRootSplashScreen } = useSplashScreen();

        useEffect(() => {
            hideRootSplashScreen();
        }, []);
    }

    const { t } = useTranslation({ App });

    const pageNode = useMemo(() => {
        {
            const Page = Home;

            if (Page.routeGroup.has(route)) {
                return <Page />;
            }
        }

        return <FourOhFour />;
    }, [route]);

    const { classes } = useStyles();

    const onLogoClick = useConstCallback(() => routes.home().push());

    return (
        <GlTemplate
            header={
                <GlHeader
                    title={
                        <div className={classes.header} onClick={onLogoClick}>
                            <OnyxiaLogoSvg className={classes.logo} />
                            <div
                                onClick={onLogoClick}
                                className={classes.headerMainTextContainer}
                            >
                                <Text
                                    typo="section heading"
                                    className={classes.headerOnyxiaText}
                                >
                                    Onyxia
                                </Text>
                                <Text
                                    typo="section heading"
                                    className={classes.headerDatalabText}
                                >
                                    Datalab
                                </Text>
                            </div>
                        </div>
                    }
                    links={[
                        {
                            "label": "GitHub",
                            "href": githubRepoUrl
                        },
                        {
                            "label": t("install"),
                            "href": "https://github.com/InseeFrLab/onyxia/tree/master/step-by-step",
                        },
                        {
                            "label": t("pricing"),
                            "onClick": () => {
                                alert(t("paid for by French taxpayers"));
                            },
                            "href": "#",
                        },
                        {
                            "label": t("try it"),
                            "href": "https://datalab.sspcloud.fr/catalog",
                        },
                    ]}
                    enableDarkModeSwitch={true}
                    githubRepoUrl={githubRepoUrl}
                    githubButtonSize="large"
                    showGithubStarCount={true}
                    customItemEnd={
                        <LanguageSelect 
                        language={lng}
                        onLanguageChange={setLng}
                        variant="big"
                        />
                    }
                />
            }
            headerOptions={{
                "position": "fixed",
                "isRetracted": "smart",
            }}
        >
            {pageNode}
        </GlTemplate>
    );
});

export declare namespace App {
    export type I18n = {
        install: undefined;
        pricing: undefined;
        "paid for by French taxpayers": undefined;
        "try it": undefined;
        
    };
}

const useStyles = makeStyles({ "name": { App } })(theme => ({
    "header": {
        "display": "flex",
        "cursor": "pointer",
    },
    "logoContainer": {
        "cursor": "pointer",
    },
    "logo": {
        "fill": theme.colors.useCases.typography.textFocus,
        "width": 33,
    },
    "headerMainTextContainer": {
        "cursor": "pointer",
        "& > *": {
            "display": "inline",
        },
    },
    "headerOnyxiaText": {
        ...theme.spacing.rightLeft("margin", 2),
    },
    "headerDatalabText": {
        //...theme.spacing.rightLeft("margin", 2),
        "fontWeight": 600,
        "color": theme.colors.useCases.typography.textFocus,
    },
}));

/*
const { } = (() => {




})();
*/
