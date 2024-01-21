import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useState } from 'react';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import classes from './Sidebar.module.scss';
import { ThemeSwitcher } from '../../../ThemeSwitcher';

export interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    const [collapsed, setCollapsed] = useState<boolean>(true);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={classNames(
                classes.Sidebar,
                { [classes.collapsed]: collapsed },
                [className],
            )}
        >
            <button onClick={onToggle} type="button">{t('toggle')}</button>
            <div className={classes.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={classes.lang} />
            </div>
        </div>
    );
};
