import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';
import classes from './Navbar.module.scss';

export interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(classes.Navbar, {}, [className])}>
            <div className={classes.links}>
                <AppLink
                    to="/"
                    theme={AppLinkTheme.SECONDARY}
                    className={classes.mainLink}
                >
                    {t('mainPage')}
                </AppLink>
                <AppLink to={RoutePath.about} theme={AppLinkTheme.SECONDARY}>
                    {t('aboutPage')}
                </AppLink>
            </div>
        </div>
    );
};
